

# Slide Fixes

## 1. Slide 1 (CoverSlide.tsx) — Fix centering
The logo + text block sits inside a `justify-center` container but the large logo with negative margins pushes content too low. Shift the content block upward by adding a negative margin-top or using `pb-[10%]` on the container to visually raise the center point.

## 2. Slide 3 (TheProblemSlide.tsx) — Shorten bullet points 1 and 3
Current text:
- Point 1: "Poor campaign quality from those who don't understand the music industry" (too long)
- Point 2: "Reporting is late, confusing, or missing" (good — one line)
- Point 3: "You spend money without real measurable results that actually move the needle" (too long)

Shortened to match point 2's length:
- Point 1: "Poor campaign quality from non-music marketers"
- Point 3: "You spend money without measurable results"

## 3. Slide 5 (HowWeWorkSlide.tsx) — Remove double-hyphens
Scan the text content. The italic disclaimer at line 92 contains an em dash (`—`) which is fine. The desc for step 3 has `"cut what isn't"` — no double hyphens there. No actual `--` found in the text content. Will do a thorough check and remove any if present (none visible, but will verify during implementation).

## 4. Slide 7 (FanpagesSlide) — Remove entirely
Remove `FanpagesSlide` from the slides array in `index.tsx`. The import can also be removed. The file itself can stay (no need to delete).

## Technical Details

| File | Change |
|------|--------|
| `CoverSlide.tsx` | Add `pb-[10%]` or `mt-[-5%]` to the content `div` to raise logo+text |
| `TheProblemSlide.tsx` | Shorten problems[0].text and problems[2].text |
| `HowWeWorkSlide.tsx` | Remove any `--` occurrences in text (verify first) |
| `slides/index.tsx` | Remove FanpagesSlide import and entry from array |

