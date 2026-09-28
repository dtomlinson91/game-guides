// Hand-authored rules for the route planner. Every rule comes from
// ../beginner-guide.md. The section names in comments point to the guide.
window.FE3H_RULES = (() => {
  const RANKS = ['E', 'E+', 'D', 'D+', 'C', 'C+', 'B', 'B+', 'A', 'A+', 'S', 'S+'];
  // Skill rank costs: experience from each rank to the next.
  const RANK_COST = [40, 60, 80, 120, 160, 220, 280, 360];

  // Goal and task numbers: weekly goal experience per skill in a two-skill pair.
  // A single-skill goal pays 1.5 times as much.
  const GOAL_EXP = {
    Normal: { weak: 24, neutral: 28, strong: 32 },
    Hard: { weak: 20, neutral: 24, strong: 28 },
    Maddening: { weak: 16, neutral: 20, strong: 24 },
  };

  const HOUSES = {
    BE: { name: 'Black Eagles', leader: 'Edelgard', color: 'var(--be)' },
    BL: { name: 'Blue Lions', leader: 'Dimitri', color: 'var(--bl)' },
    GD: { name: 'Golden Deer', leader: 'Claude', color: 'var(--gd)' },
    Church: { name: 'Church and faculty', color: 'var(--church)' },
    Wolves: { name: 'Ashen Wolves', color: 'var(--wolves)' },
    DLC: { name: 'Expansion Pass', color: 'var(--wolves)' },
  };

  const ROUTES = {
    CF: { name: 'Crimson Flower', house: 'BE' },
    SS: { name: 'Silver Snow', house: 'BE' },
    AM: { name: 'Azure Moon', house: 'BL' },
    VW: { name: 'Verdant Wind', house: 'GD' },
  };
  const ROUTES_FOR = { BE: ['CF', 'SS'], BL: ['AM'], GD: ['VW'] };

  const GENDER = {
    M: ['Hubert', 'Ferdinand', 'Linhardt', 'Caspar', 'Dimitri', 'Dedue', 'Felix', 'Ashe', 'Sylvain',
      'Claude', 'Lorenz', 'Raphael', 'Ignatz', 'Seteth', 'Cyril', 'Alois', 'Gilbert', 'Hanneman',
      'Jeritza', 'Yuri', 'Balthus'],
    F: ['Edelgard', 'Bernadetta', 'Dorothea', 'Petra', 'Mercedes', 'Annette', 'Ingrid', 'Lysithea',
      'Marianne', 'Hilda', 'Leonie', 'Flayn', 'Catherine', 'Shamir', 'Manuela', 'Constance', 'Hapi', 'Anna'],
  };

  // Default class plans. Built from each character's goal-change requests
  // (Character reference). Faculty paths come from their strengths.
  const PATHS = {
    Byleth: { Intermediate: 'Mercenary', Advanced: 'Swordmaster' },
    Edelgard: { Intermediate: 'Lord', Advanced: 'Fortress Knight' },
    Hubert: { Intermediate: 'Mage', Advanced: 'Warlock', Master: 'Dark Knight' },
    Ferdinand: { Intermediate: 'Cavalier', Advanced: 'Paladin', Master: 'Great Knight' },
    Linhardt: { Intermediate: 'Priest', Advanced: 'Bishop' },
    Caspar: { Intermediate: 'Brawler', Advanced: 'Grappler', Master: 'War Master' },
    Bernadetta: { Intermediate: 'Archer', Advanced: 'Sniper', Master: 'Bow Knight' },
    Dorothea: { Intermediate: 'Mage', Advanced: 'Warlock', Master: 'Gremory' },
    Petra: { Intermediate: 'Thief', Advanced: 'Assassin' },
    Dimitri: { Intermediate: 'Lord', Advanced: 'Paladin' },
    Dedue: { Intermediate: 'Armoured Knight', Advanced: 'Fortress Knight' },
    Felix: { Intermediate: 'Mercenary', Advanced: 'Swordmaster', Master: 'Mortal Savant' },
    Mercedes: { Intermediate: 'Priest', Advanced: 'Bishop', Master: 'Gremory' },
    Ashe: { Intermediate: 'Archer', Advanced: 'Sniper', Master: 'Bow Knight' },
    Annette: { Intermediate: 'Mage', Advanced: 'Warlock', Master: 'Gremory' },
    Sylvain: { Intermediate: 'Cavalier', Advanced: 'Paladin', Master: 'Great Knight' },
    Ingrid: { Intermediate: 'Pegasus Knight', Advanced: 'Paladin', Master: 'Falcon Knight' },
    Claude: { Intermediate: 'Lord', Advanced: 'Wyvern Rider' },
    Lorenz: { Intermediate: 'Cavalier', Advanced: 'Paladin', Master: 'Dark Knight' },
    Raphael: { Intermediate: 'Brawler', Advanced: 'Grappler', Master: 'War Master' },
    Lysithea: { Intermediate: 'Mage', Advanced: 'Warlock', Master: 'Gremory' },
    Ignatz: { Intermediate: 'Archer', Advanced: 'Sniper' },
    Marianne: { Intermediate: 'Priest', Advanced: 'Bishop', Master: 'Holy Knight' },
    Hilda: { Intermediate: 'Brigand', Advanced: 'Warrior', Master: 'Wyvern Lord' },
    Leonie: { Intermediate: 'Cavalier', Advanced: 'Paladin', Master: 'Bow Knight' },
    Seteth: { Advanced: 'Wyvern Rider', Master: 'Wyvern Lord' },
    Flayn: { Intermediate: 'Priest', Advanced: 'Bishop', Master: 'Gremory' },
    Cyril: { Intermediate: 'Archer', Advanced: 'Wyvern Rider', Master: 'Bow Knight' },
    Catherine: { Intermediate: 'Mercenary', Advanced: 'Swordmaster' },
    Shamir: { Intermediate: 'Archer', Advanced: 'Sniper' },
    Alois: { Intermediate: 'Brigand', Advanced: 'Warrior', Master: 'War Master' },
    Gilbert: { Intermediate: 'Armoured Knight', Advanced: 'Fortress Knight', Master: 'Great Knight' },
    Hanneman: { Intermediate: 'Mage', Advanced: 'Warlock' },
    Manuela: { Intermediate: 'Priest', Advanced: 'Bishop', Master: 'Gremory' },
    Yuri: { Intermediate: 'Thief', Advanced: 'Assassin', Special: 'Trickster' },
    Balthus: { Intermediate: 'Brawler', Advanced: 'Grappler', Special: 'War Monk', Master: 'War Master' },
    Constance: { Intermediate: 'Mage', Advanced: 'Warlock', Special: 'Dark Flier', Master: 'Gremory' },
    Hapi: { Intermediate: 'Mage', Advanced: 'Warlock', Master: 'Dark Knight' },
    Anna: { Intermediate: 'Mercenary', Advanced: 'Swordmaster', Master: 'Great Knight' },
    Jeritza: {},
  };

  // Unique classes the route grants (Unique classes).
  const UNIQUE_BY_ROUTE = {
    Byleth: { routes: ['CF', 'SS', 'AM', 'VW'], classes: ['Enlightened One'] },
    Edelgard: { routes: ['CF'], classes: ['Armored Lord', 'Emperor'] },
    Dimitri: { routes: ['AM'], classes: ['High Lord', 'Great Lord'] },
    Claude: { routes: ['VW'], classes: ['Wyvern Master', 'Barbarossa'] },
    Jeritza: { routes: ['CF'], classes: ['Death Knight'] },
  };

  // Role targets for about 10 slots (Roles to cover).
  const ROLE_TARGETS = [
    { role: 'Tank', min: 1, max: 2, hint: 'Stands in the open on the enemy phase. Heavy armour classes.' },
    { role: 'Physical damage', min: 3, max: 4, hint: 'Kills one target on the player phase.' },
    { role: 'Magic damage', min: 2, max: 2, hint: 'Kills armoured enemies, which have low Resistance.' },
    { role: 'Archer', min: 1, max: 1, hint: 'Range 2, and bonus damage to fliers.' },
    { role: 'Healer', min: 2, max: 2, hint: 'Faith magic. At least one with Physic.' },
    { role: 'Flier', min: 1, max: 2, hint: 'Ignores terrain and carries the map.' },
    { role: 'Dancer', min: 1, max: 1, hint: 'Gives one ally an extra turn. One per run.' },
  ];

  // Availability of a character for a given house and route.
  // Returns { status, label, steps[], warnings[] }.
  // status: own | recruit | auto | unavailable
  function availability(c, house, route, bylethGender) {
    const n = c.name;
    const steps = [];
    const warnings = [];
    const deadline = route === 'CF' ? 'the end of Chapter 11' : 'the end of Chapter 12';
    const done = (status, label) => ({ status, label, steps, warnings });

    if (n === 'Byleth') return done('own', 'Main character');

    // Lords and retainers who never change house (Who leaves or cannot join).
    const lockedTo = { Edelgard: 'BE', Hubert: 'BE', Dimitri: 'BL', Dedue: 'BL', Claude: 'GD' };
    if (lockedTo[n] && lockedTo[n] !== house) {
      return done('unavailable', `Never joins another house. Only playable as ${HOUSES[lockedTo[n]].name}.`);
    }

    // Route departures that apply wherever the character is.
    if ((n === 'Edelgard' || n === 'Hubert') && route === 'SS') {
      warnings.push('Leaves permanently at Chapter 11 when you side with the Church (Silver Snow).');
    }
    if (n === 'Dedue') {
      warnings.push('Leaves at the end of Part 1. Clear the paralogue War for the Weak (open Chapters 6 to 11) or he never returns. He rejoins in Azure Moon Chapter 16.');
    }
    if (n === 'Ashe' && (route === 'SS' || route === 'VW')) {
      warnings.push('Deserts after Chapter 12 on this route. Defeat him in Chapter 15 and choose "Persuade" to bring him back.');
    }
    if (n === 'Lorenz' && (route === 'SS' || route === 'AM')) {
      warnings.push('Deserts after Chapter 12 on this route. Defeat him in Chapter 16 and choose "Persuade" to bring him back.');
    }
    if (n === 'Flayn' && route === 'CF') {
      warnings.push('Leaves permanently at the end of Chapter 11 on Crimson Flower.');
    }

    if (['BE', 'BL', 'GD'].includes(c.house) && c.house === house) return done('own', 'Your house');

    // Special joins.
    if (n === 'Seteth') {
      if (route === 'CF') return done('unavailable', 'Never joins on Crimson Flower.');
      steps.push('Joins automatically in Chapter 12.');
      return done('auto', 'Joins automatically');
    }
    if (n === 'Flayn') {
      steps.push('Joins automatically in Chapter 7.');
      return done('auto', 'Joins automatically');
    }
    if (n === 'Gilbert') {
      if (route !== 'AM') return done('unavailable', 'Only joins on Azure Moon.');
      steps.push('Joins automatically in Chapter 13.');
      return done('auto', 'Joins automatically');
    }
    if (n === 'Jeritza') {
      if (route !== 'CF') return done('unavailable', 'Only joins on Crimson Flower.');
      steps.push('Joins automatically at the start of Chapter 13 as a level 27 Death Knight. Needs free update 1.1.0, not the Expansion Pass.');
      return done('auto', 'Joins automatically');
    }
    if (house === 'BE' && ['Hilda', 'Catherine', 'Cyril'].includes(n)) {
      if (route === 'CF') return done('unavailable', 'Cannot join a Black Eagles run on Crimson Flower.');
      if (n === 'Hilda') {
        steps.push('Cannot be recruited before Chapter 12. After you side with the Church, recruit her in Chapter 12.');
        steps.push('She asks for 30 Charm and C in Axe from Byleth, less with support.');
        return done('recruit', 'Recruit in Chapter 12 only');
      }
      steps.push('Cannot be recruited in Part 1. Joins automatically in Chapter 12 after you side with the Church.');
      return done('auto', 'Joins automatically (Silver Snow)');
    }
    if (house === 'BE' && route === 'SS' && n === 'Shamir') {
      steps.push('Joins automatically in Chapter 12 after you side with the Church. You can also recruit her earlier as normal.');
    }
    if (c.house === 'Wolves') {
      const ch = { Constance: 2, Balthus: 4, Hapi: 5, Yuri: 6 }[n];
      steps.push(`Needs the Expansion Pass. Clear Cindered Shadows chapter ${ch} to unlock ${n}.`);
      steps.push('Talk to them at the monastery from main-story Chapter 2. No stat, skill or support check.');
      steps.push('Part 1 only. They join at level 3 in Chapter 2, plus 2 levels per chapter.');
      if (n !== 'Yuri') steps.push('Waiting until Chapter 3 gives a better starting class with free D ranks.');
      warnings.push('Cindered Shadows is harder than the main story.');
      return done('recruit', 'Talk to recruit (Expansion Pass)');
    }
    if (n === 'Anna') {
      steps.push('Needs the Expansion Pass. Talk to her at the marketplace from Chapter 3. No requirements.');
      steps.push('She joins at level 5 as a Myrmidon.');
      return done('recruit', 'Talk to recruit (Expansion Pass)');
    }

    // Normal recruitment (How the check works).
    const r = c.recruit || {};
    if (r.auto) {
      steps.push(`Joins automatically in Chapter ${r.fromChapter}.`);
      return done('auto', 'Joins automatically');
    }
    if (n === 'Sylvain' && bylethGender === 'F') {
      steps.push('Joins without any requirement because Byleth is female. Talk to him from Chapter 2.');
      steps.push(`Recruit before ${deadline}.`);
      return done('recruit', 'Joins free with female Byleth');
    }
    if (r.level) {
      steps.push(`Byleth must be level ${r.level}. Talk to them from Chapter ${r.fromChapter}.`);
    } else if (r.stat) {
      steps.push(`From Chapter ${r.fromChapter}, Byleth needs ${r.statVal} ${r.stat} and ${r.rank} in ${r.skill}. Support with Byleth lowers both.`);
      if (['Caspar', 'Ferdinand'].includes(n)) {
        warnings.push('The B-support invitation shortcut does not work for this character. Meet the stat and skill check.');
      } else {
        steps.push('Or reach B support with Byleth. They may then ask to join on any free weekday, ignoring the check.');
      }
    }
    steps.push(`Recruit before ${deadline}. The window then closes for good.`);
    if (n === 'Lysithea' && route === 'CF') steps.push('On Crimson Flower she also joins in Chapter 14 if not recruited earlier.');
    return done('recruit', 'Recruit');
  }

  // Windows that close, filtered by route.
  const CHECKLIST = [
    { id: 'house', text: 'Pick the house in the prologue. It is permanent for the run.', routes: 'all' },
    { id: 'profc', text: 'Reach professor level C by about Chapter 5 or 6. It unlocks adjutants and Master class exams.', routes: 'all' },
    { id: 'renown', text: 'Buy the four Experience +5% statue rewards first (4,000 renown), then Divine Pulse.', routes: 'all' },
    { id: 'dancer', text: 'Chapter 9: pick a White Heron Cup entrant by the end of week two. Winning needs 13 Charm. Talk to the entrant once for a permanent +5 Charm.', routes: 'all' },
    { id: 'dedue', text: 'Clear War for the Weak between Chapters 6 and 11, or Dedue never returns.', routes: ['AM'] },
    { id: 'split', text: 'Chapter 11 (Pegasus Moon): with C+ support, talk to Edelgard and accept the trip to Enbarr. Take it on the 22nd to lose nothing. Then protect her at the end of the chapter.', routes: ['CF'] },
    { id: 'ss', text: 'Silver Snow: side with the Church at the end of Chapter 11. Edelgard and Hubert leave.', routes: ['SS'] },
    { id: 'cfbat', text: 'Buy any Church battalions before Chapter 11 ends.', routes: ['CF'] },
    { id: 'paralogues', text: 'Clear every Part 1 paralogue by Chapter 11. Only Dividing the World carries over.', routes: 'all' },
    { id: 'recruit', text: 'Finish recruiting by the end of Chapter 12 (Chapter 11 on Crimson Flower).', routes: 'all' },
    { id: 'wolves', text: 'Recruit the Ashen Wolves before the end of Part 1.', routes: 'all' },
    { id: 'authority', text: 'Train Authority to about B on most units by the timeskip, for battalions.', routes: 'all' },
    { id: 'ashe', text: 'Chapter 15: defeat Ashe and choose "Persuade" to bring him back.', routes: ['SS', 'VW'] },
    { id: 'lorenz', text: 'Chapter 16: defeat Lorenz and choose "Persuade" to bring him back.', routes: ['SS', 'AM'] },
    { id: 'sacred', text: 'Take the Sacred Items Set from Byleth\'s bed (Expansion Pass).', routes: 'all' },
  ];

  // Recruitment discounts (How the check works).
  const SUPPORTS = ['None', 'C', 'C+', 'B', 'B+', 'A'];
  const SKILL_DISCOUNT = {
    D: ['D', 'D', 'D', 'E+', 'E+', 'Any'],
    C: ['C', 'C', 'D+', 'D', 'E+', 'Any'],
    B: ['B', 'C+', 'C', 'D+', 'D', 'Any'],
    'B+': ['B+', 'B', 'C+', 'D+', 'D+', 'Any'],
  };
  const STAT_FACTOR = [1, 0.8, 0.6, 0.4, 0.2, 0];

  // Community ratings, from four Maddening tier lists (see SPEC.md, Community ratings):
  // r/fireemblem community list (g7v8zk), Game8, GamingScan, Pro Game Guides.
  // The user accepted Maddening ratings for a Hard run.
  const COMMUNITY = {
    Byleth: ['top', 'S in every list'],
    Edelgard: ['top', 'S in every list on Crimson Flower'],
    Dimitri: ['top', 'S in every list'],
    Claude: ['top', 'S in every list'],
    Lysithea: ['top', 'Highest Magic growth. One-rounds most enemies and gets Warp at B Faith'],
    Felix: ['strong', 'High Speed and Strength, strong from the start. The Authority weakness holds him back a little'],
    Petra: ['strong', 'Speed, dodge and crit. Excellent as a Wyvern Lord'],
    Ferdinand: ['strong', 'Swift Strikes and no weaknesses. Hard to recruit from another house'],
    Leonie: ['strong', 'Good growths, early Point-Blank Volley, a natural Bow Knight'],
    Linhardt: ['strong', 'Warp plus solid magic damage'],
    Dedue: ['strong', 'Top tank early and mid game. Gone in Part 2 unless his paralogue is cleared'],
    Sylvain: ['strong', 'The easiest recruit, with Swift Strikes and an early Relic'],
    Shamir: ['strong', 'The earliest Sniper and the highest crit growth'],
    Annette: ['strong', 'Valued for Rally support'],
    Hilda: ['strong', 'Rated strong across the lists'],
    Seteth: ['strong', 'A ready-made wyvern flier with Swift Strikes'],
    Constance: ['strong', 'The only Expansion Pass unit rated above average across lists'],
    Catherine: ['strong', 'Rated A on Azure Moon and Verdant Wind, lower on Silver Snow'],
    Ingrid: ['average', 'Rated A when recruited from another house, C in her own house'],
    Cyril: ['average', ''], Jeritza: ['average', ''], Hubert: ['average', ''], Bernadetta: ['average', 'Lists split: one rates her S, two rate her D'],
    Marianne: ['average', ''], Mercedes: ['average', ''], Dorothea: ['average', ''], Flayn: ['average', ''],
    Yuri: ['average', ''], Hapi: ['average', ''], Balthus: ['average', 'Lists split: one rates him A, two rate him D'],
    Ignatz: ['weak', ''], Alois: ['weak', ''], Manuela: ['weak', ''], Raphael: ['weak', ''], Gilbert: ['weak', ''],
    Hanneman: ['weak', ''], Caspar: ['weak', ''], Ashe: ['weak', ''], Lorenz: ['weak', ''], Anna: ['weak', ''],
  };
  // Route and house adjustments the lists call out.
  function community(name, house, route, ownHouse) {
    const base = COMMUNITY[name];
    if (!base) return null;
    let [tier, why] = base;
    if (name === 'Edelgard' && route === 'SS') { tier = 'average'; why = 'Rated B on Silver Snow, where she leaves at Chapter 11'; }
    if (name === 'Catherine' && route === 'SS') { tier = 'average'; why = 'Rated C on Silver Snow. Strong on Azure Moon and Verdant Wind'; }
    if (name === 'Cyril' && (route === 'AM' || route === 'VW')) { tier = 'strong'; why = 'Rated A on Azure Moon and Verdant Wind'; }
    if (name === 'Flayn' && route === 'CF') { tier = 'weak'; why = 'Leaves at the end of Chapter 11 on Crimson Flower'; }
    if (name === 'Hilda' && route === 'SS') { tier = 'average'; why = 'Rated C on Silver Snow, where she joins late'; }
    if (name === 'Ingrid' && !ownHouse) { tier = 'strong'; why = 'Rated A when recruited from another house'; }
    if (name === 'Dedue' && route !== 'AM') { why = 'Only playable on Blue Lions'; }
    return { tier, why };
  }

  return {
    COMMUNITY, community,
    RANKS, RANK_COST, GOAL_EXP, HOUSES, ROUTES, ROUTES_FOR, GENDER, PATHS, UNIQUE_BY_ROUTE,
    ROLE_TARGETS, CHECKLIST, SUPPORTS, SKILL_DISCOUNT, STAT_FACTOR, availability,
  };
})();
