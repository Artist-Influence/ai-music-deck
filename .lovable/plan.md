

# Replace "CLOUTED" Text with Logo Image

## Overview
Copy the uploaded white logo (`CLOUTED-white.png`) into the project and replace all text-based "CLOUTED" branding with the logo image.

## Changes

### 1. Copy the logo file
- Copy `user-uploads://CLOUTED-white.png` to `src/assets/CLOUTED-white.png`

### 2. Update files (4 files)

**`src/components/deck/EmailGate.tsx`**
- Replace the `<h1>CLOUTED</h1>` text with an `<img>` tag using the logo, sized appropriately (~160px wide) for the gate screen

**`src/components/deck/DeckViewer.tsx`**
- Replace the `<span>CLOUTED</span>` in the top-left toolbar with a small logo image (~80px wide)

**`src/components/deck/slides/CoverSlide.tsx`**
- Replace the large `<h1>Clouted</h1>` title with the logo image, scaled up (~400px wide) as the hero element

**`src/components/deck/slides/NextStepsSlide.tsx`**
- Replace the `<p>CLOUTED</p>` footer branding with the logo image (~200px wide)

### Technical Notes
- The logo will be imported as an ES6 module (`import logo from "@/assets/CLOUTED-white.png"`) in each file
- Since it's a white logo on a dark background, no filter adjustments are needed given the existing dark theme
- Each instance will use appropriate sizing via Tailwind classes (`h-` or `w-` constraints) to match the visual hierarchy of its context

