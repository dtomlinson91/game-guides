# Game guides

A personal knowledge base of game guides, written as GitHub-style markdown.
One directory per game, one file per subject.

```
<game-slug>/<subject-slug>.md
<game-slug>/<category>/<subject-slug>.md   # when a game has many of one kind
```

World of Warcraft class rotations live in `world-of-warcraft/rotations/`.

Follow the conventions in the `doc-summary` skill when writing a guide: short
headers of two to four words, an introductory paragraph under every header, and
GitHub alerts (`> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`,
`> [!CAUTION]`) where the reader needs to stop and read.

## Section order

Order sections by **how often the reader returns to them**, most frequent
first. Group related sections together, then order the groups by frequency.
The reader should not scroll past content they read once to reach content they
check every pull.

A guide the reader uses while playing falls into four bands:

1. **Act on it now** — priority lists, rotations, timings, per-pull decisions
2. **Check when something feels wrong** — the non-obvious rules, common
   failure modes, troubleshooting
3. **Check after the session** — measured rates and benchmarks to compare a log
   against
4. **Set up once** — talent or build choice, keybinds, macros, UI and tracker
   configuration, then provenance and sample notes

> [!IMPORTANT]
> Put one-time setup at the END, however important it is. Macros, keybinds and
> UI setup are read once or twice and then never again. Leading with them
> buries the lists the reader needs mid-combat.

> [!TIP]
> Moving a section can strand a cross-reference. "Described below" becomes wrong
> when the target moves above. Use an anchor link such as
> `[burst window](#the-burst-window)` rather than a direction word, then check
> every `(#anchor)` against the headers after any reorder.

> [!WARNING]
> A prerequisite explained in a section you moved to the end leaves its first
> use unexplained. Either move that explanation to where it is first needed, or
> state it in the opening paragraph. Do not leave a term defined only after the
> list that uses it.

## Research

Applies to every game in this repository. Read this before starting any guide.

**Start from the per-game section below.** Each one holds a source table for
the game, and a record of every guide already written for it with the exact
URLs that produced it. If a related guide exists, its source list is a working
set of URLs that returned useful content. Reuse it rather than searching again.

Every list in this file is a **starting point, not an exhaustive or exclusive
list**. Search for better sources whenever the recorded ones do not answer the
question.

**Record what you used.** After writing a guide, add it to that game's guide
record with a one-line outline and the URLs that produced it. Note any source
that failed, and why. This is the part that saves the next agent time, so do it
even when the sources were the obvious ones.

Four rules hold across every game:

1. **Research the subject. Do not answer from memory.** These games change with
   every patch. Damage values, tier placements, and recommended builds go stale
   within a version or two.
2. **Prefer two independent sources for any number.** Prefer a source that
   shows its working over one that only states a conclusion.
3. **Prefer the game's own data over a written guide for any value.** Written
   guides lag behind balance changes. Where the game exposes a live tooltip or
   database page, check the number there and treat the guide as commentary.
4. **Prefer observed play over prescribed play.** A guide states what a player
   should do. A log states what strong players did. Where a log or telemetry
   source exists, check every rotation and priority claim against it before you
   repeat the claim in a guide.

> [!CAUTION]
> Rule 4 is not theoretical. Icy Veins and Wowhead both state that a raiding
> Restoration Druid should end a fight with more Regrowth casts than
> Rejuvenation casts. A Heroic log showed the raid's top healer casting 164
> Rejuvenation to 43 Regrowth, while the player who followed the written rule
> healed 2.78 times less. A guide rule can be stale, or conditional and written
> as though it were absolute. Mark conditional advice as conditional.

> [!IMPORTANT]
> When a source disagrees with another, say so in the guide and name which one
> you followed. Do not silently pick one.

> [!TIP]
> Guide-site pages are often 200 KB or more of markup and will not fit in a
> tool result. Save the scrape to a file, then grep it for the section you
> need. The useful content usually sits well after the navigation markup.

## Honkai: Star Rail

Guides live in `honkai-star-rail/`. The game changes with every patch, so
always research a subject rather than answering from memory. Damage values,
tier placements, and recommended teams go stale within a version or two.

