import { useState, type FormEvent } from 'react'
import { socialLinks } from '../data'

export default function Contact() {
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const inquiry = String(formData.get('message') ?? '').trim()

    if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !inquiry) {
      setMessageType('error')
      setMessage('Please add your name, a valid email and a message.')
      return
    }

    const text = `Collaboration inquiry\nName: ${name}\nEmail: ${email}\n\n${inquiry}`
    try {
      await navigator.clipboard.writeText(text)
      setMessageType('success')
      setMessage('Copied. Paste it into a message to me on LinkedIn or Instagram.')
    } catch {
      const textarea = form.elements.namedItem('message')
      if (!(textarea instanceof HTMLTextAreaElement)) {
        setMessageType('error')
        setMessage('Could not access the message field. Please try again.')
        return
      }
      textarea.value = text
      textarea.focus()
      textarea.select()
      setMessageType('success')
      setMessage('Select and copy the text above, then send it to me on LinkedIn or Instagram.')
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="wrap">
        <p className="eyebrow"><span>05</span> Have something in mind?</p>
        <h2 className="section-title">Let&apos;s <em>make it happen.</em></h2>
        <p className="contact-intro">Got an idea, a project or something you&apos;d like to build together? Send me a note and let&apos;s start a conversation.</p>
        <div className="contact-layout">
          <div className="contact-aside">
            <span className="contact-availability"><span className="availability-dot" /> Open to collaborations and conversations</span>
            <div className="contact-links">
              {socialLinks.map((link) => (
                <a className="contact-link" href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                  <span className="contact-link-icon">{link.short}</span>
                  <span><small>{link.label}</small><strong>{link.label === 'LinkedIn' ? 'linkedin.com/in/alok-raj1' : link.label === 'GitHub' ? 'github.com/AlokRaj' : link.label === 'X' ? '@AlokRaj93880' : '@_ig_alokraj__'}</strong></span>
                  <span className="contact-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="contact-name">Your name<input id="contact-name" name="name" type="text" placeholder="How should I call you?" autoComplete="name" maxLength={80} required /></label>
            <label htmlFor="contact-email">Email address<input id="contact-email" name="email" type="email" placeholder="you@email.com" autoComplete="email" maxLength={120} required /></label>
            <label htmlFor="contact-message">A little about your idea<textarea id="contact-message" name="message" placeholder="Tell me what you're thinking..." maxLength={1500} required /></label>
            <button type="submit" className="button button-primary form-submit">Copy inquiry <span aria-hidden="true">↗</span></button>
            <p className={`form-message${messageType ? ` form-${messageType}` : ''}`} role="status" aria-live="polite">{message}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
