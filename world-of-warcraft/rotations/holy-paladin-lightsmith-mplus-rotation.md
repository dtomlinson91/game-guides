# Holy Paladin — Lightsmith Mythic+

A Mythic+ rotation for Holy Paladin on the **Lightsmith** hero tree. Midnight,
patch 12.1, Season 2. It assumes the **12.1 tier 4-piece** and a reader who
already knows the spec on Herald of the Sun, so it covers only what Lightsmith
changes.

Every rate below comes from 16 Warcraft Logs keys played by top-ranked Holy
Paladins, two per dungeon, at key level 21 and 22. Written guides and tooltips
explain *why*. The logs decide *what to press*.

> [!IMPORTANT]
> **The Reddit claim holds up.** In this sample, Shield of the Righteous is the
> second most-pressed button at 8.6 casts per minute, and it deals 30% of your
> damage. A player who presses it more deals more damage (r = 0.67) and heals no
> less (r = 0.03). See [the Shield question](#the-shield-question) for the
> full check.

## What changes

This section compares Lightsmith with the Herald build you know. Use it once to
reset your habits, then work from the loops that follow.

| | Herald of the Sun | Lightsmith |
| --- | --- | --- |
| Main spender | Eternal Flame | **Shield of the Righteous** and Word of Glory, about equal |
| Holy Shock | ~13 per minute | **5.5 per minute**, two thirds on enemies |
| Divine Toll | The Dawnlight enabler | **Not talented.** Holy Armaments takes its node |
| Beacon of Virtue | ~3.4 per minute | **Not cast** in any log |
| Holy Light | Rare | **3.3 per minute.** It starts the healing loop |
| Avenging Wrath | Amplify only, rate unchanged | A real burst. Cast rate goes from 49 to **58** per minute |
| Consecration | — | **21% of your damage**, and you never press it |

> [!NOTE]
> Consecration is automatic. Righteous Judgment makes every Judgment drop one.
> Divine Guidance stacks from every Holy Power spender, and the next Consecration
> releases the stored damage and heals up to 3 allies for the same amount. This
> is why Judgment matters far more here than it does on Herald.

## The two loops

A Lightsmith Holy Paladin runs two short loops and chooses between them on
each global. The top sequences across 16 logs show both with no ambiguity.

### Damage loop

Use this whenever the group is stable. It is the most common three-cast chain
in the sample after the healing loop.

1. **Holy Shock** on an enemy.
2. **Judgment**. It drops a Consecration that carries your Divine Guidance
   stacks.
3. **Shield of the Righteous**. Press it again if you still have 3 Holy Power.

| Chain | Count across 16 logs |
| --- | --- |
| Shield of the Righteous → Holy Shock → Judgment | 484 |
| Holy Shock → Judgment → Shield of the Righteous | 453 |
| Judgment → Shield of the Righteous → Holy Shock | 369 |
| Judgment → Shield of the Righteous → Shield of the Righteous | 343 |

Shield of the Righteous takes 2 seconds off Holy Shock and returns mana, so
the loop feeds itself. Judgment has a 6-second cooldown on Holy, and the
median gap between casts is **6.0 seconds**. The field presses it on cooldown.

### Healing loop

Use this when the group takes damage. The 4-piece makes it work: Holy Light
always grants Infusion of Light, and the 2-piece doubles again the Flash of
Light that spends it.

1. **Holy Light** — a 2-second cast. It grants Infusion of Light.
2. **Flash of Light** — spends Infusion of Light.
3. **Flash of Light** — a second one if the damage continues.
4. **Word of Glory** — spend the Holy Power.

| Chain | Count across 16 logs |
| --- | --- |
| Flash of Light → Flash of Light → Word of Glory | 745 |
| Holy Light → Flash of Light → Flash of Light | 584 |
| Word of Glory → Holy Light → Flash of Light | 485 |

> [!TIP]
> Queue the Flash of Light during the Holy Light cast. In 693 cases the Flash
> of Light fired within 60 ms of the Holy Light finishing. That is spell
> queueing, not a macro. The global cooldown ends during the 2-second cast, so
> the instant Flash of Light fires the moment Holy Light lands.

## Choosing the loop

The field chooses the loop from how much damage the group took in the last
few seconds. The switch is sharp and it holds in every log. Every Word of
Glory and Shield of the Righteous cast is bucketed below by the damage the
four non-tank players took in the 3 seconds before it, as a share of their
average health.

| Group damage, last 3 s | Word of Glory share of spenders | Infusion of Light on Flash of Light | Divine Purpose on Word of Glory |
| --- | --- | --- | --- |
| Calm, under 10% | **22%** | 42% (Judgment 44%) | 18% |
| Moderate, 10–30% | **67%** | 73% | 63% |
| Heavy, 30–50% | **87%** | 83% | 83% |
| Spike, 50% or more | **89%** | 86% | 84% |

The rule this gives:

1. **Group calm:** spend Holy Power on Shield of the Righteous. Spend Infusion
   of Light on Judgment or Flash of Light. Spend Divine Purpose on Shield of
   the Righteous.
2. **Group taking damage:** switch every spender to Word of Glory, and every
   Infusion of Light to Flash of Light.

> [!IMPORTANT]
> The rule held in **16 of 16 logs**. In every log, the Word of Glory share
> rose from calm to moderate to heavy. The player with the fewest Shield of
> the Righteous casts, 4.1 per minute, also had the highest Word of Glory share
> when the group was calm, at 41%. That player spent healing Holy Power when
> nobody needed it, and dealt the least damage in the sample.

## Spending procs

Each proc below goes to one or two buttons. The table shows where the field
spent them, measured across every removal in 16 logs. Almost none expire.

| Proc | Spend it on | Share | Unused |
| --- | --- | --- | --- |
| **Infusion of Light** | Flash of Light · Judgment · Hammer of Wrath | 65% · 22% · 7% | 1% |
| **Divine Purpose** | Shield of the Righteous · Word of Glory | 56% · 43% | 1% |
| **Empyrean Legacy** | Word of Glory (it also casts Light of Dawn) | 93% | 4% |
| **Awakening** | Judgment · Hammer of Wrath | 74% · 24% | 2% |
| **Hand of Divinity** | Holy Light (instant) | 83% | **13%** |
| **Masterwork: Weapon** | Holy Shock | 83% | — |

> [!WARNING]
> Hand of Divinity is the proc you are most likely to waste. Avenging Wrath
> grants it, so it arrives in your burst window with everything else. The field
> let 13% of them fall off. Spend both instant Holy Lights inside the window.

> [!NOTE]
> Divine Purpose and Infusion of Light look evenly split only because the
> totals mix calm and busy moments. Split by group damage, each one has a clear
> target. See [choosing the loop](#choosing-the-loop).

## Avenging Wrath

On Lightsmith, Avenging Wrath changes the rotation, not only the numbers. It
lasted **18.0 seconds** in all 16 logs. Its floor between casts is **90
seconds**, and the median gap is 98 seconds, so the field presses it on
cooldown.

Casts per minute during combat, inside and outside the window:

| Button | Inside | Outside |
| --- | --- | --- |
| Shield of the Righteous | **11.9** | 8.1 |
| Flash of Light | 11.3 | 9.2 |
| Word of Glory | 8.4 | 8.1 |
| Hammer of Wrath | **7.8** | 0.0 |
| Judgment | **0.0** | 8.0 |
| Holy Light | 5.1 | 3.1 |
| Holy Shock | 4.3 | 6.0 |
| **All casts** | **58.3** | **49.0** |

What happens inside the window:

- **Hammer of Wrath replaces Judgment.** It fires 7.8 times a minute inside
  the window and never outside it. Judgment is the exact mirror.
- **Shield of the Righteous goes up by half.** Blessing of the Forge echoes
  your Holy Power abilities during Avenging Wrath. It deals 12% of your total
  damage.
- **Empyrean Legacy** turns your next Word of Glory into Word of Glory plus Light
  of Dawn.
- **Hand of Divinity** makes your next two Holy Lights instant.

The first two casts after Avenging Wrath are most often Shield of the
Righteous (94 and 77 of 283 windows) or Word of Glory. Enter the window with
Holy Power to spend.

> [!CAUTION]
> The tooltip disagrees with the logs. The Wowhead tooltip gives Avenging Wrath
> a 2-minute cooldown and 20 seconds, or 30 with Sanctified Wrath. Icy Veins
> says 30 seconds by default. The logs show an **18.0-second** window and a
> **90-second** floor in all 16 logs. This guide follows the logs. Plan your
> cooldowns on a 90-second cycle.

> [!TIP]
> Do not save Avenging Wrath for bosses. The field split it 137 on trash pulls to
> 143 on boss pulls. It is a damage cooldown on a 90-second cycle, and a pull
> without it costs more than a late boss window gains.

## Burst healing

This section lines the Holy Paladin's casts up against the group's damage
taken, second by second. A **spike** here means the four non-tank players
lost 50% or more of their average health in 3 seconds, after at least 5 calm
seconds. The 16 keys hold 156 such spikes. They are dangerous: in 99 of them,
a non-tank player fell below 30% health within 6 seconds.

> [!IMPORTANT]
> **The answer to a spike is the rotation, not a cooldown.** Your total cast
> rate does not change: 50.5 casts per minute at baseline, 50.6 in the first 6
> seconds of a spike. You press different buttons, not more of them. Only 31
> of 156 spikes landed inside Avenging Wrath.

Casts per minute at baseline, and in the first 6 seconds after a spike starts:

| Button | Baseline | Spike, first 6 s | Change |
| --- | --- | --- | --- |
| Flash of Light | 10.0 | **13.2** | +32% |
| Holy Light | 3.5 | **4.7** | +37% |
| Word of Glory | 8.3 | **9.6** | +16% |
| Divine Protection | 0.68 | **1.41** | doubles |
| Aura Mastery | 0.23 | 0.51 | doubles |
| Shield of the Righteous | 8.6 | 6.6 | −24% |
| Judgment | 6.1 | 3.9 | −37% |
| Holy Shock | 5.5 | 4.3 | −22% |

### The response

The logs show the same response to a spike, in this order:

1. **Finish the current global.** The first cast after a spike starts is still
   Shield of the Righteous in 40 of 156 spikes. The first heal lands a median
   **2.75 seconds** after the damage.
2. **Holy Light**, if you can afford a 2-second cast. It grants Infusion of
   Light.
3. **Flash of Light** with Infusion of Light. From the third cast on, Flash of
   Light and Word of Glory are the two most common casts at every position.
4. **Word of Glory** with every Holy Power and every Divine Purpose. In a
   spike, 89% of spenders are Word of Glory.
5. **Repeat** Holy Light, Flash of Light, Flash of Light, Word of Glory until
   the group recovers.

Inside Avenging Wrath the same loop gets stronger. Empyrean Legacy adds a Light
of Dawn to your first Word of Glory, and Hand of Divinity makes two Holy Lights
instant.

> [!TIP]
> Close the gap on the first two globals. A 2.75-second median to the first
> heal means most players lose one to two globals to a queued damage cast. On a
> known mechanic, start the Holy Light before the damage lands.

### Cooldowns at a spike

The field seldom answers a spike with a major cooldown. The count below is how
many casts of each fell from 6 seconds before to 8 seconds after a spike
started, out of all casts in the sample.

| Cooldown | Near a spike | Before the spike | Reading |
| --- | --- | --- | --- |
| Soulcoiler Ritual Vessel | 28 of 190 | **21** of 28 | Used ahead of known damage |
| Holy Bulwark | 43 of 520 | 19 of 43 | Often placed ahead |
| Divine Protection | 36 of 315 | 11 of 36 | Mostly in the first 3 s, to survive it yourself |
| Avenging Wrath | 28 of 283 | 12 of 28 | Not saved for spikes |
| Aura Mastery | 16 of 105 | 6 of 16 | Held for something else |
| Lay on Hands | 5 of 75 | 0 of 5 | Single-target emergencies only |
| Blessing of Sacrifice | 5 of 100 | 1 of 5 | Not a group tool |

> [!NOTE]
> Aura Mastery and Lay on Hands rarely line up with these spikes. The field
> presses Aura Mastery about every 3.5 minutes, so it is held for specific
> dungeon mechanics that this measure does not isolate. A mechanic that hits
> one player hard, or builds slowly, does not register as a group spike here.

> [!WARNING]
> The spike measure has three limits. It counts only damage that landed, so
> an absorbed hit still counts while a dodged one does not. Health values come
> only from damage events, so the "below 30%" count can include a player a heal
> had already topped up. And the spike count varies from 1 to 21 per key.
> Three keys hold 57 of the 156 spikes between them.

## Cooldown use

The measured gaps show which buttons the field holds and which it presses on
cooldown. The floor is the shortest gap seen, which is the real cooldown.

| Button | Floor | Median gap | Use |
| --- | --- | --- | --- |
| Judgment | 1.9 s | 6.0 s | On cooldown, outside Avenging Wrath |
| Hammer of Wrath | 2.4 s | 7.1 s | On cooldown, inside Avenging Wrath |
| Holy Armaments, either | 1.2 s | 26.5 s | On cooldown. 2 charges |
| Divine Protection | 42.2 s | 69.1 s | Often. 124 of 315 casts fall from 10 s before to 20 s after Avenging Wrath |
| Avenging Wrath | 90.0 s | 97.7 s | On cooldown |
| Soulcoiler Ritual Vessel | 69.6 s | 134.6 s | A median 3.3 s **before** Avenging Wrath |
| Aura Mastery | 151.9 s | 211.1 s | Held for a mechanic |
| Lay on Hands | 120.4 s | 279.0 s | Emergency |

> [!IMPORTANT]
> **Holy Armaments is one button.** It switches between Holy Bulwark and Sacred
> Weapon after each cast. In 1,009 of 1,015 consecutive casts the next one was
> the other armament. Each cast also gives 3 Holy Power. Valiance takes 3
> seconds off its cooldown each time you spend Infusion of Light, which is how
> the field reaches 2.1 casts a minute against a 1-minute recharge.

Armament targets, across 1,031 casts:

- **Holy Bulwark** went on another player 407 times and on yourself 113 times.
- **Sacred Weapon** went on another player 378 times and on yourself 133 times.

Wowhead gives the reason. Sacred Weapon is best on yourself. Holy Bulwark goes
on a fragile player, or on yourself so that Solidarity copies it to the tank.
The logs show most players aim both at an ally, so this is a choice, not a
rule.

## The Shield question

This section checks the Reddit claim against the logs. The claim is that
Lightsmith is played for damage, with a focus on Shield of the Righteous.

The evidence for it:

1. **Popularity.** Of 44 top-10 Holy Paladin parses checked across all eight
   dungeons, 33 played Lightsmith.
2. **Damage share.** Shield of the Righteous deals 30.3% of your damage. It is
   the largest single source in all 16 logs, range 18.7% to 34.2%.
3. **Damage around it.** Consecration deals 21.2% and Blessing of the Forge
   12.4%. Both come from the Holy Power you spend, and much of that goes to
   Shield of the Righteous.
4. **Correlation.** Across 16 logs, Shield of the Righteous casts per minute
   against damage done gives r = 0.67. Against healing done it gives r = 0.03.
5. **Within a dungeon.** In 6 of 8 dungeon pairs, the player with more Shield
   of the Righteous casts dealt more damage. One pair went the other way and
   one was a tie.

The rate varies. Boss pulls ranged from 2.9 to 12.5 casts per minute, so the
top players do not agree on the right amount.

> [!WARNING]
> **The written guides disagree with each other.** Icy Veins calls Shield of the
> Righteous overuse the number one mistake and says to hold 4 to 5 Holy Power.
> Maxroll and Wowhead say to spend on it whenever nobody needs healing. The logs
> side with Maxroll and Wowhead: more Shield of the Righteous came with no loss
> of healing. This guide follows the logs.

> [!CAUTION]
> This is not proof that Lightsmith out-damages Herald. Every log in this
> sample is Lightsmith, so no Herald comparison exists here. A US Herald player
> held rank 1 in three of the eight dungeons. The data shows that a Lightsmith
> player gains damage from more Shield of the Righteous. It does not show that
> Lightsmith is the stronger tree.

> [!NOTE]
> The research agent could not find the Reddit thread. `r/HolyPaladin` does not
> exist, and the Reddit rate limit blocked the two other searches. The claim is
> checked here against logs only.

## Buttons you will not press

These abilities appear in written guides or on the Herald bar, and have zero
or near-zero casts in all 16 logs.

- **Divine Toll** — zero casts. Holy Armaments takes its talent node.
- **Beacon of Virtue** — zero casts. The field places Beacon of Light and
  Beacon of Faith before the key and leaves them. See [beacons](#beacons).
- **Eternal Flame** — zero casts. Word of Glory is the healing spender.
- **Holy Prism** — zero casts.
- **Consecration** — zero casts, 21% of damage. Judgment drops it.
- **Hand of Divinity** — zero casts. Avenging Wrath grants it.
- **Light of Dawn** — cast by hand in 3 of 16 logs. Empyrean Legacy casts it
  for you.

> [!WARNING]
> Maxroll recommends Lightsmith for Mythic+, but its priority and cooldown
> sections still name Divine Toll, Holy Prism and Eternal Flame. Lightsmith
> does not have those buttons. Skip those sections of that guide.

## Beacons

The field places its beacons before the key starts and touches them only when
something forces a change. Across 16 keys, the median is **2 beacon casts
per key**. Two keys have none at all.

> [!IMPORTANT]
> **Neither beacon goes on the tank.** Both go on DPS players, almost always
> ranged ones. Over the whole sample, beacon holders were DPS for 657 minutes,
> the Holy Paladin for 39 minutes and the tank for 6 minutes. The tank
> receives a median **8%** of beacon transfer healing, range 3% to 15%.

Who held a beacon for at least 30% of a key, across 27 such holders:

| Holder | Count |
| --- | --- |
| Elemental Shaman | 13 |
| Arcane Mage | 8 |
| Arms Warrior | 2 |
| Assassination Rogue | 2 |
| Demonology Warlock, Shadow Priest, the Holy Paladin | 1 each |

Beacon of Light and Beacon of Faith follow the same pattern. At least 10 of
16 keys run both. The other six show events for Beacon of Light only. A Beacon of Faith that
sat on one player all key would leave no event, so those six may run both too.

> [!NOTE]
> The beacon does **not** follow the DPS player who takes the most damage. The
> main holder took the least damage of the three DPS players in 13 of 27 cases,
> and the most in only 6. The logs show the placement but not the reason for it.
> One likely reason: the tank already gets heavy healing from every source,
> and a ranged player stays in range for the whole pull. The cost is small.
> Beacon transfer overheals 35%, against 30% for all of your healing.

### When to recast

The field recasts a beacon in two cases only:

1. **The holder dies.** 21 of 22 unplanned beacon drops happened within 3
   seconds of the holder's death. The field replaced the beacon a median 8.5
   seconds later, on the same player 13 times and on another player 6 times.
   Three drops were never replaced.
2. **A planned move.** 20 casts moved a beacon from one player to another at
   the same instant. 12 of them went from one DPS player to another. 12 of the
   20 came after minute 18 of the key, which may mean a change for the last
   boss. The logs cannot confirm that.

> [!TIP]
> Put Beacon of Light on your raid frames through the **Group Buffs** tab. The
> beacon drops silently when its holder dies, and 3 of 22 drops in this sample
> were never replaced for the rest of the key.

> [!NOTE]
> The Holy Paladin receives a median 17% of beacon transfer healing, even in
> keys where neither beacon sits on them. That healing may come from a talent
> or an apex effect. This analysis did not identify its source.

## Troubleshooting

Use this section when a key feels wrong. Each symptom names the number to
check in your log.

- **Your damage is low.** Count Shield of the Righteous per minute. The field
  median is 8.6 and the range is 4.1 to 11.2. Near the bottom of that range,
  you are probably spending Holy Power on Word of Glory when nobody needs it.
- **Your Consecration damage is low.** Check Judgment. The median gap is 6.0
  seconds, which is its cooldown. Each Judgment you skip drops no
  Consecration, and your Divine Guidance stacks wait for the next one.
- **You run out of mana.** Shield of the Righteous returns mana. A key with
  few Shield of the Righteous casts and many Holy Lights runs dry first.
- **Avenging Wrath feels empty.** Check that Hammer of Wrath appears 7 or 8
  times a minute inside it, and that you enter with Holy Power.
- **You spend Holy Power on the wrong spender.** Check your Word of Glory
  share when the group is calm. The field keeps it near 22% and raises it to
  89% in a spike. See [choosing the loop](#choosing-the-loop).
- **Your first heal after a spike is late.** The field median is 2.75 seconds.
  On a known mechanic, start Holy Light before the damage lands.
- **Healing falls behind on a pull.** Check Holy Light. The field casts 3.3 per
  minute. Without it, Infusion of Light comes only from Judgment's 20%
  chance, and your Flash of Light loses its biggest heal.
- **Holy Armaments sits unused.** It has 2 charges and Valiance takes time off
  it. Both armaments together run 2.14 casts a minute, range 1.70 to 2.37.
  Below that range, you are probably sitting at 2 charges.

## Observed rates

Median casts per minute over the whole key, across 16 logs. Compare your own
log against these. Do not treat them as targets.

| Button | Whole key | Boss pulls | AoE pulls | Range |
| --- | --- | --- | --- | --- |
| Flash of Light | 9.04 | 10.97 | 9.16 | 6.97–12.42 |
| Shield of the Righteous | 8.61 | 8.49 | 8.77 | 4.08–11.19 |
| Word of Glory | 8.11 | 8.52 | 7.69 | 5.68–9.79 |
| Judgment | 5.96 | 5.91 | 6.57 | 4.08–7.34 |
| Holy Shock | 5.53 | 5.64 | 5.61 | 2.56–7.27 |
| Holy Light | 3.31 | 4.00 | 3.35 | 1.73–4.66 |
| Hammer of Wrath | 1.32 | 1.37 | 1.51 | 0.73–1.99 |
| Holy Bulwark | 1.09 | 1.15 | 1.09 | 0.86–1.20 |
| Sacred Weapon | 1.05 | 1.11 | 1.12 | 0.83–1.17 |
| Avenging Wrath | 0.57 | — | — | 0.53–0.62 |

The rotation hardly changes with target count. Six genuine single-target
boss pulls gave Shield of the Righteous 9.3 per minute, against 8.8 on AoE
pulls. Lightsmith has no damage button to swap to on AoE, because Shield of the
Righteous, Consecration and Blessing of the Forge already hit several enemies.

Where the damage and healing come from, as median share:

| Damage | Share | Healing | Share |
| --- | --- | --- | --- |
| Shield of the Righteous | 30.3% | Flash of Light | 20.5% |
| Consecration | 21.2% | Word of Glory | 16.4% |
| Sacred Weapon | 16.3% | Beacon of Light | 12.4% |
| Blessing of the Forge | 12.4% | Holy Bulwark | 11.9% |
| Judgment | 6.5% | Holy Light | 7.5% |
| Lesser Weapon | 5.8% | Soulcoiler Ritual Vessel | 5.0% |
| Hammer of Wrath | 3.7% | Judgment | 3.7% |
| Holy Shock | 2.6% | Divine Guidance | 3.5% |

Holy Shock deals 2.6% of damage and 1.2% of healing. On Lightsmith it is a
Holy Power generator and the trigger for Masterwork: Weapon, not a heal.

## Buffs to track

Use the in-game Cooldown Manager for these. A buff is on this list only if it
changes your next press.

| Buff | Spell ID | The decision it drives |
| --- | --- | --- |
| **Infusion of Light** | 54149 | Press Flash of Light, or Judgment when nobody needs healing |
| **Divine Purpose** | 223819 | Your next spender is free |
| **Hand of Divinity** | 414273 | Your next 2 Holy Lights are instant. Do not let it expire |
| **Empyrean Legacy** | 387178 | Your next Word of Glory also casts Light of Dawn |
| **Awakening** | 414193 | Your next Judgment or Hammer of Wrath crits for 30% more |
| **Avenging Wrath** | 31884 | Hammer of Wrath replaces Judgment |
| **Masterwork: Weapon** | 1271436 | Your next 3 Holy Shocks each give an ally a Lesser Armament |

Put the first five in **Tracked Buffs**. Put Avenging Wrath and Masterwork:
Weapon in **Tracked Bars**, because you read their time left rather than
react to them appearing.

Hide these. Each appears in all 16 logs, but none of them changes a press:

- **Divine Guidance** (460822) — 24 applications a minute. Judgment spends it
  and you press Judgment on cooldown anyway.
- **Sacred Weapon** (432502) and **Holy Bulwark** (432607, 432496) — the
  results of an armament you already cast.
- **Hammer of Wrath** (1241410) — the same window as Avenging Wrath.
- **Afterimage**, **Beacon of the Savior**, **Saved by the Light** and
  **Glistening Radiance** — automatic, no input.
- **Masterwork: Bulwark** (1271383) — no decision found. The research agent
  traced it to an older tier set, but it appears in all 16 logs, so its source
  is unconfirmed.

> [!TIP]
> Add **Holy Armaments** and **Judgment** to **Essential Cooldowns** on the
> Spells tab. They are the two buttons the field presses on cooldown, and both
> are easy to lose in a busy pull. The setup path is in the
> [Holy Paladin buff guide](holy-paladin-cdm-buffs.md#where-to-set-it).

## Stats and gear

The field gears differently from what the written guides recommend. Numbers
are secondary stat ratings from the 15 logs that carry gear data.

| Stat | Median rating | Range |
| --- | --- | --- |
| Haste | 1146 | 960–1383 |
| Critical Strike | 792 | 668–1199 |
| Versatility | 754 | 482–1051 |
| Mastery | 361 | 101–596 |

> [!IMPORTANT]
> **Haste > Critical Strike > Versatility > Mastery**, as the top players
> actually gear. Murlok.io's top 50 Lightsmith players show the same order.
> Icy Veins, Wowhead and Method all rank Mastery first. Two independent
> sources of real gear disagree with every written guide. This guide follows
> the gear.

Tier set: all 15 logs with gear data wear 4 or more pieces. 12 wear 4 and 3
wear 5.

Trinkets, out of 15 logs:

- **Soulcoiler Ritual Vessel** — 15 of 15. It gives 5% of your healing. Use it
  about 3 seconds before Avenging Wrath.
- **Gebbo's Bottomless Bag** — 8.
- **Wavecaller's Seastone** — 4.
- **Drum of Renewed Bonds** — 2.

Main hands: Magister's Mana Sword (7) and Malevolent Spiritcudgel (6).
Off hands: Venom-Slashed Scuteward (5) leads.

## Talents that matter

This guide does not publish a talent build. Import one from Murlok.io or a
written guide. The talents below matter because each one adds, removes or
changes a button.

- **Holy Armaments** — takes the Divine Toll node. Your only way to get
  Divine Toll back is to leave Lightsmith.
- **Righteous Judgment** — makes Judgment drop a Consecration. Without it,
  Divine Guidance has nothing to release into.
- **Blessing of the Forge** — the reason Shield of the Righteous rises inside
  Avenging Wrath. 50 of 50 top players take it.
- **Laying Down Arms** — an Armament fading gives Infusion of Light and takes
  15 seconds off Lay on Hands.
- **Valiance** — spending Infusion of Light takes 3 seconds off Holy Armaments.
  This is why the healing loop and the armament rate are linked.
- **Masterwork** — after an Armament, the next 3 Holy Shocks each give an ally
  a Lesser Armament.

Murlok.io shows 13 Lightsmith nodes taken by all 50 of its top players. The
only split node is Authoritative Rebuke, at 38 of 50.

## Macros

The logs support only one macro. Everything else below is a convention, and is
marked as one.

**Avenging Wrath and potion** — measured. In 14 of 53 potion uses, the potion
fired in the same millisecond as Avenging Wrath, which means one keypress. Both
are off the global cooldown, so one press fires both. The other 39 used
separate keys, so this macro is optional.

```
#showtooltip Avenging Wrath
/cast Avenging Wrath
/use Light's Potential
```

**Holy Shock, ally or enemy** — a convention, not measured. The field casts
Holy Shock on an enemy 1,764 times and on an ally 861 times. One key that heals
your mouseover and otherwise damages your target covers both.

```
#showtooltip Holy Shock
/cast [@mouseover,help,nodead][@target,harm,nodead][] Holy Shock
```

> [!WARNING]
> Do not add the trinket to the Avenging Wrath macro. The field uses Soulcoiler
> Ritual Vessel a median of 3.3 seconds **before** Avenging Wrath, never in the
> same press. Test any macro in a dummy key first. A macro that fires two
> abilities that both use the global cooldown silently drops one of them.

## The sample

16 Holy Paladin Lightsmith keys, pulled through the Warcraft Logs v2 API. Read
this before trusting any number above.

- **Zone 55, Mythic+ Season 2.** Two keys from each of the eight dungeons:
  Altar of Fangs, Den of Nalorakk, Kings' Rest, Murder Row, Ruby Life Pools,
  Temple of Sethraliss, The Blinding Vale and Voidscar Arena.
- **Key level 21 to 22.** Page 1 of the healing rankings holds keys 20 to 22
  only. Ranks 1 to 9 of each dungeon.
- **13 distinct players.** 9 logs from CN, 5 from EU and 2 from US.
- **494 minutes of keys.** 56 boss pulls, 92 AoE pulls, 283 Avenging Wrath
  windows and 23,835 casts.
- **Group damage taken** for all five players, 89,361 non-melee damage
  events with the target's health attached. The spike analysis in
  [burst healing](#burst-healing) comes from these.
- **Only 6 genuine single-target pulls.** That is enough for the rates above,
  and not enough for a firm single-target rotation.

> [!NOTE]
> The hero tree comes from cast signatures, not talent data. A player who casts
> Holy Bulwark is Lightsmith. The check covered ranks 1 to 10 of two dungeons,
> ranks 1 to 6 of two more and ranks 1 to 3 of the other four. It found 33
> Lightsmith and 11 Herald among 44 parses.
