

## Update Clipping Slide Case Studies

### Changes

**1. Copy cover art asset**
- Copy `user-uploads://image.png` to `src/assets/yeat-bnyx-im-yeat.jpg`

**2. Rewrite `ClippingSlide.tsx`**

Replace Nash Rly with Yeat case study:
- Artist: "Yeat, BNYX"
- Track: "I'M YEAT"
- Cover art: new uploaded image
- Metrics (from screenshot): `$0.43` CPM, `9.97M+` Views, `12.25%` Engagement, `1.17M+` Likes, `64` Posts
- Since we're adding Posts count, use a 5-metric grid (`grid-cols-5`) for Yeat

Add video counts to Aries and Gorgon City:
- Aries: add `164` Videos metric (5 metrics total)
- Gorgon City: add `232` Videos metric (5 metrics total)

All three cards get `grid-cols-5` metrics grids for consistency.

**3. Even out spacing**
- Change the right column from `space-y-4` to `flex flex-col justify-between` so the 3 cards stretch to match the full height of the left column's 3 GlassPanels.

### Files
- **Copy:** uploaded cover art → `src/assets/yeat-bnyx-im-yeat.jpg`
- **Edit:** `src/components/deck/slides/ClippingSlide.tsx`

