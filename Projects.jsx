import { useEffect, useRef, useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    category: 'Matrimony App',
    title: 'ShaadiConnect',
    desc: 'A full-featured matrimony platform redesign focused on improving match discovery, trust signals, and onboarding conversion rate by 38%.',
    tags: ['User Research', 'Figma', 'Prototyping', 'Design System'],
    color: '#ff6b9d',
    bg: 'linear-gradient(135deg, #1a0a12 0%, #2d0f1e 100%)',
    metrics: ['+38% Conversion', '4.8★ Rating'],
    emoji: '💍',
  },
  {
    id: 2,
    category: 'E-commerce',
    title: 'StyleVault',
    desc: 'Fashion e-commerce app with personalized AI-driven styling recommendations, streamlined checkout, and an immersive product discovery experience.',
    tags: ['UI Design', 'Mobile', 'Interaction Design', 'A/B Testing'],
    color: '#7c5cbf',
    bg: 'linear-gradient(135deg, #0d0a1a 0%, #16102d 100%)',
    metrics: ['+52% AOV', '-28% Cart Abandonment'],
    emoji: '🛍️',
  },
  {
    id: 3,
    category: 'Dating App',
    title: 'Spark Dating',
    desc: 'Modern dating app with swipe-less matching, deep compatibility scoring, and a focus on meaningful conversations over superficial swiping.',
    tags: ['UX Strategy', 'Prototyping', 'User Testing', 'Figma'],
    color: '#ff8c42',
    bg: 'linear-gradient(135deg, #1a0f06 0%, #2d1a0a 100%)',
    metrics: ['+65% D7 Retention', '2x Message Rate'],
    emoji: '💫',
  },
  {
    id: 4,
    category: 'FinTech / Stock Market',
    title: 'TradePro Dashboard',
    desc: 'Professional stock market trading dashboard with real-time data visualization, portfolio management, and intuitive order placement for both novice and expert traders.',
    tags: ['Dashboard Design', 'Data Viz', 'Complex UX', 'Design System'],
    color: '#00ffd0',
    bg: 'linear-gradient(135deg, #000d0a 0%, #001a14 100%)',
    metrics: ['+43% Daily Active Use', '96% Task Success'],
    emoji: '📈',
  },
  {
    id: 5,
    category: 'Social Platform',
    title: 'CommuneApp',
    desc: 'Community-driven social platform designed to foster niche interest communities with features for events, discussions, and collaborative projects.',
    tags: ['Social UX', 'Information Architecture', 'Mobile-First', 'Figma'],
    color: '#4cc9f0',
    bg: 'linear-gradient(135deg, #050f18 0%, #0a1a28 100%)',
    metrics: ['+80% Engagement', '4.9★ App Store'],
    emoji: '🌐',
  },
  {
    id: 6,
    category: 'FinTech',
    title: 'WalletWise',
    desc: 'Personal finance management app with smart budgeting, expense tracking with ML categorization, and goal-based savings visualization.',
    tags: ['FinTech UX', 'Data Visualization', 'Accessibility', 'Design Tokens'],
    color: '#a8ff78',
    bg: 'linear-gradient(135deg, #090f04 0%, #121e08 100%)',
    metrics: ['+55% Goal Completion', 'WCAG 2.1 AA'],
    emoji: '💰',
  },
];

const filters = ['All', 'Matrimony App', 'E-commerce', 'Dating App', 'FinTech / Stock Market', 'Social Platform', 'FinTech'];

export default function Projects() {
  const ref = useRef(null);
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

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
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <div className="projects__header reveal">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">
            Projects that<br />
            <span className="projects__accent">move the needle</span>
          </h2>
        </div>

        <div className="projects__filters reveal reveal-delay-2">
          {['All', 'Matrimony App', 'E-commerce', 'Dating App', 'FinTech / Stock Market'].map(f => (
            <button
              key={f}
              className={`projects__filter ${active === f ? 'projects__filter--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__grid reveal reveal-delay-3">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="pcard" style={{ '--accent': project.color }}>
      <div className="pcard__visual" style={{ background: project.bg }}>
        <div className="pcard__emoji">{project.emoji}</div>
        <div className="pcard__visual-glow" style={{ background: project.color }} />
        <div className="pcard__metrics">
          {project.metrics.map(m => (
            <span className="pcard__metric" key={m}>{m}</span>
          ))}
        </div>
      </div>
      <div className="pcard__body">
        <span className="pcard__category">{project.category}</span>
        <h3 className="pcard__title">{project.title}</h3>
        <p className="pcard__desc">{project.desc}</p>
        <div className="pcard__tags">
          {project.tags.map(t => (
            <span className="pcard__tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="pcard__footer">
          <button className="pcard__btn">
            View Case Study
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
