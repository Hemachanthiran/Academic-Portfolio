import { useEffect, useRef } from 'react'

const WORKSHOPS = [
  {
    date: 'June 2026',
    name: 'Drug Repurposing and Target Selection Workshop',
    org: 'Barcode Biotechnology · Online',
  },
  {
    date: 'Apr 2026',
    name: 'Webinar on "Role of AI in Docking Result Analysis and Optimization',
    org: 'Barcode Biotechnology · Online',
  },
  {
    date: 'Mar 2026',
    name: 'Sodium Dodecyl Sulfate - Polyacrylamide Gel Electrophoresis (SDS-PAGE) and Western Blotting',
    org: "Biotechcellence'26, Anna University, Chennai · Offline",
  },
  {
    date: 'Mar 2026',
    name: 'Immobilized Metal Affinity Chromatograpgy and Green Fluorescent Protein Techniques',
    org: "Biotechcellence'26, Anna University, Chennai · Offline",
  },
  {
    date: 'Feb 2026',
    name: 'Six Sigma Workshop - Yellow belt',
    org: "NIQR and AU TVS Centre for Quality Management · Offline",
  },
  {
    date: 'Jan 2026',
    name: 'AI driven Quality Management Systems',
    org: "Students Quality Council, Anna university, Chennai · Offline",
  },
  {
    date: 'Jan 2026',
    name: 'Webinar on "AI Assisted Drug Designing"',
    org: "Barcode Biotechnology · Online",
  },
  {
    date: 'Dec 2025',
    name: 'Webinar on "Drug Design and Discovery"',
    org: "Barcode Biotechnology · Online",
  },
  {
    date: 'Nov 2025',
    name: 'Docking, Homology Modelling and Active Site Prediction',
    org: "Discovery Boulevard · Online",
  },
  {
    date: 'Nov 2025',
    name: 'Bioavailability and Bioequivalence Studies',
    org: "Micro Theraps Research Labs Pvt Ltd, Chennai · Online",
  },
  {
    date: 'Aug 2025',
    name: 'ADMET Profiling and Drug Likeness Analysis',
    org: "Discovery Boulevard · Online",
  },
  {
    date: 'Mar 2025',
    name: 'Navigating Complexities in Drug Discovery',
    org: "Texux'25, SRM Chennai · Offline",
  },
  {
    date: 'Mar 2025',
    name: 'Ignite Bootcamp – Idea to Plan',
    org: 'Startify 3.0 / Wadhwani Foundation · Online'
  },
]

const CERTS = [
  { icon: '🧬',  name: 'Foundation course in Bioinformatics',              issuer: 'SIDH' },
  { icon: '🧫',  name: 'Bioreactor Design and Analysis',                   issuer: 'NPTEL' },
  { icon: '💊',  name: 'Drug Development and Pharmacoepidermiology',       issuer: 'Coursera' },
  { icon: '🦠',  name: 'Cell Culture Technologies',                        issuer: 'NPTEL' },
  { icon: '🧫',  name: 'Bioreactors',                                      issuer: 'NPTEl' },
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
