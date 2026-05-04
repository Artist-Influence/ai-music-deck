The issue is that the previous fix changed alignment classes, but the affected elements do not actually have a vertical space to center within.

What is happening:

1. On slides 7, 8, and 10, the right-side asset column is mostly auto-height / shrink-wrapped to its own content. `justify-center` only works when the container has extra height. Since these wrappers do not have a defined height, there is nothing for `justify-center` to distribute.

2. `md:items-center` on the main `md:flex-row` only centers the left and right columns relative to each other. It does not center the right-side asset block within a clear slide/body region.

3. `GlassPanel` wraps its children in an internal `<div className="relative z-[2]">`. That means classes like `flex flex-col justify-center` placed on `GlassPanel` affect the outer panel, but not always the actual content inside the panel. So some centering classes look correct in JSX but do not affect the visible asset content.

4. Slide 8 has an extra issue: the asset row uses `my-auto`, but it sits inside the internal GlassPanel wrapper, not a flex parent where vertical auto margins help. So the screenshot/metrics block is not truly being centered.

5. Slide 7 has an image wrapper with `flex-1`, but because of the GlassPanel internal wrapper, that `flex-1` is not operating in the intended flex context either.

Plan to fix it properly:

- Update slides 7, 8, and 10 so each has a real two-column body area with a defined desktop height/content region.
- Put the right-side asset block inside a dedicated `asset-stage` style wrapper: `md:h-full md:flex md:items-center md:justify-center`.
- Move centering responsibility out of `GlassPanel` where needed and onto direct wrappers that actually control the visible content.
- For slide 10, wrap both YouTube case-study cards in one natural-height group, then center that group as a single asset block.
- For slide 8, remove ineffective `my-auto` and center the Major Lazer case-study panel directly inside the right asset-stage.
- For slide 7, give the case-study image area an explicit desktop height/aspect so it does not accidentally stretch or collapse, then center the complete case-study card.
- Preserve the mobile vertical-scroll behavior and avoid adding fixed desktop-only heights to mobile.