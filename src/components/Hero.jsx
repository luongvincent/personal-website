import { CONTENT } from '../content.js';
import { IconGithub, IconLinkedin, IconMail, IconArrow } from './Icons.jsx';

export default function Hero({ onNavigate }) {
  const h = CONTENT.hero;

  return (
    <section id="hero" className="section section--hero" aria-labelledby="hero-name">
      <div className="container">
        <div className="hero">
          {h.greeting && <p className="hero__greeting">{h.greeting}</p>}

          <h1 className="hero__name" id="hero-name">{h.name}</h1>
          <p className="hero__title">{h.title}</p>
          <p className="hero__tagline">{h.tagline}</p>

          <div className="hero__links">
            {h.links.github && (
              <a href={h.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <IconGithub /> GitHub
              </a>
            )}
            {h.links.linkedin && (
              <a href={h.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <IconLinkedin /> LinkedIn
              </a>
            )}
            {h.links.email && (
              <a href={h.links.email} aria-label="Email">
                <IconMail /> Email
              </a>
            )}
          </div>

          <button
            type="button"
            className="hero__cta"
            onClick={() => onNavigate('projects')}
          >
            {h.cta.label} <IconArrow />
          </button>
        </div>
      </div>
    </section>
  );
}
