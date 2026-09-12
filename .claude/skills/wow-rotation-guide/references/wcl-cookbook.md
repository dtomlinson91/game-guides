# Warcraft Logs query cookbook

Every query this analysis needs, in the order you need them. All of it runs
through the `wcl` MCP server. The website cannot be scraped.

## Setup

Load the schemas first. They are deferred, so a direct call fails.

```
ToolSearch  select:mcp__wcl__wcl_graphql,mcp__wcl__wcl_get_events,mcp__wcl__wcl_get_player_info,mcp__wcl__wcl_get_fights,mcp__wcl__wcl_get_table,mcp__wcl__wcl_get_rate_limit
```

> [!CAUTION]
> **Shell gotcha.** `python3` and `node` are broken function wrappers in this
> sandbox. Use `/usr/bin/python3` and `/usr/bin/jq`. An absolute path bypasses
> the wrapper.

> [!TIP]
> Results are large and get written to a file instead of returned. Parse the
> file with `/usr/bin/python3`. A GraphQL result file is sometimes a JSON list
> whose first element holds the real JSON in a `.text` field, so parse
> defensively.

Rate limit is 3600 points an hour. A full 16-log run costs a small fraction of
that, so cost is never the constraint.

## 1. Find the zone

Never hardcode a zone ID. They change every season.

```graphql
query { worldData { expansions { id name zones { id name frozen encounters { id name } } } } }
```

Pick the zone whose `frozen` is `false` and whose name matches the season.
Ignore any zone with `(PTR)` in the name — it is a duplicate with different
encounter IDs.

## 2. Sample the rankings

```graphql
query {
  worldData {
    encounter(id: <encounterID>) {
      characterRankings(className: "Paladin", specName: "Retribution",
                        metric: dps, page: <N>)
    }
  }
}
```

Returns `{page, hasMorePages, count, rankings[]}`. Each ranking carries `name`,
`amount` (DPS), `hardModeLevel` (key level), `report{code, fightID}` and
`server{region}`.

> [!WARNING]
> **Pages bracket by key level, not by a linear DPS scale.** In one observed
> sample, page 5 ranked entirely above page 3 despite sitting on lower keys.
> Probe several pages, read `hardModeLevel`, and pick pages by the level you
> want. Never assume page number maps to skill.

`characterRankings` does **not** expose talents. Derive the hero talent from
cast and buff signatures instead.

## 3. Split boss from trash

This is the whole method for Mythic+. A key logs as **one** fight, not separate
boss pulls.

```graphql
query {
  reportData {
    report(code: "<code>") {
      fights(fightIDs: [<id>]) {
        id name startTime endTime keystoneLevel
        dungeonPulls {
          id name startTime endTime encounterID kill
          enemyNPCs { id gameID minimumInstanceID maximumInstanceID }
        }
      }
    }
  }
}
```

Classify each pull. Times are report-relative milliseconds.

| Condition | Context |
| --- | --- |
| `encounterID != 0` | **Boss** |
| `encounterID == 0` and 4+ enemies | **AoE** |
| `encounterID == 0` and under 4 enemies | Ignore — too small to judge |

Enemy count per pull is `sum(maximumInstanceID - minimumInstanceID + 1)` across
`enemyNPCs`.

> [!CAUTION]
> A boss pull is **not** automatically single target. In one sample the median
> boss pull held 9 distinct enemies, range 1 to 68. For genuine single-target
> numbers, filter to pulls with one enemy. Treating every boss pull as single
> target inflated one spender from 6.5 to 9.9 casts per minute.

> [!WARNING]
> That enemy count is **cumulative distinct enemies across the whole pull**, not
> enemies alive at once. It cannot give you a precise "swap at N targets" rule.
> Say so rather than inventing a threshold.

## 4. Find the player

```
mcp__wcl__wcl_get_player_info  reportCode: "<code>"
```

Parse the saved file and find the actor whose `spec` matches. Record its `id` as
the `sourceID` every other call needs.

## 5. Pull the casts

```
mcp__wcl__wcl_get_events
  reportCode, fightID, dataType: "Casts", sourceID, limit: 10000, maxPages: 5
```

If the result says `truncated: true`, call again with
`startTime: <nextPageTimestamp>` until it drains. Each event carries
`timestamp` (report-relative ms), `type` and `ability{name, guid}`.

Do the same with `dataType: "Buffs"` to get cooldown windows, and
`dataType: "CombatantInfo"` for gear, stats and the talent tree node list.

> [!NOTE]
> `CombatantInfo` returns talent **node IDs**, not names. Mapping them needs
> Wowhead and is rarely worth it. Identify the build from ability names instead.

## 6. Time-bounded tables

`wcl_get_table` does not accept a time window. GraphQL does. This is the only
route for a per-pull table.

```graphql
query {
  reportData {
    report(code: "<code>") {
      boss:  table(fightIDs: [19], dataType: Casts, sourceID: 5,
                   startTime: 33812592, endTime: 34055070)
      trash: table(fightIDs: [19], dataType: Casts, sourceID: 5,
                   startTime: 33466353, endTime: 33732969)
    }
  }
}
```

> [!IMPORTANT]
> **Timestamps are report-relative, not fight-relative.** Read the fight
> `startTime` and add your offset. A window starting at 0 silently returns data
> from before the pull.

> [!WARNING]
> A single query with 30 aliased `table` calls times out. Batch a few at a time.
> Pulling raw `Casts` events once and bucketing them in Python is cheaper than
> many aliased tables, and gives you sequences as well as counts.

## 7. Identify the hero talent

Match ability names from casts, buffs and the damage table against the marker
lists. One marker is enough; the abilities are exclusive to their tree.

Build the marker list from the Wowhead hero talent pages for the spec. As an
example, Retribution Paladin:

| Tree | Markers |
| --- | --- |
| Herald of the Sun | Dawnlight, Sun's Avatar, Sun Sear, Will of the Dawn, Blessing of An'she, Morning Star, Solar Grace |
| Templar | Hammer of Light, Templar Strike, Templar Slash, Shake the Heavens, Empyrean Hammer, Light's Guidance |

> [!TIP]
> To check a whole ranking page at once, query each parse's fight for casts of
> one unmissable tree-defining ability. Zero casts of Hammer of Light across an
> ~28 minute key proves the player is not Templar. That method checked 60 parses
> and found 60 of 60 on one tree.

## Known failures

Record these in the guide rather than retrying them.

| Source | Failure |
| --- | --- |
| Warcraft Logs **website** | Empty body. `/zone/rankings/` and `/zone/statistics/` render client-side. Use the MCP server. |
| `archon.gg` | Empty body, same client-side rendering. |
| `characterRankings` talents | Not exposed. Derive from cast signatures. |
| Batched GraphQL | Times out past roughly 30 aliased calls. |
| Wowhead hero talent guide pages | Often stale. Check the "Updated" date and the title for a previous expansion name. |
