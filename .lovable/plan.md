

# Improve SoundCloud Case Study Card Spacing

## Problem
The three case study cards on the right are too tightly packed (only `gap-3` on desktop) and the internal padding feels cramped, making the layout look cluttered.

## Fix — two changes in `src/components/deck/slides/SoundCloudRepostsSlide.tsx`

1. **Increase gap between cards** (line 83): Change `gap-2 md:gap-3` → `gap-2 md:gap-5` for more breathing room between the three cards.

2. **Increase internal card padding** (line 85): Change `p-3 md:p-5` → `p-3 md:p-6` so content inside each card has more space.

Both changes are desktop-only (`md:` prefix), keeping mobile compact.

