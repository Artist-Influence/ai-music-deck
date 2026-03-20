

# Shorten Reporting Bullets 2 & 3 Further

## Problem
Even after the previous shortening, bullets 2 and 3 still wrap to two lines in the reporting box on Slide 5.

## Fix
Shorten further across all 9 locale files:

| Key | Current | New |
|-----|---------|-----|
| `howWeWork.reporting.1` | "Top creatives, winning patterns, and next-release recommendations" | "Top creatives, winning patterns, next-release recs" |
| `howWeWork.reporting.2` | "Key platform metrics, results by service, and best-performing angles" | "Platform metrics, results by service, top angles" |

Apply equivalent shortening in es, pt, ko, ja, zh, nl, de, fr.

## Files
All 9 files in `src/i18n/` — only the `howWeWork.reporting.1` and `howWeWork.reporting.2` values change.

