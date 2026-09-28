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

## Table of contents

Every guide carries a table of contents. Put it directly after the
introductory paragraph and its alerts, before the first `##` section.

- List every `##` section as an anchor link, in document order.
- Nest the `###` sections of long sections one level under their parent. Leave
  out `###` sections of short ones, so the list stays scannable.
- Do not list the table of contents itself or the page title.
- Regenerate it after any reorder or rename. Then check every `(#anchor)` in
  the file against the headers, as the reorder tip below describes.

> [!TIP]
> GitHub builds an anchor from a header by lowercasing it, dropping punctuation
> other than hyphens, and replacing spaces with hyphens. `## The Chapter 10
> warning` becomes `#the-chapter-10-warning`. A short script that compares
> every `](#...)` link against the headers catches a broken link at once.

## Guide voice

Write every guide for any reader of the knowledge base, not as a reply to the
request that produced it. A reader who never saw that request must find
nothing odd in the text.

- Do not mirror the request. No "this answers question 1", "the question you
  asked", "your six questions", or "yes, you can" as a reply.
- Cover the requester's questions as topics. A quick-reference table may list
  common questions, phrased generically: "When is grinding needed?", not
  "When should I grind?".
- Address the player neutrally. Use the imperative ("Promote at level 10") or
  describe the game ("A unit promotes at level 10"). Do not refer to the
  requester's own run, save or history.
- Recommendations are fine, but state them as advice for a type of player
  ("Normal suits a story-first run"), not as advice to one person.

## Citations

Every guide ends with a `## Sources` section, and the body cites it with
numbered markers such as `[1]` or `[3][7]`. **Every marker is a link to its
entry in the Sources list,** so a reader can click through to the URL.

- **Write a marker as `[[N]](#ref-N)`.** It renders as "[N]". Two markers
  together are `[[3]](#ref-3)[[7]](#ref-7)`.
- **Start each list entry with an anchor:**
  `3. <a id="ref-3"></a>[Page title](https://...) — what it supplied`.
- **Link to the entry, not straight to the website.** An entry can hold
  several URLs, and its note says what the source supplied.

- **Do not name a source in the body.** No "Game8 says", "the wiki's tables",
  or "Serenes Forest lists". Put a number where the name would go.
