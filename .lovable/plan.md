

# True Mobile-Responsive Slides

## Root Cause
The current approach tries to render a 1920x1080 canvas and scale it down. No matter how you scale it (width-fit, height-fit), a landscape slide crammed into a portrait phone will always look broken. The content needs to actually **reflow** for mobile.

## Strategy
**On mobile, bypass the 1920x1080 canvas entirely.** Render each slide as a normal responsive page that fills the phone screen and scrolls vertically if needed. Use Tailwind responsive classes (`md:` prefix) so slides are mobile-first and scale up for desktop.

## Changes

### 1. ScaledSlide.tsx
On mobile: skip the 1920x1080 fixed canvas and `transform: scale()`. Just render children in a full-width, vertically scrollable container. Desktop stays unchanged.

### 2. All 15 Slide Components
Apply a consistent set of responsive overrides to each slide:

| Desktop pattern | Mobile override |
|---|---|
| `p-24` / `p-16` / `p-12` | `p-5 md:p-24` |
| `text-7xl` / `text-6xl` / `text-5xl` | `text-2xl md:text-7xl` etc. |
| `text-3xl` / `text-2xl` | `text-base md:text-3xl` etc. |
| `flex gap-16` (side-by-side columns) | `flex flex-col gap-6 md:flex-row md:gap-16` |
| `grid-cols-4` / `grid-cols-5` | `grid-cols-2 md:grid-cols-4` |
| `whitespace-nowrap` | `md:whitespace-nowrap` |
| Decorative SVG visualizers | `hidden md:flex` |
| Large fixed widths (`max-w-[1600px]`) | Keep (acts as max, harmless on mobile) |
| Large absolute blur orbs | Shrink or hide on mobile |

### 3. DeckViewer.tsx
Minor tweaks — the mobile layout is already overlay-based, just ensure the slide area uses the new non-scaled ScaledSlide properly.

### Files to edit (17 total)
- `ScaledSlide.tsx` — bypass scaling on mobile
- `CoverSlide.tsx`
- `TheShiftSlide.tsx`
- `TheProblemSlide.tsx`
- `WhatWeDoSlide.tsx`
- `HowWeWorkSlide.tsx`
- `ClippingSlide.tsx`
- `CreatorFloodSlide.tsx`
- `Top50TrendingSlide.tsx`
- `YouTubeAdsSlide.tsx`
- `SpotifyPlaylistingSlide.tsx`
- `SoundCloudRepostsSlide.tsx`
- `InstagramSeedingSlide.tsx`
- `AdditionalServicesSlide.tsx`
- `PricingSlide.tsx`
- `NextStepsSlide.tsx`
- `OutcomesSlide.tsx`

