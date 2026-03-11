

## Fix KPI Box Sizing on Slide 14 (Additional Services)

**Problem:** The KPI metric boxes across the Gordo and Zeds Dead case studies are not uniform in size. Labels like "IMPRESSIONS" and "LAYLO SIGNUPS" are wider/taller than "CPM" or "CPR", causing visual inconsistency.

**Fix in `src/components/deck/slides/AdditionalServicesSlide.tsx`:**

- Change the metrics grid from `grid-cols-4 gap-2` to `grid-cols-4 gap-3` for better spacing
- Add a fixed minimum height to each KPI box (e.g., `min-h-[90px]`) so all boxes are the same height
- Standardize padding to `px-3 py-4` for consistent internal spacing
- Keep `flex flex-col items-center justify-center` to vertically center content within the fixed height
- Ensure both the value text (`text-2xl`) and label text (`text-sm`) use consistent sizing so labels like "6-SEC VIEWS" and "LINK CLICKS" don't cause box height variance

**Single file change:** `src/components/deck/slides/AdditionalServicesSlide.tsx` lines 119-126.

