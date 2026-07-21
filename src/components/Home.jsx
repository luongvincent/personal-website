import { CONTENT } from '../content.js';
import { IconGithub, IconLinkedin, IconMail, IconArrow } from './Icons.jsx';
import avatarSrc from '../../data/images/1776050674468.jpg';

export default function Home({ onNavigate }) {
  const h = CONTENT.hero;
  const a = CONTENT.about;

  return (
    <section id="home" className="section section--home" aria-labelledby="hero-name">
      <div className="container">
        <div className="home-layout">

          <div className="home-left">
            {h.greeting && <p className="hero__greeting">{h.greeting}</p>}
            <h1 className="hero__name" id="hero-name">{h.name}</h1>
            <p className="hero__title">{h.title}</p>
            <p className="hero__tagline">{h.tagline}</p>

            <div className="home-about">
              {a.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="home-actions">
              <button
                type="button"
                className="hero__cta"
                onClick={() => onNavigate('projects')}
              >
                {h.cta.label} <IconArrow />
              </button>
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
            </div>
          </div>

          <div className="home-photo">
            <img src={avatarSrc} alt={CONTENT.meta.name} />
          </div>

        </div>
      </div>
    </section>
  );
}
