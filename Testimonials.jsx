import { useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'CEO, MatrimonyPlus',
    text: "Ankit completely transformed our app's user experience. The redesign led to a 38% boost in match requests and our users love the new interface. His research-first approach made all the difference.",
    avatar: 'RS',
    color: '#ff6b9d',
  },
  {
    name: 'Priya Mehta',
    role: 'Product Head, StyleVault',
    text: "Working with Ankit was seamless from day one. He understood our target audience deeply and designed an experience that feels premium yet accessible. Our AOV increased significantly post-launch.",
    avatar: 'PM',
    color: '#7c5cbf',
  },
  {
    name: 'Vikram Nair',
    role: 'Founder, TradePro',
    text: "Complex financial data is hard to design for, but Ankit made our dashboard intuitive for both beginners and experts. The information hierarchy he created is outstanding.",
    avatar: 'VN',
    color: '#00ffd0',
  },
  {
    name: 'Sneha Patel',
    role: 'CTO, Spark Dating',
    text: "Ankit's understanding of user psychology in the dating space is exceptional. The retention metrics post-redesign speak for themselves — he really gets what makes users come back.",
    avatar: 'SP',
    color: '#ff8c42',
  },
];

export default function Testimonials() {
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
    <section className="testimonials" ref={ref}>
      <div className="container">
        <div className="testimonials__header reveal">
          <span className="section-label">Client Love</span>
          <h2 className="section-title">
            What clients say<br />
            <span className="testimonials__accent">about working with me</span>
          </h2>
        </div>

        <div className="testimonials__grid reveal reveal-delay-2">
          {testimonials.map((t, i) => (
            <div className="tcard" key={t.name} style={{ '--accent': t.color }}>
              <div className="tcard__quote">"</div>
              <p className="tcard__text">{t.text}</p>
              <div className="tcard__author">
                <div className="tcard__avatar" style={{ background: t.color + '22', border: `1px solid ${t.color}44` }}>
                  <span style={{ color: t.color }}>{t.avatar}</span>
                </div>
                <div>
                  <div className="tcard__name">{t.name}</div>
                  <div className="tcard__role">{t.role}</div>
                </div>
              </div>
              <div className="tcard__stars">{'★'.repeat(5)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
