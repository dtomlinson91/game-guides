# Season 2 tank busters

The trash and boss abilities in each Season 2 Mythic+ dungeon that hit the
tank hard enough, at key level 20 and above, to need a major defensive. Each entry gives
the mob, the cast ID to put on an alert, the cast time, how often one mob
casts it, and the size of the hit. It also lists the debuffs that stack on the
tank when a pull holds two or more of their casters. Midnight, patch 12.1,
Season 2. Measured on 64 timed Guardian Druid keys at levels 20 to 22, 8 per
dungeon [[1]](#ref-1)–[[8]](#ref-8).

**Raw** is the hit before any mitigation, as a percentage of the tank's
maximum health without Incarnation. It does not depend on how the tank played,
so it is the measure used to rank danger.

> [!IMPORTANT]
> **A physical hit over 100% raw is lethal when Ironfur is low.** Strong tanks
> took only 15% to 35% of maximum health from hits of 150% to 250% raw, because
> Ironfur was stacked. A key 19 log shows the other side: Shield Bash landed
> with 3 Ironfur stacks, no major defensive and 56% health, and killed the
> tank with 16,526 overkill [[9]](#ref-9). Treat every entry here as "major
> defensive, or full Ironfur and high health".

> [!NOTE]
> The figures are for a Guardian Druid. Raw damage is the same for every tank.
> The damage actually taken depends on the tank's own mitigation.

## Contents

- [Trash alerts](#trash-alerts)
  - [Ruby Life Pools](#ruby-life-pools)
  - [Voidscar Arena](#voidscar-arena)
  - [Altar of Fangs](#altar-of-fangs)
  - [Temple of Sethraliss](#temple-of-sethraliss)
  - [Kings' Rest](#kings-rest)
  - [The Blinding Vale](#the-blinding-vale)
  - [Murder Row](#murder-row)
  - [Den of Nalorakk](#den-of-nalorakk)
- [Stacking debuffs](#stacking-debuffs)
  - [How overlap works](#how-overlap-works)
  - [Stacks that depend on the pull](#stacks-that-depend-on-the-pull)
  - [Stacks from melee](#stacks-from-melee)
  - [Stacks on bosses](#stacks-on-bosses)
- [Boss alerts](#boss-alerts)
  - [Ruby Life Pools bosses](#ruby-life-pools-bosses)
  - [Kings' Rest bosses](#kings-rest-bosses)
  - [Voidscar Arena bosses](#voidscar-arena-bosses)
  - [Altar of Fangs bosses](#altar-of-fangs-bosses)
  - [Murder Row bosses](#murder-row-bosses)
  - [The Blinding Vale bosses](#the-blinding-vale-bosses)
  - [Temple of Sethraliss bosses](#temple-of-sethraliss-bosses)
  - [Den of Nalorakk bosses](#den-of-nalorakk-bosses)
  - [Heavy group damage](#heavy-group-damage)
- [How the danger works](#how-the-danger-works)
- [Full measurements](#full-measurements)
- [Method](#method)
- [Sources](#sources)

## Trash alerts

One table per dungeon, worst first. **Tier 1** abilities still deal heavy
damage through a major defensive, because they are magic, ignore armor, or
channel several hits. Press a defensive for these every time. **Tier 2**
abilities are single physical hits that a major defensive or full Ironfur
reduces to 15% to 30% of maximum health. "Every" is the gap between two casts
from one mob.

> [!TIP]
> Alert on the cast start of the cast ID, not on the damage. Every entry
> except Steel Barrage gives at least 2 seconds of warning.

### Ruby Life Pools

The worst dungeon for the tank. It holds the second-largest single ability in
the season, and a magic cast that hurts through every defensive
[[5]](#ref-5)[[14]](#ref-14).

| Tier | Mob | Ability (cast ID) | Cast | Every | Raw | Response |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Defier Draghar | **Steel Barrage** (372047) | **1.0 s** | 21 s | **394%** over 3 s | Major defensive at cast start. Hits every 0.5 s, and each hit also burns the group |
| 1 | Blazebound Destroyer | **Fiery Blast** (1305955) | 4.0 s | 17 s | 101%, Fire | Interrupt it. If the kick is missed, use a defensive: it still takes 50% through one |
| 1 | Flamegullet | **Fire Maw** (392394) | 2.5 s | 21 s | 187% | Defensive. Its Fire part ignores armor: 45% taken without a major, down to 18% health |
| 1 | Primal Juggernaut | **Crushing Smash** (372730) | 2.5 s | 21 s | 197% | Defensive. 40% taken even through a major. Every sampled tank covered every cast |
| — | Deepstone Earthshaper | **Tectonic Strike** (1305225) | **instant** | 21 s | 48% | **Stacks:** +25% damage taken per stack for 8 s. Pulls hold 2 to 9 Earthshapers, which reach 3 to 5 stacks in the first seconds. See [stacking debuffs](#stacking-debuffs) |

### Voidscar Arena

Home of the largest tank buster in the season, and of the only tank death in
the sample that a group could prevent by standing together
[[8]](#ref-8)[[17]](#ref-17).

| Tier | Mob | Ability (cast ID) | Cast | Every | Raw | Response |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Devouring Brutalizer | **Brutalize** (1300243) | 2.0 s | 24 to 28 s | **636%** over 5 hits in 6 s | Major defensive plus healing. 72% taken through a major |
| 1 | Brutok | **Head Bash** (1245186) | 2.5 s | 23 s | 98%, Fire | Defensive. 80% taken without one. Leaves a Fel spittle DoT |
| 1 | Watchful Harrower | **Sky Strike** (1239856) | 5.0 s | 25 s | 42% shared, **172% alone** | Damage is split among everyone within 10 yd. Group up on the tank, or use a defensive |
| — | Savage Shredclaw | **Shred Defense** (1233535) | **instant** | 21 s | 40% | **Stacks:** each Shredclaw adds its own +20% damage taken for 10 s. Pulls hold 1 to 10 Shredclaws. See [stacking debuffs](#stacking-debuffs) |

> [!CAUTION]
> **Sky Strike killed a tank who was hit alone.** It deals 872,842 Nature
> damage shared among all players hit. Normally it lands at about 42% raw. One
> landed on a lone tank at 172% raw with no major defensive up
> [[8]](#ref-8)[[17]](#ref-17).

### Altar of Fangs

One clean physical buster and one fixed combo from a single mob
[[1]](#ref-1)[[10]](#ref-10).

| Tier | Mob | Ability (cast ID) | Cast | Every | Raw | Response |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Rattling Writhe | **Corrosive Fangs** (1294845), then **Rattle** (1294849) | 3.0 s each | 28 s | Rattle 95% over 5 s, **ignores armor** | Defensive for Rattle, 6 to 7 s after Fangs. 77% taken through a major. **Stacks** if both Writhes are fought at once. See [stacking debuffs](#stacking-debuffs) |
| 2 | Ritual Chieftain | **Dismember** (1306911) | 3.0 s | 23 s | 160% | Major defensive or full Ironfur |

### Temple of Sethraliss

Three physical busters. Sunder Slam turns the other two from survivable into
dangerous [[6]](#ref-6)[[15]](#ref-15).

| Tier | Mob | Ability (cast ID) | Cast | Every | Raw | Response |
| --- | --- | --- | --- | --- | --- | --- |
| 2 | Krolusk Matriarch | **Head Butt** (272654) | 3.0 s | 23 s | **199%**, 256% at p90 | Major defensive or full Ironfur |
| 2 | Orb Watcher | **Venomous Slash** (1303443) | 2.5 s | 24 s | 170% | Major defensive or full Ironfur. Adds a 10 s Nature DoT |
| 2 | Sandfury Stonefist | **Sunder Slam** (1291468) | 3.0 s | 22 s | 112% | **Stacks:** +50% Physical damage taken per stack for 10 s. Both Stonefists in a pull cast 2 to 5 s apart, so the second slam lands at +50% and the next 7 s at +100%. See [stacking debuffs](#stacking-debuffs) |

### Kings' Rest

The highest single physical hit in the season, and a bleed that lowers
healing [[3]](#ref-3)[[12]](#ref-12).

| Tier | Mob | Ability (cast ID) | Cast | Every | Raw | Response |
| --- | --- | --- | --- | --- | --- | --- |
| 2 | Ghostly Brute | **Soul Crush** (1302028) | 2.5 s | 23 s | **210%** | Major defensive or full Ironfur. Leaves −30% armor for 15 s, so the next hits land harder. **Stacks** if two Brutes are in one pull. See [stacking debuffs](#stacking-debuffs) |
| 2 | King A'akul | **Mortal Bleed** (1297918) | 2.5 s | 25 s | 126% opening hit | Major defensive or full Ironfur. Then an 18 s bleed with −20% healing received |

### The Blinding Vale

Two physical busters, both with lingering damage
[[7]](#ref-7)[[16]](#ref-16).

| Tier | Mob | Ability (cast ID) | Cast | Every | Raw | Response |
| --- | --- | --- | --- | --- | --- | --- |
| 2 | Virid Grovekeeper | **Earthrupture Strike** (1237855) | 2.5 s | 24 s | 150% | Major defensive or full Ironfur. Leaves a pool that deals Nature damage and slows by 40% |
| 2 | Luminous Thornmaw | **Grievous Gash** (1242135) | 2.5 s | 18 s | 109% | Major defensive or full Ironfur. Stacking bleed for 16 s, or until fully healed. Pulls often hold 2 or 3 Thornmaws. See [stacking debuffs](#stacking-debuffs) |

> [!NOTE]
> Lasher melee applies **Spore Spines**, a stacking Nature DoT that armor does
> not reduce. It is the largest sustained damage on the tank in this dungeon,
> peaking at 52% to 131% of maximum health taken in 5 seconds
> [[7]](#ref-7).

### Murder Row

One physical buster cast by two mobs, and a poison that stacks
[[4]](#ref-4)[[13]](#ref-13).

| Tier | Mob | Ability (cast ID) | Cast | Every | Raw | Response |
| --- | --- | --- | --- | --- | --- | --- |
| 2 | Bribed Guard, Bribed Captain | **Shield Bash** (1216529) | 3.0 s | 24 s per mob | 146%, 182% at key 22 | Major defensive or full Ironfur. **Stacks:** +20% Physical damage taken per stack for 20 s. See the warning below |
| — | Street Sneak | **Heartstop Poison** (1216589) | 1.5 s | — | Stacking | Remove Corruption. Each hit while the coating lasts adds a stack: damage over 8 s and −5% maximum health |

> [!WARNING]
> **The first pack holds both the Guard and the Captain, and their Shield Bash
> debuff never falls off while both live.** They cast in turn, 6 to 17 s
> apart, and every gap is shorter than the 20 s debuff. Each bash adds a stack
> and resets the whole stack. In 3 of 8 keys it reached 4 stacks (+80%
> Physical damage taken) and lasted 50 s. A key 19 tank died to the next bash
> at 5 stacks [[9]](#ref-9). At 4 stacks, call for an external defensive and
> kill the Captain before the next bash. One tank makes exactly this call on a
> key 22 [[20]](#ref-20). Once one caster is dead, the debuff drops 20 s after
> the last bash.

### Den of Nalorakk

No targeted cast in this dungeon forces a defensive. The dangers are one
avoidable slam and one missed interrupt [[2]](#ref-2)[[11]](#ref-11).

| Tier | Mob | Ability (cast ID) | Cast | Every | Raw | Response |
| --- | --- | --- | --- | --- | --- | --- |
| 2 | Avatar of Determination | **Pulverize** (1240280) | 4.0 s | 29 s | 118% | 12 yd area hit plus a 4 s stun. Step out. Tanks were hit by 7 of 41 casts, each time with a major up |
| — | Stormbound Mystic | **Lightning Bolt** (1246687) | 2.5 s | — | 44%, Nature | Interrupt it. 218 of 262 were kicked. **One missed kick killed a tank** on top of melee damage |

## Stacking debuffs

Some casts leave a debuff that makes the tank take more damage, and many of
those debuffs stack. One mob alone casts more slowly than its debuff lasts, so
the debuff drops between its casts. **Two or more casters of the same debuff in
one pull can re-apply it before it drops.** The debuff then never falls off,
and every cast adds a stack until a caster dies. Higher keys pull bigger, so
this happens more often. The group is expected to count the casters, and to
kill one before the stacks get too high [[1]](#ref-1)–[[8]](#ref-8).

> [!CAUTION]
> **Shield Bash killed a key 19 tank at 5 stacks.** The Bribed Captain and the
> Bribed Guard cast it in turn, and no gap between bashes reached its 20 s
> duration. The debuff lasted the whole pull. The sixth bash landed on +100%
> Physical damage taken, with no major defensive up, and dealt 995k
> [[9]](#ref-9).

### How overlap works

The tooltip gives the debuff's duration and the cast time. The log gives how
often one mob casts it. Together they show how many casters keep the debuff
up.

1. **The debuff never drops while every gap between two applications is
   shorter than its duration.** The gap counts casts from every caster, not
   from one mob.
2. **One caster keeps it up alone only if it casts faster than the debuff
   lasts.** Tainted Strike (every 11 s, lasts 25 s) does this, and Stormslam
   (every 23 to 26 s, lasts 30 s) would do it if not dispelled.
3. **Casters needed = (one mob's cadence ÷ duration), rounded down, plus 1.**
   Shield Bash: 24 ÷ 20 rounds to 1, so 2 casters. Sunder Slam: 21 ÷ 10 rounds
   to 2, so 3 casters. That assumes the casters are spread out.
4. **Spacing decides it.** Casters engaged at the same moment cast at the same
   moment. The stack spikes, then drops before the next round, as with
   Tectonic Strike and Shred Defense. Casters a few seconds apart keep it up.
   The offset comes from a later pull, a stun or a pushback. Every Shield Bash
   pair that overlapped was 6 to 7 s apart.
5. **Shared or separate, the effects add up.** Most of these are one shared
   debuff: each cast adds a stack and resets the timer of the whole stack.
   Shred Defense puts a separate copy from each caster, each with its own
   timer. Either way, 4 stacks or 4 copies of +20% is +80%.
6. **The tooltip does not always say.** Shield Bash's tooltip never mentions
   stacking, but it stacks. Check the log for stack counts above 1.

> [!TIP]
> Before a pull, count the casters of each debuff in this section. If the
> count reaches the "casters to keep it up" column, plan the kill order: kill
> one caster before the stack reaches a level the tank cannot survive, and
> save an external defensive for the peak.

### Stacks that depend on the pull

"Seen" covers the 8 sampled keys of each dungeon, at levels 20 to 22. A
debuff that never overlapped in the sample can still overlap in a bigger pull.

| Dungeon | Mob | Debuff (ID) | Per stack | Lasts | One mob every | Casters to keep it up | Seen | Answer |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Murder Row | Bribed Guard, Bribed Captain | **Shield Bash** (1216529) | +20% Physical damage taken | 20 s | 23 to 24 s | 2 | Both in the first pack in 4 of 8 keys. 4 stacks for 50 to 52 s in 3. One death at 5 stacks, key 19 [[9]](#ref-9) | External at 4 stacks, then kill the Captain before the next bash [[20]](#ref-20) |
| Ruby Life Pools | Deepstone Earthshaper | **Tectonic Strike** (1305225), instant | **+25% damage taken** | 8 s | 21 s | 3 | 2 to 9 per pull. 3 stacks in all 8 keys, 5 stacks (+125%) twice, all within 6 s | No cast bar. Have a defensive ready at the pull. The stacks drop 8 s after the burst unless stuns spread the casters out |
| Voidscar Arena | Savage Shredclaw | **Shred Defense** (1233535), instant | +20% damage taken, one copy per Shredclaw | 10 s | 21 s | 3 | 1 to 10 per pull. 3 copies in all 8 keys, 4 copies (+80%) once | As for Tectonic Strike. Each copy also hits for 40% raw |
| Temple of Sethraliss | Sandfury Stonefist | **Sunder Slam** (1291468) | **+50% Physical damage taken** | 10 s | 21 to 22 s | 3 | 2 per pull in all 8 keys, casting 2 to 5 s apart. 2 stacks (+100%) for 7 to 10 s, never kept up | Defensive for the second slam. A third Stonefist, or a stun that offsets one, keeps it up |
| Altar of Fangs | Rattling Writhe | **Corrosive Fangs** (1294845) | +20% damage taken | 20 s | 28 s | 2 | Both in one pull in all 8 keys. In every key one Writhe cast twice before the other began, so the debuff never overlapped | Fight the Writhes one after the other. Together, the debuff never drops and every Rattle lands on it |
| Kings' Rest | Ghostly Brute | **Soul Crush** (1302028) | −30% armor | 15 s | 21 to 23 s | 2 | One Brute per pull in all 9 pulls seen | Do not pull two Brutes together |
| The Blinding Vale | Luminous Thornmaw | **Grievous Gash** (1242135) | Stacking bleed | 16 s, or until full health | 18 s | 2 | 2 or 3 per pull in 9 of 25 pulls. 2 stacks seen, rarely, because healing to full clears it | Heal the tank to full to clear it |
| Temple of Sethraliss | Orb Watcher | **Venomous Slash** (1303443) | Nature DoT, one copy per Orb Watcher | 10 s | 23 to 24 s | 3 | 2 per pull in all 8 keys. Overlapped in 1 | Low risk. The hit before it is the danger |

### Stacks from melee

Some mobs stack a debuff with their melee swings, not with a cast. The stack
count grows with the number of those mobs hitting the tank, so a bigger pull
means more stacks [[2]](#ref-2)[[4]](#ref-4)[[7]](#ref-7)[[11]](#ref-11).

| Dungeon | Mob | Debuff (ID) | Per stack | Lasts | Seen |
| --- | --- | --- | --- | --- | --- |
| Den of Nalorakk | Thornclaw Gatherer | **Shredding Claws** (1238247) | −5% armor | 2 s | **10 stacks (−50% armor) in all 8 keys** |
| Den of Nalorakk | Loyal Saberfang | **Shred Armor** (1311695) | −10% armor | 5 s | 3 stacks (−30% armor) in 6 of 8 keys |
| The Blinding Vale | Lasher | **Spore Spines** (1238084) | Nature damage over time | 16 s | Up to 30 stacks |
| Murder Row | Street Sneak | **Heartstop Poison** (1216590) | −5% maximum health, Nature damage | 8 s coating | Up to 10 stacks (−50% maximum health) |

### Stacks on bosses

A boss fight holds a fixed number of casters, so these stacks can be planned
before the pull [[3]](#ref-3)–[[6]](#ref-6)[[14]](#ref-14).

| Boss | Debuff | What happens | Seen |
| --- | --- | --- | --- |
| Kyrakka and Erkhart Stormvein | **Stormslam** (381515), Magic | +100% Nature damage taken for 30 s. Erkhart casts every 23 to 26 s, so it would stack | Never stacked in 63 casts. Median uptime 1.4 s, longest 14.3 s. It is Magic, which fits a dispel. Dispel it after every Stormslam |
| Melidrussa Chillworn | **Cold Claws** (1305234), Magic, from Infused Whelps | A stack per whelp attack for 10 s. **At 20 stacks the tank is Frozen Solid** | 20 stacks reached 4 times in 3 of 8 keys. Dispel it before 20 |
| Avatar of Sethraliss | **Tainted Strike** (1303446), from each Corrupted Guardian | Shadow DoT for 25 s, cast every 11 s | 2 stacks from each Guardian that lives past its second cast. Up to 69 s |
| Kokia Blazehoof | **Searing Wounds** (372860) | One stack per hit of Searing Blows, Fire DoT for 8 s | 4 stacks per channel. Drops before the next channel |
| Council of Tribes (Aka'ali) | **Shattered Defenses** (266238), from Debilitating Backhand | +200% Physical damage taken for 10 s | One Aka'ali, cast every 23 s. Never overlapped in 28 casts. The danger is Barrel Through, in [Kings' Rest bosses](#kings-rest-bosses) |
| Xathuux the Annihilator | **Legion Strike** (473898) | −80% healing received for 8 s | Cast every 24 to 28 s. Never overlapped in 65 casts |

## Boss alerts

The boss abilities aimed at the tank, from the same 64 keys. Bosses differ
from trash in two ways: the casts are fewer but bigger, and several are magic,
so Ironfur does nothing for them. "Taken" gives the damage actually taken
without a major defensive, then with one. Dungeons are in order of how hard
their bosses hit the tank.

> [!TIP]
> Boss cadence is fixed. Most of these repeat on a set timer (20 to 53
> seconds), so a defensive can be planned for each cast before the pull.

### Ruby Life Pools bosses

Every boss here has a tank buster, and two of them are channels or stacking
debuffs [[5]](#ref-5)[[14]](#ref-14).

| Tier | Boss | Ability (cast ID) | Cast | Every | Raw | Taken: none / major | Response |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Kokia Blazehoof | **Searing Blows** (372858) | 3 s channel, 4 hits | 40 s | **359%** | 49% / 39% | Major defensive. Each hit stacks Searing Wounds, a Fire DoT for 8 s, which is not in these figures |
| 1 | Kyrakka and Erkhart Stormvein | **Stormslam** (381512) | 2.5 s | 23 to 26 s | 157%, Physical and Nature | 56% / 35% | Defensive. Leaves +100% Nature damage taken for 30 s. It is Magic, and it was gone within 1.4 s at the median, which fits a dispel: it never stacked in 63 casts. Left on, it would stack, because the gap is shorter than 30 s. Lowest health seen: 5% |
| — | Melidrussa Chillworn | **Frigid Shard** (372808) | 2.5 s | kick | 198% | 36% / 23% | Interrupt it. 165 of 183 were kicked |

### Kings' Rest bosses

The largest single boss combo in the season, and a debuff that turns a group
soak into a tank kill [[3]](#ref-3)[[12]](#ref-12).

| Tier | Boss | Ability (cast ID) | Cast | Every | Raw | Taken: none / major | Response |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | King Dazar | **Blade Combo** (268586) | 1.5 s, then 4 hits in 2.4 s | 44 to 47 s | **631%** | 135% (n=1) / 67% | Major defensive every time. 97% of casts were covered |
| 1 | Council of Tribes (Aka'ali the Conqueror) | **Debilitating Backhand** (266237) | 2.0 s | 23 s | 201% | 38% / 27% | Defensive. Leaves **Shattered Defenses**: +200% Physical damage taken for 10 s |
| 2 | The Golden Serpent | **Tail Thrash** (265910) | 1.5 s | 25 s | 175% | 33% / 27%, max 60% | Major defensive or full Ironfur. Only 35% of casts were covered |

> [!CAUTION]
> **Do not soak Barrel Through during Shattered Defenses.** Aka'ali's Barrel
> Through charges a player and splits its damage among players within 7 yards,
> ignoring armor. Normally it took 34% from the tank. The one soak within 10
> seconds of a Backhand took **107%** of maximum health [[3]](#ref-3).

### Voidscar Arena bosses

Two bosses aim magic at the tank. Taz'Rah has no tank buster
[[8]](#ref-8)[[17]](#ref-17).

| Tier | Boss | Ability (cast ID) | Cast | Every | Raw | Taken: none / major | Response |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Charonus | **Dark Waves** (1311923) | 5.0 s | 53 s | 90%, Shadow | 70% / 45%, max 98% | Major defensive. Every cast targeted the tank. Lowest health seen: 27% |
| 1 | Atroxus | **Hulking Claw** (1222642) | 2.0 s | 20 s | 65%, Nature | 50% / 32% | Defensive. Then a Nature DoT for 10 s, not counted in these figures |

### Altar of Fangs bosses

Two cast busters and one boss whose melee acts like one
[[1]](#ref-1)[[10]](#ref-10).

| Tier | Boss | Ability (cast ID) | Cast | Every | Raw | Taken: none / major | Response |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Zul'jan | **Chop Down** (1301350) | **1.5 s**, 2 hits | 30 s | **253%** | 48% / 29%, max 63% | Major defensive |
| 2 | The Writhing Coil | **Tail Scythe** (1298949) | 3.0 s | 91 s | 177% | 44% (n=3) / 21% | Major defensive or full Ironfur |
| — | Rav'i | **Hydrastrike** (1298683) | none, melee | about 4 s | 161% per 3-head burst | 32% / 20%, max 81% | No cast to alert on. Keep Ironfur high for the whole fight |

### Murder Row bosses

One boss casts at the tank almost without pause. Another cuts healing, and a
third adds the dungeon's poison [[4]](#ref-4)[[13]](#ref-13).

| Tier | Boss | Ability (cast ID) | Cast | Every | Raw | Taken: none / major | Response |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Kystia Manaheart | **Chaos Barrage** (1230298) | 3.0 s | **back to back**, about 4 s | 73%, Chaos | 60% / 44%, max 84% | Rotate every defensive through the fight. One defensive cannot cover 33 bolts. Lowest health seen: 15% |
| 2 | Xathuux the Annihilator | **Legion Strike** (473898) | 3.0 s | 24 to 28 s | 137% | 25% / 19% | Major defensive or full Ironfur. **−80% healing received for 8 s** |
| 2 | Zaen Bladesorrow | **Envenom** (1222795) | 3.0 s | 42 s | 110% | 20% / 13% | Major defensive or full Ironfur. Applies Heartstop Poison, so use Remove Corruption |

### The Blinding Vale bosses

One heavy physical slam and one Holy impale that armor does not reduce
[[7]](#ref-7)[[16]](#ref-16).

| Tier | Boss | Ability (cast ID) | Cast | Every | Raw | Taken: none / major | Response |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Kezkitt and Meittik | **Bedrock Slam** (1234753) | 3.0 s | 45 s | 180%, Physical and Nature | 65% / 36% | Major defensive. Lowest health seen: 27% |
| 1 | Ziekket | **Thornspike** (1247685) | 3.0 s | 50 s | 51%, Holy | 42% / 35% | Defensive and healing. Then a Physical bleed for 10 s |

### Temple of Sethraliss bosses

Each tank buster here is a buff or a debuff, not one big hit
[[6]](#ref-6)[[15]](#ref-15).

| Tier | Boss | Ability (cast ID) | Cast | Every | Raw | Taken: none / major | Response |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Adderis and Aspix | **Overload** (1288428) | 3.0 s | 45 to 50 s | 64% p90, up to 138% | 31% / 22%, max 113% | Defensive for the 8 s buff: +100% attack speed and extra Nature damage on every melee hit |
| 2 | Avatar of Sethraliss | **Tainted Strike** (1300803), Corrupted Guardian add | 2.5 s | 11 s | 136% | 31% / 15%, max 55% | Major defensive or full Ironfur. Leaves a stacking Shadow DoT for 25 s |
| 2 | Merektha | **Lightning Bite** (1290797) | 3.0 s | 83 to 93 s | 160% | 36% / 23%, max 50% | Major defensive or full Ironfur. It hits whoever holds Merektha |

### Den of Nalorakk bosses

The one boss buster in this dungeon is a soak, not a hit on the current
target [[2]](#ref-2)[[11]](#ref-11).

| Tier | Boss | Ability (cast ID) | Cast | Every | Raw | Taken: none / major | Response |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | Nalorakk | **Forceful Slam** (1297797) | 5.0 s | 25 s | 214% | 39% / 26%, max 53% | Soak within 6 yd of the impact. If nobody is hit, Zul'jarra uses Demoralizing Scream. The tank soaked all 50 casts in the sample |

### Heavy group damage

These boss abilities are not aimed at the tank, but they took more from the
tank than most busters. A defensive spent on a buster just before one of these
leaves the tank exposed [[1]](#ref-1)–[[8]](#ref-8).

| Dungeon | Boss | Ability | Taken without a major (median) | Note |
| --- | --- | --- | --- | --- |
| The Blinding Vale | Ikuzz the Light Hunter | Bloodthorn Roots | 85%, max 157% | Roots that tick until destroyed |
| Ruby Life Pools | Melidrussa Chillworn | Frost Overload | 102% per phase | Pulses while Ice Bulwark holds. Twice per fight |
| Altar of Fangs | Rav'i | Triple Shot | 81%, max 110% | Hits 3 players, then leaves a pool |
| Altar of Fangs | Zul'jan | Ritual of the Fang | 79% | Beams that players intercept |
| Den of Nalorakk | Sentinel of Winter | Frozen Tempest | 70%, max 85% | 8 s storm. Extra damage outside the eye |
| Kings' Rest | The Golden Serpent | Serpentine Gust | 68%, max 84% | Ticks on all players for 5 s |
| Murder Row | Zaen Bladesorrow | Killing Spree | 54%, max 73% | Ignores armor, every 0.5 s for 3 s |
| Den of Nalorakk | Nalorakk | Overwhelming Onslaught | 41% | 3 hits in 2 s, ignores armor |

## How the danger works

This section explains why the lists above say "major defensive or full
Ironfur", and why some entries are Tier 1.

- **Armor decides physical hits.** Ironfur adds armor, and armor reduces only
  physical damage. With Ironfur stacked, Tier 2 hits of 110% to 250% raw
  became 15% to 35% taken. With few stacks the same hit can take most of the
  health bar [[9]](#ref-9).
- **Magic and armor-ignoring damage skips Ironfur.** Fiery Blast, Head Bash,
  Rattle and the Fire part of Fire Maw land at close to their raw size without
  a major defensive. That is what makes them Tier 1.
- **Channels add up.** Steel Barrage (14 hits in 3 s) and Brutalize (5 hits in
  6 s) are each small per hit but 4 to 6 times maximum health per cast. A
  major defensive reduces them, but healing has to cover the rest.
- **Raw damage rises with key level.** Most busters were 10% to 25% bigger at
  key 22 than at key 20. Shield Bash went from 145% to 182%.
- **A stacking debuff turns a covered buster into a lethal one.** At 5
  Shield Bash stacks, every Physical hit on the tank deals double damage, so a
  cycle of defensives that worked for the first bashes no longer holds. See
  [stacking debuffs](#stacking-debuffs).
- **Two casters of one buster double its rate.** Shield Bash, Sunder Slam,
  Grievous Gash and Dismember all appear in pairs. Count the casters in the
  pack before the pull.
- **Strong tanks covered most casts.** Coverage with a major defensive was 60%
  to 100% per ability. The uncovered casts are where the risk sits.
- **Bosses are planned, trash is reactive.** Boss busters repeat on a fixed
  timer, so a defensive can be assigned to each cast. Trash busters depend on
  pull size and which mobs are alive. How strong Guardian tanks cycle their
  defensives is in [[18]](#ref-18). Per-pull plans for three dangerous pulls
  are in [[19]](#ref-19).

## Full measurements

All values are per cast, as a percentage of the tank's maximum health without
Incarnation. "No major" and "major" are the damage actually taken, without and
with Barkskin, Survival Instincts, Incarnation or a known external. "Lowest"
is the lowest health after a cast. Sources: [[1]](#ref-1)–[[8]](#ref-8).

| Dungeon | Ability | Casts (runs) | Raw median / p90 / max | No major: n, median, max | Major: median | Coverage | Lowest |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ruby Life Pools | Steel Barrage | 42 (8/8) | 394% / 498% / 586% | 17, 94%, 155% | 75% | 60% | 36% |
| Ruby Life Pools | Fiery Blast | 55 (7/8) | 101% / 119% / 131% | 7, 71%, 81% | 50% | 87% | 5% |
| Ruby Life Pools | Fire Maw | 41 (8/8) | 187% / 203% / 211% | 14, 45%, 54% | 29% | 66% | 18% |
| Ruby Life Pools | Crushing Smash | 23 (8/8) | 197% / 214% / 231% | 0, —, — | 40% | 100% | 49% |
| Voidscar Arena | Brutalize | 52 (8/8) | 636% / 942% / 1060% | 9, 89%, 159% | 72% | 83% | 25% |
| Voidscar Arena | Head Bash | 27 (8/8) | 98% / 110% / 127% | 2, 80%, 81% | 40% | 93% | 21% |
| Voidscar Arena | Sky Strike | 56 (8/8) | 42% / 46% / 172% alone | 25, 33%, 53% | 26% | 55% | 0% (death) |
| Altar of Fangs | Rattle | 27 (8/8) | 95% / 104% / 104% | 2, 90%, 91% | 77% | 93% | 57% |
| Altar of Fangs | Corrosive Fangs | 29 (8/8) | 66% / 75% / 79% | 5, 47%, 55% | 34% | 83% | 40% |
| Altar of Fangs | Dismember | 116 (8/8) | 160% / 176% / 208% | 19, 24%, 41% | 16% | 84% | 41% |
| Temple of Sethraliss | Head Butt | 24 (8/8) | 199% / 256% / 256% | 8, 28%, 33% | 24% | 67% | 54% |
| Temple of Sethraliss | Venomous Slash | 51 (8/8) | 170% / 205% / 233% | 14, 25%, 33% | 18% | 73% | 55% |
| Temple of Sethraliss | Sunder Slam | 33 (8/8) | 112% / 133% / 151% | 8, 16%, 30% | 12% | 76% | 72% |
| Kings' Rest | Soul Crush | 27 (8/8) | 210% / 228% / 251% | 7, 30%, 35% | 24% | 74% | 62% |
| Kings' Rest | Mortal Bleed | 28 (8/8) | 126% / 137% / 140% | 9, 16%, 23% | 13% | 68% | 68% |
| The Blinding Vale | Earthrupture Strike | 79 (8/8) | 150% / 175% / 201% | 18, 19%, 38% | 15% | 77% | 50% |
| The Blinding Vale | Grievous Gash | 126 (8/8) | 109% / 123% / 135% | 34, 15%, 27% | 12% | 73% | 40% |
| Murder Row | Shield Bash | 42 (8/8) | 146% / 186% / 223% | 5, 20%, 34% | 17% | 88% | 41% |
| Den of Nalorakk | Pulverize | 7 (5/8) | 118% / 118% / 121% | 0, —, — | 8% | 100% | 80% |
| Den of Nalorakk | Lightning Bolt | 3 (3/8) | 44% / 49% / 49% | 2, 25%, 27% | 35% | 33% | 0% (death) |

> [!NOTE]
> Small samples: Pulverize (7 casts on the tank), Lightning Bolt (3) and the
> "no major" figures for Head Bash and Rattle (2 each). The 172% Sky Strike is
> one hit, logged just outside a pull window.

> [!NOTE]
> **Left out, but worth knowing.** Bladestorm (King Timalji, Kings' Rest trash)
> reached 202% raw at p90 and 67% taken without a major, but it fixates a
> random player and can be kited. Thundering Storm (Raj'kess the Spellstorm,
> Voidscar Arena trash) hit 106% raw in 6 casts, with one 68% hit without a
> major. Its tooltip did not load, so its targeting is unconfirmed.
> Tempest Stormshield and Infest passed the thresholds but hit the whole group.

## Method

How the list was built, so it can be rebuilt next season. The
`wow-mplus-tank-busters` skill holds the scripts and the full procedure.

- **Sample.** For each dungeon, 8 timed Guardian Druid keys at levels 20 to
  22, taken from the middle of each level's ranking list, one key per tank.
  Key 22 lists held only 1 to 13 Guardian runs, so some dungeons have 1 or 2
  key 22 runs.
- **Data.** Every non-melee hit on the tank, from the Warcraft Logs API. The
  query filters with `target.name = '<tank>'`, so one key costs a few points.
- **Trash and bosses apart.** Trash is every hit inside a pull with no
  encounter ID, from non-boss actors. Bosses are every hit inside a boss pull,
  from the boss or its adds. Trash mobs caught in a boss pull were credited to
  the trash list.
- **A cast** is all hits from one mob with the same ability name, with no gap
  over 2 seconds. Damage IDs that share a name are merged, so a hit with a
  physical part and a fire part counts once.
- **Thresholds.** A candidate needed raw p90 of 60% or more, or 35% taken
  without a major, or a tank death. The list keeps abilities aimed at the tank
  with raw above 100%, plus magic and armor-ignoring abilities that took 40%
  or more. Group-wide and avoidable damage was left out.
- **Aimed at the tank.** A boss ability counts when its cast event named the
  tank in most casts, or, for casts with no target, when the tooltip says
  "current target" and the tank took most hits.
- **Tooltips.** Cast time, school and debuffs come from the Wowhead tooltip
  for each cast ID [[10]](#ref-10)–[[17]](#ref-17).
- **Stacking debuffs.** Every debuff an enemy put on the tank, from a second
  `Debuffs` query per key. An application that lands while the debuff is
  still up is a re-application. Each application was matched to the mob that
  dealt a hit at the same moment, because the log credits a shared stack to
  its first caster. "Casters per pull" counts the mobs that hit the tank with
  the ability inside one pull. Durations and stacking come from the tooltips,
  checked against the log.
- **Not counted.** Damage-over-time ticks are left out of the per-cast
  figures, so Searing Blows, Hulking Claw and the bleeds cost more than shown.
  Melee passives with no cast event (Duostrike, Ravenous Claws, Hydrastrike)
  are not alerts.

> [!WARNING]
> Only 2 tanks died on trash in 64 keys, to Lightning Bolt and Sky Strike, and
> none died to a boss.
> "Lethal" for every other entry is inferred from the raw size and from one
> key 19 death to Shield Bash [[9]](#ref-9). The sample holds timed keys from
> mid-ranked tanks, so it under-represents the failures it is meant to
> prevent.

## Sources

<details open>
<summary>Warcraft Logs</summary>

1. <a id="ref-1"></a>Warcraft Logs API, Altar of Fangs (encounter 12993): `kZz8VWX4LQw7gMFp` (fight 1), `qFTg6AxH3yJBLdcm` (15), `JpqFxB7mvt2zV1N8` (9), `xJNctHfkPd8WvqrM` (9), `z9h1NfHZmk8DrgJ7` (22), `7LJ3tVDRMvd2XTPK` (6), `FtQkhndA86fN9J74` (3), `hwxcqz4Kyvntf9JM` (5) — every hit, cast, interrupt and death, trash and bosses, and every debuff on the tank
2. <a id="ref-2"></a>Warcraft Logs API, Den of Nalorakk (encounter 12825): `3dPRGapmfkwM9xbT` (fight 43), `DafAxT7mckNz18hW` (1), `BFA2kQrMvG1ZCLKg` (4), `d4Hn9Q67qYh2PBJW` (3, the Lightning Bolt death), `rBp1NQhtPyjMHcaR` (1), `4n1MXYCdwPbmNDTF` (8), `fapKD6wqdXnPxVWz` (2), `kFDhvPJxjCnr4RQK` (19) — also every debuff on the tank: Shredding Claws and Shred Armor stacks
3. <a id="ref-3"></a>Warcraft Logs API, Kings' Rest (encounter 61762): `3dPRGapmfkwM9xbT` (fight 42), `4K3XnYVqft7hJdND` (10), `3vQrKaCnN6R9Bh7L` (3), `MKLcn7vy2aF4N83k` (23), `a4JgZpyNdTMk71mR` (9), `BKwbh3HPFgDZC98V` (56), `KPyXJGdr4QNfDg2T` (114), `r1b3W2DkQRyM7HmY` (168) — also every debuff on the tank
4. <a id="ref-4"></a>Warcraft Logs API, Murder Row (encounter 12813): `4AX3ZvVN9MCRqPdm` (fight 27), `PgaHCqNncQjLJbV2` (10), `Lq7nPWXGmcRNvtQf` (5), `m9Yjp3XfcnL7FyHM` (6), `xR2Zm6FpHVYn8gwv` (7), `1mA7j6Lw3TFPCgyN` (3), `L6WkcaVJgjntwKGM` (18), `XnN6crgMBWJaRLKk` (1) — also every debuff on the tank: Shield Bash stacks and their casters
5. <a id="ref-5"></a>Warcraft Logs API, Ruby Life Pools (encounter 112521): `8ZhGQpH1nXTCLBbm` (fight 13), `BCLbRVKAMPhmtaFT` (8), `FWRQKnAjtTGPBq6r` (8), `Rqj8BZQ9r6mPfnDX` (32), `nKNhT2FyGpJWbMqD` (7), `DaYZz9KNy8gfL26M` (38), `bavyCQr3p71Fx86P` (42), `zqbh4pkCadnyQJcB` (68) — also every debuff on the tank: Tectonic Strike, Cold Claws, Frozen Solid and Stormslam uptime
6. <a id="ref-6"></a>Warcraft Logs API, Temple of Sethraliss (encounter 61877): `13x6ZbAXnpKjzDQf` (fight 1), `3naVqpJzyXhMtZcm` (33), `G9Ja1h4bH2yVtdCQ` (49), `k87pVBRNZT14PHCK` (212), `rKX36VZ4qBdj8zhm` (17), `BKwbh3HPFgDZC98V` (52), `RA39P4Zx6tVWq2FH` (12), `kQYBm6vKz41tXPVN` (1) — also every debuff on the tank: Sunder Slam, Venomous Slash and Tainted Strike stacks
7. <a id="ref-7"></a>Warcraft Logs API, The Blinding Vale (encounter 12859): `3naVqpJzyXhMtZcm` (fight 5), `HqD6Cgk2dV4RKZTw` (28), `G2p3VFvZkxHLdMhn` (1), `fKJdyjgXhNQzPGL8` (12), `zFrMqjVhYT2c9g7t` (21), `7J2fKyVGTmYLC9nq` (2), `bdnjGyKrFV92LPYZ` (1), `nfZkQKPaHhgBGrcA` (3) — also the Spore Spines totals, and every debuff on the tank
8. <a id="ref-8"></a>Warcraft Logs API, Voidscar Arena (encounter 12923): `LqJg1ZxANdMyz6kR` (fight 11), `YfWGgkFKJht1AbXD` (16), `FWRQKnAjtTGPBq6r` (11), `GQKzfg1BxYqhwTFr` (11), `xb67hjtpJm8QyXHF` (13, the Sky Strike death), `RANGfmhc917ZwHWx` (11), `WYBZmQVvgptJxf8M` (1), `k9xghpqAf2GL7yr3` (1) — also every debuff on the tank: Shred Defense copies
9. <a id="ref-9"></a>Warcraft Logs report `FfqQTLNA9m74hdyc`, fight 11 — a key 19 Murder Row death to Shield Bash: 994,628 damage, 16,526 overkill, 3 Ironfur stacks, no major defensive. The Shield Bash debuff held 5 stacks, applied in turn by the Captain and the Guard 7 to 17 s apart

</details>

<details open>
<summary>Spell tooltips</summary>

10. <a id="ref-10"></a>Wowhead tooltips, Altar of Fangs: [Dismember](https://www.wowhead.com/spell=1306911), [Corrosive Fangs](https://www.wowhead.com/spell=1294845), [Rattle](https://www.wowhead.com/spell=1294849); bosses: [Chop Down](https://www.wowhead.com/spell=1301350), [Tail Scythe](https://www.wowhead.com/spell=1298949), [Hydrastrike](https://www.wowhead.com/spell=1298683) — cast times, damage school, the +20% damage taken debuff for 20 s, armor-ignoring pulses, two-hit Chop Down
11. <a id="ref-11"></a>Wowhead tooltips, Den of Nalorakk: [Pulverize](https://www.wowhead.com/spell=1240280), [Lightning Bolt](https://www.wowhead.com/spell=1246687), [Shredding Claws](https://www.wowhead.com/spell=1238247), [Shred Armor](https://www.wowhead.com/spell=1311695); boss: [Forceful Slam](https://www.wowhead.com/spell=1297797) — 12 yd radius and 4 s stun, single-target Nature bolt, 6 yd soak and Demoralizing Scream; −5% armor per stack for 2 s, −10% armor for 5 s
12. <a id="ref-12"></a>Wowhead tooltips, Kings' Rest: [Soul Crush](https://www.wowhead.com/spell=1302028), [Mortal Bleed](https://www.wowhead.com/spell=1297918); bosses: [Blade Combo](https://www.wowhead.com/spell=268586), [Debilitating Backhand](https://www.wowhead.com/spell=266237), [Tail Thrash](https://www.wowhead.com/spell=265910) — the armor debuff, the 18 s bleed and healing reduction, Shattered Defenses
13. <a id="ref-13"></a>Wowhead tooltips, Murder Row: [Shield Bash](https://www.wowhead.com/spell=1216529), [Heartstop Poison](https://www.wowhead.com/spell=1216589); bosses: [Chaos Barrage](https://www.wowhead.com/spell=1230298), [Legion Strike](https://www.wowhead.com/spell=473898), [Envenom](https://www.wowhead.com/spell=1222795) — 3 s cast and +20% Physical damage taken for 20 s, with no mention of stacking; 8 s coating, stacks of −5% maximum health; −80% healing received
14. <a id="ref-14"></a>Wowhead tooltips, Ruby Life Pools: [Steel Barrage](https://www.wowhead.com/spell=372047), [Fiery Blast](https://www.wowhead.com/spell=1305955), [Fire Maw](https://www.wowhead.com/spell=392394), [Crushing Smash](https://www.wowhead.com/spell=372730), [Tectonic Strike](https://www.wowhead.com/spell=1305225); bosses: [Searing Blows](https://www.wowhead.com/spell=372858), [Stormslam](https://www.wowhead.com/spell=381512), [Frigid Shard](https://www.wowhead.com/spell=372808), [Stormslam debuff](https://www.wowhead.com/spell=381515), [Cold Claws](https://www.wowhead.com/spell=1305234) — 1 s cast and 3 s channel; Fire, Physical and Nature parts; +25% damage taken per Tectonic Strike stack for 8 s; Searing Wounds; the Nature vulnerability is Magic and stacks; Frozen Solid at 20 Cold Claws
15. <a id="ref-15"></a>Wowhead tooltips, Temple of Sethraliss: [Head Butt](https://www.wowhead.com/spell=272654), [Venomous Slash](https://www.wowhead.com/spell=1303443), [Sunder Slam](https://www.wowhead.com/spell=1291468); bosses: [Overload](https://www.wowhead.com/spell=1288428), [Tainted Strike](https://www.wowhead.com/spell=1300803), [Lightning Bite](https://www.wowhead.com/spell=1290797) — the stacking +50% Physical damage taken debuff, Overload's attack-speed buff
16. <a id="ref-16"></a>Wowhead tooltips, The Blinding Vale: [Earthrupture Strike](https://www.wowhead.com/spell=1237855), [Grievous Gash](https://www.wowhead.com/spell=1242135); bosses: [Bedrock Slam](https://www.wowhead.com/spell=1234753), [Thornspike](https://www.wowhead.com/spell=1247685) — Ruptured Earth pool, stacking bleed, Holy impale
17. <a id="ref-17"></a>Wowhead tooltips, Voidscar Arena: [Brutalize](https://www.wowhead.com/spell=1300243), [Head Bash](https://www.wowhead.com/spell=1245186), [Sky Strike](https://www.wowhead.com/spell=1239856), [Shred Defense](https://www.wowhead.com/spell=1233535); bosses: [Dark Waves](https://www.wowhead.com/spell=1311923), [Hulking Claw](https://www.wowhead.com/spell=1222642) — 5-hit channel, Fel spittle, damage shared among players hit, Hulking Claw's Nature DoT, +20% damage taken for 10 s from Shred Defense

</details>

<details open>
<summary>Related guides</summary>

18. <a id="ref-18"></a>[Guardian Druid — Mythic+ defensives](../rotations/guardian-druid-mplus-defensives.md) — how strong tanks cycle Barkskin, Incarnation, Survival Instincts and Ironfur
19. <a id="ref-19"></a>[Guardian Druid — Mythic+ danger pulls](../rotations/guardian-druid-mplus-danger-pulls.md) — per-pull plans for Murder Row, Voidscar Arena and Kings' Rest

</details>

<details open>
<summary>Community</summary>

20. <a id="ref-20"></a>Pjdruid, Guardian Druid, key 22 Murder Row recording (no public link recorded) — at 4 Shield Bash stacks the tank calls for Blessing of Sacrifice, then for the Captain to die before the next bash. The debuff then drops

</details>
