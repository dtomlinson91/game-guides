# Game guides

A personal knowledge base of game guides, written as GitHub-style markdown.
One directory per game, one file per subject.

```
<game-slug>/<subject-slug>.md
```

Follow the conventions in the `doc-summary` skill when writing a guide: short
headers of two to four words, an introductory paragraph under every header, and
GitHub alerts (`> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`,
`> [!CAUTION]`) where the reader needs to stop and read.

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

Three rules hold across every game:

1. **Research the subject. Do not answer from memory.** These games change with
   every patch. Damage values, tier placements, and recommended builds go stale
   within a version or two.
2. **Prefer two independent sources for any number.** Prefer a source that
   shows its working over one that only states a conclusion.
3. **Prefer the game's own data over a written guide for any value.** Written
   guides lag behind balance changes. Where the game exposes a live tooltip or
   database page, check the number there and treat the guide as commentary.

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

## World of Warcraft

Guides live in `world-of-warcraft/`. Name the expansion, patch and season in
every guide, because a rotation can change completely between seasons. As of
2026-09, this is Midnight, patch 12.1, Season 2.

### Research sources

A starting point, not an exclusive one.

| Source | Good for |
| --- | --- |
| `wowhead.com/spell=<id>` | **The authority on any number.** Live tooltip text, effect values, and a changelog showing every past tuning pass. Check here before quoting a percentage |
| `icy-veins.com/wow/` | Written rotation and cooldown guides. Explicit maintenance lists, ramp sequences, and log-uptime targets. Usually the most current written source |
| `wowhead.com/guide/classes/` | Rotation guides with the reasoning spelled out. Good "explain why" sections |
| `method.gg/guides/` | Independent cross-check. Structured by playstyle. Known to carry stale tuning values |
| `archon.gg/wow/builds/` | Log-derived talent, gear and stat-priority data. The usable substitute for Warcraft Logs |
| `maxroll.gg/wow/class-guides/` | Alternative written guides. Check the patch number, they lag |
| Official patch notes | Balance changes and new mechanics |

> [!WARNING]
> `warcraftlogs.com` cannot be scraped. `/zone/rankings/`, `/zone/statistics/`
> and their filtered variants all return an empty body with no error, because
> the data renders client-side. Do not spend attempts on it. Use `archon.gg`
> for log-derived data. For a player's own performance, ask them for their log
> rather than trying to fetch one.

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

[`world-of-warcraft/resto-druid-raid-rotation.md`](world-of-warcraft/resto-druid-raid-rotation.md)
— raid healing rotation. Covers maintenance casts, the Abundance cycle, ramp
and burst sequences, downtime filler, cooldown planning, where the healing
actually comes from, and how to diagnose low healing from a log. Written
2026-09-04 against Midnight patch 12.1, Season 2.

Written guides:

- <https://www.icy-veins.com/wow/restoration-druid-pve-healing-rotation-cooldowns-abilities>
- <https://www.icy-veins.com/wow/restoration-druid-pve-healing-easy-mode>
- <https://www.wowhead.com/guide/classes/druid/restoration/rotation-cooldowns-pve-healer>
- <https://www.method.gg/guides/restoration-druid/playstyle-and-rotation>
- <https://www.archon.gg/wow/builds/restoration/druid/raid/overview/heroic/midnight-falls>

Live spell data, used to check the numbers the written guides quote:

- <https://www.wowhead.com/spell=8936/regrowth>
- <https://www.wowhead.com/spell=207383/abundance>
- <https://www.wowhead.com/spell=1263879/natures-bounty>
- <https://www.wowhead.com/spell=1264649/intensity>

Reddit:

- <https://www.reddit.com/r/wownoob/comments/1s2edgz/any_tips_for_a_newbie_resto_druid_for_the/>
- <https://www.reddit.com/r/wow/comments/1vwvduq/i_have_not_been_liking_resto_druid_anymore/>

> [!NOTE]
> Both Reddit threads confirm the shape of the playstyle only. The r/wownoob
> thread carries good first-principles explanation. The r/wow thread returned
> the post with no comments. All rotation detail came from the guide sites and
> the spell pages.
