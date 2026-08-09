import PolicyLayout from '../components/PolicyLayout';

export const metadata = {
  title: "AML Policy | Anti-Money Laundering Compliance | Magnate Capital",
  description: "Read Global Magnate Capital Ltd. Anti-Money Laundering (AML) policy, anti-fraud regulations, and client identification rules.",
};

export default function AmlPolicyPage() {
  return (
    <PolicyLayout activeTab="aml">
      <h2 style={{ color: 'var(--accent-gold)', fontSize: '2.2rem', fontWeight: 800, marginBottom: '16px' }}>
        Anti-Money Laundering (AML) Compliance
      </h2>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
        Global Magnate Capital Ltd. strictly enforces Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) procedures in compliance with Saint Lucia financial regulations and international financial standards.
      </p>

      <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px' }}>
        Strict Prohibition of Third-Party Deposits
      </h3>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
        All client deposits and withdrawal transactions must match the exact registered bank account or credit card title. Third-party deposits and withdrawals are strictly prohibited under company policy and regulatory mandate.
      </p>

      <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px' }}>
        Continuous Transaction Monitoring
      </h3>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
        Magnate Capital reserves the right to audit suspicious account activity, request additional proof of source of funds, or temporarily restrict account access during ongoing compliance reviews to maintain institutional system safety.
      </p>
    </PolicyLayout>
  );
}
