

## Update Instagram Seeding Slide with Real Case Studies

### What changes
**File: `src/components/deck/slides/InstagramSeedingSlide.tsx`**

Replace the 3 placeholder/partial case studies with the real data provided. Copy the 2 uploaded artwork images into `src/assets/` and import them alongside the existing Francis Mercier image.

### Assets to copy
1. `user-uploads://gordo_-_gordo_s_dilemma.jpg` → `src/assets/gordo-gordos-dilemma.jpg`
2. `user-uploads://mau_p_-_the_less_i_know_the_better.jpg` → `src/assets/mau-p-the-less-i-know-the-better.jpg`
3. `user-uploads://francis_mercier_-_sauti.jpg` → `src/assets/francis-mercier-sauti-artwork.jpg` (the existing `francis-mercier-sauti.png` is a screenshot — this is the actual album art)

### Updated case study data

Update the `cases` array with real metrics. Adjust metric labels to match the provided data (Budget, Views, Likes, CPV instead of the current Views/CPM/Saves/Engagement):

```
Case 1: Gordo — Gordo's Dilemma
  Budget: $700 | Views: 5.4M | Likes: 136.7K | CPV: $0.00013

Case 2: Mau P — The Less I Know The Better
  Budget: $2,800 | Views: 3.9M | Likes: 138.7K | CPV: $0.00071

Case 3: Francis Mercier — Sauti
  Budget: $700 | Views: 16.8M | Likes: 1.18M | CPV: $0.000042
```

Each card will use 4 metrics in the grid: **Budget**, **Views**, **Likes**, **CPV** — consistent across all 3 cards. All 3 cards get their uploaded album artwork as the thumbnail image.

### No layout changes needed
The existing 3-card right column structure and sizing stays the same — only data and images change.

