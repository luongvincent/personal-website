import { useState, useEffect } from 'react';
import { CONTENT } from '../content.js';

export default function Nav({ page, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const go = (dest) => {
    onNavigate(dest);
    setIsOpen(false);
  };

  // Close the mobile menu on outside click
  useEffect(() => {
    if (!isOpen) return;
    const close = (e) => { if (!e.target.closest('.nav')) setIsOpen(false); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [isOpen]);

  return (
    <header className="site-header" role="banner">
      <nav className="nav" aria-label="Main navigation">
        <button
          className="nav-brand"
          onClick={() => go('home')}
          aria-label="Go to home"
        >
          {CONTENT.meta.name || CONTENT.hero.name}
        </button>

        <button
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="nav-links"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(o => !o)}
        >
          <span /><span /><span />
        </button>

        <ul
          id="nav-links"
          className={isOpen ? 'nav-links is-open' : 'nav-links'}
          role="list"
        >
          {CONTENT.nav.links.map(label => (
            <li key={label}>
              <button
                aria-current={page === label.toLowerCase() ? 'page' : undefined}
                onClick={() => go(label.toLowerCase())}
              >
                {label}
              </button>
            </li>
          ))}

          {CONTENT.nav.resumeUrl && (
            <li>
              <a
                href={CONTENT.nav.resumeUrl}
                className="nav-resume"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume (opens in new tab)"
                onClick={() => setIsOpen(false)}
              >
                Resume ↗
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
