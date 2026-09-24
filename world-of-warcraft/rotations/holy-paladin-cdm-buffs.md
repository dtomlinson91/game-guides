# Holy Paladin — Cooldown Manager buffs

What to show on the built-in Cooldown Manager buff bar, and what to hide.
Midnight, patch 12.1, Season 2. It assumes **Herald of the Sun**. All 34
sampled Mythic raid logs played it, and no raid log played Lightsmith.

Every row below comes from 44 Warcraft Logs parses played by real players, not
from a written guide. The rule for inclusion is narrow. A buff earns a slot
only if it changes which button you press next. A buff that applies itself,
fires itself, and needs no reaction is noise, and noise hides the four icons
that matter.

## Track these

Seven auras change a decision. Each row states that decision. Duration is the
real window from the live tooltip, not the time the logs show players holding
it.

| Buff | Spell ID | Real window | The decision it drives |
| --- | --- | --- | --- |
| **Infusion of Light** | 54149 | 15 s | Press **Flash of Light** next. It becomes instant and heals far more |
| **Divine Purpose** | 223819 | 12 s | Your next spender is free and heals 15% more |
| **Dawnlight** | 431522 | 30 s, 2 charges | Your next **2** spenders each apply a Dawnlight |
| **Avenging Wrath** | 31884 | 30 s | The 30-second amplify window is running |
| **Light of the Martyr** | 447988 | rolling 5 s | Holy Shock heals 20% more. It is lost below the health gate |
| **Bestow Light** | 448087 | 3 stacks | Each stack adds 5% Holy Shock healing. It rides on the row above |
| **Hand of Divinity** | 414273 | 20 s | Your next 2 Holy Lights are instant. Only if talented |

Put the first four in **Tracked Buffs**, where they render as an icon. Put
Light of the Martyr and Bestow Light in **Tracked Bars**, because both are
duration or stack state you read at a glance rather than a yes-or-no proc.

> [!IMPORTANT]
> **Infusion of Light is the most valuable icon on the bar.** The 12.1 Holy
> 2-piece adds another 100% to the Flash of Light it empowers, so a single
> proc is worth far more than a normal cast. Across 618 consumptions in 12
> logs, players spent 81% on Flash of Light, 15% on Judgment and 3% on Hammer
> of Wrath. Not one proc expired unused.

> [!TIP]
> Light of the Martyr and Bestow Light are one system, not two buffs. Light of
> the Martyr gives 20% Holy Shock healing while you stay above the health gate.
> Bestow Light then adds 5% for every 5 seconds it survives, to 3 stacks. Take
> damage through the gate and you lose both. In the raid sample the pair
> dropped **4.23 times per minute**, and 52% of those drops reset the stacks.

> [!CAUTION]
> Do not read the durations from a log. Divine Purpose shows a median of 1.20 s
> in these parses, because players spend it on the next global. The real window
> is 12 seconds. Quoting the log figure would tell you to panic when you have
> ten seconds of slack.

## Hide these

Every aura below appears in a Holy Paladin log, and none of them changes a
press. Send them all to **Not Displayed**. The count in brackets is how many of
the 34 Herald raid logs carried it, which is why they look important.

- **Afterimage** (34/34) — a 0-to-20 counter of Holy Power spent. It resets on
  the same spender that crosses 20, in the same millisecond, so there is no
  window in which you could act on it.
- **Born in Sunlight** (34/34) — its uptime matches Avenging Wrath exactly.
  A second icon for a window you already track.
- **Hammer of Wrath** (25/34) — also matches Avenging Wrath exactly. Judgment
  is replaced on the bar anyway, so the button tells you.
- **Sun's Avatar** (34/34) and **Sun Sear** (34/34) — Herald effects that
  apply themselves from Dawnlights you already placed.
- **Beacon of the Savior** (34/34) — the apex talent moves itself to the
  lowest-health ally. You have no input.
- **Saved by the Light** (33/34), **Overflowing Light** (34/34) and
  **Glistening Radiance** (30/34) — three automatic absorb shields.
