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

      <section style={{ padding: '90px 0 70px 0', background: 'linear-gradient(180deg, #010108 0%, #0A0D1D 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Promotions &amp; Loyalty Rewards</span>
          <h1 style={{ fontSize: '3.4rem', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Unlock Rewards. <span style={{ color: '#38BDF8' }}>Elevate Experience.</span>
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Exclusive monthly offers designed to reward your performance and fuel your growth—whether you're trading or referring.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0 100px 0', background: '#010108' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            
            {/* Card 1: 20% Bonus */}
            <div className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-gift"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>First Deposit Bonus</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Get a 20% trading bonus on your first deposit of $100 or more. More capital, more potential.
              </p>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 24px', borderRadius: '8px' }}>Claim 20% Bonus →</a>
            </div>

            {/* Card 2: Partner Loyalty Program */}
            <div className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-crown"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>Partner Loyalty Program</h3>
              <div style={{ color: '#38BDF8', fontSize: '0.88rem', fontWeight: 700, fontStyle: 'italic', marginBottom: '14px' }}>“The Longer You Stay, The More You Earn”</div>
              <ol style={{ paddingLeft: '20px', color: '#fff', fontSize: '0.92rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
                <li>Higher commissions</li>
                <li>Priority institutional support</li>
                <li>Access to exclusive tools &amp; reports</li>
                <li><strong>Build with Magnate, and we'll build with you.</strong></li>
              </ol>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 24px', borderRadius: '8px' }}>Join Loyalty Program →</a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
