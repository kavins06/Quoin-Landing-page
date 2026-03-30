# Sync Unpushed Local Site Content To Production

Implementation thesis: production is behind because local content and static-page edits are still only in the working tree, so commit and push the site-facing diffs that affect the local preview.

## Tasks

- [TODO] Commit the unpushed homepage and static-page files that affect the local preview.
- [TODO] Push the committed site-facing changes to `origin/main`.
- [TODO] Verify that the live site reflects the newer local content and styling.

## Files

- `.specs/tasks.md`
- `src/content.js`
- `public/seo.css`
- `dc-energy-benchmarking/index.html`
- `dc-benchmarking-deadlines-verification/index.html`
- `dc-energy-benchmarking-guide/index.html`

## Acceptance Criteria

- The local preview and live site are on the same site-facing content revision.
- The newer CTA/copy/static-page header changes are visible in production.
- `npm run lint` passes.
- `npm run build` passes.
