# Procedure: one dungeon

The steps one dungeon agent follows. The parent agent passes in the dungeon
name, its encounter ID, the work directory, the tank class and spec, and the
key range. Everything below uses those names in angle brackets.

Use `/usr/bin/python3`, not `python3`. The script is
`.claude/skills/wow-mplus-tank-busters/scripts/analyse.py` in the repository.

## 0. Load tools

```
ToolSearch  select:mcp__wcl__wcl_graphql,mcp__wcl__wcl_get_rate_limit
ToolSearch  select:mcp__brightdata__scrape_as_html
```

## Rate-limit rule

The Warcraft Logs budget is 18,000 points per hour, shared by every agent and
every other tool that uses the same client. One query costs about 1 to 5
points. A full dungeon costs about 50 to 800 points.

Call `mcp__wcl__wcl_get_rate_limit` before each run. If
`pointsSpentThisHour` is above 17,500, or any call returns HTTP 429, stop at
once. Do not retry in a loop and do not sleep. Return a message that starts
with `PAUSED_RATE_LIMIT`, says which runs are complete, and gives the next
step. The parent resumes the agent after the reset.

## File rule

All agents share one tool-results directory.

- When a result is saved to a file, copy it by the **exact path** the tool
  result prints. Never pick "the newest file".
- A small result comes back inline. Add `masterData { abilities { gameID name
  } }` to the query and run it again. The result is then large enough to save
  to a file. Do not retype inline JSON.
- After each save, check the file: events carry `"fight": <fightID>`, and
  meta holds the fight ID.

## 1. Choose the runs

For each key level in the range, the bracket is the key level minus one. Key
20 is bracket 19.

```graphql
{ worldData { encounter(id: <ENCOUNTER>) { r: characterRankings(className: "<Class>", specName: "<Spec>", metric: dps, bracket: <B>, page: 1) } } }
```

Save to `<dir>/rank_<B>.json`. Each ranking carries `name`, `hardModeLevel`,
`report{code, fightID}`, `server{region}`, `score` and `duration`.

Pick 8 runs:

- Spread them over the key range, for example 3 at the lowest level, 3 in the
  middle, 2 at the top.
- Take them from the **middle** of each list, not the top.
- Use one run per tank name.
- Check that `hardModeLevel` is in the range.
- The top key level often has only 1 to 13 runs for a tank spec. Use what
  exists, and say so.

## 2. Phase 1 fetch

Make `<dir>/<reportCode>_<fightID>/` and fetch three files into it.

**meta.json**

```graphql
{ reportData { report(code: "<CODE>") { fights(fightIDs: [<F>]) { id name startTime endTime keystoneLevel kill dungeonPulls { id name encounterID startTime endTime } } playerDetails(fightIDs: [<F>]) masterData { actors(type: "NPC") { id name gameID subType } abilities { gameID name type } } } } }
```

Read the tank name from `playerDetails.data.playerDetails.tanks[0].name`.
Check it is the right class and spec. If not, drop the run and pick another.

**dt.json**: damage taken by the tank, melee removed, the whole key.

```graphql
{ reportData { report(code: "<CODE>") { events(fightIDs: [<F>], dataType: DamageTaken, includeResources: true, filterExpression: "ability.id != 1 and target.name = '<TANKNAME>'", limit: 10000) { data nextPageTimestamp } } } }
```

If `nextPageTimestamp` is not null, fetch again with `startTime:
<nextPageTimestamp>` and save `dt2.json`, `dt3.json` and so on. If the first
page holds zero events (for example, a name with an apostrophe), use
`filterExpression: "ability.id != 1"` and page through. The script filters to
the tank.

> [!IMPORTANT]
> `targetID` and `target.id = X` do **not** filter `DamageTaken`. Only
> `target.name` does. With it, a 30-minute key fits in one page of about 2,000
> events.

**deaths.json**

```graphql
{ reportData { report(code: "<CODE>") { events(fightIDs: [<F>], dataType: Deaths, limit: 500) { data } } } }
```

**debuffs.json**: every debuff on the tank, the whole key. About 100 to 1,200
events and about 1 point per key. Batch 8 runs in one query, one aliased
`report` per run, then split the result into the run directories.

```graphql
{ reportData { report(code: "<CODE>") { events(fightIDs: [<F>], dataType: Debuffs, hostilityType: Friendlies, filterExpression: "target.name = '<TANKNAME>'", limit: 10000) { data nextPageTimestamp } } } }
```

**interrupts.json**

```graphql
{ reportData { report(code: "<CODE>") { events(fightIDs: [<F>], dataType: Interrupts, limit: 2000) { data } masterData { abilities { gameID name } } } } }
```

## 3. Candidates

```
/usr/bin/python3 analyse.py <dir> --mode trash --ids
/usr/bin/python3 analyse.py <dir> --mode boss --ids
```

