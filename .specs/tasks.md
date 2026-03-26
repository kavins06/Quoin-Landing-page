# Quoin Mobile Hero Visual Removal

Visual thesis: a cleaner mobile-first hero that relies on copy, CTA, and a composed focus card without the building visual.

Content plan:
- Top: brand chrome and eyebrow.
- Primary message: headline, shorter mobile lede, CTA.
- Mobile commentary: focus card immediately after the CTA.
- Support: operating-model link and supporting copy below the focus card.

Interaction thesis:
- Desktop and tablet stay unchanged.
- Mobile remains non-pinned and non-animated.
- Remove the dedicated mobile building block and rebalance spacing for small phones.

## Tasks

- [DONE] Remove the mobile-only building visual path from `src/App.jsx` while keeping the mobile focus card and desktop hero intact.
- [DONE] Rework mobile rules in `src/App.css` so the hero reads as copy, CTA, focus card, then support content without empty visual scaffolding.
- [DONE] Verify with `npm run lint` and `npm run build`.

## Files

- `src/App.jsx`
- `src/App.css`

## Acceptance Criteria

- Mobile headline remains fully readable.
- The CTA stays visible and naturally placed above the focus card.
- No mobile hero visual renders or reserves space.
- The focus card remains visible, composed, and integrated into the mobile stack.
- Compact phones remain legible, balanced, and free of clipping or hidden content.
- `npm run lint` and `npm run build` pass.
