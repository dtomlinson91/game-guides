# Resto Druid • Raid Rotation

A rotation reference for Restoration Druid in raid, The Venomous Abyss,
Midnight Season 2 (patch 12.1). It is built from **109 ranked Warcraft Logs
parses** across all nine bosses, not from guide sites. Where a number appears
below, it was measured in a real log.

> [!IMPORTANT]
> This guide replaces an earlier version that was wrong. The earlier version
> said Regrowth should outnumber Rejuvenation, and that you should cast Wild
> Growth only during heavy damage. Both claims are contradicted by the log
> data. See [What Changed](#what-changed).

## Quick Reference

Read this during a fight. **The rotation is a set of rates, not a priority
list.** Hit the rates and the priorities take care of themselves.

| Press this | Target rate | Field range |
| --- | --- | --- |
| **Wild Growth** | **on cooldown, ~4.3 per minute** | 2.95 – 5.08 |
| **Swiftmend** | **on cooldown, ~5.5 per minute** | 3.83 – 6.19 |
| **Rejuvenation** | **~18 per minute** | 10.5 – 32.7 |
| Rejuvenation + Regrowth combined | ~32 per minute | 24.8 – 41.2 |
| Lifebloom | on yourself, once, then leave it | 103 of 109 |
| Innervate | 2 per fight, on yourself | 109 of 109 |

| Situation | What to press |
| --- | --- |
| Baseline, all fight | Wild Growth and Swiftmend on cooldown. Rejuvenation between them. |
| Known spike incoming | Rejuvenation across the raid 5-10s early, then Wild Growth as it lands. |
| One player dropping | Nature's Swiftness + Regrowth. Then Regrowth. |
| Raid-wide emergency | Convoke the Spirits. It is a 1 minute cooldown, not a saved one. |
| The hardest moment | Tranquility. |
| Mana at ~70% | Innervate, on yourself. |
| Someone about to be hit | Ironbark. It costs no global cooldown. |

> [!TIP]
> **Ignore the Rejuvenation-to-Regrowth ratio entirely.** Among 109 ranked
> druids it ranges from 0.44:1 to 11.25:1 and predicts nothing. Fix the rates
> above and your ratio will settle wherever it settles.

## Two Modes

Every fight in this raid contains both modes at once. This is the mental model
to hold, and it replaces the idea that fights come in two types.

**Baseline** is the constant damage floor. Every boss in The Venomous Abyss has
a permanent, near-raid-wide damage-over-time effect that ticks on 22 to 30
players every one or two seconds for the whole fight. It is 17% to 61% of all
raid damage taken. You handle it with **rates** — Wild Growth and Swiftmend on
cooldown, Rejuvenation flowing between them. This is most of your healing and
it never changes between bosses.

**Spike** is a discrete mechanic layered on top. You handle it with a **ramp** —
Rejuvenation out 5 to 10 seconds early, then Wild Growth as the damage lands.
Only four of the nine bosses have a spike component worth naming, and they are
listed per boss below.

> [!WARNING]
> There is no third mode where you stop pressing Wild Growth. Every ranked
> druid on every boss casts it between 2.95 and 5.08 times per minute. Holding
> it for a spike is strictly worse than pressing it, because on these fights
> something is always ticking on almost everyone.

## Fight Profiles

Measured from damage-taken tables and second-by-second timelines, one boss at a
time. **Blanket** is the permanent raid-wide effect. **Spot** is damage
concentrated on one or two players, which is the only thing that should pull
you off the baseline rotation.

| Boss | Length | Blanket damage | Spot or spike |
| --- | --- | --- | --- |
| Nymrissa Wavecaller | ~5m30s | Abyssal Rain, 49.8%, every 2s on 24-25 of 27 | **Wild Bite, 30.3%, on 1-2 players** |
| Sszorak | ~5m30s | Ula'tek's Presence 29.0% on all 30, Mutilated Gash 32.9% bleed on 22 | None |
| The Twin Fangs | ~7m | Toxic Fumes 38.7% on 30 of 30, Eternal Venom 22.2% | Tank damage only |
| The Coiled Altar | ~7m45s | Coalesced Venom, 33.6%, fast pulse on ~23 | None |
| Entombed Sentinels | ~5m45s | Mark of Acid + Mark of Blood, 50.2%, stacking | **Contaminate every ~9.5s**, Toxic Droplets soak |
| Vashnik the Malignant | ~6m30s | Toxic Vapor, 17.5%+, on all 29 | **Caustic Surge, 11 discrete waves**, Caustic Explosion 11.1% |
| Nek'zali the Soulcoiler | ~5m | Soulcoil Rite, 30.6%, stacks to 6 | **Corpse Blight, 4 windows of 20-30s** |
| Ula'tek | ~9m45s | Necrotic Vapors, 52.2%, on all 30 | **None at all** |
| The Lost Explorers | ~5m | Malevolent Presence 47.8% every 2s on all 30, Blink Nova 10.4% | None |

## Per-Boss Notes

What to change from the baseline rotation, boss by boss. Where a boss is not
listed with a change, the baseline rotation is the whole answer.

**Ula'tek** — the purest rate check in the raid. Zero burst spikes. After
detrending, not one second exceeds twice the local median. The damage climbs
smoothly to about 70% through the fight, then tapers. Do not ramp, do not save
anything. Press Wild Growth and Swiftmend on cooldown for nine minutes. It is
also the longest fight, so plan **three Innervates**, not two.

**Nymrissa Wavecaller** — the one genuine spot-healing fight. Wild Bite is
30.3% of all raid damage and lands on only one or two players at a time. This
is where Nature's Swiftness and Regrowth earn their place. Keep the baseline
running and use your single-target buttons on the Wild Bite target.

**Vashnik the Malignant** — the most ramp-shaped fight. Caustic Surge comes in
**11 discrete waves** and is non-zero in only 53 of 241 time buckets. You can
see these coming. Put Rejuvenation out before each one.

**Entombed Sentinels** — Contaminate is metronomic, one pulse every ~9.5
seconds. Do not ramp for each pulse. Instead keep Rejuvenation blanket coverage
permanently high, because the marks stack and the mean is 1.19 concurrent marks
per player.

**Nek'zali the Soulcoiler** — Soulcoil Rite stacks to 6 and holds 268 seconds
of uptime out of 271. Corpse Blight adds four windows of 20-30 seconds. Ramp
into those four windows and otherwise hold the baseline.

**The Twin Fangs and The Coiled Altar** — the flattest fights in the raid.
Twin Fangs runs Toxic Fumes on 30 of 30 every 2 seconds and Eternal Venom on 21
every 1 second. Nothing to ramp for. These are the two longest non-Ula'tek
fights, so mana and Innervate timing matter more than anything else.

**Sszorak and The Lost Explorers** — flat, and short enough that mana is not a
constraint. Straight baseline rotation.

## What Actually Matters

The 109-log sample shows which metrics separate strong druids from weak ones,
and which do not. This section is the whole point of the rewrite.

**Wild Growth casts per minute is the sharpest discriminator in the spec.** The
field range across all 109 ranked logs is 2.95 to 5.08, and the per-boss
medians sit between 4.08 and 4.53. That is a 0.45 spread across nine different
encounters. Every ranked druid, on every boss, at both difficulties, presses it
essentially on cooldown.

**The Rejuvenation-to-Regrowth ratio is not a metric at all.** Median 1.40,
range 0.44 to 11.25. Thirty-five of 109 ranked druids cast more Regrowth than
Rejuvenation, including the world rank-1 Mythic Sszorak parse at 0.70:1. Within
every single boss the correlation between ratio and healing is zero.

**The ratio tracks the player, not the fight.** Seventeen players appear on two
or more bosses. Between-player spread is 2.3 times the within-player spread.
One ranked druid is below 1.0 on all six of his fights. Another is above 2.2 on
all four of his. Their bands never overlap.

> [!CAUTION]
> Do not diagnose yourself, or anyone else, from the Rejuvenation-to-Regrowth
> ratio. It is a build-and-habit parameter with a seven-fold spread among
> world-ranked players on the same boss.

## Log Check

Open your log, select the **Casts** tab, and divide by fight length in minutes.
These are the only four numbers worth checking, in order.

| Metric | Target | Field floor |
| --- | --- | --- |
| **Wild Growth per minute** | 4.3 | **2.95 — below this, nothing else matters** |
| Swiftmend per minute | 5.5 | 3.83 |
| Rejuvenation per minute | 18 | 10.5 |
| Innervate casts | 2 to 3 | 1 |

Then check two binary items:

- **Lifebloom** — is it on one target all fight? 103 of 109 ranked druids park
  it on themselves. Exactly one row in 109 scattered it across more than two
  targets.
- **Spell power** — see [Check Your Gear](#check-your-gear).

> [!NOTE]
> **Overheal is not a diagnostic.** In the log that produced this guide, the
> weaker druid overhealed 39.5% and the stronger one 43.5%. Low overheal with
> low output means you are casting too little, not casting well.

## Things That Look Wrong But Are Not

Three habits that get criticised and should not be. Each was tested against the
109-log sample.

**Swiftmend on yourself is fine.** Median self-cast share among ranked druids
is 71%. Nineteen of 88 measurable rows self-Swiftmend 100% of the time,
including three rank-1 parses. Self-Swiftmenders skew slightly Regrowth-heavy,
which looks like one coherent build rather than a fault.

**A Regrowth-heavy rotation is fine.** A third of the ranked field runs it. On
Heroic Ula'tek, the rank-10 druid ran 0.56:1 at 407,059 healing per second, at
a **lower item level** than the druid this guide was written for.

**Skipping Ironbark is not diagnostic.** Twenty-four of 109 ranked logs cast it
zero times, including several rank-1 parses. Press it when you remember, but it
is not why anyone's healing is low.

## Check Your Gear

Before you change any keypress, read one number off your character sheet. A
rotation cannot compensate for a broken stat.

Compare your **Intellect** against others of your item level. In the log behind
this guide, one druid carried 1,987 Intellect at item level 315.2 while every
other Intellect user in the raid — including one at item level 305 — sat
between 2,711 and 3,520.

That deficit was worth roughly a third of a 2.78x healing gap. No amount of
correct casting recovers it.

> [!IMPORTANT]
> If your Intellect looks 30% or more below your peers at similar item level,
> inspect your weapon first. A same-slot, same-item-level weapon of the wrong
> primary stat gives you nothing and is easy to miss.

## Cooldowns

Plan these before the pull rather than reacting with them. None of them should
finish a fight unused.

| Cooldown | Cadence | Use it for |
| --- | --- | --- |
| Convoke the Spirits | 1 min | Any dangerous moment. Cast Wild Growth first. |
| Tranquility | 3 min | The single hardest moment. |
| Innervate | 3 min | Yourself, at ~70% mana. Two per fight, three on Ula'tek. |
| Nature's Swiftness | Medium | A player dropping low, paired with Regrowth. |
| Ironbark | Low | Anyone about to be hit. Off the global cooldown. |
| Barkskin | Low | Yourself. |

**Every one of 109 ranked druids used Innervate**, between one and four times,
median two. Not one skipped it. It is the most unanimous behaviour in the
entire dataset.

## Before The Pull

A checklist. Each item was missing from the weak log that prompted this guide.

- **Mark of the Wild** on the raid.
- **Symbiotic Relationship** on another player.
- **Flask** — check it is the caster flask, not a melee one.
- **Food buff**, and confirm the Well Fed icon.
- **Augment rune**.
- **Vantus Rune** for the boss.
- Ask the Evoker for **Source of Magic**.
- A **mana potion** on your bar.

## What Changed

This guide was rewritten on 2026-09-06 after a Warcraft Logs study contradicted
its previous contents. Recorded here so the errors are not reintroduced.

| Previous claim | Status |
| --- | --- |
| "Regrowth is your healing button, it should outnumber Rejuvenation" | **Wrong.** 32% of ranked druids do the opposite and ratio predicts nothing. |
| "Cast too much Rejuvenation and not enough Regrowth" is the top cause of low healing | **Wrong.** Reversed, then withdrawn entirely. |
| "Wild Growth is your mana throttle, cast during heavy damage only" | **Wrong, and the most expensive error.** Press it on cooldown. |
| "Swiftmend on cooldown, on yourself" then later "not on yourself" | **Both overstated.** Cast it on cooldown. The target barely matters. |
| "Rejuvenation is not your healing" | **Wrong.** It is the largest single source for many ranked druids. |
| Abundance is a window to spend | **Wrong.** Strong druids hold it 97% of a fight. It is a baseline. |
| Lifebloom on one target, near 100% uptime | **Confirmed.** 103 of 109. |
| Proactive HoTs before damage | **Confirmed**, but subordinate to raw cast rate. |

> [!NOTE]
> The earlier version was built from Icy Veins, Wowhead and Method. Those sites
> describe intended play and lag behind tuning. Where a written guide and a log
> disagree, the log wins.

## Sources

The evidence behind this guide, current as of 2026-09-06.

**Log data** — the primary source. 109 ranked Restoration Druid parses across
all nine encounters of The Venomous Abyss, Heroic and Mythic, pulled through
the Warcraft Logs API. Damage profiles measured per boss from damage-taken
tables and per-second timelines.

**Spell values** — read from live 12.1.0 tooltips, not from a guide:

- [Regrowth](https://www.wowhead.com/spell=8936/regrowth) — 536% / 67.5% split
- [Abundance](https://www.wowhead.com/spell=207383/abundance) — -60% cost, +60% crit at 5 Rejuvenations
- [Nature's Bounty](https://www.wowhead.com/spell=1263879/natures-bounty) — 10% splash
- [Intensity](https://www.wowhead.com/spell=1264649/intensity) — crits 260% effective

**Written guides** — retained for mechanics only, not for priorities:

- [Icy Veins](https://www.icy-veins.com/wow/restoration-druid-pve-healing-rotation-cooldowns-abilities)
- [Wowhead](https://www.wowhead.com/guide/classes/druid/restoration/rotation-cooldowns-pve-healer)
- [Method](https://www.method.gg/guides/restoration-druid/playstyle-and-rotation)

## Known Limits

What this guide cannot tell you. Stated so the next reader does not over-trust
it.

- **Every fight in this tier is a constant-damage fight.** There is no
  burst-shaped encounter anywhere in the sample. Whether a genuinely spiky
  fight in a future tier would change the rotation is **untested and unknown**.
- **The 109 rows are not 109 independent observations.** They come from about
  47 distinct players, and 17 players supply 50 rows.
- **Every row is a ranked log**, selected by healing per second. This describes
  strong play, not typical play. Healing per second also rewards blanket
  healing in a way that other metrics might not.
- **Mythic coverage is thin** — 24 rows across 6 of 9 bosses. Three bosses have
  no Mythic rankings at all.
- Ten ranked druids were unreachable behind anonymised reports and are absent
  from the sample.
