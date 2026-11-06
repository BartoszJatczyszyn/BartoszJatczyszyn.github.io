/* restart a CSS animation on the next frame: no forced layout, unlike the classic "void el.offsetWidth" */
function replay(el, cls){
  el.classList.remove(cls);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add(cls)));
}
/* Easter eggs: shared by index.html and 404.html.
   Jeśli to czytasz, to i tak się liczy. Prawie. */

const EGGS = [
  { id:"konami",  icon:"🕹️", pl:["Kod Konami","Gracze znają tę sekwencję strzałek na pamięć."], en:["Konami Code","Every gamer knows this arrow sequence by heart."] },
  { id:"console", icon:"💻", pl:["Haker","Programiści zaglądają tam, gdzie inni nie (F12)."], en:["Hacker","Developers look where others don't (F12)."] },
  { id:"tri",     icon:"🏊", pl:["Iron Dragon","Logo lubi, jak klika się w nie trzy razy z rzędu."], en:["Iron Dragon","The logo likes being clicked three times in a row."] },
  { id:"hakuna",  icon:"🦁", pl:["Hakuna Matata","Wpisz na klawiaturze pierwsze słowo z Króla Lwa."], en:["Hakuna Matata","Type the first word of a Lion King motto."] },
  { id:"answer",  icon:"🌌", pl:["Nie panikuj","Odpowiedź na wielkie pytanie o życie… wpisz ją."], en:["Don't Panic","The answer to life, the universe… type it."] },
  { id:"dragon",  icon:"🐉", pl:["Smok Wawelski","W stopce mieszka ktoś z Krakowa."], en:["Wawel Dragon","Someone from Kraków lives in the footer."] },
  { id:"dice",    icon:"🎲", pl:["Podwójna szóstka","Bańka z planszówkami lubi rzucać kośćmi."], en:["Double Six","The board games bubble likes rolling dice."] },
  { id:"rap",     icon:"🎧", pl:["Polski rap","Wpisz ksywę jednego z ulubionych raperów."], en:["Polish Rap","Type the nickname of a favourite rapper."] },
  { id:"matrix",  icon:"💊", pl:["Czerwona pigułka","Wpisz tytuł filmu z 1999 o symulacji."], en:["Red Pill","Type the title of a 1999 film about a simulation."] },
  { id:"force",   icon:"⚔️", pl:["Ciemna strona mocy","Przełącz motyw kilka razy bardzo szybko."], en:["Dark Side","Toggle the theme several times, fast."] },
  { id:"finish",  icon:"🏁", pl:["Meta!","Dobiegnij do samego końca strony."], en:["Finish Line","Run all the way to the bottom."] },
  { id:"agh",     icon:"⛏️", pl:["My chłopcy z Reymonta","Studencka tradycja AGH. Szukaj kilofa."], en:["Lads from Reymonta","An AGH student tradition. Find the pickaxe."] },
  { id:"tab",     icon:"👋", pl:["Powrót na trasę","Przełącz się na inną kartę i wróć."], en:["Back on Track","Switch to another tab and come back."] },
  { id:"star",    icon:"⭐", pl:["Spadająca gwiazda","W nagłówku coś mruga."], en:["Shooting Star","Something twinkles up top."] },
  { id:"think",   icon:"💡", pl:["Think, Think, Think","Zastukaj w głowę jak Kubuś. Trzy razy."], en:["Think, Think, Think","Tap the head like Pooh does. Three times."] },
  { id:"popcorn", icon:"🍿", pl:["Popcorn XXL","Bańka z kinem: klikaj, aż popcorn wybuchnie."], en:["XXL Popcorn","The cinema bubble: click till the popcorn pops."] },
  { id:"pooh",    icon:"🍯", pl:["Hunny","Wpisz imię pewnego misia o bardzo małym rozumku."], en:["Hunny","Type the name of a bear of very little brain."] },
  { id:"pop",     icon:"🫧", pl:["Pęknięta bańka","Kliknij dwa razy w bańkę myśli."], en:["Bubble Pop","Double-click a thought bubble."] },
  { id:"barrel",  icon:"🌀", pl:["Beczka","Wpisz „barrel” jak w starym triku Google."], en:["Barrel Roll","Type “barrel”, like the old Google trick."] },
  { id:"hundred", icon:"💯", pl:["Sto na sto","Wpisz liczbę, która łączy dystans i miejsce na Łemkowynie."], en:["A Hundred for a Hundred","Type the number that links distance and place at Łemkowyna."] },
  { id:"morocco", icon:"🐪", pl:["Następny przystanek","Kliknij kraj, do którego dopiero jadę."], en:["Next Stop","Click the country I haven't visited yet."] },
  { id:"xylo",    icon:"🎹", pl:["Ksylofon commitów","Wykres commitów też potrafi zagrać. Stuknij kilka słupków."], en:["Commit Xylophone","The commit chart can play too. Tap a few bars."] },
  { id:"rocket",  icon:"🚀", pl:["Odliczanie","Numery sekcji to nie ozdoba. Zapal wszystkie."], en:["Countdown","Section numbers aren't decoration. Light them all."] },
  { id:"chalk",   icon:"🖍️", pl:["Kreda","To jest tablica. Spróbuj na niej porysować."], en:["Chalk","This is a chalkboard. Try drawing on it."] },
  { id:"home",    icon:"🏠", pl:["Dom","Na mapie stuknij trzy razy w kraj, z którego wszystko startuje."], en:["Home","On the map, tap the country where every trip starts three times."] },
  { id:"lumos",   icon:"🪄", pl:["Lumos","Zaklęcie, które zapala światło. Wpisz je."], en:["Lumos","The spell that turns on the light. Type it."] },
  { id:"overtake",icon:"🏃", pl:["Wyprzedzanie","Na triathlonie jestem jedną z kropek. Kliknij mnie."], en:["Overtaking","At the triathlon I'm one of the dots. Click me."] },
  { id:"heart",   icon:"❤️", pl:["Tętno","Przytrzymaj medal dłużej. Poczuj, jak bije serce na trasie."], en:["Heartbeat","Press and hold a medal. Feel the heart beat on course."] },
  { id:"owl",     icon:"🦉", pl:["Nocny marek","Zajrzyj tu w środku nocy albo o świcie."], en:["Night Owl","Drop by in the middle of the night or at dawn."] },
  { id:"coffee",  icon:"☕", pl:["Kofeina","Gdy w chmurce pojawi się kawa, weź łyka."], en:["Caffeine","When coffee shows up in the cloud, take a sip."] },
  { id:"newton",  icon:"🍎", pl:["Grawitacja","Wpisz nazwisko człowieka, któremu jabłko spadło na głowę."], en:["Gravity","Type the name of the man an apple fell on."] },
  { id:"lost",    icon:"🧭", pl:["Zgubiony na szlaku","Wejdź na adres, który nie istnieje."], en:["Lost on the Trail","Visit a page that doesn't exist."] }
];