### Research sources

The list below is a starting point, not an exclusive one. Prefer two
independent sources for any number that goes into a guide, and prefer a source
that shows its working over one that only states a conclusion.

| Source | Good for |
| --- | --- |
| `prydwen.gg/star-rail/` | Full kit text, trace and Eidolon values, written reviews, relic and Light Cone rankings, real usage statistics and average cycle counts per team |
| `hsr.keqingmains.com` | Community theorycraft. Ability values by level, playstyle breakdowns, explicit anti-synergy notes |
| `game8.co`, `mobalytics.gg` | Quick build summaries. Useful as a cross-check, thinner on mechanics |
| `homdgcat.wiki` | Raw datamined kit numbers, including unreleased content |
| Official patch notes | Balance changes and new mechanics |

> [!TIP]
> Prydwen character pages are very large (600 KB or more of markup) and will
> not fit in a tool result. Save the scrape to a file, then slice it by
> character range or grep it for the section you need. The useful content
> usually sits well after the navigation markup.

### Reddit sources

Reddit carries the player-level detail that guide sites omit: rotation habits,
what actually goes wrong in a fight, and account-specific advice. Route
requests as described in the global `CLAUDE.md` and the `reddit-search` skill.
Do not use `WebSearch` for Reddit.

Useful subreddit shapes, rather than a fixed list:

- **The main subreddit** — `r/HonkaiStarRail`. Broad, and noisy for mechanical
  questions. Search results here often return unrelated discussion threads.
- **Per-character subreddits** — most popular characters have their own
  subreddit. Naming is inconsistent, so search for the character name rather
  than guessing a URL. Common patterns are `r/<Character>Mains` and
  `r/<Character>MainsHSR`. These are the best source for playstyle questions,
  build checks, and clear-video posts.
- **Leaks and datamines** — `r/HonkaiStarRail_leaks` for kits before release.
  Treat anything from here as provisional.
- **Statistics and analysis** — `r/StarRailStation` for pull-value writeups and
  cross-character comparisons.

> [!NOTE]
> Character subreddits are often thin. Many "how do I play her" threads have no
> comments, and the comments feed can return the post alone. Say so in the
> guide rather than implying the advice came from players when it came from a
> guide site.

### Terminology

Terms that appear across every guide and are worth using consistently.

- **Path** — the character's role class (Remembrance, Harmony, Preservation,
  and so on).
- **Memosprite** — a summoned unit that takes its own turns. Remembrance
  characters have them. Some act automatically, some are player-controlled.
- **Light Cone** — the weapon. `S1` to `S5` denote its superimposition level.
- **Trace** — the passive skill tree. `A2`, `A4` and `A6` are the three major
  traces.
- **Eidolon** — a duplicate-copy upgrade, `E0` to `E6`. Guide numbers are
  normally quoted at `E0` unless stated.
- **Endgame modes** — Memory of Chaos (`MoC`), Pure Fiction (`PF`),
  Apocalyptic Shadow (`AS`), Anomaly Arbitration. A character can be strong in
  one and weak in another, so always name the mode.

### Guides written

Guides written for this game, with the sources that produced each one. Add to
this list rather than replacing it.

#### Ashveil

[`honkai-star-rail/ashveil-builds-and-teams.md`](honkai-star-rail/ashveil-builds-and-teams.md)
— three Ashveil builds: main DPS, Follow-up ATK support for Aventurine •
Waveflair, and sub-DPS for Acheron. Opens with a three-column quick-reference
table. Covers the core loop, all three team sheets, the "wind set" argument,
teammate builds for Mortenax Blade, relic and ornament rankings, speed tuning,
the sustain question, Light Cones and Eidolon value. **Written 2026-09-20 for
version 4.5. Restructured twice the same day: first to drop Feixiao and split
by role, then to add the Acheron build.**

A Feixiao section was written and then removed at the user's request. The
research behind it still holds if it is ever wanted: Ashveil appears in 9 of
Feixiao's 10 ranked MoC teams, but her best team sits at rank 287 with a 0.08%
appearance rate, and Prydwen's Feixiao page has not been recalculated since
patch 4.0.

