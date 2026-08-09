import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "ECN Elite Account ($5,000 Deposit) | Magnate Capital",
  description: "ECN Elite Account details: $5,000 minimum deposit, Raw Spreads from 0.0 pips, Up to $12 commission per lot, cTrader & MT5 direct liquidity bridge, leverage 1:200. Designed for professional traders.",
};

export default function EcnElitePage() {
  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 60px 0', background: 'linear-gradient(180deg, #120922 0%, #1A0F2E 100%)' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', marginBottom: '16px' }}>
            <i className="fa-solid fa-gem" style={{ color: 'var(--accent-gold)' }}></i>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Institutional ECN Tier</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>ECN Elite Account</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '750px', lineHeight: '1.7', marginBottom: '30px' }}>
            The ECN Elite account delivers direct interbank liquidity access with raw spreads from 0.0 pips, ultra-fast sub-15ms execution, and competitive commission structures (Up to $12 per lot).
          </p>

          <div className="glass-card tech-card-pulse" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)', marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '24px' }}>Account Specifications</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Minimum Deposit</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>$5,000</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Spreads</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>Raw Spreads (0.0 Pips)</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Commission</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>Up to $12 / lot</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Leverage</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>Up to 1:200</div>
              </div>
            </div>

            <div style={{ marginTop: '35px' }}>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>
                Open ECN Elite Account →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
