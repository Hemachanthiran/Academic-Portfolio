import { useEffect, useRef } from 'react'

const PROJECTS = [
    {
    icon: '🩹',
    event: "3rd E-YUVA call · BIRAC",
    name: 'Enzy-Derm',
    desc: 'Studied recurrent dermatophytic fungal infections caused by poor drug retention, biofilm-mediated resistance, and inadequate treatment monitoring. Contributed to the conceptual development of a smart antifungal skin patch combining targeted drug delivery, biofilm disruption, and visual infection monitoring.',
    tags: ['Drug Delivery', 'Antifungals', 'Formulation'],
    github: null,
  },
  {
    icon: '🔗',
    event: "Foodathon · Feast'25, SRM",
    name: 'Farm2Fork',
    desc: 'Identified transparency gaps in farm-to-consumer supply chains and designed a Blockchain + IoT conceptual framework for end-to-end food traceability, improving quality assurance at every stage.',
    tags: ['Blockchain', 'IoT', 'Traceability', 'Supply Chain'],
    github: 'https://github.com/Hemachanthiran/Farm2Fork',
  },
  {
    icon: '🧬',
    event: "BioHackathon'25 · Biotechcellence'25, Anna University",
    name: 'Absorptein',
    desc: 'Studied age-related protein malabsorption and Sarcopenia-associated muscle loss. Contributed to a conceptual nutraceutical formulation focused on improved protein bioavailability and muscle recovery.',
    tags: ['Formulation', 'Nutraceutical', 'Sarcopenia', 'Bioavailability'],
    github: null,
  },
]

export default function Projects() {
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
    <section id="projects" ref={ref}>
      <div className="container">
        <span className="section-tag reveal">Projects</span>
        <h2 className="section-title reveal reveal-delay-1">Research & Events</h2>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className={`project-card glass-card reveal reveal-delay-${i + 1}`}>
              <div className="project-top">
                <div className="project-icon">{p.icon}</div>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-gh">
                    ↗ GitHub
                  </a>
                )}
              </div>

              <div>
                <div className="project-event">{p.event}</div>
                <div className="project-name">{p.name}</div>
              </div>

              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
