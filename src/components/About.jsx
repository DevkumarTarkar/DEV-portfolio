import portfolioData from '../data/portfolioData';

export default function About() {
const stats = portfolioData.about.stats;

  return (
    <section id="about" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          {/* Left — Identity */}
          <div>
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Building <em>intelligent</em><br />systems with impact
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--parchment-dim)', lineHeight: 1.85, marginBottom: '20px' }}>
              {portfolioData.about.intro}
            </p>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--parchment-dim)', lineHeight: 1.85, marginBottom: '20px' }}>
              {portfolioData.about.study}
            </p>

            <p style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: '1.15rem', color: 'var(--gold)',
              lineHeight: 1.65, borderLeft: '2px solid rgba(201,169,110,0.4)',
              paddingLeft: '20px', marginBottom: '32px',
            }}>
              "I solve problems at the intersection of data, vision, and the web — turning ideas into models, dashboards, and software that scale."
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
              {portfolioData.about.tags.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {/* Timeline mini */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {portfolioData.about.timeline.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '12px 0', borderBottom: '1px solid rgba(232,224,208,0.05)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)', opacity: 0.7, minWidth: '52px', paddingTop: '2px' }}>{item.year}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--parchment-dim)', lineHeight: 1.5 }}>{item.event}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo + Stats */}
          <div>
            {/* Professional photo */}
            <div style={{ position: 'relative', marginBottom: '32px' }}>
              {/* Offset border accent */}
              <div style={{
                position: 'absolute', top: '12px', left: '12px',
                right: '-12px', bottom: '-12px',
                border: '1px solid rgba(201,169,110,0.2)',
                zIndex: 0,
              }} />
              { /* Replace with your actual professional portrait */ }
              <img
              className="profile-photo"
                src={import.meta.env.BASE_URL + 'profile-photo.jpeg'}
                alt="Portrait of Dev Kumar Tarkar"
                style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  position: 'relative', zIndex: 1,
                  filter: 'brightness(0.9) contrast(1.05) saturate(0.85)',
                }}
              />
              {/* Gold overlay tint */}
              <div style={{
                position: 'absolute', inset: 0, zIndex: 2,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(10,10,15,0.6) 100%)',
              }} />
              {/* Name label */}
              <div style={{
                position: 'absolute', bottom: '20px', left: '20px', zIndex: 3,
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--white)', fontWeight: 500 }}>Dev Kumar Tarkar</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.1em', fontWeight: 600 }}>{portfolioData.hero.roles[0]}</div>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(201,169,110,0.08)' }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  background: 'var(--card-bg)', padding: '22px 18px', textAlign: 'center',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--midnight)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--gold)', lineHeight: 1, marginBottom: '6px', letterSpacing: '0.02em' }}>{s.value}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--parchment-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about .container > div > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}
