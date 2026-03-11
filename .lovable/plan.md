

## Multi-Slide Cleanup Plan

### Deck-wide: Remove em-dashes and en-dashes from visible copy
Replace `—` (em-dash) in user-facing text with commas, periods, or restructured sentences. Replace `–` (en-dash) in timeframes with "to" for consistency (some slides already use "3 to 4 weeks" while others use "1–3 weeks").

**Files affected:** ClippingSlide, FanpagesSlide, CreatorFloodSlide, Top50TrendingSlide, YouTubeAdsSlide, SpotifyPlaylistingSlide, SoundCloudRepostsSlide, InstagramSeedingSlide, AdditionalServicesSlide, NextStepsSlide

Key examples:
- `'Bot detection — payment only for genuine views'` → `'Bot detection: payment only for genuine views'`
- `'Focused on converting real outcomes — not just impressions'` → `'Focused on converting real outcomes, not just impressions'`
- `'Timeframe: 1–3 weeks'` → `'Timeframe: 1 to 3 weeks'`
- Case study goal text like `'Fan Page Network — Sustained visibility...'` → restructure with commas or periods

### Slide 5 (HowWeWorkSlide.tsx)
- Change bottom section from `grid-cols-3` to `grid-cols-2`
- Merge "Weekly updates include" and "Final recap includes" into one box called **"Reporting includes"** with a combined, de-duped bullet list
- Keep "We need from you" as the second box
- Tighten footer to: *"What not to expect: results without testing and iteration."*

### Slide 7 (FanpagesSlide.tsx)
- Make the `FanpageVisualizer` render horizontally instead of vertically. Update the SVG viewBox and feed layout in `FanpageVisualizer.tsx` to arrange columns side by side in a wider, shorter aspect ratio (e.g., viewBox `0 0 500 180`) so it fits naturally below the "What it is" text.

### Slide 9 (Top50TrendingSlide.tsx)
- Add TikTok to the case study description: change to include "TikTok" alongside YouTube Shorts, Instagram Reels, and Facebook Reels

### Slide 10 (YouTubeAdsSlide.tsx)
- Change section title classes from `text-foreground` to `text-primary` for "What it is:" and "How it works:"

### Slide 11 (SpotifyPlaylistingSlide.tsx)
- Change `'Not pay-for-play — organic, genre-aligned discovery'` to `'No bots; organic, genre-aligned playlists'`

### Slide 12 (SoundCloudRepostsSlide.tsx)
- Add a bullet in the "What it is" section mentioning 50M+ followers worth of managed artists (total group reach)

### Slide 15 (Reporting/Expectations)
- Already removed from the slide index. The file `ReportingExpectationsSlide.tsx` still exists on disk but is not rendered. No action needed unless you want the file deleted for cleanup.

---

**Files modified (10):** HowWeWorkSlide, FanpagesSlide, FanpageVisualizer, Top50TrendingSlide, YouTubeAdsSlide, SpotifyPlaylistingSlide, SoundCloudRepostsSlide, ClippingSlide, AdditionalServicesSlide, InstagramSeedingSlide. Plus em-dash/en-dash cleanup across all slide files with visible text dashes.

