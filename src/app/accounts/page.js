import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Trading Account Types | Classic Noble, Prime Crown & ECN Elite | Magnate Capital",
  description: "Compare Magnate Capital account types: Classic Noble ($50 deposit, 1.5 pips), Prime Crown ($500 deposit, 0.8 pips), and ECN Elite ($5,000 deposit, Raw Spreads, $3.50 commission). Advanced WebTrader execution.",
};

export default function AccountsPage() {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="accounts-hero" style={{ padding: '90px 0 70px 0', background: 'linear-gradient(180deg, #010108 0%, #0A0D1D 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Tailored Trading Solutions</span>
          <h1 style={{ fontSize: '3.4rem', fontWeight: 800, color: '#fff', marginBottom: '18px', letterSpacing: '-0.02em' }}>
            Choose Your <span style={{ color: '#38BDF8' }}>Trading Account</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Experience friction-free execution with razor-thin spreads, zero hidden charges, and direct market access on WebTrader.
          </p>
        </div>
      </section>

      {/* 3 Account Cards Grid */}
      <section style={{ padding: '80px 0 100px 0', background: '#010108' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            {/* Classic Noble Card */}
            <div className="glass-card tech-card-pulse" style={{ padding: '40px 30px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.4rem', margin: '0 auto 16px auto' }}>
                <i className="fa-solid fa-shield"></i>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Classic Noble</h3>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace', margin: '15px 0' }}>$50</div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '25px 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Spreads: <strong>Starting From 1.0 pips</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Minimum Deposit: <strong>$50</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#2ecc71', marginRight: '8px' }}></i> Commission: <strong>ZERO</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Trading Platform: <strong>WebTrader / Mobile</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Maximum Leverage: <strong>1:500</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Trade Size: <strong>0.01 micro lots</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Ideal for: <strong>All Traders</strong></li>
              </ul>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>Open Classic Noble Account</a>
                <Link href="/accounts/classic-noble" className="btn" style={{ border: '1px solid #0040E9', color: '#38BDF8', width: '100%', padding: '10px', fontSize: '0.85rem' }}>View Full Specs →</Link>
              </div>
            </div>

            {/* Prime Crown Card */}
            <div className="glass-card tech-card-pulse" style={{ padding: '40px 30px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.95)', border: '2px solid #0040E9', textAlign: 'center', position: 'relative', boxShadow: '0 0 30px rgba(0,64,233,0.35)', transform: 'translateY(-6px)' }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#0040E9', color: '#fff', padding: '4px 16px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>MOST POPULAR</div>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 64, 233, 0.25)', border: '1px solid #0040E9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.4rem', margin: '0 auto 16px auto' }}>
                <i className="fa-solid fa-crown"></i>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Prime Crown</h3>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace', margin: '15px 0' }}>$500</div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '25px 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Spreads: <strong>Starting From 0.3 pips</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Minimum Deposit: <strong>$500</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#2ecc71', marginRight: '8px' }}></i> Commission: <strong>ZERO</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Trading Platform: <strong>WebTrader / Mobile</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Maximum Leverage: <strong>1:500</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Trade Size: <strong>0.01 micro lots</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Ideal for: <strong>Active Traders</strong></li>
              </ul>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>Open Prime Crown Account</a>
                <Link href="/accounts/prime-crown" className="btn" style={{ border: '1px solid #0040E9', color: '#38BDF8', width: '100%', padding: '10px', fontSize: '0.85rem' }}>View Full Specs →</Link>
              </div>
            </div>

            {/* ECN Elite Card */}
            <div className="glass-card tech-card-pulse" style={{ padding: '40px 30px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.4rem', margin: '0 auto 16px auto' }}>
                <i className="fa-solid fa-gem"></i>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>ECN Elite</h3>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace', margin: '15px 0' }}>$5,000</div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '25px 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Spreads: <strong>Raw Spreads from 0.0 pips</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Minimum Deposit: <strong>$5,000</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Commission: <strong>$3.50 per lot</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Trading Platform: <strong>WebTrader / FIX API</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Leverage: <strong>1:100</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: '#0040E9', marginRight: '8px' }}></i> Ideal for: <strong>Institutions &amp; Scalpers</strong></li>
              </ul>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>Open ECN Elite Account</a>
                <Link href="/accounts/ecn-elite" className="btn" style={{ border: '1px solid #0040E9', color: '#38BDF8', width: '100%', padding: '10px', fontSize: '0.85rem' }}>View Full Specs →</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
