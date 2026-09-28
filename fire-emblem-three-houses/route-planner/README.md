# Route planner

A browser planner for a *Fire Emblem: Three Houses* run. It uses the data in
[`../beginner-guide.md`](../beginner-guide.md) and turns it into a to-do list
for each week.

## Launch

Run these from this directory:

```sh
docker compose up -d --build
```

Then open <http://localhost:8347>. Stop it with `docker compose down`.

To use another port, set `PLANNER_PORT`, for example
`PLANNER_PORT=9000 docker compose up -d`.

Without Compose:

```sh
docker build -t fe3h-planner .
docker run -d -p 8347:80 --name fe3h-planner fe3h-planner
```

The page also works when opened straight from disk, because it loads no data
over the network.

## GitHub Pages

The workflow [`.github/workflows/route-planner-pages.yml`](../../.github/workflows/route-planner-pages.yml)
publishes the app files to <https://dtomlinson91.github.io/game-guides/>. It
runs on every push to `main` that changes this directory, and on demand from
the Actions tab. It publishes `index.html`, `styles.css`, `app.js`, `rules.js`
and `data.js` only.

One-time setup: in the repository on GitHub, open **Settings → Pages** and set
**Source** to **GitHub Actions**.

> [!WARNING]
> A GitHub Pages site is public, even when the repository is private. Pages
> for a private repository also needs a paid GitHub plan.

The Pages site keeps its own runs, apart from the Docker copy. Export a run
from one and import it into the other to move it.

## What it does

- **Runs.** Create, name, rename, duplicate, export, import and delete runs.
  Each run holds a house, route, difficulty and Byleth's gender.
- **Roster.** Pick the team. Each character shows how they join on the chosen
  route, and any departure warning.
- **Training.** Pick a class for each tier from colour-coded cards: gold for
  classes the game recommends, green for crossovers that use the unit's
  strengths, grey for classes that need extra work. The page lists the skills
  to train, the weekly goals to set, the exam milestones, and the unique
  classes the route grants.
- **Recruitment.** For every recruit, the check Byleth must pass after the
  support discount. It also lists what Byleth must train overall, and which
  instructor teaches each skill.
- **Monday plan.** One table with goals, instruction focus and group task for
  every unit.
- **Checklist.** The windows that close, filtered by route.

## Specification

[`SPEC.md`](SPEC.md) records every requirement behind the planner, the game
rules it applies, and a change log. Add new requests there when they are built.

## Storage

Runs live in the browser's `localStorage` under the key
`fe3h-route-planner-v1`. Clearing site data deletes them, so export a run to
back it up. A different browser or port starts empty.

## Files

| File | Holds |
| --- | --- |
| `data.js` | Generated. Characters, classes, unique classes, starting ranks, faculty |
| `rules.js` | Hand-written. Routes, availability, default class plans, checklist, rank costs |
| `app.js` | State, calculations and views |
| `build_data.py` | Rebuilds `data.js` from the guide. See its docstring |
| `SPEC.md` | Requirements, rules, decisions and change log |

`data.js` is generated from the guide's tables. After editing the guide, rerun
`build_data.py` rather than editing `data.js` by hand.

## Limits

- Weeks-to-rank estimates count weekly goal experience only. Instruction,
  battle and seminars make training faster.
- Rank costs are known up to A. Nothing in the class tables needs more than A.
- Starting ranks are each character's level 1 values. A recruit who joins later
  may arrive higher, so set the current rank on the Training tab.
