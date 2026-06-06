import { useEffect, useRef } from 'react'

export default function Contact() {
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
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="contact-inner">
          <span className="section-tag reveal" style={{ justifyContent: 'center' }}>Contact</span>
          <h2 className="section-title reveal reveal-delay-1" style={{ textAlign: 'center' }}>
            Let&apos;s build something<br />meaningful together.
          </h2>
          <p className="contact-desc reveal reveal-delay-2">
            Looking for research opportunities in pharmaceutical sciences,
            formulation development, or bioinformatics. Open to academic collaborations
            and industry projects.
          </p>

          <div className="contact-links reveal reveal-delay-3">
            <a
              href="mailto:Hemachanthiranchandru7229@gmail.com"
              className="clink clink-primary"
            >
              Email 
            </a>
            <a
              href="https://linkedin.com/in/hemachanthiran"
              target="_blank"
              rel="noreferrer"
              className="clink clink-ghost"
            >
              LinkedIn 
            </a>
            <a
              href="https://github.com/Hemachanthiran"
              target="_blank"
              rel="noreferrer"
              className="clink clink-ghost"
            >
              GitHub 
            </a>
            <a
              href="https://www.researchgate.net/profile/Hemachanthiran-Parasuraman"
              target="_blank"
              rel="noreferrer"
              className="clink clink-ghost"
            >
              ResearchGate 
            </a>
          </div>
        </div>

        <div className="divider" />
        <footer className="footer">
          <p>© 2026 Hemachanthiran P &nbsp;·&nbsp; Chennai, TamilNadu, India</p>
        </footer>
      </div>
    </section>
  )
}
