

## Fix Bullet Point Alignment on Slides 15 & 16

The problem: The parent container has `text-center` which cascades into the list items, causing text to center-wrap while bullets stay left. The bullet dots also lack `shrink-0`, so they can get squeezed.

### Changes (both `ReportingSlide.tsx` and `ExpectationsSlide.tsx`):

1. Add `text-left` to each `GlassPanel` content area (on the panel itself or a wrapper) so list items left-align
2. Add `shrink-0` to the bullet dot divs (`w-2.5 h-2.5`) so they don't compress
3. Keep the title/subtitle `text-center` on the outer wrapper, but panels themselves should be `text-left`

Specifically:
- On each `GlassPanel`: add `text-left` to className
- On each bullet dot div: add `shrink-0`

