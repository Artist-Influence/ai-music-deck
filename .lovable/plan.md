

## Extend Fanpage Visualizer to Full Width

The visualizer SVG currently has `max-w-[520px]` which constrains it. To make it span the full width of the "What it is" GlassPanel:

### FanpageVisualizer.tsx
- **Line 35**: Remove `max-w-[520px]` and `max-h-[180px]` constraints from the SVG, keeping just `w-full h-full`
- Update the SVG `viewBox` to use `preserveAspectRatio="none"` or widen the viewBox to better fill horizontal space

### FanpagesSlide.tsx
- **Line 56**: Increase the container height from `h-40` to `h-48` to give more vertical room as it stretches wider

