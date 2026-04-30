## Issue

On the Top 50 Trending slide (desktop), the left column stacks three cards: heading block, "How it works", and "When to use". The "When to use" card's bullets and the "Timeframe" line are sized at `md:text-2xl`, which overflows the card vertically — top and bottom content gets clipped (visible in the screenshot).

The "How it works" card directly above uses the same oversized `md:text-2xl` for body copy and is also tight.

## Fix

File: `src/components/deck/slides/Top50TrendingSlide.tsx`

Reduce desktop body font sizes in the two stacked GlassPanels and tighten internal spacing so each card's content fits its allotted flex height.

1. "How it works" card (line ~36-39):
   - Title: keep `md:text-2xl` (section header)
   - Body description: `md:text-2xl` → `md:text-lg`

2. "When to use" card (lines ~41-53):
   - Title: keep `md:text-2xl`
   - Bullet text: `md:text-2xl` → `md:text-lg`
   - Bullet dot vertical offset: `md:mt-3` → `md:mt-2` (re-align to smaller text)
   - Timeframe line: `md:text-2xl` → `md:text-lg`
   - Bullet spacing: `md:space-y-2.5` stays; padding `md:p-8` stays

Mobile sizes (`text-xs` / `text-sm`) are unchanged — only desktop (`md:`) sizing is adjusted.

No copy changes, no layout/grid changes, no other slides touched.

## Verification

After the edit, visually check the slide at desktop (1920×1080) to confirm both cards' text sits comfortably inside their boxes with no top/bottom clipping.
