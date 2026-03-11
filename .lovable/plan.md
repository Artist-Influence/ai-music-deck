

## Update Slide 4 Title and Visualizer Text Colors

**File:** `src/components/deck/slides/WhatCloutedDoesSlide.tsx`

### Changes

1. **Lines 92-94** — Change title from two-line to single-line:
   - From: "Coordinated distribution so your music builds momentum — not a gamble."
   - To: "Coordinated distribution as a system, not a gamble."

2. **Lines 65, 72, 79** — Remove `opacity="0.6"` from the secondary text elements in the visualizer to make them fully white (consistent with brand aesthetic of pure white text):
   - Short-form "Content" text (line 65)
   - Communities "& Culture" text (line 72)
   - Streaming "Platforms" text (line 79)

These secondary text elements currently use `hsl(210, 40%, 96%)` fill with 60% opacity. Removing opacity makes them pure white as requested.

