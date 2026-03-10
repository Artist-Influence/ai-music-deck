

## Fix YouTube Ads Slide — Content Overflow

### Problem
The slide content overflows the 1080px height. The title is cut off at the top, and both case study cards and the "How it works" panel are cut off at the bottom. The `aspect-video` thumbnails are too tall when the cards share the right column.

### Solution — `src/components/deck/slides/YouTubeAdsSlide.tsx`

Reduce sizes across the board to fit everything within 1080px:

1. **Outer padding**: `p-12` → `p-8` (saves 32px vertical)
2. **Left column**:
   - Title: `text-6xl` → `text-5xl`, reduce `mb-4` → `mb-2`
   - Subtitle: `text-2xl` → `text-xl`, reduce `mb-6` → `mb-3`
   - Panel body text: `text-2xl` → `text-lg`
   - Panel headers: `text-2xl` → `text-xl`
   - Panel padding: `p-6` → `p-5`
   - Column gap: `gap-4` → `gap-3`
   - Service label `mb-4` → `mb-2`
   - Timeframe: `text-2xl` → `text-xl`
3. **Right column**:
   - Replace `aspect-video` with fixed `h-[180px]` on thumbnail containers — aspect-video at ~350px width produces ~197px height per thumb; two of those plus headers+metrics overflows. Fixed 180px keeps thumbs large but controlled.
   - Keep `object-cover` for edge-to-edge fill
   - Metric values: `text-xl` → `text-lg`
   - Gap between cards: `gap-3` → `gap-2`
4. **Flex container**: `gap-10` → `gap-8`

**Height estimate**: Right column: 2 × (header ~50px + thumb 180px + metrics ~80px + padding 24px) + 8px gap = ~676px. Left column similar. With `p-8` (64px top+bottom), total ≈ 740px — well within 1080px.

