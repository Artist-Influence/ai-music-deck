

## Update Skrillex Fanpage Copy

**File**: `src/components/deck/slides/FanpagesSlide.tsx`

Change the Skrillex case study's `goal` field from:
```
'Consistent visibility around the FUS album and Ultra set.'
```
to:
```
'Consistent visibility around the album and Ultra set.'
```

And change the `project` display so the rendered text reads: **"FUS Album: Consistent visibility around the album and Ultra set."**

The `project` field is already `'FUS Album'` and the template renders `{c.project}: {c.goal}`, so only the `goal` string needs updating.

