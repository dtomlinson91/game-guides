# Arcane Mage damage diagnosis — Altar of Fangs +16

Analysis of a single Mythic+ run, written 2026-09-12 from Warcraft Logs data.
World of Warcraft Midnight, patch 12.1, Season 2.

| Field | Value |
| --- | --- |
| Log | <https://www.warcraftlogs.com/reports/yqRtL7m6fpj4vXzB?fight=6&type=damage-done> |
| Run | Altar of Fangs, +16, timed, 27:00, 2026-09-11 evening |
| Subject | Midnights, Arcane Mage, Sunfury, item level 320, 298,013 dps |
| Party | Warrior (Arms) 322,535 / Rogue (Assassination) 296,217 / Druid (Guardian) 189,938 / Shaman (Restoration) 46,744 |
| Comparison | 12 Arcane Mages, same dungeon, keys +18 to +20, EU and US |
| Headline | The gap is real but about 11%, not the 20% the raw numbers show |

> [!IMPORTANT]
> Read the Addendum at the end before acting on section "What to check next".
> Item 2 of that list is already answered and the answer is negative.

---

# Arcane Mage diagnosis — Altar of Fangs +16

Report `yqRtL7m6fpj4vXzB`, fight 6. Midnights, Arcane, Sunfury, item level 320, 298,013 dps, 27:00, timed with three minutes of slack. The comparison group is **12 Arcane Mages in the same dungeon, 4 of them at +18, the rest at +19 and +20**. Every one of them ran a higher key than he did. That fact does most of the work below.

## Two corrections first

Both of your starting assumptions are wrong, and both point away from the mage.

1. **The Rogue is not undergeared.** He is item level 320, the same as the mage, and he did 296,217 dps against the mage's 298,013. The two are within 0.6% of each other.
2. **The mage died twice. The Warrior died zero times.** Both deaths took a battle rez, at 2.5s and 5.2s. Roughly 30 seconds of casting disappeared around the second death.

You were right about the pulls. Cumulative distinct enemy counts on the four large trash pulls were 30, 43, 32 and 75. Rav'i and Zul'jan are single-enemy fights. The Writhing Coil holds 17.

---

## Is the damage low

Yes, but by roughly half of what the raw comparison shows. The raw gap to the +18 group is 71,871 dps. Two corrections remove most of it before any rotation question arises.

**Correction one, key level.** The data holds three separate estimates of what one key level is worth, and they disagree by a factor of 2.6.

| Method | Sample | Value per key level | Fair target at +16 |
| --- | --- | --- | --- |
| OLS on the 12 field logs | n=12 | +5,687 dps (1.5%) | 354,477 |
| Field +18 median to +19 median | n=10 | 1.2% | 361,216 |
| Paired same player at +16 and +18 | n=141 | 3.15% | 347,636 |

The paired test is the best-measured of the three. It compares 141 Arcane Mages who logged both a +16 and a +18 Altar of Fangs, same affixes, and records a median +18/+16 ratio of 1.064. It is also the most favourable to the mage, and it is drawn from a truncated leaderboard. Do not treat it as settled.

**Correction two, active time.** His active time is 86.9% against a field median of 91.9%, range 88.9 to 94.1. He is below all 12. Downtime between pulls is 7.6% against a field median of 5.1%. Crediting him the full field median lifts him to 315,161 dps.

| Key-scaling method | Residual after activity credit | As a percentage |
| --- | --- | --- |
| Field +18 to +19 step | 46,055 dps | 12.8% |
| OLS | 39,316 dps | 11.1% |
| Paired, median ratio | 32,475 dps | 9.3% |
| Paired, p75 ratio, most generous | 19,880 dps | 5.9% |

> [!IMPORTANT]
> Stop quoting 15.9%. The defensible range is **6% to 13%, central about 11%, or roughly 39,000 dps**. Of that, the mechanisms below account for about 19,000 to 23,000 dps.

**The party composition confound contributes nothing to damage.** All 12 field logs carry a Paladin. Your group does not. Devotion Aura (spell 465) reads "reducing damage taken by 3%" and has no offensive component. Battle Shout is attack power and does nothing for a mage. "Light's Potential" is not a Paladin buff at all — spell 1230869 is a Midnight alchemy consumable, and the field drinks about five per run. He drinks zero. Fix that because it is free, not because it closes the gap.

