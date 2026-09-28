# Route planner specification

The requirements, rules and design decisions behind the Three Houses route
planner. It records every request that shaped the tool, so later changes can
be checked against what was asked for. Add each new request to
[Requirements](#requirements) and [Change log](#change-log) when it is
implemented.

> [!IMPORTANT]
> The planner must stay consistent with
> [`../beginner-guide.md`](../beginner-guide.md). Every game rule it applies
> comes from that guide. When the guide changes, rerun `build_data.py` and
> check [Game rules applied](#game-rules-applied) against it.

## Contents

- [Purpose](#purpose)
- [Requirements](#requirements)
  - [Runs and storage](#runs-and-storage)
  - [Team and roles](#team-and-roles)
  - [Class planning](#class-planning)
  - [Training advice](#training-advice)
  - [Recruitment](#recruitment)
  - [Delivery](#delivery)
- [Game rules applied](#game-rules-applied)
- [Design decisions](#design-decisions)
- [Known limits](#known-limits)
- [Ideas not yet built](#ideas-not-yet-built)
- [Change log](#change-log)

## Purpose

What the tool is for. It turns the beginner guide into a plan for one
playthrough, so the player can focus on the game with every reference to hand.

The planner answers three questions for a planned team:

1. **Which skills to focus.** The goals to set each week, per unit.
2. **What the team looks like.** Which role each unit fills, and which roles
   are missing.
3. **What to do in training.** Explicit steps: goals, instruction focus, group
   tasks, the next exam, and what Byleth must train to recruit.

It is for personal use. It needs to look good and be quick to use, not to be
production-ready.

## Requirements

Each request, grouped by subject, with where it is implemented. "Tab" names
refer to the tabs in the app.

### Runs and storage

How runs are created and kept.

| Requirement | Implemented in |
| --- | --- |
| Store state in the user's browser storage | `localStorage`, key `fe3h-route-planner-v1` (`app.js`, `load` and `save`) |
| Create runs and name them | Welcome form, "+ New run" dialog, "Rename" |
| Keep several runs and switch between them | Sidebar run list |
| Duplicate, export, import and delete a run | Sidebar run settings, "Import" button |

> [!WARNING]
> Browser storage is per browser and per origin. `localhost:8347` and a file
> opened from disk hold separate runs. Export a run to move or back it up.

### Team and roles

How the team is chosen and summarised.

| Requirement | Implemented in |
| --- | --- |
| Select characters for the planned route | Roster tab, one card per character |
| Choose the house, so the tool knows who comes from other houses | Run settings: house, then route. Black Eagles picks Crimson Flower or Silver Snow |
| Show what role each character plays in the team | Role chips on Roster, Overview and Training. The role follows the class the unit ends on |
| Overview of the team and the roles it fills | Overview tab: Team balance card, a "Needs attention" list, a training table |
| A team overview that shows at a glance whether the team is balanced | Team balance card: a verdict (Balanced, 1 gap, Unbalanced), gap chips, a unit-by-role grid with column totals against targets, damage and movement mix bars, deployment slots. A compact strip of the same counts sits at the top of the Roster tab |
| Highlight students from other houses that the community rates strong | Roster: a star badge and a glow on top and strong recruits, with the reason, plus a "★ Strong recruits" filter. The badge also shows on Recruitment cards and the Training header. See [Community ratings](#community-ratings) |

### Class planning

How classes are chosen for each unit.

| Requirement | Implemented in |
| --- | --- |
| Plan the classes wanted for each character | Training tab, class plan per tier: Beginner, Intermediate, Advanced, Special, Master |
| Start from the classes the game suggests | Default plans in `rules.js` (`PATHS`), built from goal-change requests |
| On selecting a character, show the classes available at each level, nicely presented | Training tab, class explorer: one card grid per tier |
| Colour each class by fit: recommended by the game, a crossover that is doable, or one that needs extra work | Card colours: gold, green, grey. See [Class fit](#class-fit) |
| Show the classes the route grants without an exam | "Route grants" row in the explorer, and in the exam milestones |

### Training advice

What the tool tells the player to do each week.

| Requirement | Implemented in |
| --- | --- |
| Show which skills to focus for a character | Training tab: "This week" callout and "Skills to train" table |
| Tell the player explicitly what to do in training | "This week": goals, instruction focus, group task, tips. Monday plan tab: one row per unit |
| Show the in-game goals to set | Weekly goals column and the "Set goals to" line |

### Recruitment

What the player must do to get characters from other houses.

| Requirement | Implemented in |
| --- | --- |
| Say what to do to get each chosen character from another house | Recruitment tab, one card per recruit with numbered steps and warnings |
| Account for support discounts | Support selector on each card. The stat and rank shown update |
| Say what Byleth must train overall | "What Byleth must train" table, with the instructors who teach each skill |

### Delivery

Where the tool lives and how it runs.

| Requirement | Implemented in |
| --- | --- |
| An HTML guide, stored in a subdirectory next to the existing guide | `fire-emblem-three-houses/route-planner/` |
| A Dockerfile to launch it locally | `Dockerfile` (nginx), `compose.yaml` on port 8347, set by `PLANNER_PORT` |
| Pretty, clean and slick. Easy to use and navigate. Presents information clearly | Dark theme with house colours and gold accents. Six tabs. Sticky header |
| A reference file with every specification, next to the code | This file |
| Host it as a page through a GitHub Action | `.github/workflows/route-planner-pages.yml`, publishing to <https://dtomlinson91.github.io/game-guides/> |

## Game rules applied

The rules the planner computes with, and the guide section each comes from.
Check these against the guide after any guide change.

- **Rank costs.** E 40, E+ 60, D 80, D+ 120, C 160, C+ 220, B 280, B+ 360
  experience to the next rank. Costs above A are unknown. (Skill rank costs)
- **Weekly goal experience.** In a two-skill pair, per skill: weakness,
  neutral, strength. Normal 24/28/32, Hard 20/24/28, Maddening 16/20/24. A
  single-skill goal pays 1.5 times. (Goal and task numbers)
- **Faculty Training.** 20 experience a session, 30 for a strength, once per
  instructor per weekend. (Paid activities)
- **Exams.** Level 5, 10, 20, 20 and 30 by tier. The seal per tier, and a Dark
  Seal for Dark Mage and Dark Bishop. Master needs professor level C.
  (How an exam works)
- **Recruitment.** Stat and skill checks, with the support discount tables.
  B support skips the check, except for Caspar and Ferdinand. Sylvain joins
  free with a female Byleth. (How the check works)
- **Availability by route.** Lords and retainers never change house. Route
  departures for Edelgard, Hubert, Dedue, Ashe, Lorenz and Flayn. Special joins
  for Seteth, Flayn, Gilbert, Jeritza, Hilda, Catherine, Cyril and Shamir.
  Deadlines at the end of Chapter 12, or Chapter 11 on Crimson Flower. (Who
  leaves or cannot join, Requirements table)
- **Unique classes.** Byleth everywhere. Edelgard on Crimson Flower, Dimitri on
  Azure Moon, Claude on Verdant Wind, Jeritza on Crimson Flower. (Unique
  classes)
- **Role targets.** Tank 1–2, physical damage 3–4, magic damage 2, archer 1,
  healer 2, flier 1–2, Dancer 1, for about 10 slots. (Roles to cover)
- **Gender locks.** From the class tables. Characters' genders are in
  `rules.js`. Byleth's is a run setting.

### Community ratings

Where the "strong" highlights come from. The user accepted Maddening ratings
for a Hard run on 2026-09-27.

Four letter-tier lists, all written for Maddening:

1. [r/fireemblem community tier list](https://www.reddit.com/r/fireemblem/comments/g7v8zk/)
   (2020-04, [ruleset](https://www.reddit.com/r/fireemblem/comments/ep7rmc/)).
   The most rigorous: every vote needed a written reason. It tiers students in
   their own house and out of house separately, and some units by route. It
   leaves out paid DLC units.
2. [Game8](https://game8.co/games/fire-emblem-three-houses/archives/286829)
   (updated 2026-02). Ranks easy recruits higher. Includes DLC units.
3. [GamingScan](https://www.gamingscan.com/fire-emblem-three-houses-tier-list/)
   (2022). Includes the Cindered Shadows units.
4. [Pro Game Guides](https://progameguides.com/fire-emblem/fire-emblem-three-houses-unit-tier-list-2023/)
   (2023-01). Carries errors, so it was used only to break ties.

| Rating | Rule | Units |
| --- | --- | --- |
| Top pick | S in every list | Byleth, Edelgard, Dimitri, Claude, Lysithea |
| Strong | A or better in most lists | Felix, Petra, Ferdinand, Leonie, Linhardt, Dedue, Sylvain, Shamir, Annette, Hilda, Seteth, Constance, Catherine |
| Average | Mixed or middle tiers | Cyril, Ingrid, Jeritza, Hubert, Bernadetta, Marianne, Mercedes, Dorothea, Flayn, Yuri, Hapi, Balthus |
| Weak | Low in most lists | Ignatz, Alois, Manuela, Raphael, Gilbert, Hanneman, Caspar, Ashe, Lorenz, Anna |

Route and house adjustments, from the community list:

- Edelgard drops to average on Silver Snow. Hilda drops to average there too.
- Catherine drops to average on Silver Snow.
- Cyril rises to strong on Azure Moon and Verdant Wind.
- Flayn is weak on Crimson Flower, where she leaves.
- Ingrid is strong when recruited from another house, average in her own.

> [!NOTE]
> Only top and strong units are highlighted. A rating is a starting point for
> choosing recruits. On Hard, almost any unit works.

### Class fit

How the explorer colours each class for a character. The bands answer "what
does this unit naturally support".

| Band | Colour | Rule |
| --- | --- | --- |
| Recommended | Gold | The class matches one of the character's goal-change requests, either by name or through a group such as "Cavalry classes" |
| Crossover | Green | Not recommended, but every required skill is a strength, a budding talent, or a skill in the default goal or a goal request. No required skill is a weakness |
| Extra work | Grey | A required skill is a weakness, or lies outside those sets |

Within a band, cards sort by the experience still needed, lowest first. A
requirement with alternatives, such as "Axe, Bow or Brawling D", uses the
alternative the character is strongest in.

### Weekly focus

How "This week" picks goals.

1. Find the first exam in the plan whose skills are not yet met.
2. From that exam's missing skills, pick up to two. Larger gaps come first, a
   strength counts in favour and a weakness against.
3. If only one skill is missing, fill the second slot from the rest of the plan.
4. Name a group task when Riding, Flying or Heavy Armour is still needed.
5. Flag Authority below B, budding talents and weaknesses in the plan.
6. For Byleth, recommend Faculty Training sessions, not goals.

## Design decisions

Choices made while building, and why.

- **No framework, no build step.** Three static scripts load in order:
  `data.js`, `rules.js`, `app.js`. The page also works from disk.
- **Generated data.** `data.js` comes from the guide's tables through
  `build_data.py`, so the planner and the guide cannot drift apart silently.
  `rules.js` holds the rules that are prose in the guide.
- **Links to guide sections, not numbers.** The rules in `rules.js` name the
  guide section they come from in a comment.
- **Starting ranks** are each character's level 1 values from the datamined
  table. The player updates the current rank as the unit improves.
- **The dialog resolves from its own handlers,** not from the `close` event.
  A close event left over from one dialog otherwise cancels the next one.

## Known limits

What the planner does not model. Say so rather than implying precision.

- Time estimates count weekly goal experience, or Faculty Training for Byleth,
  and nothing else. Instruction, battle and seminars make training faster.
- A recruit who joins after Chapter 2 arrives above their level 1 ranks. Set
  the current rank by hand.
- Byleth's stats are not tracked. Stat checks show the value needed only.
- Switching a lord out of a unique class and back is player-reported, not
  confirmed by data. The planner does not rely on it.

## Ideas not yet built

Ideas raised but not implemented. Move an item to the change log when it is
built.

- Mark a crossover class that feeds a recommended class, such as Mercenary
  leading to a recommended Swordmaster.
- Track Byleth's stats for recruitment checks.
- A support planner for the B-support recruiting shortcut.

## Change log

Each request, in the order it was made, and what it produced.

| Date | Request | Result |
| --- | --- | --- |
| 2026-09-27 | An HTML route planner: runs in user storage, named runs, character selection, class planning, skill focus, house choice with recruiting steps, a team role overview, explicit training steps. In a subdirectory with a Dockerfile | First version: six tabs, generated data, nginx Dockerfile and compose file |
| 2026-09-27 | On selecting a character, suggest classes at each level, colour-coded by recommended, crossover or extra work | Class explorer on the Training tab, replacing the tier dropdowns |
| 2026-09-27 | A reference file with every specification, next to the code, to track prompts and ideas | This file |
| 2026-09-27 | `docker compose up` failed: port 8080 already allocated by another project | Default port moved to 8347, overridable with `PLANNER_PORT` |
| 2026-09-27 | Highlight students from other houses that the community rates strong. Maddening lists are acceptable | Community ratings from four tier lists, route-adjusted. Badges, glow and a "Strong recruits" filter |
| 2026-09-27 | A team overview that shows at a glance whether the team is balanced | Team balance card on Overview, and a balance strip on Roster |
| 2026-09-28 | Set up a GitHub Action to host the planner as a page | Pages workflow: deploys the five app files on pushes to `main` that touch the planner, or on demand |
