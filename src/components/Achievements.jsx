import portfolioData from '../data/portfolioData';

const achievements = portfolioData.achievements;

const categoryColors = {
  Leadership: '#C9A96E',
  Certification: '#4F9DFF',
  Project: '#4CAF50',
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div className="container">
        <div className="section-label">
          Achievements & Leadership
        </div>

        <h2 className="section-title">
          My <em>Journey</em>
        </h2>

        <p
          style={{
            maxWidth: '720px',
            color: 'var(--parchment-dim)',
            lineHeight: 1.8,
            marginBottom: '50px',
          }}
        >
          A collection of my leadership roles, certifications, and
          impactful AI & Machine Learning projects that represent
          my professional growth.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(320px,1fr))',
            gap: '24px',
          }}
        >
          {achievements.map((item) => (
            <div
              key={item.title}
              style={{
                background: 'var(--card-bg)',
                border:
                  '1px solid rgba(201,169,110,.15)',
                borderRadius: '14px',
                padding: '24px',
                transition: '.35s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  'translateY(-8px)';
                e.currentTarget.style.borderColor =
                  'rgba(201,169,110,.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  'translateY(0)';
                e.currentTarget.style.borderColor =
                  'rgba(201,169,110,.15)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '18px',
                }}
              >
                <span
                  style={{
                    background:
                      categoryColors[item.category],
                    color: '#fff',
                    padding: '5px 12px',
                    borderRadius: '40px',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '.08em',
                  }}
                >
                  {item.category}
                </span>

                <span
                  style={{
                    color: 'var(--gold)',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {item.year}
                </span>
              </div>

              <h3
                style={{
                  color: 'var(--white)',
                  marginBottom: '12px',
                  fontSize: '1.15rem',
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: 'var(--parchment-dim)',
                  lineHeight: 1.8,
                  fontSize: '14px',
                }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}