Kit text, trace values, relic rankings, usage statistics and ranked teams:

- <https://www.prydwen.gg/star-rail/characters/ashveil>
- <https://www.prydwen.gg/star-rail/characters/aventurine-waveflair>
- <https://www.prydwen.gg/star-rail/characters/blade-mortenax> — Mortenax Blade
- <https://www.prydwen.gg/star-rail/characters/acheron> — kit and ranked teams
  only. Patch 4.0, and it mentions Ashveil zero times
- <https://www.prydwen.gg/star-rail/characters/feixiao> — researched, not used
- <https://www.prydwen.gg/star-rail/guides/relic-sets> — exact set text, small
  enough to grep in one pass

Independent cross-check:

- <https://www.icy-veins.com/honkai-star-rail/ashveil-guide-best-builds>
- <https://www.icy-veins.com/honkai-star-rail/ashveil-best-teams>
- <https://honkai-star-rail.fandom.com/wiki/The_Wind-Soaring_Valorous> — second
  source for relic set text

Reddit — the only source for the wind set argument and for speed tuning:

- <https://www.reddit.com/r/Ashveil_Mains/comments/1wjcg6i/here_is_a_better_showcase_for_main_dps_ashveil/>
- <https://www.reddit.com/r/Ashveil_Mains/comments/1wi4dum/i_own_top12_ashveil_build_on_fribbels_ama/>
- <https://www.reddit.com/r/Ashveil_Mains/comments/1wkb3b0/ashblade_speed_tuning/>
- <https://www.reddit.com/r/Ashveil_Mains/comments/1whzw1z/is_aventurine_sp_optimal/>
- <https://www.reddit.com/r/AcheronMainsHSR/comments/1w0erzq/robin_or_ashveil_for_e2_acheron/>
- <https://www.reddit.com/r/HonkaiStarRail_leaks/comments/1rwpixx/acheron_e0s1_cipher_e0s1_ashveil_e0s1_topaz_lc/>
- <https://www.reddit.com/r/FeixiaoMains_/comments/1rml2ze/should_i_switch_to_4pc_eagle_with_ashveil_coming/>

Sources that failed:

- `game8.co` — returned an empty body through Bright Data.
- `hsr.keqingmains.com` — no Ashveil guide exists. Its Acheron guide does exist
  but is marked "Updated for Version 2.3" and names neither Ashveil nor
  Mortenax Blade. **Check the version banner on every KQM page before trusting
  it.** Several are years stale.
- `icy-veins.com/honkai-star-rail/acheron-best-teams` — loads, dated 29 Mar
  2026, and contains neither Ashveil nor Mortenax Blade in any team.
- `prydwen.gg/star-rail/characters/mortenax-blade` — "Character Not Found". The
  slug puts the base name first: `blade-mortenax`. Guess a slug once, then use
  `WebSearch` with `allowed_domains: ["prydwen.gg"]` rather than guessing again.
- Prydwen's "MoC/PF/AS Statistics" and "Calculations" tabs render client-side
  and return nothing.

> [!IMPORTANT]
> Several 4.x characters carry a **branching trace** that reads the Paths of the
> other three team members at the start of battle, and the wrong fourth member
> silently disables the whole team's premise. Aventurine • Waveflair's A4 makes
> his Elation Skill count as a Follow-up ATK only while he is the **only**
> Elation unit. Mortenax Blade's A6 gives himself 75% DMG only while he is the
> **only** Nihility unit, and otherwise redirects it to ally Ultimate DMG. Read
> every teammate's A4 and A6 for a Path condition before writing a team sheet.

> [!IMPORTANT]
> Prydwen team tables carry **no text**. The character names live only in image
> `alt` attributes. Parse the raw markup for `alt="..."`, not the stripped
> text, or every team reads as an empty row. Rank and appearance rate do appear
> in the stripped text, in the same order as the teams.

