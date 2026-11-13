/* ═══════════════════════════ i18n ═══════════════════════════ */
const T = {
  pl: {
    navProjects:"Projekty", navNumbers:"Liczby", navMind:"Głowa", navRun:"Bieg", navContact:"Kontakt",
    hello:"Cześć, jestem", iam:"Jestem",
    roles:["programistą","triathlonistą","maratończykiem","ultrasem","graczem","kinomaniakiem","fanem Disneya","wiecznym uczniem"],
    lead:"Ciągle o czymś myślę. Czasem wychodzi z tego aplikacja, a czasem 100 km w górach.",
    ctaProjects:"Zobacz projekty", scrollHint:"zajrzyj do głowy",
    thoughts:["💡 nowa apka?","🏃 jeszcze 5 km…","🍿 jeszcze jeden odcinek","🎲 jeszcze jedna partia","🧠 a gdyby tak… AI?","🌍 dokąd teraz?","🇲🇦 Maroko?","🎧 nowy album?","📚 jeszcze jeden rozdział","☕ najpierw kawa","🍯 …trochę miodu?"],
    knock:"puk!", gotIt:"💡 Mam!",
    marquee:["pomysły","kod","triathlon","kino","gry","planszówki","książki","Disney","polski rap","maraton","ultra","AGH","nauka","Kraków"],
    sProjects:"projektów", sCommits:"commitów", sMarathon:"km maratonu", sUltra:"km ultra", sDegrees:"dyplomy AGH",
    projectsTitle:"Pomysły, które stały się kodem", projectsLead:"Każdy zaczął się od myśli w chmurce. Kliknij kartę, żeby zajrzeć do środka.",
    all:"Wszystkie", web:"Web / PWA", mobile:"Mobile", data:"Dane i AI", game:"Gry",
    priv:"Prywatne", privLong:"Repozytorium prywatne", code:"Zobacz kod ↗︎", details:"zajrzyj",
    numbersTitle:"Kod w liczbach", numbersLead:"Prawdziwe dane z moich repozytoriów.",
    chartLangs:"Języki", langsCenter:"języków", other:"Inne",
    chartCommits:"Commity w ostatnich 12 miesiącach", chartCommitsNote:"XI 2025 – X 2026, sześć aktywnych projektów. Najedź na słupek.",
    chartPerProject:"Commity na projekt, od pierwszego dnia",
    months:["lis","gru","sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź"],
    mindTitle:"Co mam w głowie", mindLead:"Przeciągnij bańkę, rzuć nią, kliknij. To moje myśli, baw się nimi.",
    capIdle:"Kliknij dowolną bańkę 👆",
    runTitle:"Myśli w biegu", runLead:"Najlepsze pomysły przychodzą po trzydziestym kilometrze.",
    triTxt:"Pływanie, rower i bieg jednego dnia. Smok ujarzmiony.",
    marTxt:"Królewski dystans ulicami Krakowa.",
    ultTxt:"Sto kilometrów górskimi szlakami Beskidu Niskiego.",
    distTitle:"Maraton kontra ultra", distMar:"Maraton", distUlt:"Ultra",
    distNote:"Ultra to prawie 2,4 maratonu. Jednym ciągiem.",
    pathTitle:"Ścieżka", pathLead:"Elektronika, telekomunikacja, teleinformatyka, a teraz własne projekty.",
    aghFull:"Akademia Górniczo-Hutnicza w Krakowie",
    eng:"Studia inżynierskie", engField:"Elektronika i Telekomunikacja",
    engThesis:"Zdalne sterowanie wyposażeniem auta: Android → Bluetooth → Arduino → magistrala CAN.",
    msc:"Studia magisterskie", mscField:"Teleinformatyka",
    mscThesis:"Segmentacja zdjęć lotniczych pod kątem stref zagrożenia pożarowego.",
    seeCode:"Zobacz kod",
    nowLvl:"Teraz", nowTitle:"Buduję własne projekty", nowTxt:"Web, mobile, dane i AI. A po godzinach trening do kolejnej mety.",
    contactAsk:"Masz pomysł?", contactTitle:"Pomyślmy razem.",
    finish:"🏁 Meta! Dzięki za wizytę", madeIn:"Zrobione w Krakowie, pod okiem smoka",
    eggsTitle:"🥚 Sekrety strony", nowPlaying:"Teraz gra",
    retroOff:"Tryb retro wyłączony", retroOn:"Tryb retro włączony",
    agh:"My chłopcy z Reymonta!<small>Miasteczko Studenckie AGH ⛏️</small>", hakuna:"Hakuna Matata", dont:"Nie panikuj. I weź ręcznik.",
    force:"Niech moc będzie z Tobą", wish:"When You Wish Upon a Star ✨", ironTitle:"Iron Dragon 🏅",
    tabAway:"🏃 Wracaj na trasę!", popcorn:"Popcorn XXL!", hunny:"🍯 Hunny!", think:"Think, Think, Think!",
    popped:"Pyk! Myśl uciekła… ale zaraz wróci."
  },
  en: {
    navProjects:"Projects", navNumbers:"Numbers", navMind:"Mind", navRun:"Run", navContact:"Contact",
    hello:"Hi, I'm", iam:"I'm a",
    roles:["developer","triathlete","marathoner","ultrarunner","gamer","movie buff","Disney fan","lifelong learner"],
    lead:"Always thinking about something. Sometimes it turns into an app, sometimes into 100 km in the mountains.",
    ctaProjects:"See projects", scrollHint:"peek inside my head",
    thoughts:["💡 new app?","🏃 just 5 more km…","🍿 one more episode","🎲 one more game","🧠 what if… AI?","🌍 where to next?","🇲🇦 Morocco?","🎧 new album?","📚 one more chapter","☕ coffee first","🍯 …a little honey?"],
    knock:"knock!", gotIt:"💡 Got it!",
    marquee:["ideas","code","triathlon","movies","games","board games","books","Disney","Polish rap","marathon","ultra","AGH","learning","Kraków"],
    sProjects:"projects", sCommits:"commits", sMarathon:"km marathon", sUltra:"km ultra", sDegrees:"AGH degrees",
    projectsTitle:"Ideas that became code", projectsLead:"Each one started as a thought in the cloud. Click a card to peek inside.",
    all:"All", web:"Web / PWA", mobile:"Mobile", data:"Data & AI", game:"Games",
    priv:"Private", privLong:"Private repository", code:"View code ↗︎", details:"peek inside",
    numbersTitle:"Code in numbers", numbersLead:"Real data from my repositories.",
    chartLangs:"Languages", langsCenter:"languages", other:"Other",
    chartCommits:"Commits in the last 12 months", chartCommitsNote:"Nov 2025 – Oct 2026, six active projects. Hover a bar.",
    chartPerProject:"Commits per project, since day one",
    months:["Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],
    mindTitle:"What's on my mind", mindLead:"Drag a bubble, throw it, click it. These are my thoughts, play with them.",
    capIdle:"Click any bubble 👆",
    runTitle:"Thoughts on the run", runLead:"The best ideas show up after kilometre thirty.",
    triTxt:"Swim, bike and run in one day. Dragon tamed.",
    marTxt:"The royal distance through the streets of Kraków.",
    ultTxt:"One hundred kilometres of mountain trails in the Low Beskids.",
    distTitle:"Marathon vs ultra", distMar:"Marathon", distUlt:"Ultra",
    distNote:"An ultra is almost 2.4 marathons. In one go.",
    pathTitle:"Path", pathLead:"Electronics, telecoms, ICT, and now my own projects.",
    aghFull:"AGH University of Krakow",
    eng:"Engineering degree", engField:"Electronics and Telecommunications",
    engThesis:"Remote control of car equipment: Android → Bluetooth → Arduino → CAN bus.",
    msc:"Master's degree", mscField:"ICT (Teleinformatics)",
    mscThesis:"Segmenting aerial images to detect fire-hazard zones.",
    seeCode:"View code",
    nowLvl:"Now", nowTitle:"Building my own projects", nowTxt:"Web, mobile, data and AI. And after hours, training for the next finish line.",
    contactAsk:"Got an idea?", contactTitle:"Let's think it through.",
    finish:"🏁 Finish! Thanks for visiting", madeIn:"Made in Kraków, under the dragon's watch",
    eggsTitle:"🥚 Site secrets", nowPlaying:"Now playing",
    retroOff:"Retro mode off", retroOn:"Retro mode on",
    agh:"My chłopcy z Reymonta!<small>“We, the lads from Reymonta”, AGH student town ⛏️</small>", hakuna:"Hakuna Matata", dont:"Don't panic. And bring a towel.",
    force:"May the Force be with you", wish:"When You Wish Upon a Star ✨", ironTitle:"Iron Dragon 🏅",
    tabAway:"🏃 Get back on track!", popcorn:"XXL popcorn!", hunny:"🍯 Hunny!", think:"Think, Think, Think!",
    popped:"Pop! The thought escaped… it'll be back."
  }
};

Object.assign(T.pl, {
  navTrail:"Trasa", navSkills:"Narzędzia",
  lead:"Programista w Nivalit, absolwent AGH. Ciągle o czymś myślę: czasem wychodzi z tego aplikacja, a czasem 100 km w górach.",
  roles:["programistą","triathlonistą","maratończykiem","ultrasem","graczem","kinomaniakiem","fanem Disneya","podróżnikiem","fotografem amatorem","wiecznym uczniem"],
  marquee:["pomysły","Java","Spring Boot","TypeScript","triathlon","kino","gry","planszówki","podróże","fotografia","Disney","polski rap","góry","ultra","AGH","taniec","Kraków"],
  sYears:"lata komercyjnie", sProjects:"projektów", sCommits:"commitów", sUltra:"km ultra",
  trailTitle:"Trasa", trailLead:"Od startu na AGH, przez Comarch, do Nivalit. Każdy punkt kontrolny coś dołożył do plecaka.",
  projectsLead:"Zawodowe, własne i studenckie. Kliknij kartę, żeby zajrzeć do środka.",
  all:"Wszystkie", work:"Zawodowe", own:"Własne", uni:"Studia",
  site:"Zobacz stronę ↗︎", team:"zespół", solo:"solo",
  skillsTitle:"Skrzynka z narzędziami", skillsLead:"Wypełnione na żółto to te, których używałem zawodowo. Reszta: studia i projekty po godzinach.",
  skAll:"Wszystko", skPro:"Tylko zawodowo", skLegPro:"zawodowo", skLegOwn:"studia i projekty",
  langsSpoken:"Języki obce", certsTitle:"Certyfikaty",
  chartLangs:"Języki (GitHub)", chartCommitsNote:"XI 2025 – X 2026, siedem aktywnych projektów. Najedź na słupek.",
  runLead:"Najlepsze pomysły przychodzą po trzydziestym kilometrze. Prawdziwe wyniki, prawdziwe wykresy.",
  marChartTitle:"Maraton: druga połowa to wyprzedzanie", marCallout:"+809 miejsc między 5. a 40. km",
  marChartNote:"Linia: miejsce w klasyfikacji na punktach pomiarowych (wyżej = lepiej). Słupki: tempo na odcinkach.",
  ultChartTitle:"Ultra: 19,5 godziny w górach", ultCallout:"100 km · 100. mężczyzna na\u00a0mecie\u00a0💯",
  ultChartNote:"Linia: czas na punktach kontrolnych. Słupki: średnia prędkość na odcinkach (km/h).",
  triChartTitle:"Triathlon: 29. z 44 w kategorii", triChartNote:"Iron Dragon 2024, dystans Standard · 2:57:24 · 126. miejsce w open.",
  distTitle:"Maraton kontra ultra: czas na trasie", distNote:"Ultra trwało prawie 5 razy dłużej niż maraton.",
  medalTri:"Pływanie, rower i bieg jednego dnia. Smok ujarzmiony.", medalMar:"Królewski dystans ulicami Krakowa, poniżej czterech godzin.", medalUlt:"Sto kilometrów szlakami Beskidu Niskiego, przez dzień i noc.",
  open:"open", hundred:"💯 Sto na sto!", hundredSub:"100 km i 100. miejsce wśród mężczyzn",
  navTravel:"Podróże", travelTitle:"Mapa ciekawości",
  travelLead:"Uwielbiam poznawać nowe miejsca, kulturę i historię, i łapać je w kadrze. Na żółto: gdzie już byłem. Przerywaną linią: dokąd jadę.",
  tvCountries:"krajów świata", tvRegions:"regionów w GlobeQuest", tvWorld:"% świata odkryte", tvRank:"ranga: Odkrywca",
  tvEurope:"Europa", tvAll:"Cały świat", tvCountriesShort:"krajów świata", tvHint:"Przytrzymaj Ctrl / ⌘, żeby przybliżyć kółkiem", tvTour:"Wycieczka", tvTourStop:"Stop", tvLegVisited:"byłem", tvLegPlanned:"w planie",
  tvNextSmall:"Następny przystanek", tvNext:"Maroko", tvGq:"Te dane pochodzą z mojego GlobeQuesta",
  tvBanner:"Maroko, czekaj!", copyMail:"Kopiuj e-mail", soundOn:"Dźwięk włączony", soundOff:"Dźwięk wyłączony", eHome:"Wszędzie dobrze,<small>ale w domu najlepiej 🏠</small>", eRocket:"Start!", eChalk:"Ładnie rysujesz", eChalkSub:"Kreda zawsze schnie za szybko", eLumos:"Lumos ✨", eNox:"Nox 🌙", eOvertake:"Wyprzedzanie!", eOvertakeSub:"Każda kropka to ktoś, kogo minąłem na trasie", eHeart:"❤️ 150 bpm<small>tak bije serce na 35. km</small>", eOwl:"Też nie śpisz?", eOwlSub:"Najlepsze pomysły przychodzą w nocy 🦉", eBird:"Ranny ptaszek!", eBirdSub:"Pora na kawę i pierwszy commit 🐦", eCoffee:"☕ +10 do kodu", eNewton:"F = m·a", eXylo:"Muzyka commitów 🎶", usedIn:"Użyte w:", tiltOn:"Przechyl telefon, a myśli się przesypią 📱", tiltBtn:"📱 Przechyl", csNums:"W liczbach", pKicker:"Znasz to?", pWhy:"czyli skąd ten pomysł", pCol:"<span class=\"st-y\">Żółte</span> myśli blondyna", pThink:"Zajrzyj do głowy", pThoughts:["A gdyby tak to zautomatyzować?","Jeszcze jedna funkcja i kończę.","Najpierw kawa, potem kod ☕","U mnie działa 🤷","A co, jeśli nie będzie internetu?","To da się zrobić prościej.","Pobiegam, to coś wymyślę 🏃"], pWho:"To dla ciebie, jeśli…", pWithout:"Celowo bez:", pBA:"Co się zmienia", pBefore:"Kiedyś", pAfter:"Teraz", pHint:"Zaznacz, co do ciebie pasuje.", pHint1:"Jedno pasuje. Coś jeszcze?", pMatch:"To chyba coś dla ciebie. Wypróbuj ↓", pNot:"Raczej nie dla ciebie, jeśli ", pTryApp:"Sprawdź w minutę", pTryRepo:"Uruchom u siebie", pTryMail:"Zobacz na żywo", pGoApp:"Wypróbuj teraz ↗︎", pGoRepo:"Kod na GitHubie ↗︎", pGoMail:"Napisz do mnie ↗︎", gridMore:n => `Pokaż wszystkie ${n} projektów`, csFlow:"Jak to działa", openApp:"Otwórz aplikację ↗︎", csWhy:"Co jest w tym fajne", csStack:"Z czego to zbudowane", csPrevL:"Poprzedni projekt", csNextL:"Następny projekt", hintHead:"puk, puk?", hintPg:"złap i rzuć!", hintEggs:`${EGGS.length} sekrety… znajdziesz?`, cDetails:"zajrzyj", cDrag:"rzuć mną", cMap:"✈️ leć", cTap:"puk!", cThought:"💭 myśl", cDice:"🎲 rzuć", spyStart:"Start", copied:"Skopiowane!", copiedSub:"Adres e-mail jest w schowku", tvBannerSub:"Następny przystanek: Afryka"
});
Object.assign(T.en, {
  navTrail:"Trail", navSkills:"Toolbox",
  lead:"Developer at Nivalit, AGH graduate. Always thinking about something: sometimes it turns into an app, sometimes into 100 km in the mountains.",
  roles:["developer","triathlete","marathoner","ultrarunner","gamer","movie buff","Disney fan","traveller","amateur photographer","lifelong learner"],
  marquee:["ideas","Java","Spring Boot","TypeScript","triathlon","movies","games","board games","travel","photography","Disney","Polish rap","mountains","ultra","AGH","dance","Kraków"],
  sYears:"years in industry", sProjects:"projects", sCommits:"commits", sUltra:"km ultra",
  trailTitle:"The trail", trailLead:"From the start line at AGH, through Comarch, to Nivalit. Every checkpoint added something to the backpack.",
  projectsLead:"Professional, personal and university. Click a card to peek inside.",
  all:"All", work:"Professional", own:"Personal", uni:"University",
  site:"Visit site ↗︎", team:"team", solo:"solo",
  skillsTitle:"The toolbox", skillsLead:"Filled in yellow: used professionally. The rest: university and after-hours projects.",
  skAll:"Everything", skPro:"Professional only", skLegPro:"professional", skLegOwn:"university & projects",
  langsSpoken:"Languages", certsTitle:"Certificates",
  chartLangs:"Languages (GitHub)", chartCommitsNote:"Nov 2025 – Oct 2026, seven active projects. Hover a bar.",
  runLead:"The best ideas show up after kilometre thirty. Real results, real charts.",
  marChartTitle:"Marathon: the second half is overtaking", marCallout:"+809 places between km 5 and 40",
  marChartNote:"Line: overall position at timing points (higher = better). Bars: pace per segment.",
  ultChartTitle:"Ultra: 19.5 hours in the mountains", ultCallout:"100 km · 100th man at the\u00a0finish\u00a0💯",
  ultChartNote:"Line: time at checkpoints. Bars: average speed per segment (km/h).",
  triChartTitle:"Triathlon: 29th of 44 in category", triChartNote:"Iron Dragon 2024, Standard distance · 2:57:24 · 126th overall.",
  distTitle:"Marathon vs ultra: time on course", distNote:"The ultra took almost 5 times as long as the marathon.",
  medalTri:"Swim, bike and run in one day. Dragon tamed.", medalMar:"The royal distance through Kraków, under four hours.", medalUlt:"One hundred kilometres of Low Beskid trails, through day and night.",
  open:"overall", hundred:"💯 A hundred for a hundred!", hundredSub:"100 km and 100th man at the finish",
  navTravel:"Travel", travelTitle:"Curiosity map",
  travelLead:"I love discovering new places, cultures and history, and catching them on camera. Yellow: where I've been. Dashed line: where I'm heading.",
  tvCountries:"countries of the world", tvRegions:"regions in GlobeQuest", tvWorld:"% of the world explored", tvRank:"rank: Explorer",
  tvEurope:"Europe", tvAll:"Whole world", tvCountriesShort:"countries", tvHint:"Hold Ctrl / ⌘ to zoom with the wheel", tvTour:"Take the tour", tvTourStop:"Stop", tvLegVisited:"visited", tvLegPlanned:"planned",
  tvNextSmall:"Next stop", tvNext:"Morocco", tvGq:"This data comes from my GlobeQuest",
  tvBanner:"Morocco, here I come!", copyMail:"Copy e-mail", soundOn:"Sound on", soundOff:"Sound off", eHome:"East or west,<small>home is best 🏠</small>", eRocket:"Lift-off!", eChalk:"Nice drawing", eChalkSub:"Chalk always dries too fast", eLumos:"Lumos ✨", eNox:"Nox 🌙", eOvertake:"Overtaking!", eOvertakeSub:"Every dot is someone I passed on course", eHeart:"❤️ 150 bpm<small>a heart at kilometre 35</small>", eOwl:"Can’t sleep either?", eOwlSub:"The best ideas come at night 🦉", eBird:"Early bird!", eBirdSub:"Time for coffee and the first commit 🐦", eCoffee:"☕ +10 to code", eNewton:"F = m·a", eXylo:"The sound of commits 🎶", usedIn:"Used in:", tiltOn:"Tilt your phone and the thoughts will roll 📱", tiltBtn:"📱 Tilt", csNums:"By the numbers", pKicker:"Sound familiar?", pWhy:"or, why I built it", pCol:"A blond's <span class=\"st-y\">yellow</span> thoughts", pThink:"Peek inside my head", pThoughts:["What if I automated this?","One more feature and I'm done.","Coffee first, then code ☕","Works on my machine 🤷","What if there's no internet?","This could be simpler.","I'll go for a run, it'll come to me 🏃"], pWho:"It's for you if…", pWithout:"Deliberately without:", pBA:"What changes", pBefore:"Before", pAfter:"Now", pHint:"Tick what fits.", pHint1:"That's one. Anything else?", pMatch:"Sounds like you. Try it ↓", pNot:"Probably not if ", pTryApp:"Try it in a minute", pTryRepo:"Run it yourself", pTryMail:"See it live", pGoApp:"Try it now ↗︎", pGoRepo:"Code on GitHub ↗︎", pGoMail:"Drop me a line ↗︎", gridMore:n => `Show all ${n} projects`, csFlow:"How it works", openApp:"Open the app ↗︎", csWhy:"What makes it good", csStack:"Built with", csPrevL:"Previous project", csNextL:"Next project", hintHead:"knock, knock?", hintPg:"grab & throw!", hintEggs:`${EGGS.length} secrets… find them?`, cDetails:"peek", cDrag:"throw me", cMap:"✈️ fly", cTap:"knock!", cThought:"💭 think", cDice:"🎲 roll", spyStart:"Start", copied:"Copied!", copiedSub:"The e-mail address is on your clipboard", tvBannerSub:"Next stop: Africa"
});

/* ═══════════════════════════ data ═══════════════════════════ */
const P = (one, kind, desc, pts) => ({ one, kind, desc, pts });
const PROJECTS = [
  /* ── work ── */
  { name:"Mentalio", cover:"mentalio-app-5", icon:"🧠", c:"#7f8cff", cat:"work", url:"https://www.mentalio.eu/", org:"Nivalit",
    tags:["Kotlin","Spring Boot","React","TypeScript","PostgreSQL","RabbitMQ"],
    pl:P("AI wspierające specjalistów w diagnozie i terapii młodzieży.","Nivalit · MedTech",
      "Narzędzie, które pomaga specjalistom zdrowia psychicznego szybciej i dokładniej diagnozować problemy u młodzieży i dobierać ścieżki terapii. Obecnie w badaniach klinicznych.",
      ["Algorytmy AI analizują dane i sugerują spersonalizowane ścieżki terapii","Badane jest nie tylko dziecko, ale i jego otoczenie","Rozwijane w firmie z certyfikatem ISO 13485"]),
    en:P("AI that supports specialists in diagnosing and treating young people.","Nivalit · MedTech",
      "A tool that helps mental health specialists diagnose problems in young people faster and more accurately and choose therapy paths. Currently in clinical trials.",
      ["AI algorithms analyse data and suggest personalised therapy paths","It looks at the child and their environment","Built at an ISO 13485-certified company"]) },
  { name:"Scholario", cover:"scholario-app-1", icon:"🏫", c:"#34d399", cat:"work", url:"https://scholario.eu/", org:"Nivalit",
    tags:["Kotlin","Spring Boot","React Native","Expo","React","PostgreSQL"],
    pl:P("Codzienne wsparcie dobrostanu emocjonalnego uczniów.","Nivalit · EdTech",
      "Uczeń codziennie krótko zastanawia się nad swoimi emocjami, a szkolny zespół szybciej widzi, komu potrzeba wsparcia.",
      ["Krótka, codzienna refleksja ucznia nad emocjami","Szybka informacja dla nauczycieli, psychologów i pedagogów","Bezpieczeństwo danych i zgodność z RODO"]),
    en:P("Everyday support for students' emotional wellbeing.","Nivalit · EdTech",
      "Students reflect briefly on their emotions every day, so the school team sees sooner who needs support.",
      ["A short daily reflection on emotions","Quick insight for teachers, psychologists and counsellors","Data security and GDPR compliance"]) },
  { name:"Comarch Loyalty Management", cover:"clm-1-cover|w", icon:"⛽", c:"#ff8a3d", cat:"work", org:"Comarch", team:5,
    tags:["Java","Spring Boot","Hibernate","Oracle","PostgreSQL","Kubernetes"],
    pl:P("System lojalnościowy dla BP i SASOL. Głównie backend.","Comarch · 2022–2024",
      "Program lojalnościowy, z którego korzystają klienci stacji BP i SASOL w sześciu krajach. Rozwój i utrzymanie backendu.",
      ["BP: mikroserwisy na Javie 8 i Oracle","SASOL: Java 17, Kubernetes i Flyway","Zespół 5 osób, od zgłoszenia po wdrożenie"]),
    en:P("Loyalty platform for BP and SASOL. Mostly backend.","Comarch · 2022–2024",
      "The loyalty programme used by BP and SASOL station customers in six countries. Building and maintaining the backend.",
      ["BP: microservices on Java 8 and Oracle","SASOL: Java 17, Kubernetes and Flyway","A 5-person team, from ticket to release"]) },
  { name:"HR System", icon:"👥", c:"#ffb020", cat:"work", org:"Comarch", team:3,
    tags:["Angular","TypeScript","Java 17","Spring Boot","PostgreSQL"],
    pl:P("System zarządzania zasobami ludzkimi. Full stack, na stażu.","Comarch · staż 2022",
      "Trzymiesięczny staż: rozwój systemu zarządzania zasobami ludzkimi razem z zespołem.",
      ["Frontend w Angularze, backend w Spring Boot","Hibernate, PostgreSQL, Flyway, Swagger","Zespół 3-osobowy"]),
    en:P("Human resources management system. Full stack, internship.","Comarch · internship 2022",
      "A three-month internship building an HR management system with the team.",
      ["Angular frontend, Spring Boot backend","Hibernate, PostgreSQL, Flyway, Swagger","3-person team"]) },
  /* ── own ── */
  { name:"Inquisitio", cover:"inquisitio-5", icon:"📝", c:"#ffd43b", cat:"work", org:"Nivalit", team:1,
    tags:["TypeScript","React","Fastify","PostgreSQL","MongoDB","Turborepo"],
    pl:P("Platforma do tworzenia i edytowania kwestionariuszy. Robiona solo.","Nivalit · 2026",
      "Edytor kwestionariuszy, aplikacja do odpowiadania krok po kroku i moduł zbierania odpowiedzi: sześć aplikacji w jednym monorepo.",
      ["Podgląd w edytorze to dokładnie to, co zobaczy respondent","Odpowiadanie jeden ekran naraz, odporne na brak sieci","Eksport CSV/XLSX, retencja i audyt odpowiedzi","751 commitów, zaprojektowana i zbudowana w pojedynkę"]),
    en:P("A platform for building and editing questionnaires. Built solo.","Nivalit · 2026",
      "A questionnaire editor, a step-by-step answering app and a response collection module: six apps in one monorepo.",
      ["The editor preview is exactly what the respondent sees","One screen at a time, tolerant of going offline","CSV/XLSX export, retention and audit of responses","751 commits, designed and built solo"]) },
  { name:"GlobeQuest", cover:"globequest-3", app:"https://globequest.pages.dev/", icon:"🌍", c:"#12d8a5", cat:"own", team:1,
    tags:["Flutter","Dart","WebAssembly","Drift","Bloc","Supabase","OpenStreetMap","Wikidata"],
    pl:P("Offline-first mapa podróży: zamaluj świat, zaplanuj wyjazd, sprawdź się w quizie.","Web (WASM) · iOS · Android",
      "Zaznaczasz, gdzie byłeś, planujesz, gdzie pojedziesz, i uczysz się czegoś o obu miejscach. Flutter, na webie w WebAssembly.",
      ["Zamalowujesz kraje i regiony", "Dossier każdego kraju: kurs, pogoda, rozmówki", "Perełki z okolicy, karta po karcie", "Kapsuły czasu otwierane tylko na miejscu"]),
    en:P("Offline-first travel map: paint the world, plan a trip, test yourself in a quiz.","Web (WASM) · iOS · Android",
      "Mark where you've been, plan where you're going, learn about both. Flutter, compiled to WebAssembly on the web.",
      ["Paint countries and regions", "A dossier for every country: rates, weather, phrases", "Nearby gems, card by card", "Time Capsules that open only on location"]) },
  { name:"JournAI", cover:"journai-3", icon:"🩺", c:"#9b7bff", cat:"own", team:1,
    tags:["Python","FastAPI","PostgreSQL","pgvector","React 19","TypeScript","TanStack","MCP","Gemini"],
    pl:P("Dziennik zdrowia: dane z Garmina, analityka i komentarz AI, który nie zmyśla liczb.","Dane i AI",
      "Dane z Garmina przez serwer MCP, analityka snu, stresu i treningu, a AI tylko komentuje policzone wyniki.",
      ["„Skąd ta liczba” przy każdym wyniku", "Porównanie z Twoją normą, nie ze średnią", "Plan trenera, który omija ból", "Panel lekarski do wydruku"]),
    en:P("Health diary: Garmin data, analytics and AI commentary that never makes up numbers.","Data & AI",
      "Garmin data via an MCP server, sleep, stress and training analytics, and AI that only comments on computed results.",
      ["“Where it comes from” on every number", "Compared with your norm, not an average", "A coach plan that works around pain", "A printable doctor panel"]) },
  { name:"JTCJ", cover:"jtcj-5", app:"https://skladomat.pages.dev/", icon:"🥗", c:"#7ed957", cat:"own", team:1,
    tags:["TypeScript","React","PWA","IndexedDB","Monorepo","USDA FoodData","Gemini"],
    pl:P("Jesteś Tym, Co Jesz: dziennik jedzenia, który rozumie zdania.","PWA · offline",
      "Dziennik jedzenia z analizą składu: makro, witaminy, przetworzenie i ocena produktu ze źródłami.",
      ["Zdanie albo głos zamiast wyszukiwania", "Ocena 0–100 rozpisana na części", "Witaminy wobec normy UE, ze źródłem", "Offline, dane zostają na urządzeniu"]),
    en:P("You Are What You Eat: a food diary that understands sentences.","PWA · offline",
      "A food diary with ingredient analysis: macros, vitamins, processing and a source-backed product score.",
      ["A sentence or your voice instead of search", "A 0–100 score broken into parts", "Vitamins vs EU reference, with sources", "Offline, data stays on the device"]) },
  { name:"Kwit", cover:"kwit-2", app:"https://kwit-app.pages.dev/", icon:"🧾", c:"#ffb020", cat:"own", team:1,
    tags:["TypeScript","React 19","IndexedDB","Dexie","Web Workers","pdf.js","SVG"],
    pl:P("Wyciąg z banku zamieniony w jasny obraz wydatków.","Finanse · lokalnie",
      "Wyciąg z banku i domu maklerskiego zamienia się w pulpit, analizę i portfel. Bez konta i bez serwera.",
      ["Rozpoznaje wyciąg sam, bez ustawiania", "Wyłapuje subskrypcje i zachcianki", "Koperty i plan odkładania", "Kwoty w groszach, mediana zamiast średniej"]),
    en:P("A bank statement turned into a clear picture of spending.","Finance · local",
      "Bank and broker statements become a dashboard, analysis and a portfolio. No account, no server.",
      ["Recognises the statement, no setup", "Spots subscriptions and impulse buys", "Envelopes and a savings plan", "Money in cents, medians not means"]) },
  { name:"PatoBox", cover:"patobox-1|w", app:"https://gra.patobox.workers.dev/scena/", icon:"🎉", c:"#ff4b6e", cat:"own", team:1,
    tags:["TypeScript","WebSockets","Cloudflare Workers","Durable Objects","Vite","Web Audio"],
    pl:P("Gra imprezowa: telefon to kontroler, telewizor to scena.","Gra imprezowa",
      "Znajomi wymyślają najgłupsze odpowiedzi na absurdalne polecenia i głosują. W jednym pokoju albo online.",
      ["Telefon to kontroler, telewizor to scena", "Dwa wyglądy: Neon i Karykatura", "Pisanie, rysunki, zdjęcia i dźwięk", "Kuźnia własnych trybów"]),
    en:P("Party game: your phone is the controller, the TV is the stage.","Party game",
      "Friends come up with the silliest answers to absurd prompts and vote. In one room or online.",
      ["The phone is the controller, the TV the stage", "Two looks: Neon and Caricature", "Writing, drawing, photos and sound", "A forge for your own modes"]) },
  { name:"OfficeFlow", cover:"officeflow-1", app:"https://officeflow.pages.dev/#/pokaz", icon:"🏢", c:"#5b8cff", cat:"own", team:1,
    tags:["TypeScript","React 19","Supabase","PWA","i18n","Vitest"],
    pl:P("Zgłoszenia biurowe i stałe usługi w jednym miejscu, z podpowiedzią, kto się nimi zajmie.","Narzędzie dla firm",
      "Pracownik zgłasza potrzebę w dwóch krokach, aplikacja proponuje, kto i kiedy, a office manager zatwierdza. Firma usługowa dostaje zlecenie u siebie.",
      ["Propozycja „tak było ostatnio” zamiast pustego formularza","Cztery role w jednej aplikacji: pracownik, office manager, koordynator firmy, administrator","Reguły: drobne wydatki bez pytania, pusta butla zawsze do tej samej osoby","Stałe usługi w kalendarzu, z subskrypcją do Google, Outlooka i Apple"]),
    en:P("Office requests and recurring services in one place, with a suggestion of who handles them.","Business tool",
      "An employee reports a need in two steps, the app proposes who and when, and the office manager approves. The vendor gets the order on their side.",
      ["An “as last time” suggestion instead of an empty form","Four roles in one app: employee, office manager, vendor coordinator, admin","Rules: small expenses without asking, an empty bottle always to the same person","Recurring services on a calendar, subscribable from Google, Outlook and Apple"]) },
  { name:"Randkomat", cover:"randkomat-3", app:"https://randkomat.pages.dev/", icon:"💌", c:"#ff7eb6", cat:"own", team:1,
    tags:["TypeScript","React 19","Vite","PWA","Supabase","Web Audio","Vitest"],
    pl:P("Zaproszenie na randkę w 4 kliknięciach, odpowiedź w jednym.","PWA",
      "Zaproszenie dla jednej konkretnej osoby. Każda para to osobny, zamknięty świat.",
      ["Pierwsze zaproszenie bez konta", "Szczegóły dopiero po „tak”", "Uciekające „nie” z uczciwym wyjściem", "Karteczki otwierane zabawą"]),
    en:P("A date invite in 4 taps, answered in one.","PWA",
      "An invite for one specific person. Every couple is its own sealed world.",
      ["The first invite needs no account", "Details only after a “yes”", "A runaway “no” with an honest way out", "Cards you open by playing"]) },
  { name:"GarminReport", cover:"garminreport-1-cover|w", icon:"⌚", c:"#22b8e6", cat:"own", repo:"https://github.com/BartoszJatczyszyn/GarminReport",
    tags:["Python","CLI","Markdown"],
    pl:P("Dane z Garmina w jednym raporcie gotowym dla AI.","CLI · open source",
      "Wyciąga dane treningowe, sen i HRV, liczy metryki, których Garmin nie liczy, i składa jeden raport Markdown.",
      ["ACWR, monotonia treningu, dług snu","Trendy z regresji, z-score, korelacje z opóźnieniem","Wbudowana instrukcja czytania raportu dla AI"]),
    en:P("Garmin data in one AI-ready report.","CLI · open source",
      "Pulls training, sleep and HRV data, computes metrics Garmin doesn't, and writes a single Markdown report.",
      ["ACWR, training monotony, sleep debt","Regression trends, z-scores, lagged correlations","A built-in “how to read this” section for the AI"]) },
  /* ── university ── */
  { name:"FireRisk", cover:"firerisk-1|w", icon:"🔥", c:"#ff6a3d", cat:"uni", team:1, repo:"https://github.com/BartoszJatczyszyn/FireRisk-master-s-degree",
    tags:["Python","TensorFlow","Keras","U-Net"],
    pl:P("Segmentacja zdjęć lotniczych pod kątem zagrożenia pożarowego.","Praca magisterska · 2024",
      "Sieć U-Net z enkoderem ResNet34 dzieli zdjęcia lotnicze na budynki, lasy, wodę i drogi: pierwszy krok do wykrywania stref zagrożenia pożarowego.",
      ["Transfer learning, U-Net + ResNet34","5 klas, focal + Jaccard loss, metryka IoU","Python 3.10, TensorFlow 2.10, scikit-learn, NumPy"]),
    en:P("Aerial image segmentation for fire-hazard zones.","Master's thesis · 2024",
      "A U-Net with a ResNet34 encoder splits aerial images into buildings, woodland, water and roads: the first step towards detecting fire-hazard zones.",
      ["Transfer learning, U-Net + ResNet34","5 classes, focal + Jaccard loss, IoU metric","Python 3.10, TensorFlow 2.10, scikit-learn, NumPy"]) },
  { name:"CarControl", cover:"carcontrol-1", icon:"🚗", c:"#5b8cff", cat:"uni", team:1, repo:"https://github.com/BartoszJatczyszyn/CarControl",
    tags:["C++","Arduino","Android","CAN bus"],
    pl:P("Zdalne sterowanie wyposażeniem auta z telefonu.","Praca inżynierska · 2023",
      "Aplikacja na Androida łączy się przez Bluetooth z Arduino, które rozmawia z komputerem pokładowym po magistrali CAN.",
      ["Arduino UNO + MCP2515 (CAN) + HC-05 (Bluetooth)","Aplikacja mobilna w Javie, SQLite","Więcej komfortu w starszych autach"]),
    en:P("Remote control of car equipment from your phone.","Engineering thesis · 2023",
      "An Android app talks over Bluetooth to an Arduino, which talks to the onboard computer over the CAN bus.",
      ["Arduino UNO + MCP2515 (CAN) + HC-05 (Bluetooth)","Java mobile app, SQLite","More comfort for older cars"]) },
  { name:"Wolność dla łapek", icon:"🐾", c:"#ff9ec4", cat:"uni", team:8,
    tags:["Python","Django","SQLite","JavaScript"],
    pl:P("Strona charytatywnej aukcji internetowej.","Projekt studencki",
      "Serwis aukcyjny, z którego dochód szedł na cel charytatywny.",["Django + SQLite, HTML, CSS, JavaScript","Zespół 8 osób"]),
    en:P("A charity auction website.","Student project",
      "An auction site whose proceeds went to charity.",["Django + SQLite, HTML, CSS, JavaScript","8-person team"]) },
  { name:"QoS w SDN", icon:"📡", c:"#4fd1c5", cat:"uni", team:5,
    tags:["Java","Python","Floodlight","Mininet"],
    pl:P("Zarządzanie ruchem w sieci z zapewnieniem jakości usług.","Projekt studencki",
      "Software-Defined Networking: sterownik Floodlight i emulowana sieć w Mininecie, z priorytetami dla ruchu.",["Floodlight + Mininet","Zespół 5 osób"]),
    en:P("Network traffic management with Quality of Service.","Student project",
      "Software-Defined Networking: a Floodlight controller and an emulated Mininet network with traffic priorities.",["Floodlight + Mininet","5-person team"]) },
  { name:"Domowy alarm", icon:"🚨", c:"#ff5d5d", cat:"uni", team:7,
    tags:["Java","Android SDK","Arduino","MySQL"],
    pl:P("Domowy system alarmowy z aplikacją na Androida.","Projekt studencki",
      "Czujniki na Arduino, baza MySQL i aplikacja mobilna do sterowania alarmem.",["Arduino + Android SDK","Zespół 7 osób"]),
    en:P("A home alarm system with an Android app.","Student project",
      "Arduino sensors, a MySQL database and a mobile app to control the alarm.",["Arduino + Android SDK","7-person team"]) },
  { name:"Movie Analyzer", icon:"🎞️", c:"#c084fc", cat:"uni", team:1, repo:"https://github.com/BartoszJatczyszyn/Movie-scraper-analyzer",
    tags:["R","Web scraping","Data viz"],
    pl:P("Web scraping i analiza listy Top 500 Filmwebu.","Projekt studencki",
      "Narzędzie, które pobiera, analizuje i wizualizuje dane o filmach z rankingu Top 500.",["Scraping, analiza i wykresy w R","Projekt solo"]),
    en:P("Web scraping and analysis of Filmweb's Top 500.","Student project",
      "A tool that scrapes, analyses and visualises film data from the Top 500 ranking.",["Scraping, analysis and charts in R","Solo project"]) }
];

const TRAIL = [
  { when:"2019", flag:"S", e:"🎓", edu:true, pick:true, link:null,
    pl:{ role:"Start", title:"AGH w Krakowie", desc:"Wydział Informatyki, Elektroniki i Telekomunikacji. Po drodze: drużyna koszykówki wydziału.", badge:"edukacja" },
    en:{ role:"Start", title:"AGH University of Krakow", desc:"Faculty of Computer Science, Electronics and Telecommunications. Along the way: the faculty basketball team.", badge:"education" } },
  { when:"2022", sub:"VI–IX", flag:"1", e:"🧑‍💻", link:null,
    pl:{ role:"Stażysta", title:"Comarch", desc:"Trzy miesiące w zespole rozwijającym system zarządzania zasobami ludzkimi. Full stack.", badge:"staż",
         items:[["👥","System HR","Angular, TypeScript, Java 17, Spring Boot, Hibernate, PostgreSQL · zespół 3 osób"]] },
    en:{ role:"Intern", title:"Comarch", desc:"Three months on the team building a human resources management system. Full stack.", badge:"internship",
         items:[["👥","HR system","Angular, TypeScript, Java 17, Spring Boot, Hibernate, PostgreSQL · 3-person team"]] } },
  { when:"2022", sub:"→ 2024", flag:"2", e:"⛽", link:null,
    pl:{ role:"Programista", title:"Comarch", desc:"Dwa lata przy Comarch Loyalty Management dla klientów takich jak BP i SASOL. Głównie backend.", badge:"2 lata",
         items:[["🇪🇸","CLM BP (Hiszpania i Portugalia)","Java 8, Oracle, WebLogic, Spring Boot, Hibernate, mikroserwisy · zespół 5 osób"],["🇿🇦","CLM SASOL (RPA)","Java 17, PostgreSQL, Docker, Kubernetes, Flyway · zespół 5 osób"]] },
    en:{ role:"Developer", title:"Comarch", desc:"Two years on Comarch Loyalty Management for clients such as BP and SASOL. Mostly backend.", badge:"2 years",
         items:[["🇪🇸","CLM BP (Spain & Portugal)","Java 8, Oracle, WebLogic, Spring Boot, Hibernate, microservices · 5-person team"],["🇿🇦","CLM SASOL (South Africa)","Java 17, PostgreSQL, Docker, Kubernetes, Flyway · 5-person team"]] } },
  { when:"2023", flag:"3", e:"🚗", edu:true, link:"https://github.com/BartoszJatczyszyn/CarControl",
    pl:{ role:"Inżynier", title:"Elektronika i Telekomunikacja", desc:"Praca: „System zdalnego sterowania elementami wyposażenia pojazdu samochodowego”.", badge:"AGH" },
    en:{ role:"BEng", title:"Electronics and Telecommunications", desc:"Thesis: a remote control system for car equipment (mobile app + microcontroller).", badge:"AGH" } },
  { when:"2024", flag:"4", e:"🔥", edu:true, link:"https://github.com/BartoszJatczyszyn/FireRisk-master-s-degree",
    pl:{ role:"Magister", title:"Teleinformatyka", desc:"Praca (po angielsku): segmentacja stref zagrożenia pożarowego na zdjęciach lotniczych obszarów miejskich i wiejskich.", badge:"AGH" },
    en:{ role:"MSc", title:"ICT (Teleinformatics)", desc:"Thesis (in English): fire-hazard zone segmentation in aerial images of urban and rural areas.", badge:"AGH" } },
  { when:"2026", sub:"III →", flag:"★", e:"🩺", now:true, link:"https://nivalit.com/",
    pl:{ role:"Programista", title:"Nivalit", desc:"Software i AI dla ochrony zdrowia. Pracuję przy trzech produktach:", badge:"teraz",
         items:[["🧠","Mentalio","AI wspierające specjalistów w diagnozie i terapii młodzieży","https://www.mentalio.eu/"],["🏫","Scholario","Codzienne wsparcie dobrostanu emocjonalnego uczniów","https://scholario.eu/"],["📝","Inquisitio","Platforma do kwestionariuszy, którą rozwijam solo"]] },
    en:{ role:"Developer", title:"Nivalit", desc:"Software and AI for healthcare. I work on three products:", badge:"now",
         items:[["🧠","Mentalio","AI that supports specialists in diagnosing and treating young people","https://www.mentalio.eu/"],["🏫","Scholario","Everyday support for students' emotional wellbeing","https://scholario.eu/"],["📝","Inquisitio","A questionnaire platform I develop solo"]] } }
];

/* skills: [name, professional?] */
const SKILLS = [
  { e:"☕", pl:"Języki", en:"Languages", s:[["Java",1],["TypeScript",0],["JavaScript",0],["Python",0],["Dart",0],["C",0],["C++",0],["C#",0],["R",0],["HTML",0],["CSS",0]] },
  { e:"🧩", pl:"Frameworki", en:"Frameworks", s:[["Spring Boot",1],["Hibernate (JPA)",1],["REST API",1],["Mikroserwisy|Microservices",1],["Flyway",1],["JUnit",1],["React",0],["Angular",0],["Flutter",0],["FastAPI",0],["Android SDK",0],["Kafka",0]] },
  { e:"🗄️", pl:"Bazy danych", en:"Databases", s:[["PostgreSQL",1],["Oracle",1],["MongoDB",0],["MySQL",0],["SQLite",0],["Redis",0],["Cassandra",0]] },
  { e:"🐳", pl:"DevOps i CI/CD", en:"DevOps & CI/CD", s:[["Docker",1],["Kubernetes",1],["Minikube",1],["Helm",1],["Maven",1],["Git",1],["SonarLint",1],["Jenkins",0]] },
  { e:"🔐", pl:"API i bezpieczeństwo", en:"API & security", s:[["RAML",1],["Swagger",1],["OAuth 2.0",1],["JWT",1],["OpenAPI",0]] },
  { e:"🛠️", pl:"Narzędzia", en:"Tools", s:[["IntelliJ IDEA",1],["Postman",1],["Oracle WebLogic",1],["Apache Tomcat",1],["Jira",1],["VS Code",0],["Android Studio",0],["PyCharm",0],["Figma",0]] },
  { e:"🧠", pl:"ML i dane", en:"ML & data", s:[["TensorFlow",0],["Keras",0],["scikit-learn",0],["NumPy",0],["Web scraping",0],["RStudio",0]] },
  { e:"☁️", pl:"Chmura i monitoring", en:"Cloud & monitoring", s:[["AWS (S3, EC2, Lambda, RDS)",0],["Grafana",0],["Prometheus",0]] },
  { e:"🌐", pl:"Sieci", en:"Networking", s:[["SDN",0],["Mininet",0],["Floodlight",0],["Cisco Packet Tracer",0]] },
  { e:"📋", pl:"Metodyki", en:"Methodologies", s:[["Scrum",1],["Kanban",1]] }
];
const SPOKEN = [["🇵🇱",{pl:"Polski",en:"Polish"},{pl:"ojczysty",en:"native"},"100%"],["🇬🇧",{pl:"Angielski",en:"English"},{pl:"B2+",en:"B2+"},"72%"]];
const CERTS = [
  ["☕",{pl:"Java (średniozaawansowany)",en:"Java (intermediate)"},"Comarch Training Center"],
  ["🗄️",{pl:"Java Persistence API / Hibernate",en:"Java Persistence API / Hibernate"},"Comarch Training Center"],
  ["🤖",{pl:"Kurs AI „Przyszłość zaczyna się dziś”",en:"AI course “The future starts today”"},"Digital University × Microsoft"],
  ["💬",{pl:"Umiejętności komunikacyjne",en:"Communication skills"},"PFP"],
  ["🧘",{pl:"Jak radzić sobie z trudnymi emocjami?",en:"Coping with difficult emotions"},"PFP"]
];

/* races: real results */
const MARATHON = {
  splits:[[0,"0:00:00"],[5,"0:27:55"],[10,"0:54:58"],[15,"1:21:49"],[21.0975,"1:55:38"],[30,"2:48:28"],[35,"3:17:23"],[40,"3:46:33"],[42.195,"3:59:43"]],
  places:[[5,2582],[10,2474],[15,2265],[25,2206],[27,2185],[30,2145],[35,1945],[40,1773]]
};
const ULTRA = { splits:[[0,"0:00:00"],[43,"6:25:38"],[63,"9:51:59"],[74,"12:20:44"],[81.5,"14:17:56"],[88,"16:02:41"],[100,"19:26:59"]] };
const toSec = t => t.split(":").reduce((a, x) => a * 60 + +x, 0);
const fmtPace = s => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;
const fmtHM = s => `${Math.floor(s / 3600)}:${String(Math.floor(s % 3600 / 60)).padStart(2, "0")}`;

const LANGS = [
  { n:"TypeScript", v:39.9, c:"--c1" }, { n:"Dart", v:24.7, c:"--c2" }, { n:"Python", v:20.2, c:"--c3" },
  { n:"Jupyter", v:9.2, c:"--c4" }, { n:"*other", v:6.0, c:"--c5" }
];
const LANG_COUNT = 21;
const COMMITS_MONTHLY = [56,45,20,9,17,0,11,173,128,234,333,467];
const COMMITS_PROJECT = [["📝","Inquisitio",751],["🩺","JournAI",544],["🌍","GlobeQuest",500],["🥗","JTCJ",134],["🧾","Kwit",118],["🎉","PatoBox",107],["🏢","OfficeFlow",37],["⌚","GarminReport",25]];
const RAP = ["Taco Hemingway · Marmur","Taco Hemingway · Café Belga","Taco Hemingway · Pocztówka z WWA, lato '19","Quebonafide · Egzotyka","Quebonafide · Romantic Psycho","Taconafide · Soma 0,5 mg","Taco Hemingway · Jarmark"];

const BUBBLES = [
  { id:"idea", e:"💡", r:64, pl:["Pomysły","Najczęstszy gość w tej głowie."], en:["Ideas","The most frequent visitor in this head."] },
  { id:"code", e:"💻", r:62, pl:["Kod","Java, TypeScript, Python, Dart i wszystko, co pomoże pomysłowi ożyć."], en:["Code","Java, TypeScript, Python, Dart and whatever brings an idea to life."] },
  { id:"tri", e:"🏊", r:56, pl:["Triathlon","Iron Dragon 2024, dystans Standard: 2:57:24, 29. z 44 w kategorii."], en:["Triathlon","Iron Dragon 2024, Standard distance: 2:57:24, 29th of 44 in category."] },
  { id:"mar", e:"🏃", r:54, pl:["Maraton","Cracovia Maraton 2023: 3:59:43. Poniżej czterech godzin o 17 sekund."], en:["Marathon","Cracovia Marathon 2023: 3:59:43. Under four hours by 17 seconds."] },
  { id:"ult", e:"⛰️", r:60, pl:["Ultra","Łemkowyna Trail 100: 19:26:59 i 100. miejsce wśród mężczyzn. Sto na sto."], en:["Ultra","Łemkowyna Trail 100: 19:26:59 and 100th man at the finish. A hundred for a hundred."] },
  { id:"agh", e:"🎓", r:52, pl:["AGH","Inżynier Elektroniki i Telekomunikacji, magister Teleinformatyki."], en:["AGH","BEng in Electronics & Telecoms, MSc in ICT."] },
  { id:"movie", e:"🎬", r:54, act:"popcorn", pl:["Kino","Kinematografia, filmy i seriale. Klikaj dalej, bez popcornu się nie liczy."], en:["Cinema","Films and series. Keep clicking, it doesn't count without popcorn."] },
  { id:"games", e:"🎮", r:52, pl:["Gry","Pad w dłoni i „jeszcze tylko jedna runda”."], en:["Games","Controller in hand and “just one more round”."] },
  { id:"board", e:"🎲", r:52, act:"dice", pl:["Planszówki",""], en:["Board games",""] },
  { id:"books", e:"📚", r:46, pl:["Książki","Zawsze jedna czeka na stoliku nocnym."], en:["Books","There's always one on the nightstand."] },
  { id:"disney", e:"🏰", r:48, act:"sparkle", pl:["Disney","Bajki, które nie starzeją się nigdy."], en:["Disney","Classics that never get old."] },
  { id:"rap", e:"🎧", r:50, pl:["Polski rap","Taco Hemingway, Quebonafide i spółka."], en:["Polish rap","Taco Hemingway, Quebonafide and friends."] },
  { id:"gym", e:"🏋️", r:48, pl:["Siłownia","Trening siłowy, żeby nogi wytrzymały kolejne ultra."], en:["Gym","Strength training, so the legs survive the next ultra."] },
  { id:"travel", e:"✈️", r:56, pl:["Podróże","24 kraje, nowe kultury i historia. Następny przystanek: Maroko."], en:["Travel","24 countries, new cultures and history. Next stop: Morocco."] },
  { id:"photo", e:"📷", r:46, pl:["Fotografia","Kadr wszędzie tam, gdzie poniosą nogi."], en:["Photography","A frame wherever my legs take me."] },
  { id:"hike", e:"🥾", r:48, pl:["Góry","Wędrówki górskie, czyli ultra w wersji spacerowej."], en:["Mountains","Hiking: the ultra, at walking pace."] },
  { id:"dance", e:"💃", r:44, pl:["Taniec","Kiedy muzyka gra, nogi same idą."], en:["Dance","When the music plays, the feet follow."] },
  { id:"ball", e:"⚽", r:46, pl:["Gry zespołowe","Junior w Ekoball Stal Sanok, ogólnopolska olimpiada w piłce ręcznej, drużyna koszykówki wydziału na AGH."], en:["Team sports","Junior at Ekoball Stal Sanok, national youth handball olympiad, faculty basketball team at AGH."] },
  { id:"learn", e:"🧠", r:56, pl:["Nauka","Nowe technologie i pasek doświadczenia, który nigdy się nie zapełnia."], en:["Learning","New tech and an XP bar that never fills up."] },
  { id:"hunny", e:"🍯", r:26, act:"hunny", mini:true, pl:["",""], en:["",""] }
];

/* ═══════════════════════════ state ═══════════════════════════ */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
let lang = store.get("bj-lang", null) || ((navigator.language || "pl").toLowerCase().startsWith("pl") ? "pl" : "en");
let filter = "all", gridOpen = false;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const cssVar = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const center = el => { const r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };

const savedTheme = store.get("bj-theme", null);
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

/* ═══════════════════════════ render ═══════════════════════════ */
let i18nGen = 0;
function applyI18n(deferOffscreen = false){
  const t = T[lang];
  /* read section positions before any write, so this costs one layout, not a forced one per section */
  const SECTIONS = [".marquee", "#projects", "#numbers", "#mind", "#trail", "#skills", "#travel", "#run"];
  const onScreen = new Set(deferOffscreen ? SECTIONS.filter(sel => { const r = $(sel).getBoundingClientRect(); return r.bottom > -300 && r.top < innerHeight + 300; }) : SECTIONS);
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => { const v = t[el.dataset.i18n]; if (typeof v === "string") el.textContent = v; });
  $("#langBtn").textContent = lang === "pl" ? "EN" : "PL";
  if (typeof splitHeads === "function"){ splitHeads(); renderSpy(); }
  $("#donutLbl").textContent = t.langsCenter;
  /* sections on screen re-render now; the rest one per idle slot, so switching language never stalls a frame */
  const parts = [
    [".marquee", buildMarquee],
    ["#projects", () => { renderFilters(); deferOffscreen ? relabelGrid() : renderGrid(); }],
    ["#numbers", () => { renderBars(); renderHBars(); renderLegend(); }],
    ["#mind", labelBubbles],
    ["#trail", renderTrail],
    ["#skills", renderSkills],
    ["#travel", () => { renderCountryChips(); if (mapState) mapState.svg.attr("aria-label", lang === "pl" ? "Mapa odwiedzonych krajów" : "Map of visited countries"); }],
    ["#run", () => { renderMedals(); renderMarathon(); renderUltra(); renderTri(); $("#marCallout").textContent = t.marCallout; $("#ultCallout").textContent = t.ultCallout; }],
  ];
  const later = [];
  for (const [sel, fn] of parts) (onScreen.has(sel) ? fn() : later.push(fn));
  const idle = globalThis.requestIdleCallback || (f => setTimeout(f, 30));
  const gen = ++i18nGen;
  const next = () => { const fn = later.shift(); if (!fn || gen !== i18nGen) return; fn(); idle(next, { timeout: 400 }); };
  idle(next, { timeout: 400 });
  setCaption(t.capIdle);
  if ($("#eggs").open) renderEggPanel();
  if (heroStarted){ restartTyper(); showThought(true); }
}

