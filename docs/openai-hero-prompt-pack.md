# Quoin Hero Prompt Pack

## Asset slots

- `tower-hero`
  Faceted Class A glass office tower in a hybrid studio exterior scene, pale daylight, premium architecture visualization, realistic curtain wall logic, restrained infrastructure cues, building anchored on the right 65 to 72 percent of frame, calm negative space on the left, no people, no signage, no second tower, no night, no purple or cyber styling.

- `tower-crown`
  Using the approved `tower-hero` image as the identity anchor, create a closer upper-tower frame of the same building. Emphasize the lantern crown, roof slab, fins, and facade rhythm. Preserve the same building identity, material palette, and lighting.

- `tower-podium`
  Using the approved `tower-hero` image as the identity anchor, create a lower-building frame of the same tower. Emphasize podium terraces, lobby glazing, and restrained datum-grid infrastructure cues. Preserve the same building identity, material palette, and lighting.

- `tower-exit`
  Using the approved `tower-hero` image as the identity anchor, create a wider oblique frame of the same tower with more site context and breathing room for a scroll transition out of the hero. Preserve the same building identity, material palette, and lighting.

## Selection workflow

1. Generate `tower-hero` first and approve it before generating any other slot.
2. Generate every other slot by referencing the approved `tower-hero` image.
3. Reject outputs that change the canopy, crown, facade rhythm, podium geometry, or introduce a second tower.
4. Export finals to AVIF or WebP before replacing the placeholder storyboard assets in `public/hero-media/`.
