

## Fix Slide 10 (YouTube Ads) — Title visible + case studies fit within 1080px

The problem: the title/icon row and case study cards are overflowing the 1080px slide height because `flex-1` on the case study cards lets them grow unconstrained, and the image containers expand freely.

### Changes to `YouTubeAdsSlide.tsx`:

1. **Constrain the image container in Case Study 1** — replace `flex-1 min-h-0` with a fixed `max-h-[220px]` so the screenshot doesn't push everything down
2. **Constrain the image container in Case Study 2** — same `max-h-[220px]` 
3. **Remove `flex-1` from both case study GlassPanels** — they should size to content, not stretch. This prevents overflow.
4. **Reduce padding on case study panels** from `p-6` to `p-5`
5. **Reduce metrics gap** from `gap-3` to `gap-2`, and metric padding from `p-4` to `p-3`
6. **Reduce gap between case study cards** — keep `gap-4` but the constrained images will make them fit
7. **Ensure the outer wrapper uses `items-stretch`** so left and right columns align properly within the available height

This keeps the title, subtitle, two description boxes, timeframe, and two compact case studies all visible within the 1080px canvas.

