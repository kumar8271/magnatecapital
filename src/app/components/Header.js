'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      {/* Elefin Clean Floating Glass Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: 'rgba(1, 1, 8, 0.85)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '16px 0',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }} aria-label="Magnate Capital Homepage">
            <img 
              src="/logo.png" 
              alt="Magnate Capital Logo" 
              width="180" 
              height="48" 
              style={{ height: '48px', width: 'auto', display: 'block' }} 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={isMobileMenuOpen ? 'active' : ''}>
            <ul style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', margin: 0, padding: 0 }}>
              
              {/* Trading / Products Dropdown */}
              <li 
                className="nav-dropdown"
                onMouseEnter={() => setActiveDropdown('trading')}
                onMouseLeave={() => setActiveDropdown(null)}
                style={{ position: 'relative' }}
              >
                <Link 
                  href="/products" 
                  style={{ 
                    color: '#fff', 
                    textDecoration: 'none', 
                    fontSize: '0.95rem', 
                    fontWeight: 500, 
                    padding: '8px 14px', 
                    borderRadius: '8px',
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px' 
                  }}
                >
                  Trading <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.65rem', opacity: 0.7 }}></i>
                </Link>
                <div className={`nav-dropdown-menu ${activeDropdown === 'trading' ? 'open' : ''}`}>
                  <Link href="/products/forex" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#0040E9' }}></i> Forex
                  </Link>
                  <Link href="/products/precious-metals" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-coins" style={{ color: '#0040E9' }}></i> Precious Metals
                  </Link>
                  <Link href="/products/indices" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-chart-line" style={{ color: '#0040E9' }}></i> Stock Indices
                  </Link>
                  <Link href="/products/cryptocurrencies" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-brands fa-bitcoin" style={{ color: '#0040E9' }}></i> Cryptocurrencies
                  </Link>
                </div>
              </li>

              {/* Accounts Dropdown */}
              <li 
                className="nav-dropdown"
                onMouseEnter={() => setActiveDropdown('accounts')}
                onMouseLeave={() => setActiveDropdown(null)}
                style={{ position: 'relative' }}
              >
                <Link 
                  href="/accounts" 
                  style={{ 
                    color: '#fff', 
                    textDecoration: 'none', 
                    fontSize: '0.95rem', 
                    fontWeight: 500, 
                    padding: '8px 14px', 
                    borderRadius: '8px',
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px' 
                  }}
                >
                  Accounts <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.65rem', opacity: 0.7 }}></i>
                </Link>
                <div className={`nav-dropdown-menu ${activeDropdown === 'accounts' ? 'open' : ''}`}>
                  <Link href="/accounts/classic-noble" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-shield" style={{ color: '#0040E9' }}></i> Classic Noble ($50 Min)
                  </Link>
                  <Link href="/accounts/prime-crown" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-crown" style={{ color: '#0040E9' }}></i> Prime Crown ($500 Min)
                  </Link>
                  <Link href="/accounts/ecn-elite" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-gem" style={{ color: '#0040E9' }}></i> ECN Elite ($5,000 Min)
                  </Link>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', margin: '4px 0' }}></div>
                  <Link href="/accounts" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-table-columns" style={{ color: 'var(--text-secondary)' }}></i> All Account Types
                  </Link>
                </div>
              </li>

              {/* Resources Dropdown */}
              <li 
                className="nav-dropdown"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
                style={{ position: 'relative' }}
              >
                <span 
                  style={{ 
                    color: '#fff', 
                    fontSize: '0.95rem', 
                    fontWeight: 500, 
                    padding: '8px 14px', 
                    borderRadius: '8px',
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Discovery <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.65rem', opacity: 0.7 }}></i>
                </span>
                <div className={`nav-dropdown-menu ${activeDropdown === 'resources' ? 'open' : ''}`}>
                  <Link href="/resources/economic-calendar" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-calendar-days" style={{ color: '#0040E9' }}></i> Economic Calendar
                  </Link>
                  <Link href="/resources/calculator" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-calculator" style={{ color: '#0040E9' }}></i> Trading Calculators
                  </Link>
                </div>
              </li>

              {/* About Us */}
              <li>
                <Link 
                  href="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ 
                    color: '#fff', 
                    textDecoration: 'none', 
                    fontSize: '0.95rem', 
                    fontWeight: 500, 
                    padding: '8px 14px', 
                    borderRadius: '8px' 
                  }}
                >
                  About Us
                </Link>
              </li>

              {/* Contact */}
              <li>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ 
                    color: '#fff', 
                    textDecoration: 'none', 
                    fontSize: '0.95rem', 
                    fontWeight: 500, 
                    padding: '8px 14px', 
                    borderRadius: '8px' 
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Action Buttons (Elefin Sign in & Register) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a 
              href="https://trade.magnatefx.com/login/" 
              target="_blank" 
              rel="noreferrer" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 24px',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: '#fff',
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#000000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'; e.currentTarget.style.color = '#ffffff'; }}
            >
              Sign in
            </a>

            <a 
              href="https://trade.magnatefx.com/register/" 
              target="_blank" 
              rel="noreferrer" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 26px',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#fff',
                textDecoration: 'none',
                background: '#0040E9',
                border: '1px solid #0040E9',
                boxShadow: '0 4px 16px rgba(0, 64, 233, 0.45)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1D58F6'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 64, 233, 0.65)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#0040E9'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 64, 233, 0.45)'; }}
            >
              Register
            </a>

            {/* Mobile menu toggle */}
            <button 
              type="button"
              className="menu-toggle lg-hide" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.4rem', cursor: 'pointer', display: 'none' }}
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>

        </div>
      </header>
    </>
  );
}
