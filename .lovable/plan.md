

## Redesign Meta & TikTok Ads Slide (14) to Match Service Slide Layout

### Changes to `AdditionalServicesSlide.tsx`:

1. **Outer container**: `p-24` → `p-12`, remove `flex-col items-center`, keep `flex items-center justify-center`.

2. **Inner flex**: `items-start` → `items-stretch`.

3. **Left column** — match Spotify/SoundCloud/Instagram pattern:
   - Title: `text-5xl` → `text-6xl`
   - Subtitle: `text-xl` → `text-2xl`, `mb-10` → `mb-6`
   - "What it is" panel: `p-5` → `p-8`, text sizes to `text-2xl`
   - "How it works" panel: `p-5` → `p-8`, text sizes to `text-2xl`, add `flex-1` to stretch and align with bottom of second case study
   - Remove `GlassPanel subtle` timeframe wrapper, replace with plain `<p className="text-2xl text-primary font-medium mt-2">Timeframe: 2–3 weeks</p>`
   - Wrap panels in `flex-1 flex flex-col gap-4` inner container

4. **Right column** — replace ServicesVisualizer with two case study placeholder cards:
   - **Card 1 (TikTok)**: TikTok icon in 80x80 artwork slot, "Artist Name" / "Track Title", tag label "TIKTOK ADS", 4-column metrics grid with dashes (Impressions, Clicks, CTR, CPM)
   - **Card 2 (Meta)**: Facebook icon in 80x80 artwork slot, "Artist Name" / "Track Title", tag label "META ADS", same 4-column metrics grid with dashes
   - Each card: `GlassPanel variant="bright" className="p-5 flex-1 flex flex-col justify-center"`

5. **Remove** `ServicesVisualizer` import (no longer needed).

