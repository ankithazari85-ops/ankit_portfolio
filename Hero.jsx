import { useEffect, useRef, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hero__video"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay layers */}
      <div className="hero__overlay" />
      <div className="hero__gradient-left" />
      <div className="hero__gradient-bottom" />

      {/* Floating grid lines */}
      <div className="hero__grid" />

      {/* Main Content */}
      <div className={`hero__content ${loaded ? 'hero__content--visible' : ''}`}>
        <div className="hero__eyebrow">
          <span className="hero__dot" />
          <span className="hero__mono">Available for freelance work</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--1">Crafting</span>
          <span className="hero__title-line hero__title-line--2">
            Digital
            <span className="hero__title-accent"> Experiences</span>
          </span>
          <span className="hero__title-line hero__title-line--3">That Convert</span>
        </h1>

        <p className="hero__subtitle">
          UI/UX Designer with <strong>2+ years</strong> of experience designing Matrimony,
          E-commerce, Dating Apps &amp; Stock Market platforms — blending strategy
          with pixel-perfect craft.
        </p>

        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={scrollToProjects}>
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="hero__btn hero__btn--secondary" onClick={scrollToContact}>
            Let's Talk
          </button>
        </div>

        <div className="hero__stats">
          {[
            { num: '2+', label: 'Years Experience' },
            { num: '30+', label: 'Projects Done' },
            { num: '15+', label: 'Happy Clients' },
          ].map((s) => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-num">{s.num}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
}
