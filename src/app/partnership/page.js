import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Introducing Broker (IB) & White Label Solutions | Magnate Capital Partnership",
  description: "Partner with Magnate Capital as an Introducing Broker (IB). Earn competitive rebates up to $12/lot, automated payouts, custom White Label solutions, and monthly volume challenge rewards.",
};

export default function PartnershipPage() {
  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 70px 0', background: 'linear-gradient(180deg, #010108 0%, #0A0D1D 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Institutional IB Program</span>
          <h1 style={{ fontSize: '3.4rem', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Introducing <span style={{ color: '#38BDF8' }}>Broker Program</span>
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            As an IB, you earn competitive commissions on every trade made by your referred clients. Partner with an institutional liquidity ecosystem.
          </p>
        </div>
      </section>

      {/* Monthly Volume Challenge Section */}
      <section style={{ padding: '80px 0 100px 0', background: '#010108' }}>
        <div className="container">
          <div className="glass-card tech-card-pulse" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
              Grow Your Network, Grow Your Rewards
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Monthly Volume Challenge
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              Each month, our top-performing partners earn exclusive cash bonuses and rebates based on their client trading volumes.
            </p>

            <ol style={{ paddingLeft: '24px', color: '#fff', fontSize: '1.05rem', lineHeight: '2', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
              <li><strong>Scaling Bonus Tiers</strong> — Scaling payout tiers based on active monthly trading volume.</li>
              <li><strong>Instant Cash Rebates</strong> — Direct withdrawal cash bonuses credited to your partner portal.</li>
              <li><strong>Dedicated Support</strong> — VIP access, custom marketing assets, and direct liquidity bridges.</li>
            </ol>

            <div style={{ color: '#38BDF8', fontWeight: 800, fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '30px' }}>
              “Let your referrals work for you.”
            </div>

            <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1rem', borderRadius: '8px' }}>
              Become an IB Partner →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
