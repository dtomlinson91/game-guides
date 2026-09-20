# Ashveil builds and teams

Ashveil is a 5★ Lightning character on the Path of the Hunt. He released in
version 4.1 and reran in version 4.5 phase 2. He works in three roles, and each
one wants different relics, boots and teammates. This guide covers all three.

Written for version 4.5, on 2026-09-20.

| Build | Use it when |
| --- | --- |
| [Main DPS](#main-dps-build) | Ashveil is your highest-damage unit |
| [Waveflair support](#waveflair-build) | You own Aventurine • Waveflair |
| [Acheron sub-DPS](#acheron-build) | You own Acheron and Mortenax Blade |

> [!IMPORTANT]
> Ashveil is not a support who happens to deal damage. Prydwen rates him T0 as a
> damage dealer **and** T0 as a support damage dealer in all three endgame modes.
> Its reviewer states that "the ones who benefit the most from their kits are...
> themselves. The solo act is just outright better." If you own none of the
> partners above, build him as a main DPS.

## Quick reference

All three builds side by side, for when you only need the numbers. The sections
below explain each choice.

| | Main DPS | Waveflair support | Acheron sub-DPS |
| --- | --- | --- | --- |
| Ashveil's job | Kill things | Attack often, buff CRIT DMG | Generate Slashed Dream |
| Relic set | Ashblazing 4-pc | Ashblazing 4-pc | Ashblazing 4-pc |
| Ornament | Duran 2-pc | City of Converging Stars 2-pc | City of Converging Stars 2-pc |
| Body | CRIT Rate | CRIT Rate | CRIT Rate |
| Feet | ATK% | Speed | Speed |
| Sphere | Lightning DMG | ATK% | ATK% |
| Rope | ATK% | ATK% | ATK% |
| ATK target | 3000+ | 2000+ | 2000+ |
| CRIT Rate | 100% | 100% | 100% |
| CRIT DMG | 100% to 150%+ | 100%+ | 100%+ |
| SPD | Base, or 135 | Base, or high on Eagle | High. Frequency is the point |
| Third slot | Tribbie | Mortenax Blade | Mortenax Blade, required |
| Sustain | Hyacine | Hyacine | Hyacine |
| MoC rank | 18, 2.52%, 10.46 cyc | 55, 0.71%, 8.90 cyc | 113, 0.28%, 10.67 cyc |
| Wind set | No | Yes, Eagle is defensible | Yes, Eagle is defensible |
| Evidence | Two guide sites plus usage data | Prydwen, current | **Usage data and trace text only** |

Four rules that break a team if you get them wrong:

1. **Never put a second Elation character with Waveflair.** It turns off the
   clause that makes his Elation Skill a Follow-up ATK. See
   [Waveflair build](#waveflair-build).
2. **Mortenax Blade's Nihility rule cuts both ways.** Keep him as the only
   Nihility unit in the main-DPS and Waveflair teams. In the Acheron team the
   opposite applies, because Acheron is Nihility and wants the flipped branch.
   See [Teammate builds](#teammate-builds).
3. **Ashveil's 120% CRIT DMG buff only applies to Follow-up ATK damage.** Both
   Waveflair and Acheron need a specific condition met before they see it. See
   [Core loop](#core-loop).
4. **Never use an Energy Regen Rope on Ashveil by default.** His main Energy
   source is fixed and ignores Energy Regen Rate.

> [!TIP]
> All three builds share the same relic set, and two of the three share the same
> ornament and main stats. Moving Ashveil from the Waveflair team to the Acheron
> team needs no re-gearing at all. Moving him to main DPS needs three pieces:
> the ornament, the boots and the sphere.

## Core loop

Every build decision below depends on three resources. Read this section first,
because the later sections use these terms without repeating them.

- **Bait** — a mark Ashveil applies to one enemy. While a Bait exists, **all**
  enemies take 40% reduced DEF. If no Bait exists, Ashveil marks the enemy with
  the lowest HP. Only the most recent target holds the mark.
- **Charge** — the fuel for his Follow-up ATK. He starts with 2 and holds a
  maximum of 3. His Ultimate restores 3.
- **Gluttony** — the fuel for his enhanced Follow-up ATK. It caps at 12, or 18
  at Eidolon 2.

The loop runs as follows.

1. Ashveil uses Skill on the Bait. This deals 200% ATK, plus 100% ATK more if
   the target is already the Bait, and refunds 1 Skill Point.
2. An ally attacks the Bait. Ashveil gains 8 fixed Energy, spends 1 Charge,
   launches a 200% ATK Follow-up ATK, and gains 2 Gluttony.
3. Ashveil uses Ultimate at 150 Energy. This deals 400% ATK, restores 3 Charge,
   and launches a free enhanced Follow-up ATK.
4. The enhanced Follow-up ATK spends 4 Gluttony per extra instance. At 12
   Gluttony it deals 800% ATK in total. A killing blow moves the damage to a new
   Bait and continues.

> [!CAUTION]
> The 8 Energy is **fixed**. Energy Regen Rate does not multiply it. Both
> Prydwen and Icy Veins state this, which is why an ATK% Link Rope beats an
> Energy Regen Rope in all three builds. Icy Veins names one exception: content
> with many small side targets, such as Pure Fiction and Divergent Universe,
> where Gluttony instances kill extra enemies.

Three major traces carry the build.

| Trace | Effect |
| --- | --- |
| A2 Damnation Trail | Skill grants 1 Gluttony. Ultimate grants 2. Each kill during a Follow-up ATK grants 1 more. |
| A4 Phantom Limb | Follow-up ATK DMG +80%, and +10% per Gluttony stack held. This reaches +200%. |
| A6 First Fang | While Ashveil is alive, all allies gain 40% CRIT DMG. Ally **Follow-up ATK** CRIT DMG gains a further 80%, for 120% in total. |

> [!IMPORTANT]
> A6 is why Ashveil supports anything, and it is conditional on the damage being
> **tagged as a Follow-up ATK**. This single tag decides all three team sheets.
> Waveflair meets the condition through his own A4 trace. Acheron does **not**
> meet it at all, and gets 40% CRIT DMG rather than 120%, unless Mortenax Blade
> is at Eidolon 2. Check the tag before you assume the buff applies.

## Main DPS build

Use this build when Ashveil is your highest-damage unit. It maximises his own
output and gives up the Speed that the other two builds want.

**Relics:** The Ashblazing Grand Duke 4-piece with Duran, Dynasty of Running
Wolves 2-piece. Prydwen rates Duran at 100% relative damage for main DPS Ashveil
against 97.84% for City of Converging Stars, and describes it as the "general
best option for Main DPS Ashveil where he is paired with ATK buffers."

| Slot | Main stat | Why |
| --- | --- | --- |
| Body | CRIT Rate | The scarce stat. He gains CRIT DMG from his own traces |
| Feet | ATK% | Speed is worth less when an advancer supplies turns |
| Planar Sphere | Lightning DMG | Multiplies his own damage only |
| Link Rope | ATK% | His Energy is mostly fixed |

Substat priority: CRIT Rate = CRIT DMG > ATK% > SPD.

| Stat | Target |
| --- | --- |
| ATK | 3000+ (Prydwen), 2000+ floor (Icy Veins) |
| CRIT Rate | 100% |
| CRIT DMG | 100% to 150%+ |
| SPD | Base, or 135 with Sunday or Bronya at 134 |
| HP | 2700+ |
| DEF | 800+ |

> [!TIP]
> Ashveil has almost no ATK% in his own kit. Prydwen states that "Ashveil has
> such a distinct lack of ATK% in his kit that even just a little bit of that can
> push him to frankly absurd heights." Prefer an ATK buffer over a generic
> damage buffer when you have the choice.

**Team:** Ashveil, Mortenax Blade, Tribbie, Hyacine. This is Prydwen's
highest-ranked Ashveil team in Memory of Chaos at rank 18 and a 2.52%
appearance rate, with 10.46 average cycles and 7.16 at Eidolon 1 or higher.

| Slot | First choice | Alternatives |
| --- | --- | --- |
| Main DPS | Ashveil | — |
| Sub-DPS | Mortenax Blade | Gilgamesh |
| Amplifier | Tribbie | Sunday, Sparkle, Robin • Summeretto, Remembrance Trailblazer |
| Sustain | Hyacine | Huohuo, Dan Heng • Permansor Terrae, Luocha |

Mortenax Blade appears in **all ten** of Prydwen's ranked Memory of Chaos teams
for Ashveil. Treat him as part of the team rather than as an option.

Icy Veins gives these alternative main-DPS lines, each with a sustain:

- Ashveil, Sunday, Tribbie, Dan Heng • Permansor Terrae
- Ashveil, Sunday, Robin, Dan Heng • Permansor Terrae
- Ashveil, Sparkle, Remembrance Trailblazer, Dan Heng • Permansor Terrae
- Ashveil, Bronya, Pela, Dan Heng • Permansor Terrae

> [!NOTE]
> "Main DPS Ashveil" is a dual-DPS team in practice. One player running this
> team against the Sparxicon boss wrote of Mortenax Blade: "let's be honest,
> he's doing the majority damage versus Sparxicon." Build Mortenax Blade
> properly. See [Teammate builds](#teammate-builds).

**Turn order in combat.** Ashveil's Skill is Skill Point neutral on an existing
Bait, so he can Skill every turn without starving the team.

1. Skill the Bait. Re-Bait only to move the mark to a target you want dead.
2. Let allies attack the Bait. Each hit is 8 Energy and one Follow-up ATK.
3. Hold the Ultimate until Gluttony is at 12. At 8 Gluttony you lose one 200%
   ATK instance, and at 4 you lose two.
4. Use the Ultimate before a wave clears if kills will retarget the enhanced
   Follow-up ATK onto fresh enemies.

> [!WARNING]
> Do not Skill a target that is not already the Bait unless you intend to move
> the mark. The Skill then deals 200% ATK instead of 300% ATK and gives no Skill
> Point refund. The refund is a refund, not a free Skill, so you still need one
> Skill Point in the pool to press it.

## Waveflair build

Use this build when Aventurine • Waveflair is your damage dealer. Ashveil's job
changes completely: attack count matters more than his own damage.

> [!CAUTION]
> **Waveflair must be the only Elation character in the team.** His A4 trace
> branches at the start of battle. With another Elation ally, all allies gain
> 20% Elation and he gains 80% more. Alone, his **Elation Skill counts as a
> Follow-up ATK** instead. That clause is the entire reason this team exists. It
> lets his Elation Skill trigger Ashveil's Talent, and it lets Ashveil's A6
> apply the full 120% CRIT DMG to it. Adding Yao Guang turns it off.

The solo-Elation branch also gives Waveflair 2 Certified Banger and 1 Punchline
per ally attack, and raises Aha's SPD by 25 per ally attack. That SPD bonus
stacks until the end of the next Aha Instant. Prydwen reports the result reaches
"absurd SPD values, well into the 300s", which produces more Aha Instants than a
full Elation team would.

**This is why Ashveil's attack count is the metric here.** Every Ashveil
Follow-up ATK is one more ally attack, and therefore one more Fervor, one more
Punchline, two more Certified Banger and 25 more Aha SPD.

**Relics:** The Ashblazing Grand Duke 4-piece with City of Converging Stars
2-piece. Prydwen calls City of Converging Stars the "best option for sub-DPS
Ashveil" for its team-wide 12% CRIT DMG buff after a kill. Its field usage is
67.47% against Duran's 27.92%.

| Slot | Main stat | Change from main DPS |
| --- | --- | --- |
| Body | CRIT Rate | Same |
| Feet | **Speed** | Was ATK% |
| Planar Sphere | **ATK%** | Was Lightning DMG |
| Link Rope | ATK% | Same |

Icy Veins states the reasoning plainly: "In Sub-DPS setups, Ashveil can be a bit
more lenient with his stat goals since another unit will be doing most of the
team's damage. Here, it is more viable to run SPD boots... and switching out his
Damage% Sphere for an ATK% Sphere is fine as well."

**Team:** Aventurine • Waveflair, Ashveil, Mortenax Blade, Hyacine. This is
Prydwen's highest-ranked Waveflair team in Memory of Chaos at rank 55 and a
0.71% appearance rate, with 8.90 average cycles and 5.11 at Eidolon 1 or higher.

| Slot | First choice | Alternatives |
| --- | --- | --- |
| Main DPS | Aventurine • Waveflair | — |
| Specialist | Ashveil | — |
| Amplifier | Mortenax Blade | Tribbie, Robin • Summeretto |
| Sustain | Hyacine | Huohuo, Luocha, Dan Heng • Permansor Terrae, Lingsha, Gallagher |

The second-ranked line swaps Hyacine for Huohuo at rank 71 and 0.56%, with 10.50
average cycles and 4.85 at Eidolon 1 or higher.

> [!TIP]
> Prydwen names Hyacine over Huohuo here for a specific reason. She builds for
> Speed, and her memosprite attacks every time she acts. Two fast attackers in
> one slot feed Ashveil's Charge, Waveflair's Fervor and Mortenax Blade's Charge
> at once. Pick the sustain by how often it attacks, not by how much it heals.

**Waveflair's own build.** He scales with Speed, not ATK.

| Slot | Main stat |
| --- | --- |
| Body | CRIT Rate |
| Feet | Speed |
| Planar Sphere | Anything. Defensive stats preferred |
| Link Rope | Energy Regen Rate |

Target 160 to 200 SPD, 100% in-combat CRIT Rate and 120% pre-combat CRIT DMG.
Relics are Ever-Glorious Magical Girl 4-piece with Punklorde Stage Zero 2-piece,
at 96.14% and 98.87% field usage. His A2 trace starts converting Speed into
Elation at 140 SPD. His Ultimate adds 30% SPD for 4 turns, which is about 32
points on his 107 base.

> [!NOTE]
> Swap to Diviner of Distant Reach 4-piece if your DEF ignore overcaps. Ashveil
> applies 40% DEF reduction, Mortenax Blade adds more, and Waveflair's Eidolon 4
> adds 18% DEF ignore. Prydwen flags the same overcap for the Light Cones
> "Welcome to the Cosmic City" and "A Little Getaway".

## Acheron build

Use this build when Acheron is your damage dealer. Acheron is 5★ Lightning on
the Path of Nihility, and almost all her damage is her Ultimate. Ashveil's job
here is neither damage nor buffs. It is **generating her Ultimate charge**.

> [!CAUTION]
> **The evidence for this pairing is thinner than for the other two builds, and
> the written guide sites are no help.** Prydwen's Acheron page dates from patch
> 4.0 and mentions Ashveil zero times. Icy Veins' Acheron teams page dates from
> 29 March 2026 and contains neither Ashveil nor Mortenax Blade. The KQM Acheron
> guide is marked "Updated for Version 2.3". Everything below comes from live
> usage data and from the trace text of the three characters, not from a written
> recommendation.

**How Ashveil charges her Ultimate.** Acheron's Ultimate needs 9 Slashed Dream
points. Her Talent reads: "When any unit inflicts debuffs on an enemy target
while using their ability, Acheron gains 1 point of Slashed Dream... **This
effect can only trigger once per every ability usage.**" Her A2 trace grants 5
points at the start of battle.

That cap is the whole mechanism. One point per ability usage means **the number
of separate abilities your team presses matters, not the number of hits**.
Ashveil presses a lot of separate abilities: his Skill, up to three Talent
Follow-up ATKs per Charge cycle, and his Ultimate.

Mortenax Blade is what turns those presses into debuffs. Prydwen states that his
Zone "can allow any ally attack to also apply Debuffs which enables Follow-up
attackers to rapidly generate stacks for Acheron", and calls him "Acheron's
strongest Nihility option by far".

> [!IMPORTANT]
> **Mortenax Blade is not optional in this team.** He appears in all ten of
> Acheron's ranked Memory of Chaos teams. Without his Zone, Ashveil's Follow-up
> ATKs apply no debuff and generate no Slashed Dream, and the pairing loses its
> reason to exist.

**The Nihility cost, and why it is smaller than it looks.** Acheron's A4 trace
reads: "When there are 1 or 2 Nihility characters other than Acheron in the
team, the DMG dealt by Acheron's Basic ATK, Skill, and Ultimate increases to
115% or 160% of the original DMG respectively." Ashveil is Hunt, so he does not
count.

That sounds disqualifying. It is not, because Acheron's **most popular** team
also runs only one other Nihility.

| Acheron team | MoC rank | Appearance | Avg cycles | At E1+ | Other Nihility |
| --- | --- | --- | --- | --- | --- |
| Acheron, Mortenax Blade, Tribbie, Hyacine | 36 | 1.07% | 11.25 | 8.81 | 1 |
| **Acheron, Ashveil, Mortenax Blade, Hyacine** | 113 | 0.28% | **10.67** | **7.47** | 1 |
| Acheron, Ashveil, Mortenax Blade, Tribbie | 153 | 0.19% | — | — | 1 |
| Acheron, Ashveil, Mortenax Blade, Huohuo | 180 | 0.15% | — | — | 1 |
| Acheron, Cipher, Mortenax Blade, Hyacine | 185 | 0.14% | — | — | 2 |

Tribbie is not Nihility either. So the real choice is **Ashveil against Tribbie
for the same slot**, and both cost Acheron the identical A4 downgrade.

> [!TIP]
> The Ashveil version clears faster in the field data. It sits at 10.67 average
> cycles against 11.25 for the more popular Tribbie version, and 7.47 against
> 8.81 at Eidolon 1 or higher. Appearance rate measures how many people run a
> team, not how well it performs. Three of Acheron's ten ranked teams include
> Ashveil.

**Acheron's Eidolon 2 removes the cost entirely.** It reduces the Nihility count
her A4 needs by one, so one other Nihility gives the full 160%. At Acheron E2,
Ashveil costs her nothing at all.

**What Ashveil does not give her.** His A6 gives allies 40% CRIT DMG, and a
further 80% only on **Follow-up ATK** damage. Acheron's damage is her Ultimate,
and she has no Follow-up ATK as of version 4.5. She therefore receives 40%, not
120%.

> [!WARNING]
> Reddit threads in r/AcheronMainsHSR from late August 2026 are enthusiastic
> about this pairing — "the ashblade comp will be gigastonks", "Ashveil is bis" —
> and that enthusiasm rests on **leaked changes giving Acheron a Follow-up ATK**.
> Those changes did not ship. Acheron still has no Follow-up ATK in version 4.5.
> Discount that thread accordingly. One commenter in the same thread raised the
> opposite case, that a turn advancer may beat Ashveil for her, and that comment
> also referenced the unshipped leak.

> [!IMPORTANT]
> **Mortenax Blade at Eidolon 2 is what makes this team click.** It makes ally
> Ultimates count as Follow-up ATKs. Acheron's Ultimate would then qualify for
> Ashveil's full 120% CRIT DMG and for Mortenax Blade's own 75% Follow-up ATK
> buff. This is read off the two trace descriptions and is not measured
> anywhere. Treat it as the strongest reason to invest in Mortenax E2, not as a
> published figure.

**Ashveil's build here is the Waveflair build unchanged.** Speed boots, ATK%
sphere, City of Converging Stars, Ashblazing Grand Duke 4-piece. Frequency of
separate ability usages is what generates Slashed Dream, so Speed is the stat
that matters, not his own damage.

**Acheron's own build.** She wants CRIT DMG heavy, which is the opposite of
Ashveil's CRIT Rate-first profile.

| Slot | Main stat |
| --- | --- |
| Body | CRIT Rate >= CRIT DMG |
| Feet | ATK% > Speed |
| Planar Sphere | ATK% > Lightning DMG |
| Link Rope | ATK% |

Relics: Pioneer Diver of Dead Waters 4-piece at 100% relative damage and 88.88%
field usage, with Izumo Gensei and Takama Divine Realm 2-piece at 100% and
90.79%. Targets: 2900 to 3200+ ATK, 80% to 90%+ CRIT Rate, 160% to 180%+ CRIT
DMG, 2800 to 3000+ HP, 800+ DEF, and SPD at either 101 or 134+. Prydwen advises
holding a ratio of 1% CRIT Rate per 2% CRIT DMG. Trace order is A4 > A6 > A2.

> [!NOTE]
> Izumo Gensei and Takama Divine Realm gives its CRIT Rate only when a teammate
> shares the wearer's Path. Acheron is Nihility, so Mortenax Blade satisfies it.
> If you ever drop Mortenax Blade from this team, the ornament's CRIT Rate turns
> off as well as the stack engine.

**A sustainless variant exists, and it drops Ashveil's partner.** A 0-cycle
Memory of Chaos 12 clear was posted running Acheron E0S1, Cipher E0S1, Ashveil
E0S1 with Topaz's Light Cone, and Welt E6S5. Cipher and Welt are both Nihility,
so that team gets the full 160% A4 with Ashveil still in it, at the cost of
Mortenax Blade's Zone.

> [!CAUTION]
> That clear comes from r/HonkaiStarRail_leaks during the 4.2 beta, so treat it
> as provisional. It also runs a heavily invested Welt at E6S5. Do not read it
> as a template for an ordinary account.

## The wind set

Players on r/Ashveil_Mains say "wind set" and mean **Eagle of Twilight Line**.
This section separates the two sets the phrase can mean, then gives the evidence.

| Set | 2-piece | 4-piece |
| --- | --- | --- |
| Eagle of Twilight Line | Wind DMG +10% | After Ultimate, advance action forward by 25% |
| The Wind-Soaring Valorous | ATK +12% | CRIT Rate +6%. After a Follow-up ATK, Ultimate DMG +36% for 1 turn |

> [!CAUTION]
> Many older pages state that The Wind-Soaring Valorous 2-piece gives 6% Wind
> DMG. That value is stale. Both Prydwen and the Honkai: Star Rail wiki now list
> **ATK +12%**, so the set is no longer element-locked. Check the in-game tooltip
> before following any guide that still quotes the Wind DMG value.

Eagle's 2-piece Wind DMG is dead on a Lightning character. Players run it for
the 4-piece action advance alone, to raise Ashveil's Ultimate frequency.

**The case for Eagle.** /u/SaberManiac posted a 0-cycle Apocalyptic Shadow clear
with a sustain, running Eagle on Ashveil, Mortenax Blade and Tribbie together.
Their argument: "Eagle + ERR/SPD is what allows Ashveil to Ult much more
frequently compared to a Duke/Converging Stars build."

**The case against.** Three separate players disagree.

| Player | Claim |
| --- | --- |
| /u/Weird-Trick-9145 | 0-cycled the same stage on Ashblazing with more Action Value and unspent Ultimates left |
| /u/Badorik | 0-cycled on Ashblazing in a 4-cost team: "No 3B, Huohuo, or Wind sets on Ash" |
| /u/AarviArmani, top-12 Fribbels build | "base speed duke Ashveil is superior to speed wind Ashveil (at least for the way I play)" |

> [!WARNING]
> No controlled test exists in any source checked. Every comparison is one
> player's account against another's, with different relics, different teammates
> and per-run enemy behaviour. Two commenters, /u/Beginner-Cat and /u/krbku, said
> exactly that. The player arguing for Eagle agreed: "I don't have the resources
> to perfectly isolate every variable for testing." Treat Eagle as untested
> rather than as wrong, and note that three of the four voices favour Ashblazing.

**Use the wind set in these cases.**

1. **Waveflair team.** Both sides of the Reddit argument agree here.
   /u/SaberManiac: "Waven wants an Eagle Ashveil anyway." /u/Weird-Trick-9145
   replied: "Yes, waven does." The reason follows from the kit. Eagle advances
   Ashveil after every Ultimate, so he acts more often, and every extra Ashveil
   action feeds Fervor, Punchline, Certified Banger and Aha SPD.
2. **Acheron team, by the same logic.** Slashed Dream counts ability usages, so
   more Ashveil turns means more points. No source tests this directly, so it is
   reasoning by analogy from the Waveflair case rather than a measured result.
3. **On Mortenax Blade, as a min-max option.** Prydwen ranks Eagle of Twilight
   Line 4-piece **second** for him at 16.22% field usage, and notes it lets him
   "reach new Action Value breakpoints". It also gives him the best average cycle
   count of his three sets, at 9.59 against 10.48 for his best set.
4. **As a stop-gap.** Several r/Ashveil_Mains players report running spare Eagle
   pieces while farming Ashblazing.

**Do not use the wind set in these cases.**

1. **Main DPS Ashveil, when you own good Ashblazing pieces.** Prydwen ranks
   Ashblazing Grand Duke 4-piece first at 100% relative damage with 91.37% field
   usage. Three of four Reddit voices agree.
2. **The Wind-Soaring Valorous on Ashveil, in any team.** The 4-piece raises
   Ultimate DMG only. Ashveil's Ultimate deals 400% ATK, but the enhanced
   Follow-up ATK that fires immediately after deals up to 800% ATK and is **not**
   Ultimate DMG. The set therefore misses most of his Ultimate turn.

> [!NOTE]
> The Valorous question is open on Reddit and unanswered. A thread in
> r/Ashveil_Mains asks whether an Eidolon 2 Mortenax Blade changes its value
> against Ashblazing, and it has no replies. Eidolon 2 Mortenax makes ally
> Ultimates count as Follow-up ATKs, which would extend Ashblazing's 2-piece
> 20% Follow-up ATK bonus to cover Ashveil's Ultimate as well. That reasoning
> comes from the two set descriptions, not from a measured test.

## Teammate builds

Mortenax Blade is in every ranked team for all three builds, so his build
matters as much as Ashveil's. This section covers him and the two other
recurring slots.

**Mortenax Blade** — 5★ Fire, Path of Nihility. His Ultimate spends 20% of his
Max HP to deploy a Zone. Inside it he enters "Infinite Fury" for 20% CRIT Rate
and 60% CRIT DMG, takes 50% less damage, draws enemy attacks and gains 50%
Incoming Healing. Each ally attack inside the Zone applies Balefire Bind and
grants him 1 Charge. At 9 Charge he takes an extra Skill, which counts as a
Follow-up ATK.

| Slot | Main stat |
| --- | --- |
| Body | CRIT Rate > Effect HIT Rate |
| Feet | Speed |
| Planar Sphere | HP% > Fire DMG |
| Link Rope | Energy Regen Rate > HP% |

Relics: Divine-Querying Master Smith 4-piece at 81.27% usage, which also gives
the team a 15% damage boost. Ornament: Bone Collection's Serene Demesne 2-piece
for damage at 53.66% usage, or Sprightly Vonwacq 2-piece at 40.28% to act first
and deploy the Zone early. Targets: 134, 160 or 170 SPD, 6000+ HP, 100%
in-combat CRIT Rate, 130%+ CRIT DMG, and Effect Hit Rate at either 0% or 40% to
67% depending on the Light Cone.

**His A6 trace branches on Path, and the right answer differs per build.** The
text reads: "While the Zone is active, DMG dealt by ally targets increases by
50%. If there are other Nihility characters aside from Mortenax Blade in the
ally team, Ultimate DMG dealt by ally targets increases by 75%. Otherwise, DMG
dealt by Mortenax Blade additionally increases by 75%."

| Build | Other Nihility? | Which branch fires | Verdict |
| --- | --- | --- | --- |
| Main DPS | No | Mortenax gets 75% own DMG | Correct. Keep it that way |
| Waveflair | No | Mortenax gets 75% own DMG | Correct. Keep it that way |
| Acheron | Yes, Acheron herself | Allies get 75% Ultimate DMG | Correct, and better. Acheron's damage **is** her Ultimate |

> [!CAUTION]
> In the main-DPS and Waveflair teams, adding Welt, Silver Wolf, Cipher or Pela
> redirects that 75% into ally **Ultimate** damage. Ashveil gets little from it,
> because his enhanced Follow-up ATK is not Ultimate damage, and Waveflair gets
> almost nothing, because Prydwen calls his Ultimate's ATK multiplier
> "meaningless". The Acheron team is the one case where the flipped branch is the
> one you want. This is derived from the trace text, not measured.

Together, Ashveil and Mortenax Blade reduce enemy DEF by 70%. Prydwen is
explicit that "DEF Reduction past 100% has no effect", so a third shredder is
usually wasted.

**Tribbie** — the amplifier slot in the main-DPS team, and Ashveil's direct
competitor for the third slot in the Acheron team. She supplies All-Type RES PEN
and a damage-taken aura, which Prydwen calls rare multipliers that suit a
character already saturated in common stats. Her AoE Follow-up ATKs also trigger
Ashveil's Talent and restore his Energy.

**Hyacine** — the first-choice sustain in all three teams. Prydwen names her
Mortenax Blade's best sustain for the Max HP buff, and highlights her for the
Waveflair team because she builds Speed and her memosprite attacks whenever she
acts.

> [!IMPORTANT]
> Mortenax Blade's Eidolon 2 is the highest-value vertical investment in any of
> the three teams. Prydwen calls it "Mortenax Blade's strongest Eidolon by far",
> because it makes ally Ultimates count as Follow-up ATKs, cuts his extra Skill
> cost from 9 Charge to 7, and buffs all ally Follow-up ATKs by 75%. It names
> Ashveil specifically as the character it opens up. In the Acheron team it is
> also the only route to Ashveil's full 120% CRIT DMG buff.

## Relic sets

Full ranking for Ashveil, for when you are deciding what to farm. The
percentages are Prydwen's relative damage figures, which count the set bonus
alone. The usage figures come from real player accounts.

| Set | Pieces | Relative DMG | Usage | Use when |
| --- | --- | --- | --- | --- |
| The Ashblazing Grand Duke | 4 | 100% | 91.37% | Default, all three builds |
| Pioneer Diver of Dead Waters | 4 | 93.79% | 2.79% | You lack Ashblazing pieces |
| Eagle of Twilight Line | 4 | Not ranked | Not listed | Waveflair or Acheron team, or a stop-gap |

| Ornament | Pieces | Relative DMG | Usage | Use when |
| --- | --- | --- | --- | --- |
| Duran, Dynasty of Running Wolves | 2 | 100% | 27.92% | Main DPS with ATK buffers |
| City of Converging Stars | 2 | 97.84% | 67.47% | Waveflair and Acheron support |
| Inert Salsotto | 2 | 96.08% | 2.51% | Fallback |
| The Wondrous BananAmusement Park | 2 | 99.94% | 0.63% | Only with Dan Heng • Permansor Terrae as Bondmate |

Set effects, quoted from the in-game text:

- **The Ashblazing Grand Duke** — 2-piece: Follow-up attack DMG +20%. 4-piece:
  each damage instance of a Follow-up ATK grants ATK +6%, up to 8 stacks, for 3
  turns. The stacks clear on the next Follow-up ATK.
- **Pioneer Diver of Dead Waters** — 2-piece: DMG to debuffed enemies +12%.
  4-piece: CRIT Rate +4%, and increased CRIT DMG against enemies with 2 or 3
  debuffs. Applying a debuff doubles the effect for 1 turn.
- **City of Converging Stars** — 2-piece: a Follow-up ATK grants ATK +24% for 2
  turns. A kill grants all allies CRIT DMG +12% for the battle.
- **Duran, Dynasty of Running Wolves** — 2-piece: each ally Follow-up ATK grants
  1 Merit, up to 5. Each Merit adds 5% Follow-up ATK DMG. At 5 Merit, CRIT DMG
  +25%.

> [!TIP]
> Farm Ashblazing Grand Duke first, then both ornaments. City of Converging
> Stars and Duran sit within 3% of each other in Prydwen's calculations, so a
> good Duran set beats a poor City set even in the support builds. One player
> made the same point: "Duran and Converging are within single % differences, I
> just have crap stats on my Duran."

## Speed tuning

Speed is the one stat where the sources give different answers, because the
right number depends on whether the team carries an action advancer.

| Setup | Ashveil SPD | Source |
| --- | --- | --- |
| Ashveil with Mortenax Blade and Hyacine | Base | Two r/Ashveil_Mains players |
| Ashveil with Sunday or Bronya | 135, supports at 134 | Icy Veins, a -1 SPD setup |
| Ashveil as support, no advancer | 135 | Both guide sites |
| Ashveil on Eagle of Twilight Line | As high as possible | The set pays out per Ultimate |

Teammate targets:

- **Mortenax Blade** — 141 SPD or higher with his signature relic set, so he acts
  twice inside his own Ultimate. Prydwen gives 134, 160 or 170 as breakpoints.
- **Aventurine • Waveflair** — 160 to 200 SPD.
- **Acheron** — 101 SPD, or 134+. With Sparkle in the team, Prydwen says to
  ignore Speed on her entirely.
- **Sunday or Bronya** — 134 SPD, one below an Ashveil at 135.

> [!WARNING]
> Prydwen lists Ashveil's boots as "ATK% >= Speed" and Icy Veins lists them as
> "SPD > ATK%". They are answering different questions. Prydwen assumes an
> advancer supplies the turns. Icy Veins assumes none. Decide the team first,
> then the boots.

## Sustain choice

Both guide sites and the field data point the same way. Only two of the three
builds have any support for going sustainless.

**Run a sustain in the main-DPS team.** Prydwen's reviewer is blunt about
Ashveil's durability: "Just don't play him sustainless unless you enjoy pain;
this man is made of wet tissue paper." All ten of Icy Veins' example Ashveil
teams carry a sustain. All ten of Prydwen's ranked Memory of Chaos teams for
Ashveil carry a sustain.

**Sustainless is possible in the Waveflair team.** Prydwen's Waveflair review
states that "playing sustainless and keeping Welt to construct Team Hubby is
obviously very good." That advice is specific to Waveflair, not to Ashveil.

**Sustainless is possible in the Acheron team, with caveats.** See the 4.2-beta
clear noted in [Acheron build](#acheron-build). It needs two Nihility units and
a heavily invested Welt.

> [!CAUTION]
> Both sustainless lines use Welt, who is Nihility. In the Waveflair team that
> flips Mortenax Blade's A6 branch the wrong way, so pick one: sustainless with
> Welt and no Mortenax Blade, or Mortenax Blade with a sustain. In the Acheron
> team the flip is harmless, because she wants the ally Ultimate branch anyway.

| Sustain | Why |
| --- | --- |
| Hyacine | Fast-acting, and her memosprite attacks whenever she acts |
| Dan Heng • Permansor Terrae | Buffs ATK, and his Souldragon launches Follow-up ATKs |
| Huohuo | Appears in Prydwen's ranked teams for all three builds |
| Aventurine (the original) | Skill Point positive, and attacks more in a Follow-up team |

## Common mistakes

Check this list when a team underperforms and the build looks correct.

1. **A second Elation character with Waveflair.** See
   [Waveflair build](#waveflair-build).
2. **A second Nihility character in the main-DPS or Waveflair team.** See
   [Teammate builds](#teammate-builds).
3. **Expecting Ashveil's 120% CRIT DMG buff to reach Acheron.** It does not.
   Her damage is not a Follow-up ATK. See [Acheron build](#acheron-build).
4. **Dropping Mortenax Blade from the Acheron team.** You lose the stack engine
   and Acheron's Izumo ornament CRIT Rate at the same time.
5. **An Energy Regen Rope on Ashveil.** See [Core loop](#core-loop).
6. **Skilling a non-Bait target.** You lose 100% ATK and the Skill Point refund.
7. **Ruan Mei in an Ashveil team.** Two r/Ashveil_Mains commenters advise against
   her. The team needs frequent attacks, and she supplies none.
8. **A third DEF shredder.** Ashveil and Mortenax Blade already reach 70%.
   Reduction past 100% does nothing.
9. **Using the Ultimate below 12 Gluttony without a reason.** Each missing block
   of 4 costs one 200% ATK instance.

## Source conflicts

Record of where the sources disagree, and which one this guide follows. Check
this before you act on a number from any single page.

| Subject | Prydwen | Icy Veins | Reddit | Followed |
| --- | --- | --- | --- | --- |
| Major trace order | A2 > A6 > A4 | A2 > A4 > A6 | — | Prydwen, as its page is newer |
| ATK target | 3000+ | 2000+ | — | Neither. 2000 is the floor, 3000 the goal |
| Ashveil boots | ATK% >= Speed | Speed > ATK% | Base SPD with Mortenax Blade | Depends on the advancer. See [Speed tuning](#speed-tuning) |
| Eagle on Ashveil | Not listed | Not listed | Contested, 3 against 1, no controlled test | Ashblazing, except in the support builds |
| Eagle on Mortenax Blade | Ranked second, 16.22% usage | — | "The standard build for Blade" | Defensible as a min-max option |
| Ashveil with Acheron | Not mentioned on her page. 3 of her 10 ranked teams use him | Not mentioned | Enthusiastic, but based on leaks that did not ship | The ranked team data and the trace text |

> [!NOTE]
> Page dates decide most of these. Prydwen updated the Ashveil page on 10
> September 2026, the Waveflair page on 12 September 2026, and the Mortenax Blade
> page in the current patch. Its Acheron page is from patch 4.0 and 31 May 2026.
> The Icy Veins Ashveil teams page is from 9 March 2026, its Acheron teams page
> from 29 March 2026, and its Ashveil build page predates Waveflair. The KQM
> Acheron guide is from Version 2.3.

## Light cones

Read this once when you decide what to pull or equip. The usage figures are real
player data from Prydwen.

Ashveil, ranked by Prydwen's relative damage:

| Light Cone | Relative DMG | Usage | Note |
| --- | --- | --- | --- |
| The Finale of a Lie (S1) | 124.88% | 54.53% | His signature. Adds 20% DMG Vulnerability on all enemies |
| Baptism of Pure Thought (S1) | 110.36% | 6.77% | Dr. Ratio's signature. Its DEF Ignore stacks with his 40% DEF reduction |
| Worrisome, Blissful (S1) | 100.19% | 22.38% | Topaz's signature. Raises target CRIT DMG Taken, so it suits the support builds |
| Cruising in the Stellar Sea (S5) | 100% | 12.69% | Best free option, from Herta's store |
| See You at the End (S5) | 88.45% | 0.20% | Battle Pass. No conditional effect |

Aventurine • Waveflair:

| Light Cone | Relative DMG | Usage | Note |
| --- | --- | --- | --- |
| Summer Rides the Surf (S1) | 123.82% | 51.15% | His signature. 18% CRIT Rate, 24% SPD, 40% Elation |
| Today's Good Luck (S5) | 109.12% | 23.58% | Battle Pass. Supplies the CRIT Rate he needs |
| Welcome to the Cosmic City (S1) | 108.77% | 1.87% | 18% SPD and 20% DEF Ignore. Can overcap DEF Ignore |
| Mushy Shroomy's Adventures (S5) | 100.00% | 17.99% | Free option |

Acheron:

| Light Cone | Relative DMG | Usage | Note |
| --- | --- | --- | --- |
| Along the Passing Shore (S1) | 125.50% | 98.39% | Her signature. Adds a debuff, so her Skill gives 2 Slashed Dream instead of 1 |
| Incessant Rain (S1) | 107.77% | 0.28% | Applies Vulnerability, but the debuff cannot be reapplied and can miss below 67% Effect Hit Rate |
| Good Night and Sleep Well (S5) | 100% | 0.56% | Best 4★ option. Applies no debuff of its own |

> [!TIP]
> Pick **Worrisome, Blissful** over the free options for either support build if
> you own it. Prydwen singles it out for the support role, because it raises the
> CRIT DMG the target takes and therefore helps the damage dealer rather than
> Ashveil alone. For the main-DPS build, prefer his own signature.

## Eidolon value

Read this once when planning pulls. Ashveil's own Eidolons rank low against the
alternatives, and several players say so directly.

| Eidolon | Effect | Worth it |
| --- | --- | --- |
| E1 | Enemies take 24% more DMG, rising to 36% below 50% HP | Good, but it overlaps with Sparkle, Tribbie, Cipher and his own signature |
| E2 | Gluttony cap 18, refunds 35% of consumed stacks | Damage-focused. More Ultimate instances |
| E4 | ATK +40% for 3 turns after Ultimate | Small. A step towards E6 |
| E6 | Enemies lose 20% All-Type RES. Up to +120% DMG from Gluttony gained | Large team gain. Does not change how he plays |

> [!IMPORTANT]
> Spend on teammates before Ashveil. One r/Ashveil_Mains player wrote:
> "regardless of whichever iteration you go for ashveil verticals are the last
> priority." Recommended order per build: **Mortenax Blade E2 then Robin •
> Summeretto E1** for main DPS, **Waveflair E1 then E2** for the Waveflair team,
> and **Mortenax Blade E2 then Acheron E2** for the Acheron team. Prydwen's
> Waveflair reviewer also rates that character's E1 and E2 above his signature
> Light Cone.

> [!NOTE]
> Two open questions, recorded as questions rather than advice. One player said
> Robin • Summeretto beats Waveflair in the main-DPS team unless Waveflair is
> Eidolon 2 or higher, prefaced with "Iirc" and with no measurement. Another
> asked for percentage figures on Mortenax Blade's E2 in this team and received
> no reply.

## Sources

Every URL that produced content for this guide, grouped by what it supplied.
Reuse this list rather than searching again.

Kit text, trace values, relic rankings, usage statistics and ranked teams:

- <https://www.prydwen.gg/star-rail/characters/ashveil> — updated 10 Sep 2026
- <https://www.prydwen.gg/star-rail/characters/aventurine-waveflair> — updated 12 Sep 2026
- <https://www.prydwen.gg/star-rail/characters/blade-mortenax> — note the slug order
- <https://www.prydwen.gg/star-rail/characters/acheron> — patch 4.0, stale on teams
- <https://www.prydwen.gg/star-rail/guides/relic-sets> — exact set text

Independent cross-check on build and synergy:

- <https://www.icy-veins.com/honkai-star-rail/ashveil-guide-best-builds>
- <https://www.icy-veins.com/honkai-star-rail/ashveil-best-teams> — updated 9 Mar 2026

Relic set text, second source:

- <https://honkai-star-rail.fandom.com/wiki/The_Wind-Soaring_Valorous>

Reddit, for the wind set argument and player-level tuning:

- <https://www.reddit.com/r/Ashveil_Mains/comments/1wjcg6i/here_is_a_better_showcase_for_main_dps_ashveil/>
  — the Eagle against Ashblazing argument, with screenshots from both sides
- <https://www.reddit.com/r/Ashveil_Mains/comments/1wi4dum/i_own_top12_ashveil_build_on_fribbels_ama/>
  — a top-12 Fribbels build owner prefers base-speed Ashblazing
- <https://www.reddit.com/r/Ashveil_Mains/comments/1wkb3b0/ashblade_speed_tuning/>
  — base SPD Ashveil, 141 SPD Mortenax Blade
- <https://www.reddit.com/r/Ashveil_Mains/comments/1whzw1z/is_aventurine_sp_optimal/>
  — pull priority, and the claim that both teams perform alike
- <https://www.reddit.com/r/AcheronMainsHSR/comments/1w0erzq/robin_or_ashveil_for_e2_acheron/>
  — Acheron players on Ashveil, predicated on leaks that did not ship
- <https://www.reddit.com/r/HonkaiStarRail_leaks/comments/1rwpixx/acheron_e0s1_cipher_e0s1_ashveil_e0s1_topaz_lc/>
  — the sustainless Acheron and Ashveil 0-cycle, from the 4.2 beta

Sources that failed or were too stale to use:

- `game8.co` Ashveil page — returned an empty body through Bright Data.
- `hsr.keqingmains.com` — no Ashveil guide exists. Its Acheron guide is marked
  "Updated for Version 2.3" and mentions neither Ashveil nor Mortenax Blade.
- `icy-veins.com/honkai-star-rail/acheron-best-teams` — loads, but is from 29
  March 2026 and contains neither Ashveil nor Mortenax Blade in any team.
- `prydwen.gg/star-rail/characters/mortenax-blade` — "Character Not Found". The
  slug is `blade-mortenax`.
- Prydwen's "MoC/PF/AS Statistics" and "Calculations" tabs render client-side and
  return nothing. Only the Memory of Chaos team table is present in the markup.
- Reddit `.rss` comment feeds through Bright Data return an empty body on roughly
  half of attempts. A repeat of the same request usually succeeds.

> [!CAUTION]
> Prydwen's team tables carry no text. The character names live only in image
> `alt` attributes, and the first few `alt` values in that region belong to the
> Synergy section above it, not to the first team. Count them off before
> pairing teams to ranks, or every team shifts by one.
