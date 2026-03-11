

## Multi-Slide Update Plan

### Slide 7 — FanpagesSlide.tsx
1. Add `FanpageVisualizer` component inside the "What it is" GlassPanel, below the text
2. Rename sections to match Slide 6: "What this is great for" → **"Pros"**, "What you can expect" → **"How it works"**
3. Rewrite supporting copy under Pros and How it works as concise bullet points matching Slide 6's style

### Slide 8 — CreatorFloodSlide.tsx
1. Rename "Why it works" → **"Pros"** and convert the paragraph into bullet points
2. Make both GlassPanels use the same `variant` (default, matching Slide 6's info panels)
3. Update Rich Brian total creates: `29,900+` → `33,000+` (also update the `Total Creates` metric)
4. Change "gasoline" → **"fuel"** in "When to use"
5. Rewrite last "When to use" bullet to be clearer, incorporating the word "volume"
6. Change `10,000+` label or description reference from "10k creators" context to **"minimum posts"** language (update the sub-description text)

### Slide 9 — Top50TrendingSlide.tsx
1. Ensure KPI box text is center-aligned (add `flex flex-col items-center justify-center` to KPI boxes)
2. Replace content types in case study description with platform names (e.g., "across YouTube Shorts, Instagram Reels, and Facebook Reels")
3. Change "How it's done (honest version)" → **"How it's done (transparently)"**

### Slide 11 — SpotifyPlaylistingSlide.tsx
1. Convert "What it is" and "Why it works" paragraph text into bullet points
2. Change section title color from `text-foreground` to **`text-primary`** (blue)

### Slide 12 — SoundCloudRepostsSlide.tsx
1. Same treatment: blue section titles (`text-primary`)
2. Convert paragraph copy into bullet points
3. Add a "Total group reach" metric or line

### Slide 13 — InstagramSeedingSlide.tsx
1. Blue section titles (`text-primary`)
2. Convert paragraph copy into bullet points

### Slide 14 — AdditionalServicesSlide.tsx
1. Convert paragraph copy into bullet points
2. Change section title color to `text-primary`

### Slide 15 — Remove ReportingExpectationsSlide
1. Remove `ReportingExpectationsSlide` from `slides/index.tsx`
2. Move non-redundant reporting info (weekly updates, final recap) into **Slide 5 (HowWeWorkSlide.tsx)** — add a compact section below the 4-step process
3. Add a one-line "What not to expect" section at the bottom of Slide 5

### Slide 16 — PricingSlide.tsx
1. Add language about customized bundles and cocktail-recipe approach
2. Rewrite subtitle/supporting copy to emphasize white-glove, tailored packaging based on client goals

### Slide 17 — NextStepsSlide.tsx
1. Make the title fit on one line (add `whitespace-nowrap` or shorten text slightly)

---

### Technical Details

**Files modified (11):**
- `src/components/deck/slides/FanpagesSlide.tsx` — add visualizer import, restructure sections
- `src/components/deck/slides/CreatorFloodSlide.tsx` — rename sections, update metrics/copy
- `src/components/deck/slides/Top50TrendingSlide.tsx` — KPI alignment, copy tweaks
- `src/components/deck/slides/SpotifyPlaylistingSlide.tsx` — bullet points, blue titles
- `src/components/deck/slides/SoundCloudRepostsSlide.tsx` — bullet points, blue titles, add reach
- `src/components/deck/slides/InstagramSeedingSlide.tsx` — bullet points, blue titles
- `src/components/deck/slides/AdditionalServicesSlide.tsx` — bullet points, blue titles
- `src/components/deck/slides/HowWeWorkSlide.tsx` — add reporting + expectations content
- `src/components/deck/slides/PricingSlide.tsx` — white-glove bundle language
- `src/components/deck/slides/NextStepsSlide.tsx` — single-line title
- `src/components/deck/slides/index.tsx` — remove ReportingExpectationsSlide import and entry

