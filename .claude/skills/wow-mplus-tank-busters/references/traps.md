# Traps

Ways this analysis produced a wrong number during the Season 2 run, and what
the script or procedure now does about each. Check a surprising number against
this list before it goes into a guide.

## 1. Taken damage hides the danger

Damage actually taken depends on the tank's mitigation at that moment. Strong
tanks took 15% to 35% from physical hits of 150% to 250% raw, because Ironfur
was stacked. One tank died to the same Shield Bash with 3 Ironfur stacks and
56% health: 995k taken, 16,526 overkill.

**Fix:** rank by **raw** damage as a percentage of maximum health. Use taken
damage only to split Tier 1 (heavy even through a major) from Tier 2 (a major
or full mitigation makes it small).

## 2. Channels split into fragments

The first script grouped hits for 2.5 s from the **first** hit. Steel Barrage
(14 hits in 3 s), Brutalize (5 hits in 6 s) and Rattle (6 hits in 5 s) were
cut into 2 or 3 "casts", so their raw figures were a half or a third of the
truth. Brutalize read 209% instead of 636%.

**Fix:** a cast ends 2 s after its **last** hit. The script now does this.

## 3. One spell, several damage IDs

Crushing Smash deals a Physical part and a Nature part under two IDs. Fire
Maw has a second Fire ID. Counting one ID read Crushing Smash at 155% raw
instead of 197%, and Fire Maw at 24% taken instead of 45%.

**Fix:** the script groups by ability **name**, and `--ids` returns every ID
that shares the name. A cast ID usually differs from the damage ID as well:
Heartstop Poison is cast as 1216589 and hits as 1216590.

> [!WARNING]
> Name merging can join two different mobs' spells. "Lightning Bolt" merged
> the Stormbound Mystic with Loa Speaker Nanea. Check the `mobs` field.

## 4. Melee passives look like busters

Duostrike, Ravenous Claws and Hydrastrike are melee procs with no cast event.
Back-to-back swings chain into one "cast", which inflated Ravenous Claws to
377% raw. Shoot (Bonded Beasttamer) fires every 2.4 s and did the same.

**Fix:** the script flags a cast longer than 8 s as STREAM. A chain shorter
than 8 s is not flagged, so check the cast fields too: no `begincast` events
and a gap under 3 s means melee, not a cast. Leave it off the alert list.

## 5. Damage-over-time ticks are excluded

The script skips tick events from the per-cast figures. That is right for
pure DoTs, but it under-counts buster hits that leave a DoT: Searing Blows
(Searing Wounds), Hulking Claw, Mortal Bleed and Grievous Gash.

**Fix:** say so in the guide next to each one.

## 6. Deaths between pulls drop out

The Sky Strike tank death landed between the end of a trash pull and the
start of a boss pull. The script labels it "other", and its 172% hit did not
appear in the trash figures.

**Fix:** read the TANK DEATHS section of every report, not only the
candidates.

## 7. The log only shows the tank

The damage query holds hits on the tank alone. It cannot show whether an
ability also hit other players.

**Fix:** decide "aimed at the tank" from the cast event target and the
tooltip. Several boss casts log no target (`targetID` -1), such as Blade
Combo, Dark Waves and Overload. For those, use the tooltip and the share of
hits that landed on the tank.

## 8. Incarnation inflates coverage

The Guardian major list includes Incarnation, which strong tanks keep up for a
third of the key. Coverage reads high and the "no major" samples are small,
often 2 to 9 casts.

**Fix:** report n next to every "no major" figure. To see coverage by the
short defensives alone, run with `--majors 22812,61336`.

## 9. The sample is survivors

Rankings only list completed keys, from tanks good enough to rank. In 64 keys
only 2 tanks died on trash and none on a boss. "Lethal" is mostly inferred
from raw size.

**Fix:** say so in the guide. Where the user has a log of their own death,
cite it as the worked example.

## 10. Tooltips break

Some nether tooltips return empty nested links (Thundering Storm), and some
show a placeholder number (Poison Spear Volley read "35 damage").

**Fix:** mark such abilities as unconfirmed rather than guessing.

## 11. Raw damage misses a stacking debuff

The first season guide listed Shield Bash at 146% raw, covered by a major
defensive 88% of the time. It did not say that the Bribed Guard and the Bribed
Captain feed one shared debuff. Together they re-apply it every 6 to 17 s,
inside its 20 s duration, so it never drops while both live. A key 19 tank died
at 5 stacks, +100% Physical damage taken. Tectonic Strike never passed the raw
threshold at all (48% raw), yet 2 to 9 Earthshapers stacked it to 5 stacks,
+125% damage taken.

**Fix:** fetch `debuffs.json` and run `debuffs.py`. Then infer overlap by hand
for every debuff, with the rule in the skill's "Stacking debuffs" section,
even where the sample shows none. The sample only holds the pulls those groups
chose. Corrosive Fangs never overlapped in 8 keys only because every group
fought the two Rattling Writhes one after the other.

## 12. The tooltip and the source field hide stacking

Shield Bash's tooltip says "+20% for 20 sec" and never mentions stacking. The
log shows `applydebuffstack` up to 5. The log also credits every stack of a
shared debuff to its first caster: all five stacks read "Bribed Captain",
although the Guard cast every second one.

**Fix:** decide stacking from the log, not the tooltip. Find each stack's
caster from the hit at the same moment, which `debuffs.py` does. Some debuffs
are one copy per caster instead (Shred Defense, Fel Missiles, Glaive Toss).
The script counts both kinds.

## 13. A short uptime can mean a dispel, not a short debuff

Stormslam's tooltip says +100% Nature damage taken for 30 s, and the boss casts
every 23 to 26 s, so it should stack. In 63 casts it never did: median uptime
1.4 s. The debuff is Magic, so it was almost certainly dispelled. Grievous Gash
reads 1.0 s because a full heal removes it.

**Fix:** take the duration from the tooltip, not from `natural`. When the two
disagree, find what removed it: a `Dispels` query, a heal to full, or a death.
State the removal in the guide. Do not write "it stacks" when the log shows
groups removing it.
