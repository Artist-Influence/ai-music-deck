

## Equalize Left & Right Columns on Fanpages Slide

The issue: left column has `max-w-[750px]` constraining it, while the right column is unconstrained `flex-1`. This makes them uneven.

### Fix in `FanpagesSlide.tsx`

- Remove `max-w-[750px]` from the left column (line 45)
- Give both columns equal basis: change both to `flex-1 min-w-0`
- Optionally add `gap-10` instead of `gap-8` for breathing room matching the standard layout

**Single file edit:** `src/components/deck/slides/FanpagesSlide.tsx` — line 45, remove `max-w-[750px]`.

