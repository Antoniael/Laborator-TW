# Jurnal de utilizare AI – Laboratorul 2
**Disciplina:** Tehnologii Web  
**Tema:** Vite și JavaScript modern (Proiect: *City Explorer*)  
**Autor:** Voicescu Antonia  
**Instrument AI utilizat:** Google Gemini  

---

## 1. Rezumatul activității
În cadrul acestui laborator, configurarea proiectului cu Vite, împărțirea codului în module ES (`data`, `utils`, `api`) și implementarea funcțiilor de bază (`getOrase`, `getNevizitate`, `totalZile`, `formatDestinatie`, `adaugaDestinatie`, `stergeDestinatie`) au fost realizate individual, urmând pașii și exemplele rezolvate din îndrumarul de laborator.

Asistentul AI a fost utilizat **exclusiv ca instrument de depanare (debugging)** și clarificare conceptuală în trei momente specifice în care am întâmpinat erori în consola browserului.

---

## 2. Interacțiuni și probleme rezolvate

### Interacțiunea 1: Returnarea unui obiect dintr-un Arrow Function
* **Context:** Exercițiul 1 (`numarPeTara`) și Exercițiul 2 (`marcheazaVizitat`).
* **Problema întâmpinată:** La scrierea funcției `marcheazaVizitat`, am încercat să returnez direct noul obiect cu operatorul *spread*, dar primeam eroare de sintaxă sau rezultatul `undefined` în consolă.
* **Prompt utilizat:**
  > *"În JavaScript, de ce expresia `(d) => d.id === id ? { ...d, vizitat: !d.vizitat } : d` îmi dă eroare de sintaxă / returnează undefined când vreau să întorc un obiect nou în `.map()`?"*
* **Explicația primită și soluția aplicată:** Am înțeles că, în sintaxa *arrow function* fără `return` explicit, acoladele `{}` sunt interpretate de motorul JS ca fiind blocul de execuție al funcției, nu un obiect literal. Am rezolvat problema singură în cod prin încadrarea obiectului între paranteze rotunde: `({ ...d, vizitat: !d.vizitat })`.

---

### Interacțiunea 2: Sortarea imutabilă a unei liste de obiecte
* **Context:** Exercițiul 1 (`sortDupaZile`).
* **Problema întâmpinată:** Știam din îndrumar că trebuie să copiez lista cu `[...list]` înainte de `.sort()` pentru a nu modifica array-ul original, dar nu eram sigură de ordinea parametrilor în funcția de comparare pentru a obține o ordonare **descrescătoare**.
* **Prompt utilizat:**
  > *"Cum scriu funcția de comparare în `.sort()` pentru a ordona descrescător un array de obiecte după proprietatea numerică `zile`?"*
* **Explicația primită și soluția aplicată:** Am clarificat că pentru ordine descrescătoare se scade `a` din `b` (`(a, b) => b.zile - a.zile`), rezultând implementarea finală: `[...list].sort((a, b) => b.zile - a.zile)`.

---

### Interacțiunea 3: Așteptarea promisiunilor și tratarea erorii 404 în `fetch`
* **Context:** Exercițiul 3 (`src/api/orase.js` și `loadOrase` în `src/main.jsx`).
* **Problema întâmpinată:** La primul test în consolă, în loc de numele orașului pentru utilizatorul 1, mi s-a afișat `Promise {<pending>}`. De asemenea, am vrut să înțeleg mai bine rolul verificării `if (!response.ok)`.
* **Prompt utilizat:**
  > *"1. Am apelat `fetchUserById(1)` în `main.jsx` și în consolă apare `Promise {<pending>}`. 2. De ce nu sare `fetch` direct în `catch` când pun id-ul 999 (care dă 404) fără să pun eu `if (!response.ok)`?"*
* **Explicația primită și soluția aplicată:** 
  1. Uitasem să adaug cuvântul cheie `await` în fața apelului `fetchUserById(1)` în interiorul funcției `loadOrase()`.
  2. Am reținut că `fetch` consideră cererea eșuată automat doar la erori de rețea (ex. lipsă internet), nu și la coduri HTTP precum `404` sau `500`, motiv pentru care este obligatorie verificarea proprietății `response.ok` și aruncarea manuală a erorii cu `throw new Error(...)`.

---

## 3. Verificare și validare
Toate funcțiile au fost testate în consola browserului (`F12 -> Console`) pe setul de date din `src/data/destinatii.js`, iar codul sursă a fost validat la final folosind comanda `npm run lint`, fără a înregistra erori sau avertismente.