

# Replace Chinese (zh) Translation Copy

## What Changes
Replace all values in `src/i18n/zh.ts` with the user-provided copy. This is a full file rewrite of the Chinese locale.

## Key Differences from Current Copy
- More polished, natural Chinese throughout
- Fixes the `metaTeta.how.2` typo → `metaTiktok.how.2`
- Minor wording refinements across all slides (e.g., "切片分发" instead of "剪辑分发", "植入" instead of "播种" for Instagram seeding)
- EmailGate strings are NOT in the i18n system (hardcoded in component) — noted but not in scope unless we also internationalize the gate

## Single File Edit
**`src/i18n/zh.ts`** — Full replacement of all ~293 lines with the user's provided translations mapped to the existing key structure. No new keys needed; all keys map 1:1.

## Note on EmailGate
The login screen copy the user provided doesn't have corresponding i18n keys — the EmailGate component has hardcoded English strings. This plan only covers the zh.ts locale file. Internationalizing the EmailGate would be a separate task.

