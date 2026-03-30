# Implement New Website Brief From Uploaded File

Implementation thesis: treat `C:\Users\kavin\Downloads\New Website.txt` as the binding redesign brief, keep the current page structure where the brief explicitly says to preserve it, and rewrite homepage plus static-page wording and CTA hierarchy to match the brief closely.

## Tasks

- [DONE] Rewrite homepage content and CTA language in `src/content.js`, `src/App.jsx`, and `index.html` to match the uploaded brief.
- [DONE] Update the three canonical static editorial pages so their visible copy aligns with the uploaded brief.
- [DONE] Update the two bridge pages so their redirect copy matches the uploaded brief.
- [DONE] Run `npm run lint` and `npm run build`, then fix any redesign-related issues.

## Files

- `.specs/tasks.md`
- `index.html`
- `src/content.js`
- `src/App.jsx`
- `dc-energy-benchmarking/index.html`
- `dc-benchmarking-deadlines-verification/index.html`
- `dc-energy-benchmarking-guide/index.html`
- `dc-beps-compliance/index.html`
- `dc-energy-benchmarking-beps-guide/index.html`

## Acceptance Criteria

- Homepage copy, CTA language, workflow steps, proof, and CTA section match the uploaded brief.
- Static editorial pages use the wording, dates, and CTA language from the uploaded brief.
- Bridge pages match the uploaded redirect wording from the uploaded brief.
- The site remains responsive and production-ready.
- `npm run lint` passes.
- `npm run build` passes.