> [!WARNING]
> The Paladin is not zero on the **activity** term, which is the largest single line above. Blessing of Freedom removes Paralyzing Shots. Devotion Aura, Blessing of Sacrifice and Holy Bulwark reduce deaths, and he died twice. Some unknown share of the 17,147 dps activity credit belongs to the missing Paladin, not to the mage.

> [!CAUTION]
> The +18 target of 369,885 dps is a **median of four runs**. A single player's run-to-run spread in this dungeon is about ±5%. The target therefore carries a sampling error of order ±18,000 to 30,000 dps, which is larger than any single finding below.

---

## The real problems

Four mechanisms survive scrutiny. They are ranked by dps cost. Every cost below is adjusted for his lower active time, so none of it double-counts the activity credit already given above.

> [!NOTE]
> The field comparison supplies **medians only** for casts per minute. Ranges exist for buff uptimes and nothing else. Where a range is missing below, the data does not contain one.

### 1. Barrage conversion

He channels Arcane Missiles at field rate and converts it into fewer Arcane Barrage casts. That costs him Prismatic Bolt procs, which is 39% of the raw gap on its own.

| Ability | His casts/min | Field +18 median | Ratio |
| --- | --- | --- | --- |
| Arcane Missiles | 13.55 | 13.69 | 0.99 |
| Arcane Barrage | 11.11 | 12.62 | 0.88 |
| Prismatic Bolt | 3.70 | 4.66 | 0.79 |

**Cost: about 13,674 dps.** That is 22.4 missing Arcane Barrage casts and 19.2 missing Prismatic Bolt casts over the run, valued at his own damage per cast.

**Mechanism.** Prismatic Bolt is not a cooldown. Wowhead spell 1295923 reads "Arcane Barrage has a 1% chance per stack of Arcane Salvo consumed to replace your next Arcane Blast with Prismatic Bolt." Apex rank 3 doubles that to 2% per stack. Proc count is Arcane Barrage casts multiplied by Arcane Salvo stacks consumed. Fewer Barrage casts means fewer rolls.

A second measurement confirms it at ten times the sample size. Meteorite fires once per 5 Arcane Salvo stacks consumed. His Meteorite dps ratio is 0.771 against a Prismatic Bolt cast-rate ratio of 0.794, across roughly 1,000 Meteorite events. Two independent outputs of the same input agree that he consumes about 0.88 to 0.90 of the field's Arcane Salvo per Barrage.

> [!NOTE]
> He is **not** overcapping Arcane Salvo. He consumes 16.7 stacks per Barrage against the field's 18.5, against a cap of 20. He sits further from the cap than the field does. Any explanation that relies on wasted stacks at the cap is wrong.

**Fix.** The instant Arcane Salvo reaches 12, the next button is Arcane Barrage. Do not start a fresh Arcane Missiles channel above 12 stacks. All four written guides state this rule, and the log agrees with them. Wowhead names the exact error: "you are reacting to HAVING 12 stacks, not trying to anticipate what you will have at the end of your channel."

> [!TIP]
> The fix is not free. Prismatic Bolt is a **2.5 second hard cast** and it does not get the −8%-per-Arcane-Charge cast time reduction. A 4-charge Arcane Blast is about 1.53 seconds. Adding 26 Prismatic Bolt casts costs roughly 65 seconds of cast time in a dungeon with fixed forced-movement windows.

### 2. Touch of the Magi

He presses Touch of the Magi at 70% of its available rate, below all 12 field mages. The damage per cast is fine at 0.91 of field, which sits on the key-scaling floor. The whole deficit is cast rate.

| Measure | Midnights | Field +18 median |
| --- | --- | --- |
| Casts per minute | 0.93 | 1.17 |
| Casts in 27:00 | 25 | 31.6 |
| Percentage of the 45s cooldown used | 69% | 88% |
| Touches paired with Arcane Surge | 7 of 25 (28%) | not measured |

**Cost: about 2,790 dps** after the activity adjustment.