- **Keep the kind of evidence visible.** "Players report [12]" and "one
  ranking rates her C tier [9]" are fine, because the guide must still say
  when advice came from players rather than from data. See rule 4 under
  [Research](#research).
- **Disagreements still name both sides by number,** and say which one the
  guide follows: "One source says Chapter 13 [35]. The shop tables say Chapter
  9 [9]. This guide follows the shop tables."
- **Number the list in groups:** the game's own data or datamined sources
  first, then other wikis and guide sites, then community threads. Continue
  the numbering across groups. Each entry is a link with a short note on what
  it supplied. Dates on community threads only when known.
- Each group may sit in a `<details open>` block so the list can be folded.
- Before committing, check that every cited number exists in the list and
  every listed entry is cited. Also check that no bare `[N]` marker is left
  unlinked.

> [!TIP]
> This script runs all three checks. It prints empty lists when the guide is
> clean.
>
> ```python
> import re, sys
> t = open(sys.argv[1]).read()
> anchors = set(re.findall(r'<a id="(ref-\d+)"></a>', t))
> links = set(re.findall(r'\]\(#(ref-\d+)\)', t))
> print('unresolved', sorted(links - anchors))
> print('uncited', sorted(anchors - links))
> print('bare', re.findall(r'(?<!\[)\[(\d+)\](?!\()', t))
> ```
>
> To convert a guide that uses bare markers, apply
> `re.sub(r'(?<!\[)\[(\d+)\](?!\()', r'[[\1]](#ref-\1)', text)` to the body.
> In the Sources section, apply it only to prose and tables, not to the list
> numbers. Add the anchors to the list entries with
> `re.sub(r'^(\d+)\. (?!<a id)', r'\1. <a id="ref-\1"></a>', src, flags=re.M)`.

> [!NOTE]
> The guides written before 2026-09-24 name their sources inline. Convert a
> guide to numbered citations when it is next edited.

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

Five rules hold across every game:

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
5. **Explain how each system works, not only what to do with it.** A guide
   must leave the reader able to reason about a system they have not seen
   advice for. For every system the guide touches, research and state:
   - what it is, and what it feeds into;
   - what is **permanent** and what is **temporary**, and what belongs to the
     character against what belongs to the item or slot;
   - how often it can be used, what limits or resets it, and what it costs;
   - what can be moved, swapped or undone, and what cannot;
   - how it interacts with the other systems.

   Keep it at the level of the concept. A reader needs "inherited skills stay
   with the unit when the ring moves", not the full cost table for every
   skill. Give a short systems overview near the top of the guide, then one
   "how it works" part inside each system's section.

> [!TIP]
> Write these as explicit research questions before searching: "does X stay
> when Y is removed", "how many times per map", "what resets it". A reader's
> confusion usually sits in exactly these questions, and guide sites rarely
> answer them directly. The Fire Emblem Engage ring questions needed a
> dedicated research pass and three extra sources to answer.

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

## Fire Emblem: Three Houses

Guides live in `fire-emblem-three-houses/`. This game is finished and no longer
patched, so values do not go stale. That makes datamined sources reliable and
long-lived. What does change is community consensus on what is worth doing, and
that consensus is written mostly for Maddening difficulty.

### Research sources

A starting point, not an exclusive one.

| Source | Good for |
| --- | --- |
| `fireemblemwiki.org` | **The best source.** MediaWiki, so `?action=raw` returns clean wikitext with no boilerplate. Full mechanics with exact numbers: professor level, lessons, class mastery, adjutants, gambits, battalions |
| `serenesforest.net/three-houses/` | Datamined tables: proficiencies, growth rates, recruitment, class requirements, monastery activities. Cross-check against the wiki, it carries at least one copy-paste error |
| `fe3h.com` (Triangle Attack) | Data-driven guide site. The wiki cites it for professor experience and lecture values |
| `game8.co`, `gamewith.net` | Quick lookups. Thin on mechanics |
| Reddit | The only source for what a Hard-mode run actually feels like, and for which advice is Maddening-only |

> [!IMPORTANT]
> **Use `?action=raw` on Fire Emblem Wiki.** `https://fireemblemwiki.org/wiki/
> <Page>?action=raw` returns plain wikitext through Bright Data. A rendered page
> or a Serenes Forest page costs roughly 13k tokens of navigation markup before
> any content. The raw route costs almost none. Note that
> `/index.php?title=X&action=raw` returns "File not found" — only the `/wiki/`
> path form works.

> [!CAUTION]
> Almost every written guide for this game is written for **Maddening**. Its
> advice is frequently wrong for Hard, not merely excessive. Death Blow and
> Hit +20 are the clearest case. Always check which difficulty a claim assumes
> before repeating it.

### Reddit sources

Route requests as described in the global `CLAUDE.md` and the `reddit-search`
skill. Do not use `WebSearch` for Reddit.

- **`r/FireEmblemThreeHouses`** — the main subreddit and the right one for this
  game. Active, and helpful on Hard versus Maddening differences.
- **`r/fireemblem`** — the series subreddit. Broader, more tier-list discussion.

> [!NOTE]
> Searching `beginner tips` and `hard mode` in `r/FireEmblemThreeHouses`
> returned 31 and 50 results respectively, and both sets were useful. Two
> queries were enough. Do not spend more of the discovery quota than that.

### Terminology

- **Route** — the story path after the timeskip. Four exist. Only Black Eagles
  splits.
- **Part 1 / Part 2** — before and after the timeskip at Chapter 12.
- **Skill level** — a letter rank, E to S, in a weapon, a movement type or
  Authority. Not the same as character level.
- **Budding talent** — a hidden skill that becomes a strength after 12
  instructions, and grants an ability or combat art.
- **Class mastery** — counted in combats, not experience. Grants a permanent
  ability or combat art.
- **Professor level** — Byleth's rank, E to A+. Sets activity points, lecture
  points, battle points, adjutant slots and monthly gold.
- **Battalion** — an equippable squad. Gates gambits, gated by Authority.
- **Gambit** — a battalion's special attack. Accuracy runs on Charm.
- **Player phase / enemy phase** — abbreviated PP and EP. Which phase a build is
  designed for is the main axis of build discussion for this game.

### Guides written

#### Beginner guide

[`fire-emblem-three-houses/beginner-guide.md`](fire-emblem-three-houses/beginner-guide.md)
— a first-playthrough reference for Hard / Classic with the Expansion Pass.
Covers the weekly loop with exact instruction and goal numbers, the Sunday
choice and both point pools, exploration priority, when grinding is worth a
battle point, class change rules and every class's requirements, team shape,
battalions, gambits, adjutants, recruitment with the support-discount tables,
common mistakes, missable windows, and per-character proficiencies with the
classes the game itself suggests. **Written 2026-09-20.**
**Rewritten 2026-09-27** to the current conventions: neutral voice, a table of
contents, a "How Three Houses works" overview with a permanent-or-temporary
table, a quick-reference table, a combat basics section, per-chapter
deployment slots, a unique-classes table for the lords, Byleth,
Jeritza and the Dancer, and 52 numbered citations. Character and class tables gained
a **Role** column (Tank, physical damage, magic damage, archer, healer, flier),
read from each character's goal-change requests. The rewrite also corrected
several claims from the first version: Ashe and Lorenz, the Ashen Wolves
unlocks, the recruiting deadline, and the route-split timing.

Added in the 2026-09-27 rewrite — Fire Emblem Wiki raw pages:

- Mechanics: Class_change/Nintendo_Switch_games, Intermediate_Seal, Skills
  (ability slots), Combat_art, Weapon_level, Support, Turn_rewind, Durability,
  Forge, Tea_Party, Crests, Difficulty, Bow, Attack_speed, Dancer
- Unique classes: Lord, Enlightened_One, Armored_Lord, Emperor, High_Lord,
  Great_Lord, Wyvern_Master, Barbarossa, Death_Knight_(class). `Death_Knight`
  redirects to the Jeritza character page. The class-change page's "Unique
  classes" table lists every one with the chapter it arrives
- Roster: Downloadable_content_in_Fire_Emblem:_Three_Houses, Yuri/Stats (and
  Balthus, Constance, Hapi), Anna_(Three_Houses), Ashe,
  Lorenz_(Three_Houses), War_for_the_Weak
- Chapters: Familiar_Scenery (recruiting window), Throne_of_Knowledge (route
  split, departures, Part 1 deadlines), The_Cause_of_Sorrow (White Heron Cup),
  and the map subpages from List_of_chapters_in_Fire_Emblem:_Three_Houses for
  deployment slots
- Other sites: Fandom Certification_Exam, Battalion, Divine_Pulse and
  White_Heron_Cup; <https://www.fe3h.com/battalions>; Game8 archives 292154
  (Ashen Wolves), 292166 (Anna) and 286838 (White Heron Cup); GameWith
  articles 10296 (motivation) and 10291 (Classic and Casual)

> [!TIP]
> **Deployment slots are in the `ally=` field of each battle-map subpage**,
> such as `Mutiny_in_the_Mist/The_Magdred_Ambush`, not on the chapter page.
> The value reads "forced–maximum" and is the same on every difficulty tab.
> Find the map subpage through the chapter page's `[[/Map|...]]` link. Two
> chapters, `Conclusion_of_the_Crossing_Roads` and `To_the_End_of_a_Dream`,
> carry the block on the chapter page itself. A page name with "ó" must be
> percent-encoded (`F%C3%B3dlan`), or Bright Data returns HTTP 400.

> [!CAUTION]
> **The first version of this guide carried three wrong claims.** It said a
> paralogue decides whether Ashe or Lorenz returns. Only Dedue's paralogue
> does. Ashe and Lorenz desert by route and come back by "Persuade" in battle.
> It said the Ashen Wolves unlock after *Cindered Shadows* chapter 1. They
> unlock after chapters 2, 4, 5 and 6. It also placed the Edelgard conversation
> for the route split in the month before Chapter 11. The conversation happens
> in the Chapter 11 month.

Sources that failed in the 2026-09-27 rewrite:

- Wiki redirects that return only `#REDIRECT`: `Ability` (use `Skills`),
  `Skill_level` (use `Weapon_level`), `Crest` (use `Crests`), `Motivation`
  (use `Lesson`), `Cindered_Shadows`, `Crimson_Flower`.
- Wiki pages that do not exist: `White_Heron_Cup`, `Route_split`,
  `Fire_Emblem:_Three_Houses_–_Cindered_Shadows`.
- `serenesforest.net/three-houses/miscellaneous/calculations/` redirects to
  Shadow Dragon, as it does for Engage. `Attack_speed` on the wiki gives the
  follow-up threshold, but its formula sits in an unexpanded template.
- `Class_change/Nintendo_Switch_games`, `Class_mastery` and `Support` returned
  an empty body on the first try and worked on retry.
- No source says whether a battalion moves freely between units, or whether a
  class's base-stat raise survives leaving the class.

Primary source — Fire Emblem Wiki, raw wikitext:

- <https://fireemblemwiki.org/wiki/Professor_level?action=raw> — every point
  pool, professor experience thresholds, and per-activity experience
- <https://fireemblemwiki.org/wiki/Lesson?action=raw> — instruction and goal
  numbers by difficulty, motivation, group tasks, and the full per-character
  goal-request table with the class each goal targets
- <https://fireemblemwiki.org/wiki/Garreg_Mach_Monastery?action=raw> — free-day
  options and which activities cost a point
- <https://fireemblemwiki.org/wiki/Skirmish?action=raw> — auxiliary battle cost
  by difficulty
- <https://fireemblemwiki.org/wiki/Class_mastery?action=raw>
- <https://fireemblemwiki.org/wiki/Adjutant?action=raw>
- <https://fireemblemwiki.org/wiki/Battalion?action=raw>
- <https://fireemblemwiki.org/wiki/Gambit?action=raw>
- <https://fireemblemwiki.org/wiki/Divine_Pulse?action=raw>
- <https://fireemblemwiki.org/wiki/Dark_Flier?action=raw>
- <https://fireemblemwiki.org/wiki/Abyssian_Exam_Pass?action=raw>

Cross-check — Serenes Forest:

- <https://serenesforest.net/three-houses/characters/skill-levels/>
- <https://serenesforest.net/three-houses/characters/budding-talents/>
- <https://serenesforest.net/three-houses/characters/recruitment/>
- <https://serenesforest.net/three-houses/classes/class-change/>
- <https://serenesforest.net/three-houses/classes/detailed-view/>
- <https://serenesforest.net/three-houses/monastery/> — dining-hall,
  faculty-training, seminars, renown-saint-statues

Reddit — playstyle only, no numbers:

- <https://www.reddit.com/r/FireEmblemThreeHouses/comments/1i8reiq/tips_for_hard_mode_after_being_used_to_normal_for/>
- <https://www.reddit.com/r/FireEmblemThreeHouses/comments/1bb3qtn/what_should_i_know_about_choosing_a_house_and/>

Sources that failed:

- `fireemblemwiki.org/index.php?title=X&action=raw` — returns "File not found".
  Use the `/wiki/<Page>?action=raw` form.
- `fireemblemwiki.org/api.php` — also "File not found". The MediaWiki API is not
  reachable.
- Serenes Forest proficiency tables use **images**, not text, for strengths and
  weaknesses. Parse the filenames: `professor-up` is a strength, `professor-down`
  a weakness, `professor-stars` a budding talent, and `professor-overlap2` means
  weakness **and** budding talent together.

> [!CAUTION]
> Serenes Forest's class detail page lists the Dark Flier's abilities as
> "Fistfaire, Unarmed Combat, Heal". That is the War Monk row repeated. The real
> values are Canto, Black Tomefaire and Transmute. Assume that page may hold
> other copy-paste errors and cross-check any class row that looks odd.

> [!IMPORTANT]
> Serenes Forest's weekly lesson figures (+28 neutral, +32 strength) are
> **Normal-difficulty** values and are not labelled as such. Hard is +24 and
> +28, Maddening +20 and +24. Always state the difficulty next to a skill
> experience number.

> [!TIP]
> The most useful table found for "what class should this character be" is the
> **goal change request** table on the wiki's Lesson page. Every character's
> optional study goals name the class the developers intended, which is the
> closest thing to an in-game recommendation. It covers all 30-plus playable
> characters.

#### Route planner

[`fire-emblem-three-houses/route-planner/`](fire-emblem-three-houses/route-planner/)
— a static web app that turns the beginner guide into a plan for one run.
Runs are saved in `localStorage`. Tabs: Overview (role coverage), Roster,
Training (colour-coded class explorer, weekly goals, skill gaps, exam
milestones), Recruitment (per-recruit steps and what Byleth must train),
Monday plan and Checklist. Launch it with `docker compose up -d --build` in
that directory, then open <http://localhost:8347>. Port 8080 is taken on
this machine by another project, so the port is set by `PLANNER_PORT`. **Built 2026-09-27.**

> [!IMPORTANT]
> **Read [`SPEC.md`](fire-emblem-three-houses/route-planner/SPEC.md) before
> changing the planner.** It records every request behind the tool, the game
> rules it applies and the change log. Add each new request to it when it is
> built.

- `data.js` is generated by `build_data.py` from the guide's tables, plus the
  wiki Lesson page (goal-change requests) and the Serenes Forest skill-levels
  page (starting ranks). Rerun it after changing the guide's character, class,
  unique class or requirements tables. Do not edit `data.js` by hand.
- `rules.js` holds the rules that the guide states as prose: route
  availability, departures, default class plans, the checklist and the rank
  costs. Each rule names its guide section in a comment. Update it when those
  sections change.
- Faculty Training instructors come from
  <https://serenesforest.net/three-houses/monastery/faculty-training/>.
- Community ratings in `rules.js` (`COMMUNITY`) come from four Maddening tier
  lists. The user accepted Maddening ratings for Hard. The best source is the
  r/fireemblem community list,
  <https://www.reddit.com/r/fireemblem/comments/g7v8zk/>, which tiers units in
  and out of house and by route. The others are Game8 archive 286829,
  GamingScan and Pro Game Guides. Full URLs are in `SPEC.md`. Reddit tier lists
  posted as images cannot be read, because the curl hook blocks `i.redd.it`.
- `.github/workflows/route-planner-pages.yml` deploys the planner to GitHub
  Pages at <https://dtomlinson91.github.io/game-guides/> on pushes to `main`
  that touch its directory. If a new app file is added, add it to the
  workflow's copy step too, or the live site will miss it.
- Test in headless Chrome over HTTP, not `file://`. Under `file://` an error
  shows only as "Script error." with no detail. A harness page that seeds
  `localStorage` before `app.js` loads, then clicks through, catches most
  faults.

## Fire Emblem Engage

Guides live in `fire-emblem-engage/`. The game is finished at patch 2.0.0 and
no longer patched, so datamined values do not go stale. As with Three Houses,
almost all community advice and every tier list assumes **Maddening**. Check
which difficulty a claim assumes before repeating it.

### Research sources

A starting point, not an exclusive one.

| Source | Good for |
| --- | --- |
| `fireemblemwiki.org` | **The best source.** Use `/wiki/<Page>?action=raw`. Donations, skirmish scaling, seals and shop stock by chapter, bond costs, SP rules, class requirements, per-chapter deployment slots (`ally=` field on each chapter page) |
| `serenesforest.net/engage/` | Recruitment, base stats, growths, proficiencies (`characters/other-data/`), Bond Ring pull rates. Tables are **plain text** here, not images |
| `game8.co` | Tier list stated for Normal and Hard, pairings, inheritance costs. **Carries errors**, see below |
| `gamerant.com`, `rpgsite.net` | Independent pairing and tier cross-checks. Gamer Guides mirrors Game8, so it is not independent |
| Reddit `r/fireemblem` | How the game plays in practice. `r/FireEmblemEngage` returned 0 results and then HTTP 403. `r/FEEngage` may be the real Engage subreddit and was not searched |

### Guides written

#### Beginner guide

[`fire-emblem-engage/beginner-guide.md`](fire-emblem-engage/beginner-guide.md)
— a first-playthrough reference for Normal or Hard. Covers quick answers to six
beginner questions, the between-chapter routine, a chapter roadmap of recruits
and unlocks, when to grind and how skirmishes scale, combat basics, common
mistakes, the Chapter 10 ring-loss warning, missables, team building, a roster
table with each unit's default promotion, class changes and proficiency
sources, every Emblem with pairings, best inheritable skills, Bond Rings and
engraving, Somniel activities, donation costs and a plan, supports, difficulty
choice and the Expansion Pass. **Written 2026-09-24.** The same day it gained a
table of contents, a ring-mechanics section (what stays with the unit and what
goes with the ring, passing rings around, engaging, bond levels, how
inheritance works), and a section on catching up benched early units. It was
then rewritten in the neutral guide voice, gained a "How Engage works" systems
overview, and moved to numbered citations with a 70-entry Sources list.

Ring mechanics — added sources:

- <https://fireemblem.fandom.com/wiki/Emblem_Ring>,
  <https://fireemblem.fandom.com/wiki/Engage>,
  <https://fireemblem.fandom.com/wiki/Engrave> — per-pair bond, no mid-battle
  swaps, one copy of each ring, engravings survive ring loss
- <https://www.thegamer.com/fire-emblem-engage-emblem-rings-complete-guide/> —
  inheritance needs bond, not the ring equipped
- <https://www.gamerguides.com/fire-emblem-engage/guide/classes/changing-classes/how-to-learn-weapon-proficiencies-in-fire-emblem-engage>
  — proficiency is permanent
- <https://gameskinny.com/6a5xm/how-to-swap-emblem-rings-in-fire-emblem-engage>
- <https://www.gamespot.com/articles/fire-emblem-engage-how-emblem-and-bond-rings-work/1100-6510733/>

Catch-up — added sources:

- Wiki raw: Mercurius, Parthia (Lucina's, not Marth's), Professor's_Guidance
  (Mentorship; worked on the second attempt), Nobility (Lineage),
  Novice_Book (SP only, no EXP), Starsphere_(skill)
- <https://serenesforest.net/engage/characters/growth-rates/> — early joiners
  average 266 total personal growth, late joiners 284
- <https://serenesforest.net/engage/classes/maximum-stats/>
- <https://game8.co/games/Fire-Emblem-Engage/archives/402404> — EXP farming
- <https://game8.co/games/Fire-Emblem-Engage/archives/403090> — skirmish reroll
- Reddit `r/fireemblem` threads 113epd5, 1d94rjf, 1894fdt, 13aue4c, 10qn984,
  11b4i3t, 15h7kuz, 10kqc6x — catch-up habits and the game-over EXP trick

> [!WARNING]
> **Two ring questions stay unconfirmed.** No source says whether bond levels
> with the six Chapter 10 rings survive until the rings return. The best lead,
> a GameFAQs thread titled "Do not neglect your early emblem bond levels!", is
> blocked. The engage meter size also conflicts: 8 steps per attack on Fire
> Emblem Wiki against 6 combats on Fandom. Players' reports support the wiki.
> A WebSearch summary also claimed that bond level travels with the ring. That
> is wrong. Bond is stored per unit and Emblem.

> [!NOTE]
> The EXP formula likely sits in a Google Sheet linked from Reddit thread
> 15h7kuz. Bright Data refuses `docs.google.com` with "This endpoint is not
> supported".

Primary source — Fire Emblem Wiki, raw wikitext (`/wiki/<Page>?action=raw`):

- Somniel, Donation, Skirmish, Arena, Master_Seal, Second_Seal, Reclass,
  Class_change, Class_change/Nintendo_Switch_games, Proficiency, Experience,
  Difficulty, Gameplay_modes, Draconic_Time_Crystal, Turn_rewind, Attack_speed,
  Break, Weapon_triangle, Unit_type, Support, Paralogue, Emblem_Rings, Emblem,
  Skill_point, List_of_classes_in_Fire_Emblem_Engage,
  List_of_skills_in_Fire_Emblem_Engage, List_of_chapters_in_Fire_Emblem_Engage,
  The_Fell_Dragon_Sombron, and the Emblem character pages (Marth, Sigurd,
  Celica, Micaiah, Roy, Leif, Lucina, Lyn, Ike, Byleth, Corrin) under their
  `=={{FE17}}==` header
- Skill pages: Canto, Desperation, Speed_%2B, Draconic_Hex,
  Lunar_Brace_(skill), Dual_Assist

Cross-check — Serenes Forest:

- <https://serenesforest.net/engage/characters/recruitment/>
- <https://serenesforest.net/engage/characters/other-data/> — proficiencies
- <https://serenesforest.net/engage/characters/growth-rates/>
- <https://serenesforest.net/engage/characters/personal-skills/>
- <https://serenesforest.net/engage/weapons-items/bond-rings/> — pull rates

Guide sites — rankings and pairings only:

- <https://game8.co/games/Fire-Emblem-Engage/archives/402818> — tier list,
  Normal and Hard
- <https://game8.co/games/Fire-Emblem-Engage/archives/401367> — class change
- <https://game8.co/games/Fire-Emblem-Engage/archives/401515> — inheritance
- <https://game8.co/games/Fire-Emblem-Engage/archives/403103> — pairings
- <https://game8.co/games/Fire-Emblem-Engage/archives/403692> — DLC
- <https://gamerant.com/fire-emblem-engage-tier-list/>
- <https://www.rpgsite.net/feature/13734-fire-emblem-engage-emblem-ring-unlock-list>
- <https://www.rpgsite.net/feature/13739-fire-emblem-engage-emblem-pairings-best-rings-for-each-character>

Reddit — playstyle, grinding, Somniel and donation opinion:

- <https://www.reddit.com/r/fireemblem/comments/13eo89q/> — best "wish I knew"
  thread
- <https://www.reddit.com/r/fireemblem/comments/1nmz99b/>
- <https://www.reddit.com/r/fireemblem/comments/1ot1tzs/> — Somniel priorities
  and a donation schedule
- <https://www.reddit.com/r/fireemblem/comments/10zq05p/> — donations
- <https://www.reddit.com/r/fireemblem/comments/1vz35e4/> — first-ever player
  on Hard
- <https://www.reddit.com/r/fireemblem/comments/1h7fpog/>,
  <https://www.reddit.com/r/fireemblem/comments/1q4jstt/>,
  <https://www.reddit.com/r/fireemblem/comments/1qsh87i/> — promotion, Hard
  versus Maddening
- <https://www.reddit.com/r/fireemblem/comments/10pd0cp/> — Hard/Classic Emblem
  evaluation (post only, no comments)
- <https://www.reddit.com/r/fireemblem/comments/16nm1rx/> — Maddening community
  tier list

Sources that failed:

- Wiki pages that do not exist return a roughly 185 KB Chrome error page, not
  an error: `Engrave`, `Bond_fragment`, `Bond_Fragment`. Engraving data lives on
  the `Somniel` page. `Tempest_Trials` is the Heroes mode; Engage's is on
  `Somniel`.
- Empty bodies: `Fire_Emblem_Engage`,
  `Downloadable_content_in_Fire_Emblem_Engage`, `Professor's_Guidance`.
- `serenesforest.net/engage/miscellaneous/calculations/` redirects to Shadow
  Dragon. **No source documents Engage's kill-EXP formula.**
- Serenes Forest forums return empty bodies. GameFAQs returns "Request
  Blocked".

> [!CAUTION]
> **Game8 recommends classes units cannot enter.** Panette to Warrior needs
> Bow, Anna to Sage needs Tome, Yunaka to Swordmaster needs Sword, and Vander,
> Louis or Amber to Great Knight needs a second weapon. It also lists Pandreo
> at Chapter 14 (really 12) and Goldmary at Anna's paralogue (really Chapter
> 16). Check every class suggestion against the unit's proficiencies on Serenes
> Forest.

