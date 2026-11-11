export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <p className="eyebrow"><span>01</span> About me</p>
        <div className="about-layout">
          <div className="about-photo">
            <img src="/images/blazer.jpg" alt="Alok Raj in a maroon Technocrats blazer" loading="lazy" />
            <span className="photo-caption">// ALOK_RAJ</span>
            <span className="photo-corner" aria-hidden="true">BHOPAL · 2026</span>
          </div>
          <div className="about-copy">
            <h2>Code meets creative <span>leadership.</span></h2>
            <p className="about-quote">I like the whole experience of a product, from the <span>code underneath</span> to the last detail of the interface.</p>
            <p>I&apos;m learning Java and data structures, building web apps, and designing posters and social graphics in Canva and Figma. I believe technology gets more meaningful when engineering meets creativity.</p>
            <p>At Student Council TIT I help with communication, events and the council&apos;s website, so a lot of my work is made for other people.</p>
            <div className="about-highlights">
              <article><span className="highlight-icon">✳</span><div><h3>Interface design</h3><p>Canva / Figma / posters</p></div></article>
              <article><span className="highlight-icon">↗</span><div><h3>Leadership</h3><p>Student Council TIT</p></div></article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
