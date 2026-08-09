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

      <section style={{ padding: '80px 0 60px 0', background: 'linear-gradient(180deg, #120922 0%, #1A0F2E 100%)' }}>
        <div className="container text-center">
          <span className="section-label">Partner with Us – Earn More with Every Trade</span>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Introducing Broker (IB) Program
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            As an IB, you earn competitive commissions on every trade made by your referred clients. Whether you're an individual or a business, our program is designed to help you grow your income.
          </p>
        </div>
      </section>

      {/* Monthly Volume Challenge Section */}
      <section style={{ padding: '60px 0 90px 0', background: '#160B28' }}>
        <div className="container">
          <div className="glass-card tech-card-pulse" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
              Grow Your Network, Grow Your Rewards
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              Monthly Volume Challenge (For Partners)
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              Each month, our top-performing partners earn exclusive bonuses based on their client trading volumes.
            </p>

            <ol style={{ paddingLeft: '24px', color: '#fff', fontSize: '1.05rem', lineHeight: '2', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
              <li><strong>Bonus Tiers</strong> — Scaling payout tiers based on active monthly trading volume.</li>
              <li><strong>Cash Rewards</strong> — Direct withdrawal cash bonuses credited to your IB wallet.</li>
              <li><strong>Performance Recognition</strong> — VIP access, dedicated account manager, and institutional perks.</li>
            </ol>

            <div style={{ color: 'var(--accent-gold)', fontWeight: 800, fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '30px' }}>
              “Let your referrals work for you.”
            </div>

            <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1rem' }}>
              Become an IB Partner →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
