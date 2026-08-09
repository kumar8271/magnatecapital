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

      <section style={{ padding: '80px 0 60px 0', background: 'linear-gradient(180deg, #120922 0%, #1A0F2E 100%)' }}>
        <div className="container text-center">
          <span className="section-label">Get In Touch</span>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Contact Magnate Capital
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Have questions about account opening, ECN liquidity, or partnership programs? Our 24/5 dedicated desk is ready to assist.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 90px 0', background: '#160B28' }}>
        <div className="container grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          
          {/* Contact Details Card */}
          <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '20px' }}>Global Headquarters & Legal Desk</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '1.05rem', marginBottom: '4px' }}>Entity & Legal Department:</strong>
                Global Magnate Capital Ltd. – Compliance & Legal Department
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '1.05rem', marginBottom: '4px' }}>Support Email:</strong>
                <a href="mailto:support@magnatefx.com" style={{ color: 'var(--accent-gold)' }}>support@magnatefx.com</a>
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '1.05rem', marginBottom: '4px' }}>Compliance Email:</strong>
                <a href="mailto:compliance@magnatefx.com" style={{ color: 'var(--accent-gold)' }}>compliance@magnatefx.com</a>
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
          <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>Send Us a Message</h3>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Full Name" required style={{ width: '100%', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '8px', color: '#fff', fontSize: '0.95rem' }} />
              <input type="email" placeholder="Email Address" required style={{ width: '100%', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '8px', color: '#fff', fontSize: '0.95rem' }} />
              <textarea rows="4" placeholder="Your Message or Inquiry..." required style={{ width: '100%', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '8px', color: '#fff', fontSize: '0.95rem' }}></textarea>
              <button type="submit" className="btn btn-primary" style={{ padding: '14px', fontSize: '1rem', fontWeight: 700 }}>Submit Inquiry</button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
