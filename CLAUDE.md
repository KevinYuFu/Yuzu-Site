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
Slice 3 in review: neo-Tokyo glitch redesign on top of the Astro + Tailwind scaffold.
Home is a holographic tile menu (Arknights-style cluster). Sections are plugins under `src/modules/`,
composed by `src/core/compose.ts`: software, producer, mixing, teacher, rivals, about,
contact. `content/` is still unfilled — pages show `[placeholder]`s. Still to do: real
copy, GitHub + Cloudflare accounts, and a domain. Do not deploy from this slice.

## Run it
- Node is pinned via `.node-version` (24.18.0); fnm auto-switches. Astro needs Node ≥22.12.
- `npm install`, then `npm run dev` → http://localhost:4321. `npm run build` → `dist/`.

## Layout
- `SITE-PLAN.md` — vision, decisions, roadmap, checklist (the master doc).
- `content/*.md` — fill-in templates for site content.
- `src/core/compose.ts` — composition root. Loads `src/modules/*/module.ts`.
- `src/modules/<id>/` — one folder per section (metadata, route, view).
- `src/pages/` — `index` (home) and `[slug]` (every registered section). `/music` → `/teacher`, `/artist` → `/producer`.
- `src/layouts/Base.astro` — shared `<head>`, HUD chrome, Tailwind import.
