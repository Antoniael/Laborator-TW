# Jurnal de utilizare AI – Laboratorul 3
**Disciplina:** Tehnologii Web  
**Tema:** Componente React, props și state (Proiect: *City Explorer*)  
**Autor:** Voicescu Antonia  
**Instrument AI utilizat:** Google Gemini  

---

## 1. Rezumatul activității
În cadrul acestui laborator, s-a trecut de la structura de script bazat pe consolă la construirea unei interfețe grafice interactive utilizând biblioteca **React**. 

Activitatea a presupus:
* Curățarea fișierelor de stil și configurarea unui layout flexibil și modern cu **CSS Grid** (`src/index.css` și `src/App.css`).
* Modularizarea interfeței în componente reutilizabile (`DestinatieCard`, `ListaDestinatii`, `Rezumat`, `FormularDestinatie`).
* Gestionarea fluxului unidirecțional de date prin **props** și a stării aplicative cu hook-ul **`useState`**.
* Implementarea formularelor controlate și tratarea evenimentelor (`onClick`, `onChange`, `onSubmit`).
* Realizarea cerinței suplimentare de ștergere a unei destinații din listă.

Asistentul AI a fost utilizat pentru clarificarea principiilor de transmitere a datelor/evenimentelor, rezolvarea cazurilor particulare de validare și structurarea cerinței suplimentare.

---

## 2. Interacțiuni și probleme rezolvate

### Interacțiunea 1: Fluxul de date și actualizarea stării la evenimentul de click
* **Context:** Exercițiul 2c – marcarea unei destinații ca fiind vizitată.
* **Problema întâmpinată:** Înțelegerea principiului „evenimentele urcă, datele coboară” și de ce componenta copil `DestinatieCard` nu poate modifica direct obiectul destinației.
* **Prompt utilizat:**
  > *"De ce nu pot schimba direct proprietatea `destinatie.vizitat = !destinatie.vizitat` în interiorul componentei `DestinatieCard` la click pe buton?"*
* **Explicația primită și soluția aplicată:** În React, proprietățile primite prin `props` sunt read-only (imutabile) pentru componenta copil. Starea întregii liste se află în componenta rădăcină `App.jsx`. Pentru a modifica starea, copilul trebuie să apeleze o funcție callback primită prin props (`onToggle`), iar în părinte se apelează funcția de actualizare `setDestinatii((curent) => marcheazaVizitat(curent, id))`.

---

### Interacțiunea 2: Validarea input-ului numeric în formularul de adăugare
* **Context:** Exercițiul 3 – componenta `FormularDestinatie.jsx`.
* **Problema întâmpinată:** Formularul permitea introducerea unui număr negativ de zile, ceea ce altera calculul totalului de zile din rezumat.
* **Prompt utilizat:**
  > *"De ce pot să adaug o destinație cu zile pe minus și cum previn introducerea de valori negative sau zero?"*
* **Explicația primită și soluția aplicată:** S-a clarificat că elementul HTML `<input type="number">` nu restricționează implicit valorile negative, iar verificarea din îndrumar testa doar existența textului pentru oraș și țară. Soluția aplicată a constat în:
  1. Adăugarea atributului `min="1"` pe inputul HTML.
  2. Adăugarea condiției explicite în handlerul `handleSubmit`: `if (!oras.trim() || !tara.trim() || isNaN(numarZile) || numarZile <= 0) return;`.

---

### Interacțiunea 3: Implementarea cerinței suplimentare de ștergere
* **Context:** Cerința suplimentară de la finalul laboratorului (pagina 18).
* **Problema întâmpinată:** Integrarea funcției `stergeDestinatie` scrise în laboratorul precedent și propagarea funcției `onDelete` de la `App` către `DestinatieCard`.
* **Prompt utilizat:**
  > *"Ce cuprinde cerința suplimentară și cum implementez ștergerea unei destinații din stare prin props?"*
* **Explicația primită și soluția aplicată:** Am definit handlerul `handleDelete(id)` în `App.jsx`, folosind `setDestinatii((curent) => stergeDestinatie(curent, id))`. Funcția a fost pasată ca prop `onDelete` prin `ListaDestinatii` până la `DestinatieCard`, unde a fost asociată unui buton dedicat stilizat corespunzător cu clasa `.btn-sterge`.

---

## 3. Verificare și validare
* **Comportament UI:** S-a verificat în browser (`http://localhost:5173`) funcționarea reactivă: marcarea ca vizitat schimbă aspectul cardului și actualizează rezumatul, adăugarea inserează un card nou, iar ștergerea elimină cardul selectat.
* **Cazuri de margine:** S-a testat ștergerea tuturor cardurilor, moment în care se afișează corect mesajul informativ *„Nu există nicio destinație.”*.
* **Validare cod:** Proiectul a fost verificat cu `npm run lint` (`eslint .`), fără a rezulta erori de sintaxă sau avertismente legate de regulile React Hooks.