**Mechanism.** Touch of the Magi banks 20% of all damage dealt to the target for 12 seconds and then detonates it. It is instant, costs 5% of base mana, and grants 4 Arcane Charges. Skipping it costs the detonation and the banking window together.

**The pairing target is 64%, not 100%.** He cast 16 Arcane Surge and 25 Touch of the Magi. Perfect synchronisation gives 16 of 25 paired. He achieved 7. **Nine of his sixteen Arcane Surge casts happened with no Touch of the Magi debuff on the target.** That is larger than it first looks.

> [!IMPORTANT]
> Maxroll says "always have Arcane Surge be paired with Touch of the Magi", and Method's opening sentence agrees. That is arithmetically impossible at 90 seconds against 45 seconds. Icy Veins and Wowhead both expect a standalone "Miniburn" Touch every other cycle, and Method's own later text describes one. **I followed Icy Veins and Wowhead.**

**Fix.** Press Touch of the Magi the moment the charge returns, on trash as well as on bosses. Cast Arcane Barrage or Prismatic Bolt so it is mid-air as Touch of the Magi lands, so the debuff banks that damage.

### 3. Cumulative Power competition

Arcane Blast, Arcane Pulse and Prismatic Bolt all consume the same 12.1 four-piece buff. He presses Arcane Blast more than the field, so some Prismatic Bolt casts land with fewer stacks.

| Measure | Midnights | Field +18 median | Field range |
| --- | --- | --- | --- |
| Cumulative Power uptime | 74.1% | 73.4% | 69.9 to 79.8 |
| Arcane Blast casts/min, all | 5.59 | 4.46 | not measured |
| Arcane Blast casts/min, bosses | 8.01 | 5.68 | not measured |
| Prismatic Bolt damage per cast | 793,839 | 995,509 | not measured |

**Cost: 2,450 dps at the ceiling, and probably less.**

**Mechanism.** Cumulative Power (spell 1296930) reads "Each wave of Arcane Missiles increases the damage of your next Arcane Blast, Arcane Pulse, or Prismatic Bolt by 3%, up to 24%." The three abilities share one buff and the first cast consumes it.

> [!CAUTION]
> The size of this effect is capped by arithmetic, and the cap is small. Cumulative Power holds 8 stacks. Arcane Missiles fires 6 waves with the 2-piece. He generates 22 waves between consecutive Prismatic Bolt casts and fires 1.51 Arcane Blast casts in between. Even if every Arcane Blast strips a full 8 stacks, his Prismatic Bolt still lands at 6 of 8. **The maximum loss is 4.8%.** Anyone telling you this is worth 12,000 dps has not done the wave count.

**Fix.** Do not press Arcane Blast while holding an unspent Prismatic Bolt proc and stacking Cumulative Power. Finish the channel, fire Prismatic Bolt, then use Arcane Blast as the filler. Wowhead's version is blunter: "stop casting Arcane Blast so much!"

### 4. Arcane Orb inversion

He casts Arcane Orb twice as often on trash as on bosses. The field does the opposite. This is the clearest single deviation from the written rotation in the whole log.

| Ability | His boss / trash | Field boss / trash |
| --- | --- | --- |
| Arcane Orb | 0.75 / 1.53 | 0.95 / 0.75 |

**Cost: 2,175 dps at most**, which is the entire Arcane Orb line of the raw gap.

**Mechanism.** Arcane Orb grants 1 Arcane Charge on cast and 1 more every time it deals damage. On a 75-mob pull one Orb fills the 4-charge pool instantly and the rest is waste. On Rav'i or Zul'jan there is one enemy, so Orb yields about 2 charges and is the scarce supply. A need-gated ability therefore fires **more** on bosses, which is exactly what the field does.

Icy Veins and Wowhead both gate it at "when you have no Arcane Charges". Maxroll gates it at "less than 3 Arcane Charges". Method lists it bare, with no condition, which a reader can easily read as "on cooldown". Method elsewhere names the pattern he is running as the wrong specialisation's: "All Spellslinger builds currently play Arcane Orb and talent into Orb Mastery. With this build, you should cast Arcane Orb on cooldown in AoE." He is Sunfury, and so are all 12 field mages. **I followed Icy Veins and Wowhead.**

