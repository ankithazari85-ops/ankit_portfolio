import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-mark">AH</span>
              <span className="footer__logo-text">Ankit Hazari</span>
            </div>
            <p className="footer__tagline">
              UI/UX Designer crafting digital experiences<br />
              that are beautiful, functional, and human.
            </p>
            <div className="footer__socials">
              {[
                { label: 'Behance', href: 'https://behance.net' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'Dribbble', href: 'https://dribbble.com' },
                { label: 'Instagram', href: 'https://instagram.com' },
              ].map(s => (
                <a key={s.label} href={s.href} className="footer__social" target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h4 className="footer__col-title">Navigation</h4>
              <ul>
                {['Home', 'About', 'Skills', 'Projects', 'Process', 'Contact'].map(l => (
                  <li key={l}>
                    <button
                      onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="footer__link"
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              <ul>
                {['UI Design', 'UX Research', 'Prototyping', 'Design Systems', 'Mobile Apps', 'Web Design'].map(s => (
                  <li key={s}><span className="footer__item">{s}</span></li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Industries</h4>
              <ul>
                {['Matrimony', 'E-commerce', 'Dating Apps', 'FinTech', 'Social Media', 'Stock Market'].map(i => (
                  <li key={i}><span className="footer__item">{i}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copy">
            © {year} Ankit Hazari. Crafted with care.
          </div>
          <div className="footer__made">
            <span className="footer__mono">Design + Code with ♥</span>
          </div>
          <button className="footer__back-top" onClick={scrollToTop} aria-label="Back to top">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
