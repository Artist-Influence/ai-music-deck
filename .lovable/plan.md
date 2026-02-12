
## Fix Mobile Layout for DeckViewer

**Problem:** On mobile, the sidebar takes up half the screen (w-48 = 192px) and the slide area is cramped, making the presentation nearly unusable.

**Solution:**

### 1. Auto-hide sidebar on mobile
- Use the existing `useIsMobile()` hook to detect mobile screens
- Default `sidebar` to `false` on mobile so the slide gets full width on load

### 2. Hide sidebar entirely on mobile, use grid view instead
- On mobile (`< 768px`), never show the left sidebar panel -- it's too narrow to be useful
- Hide the sidebar toggle button on mobile since it's not relevant
- Keep the grid view button as the way to browse slides on mobile

### 3. Improve slide area on mobile
- The main slide area already uses `flex-1` so it will fill the screen once sidebar is gone
- Reduce header height and padding slightly on mobile for more slide real estate

**Technical details (single file edit: `src/components/deck/DeckViewer.tsx`):**

- Import `useIsMobile` from `@/hooks/use-mobile`
- Call `const isMobile = useIsMobile()` in the component
- Change sidebar initial state: `useState(!isMobile)` -- but since `isMobile` starts as `undefined`, instead use an effect to close sidebar when mobile is detected
- Wrap the sidebar rendering with `!isMobile` condition: `{sidebar && !fullscreen && !isMobile && (...)}` 
- Hide the sidebar toggle (`PanelLeft` icon) on mobile since sidebar isn't available
- Grid view: adjust to `grid-cols-2` on mobile (already handled by responsive classes)
- Add `useEffect` to auto-close sidebar when switching to mobile
