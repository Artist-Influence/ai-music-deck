

## Remove Connector Lines Between Step Cards (Slide 5)

The lines between the four step cards (lines 56-61) are connector divs with a gradient and pulse animation. Remove them and add a small gap between cards instead.

### Change in `src/components/deck/slides/HowWeWorkSlide.tsx`

- **Line 45**: Change `gap-0` to `gap-4` for spacing between cards
- **Lines 56-61**: Remove the connector `<div>` entirely (the `{i < steps.length - 1 && (...)}` block)
- Also remove the `connector-pulse` keyframe CSS (around line 37) since it's no longer needed