> [!IMPORTANT]
> Reddit numbers checked against the wiki: unlimited rewinds on Normal and 10
> per map on Hard (true), doubling at 5 Speed (true), Brodia level 5 costing
> 90,000 gold (true). "Skirmishes scale off your 5 strongest units" is **false**
> as worded: enemy level is the average of your top X units, where X is the
> map's deployment count, plus 2. The "99-turn hidden limit" is unverified for
> Engage and was left out.

> [!NOTE]
> The wiki's shop stock tables name tabs by chapter. A tab named "Chapter 9"
> opens once Chapter 8 is cleared. Master Seals are in the shop from Chapter 9,
> not Chapter 13 as Game8 says.

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

> [!CAUTION]
> **This repository is public. Never put credentials in a tracked file.**
> `.mcp.json` reads the Warcraft Logs client from `${WCL_CLIENT_ID}` and
> `${WCL_CLIENT_SECRET}`, which are exported in `~/.zshrc`. If the MCP server
> fails to authenticate, check that Claude Code was started from a shell that
> loaded them.

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

#### Holy Paladin — Lightsmith

[`world-of-warcraft/rotations/holy-paladin-lightsmith-mplus-rotation.md`](world-of-warcraft/rotations/holy-paladin-lightsmith-mplus-rotation.md)
— Mythic+ rotation on the Lightsmith hero tree, written for a reader who knows
Herald. Covers what changes from Herald, the damage loop and the healing loop,
proc spending, the Avenging Wrath window, burst healing, cooldown gaps, a check
of the Reddit claim that Lightsmith plays for damage through Shield of the
Righteous, buttons you will not press, troubleshooting, observed rates, buffs
to track, stats and gear, talents that change buttons, and two macros.
**Written 2026-09-24 from 16 keys at level 21 to 22.** Burst healing and the
spender rule were added the same day, measured against 156 group damage
spikes.

