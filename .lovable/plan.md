

# Switch from real-time AI translation to pre-built static translations

## Problem
Currently, selecting a language calls an AI edge function in real time (~2-3s delay). The user wants instant language switching with no loading state.

## Approach
Pre-generate all 8 translation files using the AI gateway script, then bundle them as static imports. Language switching becomes a simple object swap — zero network calls, zero latency.

## Steps

### 1. Generate 8 static translation files
Use the AI gateway script to translate `en.ts` into es, pt, ko, ja, zh, nl, de, fr. Save each as `src/i18n/es.ts`, `src/i18n/pt.ts`, etc. — same `Record<string, string>` format as `en.ts`.

### 2. Simplify LanguageContext
- Remove all fetch logic, localStorage caching, `isTranslating` state
- Import all 9 locale files statically into a `translations` map
- `setLocale` just updates state — instant switch
- `t(key)` looks up from the static map

### 3. Simplify LanguagePicker
- Remove the loading spinner / "Translating..." state since it's always instant

### 4. Clean up
- Delete `supabase/functions/translate-deck/` (no longer needed)
- Remove translate-deck from `supabase/config.toml`

## Files
- **Create**: `src/i18n/es.ts`, `pt.ts`, `ko.ts`, `ja.ts`, `zh.ts`, `nl.ts`, `de.ts`, `fr.ts`
- **Edit**: `src/i18n/LanguageContext.tsx`, `src/components/deck/LanguagePicker.tsx`
- **Delete**: `supabase/functions/translate-deck/index.ts`

