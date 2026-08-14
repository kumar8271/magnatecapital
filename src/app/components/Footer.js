'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [selectedPolicyModal, setSelectedPolicyModal] = useState(null);
  const [isWAChatOpen, setIsWAChatOpen] = useState(false);
  const [waMessage, setWaMessage] = useState('');

  return (
    <>
      <footer style={{ background: '#010108', borderTop: '1px solid rgba(0, 64, 233, 0.25)', padding: '70px 0 30px 0', color: '#fff' }}>
        <div className="container">
          
          {/* Top Grid: 4 Organized Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '50px' }}>
            
            {/* Col 1: Brand & Identity */}
            <div>
              <Link href="/" style={{ display: 'inline-block', marginBottom: '18px' }} aria-label="Magnate Capital Homepage">
                <img src="/logo.png" alt="Magnate Capital Logo" width="250" height="73" style={{ height: '73px', width: 'auto', display: 'block' }} />
              </Link>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Global Magnate Capital Ltd. is a tier-1 multi-asset broker delivering raw ECN liquidity, ultra-low latency execution, and tailored institutional solutions worldwide.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[
                  { icon: 'fa-instagram', href: 'https://www.instagram.com/magnatecapital/', label: 'Instagram' },
                  { icon: 'fa-x-twitter', href: 'https://x.com/MagnateCapital', label: 'X' },
                  { icon: 'fa-facebook-f', href: 'https://www.facebook.com/profile.php?id=61577696182180', label: 'Facebook' },
                  { icon: 'fa-linkedin-in', href: 'https://www.linkedin.com/in/magnate-capital-320425371/', label: 'LinkedIn' },
                  { icon: 'fa-telegram', href: 'https://t.me/magnatecapital', label: 'Telegram' },
                  { icon: 'fa-youtube', href: 'https://www.youtube.com/@MagnateCapital', label: 'YouTube' }
                ].map((s) => (
                  <a 
                    key={s.label}
                    href={s.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    title={s.label}
                    aria-label={s.label}
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: 'rgba(255,255,255,0.05)', 
                      border: '1px solid rgba(0, 64, 233, 0.3)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: '#38BDF8', 
                      fontSize: '0.95rem',
                      transition: 'all 0.3s' 
                    }}
                  >
                    <i className={`fa-brands ${s.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Trading Markets */}
            <div>
              <h4 style={{ color: '#38BDF8', fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
                Trading Markets
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                <li><Link href="/products/forex" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Forex Currencies</Link></li>
                <li><Link href="/products/precious-metals" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Precious Metals (Gold/Silver)</Link></li>
                <li><Link href="/products/indices" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Stock Indices</Link></li>
                <li><Link href="/products/cryptocurrencies" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Cryptocurrency CFDs</Link></li>
                <li><Link href="/products" style={{ color: '#38BDF8', textDecoration: 'none', fontWeight: 700 }}>View All Asset Classes →</Link></li>
              </ul>
            </div>

            {/* Col 3: Accounts & Platforms */}
            <div>
              <h4 style={{ color: '#38BDF8', fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
                Account Types
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                <li><Link href="/accounts/classic-noble" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Classic Noble ($50 Min)</Link></li>
                <li><Link href="/accounts/prime-crown" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Prime Crown ($500 Min)</Link></li>
                <li><Link href="/accounts/ecn-elite" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>ECN Elite ($5,000 Min)</Link></li>
                <li><Link href="/accounts" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>All Account Types</Link></li>
              </ul>
            </div>

            {/* Col 4: Legal & Resources */}
            <div>
              <h4 style={{ color: '#38BDF8', fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
                Resources &amp; Legal
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                <li><Link href="/resources/economic-calendar" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Economic Calendar</Link></li>
                <li><Link href="/resources/calculator" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Trading Calculators Suite</Link></li>
                <li><Link href="/kyc-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>KYC Policy &amp; Verification</Link></li>
                <li><Link href="/aml-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Anti-Money Laundering (AML)</Link></li>
                <li><Link href="/terms-and-conditions" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms &amp; Conditions</Link></li>
                <li><Link href="/legal-document" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Regulatory Legal Documentation</Link></li>
              </ul>
            </div>

          </div>

          {/* Legal Compliance Block */}
          <div style={{ background: 'rgba(0, 64, 233, 0.05)', border: '1px solid rgba(0, 64, 233, 0.3)', borderRadius: '16px', padding: '28px', marginBottom: '35px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
              <h4 style={{ color: '#38BDF8', fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                <i className="fa-solid fa-building-shield" style={{ marginRight: '8px' }}></i> Compliance &amp; Legal Desk
              </h4>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, background: 'rgba(0, 64, 233, 0.15)', color: '#38BDF8', padding: '4px 12px', borderRadius: '12px', border: '1px solid rgba(0, 64, 233, 0.35)', textTransform: 'uppercase' }}>
                Reg: 2025-00329
              </span>
            </div>
            
            <p style={{ marginBottom: '14px' }}>
              For all legal, regulatory, or compliance-related correspondence, please contact: <strong>Global Magnate Capital Ltd. – Compliance &amp; Legal Department</strong>
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '0.85rem' }}>Legal Support Email:</strong>
                <a href="mailto:compliance@magnatefx.com" style={{ color: '#38BDF8', fontWeight: 700 }}>compliance@magnatefx.com</a>
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '0.85rem' }}>Client Operations Email:</strong>
                <a href="mailto:support@magnatefx.com" style={{ color: '#38BDF8', fontWeight: 700 }}>support@magnatefx.com</a>
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '0.85rem' }}>Registered Jurisdiction:</strong>
                Foster Capital Inc, Robin Kelton Building, Choc Bay, Castries, Saint Lucia
              </div>
            </div>
          </div>

          {/* High Risk Warning Statement */}
          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px', marginBottom: '30px', fontSize: '0.82rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.6)' }}>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#ef5350' }}>High Risk Investment Warning:</strong> Trading Foreign Exchange (Forex) and Contracts for Difference (CFDs) carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange or CFDs, you should carefully consider your investment objectives, level of experience, and risk appetite. There is a possibility that you could sustain a loss of some or all of your initial investment and, therefore, you should not invest money that you cannot afford to lose.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', marginTop: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '16px', fontSize: '0.88rem' }}>
              <div style={{ color: 'var(--text-secondary)' }}>
                &copy; 2026 Global Magnate Capital Ltd. All rights reserved. Registered in Saint Lucia (Reg: 2025-00329).
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                Designed &amp; Developed by <a href="https://www.echoweb.in/" target="_blank" rel="noreferrer" style={{ color: '#38BDF8', fontWeight: 700, textDecoration: 'underline' }}>ECHOWEB TECHNOLOGY</a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '20px', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              <Link href="/kyc-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</Link>
              <span style={{ opacity: 0.25 }}>|</span>
              <Link href="/terms-and-conditions" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms of Use</Link>
              <span style={{ opacity: 0.25 }}>|</span>
              <Link href="/aml-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>AML Policy</Link>
              <span style={{ opacity: 0.25 }}>|</span>
              <Link href="/kyc-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>KYC Policy</Link>
              <span style={{ opacity: 0.25 }}>|</span>
              <Link href="/legal-document" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Risk Disclosure</Link>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Dialog & Toggle Button */}
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 99999 }}>
        {isWAChatOpen && (
          <div 
            style={{
              position: 'absolute',
              bottom: '80px',
              right: '0',
              width: '320px',
              borderRadius: '16px',
              background: '#0A0D1D',
              border: '1px solid rgba(0, 64, 233, 0.4)',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0,0,0,0.85), 0 0 25px rgba(0, 64, 233, 0.25)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ background: '#0040E9', padding: '15px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/logo.png" alt="Support Agent Avatar" width="36" height="36" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #38BDF8', background: '#010108', objectFit: 'contain', padding: '4px' }} />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Magnate VIP Desk</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2ecc71', display: 'inline-block' }}></span>
                    Online (Replies in minutes)
                  </div>
                </div>
              </div>
              <button onClick={() => setIsWAChatOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1rem', cursor: 'pointer' }}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div style={{ padding: '15px', background: '#05060D', minHeight: '100px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0, 64, 233, 0.2)', borderRadius: '8px 8px 8px 0', padding: '10px', fontSize: '0.8rem', color: 'var(--text-secondary)', alignSelf: 'flex-start', maxWidth: '90%' }}>
                Hello there! Welcome to Magnate Capital support. How can we assist you with your account setup today?
              </div>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (!waMessage.trim()) return;
                const encodedMsg = encodeURIComponent(waMessage);
                window.open(`https://api.whatsapp.com/send?phone=971500000000&text=${encodedMsg}`, '_blank');
                setWaMessage('');
                setIsWAChatOpen(false);
              }}
              style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.08)', background: '#0A0D1D', padding: '10px', gap: '8px', alignItems: 'center' }}
            >
              <input 
                type="text"
                placeholder="Type your message..."
                value={waMessage}
                onChange={(e) => setWaMessage(e.target.value)}
                style={{ flexGrow: 1, background: '#010108', border: '1px solid rgba(0, 64, 233, 0.3)', borderRadius: '8px', padding: '8px 12px', color: '#fff', fontSize: '0.8rem', outline: 'none' }}
                required
              />
              <button type="submit" style={{ background: '#0040E9', border: 'none', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                <i className="fa-solid fa-paper-plane" style={{ fontSize: '0.8rem' }}></i>
              </button>
            </form>
          </div>
        )}

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
          <div className="glass-card tech-card-pulse" style={{ maxWidth: '750px', width: '100%', maxHeight: '85vh', overflowY: 'auto', borderRadius: '24px', padding: '35px', background: '#0A0D1D', border: '1px solid #0040E9' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button onClick={() => setSelectedPolicyModal('aml')} style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #0040E9', background: selectedPolicyModal === 'aml' ? '#0040E9' : 'transparent', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>AML Policy</button>
                <button onClick={() => setSelectedPolicyModal('kyc')} style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #0040E9', background: selectedPolicyModal === 'kyc' ? '#0040E9' : 'transparent', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>KYC Policy</button>
                <button onClick={() => setSelectedPolicyModal('terms')} style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #0040E9', background: selectedPolicyModal === 'terms' ? '#0040E9' : 'transparent', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>Terms &amp; Conditions</button>
              </div>
              <button onClick={() => setSelectedPolicyModal(null)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.4rem', cursor: 'pointer' }}><i className="fa-solid fa-xmark"></i></button>
            </div>

            {selectedPolicyModal === 'kyc' && (
              <div>
                <h3 style={{ color: '#38BDF8', fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px' }}>Our Commitment to Prevention</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '16px' }}>We take the protection of your personal and financial data seriously. Global Magnate Capital Ltd. utilizes advanced security protocols to safeguard all transactions and account information.</p>
                <h4 style={{ color: '#38BDF8', fontSize: '1.1rem', fontWeight: 800, marginBottom: '12px' }}>Required Documents for Verification</h4>
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
                <h3 style={{ color: '#38BDF8', fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px' }}>Anti-Money Laundering (AML) Compliance</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.7' }}>Global Magnate Capital Ltd. strictly enforces AML policies under Saint Lucia regulatory guidelines. Third-party deposits are strictly prohibited.</p>
              </div>
            )}
            {selectedPolicyModal === 'terms' && (
              <div>
                <h3 style={{ color: '#38BDF8', fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px' }}>Terms &amp; Conditions</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.7' }}>Client agreements are governed under the laws of Saint Lucia (Registration: 2025-00329).</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
