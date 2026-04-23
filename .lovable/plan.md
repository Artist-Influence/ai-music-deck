

# Fix PDF Export — Capture Live Slides as Screenshots

## Problem
The current export renders each slide into a detached DOM node via `createRoot`, but:
- It doesn't include the app's React providers (LanguageProvider, TooltipProvider, QueryClient), so translations and context-dependent visuals break
- `html2canvas` can't render modern CSS used heavily here (oklch colors, backdrop-filter, complex gradients, SVG animations, custom fonts)
- Result: blank-ish pages with no visualizers, no proper text, no styling

## Solution
Switch to capturing the **live, already-rendered** slide from the actual viewer DOM, one slide at a time, then assemble into a PDF. The viewer already mounts each slide with all providers and full styling.

### Approach
Replace `ExportPdfButton.tsx` to:
1. Accept `setCurrent` and `current` from `DeckViewer` so it can drive navigation
2. For each slide index `i`:
   - Call `setCurrent(i)` and wait ~600ms for render + animations + image loads
   - Find the live `.slide-content` element (the unscaled 1920×1080 layer inside `ScaledSlide`)
   - Temporarily reset its transform to `scale(1)` and make it visible at 1920×1080 (off-screen positioning so user doesn't see flicker)
   - Capture with `html2canvas` using `foreignObjectRendering: true` and a backing color matching `--background`
   - Restore the original transform
3. Assemble JPEG frames into a landscape jsPDF at 1920×1080
4. Restore original slide index when done

### Fallbacks for html2canvas limitations
- Use `html2canvas-pro` (drop-in replacement that supports `oklch`, modern color functions, and `backdrop-filter`) instead of `html2canvas`
- Set explicit `backgroundColor` (resolved from computed `--background`) so transparent areas don't render black
- Pre-scroll slide into view and wait for `document.fonts.ready` plus `requestAnimationFrame` x2 before capture
- For each slide, also `await` all `<img>` `decode()` calls inside it

### File Changes
- **`src/components/deck/ExportPdfButton.tsx`** — rewrite to accept `{ current, setCurrent, totalSlides }` props, drive navigation, capture live DOM, restore state
- **`src/components/deck/DeckViewer.tsx`** — pass `current`, `setCurrent`, `slides.length` into `<ExportPdfButton />`; also temporarily hide sidebar/toolbar isn't needed since we capture only the inner slide element
- **`package.json`** — add `html2canvas-pro` dependency (replaces or supplements `html2canvas`)

### UX during export
- Disable navigation, show progress toast "Capturing slide X of Y"
- After completion, restore the user's original slide
- If a single slide capture fails, log it and continue (don't abort the whole PDF)

## Out of Scope
- Server-side rendering via Puppeteer (would require an edge function and auth) — not needed; client capture of live DOM is sufficient
- Per-slide PNG export — single combined PDF only

## Technical Notes
- The viewer scales slides via `transform: scale(...)`. We capture the inner unscaled `.slide-content` div directly at native 1920×1080, so output is crisp regardless of viewport size
- Mobile users won't see the export button (it's already in the desktop toolbar only)
- Capture happens in the visible DOM, so all CSS, fonts, animations, and i18n work exactly as the user sees them

