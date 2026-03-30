import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import HeroScene from './components/HeroScene'
import SectionBlock from './components/SectionBlock'
import {
  heroContent,
  heroNavLinks,
  heroSteps,
  sections,
  trustSignals,
} from './content'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const primaryHeroStep = heroSteps[0]
function App() {
  const pageRef = useRef(null)
  const heroTrackRef = useRef(null)
  const sceneControls = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const scope = pageRef.current
    if (!scope) {
      return undefined
    }

    const mm = gsap.matchMedia()
    const context = gsap.context(() => {
      const heroFrame = scope.querySelector('.hero-media__frame--hero')
      const ambientVeil = scope.querySelector('.hero-media__veil--ambient')
      const depthVeil = scope.querySelector('.hero-media__veil--depth')
      const heroRail = scope.querySelector('.hero-rail')
      const heroRailViewport = scope.querySelector('.hero-rail__viewport')
      const heroStepsNodes = scope.querySelectorAll('.hero-step')

      if (!prefersReducedMotion) {
        mm.add('(min-width: 1200px)', () => {
          const railTransitionConfig = {
            enterDuration: 0.42,
            enterEase: 'power3.out',
            exitDuration: 0.34,
            exitEase: 'power2.in',
            offsetPercent: 18,
          }
          let activeHeroStep = 0
          let railTransition = null

          const syncHeroRailViewport = () => {
            if (!heroRailViewport) {
              return
            }

            let maxHeight = 0
            heroStepsNodes.forEach((stepNode) => {
              maxHeight = Math.max(
                maxHeight,
                stepNode.scrollHeight,
                stepNode.offsetHeight,
              )
            })

            if (maxHeight > 0) {
              gsap.set(heroRailViewport, { height: maxHeight + 10 })
            }
          }

          const setActiveHeroStep = (stepIndex) => {
            if (stepIndex === activeHeroStep) {
              return
            }

            const previousStepIndex = activeHeroStep
            const previousStepNode = heroStepsNodes[previousStepIndex]
            const nextStepNode = heroStepsNodes[stepIndex]
            activeHeroStep = stepIndex

            if (railTransition) {
              railTransition.kill()
            }

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

          gsap.set(heroStepsNodes, {
            yPercent: railTransitionConfig.offsetPercent,
            autoAlpha: 0,
            zIndex: 0,
          })
          gsap.set(heroStepsNodes[0], { yPercent: 0, autoAlpha: 1, zIndex: 1 })
          gsap.set(heroFrame, {
            autoAlpha: 1,
            scale: 0.98,
            xPercent: -22,
            yPercent: 0,
            rotation: 0,
          })
          gsap.set(heroRail, {
            autoAlpha: 1,
            xPercent: 0,
            yPercent: 0,
            x: 0,
            y: 0,
          })
          gsap.set(ambientVeil, { opacity: 0.08 })
          gsap.set(depthVeil, { opacity: 0.05, scale: 0.98 })
          syncHeroRailViewport()
          ScrollTrigger.addEventListener('refreshInit', syncHeroRailViewport)

          const heroTimeline = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: heroTrackRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.9,
              pin: '.hero-stage',
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: ({ progress }) => {
                if (progress >= 0.48) {
                  setActiveHeroStep(2)
                  return
                }

                if (progress >= 0.24) {
                  setActiveHeroStep(1)
                  return
                }

                setActiveHeroStep(0)
              },
            },
          })

          heroTimeline
            .to(
              heroFrame,
              {
                scale: 1,
                xPercent: -8,
                yPercent: 0,
                rotation: 0,
                duration: 0.96,
              },
              0,
            )
            .to(
              ambientVeil,
              {
                opacity: 0.11,
                duration: 0.96,
              },
              0,
            )
            .to(
              depthVeil,
              {
                opacity: 0.08,
                scale: 1.01,
                duration: 0.96,
              },
              0.08,
            )
            .to(
              heroFrame,
              {
                scale: 1.02,
                xPercent: -2,
                yPercent: 0,
                rotation: 0,
                duration: 0.92,
              },
              0.94,
            )
            .to(
              ambientVeil,
              {
                opacity: 0.14,
                duration: 0.9,
              },
              0.94,
            )
            .to(
              depthVeil,
              {
                opacity: 0.11,
                scale: 1.02,
                duration: 0.9,
              },
              0.94,
            )
            .to(
              heroFrame,
              {
                scale: 1.035,
                xPercent: 4,
                yPercent: 0,
                rotation: 0,
                duration: 0.96,
              },
              1.74,
            )
            .to(
              ambientVeil,
              {
                opacity: 0.16,
                duration: 0.92,
              },
              1.74,
            )
            .to(
              depthVeil,
              {
                opacity: 0.14,
                scale: 1.032,
                duration: 0.92,
              },
              1.74,
            )

          return () => {
            ScrollTrigger.removeEventListener('refreshInit', syncHeroRailViewport)
            railTransition?.kill()
          }
        })

        mm.add('(min-width: 721px) and (max-width: 1199px)', () => {
          gsap.set(heroStepsNodes, { clearProps: 'all' })
          gsap.set(heroFrame, {
            autoAlpha: 1,
            scale: 0.98,
            xPercent: 6,
            yPercent: 0,
            rotation: 0,
          })
          gsap.set(heroRail, {
            autoAlpha: 1,
            xPercent: 0,
            yPercent: 0,
            x: 0,
            y: 0,
          })
          gsap.set(ambientVeil, { opacity: 0.1 })
          gsap.set(depthVeil, { opacity: 0.07, scale: 0.99 })

          gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: heroTrackRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.75,
              pin: '.hero-stage',
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
            .to(
              heroFrame,
              {
                scale: 1.01,
                xPercent: 0,
                yPercent: 0,
                duration: 1.4,
              },
              0,
            )
            .to(
              ambientVeil,
              {
                opacity: 0.14,
                duration: 1.3,
              },
              0,
            )
            .to(
              depthVeil,
              {
                opacity: 0.11,
                scale: 1.015,
                duration: 1.3,
              },
              0.18,
            )
        })

        mm.add('(max-width: 720px)', () => {
          gsap.set(heroStepsNodes, { clearProps: 'all' })
          gsap.set(heroRailViewport, { clearProps: 'all' })
          gsap.set(heroFrame, { clearProps: 'all' })
          gsap.set(heroRail, { clearProps: 'all' })
          gsap.set(ambientVeil, { clearProps: 'all' })
          gsap.set(depthVeil, { clearProps: 'all' })
        })
      } else {
        mm.add('(min-width: 1200px)', () => {
          const fadeDuration = 0.2
          let activeHeroStep = 0

          const syncHeroRailViewport = () => {
            if (!heroRailViewport) {
              return
            }

            let maxHeight = 0
            heroStepsNodes.forEach((stepNode) => {
              maxHeight = Math.max(
                maxHeight,
                stepNode.scrollHeight,
                stepNode.offsetHeight,
              )
            })

            if (maxHeight > 0) {
              gsap.set(heroRailViewport, { height: maxHeight + 10 })
            }
          }

          const setActiveHeroStep = (stepIndex) => {
            if (stepIndex === activeHeroStep) {
              return
            }

            activeHeroStep = stepIndex
            heroStepsNodes.forEach((stepNode, index) => {
              gsap.to(stepNode, {
                autoAlpha: index === stepIndex ? 1 : 0,
                duration: fadeDuration,
                overwrite: 'auto',
              })
            })
          }

          gsap.set(heroStepsNodes, {
            yPercent: 0,
            autoAlpha: 0,
            zIndex: 0,
          })
          gsap.set(heroStepsNodes[0], { autoAlpha: 1, zIndex: 1 })
          gsap.set(heroFrame, { clearProps: 'all' })
          gsap.set(heroRail, { clearProps: 'all' })
          gsap.set(ambientVeil, { clearProps: 'all' })
          gsap.set(depthVeil, { clearProps: 'all' })
          syncHeroRailViewport()
          ScrollTrigger.addEventListener('refreshInit', syncHeroRailViewport)

          const trigger = ScrollTrigger.create({
            trigger: heroTrackRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.1,
            pin: '.hero-stage',
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: ({ progress }) => {
              if (progress >= 0.48) {
                setActiveHeroStep(2)
                return
              }

              if (progress >= 0.24) {
                setActiveHeroStep(1)
                return
              }

              setActiveHeroStep(0)
            },
          })

          return () => {
            ScrollTrigger.removeEventListener('refreshInit', syncHeroRailViewport)
            trigger.kill()
          }
        })

        mm.add('(max-width: 1199px)', () => {
          gsap.set(heroStepsNodes, { clearProps: 'all' })
          gsap.set(heroRailViewport, { clearProps: 'all' })
          gsap.set(heroFrame, { clearProps: 'all' })
          gsap.set(heroRail, { clearProps: 'all' })
          gsap.set(ambientVeil, { clearProps: 'all' })
          gsap.set(depthVeil, { clearProps: 'all' })
        })

        gsap.set(heroStepsNodes, { clearProps: 'all' })
        gsap.set(heroRailViewport, { clearProps: 'all' })
        gsap.set(heroFrame, { clearProps: 'all' })
        gsap.set(heroRail, { clearProps: 'all' })
        gsap.set(ambientVeil, { clearProps: 'all' })
        gsap.set(depthVeil, { clearProps: 'all' })
      }

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
      className={`page ${prefersReducedMotion ? 'has-reduced-motion' : ''}`}
    >
      <section
        ref={heroTrackRef}
        className="hero-track"
      >
        <div className="hero-stage">
          <div className="hero-atmosphere" />
          <HeroScene controls={sceneControls} reducedMotion={prefersReducedMotion} />
          <div className="hero-poster" aria-hidden="true" />

          <div className="hero-overlay">
            <div className="hero-overlay__inner">
              <header className="hero-chrome">
                <a className="hero-chrome__brand" href="#top">
                  Quoin
                </a>
                <div className="hero-chrome__group">
                  <nav className="hero-chrome__nav" aria-label="Hero guide navigation">
                    {heroNavLinks.map((link) => (
                      <a key={link.href} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </nav>
                  <a className="hero-chrome__cta" href="#cta">
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
                      aria-label="Workflow"
                    >
                      <span className="hero-focus-inline__caption">
                        Workflow
                      </span>
                      <article className="hero-focus-inline__item">
                        <p className="hero-step__label">
                          <span>{primaryHeroStep.index}</span>
                          {primaryHeroStep.label}
                        </p>
                        <h2>{primaryHeroStep.title}</h2>
                        <p>{primaryHeroStep.body}</p>
                      </article>
                    </section>
                  </div>

                  <p className="hero-copy__support">{heroContent.support}</p>
                </div>

                <aside
                  className="hero-rail"
                  aria-label="Scroll narrative"
                >
                  <span className="hero-rail__caption">Workflow</span>
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
      </section>

      {sections.map((section) => (
        <SectionBlock key={section.id} section={section} />
      ))}

      <section id="trust" className="trust-panel section-panel">
        <div className="trust-panel__frame">
          <div className="trust-panel__meta content-reveal">
            <span className="section-block__index">03</span>
            <span className="section-block__eyebrow">
              Proof
            </span>
          </div>

          <div className="trust-panel__content">
            <h2 className="content-reveal">
              Built for District teams who cannot afford last-week surprises.
            </h2>
            <p className="content-reveal">
              Quoin is shaped around DC coverage, review, and Portfolio Manager
              handoffs so the benchmark stays legible when pressure goes up.
            </p>

            <div className="trust-grid">
              {trustSignals.map((signal) => (
                <article key={signal.label} className="trust-grid__item content-reveal">
                  <h3>{signal.label}</h3>
                  <p>{signal.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="cta-panel">
        <div className="cta-panel__inner">
          <p className="cta-panel__eyebrow">Request a walkthrough</p>
          <h2>See what still needs attention before May 1.</h2>
          <p>
            We will show how Quoin turns scattered building records into a
            clearer benchmarking handoff before filing week compresses every
            decision.
          </p>

          <div className="cta-panel__actions">
            <a className="button button--primary" href="mailto:hello@quoin.com">
              Request a walkthrough
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
