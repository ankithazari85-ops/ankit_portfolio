import { useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Design Tools',
    icon: '✦',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin', 'Framer'],
  },
  {
    title: 'UX Methods',
    icon: '◈',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Heuristic Eval', 'A/B Testing'],
  },
  {
    title: 'Design Disciplines',
    icon: '⬡',
    skills: ['UI Design', 'Interaction Design', 'Design Systems', 'Mobile Design', 'Web Design', 'Brand Identity'],
  },
  {
    title: 'Domain Expertise',
    icon: '◉',
    skills: ['Matrimony Apps', 'E-commerce', 'Dating Apps', 'Stock Market', 'FinTech', 'Social Platforms'],
  },
];

const bigSkills = ['Figma', 'User Research', 'Prototyping', 'UI Design', 'Wireframing', 'Design Systems', 'Interaction Design', 'Mobile Design'];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div className="skills__header reveal">
          <span className="section-label">Skills &amp; Expertise</span>
          <h2 className="section-title">What I bring<br /><span className="skills__accent">to every project</span></h2>
          <p className="skills__desc">
            A versatile toolkit built through real-world projects and continuous learning.
          </p>
        </div>

        <div className="skills__marquee reveal reveal-delay-2">
          <div className="skills__marquee-track">
            {[...bigSkills, ...bigSkills].map((s, i) => (
              <span key={i} className="skills__marquee-item">{s}</span>
            ))}
          </div>
        </div>

        <div className="skills__grid reveal reveal-delay-3">
          {skillCategories.map((cat, i) => (
            <div className="skills__card" key={cat.title}>
              <div className="skills__card-icon">{cat.icon}</div>
              <h3 className="skills__card-title">{cat.title}</h3>
              <div className="skills__pills">
                {cat.skills.map(s => (
                  <span className="skills__pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
