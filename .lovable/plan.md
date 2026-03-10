

## Increase Text Readability on Slide 6 (Clipping Distribution)

### Changes to `ClippingSlide.tsx`:

**Left side — service info boxes:**
1. Remove `max-w-[750px]` constraint on the left column so boxes stretch to fill available space
2. Bump bullet text from `text-lg` to `text-xl`
3. Bump section headers (Pros, How it works, Why We Are Different) from `text-lg` to `text-xl`
4. Bump timeframe text from `text-lg` to `text-xl`
5. Increase bullet dot `mt-2` to `mt-2.5` to align with larger text

**Right side — case study cards:**
1. Bump overview text from `text-base` to `text-lg` (the one-liner descriptions)
2. Bump artist name from `text-lg` to `text-xl`
3. Bump track name from `text-base` to `text-lg`
4. Bump "CLIPPING" label from `text-base` to `text-lg`

