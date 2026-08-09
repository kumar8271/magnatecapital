import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Promotions & Loyalty Rewards | 20% Deposit Bonus | Magnate Capital",
  description: "Explore Magnate Capital promotions: 20% First Deposit Bonus (minimum $100) and Partner Loyalty Program. Fuel your trading capital.",
};

export default function PromotionsPage() {
  return (
    <>
      <Header />

      <section style={{ padding: '80px 0 60px 0', background: 'radial-gradient(circle at center, #2C184A 0%, #160B28 100%)' }}>
        <div className="container text-center">
          <span className="section-label">Monthly Promotions for Partners & Traders</span>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 900, color: '#fff', marginBottom: '16px' }}>
            Unlock Rewards. Elevate Your Experience.
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Exclusive monthly offers designed to reward your performance and fuel your growth—whether you're trading or referring.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 90px 0', background: '#160B28' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            {/* Card 1: 20% Bonus */}
            <div className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-gift"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>First Deposit Bonus (New Traders)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Get a 20% trading bonus on your first deposit of $100 or more. More capital, more potential.
              </p>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 24px' }}>Claim 20% Bonus →</a>
            </div>

            {/* Card 2: Partner Loyalty Program */}
            <div className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-crown"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>Partner Loyalty Program</h3>
              <div style={{ color: 'var(--accent-gold)', fontSize: '0.88rem', fontWeight: 700, fontStyle: 'italic', marginBottom: '14px' }}>“The Longer You Stay, The More You Earn”</div>
              <ol style={{ paddingLeft: '20px', color: '#fff', fontSize: '0.92rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
                <li>Higher commissions</li>
                <li>Priority support</li>
                <li>Access to exclusive tools & reports</li>
                <li><strong>Build with Magnate, and we'll build with you.</strong></li>
              </ol>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 24px' }}>Join Loyalty Program →</a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
