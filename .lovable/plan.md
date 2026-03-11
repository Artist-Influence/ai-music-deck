

## Remove "Runs 7 to 14 days" Bullet from Slide 6

**File:** `src/components/deck/slides/ClippingSlide.tsx`

### Change
- **Line 87** — Remove `'Runs 7 to 14 days'` from the "How it works" array, leaving only 2 items
- **Line 82** — Add a `min-h` or explicit height to the "How it works" `GlassPanel` to maintain its current size despite having one fewer bullet point. Using `min-h-[160px]` should approximate the current height with 3 items.

