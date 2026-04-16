import { useEffect, useRef, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div className="contact__inner">
          <div className="contact__left reveal">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Let's build something<br />
              <span className="contact__accent">great together</span>
            </h2>
            <p className="contact__desc">
              Have a project in mind? I'd love to hear about it. Whether it's a full product
              redesign, a new app, or just a quick question — my inbox is always open.
            </p>

            <div className="contact__info">
              {[
                { icon: '✉', label: 'Email', value: 'ankithazari@gmail.com', href: 'mailto:ankithazari@gmail.com' },
                { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/ankithazari', href: 'https://linkedin.com' },
                { icon: '🎨', label: 'Behance', value: 'behance.net/ankithazari', href: 'https://behance.net' },
                { icon: '📍', label: 'Location', value: 'India · Available Worldwide', href: null },
              ].map(item => (
                <div className="contact__info-item" key={item.label}>
                  <span className="contact__info-icon">{item.icon}</span>
                  <div>
                    <div className="contact__info-label">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="contact__info-value" target="_blank" rel="noopener noreferrer">{item.value}</a>
                      : <div className="contact__info-value">{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__availability">
              <span className="contact__avail-dot" />
              <span>Available for freelance &amp; full-time opportunities</span>
            </div>
          </div>

          <div className="contact__right reveal reveal-delay-2">
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label>Project Type</label>
                  <select name="project" value={form.project} onChange={handleChange} required>
                    <option value="" disabled>Select a project type...</option>
                    <option value="mobile">Mobile App Design</option>
                    <option value="web">Web Design</option>
                    <option value="design-system">Design System</option>
                    <option value="ux-audit">UX Audit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="contact__field">
                  <label>Tell me about your project</label>
                  <textarea
                    name="message"
                    placeholder="Describe your project, goals, and timeline..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="contact__submit">
                  <span>Send Message</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3.75 9h10.5M10.5 5.25L14.25 9l-3.75 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
