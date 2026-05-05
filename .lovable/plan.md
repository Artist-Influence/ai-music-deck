## Client Portal slide tweaks

### 1. Revert video crop
In `src/components/deck/slides/ClientPortalSlide.tsx`, remove the horizontal scale on the video so it returns to its natural aspect (no stretching):
- Change `className="w-full h-full object-cover scale-x-[1.43] origin-center"` → `className="w-full h-full object-cover"`

### 2. Bigger text in the bullet panels
Same file, in the bullet `GlassPanel`:
- Title: `md:text-xl` → `md:text-2xl`
- Description: `md:text-base` → `md:text-lg`
- Bump padding back to `p-4 md:p-6` for breathing room
- Keep `flex-1` so panels still fill column height
