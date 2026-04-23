

## Remove ambient glow under the bottom "Best for" card on Slide 9

**File:** `src/components/deck/slides/CultureEditsSlide.tsx`

**Change:** Delete the decorative red blur element on **line 59**:

```tsx
<div className="absolute bottom-[5%] right-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-primary/[0.08] blur-[140px]" />
```

This is the only element producing the crimson glow/gradient bleeding into the area beneath the bottom "Best for" GlassPanel.

**Out of scope:**
- The crimson glow behind the phone clips (line 102) — stays, it's intentionally tied to the phones, not the bottom card.
- The decorative tile collage background (lines 51–57) — stays, unrelated to the glow.
- No copy, layout, or other slide changes.

**Verification:** The bottom "Best for" panel sits flush against the dark background with no red wash beneath or to the right of it.

