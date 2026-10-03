#!/usr/bin/python3
"""Find enemy abilities that hit a tank hard enough to need a major defensive.

Usage:
  /usr/bin/python3 analyse.py <dungeon_dir> [--mode trash|boss] [--ids] [--json <out.json>] [--majors <id,id,...>]

  --mode trash   trash pulls only (encounterID 0), boss actors skipped. Default.
  --mode boss    boss pulls only (encounterID set), bosses and their adds included.
  --ids          print the candidate ability IDs, plus every ability ID that shares a name,
                 for the phase 2 casts query. Nothing else.
  --json <path>  also write the candidate table as JSON.
  --majors ids   buff IDs that count as the tank's major defensives. Default: Guardian Druid
                 (Barkskin 22812, Survival Instincts 61336, Incarnation 102558). For another spec,
                 read its defensive buff IDs from a Buffs query on the tank and pass them here.
                 Incarnation (102558) is also the buff excluded from the max-health baseline.

<dungeon_dir> holds one sub-directory per run, named <reportCode>_<fightID>, with:
  meta.json        fights{... dungeonPulls{id encounterID startTime endTime}} playerDetails masterData{actors abilities}
  dt*.json         DamageTaken events, includeResources, filtered to the tank, melee (ability 1) removed
  deaths.json      Deaths events
  casts*.json      optional, phase 2: enemy Casts for the candidate IDs (casts.json, casts_boss.json, ...)
  interrupts.json  optional, phase 2: Interrupts events
Any file may be a raw tool-result file: JSON, or a JSON list whose first item holds the JSON in .text.

A cast is a run of hits from one mob instance with the same ability name, with no gap over 2 s
between consecutive hits. A cast that spans more than 8 s is a stream (a melee passive or an aura),
not a cast, and is flagged.
"""
import json, os, sys, glob, statistics as st, collections

MAJOR = {22812: 'Barkskin', 61336: 'Survival Instincts', 102558: 'Incarnation'}
EXTERNAL = {33206: 'Pain Suppression', 102342: 'Ironbark', 6940: 'Blessing of Sacrifice',
            116849: 'Life Cocoon', 357170: 'Time Dilation', 1022: 'Blessing of Protection',
            47788: 'Guardian Spirit', 98008: 'Spirit Link Totem', 204018: 'Blessing of Spellwarding'}
GAP_MS = 2000
STREAM_MS = 8000


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


def events_in(path):
    if not os.path.exists(path):
        return []
    out = []
    for lst in find(load(path), 'data'):
        if isinstance(lst, list) and lst and isinstance(lst[0], dict) and 'timestamp' in lst[0]:
            out.extend(lst)
    return out


def pct(vals, p):
    vals = sorted(vals)
    if not vals:
        return None
    return vals[min(len(vals) - 1, int(round(p / 100 * (len(vals) - 1))))]


def run_data(rdir):
    meta = load(os.path.join(rdir, 'meta.json'))
    f = next(find(meta, 'fights'))[0]
    pd = next(find(meta, 'playerDetails'))
    pd = pd.get('data', pd).get('playerDetails', pd)
    tank = pd['tanks'][0]
    actors = {a['id']: a for a in next(find(meta, 'actors'))}
    abil = {}
    for lst in find(meta, 'abilities'):
        for a in lst:
            abil[a['gameID']] = a
    pulls = f['dungeonPulls']
    dt = []
    for p in sorted(glob.glob(os.path.join(rdir, 'dt*.json'))):
        dt.extend(events_in(p))
    seen = set(); uniq = []
    for e in dt:
        k = (e['timestamp'], e.get('sourceID'), e.get('sourceInstance'), e.get('abilityGameID'), e.get('type'), e.get('tick'))
        if k not in seen:
            seen.add(k); uniq.append(e)
    dt = sorted(uniq, key=lambda e: e['timestamp'])
    return dict(f=f, tank=tank, actors=actors, abil=abil, pulls=pulls, dt=dt,
                deaths=events_in(os.path.join(rdir, 'deaths.json')),
                casts=[e for p in sorted(glob.glob(os.path.join(rdir, 'casts*.json'))) for e in events_in(p)],
                ints=events_in(os.path.join(rdir, 'interrupts.json')))


