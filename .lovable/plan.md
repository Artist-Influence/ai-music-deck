

## Fix iPhone Viewport Cutoff in DeckViewer

**Problem:** On iPhones, `h-screen` (100vh) includes the area behind Safari's address bar and bottom home indicator, so the top header and slide navigation controls get clipped.

**Solution:** Replace `h-screen` with `h-dvh` (dynamic viewport height) which Tailwind supports and correctly accounts for mobile browser chrome. This affects both the main viewer and the grid view.

**File:** `src/components/deck/DeckViewer.tsx`

- **Line 50 (grid view):** Change `h-screen` to `h-dvh`
- **Line 70 (main view):** Change `h-screen` to `h-dvh`

`dvh` is supported on all modern iPhones (Safari 15.4+) and dynamically adjusts as the browser chrome shows/hides, ensuring the header and bottom nav are always visible.

