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

  const calculatorOptions = {
    EURUSD: { pipSize: 0.0001, contract: 100000, label: 'EURUSD (Euro / US Dollar)', defaultPrice: 1.0850 },
    GBPUSD: { pipSize: 0.0001, contract: 100000, label: 'GBPUSD (British Pound / US Dollar)', defaultPrice: 1.2850 },
    USDJPY: { pipSize: 0.01, contract: 100000, label: 'USDJPY (US Dollar / Japanese Yen)', defaultPrice: 155.40 },
    AUDUSD: { pipSize: 0.0001, contract: 100000, label: 'AUDUSD (Australian Dollar / US Dollar)', defaultPrice: 0.6550 },
    USDCAD: { pipSize: 0.0001, contract: 100000, label: 'USDCAD (US Dollar / Canadian Dollar)', defaultPrice: 1.3650 },
    USDCHF: { pipSize: 0.0001, contract: 100000, label: 'USDCHF (US Dollar / Swiss Franc)', defaultPrice: 0.8850 },
    NZDUSD: { pipSize: 0.0001, contract: 100000, label: 'NZDUSD (New Zealand Dollar / US Dollar)', defaultPrice: 0.6050 },
    XAUUSD: { pipSize: 0.1, contract: 100, label: 'XAUUSD (Gold vs US Dollar - 100 oz)', defaultPrice: 2450.00 },
    BTCUSD: { pipSize: 1, contract: 1, label: 'BTCUSD (Bitcoin vs US Dollar)', defaultPrice: 65000.00 },
    USOIL: { pipSize: 0.01, contract: 1000, label: 'USOIL (Crude Oil - 1,000 bbl)', defaultPrice: 78.50 }
  };

  const currentAssetConfig = calculatorOptions[calcAsset] || calculatorOptions['EURUSD'];

  const getPipValuePerLot = (symbol) => {
    if (symbol === 'USDJPY') return 1000 / 155.40;
    if (symbol === 'USDCAD') return 10 / 1.365;
    if (symbol === 'USDCHF') return 10 / 0.885;
    if (symbol === 'BTCUSD') return 1.0;
    if (symbol === 'XAUUSD') return 10.0;
    if (symbol === 'USOIL') return 10.0;
    return 10.0;
  };

  const pipValuePerLot = getPipValuePerLot(calcAsset);

  // 1. Margin & Pip Value
  const calculatedContractValue = calcLots * currentAssetConfig.contract * (calcAsset === 'XAUUSD' || calcAsset === 'BTCUSD' || calcAsset === 'USOIL' || calcAsset === 'EURUSD' || calcAsset === 'GBPUSD' || calcAsset === 'AUDUSD' || calcAsset === 'NZDUSD' ? currentAssetConfig.defaultPrice : 1.0);
  const calculatedRequiredMargin = calculatedContractValue / calcLeverage;
  const calculatedPipValue = calcLots * pipValuePerLot;

  // 2. Position Size & Risk
  const calculatedRiskAmount = (riskBalance * riskPct) / 100;
  const rawPositionLots = stopLossPips > 0 && pipValuePerLot > 0
    ? calculatedRiskAmount / (stopLossPips * pipValuePerLot)
    : 0;
  const calculatedPositionLots = rawPositionLots > 0 
    ? (rawPositionLots >= 10 ? rawPositionLots.toFixed(1) : rawPositionLots.toFixed(2)) 
    : '0.00';
  const calculatedUnits = Math.round(rawPositionLots * currentAssetConfig.contract);
  const calculatedMicroLots = (rawPositionLots * 100).toFixed(1);
  const calculatedMiniLots = (rawPositionLots * 10).toFixed(2);

  // 3. Profit / Loss Estimator
  const pipDiff = tradeDirection === 'BUY'
    ? (exitPrice - entryPrice) / currentAssetConfig.pipSize
    : (entryPrice - exitPrice) / currentAssetConfig.pipSize;
  const calculatedProfitLoss = pipDiff * calcLots * pipValuePerLot;

  return (
    <>
      <Header />

      <section style={{ padding: '90px 0 70px 0', background: 'linear-gradient(180deg, #010108 0%, #0A0D1D 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Institutional Suite</span>
          <h1 style={{ fontSize: '3.4rem', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Forex &amp; CFD <span style={{ color: '#38BDF8' }}>Trading Calculators</span>
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Evaluate margin requirements, optimal position sizing, risk exposure, and potential profit/loss in real-time.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0 100px 0', background: '#010108' }}>
        <div className="container">
          
          {/* Tool Switcher Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <button className={`filter-pill ${activeCalcTool === 'margin' ? 'active' : ''}`} onClick={() => setActiveCalcTool('margin')}>Margin Requirement</button>
            <button className={`filter-pill ${activeCalcTool === 'position' ? 'active' : ''}`} onClick={() => setActiveCalcTool('position')}>Position Size &amp; Risk</button>
            <button className={`filter-pill ${activeCalcTool === 'profit' ? 'active' : ''}`} onClick={() => setActiveCalcTool('profit')}>Profit / Loss Estimator</button>
          </div>

          <div className="glass-card tech-card-pulse" style={{ maxWidth: '850px', margin: '0 auto', padding: '40px', borderRadius: '24px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)' }}>
            {activeCalcTool === 'margin' && (
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38BDF8', marginBottom: '20px' }}>Required Margin Calculator</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Trading Instrument</label>
                    <select value={calcAsset} onChange={(e) => setCalcAsset(e.target.value)} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff' }}>
                      {Object.entries(calculatorOptions).map(([key, opt]) => (
                        <option value={key} key={key}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Volume (Standard Lots)</label>
                    <input type="number" step="0.1" value={calcLots} onChange={(e) => setCalcLots(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Account Leverage</label>
                    <select value={calcLeverage} onChange={(e) => setCalcLeverage(parseInt(e.target.value))} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff' }}>
                      <option value={50}>1:50</option>
                      <option value={100}>1:100</option>
                      <option value={200}>1:200</option>
                      <option value={500}>1:500 (Max Leverage)</option>
                    </select>
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.5)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(0,64,233,0.4)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Required Margin Deposit</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace', marginTop: '6px' }}>
                    ${calculatedRequiredMargin.toFixed(2)} USD
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
                    Contract Value: ${calculatedContractValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} &bull; Pip Value: ${calculatedPipValue.toFixed(2)} USD
                  </div>
                </div>
              </div>
            )}

            {activeCalcTool === 'position' && (
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38BDF8', marginBottom: '20px' }}>Position Sizing &amp; Risk Management</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Trading Instrument</label>
                    <select value={calcAsset} onChange={(e) => setCalcAsset(e.target.value)} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff' }}>
                      {Object.entries(calculatorOptions).map(([key, opt]) => (
                        <option value={key} key={key}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Account Balance ($)</label>
                    <input type="number" value={riskBalance} onChange={(e) => setRiskBalance(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Max Risk (%)</label>
                    <input type="number" step="0.5" value={riskPct} onChange={(e) => setRiskPct(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Stop Loss (Pips / Points)</label>
                    <input type="number" value={stopLossPips} onChange={(e) => setStopLossPips(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                  <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Max Risk Amount</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ef5350', fontFamily: 'JetBrains Mono, monospace' }}>${calculatedRiskAmount.toFixed(2)} USD</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{riskPct}% of ${riskBalance.toLocaleString()}</div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(0,64,233,0.4)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Recommended Standard Lots</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace' }}>{calculatedPositionLots} Lots</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{calculatedMicroLots} Micro &bull; {calculatedUnits.toLocaleString()} Units</div>
                  </div>
                </div>

                <p style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                  *Formula: (Account Balance &times; Risk %) &divide; (Stop Loss &times; Pip Value per Standard Lot). Pip Value: ${pipValuePerLot.toFixed(2)} USD.
                </p>
              </div>
            )}

            {activeCalcTool === 'profit' && (
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38BDF8', marginBottom: '20px' }}>Profit / Loss Estimator</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Trading Instrument</label>
                    <select value={calcAsset} onChange={(e) => setCalcAsset(e.target.value)} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff' }}>
                      {Object.entries(calculatorOptions).map(([key, opt]) => (
                        <option value={key} key={key}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Trade Type</label>
                    <select value={tradeDirection} onChange={(e) => setTradeDirection(e.target.value)} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff' }}>
                      <option value="BUY">BUY (Long)</option>
                      <option value="SELL">SELL (Short)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Volume (Lots)</label>
                    <input type="number" step="0.1" value={calcLots} onChange={(e) => setCalcLots(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Entry Price</label>
                    <input type="number" step="0.0001" value={entryPrice} onChange={(e) => setEntryPrice(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px' }}>Exit Price</label>
                    <input type="number" step="0.0001" value={exitPrice} onChange={(e) => setExitPrice(parseFloat(e.target.value) || 0)} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff' }} />
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.5)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(0,64,233,0.4)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Estimated Profit / Loss ({pipDiff.toFixed(1)} Pips)</div>
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
