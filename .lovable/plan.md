

## Combine Slides 15 (Reporting) and 16 (Expectations) into One Slide

**Layout:** Two-column split. Left column = Reporting content, Right column = Expectations content. Each column has its own smaller title at the top, with the GlassPanels stacked vertically beneath.

### New file: `src/components/deck/slides/ReportingExpectationsSlide.tsx`

- **Left column (Reporting):**
  - Title: "You'll never wonder what's happening." (~text-4xl)
  - Subtitle: "Reporting and transparency" (~text-xl)
  - Two stacked GlassPanels: "Weekly updates include" (5 items) and "Final recap includes" (3 items)

- **Right column (Expectations):**
  - Title: "We move fast, but we don't do chaos." (~text-4xl)
  - Subtitle: brief line (~text-xl)
  - Two stacked GlassPanels: "We need from you" (3 items) and "What you should not expect" (3 items)

- Scale down text inside panels: item text from `text-3xl` to ~`text-lg`, panel headers from `text-3xl` to ~`text-xl`, panel padding from `p-14` to ~`p-6`
- Use `gap-4` between stacked panels and `gap-8` between columns

### Update `src/components/deck/slides/index.tsx`

- Remove `ReportingSlide` and `ExpectationsSlide` imports
- Replace both entries in the array with single `ReportingExpectationsSlide`
- Deck goes from 18 to 17 slides

### Files to change
1. **Create** `src/components/deck/slides/ReportingExpectationsSlide.tsx` — combined slide
2. **Edit** `src/components/deck/slides/index.tsx` — swap two slides for one