- **Will of the Dawn** (34/34) — 100% uptime movement speed. A permanent
  passive is the definition of a wasted slot.
- **Eternal Flame** and the **Dawnlight** heal-over-time (431381) — these
  belong on your raid frames, not on a personal bar. See below.

> [!NOTE]
> Afterimage is the tempting one. It sits at 98.5% uptime and climbs 3 stacks
> per Eternal Flame, so it reads like a resource bar. The event stream says
> otherwise. At stack 21 to 30 the log records the apply and the 20-stack
> removal at the same timestamp. The echo has already happened.

## Use the raid frames

Patch 12.1 gives healers a third tab, **Group Buffs**, which draws your own
heal-over-time effects on the raid frames instead of on a personal bar. Four
Holy Paladin auras belong there, because each one is a question about an ally
rather than about you.

- **Eternal Flame** — your main spender, cast about 12 times per minute
- **Dawnlight** (431381) — the 8-second heal your spenders apply
- **Beacon of Virtue** — 5 allies for 9 seconds, on a 15-second cooldown
- **Beacon of the Savior** — so you can see where the apex beacon moved

> [!TIP]
> Beacon of Virtue is worth a **Tracked Bar** as well as a raid-frame buff.
> The window is 9 seconds and the cooldown floor is 15 seconds, measured across
> 378 casts. You therefore spend at least 6 seconds of every cycle with no
> beacon transfer running. Knowing which state you are in changes whether a
> Light of Dawn is worth pressing now or in two globals.

## Where to set it

The path changed in 12.1, and the buff list lives in its own tab.

1. Press **Escape** and open **Options**.
2. Select **Gameplay Enhancements**, under the Gameplay header.
3. Scroll to **Cooldown Manager** and select **Advanced Cooldown Settings**.
4. Open the **Buffs** tab for the two lists above.
5. Right-click an aura to move it between **Tracked Buffs**, **Tracked Bars**
   and **Not Displayed**.
6. Open the **Group Buffs** tab for the raid-frame list.
7. Close with the red X. A prompt then saves the loadout for the spec.

> [!WARNING]
> The Cooldown Manager only lists auras Blizzard exposes for the spec. You
> cannot type in a spell ID. If a row above is missing from your Buffs tab,
> that aura needs a WeakAura instead. The IDs in the table are there so you can
> build one.

## Cooldowns, not buffs

The Buffs tab does not show cooldowns. Use the **Spells** tab, and sort these
five into **Essential Cooldowns**. The gaps are the observed minimum between
casts across the sampled logs, which is the real cooldown.

1. **Avenging Wrath** — 120 s floor, 51 gaps measured
2. **Divine Toll** — 30 s floor, 179 gaps measured. It arms Dawnlight
3. **Beacon of Virtue** — 15 s floor, 378 gaps measured
4. **Aura Mastery** — about 3 minutes, and the raid asks for it by name
5. **Lay on Hands** — the one button nobody can cover for you

Patch 12.1 also lets this tab track trinkets, combat potions and racials. It
can raise a sound or visual alert when a spell becomes available. Right-click a
spell and select **New Alert**.

## Observed rates

Median casts per minute across the 34 Herald of the Sun Mythic raid logs. Use
these to check your own parse rather than to set a target.

| Ability | Median per minute | Logs using it |
| --- | --- | --- |
| Holy Shock | 12.99 | 34/34 |
| Eternal Flame | 12.01 | 34/34 |
| Flash of Light | 9.64 | 34/34 |
| Beacon of Virtue | 3.38 | 34/34 |
| Judgment | 3.13 | 34/34 |
| Light of Dawn | 2.13 | 29/34 |
| Divine Toll | 1.67 | 34/34 |
| Avenging Wrath | 0.51 | 34/34 |
| Holy Light | 0.11 | 18/34 |

Infusion of Light lands on **37% of Holy Shocks**, median across 34 logs, range
0.25 to 0.65. It arrives about 5 times per minute.

