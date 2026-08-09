'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [selectedPolicyModal, setSelectedPolicyModal] = useState(null);
  const [isWAChatOpen, setIsWAChatOpen] = useState(false);
  const [waMessage, setWaMessage] = useState('');

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
                <li><Link href="/products/forex">Forex Trading</Link></li>
                <li><Link href="/products/precious-metals">Precious Metals</Link></li>
                <li><Link href="/products/indices">Stock Indices</Link></li>
                <li><Link href="/products/cryptocurrencies">Crypto CFDs</Link></li>
              </ul>
            </div>
            <div>
              <h4>Quick Links & Legal</h4>
              <ul className="footer-links">
                <li><Link href="/about">About Our Firm</Link></li>
                <li><Link href="/accounts">Account Compare</Link></li>
                <li><Link href="/resources/calculator">Trading Calculator</Link></li>
                <li><Link href="/kyc-policy">KYC Policy</Link></li>
                <li><Link href="/aml-policy">AML Policy</Link></li>
                <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                <li><Link href="/legal-document">Legal Document</Link></li>
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

          <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', marginTop: '30px', fontSize: '0.85rem' }}>
            <div style={{ color: 'var(--text-secondary)' }}>
              &copy; 2026 Global Magnate Capital Ltd. All rights reserved. | Designed &amp; Developed by <a href="https://www.echoweb.in/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-gold)', fontWeight: 700, textDecoration: 'underline' }}>ECHOWEB TECHNOLOGY</a>
            </div>

            <div style={{ display: 'flex', gap: '22px', flexWrap: 'wrap', color: 'var(--text-secondary)', fontWeight: 500 }}>
              <Link href="/kyc-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</Link>
              <Link href="/terms-and-conditions" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms of Use</Link>
              <Link href="/aml-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>AML Policy</Link>
              <Link href="/kyc-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>KYC Policy</Link>
              <Link href="/legal-document" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Risk Disclosure</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Dialog & Toggle Button */}
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 99999 }}>
        
        {/* WhatsApp Chat Box Dialog Window */}
        {isWAChatOpen && (
          <div 
            style={{
              position: 'absolute',
              bottom: '80px',
              right: '0',
              width: '320px',
              borderRadius: '16px',
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0,0,0,0.85)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Header */}
            <div style={{ background: '#075E54', padding: '15px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/logo.png" alt="Support Agent" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--accent-gold)', background: '#120922', objectFit: 'contain', padding: '4px' }} />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Magnate VIP Desk</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#25D366', display: 'inline-block' }}></span>
                    Online (Replies in minutes)
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsWAChatOpen(false)} 
                style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1rem', cursor: 'pointer' }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Chat Messages Body */}
            <div style={{ padding: '15px', background: '#1A0F2E', minHeight: '100px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px 8px 8px 0', padding: '10px', fontSize: '0.8rem', color: 'var(--text-secondary)', alignSelf: 'flex-start', maxWidth: '90%' }}>
                Hello there! Welcome to Magnate Capital support. How can we assist you with your account setup today?
              </div>
            </div>

            {/* Input Form Footer */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (!waMessage.trim()) return;
                const encodedMsg = encodeURIComponent(waMessage);
                window.open(`https://api.whatsapp.com/send?phone=971500000000&text=${encodedMsg}`, '_blank');
                setWaMessage('');
                setIsWAChatOpen(false);
              }}
              style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.08)', background: '#160B28', padding: '10px', gap: '8px', alignItems: 'center' }}
            >
              <input 
                type="text"
                placeholder="Type your message..."
                value={waMessage}
                onChange={(e) => setWaMessage(e.target.value)}
                style={{ flexGrow: 1, background: '#160B28', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 12px', color: '#fff', fontSize: '0.8rem', outline: 'none' }}
                required
              />
              <button 
                type="submit" 
                style={{ background: '#25D366', border: 'none', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
              >
                <i className="fa-solid fa-paper-plane" style={{ fontSize: '0.8rem' }}></i>
              </button>
            </form>
          </div>
        )}

        {/* Floating Toggle Button */}
        <button 
          onClick={() => setIsWAChatOpen(!isWAChatOpen)} 
          className="whatsapp-float"
          aria-label="Contact Support on WhatsApp"
          style={{
            width: '60px',
            height: '60px',
            background: '#25D366',
            color: '#fff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
            position: 'relative'
          }}
        >
          <i className="fa-brands fa-whatsapp"></i>
        </button>
      </div>

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
