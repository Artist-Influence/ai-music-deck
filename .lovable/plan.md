

## Fix Slide 3 Text Overflow & Layout

The text with `whitespace-nowrap` is overflowing the GlassPanel boxes. The fix:

### Changes to `TheProblemSlide.tsx`:

1. **Remove `whitespace-nowrap`** from problem text (line 28) — let text wrap naturally within boxes
2. **Set consistent box width** by adding `w-full` to the panels and keeping `flex-1` on the text column
3. **Make title one line** — add `whitespace-nowrap` to the h1 title (line 17) and reduce font if needed to `text-5xl`
4. **Move visualizer lower** — change the outer flex from `items-center` to `items-start` on the main row (line 15), and add `mt-16` to the visualizer container (line 37) to push it down
5. **Reduce visualizer flex** from `flex-[0.9]` to `flex-[0.6]` to reclaim space for text boxes, preventing excess whitespace on the right side of boxes

