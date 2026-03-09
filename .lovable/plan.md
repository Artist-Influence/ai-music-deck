

## Add Service Icons to Four Slides

The YouTube and Spotify slides use an icon next to the "Service" label (e.g., `<Youtube size={28} />` + "Service" text in a flex row). The four slides below just have a plain text "Service" label. We'll add the same pattern with appropriate Lucide icons.

### Icon Choices
- **Clipping Distribution** → `Scissors` (content being cut/clipped into clips)
- **Fanpages** → `Users` (community/fan base pages)
- **Creator Flood** → `Waves` (flood of creators) — note: Lucide doesn't have `Waves`, so `Zap` (energy/volume at scale) is a better fit
- **Top 50 Trending** → `TrendingUp` (trending charts)

### Changes

**1. `ClippingSlide.tsx` (line 1, 53)**
- Import `Scissors` from lucide-react
- Wrap the "Service" label in a `flex items-center gap-3` div with `<Scissors size={28} className="text-primary" />`

**2. `FanpagesSlide.tsx` (line 1, 37)**
- Import `Users` from lucide-react
- Same icon + label pattern

**3. `CreatorFloodSlide.tsx` (line 1, 18)**
- Import `Zap` from lucide-react
- Same icon + label pattern

**4. `Top50TrendingSlide.tsx` (line 1, 29)**
- Import `TrendingUp` from lucide-react
- Same icon + label pattern

Each change is minimal: add an import and wrap the existing `<p>Service</p>` in a flex container with the icon, matching the exact pattern from YouTubeAdsSlide.

