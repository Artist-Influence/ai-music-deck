

# Remove Emails from Next Steps Contact Box

## Change
In `NextStepsSlide.tsx`, remove lines 60-61 (the two email addresses) and adjust spacing so the company name flows directly into the website URL with consistent margins.

## Edit (lines 57-63)
```tsx
<GlassPanel variant="subtle" className="mb-6 md:mb-12 p-4 md:p-8 max-w-[700px] mx-auto">
  <p className="text-sm md:text-[21px] text-foreground font-medium mb-1 md:mb-2">{t('nextSteps.contactTitle')}</p>
  <p className="text-xs md:text-[19px] text-muted-foreground/80 mb-1 md:mb-2">{t('nextSteps.companyName')}</p>
  <p className="text-xs md:text-[21px] text-muted-foreground mb-2 md:mb-3">www.artistinfluence.com</p>
  <p className="text-xs md:text-[21px] text-primary italic">{t('nextSteps.quote')}</p>
</GlassPanel>
```

Single file, 2 lines removed, spacing tightened.

