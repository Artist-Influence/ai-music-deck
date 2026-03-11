

## Plan: Crop Gordo thumbnail from the top

### Change in `src/components/deck/slides/AdditionalServicesSlide.tsx`

The Gordo image uses `object-cover` which centers the crop by default. To crop from the top, add `object-top` to the Gordo thumbnail's `<img>` tag.

This requires making the image className dynamic per case. Add an `imgPosition` field to the first case object (`'object-top'`) and use it in the `<img>` className. The Zeds Dead image keeps the default `object-center`.

