

## Scale Up Text and Panels ~20% for Slides 15 & 16

Both slides currently use `text-6xl` titles, `text-2xl` body/headers, and `p-12` panel padding. To increase everything ~20%:

### Changes (identical pattern for both files):

1. **Titles**: `text-6xl` → `text-7xl`
2. **Subtitles**: `text-2xl` → `text-3xl`
3. **Panel headers**: `text-2xl` → `text-3xl`
4. **List item text**: `text-2xl` → `text-3xl`
5. **Panel padding**: `p-12` → `p-14`
6. **Bullet dots**: `w-2 h-2` → `w-2.5 h-2.5`
7. **Row padding**: `py-3` → `py-4`

Files: `ReportingSlide.tsx`, `ExpectationsSlide.tsx`

