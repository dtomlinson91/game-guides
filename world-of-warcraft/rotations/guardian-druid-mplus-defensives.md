# Guardian Druid — Mythic+ defensives

A defensive reference for Guardian Druid in Mythic+, for Midnight, patch 12.1,
Season 2. It covers how strong tanks cycle Barkskin, Incarnation: Guardian of
Ursoc, Lunar Beam, Survival Instincts, Frenzied Regeneration and Ironfur
through a large pull, and what they do when health drops. Every rate, timing
and share comes from 16 timed key level 21 runs on Warcraft Logs
[[1]](#ref-1). Spell values come from the game's tooltips. Written guides
were read only to check their claims against the logs.

> [!NOTE]
> All 16 sampled tanks played **Elune's Chosen** and wore the **4-piece** tier
> set. Lunar Beam's 40-second cooldown and 11.5-second duration come from
> Elune's Chosen talents. Incarnation's 35-second duration comes from the
> 4-piece. A Druid of the Claw tank or a tank without the set has a different
> cycle. See [Hero talent and tier set](#hero-talent-and-tier-set).

> [!IMPORTANT]
> Two terms appear in every section. A **major** is one of the four
> cooldowns that reduce damage or raise health for several seconds: Barkskin,
> Incarnation, Lunar Beam and Survival Instincts. **Intake** is the damage the
> enemies send at the tank before armor and defensives. This guide ranks how
> dangerous a moment is by intake, because damage taken after mitigation is
> already reduced by the defensives being measured.

## Contents

- [How the kit works](#how-the-kit-works)
- [The big-pull cycle](#the-big-pull-cycle)
  - [The opener](#the-opener)
  - [The first minute](#the-first-minute)
  - [Stagger, do not stack](#stagger-do-not-stack)
- [Ironfur is the floor](#ironfur-is-the-floor)
- [Frenzied Regeneration](#frenzied-regeneration)
- [Survival Instincts](#survival-instincts)
- [When health drops](#when-health-drops)
- [Five rules that surprise](#five-rules-that-surprise)
- [Troubleshooting](#troubleshooting)
- [Danger pulls by dungeon](#danger-pulls-by-dungeon)
- [Observed rates](#observed-rates)
- [Cooldown timings](#cooldown-timings)
- [Buttons not pressed](#buttons-not-pressed)
- [Hero talent and tier set](#hero-talent-and-tier-set)
- [Macros](#macros)
- [Gear and stats](#gear-and-stats)
- [Where logs beat guides](#where-logs-beat-guides)
- [The sample](#the-sample)
- [Sources](#sources)

## How the kit works

Guardian survives on three layers. Ironfur gives a constant armor floor
against melee. Four majors rotate on their own cooldowns and cover the
dangerous seconds. Frenzied Regeneration and passive absorbs refill health
between hits. None of the majors share a cooldown, and none of them change
another's cooldown.

| Button | What it does | Measured duration | Measured cooldown floor | Global cooldown |
| --- | --- | --- | --- | --- |
| **Ironfur** | Armor from Agility. Each cast adds a separate stack. 40 Rage [[5]](#ref-5) | 9 s per stack | 0.5 s | No |
| **Barkskin** | 20% less damage taken. Reinforced Fur and Oakskin each add 10% [[2]](#ref-2)[[11]](#ref-11). Matted Fur adds an absorb [[11]](#ref-11) | 14.0 s | 34.2 s | No |
| **Incarnation** | 30% more maximum health. Halves the Mangle, Thrash and Growl cooldowns. Immune to loss of control [[6]](#ref-6) | 35.0 s | 78.5 s | No |
| **Lunar Beam** | Mastery, which raises maximum health and healing taken, plus a heal over time [[7]](#ref-7) | 11.5 s | 40.0 s | Yes |
| **Survival Instincts** | 50% less damage taken, 60% with Oakskin. 2 charges. Matted Fur adds an absorb [[3]](#ref-3)[[11]](#ref-11) | 6.0 s | Charge-based | No |
| **Frenzied Regeneration** | Heals over 3 seconds. 2 charges with Innate Resolve. Overheal becomes an absorb with Natural Resilience [[4]](#ref-4)[[10]](#ref-10) | 3 to 4 s | Charge-based | Yes |

How each system works:

- **Everything here is temporary and belongs to the character.** No defensive
  stays after it ends, and none is tied to an item, except the trinket.
- **The printed cooldowns are not the real cooldowns.** Survival of the
  Fittest cuts Barkskin and Survival Instincts [[8]](#ref-8). Lunation cuts
  Lunar Beam to 40 seconds [[7]](#ref-7). Ursoc's Guidance cuts Incarnation
  by 1 second per 25 Rage spent [[9]](#ref-9), so a tank that spends more
  Rage gets Incarnation back sooner.
- **Rage is the shared cost.** Ironfur and Frenzied Regeneration cost Rage.
  Incarnation makes Mangle and Thrash come back faster, so it raises Rage
  income and with it the Ironfur rate.
- **Some healing is automatic.** Dream Guide casts an empowered Regrowth when
  the tank or an ally drops below 40% [[14]](#ref-14). Ursoc's Fury turns
  Thrash and Maul damage into an absorb. Neither is a button.

## The big-pull cycle

This is the pattern the logs show on the largest trash pulls. It is the part
of the guide to read before a key.

### The opener

The sample holds 97 trash engagements of 4 or more enemies. An engagement
starts at the first hit after 10 seconds without damage taken. The 32 with
the highest intake in their first 20 seconds are the big pulls below.

| Major | Pressed in the first 20 s | Median first press | Middle half of presses |
| --- | --- | --- | --- |
| Barkskin | 81% | 1.3 s after the first hit | 0.0 to 5.5 s |
| Incarnation | 88% | 9.8 s | 5.1 to 12.3 s |
| Lunar Beam | 91% | 11.3 s | 7.9 to 14.2 s |
| Survival Instincts | 25% | 12.7 s | 6.7 to 17.4 s |

The most common order is Barkskin, then Incarnation, then Lunar Beam. It
opened 10 of the 32 big pulls. Barkskin was already up at the first hit on
31% of them, which means the tank pressed it while walking in.

> [!TIP]
> The opener is staggered on purpose. Barkskin covers the first 14 seconds,
> while the pack runs in and hits all at once. Incarnation and Lunar Beam
> start about 10 seconds later, when Barkskin has a few seconds left.
> Incarnation's 35 seconds then carry the pull to the second Barkskin.

### The first minute

This table shows how the cycle covers a big pull. Each row is a 5-second
slice after the first hit, across the same 32 pulls.

| Seconds after first hit | Any major up | Barkskin | Incarnation | Lunar Beam | Survival Instincts |
| --- | --- | --- | --- | --- | --- |
| 0–5 | 66% | 50% | 34% | 0% | 3% |
| 5–10 | 81% | 75% | 56% | 22% | 12% |
| 10–15 | 100% | 75% | 84% | 53% | 6% |
| 15–20 | 100% | 28% | 88% | 69% | 9% |
| 20–25 | 97% | 16% | 91% | 56% | 12% |
| 25–30 | 100% | 9% | 94% | 28% | 6% |
| 30–35 | 100% | 9% | 97% | 6% | 3% |
| 35–40 | 91% | 28% | 84% | 0% | 16% |
| 40–45 | 91% | 44% | 66% | 0% | 6% |
| 45–50 | 81% | 53% | 34% | 12% | 9% |
| 50–55 | 81% | 44% | 16% | 41% | 12% |
| 55–60 | 87% | 32% | 10% | 61% | 13% |

The cycle has a shape:

1. **0 to 15 seconds.** Barkskin.
2. **10 to 45 seconds.** Incarnation, with Lunar Beam inside it.
3. **35 to 55 seconds.** The second Barkskin. Its cooldown is about 34
   seconds, so it is ready as Incarnation ends.
4. **50 to 60 seconds.** The second Lunar Beam. Its cooldown is 40 seconds.
5. **Any gap.** Survival Instincts appears in every slice at 3% to 16%. It
   fills the moment the planned cycle does not cover.

Intake peaks at 10 to 40 seconds, a median of 6.5 to 8.0 times maximum
health per 5 seconds before mitigation. That is exactly where coverage is 97%
to 100%.

### Stagger, do not stack

The majors cover more time one after another than together. Across all
combat, every second was ranked against the rest of its own key by intake.

| Intake band in its key | Any major up | Two or more majors up | No major up |
| --- | --- | --- | --- |
| Bottom half | 55% | 14% | 45% |
| 50th to 75th percentile | 71% | 23% | 29% |
| 75th to 90th percentile | 80% | 29% | 20% |
| Top 10% | 88% | 37% | 12% |

In the top 10%, the share of seconds with no major ranged from 4% to 18%
across the 16 tanks. The majors line up with intake, but they rarely sit on
top of each other. This is what the press context shows:

- **Barkskin** was pressed with no other major up 58% of the time.
- **Survival Instincts** was pressed with no other major up 45% of the time.
- **Lunar Beam** was pressed with no other major up 41% of the time.
- **Incarnation** was pressed alone 31% of the time. It overlaps the others
  most, because it lasts 35 seconds and the others come back during it.

> [!NOTE]
> Overlap still happens. Survival Instincts was pressed inside Barkskin on 23%
> of its uses. That is the case where one major is not enough, not a habit.

## Ironfur is the floor

Ironfur is the most pressed button in the kit, at a median of 784 casts per key.
Melee is the largest damage source in every dungeon in the sample. Ironfur is
armor, so it works against melee and not against magic or bleeds
[[19]](#ref-19).

| State | Ironfur casts per minute | Average stacks |
| --- | --- | --- |
| Outside Incarnation | 25.3 | 3.6 |
| Inside Incarnation | 33.5 | 4.6 |
| Top 10% intake seconds | — | 5.1 |

While taking damage, the stack count sat at:

| Stacks | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Share of seconds | 1.6% | 4.2% | 10.7% | 17.6% | 21.3% | 21.2% | 14.5% | 6.3% | 2.6% |

- **Zero stacks is rare.** No tank spent more than 3.3% of its damage-taking
  seconds at zero.
- **4 to 5 stacks is the normal state.** Stacks climb into Incarnation and
  into the highest-intake seconds, because those are when Rage income is
  highest.
- **Maul is a dump, not a priority.** Tanks cast 6 to 18 Maul per key against
  680 to 850 Ironfur.

## Frenzied Regeneration

Strong tanks press Frenzied Regeneration early, not as a panic heal. The
median health at the press was **97%**. The 10th percentile was 68%. That
fits Natural Resilience: 80% of the overheal becomes an absorb
[[10]](#ref-10), so a press at high health still pays out as a shield.

- **Usage varies more than any other button.** Tanks cast it 25 to 127 times
  per key, a median of 78. Two charges let them double it: 10% of gaps
  between casts are under 3.4 seconds.
- **It is not spammed inside Incarnation.** The rate is 2.9 per minute inside
  Incarnation and 2.5 per minute outside it. Gaps inside Incarnation have a
  median of 7.4 seconds.
- **It is the first answer to a health drop.** It was pressed within 3
  seconds of 43% of the drops below 35% health. See
  [When health drops](#when-health-drops).

> [!WARNING]
> One guide says Incarnation removes Frenzied Regeneration's cooldown
> [[24]](#ref-24). The tooltip shows a 50% cut [[6]](#ref-6). No sampled tank
> pressed it faster than about 2.4 seconds apart inside Incarnation, and the
> rate barely moved. This guide does not assume free casts inside
> Incarnation.

## Survival Instincts

Survival Instincts is the reserve. It is the strongest major and the least
used one.

- **8.6 casts per key on average**, with a range of 3 to 14 across the 16 tanks. The
  median gap between casts is 160 seconds.
- **Reactive.** The median health at the press was 74%, and the 10th
  percentile was 44%. Compare 100% for Incarnation and 90% for Barkskin.
- **Short.** It lasts 6.0 seconds in every log. It covers one dangerous cast
  or one bad moment, not a pull.
- **Rarely in the opener.** Only 1% of its presses on large trash pulls came
  in the first 5 seconds. It was pressed in the first 20 seconds of only 25%
  of big pulls.

> [!CAUTION]
> The only tank death in the sample came with **both charges unused for 203
> seconds**. The tank died to Sky Strike in Voidscar Arena with Barkskin up
> and Incarnation last used 118 seconds earlier. Holding a charge is correct.
> Holding both through a drop is not.

## When health drops

The 16 tanks dropped below 35% health 117 times, counted at most once per 10
seconds. That is 2 to 14 times per key, with a median of about 7. Strong tanks
do not avoid low health. They answer it.

What caused the drop, by the largest hit in the 4 seconds before it:

| Cause | Drops |
| --- | --- |
| One hit of 30% or more of maximum health | 51 |
| One hit of 15% to 30% | 42 |
| Many small hits | 24 |

What was up at the drop, and what the tank pressed in the next 3 seconds:

| Up at the drop | Share | Pressed within 3 s | Share |
| --- | --- | --- | --- |
| No major | 62% | Frenzied Regeneration | 43% |
| Frenzied Regeneration | 29% | Survival Instincts | 15% |
| Barkskin | 17% | Lunar Beam | 13% |
| Incarnation | 12% | Barkskin | 11% |
| Lunar Beam | 9% | Health potion | 11% |
| — | — | Incarnation | 6% |
| — | — | Healthstone | 2% |
| — | — | Nothing | 26% |

The 72 drops with no major up show what was left in reserve:

- **Survival Instincts** had no cast in the previous 140 seconds in 44% of
  them, and one cast in another 44%. A charge was probably available in most
  of them. This assumes a recharge near 140 seconds, which comes from
  talent arithmetic, not from a measurement.
- **Barkskin** was off cooldown in 25% of them.
- **Lunar Beam** was off cooldown in 17% of them.

The response order the logs show is:

1. Frenzied Regeneration, if a charge is available.
2. Survival Instincts, if the next hit can kill.
3. Whatever major is off cooldown.
4. Health potion. The tanks used about 2 per key.

## Five rules that surprise

1. **Incarnation is pressed at full health.** The median health at the press
   was 100%, and the 10th percentile 91%. It is a planned cooldown that opens
   a pull, never a reaction.
2. **Lunar Beam is pressed on cooldown.** The median gap is 42.3 seconds
   against a 40.0-second floor. It is a defensive that is never held.
3. **Barkskin is mostly a cycle button.** Only 20% of Barkskin presses came
   in the first 20 seconds of an engagement. The rest are mid-pull, close to
   cooldown. The median gap is 44.5 seconds against a 34.2-second floor.
4. **Healers rarely save the tank with an external.** Across all damage the
   tanks took, the share of hits under an external was 1.2% for Rallying Cry,
   0.6% for Blessing of Sacrifice, 0.4% for Spirit Link Totem, 0.3% for
   Anti-Magic Zone and 0.1% for Life Cocoon. No Pain Suppression or Ironbark
   appeared on any tank. The kit carries itself.
5. **The tanks with the most health drops play the hardest dungeons.** Ruby
   Life Pools gave 25 drops across its 2 logs, The Blinding Vale 21, and Den
   of Nalorakk 9. A health drop is a dungeon feature as much as a mistake.

## Troubleshooting

Check these in order when a big pull goes wrong.

1. **No major in the first 5 seconds.** Press Barkskin as the pack arrives.
   On 34% of big pulls, Incarnation was also up in that slice.
2. **Incarnation and Barkskin end together.** That leaves the 35 to 45 second
   gap uncovered. Press Barkskin first and Incarnation about 10 seconds later.
3. **Lunar Beam held for a "big moment".** Strong tanks do not hold it. A
   held Lunar Beam is one fewer cast per pull.
4. **Ironfur below 3 stacks on a large melee pack.** The normal state is 4
   to 5 stacks, and 5 or more at the highest intake. Spend Rage on Ironfur
   before Maul.
5. **Frenzied Regeneration saved for low health.** Strong tanks press it at
   a median of 97% health. A press at 30% health heals too late for the next
   hit.
6. **Both Survival Instincts charges unused through a drop.** Press one.
   The second charge is the reserve.
7. **Death to one large hit with a major ready.** 93 of 117 drops came from
   one hit of 15% or more. Learn the large casts in the
   [danger pulls](#danger-pulls-by-dungeon) and put a major on them.

## Danger pulls by dungeon

The two most dangerous pulls in each dungeon, by intake per second. Warcraft
Logs names a pull after its first enemy and merges chained packs into one
pull, so a "pull" here can be several packs. Damage taken and intake are per
second, as a share of maximum health. Melee is left out of the ability list,
because it leads every dungeon.

| Dungeon | Pull | Enemies | Taken per s | Intake per s | Lowest health | Main non-melee damage |
| --- | --- | --- | --- | --- | --- | --- |
| Altar of Fangs | Twinfang Harrower | 37 | 14.7% | 114% | 39% | Ravenous Claws, Duostrike, Unstable Totem |
| Altar of Fangs | Rattling Writhe | 36 | 17.6% | 111% | 31% | Rattle, Corrosive Fangs, Envenom |
| Den of Nalorakk | Spirit of Hunger | 31 | 17.5% | 125% | 32% | Rotten Ground, Feast of Misery, Earth Bolt |
| Den of Nalorakk | Avatar of Determination | 17 to 37 | 16.5% to 18.3% | 109% to 116% | 33% | Frostbite, Glacial Tomb, Cryo Surge |
| Kings' Rest | Animated Guardian | 14 to 24 | 12.4% to 20.6% | 79% to 156% | 17% | Shadow Slash, Shadow Whirlwind, Heavy Slams |
| Kings' Rest | Purification Construct | 24 | 9.9% | 71% | 18% | Wretched Discharge, Heavy Slams, Purification Strike |
| Murder Row | Bribed Captain | 25 | 20.3% | 123% | 42% | Glaive Toss, Heartstop Poison, Shield Bash |
| Murder Row | Shivan Punisher | 46 | 15.1% to 16.6% | 98% to 100% | 11% | Shadow Bite, Fel Dash, Flay |
| Ruby Life Pools | Defier Draghar | 27 | 16.9% | 104% | 22% | Steel Barrage, Excavating Blast, Crushing Smash |
| Ruby Life Pools | High Channeler Ryvati | 59 to 60 | 16.7% to 17.9% | 77% to 88% | 18% | Thunderous Stomp, Flaming Barrage, Tempest Stormshield |
| Temple of Sethraliss | Sandfury Stonefist | 16 to 17 | 12.8% to 17.2% | 82% to 95% | 6% | Ground Pound, Sunder Slam, Slither Strike |
| Temple of Sethraliss | Sand-Sworn Rider | 30 to 32 | 10.8% | 77% to 78% | 1% | Serpent's Stormcall, Lingering Storm, Venom Bolt |
| The Blinding Vale | Sporeblight Belcher | 72 | 19.6% to 22.6% | 120% to 132% | 18% | Spore Spines, Spouting Floret, Thornblade |
| The Blinding Vale | Potatoad Matriarch | 44 to 52 | 18.3% to 20.1% | 117% to 134% | 17% | Spore Spines, Toxic Spew, Grievous Gash |
| Voidscar Arena | Watchful Harrower | 51 to 104 | 13.8% to 14.8% | 87% to 93% | 33% | Dreadbellow, Brutalize, Void Tentacles |
| Voidscar Arena | Brutok | 16 | 10.3% | 73% | 53% | Head Bash, Insidious Aura, Fel Steps |

Damage in the 4 seconds before a health drop, by dungeon:

| Dungeon | Melee share | Largest other sources |
| --- | --- | --- |
| Altar of Fangs | 53% | Hydrastrike 14%, Chop Down 8%, Ravenous Claws 8% |
| Den of Nalorakk | 77% | Frostbite 7%, Searing Magma 6% |
| Kings' Rest | 48% | Mortal Bleed 9%, Purification Strike 8%, Blood Drain 5% |
| Murder Row | 46% | Chaos Barrage 22%, Felfire Burst 12%, Shadow Bite 11% |
| Ruby Life Pools | 38% | Inferno 10%, Flaming Barrage 9%, Fiery Blast 9% |
| Temple of Sethraliss | 48% | Serpent's Stormcall 28%, Ground Pound 8% |
| The Blinding Vale | 47% | Spore Spines 23%, Spouting Floret 4% |
| Voidscar Arena | 39% | Hulking Claw 13%, Brutalize 13%, Monstrous Roar 6% |

> [!TIP]
> Where melee is 75% or more of the danger, as in Den of Nalorakk, Ironfur
> stacks and Barkskin do the work. Where one named cast is a large share, as
> Serpent's Stormcall in Temple of Sethraliss or Spore Spines in The Blinding
> Vale, time a major or a Survival Instincts charge to that cast. Ironfur does
> not reduce magic.

## Observed rates

Per key of 27 to 32 minutes, across the 16 tanks. Compare a log
against these.

| Button | Per key, median | Range | Notes |
| --- | --- | --- | --- |
| Ironfur | 784 | 682 to 851 | 25.3 per minute outside Incarnation, 33.5 inside |
| Frenzied Regeneration | 78 | 25 to 127 | The widest spread in the kit |
| Lunar Beam | 38 | 34 to 42 | Two spell IDs log per cast. Count one |
| Barkskin | 33 | 27 to 42 | |
| Incarnation | 16 | 13 to 17 | Up for about 33% of combat time |
| Survival Instincts | 8 | 3 to 14 | |
| Health potion | 2 | 0 to 4 | 15 of 16 tanks used one |
| Maul | 16 | 6 to 18 | |

> [!NOTE]
> Lunar Beam logs as spell 204066 and spell 1270292 at the same moment. The
> second is its damage effect, not a second button [[7]](#ref-7). Count only
> one when comparing a log against this table.

## Cooldown timings

Gaps between consecutive casts across all 16 logs. The floor is the shortest
gap seen, which is the real cooldown with talents. The median shows how close
to cooldown the tanks press it.

| Button | Gaps | Floor | 25th percentile | Median | 75th percentile |
| --- | --- | --- | --- | --- | --- |
| Barkskin | 530 | 34.2 s | 36.9 s | 44.5 s | 57.5 s |
| Lunar Beam | 590 | 40.0 s | 40.9 s | 42.3 s | 47.0 s |
| Incarnation | 228 | 78.5 s | 98.4 s | 107.7 s | 125.7 s |
| Survival Instincts | 121 | 9.7 s | 78.3 s | 160.1 s | 277.9 s |
| Frenzied Regeneration | 1,167 | 0.8 s | 9.4 s | 16.3 s | 28.7 s |

- **Barkskin's 34.2-second floor** matches the 45-second Guardian cooldown
  cut by Survival of the Fittest at 2 ranks [[2]](#ref-2)[[8]](#ref-8).
- **Incarnation's floor is well under its 3-minute tooltip.** Ursoc's
  Guidance returns 1 second per 25 Rage spent [[9]](#ref-9). A tank who
  spends all its Rage gets Incarnation back sooner.
- **Survival Instincts' 9.7-second floor** is two charges used close
  together. Only 6 of 121 gaps were under 20 seconds.

## Buttons not pressed

These abilities had zero casts in all 16 logs.

| Ability | Why |
| --- | --- |
| Rage of the Sleeper | Not in the patch 12.1 talent tree. Its tooltip survives only as an old artifact trait [[16]](#ref-16)[[18]](#ref-18) |
| Renewal | Not in the patch 12.1 class tree [[18]](#ref-18) |
| Bristling Fur | In the tree, but the field takes the other side of its choice node. This is probable, not confirmed [[18]](#ref-18) |
| Raze | A choice against Maul. All 16 tanks cast Maul |
| Ravage | The Druid of the Claw marker [[15]](#ref-15). No sampled tank played that tree |

Two other buttons appear in every log but are not defensives. Wild Guardian
(1269658) is the Apex talent's spirit charge, granted by Incarnation
[[12]](#ref-12). Dream Guide's Regrowth is automatic [[14]](#ref-14).

## Hero talent and tier set

All 16 tanks played **Elune's Chosen**. None cast Ravage, the Druid of the
Claw marker [[15]](#ref-15). Every one of the top 50 Guardian Mythic+ players
on a ranking site plays Elune's Chosen as well [[17]](#ref-17). Elune's Chosen
changes the defensive cycle through Lunar Beam: Lunation cuts its cooldown by
20 seconds, and The Eternal Moon adds mastery and 3 seconds of duration
[[7]](#ref-7).

The 12.1 tier set changes one defensive value [[13]](#ref-13):

- **2-piece.** Thrash can empower the next Mangle. No defensive effect.
- **4-piece.** Each Thrash extends Incarnation by 0.5 seconds, up to 5
  seconds. Every sampled Incarnation lasted exactly 35.0 seconds, which is
  the 30-second base plus the full 5.

Without the 4-piece, Incarnation lasts 30 seconds. That shortens the
Incarnation band in [the first minute](#the-first-minute) by 5 seconds and
moves the gap before the second Barkskin earlier.

## Macros

The logs show one defensive macro. Incarnation and the Voracious Heart of
Ula'tek trinket fired with a median of 1 millisecond between them on 49% of
Incarnation casts. No player presses two keys 1 millisecond apart.
Incarnation is off the global cooldown [[6]](#ref-6), so both lines fire on
one press.

```
#showtooltip Incarnation: Guardian of Ursoc
/cast Incarnation: Guardian of Ursoc
/use 13
```

Change `13` to `14` if the trinket sits in the second trinket slot.

Wild Guardian followed Incarnation on 80% of casts, with a median of 155
milliseconds. Incarnation grants the Wild Guardian charge, so the second
cast needs a second press. A key pressed twice, or a separate key, both fit
that gap.

> [!IMPORTANT]
> Do not macro Barkskin or Survival Instincts to anything. No sampled log
> pairs either one with another cooldown. Barkskin opens a pull on its own,
> and Survival Instincts answers one moment. A macro that spends both
> together wastes the stagger.

## Gear and stats

From the 15 tanks whose logs carry gear data. One log had none.

- **Trinkets.** Voracious Heart of Ula'tek in 12 of 15, Keeper's Seething
  Core in 6, Tumor of the Swarm in 5, Resonant Bellowstone in 4, Idol of the
  Howling Nexus in 2 and Freightrunner's Flask in 1. None is a defensive
  trinket.
- **Tier set.** 11 tanks wore 4 pieces and 4 wore 5.
- **Item level.** 325 to 330, median 326.
- **Secondary stats, median rating.** Haste 1,270, Crit 897, Versatility
  620, Mastery 470. Haste was the highest stat on 13 of 15 tanks.
- **Leech.** Median 249 rating.

This matches the top-50 data, which reads Haste, then Crit, then
Versatility, then Mastery [[17]](#ref-17). One written guide ranks Crit last
for survival [[21]](#ref-21). This guide follows the logs.

## Where logs beat guides

| Guide claim | What the logs show |
| --- | --- |
| Do not overlap defensives [[19]](#ref-19)[[23]](#ref-23) | True for Barkskin, Lunar Beam and Survival Instincts in most presses. False for Incarnation, which overlaps another major on 69% of presses. Survival Instincts was pressed inside Barkskin on 23% of its uses |
| Incarnation removes Frenzied Regeneration's cooldown [[24]](#ref-24) | 2.9 casts per minute inside Incarnation against 2.5 outside. No spam |
| Press Frenzied Regeneration when health dips [[22]](#ref-22) | Median health at the press was 97%. It is a proactive absorb as much as a heal |
| Barkskin is the first button on a pack [[24]](#ref-24) | True on big pulls, at a median of 1.3 seconds. But 80% of Barkskin casts come mid-pull, close to cooldown |
| Use Survival Instincts sparingly [[22]](#ref-22) | 8.6 per key on average. A charge was probably free during most health drops with no major up, and the one death came with two unused |
| Dream of Cenarius [[23]](#ref-23) | The field takes Dream Guide [[14]](#ref-14)[[18]](#ref-18) |

> [!NOTE]
> Icy Veins and Wowhead share one Guardian author, so they count as one
> source [[19]](#ref-19)[[22]](#ref-22). The Icy Veins Mythic+ page holds no
> advice on cycling defensives [[20]](#ref-20).

## The sample

- **16 timed keys at level 21,** 2 per dungeon in the Season 2 zone. They were
  played between 20 September and 1 October 2026. They come from the middle
  of each dungeon's key 21 ranking, not the top.
- **12 distinct tanks.** EU 11 logs, US 3, CN 2. Four tanks appear twice, on
  different dungeons.
- **Key 22 was too thin.** Only 1 to 8 Guardian tanks per dungeon had a key
  22 run.
- **Per log:** casts, buffs on the tank, damage taken with health and active
  auras on each hit, healing and deaths.
- **Totals:** 168 pulls, 97 trash engagements of 4 or more enemies, 26,168
  seconds of combat, 38,861 casts, 117 health drops below 35%.
- **Limits.** The sample holds strong tanks only, so it shows what works, not
  what fails. Health at a press comes from a snapshot on the cast event and
  can lag a hit by a fraction of a second. No player thread on Season 2
  Guardian defensives was found [[25]](#ref-25).

## Sources

<details open>
<summary>Game data and logs</summary>

1. <a id="ref-1"></a>Warcraft Logs, through the Warcraft Logs API — 16 Mythic+ keys at level 21, zone 55: `Zb1TAQ6hfmBnKpXq` (fights 5 and 7), `2BxWdkcFz3My7vfN`, `CZd6qcmhpvNMAnYF`, `19z4BMGFmyRdqarh`, `9YBhtf8Mk1LJAHay`, `3wNF46pYxQCfDnWA`, `TwxgzJKWLZFNnPpv`, `gR3AvnbyQD8apCJ9`, `CWzt8yHf9AXVFhxB`, `PgaHCqNncQjLJbV2`, `3ZAwcJ2TMFav6Qdj`, `cyB49XArhdHnxK3D`, `zqbVrkQBfPWXHT7p`, `QCnFazWL1kqxytr7`, `J8V3YzkqFtcXjLHa` — every rate, timing, share, health reading, gear and hero-talent count
2. <a id="ref-2"></a>[Barkskin](https://www.wowhead.com/spell=22812/barkskin) — 20% damage reduction, 45-second Guardian cooldown, off the global cooldown, talent modifiers
3. <a id="ref-3"></a>[Survival Instincts](https://www.wowhead.com/spell=61336/survival-instincts) — 50% damage reduction, 6 seconds, 2 charges for Guardian, off the global cooldown
4. <a id="ref-4"></a>[Frenzied Regeneration](https://www.wowhead.com/spell=22842/frenzied-regeneration) — heal over 3 seconds, 10 Rage, on the global cooldown
5. <a id="ref-5"></a>[Ironfur](https://www.wowhead.com/spell=192081/ironfur) — armor from Agility, 40 Rage, separate stacks, off the global cooldown
6. <a id="ref-6"></a>[Incarnation: Guardian of Ursoc](https://www.wowhead.com/spell=102558/incarnation-guardian-of-ursoc) — 30% maximum health, 30 seconds, cooldown cuts to Mangle, Thrash, Growl and Frenzied Regeneration
7. <a id="ref-7"></a>[Lunar Beam](https://www.wowhead.com/spell=204066/lunar-beam), [Lunation](https://www.wowhead.com/spell=429539) and [the beam damage effect](https://www.wowhead.com/spell=1270292) — mastery, heal, 1-minute base cooldown cut by 20 seconds, the second logged spell ID
8. <a id="ref-8"></a>[Survival of the Fittest](https://www.wowhead.com/spell=203965) — cooldown cut to Barkskin and Survival Instincts per rank
9. <a id="ref-9"></a>[Ursoc's Guidance](https://www.wowhead.com/spell=393414) — Incarnation cooldown cut by Rage spent
10. <a id="ref-10"></a>[Natural Resilience](https://www.wowhead.com/spell=1278800) and [Innate Resolve](https://www.wowhead.com/spell=377811) — overheal to absorb, second Frenzied Regeneration charge
11. <a id="ref-11"></a>[Matted Fur](https://www.wowhead.com/spell=385786), [Oakskin](https://www.wowhead.com/spell=449191), [Reinforced Fur](https://www.wowhead.com/spell=393618), [Improved Barkskin](https://www.wowhead.com/spell=327993) and [Ursoc's Endurance](https://www.wowhead.com/spell=393611) — Barkskin and Survival Instincts strength, absorb and duration
12. <a id="ref-12"></a>[Wild Guardian, rank 4](https://www.wowhead.com/spell=1269619) and [its charge](https://www.wowhead.com/spell=1269658) — the Apex talent, one charge per Incarnation
13. <a id="ref-13"></a>[Guardian 12.1 2-piece](https://www.wowhead.com/spell=1296607) and [4-piece](https://www.wowhead.com/spell=1296608) — Mangle proc, Incarnation extension up to 5 seconds
14. <a id="ref-14"></a>[Dream Guide](https://www.wowhead.com/spell=1278914) and [Well-Honed Instincts](https://www.wowhead.com/spell=377847) — automatic Regrowth below 40%, automatic Frenzied Regeneration
15. <a id="ref-15"></a>[Ravage](https://www.wowhead.com/spell=441583) — the Druid of the Claw entry talent
16. <a id="ref-16"></a>[Rage of the Sleeper](https://www.wowhead.com/spell=200851) — served only as a Legion artifact trait

</details>

<details open>
<summary>Guide sites and ranking data</summary>

17. <a id="ref-17"></a>[murlok.io Guardian Mythic+](https://murlok.io/druid/guardian/m+) — top-50 hero tree, stats and trinkets
18. <a id="ref-18"></a>[murlok.io Guardian talents](https://murlok.io/druid/guardian/talents) — the 12.1 talent tree and top-50 pick counts
19. <a id="ref-19"></a>[Icy Veins, Guardian rotation and cooldowns](https://www.icy-veins.com/wow/guardian-druid-pve-tank-rotation-cooldowns-abilities) — Ironfur stack cap, "do not overlap" advice. Updated 10 August 2026
20. <a id="ref-20"></a>[Icy Veins, Guardian Mythic+ tips](https://www.icy-veins.com/wow/guardian-druid-pve-tank-mythic-plus-tips) — read, and holds no defensive cycling advice
21. <a id="ref-21"></a>[Icy Veins, Guardian stat priority](https://www.icy-veins.com/wow/guardian-druid-pve-tank-stat-priority) — survivability stat order
22. <a id="ref-22"></a>[Wowhead, Guardian rotation and cooldowns](https://www.wowhead.com/guide/classes/druid/guardian/rotation-cooldowns-pve-tank) — Barkskin and Survival Instincts usage. Same author as Icy Veins
23. <a id="ref-23"></a>[Method, Guardian playstyle and rotation](https://www.method.gg/guides/guardian-druid/playstyle-and-rotation) — "never overlap Barkskin and Survival Instincts", Dream of Cenarius. Updated 3 September 2026
24. <a id="ref-24"></a>[Maxroll, Guardian Mythic+ guide](https://maxroll.gg/wow/class-guides/guardian-druid-mythic-plus-guide) — Incarnation and Frenzied Regeneration claim, Barkskin first on a pack. Updated 11 August 2026

</details>

<details open>
<summary>Community</summary>

25. <a id="ref-25"></a>[r/CompetitiveWoW, "23 Skyreach Guardian Druid POV"](https://www.reddit.com/r/CompetitiveWoW/comments/1v8bjtg/) — 27 July 2026, Season 1. The only Guardian thread found, and its comments hold no defensive content

</details>
