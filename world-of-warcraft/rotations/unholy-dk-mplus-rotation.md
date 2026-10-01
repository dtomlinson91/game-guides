# Unholy Death Knight — Mythic+ rotation

A combat reference for Unholy Death Knight in Mythic+, for Midnight, patch 12.1,
Season 2. It assumes the **San'layn** hero talent and a two-handed weapon,
which all 16 sampled logs used. Every rate and timing comes from 16 Warcraft
Logs keys at key level 16 to 18, played between 24 and 29 September 2026
[[1]](#ref-1). Where the logs and the guide sites disagree, this file follows
the logs and says so.

> [!IMPORTANT]
> Unholy was rebuilt for Midnight. Festering Wound no longer exists. Festering
> Strike now stores **Lesser Ghoul** stacks, and each Scourge Strike spends one
> to summon a ghoul [[5]](#ref-5). Apocalypse, Unholy Assault and Vile
> Contagion are not in the live talent tree [[30]](#ref-30). A returning player
> must relearn the core loop. [How Unholy works](#how-unholy-works) explains it.

> [!NOTE]
> All 16 sampled players wore 4 or more tier pieces. The set changes only what
> two pets cast, so the buttons are the same without it. See
> [Without the tier set](#without-the-tier-set).

> [!WARNING]
> Hotfixes on 22 and 23 September 2026 doubled Blightfall and raised Infliction
> of Sorrow from 30% to 75% [[19]](#ref-19). Logs and guides from before that
> date describe different tuning. This sample excludes them.

## Contents

- [How Unholy works](#how-unholy-works)
- [Single target](#single-target)
- [AoE](#aoe)
- [When to swap](#when-to-swap)
- [The burst window](#the-burst-window)
  - [The Army press](#the-army-press)
  - [The plain press](#the-plain-press)
  - [Inside the window](#inside-the-window)
- [Button swaps](#button-swaps)
- [Opening a pull](#opening-a-pull)
- [Four rules that surprise](#four-rules-that-surprise)
- [Between burst windows](#between-burst-windows)
- [Troubleshooting](#troubleshooting)
- [Observed cast rates](#observed-cast-rates)
- [Cooldown timings](#cooldown-timings)
- [Buttons not pressed](#buttons-not-pressed)
- [Hero talent](#hero-talent)
- [Without the tier set](#without-the-tier-set)
- [What to bind](#what-to-bind)
- [Macros](#macros)
  - [Burst press](#burst-press)
  - [Interrupt on mouseover](#interrupt-on-mouseover)
  - [Utility on mouseover](#utility-on-mouseover)
  - [What not to macro](#what-not-to-macro)
- [Cooldown Manager](#cooldown-manager)
- [Gear and stats](#gear-and-stats)
- [Where logs beat guides](#where-logs-beat-guides)
- [The sample](#the-sample)
- [Sources](#sources)

## How Unholy works

Unholy runs on two resources, a ghoul counter and two cooldown clocks. Most
damage comes from pets and plagues, so many presses exist to feed them.

| System | What it is | How it refills, resets or ends |
| --- | --- | --- |
| **Runes** | Spent by Festering Strike (2), Scourge Strike, Vampiric Strike, Putrefy, Soul Reaper and Outbreak (1 each) [[5]](#ref-5)[[6]](#ref-6)[[4]](#ref-4) | Recharge over time |
| **Runic Power** | Spent by Death Coil and Epidemic, 30 each [[7]](#ref-7) | Scourge Strike, Vampiric Strike and Putrefy give 10. Army of the Dead gives 40 [[2]](#ref-2) |
| **Lesser Ghoul stacks** | A self-buff, up to 8 stacks, 30 seconds [[5]](#ref-5)[[1]](#ref-1) | Festering Strike and its follow-up Festering Scythe add a median 4 to 5 stacks [[1]](#ref-1). Each Scourge Strike or Vampiric Strike spends one to summon an 8-second ghoul [[5]](#ref-5) |
| **Plagues** | Virulent Plague and Dread Plague, applied by Outbreak and spread by Scourge Strike [[13]](#ref-13)[[6]](#ref-6) | Death Coil and Epidemic extend them. Blightfall consumes them for burst damage [[7]](#ref-7)[[11]](#ref-11) |
| **Sudden Doom** | Next Death Coil or Epidemic costs 15 less and deals 35% more [[8]](#ref-8) | Procs off Dread Plague ticks, up to 2 charges [[8]](#ref-8) |
| **45-second clock** | Dark Transformation: ghoul +200% damage for 15 seconds, plus 1 second per Death Coil or Epidemic [[3]](#ref-3) | Every 45 seconds. Turns Scourge Strike into Vampiric Strike while up, and grants Blightfall [[12]](#ref-12)[[11]](#ref-11) |
| **90-second clock** | Army of the Dead: an army for 30 seconds [[2]](#ref-2) | Every second Dark Transformation. Through the Apex talent, it turns Death Coil and Epidemic into Necrotic Coil and Graveyard for 30 seconds [[9]](#ref-9) |

All of these are temporary. Stacks, procs and pets expire, and only cooldowns
carry between pulls. The player plans the two clocks and feeds the Lesser
Ghoul counter. Everything else is a reaction to a proc or a window.

> [!TIP]
> Festering Strike is a two-press button. After it, the same key casts
> **Festering Scythe**, a free follow-up. In the logs Festering Scythe follows
> Festering Strike a median 0.76 seconds later, in 1,184 of 1,190 cases
> [[1]](#ref-1)[[5]](#ref-5).

## Single target

Press the first line that is ready. This covers a boss or any pull with up to
three enemies. Death Coil means Necrotic Coil while Army of the Dead is up.

1. **Army of the Dead + Dark Transformation** — one press every 90 seconds.
   Between those, Dark Transformation alone every 45 seconds. See
   [The burst window](#the-burst-window)
2. **Putrefy** — right after Dark Transformation, then mostly inside it
3. **Soul Reaper** — about 8 seconds into Dark Transformation
4. **Blightfall** — about 5 seconds after Soul Reaper, while Dark
   Transformation is still up
5. **Vampiric Strike** — whenever it is on the bar
6. **Death Coil** — with Sudden Doom, or to stop Runic Power capping
7. **Festering Strike, then Festering Scythe** — when Lesser Ghoul stacks are
   low
8. **Scourge Strike** — everything else

> [!NOTE]
> Lines 6 and 7 are tendencies, not hard rules. Sudden Doom was up for 60% of
> Death Coils, so the field also spends Runic Power without the proc
> [[1]](#ref-1). Festering Strike is cast at 2 or fewer stacks in 56% of cases.
> Guides give "3 stacks or fewer" before Dark Transformation [[20]](#ref-20)[[26]](#ref-26).

Outbreak applies the plagues and is the first press of 29 of 56 boss pulls
[[1]](#ref-1). After that, Scourge Strike and Vampiric Strike keep the plagues
up, so Outbreak runs at only 0 to 0.9 casts a minute.

## AoE

The skeleton is the same. The Runic Power spenders swap, and Death and Decay
joins the rotation.

1. **Army of the Dead + Dark Transformation** — same press, same timing
2. **Putrefy**, **Soul Reaper** and **Blightfall** — same timing
3. **Vampiric Strike** — whenever it is on the bar
4. **Epidemic** — replaces Death Coil. **Graveyard** while Army is up
5. **Death and Decay** — on large packs
6. **Festering Strike, then Festering Scythe** — when stacks are low
7. **Scourge Strike** — everything else

On trash pulls with 4 or more enemies, the field casts Epidemic 7.3 times a
minute and Graveyard 4.3 times, against 3.4 Death Coils and 1.4 Necrotic Coils
[[1]](#ref-1).

> [!TIP]
> Graveyard has a 0.75-second global cooldown. The next press follows it a
> median 0.76 seconds later, in all 1,058 cases [[1]](#ref-1). In a large pack
> during Army, Graveyard is pressed back to back.

## When to swap

The swap to the AoE spenders is gradual. The share rises with the size of the
pull [[1]](#ref-1).

| Enemies in the pull | Pulls | Epidemic share (outside Army) | Graveyard share (during Army) | Death and Decay per minute |
| --- | --- | --- | --- | --- |
| 1 | 18 | 0% | 0% | 0.5 |
| 2 to 3 | 17 | 8% | 4% | 0.5 |
| 4 to 6 | 24 | 25% | 17% | 0.7 |
| 7 to 9 | 22 | 16% | 25% | 0.5 |
| 10 to 24 | 52 | 39% | 52% | 1.4 |
| 25 or more | 51 | 62% | 62% | 1.5 |

At two or three enemies the field stays on Death Coil and Necrotic Coil. The
AoE spenders and Death and Decay take over only in large packs.

> [!WARNING]
> These counts are distinct enemies seen across a whole pull, not enemies
> alive at the same moment. The data therefore **cannot** give an exact "swap
> at N targets" rule. Read it as a direction: single-target spenders on small
> groups, AoE spenders on real packs, and a mix in between.

## The burst window

The rotation runs on a 45-second clock. The field presses Dark Transformation
a median 46.9 seconds apart, against a hard floor of 45.0 seconds
[[1]](#ref-1). Every second press adds Army of the Dead, which runs on a
90-second floor.

| Press | How often | Windows in sample |
| --- | --- | --- |
| **Army press** — Army of the Dead, Dark Transformation, trinket | Every 90 seconds | 246 |
| **Plain press** — Dark Transformation alone | Between Army presses | 272 |

Dark Transformation lasted a median 22 seconds in the logs, because each
Death Coil and Epidemic extends it [[1]](#ref-1)[[3]](#ref-3). It is up for
43% of combat time.

### The Army press

Festering Strike goes out first, so the army has Lesser Ghoul stacks to spend.
Times are seconds after the Dark Transformation press, as medians across 246
windows [[1]](#ref-1).

| Time | Press | In how many windows |
| --- | --- | --- |
| −1.2 s | Festering Scythe (after Festering Strike) | 85% |
| 0.0 s | Army of the Dead, Dark Transformation, Voracious Heart of Ula'tek | 100%, 100% |
| +1.3 s | Putrefy | 100% |
| +2.7 s | First Necrotic Coil and Vampiric Strike | 72%, 100% |
| +3.0 s | First Graveyard, in AoE | 52% |
| +12.2 s | Soul Reaper | 95% |
| +17.5 s | Blightfall | 95% |

The field uses 51 of its 71 potions in a burst window, mostly next to this
press [[1]](#ref-1).

### The plain press

Dark Transformation goes out alone. Times are medians across 272 windows
[[1]](#ref-1).

| Time | Press | In how many windows |
| --- | --- | --- |
| 0.0 s | Dark Transformation | 100% |
| +0.8 s | Putrefy, first Vampiric Strike | 98%, 100% |
| +3.7 s | Festering Strike and Scythe | 89% |
| +7.8 s | Soul Reaper | 93% |
| +14.8 s | Blightfall | 91% |

The field does not hold Dark Transformation for Army. Army appears in only 3%
of plain windows.

### Inside the window

Three cooldowns are used inside Dark Transformation, in a fixed order.

- **Putrefy** — 77% of all Putrefies land inside Dark Transformation
  [[1]](#ref-1). It has up to 3 charges with Putrid Echoes [[4]](#ref-4), and
  Blightfall refunds one [[11]](#ref-11)
- **Soul Reaper** — Reaping resets it when Dark Transformation is pressed and
  lifts its health limit [[10]](#ref-10). The target then takes 20% more from
  diseases and minions for 8 seconds [[10]](#ref-10)
- **Blightfall** — granted by Dark Transformation [[11]](#ref-11). It lands a
  median 5.1 seconds after Soul Reaper, inside that 8-second debuff, and 6.1
  seconds before Dark Transformation ends [[1]](#ref-1)

> [!NOTE]
> Players report the reason for the Soul Reaper delay: its 8-second debuff
> should overlap the pets summoned early in the window [[32]](#ref-32). Guides
> give 6 to 7 seconds [[20]](#ref-20)[[24]](#ref-24). The logs show 7.8 seconds
> after a plain press and 12.2 after an Army press.

## Button swaps

Four buttons change into other buttons in a window. The table shows casts per
minute by state, medians across the 16 logs [[1]](#ref-1).

| | Army + DT | DT only | Army only | Neither |
| --- | --- | --- | --- | --- |
| Scourge Strike | **0** | **0** | 15.4 | 14.5 |
| Vampiric Strike | 21.1 | 20.6 | 4.8 | 4.9 |
| Death Coil | **0** | 10.7 | **0** | 9.4 |
| Necrotic Coil | 12.0 | **0** | 13.0 | **0** |
| Epidemic | **0** | 6.4 | **0** | 6.4 |
| Graveyard | 9.4 | **0** | 7.0 | **0** |

- **Dark Transformation** turns Scourge Strike into Vampiric Strike for its
  whole duration, through Gift of the San'layn [[12]](#ref-12)
- **Army of the Dead** turns Death Coil into Necrotic Coil and Epidemic into
  Graveyard for 30 seconds, through the Apex talent Forbidden Knowledge
  [[9]](#ref-9)

The keybind stays the same in every case. Only the spell on the button
changes.

> [!NOTE]
> Outside Dark Transformation, Vampiric Strike appears only as a proc. Death
> Coil and Epidemic have a 25% chance to turn the next Scourge Strike into
> Vampiric Strike [[6]](#ref-6). In the logs, 1,172 of 1,182 Vampiric Strikes
> outside the window had the proc buff up [[1]](#ref-1).

## Opening a pull

The field opens with the plagues and the ghoul stacks, then the burst.

1. **Outbreak** — the first press of 29 of 56 boss pulls and 50 of 108 trash
   pulls
2. **Festering Strike, then Festering Scythe**
3. **Army of the Dead + Dark Transformation**, if ready. See
   [The Army press](#the-army-press)
4. Then the priority list

The most common opening sequence is exactly that, Outbreak > Festering Strike
> Festering Scythe > Army of the Dead, in 25 pulls [[1]](#ref-1). Every guide
gives the same start [[20]](#ref-20)[[26]](#ref-26)[[27]](#ref-27).

> [!IMPORTANT]
> In 31 of 56 boss pulls, Dark Transformation was still on cooldown from the
> trash before the boss. The first Dark Transformation on a boss arrived a
> median 6.4 seconds into the fight [[1]](#ref-1). A written opener that
> assumes cooldowns are ready fits fewer than half of the boss pulls in a real
> key.

## Four rules that surprise

A written priority list does not say these plainly. The logs support each one
strongly.

**Scourge Strike disappears inside Dark Transformation.** The logs show zero
Scourge Strikes in the window, and 20 to 21 Vampiric Strikes a minute
[[1]](#ref-1). The same key casts the other spell.

**Army of the Dead costs a global cooldown. Dark Transformation does not.**
The next rotational press follows Army a median 1.17 seconds later, never
within 0.5 seconds. After Dark Transformation, 20% of next presses come within
0.5 seconds [[1]](#ref-1). The spell page lists 1.5 seconds for both
[[2]](#ref-2)[[3]](#ref-3), and the logs show it only for Army.

**Putrefy belongs to Dark Transformation.** It runs at 6 to 7.7 casts a
minute inside the window and 1.4 outside [[1]](#ref-1). Holding charges for
the window is what the field does.

**Death and Decay is a large-pack button.** It is a 10-second ground effect on
a 30-second cooldown [[14]](#ref-14). The field casts it about 0.5 times
a minute on pulls of up to 9 enemies, and 1.4 to 1.5 times on larger ones
[[1]](#ref-1). Guides start it at 2 or 3 targets [[20]](#ref-20)[[27]](#ref-27).

## Between burst windows

The rotation slows when both windows close. The table shows casts per minute,
medians across the 16 logs, inside boss and trash pulls [[1]](#ref-1).

| | Army + DT | DT only | Army only | Neither |
| --- | --- | --- | --- | --- |
| **Global cooldown presses** | 60.4 | 57.6 | 58.2 | 47.4 |
| **Median gap between presses** | 0.98 s | 1.02 s | 1.06 s | 1.11 s |
| Putrefy | 7.7 | 6.0 | 3.0 | 1.4 |
| Soul Reaper | 2.6 | 3.1 | 1.1 | 1.1 |
| Blightfall | 2.5 | 2.7 | 0 | 0.1 |
| Festering Strike | 1.8 | 2.1 | 3.1 | 3.7 |
| Death and Decay | 2.1 | 1.3 | 0.8 | 0.7 |

Outside both windows, 49% of combat time, Putrefy, Soul Reaper and Blightfall
mostly drop out. Scourge Strike, Death Coil and Festering Strike carry the
rotation.

> [!NOTE]
> The gap between presses changes much less than the rate. Outside the windows
> the median gap is 1.11 seconds [[1]](#ref-1). The lower rate comes mostly
> from movement and breaks between packs, not from an empty bar.

## Troubleshooting

Work through these when the damage is low or the rotation feels empty. The
first two are the common causes.

1. **Putrefy spent outside Dark Transformation.** 77% of the field's Putrefies
   land inside the window [[1]](#ref-1). Charges spent before it are charges
   missing from it.
2. **Lesser Ghoul stacks empty.** Scourge Strike at 0 stacks summons nothing.
   It happens in only 7% of the field's Scourge Strikes [[1]](#ref-1). Press
   Festering Strike when stacks run low.
3. **Soul Reaper or Blightfall too early.** The field waits about 8 seconds
   for Soul Reaper, then about 5 more for Blightfall. See
   [Inside the window](#inside-the-window).
4. **Dark Transformation held for Army.** The field presses it every 45
   seconds, and only every second press includes Army.
5. **Epidemic on two or three enemies.** The field uses it for 8% of spenders
   at that size. See [When to swap](#when-to-swap).
6. **Interrupts missed.** Mind Freeze runs from 0.49 to 1.9 casts a minute, a
   3.9-times spread and 14 to 53 per key [[1]](#ref-1). No damage button in
   the sample has a spread close to that.

> [!CAUTION]
> Players report that Magus of the Dead summons appear behind the Death Knight
> and can pull extra packs [[33]](#ref-33). A hotfix on 10 September 2026
> addressed a spawn bug [[19]](#ref-19). Face the pack and keep the back clear
> of unpulled enemies.

## Observed cast rates

Use this table to check a log. Values are casts per minute, median across 16
logs, with the full range. Boss pulls and trash pulls of 4 or more enemies are
separate [[1]](#ref-1).

| Ability | Boss median | Boss range | AoE median | AoE range |
| --- | --- | --- | --- | --- |
| Vampiric Strike | 12.8 | 10.7–16.1 | 11.4 | 9.3–14.0 |
| Death Coil | 11.6 | 6.6–13.1 | 3.4 | 1.8–6.8 |
| Scourge Strike | 9.0 | 7.4–9.9 | 7.7 | 5.5–8.9 |
| Necrotic Coil | 5.7 | 3.8–7.3 | 1.4 | 0.0–4.3 |
| Putrefy | 3.6 | 2.7–4.7 | 4.0 | 2.4–4.9 |
| Festering Strike | 3.0 | 2.0–3.4 | 2.8 | 1.8–3.3 |
| Soul Reaper | 1.9 | 1.3–2.3 | 1.8 | 1.0–2.4 |
| Dark Transformation | 1.3 | 1.2–1.5 | 1.2 | 0.8–1.5 |
| Blightfall | 1.3 | 1.2–1.4 | 1.1 | 0.8–1.3 |
| Epidemic | 0.9 | 0.0–4.4 | 7.3 | 2.0–10.4 |
| Graveyard | 0.7 | 0.0–1.6 | 4.3 | 1.9–6.4 |
| Army of the Dead | 0.6 | 0.6–0.8 | 0.6 | 0.4–0.8 |
| Death and Decay | 0.4 | 0.0–2.2 | 1.8 | 0.0–2.4 |
| **Global cooldown presses** | 56.7 | 49.7–61.3 | 51.7 | 46.5–59.5 |

On the 11 pulls with one enemy only, Vampiric Strike rises to 14.6, Death Coil
to 12.4 and Necrotic Coil to 7.1, and Epidemic and Graveyard fall to zero
[[1]](#ref-1).

> [!NOTE]
> **Dark Transformation and Blightfall are the tightest bands.** Both sit
> between 1.2 and 1.5 casts a minute on bosses in every log. A rate below that
> band means the window is held or missed.

> [!TIP]
> Boss rates include adds. The median boss pull in this sample holds 7
> distinct enemies, with a range of 1 to 66 [[1]](#ref-1). That is why
> Epidemic and Graveyard still appear on bosses.

## Cooldown timings

Use these gaps to check a log for held cooldowns. The floor shows the real
cooldown. The median shows how often the field presses it [[1]](#ref-1).

| Ability | Floor | Median gap |
| --- | --- | --- |
| Dark Transformation | 45.0 s | 46.9 s |
| Army of the Dead | 90.0 s | 96.8 s |
| Voracious Heart of Ula'tek | 90.0 s | 97.5 s |
| Soul Reaper | 2.7 s | 33.7 s |
| Putrefy | 0.8 s | 12.7 s |
| Anti-Magic Shell | 40.0 s | 69.3 s |
| Mind Freeze | 12.0 s | 23.8 s |
| Potion of Recklessness | 300.2 s | 356.5 s |

> [!CAUTION]
> Two floors do not match a bare tooltip. Soul Reaper has a 15-second cooldown
> [[10]](#ref-10), but Reaping resets it on each Dark Transformation, which
> explains the 2.7-second floor. Mind Freeze has a 15-second cooldown
> [[10]](#ref-10), and the
> logs show 12.0 seconds. Coldthirst takes 3 seconds off after a successful
> interrupt [[10]](#ref-10), and most top players take it [[30]](#ref-30).

## Buttons not pressed

Several abilities that older guides discuss have zero casts in all 16 logs.
Do not look for them on the bars.

- **Apocalypse**, **Unholy Assault**, **Vile Contagion**, **Defile** and
  **Abomination Limb** — not in the live talent tree [[30]](#ref-30)
- **Summon Gargoyle** and **Raise Abomination** — pets that Army of the Dead
  summons. They are talents, not buttons [[16]](#ref-16)
- **Festering Wound** — removed. Lesser Ghoul stacks replace it [[5]](#ref-5)
- **Clawing Shadows** — now a passive, applied by Scourge Strike
  [[6]](#ref-6)

**Death Strike** is a self-heal, not a rotational cast. It appears in 10 of 16
logs, 78 casts in all [[1]](#ref-1).

## Hero talent

Play **San'layn**. 47 of 48 checked candidates at key level 16 to 18 cast
Vampiric Strike 242 to 381 times per key [[1]](#ref-1). The one exception cast
none, which marks Rider of the Apocalypse. All of the top 50 players by rating
also run San'layn [[30]](#ref-30). Deathbringer is not available to Unholy.

San'layn changes one button. Vampiric Strike replaces Scourge Strike during
Dark Transformation and on a proc [[6]](#ref-6)[[12]](#ref-12). Its other
nodes are passive. The one that matters for timing:

- **Infliction of Sorrow** — Vampiric Strike extends the plagues by 3 seconds
  and erupts them at 75% effectiveness [[18]](#ref-18)

> [!IMPORTANT]
> Nothing in this file is tested for Rider of the Apocalypse. The sample holds
> no Rider log. Rider adds no button. Its Horsemen arrive with Army and Dark
> Transformation automatically.

## Without the tier set

The patch 12.1 set bonuses change only what two pets cast [[15]](#ref-15):

- **2-piece** — Magus of the Dead and Lord of the Dead cast Necrotic Bolt and
  Withering Grasp instead of Frostbolt and Shadow Bolt
- **4-piece** — those two spells deal 130% more damage to enemies below 35%
  health

Neither bonus adds or removes a press. A player without the set uses the same
lists, the same burst press and the same macros. Only the damage is lower.

## What to bind

One pair belongs on the same keypress: Army of the Dead and Dark
Transformation. The table measures how often each cast lands within 200
milliseconds of Dark Transformation [[1]](#ref-1).

| Ability | Within 0.2 s of Dark Transformation | Same press? |
| --- | --- | --- |
| Army of the Dead | 54% of Army windows | **Yes** |
| Voracious Heart of Ula'tek | 45% | **Yes** |
| Potion of Recklessness | 24% | Optional |
| Putrefy | 18% | No — next global |

Dark Transformation costs no global cooldown in practice. See
[Four rules that surprise](#four-rules-that-surprise). Army of the Dead does
cost one, so the pair fits in one press only with Dark Transformation first.

## Macros

These macros come from the logged timings, not from a guide. Each states the
observation that supports it. Paste each block exactly as shown.

### Burst press

Press this every 90 seconds, when Army of the Dead is ready. Press plain Dark
Transformation on its own key between Army presses.

```
#showtooltip Army of the Dead
/cast Dark Transformation
/use 13
/use 14
/cast Army of the Dead
```

`13` is the top trinket slot and `14` the bottom one. Delete the line for a
passive trinket.

> [!NOTE]
> **Why:** Dark Transformation lands a median 23 milliseconds from Army of the
> Dead, and within 100 milliseconds in 94 of 237 Army windows [[1]](#ref-1).
> No player presses two keys that close by hand. Method gives the same advice
> [[26]](#ref-26).

> [!WARNING]
> Keep Army of the Dead on the last line. It is the only line that costs a
> global cooldown. If it comes first, Dark Transformation may still fire, but
> a trinket that costs a global cooldown would then be dropped silently.

For a planned pull, add the potion to a second copy of this macro. The field
uses 51 of 71 potions in a burst window [[1]](#ref-1), so keep it off the
everyday key.

```
#showtooltip Army of the Dead
/cast Dark Transformation
/use Potion of Recklessness
/use 13
/cast Army of the Dead
```

### Interrupt on mouseover

Interrupting is the widest skill gap in the sample, so this macro is the one
most likely to improve a key.

```
#showtooltip Mind Freeze
/cast [@mouseover,harm,nodead][] Mind Freeze
```

> [!IMPORTANT]
> **Why:** all 16 logs cast Mind Freeze, but the rate runs from 0.49 to 1.9
> casts a minute, and 14 to 53 per key [[1]](#ref-1). A mouseover cast removes
> the target swap.

### Utility on mouseover

These cast on the unit under the cursor, and fall back to the current target.

```
#showtooltip Death Grip
/cast [@mouseover,harm,nodead][] Death Grip
```

```
#showtooltip Asphyxiate
/cast [@mouseover,harm,nodead][] Asphyxiate
```

```
#showtooltip Raise Ally
/cast [@mouseover,help,dead][] Raise Ally
```

| Ability | Casts in sample | Logs using it |
| --- | --- | --- |
| Mind Freeze | 449 | 16 of 16 |
| Anti-Magic Shell | 309 | 16 of 16 |
| Death's Advance | 301 | 16 of 16 |
| Death Grip | 147 | 16 of 16 |
| Icebound Fortitude | 82 | 15 of 16 |
| Death Strike | 78 | 10 of 16 |
| Lichborne | 66 | 11 of 16 |
| Blinding Sleet | 52 | 13 of 16 |
| Wraith Walk | 39 | 10 of 16 |
| Anti-Magic Zone | 32 | 14 of 16 |
| Death Pact | 32 | 8 of 16 |
| Asphyxiate | 14 | 4 of 16 |
| Raise Ally | 5 | 5 of 16 |

### What not to macro

Three abilities look like they belong in the burst macro. The timings say
they do not.

- **Putrefy** — a median +0.8 to +1.3 seconds after Dark Transformation, and
  it costs a global cooldown, as Army does. One of the two would be dropped
- **Soul Reaper** — about 8 to 12 seconds into the window, never at the start
- **Blightfall** — about 15 to 17 seconds into the window

> [!CAUTION]
> A macro cannot fire two abilities that both cost a global cooldown. The game
> drops one silently. Army of the Dead and Putrefy are both global cooldown
> casts at the start of the burst, so keep them on separate keys.

## Cooldown Manager

The built-in Cooldown Manager can show every buff this rotation reads, with no
addon [[31]](#ref-31). Track **six buffs**. Each changes a press.

| Buff | Spell ID | The decision it drives |
| --- | --- | --- |
| **Lesser Ghoul** | 1254252 | Low stacks: press Festering Strike. Show the stack count |
| **Sudden Doom** | 81340 | Spend Runic Power now. Up to 2 charges |
| **Vampiric Strike** | 433899 | The next strike is Vampiric Strike, outside the window |
| **Dark Transformation** | 1235391 | The window is open. Spend Putrefy, then Soul Reaper, then Blightfall |
| **Forbidden Knowledge** | 1242223 | Necrotic Coil and Graveyard are on the bar, 30 seconds |
| **Festering Scythe** | 458123 | The follow-up is ready on the Festering Strike key |

> [!NOTE]
> The Dark Transformation and Forbidden Knowledge IDs here are the buff IDs
> seen in the logs, not the spell IDs. The Dark Transformation buff lasted a
> median 22 seconds, and Forbidden Knowledge 30.0 seconds [[1]](#ref-1). Gift
> of the San'layn (434153) runs alongside Dark Transformation for the same
> time, so tracking both duplicates the icon.

### Buffs to skip

These appear in every log and do not change a press. Send them to **Not
Displayed**.

- **Essence of the Blood Queen** (433925) and **Visceral Strength** (434159) —
  passive rewards from Vampiric Strike
- **Runic Corruption** (51460) — a Rune regeneration proc with no decision
- **Commander of the Dead** (390260), **Blood Beast** (460605), **Unholy
  Aura** and **Icy Talons** — passive pet and attack riders
- **Forbidden Sacrifice** (1256576) — the Mastery buff from Putrefy, automatic
- **Clawing Shadows** (1241569) — rides Scourge Strike

### Essential cooldowns

Use the **Spells** tab for cooldowns, and sort these six into **Essential
Cooldowns** [[31]](#ref-31).

1. **Dark Transformation** — the 45-second clock
2. **Army of the Dead** — the 90-second clock
3. **Putrefy** — show the charges. It is held for the window
4. **Soul Reaper** — reset by each Dark Transformation
5. **Blightfall** — granted by Dark Transformation
6. **Mind Freeze** — the widest skill gap in the sample

## Gear and stats

The sampled players agree closely on gear. None of it changes a press.

| Item | What the sample shows [[1]](#ref-1) |
| --- | --- |
| **Weapon** | 16 of 16 two-handed |
| **Rune** | 16 of 16 carry the same main-hand rune (enchant 6245) |
| **Tier set** | 16 of 16 wear 4 or 5 pieces |
| **Trinkets** | Voracious Heart of Ula'tek 14, Zul'jin's Guillotine Technique 8 [[17]](#ref-17) |
| **Stat order by rating** | Crit > Mastery > Haste > Versatility in 12 of 16 |

The top 50 players by rating run Rune of the Apocalypse on 48 of 50, all on
two-handed weapons [[30]](#ref-30). This file did not confirm that enchant
6245 is that rune, but every sampled player carries the same one.

Voracious Heart of Ula'tek runs on a 90-second floor in the logs, matching the
Army clock [[1]](#ref-1). The field presses it inside the burst press.

The top 50 also show Crit > Mastery > Haste > Versatility [[30]](#ref-30).
Icy Veins, Wowhead and Method agree [[23]](#ref-23)[[25]](#ref-25)[[28]](#ref-28).

## Where logs beat guides

On these points the logs contradict a current written guide. In each case this
file follows the logs.

**Dark Transformation is off the global cooldown. Army of the Dead is not.**
The spell pages list a global cooldown for both [[2]](#ref-2)[[3]](#ref-3).
Wowhead, Method and Maxroll call Dark Transformation off the global cooldown
[[24]](#ref-24)[[26]](#ref-26)[[29]](#ref-29). The logs agree with the guides
on Dark Transformation and with the spell page on Army. See
[Four rules that surprise](#four-rules-that-surprise).

**The Epidemic swap is later than any guide says.** Icy Veins gives 3 targets
in one section and 4 in another [[20]](#ref-20). Method and Wowhead give 3
[[27]](#ref-27)[[24]](#ref-24). Maxroll gives 4 [[29]](#ref-29). On pulls of 2
to 3 enemies the field uses Epidemic for 8% of spenders, and 25% at 4 to 6
[[1]](#ref-1).

**Soul Reaper comes later than the guides say.** Icy Veins gives about 6
seconds after Dark Transformation, Wowhead and Method about 7
[[20]](#ref-20)[[24]](#ref-24)[[26]](#ref-26). The logs show 7.8 seconds after
a plain press and 12.2 seconds after an Army press [[1]](#ref-1).

**Blightfall deals 200%, not 100%.** Icy Veins still gives 100%
[[20]](#ref-20). The tooltip and the 22 September hotfix give 200%
[[11]](#ref-11)[[19]](#ref-19). Maxroll still calls it "Pestilence", its old
name [[29]](#ref-29).

**Forbidden Knowledge rank 3 is 100%, not 60%.** Method and Maxroll give 60%
effectiveness for the free Putrefy [[27]](#ref-27)[[29]](#ref-29). The tooltip
gives 100% [[9]](#ref-9). This file follows the tooltip.

> [!CAUTION]
> Icy Veins, Method and the Wowhead rotation pages share one author, so they
> count as one source. Icy Veins also contradicts itself. Its Mythic+ page
> recommends the San'layn minion build, and its talent page recommends
> Blightfall [[21]](#ref-21)[[22]](#ref-22). Maxroll was last updated on 17
> August 2026 and recommends Rider [[29]](#ref-29).

## The sample

Read the limits before relying on any number. This is what the numbers rest
on [[1]](#ref-1).

- **16 Mythic+ keys**, 2 from each of the 8 Season 2 dungeons
- **Key levels 16 to 18** — 8 at level 18, 6 at 17 and 2 at 16. Drawn from
  page 8 of the rankings filtered by key level. The DPS band is 205k to 387k
- **Played 24 to 29 September 2026**, after the Blightfall hotfixes. Three
  earlier keys were replaced for that reason
- **Three regions** — CN 7, US 6, EU 3
- **16 of 16 San'layn**, two-handed, 4 or more tier pieces
- 56 boss pulls (187 minutes), 108 trash pulls of 4 or more enemies (223
  minutes), and 11 single-enemy boss pulls (35 minutes)
- 518 Dark Transformation windows, 246 of them with Army, and 24,609 cast
  events

What the sample does **not** cover:

- **Rider of the Apocalypse** — zero logs
- **No tier set** — zero logs. The buttons do not change, but the rates may
- **Rune and Runic Power counts** at each press — not in the cast data, so the
  Death Coil and Festering Strike rules stay tendencies
- **Pet damage** — the analysis reads the player's casts, not what each pet
  contributed
- **An exact target-count threshold** — enemy counts are cumulative per pull
- **Key level 19 and above**, and raid

## Sources

<details open>
<summary>Game data and logs</summary>

1. <a id="ref-1"></a>Warcraft Logs, through the Warcraft Logs API — 16 Mythic+ keys, zone 55: `rgkdxW4fnPayBqwK`, `FAtTrLCKkbNPy1wR`, `W4fJqd97jPpMAnBr`, `VjZvAmaJ8H2wRG6F`, `9kTAjzhXVrBmYpqP`, `pxLVj2QXd1WZFqmy`, `ncmz971fyFAH3ktK`, `vk8rwYzQGJtWfdxj`, `2pXCWQDchFTnfYjN`, `ZpfJmnFbVg486wcW`, `YXDZ2dr6nFjmfJt3`, `tWCAfVG4KgB6FXDh`, `6Mrm4zNwvkFZn97c`, `pwD3VGK2RLyrx4Xz`, `m82XyJGW7Mx6fD1B`, `ZdQJwkbvjAYNrcLg` — every cast rate, timing, proc state, gear and hero-talent count
2. <a id="ref-2"></a>[Army of the Dead](https://www.wowhead.com/spell=42650/army-of-the-dead) — 90-second cooldown, 1.5-second global cooldown, 40 Runic Power, 30 seconds
3. <a id="ref-3"></a>[Dark Transformation](https://www.wowhead.com/spell=1233448/dark-transformation) — 45-second cooldown, 15 seconds plus 1 per Death Coil or Epidemic, global cooldown listed as 1.5 seconds "Special"
4. <a id="ref-4"></a>[Putrefy](https://www.wowhead.com/spell=1247378/putrefy) and [Putrid Echoes](https://www.wowhead.com/spell=377580) — 30-second recharge, up to 3 charges
5. <a id="ref-5"></a>[Festering Strike](https://www.wowhead.com/spell=85948/festering-strike), [Festering Scythe](https://www.wowhead.com/spell=458128) and [Lesser Ghoul](https://www.wowhead.com/spell=1254252) — the ghoul-stack loop and the free follow-up
6. <a id="ref-6"></a>[Scourge Strike](https://www.wowhead.com/spell=55090/scourge-strike), [Vampiric Strike](https://www.wowhead.com/spell=433901/vampiric-strike) and [Clawing Shadows](https://www.wowhead.com/spell=1241567) — 1 Rune, plague spread, the 25% Vampiric Strike proc, Clawing Shadows as a passive
7. <a id="ref-7"></a>[Death Coil](https://www.wowhead.com/spell=47541/death-coil) and [Epidemic](https://www.wowhead.com/spell=207317/epidemic) — 30 Runic Power, plague extension
8. <a id="ref-8"></a>[Sudden Doom](https://www.wowhead.com/spell=49530/sudden-doom), [its buff](https://www.wowhead.com/spell=81340) and [Harbinger of Doom](https://www.wowhead.com/spell=276023) — the proc, its cost and 2 charges
9. <a id="ref-9"></a>Forbidden Knowledge — [rank 1](https://www.wowhead.com/spell=1242158), [rank 2](https://www.wowhead.com/spell=1256565), [rank 3](https://www.wowhead.com/spell=1256566), [Necrotic Coil](https://www.wowhead.com/spell=1242174), [Graveyard](https://www.wowhead.com/spell=383269) — the Apex button swaps
10. <a id="ref-10"></a>Cooldown resets — [Soul Reaper](https://www.wowhead.com/spell=343294/soul-reaper), [Reaping](https://www.wowhead.com/spell=377514), [Mind Freeze](https://www.wowhead.com/spell=47528/mind-freeze) and [Coldthirst](https://www.wowhead.com/spell=378848) — Soul Reaper's 15-second cooldown, 8-second debuff and reset on Dark Transformation, Mind Freeze's 15-second cooldown and the 3-second Coldthirst refund
11. <a id="ref-11"></a>[Blightfall](https://www.wowhead.com/spell=1271974) and [its cast](https://www.wowhead.com/spell=1271967) — granted by Dark Transformation, 200% of remaining plague damage, refunds a Putrefy charge
12. <a id="ref-12"></a>[Gift of the San'layn](https://www.wowhead.com/spell=434152) and [its buff](https://www.wowhead.com/spell=434153) — Vampiric Strike replaces Scourge Strike during Dark Transformation
13. <a id="ref-13"></a>[Outbreak](https://www.wowhead.com/spell=77575/outbreak) and [Dread Plague](https://www.wowhead.com/spell=1240996) — plague application
14. <a id="ref-14"></a>[Death and Decay](https://www.wowhead.com/spell=43265/death-and-decay) — 30-second cooldown, 1 Rune
15. <a id="ref-15"></a>Tier set — [2-piece](https://www.wowhead.com/spell=1296654) and [4-piece](https://www.wowhead.com/spell=1296655) — pet spell changes only
16. <a id="ref-16"></a>[Raise Abomination](https://www.wowhead.com/spell=1242608) and [Summon Gargoyle](https://www.wowhead.com/spell=49206) — pets summoned by Army of the Dead
17. <a id="ref-17"></a>Trinkets — [Voracious Heart of Ula'tek](https://www.wowhead.com/item=270175) and [Zul'jin's Guillotine Technique](https://www.wowhead.com/item=270173) — the two most common trinkets. Names as the logs give them
18. <a id="ref-18"></a>[Infliction of Sorrow](https://www.wowhead.com/spell=434143) — plague extension and eruption on Vampiric Strike
19. <a id="ref-19"></a>[Wowhead blue tracker — hotfixes to 29 September 2026](https://www.wowhead.com/blue-tracker/news/us/hotfixes-september-24-2026-world-of-warcraft-blizzard-news-24296142) — the Blightfall and Infliction of Sorrow hotfixes, the Magus spawn fix, Coldthirst

</details>

<details open>
<summary>Guide sites</summary>

20. <a id="ref-20"></a>[Icy Veins — Unholy rotation](https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-rotation-cooldowns-abilities) — patch 12.1, updated 8 September 2026. Priority lists, opener, Soul Reaper at 6 seconds, Epidemic at 3 or 4 targets, Blightfall at 100%
21. <a id="ref-21"></a>[Icy Veins — Mythic+ tips](https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-mythic-plus-tips) — the San'layn minion build for Mythic+
22. <a id="ref-22"></a>[Icy Veins — talents](https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-spec-builds-talents) — the Blightfall build, changed 23 September 2026
23. <a id="ref-23"></a>[Icy Veins — stat priority](https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-stat-priority) — Crit > Mastery > Haste > Versatility
24. <a id="ref-24"></a>[Wowhead — Unholy rotation](https://www.wowhead.com/guide/classes/death-knight/unholy/rotation-cooldowns-pve-dps) — modified 23 September 2026. San'layn, Epidemic at 3 targets, Soul Reaper at 7 seconds
25. <a id="ref-25"></a>[Wowhead — stat priority](https://www.wowhead.com/guide/classes/death-knight/unholy/stat-priority-pve-dps) — Crit > Mastery > Haste > Versatility
26. <a id="ref-26"></a>[Method — playstyle and rotation](https://www.method.gg/guides/unholy-death-knight/playstyle-and-rotation) — updated 24 September 2026. Opener, Soul Reaper at 7 seconds, the Dark Transformation macro
27. <a id="ref-27"></a>[Method — talents](https://www.method.gg/guides/unholy-death-knight/talents) — the San'layn Blightfall build, swap counts, Death and Decay at 2 targets, rank 3 at 60%
28. <a id="ref-28"></a>[Method — stats](https://www.method.gg/guides/unholy-death-knight/stats-races-and-consumables) — Crit > Mastery ≥ Haste > Versatility
29. <a id="ref-29"></a>[Maxroll — Unholy Death Knight Mythic+ guide](https://maxroll.gg/wow/class-guides/unholy-death-knight-mythic-plus-guide) — updated 17 August 2026. Rider, Epidemic at 4 targets, "Pestilence", rank 3 at 60%
30. <a id="ref-30"></a>[murlok.io — Unholy Mythic+](https://murlok.io/death-knight/unholy/m+) — top 50 players by rating, read 1 October 2026. Hero tree, stats, weapons, rune and talent picks
31. <a id="ref-31"></a>[Wowhead — Cooldown Manager setup](https://www.wowhead.com/guide/ui/cooldown-manager-setup) — the Buffs and Spells tabs, as read for the Retribution Paladin guide on 12 September 2026

</details>

<details open>
<summary>Community threads</summary>

32. <a id="ref-32"></a>[r/CompetitiveWoW — "What's going on with DPS DK"](https://www.reddit.com/r/CompetitiveWoW/comments/1w5703v/whats_going_on_with_dps_dk/) — 2 September 2026. San'layn pet build for Mythic+, the reason for the Soul Reaper delay
33. <a id="ref-33"></a>[r/CompetitiveWoW — "Why do Unholy DK magi spawn so far away"](https://www.reddit.com/r/CompetitiveWoW/comments/1wa3y1o/why_do_unholy_dk_magi_spawn_so_far_away/) — 7 September 2026. Magus spawns pulling packs

</details>
