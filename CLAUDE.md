# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Turbopack) at localhost:3000
npm run build    # production build (also type-checks)
npm run start    # serve the production build
npm run lint     # eslint
npx tsc --noEmit # type-check only, no build
```

There is no test suite configured.

## Architecture

Single-page Next.js **Pages Router** portfolio site (not App Router — `pages/index.tsx` is the only route). All content is one long scrolling page assembled in `pages/index.tsx` from section components in `components/`, in this order: `Nav`, `Hero`, `About`, `Experience`, `Skills`, `Contact`, `Footer`.

**Content is data-driven, not hardcoded in JSX.** All resume content (profile, skills, languages, work history) lives in `lib/cv.ts` as typed exports (`profile`, `skills`, `languages`, `experience`). To update site copy, edit `lib/cv.ts`, not the components. The source CV PDF is in `public/Nyoman-Arie-Pranasakti-CV.pdf`; `profile.cvFile` points to it and is used by the "Download CV" buttons (plain `<a download>` tags, no JS).

**Lazy-reveal-on-scroll** is custom-built, not a library: `lib/useInView.ts` wraps `IntersectionObserver` in a hook, and `components/Reveal.tsx` uses it to render children only once they scroll into view — no fade/slide transition, content appears instantly (per design intent: lazy-loaded but not animated). Wrap any new scroll-triggered content in `<Reveal>`.

**Styling** is Tailwind v4, configured CSS-first in `styles/globals.css` via `@theme inline` (no `tailwind.config.js`). Design tokens (`--color-background`, `--color-surface`, `--color-accent`, `--color-accent-light`, `--color-muted`, `--font-heading`, `--font-mono`) are defined there and consumed as Tailwind utility classes (`bg-surface`, `text-accent`, `font-heading`, etc.). The palette and type system intentionally mirror https://sinantokmak.framer.website/ (dark charcoal background, cyan/teal accent, Ubuntu for headings, IBM Plex Mono for body/nav/labels).

Fonts are loaded once via `next/font/google` in `lib/fonts.ts` (`ubuntu`, `ibmPlexMono`) and their CSS variables are applied at the root in `pages/_app.tsx`, not per-component.

`SectionHeading` (`components/SectionHeading.tsx`) renders the "01 — Profile" style numbered heading used at the top of each major section; reuse it rather than hand-rolling heading markup.

This project runs on Next.js 16 / React 19 — APIs may differ from older Next.js knowledge. Check `node_modules/next/dist/docs/02-pages/` for Pages-Router-specific reference material when in doubt.
