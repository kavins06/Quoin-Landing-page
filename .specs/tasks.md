# Simplify the Quoin Homepage Into a Calmer, Benchmarking-First Editorial Surface

Implementation thesis: keep the premium hero and benchmarking-first positioning, but aggressively reduce homepage density so the page reads as hero, one workflow section, one proof block, and one decisive CTA.

## Tasks

- [DONE] Simplify homepage copy in `src/content.js` so the hero, workflow section, and proof block communicate fewer ideas with shorter copy.
- [DONE] Remove the homepage signal strip and search-card module from `src/App.jsx`.
- [DONE] Tighten the homepage hero, section, proof, and CTA structure in `src/App.jsx` without changing static SEO pages.
- [DONE] Rework `src/App.css` to calm header/nav weight, reduce section density, and create cleaner rhythm between hero, workflow, proof, and CTA.
- [DONE] Keep the right-side rail and hero motion, but make the commentary track shorter and visually quieter.
- [DONE] Verify the homepage on desktop and mobile with `npm run lint` and `npm run build`.

## Files

- `src/content.js`
- `src/App.jsx`
- `src/App.css`

## Acceptance Criteria

- The homepage is visibly shorter and no longer includes the signal strip or search-card module.
- The hero reads faster: shorter eyebrow, sharper headline, shorter supporting copy, and calmer commentary rail.
- Only one workflow section remains below the hero.
- The trust/proof area feels tighter and less explanatory.
- The final CTA is clearer and less cluttered.
- Static benchmarking pages remain unchanged.
- `npm run lint` passes.
- `npm run build` passes.
