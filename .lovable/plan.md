

# Fix Slide 2, 3, and 11 polish issues

## Slide 2 — Operating System (`SystemLoopDiagram.tsx` + `en.ts`)
- Shorten the engine label from "Campaign Engine" to **"Engine"** (key `opSystem.loop.engine`) so it fits inside the bubble without truncation.
- Make all 4 bubbles bigger so labels breathe:
  - Primary node radius: `32 → 44`
  - Secondary nodes radius: `26 → 40`
  - Bump label `fontSize` from `10 → 12`, increase font weight visibility
  - Remove the `slice(0, 12) + '…'` truncation now that bubbles are larger
  - Slightly nudge node positions outward so larger bubbles don't overlap the central engine pulse (move the 4 outer nodes from inset 60 to inset 40, e.g. inputs `y: 60 → 50`, engine `x: 340 → 350`, reporting `y: 340 → 350`, learnings `x: 60 → 50`); reduce outer ring `r` to keep visual balance.
- Shorten the Software Infrastructure pillar description to a single line: **"Unified ops, reporting, campaign tracking, workflows, attribution, dashboards."** (key `opSystem.pillar.0.desc`)

## Slide 3 — Unified Ops (`UnifiedOpsSlide.tsx`)
- Remove the background `<DashboardMockTile>` from each of the 4 module cards (Intake & Launch, Live Tracking, Reporting Layer, Learning Layer).
- Remove the dark gradient overlay that was only there to keep text readable above the mock.
- Cards become clean `GlassPanel variant="bright"` with just the icon, number, label, and description — matching the deck's standard service-card aesthetic.
- The `DashboardMockTiles` component itself stays in the codebase (no other slides use it; safe to leave for now).

## Slide 11 — Top 50 Trending (`Top50TrendingSlide.tsx`)
The right-side case study panel currently squeezes 6 metric tiles in a tight column next to a too-wide image, making spacing look cramped/uneven.
- Rebalance the right-column inner layout:
  - Change `flex-1 / flex-1` split to give the image more breathing room: metrics column `flex-[0.9]`, image column `flex-1`.
  - Increase gap between metrics and image: `md:gap-6 → md:gap-8`.
  - Add consistent vertical rhythm to metric tiles: `gap-2 md:gap-4 → md:gap-3`, set tile padding to `md:p-4` (currently `md:p-5` — too tall, causing the column to overflow visually).
  - Center the image vertically and constrain its max width so it sits cleanly: wrap `<img>` with `max-w-[420px] mx-auto`, add `object-contain`.
  - Increase outer panel padding `md:p-5 → md:p-7` for breathing room around the whole case study block.
  - Tighten the title/subtitle margin so the grid + image row gets more vertical space (`mb-2 md:mb-4 → md:mb-3`).

## Files changed
- `src/components/deck/SystemLoopDiagram.tsx` — bigger nodes, larger font, no truncation, repositioned nodes.
- `src/i18n/en.ts` — `opSystem.loop.engine` → "Engine"; `opSystem.pillar.0.desc` shortened to one line.
- `src/components/deck/slides/UnifiedOpsSlide.tsx` — remove mock background tiles + gradient overlay from module cards.
- `src/components/deck/slides/Top50TrendingSlide.tsx` — rebalance metric/image columns, padding, gaps, image sizing.

## Out of scope
- Other locale files (English fallback handles them; "Engine" is short enough to translate naturally later).
- Redesigning the case study layout beyond spacing fixes.
- Touching the `DashboardMockTiles.tsx` component itself.

