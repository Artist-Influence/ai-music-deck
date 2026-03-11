

## Fix Text Alignment and Size on Slide 15

**File:** `src/components/deck/slides/ReportingExpectationsSlide.tsx`

### Changes

1. **Top-align content in each panel** — Remove `justify-center` from all four GlassPanels so text flows from the top down instead of being vertically centered.

2. **Increase list item text by 30%** — Bump the bullet text from `text-lg` (~18px) to `text-2xl` (~24px), which is approximately a 30% increase. This applies to lines 45, 55, 73, and 83.