function buildMarquee(){
  const words = T[lang].marquee;
  const row = list => { const h = list.map(w => `<span>${esc(w)}</span>`).join(""); return h + h; };
  $("#mq1").innerHTML = row(words);
  $("#mq2").innerHTML = row([...words].reverse());
}

const CATS = ["all","work","own","uni"];
function renderFilters(){
  const t = T[lang], f = $("#filters");
  f.querySelectorAll("button").forEach(b => b.remove());
  CATS.forEach(c => {
    const b = document.createElement("button");
    b.textContent = t[c]; b.dataset.cat = c;
    if (c === filter) b.className = "on";
    f.appendChild(b);
  });
  requestAnimationFrame(movePill);
}
function movePill(){
  const on = $("#filters button.on"), pill = $("#filters .pill");
  if (!on) return;
  Object.assign(pill.style, { transform:`translate(${on.offsetLeft}px,${on.offsetTop}px)`, width:on.offsetWidth+"px", height:on.offsetHeight+"px" });
}
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b || b.dataset.cat === filter) return;
  filter = b.dataset.cat;
  $$("#filters button").forEach(x => x.classList.toggle("on", x === b));
  movePill(); renderGrid(true);
});

function renderGrid(animate){
  const t = T[lang];
  $("#grid").innerHTML = PROJECTS.filter(p => filter === "all" || p.cat === filter).map((p, i) => {
    const c = p[lang];
    return `<button class="card${animate ? " enter" : ""}" data-name="${esc(p.name)}" style="--c:${p.c};--d:${i*0.05}s">
      <span class="tape" aria-hidden="true"></span>
      <div class="cover${p.cover ? " has-shot" : ""}">${p.cover ? `<img class="peek${p.cover.endsWith("|w") ? " wide" : ""}" src="img/p/${p.cover.split("|")[0].includes(".") ? p.cover.split("|")[0] : p.cover.split("|")[0] + ".webp"}" alt="" loading="lazy" decoding="async">` : ""}<span class="emo">${p.icon}</span><span class="kind-badge">${t[p.cat]}</span>${p.app ? `<span class="lock live">● live</span>` : p.repo || p.url || p.cat !== "own" ? "" : `<span class="lock">🔒 ${t.priv}</span>`}</div>
      <div class="card-body">
        <div class="meta"><span>${esc(c.kind)}</span>${p.team ? `<span>👥 ${p.team === 1 ? t.solo : p.team}</span>` : ""}</div>
        <h3>${esc(p.name)}</h3>
        <p class="one">${esc(c.one)}</p>
        <div class="tags">${p.tags.slice(0,4).map(x => `<span>${esc(x)}</span>`).join("")}</div>
        <div class="more">${t.details} <i>→</i></div>
      </div></button>`;
  }).join("");
  /* on phones "All" starts with the first 8 cards; the rest is one tap away, so the page below is reachable */
  const shown = $("#grid").children.length, folded = filter === "all" && !gridOpen && shown > 8;
  $("#grid").classList.toggle("folded", folded);
  $("#gridMore").hidden = !folded;
  $("#gridMore").innerHTML = `${t.gridMore(shown)} <i>↓</i>`;
}
/* language switch: same cards, new words; the cover images stay decoded instead of being rebuilt */
function relabelGrid(){
  const t = T[lang];
  $$("#grid .card").forEach(card => {
    const p = PROJECTS.find(x => x.name === card.dataset.name), c = p[lang];
    card.querySelector(".kind-badge").textContent = t[p.cat];
    const lock = card.querySelector(".lock:not(.live)"); if (lock) lock.textContent = "🔒 " + t.priv;
    card.querySelector(".meta").innerHTML = `<span>${esc(c.kind)}</span>${p.team ? `<span>👥 ${p.team === 1 ? t.solo : p.team}</span>` : ""}`;
    card.querySelector(".one").textContent = c.one;
    card.querySelector(".more").innerHTML = `${t.details} <i>→</i>`;
  });
  $("#gridMore").innerHTML = `${t.gridMore($("#grid").children.length)} <i>↓</i>`;
}
$("#gridMore").addEventListener("click", () => {
  gridOpen = true; SFX.play("click"); haptic(8);
  $$("#grid .card").forEach((c, i) => { if (i >= 8){ c.classList.add("enter"); c.style.setProperty("--d", ((i - 8) * 0.05) + "s"); } });
  $("#grid").classList.remove("folded"); $("#gridMore").hidden = true;
  $$("#grid .card")[8]?.focus({ preventScroll: true });
});

