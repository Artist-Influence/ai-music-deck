
Fix the PDF exporter so it cannot hang on slide 8 and runs faster end-to-end.

1. Harden the export loop in `src/components/deck/ExportPdfButton.tsx`
- Replace the unbounded per-slide capture with a guarded pipeline:
  - mount slide in the offscreen portal
  - wait for React paint + fonts
  - wait for slide images with a bounded timeout
  - run `html2canvas-pro` with a bounded timeout
- Wrap both image prep and canvas capture in `Promise.race(...)` timeouts so one bad slide can never freeze the whole export.
- Add a single automatic retry for a failed/timed-out slide by remounting that export slide once.
- If the retry still fails, continue to the next slide and report skipped slide numbers in the completion toast instead of locking the export forever.

2. Remove unnecessary fixed waiting
- Drop the blanket per-slide delay and switch to condition-based waiting:
  - 2x `requestAnimationFrame`
  - `document.fonts.ready`
  - bounded image readiness check
- Keep the animation-freeze stylesheet during export so animated slides stay stable, but stop paying extra idle time on simple slides.

3. Tune `html2canvas-pro` for failure recovery
- Add explicit capture guards such as `imageTimeout` and cleanup-friendly options so the hidden html2canvas iframe/container is torn down quickly after each attempt.
- Keep the existing 1920×1080 offscreen capture target and JPEG PDF assembly, but make the capture step fail fast instead of hanging indefinitely.

4. Optimize slide 8’s heavy image path
- Update `src/components/deck/slides/Top50TrendingSlide.tsx` so its screenshot image is export-friendly:
  - force eager loading / deterministic decoding
  - add explicit sizing behavior so the browser has less work during export
- Apply the same image-loading pattern to the other screenshot-heavy slides that use large imported assets, so slide 8 is fixed and future stalls on later slides are avoided.

5. Improve export UX
- Keep progress visible, but change messaging to reflect retries/skips, e.g.:
  - “Capturing slide 8 of 15”
  - “Retrying slide 8…”
  - “Export complete — 1 slide skipped”
- Preserve cleanup in all cases: remove export CSS class, remove injected style tag, unmount offscreen slide, reset button state.

Files to change
- `src/components/deck/ExportPdfButton.tsx` — add per-slide timeout/retry/skip logic, remove fixed delay, tighten capture options, improve progress/final messaging
- `src/components/deck/slides/Top50TrendingSlide.tsx` — make the screenshot image load/decoding more deterministic for export
- Other screenshot-heavy slide files that use large imported images (`CreatorFloodSlide.tsx`, `CaseStudyCreatorFloodSlide.tsx`, `AdditionalServicesSlide.tsx`, and similar case-study slides) — apply the same eager/decode-safe image pattern

Technical details
- Root issue: the exporter currently has no timeout around slide capture, so when `html2canvas-pro` or a large image stalls on slide 8, the whole PDF job blocks forever.
- The session evidence already shows export advancing to “Capturing slide 8 of 15” and then stopping, which matches a stuck per-slide capture rather than navigation or portal mounting.
- The fix is to make each slide capture bounded and recoverable, not just “wait less”.
