

## Fix Thumbnail Centering in Sidebar and Grid

### Problem
The `ScaledSlide` component uses fixed pixel margins (`marginLeft: -960`, `marginTop: -540`) combined with `left: 50%` / `top: 50%` for centering. While mathematically correct, at very small thumbnail scales (~0.09), sub-pixel rounding and the fixed-margin approach can cause slight visual drift. Using CSS `translate(-50%, -50%)` combined with the scale transform is more reliable across all sizes.

### Solution
Update `ScaledSlide.tsx` to use `translate(-50%, -50%)` instead of fixed negative margins for centering. This combines the centering and scaling into a single `transform` property, which browsers handle more precisely at extreme scale values.

### Changes

**File: `src/components/deck/ScaledSlide.tsx`**

Replace the inner div's positioning from:
```
left: '50%', top: '50%',
marginLeft: -960, marginTop: -540,
transform: `scale(${scale})`,
transformOrigin: 'center center',
```

To:
```
left: '50%', top: '50%',
transform: `translate(-50%, -50%) scale(${scale})`,
transformOrigin: 'center center',
```

Remove the `marginLeft` and `marginTop` properties entirely. The `translate(-50%, -50%)` achieves the same centering but is calculated by the browser's compositor, avoiding sub-pixel rounding issues at small scales.

This is a single-file, one-line change that affects all thumbnail and main slide rendering consistently.

