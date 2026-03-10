

## Fix YouTube Ads Slide (10) — Full Layout Rebalance

### Root Cause
The `flex-1` on case study cards combined with `items-stretch` on the parent makes the right column try to match the left column's height, but the content overflows the 1080px canvas. The `flex-1` thumbnail containers grow unbounded, pushing cards out of view.

### Solution — `src/components/deck/slides/YouTubeAdsSlide.tsx`

**Strategy**: Fit everything within 1080px by using fixed, predictable heights instead of flex-grow. Both columns will size naturally based on content, not stretch to fill.

1. **Left column** — keep header visible, bump text sizes, reduce box padding:
   - Title stays `text-5xl`, subtitle `text-xl` — all visible
   - "What it is" / "How it works" headings: `text-xl` → `text-2xl`
   - Body text: `text-lg` → `text-xl`
   - Remove `flex-1` from both GlassPanels — let them size to content
   - Panel padding: `p-5` → `p-4`
   - Column gap: `gap-3` → `gap-2`

2. **Right column** — fixed thumbnail height, no flex-grow:
   - Remove `flex-1` from GlassPanel cards
   - Replace `flex-1 min-h-0` thumbnail container with fixed `h-[160px]`
   - Keep `object-contain` + `bg-black/30` for full image display
   - Gap between cards: `gap-2` (keep)

3. **Parent container**:
   - Change `items-stretch` to `items-start` so columns don't force each other's height
   - Actually, use `items-center` so both columns vertically center within the slide

**Height estimate** (right column): 2 × (header ~48px + thumb 160px + metrics ~72px + padding 24px) + 8px gap = ~616px. Left column: header ~120px + 2 boxes ~130px each + timeframe ~28px + gaps = ~420px. Both fit within 1080px - 64px padding = 1016px.

