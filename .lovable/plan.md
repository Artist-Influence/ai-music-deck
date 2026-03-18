
Mobile-only fix plan:

1. Fix the mobile deck container first
- `DeckViewer.tsx`: stop forcing every mobile slide into a hard `h-dvh` snap frame.
- Replace the current mobile snap-stack with a normal vertical flow where each slide wrapper uses `min-h-dvh`, not fixed `h-dvh`.
- Remove mobile snap behavior so users can scroll through the full content of each slide naturally before reaching the next one.
- Keep desktop navigation/layout unchanged.

2. Remove the clipping pattern at the slide level
- `ScaledSlide.tsx`: on mobile, remove the nested internal scroll behavior and let the parent deck handle scrolling.
- In the affected slide files, change the outer mobile wrapper from `h-full overflow-hidden` behavior to mobile-safe sizing:
  - `min-h-dvh`
  - `overflow-visible` / `overflow-x-hidden`
  - keep `md:h-full md:overflow-hidden` for desktop
- This is the main reason bottom case studies are getting chopped.

3. Tighten the specific slides the user called out
- `HowWeWorkSlide.tsx`
  - Slightly reduce mobile title/body sizing and vertical gaps.
  - Tighten the bottom disclaimer margin/text so it fully clears the viewport.

- `ClippingSlide.tsx`
  - Make mobile case study cards denser: smaller top media row, smaller metric tiles, tighter gaps.
  - Keep the 5 KPI boxes on one row, but reduce padding/text so the third card fits cleanly.

- `CreatorFloodSlide.tsx`
  - Reduce the mobile screenshot height again.
  - Re-crop the screenshot to the left side only so the three video columns are visible and the right side is cropped out.
  - Tighten the case study metric cards so the full case study clears.

- `YouTubeAdsSlide.tsx`
  - Compress the mobile case study cards: smaller thumbnail block, tighter type, tighter KPI grid spacing.
  - Ensure the second case study is fully visible.

- `SpotifyPlaylistingSlide.tsx`
  - Reduce mobile card padding, artwork size, and metric tile height.
  - Compact the playlist link pills.
  - This specifically targets the 2nd and 3rd case studies being cut off.

- `SoundCloudRepostsSlide.tsx`
  - Same compacting treatment as Spotify so all three case studies render fully on mobile.

- `InstagramSeedingSlide.tsx`
  - Same compacting treatment so the bottom case study is no longer clipped.

- `AdditionalServicesSlide.tsx`
  - Tighten the second case study card on mobile: smaller image, smaller description spacing, denser KPI row.

4. Files to update
- `src/components/deck/DeckViewer.tsx`
- `src/components/deck/ScaledSlide.tsx`
- `src/components/deck/slides/HowWeWorkSlide.tsx`
- `src/components/deck/slides/ClippingSlide.tsx`
- `src/components/deck/slides/CreatorFloodSlide.tsx`
- `src/components/deck/slides/YouTubeAdsSlide.tsx`
- `src/components/deck/slides/SpotifyPlaylistingSlide.tsx`
- `src/components/deck/slides/SoundCloudRepostsSlide.tsx`
- `src/components/deck/slides/InstagramSeedingSlide.tsx`
- `src/components/deck/slides/AdditionalServicesSlide.tsx`

Expected result
- No mobile slide gets visually cut off.
- Users scroll through the actual full content of each slide, instead of the deck forcing viewport-sized clipping.
- Desktop presentation stays the same.
- Creator Flood mobile screenshot shows the left-side 3-column video section more clearly.
