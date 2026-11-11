import { projects } from '../data'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <p className="eyebrow"><span>03</span> Selected work</p>
        <h2 className="section-title">Things I&apos;ve <em>built and started</em></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-top"><span className="project-type">{project.type}</span><span className={`project-status status-${project.statusType}`}>{project.status}</span></div>
              <span className="project-index">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} <span aria-hidden="true">↗</span></a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
