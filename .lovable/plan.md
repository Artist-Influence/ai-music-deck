

## Maximize Text Readability Across All Slides

### Analysis

Current global scale is `112.5%`. After reviewing all 18 slides, here's the situation:

- **Worst offenders** (tiny text that's hard to read on calls):
  - **Slide 6 (Clipping)**: bullet text is `text-sm`, metric labels are `text-[9px]`, case study text uses `text-xs`
  - **Slide 7 (Fanpages)**: same pattern — `text-sm` bullets, `text-[9px]` metric labels, `text-xs` labels
  - **Slide 5 (How We Work)**: step descriptions are `text-sm`
  - **UGC Hacks slide**: `text-sm` and `text-xs` throughout
  - **Pricing slide**: table text is `text-sm`/`text-base`

- **Already decent** (text-base or larger): Slides 2, 3, 4, 8, 9, 10, 11, 12, 13, 15, 16, 17 (Outcomes, Reporting, Expectations)

### Plan

**1. Bump global CSS from 112.5% → 125%** (`index.css`)
This gives ~11% more size to every slide for free.

**2. Fix Slide 6 (Clipping)** — the densest slide with most room:
- Bullet text: `text-sm` → `text-base`
- Case study labels: `text-xs` → `text-sm`
- Case study titles: `text-base` → `text-lg`
- Metric values: `text-sm` → `text-base`
- Metric labels: `text-[9px]` → `text-xs`
- Timeframe: `text-sm` → `text-base`

**3. Fix Slide 7 (Fanpages)**:
- Bullet text: `text-sm` → `text-base`
- Metric labels: `text-[9px]` → `text-xs`
- Case study sub-labels: `text-xs` → `text-sm`

**4. Fix Slide 5 (How We Work)**:
- Step descriptions: `text-sm` → `text-base`

**5. Fix UGC Hacks slide**:
- `text-sm` → `text-base` for bullets and body text
- `text-xs` labels stay as-is (they're category labels, not body copy)

**6. Fix Pricing slide**:
- Table cell text: `text-sm` → `text-base`

### Files to edit
- `src/index.css` — bump global scale
- `src/components/deck/slides/ClippingSlide.tsx`
- `src/components/deck/slides/FanpagesSlide.tsx`
- `src/components/deck/slides/HowWeWorkSlide.tsx`
- `src/components/deck/slides/UGCHacksSlide.tsx`
- `src/components/deck/slides/PricingSlide.tsx`