/* 3D tilt */
$("#grid").addEventListener("pointermove", e => {
  const card = e.target.closest(".card"); if (!card || e.pointerType !== "mouse") return;
  const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
  card.style.setProperty("--ry", ((x - .5) * 10) + "deg");
  card.style.setProperty("--rx", ((.5 - y) * 10) + "deg");
});
$("#grid").addEventListener("pointerout", e => {
  const card = e.target.closest(".card");
  if (card && !card.contains(e.relatedTarget)){ card.style.setProperty("--rx","0deg"); card.style.setProperty("--ry","0deg"); }
});
$("#grid").addEventListener("click", e => {
  const card = e.target.closest(".card"); if (!card) return;
  openCase(slugOf(PROJECTS.find(p => p.name === card.dataset.name)));
});

function openProject(p){
  const t = T[lang], c = p[lang];
  $("#mCover").style.background = `radial-gradient(circle at 50% 130%,${p.c},transparent 70%),#0b0b0c`;
  $("#mIcon").textContent = p.icon;
  $("#mKind").textContent = c.kind;
  $("#mTitle").textContent = p.name;
  $("#mDesc").textContent = c.desc;
  $("#mPts").innerHTML = c.pts.map(x => `<li>${esc(x)}</li>`).join("");
  $("#mTags").innerHTML = p.tags.map(x => `<span>${esc(x)}</span>`).join("");
  const teamTxt = p.team ? `👥 ${p.team === 1 ? t.solo : t.team + " " + p.team}` : "";
  $("#mFoot").innerHTML = p.repo
    ? `<span>🟢 Open source ${teamTxt}</span><a class="btn small primary" href="${p.repo}" target="_blank" rel="noopener">${t.code}</a>`
    : p.url ? `<span>${esc(p.org || "")} ${teamTxt}</span><a class="btn small primary" href="${p.url}" target="_blank" rel="noopener">${t.site}</a>`
    : `<span>${p.cat === "own" ? "🔒 " + t.privLong : esc(p.org || "")} ${teamTxt}</span>`;
  $("#modal").showModal();
}
$("#mClose").addEventListener("click", () => closeDialog($("#modal")));
["#modal","#eggs"].forEach(s => $(s).addEventListener("click", e => { if (e.target === $(s)) closeDialog($(s)); }));


/* ═══════════════════════════ trail / skills / races ═══════════════════════════ */
const observe = el => { if (typeof io !== "undefined") io.observe(el); };
function renderTrail(){
  const t = T[lang];
  $("#trailMap").innerHTML = TRAIL.map(c => {
    const L = c[lang];
    const title = c.link ? `<a href="${c.link}" target="_blank" rel="noopener">${esc(L.title)}</a>` : esc(L.title);
    const caseFor = n => /CLM/.test(n) ? "clm" : /HR/.test(n) ? "hr" : (PROJECTS.find(p => p.name === n) ? slugOf(PROJECTS.find(p => p.name === n)) : null);
    const items = (L.items || []).map(([e, n, d]) => { const cs = caseFor(n); return `<div${cs ? ` class="go" data-case="${cs}" tabindex="0" role="button"` : ""}><span class="e">${e}</span><span><b>${esc(n)}</b><small>${esc(d)}</small></span>${cs ? `<i class="arr">→</i>` : ""}</div>`; }).join("");
    const logo = c.pick ? `<button class="cp-logo pick" id="pickaxe" aria-label="AGH">⚒️</button>` : `<span class="cp-logo">${c.e}</span>`;
    return `<div class="cp reveal${c.now ? " now" : ""}${c.edu ? " edu" : ""}">
      <div class="cp-when">${c.when}${c.sub ? `<small>${c.sub}</small>` : ""}</div>
      <div class="cp-flag">${c.flag}</div>
      <div class="cp-card sketch">
        <div class="cp-top">${logo}<div><div class="cp-role">${esc(L.role)}</div><h3>${title}</h3></div><span class="cp-badge">${esc(L.badge)}</span></div>
        <p>${esc(L.desc)}</p>
        ${items ? `<div class="cp-sub">${items}</div>` : ""}
      </div></div>`;
  }).join("");
  $$("#trailMap .reveal").forEach(observe);
}

let skillMode = "all";
function renderSkills(){
  const nm = n => n.includes("|") ? n.split("|")[lang === "pl" ? 0 : 1] : n;
  $("#toolbox").innerHTML = SKILLS.map(g =>
    `<div class="tool-group sketch reveal"><h4><span>${g.e}</span>${esc(g[lang])}</h4><div class="chips">${g.s.map(([n, pro]) => `<span class="chip${pro ? " pro" : ""}">${esc(nm(n))}</span>`).join("")}</div></div>`).join("");
  $("#toolbox").classList.toggle("pro-only", skillMode === "pro");
  $$("#toolbox .reveal").forEach(observe);
  $("#spoken").innerHTML = SPOKEN.map(([f, n, lvl, w]) => `<div><span class="sp-n">${f}\u00a0${n[lang]}</span><span class="t"><span class="f" style="--w:${w};display:block"></span></span><b>${lvl[lang]}</b></div>`).join("");
  $("#certs").innerHTML = CERTS.map(([e, n, by]) => `<li><span class="seal">${e}</span><span>${esc(n[lang])}<small>${esc(by)}</small></span></li>`).join("");
}
$("#skillToggle").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  skillMode = b.dataset.mode;
  $$("#skillToggle button").forEach(x => x.classList.toggle("on", x === b));
  $("#toolbox").classList.toggle("pro-only", skillMode === "pro");
});

function renderMedals(){
  const t = T[lang];
  const pill = (e, v, l) => `<span>${e} <b>${v}</b>${l ? " " + l : ""}</span>`;
  $("#medals").innerHTML = `
    <div class="medal-card sketch reveal" data-sport="tri">
      <div class="medal"><div class="ribbon"></div><div class="disc"><span>🏊🚴🏃</span></div></div>
      <div class="year">2024</div><h3>Iron Dragon Triathlon</h3>
      <div class="disciplines"><span>🏊</span><i></i><span>🚴</span><i></i><span>🏃</span></div>
      <div class="stats-line">${pill("⏱","2:57:24")}${pill("🏁","126.",t.open)}${pill("👥","29/44","M14-29")}</div>
      <p>${t.medalTri}</p></div>
    <div class="medal-card sketch reveal" data-sport="mar">
      <div class="medal"><div class="ribbon"></div><div class="disc"><span>42</span></div></div>
      <div class="year">2023</div><h3>Cracovia Maraton</h3>
      <div class="km">3:59:43</div>
      <div class="stats-line">${pill("📏","42,195 km")}${pill("⚡","5:41","/km")}${pill("🏁","144.","M20")}</div>
      <p>${t.medalMar}</p></div>
    <div class="medal-card sketch reveal" data-sport="ult">
      <div class="medal"><div class="ribbon"></div><div class="disc"><span>💯</span></div></div>
      <div class="year">2026</div><h3>Łemkowyna Trail 100</h3>
      <div class="km">19:26:59</div>
      <svg class="ridge" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 38 L18 26 L30 31 L48 12 L62 22 L78 8 L96 24 L112 16 L130 30 L146 14 L160 20 L178 6 L200 28"/></svg>
      <div class="stats-line">${pill("📏","100 km")}${pill("🏁","133.",t.open)}${pill("💯","100.","M")}</div>
      <p>${t.medalUlt}</p></div>`;
  $$("#medals .reveal").forEach(observe);
}

/* hand-drawn race charts in SVG */
/* the chart's coordinate width follows its real width (300–520), so labels stay a readable size on a phone instead of shrinking with the viewBox */
let CW = 520; const CH = 240, PADL = 34, PADR = 14;
const xOf = (km, max) => PADL + km / max * (CW - PADL - PADR);
const chartW = svg => { const w = Math.round(svg.parentElement.clientWidth || 520); CW = Math.max(300, Math.min(520, w)); svg.setAttribute("viewBox", `0 0 ${CW} 250`); };
let raceW = 0;
addEventListener("resize", () => { const w = $("#marChart").parentElement.clientWidth; if (Math.abs(w - raceW) > 40){ raceW = w; renderMarathon(); renderUltra(); } }, { passive: true });
function renderMarathon(){
  chartW($("#marChart")); raceW = $("#marChart").parentElement.clientWidth;
  const sp = MARATHON.splits, pl = MARATHON.places, max = 42.195;
  const yP = v => 18 + (v - 1700) / (2650 - 1700) * 120;
  let g = `<line class="ax" x1="${PADL}" y1="226" x2="${CW - PADR}" y2="226"/>`;
  [5,10,15,20,25,30,35,40].filter(k => CW > 380 || k % 10 === 0).forEach(k => g += `<line class="grid" x1="${xOf(k,max)}" y1="10" x2="${xOf(k,max)}" y2="226"/><text class="lbl" x="${xOf(k,max)}" y="240" text-anchor="middle">${k}</text>`);
  for (let i = 1; i < sp.length; i++){
    const d = sp[i][0] - sp[i-1][0], pace = (toSec(sp[i][1]) - toSec(sp[i-1][1])) / d;
    const h = Math.max(4, (pace - 300) / 80 * 46), x0 = xOf(sp[i-1][0], max) + 2, w = xOf(sp[i][0], max) - x0 - 2;
    g += `<g class="hov"><rect class="rbar${pace > 345 ? " slow" : ""}" x="${x0}" y="${224 - h}" width="${w}" height="${h}" rx="3"/><text class="val${w < 40 ? " tipx" : ""}" x="${x0 + w / 2}" y="${218 - h}" text-anchor="middle">${fmtPace(pace)}</text></g>`;
  }
  const pts = pl.map(([k, v]) => [xOf(k, max), yP(v)]);
  const path = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  g += `<path class="area" d="${path} L ${pts.at(-1)[0]} 150 L ${pts[0][0]} 150 Z"/><path class="line" pathLength="1" d="${path}"/>`;
  pl.forEach(([k, v], i) => { const [x, y] = pts[i]; g += `<g class="hov"><circle class="pt" cx="${x}" cy="${y}" r="5" style="transition-delay:${.3 + i * .15}s"/><text class="val${i === 0 || i === pl.length - 1 ? "" : " tipx"}" x="${x}" y="${y - 11}" text-anchor="middle">${v}</text></g>`; });
  $("#marChart").innerHTML = g;
}
function renderUltra(){
  chartW($("#ultChart"));
  const sp = ULTRA.splits, max = 100, total = toSec(sp.at(-1)[1]);
  const yT = s => 150 - s / total * 128;
  let g = `<line class="ax" x1="${PADL}" y1="226" x2="${CW - PADR}" y2="226"/>`;
  let lastX = -99;
  sp.slice(1).forEach(([k]) => { const x = xOf(k, max); g += `<line class="grid" x1="${x}" y1="10" x2="${x}" y2="226"/>`; if (x - lastX > 30 || k === max){ g += `<text class="lbl" x="${x}" y="240" text-anchor="middle">${String(k).replace(".", lang === "pl" ? "," : ".")}</text>`; lastX = x; } });
  for (let i = 1; i < sp.length; i++){
    const d = sp[i][0] - sp[i-1][0], kmh = d / ((toSec(sp[i][1]) - toSec(sp[i-1][1])) / 3600);
    const h = kmh / 7 * 52, x0 = xOf(sp[i-1][0], max) + 2, w = xOf(sp[i][0], max) - x0 - 2;
    g += `<g class="hov"><rect class="rbar" x="${x0}" y="${224 - h}" width="${w}" height="${h}" rx="3" style="opacity:${.45 + kmh / 7 * .5}"/><text class="val${w < 34 ? " tipx" : ""}" x="${x0 + w / 2}" y="${218 - h}" text-anchor="middle">${kmh.toFixed(1).replace(".", lang === "pl" ? "," : ".")}</text></g>`;
  }
  const pts = sp.map(([k, tm]) => [xOf(k, max), yT(toSec(tm))]);
  const path = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  g += `<path class="area" d="${path} L ${pts.at(-1)[0]} 150 Z"/><path class="line" pathLength="1" d="${path}"/>`;
  sp.slice(1).forEach(([k, tm], i) => { const [x, y] = pts[i + 1]; g += `<g class="hov"><circle class="pt" cx="${x}" cy="${y}" r="5" style="transition-delay:${.3 + i * .15}s"/><text class="val${i === 0 || i === sp.length - 2 ? "" : " tipx"}" x="${x - 6}" y="${y - 10}" text-anchor="end">${fmtHM(toSec(tm))}</text></g>`; });
  $("#ultChart").innerHTML = g;
}
function renderTri(){
  $("#triDots").innerHTML = Array.from({ length: 44 }, (_, i) => `<i style="--i:${i}"${i === 28 ? ' class="me"' : ""}></i>`).join("");
}

