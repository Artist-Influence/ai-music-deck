

## Plan: Reformat YouTube case study cards around full thumbnails

The thumbnails currently use `aspect-video object-contain` which shows the full image but with black bars. The case study cards are tall because of the stacked layout (header text + large thumbnail + 6 KPI cards). To fit everything while showing full thumbnails, I'll restructure each case study card to use a **horizontal layout** — thumbnail on the left, text + KPIs on the right.

### Changes to `src/components/deck/slides/YouTubeAdsSlide.tsx`

**Each case study card** — change from vertical stack to horizontal flex:
- Card: `flex-row` instead of `flex-col`, reduce padding to `p-5`
- **Left side**: Thumbnail at natural aspect ratio, `w-[280px] shrink-0`, `rounded-xl`, `object-cover` replaced with `object-contain` + `bg-black/30`, remove `aspect-video` — use `h-full` so the image fills the card height
- **Right side**: `flex-1 flex flex-col` containing case study label, artist, track, and KPI grid
- KPI grid: keep `grid-cols-2` but reduce padding to `p-2.5`, text sizes to `text-lg` / `text-sm` to fit compactly
- Remove `mb-4` from thumbnail wrapper since it's now side-by-side

This keeps both case studies stacked vertically but each card is now landscape-oriented, giving the thumbnails room to display fully without cropping or excessive vertical space.

