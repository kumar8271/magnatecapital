import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Contact Us & Legal Compliance | Magnate Capital",
  description: "Contact Magnate Capital support and compliance department. Official registered address in Robin Kelton Building, Saint Lucia. 24/5 dedicated client support.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 70px 0', background: 'linear-gradient(180deg, #010108 0%, #0A0D1D 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Get In Touch</span>
          <h1 style={{ fontSize: '3.4rem', fontWeight: 800, color: '#fff', marginBottom: '18px', letterSpacing: '-0.02em' }}>
            Contact <span style={{ color: '#38BDF8' }}>Magnate Capital</span>
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Have questions about account opening, ECN liquidity, or trading execution? Our 24/5 dedicated desk is ready to assist.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0 100px 0', background: '#010108' }}>
        <div className="container grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          {/* Contact Details Card */}
          <div className="glass-card tech-card-pulse" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38BDF8', marginBottom: '24px' }}>Global Operations &amp; Support Desk</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '1.05rem', marginBottom: '4px' }}>Entity &amp; Operations:</strong>
                Global Magnate Capital Ltd. – Client Support Desk
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '1.05rem', marginBottom: '4px' }}>Support Email:</strong>
                <a href="mailto:support@magnatefx.com" style={{ color: '#38BDF8', textDecoration: 'none' }}>support@magnatefx.com</a>
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '1.05rem', marginBottom: '4px' }}>Compliance Email:</strong>
                <a href="mailto:compliance@magnatefx.com" style={{ color: '#38BDF8', textDecoration: 'none' }}>compliance@magnatefx.com</a>
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '1.05rem', marginBottom: '4px' }}>Registered Address:</strong>
                Foster Capital Inc, Robin Kelton Building, Choc Bay, Castries, Saint Lucia
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '1.05rem', marginBottom: '4px' }}>Registration Number:</strong>
                2025-00329
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="glass-card tech-card-pulse" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '24px' }}>Send Us a Message</h3>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Full Name" required style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 18px', borderRadius: '8px', color: '#fff', fontSize: '0.95rem', outline: 'none' }} />
              <input type="email" placeholder="Email Address" required style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 18px', borderRadius: '8px', color: '#fff', fontSize: '0.95rem', outline: 'none' }} />
              <textarea rows="4" placeholder="Your Message or Inquiry..." required style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 18px', borderRadius: '8px', color: '#fff', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }}></textarea>
              <button type="submit" className="btn btn-primary" style={{ padding: '14px', fontSize: '1rem', fontWeight: 700, borderRadius: '8px', cursor: 'pointer' }}>Submit Inquiry</button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
