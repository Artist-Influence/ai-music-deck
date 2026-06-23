# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page React app that renders an Artist Influence **sales pitch deck** (a sequence of full-screen slides) for the **music** vertical. It's a Lovable-generated Vite project. There is no traditional "app"; the product *is* the deck. Viewers are gated by an email capture, leads are stored in Supabase, and the deck can be exported to PDF and viewed in 11 languages. The UI is styled to match the artistinfluence.com brand: dark blue-black canvas, red + oxblood accents, Helvetica Neue headings, Inter body, JetBrains Mono labels, with a global drifting ambient glow, film grain, red cursor dot, and subtle card tilt (all in `src/index.css` + `AmbientGlow`/`CursorDot`).

## Commands

```sh
npm run dev          # Vite dev server on http://localhost:8080
npm run build        # production build
npm run build:dev    # build in development mode
npm run lint         # eslint over the repo
npm run test         # vitest run (single pass)
npm run test:watch   # vitest watch mode
npx vitest run src/test/example.test.ts   # run a single test file
```

Package manager: both `bun.lockb` and `package-lock.json` are committed; `npm` is what the README and scripts assume.

## Architecture

### Slide system (the core)
- `src/pages/Index.tsx` — gates on `localStorage['ai_deck_email']`. No email → `EmailGate`; otherwise → `DeckViewer`. Wrapped in `ErrorBoundary`.
- `src/components/deck/slides/index.tsx` — **the slide manifest.** Exports `slides: LazyExoticComponent[]`. Every slide is `lazy()`-imported (code-split so each slide + its image imports is its own chunk). **To add, remove, or reorder slides, edit the `slides` array here**; `DeckViewer` renders strictly in array order. The active deck is the 19-slide music vertical. Some extra slide files in the folder (alternate case studies, plus `SurrogateActivationSlide` left over from a politics fork in this repo's history) are intentionally not in the manifest.
- `src/components/deck/DeckViewer.tsx` — orchestrates everything: keyboard nav (←/→/↑/↓/space, `f` fullscreen, `g` grid, `Esc`), sidebar thumbnails, grid overview, fullscreen, PDF export trigger, and a separate `MobilePager` (embla carousel, swipe + edge-tap) for mobile.
- `src/components/deck/ScaledSlide.tsx` — **every slide is authored at a fixed 1920×1080 canvas.** Desktop wraps the slide in a `transform: scale()` computed from container size via `ResizeObserver`. Three modes: scaled (default desktop/thumbnails), `isMobile` (renders as a normal responsive scrolling page — slides also carry their own `md:` responsive markup), and `forceFullSize` (native 1920×1080, no scaling — used only by the offscreen PDF export portal).

### Slide authoring conventions
- Slides live in `src/components/deck/slides/`. Reusable building blocks: `GlassPanel` (frosted-glass card with gradient border + shimmer; variants `default`/`bright`/`subtle`), `visuals/*` (animated SVG/CSS backdrops like `AtelierFieldVisual`), and various `*Visualizer` components.
- Author desktop layout for the 1920×1080 canvas **and** mobile layout via Tailwind `md:` breakpoints in the same component (see `WhatWeDoSlide.tsx` as the reference pattern).
- Text rendered directly over a visual (no GlassPanel) should use the `.text-on-visual*` utility classes (defined in `src/index.css`) for legibility.

### Theming
- Dark, red-accented brand theme. All colors are HSL CSS variables in `src/index.css` (`:root`) surfaced through Tailwind tokens in `tailwind.config.ts` — **use semantic tokens** (`bg-background`, `text-primary`, `hsl(var(--primary))` in SVG), never hardcoded hex. Primary is red (`0 72% 51%`). Custom animations (float, aurora-drift, shimmer-sweep, equalizer, etc.) are defined in the Tailwind config.
- shadcn/ui components live in `src/components/ui/` (alias `@/components/ui`). Path alias `@/` → `src/` (configured in both `vite.config.ts` and `vitest.config.ts`).

### Internationalization
- `src/i18n/` holds **static per-locale dictionaries** (`en.ts`, `es.ts`, … 11 languages in `locales.ts`). `en.ts` is the single source of truth — keys are dot-notation (`slideName.keyName`, arrays as `slideName.arr.0`).
- `LanguageContext.tsx` provides `useTranslation()` → `t(key)`. Lookup falls back locale → English → the raw key. Locale persists in `localStorage['deck_locale']`; RTL (`ar`) flips `document.dir`.
- **When adding translatable copy:** add the key to `en.ts` first, then the other locale files. Slides call `t('...')` rather than hardcoding strings. (`supabase/config.toml` references a `translate-deck` edge function used to generate these, but it is not in the repo — translations are committed static files.)

### Supabase backend
- Client: `src/integrations/supabase/client.ts` (env: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` in `.env`). `types.ts` is generated — do not hand-edit.
- `EmailGate` inserts into the `deck_leads` table (anon insert is the only RLS policy) and fire-and-forgets the `send-email` edge function for an instant notification. **Access is granted even if the DB write or email fails** — capture is best-effort, never a blocker.
- Edge functions (Deno, in `supabase/functions/`): `send-email` (Resend API, needs `RESEND_API_KEY`) and `weekly-lead-digest` (batches un-sent leads, marks `sent_in_digest`). Migration: `supabase/migrations/`.

### PDF export
`ExportPdfButton.tsx` walks each slide, renders it offscreen at native 1920×1080 via the `forceFullSize` portal in `DeckViewer`, freezes animations, captures with `html2canvas-pro`, and assembles with `jsPDF`. Has per-slide and per-image timeouts to avoid hanging on a stuck slide.

## Testing

Vitest + jsdom + Testing Library. Config in `vitest.config.ts`, setup in `src/test/setup.ts`. Tests match `src/**/*.{test,spec}.{ts,tsx}`. Coverage is currently minimal (one example test).

## TypeScript

`tsconfig` is deliberately loose: `strictNullChecks`, `noImplicitAny`, and unused-var checks are **off**. Don't assume strict-mode guarantees.