def pull_at(R, t):
    for p in R['pulls']:
        if p['startTime'] <= t <= p['endTime']:
            return p
    return None


def encounter_label(R, p):
    """Name a boss pull by the boss actors that hit the tank in it."""
    names = sorted({R['actors'][e['sourceID']]['name'] for e in R['dt']
                    if p['startTime'] <= e['timestamp'] <= p['endTime'] and e.get('sourceID') in R['actors']
                    and R['actors'][e['sourceID']].get('subType') == 'Boss'})
    return ' + '.join(names) if names else f"encounter {p.get('encounterID')}"


def aname(R, g):
    return R['abil'].get(g, {}).get('name') or str(g)


def analyse(ddir, mode):
    runs = {}
    for rdir in sorted(glob.glob(os.path.join(ddir, '*_*'))):
        if os.path.isdir(rdir) and os.path.exists(os.path.join(rdir, 'meta.json')):
            try:
                runs[os.path.basename(rdir)] = run_data(rdir)
            except Exception as ex:
                print('SKIP', rdir, ex)
    stats = collections.defaultdict(lambda: dict(raw=[], taken_none=[], taken_major=[], minhp=[], hits=[], span=[], runs=set(),
                                                  mobs=collections.Counter(), where=collections.Counter(), ids=set(),
                                                  casts_per_run=collections.Counter(), deaths=0, school=None, ticks=0, examples=[]))
    tank_deaths = []
    for rk, R in runs.items():
        tid = R['tank']['id']
        ev = [e for e in R['dt'] if e.get('targetID') == tid and e.get('type') == 'damage']
        maxhp = [e['maxHitPoints'] for e in ev if e.get('resourceActor') == 2 and e.get('maxHitPoints')
                 and '102558' not in (e.get('buffs') or '').split('.')]
        if not maxhp:
            print('NO BASELINE HP', rk); continue
        R['base'] = base = st.median(maxhp)
        labels = {}
        groups = collections.OrderedDict()
        for e in ev:
            g = e.get('abilityGameID')
            if g in (1, None):
                continue
            src = R['actors'].get(e.get('sourceID'))
            if not src:
                continue
            p = pull_at(R, e['timestamp'])
            if p is None:
                continue
            is_boss_pull = bool(p.get('encounterID'))
            if mode == 'trash' and (is_boss_pull or src.get('subType') == 'Boss'):
                continue
            if mode == 'boss' and not is_boss_pull:
                continue
            name = aname(R, g)
            if e.get('tick'):
                stats[name]['ticks'] += 1
                continue
            if mode == 'boss':
                if p['id'] not in labels:
                    labels[p['id']] = encounter_label(R, p)
                where = labels[p['id']]
            else:
                where = 'trash'
            key = (e.get('sourceID'), e.get('sourceInstance'), name)
            lst = groups.setdefault(key, [])
            if lst and e['timestamp'] - lst[-1][-1][0]['timestamp'] <= GAP_MS:
                lst[-1].append((e, where))
            else:
                lst.append([(e, where)])
        for (sid, inst, name), casts in groups.items():
            for c in casts:
                hits = [x for x, _ in c]
                raw = sum(x.get('unmitigatedAmount') or (x.get('amount', 0) + (x.get('absorbed') or 0)) for x in hits)
                taken = sum((x['unmitigatedAmount'] - x['mitigated']) if (x.get('unmitigatedAmount') and x.get('mitigated') is not None)
                            else (x.get('amount', 0) + (x.get('absorbed') or 0) + (x.get('overkill') or 0)) for x in hits)
                bufs = set(int(b) for b in (hits[0].get('buffs') or '').split('.') if b)
                major = [MAJOR[b] for b in MAJOR if b in bufs] + [EXTERNAL[b] for b in EXTERNAL if b in bufs]
                s = stats[name]
                s['ids'] |= {x['abilityGameID'] for x in hits}
                s['school'] = R['abil'].get(hits[0]['abilityGameID'], {}).get('type')
                s['raw'].append(raw / base)
                (s['taken_major'] if major else s['taken_none']).append(taken / base)
                s['hits'].append(len(hits))
                s['span'].append((hits[-1]['timestamp'] - hits[0]['timestamp']) / 1000)
                if hits[-1].get('resourceActor') == 2 and hits[-1].get('hitPoints') is not None:
                    s['minhp'].append(hits[-1]['hitPoints'] / base)
                s['runs'].add(rk)
                src = R['actors'][sid]
                s['mobs'][src['name'] + (' (boss)' if src.get('subType') == 'Boss' else '')] += 1
                s['where'][c[0][1]] += 1
                s['casts_per_run'][rk] += 1
                s['examples'].append((rk, hits[0]['timestamp'], round(raw / base, 2), round(taken / base, 2), '/'.join(major) or 'none'))
        for d in R['deaths']:
            if d.get('type') != 'death' or d.get('targetID') != tid:
                continue
            t = d['timestamp']
            p = pull_at(R, t)
            where = 'other' if p is None else ('boss' if p.get('encounterID') else 'trash')
            kill = aname(R, d.get('killingAbilityGameID'))
            killer = R['actors'].get(d.get('killerID'), {}).get('name')
            recent = collections.Counter()
            for e in ev:
                if t - 3000 <= e['timestamp'] <= t and e.get('abilityGameID') not in (1, None):
                    recent[aname(R, e['abilityGameID'])] += (e.get('unmitigatedAmount') or 0)
            tank_deaths.append(dict(run=rk, t=round((t - R['f']['startTime']) / 1000), where=where, killing=kill, killer=killer,
                                    last3s=[(k, round(v / base, 2)) for k, v in recent.most_common(4)]))
            if where == mode and d.get('killingAbilityGameID') not in (1, None, 0):
                stats[kill]['deaths'] += 1
    return runs, stats, tank_deaths


