# CLAUDE.md — Yuzu-site

Context for any Claude session working on this project. Read `SITE-PLAN.md` first.

## Project
Kevin's ("Yuzu") personal website. Modern, interactive, scroll-reveal site representing
four identities: Software Engineer, Music Teacher, Rivals (event), DJ/Artist.

## Stack
- **Astro** + **Tailwind CSS**, deployed to **Cloudflare Pages**, source on **GitHub**.
- Content authored as markdown in `content/`.
- Interactive islands for animation/scroll-reveal.

## How we work (non-negotiable)
- **Feature branches + PRs.** Never commit straight to main. Kevin reviews & merges.
- **Communicate before changing.** Talk through each change and get agreement before
  editing files. No bulk edits without sign-off.
- **Plan, then slice.** Small, reviewable increments. One concern at a time.
- Explain changes like a reviewer's guide; teach as we go.

## Current status
Slice 2 complete: Astro + Tailwind scaffolded, git initialized. Homepage is a 2×2 grid
launcher (`src/pages/index.astro`) with hover states + click-through to four stub pages.
Next (slice 3): polish grid animation + build out each identity page. Kevin still needs
to fill `content/`, create GitHub + Cloudflare accounts, and pick a domain.

## Run it
- Node is pinned via `.node-version` (24.18.0); fnm auto-switches. Astro needs Node ≥22.12.
- `npm install`, then `npm run dev` → http://localhost:4321. `npm run build` → `dist/`.

## Layout
- `SITE-PLAN.md` — vision, decisions, roadmap, checklist (the master doc).
- `content/*.md` — fill-in templates for site content.
- `src/pages/` — routes: `index` (grid), `software`, `music`, `rivals`, `artist`.
- `src/layouts/Base.astro` — shared `<head>` + Tailwind import.