**Fix.** Cast Arcane Orb when the charge pool reaches zero. On trash that means almost never. On bosses it means more often than now.

### 5. Supernova

He casts Supernova more than any of the 12 field mages, for 0.1% of his damage. The ceiling on this is small and the fix has a caveat.

| Ability | His casts/min | Field range |
| --- | --- | --- |
| Supernova | 0.44 (12 casts) | 0.00 to 0.17 |

**Cost: between 0 and 1,987 dps.** The upper bound assumes every one of the 12 global cooldowns converts to an Arcane Barrage at his own damage per cast.

**Mechanism.** Supernova deals 34.5% of Spell Power in an 8-yard radius and knocks targets upward. It appears in **zero** priority lists across all five guide pages. Icy Veins lists it as a Mythic+ **utility** swap, bracketed with Remove Curse. Maxroll's only mention is under the Xal'atath's Bargain: Ascendant affix. That affix is not in this key. Every key at +12 and above logs affix IDs 9, 10 and 147 — Tyrannical, Fortified and Xal'atath's Guile — measured across 1,600 ranked runs.

> [!WARNING]
> Do not tell him to drop the button. Altar of Fangs has **zero enemy interrupts** but heavy interrupt requirements, and the largest measured caster damage leak in the dungeon is unkicked `Toxic Atrophy` at −15% damage done, stacking, cast three times back to back. Supernova is a knockback. `Evolve` on the High Evolutionist needs a stun, fear or disorient and is the highest-value stop in the dungeon. Check his interrupt record before you charge him 1,987 dps for this.

---

## Boss versus trash

The loss sits on bosses, not on the large pulls you were worried about. This matters because roughly 78 to 80% of a ranged caster's damage in this dungeon happens on trash.

| Ability | His boss / trash | Field boss / trash | Boss deficit |
| --- | --- | --- | --- |
| Arcane Barrage | 11.12 / 12.68 | 13.09 / 13.08 | −15% |
| Arcane Blast | 8.01 / 4.60 | 5.68 / 4.24 | +41% |
| Prismatic Bolt | 4.62 / 3.55 | 4.79 / 4.64 | −4% |
| Arcane Orb | 0.75 / 1.53 | 0.95 / 0.75 | −21% |
| Touch of the Magi | 1.13 / 0.91 | 1.25 / 1.21 | −10% |
| Arcane Missiles | 15.37 / 14.14 | 14.76 / 13.70 | +4% |

Read the first two rows together. On bosses he replaces Arcane Barrage with Arcane Blast. Arcane Barrage is 3% below field on trash and 15% below on bosses. Arcane Blast is 41% above field on bosses. Rav'i and Zul'jan are single-enemy fights with no forced downtime for a caster. Measured mage active time on the three bosses across two reference runs was 97.6% to 100%.

His share of party damage is 26.9% on bosses and 25.6% on trash. The Warrior takes 28.4% and 27.9%.

> [!NOTE]
> No field figure for party damage share exists in this sample. A +16 party clearing a +16 may simply produce these shares. This number cannot separate "this mage plays worse" from "this group runs lower keys".

---

## Cooldown usage

Every cooldown is counted against the run length of 1,620 seconds. In-combat time was 92.4% of that, so the practical ceiling is lower than the theoretical one.

| Cooldown | His count | Field +18 count | Theoretical max | Verdict |
| --- | --- | --- | --- | --- |
| Touch of the Magi | 25 | 31.6 | 36 (33 in combat) | **Below field and below all 12** |
| Arcane Surge | 16 | 15.4 | 18 | At field |
| Arcane Orb (hard casts) | 30 | 19.4 | 83 | Above field, and misplaced |
| Supernova | 12 | 0 to 4.6 | ~40 | Above every field mage |
| Evocation | 0 | 0 | 36 | Correct, field does the same |
| Shifting Power | 0 | 0 | 27 | Correct, and possibly not a talent |
| Arcane Explosion | 0 | 1.4 to 8.1 | — | Correct, field figure is noise |

> [!IMPORTANT]
> Touch of the Magi is the one cooldown he misses. It is instant, costs almost no mana, grants 4 Arcane Charges, and the dungeon has no enemy interrupts. There is no execution risk. It is the cheapest real fix in this report.

