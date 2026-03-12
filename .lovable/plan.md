

## Add Role Title "Head of Commercial" on Slide 16

Add the role title "Head of Commercial" below "Jared Rapoza" in the contact card.

### Change in `src/components/deck/slides/NextStepsSlide.tsx`

- **Line 54**: After the name `<p>` tag, add a new `<p>` tag for the role title with appropriate styling (muted color, slightly smaller than name).

```tsx
// Line 54-57
<p className="text-xl text-foreground font-medium mb-1">Jared Rapoza</p>
<p className="text-lg text-muted-foreground/80 mb-2">Head of Commercial</p>
<p className="text-xl text-muted-foreground mb-1">jared@clouted.com · 617-875-3248</p>
```

The title uses `text-lg` (slightly smaller than the name at `text-xl`) and `text-muted-foreground/80` for subtle styling. Adjusted margins to maintain proper spacing.

