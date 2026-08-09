"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EconomicCalendarPage() {
  const [calendarImpact, setCalendarImpact] = useState('all');
  const [calendarCurrency, setCalendarCurrency] = useState('all');
  const [calendarTimeframe, setCalendarTimeframe] = useState('today');
  const [selectedEventDetail, setSelectedEventDetail] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const economicEvents = [
    {
      id: 1,
      time: '14:30 EST',
      date: 'today',
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      event: 'US Non-Farm Payrolls (NFP)',
      actual: '254K',
      forecast: '180K',
      previous: '159K',
      isBetter: true,
      impactInfo: 'Measures net change in employment. Higher than forecast signals US economic strength and is bullish for USD.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 2,
      time: '14:30 EST',
      date: 'today',
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      event: 'US Unemployment Rate',
      actual: '4.1%',
      forecast: '4.2%',
      previous: '4.2%',
      isBetter: true,
      impactInfo: 'Measures percentage of total work force that is unemployed. Lower than forecast is positive for USD.',
      affectedPairs: ['EURUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 3,
      time: '15:45 EST',
      date: 'today',
      country: 'EUR',
      flag: '🇪🇺',
      impact: 'high',
      event: 'ECB Interest Rate Decision',
      actual: '3.40%',
      forecast: '3.40%',
      previous: '3.65%',
      isBetter: null,
      impactInfo: 'Key interest rate set by the European Central Bank. Rate hikes boost EUR attraction.',
      affectedPairs: ['EURUSD', 'EURGBP', 'EURJPY']
    },
    {
      id: 4,
      time: '16:00 EST',
      date: 'today',
      country: 'GBP',
      flag: '🇬🇧',
      impact: 'medium',
      event: 'UK Retail Sales (MoM)',
      actual: '0.3%',
      forecast: '0.1%',
      previous: '-0.2%',
      isBetter: true,
      impactInfo: 'Primary gauge of consumer spending in the UK economy.',
      affectedPairs: ['GBPUSD', 'EURGBP', 'GBPJPY']
    },
    {
      id: 5,
      time: '18:00 EST',
      date: 'today',
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      event: 'US FOMC Economic Projections & Rate Statement',
      actual: '5.00%',
      forecast: '5.00%',
      previous: '5.25%',
      isBetter: null,
      impactInfo: 'Detailed monetary policy outlook from Federal Reserve governors.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'XAUUSD', 'SPX500']
    },
    {
      id: 6,
      time: '08:30 EST',
      date: 'tomorrow',
      country: 'JPY',
      flag: '🇯🇵',
      impact: 'medium',
      event: 'BOJ Core CPI (YoY)',
      actual: '2.3%',
      forecast: '2.1%',
      previous: '2.0%',
      isBetter: true,
      impactInfo: 'Bank of Japan preferred inflation measure.',
      affectedPairs: ['USDJPY', 'EURJPY', 'GBPJPY']
    },
    {
      id: 7,
      time: '10:00 EST',
      date: 'tomorrow',
      country: 'AUD',
      flag: '🇦🇺',
      impact: 'high',
      event: 'AU Employment Change',
      actual: '64.1K',
      forecast: '25.0K',
      previous: '47.5K',
      isBetter: true,
      impactInfo: 'Key Australian labor market data release.',
      affectedPairs: ['AUDUSD', 'EURAUD']
    },
    {
      id: 8,
      time: '12:30 EST',
      date: 'tomorrow',
      country: 'CAD',
      flag: '🇨🇦',
      impact: 'medium',
      event: 'CA Building Permits (MoM)',
      actual: '-1.5%',
      forecast: '0.8%',
      previous: '2.2%',
      isBetter: false,
      impactInfo: 'Leading indicator of Canadian housing market health.',
      affectedPairs: ['USDCAD', 'EURCAD']
    }
  ];

  return (
    <div style={{ background: '#1A0F2E', minHeight: '100vh', color: '#fff' }}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-item">
            <i className="fa-solid fa-envelope"></i> <span>support@magnatecapital.com</span>
          </div>
          <div className="top-bar-socials">
            <a href="https://www.instagram.com/magnatecapital/" target="_blank" rel="noreferrer" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/MagnateCapital" target="_blank" rel="noreferrer" title="X (Twitter)" style={{ display: 'inline-flex', alignItems: 'center' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="https://www.facebook.com/profile.php?id=61577696182180" target="_blank" rel="noreferrer" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/magnate-capital-320425371/" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://t.me/magnatecapital" target="_blank" rel="noreferrer" title="Telegram"><i className="fa-brands fa-telegram"></i></a>
            <a href="https://www.youtube.com/@MagnateCapital" target="_blank" rel="noreferrer" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Header / Navigation */}
      <header>
        <div className="container header-container">
          <div className="logo-area" style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/"><img src="/logo.png" alt="Magnate Capital" style={{ height: '40px', width: 'auto', display: 'block' }} /></Link>
          </div>
          <nav className={isMobileMenuOpen ? 'active' : ''}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#live-rates">Products</Link></li>
              <li><Link href="/resources/economic-calendar" style={{ color: 'var(--accent-gold)' }}>Economic Calendar</Link></li>
              <li><Link href="/#offers">Accounts</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
              <li>
                <a href="https://trade.magnatefx.com/login/" target="_blank" rel="noreferrer" className="btn" style={{ background: 'var(--accent-gold)', color: '#fff', padding: '8px 16px', borderRadius: '6px', fontSize: '0.85rem' }}>Login</a>
              </li>
              <li>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', padding: '8px 16px', borderRadius: '6px', fontSize: '0.85rem' }}>Open Live Account</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Economic Calendar Hero & Tool */}
      <main style={{ padding: '60px 0 100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="forex-tech-bg">
          <div className="tech-grid-pattern"></div>
          <div className="tech-glow-orb gold" style={{ width: '450px', height: '450px', top: '10%', right: '5%' }}></div>
          <div className="tech-glow-orb purple" style={{ width: '400px', height: '400px', bottom: '10%', left: '5%' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="section-label">Real-Time Market Intelligence</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '15px' }}>Forex Economic Calendar</h1>
            <p className="subtitle" style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Track high-impact macroeconomic events, central bank rate decisions, non-farm payrolls, and inflation reports with real-time interbank updates.
            </p>
          </div>

          {/* Calendar Widget Container */}
          <div className="economic-calendar-container" style={{ background: 'rgba(35, 21, 60, 0.75)', border: '1px solid var(--border-light)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
            {/* Filter Controls Bar */}
            <div className="calendar-filter-bar" style={{ padding: '20px 24px', background: 'rgba(22, 11, 40, 0.95)', borderBottom: '1px solid var(--border-light)', display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="filter-group" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Time:</span>
                <button className={`filter-pill ${calendarTimeframe === 'today' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('today')}>Today</button>
                <button className={`filter-pill ${calendarTimeframe === 'tomorrow' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('tomorrow')}>Tomorrow</button>
                <button className={`filter-pill ${calendarTimeframe === 'all' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('all')}>All Week</button>
              </div>

              <div className="filter-group" style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Currency:</span>
                {['all', 'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'].map((curr) => (
                  <button key={curr} className={`filter-pill ${calendarCurrency === curr ? 'active' : ''}`} onClick={() => setCalendarCurrency(curr)}>
                    {curr === 'all' ? 'All' : curr}
                  </button>
                ))}
              </div>

              <div className="filter-group" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Impact:</span>
                <button className={`filter-pill ${calendarImpact === 'all' ? 'active' : ''}`} onClick={() => setCalendarImpact('all')}>All Impact</button>
                <button className={`filter-pill ${calendarImpact === 'high' ? 'active' : ''}`} onClick={() => setCalendarImpact('high')}>🔴 High</button>
                <button className={`filter-pill ${calendarImpact === 'medium' ? 'active' : ''}`} onClick={() => setCalendarImpact('medium')}>🟠 Medium</button>
              </div>
            </div>

            {/* Economic Events Table */}
            <div style={{ overflowX: 'auto' }}>
              <table className="calendar-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid var(--border-light)' }}>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Time</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cur</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Impact</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Event</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Actual</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Forecast</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Previous</th>
                  </tr>
                </thead>
                <tbody>
                  {economicEvents
                    .filter(ev => calendarTimeframe === 'all' || ev.date === calendarTimeframe)
                    .filter(ev => calendarCurrency === 'all' || ev.country === calendarCurrency)
                    .filter(ev => calendarImpact === 'all' || ev.impact === calendarImpact)
                    .map((ev) => (
                      <tr key={ev.id} className="event-row" onClick={() => setSelectedEventDetail(ev)} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td style={{ padding: '18px 20px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{ev.time}</td>
                        <td style={{ padding: '18px 20px' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#fff' }}>
                            <span>{ev.flag}</span>
                            <span>{ev.country}</span>
                          </span>
                        </td>
                        <td style={{ padding: '18px 20px' }}>
                          <span className={`impact-badge ${ev.impact}`}>
                            {ev.impact === 'high' ? '🔴 High' : ev.impact === 'medium' ? '🟠 Med' : '🟡 Low'}
                          </span>
                        </td>
                        <td style={{ padding: '18px 20px', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{ev.event}</td>
                        <td className={ev.isBetter === true ? 'val-better' : ev.isBetter === false ? 'val-worse' : 'val-neutral'} style={{ padding: '18px 20px', fontFamily: 'JetBrains Mono, monospace' }}>
                          {ev.actual}
                        </td>
                        <td style={{ padding: '18px 20px', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{ev.forecast}</td>
                        <td style={{ padding: '18px 20px', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{ev.previous}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal event drawer */}
          {selectedEventDetail && (
            <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <div className="glass-card tech-card-pulse" style={{ maxWidth: '550px', width: '100%', borderRadius: '20px', padding: '30px', background: '#160B28', border: '1px solid var(--accent-gold)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>{selectedEventDetail.flag}</span>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>{selectedEventDetail.event}</h3>
                      <span className={`impact-badge ${selectedEventDetail.impact}`} style={{ marginTop: '4px' }}>
                        {selectedEventDetail.impact === 'high' ? '🔴 High Impact' : '🟠 Medium Impact'}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => setSelectedEventDetail(null)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{selectedEventDetail.impactInfo}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', textAlign: 'center', marginBottom: '20px', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '10px' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Actual</div>
                    <div className={selectedEventDetail.isBetter ? 'val-better' : 'val-neutral'} style={{ fontSize: '1rem', fontFamily: 'JetBrains Mono, monospace' }}>{selectedEventDetail.actual}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Forecast</div>
                    <div style={{ fontSize: '1rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{selectedEventDetail.forecast}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Previous</div>
                    <div style={{ fontSize: '1rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{selectedEventDetail.previous}</div>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '8px' }}>Affected Market Instruments:</div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedEventDetail.affectedPairs.map(p => (
                      <span key={p} style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(212, 168, 75, 0.12)', border: '1px solid rgba(212, 168, 75, 0.3)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                  Trade This Release Live →
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: '#160B28', padding: '60px 0 30px 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="footer-bottom text-center">
            <p>&copy; 2026 Magnate Capital. All rights reserved. Registered under license regulations.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
