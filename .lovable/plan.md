

## Plan: Crop screenshot and add IG trending KPI

### Changes in `src/components/deck/slides/Top50TrendingSlide.tsx`

1. **Add 6th KPI metric** — Add `{ val: 'US / CA', label: 'IG Reels Audio Trending' }` to the metrics array. This fills the vertical space better and eliminates awkward gaps between boxes.

2. **Crop image height** — Constrain the image container to `max-h-[80%]` or use a fixed aspect approach so it only shows the bottom ~80% of the screenshot. Alternatively, wrap the image in a container with `h-[80%] overflow-hidden` anchored to the bottom, effectively slicing off the top 20%.

Concrete approach: Set the image container to a capped height and keep `object-cover object-bottom` so the top green area gets cropped away.

