import { useState, useEffect } from 'react';
import { CONTENT } from './content.js';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

function setMetaTag(attr, name, value) {
  if (!value) return;
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
}

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const m = CONTENT.meta;
    document.title = m.title;
    setMetaTag('name',     'description',    m.description);
    setMetaTag('property', 'og:title',       m.title);
    setMetaTag('property', 'og:description', m.description);
    setMetaTag('property', 'og:url',         m.url);
    if (m.ogImage) setMetaTag('property', 'og:image', m.ogImage);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav page={page} onNavigate={navigate} />
      <main id="main">
        <div key={page} className="page-fade">
          {page === 'home' && <Home onNavigate={navigate} />}
          {page === 'experience' && <Experience />}
          {page === 'projects'   && <Projects />}
          {page === 'education'  && <Education />}
          {page === 'contact'    && <Contact />}
        </div>
      </main>
    </>
  );
}
