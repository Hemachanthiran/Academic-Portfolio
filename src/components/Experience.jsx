import { useEffect, useRef } from 'react'

const WORK_EXPERIENCE = [
  {
    duration: 'Jun 2024 – Aug 2024',
    company: 'Biotech Innovations Ltd',
    location: 'Bangalore, Karnataka',
    position: 'Pharmaceutical Research Intern',
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

      <style>{`
        #experience {
          padding: 4rem 0;
          position: relative;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-tag {
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 3rem;
          color: var(--color-text-primary);
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .reveal-delay-1 { animation-delay: 0.1s; }
        .reveal-delay-2 { animation-delay: 0.2s; }
        .reveal-delay-3 { animation-delay: 0.3s; }

        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            to bottom,
            var(--color-border-primary),
            transparent
          );
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .timeline-item.visible {
          opacity: 1;
        }

        .timeline-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background: var(--color-text-primary);
          border: 3px solid var(--color-background-primary);
          border-radius: 50%;
          left: -1.9rem;
          top: 0.35rem;
          box-shadow: 0 0 0 3px var(--color-border-tertiary);
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-dot {
          width: 16px;
          height: 16px;
          left: -2.15rem;
          box-shadow: 0 0 0 4px var(--color-border-secondary);
        }

        .timeline-content {
          padding: 1.5rem;
          background: var(--color-background-secondary);
          border: 1px solid var(--color-border-tertiary);
          border-radius: var(--border-radius-lg);
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-content {
          border-color: var(--color-border-secondary);
          background: var(--color-background-tertiary);
        }

        .timeline-duration {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          letter-spacing: 0.02em;
          margin-bottom: 0.5rem;
        }

        .timeline-position {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin: 0.5rem 0;
        }

        .timeline-company {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          margin-bottom: 0.75rem;
        }

        .company-name {
          font-weight: 500;
          color: var(--color-text-primary);
        }

        .company-divider {
          color: var(--color-text-tertiary);
        }

        .company-location {
          color: var(--color-text-secondary);
        }

        .timeline-description {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .section-title {
            font-size: 1.75rem;
          }

          .timeline {
            padding-left: 1.5rem;
          }

          .timeline::before {
            left: -0.75rem;
          }

          .timeline-dot {
            left: -1.45rem;
          }

          .timeline-item:hover .timeline-dot {
            left: -1.65rem;
          }

          .timeline-content {
            padding: 1.25rem;
          }

          .timeline-position {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}