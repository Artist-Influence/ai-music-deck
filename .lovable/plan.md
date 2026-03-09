

## Fix Top 50 Trending Slide — Case Study Overflow

The case study GlassPanel on the right uses `h-full` + `flex-1 min-h-0` on the image grid, causing the panel to stretch beyond the slide bounds and get cut off at the bottom (metrics and lower images hidden).

### Changes to `Top50TrendingSlide.tsx`

1. **Remove `h-full`** from the right GlassPanel (line 65) — let it size naturally instead of stretching to fill the column
2. **Replace `flex-1 min-h-0`** on the image grid (line 73) with a **fixed max-height** (`max-h-[340px]`) so the 2x2 screenshot grid is constrained and leaves room for the metrics below
3. **Match left column layout** — change the left column from `justify-center` to `justify-between` with the right column doing the same, ensuring both columns align vertically within the available space
4. **Add `items-center`** to the right column wrapper so the panel centers vertically without overflowing

**Result:** The case study panel fits within the slide with all 4 screenshots visible as a compact grid, metrics fully visible below, and proper padding throughout.

