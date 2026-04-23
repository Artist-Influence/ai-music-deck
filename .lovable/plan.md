

# Update Software Infrastructure copy + force one-line layout

## Copy change

`src/i18n/en.ts` — update `opSystem.pillar.0.desc`:

```ts
'opSystem.pillar.0.desc': 'Reporting, campaign tracking, workflows, real-time attribution, dashboards.',
```

Mirror the same value into the other 8 locales (`de, es, fr, ja, ko, nl, pt, zh`) — translate the connective words, keep proper terms. Each translation must also be short enough to fit one desktop line.

## Layout: prevent the desc from stacking

In `src/components/deck/slides/OperatingSystemSlide.tsx`, the pillar `desc` currently uses `text-xs md:text-lg` inside a ~50%-width column, which causes the long sentence to wrap to 2 lines on desktop.

Change to keep one line on desktop while staying responsive on mobile:

- Drop desktop size from `md:text-lg` → `md:text-base`
- Add `md:whitespace-nowrap` so it never wraps on desktop (mobile keeps wrapping naturally)

Edit line 48:

```tsx
<p className="text-xs md:text-base text-muted-foreground leading-relaxed md:whitespace-nowrap">{p.desc}</p>
```

This applies to all 3 pillars for visual consistency (the other two descs are already short enough that nowrap is safe).

## Files changed
- `src/components/deck/slides/OperatingSystemSlide.tsx` — desc text class
- `src/i18n/{en,de,es,fr,ja,ko,nl,pt,zh}.ts` — `opSystem.pillar.0.desc` value

## Out of scope
- Changing other pillars' copy or icons
- Changing card padding, icon size, or column widths
- Mobile font sizing (mobile keeps current `text-xs` and natural wrapping)

