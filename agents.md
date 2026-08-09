# Melody Core — agents.md

Instructions for Claude Code when working on the Melody Core website. Read this fully before making changes.

## Project overview

- **Business**: Melody Core, a music school in Bucharest run by teacher Maria Chicoș.
- **Site type**: single-page marketing + booking site. No CMS, no user accounts.
- **Language**: Romanian, everywhere — copy, meta tags, alt text, aria-labels, form labels, error/success messages. Do not default to English for anything user-facing.
- **Starting point**: `melody-core-mockup.html` (already built and approved as the visual direction). Treat it as the real base to iterate on, not a throwaway sketch — refine it, don't redesign it from scratch, unless explicitly asked to.

## Tech stack

- Plain HTML / CSS / vanilla JS. No framework, no build step, no bundler.
- Fonts loaded via Google Fonts CDN (already wired up): Fraunces, Caveat, Quicksand.
- No backend yet. The booking/contact form needs a decision (Formspree, mailto, or a real backend later) — don't silently pick one; surface the options.
- No animation libraries (GSAP, AOS, etc.). All motion is hand-rolled CSS transitions + a small amount of vanilla JS (Intersection Observer). Keep it dependency-free.
- Target hosting: static hosting (Netlify, GitHub Pages, or Cloudflare Pages). Domain and hosting provider are not chosen yet — flag this rather than assuming one.

## File structure

```
melody-core/
├── index.html
├── css/
│   └── style.css          (currently inline in index.html — extract when the file grows)
├── js/
│   └── main.js            (currently inline — extract when the file grows)
├── assets/
│   ├── images/             (real photos once supplied — none exist yet, mockup uses placeholder blocks)
│   └── icons/               (if icons get extracted from inline SVG)
└── agents.md
```

Right now everything lives in one `index.html` for simplicity, matching the mockup. Extract CSS/JS into separate files once the project moves past the mockup stage or the file gets unwieldy — don't do it prematurely.

## Design tokens

These are extracted directly from the real Melody Core flyer and wallpaper assets — do not substitute similar-looking colors or "improve" the palette.

```css
--orange:       #F2884A;   /* primary background */
--orange-deep:  #E8622A;   /* accent / blob shapes */
--maroon:       #4A0E08;   /* primary text, banners, CTAs */
--maroon-deep:  #2D0803;   /* darkest accent */
--cream:        #FFE8C9;   /* card / logo backdrop */
--peach:        #F6AE79;   /* secondary background accent */
--gold:         #BA8049;   /* dividers, icon strokes */
--paper:        #FFFAD9;   /* lightest surface, body background */
```

Typography:
- **Display / logo / headings**: `Fraunces` (weight 600–900) — bold rounded serif, matches the wordmark.
- **Script accent** (used sparingly, for emotional emphasis only — taglines, pull-quotes): `Caveat` (600–700).
- **Body / UI**: `Quicksand` (400/500/700).

Other conventions already established in the mockup — follow them rather than introducing new patterns:
- Corner radius: 20–24px on cards, pill/ribbon shapes (via `clip-path`) on primary CTA buttons.
- Icons are custom stroke-based SVGs matching the flyer's hand-drawn line-icon style (piano, microphone, treble clef, heart, location pin). **Do not swap these for a generic icon font/set** (Font Awesome, Material Icons, etc.) — it breaks the handmade brand feel. If a new icon is needed, draw it in the same thin-stroke, rounded-linecap style.
- Breakpoints: 860px (tablet) and 560px (mobile). Mobile-first is not literal in the current CSS (desktop-first with overrides), but keep testing narrow viewports since most traffic will be from Instagram on mobile.

## Page sections (single scrolling page, in order)

