import portfolioData from '../data/portfolioData';

const skillGroups = portfolioData.skills.groups;

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-label">Technical Arsenal</div>
        <h2 className="section-title">Skills & <em>Expertise</em></h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1px',
          background: 'rgba(201,169,110,0.08)',
          border: '1px solid rgba(201,169,110,0.08)',
        }}>
          {skillGroups.map((group) => (
            <div
              key={group.category}
              style={{
                background: 'var(--card-bg)',
                padding: '28px 24px',
                transition: 'background 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--midnight)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '16px',
                  color: 'var(--gold)', opacity: 0.8,
                }}>{group.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px',
                  color: 'var(--parchment-dim)', letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>{group.category}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map(skill => (
                  <span key={skill} style={{
                    fontFamily: 'var(--font-body)', fontSize: '13px',
                    color: 'var(--parchment)',
                    padding: '4px 10px',
                    background: 'rgba(232,224,208,0.05)',
                    border: '1px solid rgba(232,224,208,0.08)',
                    borderRadius: '2px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.target.style.borderColor = 'rgba(201,169,110,0.4)';
                    e.target.style.color = 'var(--gold)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.borderColor = 'rgba(232,224,208,0.08)';
                    e.target.style.color = 'var(--parchment)';
                  }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: '60px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '24px',
            opacity: 0.7,
          }}>── CERTIFICATIONS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {portfolioData.skills.certifications.map(cert => (
              <div key={cert.title} style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                color: 'var(--parchment-dim)',
                padding: '10px 18px',
                border: '1px solid rgba(201,169,110,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: '10px',
                minWidth: '280px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '10px' }}>✦</span>
                  <span>{cert.title}</span>
                </div>
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noreferrer" style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--gold)', textDecoration: 'none',
                    letterSpacing: '0.08em',
                  }}>
                    View ↗
                  </a>
                ) : (
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'rgba(201,169,110,0.5)',
                    letterSpacing: '0.08em',
                  }}>
                    View
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
