

## Fix Step Card 4 ("Report") Sizing on Slide 5

The issue is that the parent flex container on line 45 uses `items-center`, which means the four step cards don't stretch to equal height — shorter cards (like "Report" with less text) appear smaller.

### Change

**File: `src/components/deck/slides/HowWeWorkSlide.tsx`, line 45**

Change `items-center` to `items-stretch` on the step cards flex container, so all four cards match in height. Also ensure each card wrapper uses `items-stretch` instead of `items-center` (line 49).

- Line 45: `flex items-center gap-0` → `flex items-stretch gap-0`
- Line 49: `flex items-center flex-1` → `flex items-stretch flex-1`

This forces all four GlassPanel cards to the same height regardless of text length.