> [!CAUTION]
> **Reddit enthusiasm is often about a leak that never shipped.** r/AcheronMainsHSR
> threads from late August 2026 call an Ashveil and Acheron team "gigastonks" and
> "bis" on the strength of leaked changes giving Acheron a Follow-up ATK. Those
> changes are not live in 4.5. Date every Reddit claim, then confirm the
> mechanic it assumes actually exists before repeating the conclusion.

> [!CAUTION]
> Relic set text on guide pages goes stale. The Wind-Soaring Valorous 2-piece
> is **ATK +12%**, confirmed on Prydwen and the wiki. Many pages, and a
> `WebSearch` summary, still state 6% Wind DMG. Confirm every set bonus against
> two sources.

> [!NOTE]
> Character subreddits are thin, exactly as the Reddit section above warns.
> Three of the six Ashveil threads opened had no comments at all. The one real
> discussion of the wind set is a screenshot argument between two players with
> no controlled test. Say so in the guide rather than presenting it as a result.

> [!WARNING]
> Reddit `.rss` comment feeds through Bright Data return an **empty body** on
> roughly half of attempts. Repeat the same request and it usually succeeds. The
> HTML thread page returned a "Prove your humanity" gate. Subreddit listing
> paths such as `r/<sub>/new.rss` are refused outright by Bright Data and need
> `curl`, which the `reddit-search` skill already documents.

#### Welt

[`honkai-star-rail/welt-builds-and-teams.md`](honkai-star-rail/welt-builds-and-teams.md)
— Welt in two roles: the sustain replacement in a sustainless Aventurine •
Waveflair and Ashveil team, and the second Nihility unit in an Acheron team.
Covers the Weightless loop and Ultimate timing, both team sheets, a Welt against
Robin • Summeretto comparison, his two separate relic loadouts, stat targets,
what the rest of the team must change, Light Cones and Eidolon value.
**Written 2026-09-20 for version 4.5.**

Kit text, trace values, relic rankings and ranked teams:

- <https://www.prydwen.gg/star-rail/characters/welt>
- <https://www.prydwen.gg/star-rail/characters/acheron>
- <https://www.prydwen.gg/star-rail/characters/robin-summeretto>
- <https://www.prydwen.gg/star-rail/characters/blade-mortenax>

Reddit — support build numbers, and what players actually run:

- <https://www.reddit.com/r/WeltMains/comments/1whicxi/what_do_i_build_for_a_sub_dpssupport_welt_e4/>
- `r/WeltMains` and `r/AcheronMainsHSR` recent listings, by `curl`

> [!CAUTION]
> **Prydwen alt-version slugs are not predictable.** Mortenax Blade lives at
> `characters/blade-mortenax`, base name first. Aventurine • Waveflair lives at
> `characters/aventurine-waveflair`, also base name first. A wrong slug returns
> a "Character Not Found" page with **HTTP 200**, not an error, so check the
> stripped text before concluding a character has no page.

> [!IMPORTANT]
> **Path gates multipliers, so check the Path before the kit.** Acheron's A4
> scales her damage to 115% or 160% on the count of Nihility allies. Mortenax
> Blade's A6 changes target entirely on whether another Nihility ally exists.
> Swapping one support for another of a different Path can move team damage more
> than any relic choice. Read every trace for a Path condition first.

> [!CAUTION]
> **Elation DMG ignores generic DMG% buffs.** Prydwen states this in both the
> Welt review and the Mortenax Blade review. It makes Welt's A2 trace, worth up
> to 100% DMG, completely dead for an Elation damage dealer while still working
> for their Lightning and Fire teammates. Check the damage type before quoting
> any DMG% buff as a team gain.

> [!NOTE]
> Prydwen character pages carry a "Last review update", a "Last major
> build/calcs update" and a "Last profile update" near the top. Read all three.
> Acheron's page was current at patch 4.0 while the characters compared against
> her released in 4.2 and 4.5, which is why it names neither.

## World of Warcraft

Guides live in `world-of-warcraft/`, with class rotations under
`world-of-warcraft/rotations/`. Name the expansion, patch and season in
every guide, because a rotation can change completely between seasons. As of
2026-09, this is Midnight, patch 12.1, Season 2.

