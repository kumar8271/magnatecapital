"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EconomicCalendarPage() {
  const [calendarImpact, setCalendarImpact] = useState('all');
  const [calendarCurrency, setCalendarCurrency] = useState('all');
  const [calendarTimeframe, setCalendarTimeframe] = useState('today');
  const [selectedEventDetail, setSelectedEventDetail] = useState(null);
  const [eventsData, setEventsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Search filter query
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch live API data stream
  useEffect(() => {
    async function fetchCalendarData() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/calendar?timeframe=${calendarTimeframe}&currency=${calendarCurrency}&impact=${calendarImpact}`);
        const data = await res.json();
        if (data && data.events) {
          setEventsData(data.events);
        }
      } catch (err) {
        console.error('Error loading calendar API:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCalendarData();
  }, [calendarTimeframe, calendarCurrency, calendarImpact]);

  const filteredEvents = eventsData.filter(ev => {
    if (!searchQuery) return true;
    return ev.event.toLowerCase().includes(searchQuery.toLowerCase()) || 
           ev.country.toLowerCase().includes(searchQuery.toLowerCase());
  });

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
              <li><Link href="/#calculator">Calculators</Link></li>
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
          <div className="text-center" style={{ marginBottom: '35px' }}>
            <span className="section-label">Institutional Data Feed</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '15px' }}>Forex Economic Calendar</h1>
            <p className="subtitle" style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Real-time macroeconomic releases, central bank policy announcements, NFP, CPI inflation, and interest rate decisions.
            </p>
          </div>

          {/* ForexFactory & Myfxbook Filter Dashboard Panel */}
          <div className="glass-card tech-card-pulse" style={{ padding: '24px', borderRadius: '16px', background: 'rgba(22, 11, 40, 0.95)', border: '1px solid var(--border-light)', marginBottom: '30px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '20px', alignItems: 'center' }}>
              
              {/* Date Range Navigation */}
              <div>
                <label style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Date Window</label>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <button className={`filter-pill ${calendarTimeframe === 'today' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('today')}>Today</button>
                  <button className={`filter-pill ${calendarTimeframe === 'tomorrow' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('tomorrow')}>Tomorrow</button>
                  <button className={`filter-pill ${calendarTimeframe === 'this_week' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('this_week')}>This Week</button>
                  <button className={`filter-pill ${calendarTimeframe === 'all' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('all')}>All Events</button>
                </div>
              </div>

              {/* Currency Selector */}
              <div>
                <label style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Currency Filter</label>
                <select 
                  value={calendarCurrency} 
                  onChange={(e) => setCalendarCurrency(e.target.value)}
                  style={{ width: '100%', background: '#160B28', border: '1px solid var(--border-light)', color: '#fff', padding: '8px 12px', borderRadius: '8px', fontSize: '0.85rem', outline: 'none' }}
                >
                  <option value="all">🌐 All Currencies</option>
                  <option value="USD">🇺🇸 USD - US Dollar</option>
                  <option value="EUR">🇪🇺 EUR - Euro</option>
                  <option value="GBP">🇬🇧 GBP - British Pound</option>
                  <option value="JPY">🇯🇵 JPY - Japanese Yen</option>
                  <option value="AUD">🇦🇺 AUD - Australian Dollar</option>
                  <option value="CAD">🇨🇦 CAD - Canadian Dollar</option>
                </select>
              </div>

              {/* Search Query Input */}
              <div>
                <label style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Search Events</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    placeholder="Search NFP, CPI, Rates..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: '100%', background: '#160B28', border: '1px solid var(--border-light)', color: '#fff', padding: '8px 12px 8px 34px', borderRadius: '8px', fontSize: '0.85rem', outline: 'none' }}
                  />
                  <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '0.8rem' }}></i>
                </div>
              </div>

            </div>
          </div>

          {/* Economic Calendar Main Table (ForexFactory & Kama Capital Standard) */}
          <div className="economic-calendar-container" style={{ background: 'rgba(35, 21, 60, 0.75)', border: '1px solid var(--border-light)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="calendar-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid var(--border-light)' }}>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Date & Time</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cur</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Impact</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Event</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', textAlign: 'center' }}>Detail 📁</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Actual</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Forecast</th>
                    <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Previous</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                        <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '10px', display: 'block' }}></i>
                        Loading Live Interbank Data Stream...
                      </td>
                    </tr>
                  ) : filteredEvents.length === 0 ? (
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                        No economic releases matching the active filters.
                      </td>
                    </tr>
                  ) : (
                    filteredEvents.map((ev) => (
                      <tr key={ev.id} className="event-row" onClick={() => setSelectedEventDetail(ev)} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td style={{ padding: '18px 20px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                          <span style={{ display: 'block', fontWeight: 700, color: '#fff' }}>{ev.date}</span>
                          <span>{ev.time}</span>
                        </td>
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
                        <td style={{ padding: '18px 20px', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                          {ev.event}
                          <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 400, marginTop: '3px' }}>
                            Category: {ev.eventType}
                          </span>
                        </td>
                        <td style={{ padding: '18px 20px', textAlign: 'center' }}>
                          <button style={{ background: 'rgba(212, 168, 75, 0.12)', border: '1px solid rgba(212, 168, 75, 0.3)', color: 'var(--accent-gold)', padding: '4px 8px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem' }}>
                            <i className="fa-solid fa-folder-open"></i>
                          </button>
                        </td>
                        <td className={ev.isBetter === true ? 'val-better' : ev.isBetter === false ? 'val-worse' : 'val-neutral'} style={{ padding: '18px 20px', fontFamily: 'JetBrains Mono, monospace' }}>
                          {ev.actual}
                        </td>
                        <td style={{ padding: '18px 20px', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{ev.forecast}</td>
                        <td style={{ padding: '18px 20px', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{ev.previous}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal event drawer */}
          {selectedEventDetail && (
            <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <div className="glass-card tech-card-pulse" style={{ maxWidth: '600px', width: '100%', borderRadius: '20px', padding: '32px', background: '#160B28', border: '1px solid var(--accent-gold)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.8rem' }}>{selectedEventDetail.flag}</span>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>{selectedEventDetail.event}</h3>
                      <span className={`impact-badge ${selectedEventDetail.impact}`} style={{ marginTop: '4px' }}>
                        {selectedEventDetail.impact === 'high' ? '🔴 High Impact' : '🟠 Medium Impact'}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => setSelectedEventDetail(null)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '18px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>Macro Analysis & Impact:</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>{selectedEventDetail.description}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', textAlign: 'center', marginBottom: '20px', background: 'rgba(0,0,0,0.25)', padding: '14px', borderRadius: '12px' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Actual</div>
                    <div className={selectedEventDetail.isBetter ? 'val-better' : 'val-neutral'} style={{ fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace' }}>{selectedEventDetail.actual}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Forecast</div>
                    <div style={{ fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{selectedEventDetail.forecast}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Previous</div>
                    <div style={{ fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{selectedEventDetail.previous}</div>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '8px' }}>Affected Market Instruments:</div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedEventDetail.affectedPairs?.map(p => (
                      <span key={p} style={{ padding: '5px 12px', borderRadius: '6px', background: 'rgba(212, 168, 75, 0.12)', border: '1px solid rgba(212, 168, 75, 0.3)', color: '#fff', fontSize: '0.78rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '12px' }}>
                  Trade This Release Live on MT5 →
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
