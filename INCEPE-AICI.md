# Cum vizualizezi site-ul RobboMaster — Ghid rapid

Acest ghid te ajută să vezi site-ul **pe calculatorul tău în 15 minute**, fără configurări complicate. Vei putea naviga toate paginile, vei vedea designul real cu logo-ul și pozele tale.

> **Notă:** Chatbot-ul AI și logarea Firebase nu vor funcționa fără chei (e ok pentru previzualizare). Le configurăm în pasul următor după ce vezi designul.

---

## ✅ PASUL 1 — Instalează Node.js (5 minute)

**Pe Mac:**
1. Deschide Terminal (Cmd+Space → scrie "Terminal")
2. Verifică dacă ai deja Node: `node --version`
3. Dacă apare "command not found", instalează de la **https://nodejs.org** (apasă pe butonul mare verde "LTS")

**Pe Windows:**
1. Descarcă Node.js de la **https://nodejs.org** (apasă pe butonul mare verde "LTS")
2. Instalează normal (Next, Next, Finish)
3. **Repornește calculatorul** după instalare
4. Deschide PowerShell (Win+R → scrie `powershell` → Enter)
5. Verifică: `node --version` — trebuie să afișeze ceva de genul `v20.x.x`

---

## ✅ PASUL 2 — Pune codul pe calculator (2 minute)

1. Dezarhivează `robbomaster-site.zip` într-un loc ușor de găsit (ex. Desktop)
2. **Mac:** click dreapta pe folderul `robbomaster-final` → "New Terminal at Folder"
3. **Windows:** Shift+click dreapta pe folder → "Open in Terminal" (sau "Open PowerShell")

---

## ✅ PASUL 3 — Instalează dependențele (5 minute)

În terminal, rulează:

```bash
npm install
```

Așteaptă 3-5 minute. Vei vedea text scrolling pe ecran și posibil câteva warning-uri galbene — sunt **normale**, ignoră-le. La final apare promptul gol din nou.

---

## ✅ PASUL 4 — Pornește site-ul (1 minut)

În același terminal, rulează:

```bash
npm run dev
```

Vei vedea ceva de genul:
```
   ▲ Next.js 15.0.3
   - Local:        http://localhost:3000
   ✓ Ready in 2.3s
```

**Deschide browserul și mergi la:** http://localhost:3000

🎉 **Site-ul tău e live pe calculator!**

---

## Ce vei putea testa

✅ **Toate paginile publice** — Acasă (cu hero, module colorate, testimoniale, secțiunea cu instructorul tău), Cursuri (toate 6 modulele), Locații, Contact

✅ **Logo-ul tău real** integrat în navbar, footer și chat header

✅ **Pozele tale reale** — instructorul cu băiețelul în hero, robotul DJI cu tabletele, fetița cu Arduino în pagina cursuri

✅ **Designul complet** — galben mustard, accente colorate pe module (galben/portocaliu/roșu/albastru/verde/violet), bordure negre 2px, butoane block-style cu efect de apăsare

✅ **Typography premium** — Space Grotesk pentru titluri, Inter pentru text, JetBrains Mono pentru numere

✅ **Buton WhatsApp flotant** — funcționează direct, deschide chat-ul cu numărul vostru

⚠️ **Chatbot AI** — va răspunde "Asistent indisponibil" până configurezi cheia Anthropic (vezi `.env.example`)

⚠️ **Login părinte** — va da eroare până configurezi Firebase (vezi `.env.example`)

⚠️ **Plăți Netopia** — schelet pregătit, necesită cont merchant + freelancer pentru implementare completă

---

## Cum opresti site-ul

În terminal, apasă **Ctrl+C** (pe Mac și Windows). Site-ul se oprește.

## Cum repornești

Rulează din nou `npm run dev` în acel folder.

---

## Probleme frecvente

### "command not found: npm"
Node.js nu e instalat sau nu a fost găsit. Repornește calculatorul după instalare.

### Eroare "Module not found" sau alte erori la `npm install`
Șterge folderul `node_modules` (dacă există) și rulează din nou `npm install`.

### Pozele nu se încarcă
Verifică că folderul `public/images/` conține fișierele: logo.png, hero-instructor.jpg, dji-robot.jpg, arduino-girl.jpg, classroom.jpg, coding-session.jpg.

### Portul 3000 e deja folosit
Pornește pe alt port: `npm run dev -- -p 3001` apoi mergi la http://localhost:3001.

---

## Următorii pași (după ce vezi site-ul)

1. **Îmi spui ce vrei modificat** — culori, structură, texte
2. **Configurăm Firebase** (15 min) — pentru login părinte și salvare lead-uri
3. **Configurăm Claude AI** (10 min) — pentru chatbot funcțional
4. **Deploy pe Vercel** (45 min) — site online la robbomaster.ro

Toate aceste pași sunt în README-ul complet din arhivă.

---

**Te-ai blocat?** Scrie-mi în chat ce vezi pe ecran (textul exact al erorii) și te ajut.
