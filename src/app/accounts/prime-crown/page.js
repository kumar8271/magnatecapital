import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Prime Crown Account ($500 Deposit) | Magnate Capital",
  description: "Prime Crown Account details: $500 minimum deposit, tight spreads from 0.3 pips, No Commission, WebTrader & Mobile platform, leverage 1:500. Ideal for experienced traders.",
};

export default function PrimeCrownPage() {
  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 80px 0', background: 'linear-gradient(180deg, #010108 0%, #0A0D1D 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: '#0040E9', border: '1px solid #0040E9', marginBottom: '16px' }}>
            <i className="fa-solid fa-crown" style={{ color: '#fff' }}></i>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Most Popular Trader Choice</span>
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em' }}>Prime Crown Account</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '750px', lineHeight: '1.7', marginBottom: '30px' }}>
            The Prime Crown account is tailored for active traders requiring institutional spread markups (from 0.3 pips) while enjoying zero commission on all trades.
          </p>

          <div className="glass-card tech-card-pulse" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.95)', border: '2px solid #0040E9', boxShadow: '0 0 30px rgba(0,64,233,0.35)', marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38BDF8', marginBottom: '24px' }}>Account Specifications</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Minimum Deposit</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>$500</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Spreads</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>From 0.3 Pips</div>
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
                Open Prime Crown Account →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
