import { useEffect, useRef } from 'react'

const STATS = [
  { n: '9.09', l: 'CGPA' },
  { n: '90%+', l: 'HSC Grade' },
  { n: '3', l: 'Projects' },
  { n: '4+', l: 'Workshops' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <span className="section-tag reveal">About</span>

        <div className="about-grid">
          <div>
            <h2 className="section-title reveal reveal-delay-1">
              Driven by curiosity,<br />guided by science.
            </h2>
            <div className="about-text reveal reveal-delay-2">
              <p>
                I'm a <strong>Pharmaceutical Technology student</strong> at Anna University's
                ACTech Campus, maintaining a CGPA of 9.09. My work sits at the junction of
                formulation science, bioinformatics, and translational research.
              </p>
              <p>
                I gravitate toward problems that blend biology, chemistry, and technology —
                designing nutraceuticals for protein bioavailability, modelling drug–target
                interactions, or building blockchain-based supply chain frameworks.
              </p>
              <p>
                Outside the lab, I communicate science through <strong>design and writing</strong>,
                and explore data with <strong>Python</strong> and computational tools.
              </p>
            </div>
          </div>

          <div className="about-stats">
            {STATS.map((s, i) => (
              <div key={s.l} className={`stat-card glass-card reveal reveal-delay-${i + 1}`}>
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-pub reveal reveal-delay-2">
          <div className="pub-label">Publication</div>
          <div className="pub-title">
            "Utility of Bioluminescence in Advanced Imaging and Diagnostic Platforms"
          </div>
          <div className="pub-venue">
            Verve 30th Edition &mdash; Biotechcellence&apos;25 &middot; Anna University, Chennai
          </div>
        </div>
      </div>
    </section>
  )
}
