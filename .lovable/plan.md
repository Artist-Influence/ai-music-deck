

## Center Text in Creator Flood Left-Side Boxes

Add `flex flex-col justify-center` to both GlassPanel boxes ("Why it works" and "When to use") so their content is vertically centered within the expanded `flex-1` panels.

### Changes to `CreatorFloodSlide.tsx`:

1. **Line 32**: Add `flex flex-col justify-center` to the "Why it works" GlassPanel
2. **Line 39**: Add `flex flex-col justify-center` to the "When to use" GlassPanel

