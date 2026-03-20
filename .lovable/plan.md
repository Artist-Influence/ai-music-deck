

# Shorten Reporting Bullet Text in Slide 5

## Problem
The "Reporting includes" bullet points in the How We Work slide wrap to multiple lines, creating cramped spacing. Bullets 1 and 2 are too long.

## Fix
Shorten the three `howWeWork.reporting.*` values in **all locale files** to fit on one line each while preserving meaning:

| Key | Current | New |
|-----|---------|-----|
| `howWeWork.reporting.0` | "What launched, what's live, what's next" | "What launched, what's live, what's next" *(no change — already short)* |
| `howWeWork.reporting.1` | "Top creatives, patterns worth doubling down on, and recommendations for the next release" | "Top creatives, winning patterns, and next-release recommendations" |
| `howWeWork.reporting.2` | "Platform metrics that matter and results by service with best-performing angles" | "Key platform metrics, results by service, and best-performing angles" |

Apply equivalent shortening across all 9 locale files (en, es, pt, ko, ja, zh, nl, de, fr).

## Files
- `src/i18n/en.ts` — lines 49-50
- `src/i18n/es.ts` — equivalent keys
- `src/i18n/pt.ts` — equivalent keys
- `src/i18n/ko.ts` — equivalent keys
- `src/i18n/ja.ts` — equivalent keys
- `src/i18n/zh.ts` — equivalent keys
- `src/i18n/nl.ts` — equivalent keys
- `src/i18n/de.ts` — equivalent keys
- `src/i18n/fr.ts` — equivalent keys

