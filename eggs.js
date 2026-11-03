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
  { id:"agh",     icon:"⛏️", pl:["Szczęść Boże","Górnicza tradycja AGH. Szukaj kilofa."], en:["Glück auf","AGH's mining tradition. Find the pickaxe."] },
  { id:"tab",     icon:"👋", pl:["Powrót na trasę","Przełącz się na inną kartę i wróć."], en:["Back on Track","Switch to another tab and come back."] },
  { id:"star",    icon:"⭐", pl:["Spadająca gwiazda","W nagłówku coś mruga."], en:["Shooting Star","Something twinkles up top."] },
  { id:"think",   icon:"💡", pl:["Think, Think, Think","Zastukaj w głowę jak Kubuś. Trzy razy."], en:["Think, Think, Think","Tap the head like Pooh does. Three times."] },
  { id:"popcorn", icon:"🍿", pl:["Popcorn XXL","Bańka z kinem: klikaj, aż popcorn wybuchnie."], en:["XXL Popcorn","The cinema bubble: click till the popcorn pops."] },
  { id:"pooh",    icon:"🍯", pl:["Hunny","Wpisz imię pewnego misia o bardzo małym rozumku."], en:["Hunny","Type the name of a bear of very little brain."] },
  { id:"pop",     icon:"🫧", pl:["Pęknięta bańka","Kliknij dwa razy w bańkę myśli."], en:["Bubble Pop","Double-click a thought bubble."] },
  { id:"barrel",  icon:"🌀", pl:["Beczka","Wpisz „barrel” jak w starym triku Google."], en:["Barrel Roll","Type “barrel”, like the old Google trick."] },
  { id:"hundred", icon:"💯", pl:["Sto na sto","Wpisz liczbę, która łączy dystans i miejsce na Łemkowynie."], en:["A Hundred for a Hundred","Type the number that links distance and place at Łemkowyna."] },
  { id:"morocco", icon:"🐪", pl:["Następny przystanek","Kliknij kraj, do którego dopiero jadę."], en:["Next Stop","Click the country I haven't visited yet."] },
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

function toast(icon, title, sub, ms = 4200){
  const box = document.getElementById("toasts"); if (!box) return;
  const el = document.createElement("div");
  el.className = "toast"; el.style.setProperty("--t", ms + "ms");
  el.innerHTML = `<div class="ti">${icon}</div><div><b></b><small></small></div>`;
  el.querySelector("b").textContent = title;
  el.querySelector("small").textContent = sub || "";
  box.appendChild(el);
  setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 400); }, ms);
}

/* emoji particle burst from (x,y) */
function burst(x, y, emojis, { count = 24, spread = 360, angle = -90, speed = [6, 14], gravity = .35, life = 1400, size = [16, 30] } = {}){
  if (reduced) count = Math.min(count, 6);
  for (let i = 0; i < count; i++){
    const p = document.createElement("span");
    p.className = "particle";
    p.textContent = emojis[i % emojis.length];
    p.style.fontSize = (size[0] + Math.random() * (size[1] - size[0])) + "px";
    document.body.appendChild(p);
    const a = (angle + (Math.random() - .5) * spread) * Math.PI / 180;
    const v = speed[0] + Math.random() * (speed[1] - speed[0]);
    let vx = Math.cos(a) * v, vy = Math.sin(a) * v, px = x, py = y, r = 0, vr = (Math.random() - .5) * 20;
    const t0 = performance.now();
    (function step(t){
      const k = (t - t0) / life;
      if (k >= 1){ p.remove(); return; }
      vy += gravity; vx *= .99; px += vx; py += vy; r += vr;
      p.style.transform = `translate(${px}px,${py}px) rotate(${r}deg)`;
      p.style.opacity = 1 - k * k;
      requestAnimationFrame(step);
    })(t0);
  }
}
const confetti = () => burst(innerWidth / 2, innerHeight * .9, ["🎉","✨","💛","⭐","🟡","💡"], { count: 40, spread: 70, speed: [14, 24], gravity: .45, life: 2200, size: [12, 24] });

function banner(html, ms = 2600){
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
  updateEggCount(true);
  if (found.size === EGGS.length){
    setTimeout(() => { confetti(); setTimeout(confetti, 400); toast("🏆", u.all, u.allTxt, 7000); }, 900);
  }
  return true;
}

function updateEggCount(bump){
  const c = document.getElementById("eggCount"); if (!c) return;
  c.textContent = found.size;
  if (bump){ const b = document.getElementById("trophyBtn"); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }
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
