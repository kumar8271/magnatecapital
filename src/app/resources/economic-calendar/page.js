"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function EconomicCalendarPage() {
  // Active filters (Matching ForexFactory & Kama Capital)
  const [calendarTimeframe, setCalendarTimeframe] = useState('all');
  const [calendarCurrency, setCalendarCurrency] = useState('all');
  const [calendarImpact, setCalendarImpact] = useState('all');
  const [calendarCategory, setCalendarCategory] = useState('all');
  
  const [eventsData, setEventsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEventDetail, setSelectedEventDetail] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch API Stream
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

  // Client-side search and category filtering
  const filteredEvents = eventsData.filter(ev => {
    // Search query match
    const matchesSearch = !searchQuery || 
      ev.event.toLowerCase().includes(searchQuery.toLowerCase()) || 
      ev.country.toLowerCase().includes(searchQuery.toLowerCase());

    // Category match
    const matchesCategory = calendarCategory === 'all' || 
      (ev.eventType && ev.eventType.toLowerCase() === calendarCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ background: '#010108', minHeight: '100vh', color: '#fff' }}>
      <Header />

      {/* Main Economic Calendar Hero & Interactive Suite */}
      <main style={{ padding: '50px 0 100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="forex-tech-bg">
          <div className="tech-grid-pattern"></div>
          <div className="tech-glow-orb blue" style={{ width: '450px', height: '450px', top: '10%', right: '5%', background: 'radial-gradient(circle, rgba(0,64,233,0.2) 0%, transparent 70%)' }}></div>
          <div className="tech-glow-orb blue" style={{ width: '400px', height: '400px', bottom: '10%', left: '5%', background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center" style={{ marginBottom: '35px' }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Institutional Data Stream</span>
            <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '15px', letterSpacing: '-0.02em' }}>Forex <span style={{ color: '#38BDF8' }}>Economic Calendar</span></h1>
            <p className="subtitle" style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Complete coverage of global macroeconomic releases, interest rate decisions, employment changes, inflation reports, and central bank speeches.
            </p>
          </div>

          {/* Full ForexFactory / Kama Capital Control Dashboard */}
          <div className="glass-card tech-card-pulse" style={{ padding: '28px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.95)', border: '1px solid rgba(0, 64, 233, 0.35)', marginBottom: '30px' }}>
            
            {/* Top Toolbar Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1.2fr', gap: '20px', marginBottom: '24px', alignItems: 'center' }}>
              
              {/* Date Range Preset Selector */}
              <div>
                <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Date Window</label>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <button className={`filter-pill ${calendarTimeframe === 'today' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('today')}>Today</button>
                  <button className={`filter-pill ${calendarTimeframe === 'tomorrow' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('tomorrow')}>Tomorrow</button>
                  <button className={`filter-pill ${calendarTimeframe === 'this_week' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('this_week')}>This Week</button>
                  <button className={`filter-pill ${calendarTimeframe === 'all' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('all')}>All Events</button>
                </div>
              </div>

              {/* Expected Impact Checkbox Badges */}
              <div>
                <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Impact Level</label>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <button className={`filter-pill ${calendarImpact === 'all' ? 'active' : ''}`} onClick={() => setCalendarImpact('all')}>All</button>
                  <button className={`filter-pill ${calendarImpact === 'high' ? 'active' : ''}`} onClick={() => setCalendarImpact('high')}>🔴 High</button>
                  <button className={`filter-pill ${calendarImpact === 'medium' ? 'active' : ''}`} onClick={() => setCalendarImpact('medium')}>🟠 Med</button>
                </div>
              </div>

              {/* Event Type / Category Selector */}
              <div>
                <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Event Category</label>
                <select 
                  value={calendarCategory}
                  onChange={(e) => setCalendarCategory(e.target.value)}
                  style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '10px 12px', borderRadius: '8px', fontSize: '0.85rem', outline: 'none' }}
                >
                  <option value="all">📂 All Event Categories</option>
                  <option value="Inflation">📊 Inflation &amp; CPI</option>
                  <option value="Employment">👥 Employment &amp; Labor</option>
                  <option value="Central Bank">🏛️ Central Bank Rates</option>
                  <option value="Retail Sales">🛒 Retail &amp; Growth</option>
                  <option value="Speeches">🎙️ Central Bank Speeches</option>
                </select>
              </div>

              {/* Search Box */}
              <div>
                <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Search Events</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    placeholder="Search NFP, CPI, Rates..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '10px 12px 10px 34px', borderRadius: '8px', fontSize: '0.85rem', outline: 'none' }}
                  />
                  <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '0.8rem' }}></i>
                </div>
              </div>

            </div>

            {/* Currency Filter Bar Pills */}
            <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Currencies:</span>
              {[
                { code: 'all', label: '🌐 All' },
                { code: 'USD', label: '🇺🇸 USD' },
                { code: 'EUR', label: '🇪🇺 EUR' },
                { code: 'GBP', label: '🇬🇧 GBP' },
                { code: 'JPY', label: '🇯🇵 JPY' },
                { code: 'AUD', label: '🇦🇺 AUD' },
                { code: 'CAD', label: '🇨🇦 CAD' },
              ].map(c => (
                <button 
                  key={c.code}
                  className={`filter-pill ${calendarCurrency === c.code ? 'active' : ''}`}
                  onClick={() => setCalendarCurrency(c.code)}
                  style={{ fontSize: '0.8rem', padding: '6px 14px' }}
                >
                  {c.label}
                </button>
              ))}
            </div>

          </div>

          {/* Main Events Table */}
          <div className="economic-calendar-container" style={{ background: 'rgba(10, 13, 29, 0.9)', border: '1px solid rgba(0, 64, 233, 0.35)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.7)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="calendar-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(0, 0, 0, 0.6)', borderBottom: '1px solid rgba(0, 64, 233, 0.3)' }}>
                    <th style={{ padding: '18px 24px', fontSize: '0.78rem', color: '#38BDF8', textTransform: 'uppercase' }}>Date &amp; Time</th>
                    <th style={{ padding: '18px 24px', fontSize: '0.78rem', color: '#38BDF8', textTransform: 'uppercase' }}>Cur</th>
                    <th style={{ padding: '18px 24px', fontSize: '0.78rem', color: '#38BDF8', textTransform: 'uppercase' }}>Impact</th>
                    <th style={{ padding: '18px 24px', fontSize: '0.78rem', color: '#38BDF8', textTransform: 'uppercase' }}>Economic Release</th>
                    <th style={{ padding: '18px 24px', fontSize: '0.78rem', color: '#38BDF8', textTransform: 'uppercase', textAlign: 'center' }}>Detail 📁</th>
                    <th style={{ padding: '18px 24px', fontSize: '0.78rem', color: '#38BDF8', textTransform: 'uppercase', textAlign: 'right' }}>Actual</th>
                    <th style={{ padding: '18px 24px', fontSize: '0.78rem', color: '#38BDF8', textTransform: 'uppercase', textAlign: 'right' }}>Forecast</th>
                    <th style={{ padding: '18px 24px', fontSize: '0.78rem', color: '#38BDF8', textTransform: 'uppercase', textAlign: 'right' }}>Previous</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '50px', color: 'var(--text-muted)' }}>
                        <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '1.8rem', color: '#38BDF8', marginBottom: '12px', display: 'block' }}></i>
                        Fetching Live Interbank Economic Stream...
                      </td>
                    </tr>
                  ) : filteredEvents.length === 0 ? (
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '50px', color: 'var(--text-muted)', fontSize: '1rem' }}>
                        No economic releases matching the active filters.
                      </td>
                    </tr>
                  ) : (
                    filteredEvents.map((ev) => (
                      <tr key={ev.id} className="event-row" onClick={() => setSelectedEventDetail(ev)} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td style={{ padding: '20px 24px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          <span style={{ display: 'block', fontWeight: 700, color: '#fff' }}>{ev.date}</span>
                          <span>{ev.time}</span>
                        </td>
                        <td style={{ padding: '20px 24px' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                            <span>{ev.flag}</span>
                            <span>{ev.country}</span>
                          </span>
                        </td>
                        <td style={{ padding: '20px 24px' }}>
                          <span className={`impact-badge ${ev.impact}`}>
                            {ev.impact === 'high' ? '🔴 High' : ev.impact === 'medium' ? '🟠 Med' : '🟡 Low'}
                          </span>
                        </td>
                        <td style={{ padding: '20px 24px', fontWeight: 700, color: '#fff', fontSize: '0.98rem' }}>
                          {ev.event}
                          <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 400, marginTop: '4px' }}>
                            Frequency: {ev.frequency || 'Monthly'} • Category: {ev.eventType || 'Economic Data'}
                          </span>
                        </td>
                        <td style={{ padding: '20px 24px', textAlign: 'center' }}>
                          <button style={{ background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.4)', color: '#38BDF8', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}>
                            <i className="fa-solid fa-folder-open"></i>
                          </button>
                        </td>
                        <td className={ev.isBetter === true ? 'val-better' : ev.isBetter === false ? 'val-worse' : 'val-neutral'} style={{ padding: '20px 24px', fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', textAlign: 'right' }}>
                          {ev.actual}
                        </td>
                        <td style={{ padding: '20px 24px', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)', textAlign: 'right' }}>{ev.forecast}</td>
                        <td style={{ padding: '20px 24px', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)', textAlign: 'right' }}>{ev.previous}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal Event Detail Drawer */}
          {selectedEventDetail && (
            <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <div className="glass-card tech-card-pulse" style={{ maxWidth: '600px', width: '100%', borderRadius: '24px', padding: '35px', background: '#0A0D1D', border: '1px solid #0040E9', boxShadow: '0 0 40px rgba(0,64,233,0.4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '2rem' }}>{selectedEventDetail.flag}</span>
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>{selectedEventDetail.event}</h3>
                      <span className={`impact-badge ${selectedEventDetail.impact}`} style={{ marginTop: '4px' }}>
                        {selectedEventDetail.impact === 'high' ? '🔴 High Impact' : '🟠 Medium Impact'}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => setSelectedEventDetail(null)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.3rem', cursor: 'pointer' }}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '14px', padding: '20px', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', marginBottom: '8px' }}>Macroeconomic Analysis:</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.6' }}>{selectedEventDetail.description}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', textAlign: 'center', marginBottom: '24px', background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '14px' }}>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Actual</div>
                    <div className={selectedEventDetail.isBetter ? 'val-better' : 'val-neutral'} style={{ fontSize: '1.2rem', fontFamily: 'JetBrains Mono, monospace' }}>{selectedEventDetail.actual}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Forecast</div>
                    <div style={{ fontSize: '1.2rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{selectedEventDetail.forecast}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Previous</div>
                    <div style={{ fontSize: '1.2rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{selectedEventDetail.previous}</div>
                  </div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', marginBottom: '10px' }}>Affected Currency Pairs:</div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedEventDetail.affectedPairs?.map(p => (
                      <span key={p} style={{ padding: '6px 14px', borderRadius: '8px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.35)', color: '#fff', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '14px', borderRadius: '8px' }}>
                  Trade This Release Live on MT5 →
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
