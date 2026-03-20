

# Translate Case Study Cards and KPI Labels

## Problem
Multiple slides have hardcoded English strings for case study descriptions, KPI metric labels (Views, Likes, Streams, etc.), section headers (Results, Sample clips, Strategy, Goal, etc.), and slide titles. These don't respond to the language picker.

## Scope — Files and Strings to Translate

### 1. Standalone Case Study Slides (no i18n at all currently)

**CaseStudySlide.tsx** (Subtronics fan page):
- Title: "Proof, not promises." / subtitle / "CASE STUDY" / "Client:" / "Goal:" / "Strategy" / strategy items / "Sample clips" / "Results" / metric labels (Views, Likes, Followers, Clips)

**CaseStudySkrillexSlide.tsx** (Skrillex fan page):
- Title: "Community-driven reach." / subtitle / "FANPAGES" / "Goal:" / "Strategy" / strategy items / "Sample clips" / "Results" / metric labels (Views, Posts, Engagement, Album UGC Month 1, Top Post Views, Followers)

**CaseStudyPlatformSlide.tsx** (YouTube/Spotify/Instagram):
- Title: "Platform-native results." / subtitle / tags (YOUTUBE ADS, SPOTIFY PLAYLISTING, INSTAGRAM SEEDING) / overviews / metric labels (Views, Unique Viewers, Watch Time, Avg % Viewed, Streams, Playlist Adds, Save Rate, Algo Streams, CPM, Saves, Engagement)

**CaseStudyClippingSlide.tsx** (Aries, Gorgon City, Nash Rly):
- Title: "Clip. Distribute. Repeat." / subtitle / "CLIPPING" / overviews / metric labels / "Watch Clip" links

**CaseStudyCreatorFloodSlide.tsx** (Rich Brian, Major Lazer):
- Title: "Scale on impact." / subtitle / tags / overviews / metric labels (Initial Posts, Posts Driven, Total Creates, YT Creates, IG Reels Creates, TikTok Creates, Trending Regions)

### 2. Service Slides — Inline Case Study Cards (metric labels only)

These slides already use `useTranslation` for prose but have **hardcoded metric labels**:

- **ClippingSlide.tsx**: CPM, Views, Engagement, Likes, Videos/Posts
- **CreatorFloodSlide.tsx**: Minimum Posts, Posts Driven, Total Creates
- **Top50TrendingSlide.tsx**: YouTube Shorts Creates, Instagram Reels Creates, TikTok Creates Popular Tab, Facebook Reels Creates, YT Shorts Audio Trending, IG Reels Audio Trending
- **SpotifyPlaylistingSlide.tsx**: Streams, Playlist Adds, Saves, Algo Streams
- **SoundCloudRepostsSlide.tsx**: Plays, Likes, Reposts, Comments
- **YouTubeAdsSlide.tsx**: Views, Unique Viewers, Watch Time, Avg % Viewed, Likes, Comments
- **InstagramSeedingSlide.tsx**: Views, Likes, CPM
- **AdditionalServicesSlide.tsx**: Impressions, CPM, 6-Sec Views, View Rate, Link Clicks, Leads, Signups

## Plan

### Step 1 — Add all new keys to `src/i18n/en.ts`

Add ~120 new translation keys covering:
- Case study slide titles, subtitles, section headers
- All prose (goals, strategies, overviews)
- All metric labels across every slide
- Common reusable labels: `'kpi.views'`, `'kpi.likes'`, `'kpi.streams'`, `'kpi.engagement'`, `'kpi.cpm'`, etc.

Use a shared `kpi.*` namespace for labels that repeat across slides (Views, Likes, CPM, Engagement, Streams) and slide-specific keys for unique labels.

### Step 2 — Update all 13 slide components

For each slide:
- Import `useTranslation` (if not already)
- Replace hardcoded strings with `t('key')` calls
- For metric label arrays, use `t()` for the `label` field

### Step 3 — Add translations to all 8 non-English locale files

Add the corresponding translations for every new key in:
- `es.ts`, `pt.ts`, `ko.ts`, `ja.ts`, `zh.ts`, `nl.ts`, `de.ts`, `fr.ts`

## Technical Notes

- Artist names, track names, and numeric values stay hardcoded (not translated)
- Platform names (TikTok, YouTube, Spotify, etc.) stay in English
- Metric labels like "Views", "Likes", "Streams" get translated
- Section headers like "Results", "Strategy", "Goal", "Sample clips" get translated
- Slide titles/subtitles get translated
- The `kpi.*` shared namespace avoids duplicating the same label across multiple slides