> [!NOTE]
> Holy Light is the surprise. The 12.1 4-piece gives it a **100% chance** to
> grant Infusion of Light, which reads like a rotational loop. The raid field
> does not play it that way. Only 18 of 34 raid logs cast it at all, at a
> median of 0.11 per minute. Mythic+ is different, at 1.33 per minute for
> Herald and 2.60 for Lightsmith. Judgment carries the job in raid instead,
> at a 20% chance and 3.13 casts per minute.

> [!TIP]
> Cast rate does **not** change inside Avenging Wrath. The sample gives 53.3
> casts per minute inside the window against 50.3 outside it. Holy has no haste
> ramp, so the window is an amplify, not a different rotation. Do not build a
> separate burst sequence for it.

## Where logs beat tooltips

Four values in the current tooltips do not match what the logs record. Each one
would mislead you if you built a bar from the tooltip alone.

| Claim | Tooltip says | Logs say |
| --- | --- | --- |
| Infusion of Light chance | 10% per Holy Shock | 37% of Holy Shocks, median of 34 logs |
| Avenging Wrath duration | 20 s base, 24 s talented | **30.0 s** median, 34 of 34 logs |
| Divine Toll cooldown | 1 min, 45 s talented | **30.0 s** minimum gap, 179 gaps |
| Dawnlight trigger | Holy Prism or Barrier of Faith | **Divine Toll**, 190 of 191 applications |

> [!IMPORTANT]
> The Dawnlight row is the one that changes play. Wowhead's talent text names
> Holy Prism and Barrier of Faith as the trigger. No sampled log cast either
> spell. Divine Toll preceded 99% of Dawnlight applications, and Divine Toll
> casts and Dawnlight applications both sit at exactly 1.67 per minute. Divine
> Toll is the enabler in this build.

## Lightsmith differs

No sampled raid log played Lightsmith, so nothing above is validated for it.
Mythic+ splits 6 Lightsmith to 4 Herald across 10 keys, and the Lightsmith bar
is a different set. If you swap, track these instead. The
[Lightsmith Mythic+ guide](holy-paladin-lightsmith-mplus-rotation.md#buffs-to-track)
has the full list, measured from 16 more keys.

- **Divine Guidance** (460822) — your next Consecration carries the stored
  damage and healing. 17.75 applications per minute, the busiest buff in that build
- **Empyrean Legacy** (387178) — your next Word of Glory also fires Light of
  Dawn, at 25% more effect
- **Awakening** (414193) — your next Judgment crits for 30% more
- **Sacred Weapon** (432502) and **Holy Bulwark** (432496) — the two armaments
- **Masterwork: Weapon** (1271436) and **Masterwork: Bulwark** (1271383)

Lightsmith also casts Word of Glory rather than Eternal Flame, and uses Hand of
Divinity in all 6 logs. Herald used Hand of Divinity in 1 of 34 raid logs.

## The sample

44 Holy Paladin parses, pulled through the Warcraft Logs v2 API. Read this
before trusting any number above.

- **Raid, 34 logs.** Zone 53, The Venomous Abyss, Mythic only. Six encounters
  carried enough Holy Paladin parses to sample: Nek'zali the Soulcoiler,
  Sszorak, Entombed Sentinels, Vashnik the Malignant, The Lost Explorers and
  The Twin Fangs, plus the single Mythic parse on The Coiled Altar. Ranks 1,
  9, 21, 41, 66 and 91 of each encounter, so the band is wide rather than top-only.
- **Mythic+, 10 logs.** Zone 55, Altar of Fangs and Den of Nalorakk, key level
  19 to 21.
- 132 minutes of second-by-second cast and buff events across 12 of those logs.
- Regions CN, EU, US and KR.

> [!WARNING]
> The last two raid bosses are not represented. Mythic Ula'tek has zero ranked
> Holy Paladin parses and The Coiled Altar has one. Nothing here is tested
> against those two fights.

> [!NOTE]
> The hero talent split is derived from cast signatures, not from talent data.
> Warcraft Logs exposes talents only as opaque node IDs. Holy Bulwark and
> Sacred Weapon casts mark Lightsmith. Eternal Flame and Dawnlight mark Herald
> of the Sun. The two sets did not overlap in a single log.
