/* Kuşların Yolculuğu: Ailecek'in ikinci sezonu.
   Veri: icerik-kuslar.js. Bu dosya index.html'deki ortak fonksiyonları (render, guide, say, P, G, family…)
   yalnızca fonksiyonların içinde kullanır; index.html'in ana betiğinden önce yüklenir. */
const S2 = (() => {
  const st = () => (P.s2 ||= { birds: {}, vadis: {}, wins: {}, gorev: {}, finalDone: 0, used: [] });
  const VID = k => (typeof k === "string" && k.startsWith("v-")) ? k.slice(2) : null;
  const vadi = id => VADILER.find(v => v.id === id);
  const vIndex = id => VADILER.findIndex(v => v.id === id);
  const isVadi = k => !!VID(k) && !!vadi(VID(k));
  const unlocked = () => landsDone() === DURAKLAR.length || P.freeAll;
  const doneCount = () => VADILER.filter(v => st().vadis[v.id]).length;
  const vadiOpen = id => P.freeAll || vIndex(id) <= 0 || !!st().vadis[VADILER[vIndex(id) - 1].id];
  const current = () => VADILER.find(v => !st().vadis[v.id]) || null;
  const kus = id => KUSLAR.find(k => k.id === id);
  const birdOf = name => kus(st().birds[name]);
  const hasBirds = () => family.some(p => st().birds[p.name]);
  const deedsOf = name => defter.reduce((a, w) => a + w.cards.filter(c => c.from === name && c.done).length, 0) + (week ? week.cards.filter(c => c.from === name && c.done).length : 0);
  const gorevOf = name => (st().gorev[name] || []).length;
  const winsOf = name => st().wins[name] || 0;
  const beatBahane = name => winsOf(name) >= 3 && gorevOf(name) >= 3;
  const birdAvatar = (p, size = "") => { const b = birdOf(p.name); return `<span class="ak-avatar ${size}" style="--c:var(${memberColor(p.name)})" title="${esc(p.name)}">${b ? b.e : p.av}</span>`; };

  /* ---------- index.html'in kullandığı bağlantılar ---------- */
  const theme = k => { const v = isVadi(k) && vadi(VID(k)); return v ? { name: v.ad, ico: v.e, color: v.color, desc: v.desc, vadi: true } : undefined; };
  const pool = k => isVadi(k) ? vadi(VID(k)).kaynak : k;
  const intro = k => vadi(VID(k)).giris;
  const label = k => isVadi(k) ? `Vadi ${vIndex(VID(k)) + 1} · ${vadi(VID(k)).ad}${st().vadis[VID(k)] ? " · " + "★".repeat(st().vadis[VID(k)]) : ""}` : "";
  const badgeValue = olcut => olcut === "s2final" ? st().finalDone : olcut === "s2bahane" ? family.filter(p => beatBahane(p.name)).length : undefined;

  function reward(k, stars) {
    const id = VID(k), before = st().vadis[id] || 0, wasDone = doneCount();
    st().vadis[id] = Math.max(before, stars); saveP();
    const nowDone = doneCount();
    const next = nowDone > wasDone ? current() : null;
    return { stars, improved: stars > before, unlocked: next ? { ad: next.ad, ico: next.e, s2: true } : null,
      finalOpen: nowDone === VADILER.length && wasDone < VADILER.length, finalName: "Kaf Dağı", finalIco: "🏔️" };
  }

  function slides(k) {
    const v = vadi(VID(k)), h = VADI_HIKAYELERI.find(x => x.vadi === v.id);
    const nasSay = (v.nas.tur === "hadis" ? "Peygamberimiz buyurdu: " : "") + v.nas.text;
    const gorevList = family.map(p => { const b = birdOf(p.name); return b ? `<li><span>${b.e}</span><span><b>${esc(p.name)}</b> · ${esc(b.gorev)}</span></li>` : ""; }).join("");
    return [
      { ico: h.e, title: h.baslik, body: `<div class="story">${h.paragraflar.map(x => `<p>${esc(x)}</p>`).join("")}</div>
          <div class="tip" style="text-align:left"><b>Hüdhüd'ün sözü</b>${esc(h.soz)}</div>
          <p class="small muted bold">Küçükler için: ${esc(h.kucukler)}</p>`,
        say: [...h.paragraflar, h.soz] },
      { ico: v.nas.tur === "hadis" ? "🌙" : "📖", title: v.nas.tur === "hadis" ? "Peygamberimiz buyurdu" : "Kur'an'dan",
        body: `<blockquote>“${esc(v.nas.text)}”<cite>${esc(v.nas.ref)}</cite></blockquote>`, say: nasSay },
      { ico: "💬", title: "Hadi konuşalım", body: `<p class="q-text">${esc(h.soru)}</p>`, say: h.soru },
      { ico: "🪶", title: "Bu haftanın bahane görevleri",
        body: gorevList ? `<ul class="checks" style="text-align:left">${gorevList}</ul>` : `<p class="q-text">Herkes bu hafta kendi bahanesine karşı küçük bir iyilik yapsın.</p>`,
        say: S2_SOZ.gorevler }
    ];
  }

  /* ---------- Ana sayfa kartı ve belge düğmesi ---------- */
  function homeCard() {
    if (!unlocked()) return "";
    if (!hasBirds()) return `
      <section class="week">
        <span class="eyebrow">İkinci sezon açıldı</span>
        <h2 style="font:700 26px/1.15 var(--font-display)">Kuşların Yolculuğu</h2>
        <p class="bold" style="opacity:.9">Hüdhüd ailenizi yedi vadiden geçip Kaf Dağı'na uzanan bir yolculuğa çağırıyor.</p>
        <button class="ak-btn ak-btn--kandil ak-btn--lg ak-btn--pulse" data-act="s2-davet">Daveti Aç</button>
      </section>`;
    const cur = current(), d = doneCount();
    return `
      <section class="week">
        <div class="week-top">
          <div class="stack" style="gap:6px"><span class="eyebrow">Kuşların Yolculuğu · ${d}/${VADILER.length} vadi</span>
          <h2>${cur ? `${cur.e} ${esc(cur.ad)}` : "🏔️ Kaf Dağı sizi bekliyor!"}</h2></div>
        </div>
        <div class="days">${VADILER.map(v => `<i class="${st().vadis[v.id] ? "on" : ""}"></i>`).join("")}</div>
        <div class="members">${family.map(p => birdAvatar(p, "ak-avatar--sm")).join("")}</div>
        <div class="btn-row">
          <button class="ak-btn ak-btn--night" data-act="s2-gorev">Bahane Görevleri</button>
          <button class="ak-btn ak-btn--kandil" data-act="s2-map">Vadi Haritası</button>
        </div>
      </section>`;
  }
  const certButton = () => `<button class="ak-btn ak-btn--night ak-btn--lg" data-act="s2-davet">🪶 Kuşların Yolculuğu'na başla</button>`;

  /* ---------- Davet ve Kuşlar Meclisi ---------- */
  function davet() {
    closeSheet(); G = null;
    render(`
      <section class="ak-deed">
        <span class="ak-deed__eyebrow">Kuşların Yolculuğu</span>
        <span class="mega bounce" style="font-size:80px">🏔️</span>
        <h2 style="font:700 30px/34px var(--font-display)">Kaf Dağı'na davet</h2>
        <div class="ak-on-night" style="width:100%">${guide(S2_SOZ.davet)}</div>
        <p class="ak-deed__quote">Ferîdüddîn-i Attâr'ın Mantıku't-Tayr (Kuşların Dili) eserinden esinlenmiştir.</p>
        <button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="s2-meclis" data-arg="0">Kuşlar Meclisi'ne geç</button>
      </section>`, S2_SOZ.davet);
  }
  function meclis(i) {
    if (i === 0 && !G) st().birds = {};
    if (i >= family.length) { saveP(); return map(); }
    const p = family[i], taken = new Map(Object.entries(st().birds).map(([n, b]) => [b, n]));
    render(`
      ${i === 0 ? guide(S2_SOZ.meclis) : ""}
      <section class="ak-card center">
        <span class="ak-label">Kuşlar Meclisi · ${i + 1}/${family.length}</span>
        ${avatar(p, "ak-avatar--lg")}
        <h2 style="font:700 26px/30px var(--font-display)">Sıra ${esc(ek(p.name, "de"))}! Kuşunu seç.</h2>
        <div class="album" style="width:100%">${KUSLAR.map(k => {
          const owner = taken.get(k.id);
          return owner ? `<div class="ak-kcard is-missing" aria-label="${esc(k.ad)}, ${esc(owner)} seçti"><i>${k.e}</i><b>${esc(owner)}</b></div>`
            : `<button class="ak-kcard" style="--c:var(${MEMBER_COLORS[KUSLAR.indexOf(k) % 6]})" data-act="s2-pick" data-arg="${i}:${k.id}"><i>${k.e}</i><b>${esc(k.ad)}</b></button>`;
        }).join("")}</div>
      </section>`, i === 0 ? S2_SOZ.meclis : { text: `Sıra ${ek(p.name, "de")}! Kuşunu seç.`, ai: [S2_SOZ.meclisSira] });
  }
  function pick(i, id) {
    const p = family[i], k = kus(id);
    st().birds[p.name] = id; saveP(); sfx.win(); confetti(12);
    render(`
      <section class="ak-deed">
        <span class="ak-deed__eyebrow">${esc(p.name)} artık bir ${esc(k.ad.toLocaleLowerCase("tr"))}</span>
        <span class="ak-deed__to">${k.e}</span>
        <span class="ak-deed__name">${esc(k.ad)}</span>
        <p class="ak-deed__quote">${esc(k.karakter)}</p>
        <div class="tip" style="color:var(--ink);text-align:left;width:100%"><b>Bahanesi</b>${esc(k.bahane)}</div>
        <p class="ak-deed__quote">Yolculuk boyunca bu bahaneyi yenmeye çalışacaksın. Bahane Avcısı kartlarında ve haftalık görevlerde karşına çıkacak!</p>
        <button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="s2-meclis" data-arg="${i + 1}">${i + 1 < family.length ? "Sıradaki kuş" : "Vadi Haritası'nı aç"}</button>
      </section>`, [`${k.ad}!`, S2_SOZ.bahanesi, k.bahane]);
  }

  /* ---------- Vadi haritası ---------- */
  function map() {
    closeSheet(); G = null; checkBadges();
    if (!hasBirds()) return davet();
    const n = VADILER.length, stepY = 150, top = 90, H = top + (n + 1) * stepY - 40;
    const xs = i => [50, 26, 72, 34, 70, 28, 66][i % 7];
    const pts = VADILER.map((v, i) => [xs(i), top + i * stepY]).concat([[50, top + n * stepY]]);
    const cur = current(), doneIdx = cur ? vIndex(cur.id) : n;
    const path = arr => arr.map(([x, y], i) => (i ? "L" : "M") + x + " " + y).join(" ");
    const stations = VADILER.map((v, i) => {
      const s = st().vadis[v.id] || 0, open = vadiOpen(v.id), isCur = cur && cur.id === v.id;
      return `<button class="ak-station ${!open ? "is-locked" : ""} ${isCur ? "is-current" : ""} ${onFor(v.color)}" style="left:${pts[i][0]}%;top:${pts[i][1]}px;--c:var(${v.color})" data-act="s2-vadi" data-arg="${v.id}" aria-label="${esc(v.ad)}${open ? "" : " (kilitli)"}">
        ${isCur ? `<span class="bird-pin">${BIRD}</span>` : ""}
        <span class="ak-station__ico">${open ? v.e : "🔒"}</span>
        <span class="ak-station__name">${esc(v.ad)}</span>
        <span class="ak-station__stars">${s ? starStr(s) : open ? "Yeni!" : ""}</span>
      </button>`;
    }).join("");
    const fin = pts[n], finalOpen = doneCount() === n;
    render(`
      ${guide(S2_SOZ.harita)}
      <section class="ak-card" style="padding:12px 8px 20px;background:var(--ak-stars),var(--gece);color:var(--on-gece)">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 10px 0;gap:8px">
          <span class="ak-label" style="color:var(--yildiz)">Kuşların Yolculuğu · ${doneCount()}/${n} vadi</span>
          <span style="font-size:22px;letter-spacing:2px">${family.map(p => (birdOf(p.name) || {}).e || "").join("")}</span>
        </div>
        <div class="map" style="height:${H}px">
          <svg class="path" viewBox="0 0 100 ${H}" preserveAspectRatio="none" aria-hidden="true">
            <path class="road" d="${path(pts)}" vector-effect="non-scaling-stroke" style="stroke:color-mix(in srgb, var(--on-gece) 22%, transparent)"/>
            <path class="road-done" d="${path(pts.slice(0, doneIdx + 1))}" vector-effect="non-scaling-stroke"/>
            <path class="road-dash" d="${path(pts)}" vector-effect="non-scaling-stroke" style="stroke:var(--gece)"/>
          </svg>
          ${stations}
          <button class="ak-station ak-station--final ${finalOpen ? "" : "is-locked"}" style="left:${fin[0]}%;top:${fin[1]}px" data-act="s2-vadi" data-arg="kaf" aria-label="Kaf Dağı">
            ${!cur ? `<span class="bird-pin">${BIRD}</span>` : ""}
            <span class="ak-station__ico">${finalOpen ? "🏔️" : "🔒"}</span>
            <span class="ak-station__name">Kaf Dağı</span>
            <span class="ak-station__stars">${st().finalDone ? "✓" : ""}</span>
          </button>
        </div>
      </section>
      <div style="text-align:center"><button class="link muted" data-act="s2-davet">Kuşları yeniden seç</button></div>`, S2_SOZ.harita);
  }
  function openVadi(id) {
    if (id === "kaf") {
      if (doneCount() < VADILER.length && !P.freeAll) { say(S2_SOZ.kilitli); toast("🔒", "Kilitli", "Önce yedi vadiyi geçin"); return; }
      return final(0);
    }
    if (!vadiOpen(id)) { say(S2_SOZ.kilitli); toast("🔒", "Kilitli vadi", `Önce ${VADILER[vIndex(id) - 1].ad}`); return; }
    startGame("v-" + id);
  }

  /* ---------- Bahane Avcısı ---------- */
  function playBahane(t) {
    const p = t.player, own = birdOf(p.name), used = new Set(st().used);
    let pool = own ? BAHANE_KARTLARI.filter(c => c.k === own.id && !used.has(BAHANE_KARTLARI.indexOf(c))) : [];
    if (!pool.length) pool = BAHANE_KARTLARI.filter(c => !used.has(BAHANE_KARTLARI.indexOf(c)));
    if (!pool.length) { st().used = []; pool = BAHANE_KARTLARI; }
    const c = rnd(pool), k = kus(c.k), adult = p.age === "y";
    st().used.push(BAHANE_KARTLARI.indexOf(c)); saveP();
    G.cur = { c, k, own: own && own.id === c.k, who: p };
    render(card("bahane", `
      <div class="ak-flip" id="flip" style="--c:var(--cini)">
        <div class="ak-flip__inner">
          <button class="ak-flip__face ak-flip__front" id="front" data-act="flip-b"><span class="ak-flip__glyph">🪶</span><span class="ak-flip__hint">Dokun, bahane kartını çevir</span><span class="ak-flip__note">Sadece ${esc(p.name)} baksın!</span></button>
          <div class="ak-flip__face ak-flip__back"><span class="ak-flip__pic" style="font-size:64px">${k.e}</span><span class="ak-label">${esc(k.ad)}${G.cur.own ? " · senin kuşun" : ""}</span><span class="ak-flip__word" style="font-size:24px;line-height:30px">“${esc(adult ? c.y : c.b)}”</span>${adult ? `<small class="muted bold">Çocuk kartı: “${esc(c.b)}”</small>` : ""}</div>
        </div>
      </div>
      <div class="ak-chips"><span class="ak-chip">🎭 Abartarak canlandır</span><span class="ak-chip">🗣️ Konuşmak serbest</span></div>
      <div id="act-stage" class="stack"></div>`));
  }
  function flipB() {
    const f = document.getElementById("flip"); if (!f || f.classList.contains("is-open")) return;
    f.classList.add("is-open"); sfx.flip();
    document.getElementById("act-stage").innerHTML = `<button class="ak-btn ak-btn--lg" data-act="s2-bgo">Gizle ve Başla · 30 sn</button>`;
  }
  function bGo() {
    document.getElementById("front").outerHTML = `<div class="ak-flip__face ak-flip__front" id="front"><span class="ak-flip__glyph">🎭</span><span class="ak-flip__hint">Bahaneni canlandır!</span></div>`;
    document.getElementById("flip").classList.remove("is-open"); sfx.flip();
    document.getElementById("act-stage").innerHTML = `
      <div class="ak-timer" id="timer" style="--c:var(--cini)"><b>30</b></div>
      <button class="ak-btn ak-btn--lg" data-act="s2-bdone">Canlandırma bitti</button>`;
    say(S2_SOZ.bahaneCanlandir);
    later(() => runTimer(30, () => bDone()), 2500);
  }
  function bDone() {
    if (G.cur.revealed) return; G.cur.revealed = true; clearTimers();
    const { k } = G.cur, judge = youngestKid();
    document.getElementById("flip").classList.add("is-open"); sfx.flip();
    document.getElementById("act-stage").innerHTML = `
      <span class="ak-stamp" style="--c:var(--cini)">${k.e} ${esc(k.ad)}</span>
      <p class="center bold">Herkes Hüdhüd gibi ikna etsin!</p>
      <h3 class="center" style="font:600 19px/1.2 var(--font-display)">${judge ? `Hakem ${judge.av} ${esc(judge.name)}: En ikna edici cevap kimin?` : "En ikna edici cevap kimin?"}</h3>
      <div class="ak-chips">${G.players.map((p, i) => `<button class="ak-chip ak-chip--select" data-act="s2-bbest" data-arg="${i}">${birdOf(p.name) ? birdOf(p.name).e : p.av} ${esc(p.name)}</button>`).join("")}</div>`;
    later(() => say(S2_SOZ.bahaneTahmin), 400);
  }
  function bBest(i) {
    const { c, k, own, who } = G.cur, best = G.players[+i];
    grow(1); confetti(16);
    if (own) { st().wins[who.name] = (st().wins[who.name] || 0) + 1; saveP(); checkBadges(); }
    document.getElementById("act-stage").innerHTML = `
      <span class="ak-stamp">⭐ ${esc(best.name)}</span>
      ${guide(c.c)}
      <div class="ak-chips"><span class="ak-chip ak-chip--tint">Hayatta: ${esc(c.h)}</span>${own ? `<span class="ak-chip ak-chip--tint" style="--c:var(--kandil)">🪶 ${esc(who.name)} kendi bahanesini yendi · ${winsOf(who.name)}/3</span>` : ""}</div>
      ${doneBtn()}`;
    later(() => say([`${k.ad}!`, c.c, own && S2_SOZ.bahaneKendi]), 400);
  }

  /* ---------- Bahane görevleri ---------- */
  function gorevScreen() {
    closeSheet(); G = null;
    const last = [...VADILER].reverse().find(v => st().vadis[v.id]);
    const rows = family.map((p, i) => {
      const b = birdOf(p.name); if (!b) return "";
      const did = last && (st().gorev[p.name] || []).includes(last.id);
      return `<div class="member">${birdAvatar(p, "", did ? `<span class="ak-avatar__badge">✓</span>` : "")}
        <div><b>${esc(p.name)} · ${esc(b.ad)}</b><small>${esc(b.gorev)}</small></div>
        <div class="acts">${last ? (did ? `<span class="mini" style="opacity:.7">Yapıldı</span>` : `<button class="mini gold" data-act="s2-gorev-done" data-arg="${i}">Yaptım</button>`) : ""}</div></div>`;
    }).join("");
    render(`
      <section class="week ak-on-night">
        <span class="eyebrow">Bahane Görevleri${last ? " · " + esc(last.ad) + " sonrası" : ""}</span>
        ${guide(last ? S2_SOZ.gorevler : S2_SOZ.gorevYok)}
        <div class="member-list">${rows}</div>
        <button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="s2-map">Vadi Haritası</button>
      </section>`, last ? S2_SOZ.gorevler : S2_SOZ.gorevYok);
  }
  function gorevDone(i) {
    const p = family[+i], last = [...VADILER].reverse().find(v => st().vadis[v.id]); if (!last) return;
    (st().gorev[p.name] ||= []); if (!st().gorev[p.name].includes(last.id)) st().gorev[p.name].push(last.id);
    saveP(); grow(1); confetti(14); checkBadges(); gorevScreen(); later(() => say(S2_SOZ.gorevTamam), 400);
  }

  /* ---------- Final: Kaf Dağı ve göl aynası (Simurg gösterilmez) ---------- */
  function final(step, m = 0) {
    closeSheet(); G = null;
    const birds = family.filter(p => birdOf(p.name));
    const totalStars = VADILER.reduce((a, v) => a + (st().vadis[v.id] || 0), 0);
    const totalDeeds = birds.reduce((a, p) => a + deedsOf(p.name), 0);
    const totalGorev = birds.reduce((a, p) => a + gorevOf(p.name), 0);
    const next = (lbl, s, mm = 0) => `<button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="s2-final" data-arg="${s}:${mm}">${lbl}</button>`;
    const row = `<div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;font-size:40px">${birds.map(p => `<span class="ak-bird-mini" title="${esc(p.name)}" style="animation:hover 2.4s ease-in-out ${Math.random() * -2}s infinite;display:inline-block">${birdOf(p.name).e}</span>`).join("")}</div>`;
    const frame = (eyebrow, inner, sayObj) => render(`<section class="ak-deed"><span class="ak-deed__eyebrow">${eyebrow}</span>${inner}</section>`, sayObj);
    if (step === 0) frame("Kaf Dağı", `<span class="mega bounce" style="font-size:84px">🏔️</span>${row}<div class="ak-on-night" style="width:100%">${guide(S2_SOZ.finaleGecis, { noSpeak: true })}</div>${next("Zirveye kon", 1)}`, S2_SOZ.finaleGecis);
    else if (step === 1) frame("Zirve", `${row}<h2 style="font:700 28px/32px var(--font-display)">Başardınız!</h2><p class="ak-deed__text" style="font-size:19px">${esc(S2_SOZ.f1)}</p>${next("Devam", 2)}`, S2_SOZ.f1);
    else if (step === 2) frame("Ne arıyorduk?", `<div class="ak-chips"><span class="ak-chip" style="background:var(--surface-200)">⭐ ${totalStars} vadi yıldızı</span><span class="ak-chip" style="background:var(--surface-200)">💌 ${totalDeeds} gizli iyilik</span><span class="ak-chip" style="background:var(--surface-200)">🪶 ${totalGorev} bahane görevi</span></div><p class="ak-deed__text" style="font-size:20px">${esc(S2_SOZ.f2)}</p>${next("Devam", 3)}`, S2_SOZ.f2);
    else if (step === 3) frame("Berrak göl", `<div class="lake">🌙</div><p class="ak-deed__text" style="font-size:20px">${esc(S2_SOZ.f3)}</p><p class="ak-deed__quote">${esc(S2_SOZ.f4)}</p>${next("Göle bak", 4, 0)}`, [S2_SOZ.f3, S2_SOZ.f4]);
    else if (step === 4) {
      const p = birds[m]; if (!p) return final(5);
      const b = birdOf(p.name), dg = KUS_DEGISIM[b.id], d = deedsOf(p.name), g = gorevOf(p.name), beat = beatBahane(p.name);
      const facts = [d ? `Bu yolculukta ${d} gizli iyilik yaptın.` : "", g ? `${g} bahane görevini tamamladın.` : ""].filter(Boolean).join(" ");
      const end = beat ? S2_SOZ.bahaneniYendin : S2_SOZ.yolaCikti;
      frame(`${esc(p.name)} göle bakıyor · ${m + 1}/${birds.length}`, `
        <div class="lake"><span style="display:inline-block;transform:scaleY(-1);opacity:.85">${b.e}</span></div>
        <span class="ak-deed__name">${esc(p.name)} · ${esc(b.ad)}</span>
        <p class="ak-deed__quote">${esc(dg.once)}</p>
        <p class="ak-deed__text">${esc(dg.simdi)}</p>
        ${facts ? `<p class="ak-deed__quote" style="opacity:1">${esc(facts)}</p>` : ""}
        <span class="ak-stamp" style="--c:var(--yildiz)">${beat ? "🪶 Bahanesini Yenen Kuş" : "🌱 Yola çıktın"}</span>
        ${next(m + 1 < birds.length ? "Sıradaki kuş" : "Hep birlikte bak", m + 1 < birds.length ? 4 : 5, m + 1)}`,
        { text: `${dg.once} ${dg.simdi} ${facts} ${end}`, ai: [dg.once, dg.simdi, end] });
      if (beat) confetti(20);
    }
    else if (step === 5) frame("Hep birlikte", `<div class="lake" style="font-size:34px;letter-spacing:4px">${birds.map(p => `<span style="display:inline-block;transform:scaleY(-1)">${birdOf(p.name).e}</span>`).join("")}</div><p class="ak-deed__text">${esc(S2_SOZ.f5)}</p>${next("Devam", 6)}`, S2_SOZ.f5);
    else if (step === 6) frame("Teşekkür", `${row}<p class="ak-deed__text" style="font-size:20px">${esc(S2_SOZ.f6)}</p><div class="feel">${TESEKKUR.map(t => `<button data-act="s2-final" data-arg="7:0"><span>${t.e}</span>${t.w}</button>`).join("")}</div>`, S2_SOZ.f6);
    else if (step === 7) {
      st().finalDone = 1; saveP(); checkBadges();
      render(`
        <section class="cert">
          <span class="ak-deed__eyebrow">Kaf Dağı</span>
          ${row}
          <h2>Kuşların Yolculuğu</h2>
          <p class="names">${birds.map(p => `${birdOf(p.name).e} ${esc(p.name)} · ${esc(birdOf(p.name).ad)}${beatBahane(p.name) ? " 🪶" : ""}`).join("<br>")}</p>
          <p class="ak-deed__text" style="font-size:18px">Yedi vadiyi birlikte geçtiniz.</p>
          <div class="ak-chips"><span class="ak-chip" style="background:var(--surface-200)">⭐ ${totalStars}/21 yıldız</span><span class="ak-chip" style="background:var(--surface-200)">💌 ${totalDeeds} gizli iyilik</span></div>
          <p class="ak-deed__quote">${new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })} · Mantıku't-Tayr'dan esinlenmiştir</p>
          ${next("Devam", 8)}
        </section>`, S2_SOZ.f7);
      confetti(40); sfx.win();
    }
    else frame("Yolculuk tamam", `<span class="mega bounce" style="font-size:72px">🤲</span><div class="ak-on-night" style="width:100%">${guide(S2_SOZ.f8, { noSpeak: true })}</div><button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="home">Ana sayfa</button>`, S2_SOZ.f8);
  }

  /* ---------- Yapay zekâ sesi için sabit cümleler ---------- */
  function lines() {
    const L = [];
    const add = (...ts) => ts.flat(Infinity).forEach(t => t && L.push(t));
    add(Object.values(S2_SOZ), KUSLAR.map(k => [`${k.ad}!`, k.bahane]), Object.values(KUS_DEGISIM).map(d => [d.once, d.simdi]));
    VADILER.forEach(v => add(v.giris, (v.nas.tur === "hadis" ? "Peygamberimiz buyurdu: " : "") + v.nas.text));
    VADI_HIKAYELERI.forEach(h => add(h.paragraflar, h.soz, h.soru));
    BAHANE_KARTLARI.forEach(c => add(c.c));
    return L;
  }

  const actions = {
    "s2-davet": davet, "s2-meclis": a => meclis(+a), "s2-pick": a => { const [i, id] = a.split(":"); pick(+i, id); },
    "s2-map": map, "s2-vadi": openVadi, "s2-gorev": gorevScreen, "s2-gorev-done": gorevDone,
    "flip-b": flipB, "s2-bgo": bGo, "s2-bdone": bDone, "s2-bbest": bBest,
    "s2-final": a => { const [s, m] = a.split(":"); final(+s, +m); }
  };

  return { isVadi, theme, pool, intro, label, reward, slides, homeCard, certButton, playBahane, badgeValue, lines, actions, unlocked, st };
})();
