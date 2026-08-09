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

      <section style={{ padding: '80px 0 60px 0', background: 'linear-gradient(180deg, #120922 0%, #1A0F2E 100%)' }}>
        <div className="container text-center">
          <span className="section-label">About Us</span>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '16px' }}>
            About Magnate Capital
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Magnate Capital is a reliable and reputable trading company with a proven track record of successful transactions. The company values transparency, integrity, and honesty in all dealings, making it a trustworthy partner.
          </p>
        </div>
      </section>

      {/* PILLAR Framework Section */}
      <section style={{ padding: '60px 0 90px 0', background: '#160B28' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '40px' }}>
            <span className="section-label">Core Values</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-gold)' }}>Core Values of Magnate Capital — “PILLAR”</h2>
            <p className="subtitle">Six foundational principles guiding every solution we deliver.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { letter: 'P', title: 'Professionalism', desc: 'We uphold the highest standards of expertise and integrity, reflecting the prestige of the Magnate brand.', icon: 'fa-user-tie' },
              { letter: 'I', title: 'Integrity', desc: 'Honesty and transparency guide every decision, building trust that lasts for generations.', icon: 'fa-shield-heart' },
              { letter: 'L', title: 'Legacy', desc: 'We focus on long-term wealth and relationships that create a lasting impact.', icon: 'fa-building-columns' },
              { letter: 'L', title: 'Leadership', desc: 'Excellence is our benchmark. Every client is treated with the royal standard they deserve.', icon: 'fa-award' },
              { letter: 'A', title: 'Adaptability', desc: 'We stay ahead through innovation, using the latest tools and insights to navigate change.', icon: 'fa-microchip' },
              { letter: 'R', title: 'Relationships', desc: 'Our client-first mindset shapes tailored strategies and enduring partnerships.', icon: 'fa-handshake' }
            ].map((pillar) => (
              <div key={pillar.title} className="glass-card" style={{ padding: '30px', borderRadius: '16px', background: 'rgba(35, 21, 60, 0.65)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace' }}>{pillar.letter}</span>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.1)', border: '1px solid rgba(212, 168, 75, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                    <i className={`fa-solid ${pillar.icon}`} style={{ fontSize: '1rem' }}></i>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{pillar.letter} – {pillar.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
