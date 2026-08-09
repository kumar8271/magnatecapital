import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Classic Noble Account ($50 Deposit) | Magnate Capital",
  description: "Classic Noble Account details: $50 minimum deposit, spreads from 1.5 pips, No Commission, cTrader & MT5 platform, leverage 1:500. Perfect for beginner traders.",
};

export default function ClassicNoblePage() {
  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 60px 0', background: 'linear-gradient(180deg, #120922 0%, #1A0F2E 100%)' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', marginBottom: '16px' }}>
            <i className="fa-solid fa-shield" style={{ color: 'var(--accent-gold)' }}></i>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Beginner Account Tier</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>Classic Noble Account</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '750px', lineHeight: '1.7', marginBottom: '30px' }}>
            The Classic Noble account is designed for novice traders looking for zero-commission trading with an accessible $50 minimum deposit threshold.
          </p>

          <div className="glass-card tech-card-pulse" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)', marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '24px' }}>Account Specifications</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Minimum Deposit</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>$50</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Spreads</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>From 1.5 Pips</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Commission</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#2ecc71', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>No Commission</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Leverage</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>Up to 1:500</div>
              </div>
            </div>

            <div style={{ marginTop: '35px' }}>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>
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
