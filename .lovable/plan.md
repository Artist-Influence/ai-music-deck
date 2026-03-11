

## Two-Slide Update

### Slide 5 — Collapse reporting bullet points (`HowWeWorkSlide.tsx`)

Current 5 bullets in "Reporting includes":
1. What launched, what's live, what's next
2. Top creatives and patterns worth doubling down on
3. Platform metrics that matter (not vanity noise)
4. Results by service with best-performing angles
5. Recommendations for the next release

Merge bullets 2+5 and 3+4:
1. What launched, what's live, what's next
2. Top creatives, patterns worth doubling down on, and recommendations for the next release
3. Platform metrics that matter and results by service with best-performing angles

Lines 71-77 — replace the 5-item array with the 3-item array.

---

### Slide 7 — Visualizer and case study thumbnails (`FanpageVisualizer.tsx` + `FanpagesSlide.tsx`)

**Visualizer redesign** — The current visualizer uses 4 rows of scrolling cards in a 500×170 viewBox crammed into `h-16`. It's barely visible. New approach within the same `h-16` wrapper:
- Change viewBox to `0 0 500 60` (shorter, wider aspect) with 2 rows instead of 4, fitting the slim container better.
- Increase card opacity from `0.06`/`0.15` to `0.12`/`0.3` so cards are clearly visible.
- Increase stroke width and inner element opacity.
- Use `preserveAspectRatio="xMidYMid meet"` instead of `"none"` so it scales proportionally.
- Add a subtle pulsing glow on cards to represent active fan pages.

**Case study thumbnails** — Center the thumbnail vertically within each case study box:
- Line 99: Change `<div className="flex gap-5 h-full">` inner thumbnail wrapper to use `items-center` so the thumbnail is vertically centered.
- Change `<div className="w-[160px] shrink-0">` to `<div className="w-[160px] shrink-0 flex items-center">`.

### Files to edit
- `src/components/deck/slides/HowWeWorkSlide.tsx` (lines 71-76)
- `src/components/deck/FanpageVisualizer.tsx` (full rewrite of SVG layout)
- `src/components/deck/slides/FanpagesSlide.tsx` (line 99, add `items-center`)

