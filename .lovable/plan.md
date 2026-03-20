

# Fix Cover Slide Mobile Layout

## Problem
On mobile, the CoverSlide renders inside a `min-h-dvh` wrapper (from ScaledSlide's mobile mode), but the slide's root div uses `h-full` which doesn't resolve to viewport height in this context. The content clusters at the top with a large empty area below.

## Fix — `src/components/deck/slides/CoverSlide.tsx`

Change the root container from `h-full` to `h-full min-h-dvh` so on mobile it fills the screen, allowing `justify-center` to properly center the logo, tagline, and subtitle vertically.

### Single edit (line 8):
```
// Before
<div className="w-full h-full bg-background relative overflow-hidden flex flex-col items-center justify-center pb-0 md:pb-[10%]">

// After
<div className="w-full h-full min-h-dvh bg-background relative overflow-hidden flex flex-col items-center justify-center pb-0 md:pb-[10%]">
```

This ensures:
- On desktop (inside 1920x1080 scaled canvas), `h-full` fills the canvas — no change
- On mobile (inside `min-h-dvh` wrapper), `min-h-dvh` ensures the slide fills the viewport so content centers properly

