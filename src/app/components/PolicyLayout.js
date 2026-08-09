'use client';

import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';

export default function PolicyLayout({ activeTab, children }) {
  const policyTabs = [
    { id: 'aml', label: 'Aml Policy', href: '/aml-policy' },
    { id: 'kyc', label: 'Kyc Policy', href: '/kyc-policy' },
    { id: 'terms', label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { id: 'legal', label: 'Legal Document', href: '/legal-document' }
  ];

  return (
    <>
      <Header />

      <section style={{ padding: '70px 0 100px 0', background: '#120922', minHeight: '80vh' }}>
        <div className="container">
          
          <div style={{ marginBottom: '30px' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '900px' }}>
              Magnate Capital maintains a strong commitment to maintaining a secure and compliant trading environment. These policies are in place to help prevent identity theft, financial fraud, money laundering, and the financing of terrorist activities.
            </p>
          </div>

          <div className="policy-grid">
            
            {/* Left Sidebar Navigation (Matching exact screenshot styling) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: '#160B28', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
              {policyTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    style={{
                      padding: '16px 20px',
                      color: isActive ? '#1A0F2E' : '#fff',
                      background: isActive ? 'var(--accent-gold)' : 'transparent',
                      fontWeight: isActive ? 800 : 600,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      borderLeft: isActive ? '4px solid #fff' : '4px solid transparent',
                      display: 'block'
                    }}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>

            {/* Main Policy Content Container */}
            <div className="glass-card" style={{ padding: '40px', borderRadius: '16px', background: 'rgba(26, 15, 46, 0.95)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {children}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
