# Quoin Hero Scroll And Responsive Refinement

Visual thesis: a calm architectural poster with a dominant center-moving tower, a left-anchored copy column, and a stable right-side commentary rail.

Content plan:
- Hero: left headline and CTA, center-moving tower, persistent right-side focus rail.
- Support: signal strip and operating model sections remain secondary and orderly.
- Detail: benchmark, BEPS, and forecasting sections keep the narrative grounded.
- Final CTA: concise conversion block with no layout regressions.

Interaction thesis:
- The tower glides from a left-weighted opening position toward a centered featured position on desktop.
- The commentary rail stays anchored in a fixed right-side lane while its content crossfades through scroll states.
- Tablet and mobile simplify motion and restack content so readability stays stronger than spectacle.

## Tasks

- [DONE] Inspect the current hero layout, scroll mapping, and responsive breakpoints in `src/App.jsx`, `src/App.css`, and supporting content files.
- [DONE] Refactor the desktop hero into a stable three-zone composition where the building moves toward center and the right-side rail stays vertically centered in the far-right column.
- [DONE] Replace the rail pop-in behavior with content-only step transitions that preserve the current narrative progression.
- [DONE] Rework tablet and mobile hero layout and motion so the section remains legible, uncluttered, and touch-friendly.
- [DONE] Verify with lint, production build, and browser screenshots across desktop, tablet, and mobile.

## Files

- `src/App.jsx`
- `src/App.css`
- `src/content.js` if content treatment requires minor breakpoint-aware support

## Acceptance Criteria

- Desktop hero reads as three zones: left copy, center-building, far-right commentary rail.
- The commentary rail never rises from the bottom or drifts into the center of the page.
- Scroll progress changes the rail content without changing its anchored lane.
- The hero visual starts left-weighted and glides toward center with restrained, smooth motion.
- Tablet and mobile layouts avoid overlap, clipped copy, awkward off-screen hero crops, and jittery motion.
- CTA, headline, and primary message remain clear at all breakpoints.
- `npm run lint` and `npm run build` pass.
