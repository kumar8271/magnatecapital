import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Trading Account Types | Classic Noble, Prime Crown & ECN Elite | Magnate Capital",
  description: "Compare Magnate Capital account types: Classic Noble ($50 deposit, 1.5 pips), Prime Crown ($500 deposit, 0.8 pips), and ECN Elite ($5,000 deposit, Raw Spreads, $12 commission). cTrader and MT5 execution.",
};

export default function AccountsPage() {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="accounts-hero" style={{ padding: '80px 0 60px 0', background: 'linear-gradient(180deg, #120922 0%, #1A0F2E 100%)', textCenter: 'center' }}>
        <div className="container text-center">
          <span className="section-label">Tailored Trading Solutions</span>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Choose Your Trading Account
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Experience royal standards with competitive spreads, zero hidden charges, and direct market execution on cTrader and MT5.
          </p>
        </div>
      </section>

      {/* 3 Account Cards Grid */}
      <section style={{ padding: '60px 0 100px 0', background: '#160B28' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            {/* Classic Noble Card */}
            <div className="glass-card tech-card-pulse" style={{ padding: '40px 30px', borderRadius: '20px', background: 'rgba(26, 15, 46, 0.9)', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', margin: '0 auto 16px auto' }}>
                <i className="fa-solid fa-shield"></i>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Classic Noble</h3>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace', margin: '15px 0' }}>$50</div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '25px 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Spreads: <strong>Starting From 1.5 pips</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Minimum Deposit: <strong>$50</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Commission: <strong>No Commission</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Trading Platform: <strong>cTrader / MT5</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Leverage: <strong>1:500</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Assets: <strong>Forex, Commodities, Indices, Crypto</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Ideal for: <strong>Beginners</strong></li>
              </ul>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>Open Classic Account</a>
                <Link href="/accounts/classic-noble" className="btn" style={{ border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', width: '100%', padding: '10px', fontSize: '0.85rem' }}>View Full Specs →</Link>
              </div>
            </div>

            {/* Prime Crown Card */}
            <div className="glass-card tech-card-pulse" style={{ padding: '40px 30px', borderRadius: '20px', background: 'rgba(26, 15, 46, 0.95)', border: '2px solid var(--accent-gold)', textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-gold)', color: '#1A0F2E', padding: '4px 16px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>MOST POPULAR</div>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', margin: '0 auto 16px auto' }}>
                <i className="fa-solid fa-crown"></i>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Prime Crown</h3>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace', margin: '15px 0' }}>$500</div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '25px 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Spreads: <strong>Starting From 0.8 pips</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Minimum Deposit: <strong>$500</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Commission: <strong>No Commission</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Trading Platform: <strong>cTrader / MT5</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Leverage: <strong>1:500</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Assets: <strong>Forex, Commodities, Indices, Crypto</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Ideal for: <strong>Traders</strong></li>
              </ul>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>Open Prime Account</a>
                <Link href="/accounts/prime-crown" className="btn" style={{ border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', width: '100%', padding: '10px', fontSize: '0.85rem' }}>View Full Specs →</Link>
              </div>
            </div>

            {/* ECN Elite Card */}
            <div className="glass-card tech-card-pulse" style={{ padding: '40px 30px', borderRadius: '20px', background: 'rgba(26, 15, 46, 0.9)', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', margin: '0 auto 16px auto' }}>
                <i className="fa-solid fa-gem"></i>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>ECN Elite</h3>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace', margin: '15px 0' }}>$5,000</div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '25px 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Spreads: <strong>Raw Spreads from 0.0 pips</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Minimum Deposit: <strong>$5,000</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Commission: <strong>Up to $12 per lot</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Trading Platform: <strong>cTrader / MT5</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Leverage: <strong>1:200</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Assets: <strong>Forex, Commodities, Indices, Crypto</strong></li>
                <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Ideal for: <strong>Professionals & Scalpers</strong></li>
              </ul>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>Open ECN Elite Account</a>
                <Link href="/accounts/ecn-elite" className="btn" style={{ border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', width: '100%', padding: '10px', fontSize: '0.85rem' }}>View Full Specs →</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
