import { CONTENT } from '../content.js';
import avatarSrc from '../../data/images/1776050674468.jpg';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section-title">About</h2>
        <div className="about-layout">
          <div className="about-photo">
            <img src={avatarSrc} alt={CONTENT.meta.name} />
          </div>
          <div className="about-text">
            {CONTENT.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
