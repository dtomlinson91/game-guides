# Mídníghts — Arcane, Blinding Vale 18

A log review of one Arcane Mage, Mídníghts (Tarren Mill, EU), in a completed
Blinding Vale key 18. The review compares the run against 15 other EU Sunfury
Arcane Mages at the same dungeon and key level, and finds what costs the
damage. Midnight, patch 12.1, Season 2. The key ran on 2026-10-09 in report
`VjA2rnvhkxdbWHJK` [[11]](#ref-11).

> [!IMPORTANT]
> The cause is the rotation, not gear and not downtime. The mage was casting
> 93% of the key. The largest loss comes from sending Arcane Barrage with
> too few Arcane Salvo stacks.

## Contents

- [Fixes to make](#fixes-to-make)
- [Result summary](#result-summary)
- [How Sunfury Arcane works](#how-sunfury-arcane-works)
- [Findings](#findings)
  - [Early Arcane Barrage](#early-arcane-barrage)
  - [Wasted Arcane Soul](#wasted-arcane-soul)
  - [Held Touch of the Magi](#held-touch-of-the-magi)
  - [Deaths](#deaths)
  - [Gear](#gear)
- [Measured comparison](#measured-comparison)
- [Method](#method)
- [Sources](#sources)

## Fixes to make

These four changes cover every finding below, in order of damage lost. Each
links to the evidence.

1. **Do not press Arcane Barrage under 12 Arcane Salvo stacks.** Send it at
   25 stacks, or at 12 or more with Clearcasting or Arcane Orb ready
   [[5]](#ref-5). See [Early Arcane Barrage](#early-arcane-barrage).
2. **During Arcane Soul, press only Arcane Barrage.** See
   [Wasted Arcane Soul](#wasted-arcane-soul).
3. **Press Touch of the Magi as soon as it is ready.** See
   [Held Touch of the Magi](#held-touch-of-the-magi).
4. **Avoid Lightfall and Belch Spores impacts. Use Prismatic Barrier before
   Spouting Floret and Oozing Xylem.** See [Deaths](#deaths).

> [!TIP]
> Rule 1 is the one to fix first. Each early Barrage lowers the chance of a
> Prismatic Bolt, and Prismatic Bolt feeds Clearcasting, so one habit
> lowers three damage sources at once.

## Result summary

The headline numbers for the key. "Field" means the 15 comparison mages,
all Sunfury, at 348k to 374k DPS [[13]](#ref-13).

| Measure | Mídníghts | Field |
|---|---|---|
| DPS over the key | 300k | median 357k |
| Arcane percentile at key 18 | 4th | — |
| Active time | 93% | — |
| Item level | 325 | 327–329 (3 checked) |
| Deaths | 4 | median 1, maximum 2 |

The other two damage dealers in the group parsed at the 89th percentile
(Retribution Paladin) and the 65th percentile (Arms Warrior) [[11]](#ref-11).

## How Sunfury Arcane works

This section explains the systems the findings depend on. All 16 mages in
the sample play the Sunfury hero tree, which shows as Arcane Phoenix damage,
Spellfire Sphere and Arcane Soul.

- **Arcane Salvo** is a stacking buff. Each Arcane Missiles wave adds one
  stack [[4]](#ref-4). It caps at 25 stacks for Sunfury and 20 for
  Spellslinger [[5]](#ref-5). Arcane Barrage spends all stacks, and each
  stack raises that Barrage's damage. A death clears it.
- **Prismatic Bolt** is not a button of its own. Arcane Barrage has a 1%
  chance per Salvo stack it spends to turn the next Arcane Blast into
  Prismatic Bolt [[2]](#ref-2). A talent adds a second 1% per stack
  [[5]](#ref-5). The proc buff, "Prismatic Bolt!", lasts 1 minute
  [[2]](#ref-2). Prismatic Bolt hits for 3,200% of Spell Power on the target
  and 2,500% on nearby enemies, and generates 4 Arcane Charges
  [[1]](#ref-1).
- **Clearcasting** enables Arcane Missiles. Prismatic Bolt has a 50% or
  100% chance (by talent rank) to grant it [[5]](#ref-5).
- **Arcane Blast** is the filler. It hits for 148.7% of Spell Power, plus
  60% per Arcane Charge [[3]](#ref-3). It is the weakest cast in the
  rotation.
- **Arcane Soul** is a 4-second Sunfury window in which Arcane Barrage is
  spammed with no Salvo condition [[5]](#ref-5).
- **Touch of the Magi** has a 45-second cooldown in practice. Every mage in
  the sample had a shortest gap of exactly 45 seconds.

> [!NOTE]
> The loop is self-reinforcing. More Salvo stacks give more Prismatic Bolts.
> More Prismatic Bolts give more Clearcasting. More Clearcasting gives more
> Missiles, and more Missiles give more Salvo stacks. An early Barrage
> breaks the loop at the first step.

## Findings

Each finding gives the measured gap, then why it costs damage. They are
ordered by size of loss.

### Early Arcane Barrage

This is the main loss. The table counts Barrages outside Arcane Soul, by
Salvo stacks at the time of the cast.

| Salvo stacks at Barrage | Mídníghts | Three field mages |
|---|---|---|
| 25 (full) | 41% | 56–70% |
| 12–24 with Clearcasting | 24% | 21–23% |
| 12–24 without Clearcasting | 12% | 6–7% |
| Under 12 | **23%** | 4–14% |

The cost runs down the chain:

1. Prismatic Bolt procs: 32 per 100 Barrages, against 38 to 42.
2. Prismatic Bolt casts: 3.72 a minute, the lowest of all 16 mages (field
   median 4.61, range 4.03 to 5.21). Its damage share is 18.3%, against
   21.3%.
3. Clearcasting uptime: 50.4%, below the field minimum of 56.6% (median
   64.7%). Arcane Missiles: 12.85 a minute, against 13.63.
4. Arcane Blast: **6.91 a minute, against a median of 3.60**. No field mage
   exceeded 5.76. The empty slots go to the weakest cast.

Only 2 of the 68 under-12 Barrages came within 40 seconds after a death,
and only 5 came within 3 seconds before Touch of the Magi. The rest are a
habit, not a reaction to events.

> [!NOTE]
> The 25 missing Prismatic Bolts alone are worth about 13k DPS, at the
> mage's own average of 0.89M damage per Bolt. That is about a quarter of
> the 57k gap. The weaker Barrages and lost Missiles add more, but were not
> measured. This is a rough estimate, not a simulation.

### Wasted Arcane Soul

Arcane Soul gives 4 seconds of Barrage spam. The mage fitted 2.9 Barrages
into each of 13 windows. The three field mages fitted 3.8 to 3.9. Inside
those windows the mage also cast 4 Missiles, 3 Prismatic Bolts and 1 Arcane
Blast.

### Held Touch of the Magi

The median gap between Touch of the Magi casts was 52 seconds, against 47
to 49 for the three field mages. That gave 27 casts, against 28 to 34.
Arcane Surge timing matched the field: 0.57 casts a minute.

### Deaths

The mage died 4 times. Across the 15 field mages the median was 1 and the
maximum 2. Each death was followed by a cast within 1 to 7 seconds, so
little casting time was lost, but each one cost a battle resurrection.

| Time in key | Killed by | Avoidable |
|---|---|---|
| 9:47 | Spouting Floret [[7]](#ref-7) — Holy damage to all players within 60 yards, every 2 s for 6 s | No — needs a defensive |
| 16:51 | **Lightfall** (Ruia) [[8]](#ref-8) — 290k Holy within 4 yards of the impact | **Yes** |
| 22:26 | **Belch Spores** [[9]](#ref-9) — 290k Nature to players standing in the impact | **Yes** |
| 27:13 | Oozing Xylem (Ziekket) [[10]](#ref-10) — Holy damage to all players every 3 s | No — needs a defensive |

Prismatic Barrier ran at 1.42 casts a minute, against a field median of
1.74.

> [!WARNING]
> Two of the four deaths were avoidable ground effects. The other two were
> unavoidable group damage that a Prismatic Barrier or other defensive
> should cover.

### Gear

Gear accounts for a small part of the gap. The rotation findings matter
more.

- **Item level:** 325, against 327 to 329 for three field mages.
- **Main hand:** Polished Lightwood Channeler at item level 321
  [[6]](#ref-6). Field mages used weapons at 331 to 334 (item IDs 245770
  and 271092).
- **Missing proc:** 13 of 15 field mages had Venomcursed Ascendance at about
  37% uptime, a proc that raises a random secondary stat by 154 and lowers
  the others by 26 for 12 seconds [[12]](#ref-12). The mage had none. Which
  item grants it was not found.
- **Flask:** Flask of Thalassian Resistance. Not a cause: one of the 374k
  field mages used the same flask.
- **Tier set:** 5 pieces of set 2060, the same as the field.

## Measured comparison

The full numbers behind the findings, for checking a later log against.
Field figures cover all 15 mages unless a row says otherwise.

| Damage share | Mídníghts | Field median | Field IQR |
|---|---|---|---|
| Arcane Missiles | 32.8% | 31.4% | 31.0–32.4% |
| Prismatic Bolt | 18.3% | 21.3% | 19.8–22.0% |
| Arcane Barrage | 20.8% | 20.3% | 19.9–20.6% |
| Meteorite | 7.0% | 7.8% | 7.5–7.9% |
| Arcane Orb | 7.5% | 7.3% | 7.1–7.5% |
| Touch of the Magi | 5.5% | 5.8% | 5.6–6.1% |
| Arcane Phoenix | 3.3% | 3.4% | 3.0–3.8% |
| Arcane Blast | 3.0% | 1.4% | 1.0–1.8% |

| Casts per minute | Mídníghts | Field median | Field range |
|---|---|---|---|
| Arcane Missiles | 12.85 | 13.63 | 12.17–14.45 |
| Arcane Barrage | 11.97 | 12.47 | 10.40–14.41 |
| Arcane Blast | 6.91 | 3.60 | 1.54–5.76 |
| Prismatic Bolt | 3.72 | 4.61 | 4.03–5.21 |
| Prismatic Barrier | 1.42 | 1.74 | 1.23–2.23 |
| Touch of the Magi | 0.96 | 1.12 | 1.00–1.23 |
| Arcane Orb | 1.17 | 0.87 | 0.15–1.53 |
| Arcane Surge | 0.57 | 0.57 | 0.53–0.62 |
| Counterspell | 0.42 | 0.86 | 0.42–1.18 |

| Buff uptime | Mídníghts | Field median | Field range |
|---|---|---|---|
| Spellfire Sphere | 91.1% | 94.4% | 90.1–96.7% |
| Cumulative Power (4-piece) | 69.7% | 73.6% | 68.2–82.5% |
| Clearcasting | 50.4% | 64.7% | 56.6–78.0% |
| Prismatic Bolt! | 33.7% | 47.1% | 35.4–56.0% |
| Arcane Surge | 16.0% | 16.2% | 14.2–17.8% |

## Method

How the review was built, so it can be repeated for another player. All
data came from the Warcraft Logs API through the MCP server.

1. **Find the report.** List the log owner's recent reports with
   `reportData { reports(userID: 1021856, limit: 5) }`. Read the player
   roster from `masterData { actors(type: "Player") }`.
2. **Place the player.** `rankings(fightIDs: [..], playerMetric: dps)` on
   the report gives `bracketPercent`, the percentile within the key level.
3. **Pick a field.** `characterRankings(className: "Mage", specName:
   "Arcane", metric: dps, bracket: 17, serverRegion: "EU")` lists key 18
   runs (the bracket is one below the key level). Pages 3, 6 and 9 gave
   375k to 347k. Five timed runs were sampled from each page.
4. **Compare tables.** Per mage: `DamageDone`, `Casts`, and `Buffs` with
   both `sourceID` and `targetID` set to the mage, over the whole key.
5. **Compare sequences.** For the subject and three field mages (the 372k
   to 374k ones), fetch `Casts` events and `Buffs` events filtered to
   Arcane Salvo (1242974), Clearcasting (263725), Prismatic Bolt! (1295942),
   Arcane Surge (365362) and Arcane Soul (451038). Replay them in time order
   to read the Salvo stack at each Barrage.
6. **Deaths.** `Deaths` events per report, filtered to the mage's actor ID.

> [!WARNING]
> Arcane Charges are not in the log's `classResources`. Only mana is. The
> "4 Arcane Charges" part of the Barrage rule cannot be checked from the
> log.

> [!CAUTION]
> The Salvo, Arcane Soul and Touch of the Magi comparisons use 3 field mages,
> all near the top of the sample. The damage shares, cast rates, buff
> uptimes and deaths use all 15.

## Sources

<details open>
<summary>Game data</summary>

1. <a id="ref-1"></a>[Prismatic Bolt (1295924)](https://www.wowhead.com/spell=1295924/prismatic-bolt) — 2.5 s cast, 3,200% Spell Power to the target and 2,500% to nearby enemies, generates 4 Arcane Charges
2. <a id="ref-2"></a>[Prismatic Bolt! (1295942)](https://www.wowhead.com/spell=1295942/prismatic-bolt) — 1% chance per Salvo stack consumed by Arcane Barrage to replace the next Arcane Blast. 1-minute buff
3. <a id="ref-3"></a>[Arcane Blast (30451)](https://www.wowhead.com/spell=30451/arcane-blast) — 148.7% Spell Power, +60% damage per Arcane Charge, generates 1 charge
4. <a id="ref-4"></a>[Arcane Salvo (1242974)](https://www.wowhead.com/spell=1242974/arcane-salvo) — each Missiles wave adds 3% to the next Arcane Barrage
5. <a id="ref-5"></a>[Icy Veins — Arcane Mage rotation](https://www.icy-veins.com/wow/arcane-mage-pve-dps-rotation-cooldowns-abilities) — Barrage rules by Salvo stack, Salvo cap of 25 for Sunfury, Prismatic Bolt grants Clearcasting, the second 1% per stack. Changelog last dated 05 Mar 2026
6. <a id="ref-6"></a>[Polished Lightwood Channeler (273778)](https://www.wowhead.com/item=273778) — Zul'jan dagger, equip effect deals Holy damage split among nearby enemies
7. <a id="ref-7"></a>[Spouting Floret (1263628)](https://www.wowhead.com/spell=1263628/spouting-floret) — Holy damage to all players within 60 yards every 2 s for 6 s
8. <a id="ref-8"></a>[Lightfall (1240152)](https://www.wowhead.com/spell=1240152/lightfall) — 290,947 Holy damage within 4 yards of the impact
9. <a id="ref-9"></a>[Belch Spores (1263642)](https://www.wowhead.com/spell=1263642/belch-spores) — 290,947 Nature damage to players standing in the impact
10. <a id="ref-10"></a>[Oozing Xylem (1247644)](https://www.wowhead.com/spell=1247644/oozing-xylem) — 58,189 Holy damage to all players every 3 s

</details>

<details open>
<summary>Logs</summary>

11. <a id="ref-11"></a>Warcraft Logs API, `VjA2rnvhkxdbWHJK` fight 1 — the reviewed key: Blinding Vale 18, completed in 29:35. Mídníghts is actor 4
12. <a id="ref-12"></a>[Venomcursed Ascendance (1317581)](https://www.wowhead.com/spell=1317581/venomcursed-ascendance) — random secondary stat +154, others −26, for 12 s
13. <a id="ref-13"></a>Warcraft Logs API, the 15 field mages (report, fight, actor). Full tables and event streams for the first three. `PFxgBaqHChAMfzW6` 1/1, `Qtwa3mg7jXNJqBrc` 25/1290, `Z6GdRTjM9Jrypcbn` 43/29. Tables only for the rest: `42BVR1ZXrYqxw8Ca` 17/1659, `mHJgZMT4FGL8Bt9P` 95/1, `ywBYja7N9XndFxGC` 12/6, `yB73mfdZrqW4QvGX` 6/182, `3AxD4mtcRNG2B1Wp` 28/772, `JgjBaDdQCVx1thHq` 10/2, `QnRb9dKcmPga4zkV` 1/2, `8Vy1JRP2WcrK69YF` 5/111, `7XjrKQkVMxJ1bzPc` 2/4, `NGaWTPyMf8AVb6Hk` 6/2, `6raBvZJM3RphjdT1` 1/2, `CtdF2jPKQ831AbgW` 4/1

</details>
