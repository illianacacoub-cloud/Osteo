# osteo.tfq.one

Landing page for **Illiana Cacoub**, ostéopathe D.O. in Paris 3 — [osteo.tfq.one](https://osteo.tfq.one/).

Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript. Bookings go to Doctolib.

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |

`next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so the build will not surface type errors — run `pnpm exec tsc --noEmit` to typecheck.

## Editing content

All copy and links live in `lib/content.ts` — headline, nav, motifs, FAQ, the Doctolib URL, phone number and address. Change wording there rather than in the components.

Sections are one file each under `components/sections/`. Styling is hand-written CSS in `app/globals.css` using semantic class names; the hero defines the design system the rest of the page follows.

## Analytics

Umami (cloud), website `TFQ`. Two conversion events are tracked via `data-umami-event` attributes, built by the helpers in `lib/analytics.ts`:

- `booking_click` — any CTA opening the Doctolib booking flow
- `phone_click` — any `tel:` link

Both carry `site`, `location` (and `provider` / `context` where relevant). No personal or medical data is sent.

See `CLAUDE.md` for architecture notes.
