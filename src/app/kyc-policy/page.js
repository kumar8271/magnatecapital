import PolicyLayout from '../components/PolicyLayout';

export const metadata = {
  title: "KYC Policy | Know Your Customer Verification | Magnate Capital",
  description: "Read Global Magnate Capital Ltd. KYC policy and identity verification requirements, required documents, passport, utility bills, and transaction history.",
};

export default function KycPolicyPage() {
  return (
    <PolicyLayout activeTab="kyc">
      <h2 style={{ color: 'var(--accent-gold)', fontSize: '2.2rem', fontWeight: 800, marginBottom: '16px' }}>
        Our Commitment to Prevention
      </h2>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
        We take the protection of your personal and financial data seriously. Global Magnate Capital Ltd. utilizes advanced security protocols and fraud control systems to safeguard all transactions and account information.
      </p>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '35px' }}>
        To ensure secure electronic transactions, we require certain documents from you—especially when funding your account.
      </p>

      <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px' }}>
        Required Documents for Verification
      </h3>

      <p style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '16px' }}>
        When making a deposit, please provide the following:
      </p>

      <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '2', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '35px' }}>
        <li>A valid government-issued passport (with the signature page)</li>
        <li>
          Credit card copies used for the deposit:
          <ul style={{ listStyle: 'circle', paddingLeft: '24px', marginTop: '6px', color: 'var(--text-secondary)' }}>
            <li>Front side: only the last four digits visible</li>
            <li>Back side: CVV code covered</li>
          </ul>
        </li>
        <li>A recent utility bill in your name showing your current address</li>
        <li>A signed copy of your purchase history of online transactions</li>
      </ul>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '35px' }}>
        If you have any questions, feel free to reach out to our support team at <a href="mailto:info@magnatecapital.com" style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>info@magnatecapital.com</a>.
      </p>

      <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px' }}>
        When Should You Provide These Documents?
      </h3>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
        We strongly recommend providing all required verification documents immediately upon registration to ensure uninterrupted trading operations and rapid processing of withdrawal requests.
      </p>
    </PolicyLayout>
  );
}