def cast_info(runs, names):
    info = {}
    for name in names:
        ct = []; begins = 0; done = 0; cds = []; intr = 0
        for R in runs.values():
            ids = {k for k, a in R['abil'].items() if a.get('name') == name}
            cs = [e for e in R['casts'] if e.get('abilityGameID') in ids]
            bc = [e for e in cs if e['type'] == 'begincast']
            cc = [e for e in cs if e['type'] == 'cast']
            begins += len(bc); done += len(cc)
            for b in bc:
                m = [x for x in cc if x.get('sourceID') == b.get('sourceID') and x.get('sourceInstance') == b.get('sourceInstance')
                     and 0 <= x['timestamp'] - b['timestamp'] <= 8000]
                if m:
                    ct.append((m[0]['timestamp'] - b['timestamp']) / 1000)
            per = collections.defaultdict(list)
            for x in (bc or cc):
                per[(x.get('sourceID'), x.get('sourceInstance'))].append(x['timestamp'])
            for ts in per.values():
                ts.sort(); cds += [(b - a) / 1000 for a, b in zip(ts, ts[1:]) if b - a > 1500]
            intr += sum(1 for e in R['ints'] if e.get('type') == 'interrupt' and e.get('extraAbilityGameID') in ids)
        info[name] = dict(cast_time=round(st.median(ct), 1) if ct else None, begincasts=begins, completed=done, interrupted=intr,
                          gap_floor=round(min(cds), 1) if cds else None, gap_median=round(st.median(cds), 1) if cds else None)
    return info


