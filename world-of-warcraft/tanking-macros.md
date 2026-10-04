# Tanking macros

Macros that save a tank a target swap or a missed press. Each entry gives the
macro, how many presses it takes, how it works, and what can go wrong.
Midnight, patch 12.1. The examples use Guardian Druid spells, but each pattern
works for any class: change the spell name and the mob name.

> [!NOTE]
> Every line in a macro runs on one keypress. None of these macros needs a
> second press.

## Contents

- [Soothe a named mob](#soothe-a-named-mob)
  - [Den of Nalorakk Matriarch](#den-of-nalorakk-matriarch)
  - [How the swap works](#how-the-swap-works)
  - [Using the pattern elsewhere](#using-the-pattern-elsewhere)
- [Mouseover Soothe](#mouseover-soothe)
- [Macro rules](#macro-rules)
- [Other tank macros](#other-tank-macros)
- [Sources](#sources)

## Soothe a named mob

This macro casts a spell on one named mob if it is nearby, and on the current
target if it is not. Then it returns to the original target. It suits any
mob that needs one spell at the right moment, while the tank keeps its main
target.

### Den of Nalorakk Matriarch

In Den of Nalorakk, the **Territorial Matriarch** gains **Mother's Wrath**
(1238053) when one of her cubs, the **Curious Yearlings**, dies. Each stack
adds 50% damage dealt and 50% movement speed for 1 minute, and the stacks add
up. It is an Enrage, so one Soothe removes it all [[1]](#ref-1)[[2]](#ref-2).
Guardian tanks at keys 21 and 22 removed Mother's Wrath with Soothe 10 times
in two runs. In the run where the mob names were read, every Soothe was on the
Territorial Matriarch [[5]](#ref-5).

```
#showtooltip Soothe
/focus
/targetexact Territorial Matriarch
/cast Soothe
/target focus
/clearfocus
```

Press it **once**, after a cub dies. Soothe is instant, has a 40-yard range
and a 10-second cooldown [[1]](#ref-1).

> [!WARNING]
> **This macro overwrites the focus target.** A focus target kept for
> interrupts or crowd control is cleared each time the macro runs.

### How the swap works

The macro stores the current target in focus, so it can always return to it.

1. `/focus` with no argument makes the current target the focus
   [[4]](#ref-4).
2. `/targetexact Territorial Matriarch` targets a nearby mob with exactly that
   name [[3]](#ref-3). If none is nearby, the target does not change.
3. `/cast Soothe` goes on the current target: the Matriarch if she was found,
   or the original target as the fallback.
4. `/target focus` returns to the original target, and `/clearfocus` empties
   the focus.

> [!IMPORTANT]
> `/targetexact` picks a nearby mob by name only. It does not check for the
> Enrage. With two Matriarchs up, it can pick the one without Mother's Wrath.

### Using the pattern elsewhere

Change two words and the macro works for any named mob and any spell:
the name after `/targetexact`, and the spell after `/cast`. The name must
match the mob's name exactly, including capitals and apostrophes.

```
#showtooltip <Spell>
/focus
/targetexact <Exact Mob Name>
/cast <Spell>
/target focus
/clearfocus
```

## Mouseover Soothe

This variant needs no target swap and leaves focus alone. Hover the mouse over
the mob, then press. With no hostile mob under the mouse, it casts on the
current target.

```
#showtooltip Soothe
/cast [@mouseover,harm,nodead][] Soothe
```

> [!TIP]
> Use the named macro when the mob is hard to click in a crowded pull. Use the
> mouseover macro when the focus target is busy.

## Macro rules

Three rules explain why the macros above are built the way they are.

- **A mob's name cannot go in a cast condition.** `[@Territorial Matriarch]`
  does not work. A condition accepts a unit ID such as `target`, `focus` or
  `mouseover`, or the name of a player in the group, not an NPC name
  [[4]](#ref-4). That is why the named macro swaps targets.
- **`/targetexact` needs the exact name of a nearby mob** [[3]](#ref-3). A
  typo or a mob out of range makes it do nothing, and the macro falls back to
  the current target.
- **Each spell keeps its own rules.** The macro does not change cooldowns,
  range or the global cooldown. A Soothe on a target with no Enrage removes
  nothing.

## Other tank macros

Macros written for one spec live in that spec's guide.

- Guardian Druid: Incarnation with the Voracious Heart of Ula'tek trinket, in
  one press. See the macro section of the Guardian defensives guide
  [[6]](#ref-6).

## Sources

<details open>
<summary>Game data</summary>

1. <a id="ref-1"></a>[Soothe](https://www.wowhead.com/spell=2908/soothe) — instant, 40-yard range, 10-second cooldown, dispels all Enrage effects
2. <a id="ref-2"></a>[Mother's Wrath](https://www.wowhead.com/spell=1238053/mothers-wrath) — the cub's cry: +50% damage dealt and +50% movement speed for 1 minute to bears within 40 yards, stacking, Enrage type

</details>

<details open>
<summary>Macro reference</summary>

3. <a id="ref-3"></a>[MACRO targetexact](https://warcraft.wiki.gg/wiki/MACRO_targetexact) — targets a nearby entity with exactly the given name
4. <a id="ref-4"></a>[MACRO focus](https://warcraft.wiki.gg/wiki/MACRO_focus) — with no argument, focuses the current target; names work only for players in the group

</details>

<details open>
<summary>Logs and related guides</summary>

5. <a id="ref-5"></a>Warcraft Logs API, Den of Nalorakk: `3dPRGapmfkwM9xbT` (fight 43, key 22) and `BFA2kQrMvG1ZCLKg` (fight 4, key 21) — Guardian Soothe casts that removed Mother's Wrath, all 5 in the first run on the Territorial Matriarch
6. <a id="ref-6"></a>[Guardian Druid — Mythic+ defensives](rotations/guardian-druid-mplus-defensives.md#macros) — the Incarnation and trinket macro

</details>
