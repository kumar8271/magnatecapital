import PolicyLayout from '../components/PolicyLayout';

export const metadata = {
  title: "Legal Document & Restricted Regions | Magnate Capital",
  description: "Global Magnate Capital Ltd. regulatory credentials, registration details, company registration 2025-00329, Saint Lucia jurisdiction, and restricted regions policy.",
};

export default function LegalDocumentPage() {
  return (
    <PolicyLayout activeTab="legal">
      <h2 style={{ color: 'var(--accent-gold)', fontSize: '2.2rem', fontWeight: 800, marginBottom: '16px' }}>
        Regulatory &amp; Compliance Legal Documentation
      </h2>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
        Global Magnate Capital Ltd. operates under strict regulatory compliance and licensing standards in Saint Lucia.
      </p>

      <div style={{ background: 'rgba(0,0,0,0.4)', padding: '24px', borderRadius: '14px', border: '1px solid var(--accent-gold)', marginBottom: '30px' }}>
        <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '14px' }}>Corporate Profile</h3>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#fff', fontSize: '1rem', lineHeight: '2' }}>
          <li><strong>Legal Corporate Entity:</strong> Global Magnate Capital Ltd.</li>
          <li><strong>Company Registration Number:</strong> 2025-00329</li>
          <li><strong>Registered Office:</strong> Foster Capital Inc, Robin Kelton Building, Choc Bay, Castries, Saint Lucia</li>
          <li><strong>Compliance Contact Desk:</strong> <a href="mailto:compliance@magnatefx.com" style={{ color: 'var(--accent-gold)' }}>compliance@magnatefx.com</a></li>
        </ul>
      </div>

      <div style={{ background: 'rgba(0,0,0,0.4)', padding: '24px', borderRadius: '14px', border: '1px solid rgba(0,64,233,0.4)', marginBottom: '30px' }}>
        <h3 style={{ color: '#38BDF8', fontSize: '1.3rem', fontWeight: 800, marginBottom: '14px' }}>Restricted Regions</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
          Global Magnate Capital Ltd. does not offer or provide services to residents of certain restricted jurisdictions, including but not limited to the <strong>United States of America, Canada, North Korea, Iran, Cuba, Syria, Sudan</strong>, and any other territory where the distribution or solicitation of financial derivatives would be contrary to local laws or statutory regulations.
        </p>
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
        All client funds are held in segregated bank accounts separated from corporate operational funds, adhering to institutional capital adequacy ratios.
      </p>
    </PolicyLayout>
  );
}
