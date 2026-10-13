import { CONTENT } from '../content.js';
import Metric from './Metric.jsx';
import { IconGithub, IconExternal } from './Icons.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading" className="section-title">Projects</h2>
        <div className="project-grid">
          {CONTENT.projects.map((proj, i) => (
            <article key={i} className="project-card">
              {proj.metric && <Metric metric={proj.metric} />}
              <h3 className="project-card__title">{proj.title}</h3>
              <p className="project-card__desc">{proj.description}</p>

              <div className="project-card__tags">
                {proj.tags.map((tag, j) => (
                  <span key={j} className="project-card__tag">{tag}</span>
                ))}
              </div>

              {proj.bullets && (
                <details className="project-card__details">
                  <summary>Details</summary>
                  <ul className="project-card__bullets">
                    {proj.bullets.map((b, k) => <li key={k}>{b}</li>)}
                  </ul>
                  {proj.charts?.map((c, k) => (
                    <div key={k} className="mini-chart">
                      <p className="mini-chart__title">{c.title}</p>
                      {c.rows.map((r, m) => (
                        <div key={m} className="mini-chart__row">
                          <span className="mini-chart__label">{r.label}</span>
                          <span className="mini-chart__track"><span style={{ width: `${r.fill * 100}%` }} /></span>
                          <span className="mini-chart__val">{r.text}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </details>
              )}

              {(proj.links.repo || proj.links.report || proj.links.demo) && (
                <div className="project-card__links">
                  {proj.links.repo && (
                    <a
                      href={proj.links.repo}
                      className="project-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${proj.title} source code on GitHub`}
                    >
                      <IconGithub /> Repo
                    </a>
                  )}
                  {proj.links.report && (
                    <a
                      href={proj.links.report}
                      className="project-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${proj.title} written report`}
                    >
                      <IconExternal /> Report
                    </a>
                  )}
                  {proj.links.demo && (
                    <a
                      href={proj.links.demo}
                      className="project-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${proj.title} live demo or report`}
                    >
                      <IconExternal /> Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="skills-embed">
          {["Languages", "AI / ML"].map(group => (
            <div key={group} className="skills-group">
              <p className="skills-group__label">{group}</p>
              <div className="skills-group__tags">
                {CONTENT.skills[group].map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
