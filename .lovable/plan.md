# Fix: Safari first-load reliability

## Root cause

The deck has **~21MB of images** in `src/assets/`, with 11 files between 1MB and 2.4MB (PNGs and unoptimized JPGs). Every slide is statically imported at the top of `slides/index.tsx`, and every image is statically imported at the top of its slide. This means Vite bundles **all 18 slides + all images** into the initial JS payload that loads before any pixel renders.

On Safari (especially iOS/cellular), this combination causes intermittent first-load failures:
- The ~1.5MB JS bundle plus eager image fetches saturate the connection
- Safari has stricter timeouts and a more aggressive memory cap than Chrome
- Service worker / HTTP cache state from earlier deploys can wedge requests, requiring a hard reload

This matches the reported behavior: "needed to reload 3 times" — once the assets are warm in cache, it works.

## What we'll change

### 1. Compress oversized images (biggest win)

Re-encode the 11 large assets to web-appropriate sizes. Target: each image ≤ 250KB, total assets folder under 5MB.

| File | Current | Target | Method |
|---|---|---|---|
| `site-rsun.png`, `site-kompany.png`, `site-levity.png`, `site-pierce.png` | 1.1–2.4MB PNG | ~150KB WebP | Convert PNG → WebP @ 1600px wide, q80 |
| `mau-p-the-less-i-know-the-better.jpg`, `francis-mercier-sauti-artwork.jpg`, `all-american-rejects-get-this.jpg`, `yeat-bnyx-im-yeat.jpg` | 1.2–2.2MB JPG | ~200KB JPG | Re-encode @ 1200px, q82 mozjpeg |
| `rich-brian-jumpy-tiktok.png`, `gordo-meta-tiktok.png` | 1.8–2.0MB PNG | ~200KB WebP | PNG → WebP @ 1200px, q80 |
| `francis-mercier-sauti.png` | 1.5MB PNG | ~150KB WebP | PNG → WebP @ 1400px, q80 |

Update the import paths in slides where filename extensions change (PNG → WebP).

### 2. Code-split slides

Convert `src/components/deck/slides/index.tsx` to use `React.lazy()` so each slide (and its image imports) becomes its own chunk. Wrap the slide render points in `DeckViewer.tsx` with `<Suspense fallback={null}>`. Result: initial JS drops from ~1.5MB to a small shell + only the first slide + its assets.

### 3. Lazy-load offscreen images

Add `loading="lazy"` and `decoding="async"` to all `<img>` tags in case-study / playlisting / websites slides. The cover slide logo keeps eager loading.

### 4. Robust first-paint shell

Add a minimal HTML fallback inside `<div id="root">` in `index.html` (centered logo + "Loading…") so users see something instantly even before React hydrates. Add a `<link rel="preconnect">` to the Supabase URL so the email-gate insert doesn't add latency on submit.

### 5. Cache-busting safety net

Add `<meta http-equiv="Cache-Control" content="no-cache">` style headers via a small script that detects a stale chunk-load error (`ChunkLoadError` / "Failed to fetch dynamically imported module") and triggers a single automatic hard reload with a `?v=timestamp` query. This handles the case where a user has a half-cached old deploy — the most common cause of "had to reload 3 times" on Safari.

Specifically, extend `ErrorBoundary.tsx` to detect chunk-load errors and auto-reload once (guarded by a sessionStorage flag so it never loops).

## Technical notes

- Image conversion: use `nix run nixpkgs#imagemagick` and `nix run nixpkgs#libwebp` in a one-off script.
- `React.lazy` requires default exports — all slide files already use `export default`, so no refactor needed.
- The PDF export portal in `DeckViewer.tsx` renders one slide at a time; lazy loading is compatible (Suspense already handles it).
- No changes to slide content, copy, layout, or i18n.

## Out of scope

- Service worker / PWA install (not currently used)
- Migrating to a CDN-hosted image pipeline
- Changing the email-gate flow
