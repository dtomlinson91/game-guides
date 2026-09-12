---
name: wow-rotation-guide
description: Build a World of Warcraft rotation guide for any class and spec from real Warcraft Logs data rather than from written guides. Samples mid-tier logs, splits casts into single-target and AoE, measures the burst window, derives macros from cast timings, and picks the buffs worth tracking. Use whenever the user asks for a rotation, a priority list, a cast order, an opener, a burst window, a macro set, or "how do I play <spec>" for WoW. Also use to update or extend an existing guide in world-of-warcraft/rotations/.
---

# WoW rotation guide from logs

Written rotation guides lag balance changes and state conditional rules as
absolutes. This skill builds a guide from what players actually pressed. The
method: sample real logs, split every cast by context, and compute rates rather
than repeating a priority list.

> [!IMPORTANT]
> The logs outrank every written guide. Use Wowhead spell pages for **mechanics
> and numbers**, written guides for **why**, and logs for **what to press**.
> When they disagree, follow the logs and say so in the guide.

## Read first

Load these before starting. They hold the queries and the traps.

- `references/wcl-cookbook.md` — every WCL query, the parsing, the gotchas
- `references/analysis-traps.md` — the six ways this analysis produces wrong
  numbers, and how to avoid each
- The repo `CLAUDE.md` — document conventions and section order

## Phase 1 — Intake

The user normally names a class and spec and nothing else. Everything below
changes the work, and they will not volunteer it. Ask.

If the class or spec is missing, ask that first, alone. Do not guess from a
character name or a past conversation.

> [!NOTE]
> `AskUserQuestion` takes at most 4 questions per call, each with 2 to 4
> options. It adds an "Other" choice itself, so never write one. Two rounds
> cover everything below.

### Round 1

Ask these four together with `AskUserQuestion`. None depends on the others.

| Question | Options |
| --- | --- |
| Which content should this cover? | Mythic+ · Raid · Both |
| How well do you know this spec? | Brand new · Returning this season · Experienced |
| Do you have the current tier set? | None yet · 2-piece · 4-piece · Not sure |
| How should I pick the hero talent? | Follow the field (Recommended) · I'll name it · Compare both |

> [!CAUTION]
> **The tier set answer changes the rotation, not just the damage.** The patch
> 12.1 Retribution 4-piece adds Divine Arbiter, which empowers the spender you
> did *not* just press and so forces a weave of both spenders in both
> rotations. A guide written for 4-piece is wrong for a player without it. Say
> in the guide which one it assumes.

> [!TIP]
> "Follow the field" is the right default for hero talent. Deriving it from the
> logs found 24 of 24 running Herald of the Sun while two current written guides
> still recommended Templar. Ask the user to name a tree only when they have
> already committed to one.

### Round 2

Branch on the content answer.

**For Mythic+**, ask the key range. The right band moves through the season, so
never hardcode it.

| Question | Options |
| --- | --- |
| Which key range should I sample? | 16–18 · 18–20 · 20–22 · Probe first and tell me |

- **Early season** — 18–20 is excellent but not top
- **Late season** — 20–22 is the same band once keys inflate
- **16–18** — solid players, useful for a guide aimed at a new spec player
- **Probe first** — pull one ranking page per band and report which levels are
  actually populated, then ask again

**For raid**, ask the difficulty instead: Heroic · Mythic · Both.

Then ask which extra sections they want, as a multi-select:

- **Macros** — derived from the measured cast offsets, not guessed
- **Cooldown Manager buffs** — only the buffs that gate a decision
- **Troubleshooting** — what to do when the rotation feels empty
- **Gear and stat check** — what to prioritise

## Phase 2 — Sample

Find the zone, then the logs. Never hardcode a zone ID; they change every
season.

1. **Find the zone.** Query `worldData.expansions`. Pick the zone whose name
   matches the content and season and whose `frozen` is `false`. Ignore any
   zone with `(PTR)` in the name.
2. **Take 2 logs per dungeon or encounter.** Eight dungeons gives **16 logs**.
   That is enough. See the sample-size rule below.
3. **Pick the right ranking pages.** Pages bracket by key level, not by a linear
   DPS scale. Probe a few pages, read the `hardModeLevel` on each, and choose
   the pages matching the user's band.
4. **Validate before extracting.** Every candidate needs a distinct report code,
   at least 2 boss pulls and at least 3 trash pulls. Spread across regions.

> [!IMPORTANT]
> **16 logs is the target, not a floor to beat.** Add more only when a specific
> claim is unsupported — for example fewer than 5 genuine single-target windows,
> or a hero talent split too close to call. Name the claim that needs more data
> before sampling again. Do not add logs out of habit.

