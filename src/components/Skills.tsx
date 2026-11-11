import { skills } from '../data'

export default function Skills() {
  return (
    <section className="section section-soft" id="skills">
      <div className="wrap">
        <p className="eyebrow"><span>02</span> What I know</p>
        <h2 className="section-title">Tools for <em>making things</em></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill.title}>
              <div className="skill-card-top"><span className="skill-number">0{index + 1}</span><span className="mono">{skill.note}</span></div>
              <h3>{skill.title}</h3>
              <div className="tag-list">{skill.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
