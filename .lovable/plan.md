

# Updates to Pricing Slide, and Case Study Slide

## Changes

### 1. Pricing Slide -- Update link and service units
- Update the "View full pricing sheet" link href from `#` to `https://clouted-pricing.lovable.app`
- Change Clipping unit from "50-200+ clips" to "CPM"
- Change Fanpages unit from "Weekly / Monthly" to "Monthly"

### 2. Case Study Slide -- Fill in first case study with Subtronics data
Based on the screenshot, populate Case Study 1 with real data:
- **Artist**: Subtronics
- **Goal**: Scale Subtronics' fandom beyond bass music through themed fan accounts in line with his Coachella debut + Fibonacci multi-genre album
- **Services**: Fan Page Management
- **Metrics**: 5,000,000+ views, 150,000+ likes, 15,000+ followers, 600+ clips
- **Strategy/What mattered**: Live tour set highlights, K-Pop-style slice of life content, snippets from interviews and production livestreams, news about upcoming releases and events
- Include 3 image placeholders for sample clips (you can swap in real images later)
- Keep Case Studies 2 and 3 as placeholders for now

### Technical Details

#### File: `src/components/deck/slides/PricingSlide.tsx`
- Line 4: Change Clipping unit to `'CPM'`
- Line 5: Change Fanpages unit to `'Monthly'`
- Line 43: Update href from `"#"` to `"https://clouted-pricing.lovable.app"`

#### File: `src/components/deck/slides/CaseStudySlide.tsx`
- Update the first entry in the `cases` array with Subtronics data
- Restructure the case study card layout for the first card to include:
  - Artist name + client info (Red Light Management)
  - Goal description
  - Strategy list (numbered)
  - Sample clips area with 3 image placeholders
  - Performance metrics panel (views, likes, followers, clips)
- Keep cards 2 and 3 as bracket placeholders

