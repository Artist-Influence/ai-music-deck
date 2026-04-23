

# Fix PDF Export — Render Each Slide Offscreen at Full 1920×1080

## Why It's Broken
The current export grabs `.slide-content` from the live viewer, but:
- The viewer's container has `overflow: hidden` and is sized to the user's viewport (often <1080px tall). At `scale(1)`, most of the 1920×1080 slide is clipped away, so html2canvas captures a chopped, wrong region.
- `<div key={current}>` in `DeckViewer` remounts the slide on every navigation, racing with the 700ms wait and html2canvas's reading of the DOM.
- Result: every PDF page ends up looking like the same partial view of slide 1.

## Fix
Stop trying to capture from the live viewer. Instead, mount each slide into a dedicated **offscreen 1920×1080 portal** that has all the same React providers, then capture it cleanly.

### Approach
1. **Add an export portal to `DeckViewer`**: a fixed-position `<div>` sized exactly 1920×1080, positioned far off-screen (`left: -10000px`), with no clipping. Toggled via state `exportSlideIndex: number | null`. When non-null, render `<ScaledSlide isMobile={false} forceFullSize><Slides[exportSlideIndex] /></ScaledSlide>` inside it.
2. **Add `forceFullSize` prop to `ScaledSlide`**: when true, skip the scale calculation and render at native 1920×1080 with no `transform` and no `overflow:hidden`.
3. **Rewrite `ExportPdfButton`** to drive the portal:
   - For each slide `i`: set `exportSlideIndex = i`, await fonts ready + 2 RAFs + 800ms + all images decoded.
   - Find the portal's slide-content element (use a stable id like `#export-capture`), capture with `html2canvas-pro` at exactly 1920×1080 with the resolved `--background` color.
   - Add to jsPDF page.
   - When done: set `exportSlideIndex = null` and restore viewer.
4. **Don't touch the visible viewer state** during export — the user keeps seeing whatever slide they were on; only the offscreen portal cycles.

### File Changes
- **`src/components/deck/DeckViewer.tsx`** — add `exportSlideIndex` state + offscreen portal div; pass `setExportSlideIndex` (instead of `setCurrent`) to `ExportPdfButton`.
- **`src/components/deck/ScaledSlide.tsx`** — add optional `forceFullSize` prop that renders children at fixed 1920×1080 with no scaling/clipping, wrapped in a div with id `export-capture`.
- **`src/components/deck/ExportPdfButton.tsx`** — rewrite signature to `{ setExportSlideIndex, totalSlides }`; loop through slides driving the portal; capture `#export-capture`; assemble PDF.

### Why This Works
- The offscreen portal is sized exactly 1920×1080 with no parent clipping, so html2canvas-pro renders the entire slide regardless of the user's viewport.
- All React providers (LanguageProvider, TooltipProvider, etc.) are inherited because the portal lives inside `DeckViewer`'s tree.
- No fight with `key={current}`, fade-in animations, or viewport scaling — those only apply to the visible viewer.
- Each slide is freshly mounted in the portal, so visualizers run their animations from frame 0; the 800ms wait gives them time to settle.

### UX
- Progress toast "Capturing slide X of Y" stays the same.
- User sees no flicker in the visible viewer — the portal is offscreen.
- On error in one slide, log and continue with the next.

## Out of Scope
- Server-side rendering / Puppeteer.
- Per-slide PNG export.
- Animating the visible viewer during export.

