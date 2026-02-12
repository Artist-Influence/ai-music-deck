

# Add Case Study Slides

## Overview
Create 4 new case study slides and keep the existing Subtronics slide (slide 13) as-is. The new slides will use a multi-card format (2-3 case studies per slide) for broader performance highlights.

## Slide Breakdown

### Slide 13 -- Subtronics Fanpage Growth (existing, no changes)
Keep as the single detailed case study.

### Slide 14 (NEW) -- Creator Flood + Top 50 Trending
Two cards side by side:
- **Rich Brian -- Jumpy** (Creator Flood): 10K+ initial posts, 23K+ total creates
- **Major Lazer -- MINI SKIRT** (Top 50 Trending): 5K+ YT creates, 14.9K IG Reels creates, trended across US/Canada

### Slide 15 (NEW) -- Skrillex Fanpage Growth
Single detailed card (similar to Subtronics format):
- **Skrillex -- FUS Album** (Fanpages): 2.1M+ views, 1,557 posts, 6.84% engagement, 42% of album UGC in month one, top post 1.3M+ views

### Slide 16 (NEW) -- YouTube / SoundCloud / Spotify
Three cards:
- **Jason Derulo & Michael Buble -- Spicy Margarita** (YouTube Ads): 11M views, 6.5M unique viewers, 1.1M+ hours watch time
- **Dack Janiels -- Shock Therapy** (Spotify Playlisting): 185.7K streams, 9,950 playlist adds, 3.6% save rate
- **Francis Mercier -- Sauti** (Instagram EDM Seeding): 16.4M views, $0.03 CPM, 89.2K saves

### Slide 17 (NEW) -- Clipping Campaigns
Three cards:
- **Aries -- In The Flesh**: $0.50 CPM, 1.1M+ views, 13.65% engagement
- **Gorgon City -- Mitsubishi**: $0.60 CPM, 3.08M+ views, 102K+ likes
- **Nash Rly -- U & Me**: $0.49 CPM, 1.55M+ views, 48K+ likes

Then Pricing and Next Steps follow as slides 18 and 19.

## Card Design
Each multi-card slide will use a consistent format:
- Slide title + subtitle at top
- Cards in a grid (2-col for 2 cards, 3-col for 3 cards)
- Each card: GlassPanel with artist name, service badge, brief overview sentence, and a metrics grid showing 3-4 key numbers

## Technical Details

### New Files
1. `src/components/deck/slides/CaseStudyCreatorFloodSlide.tsx` -- Rich Brian + Major Lazer (2-col grid)
2. `src/components/deck/slides/CaseStudySkrillexSlide.tsx` -- Skrillex single detailed layout
3. `src/components/deck/slides/CaseStudyPlatformSlide.tsx` -- YouTube/Spotify/Seeding (3-col grid)
4. `src/components/deck/slides/CaseStudyClippingSlide.tsx` -- 3 clipping campaigns (3-col grid)

### Modified Files
5. `src/components/deck/slides/index.tsx` -- Import and insert the 4 new slides after CaseStudySlide, before PricingSlide

### Layout Pattern for Multi-Card Slides
Each slide follows this structure:
- Full-height container with `p-24`, ambient glow background
- Title area: bold heading + muted subtitle
- Card grid using `GlassPanel variant="bright"`
- Each card: service tag (mono, primary), artist name (bold), one-line overview, then a metrics grid with 3-4 stat boxes

### Layout for Skrillex (Single Card)
- Two-column layout similar to existing Subtronics slide
- Left: details (goal, strategy list)
- Right: metrics panel + clip placeholders

