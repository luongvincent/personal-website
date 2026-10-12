import { CONTENT } from '../content.js';
import { IconGithub, IconLinkedin, IconMail, IconArrow } from './Icons.jsx';
import avatarSrc from '../../data/images/website.jpg';

// "Jul 2026 — Present · Vancouver, BC" -> "Jul 2026 — Present"
const period = (e) => (e.dates ? e.dates.split(' · ')[0] : e.duration);
const roleOf = (e) => e.role ?? e.roles?.[0]?.title;

export default function Home({ onNavigate }) {
  const h = CONTENT.hero;
  const a = CONTENT.about;
  const awards = CONTENT.education.flatMap(e => e.awards ?? []);
  const skillGroups = ['Languages', 'AI / ML'];

  return (
    <section id="home" className="section section--home" aria-labelledby="hero-name">
      <div className="container">
        <div className="home-layout">

          <div className="home-left">
            <h1 className="hero__name" id="hero-name">{h.name}</h1>
            <p className="hero__title">{h.title}</p>
            <p className="hero__tagline">{h.tagline}</p>

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

        <section className="home-band" aria-labelledby="companies-heading">
          <h2 className="home-band__title" id="companies-heading">Where I've worked</h2>
          <ul className="companies">
            {CONTENT.experience.map((c, i) => (
              <li key={i} className="company">
                <span className="company__logo" aria-hidden="true">
                  {c.logo
                    ? <img src={c.logo} alt="" />
                    : <span className="company__initial">{c.org.charAt(0)}</span>}
                </span>
                <span className="company__text">
                  <span className="company__name">
                    {c.url
                      ? <a href={c.url} target="_blank" rel="noopener noreferrer">{c.org}</a>
                      : c.org}
                  </span>
                  <span className="company__role">{roleOf(c)}</span>
                  <span className="company__dates">{period(c)}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-band home-about" aria-labelledby="about-heading">
          <h2 className="home-band__title" id="about-heading">About</h2>
          <div className="home-about__grid">
            <div className="home-about__text">
              {a.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="home-about__skills">
              {skillGroups.map(group => (
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

        {awards.length > 0 && (
          <section className="home-band" aria-labelledby="achievements-heading">
            <h2 className="home-band__title" id="achievements-heading">Achievements</h2>
            <ul className="achievements">
              {awards.map((w, i) => (
                <li key={i} className="achievement">
                  <span className="achievement__place">{w.place}</span>
                  <span className="achievement__title">
                    {w.url
                      ? <a href={w.url} target="_blank" rel="noopener noreferrer">{w.title}</a>
                      : w.title}
                  </span>
                  <span className="achievement__meta">{w.org} · {w.year}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </section>
  );
}
