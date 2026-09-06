# March 7th • Evernight

A playstyle and rotation reference for the Remembrance / Ice version of
March 7th. It covers her mechanics, the turn loop, the common mistakes, and
what changes when she carries a team instead of supporting one. Build data is
at the end for checking only.

| Field | Value |
| --- | --- |
| Path | Remembrance |
| Element | Ice |
| Scales on | Max HP |
| Ultimate cost | 240 Energy |
| Burst threshold | 16 Memoria |
| Memosprite | Evey, 160 SPD |
| Skill Point cost | 0 |

## Core Model

This is the whole character in three sentences. Read this before the detail
below.

Evernight deals almost none of her own damage. Her memosprite Evey does. You
stack a resource called Memoria, then Evey spends all of it in one explosion.

Her Ultimate is not mainly a damage button. It is a Memoria multiplier.

## Evey

Evey is the memosprite that carries her damage. Its stats derive from
Evernight, so every Evey number moves when Evernight's Max HP moves.

- Summoned automatically when combat starts.
- Max HP equals 50% of Evernight's Max HP.
- Speed 160. It acts far more often than any team member.
- It acts on its own. You cannot choose its ability or its target.
- It draws enemy attacks more often than the rest of the team, and it is
  immune to Crowd Control.
- Evernight's Skill re-summons it, or heals it for 50% of its Max HP if it is
  already present.

> [!TIP]
> Enemies hitting Evey is a benefit. Each hit gives Evernight Memoria.

## Memoria

Memoria is her stacking resource. It sets the size of the explosion, so
everything in her kit exists to raise it.

- A counter on Evernight with no reachable cap.
- Only Evernight and Evey generate it through HP loss. Other allies losing HP
  gives nothing.
- It keeps counting up while Evey is off the field. Nothing can spend it there.
- At 16 or more, Evernight dispels Crowd Control and becomes immune to it.

## The Explosion

The explosion is her damage. It is Evey's enhanced Memosprite Skill,
*Dream, Dissolving, as Dew*, and it replaces Evey's normal attack once the
threshold is met.

- Unlocks at 16 Memoria. Crossing 16 also advances Evey's turn immediately.
- Hits every enemy: 12% of Evey's Max HP per Memoria point to the main target,
  6% to the others.
- Toughness damage: 30 to the main target, 20 to the rest.
- Spends every Memoria point and Evey's whole HP bar. Evey then leaves the
  field.
- Afterwards Evernight gains up to 50% Speed until her next turn, and the team
  gets 1 Skill Point back (A2 trace).

## Darkest Riddle

Darkest Riddle is the state her Ultimate opens. It is the reason the Ultimate
matters, and the buffs are secondary to what it does to Memoria.

- Costs 240 Energy. The A4 trace gives 70 Energy at battle start.
- The Ultimate itself is an AoE hit worth 200% of Evey's Max HP.
- The state gives 30% Vulnerability on all enemies, +60% damage for Evernight
  and Evey, and Crowd Control immunity for both.
- **Inside it, her Skill gives 14 Memoria instead of 2.**
- It holds 2 Charges. Each explosion spends one.
- It ends at the start of Evernight's turn once no Charges remain.

> [!IMPORTANT]
> The Ultimate does not use her turn. Fire it, then take the turn as normal.

## Memoria Sources

This table explains the pacing of the character. The A4 trace pays out on every
memosprite action on the team, not only on Evernight's own.

| Source | Memoria | Also gives |
| --- | --- | --- |
| Battle start (A4 trace) | +1 | 70 Energy |
| Technique, before the fight | +1 | The memosprite CRIT DMG buff |
| Skill, outside Darkest Riddle | +2 | 30 Energy, summons or heals Evey |
| Skill, inside Darkest Riddle | +14 | 30 Energy, summons or heals Evey |
| Evernight or Evey loses HP | +2 | +60% CRIT DMG for 2 turns |
| Evey's normal attack | +1 | 20 Energy |
| Any ability by Evernight or an ally memosprite (A4) | +1 | 5 Energy |
| Enemy attack on Evernight or Evey | +2 | Once per target per attack |

