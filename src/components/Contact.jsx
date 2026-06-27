import { useState } from 'react';
import portfolioData from '../data/portfolioData';

const socials = portfolioData.contact.socials;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${form.name}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(`mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
          <div className="section-label">Contact</div>
          <h2 className="section-title" style={{ maxWidth: '680px' }}>
            Ready to build something <em>together</em>?
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--parchment-dim)',
            lineHeight: 1.8, maxWidth: '700px', marginTop: '10px',
          }}>
            I’m available for AI, web application, data, and product work. Send a message and I’ll reply within one business day.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '44px' }}>
          <div style={{ display: 'grid', gap: '22px' }}>
            <div style={{ padding: '32px', borderRadius: '26px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>Contact Details</div>
              <div style={{ display: 'grid', gap: '18px' }}>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--white)' }}>Email</span>
                  <a href={`mailto:${portfolioData.contact.email}`} style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontSize: '13px', textDecoration: 'none' }}>{portfolioData.contact.email}</a>
                </div>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--white)' }}>Phone</span>
                  <span style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>{portfolioData.contact.phone}</span>
                </div>
                <div style={{ display: 'grid', gap: '12px', marginTop: '14px' }}>
                  {socials.map((item) => (
                    <a key={item.label} href={item.url} target="_blank" rel="noreferrer" style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '16px 18px', borderRadius: '18px',
                      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                      textDecoration: 'none', color: 'var(--parchment)', transition: 'transform 0.2s ease, background 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0px)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    }}
                    >
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{item.label}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--gold)' }}>{item.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ padding: '28px', borderRadius: '26px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>Why reach out?</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '14px' }}>
                {['AI / ML projects', 'Web & dashboard builds', 'Data-driven ideas', 'Internship or collaboration'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--parchment-dim)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--gold)' }}>→</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ padding: '34px', borderRadius: '30px', background: 'rgba(7,11,19,0.95)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '18px' }}>
              {[
                { key: 'name', label: 'Name', type: 'text' },
                { key: 'email', label: 'Email', type: 'email' },
              ].map((field) => (
                <label key={field.key} style={{ display: 'grid', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--parchment-dim)' }}>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em' }}>{field.label}</span>
                  <input
                    type={field.type}
                    required
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    placeholder={field.label}
                    style={{
                      width: '100%', padding: '16px 18px', borderRadius: '18px',
                      border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)',
                      color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '14px', outline: 'none',
                    }}
                  />
                </label>
              ))}
              <label style={{ display: 'grid', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--parchment-dim)' }}>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em' }}>Message</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or idea"
                  style={{
                    width: '100%', padding: '16px 18px', borderRadius: '18px',
                    border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)',
                    color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '14px', outline: 'none', resize: 'vertical',
                  }}
                />
              </label>
              <button type="submit" style={{
                padding: '16px 24px', borderRadius: '18px', border: 'none',
                background: sent ? 'rgba(255,204,51,0.18)' : 'var(--gold)',
                color: sent ? 'var(--gold)' : 'var(--space-black)',
                fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.18em',
                textTransform: 'uppercase', cursor: 'pointer', transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {sent ? 'Message Ready' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          #contact .container { padding: 0 16px; }
          #contact .container > div { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 720px) {
          .section-title { font-size: clamp(2rem, 5vw, 3rem); }
        }
      `}</style>
    </section>
  );
}