const EggUI = {
  pl:{ found:"Znaleziono sekret!", all:"Wszystkie sekrety!", allTxt:"Jesteś prawdziwym ultramaratończykiem easter eggów 🏆", of:"z", summary:(n,t)=>`Znaleziono ${n} z ${t}. Zablokowane mają podpowiedzi.` },
  en:{ found:"Secret found!", all:"All secrets found!", allTxt:"You're a true easter-egg ultrarunner 🏆", of:"of", summary:(n,t)=>`${n} of ${t} found. Locked ones have hints.` }
};

const store = {
  get(k, d){ try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
};
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const getLang = () => document.documentElement.lang === "en" ? "en" : "pl";
let found = new Set(store.get("bj-eggs", []));

/* ═══════════ sound: tiny synth, no audio files. Soft, warm, quiet. ═══════════ */
const SFX = (() => {
  let ctx = null, master = null, on = store.get("bj-sound", true);
  const init = () => {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = .2;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -18;
    master.connect(comp); comp.connect(ctx.destination);
    return ctx;
  };
  const wake = () => { if (!on) return; init(); if (ctx && ctx.state === "suspended") ctx.resume(); };
  ["pointerdown", "keydown", "touchend"].forEach(t => addEventListener(t, wake, { passive: true, capture: true }));
  const ready = () => on && ctx && ctx.state === "running";
  function tone(freq, { type = "sine", dur = .18, vol = .5, attack = .006, when = 0, slide = 0, filter = 0, pan = 0 } = {}){
    if (!ready()) return;
    const t = ctx.currentTime + when, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq * slide), t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    let node = o;
    if (filter){ const f = ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = filter; o.connect(f); node = f; }
    if (pan && ctx.createStereoPanner){ const p = ctx.createStereoPanner(); p.pan.value = pan; node.connect(p); node = p; }
    node.connect(g); g.connect(master); o.start(t); o.stop(t + dur + .05);
  }
  let noiseBuf = null;
  function noise({ dur = .3, vol = .3, from = 800, to = 3000, when = 0, type = "bandpass", q = 1 } = {}){
    if (!ready()) return;
    if (!noiseBuf){ noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2.5, ctx.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
    const t = ctx.currentTime + when, s = ctx.createBufferSource(); s.buffer = noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q; f.frequency.setValueAtTime(from, t); f.frequency.exponentialRampToValueAtTime(to, t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + dur * .25); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(master); s.start(t, Math.random()); s.stop(t + dur);
  }
  /* C major pentatonic: everything played together still sounds nice */
  const P = [261.63, 293.66, 329.63, 392, 440, 523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66, 1318.51];
  const lib = {
    tick: () => tone(2100, { dur: .035, vol: .05 }),
    click: () => tone(700, { type: "triangle", dur: .08, vol: .2, slide: .62 }),
    toggle: up => tone(up ? 660 : 495, { type: "triangle", dur: .14, vol: .22, slide: up ? 1.5 : .67 }),
    pop: (size = 1) => { tone(1100 / size, { dur: .13, vol: .35, slide: .3 }); noise({ dur: .05, vol: .1, from: 4000, to: 1500 }); },
    bump: (v = .2) => tone(180 + Math.random() * 60, { dur: .07, vol: Math.min(.25, v), slide: .7, filter: 900 }),
    knock: () => { tone(170, { dur: .12, vol: .55, slide: .5 }); noise({ dur: .045, vol: .18, from: 1400, to: 400, type: "lowpass" }); },
    chime: () => [5, 7, 9, 12].forEach((n, i) => tone(P[n], { dur: .9, vol: .2, when: i * .085, filter: 5000 })),
    sparkle: () => [12, 10, 9, 7].forEach((n, i) => tone(P[n] * 1.5, { dur: .3, vol: .08, when: i * .045 })),
    blip: () => tone(1320, { dur: .08, vol: .1, slide: 1.3 }),
    whoosh: () => noise({ dur: .7, vol: .28, from: 260, to: 2600, q: .7 }),
    swoosh: () => noise({ dur: .4, vol: .2, from: 2400, to: 420, q: .6 }),
    land: () => { tone(330, { dur: .25, vol: .18, slide: .66 }); tone(523, { dur: .3, vol: .1, when: .06 }); },
    note: (i, pan = 0) => { const f = P[Math.max(0, Math.min(P.length - 1, i))]; tone(f, { type: "triangle", dur: .7, vol: .28, filter: 2600, pan }); tone(f * 2, { dur: .35, vol: .06, pan }); },
    beat: () => { tone(62, { dur: .16, vol: .9, slide: .55 }); tone(54, { dur: .16, vol: .55, when: .19, slide: .55 }); },
    rocket: () => { noise({ dur: 2.6, vol: .35, from: 140, to: 1600, q: .4 }); tone(80, { type: "sawtooth", dur: 2.4, vol: .06, slide: 3, filter: 400 }); },
    chalk: () => noise({ dur: .07, vol: .05, from: 3200, to: 4200, q: 3 }),
    rattle: () => { for (let i = 0; i < 6; i++) noise({ dur: .04, vol: .12, from: 1800, to: 900, when: i * .05, q: 2 }); },
    sip: () => { noise({ dur: .35, vol: .14, from: 600, to: 1500, q: 3 }); tone(220, { dur: .2, vol: .1, when: .35, slide: 1.4 }); },
    magic: () => [0, 2, 4, 5, 7, 9, 12].forEach((n, i) => tone(P[n] * 2, { dur: .5, vol: .09, when: i * .05 })),
    apple: () => { tone(900, { dur: .5, vol: .12, slide: .25 }); tone(140, { dur: .12, vol: .5, when: .5, slide: .6 }); },
    owl: () => { tone(392, { dur: .35, vol: .14, slide: .9 }); tone(349, { dur: .5, vol: .14, when: .42, slide: .85 }); },
    fanfare: () => [[0, 0], [2, .12], [4, .24], [7, .36], [9, .48], [12, .6]].forEach(([n, w]) => tone(P[n] * 2, { type: "triangle", dur: .5, vol: .12, when: w }))
  };
  return {
    play(n, ...a){ try { lib[n] && lib[n](...a); } catch(e){} },
    get on(){ return on; },
    set(v){ on = v; store.set("bj-sound", v); if (v){ wake(); setTimeout(() => lib.toggle(true), 30); } }
  };
})();

/* haptics: vibrate where supported; on iOS 18+ a hidden <input switch> gives the system "tick" */
const haptic = (() => {
  let lbl = null, last = 0;
  return (pattern = 8) => {
    if (!SFX.on) return;
    const now = performance.now(); if (now - last < 40) return; last = now;
    if (navigator.vibrate){ try { navigator.vibrate(pattern); } catch(e){} return; }
    if (!matchMedia("(pointer:coarse)").matches) return;
    if (!lbl){
      const i = document.createElement("input"); i.type = "checkbox"; i.setAttribute("switch", ""); i.id = "bj-haptic"; i.tabIndex = -1; i.setAttribute("aria-hidden", "true");
      i.style.cssText = "position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";
      lbl = document.createElement("label"); lbl.htmlFor = "bj-haptic"; lbl.style.display = "none";
      document.body.append(i, lbl);
    }
    lbl.click();
  };
})();


function toast(icon, title, sub, ms = 4200){
  const box = document.getElementById("toasts"); if (!box) return;
  const el = document.createElement("div");
  el.className = "toast"; el.style.setProperty("--t", ms + "ms");
  el.innerHTML = `<div class="ti">${icon}</div><div><b></b><small></small></div>`;
  el.querySelector("b").textContent = title;
  el.querySelector("small").textContent = sub || "";
  box.appendChild(el);
  SFX.play("blip");
  setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 400); }, ms);
}

