

# Speed Up PDF Export & Fix Slide 5 Stall

## Problems
1. **Slide 5 stall**: `HowWeWorkSlide` has 4 `infinite` CSS animations (`glow-sweep`) running continuously. html2canvas-pro tries to serialize the constantly-changing layout, which stalls capture.
2. **Slow overall**: ~1.5s of fixed waits per slide (800ms delay + double RAF + fonts) × 15 slides = noticeable lag even when nothing's loading.

## Fix

### 1. Pause animations during capture (`ExportPdfButton.tsx`)
Inject a global stylesheet right before the capture loop that freezes all CSS animations and transitions, then remove it after:

```css
.exporting-pdf *, .exporting-pdf *::before, .exporting-pdf *::after {
  animation-play-state: paused !important;
  animation-delay: -1s !important;
  transition: none !important;
}
```

Add `exporting-pdf` class to `<html>` for the duration of export. This makes infinite animations land on a deterministic frame and stops html2canvas from spinning.

### 2. Cut wait time per slide
- Drop the fixed 800ms delay to **250ms** (just enough for React commit + paint).
- Keep `document.fonts.ready` (resolves instantly after first slide).
- Keep image `decode()` waits (necessary for visualizers with images).
- Net: ~300ms per slide instead of ~1500ms — full deck goes from ~22s to ~5s.

### 3. Faster JPEG encoding
Lower JPEG quality from `0.92` to `0.85` (visually identical for slides, ~30% smaller + faster encode).

## File Changes
- **`src/components/deck/ExportPdfButton.tsx`** — add/remove `exporting-pdf` class on `<html>`, inject pause-animations style tag, reduce delay to 250ms, lower JPEG quality to 0.85.

## Out of Scope
- Changing the slide's animation itself (we want it kept for live viewing).
- Server-side rendering.

