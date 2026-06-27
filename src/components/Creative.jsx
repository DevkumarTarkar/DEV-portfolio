import portfolioData from '../data/portfolioData';

const creativeWorks = portfolioData.creative;

export default function Creative() {
  return (
    <section id="creative" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-label">Creative Universe</div>
        <h2 className="section-title">Beyond the <em>Code</em></h2>

        <p style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontSize: '1.1rem', color: 'var(--parchment-dim)',
          maxWidth: '560px', lineHeight: 1.7, marginBottom: '56px',
        }}>
          "I build intelligent systems, craft data narratives, and deliver cloud-ready products that solve real business problems."
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1px',
          background: 'rgba(201,169,110,0.06)',
        }}>
          {creativeWorks.map((work) => (
            <a
              key={work.title}
              href={work.url}
              target="_blank"
              rel="noreferrer"
              style={{
                background: work.featured ? 'rgba(201,169,110,0.05)' : 'var(--card-bg)',
                padding: '32px 28px',
                display: 'block',
                textDecoration: 'none',
                transition: 'background 0.3s',
                position: 'relative',
                borderTop: work.featured ? '1px solid rgba(201,169,110,0.3)' : 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--midnight)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = work.featured ? 'rgba(201,169,110,0.05)' : 'var(--card-bg)'; }}
            >
              {work.featured && (
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  fontFamily: 'var(--font-mono)', fontSize: '9px',
                  padding: '3px 8px', background: 'rgba(201,169,110,0.15)',
                  color: 'var(--gold)', letterSpacing: '0.15em',
                }}>
                  FEATURED
                </div>
              )}

              <div style={{ fontSize: '20px', marginBottom: '16px' }}>{work.icon}</div>

              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                color: 'var(--parchment-dim)', letterSpacing: '0.15em',
                marginBottom: '8px', textTransform: 'uppercase',
              }}>
                {work.platform} · {work.year}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.4rem',
                fontWeight: 500, color: 'var(--white)', marginBottom: '6px',
              }}>
                {work.title}
              </h3>

              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                color: work.color, marginBottom: '16px', opacity: 0.85,
              }}>
                {work.subtitle}
              </div>

              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                color: 'var(--parchment-dim)', lineHeight: 1.75,
              }}>
                {work.description}
              </p>

              <div style={{
                marginTop: '20px',
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                color: work.color, opacity: 0.7,
              }}>
                View ↗
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
