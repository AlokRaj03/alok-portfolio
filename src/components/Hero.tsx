import { useEffect, useState } from 'react'
import { socialLinks } from '../data'
import HeroScene from './HeroScene'

const roles = ['Full-Stack Developer', 'Creative Thinker', 'UI/UX Designer', 'Student Leader', 'Problem Solver']

export default function Hero() {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedText(roles[0])
      return
    }

    let role = 0
    let position = 0
    let deleting = false
    let timeout = 0

    const tick = () => {
      const word = roles[role]
      if (!deleting) {
        position += 1
        setTypedText(word.slice(0, position))
        if (position === word.length) {
          deleting = true
          timeout = window.setTimeout(tick, 1500)
          return
        }
      } else {
        position -= 1
        setTypedText(word.slice(0, position))
        if (position === 0) {
          deleting = false
          role = (role + 1) % roles.length
          timeout = window.setTimeout(tick, 350)
          return
        }
      }
      timeout = window.setTimeout(tick, deleting ? 30 : 72)
    }

    timeout = window.setTimeout(tick, 200)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <section className="hero-stage" id="home" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <HeroScene />
      <div className="hero-layout wrap">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" />Currently <span className="availability-divider">/</span> B.Tech CSE · TIT Bhopal</div>
          <p className="hero-kicker">Curiosity, shaped into code.</p>
          <h1 id="hero-title">Alok Raj<span>.</span></h1>
          <p className="hero-role">A curious <span>{typedText}</span><i className="typing-caret" aria-hidden="true" /></p>
          <p className="hero-intro">
            I write code, design things, and help run things at my college. My interests live between <span>technology</span>, <span>visual creativity</span>, and the people who bring ideas to life.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="#contact">Let&apos;s collaborate</a>
          </div>
          <div className="hero-bottom">
            <div className="social-links" aria-label="Social profiles">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>{link.short}</a>
              ))}
            </div>
            <a className="scroll-cue" href="#about"><span className="mouse-icon" aria-hidden="true" /> Scroll to explore</a>
          </div>
        </div>
        <div className="portrait-stage">
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-frame">
            <div className="portrait-frame-grid" />
            <img src="/images/portrait-cutout.png" alt="Alok Raj wearing a maroon college blazer" />
          </div>
          <div className="floating-card code-card"><span className="card-icon">&lt;/&gt;</span><span>Code<br />Create<br />Innovate</span></div>
          <div className="floating-card campus-card"><span className="campus-icon">✳</span><span>B.Tech CSE<br />TIT Bhopal</span></div>
          <span className="portrait-index">BHOPAL, INDIA <span>23°15&apos; N</span></span>
        </div>
      </div>
      <div className="hero-scroll-line" aria-hidden="true" />
    </section>
  )
}