The A2 trace makes every ability consume 5% of the caster's current HP. That HP
loss then triggers the fifth row. This is why her own abilities pay her twice.

## Turn Loop

The default rotation. It needs no timing skill and it reaches most of her
damage.

1. **Before the fight** — use the Technique.
2. **Turn 1** — use the Skill. Evey is already present, so the Skill heals it,
   adds Memoria and adds 30 Energy.
3. **Next few turns** — use the Skill every turn. Memoria climbs from the
   Skill, from ally memosprites, and from every hit taken. Evey advances and
   detonates when it crosses 16.
4. **Use the Ultimate the moment you reach 240 Energy.**
5. **Inside Darkest Riddle** — use the Skill every turn. One Skill grants 14
   Memoria on its own, and A4 plus the HP costs add more, so in practice one
   Skill takes her over the threshold. Evey detonates on each of her turns.
6. **After two explosions** the state ends. Return to step 3.

## Habits

The behaviours that decide whether the character works. Most of her lost damage
comes from breaking one of these, not from a mistimed rotation.

Do:

- Use the Skill every turn. It costs no Skill Points, and the explosion refunds
  one, so she is Skill Point positive.
- Let her HP drop. HP loss is her fuel.
- Keep the Skill buff alive. It lasts 2 turns and buffs every memosprite on the
  team, not only Evey.
- Fire the Ultimate on sight.

Do not:

- Do not default to the Basic ATK. The Skill gives more Energy and more Memoria
  for the same turn.
- Do not plan a fixed turn rotation. Evey advances the instant Memoria crosses
  16, which can land on an enemy turn.
- Do not heal her to full out of habit. Healing is for survival.

> [!CAUTION]
> Never pair her with a shielder. A shield stops HP loss, and HP loss is
> Memoria. Fu Xuan is also a poor fit, because her healing cannot keep up with
> Evernight's self-drain.

## Advanced Levers

Optional plays for when the basic loop feels automatic. Her damage floor is
high, so none of these are required.

**Bank Memoria before the Ultimate.** Memoria still climbs while Evey is off
the field, and nothing can spend it there. If the Ultimate is one turn away,
use the Basic ATK instead of the Skill. Evey stays away, the counter banks, and
the following Ultimate plus Skill lands the explosion inside Darkest Riddle
with a much larger stack. The cost is one turn of Evey's attacks and 10 Energy.

**Hold the Vulnerability.** Darkest Riddle ends only when the Charges are gone
and Evernight starts a turn. Charges are spent by explosions and nothing else.
To keep the 30% Vulnerability up for a teammate's burst, delay the second
explosion by leaving Evey off the field for a turn.

**An action advance is a free 14 Memoria.** Any effect that advances her turn
inside Darkest Riddle gives her a second Skill before Evey detonates. The
Remembrance Trailblazer's Mem does this on demand.

> [!WARNING]
> The most common damage loss is crossing 16 Memoria at the wrong moment. Evey
> fires as soon as the threshold is met, so a small stack can detonate outside
> Darkest Riddle. You cannot stop Evey directly. You control it only by pacing
> Memoria, or by leaving Evey off the field.

## Castorice Team

Her sub-DPS role. Castorice remains the main damage source, and Evernight
detonates on her own schedule while feeding her.

Team: **Castorice · Evernight · Tribbie · Hyacine**. Prydwen ranks this team
12th by usage, at 10.29 average Memory of Chaos cycles (6.93 at Eidolon 1+).

Evernight, Castorice and Hyacine all walk the Remembrance path. Three
Remembrance characters hits her A6 breakpoint, which grants **+50% CRIT DMG to
every memosprite on the team**. Tribbie is Harmony and does not count toward
it, but she buffs all three damage sources at once.

- **Hyacine** is non-negotiable. Her Max HP buff raises Evernight's damage and
  Evey's Max HP. Her healing is what allows free HP spending. Little Ica acts
  often, and every Ica action is +1 Memoria and +5 Energy. Her signature Light
  Cone drains HP, which is a further Memoria source.
