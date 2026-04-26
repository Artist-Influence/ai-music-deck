# Add Email to Contact Card (Slide 18)

Add `tribe@artistinfluence.com` to the "Contact Us" card on `NextStepsSlide`.

## Implementation
**`src/components/deck/slides/NextStepsSlide.tsx`** — insert a new line in the `GlassPanel` contact block, directly under the `www.artistinfluence.com` line, rendered as a styled mailto link:

```tsx
<a
  href="mailto:tribe@artistinfluence.com"
  className="text-xs md:text-[20px] text-primary font-medium hover:underline block mb-1 md:mb-2"
>
  tribe@artistinfluence.com
</a>
```

This uses the brand red (primary) for emphasis, matching the existing `contactRedLine` styling, and keeps the layout tight on both mobile and desktop.

## No locale changes needed
The email is a literal — universal across all 11 languages — so no i18n key updates are required.
