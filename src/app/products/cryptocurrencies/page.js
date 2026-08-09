import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Cryptocurrency CFD Trading Details (Bitcoin, Ethereum) | Magnate Capital",
  description: "Trade Bitcoin, Ethereum, and digital assets 24/7 without wallet. Institutional liquidity, leverage up to 1:20, and instant execution on MT5.",
};

export default function CryptocurrenciesPage() {
  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 60px 0', background: 'linear-gradient(180deg, #120922 0%, #1A0F2E 100%)' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', marginBottom: '16px' }}>
            <i className="fa-brands fa-bitcoin" style={{ color: 'var(--accent-gold)' }}></i>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Asset Class Specifications</span>
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Cryptocurrency CFD Trading
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.7', marginBottom: '30px' }}>
            Trade Bitcoin, Ethereum, and other digital assets 24/7 without wallet. Take long or short market positions without managing private keys or crypto exchange custody risk.
          </p>

          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1rem' }}>
              Start Trading Crypto →
            </a>
          </div>
        </div>
      </section>

      {/* Point-by-Point Detailed Breakdown */}
      <section style={{ padding: '60px 0 100px 0', background: '#160B28' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '40px' }}>
            <span className="section-label">Detailed Breakdown</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-gold)' }}>Cryptocurrency CFD Highlights</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '50px' }}>
            
            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '16px' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>No Crypto Wallet Needed</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Eliminate complex crypto exchange wallets, seed phrase security concerns, and slow blockchain transfer delays.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '16px' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>24/7 Market Access</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Trade round-the-clock 365 days a year including weekends, taking advantage of crypto market momentum.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '16px' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Bi-directional Trading (BUY & SELL)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Profit from both bull rallies and bear market corrections by entering instant short or long CFD orders.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '16px' }}>
                4
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Leveraged Exposure</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Utilize flexible leverage up to 1:20 to amplify trading power with institutional order execution under 15ms.
              </p>
            </div>

          </div>

          {/* Detailed Contract Specifications Table */}
          <div className="glass-card" style={{ padding: '35px', borderRadius: '20px', background: 'rgba(26, 15, 46, 0.9)', border: '1px solid var(--accent-gold)' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '20px' }}>Cryptocurrency Contract Specifications</h3>
            
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
                    { symbol: 'BTCUSD', name: 'Bitcoin vs US Dollar', size: '1 BTC', lev: '1:20', spread: '$5.00', hours: '24/7 (365 Days)' },
                    { symbol: 'ETHUSD', name: 'Ethereum vs US Dollar', size: '1 ETH', lev: '1:20', spread: '$0.40', hours: '24/7 (365 Days)' },
                    { symbol: 'SOLUSD', name: 'Solana vs US Dollar', size: '1 SOL', lev: '1:10', spread: '$0.05', hours: '24/7 (365 Days)' },
                    { symbol: 'XRPUSD', name: 'Ripple vs US Dollar', size: '100 XRP', lev: '1:10', spread: '$0.002', hours: '24/7 (365 Days)' },
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
