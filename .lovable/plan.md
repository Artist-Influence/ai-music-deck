## Fix Slide 10 (YouTube Ads) column height alignment

Slide 10 has the same issue Slide 7 had: the left column (header + "What" + "How" panels) and the right column (two case-study cards: Jason Derulo, Mark Tuan) don't match heights on desktop.

### Changes — `src/components/deck/slides/YouTubeAdsSlide.tsx` only

1. **Right column wrapper**: Remove `md:items-center md:justify-center` and the inner `flex flex-col gap-2 md:gap-4` div, replacing with a single flex container that stretches to fill the column height (`md:flex-1 md:h-full md:min-h-0`).

2. **Right-column case-study cards**: Make the two `GlassPanel`s share the available height equally with `md:flex-1 md:min-h-0`, so combined they match the left column's stack (header + What + How).

3. **Thumbnail sizing**: Replace fixed `md:h-[150px]` thumbnail with a flex-friendly height that adapts (keep mobile fixed sizing). Use `md:h-full` on the thumb wrapper inside a fixed-aspect container, or keep current desktop pixel size since cards now stretch — verify metrics row stays anchored at bottom by adding `md:mt-auto` to the metrics grid.

4. **Card internal layout**: Each case-study `GlassPanel` becomes `flex flex-col` on desktop with the metrics grid pushed to the bottom (`md:mt-auto`), so extra vertical space distributes naturally.

5. **Mobile preserved**: All new sizing uses `md:*` prefix — mobile vertical scroll layout is untouched.

### Why this works

`GlassPanel` already propagates `h-full flex flex-col` to its children (fixed previously for Slide 7). Applying `md:flex-1 md:h-full` to the right-column cards plus `md:mt-auto` on the bottom metrics row makes the right column exactly match the left column's `md:min-h-[720px]` stage.