/* ═══════════════════════════ charts ═══════════════════════════ */
const C = 2 * Math.PI * 60;
function buildDonut(){
  let cum = 0;
  $("#donut").innerHTML = LANGS.map((l, i) => {
    const len = Math.max(0, l.v / 100 * C - 4);
    const s = `<circle cx="80" cy="80" r="60" style="stroke:var(${l.c})" stroke-dasharray="0 ${C}" stroke-dashoffset="${-cum}" data-len="${len}" data-i="${i}"/>`;
    cum += l.v / 100 * C;
    return s;
  }).join("");
}
const animateDonut = () => $$("#donut circle").forEach((c, i) => setTimeout(() => c.setAttribute("stroke-dasharray", `${c.dataset.len} ${C}`), i * 140));
const langName = l => l.n === "*other" ? T[lang].other : l.n;
function renderLegend(){
  $("#legend").innerHTML = LANGS.map((l, i) =>
    `<li data-i="${i}"><i style="background:var(${l.c})"></i>${langName(l)}<b>${l.v.toLocaleString(lang, {minimumFractionDigits:1})}%</b></li>`).join("");
}
function hotLang(i){
  $$("#donut circle").forEach(c => { c.classList.toggle("dim", i !== null && +c.dataset.i !== i); c.classList.toggle("hot", +c.dataset.i === i); });
  if (i === null){ $("#donutVal").textContent = LANG_COUNT; $("#donutLbl").textContent = T[lang].langsCenter; }
  else { $("#donutVal").textContent = Math.round(LANGS[i].v) + "%"; $("#donutLbl").textContent = langName(LANGS[i]); }
}
$("#langPanel").addEventListener("pointerover", e => { const el = e.target.closest("[data-i]"); hotLang(el ? +el.dataset.i : null); });
$("#langPanel").addEventListener("pointerleave", () => hotLang(null));

let vw = innerWidth; addEventListener("resize", () => { vw = innerWidth; }, { passive: true });
const barH = () => vw < 520 ? 150 : 190;
function renderBars(){
  const max = Math.max(...COMMITS_MONTHLY), t = T[lang], BH = barH();
  $("#bars").innerHTML = COMMITS_MONTHLY.map((v, i) => {
    const h = Math.round(v / max * BH);
    return `<div class="bar-col${v === max ? " peak" : ""}" style="--h:${h}px;--d:${i*0.06}s" tabindex="0"><span class="tip"><b>${v}</b> ${t.months[i]}</span><div class="b" data-h="${h}"></div><span class="m">${t.months[i]}</span></div>`;
  }).join("");
  if ($("#commitPanel").classList.contains("in")) animateBars();
}
const animateBars = () => $$("#bars .b").forEach(b => b.style.height = b.dataset.h + "px");
function renderHBars(){
  const max = COMMITS_PROJECT[0][2];
  $("#hbars").innerHTML = COMMITS_PROJECT.map(([ic, n, v], i) =>
    `<div class="hb"><span>${ic} ${n}</span><div class="t"><div class="f" data-w="${v/max*100}" style="--d:${i*0.08}s"></div></div><b>${v}</b></div>`).join("");
  if ($("#projPanel").classList.contains("in")) animateHBars();
}
const animateHBars = () => $$("#hbars .f").forEach(f => f.style.width = f.dataset.w + "%");

function countUp(el){
  const target = +el.dataset.count, dec = +(el.dataset.dec || 0), t0 = performance.now(), dur = 1700;
  (function step(t){
    const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = (target * e).toLocaleString(lang === "pl" ? "pl-PL" : "en-US", { minimumFractionDigits:dec, maximumFractionDigits:dec });
    if (k < 1) requestAnimationFrame(step);
  })(t0);
}

/* ═══════════════════════════ reveal ═══════════════════════════ */
const onReveal = { langPanel: animateDonut, commitPanel: animateBars, projPanel: animateHBars };
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  const el = en.target;
  el.classList.add("in");
  if (onReveal[el.id]) onReveal[el.id]();
  if (el.classList.contains("stats")) $$(".stats .num[data-count]").forEach(countUp);
  if (el.classList.contains("travel-stats")) $$(".travel-stats [data-count]").forEach(countUp);
  io.unobserve(el);
}), { threshold: .18 });
$$(".reveal").forEach((el, i) => { el.style.setProperty("--d", ((i % 3) * 0.08) + "s"); io.observe(el); });

const navIO = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) $$("nav a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => navIO.observe(s));

/* ═══════════════════════════ hero ═══════════════════════════ */
let heroStarted = false, typerTimer, thoughtTimer, thoughtIdx = 0;

function startHero(){
  if (heroStarted) return;
  heroStarted = true;
  $("#hero").classList.add("ready");
  $("#scribble").classList.add("go");
  setTimeout(() => $("#scribble").classList.add("written"), 2400);
  [0, 750, 1500].forEach(d => setTimeout(() => tapHead(false), d + 250));
  setTimeout(() => { restartTyper(); showThought(true); }, 2300);
}

function restartTyper(){
  clearTimeout(typerTimer);
  const roles = T[lang].roles, el = $("#typed");
  let ri = 0, ci = 0, del = false;
  (function tick(){
    const w = roles[ri];
    el.textContent = w.slice(0, ci);
    if (!del && ci === w.length){ del = true; typerTimer = setTimeout(tick, 1600); return; }
    if (del && ci === 0){ del = false; ri = (ri + 1) % roles.length; }
    ci += del ? -1 : 1;
    typerTimer = setTimeout(tick, del ? 40 : 85);
  })();
}

function showThought(restart, text){
  const el = $("#thought"), list = T[lang].thoughts;
  clearTimeout(thoughtTimer);
  const swap = () => {
    /* restart the entry animation on the next frame instead of forcing a layout with offsetWidth */
    el.classList.remove("out", "in");
    el.textContent = text || list[thoughtIdx % list.length];
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("in")));
    if (!text) thoughtIdx++;
    thoughtTimer = setTimeout(() => showThought(false), text ? 2600 : 2800);
  };
  if (restart || !el.textContent){ swap(); return; }
  el.classList.remove("in"); el.classList.add("out");
  setTimeout(swap, 280);
}
$("#cloud").addEventListener("click", () => {
  showThought(false);
  const [x, y] = center($("#cloud"));
  burst(x, y, ["✨","💡","✦"], { count: 8, speed: [3, 8], gravity: .05, life: 900, size: [12, 20] });
});

/* head: Pooh's "think, think, think". The headline itself answers, no second copy on top of it */
let thinking = false;
function thinkMoment(){
  if (thinking) return; thinking = true;
  const words = $$("#scribble .w"), cloud = $("#cloud"), head = $("#head");
  $("#scribble").classList.add("written");
  words.forEach((w, i) => setTimeout(() => {
    replay(w, "hop");
    SFX.play("note", 5 + i * 2); haptic(10);
  }, i * 220));
  setTimeout(() => {
    cloud.classList.add("lit"); head.classList.add("eureka");
    showThought(false, T[lang].gotIt);
    SFX.play("chime"); haptic([12, 40, 24]);
    const [cx, cy] = center(cloud);
    burst(cx, cy, ["✨", "✦", "⭐"], { count: 16, speed: [4, 9], gravity: .04, life: 1300, size: [12, 20] });
    const [hx, hy] = center(head);
    burst(hx, hy - 70, ["💡"], { count: 1, spread: 0, angle: -90, speed: [3, 3], gravity: -.02, life: 1400, size: [40, 40] });
    unlock("think");
  }, 760);
  setTimeout(() => { cloud.classList.remove("lit"); head.classList.remove("eureka"); words.forEach(w => w.classList.remove("hop")); thinking = false; }, 3200);
}
let headTaps = [];
function tapHead(user){
  const h = $("#head");
  replay(h, "tap");
  if (user){ SFX.play("knock"); haptic(14); }
  const k = document.createElement("span");
  k.className = "knock"; k.textContent = T[lang].knock;
  k.style.left = (50 + (Math.random() * 40 - 20)) + "%"; k.style.top = "62%";
  $(".mind-art").appendChild(k); setTimeout(() => k.remove(), 800);
  if (!user) return;
  const [x, y] = center(h);
  burst(x, y - 40, ["💡"], { count: 2, spread: 40, speed: [6, 10], gravity: .12, life: 900, size: [16, 24] });
  const now = Date.now();
  headTaps = headTaps.filter(t => now - t < 1800).concat(now);
  if (headTaps.length >= 3){
    headTaps = [];
    thinkMoment();
  }
}
$("#head").addEventListener("click", () => tapHead(true));

/* ═══════════════════════════ neurons canvas ═══════════════════════════ */
(function neurons(){
  const cv = $("#neurons"), ctx = cv.getContext("2d");
  let W = 0, H = 0, nodes = [], sparks = [], mouse = { x: -9999, y: -9999 }, visible = true, raf;
  const LINK = 130;
  const touch = matchMedia("(pointer:coarse)").matches;
  let lastT = 0;
  function resize(){
    const dpr = touch ? 1 : Math.min(2, devicePixelRatio || 1);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = touch ? Math.max(18, Math.min(30, Math.round(W * H / 14000))) : Math.max(26, Math.min(95, Math.round(W * H / 15000)));
    nodes = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: .8 + Math.random() * 1.8, glow: 0 }));
  }
  function frame(t){
    if (touch && t && t - lastT < 31){ if (visible && !document.hidden) raf = requestAnimationFrame(frame); return; }
    lastT = t || 0;
    ctx.clearRect(0, 0, W, H);
    for (const n of nodes){
      const dx = mouse.x - n.x, dy = mouse.y - n.y, d2 = dx * dx + dy * dy;
      if (d2 < 200 * 200){ n.vx += dx * .00003; n.vy += dy * .00003; }
      n.vx *= .995; n.vy *= .995;
      if (Math.abs(n.vx) < .05) n.vx += (Math.random() - .5) * .04;
      if (Math.abs(n.vy) < .05) n.vy += (Math.random() - .5) * .04;
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      n.glow *= .94;
    }
    for (let i = 0; i < nodes.length; i++){
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++){
        const b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
        if (d < LINK){
          ctx.strokeStyle = `rgba(255,212,59,${(1 - d / LINK) * (.16 + Math.max(a.glow, b.glow) * .6)})`;
          ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (md < 170){
        ctx.strokeStyle = `rgba(255,212,59,${(1 - md / 170) * .5})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
    for (const n of nodes){
      ctx.fillStyle = `rgba(255,212,59,${.45 + n.glow * .55})`;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r + n.glow * 3, 0, 7); ctx.fill();
    }
    sparks = sparks.filter(s => s.r < s.max);
    for (const s of sparks){
      s.r += 6;
      ctx.strokeStyle = `rgba(255,212,59,${1 - s.r / s.max})`; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.stroke();
      for (const n of nodes){ const d = Math.hypot(n.x - s.x, n.y - s.y); if (Math.abs(d - s.r) < 10) n.glow = 1; }
    }
    if (visible && !document.hidden) raf = requestAnimationFrame(frame);
  }
  const start = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); };
  resize();
  if (reduced){ frame(); visible = false; }
  else start();
  addEventListener("resize", () => { resize(); if (reduced) frame(); });
  const hero = $("#hero");
  hero.addEventListener("pointermove", e => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
  hero.addEventListener("click", e => {
    if (e.target.closest("a,button")) return;
    const r = cv.getBoundingClientRect();
    sparks.push({ x: e.clientX - r.left, y: e.clientY - r.top, r: 0, max: 320 });
  });
  new IntersectionObserver(([en]) => { visible = en.isIntersecting && !reduced; if (visible) start(); }).observe(hero);
  document.addEventListener("visibilitychange", () => { if (!document.hidden && visible) start(); });
})();

/* ═══════════════════════════ mind playground ═══════════════════════════ */
const pg = $("#playground");
let bubbles = [], pgW = 0, pgH = 0, pgVisible = false, pgRaf, pgFloor = 0, pgAsleep = false, pgCalm = 0;
/* the caption's height is read only when it can change, never per frame (a per-frame read forces layout) */
const measureFloor = () => { pgFloor = pgH - ($("#caption").offsetHeight + 34); };
/* the loop sleeps once every bubble is at rest; any touch, pointer, tilt or resize wakes it */
function wakeBubbles(){
  if (!pgVisible || !pgAsleep) return;
  pgAsleep = false; pgCalm = 0; pg.classList.remove("rest");
  cancelAnimationFrame(pgRaf); pgRaf = requestAnimationFrame(stepBubbles);
}
function setCaption(html, flash){
  $("#captionTxt").innerHTML = html;
  if (flash){ const c = $("#caption"); replay(c, "flash"); }
  if (pgVisible) requestAnimationFrame(() => { measureFloor(); wakeBubbles(); });
}
function labelBubbles(){
  bubbles.forEach(b => { b.el.querySelector(".bl").textContent = b.d[lang][0]; });
}
function buildBubbles(){
  pgW = pg.clientWidth; pgH = pg.clientHeight;
  const scale = Math.max(.72, Math.min(1.35, pgW / 1000));
  bubbles.forEach(b => b.el.remove());
  bubbles = BUBBLES.map((d, i) => {
    const r = d.r * scale, el = document.createElement("div");
    el.className = "bubble" + (d.mini ? " mini" : "");
    el.style.width = el.style.height = (r * 2) + "px";
    el.style.setProperty("--r", r + "px");
    el.innerHTML = `<span class="be">${d.e}</span><span class="bl"></span>`;
    pg.appendChild(el);
    const a = i / BUBBLES.length * Math.PI * 2;
    const b = { el, d, r, x: pgW / 2 + Math.cos(a) * pgW * .3 + (Math.random() - .5) * 40, y: pgH / 2 + Math.sin(a) * pgH * .28, vx: (Math.random() - .5) * 2, vy: (Math.random() - .5) * 2, drag: false, gone: false };
    bindBubble(b);
    return b;
  });
  labelBubbles();
  measureFloor();
  placeBubbles();
}
function placeBubbles(){ for (const b of bubbles) b.el.style.transform = `translate(${b.x - b.r}px,${b.y - b.r}px)`; }
function stepBubbles(){
  const cx = pgW / 2, cy = pgH / 2 - 20, pad = 16;
  for (const b of bubbles){
    if (b.drag || b.gone) continue;
    b.vx += (cx - b.x) * .00007 * (tilt.on ? .2 : 1); b.vy += (cy - b.y) * .00009 * (tilt.on ? .2 : 1);
    if (tilt.on){ b.vx += tilt.x * .18; b.vy += tilt.y * .18; }
    if (pgPointer.on){
      const dx = b.x - pgPointer.x, dy = b.y - pgPointer.y, d = Math.hypot(dx, dy), R = b.r + 90;
      if (d < R && d > 0.1){ const f = (1 - d / R) * 1.1; b.vx += dx / d * f; b.vy += dy / d * f; }
    }
    b.vx += (Math.random() - .5) * .04; b.vy += (Math.random() - .5) * .04;
    b.vx *= .985; b.vy *= .985;
    b.x += b.vx; b.y += b.vy;
    if (b.x < b.r + pad){ b.x = b.r + pad; b.vx = Math.abs(b.vx) * .8; }
    if (b.x > pgW - b.r - pad){ b.x = pgW - b.r - pad; b.vx = -Math.abs(b.vx) * .8; }
    if (b.y < b.r + pad){ b.y = b.r + pad; b.vy = Math.abs(b.vy) * .8; }
    if (b.y > pgH - b.r - pad){ b.y = pgH - b.r - pad; b.vy = -Math.abs(b.vy) * .8; }
  }
  for (let i = 0; i < bubbles.length; i++){
    const a = bubbles[i]; if (a.gone) continue;
    for (let j = i + 1; j < bubbles.length; j++){
      const b = bubbles[j]; if (b.gone) continue;
      const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || .01, min = a.r + b.r + 16;
      if (d < min){
        const nx = dx / d, ny = dy / d, push = (min - d) / 2;
        const wa = a.drag ? 0 : (b.drag ? 2 : 1), wb = b.drag ? 0 : (a.drag ? 2 : 1);
        a.x -= nx * push * wa; a.y -= ny * push * wa; b.x += nx * push * wb; b.y += ny * push * wb;
        const rel = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
        if (rel < 0){
          if (rel < -2.5 && pgVisible) bubbleBump(-rel);
          const imp = rel * .9;
          if (!a.drag){ a.vx += imp * nx; a.vy += imp * ny; }
          if (!b.drag){ b.vx -= imp * nx; b.vy -= imp * ny; }
        }
      }
    }
  }
  let fastest = 0, held = false;
  for (const b of bubbles){
    b.x = Math.max(b.r + 8, Math.min(pgW - b.r - 8, b.x));
    b.y = Math.max(b.r + 8, Math.min((b.drag ? pgH - 8 : pgFloor) - b.r, b.y));
    if (b.drag) held = true; else if (!b.gone) fastest = Math.max(fastest, Math.abs(b.vx) + Math.abs(b.vy));
  }
  placeBubbles();
  pgCalm = !held && !pgPointer.on && !tilt.on && fastest < .25 ? pgCalm + 1 : 0;
  if (pgCalm > 90){ pgAsleep = true; pg.classList.add("rest"); return; }
  if (pgVisible) pgRaf = requestAnimationFrame(stepBubbles);
}
function bindBubble(b){
  let sx, sy, lx, ly, lt, moved;
  b.el.addEventListener("pointerdown", e => {
    e.preventDefault(); wakeBubbles();
    b.el.setPointerCapture(e.pointerId);
    b.drag = true; moved = 0; b.el.classList.add("drag"); haptic(6);
    const r = pg.getBoundingClientRect();
    sx = lx = e.clientX - r.left; sy = ly = e.clientY - r.top; lt = performance.now();
  });
  b.el.addEventListener("pointermove", e => {
    if (!b.drag) return;
    const r = pg.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top, now = performance.now(), dt = Math.max(8, now - lt);
    moved = Math.max(moved, Math.hypot(x - sx, y - sy));
    b.vx = (x - lx) / dt * 16; b.vy = (y - ly) / dt * 16;
    b.x = Math.max(b.r, Math.min(pgW - b.r, x)); b.y = Math.max(b.r, Math.min(pgH - b.r, y));
    lx = x; ly = y; lt = now;
  });
  const end = () => {
    if (!b.drag) return;
    b.drag = false; b.el.classList.remove("drag");
    const sp = Math.hypot(b.vx, b.vy); if (sp > 24){ b.vx *= 24 / sp; b.vy *= 24 / sp; }
    if (moved < 6) clickBubble(b);
  };
  b.el.addEventListener("pointerup", end);
  b.el.addEventListener("pointercancel", end);
  b.el.addEventListener("dblclick", () => popBubble(b));
}

let popcornClicks = 0;
const DICE = ["⚀","⚁","⚂","⚃","⚄","⚅"];
const rollOne = () => Math.random() < 1/3 ? 6 : 1 + Math.floor(Math.random() * 5);
function clickBubble(b){
  const d = b.d, L = d[lang], [x, y] = center(b.el);
  SFX.play("pop", b.r / 50); haptic(10);
  b.vx += (Math.random() - .5) * 6; b.vy -= 4;
  if (d.act === "dice"){
    const a = rollOne(), c = rollOne(); SFX.play("rattle");
    setCaption(`<b>${L[0]}</b> ${DICE[a-1]} ${DICE[c-1]} = ${a + c}${a === 6 && c === 6 ? " 🎉" : ""}`, true);
    burst(x, y, ["🎲"], { count: 3, speed: [5, 9], size: [16, 24] });
    if (a === 6 && c === 6){ burst(x, y, ["🎲","✨","🎉"], { count: 22 }); unlock("dice"); }
    return;
  }
  if (d.act === "popcorn"){
    popcornClicks++;
    burst(x, y, ["🍿"], { count: 2 + Math.min(popcornClicks, 6), spread: 60, speed: [5, 10], size: [14, 22] });
    if (popcornClicks >= 10){
      popcornClicks = 0;
      burst(x, y, ["🍿","🍿","🎬","⭐"], { count: 36, speed: [8, 20] });
      toast("🍿", T[lang].popcorn, "🎬", 3000);
      unlock("popcorn");
    }
  }
  if (d.act === "sparkle") burst(x, y, ["✨","⭐","✦","🏰"], { count: 16, speed: [4, 10], gravity: .08 });
  if (d.act === "hunny"){ hunny(); return; }
  setCaption(`<b>${esc(L[0])}</b> ${esc(L[1])}`, true);
}
function popBubble(b){
  if (b.gone) return;
  const [x, y] = center(b.el);
  b.gone = true; b.el.classList.add("gone"); SFX.play("pop", .6); haptic([8, 30, 8]);
  burst(x, y, ["💧","✨","🫧"], { count: 14, speed: [4, 10], gravity: .15, size: [12, 20] });
  setCaption(T[lang].popped, true);
  unlock("pop");
  setTimeout(() => { b.x = pgW / 2; b.y = b.r + 20; b.vx = (Math.random() - .5) * 4; b.vy = 2; b.gone = false; b.el.classList.remove("gone"); wakeBubbles(); }, 1600);
}
new IntersectionObserver(([en]) => {
  pgVisible = en.isIntersecting && !reduced;
  pg.classList.toggle("live", en.isIntersecting);
  if (pgVisible){ pgAsleep = false; pgCalm = 0; pg.classList.remove("rest"); measureFloor(); cancelAnimationFrame(pgRaf); pgRaf = requestAnimationFrame(stepBubbles); }
}).observe(pg);
let pgResize;
addEventListener("resize", () => { clearTimeout(pgResize); pgResize = setTimeout(() => { if (Math.abs(pg.clientWidth - pgW) > 40) buildBubbles(); else { pgW = pg.clientWidth; pgH = pg.clientHeight; measureFloor(); } wakeBubbles(); }, 200); });


/* ═══════════════════════════ travel map ═══════════════════════════ */
/* One entry per country visited. `geo` = Natural Earth name; `clip` limits the highlight to the
   region actually visited (Scotland, Crete), so the map, chips and tooltips always agree. */
const TRAVEL = [
  { key:"Poland", geo:"Poland", flag:"🇵🇱", pl:"Polska", en:"Poland", npl:"dom", nen:"home", cont:"eu" },
  { key:"Norway", geo:"Norway", flag:"🇳🇴", pl:"Norwegia", en:"Norway", at:[8.5,61], cont:"eu" },
  { key:"Sweden", geo:"Sweden", flag:"🇸🇪", pl:"Szwecja", en:"Sweden", at:[15,61.5], cont:"eu" },
  { key:"Denmark", geo:"Denmark", flag:"🇩🇰", pl:"Dania", en:"Denmark", cont:"eu" },
  { key:"Estonia", geo:"Estonia", flag:"🇪🇪", pl:"Estonia", en:"Estonia", cont:"eu" },
  { key:"Scotland", geo:"United Kingdom", flag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿", pl:"Szkocja", en:"Scotland", npl:"Wielka Brytania", nen:"United Kingdom", at:[-4.2,56.9], cont:"eu",
    clip:[[-9,54.6],[-5.2,54.6],[-3.4,54.95],[-3.05,55.05],[-2.6,55.2],[-2.2,55.6],[-2.03,55.81],[2,56.2],[2,61.5],[-9,61.5],[-9,54.6]] },
  { key:"Germany", geo:"Germany", flag:"🇩🇪", pl:"Niemcy", en:"Germany", cont:"eu" },
  { key:"Czechia", geo:"Czechia", flag:"🇨🇿", pl:"Czechy", en:"Czechia", cont:"eu" },
  { key:"Slovakia", geo:"Slovakia", flag:"🇸🇰", pl:"Słowacja", en:"Slovakia", cont:"eu" },
  { key:"Austria", geo:"Austria", flag:"🇦🇹", pl:"Austria", en:"Austria", cont:"eu" },
  { key:"Hungary", geo:"Hungary", flag:"🇭🇺", pl:"Węgry", en:"Hungary", cont:"eu" },
  { key:"Croatia", geo:"Croatia", flag:"🇭🇷", pl:"Chorwacja", en:"Croatia", at:[16,44.5], cont:"eu" },
  { key:"Romania", geo:"Romania", flag:"🇷🇴", pl:"Rumunia", en:"Romania", cont:"eu" },
  { key:"Bulgaria", geo:"Bulgaria", flag:"🇧🇬", pl:"Bułgaria", en:"Bulgaria", cont:"eu" },
  { key:"Ukraine", geo:"Ukraine", flag:"🇺🇦", pl:"Ukraina", en:"Ukraine", cont:"eu" },
  { key:"Italy", geo:"Italy", flag:"🇮🇹", pl:"Włochy", en:"Italy", npl:"z Sycylią", nen:"incl. Sicily", at:[12.5,42.5], cont:"eu" },
  { key:"Crete", geo:"Greece", flag:"🇬🇷", pl:"Kreta", en:"Crete", npl:"Grecja", nen:"Greece", at:[24.9,35.25], cont:"eu",
    clip:[[23.2,34.6],[26.6,34.6],[26.6,35.8],[23.2,35.8],[23.2,34.6]] },
  { key:"France", geo:"France", flag:"🇫🇷", pl:"Francja", en:"France", at:[2.5,46.6], cont:"eu",
    clip:[[-6,41],[10,41],[10,51.5],[-6,51.5],[-6,41]] },
  { key:"Spain", geo:"Spain", flag:"🇪🇸", pl:"Hiszpania", en:"Spain", at:[-3.7,40.2], cont:"eu" },
  { key:"Portugal", geo:"Portugal", flag:"🇵🇹", pl:"Portugalia", en:"Portugal", cont:"eu" },
  { key:"Georgia", geo:"Georgia", flag:"🇬🇪", pl:"Gruzja", en:"Georgia", cont:"as" },
  { key:"UAE", geo:"United Arab Emirates", flag:"🇦🇪", pl:"ZEA", en:"UAE", cont:"as" },
  { key:"Thailand", geo:"Thailand", flag:"🇹🇭", pl:"Tajlandia", en:"Thailand", at:[100.5,15], cont:"as" },
  { key:"Laos", geo:"Laos", flag:"🇱🇦", pl:"Laos", en:"Laos", cont:"as" }
];
const PLANNED = { key:"Morocco", geo:"Morocco", flag:"🇲🇦", pl:"Maroko", en:"Morocco", npl:"w planie", nen:"planned", at:[-6.5,31.8], cont:"af", plan:true };
const ALL_PLACES = [...TRAVEL, PLANNED];
const BY_KEY = new Map(ALL_PLACES.map(c => [c.key, c]));
const WORLD_TOTAL = 195;
const CONTINENTS = [["eu","🏰",44,{pl:"Europa",en:"Europe"}],["as","🏯",48,{pl:"Azja",en:"Asia"}],["af","🐪",54,{pl:"Afryka",en:"Africa"}],["na","🗽",23,{pl:"Ameryka Płn.",en:"N. America"}],["sa","🦙",12,{pl:"Ameryka Płd.",en:"S. America"}],["oc","🦘",14,{pl:"Oceania",en:"Oceania"}]];
const HOME = [19.94, 50.06];
let mapState = null, mapZoom = "all";
const tName = c => c[lang];
const tNote = c => lang === "pl" ? c.npl : c.nen;
const loadScript = src => new Promise(res => { const sc = document.createElement("script"); sc.src = src; sc.onload = res; sc.onerror = res; document.head.appendChild(sc); });
const whenLibs = () => (window.d3 && window.topojson) ? Promise.resolve() : loadScript("https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js").then(() => loadScript("https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js"));
const _whenLibsPoll = () => new Promise(res => { const t0 = Date.now(); (function wait(){ if ((window.d3 && window.topojson) || Date.now() - t0 > 12000) return res(); setTimeout(wait, 100); })(); });
const clipPoly = c => ({ type: "Polygon", coordinates: [c.clip.slice().reverse()] });

async function buildMap(){
  await whenLibs();
  if (!window.d3 || !window.topojson){ $("#mapLoading").textContent = "🗺️ offline"; return; }
  let topo;
  try { topo = await (await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json")).json(); }
  catch(e){ $("#mapLoading").textContent = "🗺️ offline"; return; }
  const feats = topojson.feature(topo, topo.objects.countries).features.filter(f => f.properties.name !== "Antarctica");
  const byName = new Map(feats.map(f => [f.properties.name, f]));
  const wr = $("#mapWrap"), W = 1000, H = Math.round(1000 * wr.clientHeight / Math.max(1, wr.clientWidth)) || 560;
  const svg = d3.select("#worldMap").attr("viewBox", `0 0 ${W} ${H}`).attr("preserveAspectRatio", "xMidYMid meet");
  const defs = svg.append("defs");
  const g = svg.append("g").attr("class", "zoomg");
  const sphere = g.append("path").attr("class", "sphere");
  const grat = g.append("path").attr("class", "graticule");
  const base = g.append("g"), visitedL = g.append("g"), arcs = g.append("g"), pins = g.append("g");
  base.selectAll("path").data(feats).join("path").attr("class", f => "land" + (f.properties.name === PLANNED.geo ? " planned" : "")).attr("data-name", f => f.properties.name === PLANNED.geo ? PLANNED.key : null);
  ALL_PLACES.filter(c => !c.plan).forEach(c => {
    const f = byName.get(c.geo); if (!f) return;
    const p = visitedL.append("path").datum(f).attr("class", "land visited" + (c.key === "Poland" ? " home" : "")).attr("data-name", c.key);
    if (c.clip){ const id = "clip-" + c.key; defs.append("clipPath").attr("id", id).append("path").attr("class", "clipp").datum(clipPoly(c)); p.attr("clip-path", `url(#${id})`); }
  });
  mapState = { svg, g, defs, sphere, grat, base, visitedL, arcs, pins, byName, feats, W, H, proj: null, path: null, k: 1 };

  /* zoom & pan: buttons, ctrl/⌘ + wheel, drag; on touch one finger scrolls the page until zoomed in */
  const zoom = d3.zoom().scaleExtent([1, 14]).translateExtent([[-W * .2, -H * .2], [W * 1.2, H * 1.2]])
    .filter(e => e.type === "wheel" ? (e.ctrlKey || e.metaKey) : e.type === "dblclick" ? false : (e.touches ? (mapState.k > 1 || e.touches.length > 1) : !e.button))
    .on("zoom", e => { mapState.k = e.transform.k; scalePins(); g.attr("transform", e.transform); svg.node().style.touchAction = e.transform.k > 1 ? "none" : "pan-y"; g.attr("data-k", e.transform.k > 1.05 ? "in" : "out"); });
  svg.call(zoom); mapState.zoom = zoom;
  svg.on("wheel.hint", e => { if (!(e.ctrlKey || e.metaKey)) flashHint(); }, { passive: true });
  $("#zIn").onclick = () => SFX.play("toggle", true) || svg.transition().duration(450).call(zoom.scaleBy, 1.6);
  $("#zOut").onclick = () => SFX.play("toggle", false) || svg.transition().duration(450).call(zoom.scaleBy, 1 / 1.6);
  $("#zReset").onclick = () => { stopTour(); hideCard(); hotCountry(null); svg.transition().duration(700).ease(d3.easeCubicInOut).call(zoom.transform, d3.zoomIdentity); };

  fitMap(false);
  $("#mapLoading").classList.add("gone");
  new IntersectionObserver(([en]) => { const n = svg.node(); if (!n.pauseAnimations) return; en.isIntersecting ? n.unpauseAnimations() : n.pauseAnimations(); }).observe(svg.node());
  animateCount();

  const tip = $("#mapTip"), wrap = $("#mapWrap");
  const showTip = (key, at) => {
    const c = BY_KEY.get(key);
    if (!c){ tip.classList.remove("on"); return; }
    const r = wrap.getBoundingClientRect();
    tip.innerHTML = `<b>${c.flag} ${esc(tName(c))}</b>${esc(tNote(c) || "")}`;
    tip.style.left = (at.clientX - r.left) + "px"; tip.style.top = (at.clientY - r.top) + "px";
    tip.classList.add("on");
  };
  const anchorClient = c => {
    const a = anchor(c); if (!a) return null;
    const pt = svg.node().createSVGPoint(); pt.x = a[0]; pt.y = a[1];
    const q = pt.matrixTransform(g.node().getScreenCTM()); return { clientX: q.x, clientY: q.y };
  };
  /* hit-test geometrically: Safari reports the <svg> as the target for filtered shapes */
  const keyAt = e => {
    const own = e.target.dataset && e.target.dataset.name;
    if (own && BY_KEY.has(own)) return own;
    const pt = svg.node().createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
    const p = pt.matrixTransform(g.node().getScreenCTM().inverse());
    const ll = mapState.proj.invert([p.x, p.y]); if (!ll) return null;
    const hit = ALL_PLACES.find(c => { const f = byName.get(c.geo); return f && d3.geoContains(f, ll) && (!c.clip || d3.geoContains(clipPoly(c), ll)); });
    return hit ? hit.key : null;
  };
  svg.on("pointermove", e => { if (e.pointerType !== "mouse" || e.buttons) return; const k = keyAt(e); if (k) showTip(k, anchorClient(BY_KEY.get(k)) || e); else tip.classList.remove("on"); hotCountry(k); });
  svg.on("pointerleave", e => { if (e.pointerType !== "mouse") return; tip.classList.remove("on"); hotCountry(null); });
  let tipTimer, down = null, lastTap = 0;
  const tap = e => {
    const now = performance.now(); if (now - lastTap < 400) return; lastTap = now;
    const k = keyAt(e); if (!k) return;
    if (k === "Poland") homeTap();
    stopTour();
    if (k === PLANNED.key) nextStop();
    tip.classList.remove("on");
    flyTo(k);
  };
  mapState.showTip = showTip; mapState.anchorClient = anchorClient;
  svg.on("pointerdown.tap", e => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; stopTour(); });
  svg.on("pointerup.tap", e => { if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) < 8 && performance.now() - down.t < 600) tap(e); down = null; });
  svg.on("click.tap", e => { if (e.detail) tap(e); });
}

