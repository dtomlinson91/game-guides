# Resto Druid • Raid Rotation

A rotation reference for Restoration Druid in raid, Midnight Season 2
(patch 12.1). It covers what to press while nothing is happening, how to
prepare for incoming damage, and how to answer a spike. It assumes your
talents and gear are already set.

The quick reference below is the mid-fight card. Everything after it explains
why the card says what it says.

## Quick Reference

Read this section during a fight. Each row is one situation and the casts that
answer it.

| Situation | What to press |
| --- | --- |
| Always | Lifebloom on **yourself**, 100% uptime. Refresh in its last 4.5 seconds. |
| Always | Swiftmend on cooldown, on yourself. Follow it with Rejuvenation. |
| Always | Keep 5 Rejuvenations out. This is the Abundance buff. |
| Raid healthy | Wrath. Refresh HoTs that are near expiry. Bank a Swiftmend charge. |
| Damage in 5-10s | Rejuvenation on the raid until Abundance is active. |
| Damage landing | Wild Growth, then Swiftmend, then Regrowth, Regrowth, Regrowth. |
| Picking a Regrowth target | Lowest player. Prefer one who already has a Regrowth HoT. |
| One player low | Nature's Swiftness + Regrowth. Then more Regrowth. |
| Raid-wide spike | Convoke the Spirits, or Incarnation 10-12s early. |
| The big hit | Tranquility, after a 15-20 second ramp. |
| Tank about to be hit | Ironbark. It is off the global cooldown, so it costs nothing. |
| Mana at 75% | Innervate, on yourself. |

> [!IMPORTANT]
> **Regrowth is your healing button.** Rejuvenation is the setup that makes
> Regrowth cheap and makes it crit. If you finish a fight having cast more
> Rejuvenations than Regrowths, you played it backwards. That single error
> explains most low healing numbers.

## Core Model

This is the whole spec in four sentences. Read it before the detail below.

Rejuvenation is not your healing. Five active Rejuvenations give you the
**Abundance** buff, which cuts Regrowth's mana cost by 60% and raises its
critical strike chance by 60%. You then spend that window on Regrowth, which is
where your healing actually comes from.

Separately, Lifebloom on yourself drives a second engine called **Everbloom**.
Every time your Lifebloom "blooms", it splashes healing to nearby allies. You
stack HoTs on yourself to make that bloom bigger and to make it happen more
often.

## Regrowth Split

Regrowth is a direct heal with a small HoT attached. The split matters, because
the small half is doing a job that is not healing.

| Part | Value | Share |
| --- | --- | --- |
| Initial heal | 536% spell power | ~89% |
| HoT, over 6 seconds | 67.5% spell power | ~11% |

So the healing lands when you cast it. The button is not a slow heal.

