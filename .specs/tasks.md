# Fix Workflow Rail Viewport Clipping

Implementation thesis: keep the new directional handoff, but resize the rail viewport from the actual workflow content height so the body copy is never clipped at the bottom.

## Tasks

- [DONE] Adjust the workflow rail viewport sizing in `src/App.jsx` so the full step body remains visible.
- [DONE] Preserve the slot-machine transition while removing bottom clipping.
- [DONE] Verify the rail visibility fix with `npm run lint` and `npm run build`.

## Files

- `.specs/tasks.md`
- `src/App.jsx`

## Acceptance Criteria

- The workflow body copy is fully visible at rest.
- The slot transition still reads cleanly without bottom clipping.
- `npm run lint` passes.
- `npm run build` passes.
