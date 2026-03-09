

## Redesign Fanpages Slide Case Studies

### Changes to `FanpagesSlide.tsx`

**New layout per case study card:** Horizontal layout with 1 large clip thumbnail on the left and stats on the right. This gives the thumbnail room to breathe and makes the card cleaner.

Each card structure:
- Left: Single best clip thumbnail (~160px wide, aspect-[9/16], rounded, nice border)
- Right: Artist name, project line, then a 2x2 metrics grid with updated stats

**Updated metrics:**

**Subtronics:**
- 5M+ Views, 150K+ Likes, 15.9K Followers Driven, 600+ Clips

**Skrillex:**
- 2.1M+ Views, 9.5K Followers Driven, 6.84% Engagement, 1,557 Posts

Use `subtronicsClip1` and `skrillexClip1` as the single hero clips. Remove imports for clip2/clip3 assets.

**Spacing:** Change right column to `flex flex-col justify-between` to match left column height.

### Files
- **Edit:** `src/components/deck/slides/FanpagesSlide.tsx`

