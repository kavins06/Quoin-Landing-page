# Revert Homepage Brand Lockup Badge

Implementation thesis: remove the ESPM badge from the homepage brand lockup and restore the original Quoin-only namestamp while preserving the proof-section and sidebar badge placements.

## Tasks

- [DONE] Remove the ESPM badge from the homepage header markup.
- [DONE] Remove the temporary header badge styles and restore the original Quoin lockup.
- [DONE] Run `npm run lint` and `npm run build`, then confirm the revert builds cleanly.

## Files

- `.specs/tasks.md`
- `src/App.jsx`
- `src/App.css`

## Acceptance Criteria

- The homepage top-left lockup is back to Quoin only.
- The previously added proof/CTA badges remain untouched.
- `npm run lint` passes.
- `npm run build` passes.
