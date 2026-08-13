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

      <section style={{ padding: '80px 0 100px 0', background: '#010108', minHeight: '80vh', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div style={{ marginBottom: '30px' }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Regulatory &amp; Legal Framework</span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '900px', marginTop: '8px' }}>
              Magnate Capital maintains a rigorous commitment to providing a secure and compliant trading environment. These policies are established in accordance with global financial regulatory guidelines.
            </p>
          </div>

          <div className="policy-grid">
            
            {/* Left Sidebar Navigation */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'rgba(10, 13, 29, 0.85)', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(0,64,233,0.35)' }}>
              {policyTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    style={{
                      padding: '16px 20px',
                      color: isActive ? '#fff' : 'var(--text-secondary)',
                      background: isActive ? '#0040E9' : 'transparent',
                      fontWeight: isActive ? 800 : 500,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      borderLeft: isActive ? '4px solid #38BDF8' : '4px solid transparent',
                      display: 'block'
                    }}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>

            {/* Main Policy Content Container */}
            <div className="glass-card" style={{ padding: '40px', borderRadius: '16px', background: 'rgba(10, 13, 29, 0.95)', border: '1px solid rgba(0, 64, 233, 0.35)', color: '#fff' }}>
              {children}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
