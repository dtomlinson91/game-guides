# Retribution Paladin — Mythic+ rotation

A combat reference for Retribution Paladin in Mythic+. Midnight, patch 12.1,
Season 2. It assumes **Herald of the Sun**, which all 24 sampled logs played.
Every number comes from 24 Warcraft Logs keys played by real players at key
level 16 to 18, not from a written guide. Where the logs and the guide sites
disagree, this file follows the logs and says so.

Sections run in order of how often you need them. The press lists come first,
then what to check when something feels wrong, then one-time setup at the end.

## Single target

Press the first line that is ready. This is a boss, or any one target. Spend
Holy Power on sight — never bank it waiting for a better button.

1. **Avenging Wrath + Execution Sentence** — one macro, every 60 seconds
2. **Wake of Ashes** — on cooldown, about every 30 seconds
3. **Divine Toll** — but only about 5 seconds into Avenging Wrath
4. **Hammer of Wrath** — only while Avenging Wrath is up
5. **Judgment** — only while Avenging Wrath is down
6. **Blade of Justice** — the moment it lights up
7. **Divine Storm** — one cast, after Divine Arbiter procs from Final Verdict
8. **Final Verdict** — everything else

> [!NOTE]
> Line 7 is not an AoE cast. On a genuine one-enemy pull, Divine Storm is still
> 23% of all spender casts across 15 windows. It is the tier set proc, and it is
> never cast twice in a row on one target.

## AoE

Identical to the single-target list except for the last two lines. The
cooldowns and their timing do not change at all between the two rotations.

1. **Avenging Wrath + Execution Sentence** — one macro, every 60 seconds
2. **Wake of Ashes** — on cooldown, about every 30 seconds
3. **Divine Toll** — but only about 5 seconds into Avenging Wrath
4. **Hammer of Wrath** — only while Avenging Wrath is up
5. **Judgment** — only while Avenging Wrath is down
6. **Blade of Justice** — the moment it lights up
7. **Final Verdict** — one cast, after Divine Arbiter procs from Divine Storm
8. **Divine Storm** — everything else

> [!TIP]
> Only the spender swaps. If you learn one skeleton, you know both rotations.

## When to swap

Divine Storm takes over as the target count rises. The change is gradual, not a
switch you flip at a fixed number.

| Enemies in the pull | Divine Storm share of spenders |
| --- | --- |
| 1 | 23% |
| 3 | 43% |
| 4 to 6 | 38% |
| 7 to 9 | 44% |
| 10 to 24 | 57% |
| 25 or more | 63% |

> [!WARNING]
> These counts are distinct enemies seen across a whole pull, not enemies alive
> at the same moment. The data therefore **cannot** give you a precise "swap at
> N targets" rule. Use it as direction of travel: one target is Final Verdict
> with a Divine Storm weave, a real pack is Divine Storm with a Final Verdict
> weave, and the middle is a judgement call.

Neither spender is ever dropped, and your tier set is the reason. **Divine
Arbiter** is the patch 12.1 4-piece. It fires when you consume a Divine Purpose
proc, and it empowers the Holy Power spender you did *not* just use. So a
single-target rotation still weaves in Divine Storm, and an AoE rotation still
weaves in Final Verdict.

## The burst window

This is the part that matters most for your damage. Avenging Wrath is a
60-second cooldown for Retribution, not the 2 minutes its tooltip shows, and a
hidden spec passive causes that. The field presses it about every 66 seconds and
gets 21 to 27 uses per key.

The window has a reliable **shape**, measured across 561 burst windows. Timings
are seconds after the Avenging Wrath press.

| Time | Press |
| --- | --- |
| 0.0 s | Avenging Wrath |
| +0.4 s | Execution Sentence |
| +1.1 s | Wake of Ashes |
| +1.9 s | First spender |
| +5.0 s | Divine Toll |
| +6.9 s onward | Hammer of Wrath, and keep spending |