> [!IMPORTANT]
> **To build or update a class rotation guide, use the `wow-rotation-guide`
> skill** in `.claude/skills/wow-rotation-guide/`. It holds the interactive
> intake, the full Warcraft Logs query cookbook, and the six analysis traps that
> produce confident wrong numbers. Do not rebuild that method from scratch.

### Research sources

A starting point, not an exclusive one.

| Source | Good for |
| --- | --- |
| `wowhead.com/spell=<id>` | **The authority on any number.** Live tooltip text, effect values, and a changelog showing every past tuning pass. Check here before quoting a percentage |
| `icy-veins.com/wow/` | Written rotation and cooldown guides. Explicit maintenance lists, ramp sequences, and log-uptime targets. Usually the most current written source |
| `wowhead.com/guide/classes/` | Rotation guides with the reasoning spelled out. Good "explain why" sections |
| `method.gg/guides/` | Independent cross-check. Structured by playstyle. Known to carry stale tuning values |
| **Warcraft Logs MCP server** | **The best source for anything about real play.** Reaches the WCL v2 API directly. Real cast counts, healing by ability, buff uptimes, targeting, and raw event streams from actual pulls. See below |
| `archon.gg/wow/builds/` | Log-derived talent, gear and stat-priority data. Aggregated, so it shows what most players run, not what one player did |
| `maxroll.gg/wow/class-guides/` | Alternative written guides. Check the patch number, they lag |
| Official patch notes | Balance changes and new mechanics |

### Warcraft Logs

A Warcraft Logs MCP server is configured for this repository. It is the highest
value source available for any question about how a spec is actually played,
because it reports what real players pressed rather than what a guide says to
press.

Load the schemas before use. They are deferred, so a direct call fails:

```
ToolSearch  select:mcp__wcl__wcl_get_fights,mcp__wcl__wcl_get_player_info,mcp__wcl__wcl_get_table,mcp__wcl__wcl_get_events,mcp__wcl__wcl_graphql,mcp__wcl__wcl_get_rate_limit
```

| Tool | Returns |
| --- | --- |
| `wcl_get_fights` | Every pull in a report. Fight IDs, boss names, kill or wipe, difficulty, time bounds |
| `wcl_get_player_info` | The roster. Actor IDs, names, class, spec, role. Call this first to map a name to the `sourceID` every other tool needs |
| `wcl_get_table` | The workhorse. Aggregated views: `healing`, `casts`, `damage-taken`, `buffs`, `deaths`, `resources`, and more |
| `wcl_get_events` | Raw event streams. Use for cast sequences, combos, and anything needing exact timestamps |
| `wcl_graphql` | Escape hatch. The only route that accepts a **time window**, which `wcl_get_table` does not |
| `wcl_get_rate_limit` | Points spent this hour. Budget is 3600 per hour, so cost is rarely a problem |

**Timestamps are report-relative milliseconds, not fight-relative.** Read the
fight `startTime` from `wcl_get_fights` and add your offset to it. A window
starting at 0 silently returns data from before the pull.

`wcl_get_table` does not accept a time window. Only `wcl_graphql` does, using
`table(fightIDs: [..], dataType: .., sourceID: .., startTime: .., endTime: ..)`.
The `wow-rotation-guide` skill's cookbook has the full query.

> [!TIP]
> Results are large. A healing table for one fight runs to 370 KB and is
> written to a file rather than returned. Parse it with `python3` through Bash
> and print only the rows you need. A GraphQL result file is sometimes a JSON
> list whose first element holds the real JSON in a `.text` field, so parse
> defensively.

> [!IMPORTANT]
> **Compare inside a fair window.** If one player died, bound every query at
> the death timestamp. Otherwise the survivor's extra minutes read as skill.
> Check `activeTime` against fight duration too. A player at 77% active time
> has a different problem from one who is casting the wrong spells.

> [!WARNING]
> The **website** still cannot be scraped. `/zone/rankings/`,
> `/zone/statistics/` and their filtered variants return an empty body with no
> error, because the pages render client-side. That is a separate route from
> the MCP server, which works. Use the MCP server for report data, and
> `archon.gg` for aggregated ranking data.

