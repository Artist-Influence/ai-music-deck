

## Center All Slides Horizontally

### Problem
Most slides only use `justify-center` (vertical centering) on their outer container but lack `items-center` (horizontal centering). The inner content blocks sit against the left padding edge, making everything appear left-heavy -- especially noticeable in thumbnails.

### Solution
Add `items-center` to each slide's outer flex-column container and ensure the inner content wrapper has `w-full` so it can be properly centered. For slides with side-by-side layouts (text + visualizer), the inner flex row will also get `w-full` and `max-w-[1600px] mx-auto` to center the pair as a unit.

### Changes (19 slides)

Already centered (no changes needed):
- **CoverSlide** -- already has `items-center justify-center text-center`
- **NextStepsSlide** -- already has `items-center justify-center text-center`

Slides to update (add `items-center` to outer div, add `w-full` / centering to inner content):

| Slide | Layout Type | Change |
|-------|------------|--------|
| TheShiftSlide | Text + Visualizer | Add `items-center` to outer; add `w-full max-w-[1600px]` to inner flex row |
| TheProblemSlide | Text + Visualizer | Same pattern |
| WhatCloutedDoesSlide | Text + Visualizer | Add `justify-center` to outer; add `max-w-[1600px]` to inner flex row |
| HowWeWorkSlide | Single column | Add `items-center` to outer; add `w-full max-w-[1400px]` to inner |
| ClippingSlide | Text + Visualizer | Add `items-center` to outer; add `w-full max-w-[1600px]` to inner flex row |
| FanpagesSlide | Text + Visualizer | Add `items-center` to outer; add `w-full max-w-[1600px]` to inner |
| UGCHacksSlide | Single column | Add `items-center` to outer; center inner block with `mx-auto` |
| AdditionalServicesSlide | Single column | Add `items-center` to outer; center inner block |
| OutcomesSlide | Text + Visualizer | Add `items-center` to outer; add `w-full max-w-[1600px]` to inner flex row |
| ReportingSlide | Single column | Add `items-center` to outer; center inner block |
| ExpectationsSlide | Single column | Add `items-center` to outer; center inner block |
| CaseStudySlide | Two-column grid | Add `items-center` to outer; center inner block |
| CaseStudySkrillexSlide | Two-column grid | Add `items-center` to outer; center inner block |
| CaseStudyCreatorFloodSlide | Two-column grid | Add `items-center` to outer; center inner block |
| CaseStudyPlatformSlide | Three-column grid | Add `items-center` to outer; center inner block |
| CaseStudyClippingSlide | Three-column grid | Add `items-center` to outer; center inner block |
| PricingSlide | Single column | Add `items-center` to outer; center inner block |

### Technical Details

The pattern for each slide is:

1. Outer div: add `items-center` to the existing flex classes
2. Inner `z-10` div: add `w-full max-w-[1600px]` (or appropriate max-width) so content is constrained and centered
3. For slides with side-by-side text + visualizer: ensure the flex row itself is `w-full` so both halves distribute evenly within the centered container

This preserves all existing padding, visualizer positions, background glows, and animations while simply centering the content block within each 1920x1080 canvas.

