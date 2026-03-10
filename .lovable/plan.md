

## Plan: Rebalance Slide 3 Layout

The text column (`flex-[1.3]`) is too wide, pushing the visualizer far to the right edge. The fix is to reduce the text column's flex ratio and increase the visualizer's, centering the overall composition better.

### Changes to `src/components/deck/slides/TheProblemSlide.tsx`:

1. **Reduce text column flex** from `flex-[1.3]` to `flex-[1]`
2. **Increase visualizer flex** from `flex-[0.7]` to `flex-[0.9]`
3. **Remove `max-w-[400px]`** on the visualizer container and use `justify-center` instead of `justify-end`
4. **Reduce container max-width** from `max-w-[1700px]` to `max-w-[1500px]` to bring everything closer together

This keeps the text at `text-2xl` with `whitespace-nowrap` (single line) while giving the visualizer more breathing room and centering it better.

