import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Trading Asset Classes | Forex, Precious Metals, Indices & Cryptocurrencies | Magnate Capital",
  description: "Trade Forex majors, minors & exotics, Precious Metals (Gold, Silver, Platinum), Global Indices (S&P 500, Nasdaq, FTSE 100), and Cryptocurrencies 24/7 with Magnate Capital.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 70px 0', background: 'linear-gradient(180deg, #010108 0%, #0A0D1D 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Global Market Access</span>
          <h1 style={{ fontSize: '3.4rem', fontWeight: 800, color: '#fff', marginBottom: '18px', letterSpacing: '-0.02em' }}>
            Trade Global <span style={{ color: '#38BDF8' }}>Financial Markets</span>
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Access institutional liquidity and ultra-fast execution across Forex, Precious Metals, Indices, and Cryptocurrencies. Click any asset class below to view detailed specifications.
          </p>
        </div>
      </section>

      {/* Market Category Cards */}
      <section style={{ padding: '80px 0 100px 0', background: '#010108' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            {/* Forex */}
            <div id="forex" className="glass-card tech-card-pulse" style={{ padding: '36px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.4rem', marginBottom: '20px' }}>
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Forex</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Trade majors, minors, and exotic pairs with low spreads and high leverage.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '0.9rem', textAlign: 'center', borderRadius: '8px' }}>Trade Forex →</a>
                <Link href="/products/forex" className="btn" style={{ border: '1px solid #0040E9', color: '#38BDF8', padding: '10px 20px', fontSize: '0.85rem', textAlign: 'center', borderRadius: '8px', background: 'rgba(0,64,233,0.1)' }}>View Specifications →</Link>
              </div>
            </div>

            {/* Precious Metals */}
            <div id="commodities" className="glass-card tech-card-pulse" style={{ padding: '36px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.4rem', marginBottom: '20px' }}>
                  <i className="fa-solid fa-coins"></i>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Precious Metals</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Gold, Silver, Platinum and Palladium. Perfect for portfolio hedging.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '0.9rem', textAlign: 'center', borderRadius: '8px' }}>Trade Metals →</a>
                <Link href="/products/precious-metals" className="btn" style={{ border: '1px solid #0040E9', color: '#38BDF8', padding: '10px 20px', fontSize: '0.85rem', textAlign: 'center', borderRadius: '8px', background: 'rgba(0,64,233,0.1)' }}>View Specifications →</Link>
              </div>
            </div>

            {/* Indices */}
            <div id="indices" className="glass-card tech-card-pulse" style={{ padding: '36px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.4rem', marginBottom: '20px' }}>
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Indices</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Trade top global indices including S&amp;P 500, Nasdaq, and FTSE 100.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '0.9rem', textAlign: 'center', borderRadius: '8px' }}>Trade Indices →</a>
                <Link href="/products/indices" className="btn" style={{ border: '1px solid #0040E9', color: '#38BDF8', padding: '10px 20px', fontSize: '0.85rem', textAlign: 'center', borderRadius: '8px', background: 'rgba(0,64,233,0.1)' }}>View Specifications →</Link>
              </div>
            </div>

            {/* Cryptocurrencies */}
            <div id="crypto" className="glass-card tech-card-pulse" style={{ padding: '36px', borderRadius: '18px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.4rem', marginBottom: '20px' }}>
                  <i className="fa-brands fa-bitcoin"></i>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Cryptocurrencies</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Trade Bitcoin, Ethereum, and 40+ digital assets 24/7 with zero wallet requirement.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '0.9rem', textAlign: 'center', borderRadius: '8px' }}>Trade Crypto →</a>
                <Link href="/products/cryptocurrencies" className="btn" style={{ border: '1px solid #0040E9', color: '#38BDF8', padding: '10px 20px', fontSize: '0.85rem', textAlign: 'center', borderRadius: '8px', background: 'rgba(0,64,233,0.1)' }}>View Specifications →</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
