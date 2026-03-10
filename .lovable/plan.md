

## Fix Slide 7 (Fanpages) Bottom Cutoff

The content overflows the 1080px slide height because the two case study cards with 9:16 thumbnails (220px wide = ~391px tall each) plus the header/subtitle and three left panels are too tall.

### Changes to `FanpagesSlide.tsx`:

1. **Reduce outer padding** from `p-16` to `p-12` — reclaims ~32px vertical space
2. **Reduce subtitle margin** from `mb-8` to `mb-6`
3. **Shrink thumbnail width** from `220px` to `180px` (thumbnail height drops from ~391px to ~320px)
4. **Reduce case study panel padding** from `p-8` to `p-6`
5. **Reduce internal gap** in case study flex from `gap-8` to `gap-6`
6. **Reduce gap between the two cards** from `gap-4` to `gap-3`
7. **Reduce left panel gap** from `gap-4` to `gap-3` and padding from `p-7` to `p-6`

These changes recover ~100px+ of vertical space, preventing the bottom from being clipped while keeping the enlarged text sizes.

