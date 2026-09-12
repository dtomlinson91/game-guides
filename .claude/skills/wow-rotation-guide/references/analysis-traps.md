# Analysis traps

Six ways this analysis produces a confident wrong answer. Each one was hit
during a real run. Check every number against this list before it enters a
guide.

## 1. A pooled rate describes neither state

A rate averaged across a whole fight hides a rotation that changes shape when
its main cooldown is up.

One Retribution Paladin pressed **60 buttons a minute inside Avenging Wrath and
40 outside it** — a 1.00 second gap against 1.50 seconds, because the buff grants
stacking haste. Pooled over the key, that averages to a figure matching neither
state, and makes the spec look uniform when it is not.

Worse, whole buttons appear and vanish. Hammer of Wrath ran 12.8 casts a minute
inside the window and **zero** outside. Judgment was the exact mirror.

**Fix:** split every rate by whether the main damage cooldown buff was up. Get
it from the `Buffs` event stream, then bucket casts by those windows.

> [!TIP]
> This split is also the answer to "why do I have nothing to press outside my
> burst window", which players of every cooldown-driven spec ask.

## 2. A log buff duration is time-to-consumption

A buff window in a log runs from apply to remove. A proc consumed on the next
global therefore reads as lasting about one second.

Divine Arbiter measured a **1.0 second median across 98 observations**. Its live
tooltip says **20 seconds**. Quoting the log figure would tell a reader they have
one global to react when they have twenty.

**Fix:** never quote a buff duration from a log. Confirm it on the Wowhead spell
page. Use the log only to show how fast the field actually consumes it, which is
a different and also useful fact.

## 3. Two buffs share a name and mean opposite things

Divine Arbiter exists as spell 1306161 and spell 1306162. Same name, same icon,
identical spell-page description. One reads "your next **Divine Storm**", the
other "your next **Final Verdict**".

**Fix:** read the `buff_enus` tooltip string, not `description_enus`. When a
tracker list shows two identical-looking entries, that is usually why, and both
need tracking.

> [!CAUTION]
> Names are also recycled across expansions. A search for "Divine Arbiter"
> without an ID returns a talent removed in patch 12.0. Always search by ID.

## 4. The spell page cooldown is not the spec's cooldown

Hidden spec passives rewrite cooldowns and never appear on the ability's own
page. Retribution's spec aura declares `Modifies Cooldown -60000: Avenging
Wrath`, making it a **60 second** cooldown against the **120** its page shows. The
same passive changes two other abilities.

**Fix:** check the observed gap distribution against the printed cooldown. A
hard floor well under the printed value means a passive is cutting it. Then find
the passive before writing the number.

> [!TIP]
> The full spell page shows `Cooldown: n/a` for any charge-based or
> category-based ability. That does not mean no cooldown. The `GCD` row on the
> same page **is** reliable, and it is the only place GCD appears.

## 5. A boss pull is not single target

Covered in `wcl-cookbook.md`, repeated here because it silently corrupts every
single-target number. Median boss pull in one sample: 9 distinct enemies.

**Fix:** filter to pulls with one enemy for single-target claims, and report
both that figure and the all-boss figure. Say which is which.

## 6. An unbounded verify fan-out kills the run

Sizing verification as `claims × skeptics` has no ceiling, because the claim
count is an output of an earlier phase. A run producing 61 claims turned into
183 verify agents and exhausted the session spend limit. Every earlier phase
survived on disk, but the synthesis agent died and produced nothing.

**Fix:** rank the claims and cap verification at 12 to 15. Log what was dropped.

> [!IMPORTANT]
> If a run does die this way, recover rather than re-run. Per-agent return values
> are in `journal.jsonl` in the workflow transcript directory, and any files the
> agents wrote are still on disk. Classify the journal results by shape and
> finish inline. A `claimsSurvived: 0` result after a failed verify phase is an
> artifact of zero votes, not a real refutation.

## Deriving macros from timings

Not a trap, but the technique that makes the macro section worth reading. The
gap between two casts tells you whether they shared a keypress.

| Observed gap | Meaning |
| --- | --- |
| Median ~0.4 s, p10 ~0.1 s | **One keypress.** No human presses two keys 0.1 s apart |
| Median ~1.0 to 1.5 s | Separate presses, one global apart |

A single press can only fire two abilities when at most one costs a global
cooldown. Avenging Wrath is off the GCD entirely and Execution Sentence has a
750 ms global instead of 1.5 seconds, which is the only reason that pair fits.

> [!WARNING]
> Before writing any "press these together" advice, check the GCD row on the
> Wowhead spell page for both abilities. A macro cannot fire two on-GCD
> abilities — one is silently dropped with no error, which is the most common
> way a burst macro quietly loses damage.

## Picking buffs worth tracking

A tracker icon the reader never acts on hides the ones they do. Include a buff
only when it **changes a button press**.

| Include | Exclude |
| --- | --- |
| Gates which ability is available | Passive damage or haste riders |
| Names which spender to press next | Buffs applied by casts you already make |
| Makes a cast free | Automatic tier or trinket procs with no decision |
| Is the master switch for the burst | Defensive buffs riding another button |

One spec's list came to six buffs out of roughly fifteen the class applies. A
buff worth 6.5% of total damage was still excluded, because it applies itself
from casts the player already makes and gates nothing.
