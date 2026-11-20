import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Find active section
      const sections = navLinks.map(l => l.href.slice(1))
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 100) {
          current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="nav__inner">
        <a
          href="#hero"
          className="nav__logo"
          onClick={e => handleNavClick(e, '#hero')}
          aria-label="Vishal R — Back to top"
        >
          vishal<span>.</span>r
        </a>

        <nav className="nav__links" aria-label="Primary navigation">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav__link${activeSection === link.href.slice(1) ? ' active' : ''}`}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="./resume.pdf"
            download="Vishal_R_Resume.pdf"
            className="nav__resume"
            aria-label="Download Resume PDF"
          >
            Resume ↗
          </a>
        </nav>

        <button
          className={`nav__mobile-btn${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`nav__mobile-menu${mobileOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="nav__mobile-link"
            onClick={e => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="./resume.pdf"
          download="Vishal_R_Resume.pdf"
          className="nav__mobile-link"
          style={{ color: 'var(--accent)', fontWeight: 600 }}
        >
          Download Resume ↓
        </a>
      </nav>
    </header>
  )
}
