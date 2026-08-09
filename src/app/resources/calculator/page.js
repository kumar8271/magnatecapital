'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CalculatorPage() {
  const [activeCalcTool, setActiveCalcTool] = useState('margin'); // 'margin', 'position', 'profit'
  const [calcAsset, setCalcAsset] = useState('EURUSD');
  const [calcLots, setCalcLots] = useState(1.0);
  const [calcLeverage, setCalcLeverage] = useState(500);

  // Risk Calculator State
  const [riskBalance, setRiskBalance] = useState(10000);
  const [riskPct, setRiskPct] = useState(1.0);
  const [stopLossPips, setStopLossPips] = useState(30);

  // Profit / Loss Estimator State
  const [tradeDirection, setTradeDirection] = useState('BUY');
  const [entryPrice, setEntryPrice] = useState(1.0850);
  const [exitPrice, setExitPrice] = useState(1.0900);

  const activeAssetPrice = 1.0850; // Reference price

  const calculatedRequiredMargin = (calcLots * 100000 * activeAssetPrice) / calcLeverage;
  const calculatedRiskAmount = (riskBalance * (riskPct / 100));
  const calculatedPositionLots = stopLossPips > 0 ? (calculatedRiskAmount / (stopLossPips * 10)) : 0;

  const pipDiff = tradeDirection === 'BUY'
    ? (exitPrice - entryPrice) * 10000
    : (entryPrice - exitPrice) * 10000;
  const calculatedProfitLoss = pipDiff * (calcLots * 10);

  return (
    <>
      <Header />

      <section style={{ padding: '80px 0 60px 0', background: 'linear-gradient(180deg, #120922 0%, #1A0F2E 100%)' }}>
        <div className="container text-center">
          <span className="section-label">Institutional Suite</span>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Forex & CFD Trading Calculators
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Evaluate margin requirements, optimal position sizing, risk exposure, and potential profit/loss in real-time.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 90px 0', background: '#160B28' }}>
        <div className="container">
          
          {/* Tool Switcher Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <button className={`filter-pill ${activeCalcTool === 'margin' ? 'active' : ''}`} onClick={() => setActiveCalcTool('margin')}>Margin Requirement</button>
            <button className={`filter-pill ${activeCalcTool === 'position' ? 'active' : ''}`} onClick={() => setActiveCalcTool('position')}>Position Size & Risk</button>
            <button className={`filter-pill ${activeCalcTool === 'profit' ? 'active' : ''}`} onClick={() => setActiveCalcTool('profit')}>Profit / Loss Estimator</button>
          </div>

          <div className="glass-card tech-card-pulse" style={{ maxWidth: '850px', margin: '0 auto', padding: '40px', borderRadius: '24px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
            {activeCalcTool === 'margin' && (
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '20px' }}>Required Margin Calculator</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Currency Pair</label>
                    <select value={calcAsset} onChange={(e) => setCalcAsset(e.target.value)} style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', color: '#fff' }}>
                      <option value="EURUSD">EURUSD</option>
                      <option value="GBPUSD">GBPUSD</option>
                      <option value="USDJPY">USDJPY</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Volume (Standard Lots)</label>
                    <input type="number" step="0.1" value={calcLots} onChange={(e) => setCalcLots(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Account Leverage</label>
                    <select value={calcLeverage} onChange={(e) => setCalcLeverage(parseInt(e.target.value))} style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', color: '#fff' }}>
                      <option value={100}>1:100</option>
                      <option value={200}>1:200</option>
                      <option value={500}>1:500</option>
                    </select>
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(212,168,75,0.3)', textCenter: 'center' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Required Margin Deposit</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace', marginTop: '6px' }}>
                    ${calculatedRequiredMargin.toFixed(2)} USD
                  </div>
                </div>
              </div>
            )}

            {activeCalcTool === 'position' && (
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '20px' }}>Position Sizing & Risk Management</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Account Balance ($)</label>
                    <input type="number" value={riskBalance} onChange={(e) => setRiskBalance(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Max Risk (% per trade)</label>
                    <input type="number" step="0.5" value={riskPct} onChange={(e) => setRiskPct(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Stop Loss (Pips)</label>
                    <input type="number" value={stopLossPips} onChange={(e) => setStopLossPips(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '16px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Max Risk Amount</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ef5350', fontFamily: 'JetBrains Mono, monospace' }}>${calculatedRiskAmount.toFixed(2)}</div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '16px', border: '1px solid var(--accent-gold)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Recommended Position Size</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace' }}>{calculatedPositionLots.toFixed(2)} Lots</div>
                  </div>
                </div>
              </div>
            )}

            {activeCalcTool === 'profit' && (
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '20px' }}>Profit / Loss Estimator</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Trade Type</label>
                    <select value={tradeDirection} onChange={(e) => setTradeDirection(e.target.value)} style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', color: '#fff' }}>
                      <option value="BUY">BUY (Long)</option>
                      <option value="SELL">SELL (Short)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Entry Price</label>
                    <input type="number" step="0.0001" value={entryPrice} onChange={(e) => setEntryPrice(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Exit Price</label>
                    <input type="number" step="0.0001" value={exitPrice} onChange={(e) => setExitPrice(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(212,168,75,0.3)', textCenter: 'center' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Estimated Profit / Loss</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: calculatedProfitLoss >= 0 ? '#2ecc71' : '#ef5350', fontFamily: 'JetBrains Mono, monospace', marginTop: '6px' }}>
                    {calculatedProfitLoss >= 0 ? '+' : ''}${calculatedProfitLoss.toFixed(2)} USD
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
