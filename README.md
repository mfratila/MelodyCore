# Melody Core

Site-ul școlii de muzică Melody Core (București) — React + Vite.

## Comenzi

```bash
npm install     # instalare dependențe
npm run dev     # server de dezvoltare (http://localhost:5173)
npm run build   # build de producție în dist/
npm run preview # preview local al build-ului
```

## Structură

```
index.html              punctul de intrare Vite
public/assets/          imagini și iconițe, servite de la /assets/...
src/
  main.jsx              montarea aplicației + BrowserRouter
  App.jsx               rutele
  styles/style.css      stilurile site-ului (un singur fișier global)
  data/                 conținutul editabil (cursuri, testimoniale, contact...)
  hooks/                useReveal, useScrolled, useStaffProgress, useReducedMotion
  components/           Header, Footer, Layout, CtaBanner, Reveal, Seo, icons...
  sections/             secțiunile paginii principale
  sections/maria/       secțiunile paginii „Povestea Mariei”
  pages/                Home, DespreMaria, NotFound
```

## Unde se editează conținutul

Textele care se schimbă des stau în `src/data/`, separat de markup:

| Fișier | Conținut |
| --- | --- |
| `src/data/site.js` | telefon, Instagram, adresă, meniuri, copyright |
| `src/data/courses.js` | cele trei cursuri |
| `src/data/features.js` | „De ce Melody Core” |
| `src/data/testimonials.js` | testimonialele elevilor |
| `src/data/credentials.js` | parcursul Mariei și badge-urile de pe pagina principală |
| `src/data/pricing.js` | prețurile și abonamentele (pagina `/preturi`) |

Pentru a adăuga un testimonial: pune poza în `public/assets/images/testimonials/`
și adaugă o intrare în `src/data/testimonials.js`.

## Rute

| Rută | Pagină |
| --- | --- |
| `/` | pagina principală |
| `/despre-maria` | Povestea Mariei |
| `/preturi` | Prețuri |
| `/politica-de-confidentialitate` | Politica de confidențialitate |
| `/termeni-si-conditii` | Termeni și condiții |
| `/despre-maria.html` | redirect către `/despre-maria` (URL vechi) |
| orice altceva | pagina 404 |

## Deploy

`vercel.json` conține rewrite-ul SPA (toate rutele → `index.html`) și redirectul
permanent de la vechiul `/despre-maria.html`. Pe alt host, ambele reguli trebuie
replicate, altfel accesul direct la `/despre-maria` returnează 404.

## Formularul de contact

Formularul din secțiunea „Prima lecție gratuită” trimite datele pe e-mail prin
[Web3Forms](https://web3forms.com), fără backend și fără bază de date proprie.
Creează o cheie de acces pe web3forms.com (cu adresa de e-mail pe care vrei să
primești cererile) și setează variabila `VITE_WEB3FORMS_ACCESS_KEY` în Vercel
(Settings → Environment Variables) și, local, într-un fișier `.env.local`
(vezi `.env.example`). Fără cheie, formularul afișează un mesaj care trimite
vizitatorul la telefon / Instagram.
