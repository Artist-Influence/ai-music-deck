

## Slide 5 (HowWeWorkSlide) Updates

### Changes (all in `src/components/deck/slides/HowWeWorkSlide.tsx`)

1. **Title**: Replace "Simple process." + "No mystery." with single title `Our End-to-End Process` and subheadline `An industry expert will craft a customized campaign plan tailored to your specific needs`.

2. **Update step copy**:
   - `01` Proposal: "We send over a proposal to align on goals, audience, assets, and guardrails"
   - `02` Launch: keep existing "We activate the chosen services with tight execution and clear timelines."
   - `03` Optimize: "We analyze what's working, cut what isn't, and keep results growing."
   - `04` Report: "Weekly updates, final recap, and reusable learnings for the next campaign."

3. **Add Lucide icons** to each step card (above the number): `FileText` for Proposal, `Rocket` for Launch, `TrendingUp` for Optimize, `BarChart3` for Report. Renders at `w-8 h-8 text-primary` centered in the card.

4. Import `{ FileText, Rocket, TrendingUp, BarChart3 }` from `lucide-react`.

No structural/layout changes — keeps the horizontal 4-card layout with connector lines and glow sweep animation.

