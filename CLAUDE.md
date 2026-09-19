# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is pnpm (pinned via `packageManager: pnpm@12.3.4`).

```bash
pnpm install
pnpm dev      # next dev — http://localhost:3000
pnpm build    # next build
pnpm start    # serve the production build
```

There is no lint or test script and no test framework installed. `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so `pnpm build` will **not** catch type errors — run `pnpm exec tsc --noEmit` to typecheck.

## Architecture

Single-page Next.js 16 App Router site for Illiana Cacoub, ostéopathe D.O. in Paris 3. React 19, Tailwind CSS v4, TypeScript. Content is French throughout.

- `lib/content.ts` — **all copy and links live here** (nav, booking URL, phone, address, motifs, FAQ…). Change wording here, not in the components. Section data arrays are typed and carry their own lucide `icon`.
- `app/page.tsx` — composes the page: a local `Hero` (the only stateful part: a `loaded` flag that adds `.is-loaded` to trigger entry animations) followed by the section components in order.
- `components/sections/*.tsx` — one file per section (osteopathe, motifs, approche, seance, infos, faq, site-footer). Only `faq.tsx` is `'use client'` (accordion state); the rest are server components.
- `app/layout.tsx` — metadata/favicons/viewport, `lang="fr"`, gates `@vercel/analytics` behind `NODE_ENV === 'production'`.
- `app/globals.css` — everything visual, in one file: (1) Tailwind v4 + shadcn theme setup (`@theme inline`, oklch tokens); (2) the hero block; (3) the section block; (4) a `@layer base` reset.

**Styling convention: no Tailwind utilities in the markup.** The hero and every section use semantic class names defined in `globals.css`. The hero is the design system the rest of the page follows — dark ground (`#0a161a`, alternating `#0c1a1f` / `#071114`), Arial, 4px radii, `rgba(255,255,255,.1)` hairlines, `rgba(255,255,255,.035)` card fills, uppercase `.09em` micro-labels, and the shared `.action-button` / `.action-button-light` pair. Reuse those tokens rather than inventing new ones.

Media in `public/` is derived from `hero.mp4` (poster and section stills were cut from it with ffmpeg); `illiana.webp` is her real portrait.

## Conventions

- Tailwind v4 has no `tailwind.config` — configuration lives in `app/globals.css` (`@theme inline`) and PostCSS uses `@tailwindcss/postcss`.
- shadcn is configured (`components.json`, style `base-nova`, baseColor `neutral`, lucide icons) and primitives are built on `@base-ui/react`, not Radix. `components/ui/button.tsx` is the only component so far and is the reference for the cva variant pattern. Add components with `pnpm dlx shadcn@latest add <name>`.
- Import alias `@/*` maps to the repo root (`@/lib/utils`, `@/components/ui/...`). `cn()` in `lib/utils.ts` is the clsx + tailwind-merge helper.
- `images.unoptimized: true`; all imagery is local in `public/` and used via plain `<img>` tags, not `next/image`.
