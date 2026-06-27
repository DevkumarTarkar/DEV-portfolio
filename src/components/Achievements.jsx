import portfolioData from '../data/portfolioData';

const achievements = portfolioData.achievements;
const communities = portfolioData.communities;

const categoryColors = {
  Education: 'var(--gold)',
  Certifications: 'var(--nebula)',
  Projects: '#8BA888',
  Experience: 'var(--parchment-dim)',
};

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-label">Recognition & Impact</div>
        <h2 className="section-title">Achievements & <em>Communities</em></h2>

        {/* Achievements grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'rgba(201,169,110,0.06)',
          marginBottom: '80px',
        }}>
          {achievements.map((a) => (
            <div key={a.title} style={{
              background: 'var(--card-bg)',
              padding: '28px 24px',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--midnight)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px',
                  padding: '3px 8px',
                  color: categoryColors[a.category],
                  border: `1px solid ${categoryColors[a.category]}40`,
                  letterSpacing: '0.1em',
                }}>{a.category.toUpperCase()}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: 'var(--parchment-dim)', opacity: 0.6,
                }}>{a.year}</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '1.15rem',
                fontWeight: 500, color: 'var(--white)', marginBottom: '8px',
                lineHeight: 1.3,
              }}>{a.title}</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                color: 'var(--parchment-dim)', lineHeight: 1.6,
              }}>{a.detail}</div>
            </div>
          ))}
        </div>

        {/* Communities */}
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            letterSpacing: '0.2em', color: 'var(--gold)',
            marginBottom: '32px', opacity: 0.7,
          }}>── PROFESSIONAL HIGHLIGHTS</div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(201,169,110,0.06)' }}>
            {communities.map((c) => (
              <div key={c.name} style={{
                background: 'var(--card-bg)', padding: '32px 28px',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--midnight)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
              >
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '2.4rem',
                  color: 'var(--gold)', fontWeight: 300, marginBottom: '4px',
                }}>{c.members}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: 'var(--parchment-dim)', letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}>MEMBERS</div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.3rem',
                  color: 'var(--white)', marginBottom: '4px', fontWeight: 500,
                }}>{c.name}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px',
                  color: 'var(--nebula)', marginBottom: '12px',
                }}>{c.role} · {c.year}</div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px',
                  color: 'var(--parchment-dim)', lineHeight: 1.6,
                }}>{c.desc}</div>
              </div>
            ))}
          </div>

          {/* Total impact */}
          <div style={{
            marginTop: '1px', background: 'rgba(201,169,110,0.04)',
            padding: '24px 28px', textAlign: 'center',
            border: '1px solid rgba(201,169,110,0.1)',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: '1.1rem', color: 'var(--parchment-dim)',
            }}>
              Across 3 communities — <span style={{ color: 'var(--gold)' }}>2,100+ students</span> mentored in programming and career development
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #achievements .container > div:last-child > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