/* emoji particle burst from (x,y): one shared animation loop for every particle, compositor-only transforms */
const PARTS = []; let partRaf = 0;
const COARSE = matchMedia("(pointer:coarse)").matches;
function partLoop(t){
  for (let i = PARTS.length - 1; i >= 0; i--){
    const p = PARTS[i], k = (t - p.t0) / p.life;
    if (k >= 1){ p.el.remove(); PARTS.splice(i, 1); continue; }
    if (k < 0) continue;
    p.vy += p.g; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
    p.el.style.transform = `translate3d(${p.x}px,${p.y}px,0) rotate(${p.r}deg) scale(${p.s})`;
    p.el.style.opacity = 1 - k * k;
  }
  partRaf = PARTS.length ? requestAnimationFrame(partLoop) : 0;
}
function burst(x, y, emojis, { count = 24, spread = 360, angle = -90, speed = [6, 14], gravity = .35, life = 1400, size = [16, 30] } = {}){
  if (reduced) count = Math.min(count, 6);
  else if (COARSE) count = Math.max(1, Math.round(count * .6));
  count = Math.min(count, 70 - PARTS.length);
  if (count <= 0) return;
  const frag = document.createDocumentFragment(), now = performance.now();
  for (let i = 0; i < count; i++){
    const el = document.createElement("span");
    el.className = "particle";
    el.textContent = emojis[i % emojis.length];
    /* one font size for every particle (each glyph rasterises once); the size spread comes from scale() on the compositor */
    const s = (size[0] + Math.random() * (size[1] - size[0])) / 30;
    el.style.transform = `translate3d(${x}px,${y}px,0) scale(${s})`;
    frag.appendChild(el);
    const a = (angle + (Math.random() - .5) * spread) * Math.PI / 180, v = speed[0] + Math.random() * (speed[1] - speed[0]);
    PARTS.push({ el, x, y, s, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: gravity, r: 0, vr: (Math.random() - .5) * 20, t0: now, life });
  }
  document.body.appendChild(frag);
  if (!partRaf) partRaf = requestAnimationFrame(partLoop);
}
const confetti = () => burst(innerWidth / 2, innerHeight * .9, ["🎉","✨","💛","⭐","🟡","💡"], { count: 40, spread: 70, speed: [14, 24], gravity: .45, life: 2200, size: [12, 24] });