Each prints a comma-separated ID list: every candidate, plus every ability
with the same name. A cast ID often differs from its damage ID. Join the two
lists. For a non-Guardian tank, add `--majors <id,id,...>` to every call.

## 4. Phase 2 fetch

For each run, **casts.json**:

```graphql
{ reportData { report(code: "<CODE>") { events(fightIDs: [<F>], dataType: Casts, hostilityType: Enemies, filterExpression: "ability.id in (<IDS>)", limit: 10000) { data nextPageTimestamp } masterData { abilities { gameID name } } } } }
```

The script reads every `casts*.json` file in the run directory.

## 5. Reports

```
/usr/bin/python3 analyse.py <dir> --mode trash --json <dir>/trash.json > <dir>/trash_report.txt
/usr/bin/python3 analyse.py <dir> --mode boss  --json <dir>/boss.json  > <dir>/boss_report.txt
```

Per candidate, the report gives:

- **raw**: damage before mitigation, per cast, as a percentage of the tank's
  maximum health without Incarnation. A cast is a run of hits from one mob
  instance with the same ability name and no gap over 2 s.
- **taken no major / with major**: damage actually taken, split by whether a
  major defensive or a known external was up. **coverage** is the share of
  casts that were covered.
- **tank HP after cast**, **killing blows**, **dot ticks**.
- **cast**: median cast time, casts begun, completed and interrupted, and the
  gap between casts from one mob.
- **STREAM**: the cast spans more than 8 s, so it is an aura or a melee
  passive, not a cast.

Then the stacking debuffs:

```
/usr/bin/python3 debuffs.py <dir> --json <dir>/debuffs_table.json > <dir>/debuffs_report.txt
/usr/bin/python3 debuffs.py <dir> --timeline "<debuff name>"
```

Per debuff that was re-applied while up, the report gives:

- **reapp**: the share of applications that landed while it was still up.
- **maxStk**: the highest stack count, or the number of separate copies added
  together.
- **natural**: the median length of windows with one application. It reads
  short when a dispel, a full heal or a death removes the debuff early. Use
  the tooltip duration for the rule.
- **longest**, **chained (runs)**: the longest uptime, and the windows that
  lasted over 1.5 times the natural length.
- **casters**: the most distinct mobs that fed one window. The log credits a
  shared stack to its first caster, so the script matches each application to
  the hit at the same moment.
- **up to N separate copies**: each caster puts its own copy.

`--timeline` lists every window with two or more applications: when each
landed and which mob instance cast it. Use it to see whether the casters were
spread out or cast together.

For every debuff that raises damage taken, lowers armor or maximum health,
or stacks, apply the rule in the skill's "Stacking debuffs" section: duration
from the tooltip, cadence from `gap_floor` and `gap_median`, casters needed,
and the most casters of that mob seen in one pull.

## 6. Classify

**Trash**

- **ALERT**: raw p90 of 100% or more, OR 40% or more taken without a major,
  OR the killing blow of a tank death on trash.
- **WATCH**: raw p90 from 60% to 100%.

**Bosses**

- **ALERT**: aimed at the tank AND one of: raw p90 of 100% or more, 40% or
  more taken without a major, or a tank death in a boss fight.
- **GROUP**: big on the tank, but it hits the whole group. List it briefly.
- **WATCH**: aimed at the tank, raw p90 from 60% to 100%.

**Aimed at the tank** means the cast event named the tank in most casts. For a
cast with no target (`targetID` -1), use the tooltip ("current target") and
the share of hits that landed on the tank.

Drop streams unless they killed a tank. Drop abilities whose tooltip says all
players, a random player, or a ground effect, and say why.

## 7. Tooltips

For each ALERT and WATCH ability, read
`https://nether.wowhead.com/tooltip/spell/<ID>?dataEnv=1&locale=0` with
`mcp__brightdata__scrape_as_html`. Use the cast ID. Note the cast time, the
school, any debuff, and who it targets. The `buff` field describes the debuff
or buff the spell leaves.

## 8. Return

At most about 500 words and one table per mode. Include:

1. The runs: code, fight, key, tank, region.
2. For each ALERT and WATCH ability: ability (cast ID, damage IDs), mob or
   boss, school, raw median / p90, taken no-major (n, median, max), taken
   with-major median, coverage, casts per run, cast time, interrupted or
   stopped, gap between casts, a one-line tooltip summary with any debuff,
   and tank deaths.
3. GROUP abilities in one line each.
4. Tank deaths and what killed them.
5. Stacking threats: for each debuff, its effect per stack, duration,
   one mob's cadence, casters needed to keep it up, the most casters seen in
   one pull, the highest stack and the longest uptime. Include debuffs that
   never overlapped in the sample but would in a bigger pull.
6. What failed, and any doubt about the data.

Do not round away the evidence, and do not invent numbers. If a value is
missing, say so.