/* keep markers a constant size on screen while the map zooms */
const PIN_R = { vdot: 2.6, "home-dot": 5, "home-ring": 5, tdot: 4, landing: 6 };
function scalePins(){
  const st = mapState; if (!st) return;
  const k = st.k || 1;
  st.pins.selectAll("circle").each(function(){ const b = PIN_R[this.getAttribute("class")]; if (b) this.setAttribute("r", b / Math.pow(k, .85)); });
  st.pins.selectAll("text.pin").style("font-size", (this_ => null)).each(function(){ this.style.fontSize = ((this.classList.contains("flight") ? 22 : 16) / Math.pow(k, .9)) + "px"; });
}
function anchor(c){
  const { byName, proj, path } = mapState;
  if (c.at) return proj(c.at);
  const f = byName.get(c.geo); return f ? path.centroid(f) : null;
}
function fitMap(animate){
  const st = mapState, { W, H, g } = st;
  const world = mapZoom === "all";
  const narrow = innerWidth < 600;
  st.proj = world ? d3.geoNaturalEarth1() : d3.geoMercator();
  if (world) st.proj.fitExtent([[10, 10], [W - 10, H - 10]], { type: "Sphere" });
  else {
    const [[x0, y0], [x1, y1]] = narrow ? [[-10, 30], [34, 66]] : [[-12, 27], [44, 70]];
    st.proj.fitExtent([[14, 14], [W - 14, H - 14]], { type: "MultiPoint", coordinates: [[x0, y0], [x1, y1], [x0, y1], [x1, y0]] });
  }
  st.path = d3.geoPath(st.proj);
  const draw = () => {
    st.sphere.attr("d", world ? st.path({ type: "Sphere" }) : null);
    st.grat.attr("d", st.path(d3.geoGraticule10()));
    st.base.selectAll("path").attr("d", st.path);
    st.visitedL.selectAll("path").attr("d", st.path);
    st.defs.selectAll("path.clipp").attr("d", st.path);
    const home = st.proj(HOME);
    const arc = to => { const [x, y] = to, mx = (home[0] + x) / 2, my = (home[1] + y) / 2, d = Math.hypot(x - home[0], y - home[1]); return `M${home[0]},${home[1]} Q${mx},${my - d * .3} ${x},${y}`; };
    const list = TRAVEL.slice(1).map(c => [c, anchor(c)]).filter(x => x[1]);
    st.arcFor = {}; list.forEach(([c, a]) => st.arcFor[c.key] = arc(a));
    st.arcs.selectAll("path.arc:not(.plan)").data(list).join("path").attr("class", "arc").attr("pathLength", 1).attr("data-name", d => d[0].key).attr("d", d => arc(d[1])).style("transition-delay", (d, i) => (i * 0.05) + "s");
    const pa = anchor(PLANNED); st.arcFor[PLANNED.key] = arc(pa);
    st.arcs.selectAll("path.plan").data([pa]).join("path").attr("class", "arc plan").attr("pathLength", 1).attr("d", arc(pa));
    st.pins.selectAll("*").remove();
    list.forEach(([c, a], i) => st.pins.append("circle").attr("class", "vdot").attr("cx", a[0]).attr("cy", a[1]).attr("r", 2.6).style("animation-delay", (0.6 + i * 0.05) + "s"));
    st.pins.append("circle").attr("class", "home-ring").attr("cx", home[0]).attr("cy", home[1]).attr("r", 5);
    st.pins.append("circle").attr("class", "home-dot").attr("cx", home[0]).attr("cy", home[1]).attr("r", 5);
    const plane = st.pins.append("text").attr("class", "pin").attr("text-anchor", "middle").attr("dy", ".35em").text("✈️");
    scalePins();
    plane.append("animateMotion").attr("dur", "4s").attr("repeatCount", "indefinite").attr("rotate", "auto").attr("path", arc(pa));
  };
  st.svg.call(st.zoom.transform, d3.zoomIdentity);
  if (!animate){ draw(); return; }
  const p = $("#mapPanel"), wrap = $("#mapWrap");
  wrap.classList.add("switching");
  setTimeout(() => { draw(); p.classList.remove("drawn"); void p.offsetWidth; wrap.classList.remove("switching"); requestAnimationFrame(() => p.classList.add("drawn")); }, 260);
}
let pinnedKey = null;
function hotCountry(key, pin){
  if (!mapState) return;
  if (pin !== undefined) pinnedKey = pin ? key : null;
  if (!key && pinnedKey) key = pinnedKey;
  mapState.pins.selectAll(".tdot").remove();
  const d = key && mapState.arcFor && mapState.arcFor[key];
  if (d){ const dot = mapState.pins.append("circle").attr("class", "tdot").attr("r", 4 / Math.pow(mapState.k || 1, .85)); dot.append("animateMotion").attr("dur", "1.3s").attr("repeatCount", "indefinite").attr("path", d); }
  mapState.visitedL.selectAll("path").classed("hot", function(){ return key && this.dataset.name === key; });
  mapState.base.selectAll("path.planned").classed("hot", key === PLANNED.key);
  mapState.arcs.selectAll("path").classed("hot", function(){ return key && this.dataset.name === key; });
  $$(".cchip").forEach(c => c.classList.toggle("hot", c.dataset.name === key));
}
function animateCount(){
  const fg = $(".mc-fg"); if (fg) requestAnimationFrame(() => fg.style.strokeDasharray = `${TRAVEL.length / WORLD_TOTAL * 100} 100`);
}
let hintTimer;
function flashHint(){ const h = $("#mapHint"); h.classList.add("on"); clearTimeout(hintTimer); hintTimer = setTimeout(() => h.classList.remove("on"), 1600); }
function renderCountryChips(){
  const chip = c => `<button class="cchip${c.plan ? " plan" : ""}" data-name="${c.key}">${c.flag} ${esc(tName(c))}${tNote(c) ? ` <small>${esc(tNote(c))}</small>` : ""}</button>`;
  $("#countryChips").innerHTML = ALL_PLACES.map(chip).join("");
  $("#continents").innerHTML = CONTINENTS.map(([id, e, total, name]) => {
    const n = TRAVEL.filter(c => c.cont === id).length, planned = PLANNED.cont === id;
    return `<button class="cont${n ? " got" : ""}" data-c="${id}"><span class="ce">${e}</span><span class="cn">${esc(name[lang])}</span><b>${n}<small>/${total}</small></b><i style="--w:${Math.max(n ? 4 : 0, n / total * 100)}%"></i>${planned ? `<em>+1 ${lang === "pl" ? "w planie" : "planned"}</em>` : ""}</button>`;
  }).join("");
}
$("#countryChips").addEventListener("pointerover", e => { const c = e.target.closest(".cchip"); hotCountry(c ? c.dataset.name : null); });
$("#countryChips").addEventListener("pointerleave", () => hotCountry(null));
$("#countryChips").addEventListener("pointerover", e => { const c = e.target.closest(".cchip"); if (c && mapState && mapState.anchorClient){ const at = mapState.anchorClient(BY_KEY.get(c.dataset.name)); if (at) mapState.showTip(c.dataset.name, at); } });
$("#countryChips").addEventListener("pointerleave", () => $("#mapTip").classList.remove("on"));
$("#countryChips").addEventListener("click", e => {
  const c = e.target.closest(".cchip"); if (!c) return;
  stopTour();
  if (c.dataset.name === PLANNED.key) nextStop();
  flyTo(c.dataset.name);
  const m = $("#mapWrap").getBoundingClientRect();
  if (m.top < 0 || m.bottom > innerHeight) (typeof smoothTo === "function" ? smoothTo($("#mapWrap"), -90) : $("#mapWrap").scrollIntoView({ behavior: "smooth" }));
});
function switchZoom(z){
  if (z === mapZoom) return false;
  mapZoom = z;
  if (mapState) fitMap(true);
  return true;
}


/* fly to a country: zoom in, send the plane, pin it, show its card */
const CONT_BOX = { eu:[[-12,34],[45,71]], as:[[25,-10],[150,60]], af:[[-20,-36],[52,38]], na:[[-170,7],[-50,75]], sa:[[-82,-56],[-34,13]], oc:[[110,-48],[180,0]] };
function zoomToBounds([[x0, y0], [x1, y1]], maxK = 6, fill = .42, dur = 1200){
  const st = mapState, dx = Math.max(1, x1 - x0), dy = Math.max(1, y1 - y0), cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  const k = Math.max(1, Math.min(maxK, fill / Math.max(dx / st.W, dy / st.H)));
  st.svg.transition().duration(dur).ease(d3.easeCubicInOut).call(st.zoom.transform, d3.zoomIdentity.translate(st.W / 2 - k * cx, st.H / 2 - k * cy).scale(k));
}
function flyTo(key){
  const st = mapState; if (!st) return;
  const c = BY_KEY.get(key); if (!c) return;
  if (c.cont !== "eu" && mapZoom === "europe"){ switchZoom("all"); setTimeout(() => flyTo(key), 560); return; }
  const f = st.byName.get(c.geo); if (!f) return;
  zoomToBounds(st.path.bounds(c.clip ? clipPoly(c) : f), 9, .38);
  hotCountry(key, true);
  flyPlane(key);
  showCard(key);
}
function flyPlane(key){
  const st = mapState, d = st.arcFor && st.arcFor[key]; if (!d) return;
  st.pins.selectAll(".flight").remove();
  const plane = st.pins.append("text").attr("class", "pin flight").attr("text-anchor", "middle").attr("dy", ".35em").text("✈️");
  const am = plane.append("animateMotion").attr("dur", "1.15s").attr("fill", "freeze").attr("rotate", "auto").attr("begin", "indefinite").attr("path", d).attr("keySplines", ".4 0 .2 1").attr("keyTimes", "0;1").attr("calcMode", "spline");
  am.node().beginElement(); SFX.play("whoosh"); scalePins();
  const a = anchor(BY_KEY.get(key));
  setTimeout(() => {
    plane.remove();
    if (!a) return;
    SFX.play("land"); haptic(12);
    st.pins.append("circle").attr("class", "landing").attr("cx", a[0]).attr("cy", a[1]).attr("r", 6 / Math.pow(st.k || 1, .85)).on("animationend", function(){ this.remove(); });
  }, 1150);
}
let cardIdx = -1;
function showCard(key){
  const c = BY_KEY.get(key); if (!c) return;
  cardIdx = ALL_PLACES.indexOf(c);
  const cont = CONTINENTS.find(x => x[0] === c.cont);
  const card = $("#mapCard");
  card.querySelector(".mcf").textContent = c.flag;
  card.querySelector("b").textContent = tName(c);
  card.querySelector("small").textContent = [tNote(c), cont && cont[3][lang]].filter(Boolean).join(" · ");
  card.querySelector(".mci").textContent = `${cardIdx + 1}/${ALL_PLACES.length}`;
  replay(card, "on");
}
function hideCard(){ $("#mapCard").classList.remove("on"); cardIdx = -1; }
$("#mapCard").addEventListener("click", e => {
  const b = e.target.closest("[data-d]"); if (!b) return;
  stopTour();
  const n = ALL_PLACES[(cardIdx + +b.dataset.d + ALL_PLACES.length) % ALL_PLACES.length];
  flyTo(n.key);
});
let tourTimer = null;
function startTour(){
  stopTour();
  $("#tourBtn").classList.add("on"); $("#tourBtn").innerHTML = "⏸︎ " + esc(T[lang].tvTourStop);
  let i = Math.max(0, cardIdx);
  const step = () => { flyTo(ALL_PLACES[i % ALL_PLACES.length].key); i++; tourTimer = setTimeout(step, 2600); };
  step();
}
function stopTour(){
  if (!tourTimer && !$("#tourBtn").classList.contains("on")) return;
  clearTimeout(tourTimer); tourTimer = null;
  $("#tourBtn").classList.remove("on"); $("#tourBtn").innerHTML = "▶︎ " + esc(T[lang].tvTour);
}
$("#tourBtn").addEventListener("click", () => tourTimer ? stopTour() : startTour());
$("#continents").addEventListener("click", e => {
  const t = e.target.closest(".cont"); if (!t || !mapState) return;
  stopTour(); hideCard(); hotCountry(null, false);
  const id = t.dataset.c;
  const go = () => {
    zoomToBounds(mapState.path.bounds({ type: "MultiPoint", coordinates: [CONT_BOX[id][0], CONT_BOX[id][1], [CONT_BOX[id][0][0], CONT_BOX[id][1][1]], [CONT_BOX[id][1][0], CONT_BOX[id][0][1]]] }), 4, .9);
    mapState.visitedL.selectAll("path").classed("wave", false);
    mapState.visitedL.selectAll("path").filter(function(){ const c = BY_KEY.get(this.dataset.name); return c && c.cont === id; }).each(function(_, i){ const el = this; setTimeout(() => { el.classList.add("wave"); setTimeout(() => el.classList.remove("wave"), 900); }, i * 70); });
  };
  if (id !== "eu" && switchZoom("all")) setTimeout(go, 560); else go();
  $$(".cont").forEach(x => x.classList.toggle("sel", x === t));
});

function nextStop(){
  const row = document.createElement("div");
  row.className = "caravan"; row.textContent = "🐪 🐫 🐪   🌴";
  document.body.appendChild(row);
  row.animate([{ transform:`translateX(${innerWidth + 40}px)` }, { transform:"translateX(-420px)" }], { duration: 4200, easing: "linear" }).onfinish = () => row.remove();
  banner(`🇲🇦 ${T[lang].tvBanner}<small>${T[lang].tvBannerSub}</small>`, 2800);
  unlock("morocco");
}
$("#nextStop").addEventListener("click", nextStop);
$("#copyMail").addEventListener("click", async e => {
  try { await navigator.clipboard.writeText("bartosz.jat@gmail.com"); } catch(err){ location.href = "mailto:bartosz.jat@gmail.com"; return; }
  const [x, y] = center(e.currentTarget);
  burst(x, y, ["✉️","✨","💛"], { count: 12, speed: [4, 9], gravity: .12, size: [14, 22] });
  toast("✉️", T[lang].copied, T[lang].copiedSub, 2600);
});
$("#gqLink").addEventListener("click", () => openCase("globequest"));
new IntersectionObserver(([en], obs) => {
  if (!en.isIntersecting) return;
  obs.disconnect();
  buildMap().then(() => { if (mapState) setTimeout(() => $("#mapPanel").classList.add("drawn"), 300); });
}, { rootMargin: "300px" }).observe($("#mapPanel"));

