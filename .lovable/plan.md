

# Multi-Language Support for the Deck

## Overview
Add a language switcher that translates all deck content into 9 languages using AI-powered translation via an edge function, with results cached in localStorage.

**Languages**: English (default), Spanish (LATAM), Portuguese (Brazilian), Korean, Japanese, Mandarin Chinese, Dutch, German, French

## Architecture

```text
┌─────────────┐     ┌──────────────────┐     ┌──────────────┐
│ Language     │────▶│ LanguageContext   │────▶│ All 15 Slides│
│ Picker (UI) │     │ + useTranslation  │     │ use t() hook │
└─────────────┘     └──────┬───────────┘     └──────────────┘
                           │ cache miss
                    ┌──────▼───────────┐
                    │ translate-deck   │
                    │ Edge Function    │
                    │ (Lovable AI)     │
                    └──────────────────┘
```

## Implementation Steps

### 1. Create English strings file (`src/i18n/en.ts`)
Extract every translatable string from all 15 slides into a flat key-value object organized by slide. Metric labels (CPM, Views, Likes, etc.), artist names, track names, and URLs stay untranslated. Only prose, headings, descriptions, and bullet points get translated.

~150-200 string keys total.

### 2. Create language context (`src/i18n/LanguageContext.tsx`)
- React context holding `locale` state and a `t(key)` function
- On locale change: check localStorage cache for that locale's translations
- If cache miss: call the `translate-deck` edge function
- Loading state while translation is in progress
- Default to English (no API call needed)

### 3. Create edge function (`supabase/functions/translate-deck/index.ts`)
- Accepts `{ targetLocale: string, strings: Record<string, string> }`
- Uses Lovable AI (`google/gemini-2.5-flash`) to translate all strings in one batch
- Returns `Record<string, string>` with same keys, translated values
- Prompt instructs the model on locale style (LATAM Spanish, Brazilian Portuguese, etc.)

### 4. Add language picker to DeckViewer toolbar
- Small dropdown in the top-right toolbar area (next to grid/fullscreen buttons)
- Shows language flag emoji + code (🇺🇸 EN, 🇪🇸 ES, 🇧🇷 PT, etc.)
- On mobile: accessible from a small floating button or top bar
- Selecting a language triggers translation and re-renders all slides

### 5. Update all 15 slides to use `t()` 
Each slide replaces hardcoded strings with `t('slideKey.stringKey')`. Case study data (artist names, track names, metric values) stays hardcoded. Only UI copy gets translated.

**Example transformation:**
```tsx
// Before
<h1>Music discovery has changed.</h1>

// After  
<h1>{t('theShift.title')}</h1>
```

### 6. Files to create
- `src/i18n/en.ts` — English string definitions
- `src/i18n/LanguageContext.tsx` — context provider, `useTranslation` hook, caching logic
- `src/i18n/locales.ts` — locale metadata (code, label, flag emoji)
- `src/components/deck/LanguagePicker.tsx` — dropdown component
- `supabase/functions/translate-deck/index.ts` — AI translation edge function

### 7. Files to modify
- `src/App.tsx` — wrap with `LanguageProvider`
- `src/components/deck/DeckViewer.tsx` — add `LanguagePicker` to toolbar + mobile view
- All 15 slide files — replace hardcoded strings with `t()` calls

### User experience
- English loads instantly (no API call)
- First time selecting another language: ~2-3 second loading indicator while AI translates
- Subsequent visits in that language: instant (cached in localStorage)
- Translations persist across sessions per browser

