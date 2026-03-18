

# Mobile: Vertical Scroll Deck + Slide Fixes

## Big Change: Navigation Model
Instead of showing one slide at a time with bottom arrows, render **all slides in a vertical scroll container** with CSS scroll-snap. Each slide snaps to fill one screen. Remove the bottom nav bar on mobile entirely.

### DeckViewer.tsx (mobile section)
- Replace single-slide view + overlay nav with a vertical scroll container
- Each slide rendered in a `h-dvh` div with `snap-start`
- Container: `overflow-y-auto snap-y snap-mandatory`
- Remove bottom nav bar, edge-tap handlers on mobile

### Slide-specific fixes

| Slide | Issue | Fix |
|-------|-------|-----|
| 1 (Cover) | Logo too low | Add `md:pb-[10%]` — only apply bottom padding on desktop, move content up on mobile |
| 5 (HowWeWork) | Title cut off | Reduce mobile padding, make step cards more compact |
| 6 (Clipping) | Top/bottom cut off, KPI boxes too big | Make metrics `grid-cols-5` on mobile (all on one line), reduce padding |
| 7 (CreatorFlood) | Screenshot too tall | Reduce `max-h` of screenshot on mobile, crop tighter |
| 8 (Top50Trending) | Top/bottom cut off | Reduce padding and text sizes |
| 9 (YouTubeAds) | Same as 8 | Reduce padding, smaller thumbnails and metric boxes |
| 10 (SpotifyPlaylisting) | Top cut off | Reduce padding, tighter spacing |
| 11 (SoundCloudReposts) | Bottom cut off | Same pattern — reduce spacing |
| 12 (InstagramSeeding) | Top/bottom cut off | Same pattern |
| 13 (AdditionalServices) | Top/bottom cut off | Same pattern |

### Core pattern for slides 5-13
The issue is these slides use `p-5` + `flex items-center justify-center` on mobile which centers content but it overflows the viewport height. Fix: change mobile to `py-3 px-4` and use `justify-start` on mobile so content flows from the top and fits within `h-dvh`.

### Files to edit
- `DeckViewer.tsx` — vertical snap-scroll on mobile, remove nav bar
- `CoverSlide.tsx` — move logo up
- `HowWeWorkSlide.tsx` — compact mobile layout
- `ClippingSlide.tsx` — inline KPI metrics
- `CreatorFloodSlide.tsx` — smaller screenshot
- `Top50TrendingSlide.tsx` — tighter spacing
- `YouTubeAdsSlide.tsx` — tighter spacing
- `SpotifyPlaylistingSlide.tsx` — tighter spacing
- `SoundCloudRepostsSlide.tsx` — tighter spacing
- `InstagramSeedingSlide.tsx` — tighter spacing
- `AdditionalServicesSlide.tsx` — tighter spacing