/* ═══════════════════════════ project case studies ═══════════════════════════ */
const SLUGS = { "Mentalio":"mentalio","Scholario":"scholario","Comarch Loyalty Management":"clm","HR System":"hr","Inquisitio":"inquisitio","GlobeQuest":"globequest","JournAI":"journai","JTCJ":"skladomat","Kwit":"kwit","PatoBox":"patobox","OfficeFlow":"officeflow","Randkomat":"randkomat","GarminReport":"garminreport","FireRisk":"firerisk","CarControl":"carcontrol","Wolność dla łapek":"lapki","QoS w SDN":"qos","Domowy alarm":"alarm","Movie Analyzer":"movies" };
const slugOf = p => SLUGS[p.name] || p.name.toLowerCase();
/* warm the screenshots as soon as a finger or cursor lands on a card, so opening never waits on decoding */
const warmed = new Set();
function warmCase(slug){
  if (warmed.has(slug)) return; warmed.add(slug);
  ((CASE[slug] || {}).shots || []).forEach(sh => { const im = new Image(); im.decoding = "async"; im.src = `img/p/${sh.f.includes(".") ? sh.f : sh.f + ".webp"}`; im.decode && im.decode().catch(() => {}); });
}
document.addEventListener("pointerdown", e => { const c = e.target.closest(".card"); if (c) warmCase(slugOf(PROJECTS.find(p => p.name === c.dataset.name))); }, { passive: true, capture: true });
document.addEventListener("pointerover", e => { const c = e.target.closest && e.target.closest(".card"); if (c && e.pointerType === "mouse") warmCase(slugOf(PROJECTS.find(p => p.name === c.dataset.name))); }, { passive: true });
/* shots: [file, kind, caption pl, caption en]; flow: [emoji, pl, en] */
const S = (f, k, pl, en) => ({ f, k, pl, en });
const F = (e, pl, en) => ({ e, pl, en });
/* nums: value, unit, label pl, label en */
const N = (v, u, pl, en) => ({ v, u, pl, en });
const CASE = {
  mentalio:{ nums:[N(4,"","role uczestników: badany, opiekun, profesjonalista, lekarz","participant roles: subject, carer, professional, doctor"),N(13,"–21","wiek badanych","age of subjects"),N(2,"","kody: badanie i kwestionariusz","codes: exam and questionnaire")],
    shots:[S("mentalio-app-1","desktop","Panel jednostki: badania w trakcie i zakończone","The unit dashboard: exams in progress and done"),S("mentalio-app-4","phone","Badany wpisuje kod badania i kwestionariusza","The subject enters exam and questionnaire codes"),S("mentalio-app-2","desktop","Kto wypełnia: badany, opiekun, profesjonalista, lekarz","Who fills it in: subject, carer, professional, doctor"),S("mentalio-app-5","phone","Urządzenie trafia do osoby badanej","The device goes to the person being examined"),S("mentalio-app-3","desktop","Kody do przekazania i wydruku","Codes to share and print"),S("mentalio-app-6","phone","AI patrzy też na sposób odpowiadania","AI also looks at how you answer"),S("mentalio-1","desktop","Strona produktu","The product site")],
    flow:[F("👨‍👩‍👧","Rodzic i dziecko wypełniają kwestionariusz","Parent and child fill in a questionnaire"),F("🧠","AI analizuje odpowiedzi","AI analyses the answers"),F("🩺","Specjalista dostaje wskazówki","The specialist gets insights"),F("🌱","Terapia szyta na miarę","Therapy that fits")] },
  scholario:{ nums:[N(1,"","krótka refleksja dziennie","short reflection a day"),N(3,"","grupy wsparcia: nauczyciel, psycholog, pedagog","support roles: teacher, psychologist, counsellor"),N(5,"","partnerów, m.in. UNICEF Polska","partners, incl. UNICEF Poland")],
    shots:[S("scholario-app-1","phone","Scholario: Twoje połączenie z klasą","Scholario: your connection with the class"),S("scholario-app-2","desktop","Wyniki klasy na wykresie radarowym","Class results on a radar chart"),S("scholario-app-3","phone","Krótki puls: jedno pytanie, jeden tap","A quick pulse: one question, one tap"),S("scholario-app-4","desktop","Wyniki ankiety: obszar po obszarze","Survey results, area by area"),S("scholario-app-5","desktop","Trend klasy przez cały semestr","The class trend across a semester"),S("scholario-app-6","desktop","Skrzynka narzędzi: materiały dla uczniów","Toolbox: materials for students"),S("scholario-app-7","desktop","Partnerzy, w tym Mentalio i UNICEF Polska","Partners, including Mentalio and UNICEF Poland"),S("scholario-1","desktop","Strona produktu","The product site")],
    flow:[F("🧒","Uczeń: krótka refleksja","Student: a short reflection"),F("📊","Analiza na bieżąco","Instant analysis"),F("🧑‍🏫","Zespół szkolny reaguje","The school team responds"),F("💛","Uczeń czuje się zauważony","The student feels seen")] },
  clm:{ shots:[S("clm-1.svg","art","Ilustracja: od tankowania do punktów","Illustration: from a fill-up to points"),S("clm-2.svg","art","Ilustracja: dwa wdrożenia, dwa stosy","Illustration: two rollouts, two stacks")],
    nums:[N(6,"","rynków","markets"),N(2,"","klientów: BP i SASOL","clients: BP and SASOL"),N(5,"","osób w zespole","people on the team"),N(2,"","lata","years")],
    flow:[F("⛽","Klient na stacji","A customer at the station"),F("⭐","Punkty i nagrody","Points and rewards"),F("⚙️","Backend CLM: Java + Spring","CLM backend: Java + Spring"),F("🌍","BP i SASOL na 6 rynkach","BP and SASOL in 6 markets")] },
  hr:{ nums:[N(3,"","osoby w zespole","people on the team"),N(3,"","miesiące stażu","months of internship"),N(2,"","warstwy: Angular i Spring","layers: Angular and Spring")],
    flow:[F("🖥️","Interfejs w Angularze","Angular UI"),F("🔌","REST API w Spring Boot","Spring Boot REST API"),F("🗄️","PostgreSQL + Flyway","PostgreSQL + Flyway"),F("👥","Zespół 3 osób, full stack","3-person team, full stack")] },
  inquisitio:{ nums:[N(7,"","typów pytań","question types"),N(3,"","widoki edytora","editor views"),N(6,"","aplikacji w monorepo","apps in the monorepo"),N(751,"","commitów","commits")],
    shots:[S("inquisitio-1","phone","Respondent: ekran startowy","Respondent: the start screen"),S("inquisitio-2","desktop","Edytor, widok Historia: cała ścieżka z rozgałęzieniem","Editor, Story view: the whole path with its branch"),S("inquisitio-3","phone","Wielokrotny wybór i sortowanie","Multiple choice and ranking"),S("inquisitio-4","desktop","Widok Budowa: karty pytań i ich ustawienia","Build view: question cards and their settings"),S("inquisitio-5","phone","Strona, która pojawia się tylko po „Tak”","A page that appears only after “Yes”"),S("inquisitio-6","desktop","Przepływ: reguła „Gdy Q6 = Tak” na mapie","Flow: the “If Q6 = Yes” rule on the map"),S("inquisitio-7","phone","Tarcza priorytetów, data i skala","A priority target, a date and a scale"),S("inquisitio-8","desktop","Podgląd 1:1 i dokąd prowadzi każda odpowiedź","1:1 preview and where each answer leads"),S("inquisitio-9","desktop","Odpowiedź w module zbierania","A response in the collection module"),S("inquisitio-10","phone","Podsumowanie odpowiedzi przed zapisem","Answer summary before saving")],
    flow:[F("✏️","Edytor kwestionariusza","Questionnaire editor"),F("👀","Podgląd 1:1","1:1 preview"),F("🔗","Link dla respondenta","A link for the respondent"),F("📱","Ekran po ekranie","Screen by screen"),F("📊","Odpowiedzi i eksport","Responses and export")] },
  globequest:{ nums:[N(367,"","regionów do zamalowania","regions to paint"),N(16,"","trybów quizu","quiz modes"),N(316,"kB","granice całego świata","borders of the whole world"),N(500,"","commitów","commits")],
    shots:[S("globequest-3","phone","Europa zamalowana regionami","Europe, painted region by region"),S("globequest-1","desktop","Moja mapa: 25 z 367 regionów, Maroko w planach","My map: 25 of 367 regions, Morocco planned"),S("globequest-4","phone","Dossier kraju: kurs, pogoda, czas, sąsiedzi","Country dossier: rates, weather, time, neighbours"),S("globequest-5","phone","Perełki w okolicy, jedna karta naraz","Nearby gems, one card at a time"),S("globequest-6","phone","Moje wyniki: 21 gier, 66% celności","My stats: 21 games, 66% accuracy"),S("globequest-7","phone","Dobra odpowiedź i ciekawostka o kraju","Right answer, plus a fact about the country"),S("globequest-8","phone","Gablota odznak","Badge cabinet"),S("globequest-2","desktop","Ekran powitalny","Welcome screen")],
    flow:[F("🗺️","Zamaluj, gdzie byłeś","Paint where you've been"),F("🧭","Dossier kraju","Country dossier"),F("✨","Perełki w okolicy","Nearby gems"),F("✈️","Zaplanuj trasę","Plan a route"),F("⏳","Kapsuła czasu","Time Capsule"),F("🧩","Quiz i odznaki","Quiz and badges")] },
  journai:{ nums:[N(51,"","ekranów","screens"),N(664,"","pliki testów","test files"),N(544,"","commity","commits"),N(0,"zł","kosztów utrzymania","running cost")],
    shots:[S("journai-1","phone","Rano: czy dzień idzie zgodnie z planem","Morning: is the day on plan"),S("journai-2","desktop","Panel zdrowia na komputerze","The health dashboard on desktop"),S("journai-3","phone","Ja: wynik 59 przy normie 50","Me: a score of 59 against a norm of 50"),S("journai-4","phone","Ostatnia noc: 8 godz. 8 min, wynik 96","Last night: 8 h 8 min, score 96"),S("journai-5","phone","Stres dziś, minuta po minucie","Today's stress, minute by minute"),S("journai-6","phone","Plan tygodnia, który omija ból","A weekly plan that works around pain"),S("journai-7","phone","Codzienny check-in: przesuń kartę","Daily check-in: swipe the card"),S("journai-8","phone","Podsumowanie roku: 309 dni pomiarów","Year in review: 309 days measured")],
    flow:[F("⌚","Garmin Connect","Garmin Connect"),F("🔌","Serwer MCP","MCP server"),F("🗄️","PostgreSQL","PostgreSQL"),F("📈","Analityka wobec Twojej normy","Analytics against your norm"),F("💬","Komentarz AI bez zmyślonych liczb","AI commentary, no made-up numbers")] },
  skladomat:{ nums:[N(150,"ms","do wyniku wyszukiwania","to a search result"),N(2,"","kliknięcia do dziennika","taps to log"),N(75,"","plików testów","test files"),N(134,"","commity","commits")],
    shots:[S("jtcj-1","phone","Dzień: 1935 kcal i makro","The day: 1935 kcal and macros"),S("jtcj-2","phone","Zdanie zamienione w produkty, a pyta tylko o niejasne","A sentence turned into foods, asking only about the unclear"),S("jtcj-3","phone","Posiłek rozpisany na składniki","A meal broken into ingredients"),S("jtcj-4","phone","Szukaj: soczewica, ocena 98","Search: lentils, score 98"),S("jtcj-5","phone","Ocena składu z uzasadnieniem","The score, explained"),S("jtcj-6","phone","Witaminy i minerały wobec normy UE","Vitamins and minerals vs EU reference"),S("jtcj-7","phone","Analiza tygodnia: skąd energia","The week: where energy comes from"),S("jtcj-8","phone","Spożycie dzień po dniu","Intake, day by day"),S("skladomat-6","desktop","Na komputerze","On desktop")],
    flow:[F("💬","Napisz albo powiedz, co zjadłeś","Type or say what you ate"),F("🔎","Rozpoznaje produkty i ilości","Recognises foods and amounts"),F("🔬","Skład, ocena i witaminy","Ingredients, score, vitamins"),F("📊","Analiza tygodni","Weekly analysis")] },
  kwit:{ nums:[N(3,"","formaty: CSV, XLSX, PDF","formats: CSV, XLSX, PDF"),N(6,"","widoków analizy","analysis views"),N(0,"","serwerów","servers"),N(118,"","commitów","commits")],
    shots:[S("kwit-1","phone","Wyciąg CSV: wszystko rozpoznane","CSV statement: all recognised"),S("kwit-2","phone","Pulpit: pół roku wydatków","Dashboard: half a year of spending"),S("kwit-3","phone","Kiedy wydajesz i wydatki w czasie","When you spend, and spending over time"),S("kwit-4","phone","Warto wiedzieć: do odzyskania","Good to know: money to win back"),S("kwit-5","phone","Koperty i przekroczenia","Envelopes and overruns"),S("kwit-6","phone","Dokąd to zmierza i typowy dzień","Where it's heading, and a typical day"),S("kwit-7","phone","Ciekawostki z Twoich wydatków","Trivia from your spending"),S("kwit-8","phone","Portfel inwestycyjny","Investment portfolio")],
    flow:[F("🏦","Wyciąg CSV, XLSX albo PDF","CSV, XLSX or PDF statement"),F("🔍","Rozpoznaje sam","Recognised automatically"),F("🏷️","Kategorie i zachcianki","Categories and impulses"),F("📊","Wnioski i plan","Insights and a plan"),F("🔒","Wszystko zostaje na urządzeniu","Everything stays on device")] },
  patobox:{ nums:[N(49,"","trybów","modes"),N(5,"","dużych gier","bigger games"),N(15,"","minigier","minigames"),N(20,"s","do dołączenia","to join")],
    shots:[S("patobox-1","desktop","Karykatura: poczekalnia z kodem i graczami","Caricature: the lobby with a code and players"),S("patobox-2","phone","Gospodarz wybiera, w co gramy","The host picks what to play"),S("patobox-3","phone","Coś większego: Party, mapa, golf","Something bigger: Party, map, golf"),S("patobox-4","desktop","Pokaz trybu: Opis na GG","Mode intro: a GG status"),S("patobox-5","desktop","Za co punkty, a obok prowadzący","How to score, with the hosts"),S("patobox-6","desktop","Głosujcie na najlepszą recenzję","Vote for the best review"),S("patobox-7","desktop","Wyniki rundy","Round results"),S("patobox-8","desktop","Drugi wygląd: Neon","The other look: Neon")],
    flow:[F("📺","Telewizor pokazuje kod","The TV shows a code"),F("📱","Telefony dołączają","Phones join in"),F("🎲","Gospodarz wybiera tryby","The host picks modes"),F("✍️","Najgłupsze odpowiedzi","The silliest answers"),F("🗳️","Głosowanie i wyniki","Voting and results")] },
  officeflow:{ nums:[N(2,"","kroki do zgłoszenia","steps to a request"),N(4,"","role w aplikacji","roles in the app"),N(51,"","plików testów","test files"),N(37,"","commitów","commits")],
    shots:[S("officeflow-1","phone","4 zgłoszenia czekają na decyzję","4 requests await a decision"),S("officeflow-8","desktop","Lista i szczegóły obok siebie","List and details side by side"),S("officeflow-2","phone","Propozycja: Fresh Office, tak było ostatnio","Suggestion: Fresh Office, as last time"),S("officeflow-3","phone","Koordynator firmy: zlecenie do przyjęcia","Vendor coordinator: an order to accept"),S("officeflow-4","phone","Kalendarz stałych usług","Recurring services calendar"),S("officeflow-5","phone","Reguły, które robią za Ciebie","Rules that do it for you"),S("officeflow-6","phone","Zobacz aplikację jako: 4 role","See the app as: 4 roles"),S("officeflow-7","phone","Firmy i ludzie w biurze","Vendors and people in the office")],
    flow:[F("🙋","Zgłoszenie w 2 krokach","A request in 2 steps"),F("💡","Propozycja: kto i kiedy","Suggestion: who and when"),F("👩‍💼","Office manager zatwierdza","The office manager approves"),F("🏢","Firma przyjmuje zlecenie","The vendor accepts the order"),F("📅","Kalendarz usług","Service calendar")] },
  randkomat:{ nums:[N(4,"","kliknięcia, by zaprosić","taps to invite"),N(1,"","by odpowiedzieć","to answer"),N(14,"","sposobów otwarcia karteczki","ways to open a card"),N(3,"","zależności w produkcji","production dependencies")],
    shots:[S("randkomat-1","phone","Kim jesteś: nick, nastrój, kolor","Who you are: nick, mood, colour"),S("randkomat-2","phone","Kogo porywamy: dla kogo, kiedy, gdzie","Who we're stealing: for whom, when, where"),S("randkomat-3","phone","Tak to zobaczy druga osoba","What the other person sees"),S("randkomat-4","phone","Trzecie „nie” i ostatnia szansa","The third “no” and a last chance"),S("randkomat-5","phone","Po „tak”: szczegóły i termin","After “yes”: details and time"),S("randkomat-6","phone","Karteczka na zwykły dzień albo okazję","A card for any day or occasion"),S("randkomat-7","phone","Urodzinowa: zdmuchnij świeczki palcem","Birthday: blow out the candles"),S("randkomat-8","phone","Tęsknię: dojedź łyżwami do flagi","Miss you: skate to the flag")],
    flow:[F("🥚","Nick, nastrój, kolor","Nick, mood, colour"),F("💌","Zaproszenie w 4 kliknięciach","An invite in 4 taps"),F("🔗","Link dla jednej osoby","A link for one person"),F("👉","Przesuń w prawo, jeśli tak","Swipe right for yes"),F("🎉","Odsłona szczegółów","Details revealed")] },
  garminreport:{ shots:[S("garminreport-1.svg","art","Ilustracja: od komendy do raportu dla AI","Illustration: from one command to a report for AI")],
    nums:[N(1,"","komenda","command"),N(2147,"","linii w jednym raporcie","lines in one report"),N(8,"","rozdziałów, od instrukcji dla AI po korelacje","sections, from AI instructions to correlations"),N(25,"","commitów","commits")],
    flow:[F("⌚","Garmin Connect","Garmin Connect"),F("🧮","ACWR, HRV, dług snu","ACWR, HRV, sleep debt"),F("📝","Raport Markdown","Markdown report"),F("🤖","Analiza z AI","AI analysis")] },
  firerisk:{ shots:[S("firerisk-1","fig","Zdjęcie, prawdziwa maska i predykcja sieci","Image, ground truth and the prediction"),S("firerisk-2","fig","IoU rośnie do 0,70 w 25 epokach","IoU climbs to 0.70 in 25 epochs"),S("firerisk-3","fig","Macierz pomyłek dla 5 klas","Confusion matrix for 5 classes"),S("firerisk-4","fig","Zdjęcie lotnicze i jego maska","An aerial image and its mask"),S("firerisk-5","fig","Kafel 256×256 i maska do treningu","A 256×256 tile and its training mask")],
    nums:[N("0.70","","IoU na walidacji","validation IoU"),N(5,"","klas terenu","land classes"),N(256,"px","kafelki","tiles"),N(25,"","epok treningu","training epochs")],
    flow:[F("🛰️","Zdjęcie lotnicze","Aerial image"),F("✂️","Kafelki 256×256","256×256 tiles"),F("🧠","U-Net + ResNet34","U-Net + ResNet34"),F("🗺️","Mapa 5 klas","A 5-class map"),F("🔥","Strefy ryzyka","Risk zones")] },
  carcontrol:{ shots:[S("carcontrol-1","phone","Panel główny: szyby, komputer, światła","Main panel: windows, computer, lights"),S("carcontrol-4","fig","Schemat: Arduino, MCP2515 i gniazdo OBD","Wiring: Arduino, MCP2515 and the OBD port"),S("carcontrol-2","phone","Logowanie","Sign-in"),S("carcontrol-3","phone","Parowanie przez Bluetooth","Bluetooth pairing")],
    nums:[N(4,"","moduły auta pod kontrolą","car modules controlled"),N(2,"","urządzenia: telefon i Arduino","devices: phone and Arduino"),N(1,"","magistrala CAN","CAN bus")],
    flow:[F("📱","Aplikacja Android","Android app"),F("📶","Bluetooth HC-05","HC-05 Bluetooth"),F("🔌","Arduino + MCP2515","Arduino + MCP2515"),F("🚗","Magistrala CAN auta","The car's CAN bus")] },
  lapki:{ nums:[N(8,"","osób w zespole","people on the team")],
    flow:[F("🐾","Przedmiot na aukcję","An item for auction"),F("💸","Licytacja","Bidding"),F("❤️","Dochód na cel","Proceeds to charity")] },
  qos:{ nums:[N(5,"","osób w zespole","people on the team")],
    flow:[F("📦","Ruch w sieci","Network traffic"),F("🎛️","Sterownik Floodlight","Floodlight controller"),F("🚦","Priorytety QoS","QoS priorities"),F("🖧","Sieć w Mininecie","A Mininet network")] },
  alarm:{ nums:[N(7,"","osób w zespole","people on the team")],
    flow:[F("🚪","Czujniki","Sensors"),F("🔌","Arduino","Arduino"),F("🗄️","MySQL","MySQL"),F("📱","Aplikacja Android","Android app")] },
  movies:{ nums:[N(500,"","filmów z rankingu","films from the ranking")],
    flow:[F("🎬","Filmweb Top 500","Filmweb Top 500"),F("🕸️","Scraping","Scraping"),F("🧮","Analiza w R","Analysis in R"),F("📊","Wykresy","Charts")] }
};

let caseIdx = -1;
const caseList = () => PROJECTS;
function openCase(slug, push = true){
  const list = caseList(), i = list.findIndex(p => slugOf(p) === slug);
  if (i < 0) return;
  caseIdx = i;
  const p = list[i], c = p[lang], t = T[lang], data = CASE[slug] || {};
  const d = $("#case");
  d.style.setProperty("--c", p.c);
  $("#caseHero").style.setProperty("--c", p.c);
  $("#chEmoji").textContent = p.icon;
  $("#chKind").textContent = c.kind;
  $("#chTitle").textContent = p.name;
  $("#chOne").textContent = c.desc;
  const meta = [t[p.cat], p.org, p.team ? (p.team === 1 ? "👤 " + t.solo : "👥 " + t.team + " " + p.team) : null].filter(Boolean);
  $("#chMeta").innerHTML = meta.map(m => `<span>${esc(m)}</span>`).join("");
  $("#chActions").innerHTML = [p.app ? `<a class="btn primary" href="${p.app}" target="_blank" rel="noopener">${t.openApp}</a>` : "", p.url ? `<a class="btn primary" href="${p.url}" target="_blank" rel="noopener">${t.site}</a>` : "", p.repo ? `<a class="btn ${p.url || p.app ? "ghost" : "primary"}" href="${p.repo}" target="_blank" rel="noopener">${t.code}</a>` : "", !p.app && !p.url && !p.repo && p.cat === "own" ? `<span class="ch-lock">🔒 ${t.privLong}</span>` : ""].join("");
  const heroEls = $$("#caseHero .ch-text > *, #chEmoji");
  heroEls.forEach(el => el.classList.remove("reveal-in"));
  requestAnimationFrame(() => heroEls.forEach((el, k) => { el.style.animationDelay = (k * 0.07) + "s"; el.classList.add("reveal-in"); }));
  /* gallery */
  const shots = data.shots || [];
  $("#caseGallery").classList.toggle("empty", !shots.length);
  $("#cgTrack").innerHTML = "";
  const fillGallery = () => $("#cgTrack").innerHTML = shots.map((s, k) => `<figure class="shot" style="--i:${k}"><div class="frame ${s.k}" data-full="img/p/${s.f.includes(".") ? s.f : s.f + ".webp"}"><img src="img/p/${s.f.includes(".") ? s.f : s.f + ".webp"}" alt="${esc(s[lang])}" loading="lazy" decoding="async"></div><figcaption>${esc(s[lang])}</figcaption></figure>`).join("");
  $("#cgDots").innerHTML = shots.map((_, k) => `<i class="${k ? "" : "on"}"></i>`).join("");
  $("#cgTrack").scrollLeft = 0;
  /* flow */
  const flow = data.flow || [];
  $("#caseFlow").style.display = flow.length ? "" : "none";
  $("#caseFlow").classList.remove("in");
  $("#flowSteps").style.setProperty("--n", flow.length);
  $("#flowSteps").innerHTML = flow.map((f, k) => `<li style="--i:${k}"><span class="fe">${f.e}<span class="fn">${k + 1}</span></span><span class="fl">${esc(f[lang])}</span></li>`).join("");
  const nums = data.nums || [];
  $("#caseNums").style.display = nums.length ? "" : "none";
  $("#caseNums").classList.remove("in");
  $("#numsGrid").innerHTML = nums.map((n, k) => `<div class="nm" style="--i:${k}"><b><span data-count="${parseFloat(n.v)}"${String(n.v).includes(".") ? ` data-dec="${String(n.v).split(".")[1].length}"` : ""}>0</span>${n.u ? `<small>${esc(n.u)}</small>` : ""}</b><span>${esc(n[lang])}</span></div>`).join("");
  setTimeout(() => { $("#caseNums").classList.add("in"); $$("#numsGrid [data-count]").forEach(countUp); }, shots.length ? 500 : 200);
  $("#ptCards").innerHTML = c.pts.map(x => `<div class="pt-card">${esc(x)}</div>`).join("");
  $("#csTags").innerHTML = p.tags.map(x => `<span>${esc(x)}</span>`).join("");
  const prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
  $("#csPrevN").textContent = "← " + prev.icon + " " + prev.name;
  $("#csNextN").textContent = next.icon + " " + next.name + " →";
  $("#caseScroll").scrollTop = 0;
  SFX.play("swoosh");
  if (!d.open){ d.showModal(); document.documentElement.classList.add("case-open"); requestAnimationFrame(() => document.activeElement && document.activeElement.blur()); }
  requestAnimationFrame(() => requestAnimationFrame(fillGallery));
  if (push) history.replaceState(null, "", "#p/" + slug);
  setTimeout(() => $("#caseFlow").classList.add("in"), shots.length ? 700 : 250);
  renderPitch(slug, p);
}

