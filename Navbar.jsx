import { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['Home', 'About', 'Skills', 'Projects', 'Process', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__logo" onClick={() => scrollTo('home')}>
        <span className="nav__logo-mark">AH</span>
        <span className="nav__logo-text">Ankit Hazari</span>
      </div>

      <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        {links.map((link) => (
          <button key={link} className="nav__link" onClick={() => scrollTo(link)}>
            {link}
          </button>
        ))}
        <a href="mailto:ankithazari@gmail.com" className="nav__cta">
          Hire Me
        </a>
      </div>

      <button
        className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
