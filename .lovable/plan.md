

## YouTube Ads Slide — Add Thumbnails & Updated Stats

### Changes to `src/components/deck/slides/YouTubeAdsSlide.tsx`

1. **Copy uploaded images** to `src/assets/`:
   - `jason_derulo_michael_buble_-_spicy_margarita.jpg` → for the Jason Derulo thumbnail
   - `mark_tuan_-_sunsets_and_cigarrettes.jpg` → for the Mark Tuan thumbnail

2. **Replace the screenshot image** for Jason Derulo case study with the new YouTube thumbnail, and **add 2 more metrics** (Likes: 207K, Comments: 7.9K) — expanding the grid to 3 columns with 6 metrics total.

3. **Replace the placeholder case study** with Mark Tuan:
   - Artist: "Mark Tuan"
   - Track: "Sunsets & Cigarettes"
   - Thumbnail: the uploaded image
   - Metrics (6 total): 10M Views, 5.5M Unique Viewers, 1.4M hrs Watch Time, 81.2% Avg % Viewed, 135K Likes, 6.3K Comments

4. **Thumbnail sizing**: Both uploaded images are 16:9 YouTube thumbnails. Change the image container from `max-h-[220px]` to `aspect-video max-h-[180px]` with `object-cover` to match the natural thumbnail dimensions and keep both cards compact enough to stack.

5. **Metrics grid**: Change from `grid-cols-2` to `grid-cols-3` for both case studies to fit all 6 KPIs.