/* ═══════════════════════════ pitch: why a personal project exists and why to try it ═══════════════════════════ */
const PITCH_PARTS = ["#pHook", "#pMid", "#pWho", "#pTry"];
let pitchFlipTimer = 0, pitchTouched = false;
const pitchIO = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in");
  if (en.target.id === "pMid" && !pitchTouched){ clearTimeout(pitchFlipTimer); pitchFlipTimer = setTimeout(() => setBA(true, true), reduced ? 0 : 900); }
  pitchIO.unobserve(en.target);
}), { root: $("#caseScroll"), threshold: .35 });
function renderPitch(slug, proj){
  const P = PITCH[slug], t = T[lang];
  PITCH_PARTS.forEach(sel => { const el = $(sel); el.hidden = !P; el.classList.remove("in"); pitchIO.unobserve(el); });
  $("#pTry").classList.remove("ready");
  clearTimeout(pitchFlipTimer); pitchTouched = false;
  if (!P) return;
  const q = P.hook[lang].split(" ");
  $("#pQuote").innerHTML = q.map((w, i) => `<span class="w" style="--i:${i}">${i === 0 ? "„" : ""}${esc(w)}${i === q.length - 1 ? "”" : ""}</span>`).join(" ");
  $("#pAnswer").textContent = P.answer[lang];
  $("#pBATitle").textContent = t.pBA;
  $("#pSwA").textContent = t.pBefore; $("#pSwB").textContent = t.pAfter;
  $("#pRows").innerHTML = P.ba.map(([a, b], i) => `<li style="--i:${i}"><button class="ba-r" type="button" aria-pressed="false"><span class="ba-pain"><i class="ba-x" aria-hidden="true">✕</i><span>${esc(a[lang])}<i class="ba-strike" aria-hidden="true"></i></span></span><span class="ba-gain"><i class="ba-ok" aria-hidden="true">✓</i><span>${esc(b[lang])}</span></span></button></li>`).join("");
  setBA(false);
  $("#pStoryTxt").textContent = P.story[lang];
  $(".st-title").innerHTML = t.pCol; $("#pHead").setAttribute("aria-label", t.pThink);
  $("#pBubble").classList.remove("on"); $("#pHead").classList.remove("think");
  $("#pWhoList").innerHTML = P.who.map((w, i) => `<button class="pw" type="button" role="checkbox" aria-checked="false" style="--i:${i}"><svg viewBox="0 0 28 28" aria-hidden="true"><rect x="2.5" y="2.5" width="23" height="23" rx="7"/><path pathLength="1" d="M7.5 14.5 12 19 20.5 9"/></svg><span>${esc(w[lang])}</span></button>`).join("");
  $("#pWhoHint").textContent = t.pHint; $("#pWhoHint").classList.remove("go"); $("#pWhoHint").tabIndex = -1;
  $("#pNot").textContent = t.pNot + P.notWho[lang] + ".";
  const kind = P.cta;
  $("#pTryTitle").textContent = kind === "repo" ? t.pTryRepo : kind === "mail" ? t.pTryMail : t.pTryApp;
  $("#pSteps").innerHTML = P.steps.map((st, i) => `<li style="--i:${i}"><b>${i + 1}</b><span>${esc(st[lang])}</span></li>`).join("");
  const href = kind === "repo" ? proj.repo : kind === "mail" ? `mailto:bartosz.jat@gmail.com?subject=${encodeURIComponent(proj.name)}` : proj.app;
  $("#pGo").innerHTML = href ? `<a class="btn primary pt-btn" href="${href}" ${kind === "mail" ? "" : 'target="_blank" rel="noopener"'}>${kind === "repo" ? t.pGoRepo : kind === "mail" ? t.pGoMail : t.pGoApp}</a>` : "";
  $("#pChips").innerHTML = P.chips.map(c => `<span>${esc(c[lang])}</span>`).join("");
  $("#pWithoutList").innerHTML = P.without.map(w => `<s>${esc(w[lang])}</s>`).join("");
  requestAnimationFrame(() => PITCH_PARTS.forEach(sel => pitchIO.observe($(sel))));
}
/* before ⇄ after: the whole card flips row by row, or one row on its own when tapped */
function setBA(on, auto){
  const sw = $("#pSwitch"), rows = $$("#pRows .ba-r");
  sw.setAttribute("aria-checked", on); sw.classList.toggle("on", on);
  rows.forEach((r, i) => {
    const flip = () => { r.classList.toggle("on", on); r.setAttribute("aria-pressed", on); if (on && !reduced && i === 0 && $("#case").open){ SFX.play("tick"); } };
    reduced ? flip() : setTimeout(flip, i * 170);
  });
  if (on && !auto) haptic([8, 40, 8]);
}
$("#pSwitch").addEventListener("click", () => { pitchTouched = true; clearTimeout(pitchFlipTimer); setBA($("#pSwitch").getAttribute("aria-checked") !== "true"); SFX.play("click"); });
$("#pRows").addEventListener("click", e => {
  const r = e.target.closest(".ba-r"); if (!r) return;
  pitchTouched = true; clearTimeout(pitchFlipTimer);
  const on = !r.classList.contains("on"); r.classList.toggle("on", on); r.setAttribute("aria-pressed", on);
  SFX.play(on ? "pop" : "tick", 1.2); haptic(8);
  const all = $$("#pRows .ba-r"), n = all.filter(x => x.classList.contains("on")).length;
  if (n === all.length || n === 0){ $("#pSwitch").setAttribute("aria-checked", n > 0); $("#pSwitch").classList.toggle("on", n > 0); }
});
/* "it's for you if…": ticking two of three turns the hint into a nudge towards trying it */
$("#pWhoList").addEventListener("click", e => {
  const b = e.target.closest(".pw"); if (!b) return;
  const on = b.getAttribute("aria-checked") !== "true";
  b.setAttribute("aria-checked", on); SFX.play(on ? "tick" : "click"); haptic(on ? 10 : 6);
  const n = $$("#pWhoList .pw[aria-checked=true]").length, t = T[lang], hint = $("#pWhoHint");
  hint.textContent = n >= 2 ? t.pMatch : n === 1 ? t.pHint1 : t.pHint;
  hint.classList.toggle("go", n >= 2); hint.tabIndex = n >= 2 ? 0 : -1;
  const was = $("#pTry").classList.contains("ready");
  $("#pTry").classList.toggle("ready", n >= 2);
  if (n >= 2 && !was){ SFX.play("chime"); const [x, y] = center(b); burst(x, y, ["✨", "💛", "✓"], { count: 10, speed: [3, 8], gravity: .05, life: 900, size: [12, 20] }); }
});
/* "a blond's yellow thoughts": tap the head and a thought pops out of it */
let thoughtN = 0, thoughtT = 0;
$("#pHead").addEventListener("click", () => {
  const list = T[lang].pThoughts, bub = $("#pBubble"), hb = $("#pHead");
  bub.textContent = list[thoughtN++ % list.length];
  bub.classList.remove("on"); hb.classList.remove("think");
  requestAnimationFrame(() => { bub.classList.add("on"); hb.classList.add("think"); });
  SFX.play("pop", 1.3); haptic(10);
  clearTimeout(thoughtT); thoughtT = setTimeout(() => { bub.classList.remove("on"); hb.classList.remove("think"); }, 2600);
});
$("#pWhoHint").addEventListener("click", () => {
  if (!$("#pWhoHint").classList.contains("go")) return;
  const sc = $("#caseScroll"), tgt = $("#pTry");
  sc.scrollTo({ top: tgt.offsetTop - 40, behavior: reduced ? "auto" : "smooth" });
});
function closeCase(){
  const d = $("#case"); if (!d.open) return;
  d.classList.add("closing");
  setTimeout(() => { d.classList.remove("closing"); d.close(); document.documentElement.classList.remove("case-open"); }, 280);
  history.replaceState(null, "", location.pathname + location.search);
}
$("#caseClose").addEventListener("click", closeCase);
$("#case").addEventListener("cancel", e => { e.preventDefault(); closeCase(); });
$("#case").addEventListener("click", e => { if (e.target === $("#case")) closeCase(); });
$("#csPrev").addEventListener("click", () => { const l = caseList(); openCase(slugOf(l[(caseIdx - 1 + l.length) % l.length])); });
$("#csNext").addEventListener("click", () => { const l = caseList(); openCase(slugOf(l[(caseIdx + 1) % l.length])); });
addEventListener("keydown", e => {
  if (!$("#case").open || $("#lightbox").classList.contains("on")) return;
  if (e.key === "ArrowRight" && e.shiftKey) $("#csNext").click();
  if (e.key === "ArrowLeft" && e.shiftKey) $("#csPrev").click();
});
/* gallery: arrows, dots, drag-to-scroll, lightbox */
$("#case").appendChild($("#lightbox"));
const cgTrack = $("#cgTrack");
const cgStep = dir => { const s = cgTrack.querySelector(".shot"); cgTrack.scrollBy({ left: dir * ((s ? s.offsetWidth : 300) + 28), behavior: "smooth" }); };
$("#cgPrev").addEventListener("click", () => cgStep(-1));
$("#cgNext").addEventListener("click", () => cgStep(1));
cgTrack.addEventListener("scroll", () => {
  const shots = [...cgTrack.querySelectorAll(".shot")]; if (!shots.length) return;
  const mid = cgTrack.scrollLeft + cgTrack.clientWidth / 2;
  let best = 0, bd = 1e9; shots.forEach((s, k) => { const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - mid); if (d < bd){ bd = d; best = k; } });
  $$("#cgDots i").forEach((dt, k) => dt.classList.toggle("on", k === best));
}, { passive: true });
let drag = null;
cgTrack.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; drag = { x: e.clientX, l: cgTrack.scrollLeft, moved: false }; cgTrack.style.scrollSnapType = "none"; });
addEventListener("pointermove", e => { if (!drag) return; const dx = e.clientX - drag.x; if (Math.abs(dx) > 4) drag.moved = true; cgTrack.scrollLeft = drag.l - dx; });
addEventListener("pointerup", () => { if (!drag) return; const moved = drag.moved; drag = null; cgTrack.style.scrollSnapType = ""; if (moved) cgTrack.dataset.justDragged = "1", setTimeout(() => delete cgTrack.dataset.justDragged, 50); });
cgTrack.addEventListener("click", e => {
  const f = e.target.closest(".frame"); if (!f || cgTrack.dataset.justDragged) return;
  $("#lbImg").src = f.dataset.full; $("#lightbox").classList.add("on");
});
$("#lightbox").addEventListener("click", () => $("#lightbox").classList.remove("on"));
addEventListener("keydown", e => { if (e.key === "Escape" && $("#lightbox").classList.contains("on")){ e.preventDefault(); $("#lightbox").classList.remove("on"); } }, true);
/* deep links: #p/kwit */
function routeCase(){ const m = location.hash.match(/^#p\/([\w-]+)/); if (m) openCase(m[1], false); }
addEventListener("hashchange", routeCase);


/* ═══════════════════════════ cross-links: things that react to each other ═══════════════════════════ */
/* bubbles feel the pointer… and the phone's tilt */
const pgPointer = { on: false, x: 0, y: 0 };
const tilt = { on: false, x: 0, y: 0 };
pg.addEventListener("pointermove", e => { if (e.pointerType !== "mouse") return; const r = pg.getBoundingClientRect(); pgPointer.x = e.clientX - r.left; pgPointer.y = e.clientY - r.top; pgPointer.on = !bubbles.some(b => b.drag); });
pg.addEventListener("pointerleave", () => pgPointer.on = false);
pg.addEventListener("pointermove", wakeBubbles, { passive: true });
const tiltBtn = $("#tiltBtn");
if (matchMedia("(pointer:coarse)").matches && "DeviceOrientationEvent" in window) tiltBtn.hidden = false;
tiltBtn.addEventListener("click", async () => {
  if (tilt.on){ tilt.on = false; tiltBtn.classList.remove("on"); return; }
  try { if (typeof DeviceOrientationEvent.requestPermission === "function" && (await DeviceOrientationEvent.requestPermission()) !== "granted") return; } catch(e){ return; }
  tilt.on = true; tiltBtn.classList.add("on"); wakeBubbles();
  setCaption(T[lang].tiltOn, true);
});
addEventListener("deviceorientation", e => {
  if (!tilt.on || e.gamma == null) return;
  tilt.x = Math.max(-1, Math.min(1, e.gamma / 35));
  tilt.y = Math.max(-1, Math.min(1, (e.beta - 35) / 35));
});

/* donut ↔ project bars: hover a language, see where it lives */
const LANG_PROJECTS = { TypeScript:["Inquisitio","JTCJ","Kwit","PatoBox","OfficeFlow"], Dart:["GlobeQuest"], Python:["JournAI","GarminReport"], Jupyter:[], "*other":[] };
const _hotLang = hotLang;
hotLang = function(i){
  _hotLang(i);
  const names = i === null ? null : LANG_PROJECTS[LANGS[i].n] || [];
  $$("#hbars .hb").forEach(r => { const n = r.querySelector("span").textContent.replace(/^\S+\s/, ""); r.classList.toggle("dim", !!names && !names.includes(n)); r.classList.toggle("lit", !!names && names.includes(n)); });
};
$("#hbars").addEventListener("pointerover", e => {
  const r = e.target.closest(".hb"); if (!r) return;
  const n = r.querySelector("span").textContent.replace(/^\S+\s/, "");
  const li = LANGS.findIndex(l => (LANG_PROJECTS[l.n] || []).includes(n));
  $$("#donut circle").forEach(c => { c.classList.toggle("dim", li >= 0 && +c.dataset.i !== li); c.classList.toggle("hot", +c.dataset.i === li); });
  $$("#hbars .hb").forEach(x => x.classList.toggle("lit", x === r));
});
$("#hbars").addEventListener("pointerleave", () => { hotLang(null); $$("#hbars .hb").forEach(x => x.classList.remove("lit", "dim")); });
$("#hbars").addEventListener("click", e => {
  const r = e.target.closest(".hb"); if (!r) return;
  const n = r.querySelector("span").textContent.replace(/^\S+\s/, "");
  const p = PROJECTS.find(x => x.name === n); if (p) openCase(slugOf(p));
});

/* charts on touch: tap a bar or point to pin its label */
document.addEventListener("click", e => {
  const col = e.target.closest(".bar-col");
  if (col){ const on = !col.classList.contains("on"); $$(".bar-col").forEach(c => c.classList.remove("on")); col.classList.toggle("on", on); $("#bars").classList.toggle("touched", on); }
  const g = e.target.closest(".rchart g.hov");
  if (g){ const on = !g.classList.contains("on"); g.closest("svg").querySelectorAll("g.hov").forEach(x => x.classList.remove("on")); g.classList.toggle("on", on); }
});

/* toolbox ↔ projects: hover a skill to see where it's used, click to jump there */
const skillKey = n => n.toLowerCase().replace(/\s*\(.*\)/, "").replace("|", " ").split(" ")[0];
function projectsUsing(name){
  const k = skillKey(name);
  return PROJECTS.filter(p => p.tags.some(t => t.toLowerCase().startsWith(k)) || (p.pl.pts.join(" ") + p.pl.desc).toLowerCase().includes(name.toLowerCase().replace(/\s*\(.*\)/, "")));
}
const skillPop = document.createElement("div"); skillPop.className = "skill-pop"; document.body.appendChild(skillPop);
let popFor = null;
function showSkillPop(chip){
  const list = projectsUsing(chip.textContent);
  if (!list.length){ hideSkillPop(); return; }
  popFor = chip;
  skillPop.innerHTML = `<small>${esc(T[lang].usedIn)}</small><div>${list.slice(0, 6).map(p => `<span>${p.icon} ${esc(p.name)}</span>`).join("")}</div>`;
  const r = chip.getBoundingClientRect();
  skillPop.style.left = Math.min(innerWidth - 16, Math.max(16, r.left + r.width / 2)) + "px";
  skillPop.style.top = (r.top - 10) + "px";
  skillPop.classList.add("on");
  chip.classList.add("has");
}
function hideSkillPop(){ skillPop.classList.remove("on"); if (popFor) popFor.classList.remove("has"); popFor = null; }
$("#toolbox").addEventListener("pointerover", e => { const c = e.target.closest(".chip"); if (c && e.pointerType === "mouse") showSkillPop(c); });
$("#toolbox").addEventListener("pointerleave", hideSkillPop);
addEventListener("scroll", hideSkillPop, { passive: true });
$("#toolbox").addEventListener("click", e => {
  const c = e.target.closest(".chip"); if (!c) return;
  const list = projectsUsing(c.textContent); if (!list.length) return;
  if (e.pointerType !== "mouse" && popFor !== c){ showSkillPop(c); return; }
  hideSkillPop();
  const names = new Set(list.map(p => p.name));
  if (filter !== "all"){ $('#filters button[data-cat="all"]').click(); }
  if ($("#grid").classList.contains("folded")) $("#gridMore").click();
  smoothTo($("#grid"), -110);
  setTimeout(() => $$("#grid .card").forEach((card, i) => {
    const hit = names.has(card.dataset.name);
    card.classList.toggle("glow", hit); card.classList.toggle("fade", !hit);
    setTimeout(() => card.classList.remove("glow", "fade"), 3200);
  }), 700);
});

/* trail checkpoints ↔ case studies */
$("#trailMap").addEventListener("click", e => { const g = e.target.closest("[data-case]"); if (g) openCase(g.dataset.case); });
$("#trailMap").addEventListener("keydown", e => { if (e.key === "Enter"){ const g = e.target.closest("[data-case]"); if (g) openCase(g.dataset.case); } });

/* the travel bubble and stats fly you to the map */
$$(".travel-stats div")[0].addEventListener("click", () => { if (!mapState) return; switchZoom("all"); setTimeout(startTour, 600); });

/* ═══════════════════════════ senses: sound, touch, and new secrets ═══════════════════════════ */
/* global feedback layer: a soft tick on hover, a click + haptic on press */
let lastTickEl = null, lastTickT = 0;
document.addEventListener("pointerover", e => {
  if (e.pointerType !== "mouse") return;
  const el = e.target.closest("a,button,.card,.chip,.cchip,.bubble,.cont,.bar-col,.hb,.kicker,.frame,.cp-sub .go");
  if (!el || el === lastTickEl) return;
  lastTickEl = el;
  const now = performance.now(); if (now - lastTickT < 60) return; lastTickT = now;
  SFX.play("tick");
}, { passive: true });
document.addEventListener("pointerdown", e => {
  const el = e.target.closest("a,button,.card,.chip,.cchip,.cont,.frame,.cp-sub .go");
  if (!el || el.closest(".bubble") || el.id === "soundBtn") return;
  SFX.play("click"); haptic(8);
}, { passive: true });
let bumpT = 0;
function bubbleBump(v){ const now = performance.now(); if (now - bumpT < 90) return; bumpT = now; SFX.play("bump", v / 40); if (v > 6) haptic(5); }

/* sound toggle */
const soundBtn = $("#soundBtn");
const paintSound = () => { soundBtn.textContent = SFX.on ? "🔊︎" : "🔇︎"; soundBtn.classList.toggle("off", !SFX.on); soundBtn.setAttribute("aria-pressed", SFX.on); };
soundBtn.addEventListener("click", () => { SFX.set(!SFX.on); paintSound(); toast(SFX.on ? "🔊" : "🔇", SFX.on ? T[lang].soundOn : T[lang].soundOff, "", 1600); });
paintSound();

/* 🎹 music: the commit chart is a xylophone */
const playedBars = new Set();
document.addEventListener("click", e => {
  const col = e.target.closest(".bar-col"); if (!col) return;
  const cols = $$("#bars .bar-col"), i = cols.indexOf(col);
  const h = +col.querySelector(".b").dataset.h, max = Math.max(...cols.map(c => +c.querySelector(".b").dataset.h));
  SFX.play("note", Math.round(h / max * 11) + 1, (i / (cols.length - 1)) * 1.4 - .7); haptic(6);
  const b = col.querySelector(".b"); replay(b, "ring");
  const r = b.getBoundingClientRect(); burst(r.left + r.width / 2, r.top, ["♪", "♫"], { count: 2, spread: 50, speed: [3, 6], gravity: -.02, life: 1100, size: [16, 22] });
  playedBars.add(i);
  if (playedBars.size >= 7 && unlock("xylo")) banner(T[lang].eXylo, 2200);
});

/* 🚀 space: light every section number for a countdown */
const litKickers = new Set();
$$(".kicker").forEach(k => {
  k.setAttribute("role", "button"); k.tabIndex = 0;
  k.addEventListener("click", () => {
    replay(k, "zap"); k.classList.add("lit");
    litKickers.add(k.textContent.trim());
    SFX.play("note", litKickers.size + 2); haptic(8);
    if (litKickers.size === $$(".kicker").length) launch();
  });
});
function launch(){
  let n = 3;
  const tick = () => {
    if (n > 0){ banner(String(n), 900); SFX.play("knock"); haptic(20); n--; setTimeout(tick, 900); return; }
    SFX.play("rocket"); haptic([30, 40, 60, 40, 90]);
    const r = document.createElement("div"); r.className = "rocket"; r.textContent = "🚀"; document.body.appendChild(r);
    r.animate([{ transform: "translate(-50%,0) rotate(-45deg) scale(.8)" }, { transform: "translate(-50%,-130vh) rotate(-45deg) scale(1.4)" }], { duration: 2400, easing: "cubic-bezier(.5,0,.75,0)" }).onfinish = () => r.remove();
    const smoke = setInterval(() => burst(innerWidth / 2, innerHeight - 40, ["💨", "☁️", "✨"], { count: 3, spread: 60, angle: 90, speed: [2, 5], gravity: -.05, life: 1600 }), 90);
    setTimeout(() => clearInterval(smoke), 1300);
    setTimeout(() => banner(T[lang].eRocket, 2000), 600);
    unlock("rocket");
    setTimeout(() => { $$(".kicker").forEach(k => k.classList.remove("lit")); litKickers.clear(); }, 2600);
  };
  tick();
}

/* 🖍️ art: draw with chalk on the hero's chalkboard */
(function chalk(){
  const hero = $("#hero"), cv = document.createElement("canvas"); cv.className = "chalk-layer"; hero.appendChild(cv);
  const ctx = cv.getContext("2d"); let drawing = false, last = null, total = 0, fadeT;
  const size = () => { const d = Math.min(2, devicePixelRatio || 1); cv.width = hero.clientWidth * d; cv.height = hero.clientHeight * d; ctx.setTransform(d, 0, 0, d, 0, 0); };
  size(); addEventListener("resize", size);
  hero.addEventListener("pointerdown", e => {
    if (e.pointerType === "touch" || e.button || e.target.closest("a,button,.cloud,.head,.mind-art,.cta")) return;
    const r = hero.getBoundingClientRect(); last = [e.clientX - r.left, e.clientY - r.top];
    drawing = true; cv.classList.remove("fade"); clearTimeout(fadeT);
  });
  addEventListener("pointermove", e => {
    if (!drawing) return;
    const r = hero.getBoundingClientRect(), p = [e.clientX - r.left, e.clientY - r.top], d = Math.hypot(p[0] - last[0], p[1] - last[1]);
    if (d < 2) return;
    ctx.strokeStyle = "rgba(255,212,59,.85)"; ctx.lineCap = "round"; ctx.lineJoin = "round";
    for (let k = 0; k < 3; k++){ ctx.lineWidth = 2 + Math.random() * 2.5; ctx.globalAlpha = .35 + Math.random() * .4; ctx.beginPath(); ctx.moveTo(last[0] + (Math.random() - .5) * 2, last[1] + (Math.random() - .5) * 2); ctx.lineTo(p[0] + (Math.random() - .5) * 2, p[1] + (Math.random() - .5) * 2); ctx.stroke(); }
    ctx.globalAlpha = 1; total += d; last = p;
    if (Math.random() < .35) SFX.play("chalk");
    if (total > 900 && unlock("chalk")) toast("🖍️", T[lang].eChalk, T[lang].eChalkSub, 3200);
  });
  addEventListener("pointerup", () => {
    if (!drawing) return; drawing = false;
    clearTimeout(fadeT); fadeT = setTimeout(() => { cv.classList.add("fade"); setTimeout(() => { if (cv.classList.contains("fade")) ctx.clearRect(0, 0, cv.width, cv.height); }, 1600); }, 2600);
  });
})();

/* 🏠 geography: home, three times */
let homeTaps = [];
function homeTap(){
  const now = Date.now(); homeTaps = homeTaps.filter(t => now - t < 2200).concat(now);
  if (homeTaps.length < 3) return;
  homeTaps = [];
  const at = mapState && mapState.anchorClient && mapState.anchorClient(BY_KEY.get("Poland"));
  if (at) burst(at.clientX, at.clientY, ["🏠", "❤️", "🥟", "✨"], { count: 26, speed: [5, 12], gravity: .1 });
  banner(T[lang].eHome, 2800); SFX.play("fanfare");
  unlock("home");
}

/* 🪄 literature: lumos / nox */
function lumos(on){
  const root = document.documentElement, want = on ? "light" : "dark";
  SFX.play("magic"); haptic([10, 30, 10]);
  burst(innerWidth / 2, innerHeight / 2, ["✨", "⭐", "✦"], { count: 30, speed: [5, 12], gravity: .02, life: 1400 });
  banner(on ? T[lang].eLumos : T[lang].eNox, 1800);
  if (root.dataset.theme !== want){
    const flip = () => { root.dataset.theme = want; store.set("bj-theme", want); syncThemeColor(); };
    root.style.setProperty("--vx", "50%"); root.style.setProperty("--vy", "50%");
    document.startViewTransition && !reduced ? document.startViewTransition(flip) : flip();
  }
  unlock("lumos");
}

/* 🏃 sport: click my dot in the triathlon field */
$("#triDots").addEventListener("click", e => {
  const me = e.target.closest("i.me"); if (!me) return;
  const dots = $$("#triDots i"), idx = dots.indexOf(me);
  SFX.play("whoosh"); haptic([8, 20, 8, 20, 8]);
  dots.slice(0, idx).reverse().forEach((d, k) => setTimeout(() => { d.classList.add("passed"); if (k % 3 === 0) SFX.play("tick"); setTimeout(() => d.classList.remove("passed"), 1400); }, k * 45));
  const r = me.getBoundingClientRect();
  setTimeout(() => { burst(r.left + r.width / 2, r.top, ["🏃", "💨", "🏅"], { count: 14, speed: [5, 10] }); toast("🏃", T[lang].eOvertake, T[lang].eOvertakeSub, 3200); unlock("overtake"); }, idx * 45 + 200);
});

/* ❤️ biology: press and hold a medal */
$("#medals").addEventListener("pointerdown", e => {
  const m = e.target.closest(".medal-card"); if (!m) return;
  let beats = 0, iv = null;
  const hold = setTimeout(() => {
    m.classList.add("pulse");
    const beat = () => { SFX.play("beat"); haptic([20, 160, 14]); replay(m, "thump"); if (++beats === 4 && unlock("heart")) banner(T[lang].eHeart, 2600); };
    beat(); iv = setInterval(beat, 400);
  }, 550);
  const stop = () => { clearTimeout(hold); clearInterval(iv); m.classList.remove("pulse", "thump"); removeEventListener("pointerup", stop); removeEventListener("pointercancel", stop); };
  addEventListener("pointerup", stop); addEventListener("pointercancel", stop);
});
$("#medals").addEventListener("contextmenu", e => { if (e.target.closest(".medal-card")) e.preventDefault(); });

/* 🦉 time: night owls and early birds */
setTimeout(() => {
  const h = new Date().getHours();
  if (h >= 0 && h < 5){ SFX.play("owl"); toast("🦉", T[lang].eOwl, T[lang].eOwlSub, 4500); unlock("owl"); }
  else if (h >= 5 && h < 7){ toast("🐦", T[lang].eBird, T[lang].eBirdSub, 4500); unlock("owl"); }
}, 5000);

/* ☕ food: sip the coffee thought */
function coffee(){
  const [x, y] = center($("#cloud"));
  SFX.play("sip"); haptic([6, 40, 6]);
  burst(x, y, ["☕", "♨️", "💨", "✨"], { count: 18, angle: -90, spread: 50, speed: [3, 7], gravity: -.06, life: 1800 });
  banner(T[lang].eCoffee, 2200);
  unlock("coffee");
}
$("#cloud").addEventListener("click", () => { if ($("#thought").textContent.includes("☕")) coffee(); }, { capture: true });

/* 🍎 physics: switch on gravity for the thoughts */
function newton(){
  const go = () => {
    SFX.play("apple"); haptic([10, 400, 30]);
    const r = pg.getBoundingClientRect();
    for (let i = 0; i < 6; i++) setTimeout(() => burst(r.left + Math.random() * r.width, r.top + 10, ["🍎"], { count: 1, angle: 90, spread: 20, speed: [1, 3], gravity: .5, life: 1600, size: [26, 34] }), i * 120);
    tilt.on = true; tilt.x = 0; tilt.y = 1.2; wakeBubbles();
    banner(T[lang].eNewton, 2200);
    setTimeout(() => { tilt.on = $("#tiltBtn").classList.contains("on"); tilt.y = 0; }, 6000);
    unlock("newton");
  };
  const r = pg.getBoundingClientRect();
  if (r.bottom < 0 || r.top > innerHeight){ smoothTo(pg, -120); setTimeout(go, 1300); } else go();
}

/* ═══════════════════════════ cursor + global fx ═══════════════════════════ */
(function cursor(){
  if (!matchMedia("(pointer:fine)").matches) return;
  const cur = $(".cursor"), dot = $(".cur-dot"), ring = $(".cur-ring");
  let mx = -100, my = -100, rx = -100, ry = -100;
  addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px)`; cur.classList.remove("hide"); }, { passive: true });
  document.addEventListener("pointerleave", () => cur.classList.add("hide"));
  addEventListener("pointerdown", () => cur.classList.add("down"));
  addEventListener("pointerup", () => cur.classList.remove("down"));
  const lbl = $(".cur-lbl");
  const labelFor = t => {
    const L = T[lang];
    if (t.closest(".frame")) return "🔍";
    if (t.closest(".ba-r, #pSwitch")) return "⇄";
    if (t.closest(".pw")) return "✓ ?";
    if (t.closest("#pHead")) return "💭";
    if (t.closest(".card")) return L.cDetails;
    if (t.closest(".bubble")) return t.closest(".bubble.mini") ? "🍯" : L.cDrag;
    if (t.closest("#head")) return L.cTap;
    if (t.closest("#cloud")) return L.cThought;
    if (t.closest('#worldMap path[data-name="Morocco"]')) return "🐪 ?";
    if (t.closest("#nextStop")) return "🐪 ?";
    return "";
  };
  document.addEventListener("pointerover", e => {
    const l = labelFor(e.target);
    lbl.textContent = l;
    cur.classList.toggle("label", !!l);
    cur.classList.toggle("hover", !l && !!e.target.closest("a,button,.bubble,.card,[data-i],.cchip"));
  });
  (function loop(){ rx += (mx - rx) * .18; ry += (my - ry) * .18; ring.style.transform = `translate(${rx}px,${ry}px)`; requestAnimationFrame(loop); })();
})();

document.addEventListener("pointerdown", e => {
  const b = e.target.closest(".btn"); if (!b) return;
  const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2, rp = document.createElement("span");
  rp.className = "ripple";
  Object.assign(rp.style, { width:s+"px", height:s+"px", left:(e.clientX - r.left - s/2)+"px", top:(e.clientY - r.top - s/2)+"px" });
  b.appendChild(rp); setTimeout(() => rp.remove(), 650);
});
$$(".magnetic").forEach(b => {
  b.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    const r = b.getBoundingClientRect();
    b.style.transform = `translate(${(e.clientX - r.left - r.width/2) * .2}px,${(e.clientY - r.top - r.height/2) * .28}px)`;
  });
  b.addEventListener("pointerleave", () => b.style.transform = "");
});

let finishShown = false;
let docH = 0, scrollQueued = false, lastRunner = "";
const measureDoc = () => { docH = document.documentElement.scrollHeight - innerHeight; };
new ResizeObserver(measureDoc).observe(document.body);
const trackFill = $(".track-fill"), runnerEl = $(".runner"), headerEl = $("header.top");
function onScroll(){
  if (scrollQueued) return; scrollQueued = true;
  requestAnimationFrame(() => { scrollQueued = false; paintScroll(); });
}
function paintScroll(){
  const h = docH || (measureDoc(), docH);
  const p = h > 0 ? Math.min(100, scrollY / h * 100) : 0;
  trackFill.style.transform = `scaleX(${p / 100})`;
  runnerEl.style.transform = `translateX(calc(${p / 100} * (100vw - 16px))) scaleX(-1)`;
  runnerEl.style.opacity = p > 1 ? 1 : 0;
  const r = p > 99.5 ? "🏅" : "🏃"; if (r !== lastRunner){ runnerEl.textContent = r; lastRunner = r; }
  headerEl.classList.toggle("scrolled", scrollY > 30);
  if (p > 99.5 && !finishShown && h > 200){
    finishShown = true;
    $("#finish").classList.add("won");
    const r = $("#finish").getBoundingClientRect();
    burst(innerWidth / 2, r.top, ["🏁","🎉","✨","🏅"], { count: 26, speed: [8, 15] });
    unlock("finish");
  }
}
addEventListener("scroll", onScroll, { passive: true });

/* ═══════════════════════════ easter eggs ═══════════════════════════ */
let logoClicks = 0, logoTimer;
$("#logo").addEventListener("click", () => {
  logoClicks++; clearTimeout(logoTimer);
  logoTimer = setTimeout(() => logoClicks = 0, 600);
  if (logoClicks >= 3){ logoClicks = 0; triathlon(); }
  else if (logoClicks === 1) smoothTo(0, 0);
});
function triathlon(){
  [["🏊","swim",.62],["🚴","",.52],["🏃","",.42]].forEach(([e, cls, y], i) => setTimeout(() => {
    const r = document.createElement("div");
    r.className = "racer " + cls; r.textContent = e; r.style.top = (y * 100) + "%";
    document.body.appendChild(r);
    r.animate([{ transform:`translateX(${innerWidth + 60}px)` }, { transform:"translateX(-120px)" }], { duration: 1700, easing: "cubic-bezier(.45,.05,.55,.95)" }).onfinish = () => r.remove();
  }, i * 900));
  setTimeout(() => { banner(T[lang].ironTitle); confetti(); unlock("tri"); }, 3300);
}

$("#dragon").addEventListener("click", e => {
  const d = e.currentTarget; replay(d, "roar");
  const [x, y] = center(d);
  burst(x + 14, y - 6, ["🔥","🔥","💥","🔥"], { count: 22, angle: -45, spread: 40, speed: [8, 16], gravity: -.05, life: 1000 });
  unlock("dragon");
});

document.addEventListener("click", e => {
  const a = e.target.closest("#pickaxe"); if (!a) return;
  replay(a, "dig");
  const [x, y] = center(a);
  setTimeout(() => burst(x, y, ["🪨","💎","🪨","✨","⚫"], { count: 18, speed: [5, 11] }), 300);
  setTimeout(() => banner(T[lang].agh, 3000), 400);
  unlock("agh");
});

$("#wishStar").addEventListener("click", e => {
  e.stopPropagation();
  const [x, y] = center(e.currentTarget);
  const s = document.createElement("div"); s.className = "shooting"; document.body.appendChild(s);
  s.animate([{ transform:`translate(${x}px,${y}px) rotate(155deg)`, opacity:1 }, { transform:`translate(${x - 600}px,${y + 300}px) rotate(155deg)`, opacity:0 }], { duration: 1100, easing: "ease-in" }).onfinish = () => s.remove();
  burst(x, y, ["✨","⭐","✦"], { count: 14, speed: [3, 8], gravity: .1 });
  toast("⭐", T[lang].wish, "Pinocchio, 1940", 3500);
  unlock("star");
});

let themeClicks = [];
let vtBusy = false;
$("#themeBtn").addEventListener("click", e => {
  const root = document.documentElement;
  SFX.play("swoosh"); haptic(10);
  const flip = () => { root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light"; store.set("bj-theme", root.dataset.theme); syncThemeColor(); };
  if (!reduced && !vtBusy){
    vtBusy = true;
    const [x, y] = center(e.currentTarget), R = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const goingLight = root.dataset.theme !== "light";
    const w = document.createElement("div"); w.className = "theme-wipe";
    Object.assign(w.style, { left: x - R + "px", top: y - R + "px", width: R * 2 + "px", height: R * 2 + "px", background: goingLight ? "#f8f4e8" : "#0b0b0c" });
    document.body.appendChild(w);
    w.animate([{ transform: "scale(0)" }, { transform: "scale(1)" }], { duration: 420, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }).onfinish = () => {
      root.classList.add("theme-flipping"); flip(); document.body.offsetHeight;
      setTimeout(() => root.classList.remove("theme-flipping"), 400);
      requestAnimationFrame(() => requestAnimationFrame(() => w.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, fill: "forwards" }).onfinish = () => { w.remove(); vtBusy = false; }));
    };
  } else if (!vtBusy) flip();
  const now = Date.now();
  themeClicks = themeClicks.filter(t => now - t < 2500).concat(now);
  if (themeClicks.length >= 5){
    themeClicks = [];
    root.dataset.theme = "dark"; store.set("bj-theme", "dark");
    const s = document.createElement("div"); s.className = "saber"; document.body.appendChild(s);
    setTimeout(() => s.remove(), 2500);
    banner(T[lang].force, 2600);
    unlock("force");
  }
});

const realTitle = document.title; let wasAway = false;
document.addEventListener("visibilitychange", () => {
  if (document.hidden){ wasAway = true; document.title = T[lang].tabAway; }
  else { document.title = realTitle; if (wasAway) setTimeout(() => unlock("tab"), 500); }
});

let vinylTimer, trackTimer;
function playRap(){
  const v = $("#vinyl"); let i = 0;
  $("#vinylTrack").textContent = RAP[0];
  v.classList.add("on");
  clearInterval(trackTimer); clearTimeout(vinylTimer);
  trackTimer = setInterval(() => { i = (i + 1) % RAP.length; $("#vinylTrack").textContent = RAP[i]; }, 2200);
  vinylTimer = setTimeout(stopRap, 15000);
  unlock("rap");
}
function stopRap(){ $("#vinyl").classList.remove("on"); clearInterval(trackTimer); }
$("#vinyl").addEventListener("click", stopRap);

function hunny(){
  const layer = document.createElement("div"); layer.className = "honey";
  const n = Math.ceil(innerWidth / 70);
  for (let i = 0; i < n; i++){
    const d = document.createElement("i");
    d.style.left = (i / n * 100 + Math.random() * 3) + "%";
    d.style.setProperty("--w", (26 + Math.random() * 40) + "px");
    d.style.setProperty("--h", (40 + Math.random() * 220) + "px");
    d.style.setProperty("--t", (1.8 + Math.random() * 1.4) + "s");
    layer.appendChild(d);
  }
  document.body.appendChild(layer); setTimeout(() => layer.remove(), 3400);
  for (let i = 0; i < 3; i++) setTimeout(() => burst(Math.random() * innerWidth, innerHeight * .4, ["🐝"], { count: 3, speed: [4, 9], gravity: -.02, life: 2200, size: [20, 28] }), i * 300);
  banner(T[lang].hunny, 2200);
  unlock("pooh");
}

function matrix(){
  const cv = $("#matrix"), ctx = cv.getContext("2d");
  cv.width = innerWidth; cv.height = innerHeight; cv.classList.add("on");
  const fs = 16, cols = Math.ceil(cv.width / fs), drops = Array(cols).fill(0).map(() => Math.random() * -40);
  const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789BJ";
  const t0 = performance.now();
  (function draw(t){
    ctx.fillStyle = "rgba(0,0,0,.08)"; ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = "#3dff7a"; ctx.font = fs + "px JetBrains Mono, monospace";
    drops.forEach((y, i) => {
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, y * fs);
      drops[i] = y * fs > cv.height && Math.random() > .975 ? 0 : y + 1;
    });
    if (t - t0 < 6500) requestAnimationFrame(draw);
    else { cv.classList.remove("on"); setTimeout(() => ctx.clearRect(0, 0, cv.width, cv.height), 900); }
  })(t0);
  unlock("matrix");
}

const KONAMI = ["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","b","a"];
let kpos = 0, buf = "";
addEventListener("keydown", e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const k = e.key.toLowerCase();
  kpos = k === KONAMI[kpos] ? kpos + 1 : (k === KONAMI[0] ? 1 : 0);
  if (kpos === KONAMI.length){ kpos = 0; konami(); return; }
  if (k === "?"){ openEggs(); return; }
  if (k.length !== 1) return;
  buf = (buf + k).slice(-12);
  const hit = w => buf.endsWith(w) && (buf = "", true);
  if (hit("hakuna")){ banner(T[lang].hakuna); burst(innerWidth / 2, innerHeight * .85, ["🦁","🐗","🌅","✨","🌿"], { count: 30, spread: 80, speed: [10, 20] }); unlock("hakuna"); }
  else if (hit("100")){ banner(`${T[lang].hundred}<small>${T[lang].hundredSub}</small>`, 3000); burst(innerWidth / 2, innerHeight * .8, ["💯","⛰️","🏃","✨"], { count: 26, spread: 80, speed: [10, 18] }); unlock("hundred"); }
  else if (hit("42")){ banner(`42<small>${T[lang].dont}</small>`, 3200); burst(innerWidth / 2, innerHeight * .8, ["🐬","🐬","🐟","🌌"], { count: 24, spread: 90, speed: [10, 18] }); unlock("answer"); }
  else if (hit("taco") || hit("quebo")) playRap();
  else if (hit("matrix")) matrix();
  else if (hit("pooh") || hit("puchatek") || hit("hunny") || hit("kubus") || hit("kubuś")) hunny();
  else if (hit("lumos")) lumos(true);
  else if (hit("nox")) lumos(false);
  else if (hit("newton")) newton();
  else if (hit("kawa") || hit("coffee")) coffee();
  else if (hit("barrel")){ document.documentElement.classList.add("barrel"); setTimeout(() => document.documentElement.classList.remove("barrel"), 1500); unlock("barrel"); }
});
function konami(){
  const on = document.documentElement.classList.toggle("retro");
  if (on){ banner("PLAYER 1<small>START ▶</small>"); confetti(); }
  if (!unlock("konami")) toast("🕹️", on ? T[lang].retroOn : T[lang].retroOff, "↑↑↓↓←→←→BA", 2500);
}

function openEggs(){ SFX.play("sparkle"); renderEggPanel(); if (!$("#eggs").open) $("#eggs").showModal(); }
$("#trophyBtn").addEventListener("click", openEggs);
$("#eggsClose").addEventListener("click", () => closeDialog($("#eggs")));

console.log("%c Think, Think, Think ", "font:700 34px Caveat,cursive;color:#ffd43b;background:#0b0b0c;border-radius:12px;padding:6px 16px");
console.log("%cHej, deweloperze! 👋  Hey, developer!\n%cWpisz / type:  sekret()", "font:600 14px Inter,sans-serif", "font:500 13px 'JetBrains Mono',monospace;color:#f5a524");
window.sekret = window.secret = () => { unlock("console"); return "🥚 " + (lang === "pl" ? "Brawo! Masz oko do szczegółów." : "Nice! You've got an eye for detail."); };

let langBusy = false;
$("#langBtn").addEventListener("click", () => {
  if (langBusy) return; langBusy = true;
  const app = $("#app");
  app.classList.add("lang-out");
  setTimeout(() => {
    lang = lang === "pl" ? "en" : "pl"; store.set("bj-lang", lang); applyI18n(true);
    requestAnimationFrame(() => { app.classList.remove("lang-out"); setTimeout(() => langBusy = false, 260); });
  }, 170);
});


/* ═══════════════════════════ polish: smooth scroll, parallax, feedback ═══════════════════════════ */
let lenis = null;
function initLenis(){
  try {
    lenis = new Lenis({ lerp: .09, wheelMultiplier: 1, prevent: n => !!(n.closest && (n.closest("dialog") || n.closest(".map-wrap"))) });
    const loop = t => { lenis.raf(t); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
    document.documentElement.classList.add("has-lenis");
  } catch(e){ lenis = null; }
}
if (matchMedia("(pointer:fine)").matches && !reduced){
  const ls = document.createElement("script"); ls.src = "https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js";
  ls.onload = () => window.Lenis && initLenis(); document.head.appendChild(ls);
}
/* lazily-rendered sections can change height on the way; settle on the target once scrolling ends */
const settleOn = el => { let n = 0; const fix = () => { const top = el.getBoundingClientRect().top - 80; if (Math.abs(top) > 6 && n++ < 3){ scrollTo({ top: scrollY + top, behavior: n > 1 ? "auto" : "smooth" }); } else removeEventListener("scrollend", fix); }; addEventListener("scrollend", fix); setTimeout(() => removeEventListener("scrollend", fix), 4000); };
const smoothTo = (target, offset = -70) => lenis ? lenis.scrollTo(target, { offset, duration: 1.4 }) : (typeof target === "number" ? scrollTo({ top: target, behavior: "smooth" }) : (target.scrollIntoView({ behavior: "smooth" }), settleOn(target)));
if (location.hash && !location.hash.startsWith("#p/")){ const t = document.querySelector(location.hash); if (t) setTimeout(() => { t.scrollIntoView(); settleOn(t); }, 120); }
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  const id = a.getAttribute("href"); const el = id.length > 1 && document.querySelector(id);
  if (!el) return;
  e.preventDefault(); smoothTo(el);
});
["#modal","#eggs"].forEach(s => { const d = $(s); new MutationObserver(() => { if (!lenis) return; d.open ? lenis.stop() : lenis.start(); }).observe(d, { attributes: true, attributeFilter: ["open"] }); });

/* hero parallax + marquee drift, one rAF per frame */
let ticking = false;
function scrollFx(){
  ticking = false;
  const y = scrollY, h = innerHeight;
  if (y < h * 1.2 && !reduced && vw > 900){
    $(".hero-text").style.transform = `translateY(${y * .28}px)`;
    $(".hero-text").style.opacity = Math.max(0, 1 - y / (h * .75));
    $(".mind-art").style.transform = `translateY(${y * -.12}px) scale(${1 - Math.min(y / h, 1) * .08})`;
  }
  const rows = $$(".mq-row");
  if (rows.length && !reduced){ rows[0].style.transform = `translateX(${-y * .12}px)`; rows[1].style.transform = `translateX(${y * .12 - 200}px)`; }
}
addEventListener("scroll", () => { if (!ticking){ ticking = true; requestAnimationFrame(scrollFx); } }, { passive: true });

/* pointer spotlight inside surfaces */
const SPOT = ".card,.panel:not(.map-panel),.tool-group,.cp-card,.medal-card,.stat-card,.travel-stats div";
let spotEl = null, spotEv = null, spotRaf = 0;
document.addEventListener("pointermove", e => {
  if (e.pointerType !== "mouse") return;
  spotEv = e;
  if (!spotRaf) spotRaf = requestAnimationFrame(() => {
    spotRaf = 0;
    const el = spotEv.target.closest && spotEv.target.closest(SPOT);
    if (spotEl && spotEl !== el){ spotEl.style.removeProperty("--sx"); spotEl.style.removeProperty("--sy"); }
    spotEl = el;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--sx", (spotEv.clientX - r.left) + "px");
    el.style.setProperty("--sy", (spotEv.clientY - r.top) + "px");
  });
}, { passive: true });

/* word-by-word headings */
function splitHeads(){
  $$(".sec-head h2, .contact .hand").forEach(h => {
    const words = h.textContent.trim().split(/\s+/);
    h.innerHTML = words.map((w, i) => `<span class="wl"><span class="wd" style="--i:${i}">${esc(w)}</span></span>`).join(" ");
  });
}

/* side scroll-spy */
const SPY = [["hero","spyStart"],["trail","navTrail"],["projects","navProjects"],["skills","navSkills"],["numbers","numbersTitle"],["mind","navMind"],["run","navRun"],["travel","navTravel"],["contact","navContact"]];
function renderSpy(){
  $("#spy").innerHTML = SPY.map(([id, k]) => `<a href="#${id}" aria-label="${esc(T[lang][k])}"><span>${esc(T[lang][k])}</span></a>`).join("");
  markSpy();
}
let spyCurrent = "hero";
function markSpy(){ $$("#spy a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + spyCurrent)); }
const spyIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ spyCurrent = e.target.id; markSpy(); } }), { rootMargin: "-45% 0px -50% 0px" });
SPY.forEach(([id]) => { const el = document.getElementById(id); if (el) spyIO.observe(el); });

/* handwritten hints, shown once and politely */
setTimeout(() => { if (!found.has("think")) $("#hintHead").classList.add("on"); }, 3400);
$("#head").addEventListener("click", () => $("#hintHead").classList.remove("on"));
if (!store.get("bj-hint-eggs", false)){
  setTimeout(() => { $("#hintEggs").classList.add("on"); store.set("bj-hint-eggs", true); setTimeout(() => $("#hintEggs").classList.remove("on"), 6500); }, 9000);
}
$("#trophyBtn").addEventListener("click", () => $("#hintEggs").classList.remove("on"));
let pgTouched = false;
pg.addEventListener("pointerdown", () => { pgTouched = true; $(".h-pg").classList.remove("on"); });
new IntersectionObserver(([en], o) => { if (en.isIntersecting){ setTimeout(() => { if (!pgTouched) $(".h-pg").classList.add("on"); }, 900); o.disconnect(); } }, { threshold: .4 }).observe(pg);

function syncThemeColor(){ const m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = document.documentElement.dataset.theme === "light" ? "#f8f4e8" : "#0b0b0c"; }
syncThemeColor();
setTimeout(routeCase, 0);

/* pause decorative CSS animations in whatever is off screen */
const offIO = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("offscreen", !e.isIntersecting)), { rootMargin: "120px 0px" });
$$("#hero, .marquee, main > section, footer").forEach(el => offIO.observe(el));
let fontsRetro = false;
const _konami = konami;
konami = function(){ if (!fontsRetro){ fontsRetro = true; const l = document.createElement("link"); l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"; document.head.appendChild(l); } return _konami(); };

/* ═══════════════════════════ boot ═══════════════════════════ */
$("#year").textContent = new Date().getFullYear();
$("#statProjects").dataset.count = PROJECTS.length;
buildDonut();
buildBubbles();
applyI18n();
updateEggCount(false);
onScroll();
addEventListener("resize", movePill);
document.fonts && document.fonts.ready.then(movePill);

(function intro(){
  const el = $("#intro");
  let seen = false;
  try { seen = sessionStorage.getItem("bj-intro") === "1"; sessionStorage.setItem("bj-intro", "1"); } catch(e){}
  if (seen || reduced){ el.classList.add("skip"); startHero(); return; }
  const finish = () => { el.classList.add("done"); startHero(); };
  const t1 = setTimeout(() => el.classList.add("burst"), 900);
  const t2 = setTimeout(finish, 1400);
  el.addEventListener("click", () => { clearTimeout(t1); clearTimeout(t2); finish(); });
})();
