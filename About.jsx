import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about__inner">
          <div className="about__left">
            <div className="reveal">
              <span className="section-label">About Me</span>
            </div>
            <h2 className="section-title reveal reveal-delay-1">
              I design with <br />
              <span className="about__accent">purpose &amp; precision</span>
            </h2>
            <p className="about__text reveal reveal-delay-2">
              Hi, I'm <strong>Ankit Hazari</strong> — a UI/UX Designer passionate about creating
              digital products that are not just beautiful, but meaningful and conversion-focused.
            </p>
            <p className="about__text reveal reveal-delay-3">
              Over the past 2+ years, I've worked across a diverse range of industries — from
              <strong> Matrimony</strong> and <strong>Dating Apps</strong> to
              <strong> E-commerce</strong> and <strong>Stock Market</strong> platforms — always
              anchoring my work in deep user empathy and business goals.
            </p>

            <div className="about__tags reveal reveal-delay-4">
              {['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'].map(tag => (
                <span className="about__tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="about__right reveal reveal-delay-2">
            <div className="about__card">
              <div className="about__card-glow" />
              <div className="about__card-inner">
                <div className="about__avatar">
                  <span>AH</span>
                </div>
                <div className="about__info">
                  <h3 className="about__name">Ankit Hazari</h3>
                  <p className="about__role">UI / UX Designer</p>
                </div>

                <div className="about__metrics">
                  {[
                    { label: 'Figma', value: 95 },
                    { label: 'UX Research', value: 88 },
                    { label: 'Prototyping', value: 90 },
                  ].map(m => (
                    <div className="about__metric" key={m.label}>
                      <div className="about__metric-top">
                        <span>{m.label}</span>
                        <span>{m.value}%</span>
                      </div>
                      <div className="about__bar">
                        <div className="about__bar-fill" style={{ '--w': m.value + '%' }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="about__highlights">
                  {[
                    { icon: '🎯', text: 'Result-driven design' },
                    { icon: '⚡', text: 'Fast turnaround' },
                    { icon: '🤝', text: 'Client-focused approach' },
                  ].map(h => (
                    <div className="about__highlight" key={h.text}>
                      <span>{h.icon}</span>
                      <span>{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
