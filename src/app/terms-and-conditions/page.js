import PolicyLayout from '../components/PolicyLayout';

export const metadata = {
  title: "Terms & Conditions | Client Agreement | Magnate Capital",
  description: "Read Global Magnate Capital Ltd. Terms & Conditions, client agreement details, trading execution policies, and legal jurisdiction under Saint Lucia law.",
};

export default function TermsAndConditionsPage() {
  return (
    <PolicyLayout activeTab="terms">
      <h2 style={{ color: 'var(--accent-gold)', fontSize: '2.2rem', fontWeight: 800, marginBottom: '16px' }}>
        Terms &amp; Conditions
      </h2>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
        By opening a live or demo trading account with Global Magnate Capital Ltd. (Registration Number: 2025-00329), you agree to comply with our client agreement terms, margin execution policies, risk warnings, and operational guidelines.
      </p>

      <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px' }}>
        Governing Law &amp; Jurisdiction
      </h3>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
        These Terms shall be governed by and construed in accordance with the laws of Saint Lucia. Any dispute, controversy, or claim arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the Courts of Saint Lucia.
      </p>

      <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px' }}>
        Restricted Regions
      </h3>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
        <strong>Restricted Regions:</strong> Magnate Capital does not provide services to residents or citizens of jurisdictions where such services would be contrary to local laws or regulations, including but not limited to the United States, Cuba, North Korea, Sudan, Syria, Iran, Myanmar, United Arab Emirates (UAE), and other restricted jurisdictions.
      </p>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
        The information on this website is not directed at residents of any country or jurisdiction where the distribution or use of such information would be contrary to local law or regulation.
      </p>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
        Users are responsible for ensuring that accessing and using Magnate Capital's services is compliant with the laws and regulations applicable in their country of residence.
      </p>

      <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px' }}>
        Execution &amp; Order Policy
      </h3>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
        Magnate Capital executes client trades under institutional straight-through processing (STP) and ECN liquidity bridges. Slippage may occur during extreme market volatility or high-impact macroeconomic releases.
      </p>
    </PolicyLayout>
  );
}
