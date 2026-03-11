

## Two Changes

### Slide 5 — Update "What not to expect" copy (`HowWeWorkSlide.tsx`, line 102)

Current:
> What not to expect: results without testing and iteration.

New:
> What not to expect: unrealistic, always-viral results. This is an amplifier, not a multiplier — results require testing and iteration.

### Slide 9 — Fix section title colors (`Top50TrendingSlide.tsx`, lines 36 and 43)

Both "How it's done (transparently)" and "When to use" titles currently use `text-foreground` (white). Change to `text-primary` (blue) to match the other slides' section titles.

- Line 36: `text-2xl font-semibold text-foreground` → `text-2xl font-semibold text-primary`
- Line 43: `text-2xl font-semibold text-foreground` → `text-2xl font-semibold text-primary`

