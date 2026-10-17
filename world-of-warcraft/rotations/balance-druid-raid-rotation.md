# Balance Druid — raid rotation

A combat reference for Balance Druid in The Venomous Abyss, for Midnight,
patch 12.1.5, Season 2. It assumes the **Elune's Chosen** hero talent and the
4-piece tier set. Every rate and timing comes from 27 Mythic kills by Elune's
Chosen players, played between 14 and 17 October 2026 [[1]](#ref-1). Twelve of
them are Kith'ix kills, spread across the whole field of 62 ranked Balance
parses on that boss. Where the logs and the guide sites disagree, this file
follows the logs and says so.

> [!IMPORTANT]
> Eclipse is a **button** in Midnight. Lunar Eclipse has 2 charges and a
> 32-second recharge, and each press gives 15 seconds of Eclipse
> [[3]](#ref-3). Starfire and Wrath no longer move an Eclipse bar. A player
> returning from an older expansion must relearn this first.
> [How Balance works](#how-balance-works) explains the loop.

> [!NOTE]
> On Kith'ix, the field plays Elune's Chosen: 0 of 21 checked parses cast
> Force of Nature [[2]](#ref-2). On Sszorak, Nymrissa Wavecaller, Ula'tek and
> Vashnik, most of the field plays **Keeper of the Grove** instead. See
> [Hero talent by boss](#hero-talent-by-boss).

> [!NOTE]
> All 27 sampled players wore 4 or more tier pieces. The 4-piece adds damage
> during any Eclipse and changes no button. See
> [Without the tier set](#without-the-tier-set).

## Contents

- [How Balance works](#how-balance-works)
- [Single target](#single-target)
- [Several targets](#several-targets)
- [The Incarnation window](#the-incarnation-window)
  - [Before the press](#before-the-press)
  - [Inside the window](#inside-the-window)
  - [After the window](#after-the-window)
- [Lunar Eclipse timing](#lunar-eclipse-timing)
- [Kith'ix plan](#kithix-plan)
- [Opening the pull](#opening-the-pull)
- [Six rules that surprise](#six-rules-that-surprise)
- [Troubleshooting](#troubleshooting)
- [Common situations](#common-situations)
  - [Holding Fury of Elune](#holding-fury-of-elune)
  - [No charges ready](#no-charges-ready)
  - [Refreshing during an Eclipse](#refreshing-during-an-eclipse)
  - [Incarnation over an Eclipse](#incarnation-over-an-eclipse)
  - [Smaller questions](#smaller-questions)
- [Observed cast rates](#observed-cast-rates)
- [Cooldown timings](#cooldown-timings)
- [Buttons not pressed](#buttons-not-pressed)
- [Hero talent by boss](#hero-talent-by-boss)
- [Without the tier set](#without-the-tier-set)
- [Macros](#macros)
- [Cooldown Manager](#cooldown-manager)
- [Gear and stats](#gear-and-stats)
- [Where logs beat guides](#where-logs-beat-guides)
- [The sample](#the-sample)
- [Sources](#sources)

## How Balance works

Balance builds **Astral Power** with Starfire and spends it on Starsurge or
Starfall. Damage multiplies while an **Eclipse** is up, so the rotation is a
loop of "enter an Eclipse, spend, build, wait for the next Eclipse".

| System | What it is | How it refills, resets or ends |
| --- | --- | --- |
| **Astral Power** | The resource. Cap 100. Starsurge costs 40 and Starfall 50 [[8]](#ref-8) | Starfire, Fury of Elune (40 over 8 seconds), Shooting Stars ticks from Moonfire and Sunfire [[6]](#ref-6)[[12]](#ref-12) |
| **Lunar Eclipse** | A button. Arcane spells deal 15% more, Starfire 40% more, for 15 seconds [[3]](#ref-3)[[4]](#ref-4) | 2 charges, 32-second recharge. Elune's Chosen locks the button to Lunar [[7]](#ref-7) |
| **Incarnation: Chosen of Elune** | Both Eclipses, 10% haste, 10% critical strike, and 10% more Arcane damage, for 20 seconds [[5]](#ref-5) | 2 charges, 2-minute recharge with Whirling Stars [[5]](#ref-5) |
| **Fury of Elune** | An 8-second beam that also gives 40 Astral Power [[6]](#ref-6) | 45-second cooldown, cut by 1.5 seconds for each Arcane spell through Lunation. The field presses it every 24.5 seconds [[7]](#ref-7)[[1]](#ref-1) |
| **Moonfire and Sunfire** | 18-second damage over time spells [[13]](#ref-13) | Each Starfall extends both by 3 seconds, up to 28 [[8]](#ref-8) |
| **Ascendant Eclipses** (Apex) | Each Eclipse makes the next Starfire instant, and the first 3 spenders deal 20% more [[10]](#ref-10) | Resets on every Eclipse and every Incarnation |
| **Free spenders** | Touch the Cosmos, Starweaver's Warp (free Starfall) and Starweaver's Weft (free Starsurge) [[9]](#ref-9) | Procs from Starfire, Starsurge and Starfall |

Astral Power, Eclipse and every proc are temporary. Only the charges of Lunar
Eclipse and Incarnation, and the Fury of Elune cooldown, carry between pulls.
The player plans those three clocks. Everything else is a reaction.

> [!TIP]
> The **tier 4-piece** adds 10% damage at the start and the end of every
> Eclipse, falling to 2% at the midpoint [[11]](#ref-11). It is one more
> reason to keep an Eclipse up. Its buff shows in logs as Akil'zon's Clarity
> (1301768).

## Single target

Press the first line that is ready. This covers a boss with no adds in range.

1. **Fury of Elune** — on cooldown, about every 25 seconds. When Lunar Eclipse
   or Incarnation is about to come up, press Fury of Elune the global cooldown
   before it
2. **Incarnation** — the global cooldown after Fury of Elune, with trinket and
   potion. On Kith'ix, plan the charges around the add waves. See
   [Kith'ix plan](#kithix-plan)
3. **Lunar Eclipse** — when no Eclipse is up and Incarnation is not up. Bring
   Astral Power: the field enters at a median 75
4. **Starfire** — the instant one, right after every Eclipse press
5. **Moonfire and Sunfire** — refresh each one in its last 5 seconds, the
   pandemic window [[17]](#ref-17)
6. **Starsurge** — 2 or 3 at once at the start of every Eclipse, then to stop
   Astral Power capping
7. **Starfall** — only with a free **Starweaver's Warp** proc
8. **Starfire** — everything else

On single-target time outside Incarnation, the field casts 15.2 Starfire, 11.8
Starsurge and 2.65 Starfall a minute [[1]](#ref-1). Inside Incarnation,
Starsurge rises to 20.4 a minute.

> [!NOTE]
> **Starfall on one target means a free proc.** 82% of single-target Starfalls
> had Starweaver's Warp up, and only 7% had no free-cast proc of any kind
> [[1]](#ref-1). 22 of 27 sampled players took Starweaver. Without it, Starfall
> has no place in single target.

> [!NOTE]
> **Spenders belong inside an Eclipse.** 85% of Starsurges and 88% of
> Starfalls landed during Lunar Eclipse or Incarnation [[1]](#ref-1). Of the
> 218 Starsurges cast outside an Eclipse, 83 used a free proc. The rest went
> out at a median 68 Astral Power, so the field also spends outside an Eclipse
> to avoid capping. Treat line 6 as a tendency, not a hard rule.

Wrath is not in the list. Elune's Chosen takes Lunar Calling, which stops Wrath
turning the button to Solar Eclipse [[7]](#ref-7). The field casts Wrath only
before the pull. See [Opening the pull](#opening-the-pull).

## Several targets

The skeleton stays the same. Only the spender swaps: Starfall takes over from
Starsurge as soon as a second or third enemy is in range.

| Enemies hit in 10 seconds | State | Minutes | Starsurge | Starfall | Starfire |
| --- | --- | --- | --- | --- | --- |
| 1 | Outside Incarnation | 49.8 | 11.8 | 2.7 | 15.2 |
| 1 | Inside Incarnation | 6.0 | 20.4 | 3.5 | 17.5 |
| 2 to 3 | Outside Incarnation | 46.2 | 7.3 | 9.1 | 15.5 |
| 2 to 3 | Inside Incarnation | 10.2 | 11.0 | 19.0 | 21.4 |
| 4 or more | Outside Incarnation | 30.0 | 4.9 | 9.3 | 13.3 |
| 4 or more | Inside Incarnation | 21.7 | 6.6 | 17.2 | 17.4 |

Values are casts per minute, pooled across the 27 logs [[1]](#ref-1). The
guide sites agree: Starsurge on one target, Starfall on three, and close on
two [[15]](#ref-15)[[17]](#ref-17).

On several targets, more than half of the remaining Starsurges are free. 56% of
them had **Starweaver's Weft** up, the proc that Starfall grants
[[1]](#ref-1)[[9]](#ref-9). Spend that proc on Starsurge, then go back to
Starfall.

> [!WARNING]
> The enemy count is the number of distinct enemies the druid damaged in each
> 10-second slice. It counts enemies in range of Starfall and Fury of Elune,
> not enemies alive in the room. Read the table as a direction, not as an
> exact "swap at N targets" rule.

## The Incarnation window

Incarnation is the burst window. It has 2 charges and lasts 20 seconds
[[5]](#ref-5). The field pressed it 118 times, a median 102 seconds apart, at
0.77 casts a minute [[1]](#ref-1).

### Before the press

Fury of Elune goes out first. It sat within 15 seconds of all 118 Incarnation
presses, a median 0.6 seconds before [[1]](#ref-1). The beam gives Astral Power
over 8 seconds, so pressing it first fills the bar for the window. Wowhead and
Method give the same order [[17]](#ref-17)[[18]](#ref-18).

The trinket and potion go out in the same instant:

- Vile Vial of Volatile Venom (Empowering Venom) fired in the same millisecond
  as Incarnation in 38 of 43 cases [[1]](#ref-1)
- A potion landed within 0.3 seconds of Incarnation in 21 of 31 cases

That is a macro. See [Macros](#macros).

### Inside the window

Incarnation grants both Eclipses. The Solar Eclipse buff was up exactly as long
as Incarnation in every log [[1]](#ref-1). **Do not press Lunar Eclipse during
Incarnation.** The field pressed it zero times inside 118 windows, and pressing
it there does nothing [[1]](#ref-1)[[17]](#ref-17).

The window has its own instant Starfire and 3 empowered spenders, just like a
plain Eclipse [[10]](#ref-10). In the first 12 casts after the press, the field
averaged 3.7 Starfire, 3.7 Starfall and 2.3 Starsurge, plus about one
Moonfire or Sunfire refresh [[1]](#ref-1).

### After the window

Re-enter Lunar Eclipse as soon as Incarnation ends. Both charges have refilled
during the window. After an Incarnation window, the next Lunar Eclipse came a
median 2.3 seconds later [[1]](#ref-1). After a plain Eclipse, it came a median
11 seconds later, because the charges were still recharging.

## Lunar Eclipse timing

Lunar Eclipse is the everyday window. The field pressed it 1.96 times a minute,
with a range of 1.60 to 2.15 across 27 logs [[1]](#ref-1). Three rules cover
almost every press:

1. **Press it only when no Eclipse is up.** 311 of 313 presses came with Lunar
   Eclipse down [[1]](#ref-1). Pressing early ends the current Eclipse and
   starts a new one
2. **Do not let both charges sit full.** The cooldown is 32 seconds per charge
   [[3]](#ref-3). Wowhead gives the same rule [[17]](#ref-17)
3. **Bring Astral Power.** The field pressed it at a median 75 Astral Power,
   enough for the first spenders at once [[1]](#ref-1)

The first Starfire after the press is instant. It was instant in 308 of 309
cases, against a median 1.5-second cast for other Starfires [[1]](#ref-1)[[10]](#ref-10).
Use it at once.

Spend early in the Eclipse. In plain 15-second Eclipses, 32% of spenders landed
in the first 3 seconds and 14% in the last 3 seconds [[1]](#ref-1). Most
Eclipses held 2 or 3 spenders in their first 5 seconds. That matches the 3
empowered spenders from Ascendant Eclipses, and Balance of All Things, which
starts at +20% critical strike and falls by 2% a second [[10]](#ref-10)[[12]](#ref-12).

> [!CAUTION]
> Icy Veins advises holding spenders for the end of the Eclipse, where the
> tier 4-piece climbs back to 10% [[15]](#ref-15). The logs show the field
> doing the opposite. This guide follows the logs. See
> [Where logs beat guides](#where-logs-beat-guides).

## Kith'ix plan

Kith'ix is a single-target boss with two add waves. The 12 Kith'ix logs show
the same timeline [[1]](#ref-1):

| Fight time | What is in range | Median enemies hit in 20 seconds |
| --- | --- | --- |
| 0 to 60 s | **Add wave 1**: Venomous Hulk, Voidweaver, Bomber Beetle, Mindstinger Egg | 8 to 16 |
| 60 to 120 s | Kith'ix alone | 1 |
| 120 to 160 s | **Add wave 2**, same adds | 12 to 14 |
| 160 to 220 s | Kith'ix alone | 1 |
| 220 to 260 s | A few adds | 4 to 5 |
| 260 s to the kill | Kith'ix alone | 1 |

Kith'ix still took half or more of the druid's damage in both waves. Starfall
hits the boss and the adds together, so the waves are where Starfall pays.

The field spends Incarnation charges on the waves and on the last minute:

| Press | When | Logs |
| --- | --- | --- |
| Both charges back to back | At the pull, 3 to 31 seconds | 7 of 12 |
| One charge | 121 to 137 seconds, on wave 2 | 12 of 12 |
| One charge | 234 to 285 seconds | 12 of 12 |

Two variants appear. Four players held the second charge for wave 2 or for
the last minute instead of the pull. One player cast only 3 Incarnations.
Bloodlust came at the pull in 11 of 12 logs [[1]](#ref-1).

On Kith'ix, the field cast 11.3 Starsurge and 5.6 Starfall a minute over the
whole fight, against medians of 9.8 and 7.1 across all 27 logs
[[1]](#ref-1).

> [!NOTE]
> These logs are kills from 14 to 17 October 2026, the first days of Kith'ix.
> The add timing may change if the encounter is tuned. Check a current log
> before relying on exact seconds.

## Opening the pull

The opener is the same on every boss. This is the order most of the 27 logs
followed [[1]](#ref-1):

1. **Wrath**, once or twice, cast so that it lands at the pull
2. **Moonfire**
3. **Sunfire**
4. **Lunar Eclipse**
5. **Starfire** — the instant one
6. **Fury of Elune**
7. **Incarnation** with trinket and potion — a median 8 seconds into the pull
8. **Spend**, then the normal loop

Wrath cast times show the pre-cast: 28 of 30 Wraths landed in the first 3.2
seconds [[1]](#ref-1). Icy Veins and Wowhead say to pre-cast two Wraths from 4
seconds on the pull timer, and Method says three
[[15]](#ref-15)[[17]](#ref-17)[[18]](#ref-18).

Some players skip Lunar Eclipse before Incarnation, because Incarnation grants
the Eclipse anyway. Wowhead explains why most press it: it starts the
32-second recharge early [[17]](#ref-17).

On bosses where Bloodlust waits, the opener still uses Incarnation. On Coiled
Altar, Bloodlust came at about 390 seconds, and on Ula'tek at about 280
seconds. Players there pressed a charge with it [[1]](#ref-1).

## Six rules that surprise

Each rule comes from the logs, and a returning player gets each one wrong
[[1]](#ref-1).

1. **Eclipse is a button with charges.** It is not a bar that Starfire and
   Wrath fill. See [Lunar Eclipse timing](#lunar-eclipse-timing)
2. **Never press Lunar Eclipse inside Incarnation.** Zero presses in 118
   windows
3. **Wrath is a pre-pull spell only.** 28 of 30 Wraths came in the first 3.2
   seconds
4. **Fury of Elune is a 25-second button, not a 45-second one.** Lunation cuts
   it by 1.5 seconds for each Arcane spell. The field's floor was 17.4
   seconds, and the median gap 24.5 [[7]](#ref-7)
5. **On one target, Starfall needs a free proc.** 82% had Starweaver's Warp up
6. **Spend at the start of an Eclipse, not at the end.** 32% of spenders
   landed in the first fifth of the Eclipse

## Troubleshooting

When the damage feels low, compare a log against the field. The bands below
come from the 27 logs [[1]](#ref-1).

| Symptom in a log | Field band | Likely cause |
| --- | --- | --- |
| Fury of Elune under 2.0 a minute | 1.99 to 2.74 | Held for Eclipse. With Lunation it goes out on cooldown |
| Lunar Eclipse under 1.6 a minute | 1.60 to 2.15 | Charges sat full. Press when no Eclipse is up |
| Incarnation under 0.6 a minute on a 5-minute fight | 0.48 to 0.88 | A charge was held too long, or the second charge never came out |
| Starsurge under 10 a minute on single-target time | 4.1 to 16.3, median 13.1 | Pooling outside the Eclipse and not spending inside it |
| Starfall on one target without Starweaver's Warp | 7% of single-target Starfalls | Spending Astral Power on the wrong spender |
| Starfire, Fury of Elune or Wrath cast at 90+ Astral Power | Median 8.4% of builders, range 1.2–25% | Capping. Spend before the next builder lands |
| Gaps over 2.5 seconds with no cast | Median 2.2% of the fight | Movement. Hold the instant Starfire, a free Starsurge or a Starfall for it |

> [!TIP]
> Damage feels empty between Eclipses. That is normal. Outside Lunar Eclipse
> and Incarnation, the job is Starfire, damage over time refreshes and
> building Astral Power for the next press. Bring at least 75 to the next
> Eclipse.

## Common situations

These are the questions that come up mid-fight, where no priority list gives
an answer. Each answer comes from the 27 logs [[1]](#ref-1). Where a rule is
an estimate rather than a measurement, the text says so.

### Holding Fury of Elune

Hold Fury of Elune for up to about 5 seconds for a coming Lunar Eclipse or
Incarnation. Past 8 to 10 seconds, press it. If a Lunar Eclipse charge is
ready, do not hold at all: press Fury of Elune, then Lunar Eclipse on the next
global cooldown [[17]](#ref-17).

The field does exactly that [[1]](#ref-1):

- It presses Fury of Elune a median 1.5 seconds after the cooldown ends,
  about one global cooldown of reaction time
- 71% of casts go out within 3 seconds of the cooldown ending, and 84%
  within 6 seconds
- 16% are held longer than 6 seconds. 39 of those 57 lead straight into a
  Lunar Eclipse or Incarnation press
- Of the 155 casts that start outside an Eclipse, 112 have Lunar Eclipse or
  Incarnation pressed within the next 3 seconds. The field brings the Eclipse
  to Fury of Elune, rather than holding Fury of Elune for the Eclipse

Holding costs more than it looks. Lunation takes 1.5 seconds off the cooldown
for each Arcane spell, and the field casts 0.64 Arcane spells a second
[[7]](#ref-7)[[1]](#ref-1). While Fury of Elune sits ready, those reductions
are lost, and each held second pushes every later cast back by a full second.
The real cycle is about 24 seconds, so each held second costs about 4% of a
cast. A 10-second hold costs about 40% of one.

Holding also gains. On single target, a Fury of Elune that started inside a
plain Lunar Eclipse dealt a median 1.85 times the damage of one outside
[[1]](#ref-1). That figure rests on only 24 casts in 5 logs, and Bloodlust or
other buffs may inflate it. Read it as an upper bound.

> [!NOTE]
> The 5-second cutoff is an estimate from the cost and the gain above, not a
> measured optimum. The logs show only that the field rarely holds longer.
> Icy Veins says to cast it inside an Eclipse, as soon as it comes up
> [[15]](#ref-15). Wowhead says to send it on cooldown with Lunation, or hold
> it slightly [[17]](#ref-17).

### No charges ready

When Lunar Eclipse and Incarnation are both recharging, build Astral Power,
refresh Moonfire and Sunfire, and enter the next Eclipse full. In the 125 gaps
of 10 seconds or more with no Eclipse up, 36 minutes in total, the field
played like this [[1]](#ref-1):

| Measure | In long gaps | Whole fight |
| --- | --- | --- |
| Starfire per minute | 13.4 | 15.4 |
| Moonfire and Sunfire per minute | 6.1 and 5.8 | 4.0 and 4.1 |
| Starsurge plus Starfall per minute | 8.3 | 17.4 |
| Builders cast at 90+ Astral Power | 20% | 11% |

The gap starts at a median 53 Astral Power and the next Eclipse begins at a
median 84 [[1]](#ref-1). Capping is the main risk. Spend one spender as soon
as the next Starfire would cap the bar: Starsurge on one target, Starfall on
several. Spend free procs at once.

Pooling in a gap costs little. Starlord stacks from spending end when the
next Eclipse starts [[9]](#ref-9), so stacks built in a gap are lost.

When the charges return, press one Lunar Eclipse. Press the second when the
first ends, as [Lunar Eclipse timing](#lunar-eclipse-timing) describes. If
Incarnation is ready while Lunar Eclipse holds 2 charges, press Lunar Eclipse
first, so its recharge keeps running [[17]](#ref-17).

### Refreshing during an Eclipse

Refresh Moonfire or Sunfire inside an Eclipse when it would otherwise run out.
Never let it drop. Prefer to refresh just before an Eclipse or Incarnation.

- Drops are rare. Across 27 fights, Moonfire stopped ticking on the boss for
  more than 4 seconds 15 times, and Sunfire 18 times [[1]](#ref-1). Some of
  these may fall in phases where the boss cannot be attacked. That was not
  checked
- The field leans its refreshes outside the Eclipse. 52% of refreshes on the
  boss land outside one, while an Eclipse is up 69% of the time
  [[1]](#ref-1)
- 106 of 118 Incarnations had a Moonfire or Sunfire refresh in the 12 seconds
  before the press [[1]](#ref-1). Icy Veins gives the same rule
  [[15]](#ref-15)

Refresh in the last 5 seconds, which is 30% of the 18-second duration
[[13]](#ref-13). That pandemic window carries the remaining time over, so an
early refresh inside it loses nothing [[17]](#ref-17). On several targets,
each Starfall extends both by 3 seconds, up to 28 [[8]](#ref-8).

### Incarnation over an Eclipse

Pressing Incarnation during a running Lunar Eclipse replaces it with a fresh
20-second window. The rest of the Lunar Eclipse is lost [[17]](#ref-17). The
field does this on purpose. In 48 of 118 Incarnations, Lunar Eclipse had been
pressed a median 9 seconds earlier [[1]](#ref-1). This is the opener pattern.
Pressing Lunar Eclipse early starts its recharge, which is worth more than the
lost seconds [[17]](#ref-17).

The reverse does not work. Lunar Eclipse pressed during Incarnation does
nothing, and the field never pressed it there. See
[After the window](#after-the-window).

### Smaller questions

| Question | Answer |
| --- | --- |
| When is the instant Starfire used? | At once, in 308 of 309 cases [[1]](#ref-1). It can also be saved for a movement phase [[17]](#ref-17) |
| What can be cast while moving? | Everything except Starfire. Starsurge, Starfall, Moonfire, Sunfire, Fury of Elune, Lunar Eclipse and Incarnation are instant. Before a known move, line up a refresh, a free proc or the instant Starfire |
| Is Wrath ever cast after the pull? | No. Lunar Calling stops it switching the Eclipse to Solar [[7]](#ref-7), and 28 of 30 Wraths landed in the first 3.2 seconds [[1]](#ref-1) |
| Where does Touch the Cosmos go on one target? | Starsurge. Starfall on one target is for Starweaver's Warp only [[1]](#ref-1) |
| What changes when adds arrive? | Starfall replaces Starsurge from 2 or 3 targets. See [Several targets](#several-targets) |
| What about Astral Power when an Eclipse is ending? | Keep it if a charge is ready. Spend it if the next Eclipse is 10 or more seconds away [[15]](#ref-15). The field lands 14% of spenders in the last fifth of an Eclipse [[1]](#ref-1) |
| Is it safe to press Fury of Elune at high Astral Power? | Fury of Elune adds 40 over 8 seconds, plus 6 from the end flash [[6]](#ref-6)[[7]](#ref-7). From 60 or more, spend during the beam. This rule is arithmetic, not measured |
| What after a death or a battle resurrection? | Recast Moonkin Form. It shows up at 0.7 casts a minute in the gaps [[1]](#ref-1) |

## Observed cast rates

Use this table to check a log. Values are casts per minute, median across logs,
with the full range [[1]](#ref-1). "Single target" uses only the 10-second
slices where the druid hit one enemy, in the 20 logs with at least one minute
of such time.

| Ability | All 27 logs | Range | Kith'ix (12) | Single target (20) |
| --- | --- | --- | --- | --- |
| Starfire | 15.4 | 11.8–19.9 | 14.7 | 15.1 |
| Starsurge | 9.8 | 1.4–14.2 | 11.3 | 13.1 |
| Starfall | 7.1 | 4.6–16.0 | 5.6 | 3.1 |
| Sunfire | 4.1 | 2.4–6.3 | 4.1 | 3.6 |
| Moonfire | 4.0 | 2.3–6.8 | 3.9 | 3.4 |
| Fury of Elune | 2.39 | 1.99–2.74 | 2.37 | 2.39 |
| Lunar Eclipse | 1.96 | 1.60–2.15 | 1.90 | 2.01 |
| Incarnation | 0.77 | 0.48–0.88 | 0.79 | — |
| Wrath | 0.20 | 0.00–0.40 | 0.20 | — |
| **Rotational casts** | 47.9 | 39.3–54.1 | 45.8 | 43.7 |

> [!NOTE]
> **Fury of Elune and Lunar Eclipse are the tightest bands.** Every log sits
> between 1.99 and 2.74 Fury of Elune casts a minute, and between 1.60 and
> 2.15 Lunar Eclipse presses. A rate below either band means a held cooldown.

> [!TIP]
> Fight length moves the spender mix. Both Ula'tek logs ran 10 minutes and
> show 1.4 and 4.5 Starsurge a minute, with 9 and 14 Starfall. Compare a log
> against the same boss, not against the whole table.

## Cooldown timings

Use these gaps to check a log for a held cooldown. The floor shows the real
cooldown. The median shows how often the field presses it [[1]](#ref-1).

| Ability | Floor | Median gap | Tooltip |
| --- | --- | --- | --- |
| Lunar Eclipse | 15.2 s | 29.1 s | 32 s, 2 charges [[3]](#ref-3) |
| Fury of Elune | 17.4 s | 24.5 s | 45 s with Radiant Moonlight, minus Lunation [[6]](#ref-6)[[7]](#ref-7) |
| Incarnation | 16.7 s | 102.3 s | 2 minutes, 2 charges [[5]](#ref-5) |
| Vile Vial of Volatile Venom | 120.0 s | 130.5 s | — |
| Barkskin | 60.0 s | 85.2 s | — |
| Innervate | 184.5 s | 240.7 s | — |
| Potion | 301.8 s | 316 to 325 s | — |

Two floors sit far under the cooldown. Both are expected. The Lunar Eclipse and
Incarnation floors are back-to-back charges. Fury of Elune's floor comes from
Lunation, which takes 1.5 seconds off for every Arcane spell [[7]](#ref-7).

## Buttons not pressed

These abilities appear in older guides or in the talent tree. Each has zero
casts in all 27 Elune's Chosen logs [[1]](#ref-1).

| Ability | Why it is absent |
| --- | --- |
| Solar Eclipse | Lunar Calling locks the button to Lunar [[7]](#ref-7) |
| Celestial Alignment | Incarnation replaces it [[5]](#ref-5) |
| Force of Nature | A Keeper of the Grove button [[14]](#ref-14) |
| Convoke the Spirits | Shares a talent choice with Incarnation [[15]](#ref-15) |
| New Moon, Half Moon, Full Moon | Not taken. Full Moon damage still appears in logs without a cast |
| Wild Mushroom | Not taken by Elune's Chosen in raid. Wowhead still lists it [[17]](#ref-17) |
| Stellar Flare | Not taken |
| Warrior of Elune | Not taken |

Wrath appears 30 times, all but 2 at the pull. Solar Beam appears in 2 logs and
Innervate in 14, as utility.

## Hero talent by boss

Every current guide recommends Elune's Chosen for raid
[[15]](#ref-15)[[17]](#ref-17)[[19]](#ref-19). The Mythic field does not agree
on every boss. The check counted Force of Nature casters, the Keeper of the
Grove signature, among 17 parses per boss, from ranks 2 to 98
[[2]](#ref-2).

| Boss | Keeper of the Grove | Elune's Chosen |
| --- | --- | --- |
| Kith'ix | 0 of 21 | 21 of 21 |
| Entombed Sentinels | 0 of 17 | 17 of 17 |
| The Lost Explorers | 0 of 17 | 17 of 17 |
| Nek'zali, Twin Fangs, Coiled Altar | 0 of 2 each | 2 of 2 each |
| Vashnik the Malignant | 13 of 17 | 4 of 17 |
| Ula'tek | 14 of 17 | 3 of 17 |
| Nymrissa Wavecaller | 16 of 17 | 1 of 17 |
| Sszorak | 17 of 17 | 0 of 17 |

On the four Keeper bosses, this guide's rules still describe what the 5
sampled Elune's Chosen players did there.

Keeper of the Grove plays a different loop. The 8 sampled Keeper logs cast
**Wrath** 20 times a minute and Starfire 0.8 times, with Solar Eclipse instead
of Lunar, and Force of Nature 1.2 times a minute [[2]](#ref-2). The Sszorak
Keeper logs cast no Incarnation and no Starfall. A Keeper guide needs its own
sample.

> [!WARNING]
> The Force of Nature count is a proxy. Force of Nature is a spec talent, not
> a hero talent. In the 35 fetched logs it matched the hero tree every time:
> 8 of 8 Keeper logs cast it, and 0 of 27 Elune's Chosen logs did. The three
> bosses with only 2 checked parses are not a field count.

## Without the tier set

All 27 sampled players had 4 or more tier pieces [[1]](#ref-1). No log shows
the rotation without the set.

The set changes no button [[11]](#ref-11):

- **2-piece** — Starsurge deals 20% more, and Starfall also deals instant
  damage when cast. The single-target and several-target spender choice may
  shift slightly without it. The logs cannot show by how much
- **4-piece** — 10% more damage in any Eclipse, falling to 2% at the midpoint.
  Without it, Eclipse uptime is worth less, but it remains the main damage
  window through the Eclipse buff itself [[4]](#ref-4)

## Macros

These macros come from the logged timings, not from a guide. Each states the
observation that supports it. Paste each block exactly as shown.

### Burst press

Press this for every Incarnation, the global cooldown after Fury of Elune.

```
#showtooltip Incarnation: Chosen of Elune
/use 13
/use 14
/cast Incarnation: Chosen of Elune
```

`13` is the top trinket slot and `14` the bottom one. Delete the line for a
passive trinket.

> [!NOTE]
> **Why:** Empowering Venom fired in the same millisecond as Incarnation in 38
> of 43 cases [[1]](#ref-1). No player presses two keys that close by hand.
> Wowhead lists Incarnation as off the global cooldown, so it fires even when
> it comes after a trinket line [[17]](#ref-17).

For a planned pull, add the potion to a second copy of this macro. Replace
`Light's Potential` with the exact item name from your bags.

```
#showtooltip Incarnation: Chosen of Elune
/use Light's Potential
/use 13
/use 14
/cast Incarnation: Chosen of Elune
```

### What not to macro

- **Fury of Elune with Incarnation.** Fury of Elune comes a median 0.6 seconds
  first, and it goes out about 3 times as often as Incarnation [[1]](#ref-1).
  Keep it on its own key
- **Lunar Eclipse with Starfire.** Both cost a global cooldown. Lunar Eclipse
  has a 0.5-second one [[3]](#ref-3). A macro drops the second line silently

## Cooldown Manager

The built-in Cooldown Manager can show every buff this rotation reads, with no
addon [[22]](#ref-22). Track **six buffs**. Each changes a press.

| Buff | Spell ID | The decision it drives |
| --- | --- | --- |
| **Eclipse (Lunar)** | 48518 | Up: spend. Down: press Lunar Eclipse if a charge is ready |
| **Incarnation: Chosen of Elune** | 102560 | Up: do not press Lunar Eclipse. Spend |
| **Ascendant Stars** | 1263382 | The first 3 spenders of this Eclipse deal 20% more. Show stacks |
| **Starweaver's Warp** | 393942 | The next Starfall is free. The only single-target Starfall |
| **Starweaver's Weft** | 393944 | The next Starsurge is free. Spend it on several targets too |
| **Touch the Cosmos** | 450360 | The next Starsurge or Starfall is free |

> [!NOTE]
> The tooltip durations for the three free-spender procs are 15 to 30 seconds
> [[9]](#ref-9). In the logs they last a median 1.2 to 1.5 seconds, because
> the field spends them at once [[1]](#ref-1). Do not read the log figure as
> the time available.

### Buffs to skip

These appear in every log and do not change a press. Send them to **Not
Displayed**.

- **Ascendant Fires** (1263363) — the instant Starfire. The next Starfire
  takes it in 308 of 309 cases [[1]](#ref-1)
- **Starlord** (279709), **Solstice** (343648) and **Balance of All Things**
  (394050, 394049) — passive riders on spenders and Eclipse
- **Akil'zon's Clarity** (1301768) — the tier 4-piece, automatic
- **Umbral Embrace** (393763), **Sundered Firmament** (394108) — passive
  damage procs
- **Venomcursed Ascendance** (1317581) and **Venomcursed Haste** (1307927) —
  item procs, not Balance

### Essential cooldowns

Use the **Spells** tab for cooldowns, and sort these four into **Essential
Cooldowns** [[22]](#ref-22).

1. **Lunar Eclipse** — show the charges
2. **Fury of Elune** — the 25-second clock
3. **Incarnation** — show the charges
4. **On-use trinket** — paired with Incarnation

## Gear and stats

The sampled players agree closely on gear. None of it changes a press
[[1]](#ref-1).

| Item | What the sample shows |
| --- | --- |
| Tier set | 27 of 27 with 4 or more pieces. 5 with 5 pieces |
| Secondary stats | Median rating: Mastery 1312, Haste 949, Critical Strike 832, Versatility 107 |
| Main hand | Jan'thrazet, the Soul Fang, 23 of 27 |
| Off hand | Aln'hara Lantern 18, Spine of the Hissing Abyss 5 |
| Trinkets | Gebbo's Bottomless Bag 19, Vile Vial of Volatile Venom 15, Twisted Horror's Tendril 7, Wavecaller's Seastone 5, Hex Lord's Dooming Idol 4 |

The stat order in the logs matches both written stat pages: Intellect, then
**Mastery > Haste > Critical Strike > Versatility**
[[16]](#ref-16)[[20]](#ref-20). murlok's top 50 Mythic+ players show the same
order [[21]](#ref-21).

> [!TIP]
> Wowhead lists diminishing returns at 1,380 rating for Mastery and Critical
> Strike and 1,320 for Haste [[20]](#ref-20). The sample's highest Mastery was
> 1,608, so the top players accept some loss past the threshold.

## Where logs beat guides

The written guides and the logs agree on the core loop. They disagree on four
points. This guide follows the logs on each [[1]](#ref-1).

| Point | Guide | Logs |
| --- | --- | --- |
| When to spend in an Eclipse | Icy Veins: hold spenders for the end, where the tier bonus is back at 10% [[15]](#ref-15) | 32% of spenders in the first fifth, 14% in the last fifth |
| Fury of Elune timing | Icy Veins prose: inside the Eclipse. Its own list, Wowhead and Method: the global cooldown before [[15]](#ref-15)[[17]](#ref-17) | Both. 158 inside Lunar Eclipse, 71 inside Incarnation, 155 outside. Of those 155, 112 came within 3 seconds before Lunar Eclipse or Incarnation |
| Incarnation | Maxroll: on cooldown [[19]](#ref-19) | On Kith'ix, charges wait for the add waves |
| Hero talent | Every guide: Elune's Chosen for raid | Keeper of the Grove on four bosses |

> [!IMPORTANT]
> Wowhead and Method share an author, Gamz, so they count as one source
> [[17]](#ref-17)[[18]](#ref-18). Maxroll was last updated on 12 August 2026,
> before patch 12.1.5, and is stale [[19]](#ref-19).

## The sample

Read the limits before relying on any number. This is what the numbers rest
on [[1]](#ref-1)[[2]](#ref-2).

- **27 Mythic kills** by Elune's Chosen players, The Venomous Abyss, zone 53
- **12 Kith'ix kills**, ranks 3 to 55 of the 62 ranked Balance parses. That
  is the whole Mythic field for Kith'ix at the time
- **15 kills of the other bosses**: 2 each of Nek'zali, Entombed Sentinels,
  The Lost Explorers, Twin Fangs, Coiled Altar, Vashnik and Ula'tek, and 1 of
  Nymrissa Wavecaller. All from rank 44 to 85 on page 1 of the rankings
- **No Sszorak log.** None of the 17 checked Sszorak parses played Elune's
  Chosen
- **Played 14 to 17 October 2026**, patch 12.1.5
- **Four regions** — EU 10, CN 9, US 5, KR 3
- **27 of 27 with 4 or more tier pieces**
- 164 minutes of boss time, 118 Incarnation windows, 313 Lunar Eclipse presses
  and 8,172 casts
- **8 Keeper of the Grove logs** for the comparison, from Nymrissa, Sszorak,
  Ula'tek and Vashnik

What the sample does **not** cover:

- **Heroic** — zero logs. Mythic adds and timings differ
- **No tier set** — zero logs
- **Keeper of the Grove as a rotation** — 8 logs, enough to see the shape, not
  to write rules
- **Astral Power waste** — the cast events carry Astral Power at each cast,
  not the overflow from each builder. The capping band is an estimate
- **Player-level discussion** — the Reddit search returned nothing, so no
  community thread backs any rule here

## Sources

<details open>
<summary>Game data and logs</summary>

1. <a id="ref-1"></a>Warcraft Logs, through the Warcraft Logs API — 27 Mythic kills by Elune's Chosen players, zone 53. Kith'ix: `Dx4Y7r6H2kdtXRJw`, `mHRYLhaxzb6vKAMt`, `QqPfRkWYgKj4xdDZ`, `WfRLG4z3BhvZqdTX`, `N48PJjHAYbdF3Zmx`, `LXh4FjJVcvkBt8qz`, `DQxbXtZdR6wNa7GP`, `Rb2P93q8x7NgDGZ6`, `A1zByxV9Hvp3jNwh`, `QLRNDpKxhMHFG2ZA`, `LcPQa7F42qRd9MNn`, `Y96FhgdpL7BfqaD1`. Other bosses: `ATZ24FB9jQrnhPy6`, `MXyBx29GhmfT86HK` (Coiled Altar), `P1Hq738Ca6mZ4xQ2`, `wNHz2kxYrmRd8ZTV` (The Lost Explorers), `kHh9PctfDN7aMAZY`, `AZgkzLM1Qy3KWVTt` (Nek'zali), `8YjrVmKN7PhMdFyq` (Nymrissa Wavecaller), `vX9FY12Lb6G4pZcq`, `H4ykNdgnT8V9XMf2` (Entombed Sentinels), `1Zx2dYLctJ6KH3vj`, `6fZqK19cLywGAzkt` (Twin Fangs), `89ZqcLBJfRgKAMvG`, `WZxKCXA9VDGJjh1B` (Ula'tek), `hajHVxYC4KBRfQWq`, `PCzcBF213AV4fHq9` (Vashnik) — every cast rate, timing, proc state, Astral Power value, gear and target count
2. <a id="ref-2"></a>Warcraft Logs, through the Warcraft Logs API — hero talent check: Force of Nature casts in 17 Mythic parses per boss for Vashnik, Sszorak, Ula'tek, Nymrissa Wavecaller, Entombed Sentinels and The Lost Explorers, and in 21 Kith'ix parses. Keeper of the Grove logs: `nL8YfPxBRpaW2TdQ`, `tAX7TW6GbhF3yDrk`, `RB3YK6vQMwp2AXb9`, `FZdJWm3GTL1RBAxj`, `rv8RhqZ4JyjfzVDw`, `chJ9y2jPmptAYC4H`, `VjkK2JNCZBvYPTyX`, `1nWG9c7t4qHLDmYy`
3. <a id="ref-3"></a>[Lunar Eclipse](https://www.wowhead.com/spell=1233272/lunar-eclipse), [Eclipse](https://www.wowhead.com/spell=1239669), [Improved Eclipse](https://www.wowhead.com/spell=1240906) and [Sculpt the Stars](https://www.wowhead.com/spell=1240188) — the button, 32-second cooldown, 15 seconds, 0.5-second global cooldown, the second charge
4. <a id="ref-4"></a>[Eclipse (Lunar)](https://www.wowhead.com/spell=48518) and [Eclipse (Solar)](https://www.wowhead.com/spell=48517) — 15% to Arcane or Nature spells, 40% to Starfire or Wrath
5. <a id="ref-5"></a>[Incarnation: Chosen of Elune](https://www.wowhead.com/spell=102560), [Whirling Stars](https://www.wowhead.com/spell=468743), [Astral Insight](https://www.wowhead.com/spell=429536) and [Celestial Alignment](https://www.wowhead.com/spell=194223) — both Eclipses, 20 seconds, 2 charges at 2 minutes, 10% Arcane damage
6. <a id="ref-6"></a>[Fury of Elune](https://www.wowhead.com/spell=202770) and [Radiant Moonlight](https://www.wowhead.com/spell=394121) — 8-second beam, 40 Astral Power, 45-second cooldown
7. <a id="ref-7"></a>Elune's Chosen — [Lunar Calling](https://www.wowhead.com/spell=429523), [Lunation](https://www.wowhead.com/spell=429539), [Boundless Moonlight](https://www.wowhead.com/spell=424058) and [The Eternal Moon](https://www.wowhead.com/spell=424113) — the Lunar-only button, the 1.5-second Fury of Elune refund, the end flash and its 6 Astral Power
8. <a id="ref-8"></a>[Starsurge](https://www.wowhead.com/spell=78674) and [Starfall](https://www.wowhead.com/spell=191034) — 40 and 50 Astral Power, Aetherial Kindling's 3-second extension up to 28 seconds
9. <a id="ref-9"></a>[Touch the Cosmos](https://www.wowhead.com/spell=450360), [Starweaver's Warp](https://www.wowhead.com/spell=393942), [Starweaver's Weft](https://www.wowhead.com/spell=393944) and [Starlord](https://www.wowhead.com/spell=279709) — the free-spender procs and their tooltip durations
10. <a id="ref-10"></a>Ascendant Eclipses (Apex) — [rank 1](https://www.wowhead.com/spell=1261564), [ranks 2 and 3](https://www.wowhead.com/spell=1261565), [rank 4](https://www.wowhead.com/spell=1261566), [Ascendant Fires](https://www.wowhead.com/spell=1263363), [Ascendant Stars](https://www.wowhead.com/spell=1263382) — the instant Starfire and the 3 empowered spenders
11. <a id="ref-11"></a>[Balance 12.1 class set 2-piece](https://www.wowhead.com/spell=1296603), [4-piece](https://www.wowhead.com/spell=1296604) and [Akil'zon's Clarity](https://www.wowhead.com/spell=1301768) — the set text and the 4-piece buff ID
12. <a id="ref-12"></a>[Balance of All Things](https://www.wowhead.com/spell=394050), [Solstice](https://www.wowhead.com/spell=343648), [Umbral Embrace](https://www.wowhead.com/spell=393763), [Shooting Stars](https://www.wowhead.com/spell=202497) and [Sundered Firmament](https://www.wowhead.com/spell=394108) — passive riders
13. <a id="ref-13"></a>[Moonfire](https://www.wowhead.com/spell=164812) and [Sunfire](https://www.wowhead.com/spell=164815) — 18-second duration
14. <a id="ref-14"></a>Keeper of the Grove — [Force of Nature](https://www.wowhead.com/spell=205636), [Dream Surge](https://www.wowhead.com/spell=433831) and [Harmony of the Grove](https://www.wowhead.com/spell=428731)

</details>

<details open>
<summary>Guide sites</summary>

15. <a id="ref-15"></a>[Icy Veins — Balance Druid rotation](https://www.icy-veins.com/wow/balance-druid-pve-dps-rotation-cooldowns-abilities) — updated 12 October 2026, author Bora. Elune's Chosen priority, opener, the AoE rule and the hold-for-the-end advice
16. <a id="ref-16"></a>[Icy Veins — Balance Druid stat priority](https://www.icy-veins.com/wow/balance-druid-pve-dps-stat-priority) and [talents](https://www.icy-veins.com/wow/balance-druid-pve-dps-spec-builds-talents) — Mastery > Haste > Critical Strike > Versatility for Elune's Chosen
17. <a id="ref-17"></a>[Wowhead — Balance Druid rotation](https://www.wowhead.com/guide/classes/druid/balance/rotation-cooldowns-pve-dps) — modified 13 October 2026, author Gamz. Charge rule, Fury of Elune before cooldowns, opener, Incarnation off the global cooldown
18. <a id="ref-18"></a>[Method — Balance Druid playstyle and rotation](https://www.method.gg/guides/balance-druid/playstyle-and-rotation) — updated 16 October 2026, author Gamz. Same author as Wowhead
19. <a id="ref-19"></a>[Maxroll — Balance Druid raid guide](https://maxroll.gg/wow/class-guides/balance-druid-raid-guide) — updated 12 August 2026, stale. Incarnation on cooldown
20. <a id="ref-20"></a>[Wowhead — Balance Druid stat priority](https://www.wowhead.com/guide/classes/druid/balance/stat-priority-pve-dps) — modified 13 October 2026. Stat order and diminishing-returns thresholds
21. <a id="ref-21"></a>[murlok.io — Balance Druid Mythic+](https://murlok.io/druid/balance/m+) — top 50 players: 42 Elune's Chosen, stat averages, talent counts. No raid page exists
22. <a id="ref-22"></a>[Wowhead — Cooldown Manager setup](https://www.wowhead.com/guide/ui/cooldown-manager-setup) — Buffs tab and Essential Cooldowns. Read for an earlier guide and not re-read here

</details>
