

# Update Clipping Links, Platform Screenshots, and Nash Rly Clips

## Changes

### 1. Clipping Slide (Slide 17) -- Update clip links with real URLs
- **Aries**: Set Clip 1 to TikTok link, Clip 2 to second TikTok link
- **Gorgon City**: Set Clip 1 to Instagram link, Clip 2 to second Instagram link
- **Nash Rly**: Remove the clips array entirely (no clip links shown)
- Update the data structure to store actual URLs alongside labels

### 2. Platform Slide (Slide 16) -- Add real screenshots
- Copy the 3 uploaded screenshots into `src/assets/`:
  - `francis-mercier-sauti-audio.png` (Instagram official audio page)
  - `dack-janiels-shock-therapy-stats.png` (Spotify streaming chart)
  - `jason-derulo-spicy-margarita-views.png` (YouTube view growth chart)
- Import them in `CaseStudyPlatformSlide.tsx` and replace the placeholder divs with `<img>` tags
- Use `object-cover` with `object-top` so the images crop from the top as requested, fitting into the existing `aspect-video` container

### Technical Details

**File: `src/components/deck/slides/CaseStudyClippingSlide.tsx`**
- Change `clips` from `string[]` to `{ label: string; url: string }[]` (or empty array for Nash Rly)
- Aries clips:
  - `{ label: 'Watch Clip 1', url: 'https://www.tiktok.com/@chestercorneliusthethird/video/7567109238930050317' }`
  - `{ label: 'Watch Clip 2', url: 'https://www.tiktok.com/@chestercorneliusthethird/video/7568640706928069902' }`
- Gorgon City clips:
  - `{ label: 'Watch Clip 1', url: 'https://www.instagram.com/p/DQmP6-JkvLS' }`
  - `{ label: 'Watch Clip 2', url: 'https://www.instagram.com/p/DQkQTC_D1kJ' }`
- Nash Rly: `clips: []` (empty, no links rendered)
- Update the render to use `clip.url` for `href` and `clip.label` for text, add `target="_blank" rel="noopener noreferrer"`

**New assets (copy from uploads):**
- `src/assets/francis-mercier-sauti-audio.png`
- `src/assets/dack-janiels-shock-therapy-stats.png`
- `src/assets/jason-derulo-spicy-margarita-views.png`

**File: `src/components/deck/slides/CaseStudyPlatformSlide.tsx`**
- Import the 3 screenshot images
- Add a `screenshot` field to each case in the data array
- Replace the placeholder `<div>` with `<img src={c.screenshot} className="w-full h-full object-cover object-top" />` inside the existing `aspect-video` container
- Add `overflow-hidden` to the container so the top-crop works cleanly