> [!IMPORTANT]
> The 11% HoT is the important half anyway. It is a **tag**. Three separate
> effects check whether a player already has a Regrowth HoT on them. See
> [Spread Or Stack](#spread-or-stack).

## Where Healing Comes From

Your healing is not one spell. It comes from four sources, and only the first
is a button you press for healing.

1. **Regrowth.** Your largest single source and your most frequent cast.
2. **Everbloom.** Your Lifebloom blooms, and that bloom cleaves 40% of its
   healing to up to 6 nearby allies. Photosynthesis and Swiftmend make it bloom
   far more often than its natural rate.
3. **Nature's Bounty splash.** Every Regrowth you cast also heals **all other
   allies who have a Regrowth HoT** for 10% of that heal.
4. **The dedicated AoE.** Wild Growth, Efflorescence, Tranquility, and the
   Rejuvenation that Power of the Archdruid spreads to 3 targets.

> [!NOTE]
> You are right that the spec feels short of AoE buttons. It is not short of
> AoE **healing**. Most of it is routed through spells that look single-target:
> Swiftmend, Regrowth, and a Lifebloom on yourself. This is a common complaint
> about the Midnight design and it is a fair one, but the healing is there.

## Spread Or Stack

This answers "one person or several". Spread first, then stay on the people you
already touched. Here is why.

Three effects check for a Regrowth HoT on the target:

- **Nature's Bounty** — your Regrowth splashes 10% of its healing to every
  *other* ally who has a Regrowth HoT. More tagged allies means more splash on
  every later cast.
- **Improved Regrowth** — your Regrowth has **+40% critical strike chance** if
  the target already has a Regrowth HoT.
- **Mastery: Harmony** — every HoT on the target raises the healing they
  receive from you.

Stack that with Abundance (+60% crit) and **Intensity**, which makes a Regrowth
critical heal 260% effective instead of 200%.

**So the pattern is:**

1. Spread the first Regrowths across different injured players. Each one plants
   a tag.
2. Keep casting Regrowth on players who already carry a tag. Those casts crit
   nearly always, hit for 260%, and splash to everyone else you tagged.

> [!TIP]
> In practice you do not choose between spread and stack. Cast Regrowth on
> whoever is lowest. After the first few casts most of the raid is tagged, so
> the "correct" target is usually also the injured one. Do not stand there
> re-casting on one healthy player to farm the crit bonus.

> [!WARNING]
> The Regrowth HoT lasts 6 seconds. Your tag network decays fast. This is
> another reason the ramp matters: the tags you plant 10 seconds early are gone
> by the time the damage lands.

## Why Healing Was Low

This section names the likely causes. Work down the list in order. The first
three cause the most damage to your numbers.

1. **You cast too much Rejuvenation and not enough Regrowth.** Rejuvenation is
   a setup spell. Regrowth is the payoff. Most players who feel weak are stuck
   in the setup half of the cycle.
2. **Lifebloom was not on you, or it fell off.** In raid it belongs on
   yourself. It should sit at 100% uptime. Every gap removes your Everbloom
   splash healing.
3. **You did not press Swiftmend on cooldown.** A Swiftmend that heals for
   nothing is still a strong cast, because of what it triggers. See
   [Swiftmend Value](#swiftmend-value).
4. **You healed after the damage instead of before it.** HoTs that land after
   a hit heal a player who is already dead or already topped up.
5. **You saved cooldowns "just in case".** An unused Tranquility heals for
   zero. Plan the fight and spend them.
6. **You had empty global cooldowns.** During calm periods you should be
   casting something. See [Downtime](#downtime).

> [!NOTE]
> Healing meters undercount HoT healers. If another healer tops a player before
> your Rejuvenation ticks, your heal becomes overheal and the meter shows
> nothing. This is real, but do not use it as the explanation until you have
> fixed the six items above.

## The Four States

Every moment of a raid fight is one of four states. Deciding which state you
are in is most of the skill. The rest is muscle memory.

- **Maintenance** — the background job. It never stops.
- **Downtime** — nobody is hurt and nothing is coming. Generate mana.
- **Ramp** — damage arrives in 5 to 20 seconds. Prepare.
- **Payoff** — damage is landing now. Spend.

## Maintenance Casts

These run at all times, in every state. They are cheap. Doing them reliably
raises your healing more than any other single change.

- **Lifebloom on yourself.** Not the tank. In raid you stack healing modifiers
  on yourself, so your Everbloom splash heals the raid for more. Refresh it at
  any point in its last 4.5 seconds and you still get the bloom.
- **Efflorescence.** With the **Lifetreading** talent it follows your Lifebloom
  target automatically, which is you. This means your own position sets where
  it lands, so stand near other players.
- **Swiftmend on cooldown, on yourself.** Follow it with Rejuvenation. The
  **Power of the Archdruid** talent then spreads that Rejuvenation to 3 targets
  for one global cooldown.
- **1-2 Rejuvenations on yourself.** These proc **Photosynthesis**, which is
  extra blooms.

> [!TIP]
> Refresh any HoT that has less than about 5-6 seconds left and you lose
> nothing. This is the pandemic rule. You do not need to wait for a HoT to
> expire.

## Swiftmend Value

Swiftmend looks like a single-target heal. It is not. This section explains why
you press it even when nobody needs healing.

One Swiftmend cast triggers all of the following:

- A **Grove Guardian**, which is 5% increased healing done while it lives.
- Your Lifebloom **blooms 3 times in a row**, at the fourth Everbloom point.
- A **Symbiotic Blooms** HoT on the target, raising healing they receive by 20%.
- **Reforestation** progress, if talented.
- A free **Power of the Archdruid** Rejuvenation spread on your next cast.

> [!IMPORTANT]
> A Swiftmend that is 100% overheal is still a good cast. Press it on cooldown.
> Keep one charge banked when you can see a spike coming.

## The Abundance Cycle

This is the loop that produces your healing. It is the single most important
pattern to learn.

1. Cast Rejuvenation until 5 are active on the raid. Batch these casts together
   rather than spreading them out.
2. Press Swiftmend just before a Rejuvenation. That cast now spreads to 3
   targets, so you reach 5 stacks much faster.
3. With Abundance active, cast Regrowth. It is cheap and it critically strikes
   often.
4. Keep casting Regrowth while the window lasts.

> [!TIP]
> Track the Abundance buff on your screen. If you cannot see it, you are
> guessing. This is the one buff worth building a WeakAura for.

## Ramp Sequence

A ramp is what you do in the 5 to 20 seconds before a known raid hit. Raid
damage is scheduled, so you can nearly always see it coming.

1. Confirm Lifebloom is on you and Efflorescence is down.
2. Cast Rejuvenation across the raid until Abundance is active.
3. Cast Wild Growth as the boss begins the cast.
4. Cast Swiftmend.
5. Cast Regrowth on the most injured player, then keep casting Regrowth until
   the group is stable.

> [!WARNING]
> Do not start a ramp after the damage lands. Restoration Druid heals forward
> in time. A HoT applied to an injured player heals them over the next 12
> seconds, which is far too slow to save anyone from a spike.

## Burst Healing

Burst is the payoff state. Your answer differs for raid-wide damage and for one
player about to die.

**Raid-wide, planned:** run the Tranquility ramp. See
[Tranquility Ramp](#tranquility-ramp).

**Raid-wide, unplanned:** press Convoke the Spirits. It has a 1 minute
cooldown, so treat it as a frequent tool rather than a saved one. Cast Wild
Growth first, then Convoke.

**One player, sharp damage:** Nature's Swiftness + Regrowth, then keep casting
Regrowth. With the **Overgrowth** talent you self-cast this instead. It
refreshes your own HoTs, splashes to your other Regrowth targets through
**Nature's Bounty**, and procs Photosynthesis for the next 10 seconds.

**One player, damage over time:** put 1-2 Rejuvenations on them first, then
Regrowth.

> [!CAUTION]
> Moving Lifebloom to a dying player costs you all 3 stacks and your
> Efflorescence position. In raid, do not do it. Use Ironbark and Regrowth
> instead.

## Tranquility Ramp

Tranquility is your largest cooldown, and it is much larger if you prepare for
it. This ramp is worth planning before the pull.

Tranquility extends every one of your HoTs by 10 seconds, through the
**Flourish** talent. So the value comes from how many HoTs are already out when
you press it.

Start about 15-20 seconds before the damage:

1. Cast Wild Growth.
2. Cast as many Regrowths as you can. Regrowth is the most valuable HoT to
   extend, because Nature's Bounty makes later Regrowths splash to every target
   that has one.
3. Cast Rejuvenations to fill any remaining globals.
4. Press Tranquility.
5. Spend the extended window on Regrowth.

The whole sequence is roughly 20-25 seconds of healing.

> [!TIP]
> If you play Incarnation: Tree of Life, press it before Tranquility. Its
> duration pauses while you channel, so you get both cooldowns for the price of
> one window.

## Downtime

This is what you asked about directly. Downtime is when nobody is hurt and no
damage is due. It has a job, and the job is mana.

In priority order:

1. **Top up maintenance.** Refresh Lifebloom if it is near expiry. Press
   Swiftmend if it is off cooldown. Re-place Efflorescence if you moved.
2. **Cast Wrath.** The **Master Shapeshifter** talent returns mana on every
   Wrath. This mana is what pays for Wild Growth later. It is the main reason
   to press it.
3. **Cast Starsurge on cooldown**, then Wrath, for single target. Cast Starfire
   for multiple targets. Cast Moonfire or Sunfire while moving.
4. **Pre-place Rejuvenations** if damage is due soon. This is the start of your
   next ramp.

> [!NOTE]
> If damage is heavy and there is no real downtime, wait until Abundance drops
> before you cast Wrath. Wrath during an Abundance window wastes cheap
> Regrowths, which are more efficient than the mana Wrath returns.

Catweaving produces more damage than Wrath, but your damage is a low priority.
Learn the healing loop first. Wrath exists so that a spare global does
something useful.

## Cooldown Plan

These are the buttons with a real cooldown. Plan them before the pull rather
than reacting with them.

| Cooldown | Cadence | Use it for |
| --- | --- | --- |
| Tranquility | 3 min | The single most dangerous moment. Ramp into it. |
| Convoke the Spirits | 1 min | Any dangerous moment. Cast Wild Growth first. |
| Incarnation: Tree of Life | ~1 min 40s | Long damage phases. Press 10-12s early. |
| Innervate | 3 min | Yourself, first cast at ~75% mana. |
| Nature's Swiftness | Medium | A player dropping low. Self-cast with Overgrowth. |
| Ironbark | Low | Anyone about to be hit. Off the global cooldown. |
| Barkskin | Low | Yourself, whenever you are in danger. |

> [!IMPORTANT]
> Ironbark is off the global cooldown and comes back quickly. Pressing it costs
> you nothing at all. Most players use it far too rarely.

**Convoke or Incarnation** is a per-fight choice. Convoke suits fights with
frequent, sharp damage. Incarnation suits long damage phases and heavy movement
fights, because it makes Regrowth instant.

## Mana

Mana problems are nearly always a symptom of the wrong cast mix, not of bad
regeneration. This section names the fix.

- **Wild Growth is your mana throttle.** It is your most expensive spell. Cast
  it during heavy damage only. Do not cast it simply because it is available.
- **Regrowth without Abundance is expensive.** Regrowth with Abundance is
  cheap. If you are casting Regrowth outside the buff, that is a mana leak.
- **Too few Regrowths causes mana problems**, not too many. Casting more
  Rejuvenations to compensate makes it worse.
- **Fit in every Innervate you can.** Start at around 75% mana rather than
  waiting until you are low.

## Check Your Log

A log turns "my healing was low" into a named error. Do this after your next
raid rather than guessing.

Open the fight on Warcraft Logs and select the **Buffs** tab on yourself. Check
the uptime on these four:

| Buff | Target uptime |
| --- | --- |
| Lifebloom | 100% |
| Rejuvenation | 90%+ |
| Rejuvenation (Germination) | 90%+ |
| Regrowth | 90%+ |

Then check your cast counts. **Regrowth casts should outnumber Rejuvenation
casts.** If they do not, that is your answer.

> [!TIP]
> Do not chase all four at once. Pick the lowest one and improve it over a
> single raid night. Lifebloom uptime is usually the cheapest to fix and the
> largest gain.

## Hero Talents

You have two hero talent trees. This section explains what changes between
them, which is less than people expect.

**Wildstalker** is the common raid choice. Its Symbiotic Blooms HoT raises
healing received on the target, which feeds your Everbloom splash.

**Keeper of the Grove** gives Sylvan Beckoning, which empowers a Swiftmend to
summon a Dryad that casts a small Tranquility. Watch for that buff and spend
it.

> [!NOTE]
> The rotation does not meaningfully change between the two trees. Everything
> in this guide applies to both. Do not re-learn the spec because you switched.

## Tier Set

The Season 2 set is passive. It changes nothing about how you play, but it
explains one habit.

- **2-piece:** Rejuvenation has a 15% chance to grant **Genesis**, raising all
  HoT healing by 15% for 8 seconds. It stacks.
- **4-piece:** Genesis lasts 8 seconds longer. Nature's Swiftness, Tranquility,
  Convoke the Spirits and Incarnation: Tree of Life all grant it every time.

The set rewards pressing your cooldowns often. This is another argument against
saving them.

## Before The Pull

A short checklist. Missing one of these costs healing for the whole fight.

- Cast **Mark of the Wild** on the raid.
- Put **Symbiotic Relationship** on another player. A squishy DPS is fine.
- Apply flask, food, and weapon oil.
- Start casting **Rejuvenation** a few seconds before the pull if damage arrives
  early.

## Sources

Where the numbers and priorities in this guide came from, current as of
2026-09-04.

- [Icy Veins — Restoration Druid Healing Rotation, Cooldowns and Abilities](https://www.icy-veins.com/wow/restoration-druid-pve-healing-rotation-cooldowns-abilities)
- [Icy Veins — Restoration Druid Healing Easy Mode](https://www.icy-veins.com/wow/restoration-druid-pve-healing-easy-mode)
- [Wowhead — Restoration Druid Rotation Guide, Midnight](https://www.wowhead.com/guide/classes/druid/restoration/rotation-cooldowns-pve-healer)
- [Method — Restoration Druid Playstyle and Rotation](https://www.method.gg/guides/restoration-druid/playstyle-and-rotation)
- [Archon — Restoration Druid Raid Build](https://www.archon.gg/wow/builds/restoration/druid/raid/overview/heroic/midnight-falls)
- [r/wownoob — any tips for a newbie resto druid](https://www.reddit.com/r/wownoob/comments/1s2edgz/any_tips_for_a_newbie_resto_druid_for_the/)
- [r/wow — I have not been liking resto druid anymore](https://www.reddit.com/r/wow/comments/1vwvduq/i_have_not_been_liking_resto_druid_anymore/)

Spell values are read from the live 12.1.0 Wowhead tooltips, not from a guide:

- [Regrowth](https://www.wowhead.com/spell=8936/regrowth) — 536% / 67.5% split, Improved Regrowth +40% crit
- [Abundance](https://www.wowhead.com/spell=207383/abundance) — -60% cost, +60% crit at 5 Rejuvenations
- [Nature's Bounty](https://www.wowhead.com/spell=1263879/natures-bounty) — 10% splash
- [Intensity](https://www.wowhead.com/spell=1264649/intensity) — crits 260% effective

> [!NOTE]
> Reddit carries very little Midnight Season 2 raid content for this spec. The
> threads above confirm the shape of the playstyle, including the self-cast
> raid build, but the rotation detail here comes from the guide sites. Where
> Method and Icy Veins disagreed on the Lifebloom target, this guide follows
> Icy Veins and Wowhead, which both specify self-cast in raid and tank in
> dungeons.

> [!CAUTION]
> Guide sites carry stale tuning numbers. Method's page states Nature's Bounty
> at 20%. The live tooltip says **10%**, after a run of nerfs from 40% to 30%
> to 20%. Always check the Wowhead tooltip before you trust a percentage in a
> written guide, including this one.
