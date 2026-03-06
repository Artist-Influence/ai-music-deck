

## Slide 6 — Redesign for Larger Text and Better Visual Hierarchy

The current layout crams too much into two small glass panels with `text-sm` bullets, making everything feel cramped and hard to read. The visualizer on the right also competes for space.

### Proposed Layout

Switch to a **full-width layout** (no side visualizer) with the content spanning the full `max-w-[1600px]`. Use a **two-column grid** but with more generous padding, larger text, and clear visual separation.

### Changes (all in `src/components/deck/slides/ClippingSlide.tsx`)

1. **Remove the ClippingVisualizer** — drop the import and the right-side flex column. The content will span the full width, giving text room to breathe.

2. **Increase text sizes throughout**:
   - Bullet text: `text-sm` → `text-base`
   - Section headers ("Pros", "How it works", "Why We Are Different"): `text-lg` → `text-xl`
   - Bullet dots: `w-1.5 h-1.5 mt-2` → `w-2 h-2 mt-2.5`
   - Timeframe: `text-sm` → `text-base`

3. **Increase panel padding**: `p-6` → `p-8` on both GlassPanels.

4. **Increase gap between panels**: `gap-6` → `gap-8`.

5. **Make the left panel vertically centered** with the right panel by ensuring equal visual weight — the Pros panel gets slightly more spacing (`space-y-3` instead of `space-y-2`).

6. **Remove `max-w-[900px]`** constraint on the content wrapper since it no longer shares space with the visualizer; let it fill `max-w-[1600px]`.

This gives each panel roughly 750px of width at 1920px resolution — plenty of room for readable `text-base` content with comfortable padding.

