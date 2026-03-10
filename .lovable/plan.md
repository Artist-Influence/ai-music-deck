

## Change Stats Grid to 3×2 Layout — YouTube Ads Slide

### Change — `src/components/deck/slides/YouTubeAdsSlide.tsx`

**Line 89**: Switch `grid-cols-3` to `grid-cols-2` and reduce gap to `gap-1`.

This naturally produces 3 rows of 2 stats each (6 stats total), matching the requested layout:
- Row 1: Views | Unique Viewers
- Row 2: Watch Time | Avg % Viewed  
- Row 3: Likes | Comments

The metrics array order already matches this pairing, so no data restructuring needed.

**Line 81**: Bump thumbnail height from `h-[160px]` to `h-[180px]` to give the thumbnail more visual presence now that the stats block is narrower/taller.

**Line 91**: Tighten stat cell padding from `p-2` to `py-1.5 px-2` for slightly more compact rows.

No other changes — left column, overall fit, and card structure remain untouched.

