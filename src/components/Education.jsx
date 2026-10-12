import { CONTENT } from '../content.js';

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <div className="container">
        <h2 id="education-heading" className="section-title">Education</h2>
        <div className="edu-list">
          {CONTENT.education.map((edu, i) => (
            <div key={i} className="edu-item">

              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-school">
                {edu.url
                  ? <a href={edu.url} target="_blank" rel="noopener noreferrer">{edu.school}</a>
                  : edu.school}
              </p>
              <p className="edu-dates">{edu.dates}</p>

              {edu.coursework?.length > 0 && (
                <div className="edu-block">
                  <p className="skills-group__label">Relevant Coursework</p>
                  <div className="skills-group__tags">
                    {edu.coursework.map((c, j) => (
                      <span key={j} className="skill-tag">{c}</span>
                    ))}
                  </div>
                </div>
              )}

              {edu.awards?.length > 0 && (
                <div className="edu-block">
                  <p className="skills-group__label">Awards & Competitions</p>
                  <div className="edu-awards">
                    {edu.awards.map((a, j) => (
                      <div key={j} className="edu-award">
                        <span className="edu-award__place">{a.place}</span>
                        <span className="edu-award__title">
                          {a.url
                            ? <a href={a.url} target="_blank" rel="noopener noreferrer">{a.title}</a>
                            : a.title}
                        </span>
                        <span className="edu-award__meta">{a.org} · {a.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
