import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Forex Trading Details & Contract Specs | Magnate Capital",
  description: "Trade majors, minors, and exotic currency pairs with low spreads from 0.0 pips and high leverage up to 1:500. Institutional execution on cTrader and MT5.",
};

export default function ForexDetailsPage() {
  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 70px 0', background: 'linear-gradient(180deg, #010108 0%, #0A0D1D 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid #0040E9', marginBottom: '16px' }}>
            <i className="fa-solid fa-arrow-trend-up" style={{ color: '#38BDF8' }}></i>
            <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Asset Class Specifications</span>
          </div>
          <h1 style={{ fontSize: '3.4rem', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Forex <span style={{ color: '#38BDF8' }}>Currency Trading</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.7', marginBottom: '30px' }}>
            Trade majors, minors, and exotic pairs with low spreads and high leverage. Access the largest global financial market with $7.5 Trillion daily liquidity.
          </p>

          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1rem', borderRadius: '8px' }}>
              Start Trading Forex →
            </a>
          </div>
        </div>
      </section>

      {/* Point-by-Point Detailed Breakdown */}
      <section style={{ padding: '80px 0 100px 0', background: '#010108' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '40px' }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Detailed Breakdown</span>
            <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>Why Trade Forex with Magnate Capital?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '50px' }}>
            
            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.2rem', marginBottom: '16px', fontWeight: 800 }}>
                1
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Major Currency Pairs</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Trade EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/CAD, and USD/CHF with deep liquidity and raw spreads starting from 0.0 pips.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.2rem', marginBottom: '16px', fontWeight: 800 }}>
                2
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Minor &amp; Cross Pairs</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Diversify across regional cross pairs such as EUR/GBP, EUR/JPY, GBP/JPY, AUD/NZD, and EUR/AUD without USD conversion friction.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.2rem', marginBottom: '16px', fontWeight: 800 }}>
                3
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Exotic Currency Pairs</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Access emerging market currencies like USD/INR, USD/TRY, USD/ZAR, USD/SGD, and USD/MXN for specialized macroeconomic trading.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.2rem', marginBottom: '16px', fontWeight: 800 }}>
                4
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>High Flexible Leverage</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Maximize your market exposure with flexible leverage up to 1:500, tailored risk parameters, and negative balance protection.
              </p>
            </div>

          </div>

          {/* Detailed Contract Specifications Table */}
          <div className="glass-card" style={{ padding: '35px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.9)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38BDF8', marginBottom: '20px' }}>Forex Contract Specifications</h3>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '0.9rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)' }}>
                    <th style={{ padding: '14px' }}>Symbol</th>
                    <th style={{ padding: '14px' }}>Pair Name</th>
                    <th style={{ padding: '14px' }}>Contract Size</th>
                    <th style={{ padding: '14px' }}>Max Leverage</th>
                    <th style={{ padding: '14px' }}>Min Spread</th>
                    <th style={{ padding: '14px' }}>Trading Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { symbol: 'EURUSD', name: 'Euro / US Dollar', size: '100,000 EUR', lev: '1:500', spread: '0.0 Pips', hours: '24/5 (Sun 22:00 - Fri 22:00 GMT)' },
                    { symbol: 'GBPUSD', name: 'Great Britain Pound / US Dollar', size: '100,000 GBP', lev: '1:500', spread: '0.2 Pips', hours: '24/5 (Sun 22:00 - Fri 22:00 GMT)' },
                    { symbol: 'USDJPY', name: 'US Dollar / Japanese Yen', size: '100,000 USD', lev: '1:500', spread: '0.1 Pips', hours: '24/5 (Sun 22:00 - Fri 22:00 GMT)' },
                    { symbol: 'AUDUSD', name: 'Australian Dollar / US Dollar', size: '100,000 AUD', lev: '1:500', spread: '0.3 Pips', hours: '24/5 (Sun 22:00 - Fri 22:00 GMT)' },
                    { symbol: 'USDINR', name: 'US Dollar / Indian Rupee', size: '100,000 USD', lev: '1:500', spread: '1.2 Pips', hours: '24/5 (Sun 22:00 - Fri 22:00 GMT)' },
                  ].map((row) => (
                    <tr key={row.symbol} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '14px', fontWeight: 800, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace' }}>{row.symbol}</td>
                      <td style={{ padding: '14px' }}>{row.name}</td>
                      <td style={{ padding: '14px' }}>{row.size}</td>
                      <td style={{ padding: '14px' }}>{row.lev}</td>
                      <td style={{ padding: '14px', color: '#2ecc71', fontWeight: 700 }}>{row.spread}</td>
                      <td style={{ padding: '14px', color: 'var(--text-secondary)' }}>{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