Arcane Orb's raw count of 30 is not the problem. Its distribution is. See section 2, finding 4.

---

## Build and talents

His build is fine as far as the log can see, and the log can see less than you would like.

**Confirmed correct.**

- Hero talent is **Sunfury**. All 12 field mages are Sunfury. There is no split to explain.
- The **12.1 two-piece is present**. Losing it costs one wave of six plus 5%, which puts Arcane Missiles damage per cast at 0.79 of field. Observed is 0.91.
- The **12.1 four-piece is present**. Cumulative Power uptime is 74.1% against a field median of 73.4% and a range of 69.9 to 79.8. He sits inside the range and above the median.
- Zero Evocation, zero Shifting Power and zero Arcane Explosion all match the field.

> [!CAUTION]
> **Talents were never excluded, and this is the largest open confound in the whole analysis.** Warcraft Logs `characterRankings` does not expose talents. The Prismatic Bolt apex node takes **4 points**. Rank 3 raises the proc chance from 1% to 2% per Arcane Salvo stack consumed and adds 15% Arcane Barrage damage. Rank 2 taken twice adds 15% and then 30% Arcane Missiles damage.
>
> A mage one or two apex points behind the field reproduces **all four** of his weak ratios at once — Prismatic Bolt cast rate 0.79, Meteorite 0.77, Arcane Barrage damage 0.88, Arcane Missiles damage per cast 0.91 — with no rotation error whatsoever. Get his talent string before you act on section 2.

Separately, **Power Surge (spell 1233627)** reads "Damage dealt by Arcane Surge is increased by 200%". One talent difference explains his Arcane Surge sitting at 1.54 times field damage per cast.

---

## What was ruled out

Six explanations look convincing and do not survive the arithmetic. Do not chase them.

**Gear.** The Rogue is the same item level and does the same damage. The +18 field group ran at item level 319 to 322, which brackets him.

**Arcane Charge starvation.** His Arcane Barrage damage per cast of 0.88 needs no charge deficit to explain it. Take the key-scaling floor of about 0.90, which his Arcane Missiles, Arcane Barrage and Touch of the Magi ratios all cluster on, and multiply by his Arcane Salvo deficit of 0.965. That gives 0.869 against 0.88 observed. Charges are also not scarce. High Voltage grants roughly 40 charges per minute from Arcane Missiles alone, against an Arcane Barrage demand of 44.4 per minute, before counting Prismatic Bolt at 4 per cast, Touch of the Magi at 4 per cast, Arcane Blast and Arcane Orb. **Charged at 0 dps.**

**Arcane Missiles clipping.** The channel-length distribution is not channel length. The log reports 86 cast gaps over 3 seconds and 65 of them follow Arcane Missiles. That is 17.8% of 366 channels, which is exactly the 17.9% in the "3.0 seconds or longer" band. The metric is cast to next cast, and its top band is idle time. Remove it and the mean falls to about 1.8 seconds, which is a full channel at 35 to 40% haste. Wowhead also teaches **chaining** on the Sunfury tab — "recast Missiles between the 2nd to last and last tick, the spell will refresh and you will still generate the same number of waves" — which lands at 1.4 to 1.9 seconds and loses zero waves. Target death mid-channel in 30 to 75 mob pulls does the rest, and it is worse at +16 where enemies hold 21% less health. Arcane Missiles damage per cast of 0.91 sits on the key-scaling floor. **Charged at 0 dps.**

> [!IMPORTANT]
> Maxroll says "You never clip your Arcane Missiles due to how strong they are with High Voltage", except when an Arcane Soul window is about to open. Wowhead scopes its clipping instruction to **Spellslinger only**. Icy Veins deleted its clipping section in March 2024. No source supports clipping on Sunfury. **I followed Maxroll and Wowhead.**

**The Arcane Surge anomaly.** His Arcane Surge does 657,247 per cast against a field median of 427,850. This has no diagnostic value. Arcane Surge is an **8-target** area ability, so damage per cast in Warcraft Logs is the total across up to 8 enemies. He weights it toward trash at 0.70 per minute against 0.57 on bosses, while the field splits it evenly at 0.61 and 0.61. The mana mechanism cannot carry the difference. His Arcane Blast mana saving is about 6% of base mana per minute, which is roughly 9% over a 90-second Arcane Surge cycle, against a 54% damage swing. Power Surge at +200% is a better candidate than anything he pressed.

