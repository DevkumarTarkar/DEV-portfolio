import portfolioData from '../data/portfolioData';

export default function About() {
  const stats = portfolioData.about.stats;

  return (
    <section
      id="about"
      className="section"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* Left */}
          <div>
            <div className="section-label">About Me</div>

            <h2 className="section-title">
              Building <em>Intelligent</em>
              <br />
              Systems with Impact
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--parchment-dim)',
                lineHeight: 1.85,
                marginBottom: '20px',
              }}
            >
              {portfolioData.about.intro}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--parchment-dim)',
                lineHeight: 1.85,
                marginBottom: '20px',
              }}
            >
              {portfolioData.about.study}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: 'var(--gold)',
                lineHeight: 1.7,
                borderLeft: '3px solid rgba(201,169,110,.5)',
                paddingLeft: '22px',
                marginBottom: '34px',
              }}
            >
              {portfolioData.about.quote}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '40px',
              }}
            >
              {portfolioData.about.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Timeline */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {portfolioData.about.timeline.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    padding: '12px 0',
                    borderBottom:
                      '1px solid rgba(232,224,208,.05)',
                  }}
                >
                  <span
                    style={{
                      minWidth: '55px',
                      color: 'var(--gold)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                    }}
                  >
                    {item.year}
                  </span>

                  <span
                    style={{
                      color: 'var(--parchment-dim)',
                      fontSize: '13px',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.event}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
                    <div>
            <div
              style={{
                position: 'relative',
                width: '580px',
                maxWidth: '100%',
                margin: '0 auto 35px',
                transition: 'transform .4s ease',
              }}
              onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'scale(1.02)';

  const glow = e.currentTarget.querySelector('.gold-glow');
  if (glow) {
    glow.style.boxShadow = '0 0 60px rgba(255,215,80,.35)';
  }
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'scale(1)';

  const glow = e.currentTarget.querySelector('.gold-glow');
  if (glow) {
    glow.style.boxShadow = '0 0 35px rgba(255,215,80,.20)';
  }
}}
            >
              {/* Golden Glow Border */}
<div
  className="gold-glow"
  
  style={{
    position: 'absolute',
    inset: '-12px',
    border: '1px solid rgba(255,215,80,.45)',
    boxShadow: '0 0 35px rgba(255,215,80,.20)',
    zIndex: 0,
  }}
/>

            <img
  src={import.meta.env.BASE_URL + 'profile-photo.jpeg'}
  alt="Dev Kumar Tarkar"
  style={{
    width: '100%',
    height: '720px',
    objectFit: 'cover',
    objectPosition: 'top center',
    display: 'block',
    position: 'relative',
    zIndex: 1,
    border: '1px solid rgba(201,169,110,.25)',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
    filter: 'brightness(.92) contrast(1.05) saturate(.95)',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.03)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
  }}
/>

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  background:
                    'linear-gradient(to top, rgba(10,10,15,.78), transparent 45%)',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '25px',
                  left: '24px',
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'white',
                    fontSize: '1.3rem',
                  }}
                >
                  Dev Kumar Tarkar
                </div>

                <div
                  style={{
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '.15em',
                    marginTop: '6px',
                  }}
                >
                  {portfolioData.hero.roles[0]}
                </div>
              </div>
            </div>

            {/* Stats */}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1px',
                background: 'rgba(201,169,110,.08)',
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: 'var(--card-bg)',
                    padding: '24px 18px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.7rem',
                      color: 'var(--gold)',
                      fontWeight: 700,
                      marginBottom: '6px',
                    }}
                  >
                    {stat.value}
                  </div>

                  <div
                    style={{
                      fontSize: '10px',
                      color: 'var(--parchment-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '.15em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width:900px){

          #about .container>div{
            grid-template-columns:1fr!important;
            gap:50px!important;
          }

          #about .container>div>div:last-child{
            order:-1;
          }

        }

        @media (max-width:640px){

          #about img{
            height:520px!important;
          }

        }
      `}</style>
    </section>
  );
}
         
 