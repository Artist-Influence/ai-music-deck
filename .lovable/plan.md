

## Fix Vertical Spacing and Panel Sizing on Slide 15

**Problem:** The four GlassPanels sit top-aligned with large empty space below. Left panels are taller than right panels, creating visual imbalance.

**Fix in `src/components/deck/slides/ReportingExpectationsSlide.tsx`:**

1. **Vertically center the content** — change the inner `flex flex-col gap-4 flex-1` wrapper to also include `justify-center` so the two panels sit centered in the available vertical space (between title and slide bottom).

2. **Give all four panels equal height** — use `flex-1` on each GlassPanel so they share space equally within their column. This makes the "Weekly updates" panel the same height as "Final recap", and "We need from you" the same height as "What you should not expect".

3. **Vertically center content inside each panel** — add `justify-center` to each GlassPanel's flex column so the text sits centered within the equalized height.

**Concrete changes:**
- Each GlassPanel: `className="p-6 text-left flex-1 flex flex-col justify-center"`
- The wrapping `div` around the panels: `className="flex flex-col gap-4 flex-1 justify-center"` — actually keep without `justify-center` since `flex-1` on children will fill evenly

Single file, ~4 class additions.