| Section (id) | Purpose | Content status |
|---|---|---|
| Header (fixed) | Logo + "Prima lecție gratuită" CTA, solidifies on scroll | Final |
| Hero | Logo lockup, tagline, subtext, primary CTA | Placeholder subtext — fine to keep or refine |
| `#despre` | About Maria — bio, teaching philosophy | **Placeholder copy** — needs Maria's real bio |
| `#cursuri` | 3 course cards: Pian, Canto, Teoria muzicii | Final structure, descriptions are draft copy |
| De ce Melody Core (no id) | 4 differentiators from the original flyer | Final — copy taken directly from flyer |
| `#testimoniale` | Testimonial carousel (3 slides, prev/next + dots, slide transition) | **Placeholder testimonials** (Elena, Andrei, Ioana) — replace with real ones |
| `#locatie` | Address + note about booking a time | Real address, see Business facts below |
| `#cta` | Repeated "Prima lecție GRATUITĂ" banner + phone/Instagram | Real contact info |
| Footer | Mini logo, anchor nav, copyright | Final |

## Business facts (real — use exactly as given, never invent or round)

- **Teacher**: Maria Chicoș (currently the only teacher — don't add a "team" section or imply multiple teachers)
- **Address**: Drumul Gura Siriului 22, Sector 3, București
- **Phone**: 0734 098 077
- **Instagram**: melody.core_music.school
- **Lesson format**: in-person only, at the studio address above — no online/hybrid option, don't imply otherwise
- **Courses offered**: Pian, Canto, Teoria muzicii
- **Age groups**: copii de la 4 ani, adolescenți, adulți
- **Promotion**: first lesson is free ("Prima lecție gratuită") — this is the primary CTA across the whole site

## Known gaps — do not fabricate these, leave clearly marked placeholders instead

- **Business hours / weekly schedule** — not provided yet. Current copy sidesteps this ("stabilim împreună cel mai bun interval orar"). Replace once given real hours; don't invent a schedule.
- **Real testimonials** — replace the 3 placeholder ones before launch.
- **Real photos** — Maria's photo, studio photos, student/recital photos. The "About" section currently has an empty placeholder block.
- **Domain name and hosting provider** — not chosen.
- **Map** — the Locație section uses a stylized pin illustration, not a real embedded map. Swap for a real Google Maps embed once that's approved (check for a privacy-friendly embed approach, and get explicit confirmation before adding any third-party embed that loads external trackers).

## Interaction and animation conventions

- **Scroll reveal**: sections have class `reveal` (and `reveal-group` for staggered children); a single `IntersectionObserver` toggles `.visible`. Reuse this pattern for any new section — don't introduce a second animation system.
- **Staff-line divider**: the SVG path between Hero and the next section animates its `stroke-dashoffset` on scroll-into-view as a signature brand touch. This is intentionally a one-off, not meant to repeat between every section.
- **Testimonial carousel**: track-based (`transform: translateX`), prev/next buttons + dot indicators, wraps around at both ends. Keep this pattern if more slides are added later — don't switch to a plugin/library.
- **Sticky header**: solidifies (`background` + `box-shadow`) after `window.scrollY > 40`.
- All animation respects `prefers-reduced-motion: reduce` — any new animation must be added to that media query too.

## What not to do

- Don't turn this into a multi-page site (separate URLs) — the single-scrolling-page decision was deliberate given it's a solo-teacher, in-person-only business.
- Don't default to a generic "AI-generated" look (unrelated cream+terracotta+serif template, rainbow icon sets, stock gradients) — the palette and type choices above are final, derived from the client's actual brand assets.
- Don't add features that weren't asked for (dark mode, multi-language toggle, e-commerce, blog) without checking first.
- Don't silently pick a form backend, hosting provider, or domain — these are open decisions, surface them.

## Immediate next steps for Claude Code

1. Confirm whether to keep everything in one `index.html` or extract `css/style.css` and `js/main.js` now.
2. Wire up the "Prima lecție gratuită" / contact form once a form backend is chosen.
3. Add basic SEO: Romanian meta description, Open Graph tags, favicon (needs a source image — the MC monogram from the brand assets is the natural candidate).
4. Swap placeholder testimonials, photos, and business hours for real content as they're supplied.
