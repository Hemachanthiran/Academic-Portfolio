import { useEffect, useRef } from 'react'

const EDU = [
  {
    period: '2024 – 2028',
    degree: 'B.Tech in Pharmaceutical Technology',
    school: 'Anna University – ACTech Campus',
    location: 'Chennai, Tamilnadu',
    grade: 'CGPA 9.09',
    note: 'Up to 3rd Semester',
  },
  {
    period: '2022 – 2024',
    degree: 'Higher Secondary Education',
    school: "St. Joseph's Matric Hr Sec School",
    location: 'Chengalpattu, Tamilnadu',
    grade: '90.34%',
    note: null,
  },
]

export default function Education() {
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
    <section id="education" ref={ref}>
      <div className="container">
        <span className="section-tag reveal">Education</span>
        <h2 className="section-title reveal reveal-delay-1">Academic Journey</h2>

        <div className="timeline">
          {EDU.map((e, i) => (
            <div key={i} className={`timeline-item reveal reveal-delay-${i + 1}`}>
              <div className="timeline-dot" />
              <div className="timeline-period">{e.period}</div>
              <div className="timeline-degree">{e.degree}</div>
              <div className="timeline-school">{e.school} &middot; {e.location}</div>
              <span className="timeline-grade">
                ✦ {e.grade}{e.note ? ` · ${e.note}` : ''}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
