# Quoin Mobile Hero Second-Pass Polish

Visual thesis: a mobile-native hero with a shorter first read, an earlier building reveal, and an attached focus card that feels art-directed rather than appended.

Content plan:
- Top: brand chrome and eyebrow.
- Primary message: headline, shorter mobile lede, CTA.
- Visual sequence: framed building visual and attached focus card.
- Support: operating-model link and supporting copy below the composition.

Interaction thesis:
- Desktop and tablet stay essentially unchanged.
- Mobile remains non-pinned and non-animated.
- Small-phone rules tighten density without collapsing the visual rhythm.

## Tasks

- [DONE] Move hero copy into `src/content.js`, including a shorter mobile lede and CTA/link labels.
- [DONE] Refactor the mobile hero composition in `src/App.jsx` so the building visual and focus card form a single mobile sequence after the CTA.
- [DONE] Rework mobile hero CSS in `src/App.css` to improve visual hierarchy, earlier image presence, and stronger composition on phone screens.
- [DONE] Add a compact-phone breakpoint for `320x568`-class viewports with tighter type, spacing, and composition rules.
- [DONE] Verify with `npm run lint`, `npm run build`, and browser screenshots at `320x568`, `360x800`, `390x844`, and `412x915`.

## Files

- `src/content.js`
- `src/App.jsx`
- `src/App.css`

## Acceptance Criteria

- Mobile headline remains fully readable while taking less vertical space than the current pass.
- The CTA stays visible and naturally placed above the building.
- The building appears sooner and feels more present on phones.
- The focus card feels attached to the visual composition instead of trailing it.
- Compact phones remain legible, balanced, and free of clipping or hidden content.
- `npm run lint` and `npm run build` pass.
