# Homepage Trust + Messaging Refresh

Implementation thesis: refresh the homepage only so Quoin feels more trustworthy, clearer, and more actionable without changing the overall visual system or touching the static subpages.

## Tasks

- [DONE] Add the Georgetown trust banner above the homepage nav.
- [DONE] Rewrite hero copy, CTA text, secondary hero link, and support line.
- [DONE] Replace the three hero workflow steps and rename hero workflow labels to "How it works."
- [DONE] Rewrite the main homepage workflow section copy.
- [DONE] Rewrite the homepage trust section copy and trust cards.
- [DONE] Add the official DOEE guidance block between trust and the final CTA.
- [DONE] Replace the final CTA copy and render the CTA support line.
- [DONE] Add the homepage footer one-liner.
- [DONE] Update homepage CSS so the new banner, CTA stack, official resources block, and footer fit cleanly on desktop and mobile.
- [DONE] Run `npm run lint` and `npm run build` after each file change and leave this task file fully updated.
- [DONE] Correct the homepage trust section index so it displays `02` instead of `03`.

## Files

- `.specs/tasks.md`
- `src/content.js`
- `src/App.jsx`
- `src/App.css`

## Acceptance Criteria

- The homepage shows a new trust banner above the nav with a live BEAM portal link.
- The hero eyebrow, H1, body, CTA, secondary link, and support line match the requested wording.
- The desktop rail and mobile workflow cards show the new three-step copy and "How it works" labeling.
- The main homepage workflow section, trust section, official resources block, final CTA, and footer match the requested wording.
- The homepage remains responsive, the existing hero motion still works, and ESPM badge placements remain unchanged.
- The trust section index displays `02`.
- `npm run lint` and `npm run build` pass.
