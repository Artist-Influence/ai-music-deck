

# Revamp All Slide Copy

## Overview
Update the text content across all 15 slides to match the new copy provided. This also involves structural changes to some slides (e.g., consolidating 4 case study slides into 1, updating the Clipping/Fanpages/UGC slides with much more detailed copy, and reworking the NextSteps and Outcomes slides).

## Changes by Slide

### 1. CoverSlide.tsx
- Already matches the new copy -- no changes needed.

### 2. TheShiftSlide.tsx
- Update subtitle text: "Discovery now happens when your track shows up repeatedly, across platforms, across communities, across formats, until the algorithm can't ignore it."
- The 4 "What wins today" items stay the same.

### 3. TheProblemSlide.tsx
- Update heading and subtext to match new copy exactly.
- The 4 bullet items stay the same. Remove the "system side" aspirational panel on the right -- just keep the problem list.

### 4. WhatCloutedDoesSlide.tsx
- Minor copy refinements: "We do three things well:" label.
- The 3 items stay the same.

### 5. HowWeWorkSlide.tsx
- Update step descriptions:
  - Step 1: "We align on goals, audience, assets, and guardrails. Then we build the distribution plan."
  - Step 2: "We activate the chosen services with tight execution and clear timelines."
  - Step 3: "We double down on what's working, cut what isn't, and keep results moving."
  - Step 4: "Weekly updates, final recap, and reusable learnings for the next drop."

### 6. ClippingSlide.tsx
- Major content expansion. Restructure to include:
  - "What it is" section with description of 10,000+ clippers
  - "How it works" with 4 bullet points (24hr launch, 7-14 days, $1.50/1K views, official sound usage)
  - "What you get" with 3 items
  - "Timeframe: 2 to 4 weeks end-to-end"

### 7. FanpagesSlide.tsx
- Major rewrite. New structure:
  - "What it is" paragraph
  - "What this is great for" (3 items)
  - "What you can expect" (3 items)
  - "Timeframe: 4 to 8+ weeks"
  - Keep placeholder grid for page screenshots

### 8. UGCHacksSlide.tsx
- Major rewrite with two distinct sections:
  - "TikTok Creator Flood" -- what it is, why it works, timeframe
  - "Top 50 Trending and Popular Tab" -- what it is, how it's done (honest version), timeframe
  - "When to use these" section with 3 bullet points

### 9. AdditionalServicesSlide.tsx
- Update to 6 services with new copy and timeframes:
  - Culture Edits (2-3 weeks)
  - Meta and TikTok Ads (2-3 weeks)
  - Spotify Playlisting/Organic (90 days)
  - YouTube Advertising (1-3 weeks)
  - SoundCloud Reposts
  - Instagram Seeding

### 10. OutcomesSlide.tsx
- Complete rewrite. Remove the specific metric numbers (5M+, 200+, etc.) and replace with qualitative outcomes:
  - "More short-form creation volume and velocity"
  - "Higher repeat exposure across different audiences"
  - "Stronger saves, shares, follows, and comments"
  - "Better downstream performance on streaming and long-form video"
  - "Clear signals for what content angles actually convert"
- Add new heading copy: "We don't promise magic. We promise strong execution..."

### 11. ReportingSlide.tsx
- Restructure into two sections:
  - "Weekly updates include" (5 items)
  - "Final recap includes" (3 items)
- Remove the mock dashboard/chart visual and use cleaner list-based layout.

### 12. ExpectationsSlide.tsx
- Update "We need from you" items to new copy (audio links, brand safety, clear primary goal)
- Update "What you should not expect" items to new copy (one viral video, perfect creative taste, results without iteration)

### 13. CaseStudySlide.tsx + slides/index.tsx
- Consolidate from 4 separate case study slides into 1 single slide
- Show 3 placeholder case studies on one slide with Goal/Services/Result highlights/What mattered structure
- Update slides/index.tsx to remove CS1-CS4 and use a single CaseStudiesSlide component

### 14. PricingSlide.tsx
- Update subtitle: "Choose a single service, or build a bundle."
- Update service list to match new items (add UGC Hacks as combined item)
- Add optional bundle line at bottom

### 15. NextStepsSlide.tsx
- Rewrite the 3 steps to 4:
  - Quick kickoff call (20 minutes)
  - We confirm goals, services, and timeline
  - You send assets
  - Launch within 24 to 72 hours depending on services
- Add contact placeholder and optional "24 hours" line
- Update heading to "If this makes sense, here's how we start."

## Technical Details

### Files Modified (13 files)
- `src/components/deck/slides/TheShiftSlide.tsx` -- minor copy update
- `src/components/deck/slides/TheProblemSlide.tsx` -- remove right panel, update copy
- `src/components/deck/slides/WhatCloutedDoesSlide.tsx` -- minor copy tweak
- `src/components/deck/slides/HowWeWorkSlide.tsx` -- update step descriptions
- `src/components/deck/slides/ClippingSlide.tsx` -- major rewrite
- `src/components/deck/slides/FanpagesSlide.tsx` -- major rewrite
- `src/components/deck/slides/UGCHacksSlide.tsx` -- major rewrite
- `src/components/deck/slides/AdditionalServicesSlide.tsx` -- update services and copy
- `src/components/deck/slides/OutcomesSlide.tsx` -- complete rewrite
- `src/components/deck/slides/ReportingSlide.tsx` -- restructure content
- `src/components/deck/slides/ExpectationsSlide.tsx` -- update list items
- `src/components/deck/slides/CaseStudySlide.tsx` -- rewrite as single multi-case-study slide
- `src/components/deck/slides/PricingSlide.tsx` -- update copy and services
- `src/components/deck/slides/NextStepsSlide.tsx` -- rewrite steps and add contact info
- `src/components/deck/slides/index.tsx` -- consolidate case studies from 4 to 1

### Design Approach
- All slides maintain the existing glassmorphism aesthetic, background effects, and layout patterns
- No new dependencies or components needed
- The 1920x1080 slide format is preserved throughout
