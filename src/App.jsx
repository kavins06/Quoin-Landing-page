import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import HeroScene from './components/HeroScene'
import SectionBlock from './components/SectionBlock'
import { heroSteps, sections, trustSignals } from './content'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

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
      const heroStepsNodes = scope.querySelectorAll('.hero-step')

      if (!prefersReducedMotion) {
        mm.add('(min-width: 1200px)', () => {
          gsap.set(heroStepsNodes, { autoAlpha: 0, y: 18 })
          gsap.set('.hero-step--0', { autoAlpha: 1, y: 0 })
          gsap.set(heroFrame, {
            autoAlpha: 1,
            scale: 1,
            xPercent: 3,
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
          gsap.set(depthVeil, { opacity: 0.06, scale: 1 })

          const heroTimeline = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: heroTrackRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.7,
              pin: '.hero-stage',
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })

          heroTimeline
            .to(
              heroFrame,
              {
                scale: 1,
                xPercent: -10,
                yPercent: 0,
                rotation: 0,
                duration: 1.2,
              },
              0.1,
            )
            .to(
              heroRail,
              {
                x: -28,
                y: () => -window.innerHeight * 0.18,
                duration: 1.2,
              },
              0.1,
            )
            .to(
              ambientVeil,
              {
                opacity: 0.14,
                duration: 1.2,
              },
              0.1,
            )
            .to('.hero-step--0', { autoAlpha: 0, y: -16, duration: 0.24 }, 1.18)
            .to('.hero-step--1', { autoAlpha: 1, y: 0, duration: 0.24 }, 1.28)
            .to(
              heroFrame,
              {
                scale: 1,
                xPercent: -20,
                yPercent: 0,
                rotation: 0,
                duration: 1.12,
              },
              1.34,
            )
            .to(
              heroRail,
              {
                x: -36,
                y: () => -window.innerHeight * 0.23,
                duration: 1.08,
              },
              1.34,
            )
            .to(
              depthVeil,
              {
                opacity: 0.11,
                scale: 1.014,
                duration: 1.08,
              },
              1.34,
            )
            .to('.hero-step--1', { autoAlpha: 0, y: -16, duration: 0.24 }, 2.22)
            .to('.hero-step--2', { autoAlpha: 1, y: 0, duration: 0.24 }, 2.32)
            .to(
              heroFrame,
              {
                scale: 1,
                xPercent: -30,
                yPercent: 0,
                rotation: 0,
                duration: 1.18,
              },
              2.34,
            )
            .to(
              heroRail,
              {
                x: -44,
                y: () => -window.innerHeight * 0.25,
                duration: 1.08,
              },
              2.34,
            )
            .to(
              ambientVeil,
              {
                opacity: 0.18,
                duration: 1.08,
              },
              2.34,
            )
            .to(
              depthVeil,
              {
                opacity: 0.16,
                scale: 1.028,
                duration: 1.08,
              },
              2.34,
            )
        })

        mm.add('(min-width: 721px) and (max-width: 1199px)', () => {
          gsap.set(heroStepsNodes, { clearProps: 'all' })
          gsap.set(heroFrame, {
            autoAlpha: 1,
            scale: 1,
            xPercent: -2,
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
          gsap.set(ambientVeil, { opacity: 0.12 })
          gsap.set(depthVeil, { opacity: 0.08, scale: 1 })

          gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: heroTrackRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.8,
              pin: '.hero-stage',
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
            .to(
              heroFrame,
              {
                scale: 1.018,
                xPercent: -12,
                yPercent: -0.5,
                duration: 1.6,
              },
              0,
            )
            .to(
              ambientVeil,
              {
                opacity: 0.17,
                duration: 1.4,
              },
              0,
            )
            .to(
              depthVeil,
              {
                opacity: 0.13,
                scale: 1.018,
                duration: 1.4,
              },
              0.18,
            )
        })

        mm.add('(max-width: 720px)', () => {
          gsap.set(heroStepsNodes, { clearProps: 'all' })
          gsap.set(heroFrame, {
            autoAlpha: 1,
            scale: 1,
            xPercent: 12,
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
          gsap.set(ambientVeil, { opacity: 0.13 })
          gsap.set(depthVeil, { opacity: 0.08, scale: 1 })

          gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: heroTrackRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.65,
              pin: '.hero-stage',
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
            .to(
              heroFrame,
              {
                scale: 1.01,
                xPercent: 4,
                yPercent: 0,
                duration: 1.15,
              },
              0,
            )
            .to(
              ambientVeil,
              {
                opacity: 0.18,
                duration: 1.05,
              },
              0,
            )
            .to(
              depthVeil,
              {
                opacity: 0.12,
                scale: 1.012,
                duration: 1.05,
              },
              0.12,
            )
        })
      } else {
        gsap.set(heroStepsNodes, { clearProps: 'all' })
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
        className={`hero-track ${prefersReducedMotion ? 'hero-track--static' : ''}`}
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
                <p className="hero-chrome__meta">DC compliance intelligence</p>
              </header>

              <div className="hero-layout">
                <div className="hero-copy">
                  <div className="hero-copy__body">
                    <p className="hero-copy__eyebrow">
                      Regulatory-grade compliance for DC buildings over 10,000 sq ft
                    </p>
                    <h1>Operational clarity for every reporting cycle.</h1>
                    <p className="hero-copy__lede">
                      Quoin automates benchmarking, BEPS compliance, data QA, and
                      penalty forecasting so owners, asset managers, and operators
                      can act before deadlines become liabilities.
                    </p>
                  </div>

                  <div className="hero-copy__cta">
                    <div className="hero-copy__actions">
                      <a className="button button--primary" href="#cta">
                        Request a demo
                      </a>
                    </div>
                    <p className="hero-copy__support">
                      For owners, asset managers, and operators managing DC
                      reporting cycles.
                    </p>
                    <a className="button-link" href="#platform">
                      Review the operating model
                    </a>
                  </div>
                </div>

                <aside
                  className={`hero-rail ${prefersReducedMotion ? 'hero-rail--static' : ''}`}
                  aria-label="Scroll narrative"
                >
                  <span className="hero-rail__caption">Current focus</span>
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
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-strip section-panel" aria-label="Core platform areas">
        <div className="signal-strip__inner">
          <p className="signal-strip__label content-reveal">Quoin / Platform Scope</p>
          <div className="signal-strip__items">
            <span className="content-reveal">Benchmarking automation</span>
            <span className="content-reveal">BEPS compliance tracking</span>
            <span className="content-reveal">Data QA workflows</span>
            <span className="content-reveal">Penalty forecasting</span>
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
              Trust / Regulatory-grade operating model
            </span>
          </div>

          <div className="trust-panel__content">
            <h2 className="content-reveal">
              Built for repeatable compliance, not a once-a-year scramble.
            </h2>
            <p className="content-reveal">
              Quoin turns fragmented reporting work into a calmer operating
              system. The platform stays serious enough for regulatory pressure
              and approachable enough for cross-functional real estate teams.
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
          <p className="cta-panel__eyebrow">Quoin / Request a walkthrough</p>
          <h2>Bring every building into view before the deadline does.</h2>
          <p>
            Start with one portfolio, one reporting cycle, and a clearer answer
            to what needs attention now.
          </p>

          <div className="cta-panel__actions">
            <a className="button button--primary" href="mailto:hello@quoin.com">
              Contact sales
            </a>
            <a className="button button--secondary" href="#top">
              Return to top
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
