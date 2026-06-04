import { useEffect, useRef } from 'react'

const WORK_EXPERIENCE = [
  {
    duration: 'Jun 2026 – Jul 2026',
    company: 'Reltsen Health Care',
    location: 'Puducherry, India',
    position: 'Student Intern',
    description: 'Conducted stability testing on pharmaceutical formulations, performed HPLC analysis, and documented findings for regulatory compliance.',
  },
]

export default function Experience() {
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
    <section id="experience" ref={ref}>
      <div className="container">
        <span className="section-tag reveal">Work Experience</span>
        <h2 className="section-title reveal reveal-delay-1">Professional Experience</h2>

        <div className="timeline">
          {WORK_EXPERIENCE.map((job, i) => (
            <div key={i} className={`timeline-item reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="timeline-dot" />
              
              <div className="timeline-content">
                <div className="timeline-duration">{job.duration}</div>
                
                <h3 className="timeline-position">{job.position}</h3>
                
                <div className="timeline-company">
                  <span className="company-name">{job.company}</span>
                  <span className="company-divider">·</span>
                  <span className="company-location">{job.location}</span>
                </div>
                
                <p className="timeline-description">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>