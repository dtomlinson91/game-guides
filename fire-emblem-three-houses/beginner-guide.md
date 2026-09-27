# Three Houses beginner guide

A reference for a first playthrough of *Fire Emblem: Three Houses* on Nintendo
Switch, at **Hard / Classic**, with the **Expansion Pass** installed. It
explains how the game's systems fit together, what to do each week, how to
spend free days, when grinding is worth it, how class changes work, and how to
build a team. Tables at the end give every character's strengths and the role
the game's own suggested classes point to.

Start with [How Three Houses works](#how-three-houses-works) and
[The weekly loop](#the-weekly-loop). Use the rest as a lookup while playing.
Numbers in square brackets, such as [1], point to the [Sources](#sources) list
at the end.

> [!IMPORTANT]
> **A save cannot be bricked.** Character level does not reset on a class
> change [6]. A passed exam is never lost [37]. A broken weapon can be repaired
> [16]. Only a few decisions are truly one-way:
>
> - **The house**, chosen in the prologue. See
>   [Choosing a house](#choosing-a-house).
> - **The one Dancer** per playthrough, decided at the White Heron Cup in
>   Chapter 9 [27].
> - **Recruiting**, which closes at the end of Part 1 [25].
> - **The Classic or Casual choice**, fixed when the save starts [50].
>
> See [Windows that close](#windows-that-close) for the full list.

> [!TIP]
> Difficulty can be lowered at any time from the options menu, but never
> raised [19]. Starting on Hard therefore costs nothing, because Normal stays
> available if Hard stops being fun.

<details>
<summary><strong>Terms used in this guide</strong></summary>

| Term | Meaning |
| --- | --- |
| **Byleth** | The main character, the professor. Always deployed |
| **Route** | The story path after the timeskip. Four exist. Only the Black Eagles house splits |
| **Part 1 / Part 2** | Before and after the timeskip at Chapter 12 |
| **Skill level** | A letter rank, E to S+, in a weapon, a movement type or Authority. Not the same as character level |
| **Strength / weakness** | A skill the unit learns faster or slower. Shown as an up or down arrow |
| **Budding talent** | A hidden skill that becomes a strength after 12 instructions, and grants an ability or combat art |
| **Class mastery** | Counted in combats, not experience. Grants a permanent ability or combat art |
| **Professor level** | Byleth's rank, E to A+. Sets activity points, lecture points, battle points, adjutant slots and monthly gold |
| **Motivation** | A student's energy for instruction, 0 to 100 |
| **Battalion** | An equippable squad. Gives flat stats and a gambit. Gated by Authority |
| **Gambit** | A battalion's special attack. Accuracy runs on Charm |
| **Adjutant** | An undeployed unit attached to a deployed one |
| **Divine Pulse** | The rewind feature. Undoes turns in battle |
| **Player phase / enemy phase** | The player's turn and the enemy's turn. Abbreviated PP and EP |

</details>

## Contents

- [How Three Houses works](#how-three-houses-works)
- [Quick reference](#quick-reference)
- [The weekly loop](#the-weekly-loop)
  - [Instruction numbers](#instruction-numbers)
  - [Goal and task numbers](#goal-and-task-numbers)
  - [Skill rank costs](#skill-rank-costs)
- [The Sunday choice](#the-sunday-choice)
- [Exploration order](#exploration-order)
  - [Free activities](#free-activities)
  - [Paid activities](#paid-activities)
  - [Experience thresholds](#experience-thresholds)
  - [Renown and statues](#renown-and-statues)
- [Combat basics](#combat-basics)
- [When to grind](#when-to-grind)
- [Changing class](#changing-class)
  - [How classes work](#how-classes-work)
  - [How an exam works](#how-an-exam-works)
  - [Class mastery](#class-mastery)
  - [Masteries worth planning](#masteries-worth-planning)
- [Battalions and gambits](#battalions-and-gambits)
  - [How battalions work](#how-battalions-work)
  - [Gambits](#gambits)
- [Adjutants and supports](#adjutants-and-supports)
  - [Adjutants](#adjutants)
  - [Supports](#supports)
- [Recruiting students](#recruiting-students)
  - [How the check works](#how-the-check-works)
  - [Requirements table](#requirements-table)
  - [Who leaves or cannot join](#who-leaves-or-cannot-join)
  - [Expansion Pass recruits](#expansion-pass-recruits)
- [Common mistakes](#common-mistakes)
- [Windows that close](#windows-that-close)
- [Progress checks](#progress-checks)
- [Team building](#team-building)
  - [Deployment slots](#deployment-slots)
  - [Roles to cover](#roles-to-cover)
  - [Real constraints](#real-constraints)
- [Character reference](#character-reference)
  - [Black Eagles](#black-eagles)
  - [Blue Lions](#blue-lions)
  - [Golden Deer](#golden-deer)
  - [Church and faculty](#church-and-faculty)
  - [Expansion Pass characters](#expansion-pass-characters)
- [Class reference](#class-reference)
  - [Beginner classes](#beginner-classes)
  - [Intermediate classes](#intermediate-classes)
  - [Advanced classes](#advanced-classes)
  - [Master classes](#master-classes)
  - [Special classes](#special-classes)
  - [Unique classes](#unique-classes)
- [Choosing a house](#choosing-a-house)
- [Sources](#sources)

---

## How Three Houses works

A one-screen map of the game's systems and how they feed each other. Every
later section expands one part of it. Most beginner confusion comes from not
knowing which things belong to the unit and last, and which are temporary.

**The calendar.** Part 1 runs month by month. A month holds four or five
weeks. Each week has a lesson on Monday and a free day on Sunday. The last week
of the month is the story mission [2][3].

**The two resources that drive everything:**

1. **Professor level.** Byleth's rank. It sets how many units Byleth can teach,
   how many things Byleth can do on a free day, how many battles a free day
   allows, and how many adjutants can deploy [1]. Raising it early compounds
   into every later month.
2. **Skill levels.** Each unit's rank in every weapon and movement type. They
   decide which weapons a unit can use and which class exams it can pass
   [10][34].

**How they connect.** Instruction and battle raise skill levels. Skill levels
unlock class exams. A class gives stats and abilities while the unit is in it.
Fighting in a class counts towards its **mastery**, which grants an ability the
unit keeps in every class [5]. Supports between units feed adjutants, gambits
and recruiting.

**What lasts and what does not.** This table answers the question most
systems raise: what stays when something changes.

| Thing | Belongs to | Lasts? |
| --- | --- | --- |
| Character level | The unit | Permanent. A class change never resets it [6] |
| Skill levels | The unit | Kept in every class [37]. No source describes a way to lose them |
| Budding talent | The unit | Permanent once unlocked. The skill becomes a strength [2][35] |
| Passed class exams | The unit | Permanent. Switch between passed classes before any battle [37][41] |
| Class stat modifiers and class abilities | The class | Only while the unit is in that class [8][37] |
| Mastery abilities | The unit | Equip in any class. Some mastery combat arts are locked to their class [5] |
| Supports | The pair of units | No source describes a loss. Some stop advancing at story points [14] |
| Battalion level | The battalion | The battalion keeps its own level. It is never lost at 0 endurance [11] |
| Battalion endurance | The battalion | Carries over between battles. Refill it at the guild [11] |
| Gambit uses | The battalion | Refill at the end of every battle [12] |
| Weapon durability | The weapon | Carries over. At 0 the weapon breaks but is not lost [16] |
| Spell uses | The unit | Refill at the end of every battle [16] |
| Divine Pulse charges | Byleth | Refill for each battle [43] |
| Motivation | The unit | Carries from week to week [2] |
| Professor level | Byleth | No source describes a way to lose it [1] |
| Seals | The inventory | Used up by any exam attempt, pass or fail [7] |

> [!NOTE]
> Three of those rows rest on implication rather than a direct statement.
> No source states outright that skill levels, supports and professor level
> can never drop. No source describes any way to lose them either. The
> Lesson page implies that motivation carries over, because it refers to a
> unit that "began the week with 50 motivation or less" [2].

---

## Quick reference

The questions beginners ask most often, with the short answer and a link to the
full section.

| Question | Short answer |
| --- | --- |
| **When is grinding needed?** | Rarely on Hard. Every battle on a free day costs a battle point, so grinding trades against the monastery. Take every paralogue. [When to grind](#when-to-grind) |
| **How do class changes work?** | Pass an exam with a seal. Level never resets, and every passed class stays available. [Changing class](#changing-class) |
| **How should a free day be spent?** | Explore early, to raise professor level. Do every free activity first. [The Sunday choice](#the-sunday-choice) |
| **What makes a good team?** | About 10 trained units: tanks, physical and magic damage, an archer, two healers, a flier and the Dancer. [Team building](#team-building) |
| **Which role suits a character?** | The role column in [Character reference](#character-reference), taken from the classes the game suggests |
| **Can students from other houses join?** | Yes, most of them, until the end of Part 1. B support skips the requirements. [Recruiting students](#recruiting-students) |
| **What is easy to miss?** | The Dancer, Dedue's paralogue, the route split and the recruiting deadline. [Windows that close](#windows-that-close) |

---

## The weekly loop

The routine to repeat every week of Part 1. Once learned, it makes the game
feel much smaller. The last week of each month is the story mission. Every
other week has a lesson on Monday and a free day on Sunday [2][3].

Do these steps in order each week.

1. **Set goals.** Give each unit two skills to study, or one skill to
   specialise in. One skill pays 1.5 times the experience of that skill inside
   a two-skill pair [2].
2. **Instruct.** Teach as many units as the lecture points allow. Professor
   level sets that limit [1]. See [The Sunday choice](#the-sunday-choice).
3. **Answer the student question.** A student sometimes asks a question after
   instruction. A correct answer is the largest single source of professor
   experience in the game [1]. It also returns 0, 25 or 50 motivation [2].
4. **Handle goal-change requests.** A student may ask to change their goals.
   Accepting or declining changes nothing mechanically [2]. Accept when the
   goal matches the class planned for that unit. The request names the class
   the game intends, which is where the "Game suggests" column in
   [Character reference](#character-reference) comes from.
5. **Assign a group task.** Pick two units. This trains a movement skill and
   pays gold and Smithing Stones [2].
6. **Spend Sunday.** Choose Explore, Fight, Seminar or Rest. See
   [The Sunday choice](#the-sunday-choice).

### Instruction numbers

How one instruction turns into skill experience. Each unit holds up to 100
motivation, in steps of 25. One instruction costs 25 motivation, so a unit at
full motivation takes four instructions in one week [2].

Each instruction rolls a result. The result multiplies the skill experience
[2][34].

| Result | Weakness | Neutral | Strength |
| --- | --- | --- | --- |
| Bad (×0.5) | +1 | +2 | +4 |
| Good (×1) | +2 | +4 | +6 |
| Great (×1.5) | +3 | +6 | +9 |
| Perfect (×2) | +4 | +8 | +12 |

Three rules follow from that table [2].

- A unit can only get "Bad" if it began the week at 50 motivation or less.
  High motivation deletes the worst outcome.
- The first "Perfect" of the week returns 25 motivation. That unit can then
  take a fifth instruction.
- After a "Bad" result, choose to critique or console. The right choice for
  that character returns 25 motivation.

**What raises motivation.** Rest raises it slightly for every student [3].
Seminars give each attendee 50 [2]. Returning a lost item raises it for a
student in Byleth's class [3]. Tea parties, meals, gifts and being the battle
MVP also raise it [17][49].

### Goal and task numbers

What the weekly goals and group tasks pay. Goals pay out at the end of the
week. **These values are lower on Hard than on Normal** [2][19].

| Difficulty | Weakness | Neutral | Strength |
| --- | --- | --- | --- |
| Normal | +24 | +28 | +32 |
| **Hard** | **+20** | **+24** | **+28** |
| Maddening | +16 | +20 | +24 |

> [!IMPORTANT]
> One datamined table lists +28 neutral and +32 strength without naming a
> difficulty [34]. Those are the **Normal** values. Always check the
> difficulty next to a skill experience number.

Group tasks train Riding (Stable Duty), Heavy Armour (Weeding) or Flying (Sky
Watch) for two units [2].

| Result | Reward | Weakness | Neutral | Strength |
| --- | --- | --- | --- | --- |
| Good | 3 Smithing Stones, 500 gold | +4 | +8 | +12 |
| Perfect | 5 Smithing Stones, 1,000 gold | +8 | +12 | +16 |

A "Perfect" result is more likely when both units have a strength in the skill
and a high support rank with each other [2].

### Skill rank costs

How much skill experience each rank needs. The cost rises steeply, so plan the
two skills a unit's target class needs and ignore the rest [34].

| Rank | Experience to the next rank |
| --- | --- |
| E | 40 |
| E+ | 60 |
| D | 80 |
| D+ | 120 |
| C | 160 |
| C+ | 220 |
| B | 280 |
| B+ | 360 |

> [!NOTE]
> Fighting also trains skills. Each attack gives +1 to +3 in one weapon, one
> movement skill and Authority, depending on weakness or strength. A miss pays
> the same as a kill [34]. That is small per hit, but it adds up across a map
> and costs nothing.

---

## The Sunday choice

Every free day offers four options, and only one can be picked. This decision
shapes the month, so it gets a table of its own [3].

| Option | What it spends | What it gives |
| --- | --- | --- |
| **Explore** | Activity points | Professor experience, supports, motivation, skills, items, recruiting |
| **Fight** | Battle points | Level experience, class mastery, gold, ores. The only way to play a paralogue |
| **Seminar** | Nothing | Skill experience for a group of units at once, plus some motivation |
| **Rest** | Nothing | A small motivation refill for every student, plus 5 durability on the Sword of the Creator |

Professor level sets both point pools [1]. This is why professor level is the
most valuable thing to build early.

| Professor level | Activity points | Lecture points | Battle points | Adjutants | Monthly gold |
| --- | --- | --- | --- | --- | --- |
| E | 1 | 3 | 1 | 0 | 1,000 |
| E+ | 2 | 3 | 1 | 0 | 2,000 |
| D | 3 | 4 | 1 | 0 | 3,000 |
| D+ | 4 | 4 | 1 | 0 | 4,000 |
| **C** | 5 | 5 | 1 | **1** | 5,000 |
| C+ | 6 | 5 | **2** | 1 | 5,000 |
| B | 7 | 6 | 2 | 2 | 5,000 |
| B+ | 8 | 6 | 2 | 2 | 5,000 |
| A | 9 | 7 | 2 | 3 | 5,000 |
| A+ | 10 | 7 | 3 | 3 | 5,000 |

> [!IMPORTANT]
> Professor level **C** is a hard gate. Below C, Master class exams cannot be
> taken, and their requirements are hidden [1][6]. Reach C before planning any
> Master class.

A reasonable default is **two Explore days and two Fight days per month**. Lean
towards Explore in the first few months, because professor level compounds into
everything else. Use Seminar when several units are behind on one skill. Use
Rest only when motivation has collapsed across the class.

---

## Exploration order

Exploring is where the game hides most of its value, and where most new players
waste points. The key fact is that **most exploration activities are free**.
Activity points refill each free day and cannot be raised mid-exploration [3].

### Free activities

The activities that cost no activity points [1][3]. Do all of these every
Explore day, before spending a point on anything.

| Activity | Gives |
| --- | --- |
| Fishing | 10 to 40 professor experience per fish, 100 for a Goddess Messenger. Needs bait, not points |
| Greenhouse | Stat-boosting items, gifts and seeds. 100 professor experience per grade of the lowest seed used. Once per free day |
| Giving gifts | Support with Byleth. Doubled for a liked gift, zero for a disliked one |
| Returning lost items | Support **and** motivation. Available from Chapter 3 |
| Quests | Items, gold, renown and new facilities |
| Counselor advice | Support with the student who asked |
| Recruiting | See [Recruiting students](#recruiting-students) |
| Watching supports | Support ranks, which feed adjutants and gambits |

> [!TIP]
> The Owl Feather is liked by every character in the game [3]. Buy them
> whenever a merchant stocks them, and give them to anyone whose gift list is
> unknown.

### Paid activities

Seven activities cost one activity point each [3][39]. Spend points in roughly
this order.

1. **Faculty Training.** 20 skill experience for Byleth, plus 10 more for a
   strength. A "Great" result adds 50%. Byleth's budding talent needs six
   sessions in Faith. Each instructor teaches only their own skills, and
   several are absent in specific chapters [39].
2. **Share a Meal.** Raises support between two characters and Byleth, raises
   their motivation, and pays 50 to 200 professor experience depending on
   whether they like the dish. Today's Special costs no ingredients, once per
   Sunday [1][39].
3. **Choir Practice.** Raises Faith for both students and Byleth, and Authority
   for Byleth [3]. The cheapest Authority Byleth will ever get.
4. **Tea Party.** Support with one unit, and up to +2 Charm for both with good
   topics. Charm drives gambit accuracy, so this is not cosmetic [17].
5. **Sauna** (Expansion Pass). Support, plus a skill-experience boost for both
   units for the rest of the month. One visit per unit per month [3].
6. **Cooking Together.** Support with one unit and 75 to 150 professor
   experience [1].
7. **Tournament.** Gold and weapons. 100 professor experience for a loss, 300
   for a win [1].

> [!NOTE]
> The monastery page's summary list names five activities that cost a point
> and leaves out Tea Party and Sauna. The same page's own Tea Party and Sauna
> sections both state a cost of one point [3]. This guide follows the specific
> sections.

### Experience thresholds

The cumulative professor experience each level needs [1]. The early ranks come
fast and the late ones do not, so the first few months are where the
compounding happens.

| Level | Total experience |
| --- | --- |
| E+ | 100 |
| D | 1,500 |
| D+ | 3,600 |
| C | 6,400 |
| C+ | 10,900 |
| B | 16,300 |
| B+ | 24,000 |
| A | 32,800 |
| A+ | 44,500 |

The student question after instruction dwarfs everything else. At professor
level C and above it pays 1,000 experience, or 1,200 if the student likes the
answer [1]. A good fish pays about 30.

### Renown and statues

How to spend renown, and what to buy first. Renown comes from battles and
quests. Spend it at the four saint statues in the cathedral, from Chapter 5.
Costs are cumulative, so 10,000 renown clears one statue completely. Rewards
carry into New Game+ [40].

| Renown | Cethleann | Cichol | Macuil | Indech |
| --- | --- | --- | --- | --- |
| 200 | Lance +1 | Axe +1 | Sword +1 | Bow +1 |
| 500 | Faith +1 | Authority +1 | Reason +1 | Brawling +1 |
| 1,000 | Experience +5% | Experience +5% | Experience +5% | Experience +5% |
| 2,000 | Class Mastery +1 | Flying +2 | Riding +2 | Heavy Armour +2 |
| 3,000 | Divine Pulse +1 | Divine Pulse +1 | Divine Pulse +1 | Divine Pulse +1 |
| 4,000 | Lance +2 | Axe +2 | Sword +2 | Bow +2 |
| 5,000 | Faith +2 | Authority +2 | Reason +2 | Brawling +2 |
| 7,500 | Experience +10% | Experience +10% | Experience +10% | Experience +10% |
| 10,000 | Luck and Charm cap +5 | Strength and Speed cap +5 | Magic and Dexterity cap +5 | Defence and Resistance cap +5 |

Buy the four **Experience +5%** rewards first. That costs 4,000 renown in total
and raises every unit's level experience for the whole game. Buy the four
Divine Pulse charges next.

> [!NOTE]
> The weapon and skill rewards such as "Axe +1" add experience when Byleth
> **instructs** in that skill [40]. They do not change combat.

---

## Combat basics

The battle rules that decide most fights. Check this section when a map goes
wrong.

**Doubling.** A unit attacks twice when its Attack Speed is **4 or more** above
the target's [32]. Attack Speed is Speed minus a penalty for a weapon too heavy
for the unit's Strength:

```
Attack Speed = Speed − max(0, weapon weight − Strength / 5)
```

Three consequences follow.

- A heavy weapon on a low-Strength unit removes doubling.
- Unequipping a weapon can stop an enemy doubling the unit, which sometimes
  saves it.
- **A combat art never doubles.** The only exception is One-Two Punch [32].
  Neither do Meteor, Bolting, Luna and Bohr Χ [32].

**Physical against magic.** Armoured enemies have high Defence and low
Resistance. A team with only physical damage stalls against them, so keep
magic users in the squad.

**Bows against fliers.** Almost every bow deals bonus damage to flying units
[20]. An archer is the answer to enemy pegasus and wyvern riders.

**Divine Pulse.** Byleth's rewind. It undoes up to 50 turns, and fires
automatically on a game over if charges remain [15]. The charges refill for
each battle [43].

| Source | Charges |
| --- | --- |
| Start of the game | 3 |
| Clearing Chapter 10 | +3 |
| Clearing the Tales of the Red Canyon paralogue | +3 |
| Each of the four saint statues, at 3,000 renown | +1 each |
| **Maximum on Normal and Hard** | **13** |

Figures from [15]. Maddening caps at 10.

**Weapon durability.** Each weapon use costs durability. At 0 the weapon becomes
a Broken or Drained item. It is **not lost**, and the blacksmith can repair it
for half its shop value plus ore [16]. Spells refill every use at the end of
each battle [16]. The Sword of the Creator repairs for 2 Umbral Steel and 2,500
gold, or 5 points per Rest day [3][16].

**Crests.** A Crest is innate and inherited. It gives a random chance of a
bonus on a weapon attack, combat art or spell. It can trigger on a miss but
only applies on a hit. Any Crest bearer can use a Hero's Relic without losing
10 HP after combat [18].

---

## When to grind

Grinding worries most new Hard players, and the answer is short: **on Hard
grinding is capped, and it is rarely needed.** Hard gives about 70% of
Normal's experience against a same-level enemy [19], but players still report
clearing the main story with almost no grinding [51].

**Why grinding is capped.** On Normal, the first two auxiliary battles on a free
day cost nothing, so grinding is unlimited [4]. On Hard and Maddening, **every
auxiliary battle and every paralogue consumes a battle point**. Byleth holds 1
battle point until professor level C+, then 2, then 3 at A+ [1]. With about
four free days a month, a professor at C+ can fight at most eight times, and
only by never exploring. That trade is the real cost of grinding.

> [!NOTE]
> Two pages say an auxiliary battle on Hard costs "an activity point" [4][19].
> The professor level page says battle points govern auxiliary battles and
> paralogues [1], and the monastery page lists Fight as a separate choice from
> Explore [3]. This guide follows the professor level page. The practical
> effect is the same either way: on Hard, nothing about fighting is free.

**Reasons to grind.** Four situations justify a battle over the monastery.

1. **A needed unit is more than two levels behind the squad.** Deploy them in
   an auxiliary battle and let them take the kills.
2. **A class mastery is the goal.** Mastery is counted in combats, not
   experience, so it only comes from fighting [5]. See
   [Class mastery](#class-mastery).
3. **Gold or materials are short.** Auxiliary battles pay gold and monastery
   items, and human bosses drop a bullion.
4. **A paralogue is open.** Always take it. A paralogue costs the same battle
   point as an auxiliary battle, is harder, and pays far better. One
   paralogue decides whether Dedue returns after the timeskip [28].

**Reasons not to.** Two situations make a battle the worse choice.

- Everything clears comfortably [51].
- Professor level is still below C. An Explore day is worth more at that
  stage, because it raises every future month's point budget.

**Cheaper catch-up routes.** Three mechanics raise a lagging unit without a
battle point.

- **Adjutants.** An adjutant gains 50% of the host's level experience, and all
  of its skill and class mastery experience, without a deployment slot [13].
- **Seminars.** Free skill experience for a group [2].
- **The Knowledge Gem.** Doubles skill and class mastery experience for the
  holder [10]. The Experience Gem does the same for level experience.

---

## Changing class

Three Houses has no fixed promotion lines. Any unit can enter any class if it
passes the exam [6]. That freedom is why the system feels unclear, so this
section explains the shape of it first.

### How classes work

What a class gives, and what stays when the unit leaves it.

1. **Level does not reset.** Promotion costs nothing. Certify as soon as an
   exam passes, unless the unit is staying to finish a mastery [6].
2. **A pass is permanent.** A passed exam is never retaken. Switch between any
   passed class from the Inventory menu before a battle or at the start of a
   week [37][41].
3. **A class raises low stats.** Any stat below the new class's base is raised
   to that base [6][37]. The class also grants stat modifiers, and those last
   only while the unit is in the class [37].
4. **Almost every class can use almost every weapon.** Two exceptions only.
   Gauntlets cannot be used on a horse or a flier. Reason and Faith magic only
   work in a magic class [37].
5. **Abilities come in three kinds** [8]:
   - **1 personal ability.** Fixed to the character.
   - **3 class abilities.** Active only while in that class.
   - **5 equipped abilities.** Chosen freely outside battle, from anything the
     unit has learned.

   A unit also equips up to 3 combat arts. Class arts do not count against
   that limit [9].

> [!NOTE]
> Two sources disagree on when the stat raise applies. One says on passing the
> exam [6]. The other says on changing into the class [37]. Neither says
> whether the raised value stays after the unit leaves the class.

### How an exam works

The steps and costs of a class exam. Take exams from the Certification option
on the calendar screen [6].

| Tier | From level | Item needed |
| --- | --- | --- |
| Beginner | 5 | Beginner Seal |
| Intermediate | 10 | Intermediate Seal (Dark Seal for Dark Mage) |
| Advanced | 20 | Advanced Seal |
| Special (Expansion Pass) | 20 | Abyssian Exam Pass |
| Master | 30 | Master Seal, **and professor level C or higher** |

- The exam screen shows a success rate and the suggested skill levels. The
  closer the unit's skills are to the suggestion, the higher the rate [6].
- Below 30% the game refuses the attempt [6].
- **The seal is used up whether the exam passes or fails** [7].
- Each unit may attempt one exam per week [41].

Abyssian Exam Passes come from the Pagan Altar in Abyss for 750 renown each,
without limit [21]. Each of the four Ashen Wolves arrives carrying one [22].

### Class mastery

How mastery works and what it costs. One combat gives one mastery point, even
when the unit did not start the combat [5].

| Class tier | Combats to master |
| --- | --- |
| Noble, Commoner | 20 |
| Beginner | 60 |
| Intermediate | 100 |
| Advanced and Special | 150 |
| Master | 200 |

- The Cethleann statue reward at 2,000 renown adds +1 per combat [40].
- The Knowledge Gem or the Mastermind ability doubles it. Both together triple
  it, not quadruple it [5].
- **Mastery abilities can be equipped in any class** [5].
- **Mastery combat arts from Beginner and Intermediate classes carry over.**
  Those from Advanced classes and above stay locked to that class. Hunter's
  Volley, for example, works only as a Sniper [5].

### Masteries worth planning

Most masteries are minor. These are the ones players build towards, because the
ability outlives the class it came from [5][51].

| Class | Tier | Mastery reward |
| --- | --- | --- |
| Brigand | Intermediate | Death Blow (+6 Strength when initiating) |
| Cavalier | Intermediate | Desperation |
| Mercenary | Intermediate | Vantage |
| Archer | Intermediate | Hit +20 |
| Mage | Intermediate | Fiendish Blow (+6 Magic when initiating) |
| Pegasus Knight | Intermediate | Darting Blow (+6 Attack Speed when initiating) |
| Thief | Intermediate | Steal |
| Grappler | Advanced | Tomebreaker, Fierce Iron Fist |
| Sniper | Advanced | Hunter's Volley (Sniper only) |
| War Master | Master | Quick Riposte, War Master's Strike |

> [!CAUTION]
> Written guides tell every physical unit to master Brigand for Death Blow, and
> every unit to pick up Hit +20. **That advice is written for Maddening.** A
> long-time Hard player calls both close to redundant on Hard [51]. On Hard,
> units fight on the enemy phase often, where Death Blow does nothing, and hit
> rates are already fine. Treat Death Blow as optional on Hard. This guide
> follows the Hard-specific account, because the guide-site claim assumes a
> different difficulty.

---

## Battalions and gambits

Battalions are the largest source of combat power that new players ignore. They
are gated behind the Authority skill, which is easy to miss because no class
requires much of it.

### How battalions work

A battalion is a squad attached to one unit. It grants flat stats and a gambit,
and it takes damage on that unit's behalf [11].

- **Getting one.** Hire battalions with gold at the Battalion Guild, or earn
  them from paralogues and quests [11]. Hire and dismiss them at the guild or
  on the battle preparation screen [45].
- **Equipping.** A unit may equip a battalion at or below its Authority rank
  [11].
- **Movement type.** Infantry, armoured and cavalry units may take any
  battalion. Fliers take flying battalions only [11][42].
- **Stats.** A battalion adds flat attack, hit, critical, avoid, protection,
  resilience and charm. It levels from 1 to 5, and the bonuses grow [11]. The
  experience belongs to the battalion [42][45].
- **Endurance.** A battalion absorbs **half** the damage its unit takes. At 0
  endurance the unit loses both the stat bonus and the gambit [11].
- **Repair.** Endurance does **not** refill after a battle. Replenish it at the
  guild or on the preparation screen, which costs little gold [11][45]. A
  battalion at 0 is never lost [11].

> [!NOTE]
> One guide site says flying battalions cannot be equipped by any non-flying
> class [45]. Two wikis say ground units may equip any battalion [11][42]. This
> guide follows the wikis.

> [!TIP]
> Train Authority on everybody, and aim for about B by the timeskip. Players
> rate a strong battalion as roughly +10 damage, which is more than many
> level-ups give [51]. Sort the battalion list by attack and take the best one
> each unit can hold.

### Gambits

A gambit is the battalion's special attack. Each has a limited number of uses
per battle. Uses refill at the end of the map, and replenishing a battalion
also restores them [12][45].

- A gambit can never be counterattacked, can never land a critical hit, and can
  never double [12].
- Accuracy runs on **Charm**, not Dexterity. The gap between the user's Charm
  and the target's drives the hit rate, capped at ±30 [12].
- A hit applies *rattled*. The target cannot move, loses its battalion bonus,
  and cannot use a gambit [12].
- A gambit only kills its primary target. Others in the area survive at 1 HP
  [12].
- **Gambit Boost.** Allies who could also attack the target add attack and hit,
  scaled by their support rank with the user. Up to three allies plus an
  adjutant count. A pair with no support conversations at all adds nothing
  [12].

Players repeatedly name the same utility gambits as the ones that solve maps:
Stride, Impregnable Wall, Retribution, Blessing and Dance of the Goddess [51].
The movement and defence gambits matter more than the offensive ones.

---

## Adjutants and supports

Adjutants unlock at professor level C. They are the main reason support ranks
matter mechanically.

### Adjutants

An adjutant is an undeployed unit attached to a deployed unit on the deployment
screen. It rides along, trains, and helps in combat [13].

- **Slots by professor level:** 1 at C, 2 at B, 3 at A [1][13].
- **What the adjutant gains:** 50% of the host's level experience, all skill
  experience except Authority, all class mastery experience, and support
  points with the host [13][14].
- **Limits:** a flying host may only take a flying adjutant. An adjutant gives
  no stat bonus to the host. There is no swap mid-battle [13].
- **If the host falls,** the adjutant leaves the field unharmed [13].

The adjutant's own class decides which of three behaviours it gives [13].

| Behaviour | Classes | Effect | None / C / B / A / S |
| --- | --- | --- | --- |
| Follow-Up | Most classes | Extra attack after combat, player phase only | 10 / 20 / 30 / 40 / 50% |
| Guard | Brawler, Armoured Knight, Grappler, Fortress Knight, Great Knight, War Monk, War Cleric | Reduces damage from enemy follow-up attacks, and leaves the host on 1 HP instead of dying | 10 / 20 / 30 / 40 / 50% |
| Heal | Monk, Priest, Bishop, Holy Knight | Heals the host at turn start below 50% HP | 1 / 2 / 3 / 4 / 5 heals |

> [!WARNING]
> Because of a bug, the C+, B+ and A+ support ranks count as **no support** for
> Adjutant Follow-Up, giving only 10%. The bug was fixed in version 1.1.0 and
> came back in 1.2.0 [13]. Plan around full ranks.

### Supports

A support is the bond between two units. It feeds adjutants, gambit boosts,
Linked Attacks and recruiting [14].

- **Ranks** run C, C+, B, B+, A, A+, S. The point thresholds are the same for
  every pair. Only Byleth can reach S [14].
- **Points stop** just before any support whose conversation has not been
  watched. Watch conversations as they appear, or the points are wasted [14].
- **In battle,** a Linked Attack, a Gambit Boost, white magic on an ally and
  finishing a map all give points [14].
- **Out of battle,** meals, tea, gifts, lost items and choir give points with
  Byleth [14].
- **Some supports lock** with story progress or route. Rhea's supports, for
  example, cannot advance after Part 1 [14].

---

## Recruiting students

From Chapter 2, students from the other two houses and the faculty can join
Byleth's house [25]. This is how a roster gap gets fixed. Recruited students
arrive at a level that scales with the chapter, with certifications for preset
classes [25].

### How the check works

What a student asks of Byleth, and how support lowers it. A student needs **one
stat value and one skill rank** from Byleth. A faculty member needs only a
character level. Failing, or declining their offer, locks the option until the
next weekend [36].

Support rank with Byleth lowers both requirements [36].

| Support | Skill rank D → | C → | B → | B+ → |
| --- | --- | --- | --- | --- |
| None | D | C | B | B+ |
| C | D | C | C+ | B |
| C+ | D | D+ | C | C+ |
| B | E+ | D | D+ | D+ |
| B+ | E+ | E+ | D | D+ |
| A | Any | Any | Any | Any |

| Support | Stat 10 → | 15 → | 20 → | 25 → | 30 → |
| --- | --- | --- | --- | --- | --- |
| None | 10 | 15 | 20 | 25 | 30 |
| C | 8 | 12 | 16 | 20 | 24 |
| C+ | 6 | 9 | 12 | 15 | 18 |
| B | 4 | 6 | 8 | 10 | 12 |
| B+ | 2 | 3 | 4 | 5 | 6 |
| A | Any | Any | Any | Any | Any |

> [!TIP]
> **The shortcut that skips all of this.** At B support or higher, a student
> may ask to join on any free weekday. That offer ignores the stat and skill
> requirements completely [36]. Build supports through meals, gifts, lost
> items and tea, and most of the roster recruits itself. The offer is random,
> so a week may bring none or several.

> [!WARNING]
> The shortcut does not work for **Caspar or Ferdinand**. Neither can reach B
> support during Part 1 [36].

> [!NOTE]
> Stat boosts from a class do **not** count towards the requirement, and
> neither do stat-boosting abilities [36]. If a check fails when it should
> pass, change Byleth to Commoner or Noble and try again.

### Requirements table

The stat and skill each student asks of Byleth, at no support [36]. Apply the
discounts above for an existing support rank.

| Character | House | From chapter | Needs |
| --- | --- | --- | --- |
| Ferdinand | Black Eagles | 2 | 10 Dexterity, C Heavy Armour |
| Linhardt | Black Eagles | 2 | 10 Magic, C Reason |
| Caspar | Black Eagles | 2 | 10 Strength, C Brawling |
| Bernadetta | Black Eagles | 2 | 20 Strength, C Bow |
| Dorothea | Black Eagles | 2 | 25 Charm, B Authority |
| Petra | Black Eagles | 2 | 10 Dexterity, C Riding |
| Felix | Blue Lions | 2 | 15 Speed, B+ Sword |
| Ashe | Blue Lions | 2 | 15 Charm, C Lance |
| Sylvain | Blue Lions | 2 | 25 Charm, C Reason. Joins free if Byleth is female |
| Mercedes | Blue Lions | 2 | 15 Magic, C Bow |
| Annette | Blue Lions | 2 | 10 Magic, B Faith |
| Ingrid | Blue Lions | 2 | 15 Dexterity, D Flying |
| Lorenz | Golden Deer | 2 | 20 Charm, C Reason |
| Raphael | Golden Deer | 2 | 20 Strength, C Heavy Armour |
| Ignatz | Golden Deer | 2 | 10 Dexterity, B Authority |
| Lysithea | Golden Deer | 2 | 15 Magic, B Faith |
| Marianne | Golden Deer | 2 | 10 Magic, C Riding |
| Hilda | Golden Deer | 2 | 30 Charm, C Axe. See the note below |
| Leonie | Golden Deer | 2 | 15 Strength, C Lance |
| Catherine | Church | 4 | Level 15 |
| Cyril | Church | 5 | Level 10 |
| Shamir | Church | 6 | Level 15 |
| Flayn | Church | 7 | Joins automatically |
| Hanneman | Church | 8 | Level 15 |
| Manuela | Church | 8 | Level 15 |
| Alois | Church | 11 | Level 15 |
| Seteth | Church | 12 | Joins automatically |
| Gilbert | Church | 13 | Joins automatically, Azure Moon only |

Ferdinand is the awkward one. Heavy Armour is a skill almost nobody trains on
Byleth, and few instructors teach it.

> [!NOTE]
> A Black Eagles player cannot recruit Hilda, Catherine or Cyril before
> Chapter 12, and only after siding with the Church. Catherine, Cyril and
> Shamir then join automatically [25][36]. None of the three can join on
> Crimson Flower.

### Who leaves or cannot join

Characters the player cannot have, and characters who leave at the timeskip
depending on route [25][26][29].

- **Never recruitable:** Edelgard, Hubert, Dimitri, Dedue and Claude.
- **Recruiting closes** at the end of Chapter 12 on Silver Snow, Azure Moon and
  Verdant Wind, and at the end of Chapter 11 on Crimson Flower [25][26].
- **Siding with the Church** (Silver Snow) loses Edelgard and Hubert
  permanently [26].
- **Crimson Flower** loses Flayn at the end of Chapter 11, and Seteth never
  joins [26].
- **Dedue** leaves at the end of Part 1. He returns in Azure Moon Chapter 16
  only if his paralogue, *War for the Weak*, was cleared. It is open from
  Chapter 6 to Chapter 11 [28].
- **Ashe** deserts after Chapter 12 on Silver Snow and Verdant Wind. If he was
  recruited in Part 1, defeat him in Chapter 15 and choose "Persuade" to bring
  him back [29].
- **Lorenz** deserts after Chapter 12 on Silver Snow and Azure Moon. If he was
  recruited in Part 1, defeat him in Chapter 16 and choose "Persuade" [29].

### Expansion Pass recruits

The Ashen Wolves and Anna come with the Expansion Pass. Jeritza comes with a
free update.

**The Ashen Wolves.** Each one unlocks after a different chapter of the
*Cindered Shadows* side story [22].

| Wolf | Unlocked by clearing *Cindered Shadows* chapter |
| --- | --- |
| Constance | 2 |
| Balthus | 4 |
| Hapi | 5 |
| Yuri | 6 |

- Talk to them at the monastery. No stat, skill or support requirement applies
  [22][46].
- They can join from main-story Chapter 2 until the end of Part 1 only [46].
- They join at level 3 in Chapter 2, plus 2 levels per chapter. Level 11 in
  Chapter 6, level 23 in Chapter 12 [23].
- Their starting class also changes with the chapter. In Chapter 2 they join as
  Commoner or Noble. From Chapter 3 Balthus joins as a Fighter and Constance
  and Hapi as Monks, with free D ranks. So waiting one chapter helps those
  three [23][25].

> [!CAUTION]
> Players describe *Cindered Shadows* as harder than the main game [51]. Chapter
> 1 only opens the Abyss. The Wolves need later chapters, so budget for the
> side story's harder maps [22].

**Anna.** Talk to her at the marketplace from Chapter 3. She joins at level 5
as a Myrmidon, with no requirements [24]. One source says she can also be
recruited in Part 2 [47].

**Jeritza.** Crimson Flower only. He joins automatically at the start of
Chapter 13 as a level 27 Death Knight. He came with free update 1.1.0, so no
Expansion Pass is needed [22].

---

## Common mistakes

The failures players name most often [51]. When something feels wrong mid-run,
check this list before anything else.

1. **Splitting up the army.** The most reported cause of a lost unit is one
   character sent too far ahead. Move as a block, and let the enemy come.
2. **Ignoring battalions and Authority.** No class demands Authority, so it
   quietly never gets trained, and the units miss about +10 damage.
3. **Not using the Dancer.** Giving the best unit a second action every turn is
   usually worth more than anything the Dancer could do alone.
4. **Letting motivation collapse.** A unit that starts the week at 50 or less
   can get "Bad" instruction results at half value [2]. Spend a Rest day, or
   serve more meals.
5. **Spreading skill training too thin.** Pick the two skills the target class
   needs. Everything else is waste.
6. **Skipping repairs.** Enemies on Hard take more hits to kill, so weapon
   durability and battalion endurance run out faster than on Normal.
7. **Training too many units.** About 10 units deploy on most Part 1 maps. See
   [Deployment slots](#deployment-slots).
8. **Leaving support conversations unwatched.** Points stop at the next
   unwatched conversation [14].
9. **Following Maddening advice.** Maddening guides assume a unit never fights
   on the enemy phase and rarely doubles. Neither assumption holds on Hard.

---

## Windows that close

The one-way content in the game. Nothing here ruins a run, but each is easier
to catch than to regret.

- **Recruiting** closes at the end of Chapter 12, or Chapter 11 on Crimson
  Flower [25][26]. Settle the roster before then. The Ashen Wolves close at
  the end of Part 1 too [46].
- **The Dancer.** The White Heron Cup is in Chapter 9, Ethereal Moon. Pick the
  entrant by the end of the second week. Winning takes **13 Charm**. Talking
  to the entrant starts a practice worth a permanent **+5 Charm**, once, at no
  activity point cost [27][44][48]. Losing the cup means no Dancer for the
  whole run [44].
- **Part 1 paralogues** close after Chapter 11, except *Dividing the World*
  [26]. Dedue's return depends on one of them [28].
- **The Black Eagles route split** happens in Chapter 11, Pegasus Moon [26].
  1. Reach **C+ support** with Edelgard.
  2. Talk to her that month and accept the trip to Enbarr. The trip skips the
     next instruction day, so taking it on the 22nd costs nothing.
  3. At the end of Chapter 11, protect Edelgard.

  Refusing the trip, lacking the support, or not talking to her that month
  locks the run into Silver Snow.
- **Crimson Flower church battalions** can only be bought until Chapter 11
  [26].
- **Lost items** spawn monthly from Chapter 3 [3]. Pick them up while passing.
  They can be returned at any later point.
- **The Sacred Items Set** sits on Byleth's bed with the Expansion Pass. It
  gives +7 HP, +3 Strength, +3 Speed and +2 Movement, once per playthrough
  [22].

---

## Progress checks

Targets to compare against after a session. They show whether a run is on pace.
They are guidelines, not requirements.

| Check | Target |
| --- | --- |
| Professor level | C by roughly Chapter 5 or 6. That unlocks adjutants, 5 activity points, 5,000 gold a month and Master class exams [1] |
| Renown spending | The four Experience +5% rewards bought (4,000 renown), then the Divine Pulse charges [40] |
| Roster size | Settled on 10 to 12 trained units by about Chapter 8 |
| Authority | Around B on most units by the timeskip [51] |
| Divine Pulse | 13 charges by late game on Hard [15] |
| Skill planning | Each trained unit has two named skills and a named target class |

---

## Team building

A balanced team clears every map on Hard. Nothing is strictly unviable at this
difficulty, so read this section as a shape to aim at, not a rule. Each
character's role is in [Character reference](#character-reference).

### Deployment slots

How many units can deploy, including forced units such as Byleth. **Difficulty
never changes the count** [30].

| Chapters | Slots |
| --- | --- |
| 1 | 5 |
| 2 | 9 or 10 |
| 3–10 | 10 |
| 11 | 9 |
| 12 | 10 or 11, by route |
| 13–17 | 9 to 11 |
| 18 to the end | 10 to 12. Every route's final map allows 12 |

Figures from [30]. On the routes that share maps, Silver Snow allows one unit
fewer than Azure Moon and Verdant Wind, because it has no house leader.
Adjutants add up to three more units without a slot [13].

Train **about 10 to 12** units seriously and bench the rest. Experience is
scarcer on Hard, so twenty half-built units is worse than eleven finished ones.

### Roles to cover

The jobs a team needs done. The counts below are this guide's own shape, sized
to 10 slots. One unit often covers two roles, such as a Wyvern Rider who is
both flier and physical damage.

| Role | How many | What it does |
| --- | --- | --- |
| **Tank** | 1 to 2 | Stands in the open on the enemy phase and kills what attacks it. Wants high Defence or high Avoid, plus Vantage or Wrath. Usually a heavy armour class |
| **Physical damage** | 3 to 4 | Kills one target on the player phase. Wants combat arts and "blow" abilities |
| **Magic damage** | 2 | Kills armoured enemies, which have low Resistance. Reason magic |
| **Archer** | 1 | Attacks from range 2 and deals bonus damage to fliers [20] |
| **Healer** | 2 | Faith magic. At least one with Physic for range. A Bishop doubles white magic uses |
| **Flier** | 1 to 2 | Ignores terrain and carries the map. Pegasus and wyvern classes |
| **Dancer** | 1 | Gives one ally an extra turn. Only one per playthrough [27] |

Cavalry classes, such as Paladin or Bow Knight, add **Canto**: the unit can
move again after acting. Flying classes add Canto and also ignore terrain.
Those two traits are why mounted and flying classes dominate most tier lists,
more than raw stats do.

> [!IMPORTANT]
> Take the Dancer seriously. Players report that new players skip it and then
> find maps slow [51]. The Dancer can be any student of the player's own house
> with enough Charm. See [Windows that close](#windows-that-close).

### Real constraints

The only hard limits on team building.

- Fliers may equip **flying battalions only** [11].
- Gauntlets do not work on a horse or a flier [37].
- Reason and Faith magic work only in magic classes [37].
- Several classes are gender-locked. Male only: Brawler, Dark Mage, Hero,
  Grappler, Dark Bishop, War Master, War Monk. Female only: Pegasus Knight,
  Falcon Knight, Gremory, Dark Flier, Valkyrie, War Cleric [38].

---

## Character reference

Every playable character's skill aptitudes, the classes the game suggests, and
the team role those classes point to.

- **Strong** skills gain more experience, and **weak** ones less.
- A **budding talent** starts neutral or weak and becomes a strength once
  unlocked, which also grants an ability or combat art. Unlock it with twelve
  instructions in that skill. The first star appears at four. Byleth is the
  exception: six faculty training sessions, one star every two [2][35].
- **Game suggests** lists the default study goal and the classes each
  character asks for in their goal-change requests [2]. That is the closest
  thing the game has to an intended class, and a safe first answer when unsure.
- **Role** uses the roles in [Roles to cover](#roles-to-cover). It reads the
  suggested classes: a heavy armour suggestion means Tank, a flying class means
  Flier. The first role listed is the main one.

> [!NOTE]
> The role is a starting point, not a rule. Any unit can take any class, so a
> different class plan gives a different role. Use
> [Class reference](#class-reference) to see the role of any class. A role in
> *italics* comes from the character's strengths, because the game suggests no
> class for them.

### Black Eagles

Edelgard's house. Magic-heavy, with three of the strongest Reason users in the
game.

| Character | Strong | Weak | Budding talent | Game suggests | Role |
| --- | --- | --- | --- | --- | --- |
| Edelgard | Sword, Axe, Authority, Armour | Bow, Faith | Reason | Default Axe and Authority. Lord, heavy armour. Unique: Armored Lord, then Emperor | Tank, physical damage |
| Hubert | Bow, Reason, Authority | Axe, Faith, Flying | Lance | Default Reason and Authority. Magic classes, cavalry, Sniper | Magic damage |
| Ferdinand | Sword, Lance, Axe, Riding | — | Heavy Armour | Default Lance and Axe. Cavalry, Great Knight, heavy armour | Physical damage (cavalry), tank |
| Linhardt | Reason, Faith | Axe, Brawling | — | Default Reason and Faith. Bishop, magic classes | Healer, magic damage |
| Caspar | Axe, Brawling | Bow, Reason, Authority | — | Default Axe and Brawling. Warrior, Grappler, War Master | Physical damage |
| Bernadetta | Lance, Bow | Sword, Axe, Brawling, Armour | Riding | Default Lance and Bow. Sniper, cavalry | Archer |
| Dorothea | Sword, Reason | Faith, Riding, Flying | Faith | Default Sword and Reason. Warlock, Priest or Bishop, sword classes | Magic damage, healer |
| Petra | Sword, Axe, Bow, Flying | Reason, Faith | — | Default Sword and Axe. Thief or Assassin, Wyvern Rider | Physical damage, flier |

### Blue Lions

Dimitri's house. Physical and lance-heavy, with two dedicated magic users.

| Character | Strong | Weak | Budding talent | Game suggests | Role |
| --- | --- | --- | --- | --- | --- |
| Dimitri | Sword, Lance, Authority | Axe, Reason | Riding | Default Lance and Authority. Lord, cavalry. Unique: High Lord, then Great Lord | Physical damage |
| Dedue | Lance, Axe, Brawling, Armour | Faith, Riding, Flying | — | Default Axe and Brawling. Heavy armour, Grappler | Tank, physical damage |
| Felix | Sword, Bow, Brawling | Reason, Authority | Reason | Default Sword and Brawling. Swordmaster, Sniper, Mortal Savant | Physical damage, archer |
| Mercedes | Reason, Faith | Sword, Lance, Axe, Armour | Bow | Default Reason and Faith. Bishop, Warlock | Healer, magic damage |
| Ashe | Axe, Bow | Reason | Lance | Default Axe and Bow. Sniper, Wyvern Rider, cavalry | Archer, flier |
| Annette | Axe, Reason, Authority | Bow, Armour | — | Default Reason and Authority. Warlock, Warrior | Magic damage |
| Sylvain | Lance, Axe, Riding | Bow | Reason | Default Lance and Axe. Cavalry, Great Knight, magic classes | Physical damage (cavalry), tank |
| Ingrid | Sword, Lance, Riding, Flying | — | — | Default Sword and Lance. Pegasus Knight, cavalry, sword classes | Flier, physical damage |

### Golden Deer

Claude's house. The most mixed roster. Every Golden Deer student stays on the
Verdant Wind route [29].

| Character | Strong | Weak | Budding talent | Game suggests | Role |
| --- | --- | --- | --- | --- | --- |
| Claude | Sword, Bow, Authority, Flying | Lance, Faith | Axe | Default Bow and Authority. Lord, Wyvern Rider. Unique: Wyvern Master, then Barbarossa | Flier, archer |
| Lorenz | Lance, Reason, Riding | Brawling | — | Default Lance and Reason. Cavalry, Dark Knight | Physical damage (cavalry), magic damage |
| Raphael | Axe, Brawling, Armour | Bow, Reason, Riding | — | Default Axe and Brawling. War Master, heavy armour, Hero | Physical damage, tank |
| Lysithea | Reason, Faith, Authority | Sword, Lance, Axe, Armour | Sword | Default Reason and Authority. Warlock, Gremory | Magic damage |
| Ignatz | Sword, Bow, Authority | Flying | Reason | Default Sword and Bow. Sniper, Thief or Assassin, Mortal Savant | Archer |
| Marianne | Sword, Faith, Riding, Flying | Brawling, Armour | Lance | Default Sword and Faith. Bishop, cavalry, Holy Knight, flying classes | Healer, flier |
| Hilda | Lance, Axe | Faith, Authority | Heavy Armour | Default Lance and Axe. Warrior, flying classes | Physical damage, flier |
| Leonie | Lance, Bow, Riding | — | — | Default Lance and Bow. Cavalry, Bow Knight | Physical damage (cavalry), archer |

### Church and faculty

Byleth and the faculty. Faculty recruit on a level check rather than a skill
check, so they are the easiest additions. Most ask only for their default
goal, so most roles here come from their strengths.

| Character | Strong | Weak | Budding talent | Game suggests | Role |
| --- | --- | --- | --- | --- | --- |
| Byleth | Sword, Brawling, Authority | — | Faith | No goal requests. Unique: Enlightened One | Physical damage, healer |
| Seteth | Sword, Lance, Axe, Authority, Flying | Riding | — | Default Lance and Authority | *Flier, physical damage* |
| Flayn | Lance, Faith | Armour, Riding | Reason | Default Lance and Faith. Bishop, Gremory | Healer, magic damage |
| Cyril | Lance, Axe, Bow, Riding, Flying | Reason, Faith | — | Default Axe and Bow. Wyvern Rider, Bow Knight | Archer, flier |
| Catherine | Sword, Brawling | Reason | — | Default Sword and Brawling | *Physical damage* |
| Shamir | Lance, Bow | Faith | — | Default Lance and Bow | *Archer* |
| Alois | Axe, Brawling, Armour | Reason, Flying | — | Default Axe and Brawling | *Physical damage, tank* |
| Gilbert | Lance, Axe, Armour, Riding | — | — | No goal requests | *Tank* |
| Hanneman | Bow, Reason, Riding | Armour, Flying | — | Default Bow and Reason | *Magic damage* |
| Manuela | Sword, Faith, Flying | Reason, Armour | — | Default Sword and Faith | *Healer* |

### Expansion Pass characters

The Ashen Wolves, Anna and Jeritza. See
[Expansion Pass recruits](#expansion-pass-recruits) for how each one joins.

| Character | Strong | Weak | Budding talent | Game suggests | Role |
| --- | --- | --- | --- | --- | --- |
| Yuri | Sword, Reason, Faith, Authority | Lance, Axe, Riding, Flying | Bow | Default Sword and Authority. Trickster, Thief, Assassin | Physical damage |
| Balthus | Sword, Axe, Brawling, Faith, Armour | Lance, Bow, Flying | Reason | Default Axe and Brawling. War Monk, War Master, Fortress Knight | Physical damage, tank |
| Constance | Sword, Reason, Authority, Flying | Axe, Armour | Brawling | Default Reason and Authority. Dark Flier, War Cleric, Swordmaster | Magic damage, flier |
| Hapi | Reason, Riding, Flying | Brawling, Authority, Armour | Axe | Default Lance and Reason. Dark Knight, Valkyrie, Wyvern Rider | Magic damage (cavalry) |
| Anna | Sword, Axe, Bow, Faith | Reason, Authority | Riding | Default Sword and Bow. Sword classes, Great Knight | Physical damage, tank |
| Jeritza | Sword, Lance, Brawling, Riding | Faith, Authority | Flying | Default Lance and Sword. Unique: Death Knight, his class on joining | Physical and magic damage (cavalry) |

> [!TIP]
> A budding talent turns a weakness into a strength. Dorothea, Felix and
> Lysithea all have a budding talent on a skill that starts as a weakness, so
> the first few
> instructions feel wasteful and then abruptly pay off. Commit to twelve or do
> not start.

---

## Class reference

Every certifiable class, with the skill levels the exam suggests and the team
role the class fills. The classes unique to one character are in
[Unique classes](#unique-classes). Suggested levels are not strict minimums. A unit can pass
below them at a lower success rate, but not below 30% [6][38].

### Beginner classes

Available from level 5 with a Beginner Seal. These exist mainly as a route to
their masteries and an early stat boost.

| Class | Suggested | Proficient in | Mastery | Role |
| --- | --- | --- | --- | --- |
| Myrmidon | Sword D | Sword | Speed +2, Swap | Physical damage |
| Soldier | Lance D | Lance | Defence +2, Reposition | Physical damage |
| Fighter | Axe, Bow or Brawling D | Axe, Bow, Brawling | Strength +2, Shove | Physical damage, archer |
| Monk | Reason or Faith D | Reason, Faith | Magic +2, Draw Back | Magic damage, healer |

### Intermediate classes

Available from level 10 with an Intermediate Seal. This tier holds the most
valuable masteries in the game.

| Class | Suggested | Proficient in | Mastery | Role |
| --- | --- | --- | --- | --- |
| Lord (house leaders) | Sword D+, Authority C | Sword, Lance, Authority | Resistance +2, Subdue | Physical damage |
| Mercenary | Sword C | Sword, Axe | Vantage | Physical damage |
| Thief | Sword C | Sword, Bow | Steal | Physical damage |
| Armoured Knight | Axe C, Heavy Armour D | Lance, Axe, Heavy Armour | Armoured Blow | Tank |
| Cavalier | Lance C, Riding D | Sword, Lance, Riding | Desperation | Physical damage (cavalry) |
| Brigand | Axe C | Axe, Brawling | Death Blow | Physical damage |
| Archer | Bow C | Sword, Bow | Hit +20 | Archer |
| Brawler (male) | Brawling C | Axe, Brawling | Unarmed Combat | Physical damage |
| Mage | Reason C | Reason, Faith | Fiendish Blow | Magic damage |
| Dark Mage (male) | Reason C | Reason, Faith | Poison Strike | Magic damage |
| Priest | Faith C | Reason, Faith | Miracle | Healer |
| Pegasus Knight (female) | Lance C, Flying D | Sword, Lance, Flying | Darting Blow, Triangle Attack | Flier |

### Advanced classes

Available from level 20 with an Advanced Seal. Most units spend the middle of
the game here.

| Class | Suggested | Proficient in | Mastery | Role |
| --- | --- | --- | --- | --- |
| Hero (male) | Sword B, Axe C | Sword, Axe | Defiant Strength | Physical damage |
| Swordmaster | Sword A | Sword | Astra | Physical damage |
| Assassin | Sword B, Bow C | Sword, Bow | Lethality, Assassinate | Physical damage |
| Fortress Knight | Axe B, Heavy Armour B | Lance, Axe, Heavy Armour | Pavise | Tank |
| Paladin | Lance B, Riding B | Sword, Lance, Riding | Aegis | Physical damage (cavalry) |
| Wyvern Rider | Axe B, Flying C | Lance, Axe, Flying | Seal Defence | Flier, physical damage |
| Warrior | Axe A | Axe | Wrath | Physical damage |
| Sniper | Bow A | Bow | Hunter's Volley | Archer |
| Grappler (male) | Brawling A | Brawling | Tomebreaker, Fierce Iron Fist | Physical damage |
| Warlock | Reason A | Reason, Faith | Bowbreaker | Magic damage |
| Dark Bishop (male) | Reason A, plus Dark Mage certification | Reason, Faith | Lifetaker | Magic damage |
| Bishop | Faith A | Reason, Faith | Renewal | Healer |

### Master classes

Available from level 30 with a Master Seal, and only at professor level C or
higher. These are the end-state classes for most of the roster.

| Class | Suggested | Proficient in | Mastery | Role |
| --- | --- | --- | --- | --- |
| Falcon Knight (female) | Sword C, Lance A, Flying B+ | Sword, Lance, Flying | Defiant Avoid | Flier, physical damage |
| Wyvern Lord | Lance C, Axe A, Flying A | Lance, Axe, Flying | Defiant Critical | Flier, physical damage |
| Mortal Savant | Sword A, Reason B+ | Sword, Reason | Warding Blow | Physical and magic damage |
| Great Knight | Axe B+, Heavy Armour A, Riding B+ | Lance, Axe, Heavy Armour | Defiant Defence | Tank (cavalry) |
| Bow Knight | Lance C, Bow A, Riding A | Lance, Bow, Riding | Defiant Speed | Archer (cavalry) |
| Dark Knight | Lance C, Reason B+, Riding A | Lance, Reason, Riding | Seal Resistance | Magic damage (cavalry) |
| Holy Knight | Lance C, Faith B+, Riding A | Lance, Faith, Riding | Defiant Resistance | Healer (cavalry) |
| War Master (male) | Axe A, Brawling A | Axe, Brawling | Quick Riposte, War Master's Strike | Physical damage |
| Gremory (female) | Reason A, Faith A | Reason, Faith | Defiant Magic | Magic damage, healer |

### Special classes

Expansion Pass classes. Available from level 20 with an Abyssian Exam Pass
[21].

| Class | Suggested | Proficient in | Mastery | Role |
| --- | --- | --- | --- | --- |
| Trickster | Sword B, Faith B, plus Thief certification | Sword, Reason, Faith | Duelist's Blow, Foul Play | Physical damage |
| War Monk (male) / War Cleric (female) | Brawling B+, Faith C+ | Axe, Brawling, Faith | Brawl Avoid +20, Pneuma Gale | Physical damage, healer |
| Dark Flier (female) | Reason B+, Flying C | Sword, Reason, Flying | Transmute | Magic damage, flier |
| Valkyrie (female) | Reason B, Riding B | Reason, Faith, Riding | Uncanny Blow | Magic damage (cavalry) |

> [!WARNING]
> One class page lists the Dark Flier's class abilities as "Fistfaire, Unarmed
> Combat, Heal" [38]. That is the War Monk row repeated. The Dark Flier page
> gives Canto, Black Tomefaire and Transmute [21]. This guide follows the Dark
> Flier page.

### Unique classes

Classes that belong to one character each. Apart from Lord, none of them has an
exam or needs a seal. The story grants them at fixed points [6][33].

- **The Part 2 lord classes appear only on that lord's own route.** On other
  routes the lord is an enemy or leaves the army [33].
- **Each class joins the unit's passed classes** [6]. It gives stats and
  abilities like any other class while the unit is in it.
- **Mastery works as usual.** The Part 2 advanced lord classes take 150
  combats to master, and the master-tier ones take 200 [33].

| Class | Who | Granted | Proficient in | Innate abilities | Mastery | Role |
| --- | --- | --- | --- | --- | --- | --- |
| Lord | Edelgard, Dimitri, Claude | Exam: Sword D+, Authority C, Intermediate Seal | Sword, Lance, Authority | Charm | Resistance +2, Subdue | Physical damage |
| Enlightened One | Byleth | End of Chapter 10, every route | Sword, Brawling, Faith, Authority | Swordfaire, Terrain Resistance | Sacred Power | Physical damage, healer |
| Armored Lord | Edelgard | Start of Crimson Flower Chapter 13 | Axe, Authority, Heavy Armour | Charm, Axefaire | Pomp & Circumstance | Tank, physical damage |
| Emperor | Edelgard | Start of Crimson Flower Chapter 16 | Axe, Authority, Heavy Armour | Charm, Axefaire | Flickering Flower | Tank, physical damage |
| High Lord | Dimitri | Start of Azure Moon Chapter 13 | Sword, Lance, Authority | Charm, Lancefaire | Pomp & Circumstance | Physical damage |
| Great Lord | Dimitri | Start of Azure Moon Chapter 16 | Sword, Lance, Authority | Charm, Lancefaire | Paraselene | Physical damage |
| Wyvern Master | Claude | Start of Verdant Wind Chapter 13 | Bow, Authority, Flying | Charm, Bowfaire, Canto | Pomp & Circumstance | Flier, archer |
| Barbarossa | Claude | Start of Verdant Wind Chapter 17 | Bow, Authority, Flying | Charm, Bowfaire, Canto | Wind God | Flier, archer |
| Death Knight | Jeritza | His class when he joins, Crimson Flower only | Lance, Reason, Riding | Canto, Lancefaire | Counterattack | Physical and magic damage (cavalry) |
| Dancer | The White Heron Cup winner | Winning the cup in Chapter 9 | — | Sword Avoid +20, Sword Dance | — | Dancer |

Sources: [33] for every row except Dancer, which comes from [27][31].

**How the lord classes play.** Each one gives +2 Charm while the unit is in
it, which helps gambit accuracy [6].

- **Armored Lord and Emperor** are armoured classes. The Emperor gives +8
  Defence and −4 Speed. The Armored Lord page lists a weakness to
  armour-effective weapons [33].
- **High Lord and Great Lord** are infantry with no weakness. The Great Lord
  gives +4 Speed and +2 Movement [33].
- **Wyvern Master and Barbarossa** are fliers with Canto. They take bonus
  damage from bows. The Barbarossa gives +4 Movement when mounted [33].
- **Enlightened One** has no weakness to any weapon type. It is the only class
  with four proficiencies, and it can use both brawling and magic [33].

> [!NOTE]
> Players report that a lord can switch to another passed class and back to
> the unique class freely. No data source states this directly. The wiki says
> only that the lords "gain access" to their classes [6].

---

## Choosing a house

Read this once, before the prologue choice. The choice is permanent within a
playthrough. It decides which eight students join free, which route follows,
and which characters the player cannot have.

| House | Leader | Roster | Notes |
| --- | --- | --- | --- |
| Black Eagles | Edelgard | Magic-heavy | The only house with a route split. Fewer paralogues and fewer recruitable characters than the other two [52] |
| Blue Lions | Dimitri | Physical, lance and cavalry | The most commonly recommended first route [52] |
| Golden Deer | Claude | Mixed, bow-leaning | Every Golden Deer student stays on Verdant Wind [29] |

Blue Lions or Golden Deer suit a first Hard run. The Black Eagles roster leans
on magic, which makes the early chapters harder. Its route split also adds a
decision that is hard to judge on a blind playthrough [52].

> [!NOTE]
> The house choice does not lock out most characters. Every student except
> Edelgard, Hubert, Dimitri, Dedue and Claude can join any house, and the
> B-support shortcut makes that easy [36]. Pick the house for its leader and
> story, not for statistics.

> [!IMPORTANT]
> On Black Eagles, the route split needs C+ support with Edelgard and a
> conversation with her in Chapter 11 [26]. Missing it gives Silver Snow with
> no warning. See [Windows that close](#windows-that-close).

---

## Sources

Researched against the final version of the game, which is no longer patched.
The original research was on 2026-09-20. The systems, deployment, recruiting
and role research was added on 2026-09-27.

### Where sources disagree

Points where the sources conflict, and which one this guide follows.

| Subject | Disagreement | This guide follows |
| --- | --- | --- |
| Death Blow and Hit +20 | Guide sites call them near-mandatory. A long-time Hard player calls both close to redundant on Hard [51] | The Hard-specific account. The guide-site claim assumes Maddening |
| Weekly goal experience | One table lists 28 neutral and 32 strength [34] | Those are Normal values. Hard is 24 and 28 [2] |
| Auxiliary battle cost on Hard | "Activity point" [4][19] against battle points [1] | Battle points. The effect is the same: nothing about fighting is free |
| Tea Party and Sauna cost | The monastery page's summary list omits them. Its own sections give one point each [3] | The specific sections |
| Flying battalions on ground units | Not allowed [45] against allowed [11][42] | Allowed, following both wikis |
| When a class raises low stats | On passing the exam [6] against on changing class [37] | Neither. The guide states both |
| Dark Flier abilities | The class detail page repeats the War Monk row [38] | The Dark Flier page: Canto, Black Tomefaire, Transmute [21] |

### Not verified

Claims that rest on a single source or on implication. Treat them as likely
rather than confirmed.

- **Motivation carries between weeks.** Implied by [2], not stated.
- **Skill levels, supports and professor level never drop.** No source
  describes a loss, and none states outright that there is none.
- **Whether a battalion can move freely between units,** and whether it
  survives a class change into a flying class. No source states either.
- **Whether a raised base stat stays after leaving the class.**
- **The weight part of the Attack Speed formula.** The threshold of 4 is
  confirmed [32]. The weight penalty comes from the earlier version of this
  guide and was not re-checked.
- **Switching a lord out of a unique class and back.** Player reports only.
- **Anna in Part 2.** One source only [47].
- **Classic or Casual cannot be changed.** One source only [50].

<details open>
<summary><strong>Fire Emblem Wiki</strong> — game data, read as raw wikitext</summary>

1. [Professor level](https://fireemblemwiki.org/wiki/Professor_level?action=raw) — point pools, experience thresholds and per-activity experience
2. [Lesson](https://fireemblemwiki.org/wiki/Lesson?action=raw) — instruction, motivation, goals by difficulty, group tasks, seminars, budding talents, and the goal-change request table behind every "Game suggests" entry
3. [Garreg Mach Monastery](https://fireemblemwiki.org/wiki/Garreg_Mach_Monastery?action=raw) — free-day options, activity costs, gifts and the Owl Feather, lost items, sauna
4. [Skirmish](https://fireemblemwiki.org/wiki/Skirmish?action=raw) — auxiliary battle cost by difficulty
5. [Class mastery](https://fireemblemwiki.org/wiki/Class_mastery?action=raw) — combat counts, rewards, which arts carry over
6. [Class change (Switch games)](https://fireemblemwiki.org/wiki/Class_change/Nintendo_Switch_games?action=raw) — exam tiers, success rate, base stat raise, level kept
7. [Intermediate Seal](https://fireemblemwiki.org/wiki/Intermediate_Seal?action=raw) — seal used up on a failed exam
8. [Skills](https://fireemblemwiki.org/wiki/Skills?action=raw) — personal, class and equipped ability slots
9. [Combat art](https://fireemblemwiki.org/wiki/Combat_art?action=raw) — three equipped arts
10. [Weapon level](https://fireemblemwiki.org/wiki/Weapon_level?action=raw) — skill levels, Knowledge Gem and Mastermind
11. [Battalion](https://fireemblemwiki.org/wiki/Battalion?action=raw) — hiring, Authority gate, movement rules, endurance
12. [Gambit](https://fireemblemwiki.org/wiki/Gambit?action=raw) — uses, hit formula, rattled, Gambit Boost
13. [Adjutant](https://fireemblemwiki.org/wiki/Adjutant?action=raw) — slots, experience share, behaviours, the support-rank bug
14. [Support](https://fireemblemwiki.org/wiki/Support?action=raw) — thresholds, point sources, caps and locks
15. [Divine Pulse](https://fireemblemwiki.org/wiki/Divine_Pulse?action=raw) and [Turn rewind](https://fireemblemwiki.org/wiki/Turn_rewind?action=raw) — charge sources and maximums
16. [Durability](https://fireemblemwiki.org/wiki/Durability?action=raw) and [Forge](https://fireemblemwiki.org/wiki/Forge?action=raw) — broken weapons, repair costs, spell refill
17. [Tea Party](https://fireemblemwiki.org/wiki/Tea_Party?action=raw)
18. [Crests](https://fireemblemwiki.org/wiki/Crests?action=raw)
19. [Difficulty](https://fireemblemwiki.org/wiki/Difficulty?action=raw) — lowering difficulty, Hard experience rate
20. [Bow](https://fireemblemwiki.org/wiki/Bow?action=raw) — bonus damage to fliers
21. [Dark Flier](https://fireemblemwiki.org/wiki/Dark_Flier?action=raw) and [Abyssian Exam Pass](https://fireemblemwiki.org/wiki/Abyssian_Exam_Pass?action=raw)
22. [Downloadable content in Three Houses](https://fireemblemwiki.org/wiki/Downloadable_content_in_Fire_Emblem:_Three_Houses?action=raw) — Ashen Wolves unlocks, Jeritza, Sacred Items Set
23. Ashen Wolves stats: [Yuri](https://fireemblemwiki.org/wiki/Yuri/Stats?action=raw), [Balthus](https://fireemblemwiki.org/wiki/Balthus/Stats?action=raw), [Constance](https://fireemblemwiki.org/wiki/Constance/Stats?action=raw), [Hapi](https://fireemblemwiki.org/wiki/Hapi/Stats?action=raw) — join level and class by chapter
24. [Anna (Three Houses)](https://fireemblemwiki.org/wiki/Anna_(Three_Houses)?action=raw)
25. [Familiar Scenery](https://fireemblemwiki.org/wiki/Familiar_Scenery?action=raw) — Chapter 2, the recruiting window, Hilda
26. [Throne of Knowledge](https://fireemblemwiki.org/wiki/Throne_of_Knowledge?action=raw) — Chapter 11, the route split, departures, Part 1 deadlines
27. [The Cause of Sorrow](https://fireemblemwiki.org/wiki/The_Cause_of_Sorrow?action=raw) — Chapter 9, the White Heron Cup and the Charm practice
28. [War for the Weak](https://fireemblemwiki.org/wiki/War_for_the_Weak?action=raw) — Dedue's paralogue
29. [Ashe](https://fireemblemwiki.org/wiki/Ashe?action=raw) and [Lorenz](https://fireemblemwiki.org/wiki/Lorenz_(Three_Houses)?action=raw) — desertion and persuasion by route
30. Chapter and map pages, from the [list of chapters](https://fireemblemwiki.org/wiki/List_of_chapters_in_Fire_Emblem:_Three_Houses?action=raw) — the `ally=` deployment count on each map, for example [The Magdred Ambush](https://fireemblemwiki.org/wiki/Mutiny_in_the_Mist/The_Magdred_Ambush?action=raw), [Conflict in the Holy Tomb](https://fireemblemwiki.org/wiki/Throne_of_Knowledge/Conflict_in_the_Holy_Tomb?action=raw), [The Battle of Garreg Mach](https://fireemblemwiki.org/wiki/To_War/The_Battle_of_Garreg_Mach?action=raw), [Ambush at Ailell](https://fireemblemwiki.org/wiki/Valley_of_Torment/Ambush_at_Ailell?action=raw), [Following a Dream](https://fireemblemwiki.org/wiki/Following_a_Dream/The_Final_Battle?action=raw), [Oath of the Dagger](https://fireemblemwiki.org/wiki/Oath_of_the_Dagger?action=raw) and [To the End of a Dream](https://fireemblemwiki.org/wiki/To_the_End_of_a_Dream?action=raw)
31. [Dancer](https://fireemblemwiki.org/wiki/Dancer?action=raw)
32. [Attack speed](https://fireemblemwiki.org/wiki/Attack_speed?action=raw) — the follow-up threshold, and which attacks cannot double
33. Unique class pages: [Lord](https://fireemblemwiki.org/wiki/Lord?action=raw), [Enlightened One](https://fireemblemwiki.org/wiki/Enlightened_One?action=raw), [Armored Lord](https://fireemblemwiki.org/wiki/Armored_Lord?action=raw), [Emperor](https://fireemblemwiki.org/wiki/Emperor?action=raw), [High Lord](https://fireemblemwiki.org/wiki/High_Lord?action=raw), [Great Lord](https://fireemblemwiki.org/wiki/Great_Lord?action=raw), [Wyvern Master](https://fireemblemwiki.org/wiki/Wyvern_Master?action=raw), [Barbarossa](https://fireemblemwiki.org/wiki/Barbarossa?action=raw), [Death Knight](https://fireemblemwiki.org/wiki/Death_Knight_(class)?action=raw) — who gets each class, when, proficiencies, abilities and mastery

</details>

<details open>
<summary><strong>Serenes Forest</strong> — datamined tables</summary>

34. [Skill levels](https://serenesforest.net/three-houses/characters/skill-levels/) — strengths and weaknesses, rank costs, combat skill experience
35. [Budding talents](https://serenesforest.net/three-houses/characters/budding-talents/)
36. [Recruitment](https://serenesforest.net/three-houses/characters/recruitment/) — requirements, support discounts, the B-support shortcut, Church staff on Black Eagles
37. [Class change](https://serenesforest.net/three-houses/classes/class-change/) — exam rules, stat raise, class modifiers, weapon rules
38. [Class detailed view](https://serenesforest.net/three-houses/classes/detailed-view/) — suggested skill levels, gender locks
39. Monastery: [dining hall](https://serenesforest.net/three-houses/monastery/dining-hall/), [faculty training](https://serenesforest.net/three-houses/monastery/faculty-training/), [seminars](https://serenesforest.net/three-houses/monastery/seminars/)
40. [Renown and saint statues](https://serenesforest.net/three-houses/monastery/renown-saint-statues/)

</details>

<details open>
<summary><strong>Other wikis and guide sites</strong></summary>

41. [Fire Emblem Fandom: Certification Exam](https://fireemblem.fandom.com/wiki/Certification_Exam) — one exam per week, switching classes
42. [Fire Emblem Fandom: Battalion](https://fireemblem.fandom.com/wiki/Battalion)
43. [Fire Emblem Fandom: Divine Pulse](https://fireemblem.fandom.com/wiki/Divine_Pulse) — charges per battle
44. [Fire Emblem Fandom: White Heron Cup](https://fireemblem.fandom.com/wiki/White_Heron_Cup) — one practice, Dancer lost on a loss
45. [Triangle Attack: Battalions](https://www.fe3h.com/battalions) — hiring, replenishing, gambit refill
46. [Game8: Ashen Wolves recruitment](https://game8.co/games/fire-emblem-three-houses/archives/292154)
47. [Game8: Anna recruitment](https://game8.co/games/fire-emblem-three-houses/archives/292166)
48. [Game8: White Heron Cup](https://game8.co/games/fire-emblem-three-houses/archives/286838)
49. [GameWith: motivation](https://gamewith.net/fire-emblem-three-houses/article/show/10296)
50. [GameWith: Classic and Casual](https://gamewith.net/fire-emblem-three-houses/article/show/10291)

</details>

<details open>
<summary><strong>Reddit, r/FireEmblemThreeHouses</strong> — how the game plays on Hard</summary>

51. [Tips for Hard mode after being used to Normal](https://www.reddit.com/r/FireEmblemThreeHouses/comments/1i8reiq/tips_for_hard_mode_after_being_used_to_normal_for/)
52. [What should I know about choosing a house](https://www.reddit.com/r/FireEmblemThreeHouses/comments/1bb3qtn/what_should_i_know_about_choosing_a_house_and/)

</details>