- **Castorice** is a two-way synergy. Evey's explosion consumes Evey's entire
  HP bar, which charges Newbud quickly. Her Technique and Skill drain team HP,
  which gives Evernight Memoria. In return, Evernight's Ultimate Vulnerability
  and her Skill CRIT DMG buff both raise Netherwing's damage.
- **Tribbie** amplifies all three. The team's high HP pool and frequent attacks
  trigger her follow-up attacks and keep her Energy topped up.

Line up Evernight's Ultimate so the 30% Vulnerability is live during
Castorice's Netherwing window, when the turn order allows it.

## Main DPS

What changes when she carries. The answer is: the team and two build slots, not
the rotation.

> [!NOTE]
> The turn loop does not change at all. Same Skill every turn, same Ultimate on
> sight, same 16 threshold.

Team: **Evernight · Trailblazer • Remembrance · Tribbie · Hyacine**. Drop
Castorice. The Remembrance count stays at three, so A6 still pays the full
+50%.

The Remembrance Trailblazer is the reason this team works:

- Evernight's 240 Max Energy is high enough to max out Mem's True DMG buff at
  50%.
- Evernight uses no Skill Points, so Mem can use its Skill every turn for more
  action advances.
- Spend those advances on Evernight inside Darkest Riddle. Each one buys an
  extra Skill, worth 14 more Memoria in the explosion that follows.

Two build slots shift:

- **Light Cone.** Her signature *To Evernight's Stars* stays the top pick in
  both roles. *Make Farewells More Beautiful* becomes competitive as main DPS
  only, because it trades Energy regeneration for higher base HP, a stronger
  DEF ignore and an action advance.
- **Planar set.** *Bone Collection's Serene Demesne* stays the default.
  *Arcadia of Woven Dreams* is a main-DPS alternative that grows with the
  number of ally targets on the field. Do not use it next to Castorice, because
  Netherwing is often absent when Evey attacks.

Everything else is identical in both roles.

## Build Reference

Target values for checking an existing build. Included for completeness, not as
a build walkthrough.

| Slot | Target |
| --- | --- |
| Relic set | World-Remaking Deliverer, 4-piece |
| Planar set | Bone Collection's Serene Demesne, 2-piece |
| Body | CRIT DMG |
| Feet | HP% > Speed |
| Sphere | Ice DMG = HP% |
| Rope | HP% > Energy Regen |
| Substats | CRIT Rate (until capped) = CRIT DMG > HP% > Speed |
| HP | 7,000 – 8,000 |
| CRIT Rate | 65% |
| CRIT DMG | 160 – 180%+ |
| Speed | 99+ |
| Trace order | Ultimate = Memo Skill = Skill > Talent = Memo Talent > Basic |
| Major traces | A2 > A4 > A6 |

The 65% CRIT Rate figure is measured before her A2 trace, which adds a flat 35%
and takes her to 100%. The CRIT DMG figure is measured before her Talent buff.
Speed does not need to be high, because the explosion grants up to +50% Speed
until her next turn.

Eidolon notes: E1 raises all memosprite damage and scales up against fewer
enemies. E2 adds +2 to every Memoria gain and two more Darkest Riddle Charges,
which makes the state close to permanent.

## Sources

Where the figures above come from. Values are for maximum trace levels at
Eidolon 0.

- [Prydwen — March 7th • Evernight](https://www.prydwen.gg/star-rail/characters/march-7th-evernight)
  for the full kit text, the review by Sushou, and the team usage statistics.
- [Keqing Mains — Evernight](https://hsr.keqingmains.com/evernight/) for the
  playstyle breakdown, ability values by level, and the anti-synergy notes.
- [r/EvernightMainsHSR](https://www.reddit.com/r/EvernightMainsHSR/comments/1r5qtxo/does_evernight_gain_memoria_from_other_characters/)
  confirming that only Evernight and Evey generate Memoria through HP loss.
