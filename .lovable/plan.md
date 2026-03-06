
# Grammar Fixes Across Slides

Three small text edits across three files:

## Changes

### 1. Slide 5 — HowWeWorkSlide.tsx (line 7)
The step titles and descriptions run together visually. Add a colon after each title by updating the `desc` field for step 04 (and optionally all steps for consistency). Since the title and description are rendered as separate elements, the real issue is just visual separation in the card. Looking at the rendering (lines ~46-48), the title and desc are in separate `<p>` tags, so they don't actually run on. However, if the user sees them running together, we can add punctuation to the desc or after the title.

**Fix:** No structural change needed since title and desc render separately. But to address the user's concern, we'll add an em dash at the start of each description for clarity, or add a colon after the title in rendering. Simplest: prepend the desc with "— " for step 04 (or all steps for consistency).

**Decision:** Update all four step descriptions to start with "— " for visual consistency.

### 2. Slide 9 — AdditionalServicesSlide.tsx
Same issue — the service name and description render as separate elements (`<p>` tags), so they shouldn't run together. But if the layout makes them appear connected, we can add an em dash or colon prefix to descriptions.

**Decision:** Since these are already in separate styled `<p>` tags with different font sizes and a margin, this is likely a visual/layout concern. Will leave as-is unless the heading and desc truly merge. The user flagged it, so we'll prepend descriptions with "— " for the same treatment.

Actually, let me reconsider. The user is very specific about these fixes. Let me just do exactly what they asked:

### Final Plan

1. **Slide 5 (HowWeWorkSlide.tsx):** The title "Report" and desc are separate `<p>` elements, but they read as run-on. Simple fix: add " —" suffix to the title rendering, or adjust the desc. Cleanest: modify the rendering to add a colon after the title.

2. **Slide 9 (AdditionalServicesSlide.tsx):** Same approach — add punctuation between name and desc in the rendering.

3. **Cover Slide (CoverSlide.tsx, line 19):** Fix the quotation marks. Current: `not "ideas."` — the period is inside the closing quote but the opening smart quote doesn't have a matching close. Fix to: `not "ideas."`

## Technical Details

### File: `src/components/deck/slides/HowWeWorkSlide.tsx`
- Line ~46: Update the title rendering from `{step.title}` to `{step.title}:` (add colon after title)

### File: `src/components/deck/slides/AdditionalServicesSlide.tsx`  
- Line rendering service name: Update from `{s.name}` to `{s.name}:` or add separator in the card layout

### File: `src/components/deck/slides/CoverSlide.tsx`
- Line 19: Change `not "ideas."` to `not "ideas."` — ensure proper closing quotation mark. The current code has `not &quot;ideas.&quot;` which renders with straight quotes. The user wants a proper closing quote. Fix to: `not "ideas."`
