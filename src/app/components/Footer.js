'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [selectedPolicyModal, setSelectedPolicyModal] = useState(null);

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-top grid-3">
            <div className="footer-brand">
              <div className="logo-area" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src="/logo.png" alt="Magnate Capital" style={{ height: '40px', width: 'auto', display: 'block' }} />
              </div>
              <p className="brand-desc">Global Magnate Capital Ltd. is a tier-1 multi-asset broker providing advanced retail and institutional solutions globally.</p>
              <div className="footer-socials" style={{ display: 'flex', gap: '14px', marginTop: '16px' }}>
                <a href="https://www.instagram.com/magnatecapital/" target="_blank" rel="noreferrer" title="Instagram" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><i className="fa-brands fa-instagram"></i></a>
                <a href="https://x.com/MagnateCapital" target="_blank" rel="noreferrer" title="X (Twitter)" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.facebook.com/profile.php?id=61577696182180" target="_blank" rel="noreferrer" title="Facebook" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/magnate-capital-320425371/" target="_blank" rel="noreferrer" title="LinkedIn" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://t.me/magnatecapital" target="_blank" rel="noreferrer" title="Telegram" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><i className="fa-brands fa-telegram"></i></a>
                <a href="https://www.youtube.com/@MagnateCapital" target="_blank" rel="noreferrer" title="YouTube" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
            <div>
              <h4>Trading Markets</h4>
              <ul className="footer-links">
                <li><Link href="/products#forex">Forex Trading</Link></li>
                <li><Link href="/products#commodities">Commodities & Gold</Link></li>
                <li><Link href="/products#indices">Stock Indices</Link></li>
                <li><Link href="/products#crypto">Crypto CFDs</Link></li>
              </ul>
            </div>
            <div>
              <h4>Quick Links & Legal</h4>
              <ul className="footer-links">
                <li><Link href="/about">About Our Firm</Link></li>
                <li><Link href="/accounts">Account Compare</Link></li>
                <li><Link href="/resources/calculator">Trading Calculator</Link></li>
                <li><button type="button" onClick={() => setSelectedPolicyModal('kyc')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', padding: 0, cursor: 'pointer', fontSize: 'inherit' }}>KYC Policy</button></li>
                <li><button type="button" onClick={() => setSelectedPolicyModal('aml')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', padding: 0, cursor: 'pointer', fontSize: 'inherit' }}>AML Policy</button></li>
                <li><button type="button" onClick={() => setSelectedPolicyModal('terms')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', padding: 0, cursor: 'pointer', fontSize: 'inherit' }}>Terms & Conditions</button></li>
              </ul>
            </div>
          </div>

          {/* Legal Compliance Block */}
          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', padding: '24px', margin: '30px 0', fontSize: '0.88rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>18. Contact Information</h4>
            <p style={{ marginBottom: '14px' }}>For all legal, regulatory, or compliance-related correspondence, please contact:</p>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '10px' }}>Global Magnate Capital Ltd. – Compliance & Legal Department</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li><strong>Email:</strong> <a href="mailto:compliance@magnatefx.com" style={{ color: 'var(--accent-gold)' }}>compliance@magnatefx.com</a></li>
              <li><strong>Registered Address:</strong> Foster Capital Inc, Robin Kelton Building, Choc Bay, Castries, Saint Lucia</li>
              <li><strong>Company Registration Number:</strong> 2025-00329</li>
            </ul>
          </div>

          <div className="risk-warning">
            <p><strong>High Risk Investment Warning:</strong> Trading Foreign Exchange (Forex) and Contracts for Difference (CFDs) carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange or CFDs, you should carefully consider your investment objectives, level of experience, and risk appetite. There is a possibility that you could sustain a loss of some or all of your initial investment and, therefore, you should not invest money that you cannot afford to lose.</p>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Global Magnate Capital Ltd. All rights reserved. Registered under license regulations in Saint Lucia (Reg: 2025-00329).</p>
          </div>
        </div>
      </footer>

      {/* Interactive Policy Modal Drawer */}
      {selectedPolicyModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', zIndex: 999999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div className="glass-card tech-card-pulse" style={{ maxWidth: '750px', width: '100%', maxHeight: '85vh', overflowY: 'auto', borderRadius: '24px', padding: '35px', background: '#160B28', border: '1px solid var(--accent-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button onClick={() => setSelectedPolicyModal('aml')} style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--accent-gold)', background: selectedPolicyModal === 'aml' ? 'var(--accent-gold)' : 'transparent', color: selectedPolicyModal === 'aml' ? '#1A0F2E' : '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>AML Policy</button>
                <button onClick={() => setSelectedPolicyModal('kyc')} style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--accent-gold)', background: selectedPolicyModal === 'kyc' ? 'var(--accent-gold)' : 'transparent', color: selectedPolicyModal === 'kyc' ? '#1A0F2E' : '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>KYC Policy</button>
                <button onClick={() => setSelectedPolicyModal('terms')} style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--accent-gold)', background: selectedPolicyModal === 'terms' ? 'var(--accent-gold)' : 'transparent', color: selectedPolicyModal === 'terms' ? '#1A0F2E' : '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>Terms & Conditions</button>
              </div>
              <button onClick={() => setSelectedPolicyModal(null)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.4rem', cursor: 'pointer' }}><i className="fa-solid fa-xmark"></i></button>
            </div>

            {selectedPolicyModal === 'kyc' && (
              <div>
                <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px' }}>Our Commitment to Prevention</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '16px' }}>We take the protection of your personal and financial data seriously. Global Magnate Capital Ltd. utilizes advanced security protocols to safeguard all transactions and account information.</p>
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '12px' }}>Required Documents for Verification</h4>
                <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>A valid government-issued passport (with signature page)</li>
                  <li>Credit card copies used for deposit (front last 4 digits visible, back CVV covered)</li>
                  <li>A recent utility bill in your name showing current address</li>
                  <li>A signed copy of online transaction purchase history</li>
                </ul>
              </div>
            )}
            {selectedPolicyModal === 'aml' && (
              <div>
                <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px' }}>Anti-Money Laundering (AML) Compliance</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.7' }}>Global Magnate Capital Ltd. strictly enforces AML policies under Saint Lucia regulatory guidelines. Third-party deposits are strictly prohibited.</p>
              </div>
            )}
            {selectedPolicyModal === 'terms' && (
              <div>
                <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px' }}>Terms & Conditions</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.7' }}>Client agreements are governed under the laws of Saint Lucia (Registration: 2025-00329).</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
