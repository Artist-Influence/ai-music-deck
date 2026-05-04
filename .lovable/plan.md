I’ll fix the Creator Flood slide by making the visual asset region explicit instead of relying on natural content height.

Plan:

1. Update `src/components/deck/slides/CreatorFloodSlide.tsx` only.
2. Separate the desktop slide into:
   - a left header/text area,
   - a fixed-height desktop asset stage below it,
   - a right case-study asset stage that starts at the same vertical point and has the same height as the left Pros + When-to-use stack.
3. Give both sides the same desktop asset height, using responsive desktop-only sizing so mobile remains natural vertical scroll.
4. Make the two left `GlassPanel`s split that shared height evenly, while the Rich Brian case-study `GlassPanel` fills the full matching height.
5. Move internal sizing onto direct children inside `GlassPanel` where needed, because `GlassPanel` wraps content in an internal `relative z-[2]` div and outer flex classes do not always affect the visible content.
6. Keep the slide’s existing 1920×1080 desktop canvas behavior, red/dark styling, PatternVisual background, and mobile layout unchanged.

Technical approach:

- Replace the current two independent `md:min-h-[720px]` columns with a shared desktop structure that has one consistent asset-height contract.
- On desktop, make the right Rich Brian card use `md:h-full` / `md:min-h-0` within the matching stage.
- Size the screenshot region inside the Rich Brian card with flex/height rules so it grows to fill the card without pushing the metric row out.
- Use desktop-only classes (`md:*`) so the mobile version does not inherit fixed heights.