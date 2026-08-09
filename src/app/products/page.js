import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Trading Asset Classes | Forex, Precious Metals, Indices & Cryptocurrencies | Magnate Capital",
  description: "Trade Forex majors, minors & exotics, Precious Metals (Gold, Silver, Platinum), Global Indices (S&P 500, Nasdaq, FTSE 100), and Cryptocurrencies 24/7 with Magnate Capital.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />

      <section style={{ padding: '80px 0 60px 0', background: 'linear-gradient(180deg, #120922 0%, #1A0F2E 100%)' }}>
        <div className="container text-center">
          <span className="section-label">Global Market Access</span>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Trade Global Financial Markets
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Access institutional liquidity and ultra-fast execution across Forex, Precious Metals, Indices, and Cryptocurrencies.
          </p>
        </div>
      </section>

      {/* Market Category Cards */}
      <section style={{ padding: '60px 0 90px 0', background: '#160B28' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            
            {/* Forex */}
            <div id="forex" className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-arrow-trend-up"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '10px' }}>Forex</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Trade majors, minors, and exotic pairs with low spreads and high leverage.
              </p>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>Trade Forex →</a>
            </div>

            {/* Precious Metals */}
            <div id="commodities" className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-coins"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '10px' }}>Precious Metals</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Gold, Silver, Platinum and Palladium. Perfect for hedging risk.
              </p>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>Trade Metals →</a>
            </div>

            {/* Indices */}
            <div id="indices" className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '10px' }}>Indices</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Trade top global indices including S&P 500, Nasdaq, and FTSE 100.
              </p>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>Trade Indices →</a>
            </div>

            {/* Cryptocurrencies */}
            <div id="crypto" className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-brands fa-bitcoin"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '10px' }}>Cryptocurrencies</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Trade Bitcoin, Ethereum, and other digital assets 24/7 without wallet.
              </p>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>Trade Crypto →</a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
