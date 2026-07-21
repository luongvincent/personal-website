import { CONTENT } from '../content.js';
import FadeIn from './FadeIn.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <h2 id="experience-heading" className="section-title">Experience</h2>
        <div className="exp-list">

          {CONTENT.experience.map((entry, i) =>
            entry.roles ? (
              // Grouped (multi-role) entry — LinkedIn style
              <FadeIn key={i}>
                <div className="exp-group">
                  <div className="exp-header">
                    <span className="exp-role">{entry.roles[0].title}</span>
                    <span className="exp-org">
                      {entry.url
                        ? <a href={entry.url} target="_blank" rel="noopener noreferrer">{entry.org}</a>
                        : entry.org}
                    </span>
                    <span className="exp-dates">{entry.duration} · {entry.location}</span>
                  </div>
                  <div className="exp-subroles">
                    {entry.roles.map((role, j) => (
                      <div key={j} className="exp-sub">
                        <div className="exp-sub-header">
                          <span className="exp-role">{role.title}</span>
                          {role.type && <span className="exp-type">{role.type}</span>}
                          <span className="exp-dates">{role.dates}</span>
                        </div>
                        {role.bullets && role.bullets.length > 0 && (
                          <ul className="exp-bullets">
                            {role.bullets.map((b, k) => <li key={k}>{b}</li>)}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ) : (
              // Single-role entry
              <FadeIn key={i}>
                <div className="exp-header">
                  <span className="exp-role">{entry.role}</span>
                  <span className="exp-org">
                    {entry.url
                      ? <a href={entry.url} target="_blank" rel="noopener noreferrer">{entry.org}</a>
                      : entry.org}
                  </span>
                  <span className="exp-dates">{entry.dates}</span>
                </div>
                <ul className="exp-bullets">
                  {entry.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </FadeIn>
            )
          )}
        </div>

        <div className="skills-embed">
          <p className="skills-group__label">Tools &amp; Platforms</p>
          <div className="skills-group__tags">
            {CONTENT.skills["Cloud & Data"].map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
