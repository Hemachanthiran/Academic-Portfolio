import { useEffect, useRef } from 'react'

const SKILLS = [
  'Python', 'Data Analysis', 'Molecular Docking',
  'ADMET Prediction', 'Protein Estimation',
  'Cell Culture Techniques', 'Creative Design', 'Poster Presentation',
]

const TOOLS = [
  'Discovery Studio', 'AutoDock', 'SwissADME', 'ADMELab2.0',
  'Microsoft Office', 'Power BI', 'Adobe Creative Suite', 'Canva',
]

export default function Skills() {
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
    <section id="skills" ref={ref}>
      <div className="container">
        <span className="section-tag reveal">Skills &amp; Tools</span>
        <h2 className="section-title reveal reveal-delay-1">Capabilities</h2>

        <div className="skills-wrapper">
          <div className="reveal reveal-delay-1">
            <div className="group-label">Skills</div>
            <div className="pills">
              {SKILLS.map(s => <span key={s} className="skill-pill">{s}</span>)}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="group-label">Tools &amp; Software</div>
            <div className="pills">
              {TOOLS.map(t => <span key={t} className="tool-pill">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
