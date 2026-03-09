

## Split UGC Hacks into Two Slides with Case Studies

Replace the single `UGCHacksSlide` with two new slides, each combining service info on the left and the corresponding case study on the right.

### New Files

**`CreatorFloodSlide.tsx`**
- Two-column `flex gap-10` layout, `p-24`, `max-w-[1600px]`
- **Left:** Title "Creator Flood", service description from UGCHacksSlide left panel (what it is, why it works), "When to use" bullets, timeframe (3-4 weeks)
- **Right:** Rich Brian case study card — screenshot (`rich-brian-jumpy-tiktok.png`), artist/track info, overview, 2x2 metrics grid (10K+ initial posts, 23K+ posts driven, 29.9K+ total creates)

**`Top50TrendingSlide.tsx`**
- Same two-column layout
- **Left:** Title "Top 50 Trending & Popular Tab", service description from UGCHacksSlide right panel (what it is, how it's done), "When to use" bullets, timeframe (2-3 weeks)
- **Right:** Major Lazer case study card — 4-image grid (YT Shorts, Facebook, TikTok, IG screenshots), artist/track info, overview, 2x2 metrics grid (5K+ YT creates, 14.9K+ IG creates, 2K+ TikTok creates, US/CA trending)

### Updated Files

**`slides/index.tsx`**
- Remove `UGCHacksSlide` import and array entry
- Add `CreatorFloodSlide` and `Top50TrendingSlide` imports
- Insert them at positions 8 and 9 (after FanpagesSlide, before YouTubeAdsSlide)

### Files
- **New:** `CreatorFloodSlide.tsx`, `Top50TrendingSlide.tsx`
- **Updated:** `slides/index.tsx`
- `UGCHacksSlide.tsx` no longer imported (kept on disk)

