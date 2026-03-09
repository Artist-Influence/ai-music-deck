

## Add PDF Export Button to Deck Viewer

### Approach
Use the **html2canvas** + **jsPDF** libraries to render each slide at 1920×1080 into a canvas, then compile all pages into a landscape PDF.

### Implementation

**1. Install dependencies**
- `jspdf` — PDF generation
- `html2canvas` — render DOM to canvas

**2. Create `src/components/deck/ExportPdfButton.tsx`**
- A button component with a download icon
- On click: show a loading toast, then loop through all slides
- For each slide: render it into an offscreen 1920×1080 div, capture with `html2canvas`, add as a JPEG page to a `jsPDF` instance (landscape A4 ratio)
- Trigger download as `CLOUTED-Deck.pdf`
- Uses `ReactDOM.createRoot` to render each slide component into the offscreen container, waits for paint, captures, then unmounts

**3. Update `DeckViewer.tsx`**
- Import `ExportPdfButton`
- Add it to the toolbar next to the grid/fullscreen buttons

### Key Details
- Slides render at native 1920×1080 (no scaling needed for capture)
- Each page is added as a JPEG image to keep file size reasonable
- A progress toast shows "Exporting slide X of Y..."
- The offscreen container is positioned off-viewport (`left: -9999px`) so it doesn't flash

### Files
- **New:** `src/components/deck/ExportPdfButton.tsx`
- **Updated:** `src/components/deck/DeckViewer.tsx` (add button to toolbar)
- **Dependencies:** `jspdf`, `html2canvas`

