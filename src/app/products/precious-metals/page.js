import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Precious Metals Trading Details (Gold, Silver, Platinum) | Magnate Capital",
  description: "Gold, Silver, Platinum and Palladium trading specifications. Perfect for hedging risk with tight spreads and institutional execution on MT5 & cTrader.",
};

export default function PreciousMetalsPage() {
  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 60px 0', background: 'linear-gradient(180deg, #120922 0%, #1A0F2E 100%)' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', marginBottom: '16px' }}>
            <i className="fa-solid fa-coins" style={{ color: 'var(--accent-gold)' }}></i>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Asset Class Specifications</span>
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Precious Metals Trading
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.7', marginBottom: '30px' }}>
            Gold, Silver, Platinum and Palladium. Perfect for hedging risk, portfolio diversification, and safe-haven capital protection.
          </p>

          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1rem' }}>
              Start Trading Metals →
            </a>
          </div>
        </div>
      </section>

      {/* Point-by-Point Detailed Breakdown */}
      <section style={{ padding: '60px 0 100px 0', background: '#160B28' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '40px' }}>
            <span className="section-label">Detailed Breakdown</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-gold)' }}>Precious Metals Portfolio Highlights</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '50px' }}>
            
            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '16px' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Gold (XAU/USD)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Trade Spot Gold against USD with ultra-tight spreads, 100 oz contract sizes, and zero storage fees.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '16px' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Silver (XAG/USD)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                High-volatility industrial and precious metal CFD trading with 5,000 oz standard lot sizes.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '16px' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Platinum (XPT/USD) & Palladium (XPD/USD)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Access rare industrial metals driven by global automotive and technological demand dynamics.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '16px' }}>
                4
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Inflation & Volatility Hedging</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Protect equity portfolios against inflation spikes, fiat currency devaluation, and geopolitical turbulence.
              </p>
            </div>

          </div>

          {/* Detailed Contract Specifications Table */}
          <div className="glass-card" style={{ padding: '35px', borderRadius: '20px', background: 'rgba(26, 15, 46, 0.9)', border: '1px solid var(--accent-gold)' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '20px' }}>Precious Metals Contract Specifications</h3>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '0.9rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)' }}>
                    <th style={{ padding: '14px' }}>Symbol</th>
                    <th style={{ padding: '14px' }}>Asset Name</th>
                    <th style={{ padding: '14px' }}>Contract Size</th>
                    <th style={{ padding: '14px' }}>Max Leverage</th>
                    <th style={{ padding: '14px' }}>Min Spread</th>
                    <th style={{ padding: '14px' }}>Trading Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { symbol: 'XAUUSD', name: 'Gold vs US Dollar', size: '100 troy oz', lev: '1:200', spread: '0.10 Pips', hours: '23h/5d (Sun 23:00 - Fri 22:00 GMT)' },
                    { symbol: 'XAGUSD', name: 'Silver vs US Dollar', size: '5,000 troy oz', lev: '1:100', spread: '0.02 Pips', hours: '23h/5d (Sun 23:00 - Fri 22:00 GMT)' },
                    { symbol: 'XPTUSD', name: 'Platinum vs US Dollar', size: '100 troy oz', lev: '1:50', spread: '0.45 Pips', hours: '23h/5d (Sun 23:00 - Fri 22:00 GMT)' },
                    { symbol: 'XPDUSD', name: 'Palladium vs US Dollar', size: '100 troy oz', lev: '1:50', spread: '0.80 Pips', hours: '23h/5d (Sun 23:00 - Fri 22:00 GMT)' },
                  ].map((row) => (
                    <tr key={row.symbol} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '14px', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace' }}>{row.symbol}</td>
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
