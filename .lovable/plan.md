

## Fix Fanpages Slide Vertical Alignment

The left column uses `space-y-4` (auto-sized panels) while the right uses `flex flex-col justify-between` (2 cards). The 3 left panels are shorter than the 2 right cards, causing misalignment.

### Fix in `FanpagesSlide.tsx`

Change the left column from `space-y-4` to `flex flex-col justify-between gap-4` so the 3 GlassPanels stretch to fill the same total height as the 2 case study cards on the right. Each left panel gets `flex-1` to distribute space evenly.

- Line 45: `space-y-4` → `flex flex-col justify-between gap-4`
- Lines 46, 53, 69: Add `flex-1` to each GlassPanel so they grow to fill available space

**File:** `src/components/deck/slides/FanpagesSlide.tsx`

