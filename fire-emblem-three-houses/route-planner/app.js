(() => {
  const D = window.FE3H_DATA;
  const R = window.FE3H_RULES;
  const STORE = 'fe3h-route-planner-v1';
  const TIERS = ['Beginner', 'Intermediate', 'Advanced', 'Special', 'Master'];
  const CHAR = Object.fromEntries(D.characters.map(c => [c.name, c]));
  const CLASS = Object.fromEntries(D.classes.map(c => [c.name, c]));
  const UNIQUE = Object.fromEntries(D.unique.map(u => [u.name, u]));
  const $ = sel => document.querySelector(sel);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

  // ---------- state ----------

  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(STORE));
      if (s && s.runs) return s;
    } catch (e) { /* storage unavailable or corrupt */ }
    return { runs: {}, activeId: null, ui: { tab: 'overview', selected: null, filter: 'all' } };
  }
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }
  let state = load();
  state.ui = Object.assign({ tab: 'overview', selected: null, filter: 'all' }, state.ui);

  const uid = () => Math.random().toString(36).slice(2, 10);
  function newRun(name, house) {
    const id = uid();
    const route = R.ROUTES_FOR[house][0];
    state.runs[id] = {
      id, name, house, route, difficulty: 'Hard', bylethGender: 'M', created: Date.now(),
      team: ['Byleth'], plans: {}, ranks: {}, support: {}, dancer: null, checklist: {},
    };
    // Start with the house's own students.
    D.characters.filter(c => c.house === house).forEach(c => {
      if (R.availability(c, house, route, 'M').status !== 'unavailable') state.runs[id].team.push(c.name);
    });
    state.activeId = id;
    save();
    return id;
  }
  const run = () => state.runs[state.activeId];

  // ---------- game logic ----------

  const rIdx = r => R.RANKS.indexOf(r);
  function expBetween(from, to) {
    let sum = 0;
    for (let i = rIdx(from); i < rIdx(to); i++) {
      if (R.RANK_COST[i] === undefined) return null;
      sum += R.RANK_COST[i];
    }
    return sum;
  }
  function genderOf(name, rn) {
    if (name === 'Byleth') return rn.bylethGender;
    return R.GENDER.M.includes(name) ? 'M' : 'F';
  }
  function aptitude(c, skill) {
    if (c.strong.includes(skill)) return 'strong';
    if (c.weak.includes(skill)) return 'weak';
    return 'neutral';
  }
  function currentRank(rn, name, skill) {
    const saved = rn.ranks[name] && rn.ranks[name][skill];
    return saved || (CHAR[name].initial && CHAR[name].initial[skill]) || 'E';
  }
  function plan(rn, name) {
    if (!rn.plans[name]) rn.plans[name] = Object.assign({}, R.PATHS[name] || {});
    return rn.plans[name];
  }
  function routeUnique(rn, name) {
    const u = R.UNIQUE_BY_ROUTE[name];
    return u && u.routes.includes(rn.route) ? u.classes.map(n => UNIQUE[n]).filter(Boolean) : [];
  }
  function classOptions(rn, name, tier) {
    const g = genderOf(name, rn);
    return D.classes.filter(k => k.tier === tier && (!k.gender || k.gender === g) && (!k.only || k.only.includes(name)));
  }
  // Is a class one of this character's goal-change suggestions?
  function suggested(c, k) {
    const has = (skill) => k.req.some(r => r.skill === skill || (r.any && r.any.includes(skill))) || k.prof.includes(skill);
    return c.goalRequests.some(({ cls }) => {
      const parts = cls.split(/ or /).map(s => s.trim());
      return parts.some(p => {
        if (p === k.name) return true;
        if (p === 'Heavy armor classes') return has('Heavy Armour') && k.role.includes('Tank');
        if (p === 'Cavalry classes') return k.req.some(r => r.skill === 'Riding') && k.name !== 'Great Knight';
        if (p === 'Magic classes') return k.role.startsWith('Magic');
        if (p === 'Flying classes') return k.req.some(r => r.skill === 'Flying');
        if (p === 'Sword fighting classes') return k.req.length && k.req.every(r => r.skill === 'Sword');
        return false;
      });
    });
  }

  // How well a class suits a character. Three bands:
  //   recommended  the game suggests it through a goal-change request
  //   crossover    every required skill is a strength, budding talent or suggested goal skill, and none is weak
  //   work         it needs a weakness, or a skill outside those sets
  function classFit(rn, name, k) {
    const c = CHAR[name];
    const goalSkills = new Set([...c.defaultGoal, ...c.goalRequests.flatMap(g => g.skills)]);
    const natural = s => c.strong.includes(s) || c.budding === s || goalSkills.has(s);
    const reqs = k.req.map(r => {
      let skill = r.skill;
      if (r.any) {
        skill = r.any.slice().sort((a, b) => (aptitude(c, b) === 'strong') - (aptitude(c, a) === 'strong')
          || (expBetween(currentRank(rn, name, a), r.rank) ?? 9999) - (expBetween(currentRank(rn, name, b), r.rank) ?? 9999))[0];
      }
      const cur = currentRank(rn, name, skill);
      const gap = rIdx(cur) >= rIdx(r.rank) ? 0 : (expBetween(cur, r.rank) ?? 0);
      return { skill, rank: r.rank, alt: r.any, apt: c.budding === skill ? 'budding' : aptitude(c, skill), natural: natural(skill), gap };
    });
    const gap = reqs.reduce((a, r) => a + r.gap, 0);
    const weak = reqs.filter(r => r.apt === 'weak');
    const outside = reqs.filter(r => !r.natural && r.apt !== 'weak');
    let cat, why;
    if (suggested(c, k)) {
      const g = c.goalRequests.find(x => x.cls === k.name || x.cls.split(/ or /).includes(k.name)) || c.goalRequests.find(x => suggested({ goalRequests: [x] }, k));
      cat = 'recommended';
      why = g ? `Game suggests it (goal: ${g.skills.join(' + ')})` : 'Game suggests it';
    } else if (!weak.length && !outside.length) {
      cat = 'crossover';
      why = `Uses ${reqs.map(r => r.skill).join(' and ')}, which ${name} already trains well`;
    } else {
      cat = 'work';
      why = weak.length ? `Needs ${weak.map(r => r.skill).join(', ')}, a weakness` : `Needs ${outside.map(r => r.skill).join(', ')}, outside ${name}'s strengths`;
    }
    if (k.prereq) why += `. Needs ${k.prereq} passed first`;
    return { cat, why, reqs, gap };
  }

  // All requirements for the chosen plan, merged by skill (highest rank wins).
  function requirements(rn, name) {
    const c = CHAR[name];
    const p = plan(rn, name);
    const bySkill = {};
    const exams = [];
    TIERS.forEach(tier => {
      const k = CLASS[p[tier]];
      if (!k) return;
      const reqs = k.req.map(r => {
        if (r.any) {
          // Pick the alternative that is cheapest for this character.
          const best = r.any.map(s => ({ skill: s, gap: expBetween(currentRank(rn, name, s), r.rank) ?? 9999 }))
            .sort((a, b) => a.gap - b.gap || (aptitude(c, b.skill) === 'strong') - (aptitude(c, a.skill) === 'strong'))[0];
          return { skill: best.skill, rank: r.rank, alt: r.any };
        }
        return r;
      });
      reqs.forEach(r => {
        const cur = bySkill[r.skill];
        if (!cur || rIdx(r.rank) > rIdx(cur.rank)) bySkill[r.skill] = { skill: r.skill, rank: r.rank, for: [] };
        bySkill[r.skill].for.push(`${k.name} (${r.rank})`);
      });
      exams.push({ tier, cls: k, reqs });
    });
    const skills = Object.values(bySkill).map(s => {
      const cur = currentRank(rn, name, s.skill);
      const need = rIdx(cur) >= rIdx(s.rank) ? 0 : expBetween(cur, s.rank);
      return Object.assign(s, { current: cur, need, apt: aptitude(c, s.skill), budding: c.budding === s.skill });
    }).sort((a, b) => b.need - a.need);
    exams.forEach(e => {
      e.missing = e.reqs.filter(r => rIdx(currentRank(rn, name, r.skill)) < rIdx(r.rank));
      e.met = e.missing.length === 0;
    });
    return { skills, exams };
  }

  // What to set as this week's goals.
  function weeklyFocus(rn, name) {
    const { skills, exams } = requirements(rn, name);
    const next = exams.find(e => !e.met);
    const pool = next ? skills.filter(s => next.missing.some(m => m.skill === s.skill)) : skills.filter(s => s.need > 0);
    const rank = s => s.need + (s.apt === 'strong' ? 30 : 0) - (s.apt === 'weak' ? 30 : 0);
    const picks = pool.slice().sort((a, b) => rank(b) - rank(a)).slice(0, 2);
    // Fill a second goal slot with the rest of the plan, then Authority.
    if (picks.length === 1) {
      const other = skills.find(s => s.need > 0 && s.skill !== picks[0].skill);
      if (other) picks.push(other);
    }
    const auth = rIdx(currentRank(rn, name, 'Authority')) < rIdx('B');
    const move = picks.map(p => p.skill).concat(skills.filter(s => s.need > 0).map(s => s.skill))
      .find(s => ['Riding', 'Flying', 'Heavy Armour'].includes(s));
    return { next, picks, single: picks.length === 1, authority: auth, groupTask: move, skills };
  }

  // Byleth has no lessons. Faculty Training pays 20 exp a session, 30 for a strength.
  const sessionsFor = s => (s.need ? Math.ceil(s.need / (s.apt === 'strong' ? 30 : 20)) : 0);
  function weeksFor(rn, s, single) {
    const base = R.GOAL_EXP[rn.difficulty][s.apt];
    const per = single ? base * 1.5 : base;
    return s.need ? Math.ceil(s.need / per) : 0;
  }

  // Roles of the class a unit ends on.
  function finalClass(rn, name) {
    const uniq = routeUnique(rn, name);
    if (uniq.length) return { name: uniq[uniq.length - 1].name, role: uniq[uniq.length - 1].role, unique: true };
    const p = plan(rn, name);
    for (const t of ['Master', 'Special', 'Advanced', 'Intermediate', 'Beginner']) {
      if (CLASS[p[t]]) return { name: p[t], role: CLASS[p[t]].role };
    }
    return { name: '—', role: CHAR[name].role };
  }
  function roleTags(role) {
    const tags = [];
    const r = role.toLowerCase();
    if (r.includes('tank')) tags.push('Tank');
    if (r.includes('physical')) tags.push('Physical damage');
    if (r.includes('magic')) tags.push('Magic damage');
    if (r.includes('archer')) tags.push('Archer');
    if (r.includes('healer')) tags.push('Healer');
    if (r.includes('flier')) tags.push('Flier');
    if (r.includes('dancer')) tags.push('Dancer');
    return tags;
  }
  function teamRoles(rn) {
    return rn.team.map(n => {
      const f = finalClass(rn, n);
      const tags = roleTags(f.role);
      if (rn.dancer === n && !tags.includes('Dancer')) tags.push('Dancer');
      return { name: n, cls: f, tags, cavalry: /cavalry/i.test(f.role) };
    });
  }

  // Movement type of the class a unit ends on.
  const UNIQUE_MOVE = { 'Armored Lord': 'Armoured', Emperor: 'Armoured', 'Wyvern Master': 'Flier', Barbarossa: 'Flier', 'Death Knight': 'Cavalry' };
  function moveType(clsName) {
    if (UNIQUE_MOVE[clsName]) return UNIQUE_MOVE[clsName];
    const k = CLASS[clsName];
    if (!k) return 'Infantry';
    const needs = s => k.req.some(r => r.skill === s) || k.prof.includes(s);
    if (needs('Flying')) return 'Flier';
    if (needs('Riding') || clsName === 'Great Knight') return 'Cavalry';
    if (needs('Heavy Armour')) return 'Armoured';
    return 'Infantry';
  }

  // Team balance: role counts against targets, gaps, and the damage and movement mix.
  function balance(rn) {
    const roles = teamRoles(rn).map(r => Object.assign(r, { move: moveType(r.cls.name) }));
    const targets = R.ROLE_TARGETS.map(t => {
      const n = roles.filter(r => r.tags.includes(t.role)).length;
      return Object.assign({}, t, { n, st: n < t.min ? 'low' : n > t.max + 1 ? 'high' : 'ok' });
    });
    const gaps = targets.filter(t => t.st === 'low');
    const surplus = targets.filter(t => t.st === 'high');
    const moves = ['Infantry', 'Armoured', 'Cavalry', 'Flier'].map(m => [m, roles.filter(r => r.move === m).length]);
    const phys = targets.find(t => t.role === 'Physical damage').n;
    const mag = targets.find(t => t.role === 'Magic damage').n;
    const verdict = !gaps.length ? 'balanced' : gaps.length === 1 ? 'close' : 'unbalanced';
    return { roles, targets, gaps, surplus, moves, phys, mag, verdict };
  }

  // Recruitment check with support discount.
  function recruitNeed(c, support) {
    const r = c.recruit;
    if (!r || !r.stat) return null;
    const i = R.SUPPORTS.indexOf(support || 'None');
    const table = R.SKILL_DISCOUNT[r.rank];
    const rank = table ? table[i] : r.rank;
    const stat = Math.round(r.statVal * R.STAT_FACTOR[i]);
    return { rank, stat, statName: r.stat, skill: r.skill, baseRank: r.rank, baseStat: r.statVal };
  }

  // Community rating for a unit in this run.
  function rating(rn, name) {
    const own = CHAR[name].house === rn.house;
    return R.community(name, rn.house, rn.route, own);
  }
  const TIER_LABEL = { top: 'Top pick', strong: 'Strong', average: 'Average', weak: 'Weak' };
  const ratingBadge = (r, big) => r && (r.tier === 'top' || r.tier === 'strong')
    ? `<span class="cr ${r.tier}${big ? ' big' : ''}" title="${esc('Community rating: ' + TIER_LABEL[r.tier] + (r.why ? '. ' + r.why : ''))}">${r.tier === 'top' ? '★★' : '★'} ${TIER_LABEL[r.tier]}</span>` : '';

  // ---------- rendering helpers ----------

  const houseChip = h => `<span class="house-chip" style="--c:${R.HOUSES[h].color}">${esc(R.HOUSES[h].name)}</span>`;
  const roleClass = t => 'role-' + t.split(' ')[0].toLowerCase();
  const roleChips = tags => tags.map(t => `<span class="role ${roleClass(t)}">${esc(t)}</span>`).join('');
  const aptBadge = a => ({ strong: '<span class="apt strong" title="Strength: learns faster">▲</span>', weak: '<span class="apt weak" title="Weakness: learns slower">▼</span>', neutral: '' }[a]);
  const rankSelect = (value, attrs) => `<select class="rank" ${attrs}>${R.RANKS.slice(0, 9).map(r => `<option ${r === value ? 'selected' : ''}>${r}</option>`).join('')}</select>`;
  const empty = (title, body) => `<div class="empty"><h3>${esc(title)}</h3><p>${body}</p></div>`;

  // ---------- views ----------

  function viewWelcome() {
    return `
      <div class="welcome">
        <h1>Plan a Three Houses run</h1>
        <p class="lead">Pick a house, choose your team, and plan each unit's classes. The planner tells you which goals to set every Monday, what each unit does in the team, and what Byleth must train to recruit students from other houses.</p>
        <form id="welcome-form" class="card new-run">
          <label>Run name<input name="name" required placeholder="First run — Hard / Classic" value="My first run"></label>
          <div class="house-pick">
            ${['BE', 'BL', 'GD'].map((h, i) => `
              <label class="house-opt" style="--c:${R.HOUSES[h].color}">
                <input type="radio" name="house" value="${h}" ${i === 1 ? 'checked' : ''}>
                <span class="house-opt-body"><strong>${R.HOUSES[h].name}</strong><small>${R.HOUSES[h].leader} · ${R.ROUTES_FOR[h].map(r => R.ROUTES[r].name).join(' or ')}</small></span>
              </label>`).join('')}
          </div>
          <button class="btn primary" type="submit">Create run</button>
        </form>
        <p class="muted small">Runs are saved in this browser's local storage. Export a run to back it up.</p>
      </div>`;
  }

  const VERDICT = {
    balanced: ['Balanced', 'Every role is covered.'],
    close: ['1 gap', 'One role is short. Fix it and the team is balanced.'],
    unbalanced: ['Unbalanced', 'Several roles are short.'],
  };
  function balanceCard(rn) {
    const b = balance(rn);
    const [vt, vs] = VERDICT[b.verdict];
    const need = b.gaps.map(t => `<span class="gap-chip">Need ${t.min - t.n} more ${esc(t.role)}</span>`).join('')
      + b.surplus.map(t => `<span class="gap-chip soft">${t.n} ${esc(t.role)} — more than needed</span>`).join('');
    const head = b.targets.map(t => `<th class="rm-col" title="${esc(t.hint)}"><span class="role ${roleClass(t.role)}">${esc(t.role.replace(' damage', ''))}</span></th>`).join('');
    const rows = b.roles.map(r => `<tr class="click" data-open="${esc(r.name)}">
      <td class="rm-name"><strong>${esc(r.name)}</strong><small>${esc(r.cls.name)} · ${esc(r.move)}</small></td>
      ${b.targets.map(t => `<td class="rm-cell">${r.tags.includes(t.role) ? `<span class="rm-dot ${roleClass(t.role)}"></span>` : ''}</td>`).join('')}
    </tr>`).join('');
    const foot = b.targets.map(t => `<td class="rm-count ${t.st}">${t.n}<small>/${t.min === t.max ? t.min : t.min + '–' + t.max}</small></td>`).join('');
    const dmgTotal = Math.max(1, b.phys + b.mag);
    const moveTotal = Math.max(1, b.roles.length);
    const slots = 10;
    return `
      <section class="card balance ${b.verdict}">
        <div class="bal-head">
          <div>
            <h2>Team balance</h2>
            <p class="muted small">Roles come from the class each unit ends on. Targets assume about ${slots} deployment slots. One unit can fill two roles.</p>
          </div>
          <div class="verdict ${b.verdict}"><span class="v-title">${vt}</span><span class="v-sub">${vs}</span></div>
        </div>
        ${need ? `<div class="gap-row">${need}</div>` : ''}
        <div class="bal-grid">
          <div class="rm-wrap">
            <table class="role-matrix">
              <thead><tr><th></th>${head}</tr></thead>
              <tbody>${rows}</tbody>
              <tfoot><tr><td class="rm-name muted small">Team / target</td>${foot}</tr></tfoot>
            </table>
          </div>
          <div class="bal-side">
            <div class="mix">
              <div class="mix-h"><span>Damage</span><span class="muted small">${b.phys} physical · ${b.mag} magic</span></div>
              <div class="mix-bar"><span class="seg phys" style="width:${(b.phys / dmgTotal) * 100}%"></span><span class="seg mag" style="width:${(b.mag / dmgTotal) * 100}%"></span></div>
              <p class="small muted">${b.mag === 0 ? 'No magic: armoured enemies will stall the team.' : b.phys === 0 ? 'No physical damage: mages struggle against high-Resistance enemies.' : 'Both damage types are covered.'}</p>
            </div>
            <div class="mix">
              <div class="mix-h"><span>Movement</span><span class="muted small">${b.moves.filter(m => m[1]).map(([m, n]) => `${n} ${m.toLowerCase()}`).join(' · ')}</span></div>
              <div class="mix-bar">${b.moves.map(([m, n]) => `<span class="seg mv-${m.toLowerCase()}" style="width:${(n / moveTotal) * 100}%" title="${m}: ${n}"></span>`).join('')}</div>
              <div class="mix-legend small">${b.moves.map(([m]) => `<span><i class="mv-${m.toLowerCase()}"></i>${m}</span>`).join('')}</div>
              <p class="small muted">Cavalry and fliers get Canto: they move again after acting.</p>
            </div>
            <div class="mix">
              <div class="mix-h"><span>Deployment</span><span class="muted small">${b.roles.length} planned · ${slots} slots in Part 1</span></div>
              <div class="slots">${Array.from({ length: Math.max(slots, b.roles.length) }, (_, i) => `<span class="slot ${i < b.roles.length ? (i < slots ? 'on' : 'over') : ''}"></span>`).join('')}</div>
              <p class="small muted">${b.roles.length > 12 ? 'More units than slots. Bench some, or use them as adjutants.' : 'Part 2 maps allow up to 12.'}</p>
            </div>
          </div>
        </div>
      </section>`;
  }

  // Compact balance strip for the Roster tab.
  function balanceStrip(rn) {
    const b = balance(rn);
    return `<div class="bal-strip ${b.verdict}">
      <span class="verdict-pill ${b.verdict}">${VERDICT[b.verdict][0]}</span>
      ${b.targets.map(t => `<span class="strip-role ${t.st}" title="${esc(t.hint)}"><span class="role ${roleClass(t.role)}">${esc(t.role.replace(' damage', ''))}</span><b>${t.n}</b><small>/${t.min === t.max ? t.min : t.min + '–' + t.max}</small></span>`).join('')}
      <span class="muted small">${b.roles.length} units</span>
    </div>`;
  }

  function viewOverview(rn) {
    const roles = teamRoles(rn);
    const warnings = [];
    if (!rn.dancer) warnings.push('No Dancer chosen. Mark a candidate in <strong>Training</strong>. They need 13 Charm for the White Heron Cup in Chapter 9.');
    if (rn.team.length > 13) warnings.push(`${rn.team.length} units planned. About 10 deploy in Part 1 and up to 12 later. Training everyone spreads experience thin.`);
    rn.team.forEach(n => {
      R.availability(CHAR[n], rn.house, rn.route, rn.bylethGender).warnings.forEach(w => warnings.push(`<strong>${esc(n)}</strong>: ${esc(w)}`));
    });
    const recruits = rn.team.filter(n => R.availability(CHAR[n], rn.house, rn.route, rn.bylethGender).status === 'recruit');
    return `
      ${balanceCard(rn)}
      <section class="card">
          <h2>Needs attention</h2>
          ${warnings.length ? `<ul class="warn-list">${warnings.map(w => `<li>${w}</li>`).join('')}</ul>` : '<p class="ok-note">Nothing flagged.</p>'}
          <div class="stat-row">
            <div class="stat"><span class="stat-n">${rn.team.length}</span><span class="stat-l">units planned</span></div>
            <div class="stat"><span class="stat-n">${recruits.length}</span><span class="stat-l">to recruit</span></div>
            <div class="stat"><span class="stat-n">10</span><span class="stat-l">slots, Part 1</span></div>
          </div>
        </section>
      <section class="card">
        <h2>Training at a glance</h2>
        <table class="table">
          <thead><tr><th>Unit</th><th>Ends as</th><th>Roles</th><th>This week's goals</th><th>Next exam</th></tr></thead>
          <tbody>${roles.map(r => {
            const f = weeklyFocus(rn, r.name);
            return `<tr class="click" data-open="${esc(r.name)}">
              <td><strong>${esc(r.name)}</strong>${rn.dancer === r.name ? ' <span class="tag">Dancer</span>' : ''}</td>
              <td>${esc(r.cls.name)}${r.cls.unique ? ' <span class="tag gold">route</span>' : ''}</td>
              <td>${roleChips(r.tags)}</td>
              <td>${r.name === 'Byleth' && f.picks.length ? '<span class="tag gold">Faculty</span> ' : ''}${f.picks.length ? f.picks.map(p => `<span class="skill">${esc(p.skill)}</span>`).join(' ') : '<span class="muted">Plan met</span>'}</td>
              <td>${f.next ? `${esc(f.next.cls.name)} <span class="muted small">Lv ${f.next.cls.level}</span>` : '<span class="muted">—</span>'}</td>
            </tr>`;
          }).join('')}</tbody>
        </table>
      </section>`;
  }

  function viewRoster(rn) {
    const f = state.ui.filter;
    const groups = [['BE', 'Black Eagles'], ['BL', 'Blue Lions'], ['GD', 'Golden Deer'], ['Church', 'Church and faculty'], ['Wolves', 'Ashen Wolves'], ['DLC', 'Expansion Pass']];
    const filters = [['all', 'All'], ['team', 'In team'], ['strong', '★ Strong recruits'], ...groups];
    const cards = list => list.map(c => {
      const a = R.availability(c, rn.house, rn.route, rn.bylethGender);
      const inTeam = rn.team.includes(c.name);
      const role = c.name === 'Byleth' ? 'Physical damage, healer' : c.role;
      const cr = rating(rn, c.name);
      const standout = cr && (cr.tier === 'top' || cr.tier === 'strong') && (a.status === 'recruit' || a.status === 'auto');
      return `
        <button class="char ${inTeam ? 'on' : ''} ${a.status} ${standout ? 'standout ' + cr.tier : ''}" data-toggle="${esc(c.name)}" ${a.status === 'unavailable' || c.name === 'Byleth' ? 'disabled' : ''} style="--c:${R.HOUSES[c.house].color}">
          <div class="char-top"><span class="char-name">${esc(c.name)}</span><span class="check">${inTeam ? '✓' : '+'}</span></div>
          ${a.status !== 'unavailable' && cr && (cr.tier === 'top' || cr.tier === 'strong') ? `<div class="char-cr">${ratingBadge(cr)}${cr.why ? `<span class="cr-why">${esc(cr.why)}</span>` : ''}</div>` : ''}
          <div class="char-roles">${roleChips(roleTags(role))}</div>
          <div class="char-meta"><span class="status ${a.status}">${esc(a.label)}</span></div>
          <div class="char-apt">${c.strong.map(s => `<span>${esc(s)}</span>`).join('')}</div>
          ${a.warnings.length ? `<div class="char-warn" title="${esc(a.warnings.join(' '))}">⚠ ${esc(a.warnings[0])}</div>` : ''}
        </button>`;
    }).join('');
    let body;
    if (f === 'team') body = `<div class="char-grid">${cards(rn.team.map(n => CHAR[n]))}</div>`;
    else if (f === 'strong') {
      const list = D.characters.filter(c => {
        const a = R.availability(c, rn.house, rn.route, rn.bylethGender);
        const cr = rating(rn, c.name);
        return (a.status === 'recruit' || a.status === 'auto') && cr && (cr.tier === 'top' || cr.tier === 'strong');
      }).sort((x, y) => (rating(rn, x.name).tier === 'top' ? 0 : 1) - (rating(rn, y.name).tier === 'top' ? 0 : 1));
      body = `<p class="muted small">Students and staff from outside your house that the community rates top or strong, for ${esc(R.ROUTES[rn.route].name)}. Ratings come from four Maddening tier lists, which also hold for Hard.</p><div class="char-grid">${cards(list)}</div>`;
    }
    else body = groups.filter(([h]) => f === 'all' || f === h).map(([h, label]) => {
      const list = D.characters.filter(c => c.house === h);
      return list.length ? `<h3 class="group-h" style="--c:${R.HOUSES[h].color}">${label}</h3><div class="char-grid">${cards(list)}</div>` : '';
    }).join('');
    return `
      <section class="card">
        <div class="row between wrap">
          <div><h2>Choose your team</h2><p class="muted">Click a character to add or remove them. Byleth is always in the team. The status shows how each one joins on <strong>${R.ROUTES[rn.route].name}</strong>.</p></div>
          <div class="chips">${filters.map(([k, l]) => `<button class="chip ${f === k ? 'on' : ''}" data-filter="${k}">${esc(l)}</button>`).join('')}</div>
        </div>
        <div class="strip-wrap">${balanceStrip(rn)}</div>
        ${body}
      </section>`;
  }

  function viewTraining(rn) {
    if (!rn.team.includes(state.ui.selected)) state.ui.selected = rn.team[0];
    const name = state.ui.selected;
    const c = CHAR[name];
    const p = plan(rn, name);
    const f = weeklyFocus(rn, name);
    const { skills, exams } = requirements(rn, name);
    const uniq = routeUnique(rn, name);
    const fc = finalClass(rn, name);
    const list = rn.team.map(n => {
      const ff = weeklyFocus(rn, n);
      return `<button class="side-item ${n === name ? 'on' : ''}" data-select="${esc(n)}" style="--c:${R.HOUSES[CHAR[n].house].color}">
        <span>${esc(n)}</span><small>${ff.picks.map(x => x.skill).join(' + ') || 'Plan met'}</small></button>`;
    }).join('');

    const ORDER = { recommended: 0, crossover: 1, work: 2 };
    const LABEL = { recommended: 'Recommended', crossover: 'Crossover', work: 'Extra work' };
    const aptMark = a => ({ strong: '▲', weak: '▼', budding: '✦' }[a] || '');
    const explorer = TIERS.map(tier => {
      const opts = classOptions(rn, name, tier).map(k => Object.assign({ k }, classFit(rn, name, k)))
        .sort((a, b) => ORDER[a.cat] - ORDER[b.cat] || a.gap - b.gap);
      if (!opts.length) return '';
      const k0 = opts[0].k;
      const counts = ['recommended', 'crossover'].map(cat => [cat, opts.filter(o => o.cat === cat).length]).filter(x => x[1]);
      return `<div class="tier-block">
        <div class="tier-head">
          <div><strong>${tier}</strong> <span class="muted small">level ${k0.level}+ · ${esc(k0.seal)}${tier === 'Master' ? ' · professor level C' : ''}</span></div>
          <div class="small muted">${counts.map(([cat, n]) => `<span class="fit-dot ${cat}"></span>${n} ${LABEL[cat].toLowerCase()}`).join(' &nbsp; ') || 'No natural fits at this tier'}${p[tier] ? ` · planned: <strong>${esc(p[tier])}</strong>` : ''}</div>
        </div>
        <div class="class-cards">${opts.map(o => `
          <button class="class-card ${o.cat} ${p[tier] === o.k.name ? 'picked' : ''}" data-pick="${tier}|${esc(o.k.name)}" title="${esc(o.why)}">
            <div class="cc-top"><span class="cc-name">${esc(o.k.name)}</span><span class="cc-badge">${p[tier] === o.k.name ? '✓ Planned' : LABEL[o.cat]}</span></div>
            <div class="cc-roles">${roleChips(roleTags(o.k.role))}</div>
            <div class="cc-reqs">${o.reqs.map(r => `<span class="cc-req ${r.apt} ${r.gap ? '' : 'met'}">${aptMark(r.apt)} ${esc(r.skill)} ${esc(r.rank)}${r.alt ? '<em>*</em>' : ''}</span>`).join('')}</div>
            <div class="cc-why">${esc(o.why)}</div>
            <div class="cc-foot"><span>${o.gap ? o.gap + ' exp to go' : 'Skills met'}</span><span>${esc(o.k.mastery)}</span></div>
          </button>`).join('')}
        </div>
      </div>`;
    }).join('');
    const uniqueRow = uniq.length ? `<div class="tier-block"><div class="tier-head"><div><strong>Route grants</strong> <span class="muted small">no exam or seal</span></div></div>
      <div class="class-cards">${uniq.map(u => `<div class="class-card route"><div class="cc-top"><span class="cc-name">${esc(u.name)}</span><span class="cc-badge">Unique</span></div>
        <div class="cc-roles">${roleChips(roleTags(u.role))}</div><div class="cc-why">${esc(u.granted)}</div><div class="cc-foot"><span>${esc(u.abilities)}</span><span>${esc(u.mastery)}</span></div></div>`).join('')}</div></div>` : '';

    const isB = name === 'Byleth';
    const goalText = isB
      ? (f.picks.length
        ? `Byleth has no lessons. Spend free-day <strong>Faculty Training</strong> on <span class="skill big">${esc(f.picks[0].skill)}</span>${f.picks[1] ? ` then <span class="skill big">${esc(f.picks[1].skill)}</span>` : ''}. Each instructor trains Byleth once per weekend.`
        : 'Every exam in the plan is met. Spend Faculty Training on the skills recruits need. See Recruitment.')
      : f.picks.length
      ? (f.single
        ? `Set a <strong>single-skill goal</strong> on <span class="skill big">${esc(f.picks[0].skill)}</span>. It pays 1.5 times a two-skill goal.`
        : `Set goals to <span class="skill big">${esc(f.picks[0].skill)}</span> + <span class="skill big">${esc(f.picks[1].skill)}</span>.`)
      : 'Every exam in the plan is met. Put goals on Authority for battalions, or on the next class you add.';
    const instruct = isB ? (f.picks.length ? `Instructors for ${esc(f.picks[0].skill)}: ${D.faculty.filter(x => x.skills.includes(f.picks[0].skill)).map(x => esc(x.name)).join(', ')}.` : '') : f.picks.length ? `When you instruct ${esc(name)}, pick <strong>${esc(f.picks[0].skill)}</strong> — the biggest gap for ${f.next ? esc(f.next.cls.name) : 'the plan'}.` : '';
    const tips = [];
    if (f.groupTask && !isB) tips.push(`Assign ${esc(name)} to the <strong>${{ Riding: 'Stable Duty', Flying: 'Sky Watch', 'Heavy Armour': 'Weeding' }[f.groupTask]}</strong> group task. It trains ${esc(f.groupTask)}.`);
    if (f.authority) tips.push('Authority is below B. Raise it through battle and seminars to carry a better battalion.');
    skills.filter(s => s.budding && s.need).forEach(s => tips.push(`${esc(s.skill)} is a <strong>budding talent</strong>. Instruct it 12 times to turn it into a strength and unlock a bonus ability. Commit fully or not at all.`));
    skills.filter(s => s.apt === 'weak' && !s.budding && s.need).forEach(s => tips.push(`${esc(s.skill)} is a <strong>weakness</strong>, so it trains slowly. Consider a class that avoids it.`));
    exams.filter(e => e.tier === 'Master').forEach(() => tips.push('Master exams need professor level <strong>C</strong> and a Master Seal.'));

    const skillRows = skills.map(s => `
      <tr class="${s.need ? '' : 'done'}">
        <td><span class="skill">${esc(s.skill)}</span> ${aptBadge(s.apt)} ${s.budding ? '<span class="apt bud" title="Budding talent">✦</span>' : ''}</td>
        <td>${rankSelect(s.current, `data-rank="${esc(s.skill)}"`)}</td>
        <td><strong>${esc(s.rank)}</strong></td>
        <td>${s.need ? s.need + ' exp' : '<span class="ok">met</span>'}</td>
        <td>${s.need ? (isB ? '~' + sessionsFor(s) + ' sessions' : '~' + weeksFor(rn, s, f.single && f.picks[0] && f.picks[0].skill === s.skill) + ' wk') : ''}</td>
        <td class="small muted">${esc(s.for.join(', '))}</td>
      </tr>`).join('');

    const timeline = exams.map(e => `
      <li class="${e.met ? 'met' : ''}">
        <div class="tl-dot"></div>
        <div><strong>${esc(e.cls.name)}</strong> <span class="muted small">${e.tier} · level ${e.cls.level} · ${esc(e.cls.seal)}${e.cls.prereq ? ' · needs ' + esc(e.cls.prereq) + ' passed' : ''}</span>
        <div class="small">${e.reqs.map(r => `<span class="req ${rIdx(currentRank(rn, name, r.skill)) >= rIdx(r.rank) ? 'ok' : ''}">${esc(r.skill)} ${esc(r.rank)}${r.alt ? ' <em>(or ' + esc(r.alt.filter(a => a !== r.skill).join('/')) + ')</em>' : ''}</span>`).join('')}</div>
        <div class="small muted">Mastery: ${esc(e.cls.mastery)}</div></div>
      </li>`).join('') + uniq.map(u => `
      <li class="route"><div class="tl-dot"></div><div><strong>${esc(u.name)}</strong> <span class="tag gold">route grants</span> <span class="muted small">${esc(u.granted)}</span>
        <div class="small muted">${esc(u.abilities)} · Mastery: ${esc(u.mastery)} · ${esc(u.role)}</div></div></li>`).join('');

    return `
      <div class="split">
        <aside class="card side">${list}</aside>
        <div class="stack">
          <section class="card hero-card" style="--c:${R.HOUSES[c.house].color}">
            <div class="row between wrap">
              <div>
                <h2>${esc(name)} ${ratingBadge(rating(rn, name), true)}</h2>
                <div class="row gap wrap small">${houseChip(c.house)}
                  ${c.strong.map(s => `<span class="pill strong">▲ ${esc(s)}</span>`).join('')}
                  ${c.weak.map(s => `<span class="pill weak">▼ ${esc(s)}</span>`).join('')}
                  ${c.budding ? `<span class="pill bud">✦ ${esc(c.budding)}</span>` : ''}
                </div>
              </div>
              <div class="right">
                <div class="muted small">Ends as</div>
                <div class="big-class">${esc(fc.name)}</div>
                <div>${roleChips(roleTags(fc.role))}</div>
                <label class="dancer-toggle"><input type="checkbox" data-dancer ${rn.dancer === name ? 'checked' : ''}> White Heron Cup entrant</label>
              </div>
            </div>
          </section>

          <section class="card callout">
            <h3>This week</h3>
            <p>${goalText}</p>
            ${instruct ? `<p>${instruct}</p>` : ''}
            ${tips.length ? `<ul class="tips">${tips.map(t => `<li>${t}</li>`).join('')}</ul>` : ''}
          </section>

          <section class="card">
            <div class="row between wrap"><h3>Class plan</h3><button class="btn ghost small" data-reset-plan>Reset to game suggestion</button></div>
            <p class="muted small">Every class ${esc(name)} can take, by tier. Click a card to plan it, and click it again to clear the tier.${c.defaultGoal.length ? ` Default goal: ${esc(c.defaultGoal.join(' + '))}.` : ''}</p>
            <div class="legend small">
              <span><span class="fit-dot recommended"></span><strong>Recommended</strong> — the game suggests it through a goal-change request</span>
              <span><span class="fit-dot crossover"></span><strong>Crossover</strong> — uses only skills ${esc(name)} is strong in or already trains</span>
              <span><span class="fit-dot work"></span><strong>Extra work</strong> — needs a weakness or a new skill</span>
              <span class="muted">▲ strength · ▼ weakness · ✦ budding talent · * one of several skills</span>
            </div>
            ${uniqueRow}
            <div class="explorer">${explorer}</div>
          </section>

          <section class="card">
            <h3>Skills to train</h3>
            <p class="muted small">Set the current rank as ${esc(name)} improves. ${isB ? 'Sessions assume Faculty Training alone. Battle adds more.' : `Weeks assume goal experience only on ${esc(rn.difficulty)}. Instruction and battle make it faster.`}</p>
            ${skills.length ? `<table class="table"><thead><tr><th>Skill</th><th>Now</th><th>Target</th><th>Needed</th><th>${isB ? 'Training' : 'Goals'}</th><th>Needed for</th></tr></thead><tbody>${skillRows}</tbody></table>` : '<p class="muted">Pick a class above to see which skills to train.</p>'}
          </section>

          <section class="card">
            <h3>Exam milestones</h3>
            <ol class="timeline">${timeline || '<li class="muted">No classes planned.</li>'}</ol>
          </section>
        </div>
      </div>`;
  }

  function viewRecruit(rn) {
    const recruits = rn.team.map(n => CHAR[n]).map(c => ({ c, a: R.availability(c, rn.house, rn.route, rn.bylethGender) }))
      .filter(x => x.a.status === 'recruit' || x.a.status === 'auto');
    // What Byleth must train, merged over every recruit.
    const need = {};
    recruits.forEach(({ c }) => {
      const rq = recruitNeed(c, rn.support[c.name]);
      if (!rq || rq.rank === 'Any') return;
      if (!need[rq.skill] || rIdx(rq.rank) > rIdx(need[rq.skill].rank)) need[rq.skill] = { rank: rq.rank, who: [] };
      need[rq.skill].who.push(c.name);
    });
    const bylethRows = Object.entries(need).map(([skill, v]) => {
      const cur = currentRank(rn, 'Byleth', skill);
      const gap = rIdx(cur) >= rIdx(v.rank) ? 0 : expBetween(cur, v.rank);
      const teachers = D.faculty.filter(f => f.skills.includes(skill));
      return `<tr class="${gap ? '' : 'done'}"><td><span class="skill">${esc(skill)}</span></td>
        <td>${rankSelect(cur, `data-byleth-rank="${esc(skill)}"`)}</td><td><strong>${esc(v.rank)}</strong></td>
        <td>${gap ? gap + ' exp' : '<span class="ok">met</span>'}</td>
        <td class="small">${teachers.map(t => `<span title="${esc(t.note)}">${esc(t.name)}${t.note ? '*' : ''}</span>`).join(', ') || '—'}</td>
        <td class="small muted">${esc(v.who.join(', '))}</td></tr>`;
    }).join('');
    const cards = recruits.map(({ c, a }) => {
      const rq = recruitNeed(c, rn.support[c.name]);
      let check = '';
      if (rq && a.status === 'recruit') {
        const cur = currentRank(rn, 'Byleth', rq.skill);
        const ok = rq.rank === 'Any' || rIdx(cur) >= rIdx(rq.rank);
        check = `
          <div class="req-box">
            <label>Support with Byleth
              <select data-support="${esc(c.name)}">${R.SUPPORTS.map(s => `<option ${((rn.support[c.name] || 'None') === s) ? 'selected' : ''}>${s}</option>`).join('')}</select>
            </label>
            <div class="req-line"><span class="muted">Byleth needs</span>
              <strong>${rq.stat === 0 ? 'any' : rq.stat} ${esc(rq.statName)}</strong> and <strong>${esc(rq.rank)} ${esc(rq.skill)}</strong>
              <span class="muted small">(base ${rq.baseStat} and ${esc(rq.baseRank)})</span></div>
            <div class="req-line ${ok ? 'ok' : ''}">${esc(rq.skill)}: Byleth is ${esc(cur)} ${ok ? '✓' : '— train it'}</div>
          </div>`;
      }
      return `<div class="card recruit-card" style="--c:${R.HOUSES[c.house].color}">
        <div class="row between"><h3>${esc(c.name)}</h3><span class="status ${a.status}">${esc(a.label)}</span></div>
        ${(() => { const cr = rating(rn, c.name); return cr && cr.tier !== 'average' && cr.tier !== 'weak' ? `<div class="char-cr">${ratingBadge(cr)}${cr.why ? `<span class="cr-why">${esc(cr.why)}</span>` : ''}</div>` : ''; })()}
        ${check}
        <ol class="steps">${a.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
        ${a.warnings.map(w => `<div class="warn">⚠ ${esc(w)}</div>`).join('')}
      </div>`;
    }).join('');
    return `
      <section class="card">
        <h2>What Byleth must train</h2>
        <p class="muted">The highest skill rank any planned recruit asks for, after the support discount you set on each card. Train it through <strong>Faculty Training</strong> on free days: 20 exp per session, 30 for a strength, once per instructor per weekend. Stat checks ignore class bonuses.</p>
        ${bylethRows ? `<table class="table"><thead><tr><th>Skill</th><th>Byleth now</th><th>Target</th><th>Needed</th><th>Who teaches it</th><th>For</th></tr></thead><tbody>${bylethRows}</tbody></table><p class="small muted">* This instructor is absent in some chapters. Hover for detail.</p>` : '<p class="ok-note">No skill checks to train for. Every planned recruit is met, joins automatically, or needs only a talk or a level.</p>'}
        <div class="callout inline"><strong>Shortcut:</strong> at B support, a student may ask to join on any free weekday, ignoring the check. Build support with meals, gifts, lost items and tea. It does not work for Caspar or Ferdinand.</div>
      </section>
      ${recruits.length ? `<div class="grid three">${cards}</div>` : empty('Nobody to recruit', 'Every planned unit is from your house. Add students from other houses in <strong>Roster</strong>.')}`;
  }

  function viewWeekly(rn) {
    const rows = rn.team.map(n => {
      const f = weeklyFocus(rn, n);
      return `<tr class="click" data-open="${esc(n)}">
        <td><strong>${esc(n)}</strong></td>
        <td>${n === 'Byleth' ? `<span class="tag gold">Faculty Training</span> ${f.picks.map(p => `<span class="skill">${esc(p.skill)}</span>`).join(' ')}` : f.picks.length ? f.picks.map(p => `<span class="skill">${esc(p.skill)}</span>${aptBadge(p.apt)}`).join(' + ') + (f.single ? ' <span class="tag">single</span>' : '') : '<span class="muted">Authority</span>'}</td>
        <td>${n === 'Byleth' ? '<span class="muted">—</span>' : f.picks[0] ? esc(f.picks[0].skill) : '—'}</td>
        <td>${f.groupTask && n !== 'Byleth' ? esc({ Riding: 'Stable Duty', Flying: 'Sky Watch', 'Heavy Armour': 'Weeding' }[f.groupTask]) : '<span class="muted">—</span>'}</td>
        <td>${f.next ? `${esc(f.next.cls.name)} <span class="muted small">Lv ${f.next.cls.level} · ${esc(f.next.cls.seal)}</span>` : '<span class="ok">done</span>'}</td>
      </tr>`;
    }).join('');
    return `
      <section class="card">
        <h2>Monday plan</h2>
        <p class="muted">What to set for each unit this week. Update the current ranks in <strong>Training</strong> and this list moves on to the next exam.</p>
        <table class="table"><thead><tr><th>Unit</th><th>Weekly goals</th><th>Instruct first</th><th>Group task</th><th>Working towards</th></tr></thead><tbody>${rows}</tbody></table>
      </section>
      <section class="grid three">
        <div class="card mini"><h3>Every week</h3><ol class="steps"><li>Set goals as above.</li><li>Instruct with every lecture point.</li><li>Answer the student question. It is the biggest source of professor experience.</li><li>Accept goal-change requests that match the plan.</li><li>Assign a group task.</li></ol></div>
        <div class="card mini"><h3>Free days</h3><ol class="steps"><li>Early months: Explore to raise professor level.</li><li>Do free activities first: fishing, greenhouse, gifts, lost items, quests.</li><li>Then Faculty Training, meals, choir, tea.</li><li>About two Explore and two Fight days a month.</li></ol></div>
        <div class="card mini"><h3>Keep motivation up</h3><ol class="steps"><li>Below 50 motivation, a unit can roll "Bad" at half value.</li><li>Rest, seminars, meals, gifts and lost items refill it.</li><li>The first "Perfect" of a week returns 25.</li></ol></div>
      </section>`;
  }

  function viewChecklist(rn) {
    const items = R.CHECKLIST.filter(i => i.routes === 'all' || i.routes.includes(rn.route));
    const done = items.filter(i => rn.checklist[i.id]).length;
    return `
      <section class="card">
        <div class="row between"><h2>Windows that close</h2><span class="muted">${done} / ${items.length} done</span></div>
        <div class="progress"><div style="width:${(done / items.length) * 100}%"></div></div>
        <ul class="checklist">${items.map(i => `
          <li><label><input type="checkbox" data-check="${i.id}" ${rn.checklist[i.id] ? 'checked' : ''}><span>${esc(i.text)}</span></label></li>`).join('')}</ul>
      </section>`;
  }

  // ---------- shell ----------

  const TABS = [['overview', 'Overview'], ['roster', 'Roster'], ['training', 'Training'], ['recruit', 'Recruitment'], ['weekly', 'Monday plan'], ['checklist', 'Checklist']];

  function render() {
    const rn = run();
    const runs = Object.values(state.runs).sort((a, b) => b.created - a.created);
    $('#runs').innerHTML = runs.map(r => `
      <button class="run ${r.id === state.activeId ? 'on' : ''}" data-run="${r.id}" style="--c:${R.HOUSES[r.house].color}">
        <span class="run-name">${esc(r.name)}</span><small>${R.ROUTES[r.route].name} · ${r.difficulty}</small></button>`).join('') || '<p class="muted small pad">No runs yet.</p>';
    $('#settings').innerHTML = rn ? `
      <label>House<select data-set="house">${['BE', 'BL', 'GD'].map(h => `<option value="${h}" ${rn.house === h ? 'selected' : ''}>${R.HOUSES[h].name}</option>`).join('')}</select></label>
      <label>Route<select data-set="route">${R.ROUTES_FOR[rn.house].map(r => `<option value="${r}" ${rn.route === r ? 'selected' : ''}>${R.ROUTES[r].name}</option>`).join('')}</select></label>
      <label>Difficulty<select data-set="difficulty">${['Normal', 'Hard', 'Maddening'].map(d => `<option ${rn.difficulty === d ? 'selected' : ''}>${d}</option>`).join('')}</select></label>
      <label>Byleth<select data-set="bylethGender"><option value="M" ${rn.bylethGender === 'M' ? 'selected' : ''}>Male</option><option value="F" ${rn.bylethGender === 'F' ? 'selected' : ''}>Female</option></select></label>
      <div class="row gap wrap"><button class="btn ghost small" data-act="rename">Rename</button><button class="btn ghost small" data-act="duplicate">Duplicate</button><button class="btn ghost small" data-act="export">Export</button><button class="btn danger small" data-act="delete">Delete</button></div>` : '';
    if (!rn) {
      $('#tabs').innerHTML = '';
      $('#title').innerHTML = '';
      $('#view').innerHTML = viewWelcome();
      return;
    }
    $('#title').innerHTML = `<h1>${esc(rn.name)}</h1><div class="subtitle">${houseChip(rn.house)} <span>${R.ROUTES[rn.route].name}</span><span class="dot">•</span><span>${rn.difficulty}</span><span class="dot">•</span><span>${rn.team.length} units</span></div>`;
    $('#tabs').innerHTML = TABS.map(([k, l]) => `<button class="tab ${state.ui.tab === k ? 'on' : ''}" data-tab="${k}">${l}</button>`).join('');
    const views = { overview: viewOverview, roster: viewRoster, training: viewTraining, recruit: viewRecruit, weekly: viewWeekly, checklist: viewChecklist };
    $('#view').innerHTML = views[state.ui.tab](rn);
  }

  // ---------- modal ----------

  function ask({ title, value = '', house = false, ok = 'Save' }) {
    return new Promise(resolve => {
      const dlg = $('#dialog');
      dlg.innerHTML = `<form class="modal">
        <h3>${esc(title)}</h3>
        <label>Name<input name="name" value="${esc(value)}" required autofocus></label>
        ${house ? `<label>House<select name="house">${['BE', 'BL', 'GD'].map(h => `<option value="${h}">${R.HOUSES[h].name}</option>`).join('')}</select></label>` : ''}
        <div class="row gap end"><button type="button" class="btn ghost" data-cancel>Cancel</button><button type="submit" class="btn primary">${esc(ok)}</button></div>
      </form>`;
      const form = dlg.querySelector('form');
      let done = false;
      const finish = value => {
        if (done) return;
        done = true;
        dlg.onclose = null;
        dlg.oncancel = null;
        if (dlg.open) dlg.close();
        resolve(value);
      };
      form.onsubmit = ev => {
        ev.preventDefault();
        const fd = new FormData(form);
        finish({ name: String(fd.get('name') || '').trim(), house: fd.get('house') });
      };
      form.querySelector('[data-cancel]').onclick = () => finish(null);
      dlg.showModal();
      // Attach after opening, so a close event left over from an earlier dialog cannot fire them.
      setTimeout(() => { if (!done) { dlg.oncancel = () => finish(null); dlg.onclose = () => finish(null); } }, 0);
    });
  }

  // ---------- events ----------

  document.addEventListener('click', async e => {
    const t = e.target.closest('button, tr[data-open]');
    if (!t) return;
    const rn = run();
    if (t.id === 'new-run') {
      const res = await ask({ title: 'New run', value: `Run ${Object.keys(state.runs).length + 1}`, house: true, ok: 'Create' });
      if (res && res.name) { newRun(res.name, res.house); state.ui.tab = 'roster'; save(); render(); }
      return;
    }
    if (t.id === 'import-run') { $('#import-file').click(); return; }
    if (t.dataset.run) { state.activeId = t.dataset.run; save(); render(); return; }
    if (t.dataset.tab) { state.ui.tab = t.dataset.tab; save(); render(); window.scrollTo(0, 0); return; }
    if (t.dataset.filter) { state.ui.filter = t.dataset.filter; save(); render(); return; }
    if (t.dataset.open) { state.ui.selected = t.dataset.open; state.ui.tab = 'training'; save(); render(); window.scrollTo(0, 0); return; }
    if (t.dataset.select) { state.ui.selected = t.dataset.select; save(); render(); return; }
    if (!rn) return;
    if (t.dataset.toggle) {
      const n = t.dataset.toggle;
      rn.team = rn.team.includes(n) ? rn.team.filter(x => x !== n) : rn.team.concat(n);
      if (rn.dancer && !rn.team.includes(rn.dancer)) rn.dancer = null;
      save(); render(); return;
    }
    if (t.dataset.pick) {
      const [tier, cls] = t.dataset.pick.split('|');
      const pl = plan(rn, state.ui.selected);
      pl[tier] = pl[tier] === cls ? undefined : cls;
      save(); render(); return;
    }
    if ('resetPlan' in t.dataset) { rn.plans[state.ui.selected] = Object.assign({}, R.PATHS[state.ui.selected] || {}); save(); render(); return; }
    const act = t.dataset.act;
    if (act === 'rename') {
      const res = await ask({ title: 'Rename run', value: rn.name });
      if (res && res.name) { rn.name = res.name; save(); render(); }
    } else if (act === 'duplicate') {
      const copy = JSON.parse(JSON.stringify(rn));
      copy.id = uid(); copy.name = rn.name + ' (copy)'; copy.created = Date.now();
      state.runs[copy.id] = copy; state.activeId = copy.id; save(); render();
    } else if (act === 'delete') {
      if (confirm(`Delete "${rn.name}"? This cannot be undone.`)) {
        delete state.runs[rn.id];
        state.activeId = Object.keys(state.runs)[0] || null; save(); render();
      }
    } else if (act === 'export') {
      const blob = new Blob([JSON.stringify(rn, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = rn.name.replace(/[^\w-]+/g, '-').toLowerCase() + '.json';
      a.click();
      URL.revokeObjectURL(a.href);
    }
  });

  document.addEventListener('change', e => {
    const t = e.target;
    const rn = run();
    if (t.id === 'import-file') {
      const file = t.files[0];
      if (!file) return;
      file.text().then(txt => {
        try {
          const r = JSON.parse(txt);
          if (!r.team || !r.house) throw new Error('not a run');
          r.id = uid(); r.created = Date.now();
          state.runs[r.id] = r; state.activeId = r.id; save(); render();
        } catch (err) { alert('That file is not an exported run.'); }
      });
      t.value = '';
      return;
    }
    if (!rn) return;
    if (t.dataset.set) {
      rn[t.dataset.set] = t.value;
      if (!R.ROUTES_FOR[rn.house].includes(rn.route)) rn.route = R.ROUTES_FOR[rn.house][0];
      // Drop units the new house or route cannot have.
      rn.team = rn.team.filter(n => R.availability(CHAR[n], rn.house, rn.route, rn.bylethGender).status !== 'unavailable');
    } else if (t.dataset.plan) {
      plan(rn, state.ui.selected)[t.dataset.plan] = t.value || undefined;
    } else if (t.dataset.rank) {
      const n = state.ui.selected;
      rn.ranks[n] = rn.ranks[n] || {};
      rn.ranks[n][t.dataset.rank] = t.value;
    } else if (t.dataset.bylethRank) {
      rn.ranks.Byleth = rn.ranks.Byleth || {};
      rn.ranks.Byleth[t.dataset.bylethRank] = t.value;
    } else if (t.dataset.support) {
      rn.support[t.dataset.support] = t.value;
    } else if ('dancer' in t.dataset) {
      rn.dancer = t.checked ? state.ui.selected : null;
    } else if (t.dataset.check) {
      rn.checklist[t.dataset.check] = t.checked;
    } else return;
    save(); render();
  });

  document.addEventListener('submit', e => {
    if (e.target.id !== 'welcome-form') return;
    e.preventDefault();
    const fd = new FormData(e.target);
    newRun(fd.get('name').trim() || 'My run', fd.get('house'));
    state.ui.tab = 'roster';
    save();
    render();
  });

  if (state.activeId && !state.runs[state.activeId]) state.activeId = Object.keys(state.runs)[0] || null;
  render();
})();
