

## Plan: Move Timeframe Inside Last GlassPanel on Slides 8–14

On slides 6 and 7, the timeframe text sits **inside** the last left-side GlassPanel, separated by a top border (`pt-4 border-t border-white/[0.06] mt-4`). On slides 8–14, it's currently a standalone `<p>` **below** the last GlassPanel. This plan moves the timeframe into the last GlassPanel for consistency.

### Files to modify (7 files)

Each change follows the same pattern: remove the standalone `<p className="text-2xl text-primary font-medium">Timeframe: ...</p>` and append a `<div className="pt-4 border-t border-white/[0.06] mt-4">` with the timeframe text inside the last GlassPanel on the left column.

1. **`CreatorFloodSlide.tsx`** (slide 8) — Move "Timeframe: 3 to 4 weeks" into the "When to use" GlassPanel
2. **`Top50TrendingSlide.tsx`** (slide 9) — Move "Timeframe: 2 to 3 weeks" into the "When to use" GlassPanel
3. **`YouTubeAdsSlide.tsx`** (slide 10) — Move "Timeframe: 1–3 weeks" into the "How it works" GlassPanel
4. **`SpotifyPlaylistingSlide.tsx`** (slide 11) — Move "Timeframe: 12 weeks" into the "Why it works" GlassPanel
5. **`SoundCloudRepostsSlide.tsx`** (slide 12) — Move "Timeframe: 2–8 weeks" into the "Why it works" GlassPanel
6. **`InstagramSeedingSlide.tsx`** (slide 13) — Move "Timeframe: 1–3 weeks" into the "Why it works" GlassPanel
7. **`AdditionalServicesSlide.tsx`** (slide 14) — Move "Timeframe: 2–3 weeks" into the "How it works" GlassPanel

