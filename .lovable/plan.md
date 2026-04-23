

# Reposition the Deck as a Music Tech Company

## What you'll see
The deck transforms from a services overview into a **product + infrastructure narrative** with an execution layer underneath. Six new slides are added (and two existing ones lightly rewritten) so the story arc becomes:

```text
Cover
  → Operating System (vision)         NEW
  → Unified Ops (the product)         NEW
  → Why This Matters (impact)         NEW
  → Music Discovery Has Changed       (revised)
  → The Problem                       (revised)
  → What We Do (3 pillars)
  → How We Work (+ Unified Ops loop line)
  → Clipping
  → Creator Flood
  → Top 50 Trending
  → Culture Edits                     NEW
  → YouTube Ads
  → Spotify Playlisting
  → SoundCloud Reposts
  → Instagram Seeding
  → Meta & TikTok Ads
  → Websites & Digital Infrastructure NEW
  → ID.ID (pilot / vision)            NEW
  → Pricing
  → Not Just Campaigns. Infrastructure. NEW
  → Next Steps
```

Final deck: **22 slides** (was 15).

## New slide designs (all match existing dark + crimson glow system)

**1. Operating System** — Two-column layout. Left: 3 pillar cards (Software Infrastructure, Distribution Engine, Execution Layer) using `GlassPanel variant="bright"` with crimson icon chips. Right: an animated SVG **system loop diagram** (Inputs → Campaign Engine → Reporting/Attribution → Learnings → loop back) with pulsing connectors in primary red. Bottom: full-width takeaway in subtle glass strip. Tagline chip: *"Software-backed. Culture-native. Execution-ready."*

**2. Unified Ops** — Product-feeling slide. 4 horizontal module cards (Intake & Launch, Live Tracking, Reporting Layer, Learning Layer) each with a small **mock dashboard widget** in the background (sparkline, status pills, mini table rows) rendered in SVG at low opacity. Highlighted callout box for "Self-learning system." Footer line in muted text.

**3. Why This Matters** — Clean 3-column layout (For clients / For campaigns / For the future). Each column is a tall `GlassPanel` with a single crimson accent line at top. Bottom strip with the closing two-line statement, primary-tinted.

**4. Culture Edits** — Service slide template (matches Clipping/Spotify pattern). Left column "What it is", right column "Why it works", bottom "Best for" strip. Background: subtle 4×3 collage grid of dark mock edit-tile rectangles with category labels (sports, anime, lyric, meme) at low opacity — no real images, all SVG/CSS.

**5. Websites & Digital Infrastructure** — 3-card layout (Artist Websites / Conversion Infrastructure / Design + Speed). Each card includes a small **wireframe mockup SVG** (desktop frame, mobile frame, browser chrome). Bottom "Why it matters" strip in subtle glass.

**6. ID.ID** — Forward-looking, slightly different feel. Two-column. Left: "What it is" card. Right: "Why it matters" card. Centered crimson glow accent behind the title. Bottom note in italic muted text. Small "PILOT" chip in the corner.

**7. Not Just Campaigns. Infrastructure.** — Statement slide. Centered headline at large scale, subhead below. Subtle network background. Acts as a closing pivot before CTA.

## Existing slide updates

- **TheShiftSlide** copy revised (subtitle becomes the "repeated exposure, community validation, algorithmic momentum…" line).
- **TheProblemSlide** three pain points rewritten to the fragmentation/reporting/feedback-loop framing.
- **HowWeWorkSlide** adds one line near the bottom: *"Every launch, optimization cycle, and report feeds back into our internal system so future campaigns can improve."*

## Technical approach

- New components: `OperatingSystemSlide.tsx`, `UnifiedOpsSlide.tsx`, `WhyThisMattersSlide.tsx`, `CultureEditsSlide.tsx`, `WebsitesSlide.tsx`, `IdIdSlide.tsx`, `InfrastructureStatementSlide.tsx` in `src/components/deck/slides/`.
- Two new tiny SVG components: `SystemLoopDiagram.tsx` (for Operating System slide) and `DashboardMockTiles.tsx` (reusable mock widgets for Unified Ops). Both pure SVG, no dependencies, follow the same animation language as the existing `HubDiagram` / phone visual.
- All copy added to `src/i18n/en.ts` under new namespaces (`opSystem.*`, `unifiedOps.*`, `whyMatters.*`, `cultureEdits.*`, `websites.*`, `idid.*`, `infraStatement.*`) plus the revised `shift.subtitle`, `problem.item.*`, and a new `howWeWork.feedbackLine`.
- The other 8 locale files (`es, pt, ko, ja, zh, nl, de, fr`) get the same new keys with **English values as fallback** so nothing breaks immediately. The existing fallback in `LanguageContext` (line 37) already handles missing keys, so this is safe — but populating them keeps the structure consistent.
- `slides/index.tsx` updated with the new ordered array (22 slides).
- All new slides use existing `GlassPanel`, `NetworkVisual`, primary tokens — no new design tokens, no new dependencies.
- Mobile: each new slide follows the existing pattern (`min-h-dvh`, vertical stack, scaled-down typography) per the Mobile Responsiveness memory.
- PDF export already auto-handles new slides since it iterates `slides.length`.

## Out of scope
- Translating the new copy into the 8 non-English locales (English fallback handles display; translation is a follow-up task if needed).
- Building real working dashboard product UI — Unified Ops mocks are visual only.
- Reworking the existing service slide visualizers.
- Changing pricing / contact slides.

