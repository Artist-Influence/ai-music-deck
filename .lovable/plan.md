
# Plan — Luxury info-slide backdrop + monogram readability audit

Two coordinated workstreams. Both ship together so the deck reads as one cohesive luxury system.

---

## Part 1 — New `AtelierFieldVisual` for info slides

**Replaces** `SignalFieldVisual` (the broadcast arcs + traveling pulse-dot thing — that's the "vibe coded" look) on:
- Slide 2 — `WhatWeDoSlide`
- Slide 3 — `TheShiftSlide`
- Slide 4 — `OperatingSystemSlide`
- Slide 5 — `UnifiedOpsSlide`
- Slide 17 — `PricingSlide`

### Design language — "Atelier Field"
A static, editorial backdrop that lives in the same family as `PatternVisual` (monogram) but for non-service slides. Same restraint, same champagne+red palette, but a different motif so the deck has rhythm instead of one visual on every slide.

**Layers (back-to-front):**
1. **Aurora wash** — two slow-drifting primary-tinted blobs, very subtle (matches `PatternVisual` warmth).
2. **Editorial guillochage** — fine, slightly skewed, hairline cross-hatch in `hsl(var(--foreground)/0.04)` with a SVG `<pattern>`. Think Hermès/Cartier engraved-metal, not tech grid. No animations on the lines themselves.
3. **Diamond lattice nodes** — tiny diamond marks at lattice intersections in champagne (`hsl(40 55% 80% / 0.10)`). Echoes the diamond accents in `PatternVisual` so the two visuals feel like siblings.
4. **Single anchor monogram** — one large, very faint (`opacity 0.06`), rotated `~-8deg` "AI" logomark anchored in a corner per `variant`. Acts as a watermark, not a pattern. Connects the info slides back to the monogram language.
5. **Champagne shimmer wash** — same broad, blurred, `soft-light` sweep as `PatternVisual` (we already proved this looks luxe).
6. **Canvas grain** — subtle SVG `feTurbulence` overlay at ~6% opacity.
7. **Vignette + center legibility shield** — radial dim toward edges + a soft inward radial that protects the headline area.

**Variants** (so 5 slides don't look identical):
- `default` — anchor monogram top-right, lattice skew `-8deg`
- `mirrored` — anchor monogram bottom-left, lattice skew `+8deg`
- `corner` — anchor monogram top-left smaller + faint diamond cluster bottom-right
- `centered` — no anchor monogram, centered diamond medallion (for `PricingSlide`)

**No traveling particles. No broadcast arcs. No pulsing dots.** That's exactly what reads as "vibe coded."

### File
- **Create** `src/components/deck/visuals/AtelierFieldVisual.tsx` with the same prop API as `SignalFieldVisual` (`{ className?, variant? }`) so the swap is a one-line change per slide.

### Wiring
- Update imports + JSX in the 5 slides above:
  - `WhatWeDoSlide.tsx` → `<AtelierFieldVisual variant="corner" />`
  - `TheShiftSlide.tsx` → `<AtelierFieldVisual variant="mirrored" />`
  - `OperatingSystemSlide.tsx` → `<AtelierFieldVisual variant="default" />`
  - `UnifiedOpsSlide.tsx` → `<AtelierFieldVisual variant="mirrored" />`
  - `PricingSlide.tsx` → `<AtelierFieldVisual variant="centered" />`
- **Keep** `SignalFieldVisual.tsx` in the repo for now (no deletion) in case we want to compare; can prune in a follow-up.

---

## Part 2 — Readability audit on monogram service slides

### Root cause
On slides 6–16, the headline (`h1`) and subtitle (`text-muted-foreground`) sit **directly on top of `PatternVisual`** with no glass panel. The monogram is currently strong enough that those zones are hard to read — especially the `muted-foreground` subtitles.

### Fixes (in priority order)

**A. Tone down `PatternVisual` itself (single-file change, hits all 11 slides):**
- Drop monogram opacity: foil shadow `0.30 → 0.18`, white mark `0.16 → 0.10`.
- Diamond accent stroke `0.24 → 0.14`; anchor dots `0.10 → 0.06`.
- Add a soft 1.5px `blur` to the monogram lattice group (`filter: blur(1.5px)`) so marks read as woven texture instead of crisp icons competing with copy.
- Strengthen the legibility vignette: change the inner stop of the closing radial gradient from `transparent 45%` to `hsl(var(--background)/0.35) 0%` → `transparent 60%` — gives a soft inward dim that lifts text without looking like a spotlight.

**B. Per-slide text contrast bumps (only where text sits outside a panel):**
- Hero `h1` — already `text-foreground`, fine, but add `drop-shadow-[0_2px_12px_hsl(var(--background)/0.6)]` for separation.
- Hero subtitle — change `text-muted-foreground` → `text-foreground/80` and add same drop-shadow. This is the biggest readability win.
- "Service" / kicker chips with `text-primary` — wrap the text in a tiny pill (`px-2 py-0.5 rounded-full bg-background/40 backdrop-blur-sm`) so the red sits on a clean ground.

Slides touched for per-slide bumps:
`CreatorFloodSlide`, `Top50TrendingSlide`, `CultureEditsSlide`, `YouTubeAdsSlide`, `SpotifyPlaylistingSlide`, `SoundCloudRepostsSlide`, `InstagramSeedingSlide`, `AdditionalServicesSlide`, `WebsitesSlide`, `IdIdSlide`, `ClippingSlide`.

**C. `IdIdSlide` extras** — the bottom italic note (`text-muted-foreground italic`) sits unprotected too: bump to `text-foreground/75` and add the drop-shadow.

### What I will NOT change
- Glass panels (`GlassPanel`) already provide their own contrast; copy inside them stays as-is.
- Mobile viewport — fixes are class-level so they apply across breakpoints; no layout changes.
- `PatternVisual` tile geometry — we just fixed the half-drop clipping, leaving it alone.

---

## Memory updates
- Add memory `mem://style/atelier-field-visual` describing the new component, layers, and which slides use which variant.
- Update `mem://style/visual-consistency` with the new readability rules: hero subtitle on monogram backgrounds = `text-foreground/80` + drop-shadow.

---

## Files touched
**New:** `src/components/deck/visuals/AtelierFieldVisual.tsx`
**Modified:** `src/components/deck/visuals/PatternVisual.tsx`, the 5 info slides, the 11 service/monogram slides listed above.
**Memory:** 1 new file, 1 update, index refresh.

Approve and I'll build it.