function banner(html, ms = 2600){
  SFX.play("sparkle");
  const b = document.createElement("div");
  b.className = "banner"; b.innerHTML = `<div>${html}</div>`;
  document.body.appendChild(b);
  setTimeout(() => b.remove(), ms);
}

function unlock(id){
  const egg = EGGS.find(e => e.id === id);
  if (!egg || found.has(id)) return false;
  found.add(id); store.set("bj-eggs", [...found]);
  const L = getLang(), u = EggUI[L];
  toast(egg.icon, `${u.found} ${egg[L][0]}`, `${found.size} ${u.of} ${EGGS.length}`);
  setTimeout(() => SFX.play("chime"), 60); haptic([12, 50, 12, 50, 24]);
  updateEggCount(true);
  if (found.size === EGGS.length){
    setTimeout(() => { confetti(); setTimeout(confetti, 400); SFX.play("fanfare"); toast("🏆", u.all, u.allTxt, 7000); }, 900);
  }
  return true;
}

function updateEggCount(bump){
  const c = document.getElementById("eggCount"); if (!c) return;
  c.textContent = found.size;
  if (bump){ const b = document.getElementById("trophyBtn"); replay(b, "bump"); }
}

function renderEggPanel(){
  const L = getLang(), u = EggUI[L];
  document.getElementById("eggBar").style.width = (100 * found.size / EGGS.length) + "%";
  document.getElementById("eggSummary").textContent = u.summary(found.size, EGGS.length);
  document.getElementById("eggList").innerHTML = EGGS.map(e => {
    const on = found.has(e.id);
    return `<li class="${on ? "found" : "locked"}"><span class="ei">${on ? e.icon : "🥚"}</span><span><b>${on ? e[L][0] : "???"}</b><small>${e[L][1]}</small></span></li>`;
  }).join("");
}

/* graceful close animation for <dialog> */
function closeDialog(d){
  if (!d.open) return;
  d.classList.add("closing");
  setTimeout(() => { d.classList.remove("closing"); d.close(); }, 230);
}
