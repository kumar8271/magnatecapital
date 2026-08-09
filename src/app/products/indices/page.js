import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Global Stock Indices Trading Details (S&P 500, Nasdaq, FTSE 100) | Magnate Capital",
  description: "Trade top global indices including S&P 500, Nasdaq 100, Dow Jones 30, and FTSE 100 with zero commission, high leverage up to 1:200, and raw execution.",
};

export default function IndicesPage() {
  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 60px 0', background: 'linear-gradient(180deg, #120922 0%, #1A0F2E 100%)' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', marginBottom: '16px' }}>
            <i className="fa-solid fa-chart-line" style={{ color: 'var(--accent-gold)' }}></i>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Asset Class Specifications</span>
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Stock Indices Trading
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.7', marginBottom: '30px' }}>
            Trade top global indices including S&P 500, Nasdaq, and FTSE 100. Gain broad equity market exposure without buying individual stocks.
          </p>

          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1rem' }}>
              Start Trading Indices →
            </a>
          </div>
        </div>
      </section>

      {/* Point-by-Point Detailed Breakdown */}
      <section style={{ padding: '60px 0 100px 0', background: '#160B28' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '40px' }}>
            <span className="section-label">Detailed Breakdown</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-gold)' }}>Major Global Benchmark Indices</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '50px' }}>
            
            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '16px' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>S&P 500 Index (SPX500)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Trade the benchmark index representing America’s top 500 market-cap companies with zero commission.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '16px' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Nasdaq 100 Index (NAS100)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Access top tech titans including Apple, Microsoft, NVIDIA, Amazon, and Google with sub-15ms execution.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '16px' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>FTSE 100 Index (UK100) & DAX 40 (GER40)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Trade leading European market benchmarks reflecting British and German industrial performance.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '16px' }}>
                4
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Dividend & Cash Adjustments</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Receive dividend adjustments credited directly to your trading account on index constituent dividend ex-dates.
              </p>
            </div>

          </div>

          {/* Detailed Contract Specifications Table */}
          <div className="glass-card" style={{ padding: '35px', borderRadius: '20px', background: 'rgba(26, 15, 46, 0.9)', border: '1px solid var(--accent-gold)' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '20px' }}>Stock Indices Contract Specifications</h3>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '0.9rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)' }}>
                    <th style={{ padding: '14px' }}>Symbol</th>
                    <th style={{ padding: '14px' }}>Index Name</th>
                    <th style={{ padding: '14px' }}>Contract Size</th>
                    <th style={{ padding: '14px' }}>Max Leverage</th>
                    <th style={{ padding: '14px' }}>Commission</th>
                    <th style={{ padding: '14px' }}>Trading Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { symbol: 'SPX500', name: 'US SP 500 Index', size: '1 Index Point ($1/pt)', lev: '1:200', comm: '$0 (Zero)', hours: 'Sun 23:00 - Fri 21:15 GMT' },
                    { symbol: 'NAS100', name: 'US TECH 100 Index', size: '1 Index Point ($1/pt)', lev: '1:200', comm: '$0 (Zero)', hours: 'Sun 23:00 - Fri 21:15 GMT' },
                    { symbol: 'US30', name: 'US Wall Street 30 Index', size: '1 Index Point ($1/pt)', lev: '1:200', comm: '$0 (Zero)', hours: 'Sun 23:00 - Fri 21:15 GMT' },
                    { symbol: 'UK100', name: 'UK FTSE 100 Index', size: '1 Index Point (£1/pt)', lev: '1:100', comm: '$0 (Zero)', hours: 'Mon 01:00 - Fri 21:00 GMT' },
                    { symbol: 'GER40', name: 'Germany DAX 40 Index', size: '1 Index Point (€1/pt)', lev: '1:100', comm: '$0 (Zero)', hours: 'Mon 01:00 - Fri 21:00 GMT' },
                  ].map((row) => (
                    <tr key={row.symbol} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '14px', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace' }}>{row.symbol}</td>
                      <td style={{ padding: '14px' }}>{row.name}</td>
                      <td style={{ padding: '14px' }}>{row.size}</td>
                      <td style={{ padding: '14px' }}>{row.lev}</td>
                      <td style={{ padding: '14px', color: '#2ecc71', fontWeight: 700 }}>{row.comm}</td>
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
