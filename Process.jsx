import { useEffect, useRef } from 'react';
import './Process.css';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Deep dive into user needs, business goals, and competitive landscape through research, interviews, and data analysis.',
    icon: '🔍',
    details: ['User Interviews', 'Competitive Analysis', 'Stakeholder Mapping', 'Problem Definition'],
  },
  {
    num: '02',
    title: 'Define',
    desc: 'Synthesize research into clear problem statements, user personas, and journey maps that guide every design decision.',
    icon: '📌',
    details: ['User Personas', 'Journey Mapping', 'Information Architecture', 'Success Metrics'],
  },
  {
    num: '03',
    title: 'Design',
    desc: 'From rough wireframes to high-fidelity Figma prototypes — iterating quickly, exploring bold ideas, refining relentlessly.',
    icon: '✏️',
    details: ['Wireframing', 'Visual Design', 'Interaction Design', 'Design System'],
  },
  {
    num: '04',
    title: 'Deliver',
    desc: 'Rigorous usability testing, developer handoff with detailed specs, and post-launch analysis to measure real-world impact.',
    icon: '🚀',
    details: ['Usability Testing', 'Dev Handoff (Zeplin)', 'A/B Testing', 'Impact Measurement'],
  },
];

export default function Process() {
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
    <section id="process" className="process" ref={ref}>
      <div className="container">
        <div className="process__header reveal">
          <span className="section-label">My Process</span>
          <h2 className="section-title">
            How I turn ideas into<br />
            <span className="process__accent">impactful products</span>
          </h2>
          <p className="process__desc">
            A structured, human-centered approach that balances creativity with measurable outcomes.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, i) => (
            <div className={`process__step reveal reveal-delay-${i + 1}`} key={step.num}>
              <div className="process__step-num">{step.num}</div>
              <div className="process__step-body">
                <div className="process__step-icon">{step.icon}</div>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.desc}</p>
                <ul className="process__step-list">
                  {step.details.map(d => (
                    <li key={d}>
                      <span className="process__check">✦</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              {i < steps.length - 1 && <div className="process__connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