> [!CAUTION]
> Written guides carry stale tuning numbers. Confirm every percentage against
> the Wowhead spell page. The spell page changelog also shows the direction of
> travel, which tells you whether a value is mid-nerf.

### Reddit sources

Reddit carries the player-level detail that guide sites omit. Route requests as
described in the global `CLAUDE.md` and the `reddit-search` skill. Do not use
`WebSearch` for Reddit.

- **`r/wow`** — broad and noisy. Best for how a spec *feels* and for common
  complaints, not for rotation detail.
- **`r/CompetitiveWoW`** — high-end raid and Mythic+ discussion. The best
  subreddit for mechanical questions.
- **`r/wownoob`** — surprisingly good. Long, patient answers explaining a spec
  from first principles.
- **`r/worldofpvp`** — PvP only. Its rotation advice does not transfer to PvE.
- **`r/wowguilds`** — recruitment. No mechanical content, filter it out.

> [!NOTE]
> Reddit is thin on current-season raid content for any single spec. Threads
> confirm the shape of a playstyle, but the rotation detail comes from the
> guide sites. Say which is which in the guide rather than implying players
> supplied advice that came from a guide site.

### Terminology

Terms that appear across every guide and are worth using consistently.

- **Spec** — the specialisation, such as Restoration. Name it with the class.
- **Hero talent** — the second talent tree, chosen per spec. Restoration Druid
  picks Keeper of the Grove or Wildstalker.
- **Apex talent** — a Midnight addition. A spec talent node taking up to 4
  points, each point adding a separate effect.
- **HoT / DoT** — heal or damage over time.
- **Pandemic** — refreshing a HoT or DoT during its last 30% carries the
  remaining duration over. No duration is lost.
- **GCD** — global cooldown. An ability that is off the GCD costs no time.
- **Ramp** — casting setup spells before damage lands, rather than reacting.
- **Endgame modes** — raid, Mythic+ (`M+`), and Delves. A spec can be strong in
  one and weak in another, so always name the mode.
- **Tier set** — the seasonal armour bonus, quoted as 2-piece and 4-piece.

### Class Rotations

Guides written for this game, with the sources that produced each one. Add to
this list rather than replacing it.

#### Resto Druid

[`world-of-warcraft/rotations/resto-druid-raid-rotation.md`](world-of-warcraft/rotations/resto-druid-raid-rotation.md)
— raid healing rotation for The Venomous Abyss. Covers the rate-based rotation,
the baseline-versus-spike model, per-boss damage profiles for all nine
encounters, a log-check list, and a gear check. **Rewritten 2026-09-06 from log
data after the guide-site version was proved wrong.**

Primary source — Warcraft Logs, through the MCP server:

- 109 ranked Restoration Druid parses across all nine encounters of zone 53,
  Heroic and Mythic, via `worldData.encounter(id).characterRankings`.
- Per-boss damage profiles from `DamageTaken` tables and per-second timelines.
- One paired comparison from the user's own log, report `t3Jg1qnxFKm9TdRD`.

Live spell values — checked against tooltips, not guides:

- <https://www.wowhead.com/spell=8936/regrowth>
- <https://www.wowhead.com/spell=207383/abundance>
- <https://www.wowhead.com/spell=1263879/natures-bounty>
- <https://www.wowhead.com/spell=1264649/intensity>

Written guides — mechanics only, priorities NOT trusted:

- <https://www.icy-veins.com/wow/restoration-druid-pve-healing-rotation-cooldowns-abilities>
- <https://www.wowhead.com/guide/classes/druid/restoration/rotation-cooldowns-pve-healer>
- <https://www.method.gg/guides/restoration-druid/playstyle-and-rotation>

Reddit — playstyle shape only, no rotation detail:

- <https://www.reddit.com/r/wownoob/comments/1s2edgz/any_tips_for_a_newbie_resto_druid_for_the/>
- <https://www.reddit.com/r/wow/comments/1vwvduq/i_have_not_been_liking_resto_druid_anymore/>

