

## Fix YouTube Ads Slide — Thumbnails Cut Off

### Problem
The two case study cards with `h-[200px]` thumbnails + header text + 6 metrics each overflow the 1080px slide height. The thumbnails are YouTube 16:9 format — at the card's available width (~350px after padding), a 16:9 thumbnail is only ~197px tall, but the total card height (header ~70px + thumb 200px + metrics ~120px + padding ~32px = ~422px) × 2 + gap = ~860px, which should fit in ~888px usable (1080 - 96 padding - 96 for gap/margins). The issue is likely that the thumbnail `object-cover` is cropping rather than the cards overflowing.

### Solution — Shrink everything slightly for a clean fit

**File: `src/components/deck/slides/YouTubeAdsSlide.tsx`**

1. **Thumbnail**: Change from `h-[200px]` to `h-[160px]` — still shows the key part of each thumbnail clearly.

2. **Card header text**: Reduce artist to `text-xl` (from `text-2xl`), track to `text-lg` (from `text-xl`), "CASE STUDY" label to `text-xs` (from `text-base`). Tighten margins (`mb-0.5` instead of `mb-1`, `mb-1.5` instead of `mb-2`).

3. **Metrics**: Reduce values to `text-lg` (from `text-xl`), labels to `text-xs` (from `text-sm`), padding `p-1.5` (from `p-2`).

4. **Card padding**: `p-3` (from `p-4`).

5. **Gap between cards**: `gap-3` (from `gap-4`).

**Height per card**: ~60px header + 160px thumb + ~90px metrics + 24px padding = ~334px  
**Total right column**: 334 × 2 + 12px gap = ~680px — comfortably within bounds, leaving room for the `items-stretch` alignment with the left column.

