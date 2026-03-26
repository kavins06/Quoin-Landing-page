export const heroMediaSlots = {
  hero: {
    key: 'hero',
    id: 'tower-hero',
    src: '/hero-media/tower-hero.png?v=3',
    alt: 'Class A office tower in a light hybrid studio exterior scene.',
    aligned: true,
  },
}

export const heroMediaFrames = [heroMediaSlots.hero]

export const heroPromptPack = {
  anchor:
    'Faceted Class A glass office tower, hybrid studio exterior, pale daylight, premium architecture visualization, restrained infrastructure cues, realistic material logic, right-weighted composition, no people, no signage, no second tower, no night, no purple cyber styling.',
  slots: {
    hero:
      'Create the canonical three-quarter hero frame of the building. The tower should occupy the right 65-72 percent of the composition, with a calm light field on the left for overlay copy. Keep the building identity fixed across future shots.',
    crown:
      'Using the selected hero frame as the identity anchor, create a closer upper-tower shot of the same building. Emphasize the lantern crown, facade rhythm, and floating roof slab. Preserve the exact building identity and material palette.',
    podium:
      'Using the selected hero frame as the identity anchor, create a lower-building shot of the same tower. Emphasize podium terraces, lobby glazing, and restrained datum-grid infrastructure cues. Preserve the exact building identity and material palette.',
    exit:
      'Using the selected hero frame as the identity anchor, create a wider oblique view of the same tower with more site context and breathing room for the transition out of the hero. Preserve the exact building identity and material palette.',
  },
  workflow: [
    'Generate tower-hero first and approve that image before generating any other slot.',
    'Generate crown, podium, and exit only by referencing the approved hero image.',
    'Reject outputs that introduce a different canopy, crown, facade rhythm, podium geometry, or second tower.',
    'Export finals as AVIF or WebP once the identity is locked.',
  ],
}
