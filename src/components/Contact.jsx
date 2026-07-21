import { CONTENT } from '../content.js';
import { IconMail, IconGithub, IconLinkedin } from './Icons.jsx';

export default function Contact() {
  const c = CONTENT.contact;

  return (
    <>
      <section id="contact" className="section section--alt" aria-labelledby="contact-heading">
        <div className="container">
          <div className="contact-inner">
            <h2 id="contact-heading" className="contact-heading">{c.heading}</h2>
            <p className="contact-blurb">{c.blurb}</p>

            <a
              href={`mailto:${c.email}`}
              className="contact-email-btn"
              aria-label={`Send email to ${c.email}`}
            >
              <IconMail /> {c.email}
            </a>

            <div className="contact-social">
              {c.links.github && (
                <a href={c.links.github} target="_blank" rel="noopener noreferrer"
                   aria-label="GitHub profile (opens in new tab)">
                  <IconGithub /> GitHub
                </a>
              )}
              {c.links.linkedin && (
                <a href={c.links.linkedin} target="_blank" rel="noopener noreferrer"
                   aria-label="LinkedIn profile (opens in new tab)">
                  <IconLinkedin /> LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <p>{c.footerNote}</p>
        </div>
      </footer>
    </>
  );
}
