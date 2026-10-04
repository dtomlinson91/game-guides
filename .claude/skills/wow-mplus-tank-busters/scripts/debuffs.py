#!/usr/bin/python3
"""Find enemy debuffs on the tank that overlap: re-applied before they fall off, so they stack or
never drop.

Usage:
  /usr/bin/python3 debuffs.py <dungeon_dir> [--min-apps N] [--all] [--json <out.json>] [--timeline <name>]

  --min-apps N      skip debuffs with fewer than N applications over all runs. Default 5.
  --all             list every debuff, not only those that were re-applied while up.
  --json <path>     also write the table as JSON.
  --timeline <name> print every window of one debuff (by name), with its casters and stacks.

<dungeon_dir> holds one sub-directory per run, named <reportCode>_<fightID>, with:
  meta.json      the same file analyse.py reads (fights, dungeonPulls, playerDetails, masterData)
  debuffs*.json  Debuffs events on the tank: dataType Debuffs, hostilityType Friendlies,
                 filterExpression "target.name = '<tank>'"
  dt*.json       optional: the DamageTaken files analyse.py reads. Used to find which mob instance
                 applied each stack, because the debuff events name only the first applier.

A window is one continuous uptime, from applydebuff to removedebuff. An application is an
applydebuff, an applydebuffstack, or a refreshdebuff on its own. A re-application lands while the
window is open. The natural duration is the median length of windows with one application.
"""
import json, os, sys, glob, statistics as st, collections

CHAIN = 1.5      # a window longer than CHAIN x natural duration was kept up by re-applications
MATCH_MS = 300   # a hit this close to an application is the hit that applied it


def load(path):
    d = json.load(open(path))
    if isinstance(d, list) and d and isinstance(d[0], dict) and 'text' in d[0]:
        d = json.loads(d[0]['text'])
    return d


def find(obj, key):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == key:
                yield v
            yield from find(v, key)
    elif isinstance(obj, list):
        for v in obj:
            yield from find(v, key)


def events(rundir, pattern):
    out = []
    for p in sorted(glob.glob(os.path.join(rundir, pattern))):
        d = load(p)
        for evs in find(d, 'data'):
            if isinstance(evs, list) and evs and isinstance(evs[0], dict) and 'timestamp' in evs[0]:
                out.extend(evs)
    return sorted(out, key=lambda e: e['timestamp'])


def pct(xs, q):
    xs = sorted(xs)
    return xs[min(len(xs) - 1, int(q * len(xs)))] if xs else None


def run(rundir):
    m = load(os.path.join(rundir, 'meta.json'))
    fight = next(find(m, 'fights'))[0]
    pulls = fight.get('dungeonPulls') or []
    actors = next(find(m, 'actors'), [])
    npc = {a['id']: a['name'] for a in actors}
    abil = {a['gameID']: a['name'] for a in next(find(m, 'abilities'), [])}
    deb = [e for e in events(rundir, 'debuffs*.json') if e.get('sourceID') in npc]
    hits = [e for e in events(rundir, 'dt*.json') if e.get('type') == 'damage' and e.get('sourceID') in npc]

    def pull_of(ts):
        for p in pulls:
            if p['startTime'] - 2000 <= ts <= p['endTime'] + 2000:
                return 'boss' if p.get('encounterID') else 'trash'
        return 'other'

    def caster(ts, name):
        best = None
        for h in hits:
            if abs(h['timestamp'] - ts) > MATCH_MS:
                continue
            same = abil.get(h['abilityGameID']) == name
            key = (0 if same else 1, abs(h['timestamp'] - ts))
            if best is None or key < best[0]:
                best = (key, (npc.get(h['sourceID']), h.get('sourceInstance', 1)))
        return best[1] if best and best[0][0] == 0 else None

    # A debuff is either one shared aura that every caster adds stacks to (Shield Bash), or one
    # copy per caster. Track copies by (source, instance). A window lasts while any copy is up.
    wins = collections.defaultdict(list)   # ability ID -> windows
    open_ = {}                             # ability ID -> window
    for e in deb:
        g, t, ts = e['abilityGameID'], e['type'], e['timestamp']
        name = abil.get(g, str(g))
        key = (e['sourceID'], e.get('sourceInstance', 1))
        w = open_.get(g)
        if t == 'applydebuff':
            if w is None:
                w = open_[g] = dict(name=name, start=ts, end=None, apps=[], stack=0, copies={},
                                    parallel=1, removestack=0, src=set(), kind=pull_of(ts), casters=[])
            w['copies'][key] = 1
            w['parallel'] = max(w['parallel'], len(w['copies']))
            w['apps'].append(ts)
            w['casters'].append(caster(ts, name))
        elif w is None:
            continue
        elif t == 'applydebuffstack':
            w['copies'][key if key in w['copies'] or len(w['copies']) != 1 else next(iter(w['copies']))] = e.get('stack', 1)
            w['apps'].append(ts)
            w['casters'].append(caster(ts, name))
        elif t == 'refreshdebuff':
            if not any(abs(ts - a) <= 5 for a in w['apps']):
                w['apps'].append(ts)
                w['casters'].append(caster(ts, name))
        elif t == 'removedebuffstack':
            w['removestack'] += 1
            k = key if key in w['copies'] else next(iter(w['copies']))
            w['copies'][k] = e.get('stack', max(1, w['copies'][k] - 1))
        elif t == 'removedebuff':
            w['copies'].pop(key if key in w['copies'] else next(iter(w['copies'])), None)
            if not w['copies']:
                w['end'] = ts
                wins[g].append(open_.pop(g))
        w['src'].add(npc.get(e['sourceID']))
        w['stack'] = max(w['stack'], sum(w['copies'].values()))
    for g, w in open_.items():
        w['end'] = fight['endTime']
        wins[g].append(w)
    return wins


