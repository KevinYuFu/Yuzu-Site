# Yuzu site

Yu Fu's personal site: software engineer, music producer Yuzu, mixing and mastering, and teacher. It also has the Rivals event, About, and Contact.

Live: https://yuzutofu.vercel.app

Vercel deploys `main` on its own.

Built with Astro 7 and Tailwind 4.

## Run it

Node is pinned in `.node-version` (24.18.0).

- `npm install`
- `npm run dev` — local site at http://localhost:4321
- `npm run build` — writes `dist/`

`npm run build` runs `npm run check` first. That check does two things:

- Identity check. Names stay in `src/content/`.
- CSS-import rule. A file may import CSS only from its own folder.

## Where things live

- `src/core/` — composition root. `compose.ts` loads every section. `define.ts` checks that a section is complete. `copy.ts` has `text()` and `gap()`.
- `src/modules/<section>/` — one folder per page.
  - `content.ts` — the words
  - `module.ts` — the wiring (route, order, home tile)
  - `.astro` — the view, when that section has its own
- `src/content/` — shared identity and bio. This is the single source for names and bios. `identity.ts` holds the names. `bio.ts` holds the bios. `profile.ts` is the home portrait.
- `src/components/<name>/` — each component in its own folder, with its CSS in that same folder.
- `src/styles/theme.css` — shared theme. `src/layouts/Base.astro` is the file that imports it.
- `src/pages/` — home (`index.astro`), one page per section (`[slug].astro`), a 404, plus project pages at `software/projects/[slug].astro` and class pages at `teacher/[id].astro`.
- `src/layouts/Base.astro` — shared page shell.
- `docs/` — the site plan and notes. Start with `docs/SITE-PLAN.md`. `docs/content/` holds fill-in notes.
- `public/` — fonts, images, and the favicon.

Sections today: `software`, `yuzu`, `mixing`, `teacher`, `rivals`, `about`, `contact`.

Software and teacher use their own views. The other sections use the shared section view.

Old links: `/music` goes to `/teacher`. `/producer` and `/artist` go to `/yuzu`. Those redirects live in `astro.config.mjs`.

## Add a section

1. Add a folder: `src/modules/<id>/`.
2. Put the words in `content.ts`.
3. In `module.ts`, export `section` from `defineSection()`. Point it at those words. Give it a unique `id`, `slug`, and `order`.
4. Put the home tile on a free spot in the 12×8 grid. An overlap fails the build.
5. Export `View` only when the section needs its own `.astro` file. Skip it to use the shared section view.

`compose.ts` finds every `module.ts` on its own.

## Edit text

- One page: edit that section's `content.ts`.
- A name or a shared bio: edit `src/content/identity.ts` or `src/content/bio.ts`.
- The home portrait: edit `src/content/profile.ts`.

`text()` is real copy. `gap()` is a placeholder. Placeholders show as `[placeholder: …]`.

Keep personal names in `src/content/identity.ts`. `bio.ts` may repeat a name, because that bio is fixed copy. The identity check fails the build if a name is written in another file.

The site reads `content.ts` and `src/content/`. Files in `docs/content/` are planning notes.

## Rules worth knowing

Longer notes live in [CLAUDE.md](CLAUDE.md) and [docs/SITE-PLAN.md](docs/SITE-PLAN.md).

- Work on a branch and open a PR. Leave `main` for review and merge.
- A CSS file is imported only from its own folder. The shared theme is the one exception, and only `Base.astro` imports it.
- Leave a `gap()` until the real words are supplied. Bios, credits, clients, release names, and prices stay blank until they are given.
