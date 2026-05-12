import { useEffect, useRef } from 'react'

const WORKSHOPS = [
  {
    date: 'Nov 2025',
    name: 'Docking, Homology Modelling & Active Site Prediction',
    org: 'Discovery Boulevard · Online',
  },
  {
    date: 'Oct 2025',
    name: 'Ignite Bootcamp – Idea to Plan',
    org: 'Startify 3.0 / Wadhwani Foundation · Online',
  },
  {
    date: 'Aug 2025',
    name: 'ADMET Profiling and Drug Likeness Analysis',
    org: 'Discovery Boulevard · Online',
  },
  {
    date: 'Mar 2025',
    name: 'Navigating Complexities in Drug Discovery',
    org: "Texux'25, SRM Chennai · Offline",
  },
]

const CERTS = [
  { icon: '⚗️',  name: 'Bioreactors',                               issuer: 'IIT Madras' },
  { icon: '🧫',  name: 'Cell Culture Technologies',                 issuer: 'IIT Kanpur' },
  { icon: '💊',  name: 'Drug Development & Pharmacoepidemiology',   issuer: 'Johns Hopkins University' },
  { icon: '🧬',  name: 'Bioinformatics',                            issuer: 'Online Certification' },
  { icon: '🎨',  name: 'Adobe Illustrator',                         issuer: 'Adobe' },
]

export default function Workshops() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="workshops" ref={ref}>
      <div className="container">
        <span className="section-tag reveal">Learning</span>
        <h2 className="section-title reveal reveal-delay-1">Workshops &amp; Certifications</h2>

        <div className="workshops-grid">
          <div>
            <div className="group-label reveal">Workshops Attended</div>
            <div className="workshop-list">
              {WORKSHOPS.map((w, i) => (
                <div key={i} className={`workshop-item reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="workshop-date">{w.date}</div>
                  <div className="workshop-name">{w.name}</div>
                  <div className="workshop-org">{w.org}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="group-label reveal">Certifications</div>
            <div className="cert-list">
              {CERTS.map((c, i) => (
                <div key={i} className={`cert-item glass-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="cert-icon">{c.icon}</div>
                  <div>
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-issuer">{c.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