## Phase 3 — Extract

One agent per log. Each returns structured data and writes a JSON file to the
scratchpad. `references/wcl-cookbook.md` holds the queries.

Per log, compute:

- Boss and AoE window bounds from `dungeonPulls`
- Per-ability casts and casts per minute in each context
- The opener for the longest boss window and the three largest AoE windows
- Every burst window: the 12 casts after each major cooldown
- Gaps between consecutive casts of each cooldown
- Hero talent from the ability signature
- Resource generation by source, if the log carries it
- **Casts split by whether the main damage cooldown buff was up**

> [!WARNING]
> The last one is the most valuable and the most often missed. A rate pooled
> across a whole fight describes neither state. See `references/analysis-traps.md`.

## Phase 4 — Research in parallel

Run these while extraction is still going. They do not depend on it.

| Topic | Source |
| --- | --- |
| Ability mechanics, cooldowns, GCD, costs | `wowhead.com/spell=<id>` — the authority |
| Hero talent trees and what each changes | Wowhead, Icy Veins talents page |
| **Apex talent** and what it changes | Wowhead spec talent page, Icy Veins |
| Written priority lists, as commentary | Icy Veins, Wowhead guide, Method, Maxroll |
| Tier set and what it changes | Wowhead set spell page and its changelog |
| Player-level detail | Reddit, via the `reddit-search` skill |

### Talents in the guide

Do **not** publish a talent build. Builds go stale faster than rotations and the
user can import one from anywhere. Name a talent only when it changes what the
player presses, and say what the change is.

Three categories are worth checking every time, because each can add, remove or
gate a button:

- **Hero talent** — the largest single source of rotation difference
- **Apex talent** — a Midnight addition, up to 4 points, each adding a separate
  effect. Usually passive, but check whether any point gates a cast
- **Talents that delete a button** — some talents remove an ability from the
  bar and cast it automatically. If a written guide lists a button your logs
  never show, this is usually why

> [!TIP]
> Cross-check the ability list from the logs against the written priority lists.
> Any ability with zero casts across every sampled log is either untalented, auto
> cast by something else, or removed from the spec. Say which, and put it in a
> "buttons you will not press" section. Eight such abilities turned up in one run.

> [!CAUTION]
> Use `mcp__brightdata__scrape_as_html` for page content. `WebFetch` and `curl`
> are denied by a hook for non-allowlisted hosts. Save each scrape to a file and
> grep it — guide pages run past 200 KB.

## Phase 5 — Analyse

Four lenses over the pooled files. Run them in parallel.

1. **Single target** — boss windows with one enemy only
2. **AoE** — trash windows, plus how the mix moves with target count
3. **Cooldowns** — burst window order, offsets, what pairs, what is held
4. **Traps** — the spread between logs, what is a hard rule and what is a choice

Every claim states how many logs support it. A claim from fewer than half the
logs is low confidence and must be marked conditional in the guide.

## Phase 6 — Verify

Spawn skeptics to refute each claim, with a **hard cap on the fan-out**.

> [!CAUTION]
> Never size this as `claims × skeptics`. That product is unbounded and has
> exhausted a session spend limit, killing the synthesis agent and wasting every
> earlier phase. Rank the claims, verify the top 12 to 15, and `log()` what was
> dropped. Keep synthesis where a budget overrun cannot reach it.

## Phase 7 — Write

Save to `world-of-warcraft/rotations/<spec>-<content>-rotation.md`, for example
`ret-paladin-mplus-rotation.md`.

Follow the repo `CLAUDE.md` for document conventions and section order. In
short: order sections by how often the reader returns to them, and put one-time
setup at the end.

Then **record the guide** in the Class Rotations section of `CLAUDE.md` with
the sources that produced it and any source that failed.

## Sample size rule

The numbers below come from a completed 24-log run. Use them to judge whether
16 logs answered the question.

| Measure | What 16 logs should give you |
| --- | --- |
| Boss pulls | ~55, about 190 minutes |
| Trash pulls | ~100, about 215 minutes |
| Burst windows | ~370 |
| Cast events | ~31,000 |
| Genuine single-target windows | **~9** — the scarce one |

> [!NOTE]
> Single-target windows are the bottleneck. A Mythic+ boss pull usually carries
> adds, so only a fraction have one enemy. If the guide needs a firm
> single-target claim and you have fewer than 5 such windows, that is the one
> good reason to sample more logs.