def main():
    args = sys.argv[1:]
    if '--majors' in args:
        MAJOR.clear()
        MAJOR.update({int(x): str(x) for x in args[args.index('--majors') + 1].split(',') if x})
    ddir = args[0]
    mode = args[args.index('--mode') + 1] if '--mode' in args else 'trash'
    runs, stats, deaths = analyse(ddir, mode)
    cand = []
    for name, s in stats.items():
        if not s['raw']:
            if s['deaths']:
                s['raw'] = [0.0]
            else:
                continue
        p90 = pct(s['raw'], 90)
        mx_none = max(s['taken_none']) if s['taken_none'] else 0
        if p90 >= 0.6 or mx_none >= 0.35 or s['deaths']:
            cand.append((p90, name, s))
    cand.sort(key=lambda x: -x[0])
    if '--ids' in args:
        ids = set()
        for _, name, s in cand:
            ids |= s['ids']
            for R in runs.values():
                ids |= {k for k, a in R['abil'].items() if a.get('name') == name}
        print(','.join(str(g) for g in sorted(i for i in ids if isinstance(i, int) and i > 1))); return
    info = cast_info(runs, [n for _, n, _ in cand])
    out = []
    print(f"MODE {mode}. RUNS {len(runs)}: " + ', '.join(f"{k} key{R['f'].get('keystoneLevel')} {R['tank']['name']} baseHP {R.get('base', 0)/1e3:.0f}k" for k, R in runs.items()))
    print("\nCANDIDATES. raw and taken are % of the tank's max health without Incarnation, per cast")
    for p90, name, s in cand:
        tn, tm, ci = s['taken_none'], s['taken_major'], info[name]
        stream = bool(s['span']) and st.median(s['span']) * 1000 > STREAM_MS
        row = dict(name=name, ids=sorted(s['ids']), school=s['school'], mobs=dict(s['mobs']), where=dict(s['where']),
                   casts=len(s['raw']), runs=len(s['runs']), of_runs=len(runs), hits_per_cast=st.median(s['hits']) if s['hits'] else None,
                   span_median_s=round(st.median(s['span']), 1) if s['span'] else None, stream=stream,
                   raw_median=round(st.median(s['raw']), 2), raw_p90=round(p90, 2), raw_max=round(max(s['raw']), 2),
                   none_n=len(tn), none_median=round(st.median(tn), 2) if tn else None, none_max=round(max(tn), 2) if tn else None,
                   major_n=len(tm), major_median=round(st.median(tm), 2) if tm else None, major_max=round(max(tm), 2) if tm else None,
                   coverage=round(len(tm) / max(1, len(tm) + len(tn)), 2), minhp=round(min(s['minhp']), 2) if s['minhp'] else None,
                   deaths=s['deaths'], ticks=s['ticks'], **ci)
        out.append(row)
        print(f"\n{name} {row['ids']} school={s['school']} mobs={row['mobs']}" + (" STREAM (not a cast)" if stream else ''))
        if mode == 'boss':
            print(f"  encounters {row['where']}")
        print(f"  casts on tank {row['casts']} in {row['runs']}/{len(runs)} runs; hits per cast {row['hits_per_cast']}, span {row['span_median_s']} s")
        print(f"  raw median {row['raw_median']:.0%} p90 {p90:.0%} max {row['raw_max']:.0%}")
        print(f"  taken no major n={len(tn)} median {row['none_median'] or 0:.0%} max {row['none_max'] or 0:.0%} | with major n={len(tm)} median {row['major_median'] or 0:.0%} | coverage {row['coverage']:.0%}")
        if row['minhp'] is not None:
            print(f"  tank HP after cast: min {row['minhp']:.0%}")
        print(f"  killing blow of a tank death here: {s['deaths']}; dot ticks {s['ticks']}")
        print(f"  cast {ci['cast_time']} s; begun {ci['begincasts']}, completed {ci['completed']}, interrupted {ci['interrupted']}; per-mob gap floor {ci['gap_floor']} median {ci['gap_median']} s")
        print(f"  worst taken: {sorted(s['examples'], key=lambda x: -x[3])[:3]}")
    print('\nTANK DEATHS')
    for d in deaths:
        print('  ', d)
    if '--json' in args:
        json.dump(dict(mode=mode, runs={k: dict(key=R['f'].get('keystoneLevel'), tank=R['tank']['name'], base=R.get('base')) for k, R in runs.items()},
                       candidates=out, tank_deaths=deaths), open(args[args.index('--json') + 1], 'w'), indent=1, default=str)


if __name__ == '__main__':
    main()
