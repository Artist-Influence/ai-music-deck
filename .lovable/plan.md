## Slide 5 — pillar bubble spacing tweak

The screenshot shows the stacked layout (red label directly above white description) where the two lines feel cramped.

In `src/components/deck/slides/WhatWeDoSlide.tsx`, on the pillar `GlassPanel`:

- Change `gap-3 md:gap-10` → `gap-5 md:gap-12`
  - Mobile / narrow: `gap-3` → `gap-5` (more breathing room between the red label and white subtext when stacked vertically)
  - Desktop wide: `md:gap-10` → `md:gap-12` (slightly more horizontal space between label column and description)

No other changes — panel padding, font sizes, and inter-panel spacing stay as-is.