> [!CAUTION]
> The exact order of Execution Sentence and Wake of Ashes is **not** agreed. 17
> of 24 logs press Execution Sentence first, 7 press Wake of Ashes first. The
> strict full sequence holds in only 30% of windows. What is firm is the
> grouping: Avenging Wrath, Execution Sentence and Wake of Ashes all inside 5
> seconds, Divine Toll at about 5 seconds, Hammer of Wrath after that.

The burst window is the same on a boss and on trash. Only the spender changes.

## Opening a pull

Do not open with a cooldown. Across 82 parsed openers there is not one cast
before the pull starts, and Avenging Wrath is the first cast in only 27%.

1. **Blade of Justice** or **Judgment** at range — 67% of openers start this way
2. Let it land, then press the Avenging Wrath macro a few seconds in
3. Follow the [burst window](#the-burst-window)

> [!IMPORTANT]
> In 33 of 84 boss pulls, Avenging Wrath was still on cooldown from the trash
> before the boss. Its first cast arrived a median 19 seconds into the fight.
> Any opener that assumes cooldowns are ready applies to at most 61% of boss
> pulls in a real key.

## Two rules that surprise

These are the things a written priority list will not tell you, and both are
strongly supported by the logs.

**Judgment disappears during Avenging Wrath, and Hammer of Wrath replaces it.**
Two logs measured this directly and agree exactly: Hammer of Wrath 113 of 113
casts inside the window, Judgment 0 of 157 and 0 of 156. Across all 561 burst
windows, Hammer of Wrath appears in 91% and Judgment in 0.7%. When the window
opens, the button you were pressing every 11 seconds is gone and a different
one takes its place.

**Divine Toll is held for the burst. Wake of Ashes is not.** Divine Toll lands
inside Avenging Wrath in 97% of boss casts. Wake of Ashes runs on its own
30-second cooldown and is cast about twice per Avenging Wrath cycle — one
inside the window, one between windows. Holding Wake of Ashes costs you casts.

> [!NOTE]
> Blade of Justice is also pushed down the priority during Avenging Wrath. It
> is only 17% to 25% inside the window in the two logs that measured it,
> because Hammer of Wrath takes those globals.

## Filling the gaps

There is no clever filler ability to learn. When nothing is off cooldown, you
press a spender again.

Across 24,363 on-GCD casts, 57.9% are a Holy Power spender, and 37.7% of
spender casts directly follow another spender. Every generator is sandwiched
between spenders — Blade of Justice is followed immediately by a spender 89% of
the time, Hammer of Wrath 94%, Divine Toll 96%.

> [!TIP]
> Do not hold a generator back to avoid wasting Holy Power. The field spills a
> median 23% of everything it generates, concentrated in Hammer of Wrath (44%)
> and Wake of Ashes (40%), because those are pressed on cooldown regardless.
> Keeping the global cooldown full matters far more than the spill.

> [!WARNING]
> That rule is about **generators**, not spenders. It does not mean you should
> spend the moment you reach 3 Holy Power. Doing that leaves you empty and
> waiting. See [Between burst windows](#between-burst-windows) for what the
> field actually does.

## Between burst windows

The rotation feels thin once the window closes, and that feeling is real. Two
logs recorded every cast split by whether Avenging Wrath was up. They agree
closely, and the drop is large.

| | Avenging Wrath up | Avenging Wrath down |
| --- | --- | --- |
| **Presses per minute** | 60 | 40 |
| **Gap between presses** | 1.00 s | 1.50 s |
| Hammer of Wrath | 12.8 /min | **0** |
| Divine Toll | 2.5 /min | **0** |
| Judgment | **0** | 9.3 /min |
| Blade of Justice | 2.7 /min | 6.9 /min |
| Spenders | 37.2 /min | 22.1 /min |
| Crusading Strikes (auto) | 36 /min | 26 /min |

Avenging Wrath is up about a third of the key, so two thirds of your playtime is
the right-hand column. That is the normal state of the spec, not a fault.

> [!IMPORTANT]
> **40 presses a minute at a 1.5 second global cooldown is the ceiling.** The
> field is not idle outside the window — it is global-cooldown capped there too.
> The pace halves because Avenging Wrath grants stacking haste, so the same
> button count fits into a 1.00 second global instead of a 1.50 second one.
> Nothing is wrong when it feels slower. Something is wrong if you are standing
> still.

### What fills it

The honest answer is the spender. Outside the window, 56% of everything you
press is Final Verdict or Divine Storm, against only 17.6 generators a minute.

1. **Judgment** — the moment it lights up. It only exists out here
2. **Blade of Justice** — the moment it lights up, and it resets constantly
3. **Wake of Ashes** — on cooldown, about every 30 seconds
4. **Spend** — everything else. There is no fourth generator to find

> [!NOTE]
> You lose three buttons when the window closes and get one back. Hammer of
> Wrath, Divine Toll and Execution Sentence all go to zero. Judgment returns at
> 9.3 casts a minute. That is a net loss of about four presses a minute, and it
> is why the rotation feels thinner rather than genuinely empty.

### Why you may be starved

If you are truly out of buttons rather than just slower, the cause is almost
always your Holy Power income. Here is where it comes from, pooled across the
six logs that recorded it.

| Source | Share of all Holy Power |
| --- | --- |
| **Crusading Strikes** | 38% |
| **Blade of Justice** | 30% |
| Hammer of Wrath | 11% |
| Judgment | 9% |
| Wake of Ashes | 7% |

> [!CAUTION]
> **Your biggest Holy Power source is your auto-attack.** Crusading Strikes
> replaces Crusader Strike and generates Holy Power every time you swing, off
> the global cooldown. It is 38% of your income. Every second you are out of
> melee range, your resource engine is switched off. In Mythic+ that means
> running between packs, sidestepping a mechanic, or chasing a caster all cost
> you Holy Power directly. Most specs lose damage when they move. You lose the
> resource itself.

Work through these in order. The first two are the common causes.

1. **Check you are in melee and swinging.** This is the single biggest cause.
   Crusading Strikes and the Art of War resets that feed Blade of Justice both
   come from auto-attacks.
2. **Check Crusading Strikes is actually talented.** Without it you have
   Crusader Strike, which is a button on a cooldown rather than a passive
   engine. That is a completely different resource economy, and this guide does
   not describe it. No sampled log used it.
3. **Check your tier set.** The 2-piece gives Divine Purpose a 10% higher
   chance to proc, and every proc is a free spender. The sampled players all had
   it at item level 321.
4. **Accept lower haste.** Crusading Strikes fires with your swing timer, so
   less haste means fewer swings and less Holy Power. The gap closes as you gear.

> [!WARNING]
> **"Do not worry about overcapping" does not mean "spend the instant you reach
> 3."** It means press your generators on cooldown even when some Holy Power
> will spill. The field does bank a little: 64% of spender casts come in chains
> of two or more, so players accumulate and then dump, rather than spending one
> at a time. If you spend at 3 every time, you will sit empty waiting for a
> generator — which is exactly the problem you are describing.

> [!TIP]
> Hammer of Wrath and Wake of Ashes waste 44% of the Holy Power they generate,
> and that is correct play. They are pressed on cooldown regardless. Judgment
> wastes only 4%, because it is the one you press to fill a gap rather than on a
> timer.

## Observed cast rates

Use this to check your own logs. These are casts per minute, median across 24
logs, with the full range. Boss windows and AoE windows are separated.

| Ability | Boss median | Boss range | AoE median | AoE range |
| --- | --- | --- | --- | --- |
| Final Verdict | 19.1 | 11.8–24.4 | 8.1 | 6.0–11.2 |
| Divine Storm | 9.6 | 6.4–14.8 | 17.3 | 13.9–21.2 |
| Blade of Justice | 6.7 | 4.5–8.3 | 6.0 | 5.1–8.2 |
| Judgment | 6.1 | 4.9–7.3 | 5.6 | 4.7–6.6 |
| Hammer of Wrath | 4.8 | 3.7–5.6 | 4.0 | 2.9–4.5 |
| Wake of Ashes | 1.8 | 1.4–2.0 | 1.6 | 1.4–1.9 |
| Avenging Wrath | 0.9 | 0.8–1.1 | 0.8 | 0.7–1.0 |
| Execution Sentence | 0.9 | 0.8–1.1 | 0.8 | 0.7–1.0 |
| Divine Toll | 0.9 | 0.7–1.7 | 0.8 | 0.7–1.4 |

> [!NOTE]
> **Wake of Ashes is the tightest band in the whole sample.** Every one of 24
> logs sits between 1.4 and 2.0 casts per minute on bosses. There is a single
> correct rate and no judgement involved. If yours is low, that is a real
> problem to fix first.

Ignore **Crusading Strikes** in any cast table. It is a passive that replaces
Crusader Strike and makes your auto-attacks generate Holy Power. It fires about
40 times a minute without a global cooldown, and it is 44% of all cast events.
It is not a button.

## Buttons you will not press

Several abilities that written guides discuss have zero casts across all 24
logs. Do not go looking for them on your bars.

- **Crusader Strike** and **Templar's Verdict** — replaced by Crusading Strikes
  and Final Verdict
- **Consecration** — cast automatically by Blade of Justice, through
  Consecrated Blade. It still does about 1% of your damage
- **Crusade** — a passive in Midnight, not a button
- **Shield of Vengeance** — fires from Divine Protection, which *is* a button
- **Final Reckoning** and **Word of Glory** — absent from the live build
- Every Templar ability, including Hammer of Light

**Eternal Flame** is a self-heal, not a rotational cast. Its median rate on boss
pulls is zero, and it is absent from more than half of all boss pulls.

## Your hero talent

Play **Herald of the Sun**. All 24 sampled logs used it. A separate check of the
60 top-ranked Mythic+ parses across three dungeons found zero Hammer of Light
casts, which a Templar cannot avoid. Field adoption is total.

Herald of the Sun adds no new button. It changes your existing buttons through
passives, so your bar looks the same.

> [!IMPORTANT]
> Nothing in this guide is tested for Templar. The sample contains no Templar
> logs. Templar replaces Wake of Ashes with Hammer of Light after each cast,
> which changes the [burst window](#the-burst-window) this guide describes.

## What to bind

Exactly **one** pair belongs on the same keypress. The rest of the burst is a
sequence of separate presses. The table below measures how often each ability
follows Avenging Wrath closely enough to have shared its press.

| Ability | Within 0.5 s | Within 1.5 s | Same press? |
| --- | --- | --- | --- |
| Execution Sentence | 66% | 73% | **Yes** |
| Wake of Ashes | 16% | 80% | No — next global |
| First spender | 0% | 17% | No |
| Divine Toll | 0% | 0.5% | No |
| Hammer of Wrath | 0.5% | 0.5% | No |

Avenging Wrath costs no global cooldown, and Execution Sentence has a 750 ms
one instead of the usual 1.5 seconds. That is the only reason the pair fits in
a single press. Two normal abilities never can.

> [!WARNING]
> Do not macro Wake of Ashes to Avenging Wrath. Both would compete for the same
> global and one would be silently dropped. The logs show Wake of Ashes on the
> *next* global at a median of +1.00 s, which is the 750 ms from Execution
> Sentence expiring.

Divine Toll deserves its own key. It belongs to the window, but it is pressed
three globals later at about +4.9 s, not on the opening press.

See [Macros](#macros) for the code.

## Macros

These are written from the logged cast timings, not copied from a guide. Each
one states the observation that justifies it. Paste the block exactly as shown.

### Burst opener

This is the only pair the data supports on one key. Avenging Wrath costs no
global cooldown, so it fires alongside Execution Sentence.

```
#showtooltip Avenging Wrath
/cast Avenging Wrath
/cast Execution Sentence
```

> [!NOTE]
> **Why:** across 183 burst windows, Execution Sentence follows Avenging Wrath
> at a median of 0.40 s, and the fastest tenth are at 0.10 s. No player presses
> two keys 0.1 seconds apart by hand. The field already macros these.

Add your on-use trinkets to the same press. The logs show them firing inside
the window, between 0.1 s and 1.7 s after Avenging Wrath.

```
#showtooltip Avenging Wrath
/cast Avenging Wrath
/use 13
/use 14
/cast Execution Sentence
```

`13` is your top trinket and `14` is the bottom one. Delete the line for any
trinket that is passive.

> [!WARNING]
> Check your trinket before you add it. The trinkets seen in these logs were all
> off the global cooldown, so they did not block Execution Sentence. An on-use
> trinket that *does* take a global will eat the cast. If Execution Sentence
> stops firing after you add a trinket, that is the cause.

Keep the damage potion out of that macro and make a second key for planned
pulls. Potion of Recklessness appears in only 43 of 561 burst windows, so the
field saves it rather than using it on every burst.

```
#showtooltip Avenging Wrath
/cast Avenging Wrath
/use Potion of Recklessness
/use 13
/cast Execution Sentence
```

### Wrath or Judgment

One key for both. Hammer of Wrath fires while Avenging Wrath is up, and
Judgment fires the rest of the time.

```
#showtooltip
/cast Hammer of Wrath
/cast Judgment
```

> [!NOTE]
> **Why:** two logs measured this directly. Hammer of Wrath was 113 of 113
> casts inside Avenging Wrath. Judgment was 0 of 157 and 0 of 156. The two
> abilities never overlap, so one key reproduces what the field does and
> removes a decision you would otherwise make about 11 times a minute.

> [!CAUTION]
> This macro has one known flaw. If Hammer of Wrath goes on cooldown *during*
> Avenging Wrath, the macro falls through and casts Judgment. Logged players
> press a spender in that gap instead. The gap is small, because Herald of the
> Sun gives Hammer of Wrath charges — 113 casts across 23 windows is about 4.9
> per window against roughly 3 the base cooldown allows. Accept the flaw while
> you are learning, and split the keys later if you want the last few percent.

### Spender keys

Give your two spenders **two separate keys**. Do not macro them together. This
is the one place where the obvious macro is the wrong answer.

> [!IMPORTANT]
> **Why:** the two spenders are about 24 presses a minute between them, and you
> switch between them constantly rather than by context. Both appear in every
> window the sample contains. Not one of 151 trash pulls had zero Final Verdict,
> and not one of 84 boss pulls had zero Divine Storm. A macro that picks one for
> you would be wrong several times a minute.

A modifier is a reasonable fallback if you are short of keybinds. It costs you
speed on the most frequent press in the rotation, so treat it as temporary.

```
#showtooltip
/cast [mod:shift] Divine Storm; Final Verdict
```

You cannot edit a macro in combat, so this one key gives Final Verdict
unmodified everywhere. On a trash pack you would hold shift for most presses,
which is why two plain keys beat it.

### Interrupt on mouseover

Interrupting is the widest genuine skill gap in the whole sample, so this is
the macro most likely to improve your key.

```
#showtooltip Rebuke
/cast [@mouseover,harm,nodead][] Rebuke
```

> [!IMPORTANT]
> **Why:** Rebuke is cast in all 24 logs, but the rate runs from 0.41 to 1.88
> casts per minute — a 4.5 times spread, and 13 to 51 interrupts per key. No
> damage ability comes close to that spread. Casting it on mouseover means you
> never swap target to interrupt.

### Utility on mouseover

These cast on whoever your cursor is over, and fall back to a sensible target
when it is over nothing. Every one of them is used in the sampled logs.

```
#showtooltip Hammer of Justice
/cast [@mouseover,harm,nodead][] Hammer of Justice
```

```
#showtooltip Blessing of Freedom
/cast [@mouseover,help,nodead][@player] Blessing of Freedom
```

```
#showtooltip Blessing of Sacrifice
/cast [@mouseover,help,nodead][@focus,help,nodead][] Blessing of Sacrifice
```

```
#showtooltip Lay on Hands
/cast [@mouseover,help,nodead][@player] Lay on Hands
```

```
#showtooltip Cleanse Toxins
/cast [@mouseover,help,nodead][@player] Cleanse Toxins
```

Set your tank as focus and the Blessing of Sacrifice macro will find them when
your cursor is elsewhere.

| Ability | Casts in sample | Logs using it |
| --- | --- | --- |
| Rebuke | 673 | 24 of 24 |
| Divine Steed | 440 | 24 of 24 |
| Divine Protection | 368 | 24 of 24 |
| Blessing of Freedom | 121 | 23 of 24 |
| Hammer of Justice | 112 | 24 of 24 |
| Blinding Light | 78 | 22 of 24 |
| Cleanse Toxins | 78 | 18 of 24 |
| Divine Shield | 75 | 24 of 24 |
| Lay on Hands | 57 | 22 of 24 |
| Blessing of Sacrifice | 35 | 12 of 24 |
| Blessing of Protection | 15 | 11 of 24 |

### What not to macro

Three abilities look like they belong in the burst macro. The timings say they
do not.

- **Wake of Ashes** — median +1.00 s, and only 16% of windows have it within
  0.5 s. It needs the next global, not the same press.
- **Divine Toll** — median +4.9 s. Not one window in 208 had it within 1.5 s.
- **Hammer of Wrath** — median +7.0 s, and it carries on through the window.

> [!CAUTION]
> A macro cannot fire two abilities that both cost a global cooldown. If you
> stack Wake of Ashes into the burst macro, one of the two casts is silently
> dropped and you will not see an error. This is the most common way a Paladin
> burst macro quietly loses damage.

## Cooldown Manager

Blizzard's built-in Cooldown Manager can show every buff this rotation depends
on, with no addon. Track **six buffs and nothing else**. Everything a Herald of
the Sun Paladin gains beyond these is passive, and an icon you never act on is
an icon that hides the ones you do.

### Buffs to track

Each row states the decision the buff drives. If a buff does not change a
button press, it is not here.

| Buff | Spell ID | Duration | The decision it drives |
| --- | --- | --- | --- |
| **Avenging Wrath** | 31884 | 24 s | Hammer of Wrath is in, Judgment is out |
| **Divine Arbiter** | 1306161 | 20 s | Press **Divine Storm** next |
| **Divine Arbiter** | 1306162 | 20 s | Press **Final Verdict** next |
| **Divine Purpose** | 408458 | — | Your next spender is free, and it arms Divine Arbiter |
| **Empyrean Legacy** | 387178 | ~2 s | Cast Final Verdict now, even in AoE |
| **Art of War** | 406086 | ~2 s, stacks | Blade of Justice has reset |

> [!IMPORTANT]
> **The two Divine Arbiter buffs are the reason to do this at all.** They share
> one name and one icon, so they look identical in the list, but they are
> opposites. 1306161 reads "your next Divine Storm" and 1306162 reads "your next
> Final Verdict". Track both. The icon that lights up tells you which spender
> to press, which is the single most frequent decision in the rotation.

> [!NOTE]
> Divine Arbiter really lasts **20 seconds**, from the live tooltip. The
> sampled logs show it lasting about 1 second, but that measures how fast
> players consume it, not the window you have. You are not under time pressure
> here — you just have no reason to wait.

Art of War is the one row the logs cannot confirm. Icy Veins says to cast Blade
of Justice at 2 stacks. The sampled logs record no buff-stack state at the
moment of a cast, so treat the stack rule as guide advice, not measured fact.

### Buffs to skip

Herald of the Sun applies a lot of buffs. These all appear in your log and none
of them changes a press, so send them to **Not Displayed**.

- **Dawnlight**, **Sun's Avatar**, **Sun Sear**, **Blessing of An'she**,
  **Will of the Dawn**, **Born in Sunlight**, **Rush of Light** — passive
  Herald effects. They apply themselves from casts you already make.
- **Divine Power** — the tier 2-piece. Automatic when you consume Divine Purpose.
- **Divine Resonance** — from Divine Toll. Fires on its own.
- **Shield of Vengeance** — rides Divine Protection, which is defensive.
- **Eternal Flame** — a self-heal, not a rotational cast.

> [!TIP]
> Dawnlight is 6.5% of your damage, so it looks like it should matter. It does
> not change a decision. Wake of Ashes makes your next two spenders apply it,
> and you were going to spend anyway.

### Essential cooldowns

The Buffs tab does not show cooldowns. Use the **Spells** tab for those, and
sort these five into **Essential Cooldowns**.

1. **Avenging Wrath** — the 60-second clock the rotation runs on
2. **Wake of Ashes** — the tightest-band ability in the sample
3. **Divine Toll** — held for the burst, so you need to see it waiting
4. **Execution Sentence** — confirms your burst macro fired
5. **Rebuke** — the widest skill gap in the sample

Push everything else to **Utility Cooldowns** or **Not Displayed**. Patch 12.1
also lets this tab track trinkets and combat potions, which is worth enabling
if you added them to the burst macro.

## Where logs beat guides

Three points where the sampled logs contradict a current written guide. In each
case this file follows the logs.

**Avenging Wrath is 60 seconds, not 120.** The spell page shows 2 minutes. A
hidden Retribution spec passive cuts it by 60 seconds. 182 measured gaps have a
hard floor at exactly 60.0 seconds. Reading the bare tooltip gets this wrong.

**Herald of the Sun, not Templar.** Maxroll's Mythic+ guide builds Templar only,
and Wowhead's hero talent page still recommends Templar and calls Herald "a
significant handicap". That page is dated January 2026 and still carries a War
Within title. The field is 100% Herald.

**Hammer of Light costs 3 Holy Power, not 5.** Two otherwise current pages still
say 5. This only matters if you try Templar.

> [!CAUTION]
> The spec's own guide sites disagree with each other. Method's talents page
> recommends Herald of the Sun in one paragraph and Templar in another, on the
> same page. Check any written number against the Wowhead spell page before you
> trust it.

## The sample

State the limits before you rely on any of it. This is what the numbers rest on.

- **24 Mythic+ keys**, 3 from each of the 8 Season 2 dungeons
- **Key levels 16 to 18**, drawn from ranking pages 3 to 11 rather than page 1.
  The sampled DPS band is 217k to 389k, against roughly 458k at the very top
- **All five regions** — US, EU, CN, KR, TW
- **24 of 24 Herald of the Sun**
- 84 boss pulls totalling 285 minutes, and 151 trash pulls totalling 324 minutes
- 561 Avenging Wrath burst windows, and 47,021 cast events

What the sample does **not** cover:

- **Templar.** Zero logs. Nothing here transfers
- **Key level 20 and above.** The highest keys were deliberately excluded
- **A precise target-count threshold.** Enemy counts are cumulative per pull,
  not simultaneous
- **Art of War stack banking.** Icy Veins says to cast Blade of Justice at 2
  stacks. The logs carry no buff-stack state at the moment of a cast, so this
  can be neither confirmed nor refuted here
- **Raid.** Every log is a Mythic+ key
