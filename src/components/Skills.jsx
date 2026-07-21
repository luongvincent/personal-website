import { CONTENT } from '../content.js';

export default function Skills() {
  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading" className="section-title">Skills</h2>
        <div className="skills-groups">
          {Object.entries(CONTENT.skills).map(([group, items]) => (
            <div key={group} className="skills-group">
              <p className="skills-group__label">{group}</p>
              <div className="skills-group__tags">
                {items.map((skill, i) => (
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
