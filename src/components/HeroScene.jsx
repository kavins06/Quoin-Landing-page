import { useState } from 'react'
import { heroMediaFrames } from '../content/heroMedia'

function HeroScene({ controls, reducedMotion }) {
  const primaryFrame = heroMediaFrames[0]
  const [isReady, setIsReady] = useState(reducedMotion)

  if (!primaryFrame) {
    return <div className="hero-canvas hero-media hero-canvas--fallback" aria-hidden="true" />
  }

  return (
    <div
      className={`hero-canvas hero-media ${isReady ? 'hero-media--ready' : ''}`}
      data-controls={controls ? 'bound' : 'none'}
    >
      <div className="hero-media__atmosphere" aria-hidden="true" />
      <div className="hero-media__veil hero-media__veil--ambient" aria-hidden="true" />
      <div className="hero-media__veil hero-media__veil--depth" aria-hidden="true" />

      <div className="hero-media__frame hero-media__frame--hero" aria-hidden="true">
        <img
          className="hero-media__image"
          src={primaryFrame.src}
          alt=""
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setIsReady(true)}
        />
      </div>
    </div>
  )
}

export default HeroScene
