import { useState } from 'react'
import { navigation } from '../data'

type HeaderProps = {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Alok Raj, home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">a</span>
          <span>Alok Raj</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <ul id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                className={activeSection === item.href.slice(1) ? 'is-active' : ''}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}