**Zero Evocation casts.** The field cast table records no Evocation for any of the 12 mages. Zero is the field behaviour. It is also a talent, so the zero may not even be a choice.

**Arcane Orb damage per cast of 0.59.** This number is contaminated and means nothing. He made 30 hard casts and the log holds 1,639 Arcane Orb damage hits. Most of those Orbs come from Orb Barrage procs, which are counted in the damage and not in the cast total.

**Buff uptimes.** Every buff sitting at the bottom of the field range is a proc-per-cast, and every one is **inside** the range. They fall together because his cast count is about 5% lower.

| Buff | Midnights | Field median | Field range |
| --- | --- | --- | --- |
| Clearcasting | 56.2 | 65.1 | 55.2 to 76.0 |
| Overflowing Energy | 53.9 | 58.9 | 51.5 to 64.1 |
| Arcanoweave Insight | 63.2 | 67.1 | 61.6 to 82.7 |
| Brainstorm | 79.9 | 84.8 | 79.4 to 88.4 |
| Mana Cascade | 87.3 | 89.2 | 85.7 to 91.7 |
| Spellfire Sphere | 92.9 | 94.7 | 90.6 to 96.2 |
| Prismatic Bolt! | 41.4 | 45.4 | 35.6 to 49.9 |

Spellfire Sphere is 1% spell damage per stack to a cap of 3. Brainstorm is 1% Intellect per stack. The whole block is worth 1 to 3% of damage per cast, not the 9 to 25% deficits above it. **Chasing these uptimes chases a symptom.** Note also that his Prismatic Bolt proc uptime of 41.4% is inside the field range, so he is not sitting on unspent procs.

> [!NOTE]
> Maxroll prints the pre-nerf tier values, "2-Set: 20% increased damage" and "4-Set: 5%, up to 40%". The live values are 5% and 3% up to 24%, nerfed in build 69383. Icy Veins is correct. **I followed the Wowhead spell pages.**

---

## What to check next

Seven things this log cannot answer. The first two are worth more than anything in section 2.

1. **His talent string, and the Prismatic Bolt apex rank.** Warcraft Logs does not expose talents. One or two missing apex points reproduce four of his five weak ratios with no rotation error. Ask him for the import string, or read an armory snapshot. Do this first.
2. **A debuff audit on him.** `Toxic Atrophy` is −15% damage done and stacking, measured at 28 seconds of uptime and 5 applications in a single 195-second Writhing Coil fight. `Spiteful Venom` is −5% and stacking. `Regurgitate` is −50%. These are flat damage-done multipliers that depress **every** damage-per-cast ratio uniformly, which is exactly the uniform 0.88 to 0.91 pattern he shows. This is one `wcl_get_table` call and it could move a double-digit share of the gap out of "rotation" entirely.
3. **How many of his 300 Arcane Barrage casts landed inside an Arcane Soul window.** Arcane Soul reads "casting Arcane Barrage does not consume Arcane Salvo". A Barrage in that window therefore rolls zero Prismatic Bolt chance and summons zero Meteorites. His Arcane Soul uptime is field-normal at 3.7% against 3.8%, but the count inside was never measured. This is the only mechanic in the kit that lowers proc chance per Barrage without touching stack count.
4. **Real Arcane Missiles channel lengths.** The current figure is cast to next cast. Pull channel-end events and count waves per channel instead.
5. **His interrupt record.** Count his kicks on `Toxic Atrophy`, `Piercing Hiss` and `Mass Envenom`, and whether `Evolve` was stopped. This decides whether Supernova is waste or utility.
6. **Targets per cast, with a field comparator.** He averaged 3.16 damage hits per Arcane Barrage across pulls of 30 to 75. No field figure exists, so that number proves nothing about his positioning.
7. **Skyfury uptime for the field.** His is 78.7%, so the buff was absent for about a fifth of the run. It is the only offensive external in his group and no field benchmark was measured.

> [!TIP]
> Run items 1 and 2 before you coach him on anything in section 2. Together they can account for the entire residual, and both are cheap to check.