def main():
    a = sys.argv[1:]
    d = a[0]
    min_apps = int(a[a.index('--min-apps') + 1]) if '--min-apps' in a else 5
    tl = a[a.index('--timeline') + 1] if '--timeline' in a else None
    allw = collections.defaultdict(list)
    for rd in sorted(glob.glob(os.path.join(d, '*_*/'))):
        if not os.path.exists(os.path.join(rd, 'meta.json')):
            continue
        tag = os.path.basename(rd.rstrip('/'))
        for g, ws in run(rd).items():
            for w in ws:
                w['run'] = tag
            allw[g].extend(ws)

    rows = []
    for g, ws in allw.items():
        name = ws[0]['name']
        apps = sum(len(w['apps']) for w in ws)
        if apps < min_apps:
            continue
        lens = [(w['end'] - w['start']) / 1000 for w in ws if w['end']]
        single = [(w['end'] - w['start']) / 1000 for w in ws if w['end'] and len(w['apps']) == 1]
        natural = st.median(single) if single else None
        reapp = apps - len(ws)
        multi = [w for w in ws if len(w['apps']) > 1]
        chained = [w for w in ws if natural and w['end'] and (w['end'] - w['start']) / 1000 > CHAIN * natural]
        gaps = [(b - a_) / 1000 for w in ws for a_, b in zip(w['apps'], w['apps'][1:])]
        ncast = [len({c for c in w['casters'] if c}) for w in multi]
        rows.append(dict(
            name=name, id=g, runs=len({w['run'] for w in ws}), windows=len(ws), apps=apps,
            reapplied=reapp, reapplied_pct=round(100 * reapp / apps), max_stack=max(w['stack'] for w in ws),
            stacks_p90=pct([w['stack'] for w in ws], 0.9), natural_s=natural and round(natural, 1),
            longest_s=round(max(lens), 1) if lens else None, chained=len(chained),
            chained_runs=len({w['run'] for w in chained}),
            gap_median_s=round(st.median(gaps), 1) if gaps else None,
            expires_per_stack=sum(w['removestack'] for w in ws) > 0,
            casters_max=max(ncast) if ncast else 0,
            parallel_max=max(w['parallel'] for w in ws),
            kinds=dict(collections.Counter(w['kind'] for w in ws)),
            sources=sorted({s for w in ws for s in w['src'] if s}),
            caster_mobs=sorted({c[0] for w in ws for c in w['casters'] if c}),
        ))
    rows.sort(key=lambda r: (-r['chained'], -r['reapplied_pct'], -r['max_stack']))
    if '--all' not in a:
        rows = [r for r in rows if r['reapplied'] > 0]

    print(f'{"debuff":28} {"id":>8} runs  apps reapp  maxStk natural longest chained(runs) casters  where')
    for r in rows:
        print(f'{r["name"][:28]:28} {r["id"]:>8} {r["runs"]:>4} {r["apps"]:>5} {r["reapplied_pct"]:>4}%  '
              f'{r["max_stack"]:>4}   {str(r["natural_s"]):>6}s {str(r["longest_s"]):>6}s '
              f'{r["chained"]:>4} ({r["chained_runs"]})   {r["casters_max"]:>3}    {r["kinds"]}')
        print(f'{"":28} casters: {", ".join(r["caster_mobs"]) or "?"} | logged source: {", ".join(r["sources"])}'
              f'{" | stacks expire one by one" if r["expires_per_stack"] else ""}'
              + (' | up to %d separate copies' % r['parallel_max'] if r['parallel_max'] > 1 else ''))
    if '--json' in a:
        json.dump(rows, open(a[a.index('--json') + 1], 'w'), indent=1, ensure_ascii=False)

    if tl:
        for g, ws in allw.items():
            if ws[0]['name'] != tl:
                continue
            print(f'\nTIMELINE {tl} ({g})')
            for w in ws:
                if len(w['apps']) < 2:
                    continue
                rel = [round((t - w['start']) / 1000, 1) for t in w['apps']]
                cs = [f'{c[0]}#{c[1]}' if c else '?' for c in w['casters']]
                print(f'  {w["run"]} {w["kind"]} len {(w["end"] - w["start"]) / 1000:.1f}s stacks {w["stack"]} '
                      f'apps at {rel} by {cs}')


if __name__ == '__main__':
    main()
