

## Fix Uniform Case Study Cards on Slide 14

**Problem:** The Gordo card appears larger than Zeds Dead because the description text differs in length (1 line vs 2 lines), pushing content around. The `flex-1` + `justify-center` approach lets each card's internal content dictate its visual weight differently.

**Fix in `src/components/deck/slides/AdditionalServicesSlide.tsx`:**

1. **Remove `flex-1` from GlassPanel** — instead of letting flex distribute space unevenly based on content, give both cards equal explicit structure
2. **Fix thumbnail size** — both already use `w-[150px] h-[150px]`, so these are fine
3. **Fix description line** — give it a fixed height (`h-[52px]`) so both cards allocate the same space regardless of text length
4. **Standardize KPI boxes** — keep the current `min-h-[90px]` and `px-3 py-4` but also add a fixed height `h-[90px]` to enforce exact uniformity
5. **Use `flex-1` on the parent column and `flex-1` equally on both cards** — the issue is that `justify-center` with varying content heights creates different visual padding. Instead, remove `justify-center` and use consistent fixed spacing

**Concrete changes (lines 99-127):**
- Keep `flex-1` on each GlassPanel but remove `justify-center` — let content flow naturally from top
- Set description `<p>` to `min-h-[48px]` to normalize the space between 1-line and 2-line descriptions  
- Change KPI boxes from `min-h-[90px]` to `h-[90px]` for exact sizing
- Keep all padding at `p-5` for both cards

