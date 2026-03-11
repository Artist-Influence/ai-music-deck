

## Plan: Crop screenshot harder and add trending regions KPI box

### Changes in `src/components/deck/slides/Top50TrendingSlide.tsx`

1. **Crop the screenshot more aggressively** — Change `object-bottom` to `object-[center_95%]` so only the very bottom of the image shows, cutting off the green empty space above the "Shorts" text.

2. **Replace the "Trending Regions" metric** with a more specific one — Update the last metric from `{ val: 'US / CA', label: 'Trending Regions' }` to something like `{ val: 'US / CA', label: 'Trending Regions' }` and add a 5th KPI box:
   - `{ val: '🇺🇸 🇨🇦 🇬🇧 🇰🇷', label: 'YT Shorts Trending Regions' }` — or text-based: `{ val: 'US, CA, UK, KR', label: 'YT Shorts Audio Trending' }`

   This replaces the generic "Trending Regions" entry with the specific countries where the audio trended on YT Shorts.

### Summary of metric array after changes:
```ts
const metrics = [
  { val: '5,000+', label: 'YT Creates' },
  { val: '14,900+', label: 'IG Reels Creates' },
  { val: '2,000+', label: 'TikTok Creates — Popular Tab' },
  { val: 'US / CA', label: 'Trending Regions' },
  { val: 'US, CA, UK, KR', label: 'YT Shorts Audio Trending' },
];
```

