
# Four Updates Across Slides 8, 9, 14, and 15

## Overview
Four targeted changes: rename "UGC Hacks" to "UGC Growth," remove Culture Edits from the additional services slide, update the contact info on the final slide, and rework the pricing table.

## Changes

### 1. Slide 8 -- Rename to "UGC Growth" (`UGCHacksSlide.tsx`)
- Update the heading from "UGC Hacks: Creator Flood + Top 50 Trending" to "UGC Growth: Creator Flood + Top 50 Trending"
- Update the `<p>` service label accordingly

### 2. Slide 9 -- Remove Culture Edits (`AdditionalServicesSlide.tsx`)
- Remove the Culture Edits entry from the `services` array (line 4)
- This leaves 5 services; the existing 3-column grid will still work (3 top row, 2 bottom row)

### 3. Slide 15 -- Update Contact Info (`NextStepsSlide.tsx`)
- Replace the placeholder text `[Name] / [Email] / [Phone] / [Clouted website]` with:
  - www.clouted.com
  - Jared Rapoza
  - jared@clouted.com
  - 6178753248

### 4. Slide 14 -- Rework Pricing Table (`PricingSlide.tsx`)
- Remove the "Price" column header and the "Contact" cells from the table (drop the 4th column entirely)
- Remove "Culture Edits" from the services list to stay consistent with slide 9
- Rename "UGC Hacks" to "UGC Growth" for consistency with slide 8
- Add a clickable link below the table: "View full pricing sheet" that opens a URL (placeholder link for now, can be updated later with the real pricing sheet URL)
- Style the link as a prominent, clickable element using the primary color

## Technical Details

### Files Modified (4 files)
- `src/components/deck/slides/UGCHacksSlide.tsx` -- heading text rename
- `src/components/deck/slides/AdditionalServicesSlide.tsx` -- remove Culture Edits from array
- `src/components/deck/slides/NextStepsSlide.tsx` -- replace contact placeholder with real info
- `src/components/deck/slides/PricingSlide.tsx` -- remove Price column, remove Culture Edits row, rename UGC Hacks, add pricing sheet link at bottom
