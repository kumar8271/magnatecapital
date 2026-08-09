'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [tickerItems, setTickerItems] = useState({
    eurusd: { symbol: 'EURUSD', label: 'EURUSD', price: 1.1548, change: -0.02, flag1: '🇪🇺', flag2: '🇺🇸', type: 'forex', digits: 4 },
    gbpusd: { symbol: 'GBPUSD', label: 'GBPUSD', price: 1.3473, change: 0.22, flag1: '🇬🇧', flag2: '🇺🇸', type: 'forex', digits: 4 },
    xauusd: { symbol: 'XAUUSD', label: 'GOLD', price: 4354.75, change: 0.29, type: 'gold', digits: 2 },
    btcusd: { symbol: 'BTCUSD', label: 'BTCUSD', price: 65187.97, change: 0.03, cryptoChar: '₿', type: 'crypto', digits: 2 },
    usoil: { symbol: 'USOIL', label: 'USOIL', price: 74.18, change: -0.02, type: 'oil', digits: 2 },
    spx500: { symbol: 'SPX500', label: 'SPX500', price: 4848.41, change: -0.03, labelTag: '500', type: 'indices', digits: 2 },
    eurjpy: { symbol: 'EURJPY', label: 'EURJPY', price: 182.38, change: -0.15, flag1: '🇪🇺', flag2: '🇯🇵', type: 'forex', digits: 2 },
    usdjpy: { symbol: 'USDJPY', label: 'USDJPY', price: 157.93, change: -0.47, flag1: '🇺🇸', flag2: '🇯🇵', type: 'forex', digits: 2 },
    ethusd: { symbol: 'ETHUSD', label: 'ETHUSD', price: 1923.63, change: -0.05, type: 'eth', digits: 2 },
    eurnzd: { symbol: 'EURNZD', label: 'EURNZD', price: 1.9614, change: 0.04, flag1: '🇪🇺', flag2: '🇳🇿', type: 'forex', digits: 4 },
    xagusd: { symbol: 'SILVER', label: 'SILVER', price: 31.48, change: 1.10, type: 'gold', digits: 2 }
  });

  useEffect(() => {
    async function fetchLiveMarketRates() {
      try {
        const response = await fetch('/api/rates');
        const data = await response.json();
        if (data && data.success && data.rates) {
          const r = data.rates;
          setTickerItems(prev => ({
            ...prev,
            eurusd: { ...prev.eurusd, price: r.eurusd.price, change: r.eurusd.change },
            gbpusd: { ...prev.gbpusd, price: r.gbpusd.price, change: r.gbpusd.change },
            xauusd: { ...prev.xauusd, price: r.gold.price, change: r.gold.change },
            btcusd: { ...prev.btcusd, price: r.btcusd.price, change: r.btcusd.change },
            usoil: { ...prev.usoil, price: r.usoil.price, change: r.usoil.change },
            spx500: { ...prev.spx500, price: r.spx500.price, change: r.spx500.change },
            eurjpy: { ...prev.eurjpy, price: r.eurjpy.price, change: r.eurjpy.change },
            usdjpy: { ...prev.usdjpy, price: r.usdjpy.price, change: r.usdjpy.change },
            ethusd: { ...prev.ethusd, price: r.ethusd.price, change: r.ethusd.change },
            eurnzd: { ...prev.eurnzd, price: r.eurnzd.price, change: r.eurnzd.change },
            xagusd: { ...prev.xagusd, price: r.silver.price, change: r.silver.change }
          }));
        }
      } catch (err) {
        console.warn('Live rates fetch failed in Header component:', err);
      }
    }
    fetchLiveMarketRates();
    const interval = setInterval(fetchLiveMarketRates, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Bar Announcement */}
      <div className="top-bar" style={{ background: '#120922', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '6px 0', fontSize: '0.78rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="top-bar-contact" style={{ display: 'flex', gap: '20px', color: 'var(--text-secondary)' }}>
            <span><i className="fa-solid fa-envelope" style={{ color: 'var(--accent-gold)', marginRight: '6px' }}></i> support@magnatefx.com</span>
            <span><i className="fa-solid fa-building-shield" style={{ color: 'var(--accent-gold)', marginRight: '6px' }}></i> Global Magnate Capital Ltd. (Reg: 2025-00329)</span>
          </div>
          <div className="top-bar-socials" style={{ display: 'flex', gap: '12px' }}>
            <a href="https://www.instagram.com/magnatecapital/" target="_blank" rel="noreferrer" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/MagnateCapital" target="_blank" rel="noreferrer" title="X (Twitter)"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61577696182180" target="_blank" rel="noreferrer" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/magnate-capital-320425371/" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://t.me/magnatecapital" target="_blank" rel="noreferrer" title="Telegram"><i className="fa-brands fa-telegram"></i></a>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header>
        <div className="container header-container">
          <Link href="/" className="logo-area" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Magnate Capital" style={{ height: '40px', width: 'auto', display: 'block' }} />
          </Link>

          <nav className={isMobileMenuOpen ? 'active' : ''}>
            <ul>
              <li>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              </li>

              {/* Products Dropdown */}
              <li 
                className="nav-dropdown"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/products" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Products <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.6rem' }}></i>
                </Link>
                <div className={`nav-dropdown-menu ${activeDropdown === 'products' ? 'open' : ''}`}>
                  <Link href="/products/forex" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-arrow-trend-up" style={{ color: 'var(--accent-gold)' }}></i> Forex
                  </Link>
                  <Link href="/products/precious-metals" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-coins" style={{ color: 'var(--accent-gold)' }}></i> Precious Metals
                  </Link>
                  <Link href="/products/indices" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-chart-line" style={{ color: 'var(--accent-gold)' }}></i> Stock Indices
                  </Link>
                  <Link href="/products/cryptocurrencies" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-brands fa-bitcoin" style={{ color: 'var(--accent-gold)' }}></i> Cryptocurrencies
                  </Link>
                </div>
              </li>

              {/* Accounts Dropdown (Exact User Requirement) */}
              <li 
                className="nav-dropdown"
                onMouseEnter={() => setActiveDropdown('accounts')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/accounts" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Accounts <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.6rem' }}></i>
                </Link>
                <div className={`nav-dropdown-menu ${activeDropdown === 'accounts' ? 'open' : ''}`}>
                  <Link href="/accounts/classic-noble" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-shield" style={{ color: 'var(--accent-gold)' }}></i> Classic Noble ($50)
                  </Link>
                  <Link href="/accounts/prime-crown" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-crown" style={{ color: 'var(--accent-gold)' }}></i> Prime Crown ($500)
                  </Link>
                  <Link href="/accounts/ecn-elite" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-gem" style={{ color: 'var(--accent-gold)' }}></i> ECN Elite ($5,000)
                  </Link>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', margin: '4px 0' }}></div>
                  <Link href="/accounts" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-table-columns" style={{ color: 'var(--text-secondary)' }}></i> Compare All Accounts
                  </Link>
                </div>
              </li>

              {/* Resources / Platform Dropdown */}
              <li 
                className="nav-dropdown"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                  Resources <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.6rem' }}></i>
                </span>
                <div className={`nav-dropdown-menu ${activeDropdown === 'resources' ? 'open' : ''}`}>
                  <Link href="/resources/economic-calendar" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-calendar-days" style={{ color: 'var(--accent-gold)' }}></i> Economic Calendar
                  </Link>
                  <Link href="/resources/calculator" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-calculator" style={{ color: 'var(--accent-gold)' }}></i> Trading Calculators
                  </Link>
                </div>
              </li>

              <li>
                <Link href="/partnership" onClick={() => setIsMobileMenuOpen(false)}>Partnership</Link>
              </li>

              <li>
                <Link href="/promotions" onClick={() => setIsMobileMenuOpen(false)}>Promotions</Link>
              </li>

              <li>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              </li>

              {/* Action CTA Buttons */}
              <li>
                <a 
                  href="https://trade.magnatefx.com/login/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn" 
                  style={{ background: 'var(--accent-gold)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  Login <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.65rem' }}></i>
                </a>
              </li>
              <li>
                <a 
                  href="https://trade.magnatefx.com/register/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn" 
                  style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', padding: '10px 20px', borderRadius: '6px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  Sign Up <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.65rem' }}></i>
                </a>
              </li>
            </ul>
          </nav>

          <div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </div>
        </div>
      </header>

      {/* Seamless Live Market Ticker */}
      <div className="ticker-wrap">
        {[1, 2].map((trackNum) => (
          <div className="ticker-track" key={trackNum}>
            {Object.values(tickerItems).map((item) => {
              const displayPrice = item.price.toFixed(item.digits);
              const displayChange = `${item.change >= 0 ? '+' : ''}${item.change.toFixed(2)}%`;
              return (
                <div className="ticker-item" key={item.symbol}>
                  <div className={`symbol-icon-mini ${item.type !== 'forex' ? `${item.type}-icon` : ''}`}>
                    {item.type === 'forex' ? (
                      <>
                        <span className="mini-flag">{item.flag1}</span>
                        <span className="mini-flag" style={{ marginLeft: '-5px' }}>{item.flag2}</span>
                      </>
                    ) : item.type === 'gold' ? (
                      <i className="fa-solid fa-coins" style={{ fontSize: '0.65rem' }}></i>
                    ) : item.type === 'oil' ? (
                      <i className="fa-solid fa-droplet" style={{ fontSize: '0.65rem' }}></i>
                    ) : item.type === 'indices' ? (
                      <span>{item.labelTag}</span>
                    ) : item.type === 'crypto' ? (
                      <span>{item.cryptoChar}</span>
                    ) : item.type === 'eth' ? (
                      <i className="fa-brands fa-ethereum" style={{ fontSize: '0.65rem' }}></i>
                    ) : null}
                  </div>
                  <span className="ticker-label">{item.label}</span>
                  <span className="ticker-val">{displayPrice}</span>
                  <span className={`ticker-change ${item.change >= 0 ? 'up' : 'down'}`}>{displayChange}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