Primary source — Warcraft Logs, through the MCP server:

- 16 Mythic+ keys, 2 from each of the 8 dungeons in zone 55, from page 1 of
  `characterRankings` with `metric: hps`. Page 1 holds keys 20 to 22 only.
- 13 distinct players, CN 9, EU 5, US 2. 494 minutes, 283 Avenging Wrath
  windows, 23,835 casts.
- Hero tree from a `table(dataType: Casts, abilityID: 432459)` query per parse.
  Holy Bulwark casts mark Lightsmith. 33 of 44 top-10 parses were Lightsmith.

Live spell values — nether tooltips, checked against the logs:

- `https://nether.wowhead.com/tooltip/spell/<id>?dataEnv=1&locale=0` for 432459,
  432472, 415091, 460822, 387178, 414193, 1271436, 275773, 1241413, 85673,
  82326, 414273, 1296656, 1296657, 31884 and 375576.
- <https://murlok.io/paladin/holy/lightsmith/m+> — top-50 talent picks and
  stats. The only source whose stat order matched the logs.

Written guides — mechanics only, priorities NOT trusted:

- <https://www.icy-veins.com/wow/holy-paladin-pve-healing-mythic-plus-tips>
- <https://www.icy-veins.com/wow/holy-paladin-pve-healing-rotation-cooldowns-abilities>
- <https://www.icy-veins.com/wow/holy-paladin-pve-healing-spec-builds-talents>
- <https://www.icy-veins.com/wow/holy-paladin-pve-healing-stat-priority>
- <https://www.wowhead.com/guide/classes/paladin/holy/talent-builds-pve-healer>
- <https://www.wowhead.com/guide/classes/paladin/holy/rotation-cooldowns-pve-healer>
- <https://www.method.gg/guides/holy-paladin/playstyle-and-rotation>
- <https://maxroll.gg/wow/class-guides/holy-paladin-mythic-plus-guide>