---

## Addendum — debuff audit, closed

This section was added after the main report. It answers item 2 of "What to check
next" directly, using the debuff table for the mage in fight 6.

The main report suggested that damage-done debuffs on the mage could move a
double-digit share of the gap out of "rotation". **They cannot.** The measurement
is below, over the full 1,620.3 second run.

| Debuff on the mage | Uptime | Percentage of run | Applications |
| --- | --- | --- | --- |
| Ritual Venom | 117.7s | 7.3% | 32 |
| Synchronized Venom | 97.0s | 6.0% | 3 |
| Laced Edge | 44.0s | 2.7% | 11 |
| Blood Sacrifice | 43.7s | 2.7% | 9 |
| Spiteful Hunt | 34.4s | 2.1% | 4 |
| **Toxic Atrophy** | **33.7s** | **2.1%** | **2** |
| Envenom | 32.8s | 2.0% | 9 |
| Paralyzing Shots | 29.0s | 1.8% | 29 |
| Carrion Burst | 25.6s | 1.6% | 11 |
| Deadly Venom | 12.3s | 0.8% | 10 |

Toxic Atrophy is the one the report named. It reduces damage done by 15% per
stack. The mage held it for 4.9 seconds at one stack and 28.8 seconds at two
stacks. At 15% per stack that costs **0.58% of his total damage**.

> [!NOTE]
> Item 2 is closed. Debuffs are not a factor in this log. The uniform 0.88 to 0.91
> damage-per-cast pattern still needs an explanation, and the leading candidate
> remains item 1, the unverified talent string.

Items 1 and 3 to 7 of "What to check next" remain open.

---

## Method

Recorded so the next analysis does not repeat the search.

**Primary source — Warcraft Logs, through the MCP server.**

- Subject log `yqRtL7m6fpj4vXzB` fight 6. Damage, casts, buffs, debuffs, deaths,
  `CombatantInfo` and raw cast events for actor 12.
- Comparison pool from `worldData.encounter(12993).characterRankings`, class Mage,
  spec Arcane, pages 1 to 6. That returned 600 parses, 534 unique report and fight
  pairs, all at key level 18 to 20. Pages 14 and 20 return key level 17.
- 12 field logs profiled in full, sampled across pages 1 to 6 and across EU and US,
  after excluding anonymised reports whose code starts with `a:`.
- A paired key-level test on 141 Arcane Mages who logged both a +16 and a +18 of
  this dungeon, used to estimate what one key level is worth.

**Live spell values — checked against Wowhead tooltips, not guides.**

- <https://www.wowhead.com/spell=1295923> — Prismatic Bolt proc
- <https://www.wowhead.com/spell=1296930> — Cumulative Power
- <https://www.wowhead.com/spell=1233627> — Power Surge
- <https://www.wowhead.com/spell=465> — Devotion Aura
- <https://www.wowhead.com/spell=1230869> — Light's Potential

**Written guides — mechanics only, priorities NOT trusted.**

- <https://www.icy-veins.com/wow/arcane-mage-pve-dps-rotation-cooldowns-abilities>
- <https://www.wowhead.com/guide/classes/mage/arcane/rotation>
- <https://www.method.gg/guides/arcane-mage/playstyle-and-rotation>
- <https://maxroll.gg/wow/class-guides/arcane-mage-mythic-plus-guide>

**Sources that failed.**

- `archon.gg` — empty body. The page renders client-side, the same failure mode as
  the Warcraft Logs website.
- `characterRankings` does not expose talents. That is why the talent string is the
  largest open confound in this report.

> [!TIP]
> A Mythic+ run logs as ONE fight. Split it with GraphQL `dungeonPulls` on that
> fight. `encounterID != 0` is a boss, `encounterID == 0` is trash. Each pull
> carries exact millisecond bounds, so every cast buckets into boss or trash.

> [!CAUTION]
> Do not read a cast gap as downtime. Arcane Missiles is a channel, and the log
> records only its start. This mage shows 86 cast gaps over 3 seconds, which reads
> as heavy downtime. 65 of them follow Arcane Missiles and are the channel itself.
> Real downtime is 21 gaps totalling 103 seconds.
