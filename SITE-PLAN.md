# Yuzu-site — Master Plan

The single source of truth for vision, decisions, and progress. Updated as we go.

## What this is
A modern personal website that represents Yu Fu ("Yuzu") across four identities, so
people can understand who he is and reach out to hire or collaborate.

## The four identities
1. **Software Engineer** — the professional/hireable side.
2. **Music Teacher** — lessons and teaching philosophy; attract students.
3. **Rivals** — the event he runs; promote it.
4. **DJ / Artist** — the creative/performance side; a visual centerpiece page.

The homepage was a **2×2 grid launcher**: four full-screen quadrants (one per identity)
that react on hover and click through to that identity's own page. A "YUZU" wordmark
sat at the center (swapped for the logo later). Each identity gets its own dedicated page.

## Update — slice 3, neo-Tokyo redesign
The 2×2 grid assumed four quadrants. The site now has five identities plus About and
Contact. The home page is an Arknights-style cluster of holographic menu tiles
(one per registry module). Tile size and grid position live on each module.

Identities, in registry order:
1. **Software Engineer** — fruit-named apps; Tangerine is a tab manager.
2. **Music Producer (Yuzu)** — hyperbass, hyperpop vocals, bass music, J-pop chords.
3. **Mixing & Mastering** — new section.
4. **Teacher** — JSTDRMN Academy DJ Bootcamp, piano lessons.
5. **Rivals** — the event Yu runs.

About and Contact are utility pages in the same registry. `/music` redirects to
`/teacher`. `/artist` redirects to `/producer`.

Architecture: `src/core/compose.ts` is the composition root. It loads every
`src/modules/<id>/module.ts`. A module exports its metadata, route, blocks, and view.
Pages do not import sections by hand. Adding a section means adding one module.

Visual language is the saved datamosh / neo-Tokyo title loops: `#121212` field,
`#9A00FF` violet, cream `#F8F0D0`, red `#FF2B56` and cyan `#01FAFF` fringes, Unbounded
+ Dela Gothic One + Noto Sans JP + Space Mono, HUD chrome (信号異常, 未来信号, scanlines).
Motion is CSS plus one small canvas, and it shuts off under `prefers-reduced-motion`.

`content/*.md` is still unfilled. Pages use `[placeholder]` for anything that is not
a supplied fact. Do not invent bio, credits, clients, release names, or prices.

## Design direction
Modern, interactive, alive — not a static brochure.
- Full-screen **hero** landing that makes an impression.
- **Scroll-to-reveal**: sections fade/slide into view as you scroll.
- Smooth scrolling, **sticky/animated nav**, subtle parallax where tasteful.
- **Polished, animated buttons** with hover effects.
- Mobile-first and fast (great Lighthouse/SEO scores).

## Stack (decided)
| Layer | Choice |
|---|---|
| Framework | **Astro** (static shell + interactive islands) |
| Styling | **Tailwind CSS** |
| Animation | Scroll-reveal + motion via islands (GSAP / Framer Motion — TBD at build) |
| Content | **Markdown** files in `content/` (what you fill out) |
| Source of truth | **GitHub repo** |
| Hosting | **Cloudflare Pages** (auto-deploy on push) |
| Domain | TBD — buy before launch (~$10/yr) |

## Content storage workflow
- **Google Drive** = staging for raw material (photos, logos, draft text, Rivals/DJ media).
- **GitHub repo** = the live source of truth once we build (markdown + code).
- Drive is for *collecting*; GitHub is for *publishing*.

## What Kevin needs to do
- [ ] Fill out the templates in `content/` (in any order).
- [ ] Drop assets in a Google Drive folder and share it (see `content/assets-needed.md`).
- [ ] Create a free **GitHub** account (I'll guide the exact steps).
- [ ] Create a free **Cloudflare** account (for hosting, later).
- [ ] Pick & buy a **domain** (we'll brainstorm before launch).

## What Claude (me) will do
- [x] Slice 1: planning docs + content templates
- [x] Slice 2: scaffold Astro + Tailwind + git; 2×2 grid landing + 4 stub pages
- [x] Slice 3: neo-Tokyo redesign — signal-index home, five identities + about/contact, plugin registry
- [ ] Software page: each project card links to /software/projects/<slug>. Showcase pages are stubs; build them out later with real content from Yu.
- [ ] Slice 4+: fill pages with real content, slice by slice
- [ ] Launch: connect GitHub → Cloudflare → domain

## Working agreement
- Feature branches + PRs; Kevin reviews and merges to main himself.
- Talk through each change and agree before editing; no surprise bulk edits.
- Plan, then build in small reviewable slices.

## Open questions / parking lot
- Animation library final pick (GSAP vs Framer Motion) — decide at build time.
  (Grid hover is pure CSS; a library is only needed for richer page animation.)
- ~~Own page vs homepage sections?~~ **Decided:** each identity is its own page.
  The 2×2 launcher was replaced in slice 3 by a signal index, because five identities
  do not fit four quadrants. The registry still gives each one a route.
- Domain name ideas.
