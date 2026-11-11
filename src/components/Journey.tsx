import { journey } from '../data'

export default function Journey() {
  return (
    <section className="section section-soft" id="journey">
      <div className="wrap">
        <p className="eyebrow"><span>04</span> A few milestones</p>
        <h2 className="section-title">The <em>journey so far</em></h2>
        <div className="timeline">
          {journey.map((step, index) => (
            <article className={`timeline-step${index === journey.length - 1 ? ' timeline-next' : ''}`} key={step.title}>
              <span className="timeline-marker" aria-hidden="true">{index === journey.length - 1 ? '↗' : `0${index + 1}`}</span>
              <h3>{step.title}</h3>
              <ul>{step.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