> [!CAUTION]
> Icy Veins, Wowhead and Method all state that a raiding Restoration Druid
> should cast more Regrowth than Rejuvenation. Across 109 ranked logs the
> median ratio is 1.40 and the range is 0.44 to 11.25, and within every boss
> the correlation between that ratio and healing done is zero. The guide sites
> are wrong on this. Do not reintroduce it.

> [!TIP]
> The useful metric is **Wild Growth casts per minute**. The field range across
> 109 ranked logs is 2.95 to 5.08 with per-boss medians between 4.08 and 4.53 —
> the tightest distribution in the dataset. A druid below 2.95 has a real
> problem. A druid inside the band does not, whatever their spell mix.

> [!NOTE]
> All nine encounters in this tier are constant-damage fights. There is no
> burst-shaped control in the sample, so any claim that a rotation is
> conditional on the damage profile is untested here.

#### Ret Paladin

[`world-of-warcraft/rotations/ret-paladin-mplus-rotation.md`](world-of-warcraft/rotations/ret-paladin-mplus-rotation.md)
— Mythic+ rotation quick reference for Season 2. Covers the single-target and
AoE priority lists, the Avenging Wrath burst window with measured offsets, a
macro set derived from the logged cast timings, a Cooldown Manager buff list,
the target-count spender swap, observed cast rates, and the buttons that are not
buttons. **Written 2026-09-11 from 24 mid-tier logs. Macros and Cooldown Manager
setup added 2026-09-12.**

Primary source — Warcraft Logs, through the MCP server:

- 24 Mythic+ keys, 3 from each of the 8 dungeons in zone 55, key level 16 to 18.
  Sampled from `worldData.encounter(id).characterRankings` pages 3, 5, 8 and 11
  to get good-but-not-top players. Sampled DPS band 217k to 389k against roughly
  458k on page 1. All five regions.
- 84 boss pulls (285 min), 151 trash pulls (324 min), 561 Avenging Wrath burst
  windows, 47,021 cast events.

Live spell values — checked against tooltips, not guides:

- <https://www.wowhead.com/spell=1306923/divine-arbiter>
- <https://www.wowhead.com/spell=1296661/paladin-retribution-12-1-class-set-4pc>
- <https://www.wowhead.com/spell=427453/hammer-of-light>
- <https://www.wowhead.com/spell=425518/lights-deliverance>
- <https://www.wowhead.com/spell=1306161> and <https://www.wowhead.com/spell=1306162>
  — the two Divine Arbiter buffs. Same name, same icon, opposite meaning.
- <https://www.wowhead.com/guide/ui/cooldown-manager-setup> — Cooldown Manager
  setup path, updated 2026-08-10 for 12.1.

Written guides — mechanics only, priorities NOT trusted:

- <https://www.icy-veins.com/wow/retribution-paladin-pve-dps-rotation-cooldowns-abilities>
- <https://www.icy-veins.com/wow/retribution-paladin-pve-dps-spec-builds-talents>
- <https://www.method.gg/guides/retribution-paladin/playstyle-and-rotation>
- <https://maxroll.gg/wow/class-guides/retribution-paladin-mythic-plus-guide>
- <https://www.wowhead.com/guide/classes/paladin/retribution/rotation>

Sources that failed:

- `archon.gg` — returned an empty body. The page renders client-side, same
  failure mode as the Warcraft Logs website.
- `wowhead.com/guide/classes/paladin/retribution/hero-talents` — loads, but is
  stale. Updated 2026-01-18 and still titled "The War Within 11.2.7".
- WCL `characterRankings` does not expose talents, so the hero talent split had
  to be derived from cast and buff signatures instead.
- A single GraphQL query with 30 aliased `table` calls times out. Batch smaller.

> [!IMPORTANT]
> Retribution's Avenging Wrath is a 60-second cooldown, not the 120 seconds its
> spell page shows. A hidden spec passive (spell 1258011) cuts it. The same
> passive changes Consecration and Divine Protection.

