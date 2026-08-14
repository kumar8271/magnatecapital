import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Classic Noble Account ($50 Deposit) | Magnate Capital",
  description: "Classic Noble Account details: $50 minimum deposit, spreads from 1.0 pips, No Commission, WebTrader & Mobile platform, leverage 1:500. Perfect for beginner traders.",
};

export default function ClassicNoblePage() {
  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 80px 0', background: 'linear-gradient(180deg, #010108 0%, #0A0D1D 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid #0040E9', marginBottom: '16px' }}>
            <i className="fa-solid fa-shield" style={{ color: '#38BDF8' }}></i>
            <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Standard Account Tier</span>
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em' }}>Classic Noble Account</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '750px', lineHeight: '1.7', marginBottom: '30px' }}>
            The Classic Noble account is designed for traders looking for zero-commission trading with an accessible $50 minimum deposit threshold.
          </p>

          <div className="glass-card tech-card-pulse" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38BDF8', marginBottom: '24px' }}>Account Specifications</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Minimum Deposit</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>$50</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Spreads</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>From 1.0 Pip</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Commission</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#2ecc71', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>ZERO</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Leverage</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>Up to 1:500</div>
              </div>
            </div>

            <div style={{ marginTop: '35px' }}>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1rem', borderRadius: '8px' }}>
                Open Classic Noble Account →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
