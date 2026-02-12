

## Resize Major Lazer Screenshot Grid

**What's changing:** The three horizontal screenshots (Facebook, TikTok, Instagram) on the right column of the Major Lazer card will get slightly more spacing between them so the full vertical YouTube Shorts image on the left can display without being cut off.

**How:**
- Increase the gap between the three stacked horizontal images from `gap-2` (8px) to `gap-3` (12px) so they breathe more
- This naturally makes each horizontal image slightly shorter, letting them fit comfortably while the combined height still matches the vertical Shorts screenshot on the left

**File:** `src/components/deck/slides/CaseStudyCreatorFloodSlide.tsx`
- Line 83: Change the right column's gap from `gap-2` to `gap-3`