> [!NOTE]
> The field is 100% Herald of the Sun — 24 of 24 sampled logs, and 60 of 60 top
> ranked parses had zero Hammer of Light casts. Maxroll and Wowhead's hero
> talent page both still recommend Templar. They are stale. No Templar data
> exists in this sample, so nothing in the guide is validated for it.

> [!CAUTION]
> The patch 12.1 tier 4-piece (Divine Arbiter) reshapes the rotation, not just
> the damage. It empowers the spender you did *not* just press, which is why
> both spenders appear in both the single-target and AoE lists. A guide written
> for 4-piece is wrong for a player without it.

#### Holy Paladin

[`world-of-warcraft/rotations/holy-paladin-cdm-buffs.md`](world-of-warcraft/rotations/holy-paladin-cdm-buffs.md)
— which buffs to show on the in-game Cooldown Manager buff bar, and which to
hide. Covers the seven auras that change a press, the eleven that do not, the
Group Buffs raid-frame list, the Spells tab cooldown list, observed cast rates,
and four tooltip values the logs contradict. **Written 2026-09-12 from 44
Warcraft Logs parses.**

Primary source — Warcraft Logs, through the MCP server:

- 34 Mythic raid parses, zone 53, across 7 encounters. Sampled at ranks 1, 9,
  21, 41, 66 and 91 of each `characterRankings` page to span the field.
- 10 Mythic+ parses, zone 55, key level 19 to 21.
- 132 minutes of cast and buff event streams across 12 of those logs, for
  proc-consumption and cooldown-gap analysis.

Live spell values — checked against tooltips, not guides:

- <https://www.wowhead.com/spell=54149/infusion-of-light>
- <https://www.wowhead.com/spell=223819/divine-purpose>
- <https://www.wowhead.com/spell=431522/dawnlight> — the 2-charge spender tracker
- <https://www.wowhead.com/spell=447988/light-of-the-martyr> and
  <https://www.wowhead.com/spell=448087/bestow-light> — one system, not two buffs
- <https://www.wowhead.com/spell=400745/afterimage>
- <https://www.wowhead.com/spell=1296656> and <https://www.wowhead.com/spell=1296657>
  — the Holy 12.1 class set 2-piece and 4-piece
- <https://www.wowhead.com/guide/ui/cooldown-manager-setup> — 12.1 adds a Buffs
  tab with Tracked Buffs and Tracked Bars, plus a healer-only Group Buffs tab

> [!TIP]
> `nether.wowhead.com/tooltip/spell/<id>?dataEnv=1&locale=0` returns a small
> JSON blob with the spell description **and the buff tooltip** as separate
> fields. Scrape that through Bright Data instead of the 200 KB spell page. The
> `buff` field is the only place that says what an aura actually does, and two
> spells sharing a name are separated only there.

> [!IMPORTANT]
> WCL `dataType: Buffs` with **both** `sourceID` and `targetID` set to the
> player returns only self-applied auras. Without `targetID` you get every raid
> buff, flask and trinket as well, which buries the class auras. This one filter
> is what makes a buff-bar question answerable.

> [!CAUTION]
> Four Holy Paladin tooltips disagree with the logs. Infusion of Light claims a
> 10% chance and lands on 37% of Holy Shocks. Avenging Wrath claims 20 seconds
> and runs 30.0 s in all 34 logs. Divine Toll claims a 1 minute cooldown and has
> a 30.0 s floor across 179 gaps. Dawnlight names Holy Prism or Barrier of Faith
> as its trigger, and no sampled log cast either — Divine Toll preceded 190 of
> 191 applications. Measure, do not quote.

> [!NOTE]
> The raid field is 100% Herald of the Sun — 34 of 34 Mythic logs. Mythic+
> splits 6 Lightsmith to 4 Herald across 10 keys. Nothing in the guide is
> validated for Lightsmith in raid, because no such log exists in the sample.

> [!TIP]
> A buff at very high uptime with a high application rate is usually a trap, not
> a priority. Afterimage sits at 98.5% uptime and 11.4 applications per minute,
> which reads like a resource bar. The event stream shows the 20-stack removal
> at the *same millisecond* as the apply that crossed it, so no reaction is
> possible. Check the event stream before recommending any stacking buff.
