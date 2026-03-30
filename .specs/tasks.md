# Sync Homepage And Static Page SEO Metadata

Implementation thesis: align the homepage and canonical static page head tags with the current public-interest/DC benchmarking positioning so titles, descriptions, and social metadata match the live copy direction.

## Tasks

- [DONE] Update the homepage title, description, and social metadata to match the current positioning.
- [DONE] Update the canonical static pages' titles, descriptions, and schema descriptions to match the same language system.
- [DONE] Run `npm run lint` and `npm run build`, then confirm the metadata changes build cleanly.

## Files

- `.specs/tasks.md`
- `index.html`
- `dc-energy-benchmarking/index.html`
- `dc-benchmarking-deadlines-verification/index.html`
- `dc-energy-benchmarking-guide/index.html`

## Acceptance Criteria

- The homepage head tags match the current public-interest/DC benchmarking positioning.
- The three canonical static pages use metadata and schema descriptions that match the current language system.
- `npm run lint` passes.
- `npm run build` passes.
