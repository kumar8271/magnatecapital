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

      <section style={{ padding: '90px 0 70px 0', background: 'linear-gradient(180deg, #010108 0%, #0A0D1D 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid #0040E9', marginBottom: '16px' }}>
            <i className="fa-solid fa-chart-line" style={{ color: '#38BDF8' }}></i>
            <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Asset Class Specifications</span>
          </div>
          <h1 style={{ fontSize: '3.4rem', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Stock Indices <span style={{ color: '#38BDF8' }}>Trading</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.7', marginBottom: '30px' }}>
            Trade top global indices including S&P 500, Nasdaq, and FTSE 100. Gain broad equity market exposure without buying individual stocks.
          </p>

          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1rem', borderRadius: '8px' }}>
              Start Trading Indices →
            </a>
          </div>
        </div>
      </section>

      {/* Point-by-Point Detailed Breakdown */}
      <section style={{ padding: '80px 0 100px 0', background: '#010108' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '40px' }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Detailed Breakdown</span>
            <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>Major Global Benchmark Indices</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '50px' }}>
            
            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.2rem', marginBottom: '16px', fontWeight: 800 }}>
                1
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>S&P 500 Index (SPX500)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Trade the benchmark index representing America’s top 500 market-cap companies with zero commission.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.2rem', marginBottom: '16px', fontWeight: 800 }}>
                2
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Nasdaq 100 Index (NAS100)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Access the world’s leading technology innovators including Apple, Microsoft, Nvidia, Amazon, and Alphabet.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.2rem', marginBottom: '16px', fontWeight: 800 }}>
                3
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Dow Jones 30 (US30)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Trade Wall Street’s oldest and most prestigious industrial barometer with direct market pricing.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '30px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.2rem', marginBottom: '16px', fontWeight: 800 }}>
                4
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>European Indices (DAX40, FTSE100)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Gain exposure to Germany’s DAX 40 and London’s FTSE 100 during active European cash market sessions.
              </p>
            </div>

          </div>

          {/* Indices Contract Specs */}
          <div className="glass-card" style={{ padding: '35px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.9)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38BDF8', marginBottom: '20px' }}>Indices Contract Specifications</h3>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '0.9rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)' }}>
                    <th style={{ padding: '14px' }}>Symbol</th>
                    <th style={{ padding: '14px' }}>Index Name</th>
                    <th style={{ padding: '14px' }}>Contract Size</th>
                    <th style={{ padding: '14px' }}>Max Leverage</th>
                    <th style={{ padding: '14px' }}>Trading Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { symbol: 'SPX500', name: 'US S&P 500 Index', size: '1 Index Point', lev: '1:500', hours: '23/5 Global Market Hours' },
                    { symbol: 'NAS100', name: 'US Tech 100 (Nasdaq)', size: '1 Index Point', lev: '1:500', hours: '23/5 Global Market Hours' },
                    { symbol: 'US30', name: 'US Wall Street 30 (Dow)', size: '1 Index Point', lev: '1:500', hours: '23/5 Global Market Hours' },
                    { symbol: 'GER40', name: 'German DAX 40', size: '1 Index Point', lev: '1:200', hours: 'Mon - Fri (07:00 - 21:00 GMT)' },
                    { symbol: 'UK100', name: 'UK FTSE 100', size: '1 Index Point', lev: '1:200', hours: 'Mon - Fri (07:00 - 21:00 GMT)' },
                  ].map((row) => (
                    <tr key={row.symbol} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '14px', fontWeight: 800, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace' }}>{row.symbol}</td>
                      <td style={{ padding: '14px' }}>{row.name}</td>
                      <td style={{ padding: '14px' }}>{row.size}</td>
                      <td style={{ padding: '14px' }}>{row.lev}</td>
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
