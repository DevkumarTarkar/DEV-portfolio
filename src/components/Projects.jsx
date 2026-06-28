import portfolioData from '../data/portfolioData';

const projects = portfolioData.projects;

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div className="container">
        <div className="section-label">Featured Work</div>

        <h2 className="section-title">
          Selected <em>Projects</em>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(380px,1fr))',
            gap: '32px',
          }}
        >
          {projects.map((p) => (
            <div
              key={p.id}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid rgba(201,169,110,.08)',
                overflow: 'hidden',
                transition: '.35s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor =
                  'rgba(201,169,110,.25)';
                e.currentTarget.style.boxShadow =
                  '0 20px 40px rgba(0,0,0,.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor =
                  'rgba(201,169,110,.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image */}

              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              <div
                style={{
                  padding: '28px',
                }}
              >
                {/* Category */}

                <span
                  style={{
                    display: 'inline-block',
                    padding: '5px 10px',
                    fontSize: '10px',
                    letterSpacing: '.12em',
                    color: 'var(--gold)',
                    border: '1px solid rgba(201,169,110,.25)',
                    marginBottom: '18px',
                  }}
                >
                  {p.type}
                </span>

                <h3
                  style={{
                    fontSize: '1.7rem',
                    color: 'white',
                    marginBottom: '12px',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {p.name}
                </h3>

                <div
                  style={{
                    color: 'var(--gold)',
                    fontSize: '12px',
                    marginBottom: '16px',
                    letterSpacing: '.08em',
                  }}
                >
                  {p.tagline}
                </div>

                <p
                  style={{
                    color: 'var(--parchment-dim)',
                    lineHeight: 1.8,
                    marginBottom: '22px',
                  }}
                >
                  {p.description}
                </p>

                {/* Tech */}

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '22px',
                  }}
                >
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '5px 10px',
                        border:
                          '1px solid rgba(201,169,110,.12)',
                        fontSize: '11px',
                        color: 'var(--parchment)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Year */}

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '22px',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--gold)',
                      fontSize: '11px',
                      letterSpacing: '.15em',
                    }}
                  >
                    {p.year}
                  </span>

                  <span
                    style={{
                      color: 'var(--nebula)',
                      fontSize: '11px',
                    }}
                  >
                    {p.status}
                  </span>
                </div>

                {/* Buttons */}
                                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '12px',
                      textDecoration: 'none',
                      color: 'var(--gold)',
                      border: '1px solid rgba(201,169,110,.3)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '.08em',
                      transition: '.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        'rgba(201,169,110,.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        'transparent';
                    }}
                  >
                    💻 Source Code
                  </a>

                  <a
                    href={p.live || '#'}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '12px',
                      textDecoration: 'none',
                      color: 'white',
                      background: 'var(--gold)',
                      border: '1px solid var(--gold)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '.08em',
                      transition: '.3s',
                      pointerEvents: p.live ? 'auto' : 'none',
                      opacity: p.live ? 1 : 0.55,
                    }}
                  >
                    {p.live ? '🚀 Live Demo' : 'Coming Soon'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}

        <div
          style={{
            marginTop: '60px',
            textAlign: 'center',
          }}
        >
          <a
            href="https://github.com/DevKumarTarkar"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              border: '1px solid rgba(201,169,110,.3)',
              color: 'var(--gold)',
              textDecoration: 'none',
              letterSpacing: '.18em',
              fontFamily: 'var(--font-mono)',
              transition: '.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                'rgba(201,169,110,.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                'transparent';
            }}
          >
            View All Projects →
          </a>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){

          #projects .container>div:last-of-type{
            grid-template-columns:1fr!important;
          }

        }

        @media(max-width:768px){

          #projects img{
            height:220px!important;
          }

        }
      `}</style>
    </section>
  );
}