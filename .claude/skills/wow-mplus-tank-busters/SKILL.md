---
name: wow-mplus-tank-busters
description: Find the Mythic+ trash and boss abilities that hit a tank hard enough to need a major defensive, for every dungeon in a season, from Warcraft Logs data. Samples mid-ranked tank logs at high keys, measures each enemy hit as a percentage of the tank's maximum health, and builds an alert list with cast IDs, cast times and cadence. Use whenever the user asks for tank busters, big tank hits, abilities that need a defensive, custom alerts for tank damage, "what killed me as a tank", or wants the Season tank-buster guide rebuilt for a new season or extended to bosses.
---

# Mythic+ tank busters from logs

This skill finds the enemy abilities that kill a tank who has no defensive up,
for every dungeon in a Mythic+ season. It measures real hits on real tanks
rather than reading guides, and it produces an alert list: mob, cast ID, cast
time, cadence, and size.

The first run built
`world-of-warcraft/mythic-plus/season-2-tank-busters.md` (Midnight 12.1,
Season 2, Guardian Druid, keys 20 to 22). Read it first: it is the model for
the output.

> [!IMPORTANT]
> Rank by **raw** damage, as a percentage of the tank's maximum health. Damage
> actually taken depends on the tank's mitigation in that moment. A Shield
> Bash that strong tanks took for 20% killed a tank with low Ironfur.

## Read first

- `references/procedure.md` — the steps one dungeon agent follows, with every
  query
- `references/traps.md` — ten ways this analysis produced a wrong number, and
  the fix for each
- `scripts/analyse.py` — the analysis. Its usage and options are in the
  docstring at the top of the file
- The repo `CLAUDE.md` — document conventions, citations, section order, and
  the Warcraft Logs section

## Phase 1 — Intake

Ask with `AskUserQuestion`, in one round. Skip a question the user already
answered.

| Question | Options |
| --- | --- |
| Which tank spec? | The user's spec (Recommended) · Any tank |
| Which key range? | 20 to 22 (Recommended) · 18 to 20 · 15 to 17 |
| Trash, bosses, or both? | Both (Recommended) · Trash only · Bosses only |
| Update the existing guide or start a new one? | New season guide (Recommended) · Update existing |

> [!NOTE]
> The default major-defensive list is Guardian Druid's: Barkskin 22812,
> Survival Instincts 61336, Incarnation 102558. For another spec, pull one
> `Buffs` query on the tank in one log, find its major defensive buff IDs, and
> pass them with `--majors`. Raw damage does not depend on the spec.

## Phase 2 — Set up

1. Find the season's zone. Never hardcode it:

   ```graphql
   { worldData { expansions { id name zones { id name frozen encounters { id name } } } } }
   ```

   Pick the Mythic+ zone with `frozen: false`. Ignore any `(PTR)` zone. Each
   encounter is one dungeon.

2. Check the budget with `mcp__wcl__wcl_get_rate_limit`. A full season costs
   about 2,000 to 4,000 points over 8 dungeons. If another consumer has spent
   most of the hour, ask the user to pause it or wait for the reset.

3. Make a work directory in the session scratchpad, with one sub-directory
   per dungeon.

## Phase 3 — One agent per dungeon

Launch one background `general-purpose` agent per dungeon, all in one message.
Each follows `references/procedure.md`. Use this prompt, filled in:

```
Find the tank-buster abilities, trash and bosses, in the World of Warcraft
Mythic+ dungeon **<Dungeon>** (Warcraft Logs encounter ID <ID>, zone <ZONE>,
<expansion> patch <patch> Season <n>), from <Class> <Spec> logs at keys <A> to
<B>.

Follow this procedure exactly. Read it first:
<repo>/.claude/skills/wow-mplus-tank-busters/references/procedure.md
Also read references/traps.md in the same skill.

The script is <repo>/.claude/skills/wow-mplus-tank-busters/scripts/analyse.py.
Do not change it. If it fails on your data, report the error.
<For a non-Guardian spec: pass --majors <ids> to every analyse.py call.>

Your work directory is <scratchpad>/<dungeon-slug>. Write only there. Other
agents share the Warcraft Logs budget and the tool-results directory: follow
the rate-limit rule and the file rule. Do not commit, stage, or write to the
repository.

Your final message is the report that step 8 of the procedure describes. It
goes to another agent, not to a person.
```

Add a calibration line when one is known, for example "Always report Shield
Bash (1216529) in your table". A known answer catches a broken run early.

> [!TIP]
> An agent that hits the rate limit returns `PAUSED_RATE_LIMIT`. Wait for the
> reset, then resume that agent with `SendMessage` to its agent ID. A resumed
> agent keeps its files and its context.

## Phase 4 — Combine

When every agent has reported:

1. Re-run the script yourself on every dungeon directory, in both modes, with
   `--json`. Take every figure in the guide from these files, so one method
   produces every number.
2. Check each candidate against `references/traps.md`: merged names, melee
   streams, DoT ticks, deaths between pulls.
3. Sort each dungeon's list into tiers:
   - **Tier 1**: heavy even through a major defensive. Magic, armor-ignoring,
     or a channel, or 40% or more taken with a major up.
   - **Tier 2**: a physical hit over 100% raw that a major defensive or full
     active mitigation reduces to 15% to 35%.
   - **Kick** or **soak** entries: name the response instead of a tier.
4. Expect 2 to 4 trash entries and 0 to 3 boss entries per dungeon. A longer
   list usually holds group damage or melee streams that should go.
5. Read every tooltip the agents did not read.

## Phase 5 — Write the guide

Save to `world-of-warcraft/mythic-plus/season-<n>-tank-busters.md`. Follow the
repo `CLAUDE.md` and the existing guide:

- Opening paragraph: season, patch, spec, key range, sample size. Define
  "raw" there, because every table uses it.
- Trash alerts, one table per dungeon, worst dungeon first. Columns: tier,
  mob, ability (cast ID), cast, every, raw, response.
- Boss alerts, one table per dungeon, plus a short table of heavy group
  damage.
- Damage amplifiers: debuffs that make the next hit bigger.
- How the danger works, full measurements, method, then sources.
- One Sources entry per dungeon for the log codes, and one per dungeon for
  the tooltips.

Then add the guide to the World of Warcraft record in the repo `CLAUDE.md`,
with the runs, what failed, and any new trap.
