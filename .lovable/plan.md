

## Fix YouTube Ads Slide (Slide 10) — Everything Cut Off

### Problem
The `flex-1 min-h-0` on the thumbnail containers causes them to greedily consume all vertical space, pushing the title/subtitle off-screen and cutting off the metrics grid at the bottom. The slide is 1080px tall but the content overflows.

### Solution — Fixed thumbnail heights with proper proportions

**File: `src/components/deck/slides/YouTubeAdsSlide.tsx`**

Replace the greedy `flex-1` thumbnail approach with fixed, predictable heights:

1. **Thumbnail container**: Remove `flex-1 min-h-0`, use a fixed `h-[200px]` — enough to show the YouTube thumbnails clearly without overflowing the slide.

2. **Metrics grid**: Reduce padding from `p-3` to `p-2` and font sizes from `text-2xl`/`text-lg` to `text-xl`/`text-sm` to keep things compact.

3. **Card padding**: Keep `p-4`, reduce text sizes for artist name from `text-3xl` to `text-2xl` and track from `text-2xl` to `text-xl`.

4. **Left column**: Reduce GlassPanel padding from `p-8` to `p-6` to better match the right column height.

**Height budget** (1080px slide, 96px padding = 984px usable):
- Right column: 2 cards × ~430px + 16px gap = ~876px ✓
- Each card: header (~80px) + thumbnail (200px) + metrics (2 rows × ~60px + gap) + padding = ~420px

This keeps both columns balanced, shows full thumbnails, all metrics visible, and titles/subtitles intact.

