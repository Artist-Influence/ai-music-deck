

## Split Additional Services into Dedicated Slides + Case Studies

### Current State
`AdditionalServicesSlide` has 5 services in a 3-column grid. `CaseStudyPlatformSlide` has case studies for YouTube (Jason Derulo), Spotify (Dack Janiels), and Instagram (Francis Mercier). These need to be merged into individual service slides.

### New Slides

**1. `YouTubeAdsSlide.tsx`** (new file)
- Two-column layout: left = service description (what it is, how it works, timeframe 1-3 weeks), right = Jason Derulo case study card with screenshot + 4 metrics (11M views, 6.5M unique viewers, 1.1M+ hrs watch time, 76.4% avg viewed)

**2. `SpotifyPlaylistingSlide.tsx`** (new file)
- Two-column layout: left = service description (organic playlisting, algorithmic pickup, 12-week timeframe), right = Dack Janiels case study card with screenshot + 4 metrics (185K streams, 9,950 playlist adds, 3.6% save rate, 42K algo streams)

**3. `SoundCloudRepostsSlide.tsx`** (new file)
- Two-column layout: left = service description (verified repost network, genre communities, 2-8 week timeframe), right = placeholder for case study (no existing case study data)

**4. `InstagramSeedingSlide.tsx`** (new file)
- Two-column layout: left = service description (EDM pages and memes, genre-aligned placements, 1-3 week timeframe), right = Francis Mercier case study card with screenshot + 4 metrics (16.4M views, $0.03 CPM, 89.2K saves, 7.16% engagement)

**5. `AdditionalServicesSlide.tsx`** (rewrite)
- Simplified to only Meta & TikTok Ads. Single-service layout with description, timeframe, and the ServicesVisualizer.

### Slide Order Update (`index.tsx`)

Remove: `CaseStudyPlatformSlide`, `OutcomesSlide`, standalone case study slides (per previous plan)

New order after Creator Flood and Top 50 Trending:
```
...
CreatorFloodSlide,
Top50TrendingSlide,
YouTubeAdsSlide,
SpotifyPlaylistingSlide,
SoundCloudRepostsSlide,
InstagramSeedingSlide,
AdditionalServicesSlide,   ← now just Meta & TikTok Ads
Reporting,
Expectations,
Pricing,
NextSteps
```

### Layout Pattern (consistent across all 4 new slides)
- Full slide with `p-24`, `max-w-[1600px]`
- `flex gap-10` two-column
- Left: title, subtitle, 2-3 GlassPanels with `text-xl` headers, `text-base` bullets
- Right: GlassPanel with case study screenshot, artist/track info, 2x2 metrics grid

### Files
- **New:** `YouTubeAdsSlide.tsx`, `SpotifyPlaylistingSlide.tsx`, `SoundCloudRepostsSlide.tsx`, `InstagramSeedingSlide.tsx`
- **Rewrite:** `AdditionalServicesSlide.tsx` (Meta & TikTok only)
- **Update:** `slides/index.tsx` (new order)

