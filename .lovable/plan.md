
## Update Clipping Slide with Niche-Based CPM Pricing

### Overview
Replace the generic "$1.50 per 1,000" CPM messaging in the "How it works" section with niche-specific pricing information that shows users the exact cost per niche.

### Current State
The "How it works" section currently states: "Guaranteed views at $1.50 per 1,000 — often beating that with organic lift"

### Proposed Change
Update the "How it works" panel to display niche-based CPM pricing instead of a single flat rate. The new pricing structure is:
- Music: $2 per 1,000
- Podcast: $2 per 1,000
- Sports: $2 per 1,000
- TV/Film: $3 per 1,000
- Politics: $4 per 1,000

### Implementation Approach
Modify the "How it works" bullet points to include a new niche pricing section. Options:

**Option A: Replace the single CPM line with a pricing grid**
- Remove the "$1.50 per 1,000" bullet
- Add a new subsection showing the 5 niches and their corresponding CPMs
- Keep the other 3 bullet points unchanged

**Option B: Add niche pricing as an additional subsection below the existing bullets**
- Keep all 4 existing bullets
- Add a new "Pricing by niche" section below with the niche-specific CPMs in a clean list format

**Option C: Show CPM range in the existing bullet**
- Update the existing bullet to say "Pricing varies by niche from $2-$4 per 1,000 views"
- Add a separate pricing breakdown section below

### Recommendation
**Option A** is cleanest for slide readability—replace the generic "$1.50" messaging with the actual niche-based pricing table that users will encounter. This makes the information more concrete and relevant immediately.

### Files to Modify
- `src/components/deck/slides/ClippingSlide.tsx` — Update the "How it works" section to replace or supplement the CPM pricing with niche-specific rates

### Design Consistency
- Use the existing `GlassPanel` layout and spacing
- Maintain consistent bullet point styling for the pricing list
- Keep the same typography (text-sm for niche items to match existing bullets)
