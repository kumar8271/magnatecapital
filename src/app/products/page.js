import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Trading Products & Asset Classes | Forex, Commodities, Indices & Crypto | Magnate Capital",
  description: "Explore 1,000+ financial instruments across Forex currency pairs, Gold & Commodities, Global Stock Indices, and Crypto CFDs with raw ECN execution.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />

      <section style={{ padding: '80px 0 60px 0', background: 'linear-gradient(180deg, #120922 0%, #1A0F2E 100%)' }}>
        <div className="container text-center">
          <span className="section-label">Global Market Access</span>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Trade In Commodities & Financial Markets
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Fuel your portfolio with Gold, Oil, Forex, Indices, and Crypto CFDs on institutional trading terminals designed for performance and precision.
          </p>
        </div>
      </section>

      {/* Market Category Cards */}
      <section style={{ padding: '60px 0 90px 0', background: '#160B28' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            
            <div id="forex" className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-arrow-trend-up"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '10px' }}>Forex Currency Pairs</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Trade 50+ Major, Minor, and Exotic currency pairs with raw spreads from 0.0 pips and leverage up to 1:500.
              </p>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>Trade Forex →</a>
            </div>

            <div id="commodities" className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-coins"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '10px' }}>Commodities & Energies</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Gold, Silver, Copper, WTI Crude Oil, Brent, and Natural Gas with deep liquidity and tight pricing.
              </p>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>Trade Commodities →</a>
            </div>

            <div id="indices" className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '10px' }}>Stock Indices</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Access world benchmark stock indices including S&P 500, NASDAQ 100, Dow Jones 30, and DAX 40.
              </p>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>Trade Indices →</a>
            </div>

            <div id="crypto" className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-brands fa-bitcoin"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '10px' }}>Crypto CFDs</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Trade 24/7 digital asset CFDs including Bitcoin (BTCUSD), Ethereum (ETHUSD), and Solana.
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
