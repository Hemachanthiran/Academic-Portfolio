import { useEffect, useRef } from 'react'

const CHIPS = ['Molecular Docking', 'ADMET Prediction', 'Python', 'Cell Culture', 'Bioinformatics']

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const N = 70
    const particles = Array.from({ length: N }, () => ({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  Math.random() * 2.5 + 0.8,
      a:  Math.random() * 0.5 + 0.15,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(192,68,255,${p.a})`
        ctx.fill()

        for (const q of particles) {
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 140 && d > 0) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(192,68,255,${0.13 * (1 - d / 140)})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  const go = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="container">
        <div className="hero-content">

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Open to Research Internships
          </div>

          {/* Name is the hero headline */}
          <h1 className="hero-name">
            Hemachanthiran P
          </h1>

          {/* Role is the subtitle */}
          <p className="hero-role">
            Pharmaceutical Technologist
          </p>

          <p className="hero-sub">
            Anna University – ACTech Campus &nbsp;·&nbsp; Chennai, India
          </p>

          <p className="hero-desc">
            Researching at the intersection of pharmaceutical sciences, bioinformatics,
            and translational R&amp;D — from molecular docking to nutraceutical formulation.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary" onClick={e => go(e, 'projects')}>
              View Projects →
            </a>
            <a href="#contact" className="btn-outline" onClick={e => go(e, 'contact')}>
              Get in Touch
            </a>
          </div>

          <div className="hero-chips">
            {CHIPS.map(c => <span key={c} className="hero-chip">{c}</span>)}
          </div>

        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
