import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "About Magnate Capital | Gateway to Global Markets",
  description: "Magnate Capital is more than a brokerage — it is a gateway to global markets, built around the modern trader. Multi-asset brokerage delivering a friction-free institutional trading experience.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section style={{ padding: '100px 0 60px 0', background: 'linear-gradient(180deg, #010108 0%, #0A0D1D 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.12) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: '#38BDF8', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, fontSize: '0.85rem' }}>
            About Magnate Capital
          </span>
          <h1 style={{ fontSize: '3.6rem', fontWeight: 800, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
            About <span style={{ color: '#38BDF8' }}>Magnate Capital</span>
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto', color: '#fff', fontSize: '1.35rem', fontWeight: 600, lineHeight: '1.7' }}>
            Magnate Capital is more than a brokerage — it is a gateway to global markets, built around the modern trader.
          </p>
        </div>
      </section>

      {/* Main Brand Narrative Section */}
      <section style={{ padding: '60px 0 80px 0', background: '#010108' }}>
        <div className="container" style={{ maxWidth: '950px' }}>
          
          <div className="glass-card tech-card-pulse" style={{ padding: '50px 45px', borderRadius: '24px', background: 'rgba(10, 13, 29, 0.9)', border: '1px solid rgba(0, 64, 233, 0.35)', marginBottom: '50px' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.9', color: 'var(--text-secondary)', marginBottom: '28px' }}>
              We are a multi-asset brokerage focused on delivering a friction-free, institutional-grade trading experience where technology, execution, transparency, and service come together seamlessly.
            </p>

            <p style={{ fontSize: '1.15rem', lineHeight: '1.9', color: 'var(--text-secondary)', marginBottom: '28px' }}>
              Our philosophy is simple: trading should be powerful, accessible, and effortless. From the moment a client opens an account to every order placed, position managed, and withdrawal requested, we aim to remove unnecessary barriers and create a smoother journey through the financial markets.
            </p>

            <p style={{ fontSize: '1.15rem', lineHeight: '1.9', color: 'var(--text-secondary)', marginBottom: '28px' }}>
              At Magnate Capital, we combine advanced trading infrastructure, competitive market access, reliable execution, and client-focused service to help traders participate in global markets with greater confidence and control.
            </p>

            <p style={{ fontSize: '1.15rem', lineHeight: '1.9', color: 'var(--text-secondary)', margin: 0 }}>
              Whether you are beginning your trading journey, actively managing your portfolio, or operating with professional-level strategies, our ecosystem is designed to provide the tools, technology, and environment required to navigate today's fast-moving markets.
            </p>
          </div>

          {/* Built for Markets Banner */}
          <div style={{ background: 'linear-gradient(135deg, rgba(0, 64, 233, 0.25) 0%, rgba(10, 13, 29, 0.95) 100%)', border: '1.5px solid #0040E9', borderRadius: '24px', padding: '50px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 0 40px rgba(0, 64, 233, 0.3)', marginBottom: '70px' }}>
            <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '140%', height: '200%', background: 'radial-gradient(circle, rgba(0,64,233,0.15) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#38BDF8', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.3' }}>
                Built for Markets. Designed for Traders.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '24px' }}>
                Our commitment goes beyond simply providing access to Forex, Commodities, Indices, and other global instruments. We focus on creating an experience where speed meets precision, technology meets simplicity, and global opportunity meets premium service.
              </p>
              <p style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, fontStyle: 'italic', marginBottom: '30px' }}>
                Because we believe your brokerage should work for you — not against you.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(0, 64, 233, 0.35)', border: '1px solid #0040E9', padding: '14px 32px', borderRadius: '12px', boxShadow: '0 0 25px rgba(0,64,233,0.5)' }}>
                <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.2rem' }}>Magnate Capital.</span>
                <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: '1.2rem' }}>Trade with Royalty.</span>
              </div>
            </div>
          </div>

          {/* PILLAR Core Values */}
          <div className="section-title text-center" style={{ marginBottom: '45px' }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Our Core Values</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
              The Magnate Capital <span style={{ color: '#38BDF8' }}>“PILLAR”</span> Framework
            </h2>
            <p className="subtitle" style={{ maxWidth: '650px', margin: '12px auto 0 auto' }}>Six foundational principles guiding every financial solution we deliver.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { letter: 'P', title: 'Professionalism', desc: 'We uphold the highest standards of expertise and integrity, reflecting the prestige of the Magnate brand.', icon: 'fa-user-tie' },
              { letter: 'I', title: 'Integrity', desc: 'Honesty and transparency guide every decision, building trust that lasts for generations.', icon: 'fa-shield-heart' },
              { letter: 'L', title: 'Legacy', desc: 'We focus on long-term wealth creation and relationships that generate a lasting impact.', icon: 'fa-building-columns' },
              { letter: 'L', title: 'Leadership', desc: 'Excellence is our benchmark. Every trader is provided with institutional-grade market access.', icon: 'fa-award' },
              { letter: 'A', title: 'Adaptability', desc: 'We stay ahead through technology innovation, using the latest tools and insights to navigate global markets.', icon: 'fa-microchip' },
              { letter: 'R', title: 'Relationships', desc: 'Our client-first mindset shapes tailored trading strategies and long-term partnerships.', icon: 'fa-handshake' }
            ].map((pillar) => (
              <div key={pillar.title} className="glass-card tech-card-pulse" style={{ padding: '32px 28px', borderRadius: '16px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace' }}>{pillar.letter}</span>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8' }}>
                    <i className={`fa-solid ${pillar.icon}`} style={{ fontSize: '1.1rem' }}></i>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>{pillar.letter} – {pillar.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