Sources that failed:

- Reddit — `r/HolyPaladin` does not exist (search redirects with 302). The
  other two searches hit the rate limit (empty body, then 429). No thread was
  found for the claim the user read.
- WCL `CombatantInfo` gear entries carry item IDs but no names or slot fields.
  The array index is the slot: 12 and 13 are trinkets. Take item names from the
  `gear` list in any `table` result, which does carry them.
- `CombatantInfo` came back empty for one log (L15). It was not an error.
- Wowhead guide text sits in `WH.markup` JavaScript, not in the HTML.
- Icy Veins talent trees render client-side. Maxroll's stat priority is an
  image.

> [!CAUTION]
> Avenging Wrath's tooltip says 2 minutes and 20 seconds, or 30 with Sanctified
> Wrath. On Lightsmith Holy, all 16 logs show an **18.0-second** window and a
> **90-second** floor. Measure it rather than quoting it.

> [!IMPORTANT]
> Lightsmith Holy has **zero** Divine Toll, Beacon of Virtue, Eternal Flame,
> Holy Prism and Consecration casts. Consecration still deals 21% of damage,
> because Righteous Judgment drops it on every Judgment. Maxroll recommends
> Lightsmith but still lists Divine Toll and Eternal Flame in its priority.

> [!TIP]
> **Burst healing needs the group's damage taken, not the healer's casts.**
> The query that worked, one call per key with no paging needed:
> `events(fightIDs: [..], dataType: DamageTaken, startTime, endTime,
> includeResources: true, limit: 10000, filterExpression: "ability.id != 1 and
> type = 'damage'")`. It drops melee swings, leaving 3,600 to 7,600 events per
> key. The target's health is on the event only when `resourceActor` is 2, or
> when it is 1 and `sourceID` equals `targetID`. Reading it on 1 alone
> silently loses most players. The `graph` query returns a smoothed rolling
> average and cannot show a spike.

> [!TIP]
> **Beacon holders.** Query `events(dataType: Buffs, sourceID: <healer>,
> abilityID: 53563)` and `156910` with `playerDetails(fightIDs: [..])` for roles.
> A beacon placed before the key logs no apply, so a player whose first event
> is `removebuff` or `refreshbuff` held it from the start. A beacon that never
> moved logs **nothing**. For that case, read the `targets` of the
> `Beacon of Light` (53652) entry in the healing table, which shows who
> received the transfer. A small `graphql` result comes back inline, not as a
> file. Add `masterData { actors(type: "Player") { id name } }` to force a
> file you can parse.

> [!TIP]
> A cast pair 60 ms apart is not always a macro. Holy Light followed by Flash of
> Light hit 693 such pairs. The global cooldown ends during the 2-second cast,
> so a queued instant fires at once. Check that the first spell is instant
> before you call a pair a macro.
