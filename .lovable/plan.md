

## Plan: Add Real Case Studies to Meta & TikTok Ads Slide

### Overview
Replace the placeholder case study data with real campaigns (Gordo for TikTok, Zeds Dead for Meta) and add the uploaded images as thumbnails.

### Changes

**1. Copy uploaded images to `src/assets/`**
- `user-uploads://image-4.png` → `src/assets/gordo-meta-tiktok.png` (Gordo photo)
- `user-uploads://image-3.png` → `src/assets/zeds-dead-logo.png` (Zeds Dead logo)

**2. Update `src/components/deck/slides/AdditionalServicesSlide.tsx`**
- Import the two new images
- Replace the thumbnail area: instead of showing the platform icon, show the actual artist image (240x150px, matching YouTube Ads slide format)
- Update TikTok case data:
  - Artist: "Gordo (@gordoszn)"
  - Campaign description: "24-hour brand awareness campaign focused on views"
  - Metrics: Impressions (1.4M), CPM ($0.31), 6-sec Views (500.7K), 6-sec View Rate (34.7%)
- Update Meta case data:
  - Artist: "Zeds Dead"
  - Campaign: "NA Tour — 6 campaigns, 1 per city"
  - Description: "Multi-layered campaign collecting SMS signups via Laylo. 100+ creatives across 6 simultaneous city-targeted campaigns."
  - Metrics: Impressions (1.3M), Laylo Signups (6,754), CPR ($1.40), Link Clicks (25.4K)
- Make KPI grid use `flex-1 auto-rows-fr` to fill card height (matching YouTube Ads slide)
- Add a small description line below the artist/track text for campaign context

