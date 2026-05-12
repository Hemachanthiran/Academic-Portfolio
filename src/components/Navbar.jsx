import { useState, useEffect } from 'react'

const LINKS = ['About', 'Education', 'Projects', 'Skills', 'Workshops', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const ids = [...LINKS].reverse().map(l => l.toLowerCase())
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          Hemachanthiran P<span>.</span>
        </a>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={active === l.toLowerCase() ? 'active' : ''}
                onClick={e => scrollTo(e, l.toLowerCase())}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button className="nav-mobile-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>
    </nav>
  )
}
