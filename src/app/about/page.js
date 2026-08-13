import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "About Magnate Capital | Vision, Mission & PILLAR Core Values",
  description: "Learn about Global Magnate Capital Ltd. Explore our vision, mission, and the PILLAR framework: Professionalism, Integrity, Legacy, Leadership, Adaptability, and Relationships.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 70px 0', background: 'linear-gradient(180deg, #010108 0%, #0A0D1D 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>About Us</span>
          <h1 style={{ fontSize: '3.4rem', fontWeight: 800, color: '#fff', marginBottom: '18px', letterSpacing: '-0.02em' }}>
            About <span style={{ color: '#38BDF8' }}>Magnate Capital</span>
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Magnate Capital is a reliable and reputable multi-asset brokerage delivering friction-free institutional execution. We build trading infrastructure designed for speed, transparency, and seamless global access.
          </p>
        </div>
      </section>

      {/* PILLAR Framework Section */}
      <section style={{ padding: '80px 0 100px 0', background: '#010108' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '50px' }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Our Core Values</span>
            <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
              Core Values of Magnate Capital — <span style={{ color: '#38BDF8' }}>“PILLAR”</span>
            </h2>
            <p className="subtitle" style={{ maxWidth: '650px', margin: '12px auto 0 auto' }}>Six foundational principles guiding every financial solution we deliver.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
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
