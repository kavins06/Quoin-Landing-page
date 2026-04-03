import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import SectionBlock from './components/SectionBlock'
import {
  ctaContent,
  heroContent,
  heroNavLinks,
  heroSteps,
  officialResources,
  sections,
  trustContent,
  trustSignals,
} from './content'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const platformSignInUrl = 'https://platform-quoin-green.vercel.app/sign-in'
  const pageRef = useRef(null)
  const heroTrackRef = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const scope = pageRef.current
    if (!scope) {
      return undefined
    }

    const mm = gsap.matchMedia()
    const context = gsap.context(() => {
      const heroRail = scope.querySelector('.hero-rail')
      const heroRailViewport = scope.querySelector('.hero-rail__viewport')
      const heroStepsNodes = Array.from(scope.querySelectorAll('.hero-step'))

      const syncHeroRailViewport = () => {
        if (!heroRailViewport || heroStepsNodes.length === 0) {
          return
        }

        const maxHeight = heroStepsNodes.reduce(
          (height, stepNode) => Math.max(height, stepNode.scrollHeight, stepNode.offsetHeight),
          0,
        )

        if (maxHeight > 0) {
          gsap.set(heroRailViewport, { height: maxHeight + 10 })
        }
      }

      const getHeroStepIndex = (progress) => {
        if (progress >= 0.48) {
          return 2
        }

        if (progress >= 0.24) {
          return 1
        }

        return 0
      }

      mm.add('(min-width: 1200px)', () => {
        if (!heroRail || heroStepsNodes.length === 0) {
          return undefined
        }

        let activeHeroStep = 0
        let railTransition = null

        const setActiveHeroStep = (stepIndex) => {
          if (stepIndex === activeHeroStep) {
            return
          }

          if (prefersReducedMotion) {
            activeHeroStep = stepIndex
            heroStepsNodes.forEach((stepNode, index) => {
              gsap.to(stepNode, {
                autoAlpha: index === stepIndex ? 1 : 0,
                duration: 0.2,
                overwrite: 'auto',
              })
            })
            return
          }

          const railTransitionConfig = {
            enterDuration: 0.38,
            enterEase: 'power3.out',
            exitDuration: 0.3,
            exitEase: 'power2.in',
            offsetPercent: 14,
          }

          const previousStepIndex = activeHeroStep
          const previousStepNode = heroStepsNodes[previousStepIndex]
          const nextStepNode = heroStepsNodes[stepIndex]
          activeHeroStep = stepIndex

          railTransition?.kill()

          heroStepsNodes.forEach((stepNode, index) => {
            if (index !== previousStepIndex && index !== stepIndex) {
              gsap.set(stepNode, {
                yPercent: railTransitionConfig.offsetPercent,
                autoAlpha: 0,
                zIndex: 0,
              })
            }
          })

          gsap.set(previousStepNode, {
            yPercent: 0,
            autoAlpha: 1,
            zIndex: 1,
          })
          gsap.set(nextStepNode, {
            yPercent: railTransitionConfig.offsetPercent,
            autoAlpha: 0,
            zIndex: 2,
          })

          railTransition = gsap.timeline({
            defaults: { overwrite: 'auto' },
            onComplete: () => {
              gsap.set(previousStepNode, {
                yPercent: railTransitionConfig.offsetPercent,
                autoAlpha: 0,
                zIndex: 0,
              })
              gsap.set(nextStepNode, {
                yPercent: 0,
                autoAlpha: 1,
                zIndex: 1,
              })
              railTransition = null
            },
          })

          railTransition
            .to(
              previousStepNode,
              {
                yPercent: -railTransitionConfig.offsetPercent,
                autoAlpha: 0,
                duration: railTransitionConfig.exitDuration,
                ease: railTransitionConfig.exitEase,
              },
              0,
            )
            .to(
              nextStepNode,
              {
                yPercent: 0,
                autoAlpha: 1,
                duration: railTransitionConfig.enterDuration,
                ease: railTransitionConfig.enterEase,
              },
              0,
            )
        }

        if (prefersReducedMotion) {
          gsap.set(heroStepsNodes, {
            yPercent: 0,
            autoAlpha: 0,
            zIndex: 0,
          })
          gsap.set(heroStepsNodes[0], { autoAlpha: 1, zIndex: 1 })
        } else {
          gsap.set(heroStepsNodes, {
            yPercent: 14,
            autoAlpha: 0,
            zIndex: 0,
          })
          gsap.set(heroStepsNodes[0], { yPercent: 0, autoAlpha: 1, zIndex: 1 })
          gsap.set(heroRail, {
            autoAlpha: 1,
            xPercent: 0,
            yPercent: 0,
            x: 0,
            y: 0,
          })
        }

        syncHeroRailViewport()
        ScrollTrigger.addEventListener('refreshInit', syncHeroRailViewport)

        const trigger = ScrollTrigger.create({
          trigger: heroTrackRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: prefersReducedMotion ? 0.1 : 0.9,
          pin: '.hero-stage',
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: ({ progress }) => {
            setActiveHeroStep(getHeroStepIndex(progress))
          },
        })

        return () => {
          ScrollTrigger.removeEventListener('refreshInit', syncHeroRailViewport)
          railTransition?.kill()
          trigger.kill()
        }
      })

      mm.add('(max-width: 1199px)', () => {
        gsap.set(heroStepsNodes, { clearProps: 'all' })

        if (heroRailViewport) {
          gsap.set(heroRailViewport, { clearProps: 'all' })
        }

        if (heroRail) {
          gsap.set(heroRail, { clearProps: 'all' })
        }
      })

      gsap.utils.toArray('.section-panel').forEach((panel) => {
        const revealItems = panel.querySelectorAll('.content-reveal')

        gsap.from(revealItems, {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 24,
          duration: 0.88,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 78%',
            once: true,
          },
        })
      })
    }, scope)

    return () => {
      mm.revert()
      context.revert()
    }
  }, [prefersReducedMotion])

  return (
    <main
      id="top"
      ref={pageRef}
      className="page"
    >
      <section
        ref={heroTrackRef}
        className="hero-track"
      >
        <div className="hero-stage">
          <div className="hero-atmosphere" />

          <div className="hero-overlay">
            <div className="hero-overlay__inner">
              <header className="hero-chrome">
                <a className="hero-chrome__brand" href="#top">
                  Project QUOIN
                </a>
                <div className="hero-chrome__group">
                  <button
                    type="button"
                    className="hero-chrome__menu-toggle"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="hero-mobile-nav"
                    aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    onClick={() => setIsMobileMenuOpen((open) => !open)}
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                  <nav
                    id="hero-mobile-nav"
                    className={`hero-chrome__nav ${isMobileMenuOpen ? 'is-open' : ''}`}
                    aria-label="Hero guide navigation"
                  >
                    {heroNavLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                  <a
                    className="hero-chrome__cta"
                    href={platformSignInUrl}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {heroContent.primaryCta}
                  </a>
                </div>
              </header>

              <div className="hero-layout">
                <div className="hero-copy">
                  <div className="hero-copy__body">
                    {heroContent.eyebrow ? (
                      <p className="hero-copy__eyebrow">{heroContent.eyebrow}</p>
                    ) : null}
                    <h1>{heroContent.headline}</h1>
                    <p className="hero-copy__lede hero-copy__lede--desktop">
                      {heroContent.ledeDesktop}
                    </p>
                    <p className="hero-copy__lede hero-copy__lede--mobile">
                      {heroContent.ledeMobile}
                    </p>
                  </div>

                  <div className="hero-mobile-composition">
                    <section
                      className="hero-focus-inline"
                      aria-label="How it works"
                    >
                      <span className="hero-focus-inline__caption">
                        How it works
                      </span>
                      <div className="hero-focus-inline__list">
                        {heroSteps.map((step) => (
                          <article key={step.index} className="hero-focus-inline__item">
                            <p className="hero-step__label">
                              <span>{step.index}</span>
                              {step.label}
                            </p>
                            <h2>{step.title}</h2>
                            <p>{step.body}</p>
                          </article>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="hero-copy__actions">
                    <a className="button button--primary" href={platformSignInUrl}>
                      {heroContent.primaryCta}
                    </a>
                  </div>
                </div>

                <div className="hero-side">
                  <figure className="hero-spm-mark">
                    <img
                      src="/espm/Works_with_PM_logo_Blue.png"
                      alt="Works with ENERGY STAR Portfolio Manager"
                      loading="eager"
                      decoding="async"
                    />
                  </figure>

                  <aside
                    className="hero-rail"
                    aria-label="Scroll narrative"
                  >
                    <span className="hero-rail__caption">How it works</span>
                    <div className="hero-rail__viewport">
                      {heroSteps.map((step, index) => (
                        <article
                          key={step.label}
                          className={`hero-step hero-step--${index}`}
                        >
                          <p className="hero-step__label">
                            <span>{step.index}</span>
                            {step.label}
                          </p>
                          <h2>{step.title}</h2>
                          <p>{step.body}</p>
                        </article>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <SectionBlock key={section.id} section={section} />
      ))}

      <section id="trust" className="trust-panel section-panel">
        <div className="trust-panel__frame">
          <div className="trust-panel__meta content-reveal">
            <span className="section-block__index">02</span>
            <span className="section-block__eyebrow">
              {trustContent.eyebrow}
            </span>
          </div>

          <div className="trust-panel__content">
            <h2 className="content-reveal">
              {trustContent.title}
            </h2>
            <p className="content-reveal">
              {trustContent.body}
            </p>

            <figure className="trust-badge content-reveal">
              <img
                src="/espm/Works_with_PM_logo_Blue.png"
                alt="Works with ENERGY STAR Portfolio Manager"
              />
            </figure>

            <div className="trust-grid">
              {trustSignals.map((signal) => (
                <article key={signal.label} className="trust-grid__item content-reveal">
                  <h3>{signal.label}</h3>
                  <p>{signal.body}</p>
                </article>
              ))}
            </div>

            <section className="official-resources content-reveal" aria-labelledby="official-guidance-title">
              <span className="official-resources__eyebrow">Official resources</span>
              <h3 id="official-guidance-title">{officialResources.title}</h3>
              <p>{officialResources.body}</p>
              <a
                className="official-resources__link"
                href={officialResources.href}
                target="_blank"
                rel="noreferrer"
              >
                {officialResources.cta}
              </a>
            </section>
          </div>
        </div>
      </section>

      <section id="cta" className="cta-panel">
        <div className="cta-panel__inner">
          <p className="cta-panel__eyebrow">{ctaContent.eyebrow}</p>
          <h2>{ctaContent.title}</h2>
          <p>{ctaContent.body}</p>

          <div className="cta-panel__actions">
            <a className="button button--primary" href={platformSignInUrl}>
              {ctaContent.primaryCta}
            </a>
          </div>
          <p className="cta-panel__support">{ctaContent.support}</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>Quoin is a public-interest tool built at Georgetown for DC & the Environment.</p>
      </footer>
    </main>
  )
}

export default App
