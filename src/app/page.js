'use client';

import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  // --- STATE MANAGEMENT ---
  
  // 1. Ticker baseline state
  const [tickerItems, setTickerItems] = useState({
    eurusd: { symbol: 'EURUSD', label: 'EURUSD', price: 1.0949, change: 0.01, isUp: true, digits: 4, type: 'forex', flag1: '🇪🇺', flag2: '🇺🇸' },
    gbpusd: { symbol: 'GBPUSD', label: 'GBPUSD', price: 1.2721, change: 0.12, isUp: true, digits: 4, type: 'forex', flag1: '🇬🇧', flag2: '🇺🇸' },
    xauusd: { symbol: 'XAUUSD', label: 'GOLD', price: 2023.55, change: -0.02, isUp: false, digits: 2, type: 'gold' },
    btcusd: { symbol: 'BTCUSD', label: 'BTCUSD', price: 65038.73, change: 0.39, isUp: true, digits: 2, type: 'crypto', cryptoChar: '₿' },
    usoil: { symbol: 'USOIL', label: 'USOIL', price: 74.17, change: -0.04, isUp: false, digits: 2, type: 'oil' },
    spx500: { symbol: 'SPX500', label: 'SPX500', price: 4848.53, change: -0.03, isUp: false, digits: 2, type: 'indices', labelTag: '500' },
    eurjpy: { symbol: 'EURJPY', label: 'EURJPY', price: 182.249, change: -0.18, isUp: false, digits: 2, type: 'forex', flag1: '🇪🇺', flag2: '🇯🇵' },
    usdjpy: { symbol: 'USDJPY', label: 'USDJPY', price: 157.86, change: -0.42, isUp: false, digits: 2, type: 'forex', flag1: '🇺🇸', flag2: '🇯🇵' },
    ethusd: { symbol: 'ETHUSD', label: 'ETHUSD', price: 1921.03, change: 0.73, isUp: true, digits: 2, type: 'eth' },
    eurnzd: { symbol: 'EURNZD', label: 'EURNZD', price: 1.961, change: -0.10, isUp: false, digits: 3, type: 'forex', flag1: '🇪🇺', flag2: '🇳🇿' },
    xagusd: { symbol: 'XAGUSD', label: 'SILVER', price: 63.53, change: 3.18, isUp: true, digits: 2, type: 'silver' }
  });

  // Rates Table Tab Data
  const [ratesData, setRatesData] = useState({
    hot: ['XAUUSD', 'EURJPY', 'BTCUSD', 'USOUSD', 'NASUSD', 'USDJPY', 'XAGUSD', 'ETHUSD', 'BNBUSD', 'EURNZD'],
    profit: ['XAGUSD', 'XAUUSD', 'BNBUSD', 'NASUSD'],
    turnover: ['BTCUSD', 'ETHUSD', 'XAUUSD']
  });

  // Full item dictionary for the rates table
  const [ratesItems, setRatesItems] = useState({
    XAUUSD: { symbol: 'XAUUSD', name: 'Gold', buy: 4343.80, spread: 24, change: 2.42, type: 'gold', spark: [50, 48, 45, 40, 38, 30, 28, 25, 20] },
    EURJPY: { symbol: 'EURJPY', name: 'Euro / Yen', buy: 182.249, spread: 65, change: -0.18, type: 'forex', flag1: '🇪🇺', flag2: '🇯🇵', spark: [30, 35, 32, 40, 42, 45, 44, 48, 50] },
    BTCUSD: { symbol: 'BTCUSD', name: 'Bitcoin', buy: 65047.98, spread: 19, change: 0.57, type: 'crypto', cryptoChar: '₿', spark: [40, 38, 39, 37, 36, 35, 36, 34, 33] },
    USOUSD: { symbol: 'USOUSD', name: 'Crude Oil', buy: 77.23, spread: 26, change: -1.60, type: 'oil', spark: [20, 22, 25, 30, 28, 35, 38, 40, 42] },
    NASUSD: { symbol: 'NASUSD', name: 'Nasdaq 100', buy: 29726.88, spread: 22, change: 1.09, type: 'indices', label: '100', spark: [60, 58, 55, 52, 50, 48, 45, 42, 40] },
    USDJPY: { symbol: 'USDJPY', name: 'US Dollar / Yen', buy: 157.86, spread: 50, change: -0.42, type: 'forex', flag1: '🇺🇸', flag2: '🇯🇵', spark: [35, 38, 40, 42, 43, 44, 45, 46, 48] },
    XAGUSD: { symbol: 'XAGUSD', name: 'Silver', buy: 63.53, spread: 53, change: 3.18, type: 'silver', spark: [50, 48, 46, 42, 38, 35, 30, 28, 25] },
    ETHUSD: { symbol: 'ETHUSD', name: 'Ethereum', buy: 1921.03, spread: 9, change: 0.73, type: 'eth', spark: [42, 40, 41, 39, 43, 42, 44, 45, 46] },
    BNBUSD: { symbol: 'BNBUSD', name: 'Binance Coin', buy: 604.06, spread: 22, change: 2.18, type: 'bnb', spark: [50, 48, 45, 43, 40, 38, 35, 32, 30] },
    EURNZD: { symbol: 'EURNZD', name: 'Euro / NZD', buy: 1.961, spread: 65, change: -0.10, type: 'forex', flag1: '🇪🇺', flag2: '🇳🇿', spark: [30, 32, 35, 38, 40, 42, 43, 45, 48] }
  });

  // 2. Market Watch - Forex Pairs State (Matching Kama Capital feed)
  const [forexPairs, setForexPairs] = useState([
    { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: 1.15586, high: 1.15809, low: 1.15166, change: 0.30, flag1: '🇪🇺', flag2: '🇺🇸', digits: 5 },
    { symbol: 'GBP/USD', name: 'British Pound / US Dollar', price: 1.34929, high: 1.35091, low: 1.34344, change: 0.29, flag1: '🇬🇧', flag2: '🇺🇸', digits: 5 },
    { symbol: 'AUD/USD', name: 'Australian Dollar / US Dollar', price: 0.70669, high: 0.70778, low: 0.70220, change: 0.50, flag1: '🇦🇺', flag2: '🇺🇸', digits: 5 },
    { symbol: 'NZD/USD', name: 'New Zealand Dollar / US Dollar', price: 0.58939, high: 0.59062, low: 0.58620, change: 0.42, flag1: '🇳🇿', flag2: '🇺🇸', digits: 5 },
    { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', price: 157.803, high: 158.572, low: 156.664, change: -0.43, flag1: '🇺🇸', flag2: '🇯🇵', digits: 3 },
    { symbol: 'USD/CHF', name: 'US Dollar / Swiss Franc', price: 0.80790, high: 0.81294, low: 0.80561, change: -0.57, flag1: '🇺🇸', flag2: '🇨🇭', digits: 5 },
    { symbol: 'USD/CAD', name: 'US Dollar / Canadian Dollar', price: 1.39411, high: 1.40292, low: 1.39256, change: -0.52, flag1: '🇺🇸', flag2: '🇨🇦', digits: 5 },
    { symbol: 'EUR/GBP', name: 'Euro / British Pound', price: 0.85664, high: 0.85797, low: 0.85565, change: 0.01, flag1: '🇪🇺', flag2: '🇬🇧', digits: 5 },
    { symbol: 'EUR/JPY', name: 'Euro / Japanese Yen', price: 182.405, high: 182.701, low: 181.306, change: -0.12, flag1: '🇪🇺', flag2: '🇯🇵', digits: 3 },
    { symbol: 'GBP/JPY', name: 'British Pound / Japanese Yen', price: 212.915, high: 213.264, low: 211.442, change: -0.14, flag1: '🇬🇧', flag2: '🇯🇵', digits: 3 },
    { symbol: 'AUD/CAD', name: 'Australian Dollar / Canadian Dollar', price: 0.98517, high: 0.98770, low: 0.98336, change: -0.02, flag1: '🇦🇺', flag2: '🇨🇦', digits: 5 },
    { symbol: 'NZD/CHF', name: 'New Zealand Dollar / Swiss Franc', price: 0.47616, high: 0.47691, low: 0.47522, change: -0.14, flag1: '🇳🇿', flag2: '🇨🇭', digits: 5 }
  ]);

  // 3. Instagram Feed Custom Cards State (User's Actual Account Feed, Styled Natively)
  const [instaPosts, setInstaPosts] = useState([
    { id: 1, image: 'https://www.instagram.com/p/DZsCsz3zFuw/media/?size=l', likes: 254, commentsCount: 14, link: 'https://www.instagram.com/p/DZsCsz3zFuw/', caption: 'XAUUSD (GOLD) market analysis is live. Plan your entry targets with our raw spreads. 📈', comments: [{ user: 'trader_dubai', text: 'Clean charting! Spreads are very tight.' }, { user: 'capital_forex', text: 'Caught the gold breakout today. MT5 is flawless.' }] },
    { id: 2, image: 'https://www.instagram.com/p/DWjMCE4kXYt/media/?size=l', likes: 198, commentsCount: 9, link: 'https://www.instagram.com/p/DWjMCE4kXYt/', caption: 'Capital security remains our primary asset. Segregated Tier-1 account protocols are active. 🛡️', comments: [{ user: 'safetrade_inc', text: 'Segregated accounts are a must. Respect.' }, { user: 'vip_trader_ae', text: 'Smooth deposit and fast withdrawal processing.' }] },
    { id: 3, image: 'https://www.instagram.com/p/DWguJd0E-nK/media/?size=l', likes: 312, commentsCount: 19, link: 'https://www.instagram.com/p/DWguJd0E-nK/', caption: 'ECN execution parameters: raw spreads from 0.0 pips, institutional depth of market. ⚡', comments: [{ user: 'scalper_pro', text: 'Zero markup is real on the ECN account.' }, { user: 'market_maker', text: 'Less than 15ms latency. Insane!' }] },
    { id: 4, image: 'https://www.instagram.com/p/DWY38TfE0im/media/?size=l', likes: 167, commentsCount: 11, link: 'https://www.instagram.com/p/DWY38TfE0im/', caption: 'Trade global markets on the go. Full MT5 dashboard available for iOS and Android. 📱', comments: [{ user: 'nomad_trader', text: 'The mobile app interface is super clean.' }, { user: 'mt5_fan', text: 'Execution speed on mobile is very fast.' }] },
    { id: 5, image: 'https://www.instagram.com/p/DWWeWySk5v1/media/?size=l', likes: 210, commentsCount: 8, link: 'https://www.instagram.com/p/DWWeWySk5v1/', caption: 'Discipline beats strategy. Stay in the game and protect your capital with Magnate. ⚜️', comments: [{ user: 'growth_mindset', text: 'Patience win the race. Solid quote!' }, { user: 'risk_mgmt', text: 'Patience is everything in forex.' }] },
    { id: 6, image: 'https://www.instagram.com/p/DWTt9cmEzro/media/?size=l', likes: 182, commentsCount: 12, link: 'https://www.instagram.com/p/DWTt9cmEzro/', caption: 'Market watch structures update. Focus on high-probability setups and manage risk. 📊', comments: [{ user: 'technical_fx', text: 'Daily market outlook has been very helpful.' }, { user: 'pips_hunter', text: 'AUDUSD is looking hot this week.' }] },
    { id: 7, image: 'https://www.instagram.com/p/DWRJF4XE9xd/media/?size=l', likes: 289, commentsCount: 16, link: 'https://www.instagram.com/p/DWRJF4XE9xd/', caption: 'Elite conditions for high-volume traders. Direct Liquidity access and raw margins. 💼', comments: [{ user: 'hedgefund_ae', text: 'Great ECN conditions for bulk orders.' }, { user: 'forex_whale', text: 'Top broker service in Dubai Currency House!' }] },
    { id: 8, image: 'https://www.instagram.com/p/DWOVzjXDR0M/media/?size=l', likes: 143, commentsCount: 6, link: 'https://www.instagram.com/p/DWOVzjXDR0M/', caption: 'Official registration callback desk is active. Connect with our dedicated VIP desk. 📞', comments: [{ user: 'broker_advisor', text: 'Top customer desk support.' }, { user: 'al_fattan_client', text: 'Dubai office has been helpful.' }] }
  ]);
  const [instaSlideIndex, setInstaSlideIndex] = useState(0);
  const [liveGoldPrice, setLiveGoldPrice] = useState(2023.78);
  const [techMode, setTechMode] = useState('spreads');
  const [hoveredBar, setHoveredBar] = useState(null);
  const [isWAChatOpen, setIsWAChatOpen] = useState(false);
  const [waMessage, setWaMessage] = useState('');

  // 4. UI Active tabs & clock states
  const [activeRatesTab, setActiveRatesTab] = useState('hot');
  const [activeAccountTab, setActiveAccountTab] = useState('classic');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00:00');

  // Typewriter banner phrase state
  const [typewriterText, setTypewriterText] = useState('');
  const phrases = [
    'Trade with Royalty.',
    'Empower Your Capital.',
    'Institutional Execution.',
    'Elite Multi-Asset Brokerage.'
  ];
  const phraseIndexRef = useRef(0);
  const characterIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  // Interactive Multi-Tool Calculator State
  const [activeCalcTool, setActiveCalcTool] = useState('margin'); // 'margin', 'position', 'profit'
  const [calcAsset, setCalcAsset] = useState('EURUSD');
  const [calcLots, setCalcLots] = useState(1.00);
  const [calcLeverage, setCalcLeverage] = useState(500);

  // Position Size & Risk Calculator State
  const [riskBalance, setRiskBalance] = useState(10000);
  const [riskPct, setRiskPct] = useState(1.0);
  const [stopLossPips, setStopLossPips] = useState(30);

  // Profit / Loss Estimator State
  const [tradeDirection, setTradeDirection] = useState('BUY');
  const [entryPrice, setEntryPrice] = useState(1.0850);
  const [exitPrice, setExitPrice] = useState(1.0900);

  // Commodity Tab & FX Matrix State (Panel 2 & Panel 4)
  const [activeCommodityTab, setActiveCommodityTab] = useState('commodities'); // 'forex', 'indices', 'crypto', 'commodities'

  // Legal Policy & KYC Modal State
  const [selectedPolicyModal, setSelectedPolicyModal] = useState(null); // 'kyc', 'aml', 'terms', 'legal'

  // Contact Form Inputs & Feedback
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', account: 'classic', message: '' });
  const [formFeedback, setFormFeedback] = useState({ show: false, success: false, message: '' });

  // Economic Calendar Filter & Data State
  const [calendarImpact, setCalendarImpact] = useState('all');
  const [calendarCurrency, setCalendarCurrency] = useState('all');
  const [calendarTimeframe, setCalendarTimeframe] = useState('today');
  const [selectedEventDetail, setSelectedEventDetail] = useState(null);

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

  // Instrument static configurations for the calculator
  const calculatorOptions = {
    EURUSD: { pipSize: 0.0001, contract: 100000, label: 'EURUSD (Forex - EUR/USD)' },
    GBPUSD: { pipSize: 0.0001, contract: 100000, label: 'GBPUSD (Forex - GBP/USD)' },
    XAUUSD: { pipSize: 0.01, contract: 100, label: 'XAUUSD (Gold vs US Dollar)' },
    BTCUSD: { pipSize: 1, contract: 1, label: 'BTCUSD (Bitcoin vs Dollar)' },
    USOIL: { pipSize: 0.01, contract: 1000, label: 'USOIL (Crude Oil)' }
  };

  // --- EFFECT HOOKS ---

  // 1. Live Clock ticking
  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hrs}:${mins}:${secs}`);
    }
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. Typewriter Animation loop
  useEffect(() => {
    let timer;
    function tick() {
      const phrase = phrases[phraseIndexRef.current];
      const charIndex = characterIndexRef.current;
      const deleting = isDeletingRef.current;

      if (deleting) {
        setTypewriterText(phrase.substring(0, charIndex - 1));
        characterIndexRef.current = charIndex - 1;
      } else {
        setTypewriterText(phrase.substring(0, charIndex + 1));
        characterIndexRef.current = charIndex + 1;
      }

      let speed = deleting ? 50 : 100;

      if (!deleting && characterIndexRef.current === phrase.length) {
        isDeletingRef.current = true;
        speed = 2000; // Pause at end of line
      } else if (deleting && characterIndexRef.current === 0) {
        isDeletingRef.current = false;
        phraseIndexRef.current = (phraseIndexRef.current + 1) % phrases.length;
        speed = 500; // Pause before typing next
      }

      timer = setTimeout(tick, speed);
    }

    timer = setTimeout(tick, 1000);
    return () => clearTimeout(timer);
  }, []);

  // 2.5 Fetch Dynamic Instagram Feed
  useEffect(() => {
    async function loadFeed() {
      try {
        const response = await fetch('/api/instagram');
        const data = await response.json();
        if (data && data.success && data.posts) {
          setInstaPosts(data.posts);
        }
      } catch (err) {
        console.warn('Could not load dynamic instagram feed, using defaults:', err);
      }
    }
    loadFeed();
  }, []);

  // 3. REST API Real-Time Live Market Stream Polling
  useEffect(() => {
    async function fetchLiveMarketRates() {
      try {
        const response = await fetch('/api/rates');
        const data = await response.json();
        if (data && data.success && data.rates) {
          const r = data.rates;

          // Update Top Ticker Bar
          setTickerItems(prev => ({
            ...prev,
            eurusd: { ...prev.eurusd, price: r.eurusd.price, change: r.eurusd.change, isUp: r.eurusd.isUp },
            gbpusd: { ...prev.gbpusd, price: r.gbpusd.price, change: r.gbpusd.change, isUp: r.gbpusd.isUp },
            xauusd: { ...prev.xauusd, price: r.gold.price, change: r.gold.change, isUp: r.gold.isUp },
            btcusd: { ...prev.btcusd, price: r.btcusd.price, change: r.btcusd.change, isUp: r.btcusd.isUp },
            usoil: { ...prev.usoil, price: r.usoil.price, change: r.usoil.change, isUp: r.usoil.isUp },
            spx500: { ...prev.spx500, price: r.spx500.price, change: r.spx500.change, isUp: r.spx500.isUp },
            eurjpy: { ...prev.eurjpy, price: r.eurjpy.price, change: r.eurjpy.change, isUp: r.eurjpy.isUp },
            usdjpy: { ...prev.usdjpy, price: r.usdjpy.price, change: r.usdjpy.change, isUp: r.usdjpy.isUp },
            ethusd: { ...prev.ethusd, price: r.ethusd.price, change: r.ethusd.change, isUp: r.ethusd.isUp },
            eurnzd: { ...prev.eurnzd, price: r.eurnzd.price, change: r.eurnzd.change, isUp: r.eurnzd.isUp },
            xagusd: { ...prev.xagusd, price: r.silver.price, change: r.silver.change, isUp: r.silver.isUp }
          }));

          // Update Crypto & Spot Rates Table
          setRatesItems(prev => ({
            ...prev,
            BTCUSD: { ...prev.BTCUSD, buy: r.btcusd.price, change: r.btcusd.change },
            ETHUSD: { ...prev.ETHUSD, buy: r.ethusd.price, change: r.ethusd.change },
            XAUUSD: { ...prev.XAUUSD, buy: r.gold.price, change: r.gold.change },
            USDJPY: { ...prev.USDJPY, buy: r.usdjpy.price },
            EURJPY: { ...prev.EURJPY, buy: r.eurjpy.price },
            EURNZD: { ...prev.EURNZD, buy: r.eurnzd.price }
          }));

          // Update Market Watch Forex Pairs
          setForexPairs(prev => {
            return prev.map(item => {
              let calculatedPrice = item.price;
              if (item.symbol === 'EUR/USD') calculatedPrice = r.eurusd.price;
              else if (item.symbol === 'GBP/USD') calculatedPrice = r.gbpusd.price;
              else if (item.symbol === 'USD/JPY') calculatedPrice = r.usdjpy.price;
              else if (item.symbol === 'EUR/JPY') calculatedPrice = r.eurjpy.price;

              return {
                ...item,
                price: calculatedPrice,
                high: Math.max(item.high || calculatedPrice, calculatedPrice * 1.001),
                low: Math.min(item.low || calculatedPrice, calculatedPrice * 0.999)
              };
            });
          });
        }
      } catch (err) {
        console.warn('Could not fetch real-time market rates from /api/rates:', err);
      }
    }

    // Initial fetch
    fetchLiveMarketRates();

    // Poll live market endpoint every 3.5 seconds
    const interval = setInterval(fetchLiveMarketRates, 3500);

    return () => clearInterval(interval);
  }, []);

  // 4. Forex/Gold/Oil Market Live Updates & Fluctuations
  useEffect(() => {
    const timer = setInterval(() => {
      // A. Update Ticker and Rates Table
      const keys = ['eurusd', 'gbpusd', 'xauusd', 'usoil', 'spx500', 'eurjpy', 'usdjpy', 'eurnzd', 'xagusd'];
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      const pctChange = (Math.random() - 0.5) * 0.0006;

      setTickerItems(prev => {
        const currentItem = prev[randomKey];
        if (currentItem) {
          const nextPrice = currentItem.price * (1 + pctChange);
          return {
            ...prev,
            [randomKey]: { ...prev[randomKey], price: nextPrice, change: currentItem.change + pctChange * 100 }
          };
        }
        return prev;
      });

      const ratesKey = randomKey.toUpperCase() === 'USOIL' ? 'USOUSD' : randomKey.toUpperCase();
      setRatesItems(prev => {
        const currentItem = prev[ratesKey];
        if (currentItem) {
          const nextBuy = currentItem.buy * (1 + pctChange);
          const updatedSpark = [...currentItem.spark];
          updatedSpark.shift();
          updatedSpark.push(nextBuy);

          return {
            ...prev,
            [ratesKey]: { ...prev[ratesKey], buy: nextBuy, change: currentItem.change + pctChange * 100, spark: updatedSpark }
          };
        }
        return prev;
      });

      // B. Update Market Watch Forex Pairs Tickers
      setForexPairs(prev => {
        // Pick one random forex pair to mutate
        const randomIndex = Math.floor(Math.random() * prev.length);
        return prev.map((item, idx) => {
          if (idx === randomIndex) {
            const pairChange = (Math.random() - 0.5) * 0.0004;
            const nextPrice = item.price * (1 + pairChange);
            const nextHigh = Math.max(item.high, nextPrice);
            const nextLow = Math.min(item.low, nextPrice);
            const nextChange = item.change + pairChange * 100;
            return {
              ...item,
              price: nextPrice,
              high: nextHigh,
              low: nextLow,
              change: nextChange
            };
          }
          return item;
        });
      });

      // C. Update Likes & Comments dynamically
      setInstaPosts((prev) => {
        const randomIndex = Math.floor(Math.random() * prev.length);
        return prev.map((post, idx) => {
          if (idx === randomIndex) {
            const likeIncrement = Math.random() > 0.4 ? 1 : 0;
            const commentIncrement = Math.random() > 0.9 ? 1 : 0;
            return {
              ...post,
              likes: post.likes + likeIncrement,
              commentsCount: post.commentsCount + commentIncrement
            };
          }
          return post;
        });
      });

      // D. Fluctuate live gold price for technology visual
      setLiveGoldPrice((prev) => prev + (Math.random() - 0.5) * 0.35);

    }, 1500);

    return () => clearInterval(timer);
  }, []);

  // --- CALCULATION LOGIC ---
  const activeAssetPrice = tickerItems[calcAsset.toLowerCase()]?.price || 1.0;
  const currentAssetConfig = calculatorOptions[calcAsset] || { pipSize: 0.0001, contract: 100000 };
  
  // 1. Margin & Pip Value
  const calculatedContractValue = calcLots * currentAssetConfig.contract * activeAssetPrice;
  const calculatedRequiredMargin = calculatedContractValue / calcLeverage;
  const calculatedPipValue = calcLots * currentAssetConfig.contract * currentAssetConfig.pipSize;

  // 2. Position Size & Risk
  const calculatedRiskAmount = (riskBalance * riskPct) / 100;
  const singlePipVal = 100000 * currentAssetConfig.pipSize;
  const calculatedPositionLots = stopLossPips > 0 ? (calculatedRiskAmount / (stopLossPips * singlePipVal)).toFixed(2) : '0.00';

  // 3. Profit / Loss Estimator
  const pipDiff = tradeDirection === 'BUY' 
    ? (exitPrice - entryPrice) / currentAssetConfig.pipSize 
    : (entryPrice - exitPrice) / currentAssetConfig.pipSize;
  const calculatedProfitLoss = pipDiff * calcLots * (currentAssetConfig.contract * currentAssetConfig.pipSize);

  // --- HELPER FUNCTIONS ---
  function getSparklinePath(points, width, height) {
    const min = Math.min(...points);
    const max = Math.max(...points);
    const spread = max - min || 1;
    const xStep = width / (points.length - 1);
    
    return points.map((p, index) => {
      const x = index * xStep;
      const y = height - ((p - min) / spread) * height;
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
  }

  const nextSlide = () => {
    setInstaSlideIndex((prev) => (prev + 1) % (instaPosts.length - 2));
  };

  const prevSlide = () => {
    setInstaSlideIndex((prev) => (prev - 1 + (instaPosts.length - 2)) % (instaPosts.length - 2));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormFeedback({ show: false, success: false, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      const data = await response.json();
      if (data.success) {
        setFormFeedback({ show: true, success: true, message: data.message });
        setContactForm({ name: '', email: '', phone: '', account: 'classic', message: '' });
      } else {
        setFormFeedback({ show: true, success: false, message: data.message });
      }
    } catch (err) {
      setFormFeedback({ show: true, success: false, message: 'Could not submit application. Please check your network connection.' });
    }
  };

  return (
    <>
      <Header />

      {/* Decorative Blur Background Orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-overlay"></div>

        {/* Forex Tech & Matrix Overlay */}
        <div className="forex-tech-bg">
          <div className="tech-grid-pattern"></div>
          <div className="tech-scanline"></div>
          <div className="tech-data-stream" style={{ left: '20%', animationDelay: '0s' }}></div>
          <div className="tech-data-stream" style={{ left: '50%', animationDelay: '1.5s' }}></div>
          <div className="tech-data-stream" style={{ left: '80%', animationDelay: '3s' }}></div>
          
          {/* Liquidity Radar Pulse Nodes */}
          <div className="liquidity-node" style={{ top: '25%', left: '30%' }}></div>
          <div className="liquidity-node" style={{ top: '60%', right: '25%' }}></div>
          <div className="liquidity-node" style={{ top: '40%', right: '45%' }}></div>

          <div className="tech-glow-orb gold" style={{ width: '400px', height: '400px', top: '-100px', left: '10%' }}></div>
          <div className="tech-glow-orb purple" style={{ width: '500px', height: '500px', top: '50px', right: '5%' }}></div>
          
          {/* Floating Forex Tech Ticker Tags */}
          <div className="floating-ticker-tag" style={{ top: '15%', left: '44%', animationDelay: '0s' }}>
            <span style={{ color: '#2ecc71' }}>▲ XAU/USD</span> <span>$2,022.89</span>
          </div>
          <div className="floating-ticker-tag" style={{ top: '53%', left: '43%', animationDelay: '2s' }}>
            <span style={{ color: 'var(--accent-gold)' }}>⚡ ECN Bridge</span> <span>0.0 Pips</span>
          </div>
          <div className="floating-ticker-tag" style={{ top: '22%', right: '10%', animationDelay: '4s' }}>
            <span style={{ color: '#9358f7' }}>🌐 FIX API 4.4</span> <span>&lt;15ms</span>
          </div>

          {/* SVG Forex Candlestick Chart Watermark */}
          <svg className="candlestick-watermark" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', right: '3%', top: '15%', width: '480px', height: '300px', opacity: 0.08, pointerEvents: 'none' }}>
            {/* Grid lines */}
            <line x1="0" y1="50" x2="500" y2="50" stroke="#D4A84B" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="0" y1="120" x2="500" y2="120" stroke="#D4A84B" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="0" y1="190" x2="500" y2="190" stroke="#D4A84B" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="0" y1="260" x2="500" y2="260" stroke="#D4A84B" strokeWidth="0.5" strokeDasharray="4 4" />
            
            {/* Candlesticks */}
            {/* Candle 1: Bull */}
            <line x1="40" y1="180" x2="40" y2="240" stroke="#2ecc71" strokeWidth="1.5" />
            <rect x="34" y="195" width="12" height="30" fill="#2ecc71" rx="1" />

            {/* Candle 2: Bull */}
            <line x1="90" y1="150" x2="90" y2="210" stroke="#2ecc71" strokeWidth="1.5" />
            <rect x="84" y="165" width="12" height="32" fill="#2ecc71" rx="1" />

            {/* Candle 3: Bear */}
            <line x1="140" y1="170" x2="140" y2="230" stroke="#ef5350" strokeWidth="1.5" />
            <rect x="134" y="180" width="12" height="35" fill="#ef5350" rx="1" />

            {/* Candle 4: Bull */}
            <line x1="190" y1="120" x2="190" y2="190" stroke="#2ecc71" strokeWidth="1.5" />
            <rect x="184" y="130" width="12" height="45" fill="#2ecc71" rx="1" />

            {/* Candle 5: Bull Big Breakout */}
            <line x1="240" y1="60" x2="240" y2="150" stroke="#2ecc71" strokeWidth="1.5" />
            <rect x="234" y="75" width="12" height="60" fill="#2ecc71" rx="1" />

            {/* Candle 6: Bear */}
            <line x1="290" y1="80" x2="290" y2="140" stroke="#ef5350" strokeWidth="1.5" />
            <rect x="284" y="90" width="12" height="30" fill="#ef5350" rx="1" />

            {/* Candle 7: Bull */}
            <line x1="340" y1="40" x2="340" y2="110" stroke="#2ecc71" strokeWidth="1.5" />
            <rect x="334" y="50" width="12" height="45" fill="#2ecc71" rx="1" />

            {/* Trend Line Path */}
            <path d="M 40 210 Q 140 195 240 105 T 440 30" fill="none" stroke="#D4A84B" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
        </div>

        <div className="container hero-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content">
            <div className="gold-badge">Official Multi-Asset Brokerage</div>
            <h1 className="text-shine">
              Magnate Capital<br />
              <span className="typewriter-text">{typewriterText}</span><span className="typewriter-cursor">|</span>
            </h1>
            <p className="hero-lead">
              Experience the art of trading at its finest — tailored solutions, institutional power, royal treatment. Connect directly to global financial liquidity with razor-sharp execution.
            </p>
            <div className="hero-actions">
              <a href="https://trade.magnatefx.com/register/" className="btn btn-primary btn-lg" target="_blank" rel="noreferrer">Start Trading</a>
              <a href="#about" className="btn btn-secondary btn-lg">Learn More</a>
            </div>

            {/* Key Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '40px', paddingTop: '25px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <i className="fa-solid fa-shield-halved" style={{ color: 'var(--accent-gold)', marginTop: '4px', fontSize: '1rem' }}></i>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>Regulated Broker</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>Ensuring transparency & trust in every transaction.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <i className="fa-solid fa-laptop-code" style={{ color: 'var(--accent-gold)', marginTop: '4px', fontSize: '1rem' }}></i>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>Advanced Platforms</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>Access to MT4, MT5, and cTrader for seamless execution.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <i className="fa-solid fa-chart-line" style={{ color: 'var(--accent-gold)', marginTop: '4px', fontSize: '1rem' }}></i>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>Diverse Asset Classes</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>Trade Forex, Commodities, Indices, Stocks & Crypto.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <i className="fa-solid fa-headset" style={{ color: 'var(--accent-gold)', marginTop: '4px', fontSize: '1rem' }}></i>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>24/5 Dedicated Support</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>Our team is here to assist you every step of the way.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-card trading-preview tech-card-pulse" style={{ borderRadius: '16px', overflow: 'hidden' }}>
              <div className="card-header" style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>MT5 Live Dashboard</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="live-badge-dot"></span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', fontWeight: 700 }}>LIVE</span>
                </div>
              </div>

              {/* Live Pairs Row */}
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { pair: 'XAU/USD', icon: '🥇', price: tickerItems.xauusd.price.toFixed(2), change: '+0.42%', up: true },
                  { pair: 'EUR/USD', icon: '💶', price: '1.0842', change: '+0.15%', up: true },
                  { pair: 'BTC/USD', icon: '₿', price: '67,420', change: '-1.22%', up: false },
                  { pair: 'GBP/USD', icon: '💷', price: '1.2674', change: '+0.08%', up: true },
                ].map((item) => (
                  <div key={item.pair} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.04)', transition: 'all 0.3s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>{item.pair}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', fontFamily: 'JetBrains Mono, monospace' }}>${item.price}</span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: item.up ? 'rgba(46,204,113,0.12)' : 'rgba(239,83,80,0.12)', color: item.up ? '#2ecc71' : '#ef5350' }}>{item.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Stats Strip */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.15)' }}>
                <div style={{ padding: '14px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Spreads</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace' }}>0.0 Pips</div>
                </div>
                <div style={{ padding: '14px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Execution</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#2ecc71', fontFamily: 'JetBrains Mono, monospace' }}>&lt; 15ms</div>
                </div>
                <div style={{ padding: '14px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Leverage</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', fontFamily: 'JetBrains Mono, monospace' }}>1:500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade In Commodities & Asset Classes Section (Panel 1 & Panel 2 from image) */}
      <section id="commodities-trading" className="commodities-trading-section" style={{ padding: '90px 0', background: 'linear-gradient(180deg, #160B28 0%, #1A0F2E 100%)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          {/* Tab Navigation Pill Header */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {[
              { id: 'forex', label: 'Forex' },
              { id: 'indices', label: 'Indices' },
              { id: 'crypto', label: 'Crypto' },
              { id: 'commodities', label: 'Commodities' }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveCommodityTab(tab.id)}
                style={{ 
                  padding: '10px 24px', 
                  borderRadius: '6px', 
                  border: activeCommodityTab === tab.id ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.2)', 
                  background: activeCommodityTab === tab.id ? 'var(--accent-gold)' : 'transparent', 
                  color: activeCommodityTab === tab.id ? '#1A0F2E' : '#fff', 
                  fontWeight: 700, 
                  fontSize: '0.9rem', 
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '10px' }}>
                {activeCommodityTab === 'commodities' ? 'Trade In commodities' : activeCommodityTab === 'forex' ? 'Trade Forex Currencies' : activeCommodityTab === 'indices' ? 'Trade Global Indices' : 'Trade Crypto CFDs'}
              </h2>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
                {activeCommodityTab === 'commodities' ? 'Fuel Your Portfolio with Gold, Oil, and More' : activeCommodityTab === 'forex' ? 'Access 50+ Currency Pairs with Tight Raw Spreads' : activeCommodityTab === 'indices' ? 'Trade S&P 500, NASDAQ, Dow Jones & DAX' : '24/7 Digital Asset Trading with Institutional Liquidity'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '30px' }}>
                {activeCommodityTab === 'commodities' 
                  ? 'Access a wide range of global commodities — from precious metals to energy and agriculture — all on one powerful trading platform designed for performance and precision.'
                  : 'Access major, minor, and exotic currency pairs with ultra-fast execution, low latency, and zero commission options tailored to your trading strategy.'}
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                  Start Trading &gt;
                </a>
              </div>
            </div>

            {/* Asset Feature Cards Grid (Panel 1 Exact Copy) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="glass-card tech-card-pulse" style={{ padding: '28px', borderRadius: '16px', background: 'rgba(35, 21, 60, 0.8)', border: '1px solid var(--accent-gold)' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.3rem', marginBottom: '14px' }}>
                  <i className="fa-solid fa-chart-column"></i>
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '8px' }}>Commodities</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '12px' }}>Gold, Silver, Copper, WTI, etc</p>
                <a href="#live-rates" style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Read More &rarr;</a>
              </div>

              <div className="glass-card tech-card-pulse" style={{ padding: '28px', borderRadius: '16px', background: 'rgba(35, 21, 60, 0.8)', border: '1px solid var(--accent-gold)' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.3rem', marginBottom: '14px' }}>
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '8px' }}>Energies</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '12px' }}>Oil, Gas, and all Energies</p>
                <a href="#live-rates" style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Read More &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOST POPULAR FX PAIRS Cross Matrix Section (Panel 4 from image) */}
      <section className="fx-matrix-section" style={{ padding: '80px 0', background: '#0D061A', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '40px' }}>
            <span className="section-label">Live Exchange Matrix</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>MOST POPULAR FX PAIRS</h2>
            <p className="subtitle">Real-time cross-currency exchange matrix for global currency pairs.</p>
          </div>

          <div className="glass-card" style={{ padding: '20px', borderRadius: '18px', background: '#120922', border: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', fontFamily: 'JetBrains Mono, monospace', color: '#fff', textAlign: 'center' }}>
              <thead>
                <tr style={{ background: 'rgba(0,0,0,0.5)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '14px', width: '90px' }}></th>
                  {[
                    { code: 'INR', flag: '🇮🇳' },
                    { code: 'EUR', flag: '🇪🇺' },
                    { code: 'USD', flag: '🇺🇸' },
                    { code: 'JPY', flag: '🇯🇵' },
                    { code: 'GBP', flag: '🇬🇧' },
                    { code: 'CHF', flag: '🇨🇭' },
                    { code: 'AUD', flag: '🇦🇺' },
                    { code: 'CAD', flag: '🇨🇦' },
                    { code: 'NZD', flag: '🇳🇿' },
                  ].map(c => (
                    <th key={c.code} style={{ padding: '14px', color: '#fff', fontWeight: 800 }}>
                      <span style={{ marginRight: '4px' }}>{c.flag}</span> {c.code}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { row: 'INR', flag: '🇮🇳', rates: ['—', '0.010047', '0.01160', '1.6699', '0.00854', '0.00941', '0.01786', '0.01578', '0.01926'] },
                  { row: 'EUR', flag: '🇪🇺', rates: ['99.4894', '—', '1.15466', '166.312', '0.8507', '0.9368', '1.7778', '1.5704', '1.9171'] },
                  { row: 'USD', flag: '🇺🇸', rates: ['86.0610', '0.8658', '—', '144.028', '0.7368', '0.8113', '1.5397', '1.3601', '1.6603'] },
                  { row: 'JPY', flag: '🇯🇵', rates: ['0.59793', '0.0060122', '0.006942', '—', '0.00511', '0.00563', '0.01068', '0.00944', '0.01153'] },
                  { row: 'GBP', flag: '🇬🇧', rates: ['116.9520', '1.1758', '1.3578', '195.557', '—', '1.1012', '2.0901', '1.8461', '2.2536'], highlight: 3 },
                  { row: 'CHF', flag: '🇨🇭', rates: ['106.195', '1.0672', '1.2322', '177.557', '0.9081', '—', '1.8980', '1.6765', '2.0465'] },
                  { row: 'AUD', flag: '🇦🇺', rates: ['55.9840', '0.5625', '0.64961', '93.567', '0.4784', '0.5268', '—', '0.8833', '1.0783'] },
                  { row: 'CAD', flag: '🇨🇦', rates: ['63.357', '0.6368', '0.7356', '105.962', '0.5417', '0.5965', '1.1321', '—', '1.2207'] },
                  { row: 'NZD', flag: '🇳🇿', rates: ['51.906', '0.5211', '0.60226', '86.744', '0.4437', '0.4886', '0.9273', '0.8192', '—'] },
                ].map((r) => (
                  <tr key={r.row} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '12px', fontWeight: 800, color: '#fff', textAlign: 'left', background: 'rgba(0,0,0,0.3)' }}>
                      <span style={{ marginRight: '4px' }}>{r.flag}</span> {r.row}
                    </td>
                    {r.rates.map((val, idx) => (
                      <td 
                        key={idx} 
                        style={{ 
                          padding: '12px', 
                          background: r.highlight === idx ? '#900C27' : val === '—' ? 'rgba(255,255,255,0.02)' : 'transparent', 
                          color: r.highlight === idx ? '#fff' : val === '—' ? 'var(--text-muted)' : '#fff',
                          fontWeight: r.highlight === idx ? 800 : 500
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Monthly Promotions Hero Banner (Panel 5 from image) */}
      <section className="monthly-promotions-banner" style={{ padding: '80px 0', background: 'radial-gradient(circle at center, #2C184A 0%, #160B28 100%)', borderTop: '1px solid var(--border-light)', textCenter: 'center', position: 'relative' }}>
        <div className="container text-center">
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '12px' }}>
            Monthly Promotions for Partners & Traders
          </span>
          <h2 style={{ fontSize: '3.2rem', fontWeight: 900, color: '#fff', marginBottom: '16px', lineHeight: 1.15 }}>
            Unlock Rewards. Elevate Your Experience.
          </h2>
          <p style={{ maxWidth: '750px', margin: '0 auto 30px auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Exclusive monthly offers designed to reward your performance and fuel your growth—whether you're trading or referring.
          </p>
          <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1.05rem', borderRadius: '10px' }}>
            Start Trading &gt;
          </a>
        </div>
      </section>
      <section id="live-rates" className="live-rates-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Market Watch</h2>
            <p className="subtitle">Live bid prices from the Magnate Capital feed. Last available prices stay visible if the feed pauses.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <span className="gold-badge" style={{ marginBottom: 0 }}>FOREX PAIRS</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              <span className="live-badge-dot"></span>
              <span>Live</span>
              <span style={{ fontFamily: 'monospace', color: 'var(--accent-gold)', background: 'rgba(212, 175, 55, 0.1)', padding: '3px 8px', borderRadius: '3px' }}>{currentTime}</span>
            </div>
          </div>

          <div className="glass-card rates-table-card" style={{ marginBottom: '50px' }}>
            <div className="table-responsive">
              <table className="rates-table">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Change</th>
                    <th style={{ textAlign: 'right' }}>Trade</th>
                  </tr>
                </thead>
                <tbody>
                  {forexPairs.map((item) => {
                    const isUp = item.change >= 0;
                    const changeClass = isUp ? 'change-up' : 'change-down';
                    return (
                      <tr key={item.symbol}>
                        <td>
                          <div className="symbol-cell">
                            <div className="symbol-icon flag-pair">
                              <span style={{ fontSize: '1.1rem', zIndex: 2 }}>{item.flag1}</span>
                              <span style={{ fontSize: '1.1rem', marginLeft: '-8px', zIndex: 1 }}>{item.flag2}</span>
                            </div>
                            <div>
                              <div className="symbol-name">{item.symbol}</div>
                              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>{item.name}</div>
                            </div>
                          </div>
                        </td>
                        <td style={{ fontFamily: 'monospace' }}>{item.price.toFixed(item.digits)}</td>
                        <td style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{item.high.toFixed(item.digits)}</td>
                        <td style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{item.low.toFixed(item.digits)}</td>
                        <td className={changeClass} style={{ fontFamily: 'monospace' }}>
                          {isUp ? '+' : ''}{item.change.toFixed(2)}%
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn-trading" style={{ borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>Trade</a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '15px' }}>
              *Indicative prices from the connected price feed. Trading involves risk.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1rem', letterSpacing: '0.05em' }}>
              Open Live Account &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Crypto / Commodities Rates Feed Tab */}
      <section className="live-rates-section" style={{ background: '#070707', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-title text-center">
            <h2>Crypto & Commodities Spot</h2>
            <p className="subtitle">Real-time assets directly from global liquidity pools.</p>
          </div>

          <div className="rates-tabs">
            <button className={`rates-tab-btn ${activeRatesTab === 'hot' ? 'active' : ''}`} onClick={() => setActiveRatesTab('hot')}>TOP HOT</button>
            <button className={`rates-tab-btn ${activeRatesTab === 'profit' ? 'active' : ''}`} onClick={() => setActiveRatesTab('profit')}>TOP PROFIT</button>
            <button className={`rates-tab-btn ${activeRatesTab === 'turnover' ? 'active' : ''}`} onClick={() => setActiveRatesTab('turnover')}>TOP TURNOVER</button>
          </div>

          <div className="glass-card rates-table-card">
            <div className="table-responsive">
              <table className="rates-table">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Buy Price</th>
                    <th>Spread</th>
                    <th>Sell Price</th>
                    <th>Change (%)</th>
                    <th>Past 24 Hours</th>
                    <th style={{ textAlign: 'right' }}>Trade</th>
                  </tr>
                </thead>
                <tbody>
                  {ratesData[activeRatesTab].map((sym) => {
                    const item = ratesItems[sym];
                    if (!item) return null;
                    const decimalDigits = item.symbol.endsWith('JPY') || item.symbol.includes('NZD') ? 3 : (item.symbol.includes('USD') && item.buy > 100 ? 2 : 2);
                    const factor = item.symbol.includes('JPY') || item.symbol.includes('NZD') ? 1000 : 100;
                    const sellPrice = item.buy - (item.spread / factor);
                    const isUp = item.change >= 0;

                    return (
                      <tr key={item.symbol}>
                        <td>
                          <div className="symbol-cell">
                            <div className={`symbol-icon ${item.type !== 'forex' ? `${item.type}-icon` : 'flag-pair'}`}>
                              {item.type === 'forex' ? (
                                <>
                                  <span style={{ fontSize: '1.1rem', zIndex: 2 }}>{item.flag1}</span>
                                  <span style={{ fontSize: '1.1rem', marginLeft: '-8px', zIndex: 1 }}>{item.flag2}</span>
                                </>
                              ) : item.type === 'gold' ? (
                                <i className="fa-solid fa-coins"></i>
                              ) : item.type === 'silver' ? (
                                <i className="fa-solid fa-gem"></i>
                              ) : item.type === 'oil' ? (
                                <i className="fa-solid fa-droplet"></i>
                              ) : item.type === 'indices' ? (
                                <span>{item.label}</span>
                              ) : item.type === 'crypto' ? (
                                <span>{item.cryptoChar}</span>
                              ) : item.type === 'eth' ? (
                                <i className="fa-brands fa-ethereum"></i>
                              ) : item.type === 'bnb' ? (
                                <i className="fa-solid fa-cubes"></i>
                              ) : null}
                            </div>
                            <div>
                              <div className="symbol-name">{item.symbol}</div>
                              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>{item.name}</div>
                            </div>
                          </div>
                        </td>
                        <td>{item.buy.toFixed(decimalDigits)}</td>
                        <td style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{item.spread}</td>
                        <td>{sellPrice.toFixed(decimalDigits)}</td>
                        <td className={isUp ? 'change-up' : 'change-down'}>
                          {isUp ? '+' : ''}{item.change.toFixed(2)}%
                        </td>
                        <td>
                          <svg className="sparkline-svg">
                            <path className={`sparkline-path ${isUp ? 'sparkline-up' : 'sparkline-down'}`} d={getSparklinePath(item.spark, 100, 30)}></path>
                          </svg>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <a href="https://trade.magnatefx.com/register/" className="btn-trading" target="_blank" rel="noreferrer">Trading</a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Technology Section */}
      <section className="tech-section" style={{ background: '#160B28', padding: '80px 0', borderTop: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
        <div className="forex-tech-bg">
          <div className="tech-grid-pattern"></div>
          <div className="tech-glow-orb gold" style={{ width: '350px', height: '350px', bottom: '-50px', right: '10%' }}></div>
        </div>
        <div className="container grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          {/* Left Column: Info Text */}
          <div>
            <span className="section-label">Trading Infrastructure</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '25px', lineHeight: '1.2' }}>Trade with ECN Institutional Velocity</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px' }}>
              Connect directly to our deep liquidity pool via the MetaTrader 5 server bridge. Experience pricing built for professional scalpers, algorithmic traders, and high-frequency accounts.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent-gold)', fontSize: '1.3rem' }}><i className="fa-solid fa-circle-check"></i></div>
                <div>
                  <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '5px' }}>Direct Equinix LD4 Server Bridge</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Servers co-located in London for low-latency sub-15ms execution pipelines.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent-gold)', fontSize: '1.3rem' }}><i className="fa-solid fa-circle-check"></i></div>
                <div>
                  <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '5px' }}>Raw Spreads from 0.0 Pips</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Institutional interbank liquidity routing guarantees minimal spreads during peak volatility.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Attractive MT5 Dashboard Mock Window */}
          <div className="floating-terminal" style={{ background: 'rgba(26, 15, 46, 0.75)', border: '1px solid var(--border-light)', borderRadius: '16px', padding: '30px', backdropFilter: 'blur(10px)', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
            {/* macOS window control buttons header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #141414', paddingBottom: '15px', marginBottom: '25px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginLeft: '8px', letterSpacing: '0.5px' }}>MT5 Live Terminal</span>
              </div>
              
              {/* Interactive Tabs */}
              <div style={{ display: 'flex', gap: '4px', background: '#160B28', padding: '3px', borderRadius: '8px', border: '1px solid #111' }}>
                <button 
                  onClick={() => setTechMode('spreads')} 
                  style={{ padding: '4px 10px', fontSize: '0.65rem', fontWeight: 800, borderRadius: '6px', cursor: 'pointer', border: 'none', background: techMode === 'spreads' ? 'var(--accent-gold)' : 'transparent', color: techMode === 'spreads' ? '#000' : 'var(--text-muted)', transition: 'all 0.3s' }}
                >
                  Live Spreads
                </button>
                <button 
                  onClick={() => setTechMode('latency')} 
                  style={{ padding: '4px 10px', fontSize: '0.65rem', fontWeight: 800, borderRadius: '6px', cursor: 'pointer', border: 'none', background: techMode === 'latency' ? 'var(--accent-gold)' : 'transparent', color: techMode === 'latency' ? '#000' : 'var(--text-muted)', transition: 'all 0.3s' }}
                >
                  Execution Latency
                </button>
              </div>
            </div>

            {/* Live Chart Visualizer */}
            <div style={{ position: 'relative', height: '240px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '20px 10px 10px 10px', borderBottom: '1px solid #141414', marginBottom: '25px' }}>
              
              {/* Y Axis Grid Labels */}
              <div style={{ position: 'absolute', left: '-5px', top: '15%', fontSize: '0.6rem', color: 'var(--text-muted)' }}>{techMode === 'spreads' ? '1.0 Pip' : '20 ms'}</div>
              <div style={{ position: 'absolute', left: '-5px', top: '50%', fontSize: '0.6rem', color: 'var(--text-muted)' }}>{techMode === 'spreads' ? '0.5 Pip' : '10 ms'}</div>
              <div style={{ position: 'absolute', left: '-5px', top: '85%', fontSize: '0.6rem', color: 'var(--text-muted)' }}>{techMode === 'spreads' ? '0.0 Pip' : '0 ms'}</div>

              {/* Horizontal dotted grid lines */}
              <div style={{ position: 'absolute', width: '100%', top: '20%', borderTop: '1px dashed #141414', zIndex: 0 }}></div>
              <div style={{ position: 'absolute', width: '100%', top: '55%', borderTop: '1px dashed #141414', zIndex: 0 }}></div>
              <div style={{ position: 'absolute', width: '100%', top: '88%', borderTop: '1px dashed #141414', zIndex: 0 }}></div>

              {/* Bar Graph Column Render */}
              {[
                { label: 'EUR', name: 'EURUSD', val: techMode === 'spreads' ? '0.0 Pips' : '12 ms', pct: techMode === 'spreads' ? 30 : 55, price: '1.0842' },
                { label: 'GBP', name: 'GBPUSD', val: techMode === 'spreads' ? '0.1 Pips' : '14 ms', pct: techMode === 'spreads' ? 45 : 65, price: '1.2674' },
                { label: 'JPY', name: 'USDJPY', val: techMode === 'spreads' ? '0.1 Pips' : '9 ms', pct: techMode === 'spreads' ? 40 : 40, price: '157.42' },
                { label: 'BTC', name: 'BTCUSD', val: techMode === 'spreads' ? '0.8 Pips' : '18 ms', pct: techMode === 'spreads' ? 75 : 80, price: '$67,420' },
                { label: 'GOLD', name: 'XAUUSD', val: techMode === 'spreads' ? '0.0 Pips' : '8 ms', pct: techMode === 'spreads' ? 50 : 35, price: `$${liveGoldPrice.toFixed(2)}` },
                { label: 'ETH', name: 'ETHUSD', val: techMode === 'spreads' ? '0.4 Pips' : '15 ms', pct: techMode === 'spreads' ? 60 : 70, price: '$3,482' },
              ].map((bar, idx) => {
                const isActive = (hoveredBar === null && idx === 4) || (hoveredBar === idx);
                return (
                  <div 
                    key={bar.label} 
                    onMouseEnter={() => setHoveredBar(idx)} 
                    onMouseLeave={() => setHoveredBar(null)}
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      width: '42px', 
                      height: '100%', 
                      justifyContent: 'flex-end',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {/* Active tooltip overlay */}
                    {isActive && (
                      <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-gold)', color: '#000', padding: '5px 10px', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 800, whiteSpace: 'nowrap', boxShadow: '0 5px 15px rgba(212, 175, 55, 0.4)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', opacity: 0.8 }}>{bar.name}</span>
                        <span>{bar.price} ({bar.val})</span>
                      </div>
                    )}

                    {/* Bar Pillar */}
                    <div 
                      style={{ 
                        width: '100%', 
                        height: `${bar.pct}%`, 
                        background: isActive 
                          ? 'linear-gradient(to top, rgba(212, 175, 55, 0.25), rgba(212, 175, 55, 0.95))'
                          : 'linear-gradient(to top, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.7))', 
                        borderRadius: '6px 6px 0 0', 
                        transition: 'all 0.4s ease-out', 
                        boxShadow: isActive ? '0 0 15px rgba(212, 175, 55, 0.4)' : 'none',
                        border: isActive ? '1px solid var(--accent-gold)' : '1px solid transparent',
                        borderBottom: 'none'
                      }} 
                      className={`tech-bar ${isActive ? 'active' : ''}`}
                    ></div>

                    {/* X Axis Label */}
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, color: isActive ? 'var(--accent-gold)' : 'var(--text-muted)', marginTop: '8px', transition: 'color 0.3s' }}>{bar.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Specs Footer Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '1px', marginBottom: '5px' }}>SPREAD</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-gold)' }}>From 0.0 Pips</div>
              </div>
              <div style={{ borderLeft: '1px solid #141414', borderRight: '1px solid #141414' }}>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '1px', marginBottom: '5px' }}>SPEED</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>&lt; 15 ms</div>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '1px', marginBottom: '5px' }}>LEVERAGE</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>Up to 1:500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="forex-tech-bg">
          <div className="tech-grid-pattern"></div>
          <div className="tech-glow-orb gold" style={{ width: '450px', height: '450px', top: '10%', right: '5%' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Panel 3 Featured Card: About Magnate Capital */}
          <div className="glass-card tech-card-pulse" style={{ padding: '45px', borderRadius: '20px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)', marginBottom: '60px' }}>
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '40px', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
                  About Us
                </span>
                <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '16px', lineHeight: 1.15 }}>
                  About Magnate Capital
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
                  Magnate Capital is a reliable and reputable trading company with a proven track record of successful transactions. The company values transparency, integrity, and honesty in all dealings, making it a trustworthy partner.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', fontSize: '1.1rem' }}></i>
                    <span>Regulated Broker</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', fontSize: '1.1rem' }}></i>
                    <span>Advanced Trading Platforms</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', fontSize: '1.1rem' }}></i>
                    <span>Diverse Asset Classes</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', fontSize: '1.1rem' }}></i>
                    <span>24/5 Dedicated Support</span>
                  </div>
                </div>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 30px' }}>
                  Start Trading &gt;
                </a>
              </div>

              <div style={{ textCenter: 'center', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,168,75,0.2) 0%, rgba(26,15,46,0) 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(212,168,75,0.3)' }}>
                  <i className="fa-solid fa-building-columns" style={{ fontSize: '5rem', color: 'var(--accent-gold)' }}></i>
                </div>
              </div>
            </div>
          </div>

          <div className="section-title text-center">
            <span className="section-label">Institutional Vision</span>
            <h2>Where Precision Meets Prestige</h2>
            <p className="subtitle">Built for traders who demand institutional power, tailored solutions, and royal treatment.</p>
          </div>

          {/* Vision & Mission 2-Column Grid */}
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '60px' }}>
            <div className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '16px', background: 'rgba(35, 21, 60, 0.75)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '20px', background: 'rgba(212, 168, 75, 0.12)', border: '1px solid rgba(212, 168, 75, 0.3)', marginBottom: '16px' }}>
                <i className="fa-solid fa-compass" style={{ color: 'var(--accent-gold)', fontSize: '0.85rem' }}></i>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>OUR VISION</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>Benchmark in Elite Trading</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                We aspire to be the global benchmark in elite trading—where precision, power, and prestige meet to deliver an unrivaled trading environment.
              </p>
            </div>

            <div className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '16px', background: 'rgba(35, 21, 60, 0.75)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '20px', background: 'rgba(212, 168, 75, 0.12)', border: '1px solid rgba(212, 168, 75, 0.3)', marginBottom: '16px' }}>
                <i className="fa-solid fa-bullseye" style={{ color: 'var(--accent-gold)', fontSize: '0.85rem' }}></i>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>OUR MISSION</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>Lasting Wealth & Transparency</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                Our mission is to create lasting wealth and trust through honest, innovative, and expert trading services tailored to every trader's financial goals.
              </p>
            </div>
          </div>

          {/* Core Values — PILLAR Framework Header */}
          <div className="text-center" style={{ marginBottom: '35px' }}>
            <span className="section-label">Core Values</span>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-gold)' }}>Core Values of Magnate Capital — “PILLAR”</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px' }}>Six foundational principles guiding every solution we deliver.</p>
          </div>

          {/* PILLAR 6-Grid (Exact Copy from Panel 4) */}
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { letter: 'P', title: 'Professionalism', desc: 'We uphold the highest standards of expertise and integrity, reflecting the prestige of the Magnate brand.', icon: 'fa-user-tie' },
              { letter: 'I', title: 'Integrity', desc: 'Honesty and transparency guide every decision, building trust that lasts for generations.', icon: 'fa-shield-heart' },
              { letter: 'L', title: 'Legacy', desc: 'We focus on long-term wealth and relationships that create a lasting impact.', icon: 'fa-building-columns' },
              { letter: 'L', title: 'Leadership', desc: 'Excellence is our benchmark. Every client is treated with the royal standard they deserve.', icon: 'fa-award' },
              { letter: 'A', title: 'Adaptability', desc: 'We stay ahead through innovation, using the latest tools and insights to navigate change.', icon: 'fa-microchip' },
              { letter: 'R', title: 'Relationships', desc: 'Our client-first mindset shapes tailored strategies and enduring partnerships.', icon: 'fa-handshake' }
            ].map((pillar) => (
              <div key={pillar.title} className="glass-card" style={{ padding: '28px', borderRadius: '16px', background: 'rgba(35, 21, 60, 0.65)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace', lineHeight: 1 }}>{pillar.letter}</span>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.1)', border: '1px solid rgba(212, 168, 75, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                    <i className={`fa-solid ${pillar.icon}`} style={{ fontSize: '1rem' }}></i>
                  </div>
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{pillar.letter} – {pillar.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IB Program & White Label Solutions Section (Panel 2 from image) */}
      <section id="partnership" className="ib-partnership-section" style={{ padding: '90px 0', background: 'rgba(22, 11, 40, 0.95)', borderTop: '1px solid var(--border-light)', position: 'relative' }}>
        <div className="container grid-2" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '10px' }}>
              Partner with Us – Earn More with Every Trade
            </span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: '20px' }}>
              Introducing Our Introducing Broker (IB) Program
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px' }}>
              As an IB, you earn competitive commissions on every trade made by your referred clients. Whether you're an individual or a business, our program is designed to help you grow your income by simply referring traders to our platform.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '30px' }}>
              Looking to take it a step further? We also offer White Label Solutions — launch your own branded forex brokerage with our full support, infrastructure, and technology.
            </p>

            {/* Monthly Volume Challenge (For Partners) Card - Panel 2 */}
            <div className="glass-card tech-card-pulse" style={{ padding: '24px', borderRadius: '16px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)', marginTop: '20px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>
                Grow Your Network, Grow Your Rewards
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                Monthly Volume Challenge (For Partners)
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '14px' }}>
                Each month, our top-performing partners earn exclusive bonuses based on their client trading volumes.
              </p>
              <ol style={{ paddingLeft: '20px', color: '#fff', fontSize: '0.9rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '14px' }}>
                <li>Bonus Tiers</li>
                <li>Cash Rewards</li>
                <li>Performance Recognition</li>
              </ol>
              <div style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.9rem', fontStyle: 'italic' }}>
                Let your referrals work for you.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary">
                Become an IB Partner →
              </a>
              <a href="#contact" className="btn" style={{ border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)' }}>
                White Label Solutions
              </a>
            </div>
          </div>

          <div className="glass-card tech-card-pulse" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '2rem', color: 'var(--accent-gold)' }}>
              <i className="fa-solid fa-handshake-angle"></i>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Tier-1 IB Rebate Network</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Instant automated commission payouts, daily reporting dashboards, and multi-tier sub-IB tracking.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '12px' }}>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Max IB Rebate</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace' }}>Up to $12/Lot</div>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Payout Speed</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2ecc71', fontFamily: 'JetBrains Mono, monospace' }}>Daily Auto</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Offers Compare Section */}
      <section id="offers" className="offers-section">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-label">Account Types</span>
            <h2>Exclusive Account Configurations</h2>
            <p className="subtitle">Select the account structure that perfectly matches your capital scale and trading strategy.</p>
          </div>

          {/* 3-Column Account Pricing Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
            
            {/* Card 1: Classic Noble */}
            <div className="glass-card tech-card-pulse" style={{ padding: '35px 28px', borderRadius: '18px', background: 'rgba(26, 15, 46, 0.9)', border: '1px solid rgba(212, 168, 75, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Classic Noble</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace', margin: '15px 0' }}>$50</div>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: '25px 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Spreads: <strong>Starting From 1.5 pips</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Minimum Deposit: <strong>$50</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Commission: <strong>No Commission</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Trading Platform: <strong>cTrader / MT5</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Leverage: <strong>1:500</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Assets Available: <strong>Forex, Commodities, Indices, Cryptocurrencies</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Ideal: <strong>Beginners</strong></span>
                  </li>
                </ul>
              </div>

              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn" style={{ border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, width: '100%', display: 'block', transition: 'all 0.3s' }}>
                Choose Plan &gt;
              </a>
            </div>

            {/* Card 2: Prime Crown */}
            <div className="glass-card tech-card-pulse" style={{ padding: '35px 28px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.95)', border: '2px solid var(--accent-gold)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center', boxShadow: '0 0 30px rgba(212, 168, 75, 0.2)', transform: 'translateY(-6px)' }}>
              <div>
                <span className="gold-badge" style={{ marginBottom: '10px', display: 'inline-block' }}>Most Popular</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Prime Crown</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace', margin: '15px 0' }}>$500</div>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: '25px 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Spreads: <strong>Starting From 0.8 pips</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Minimum Deposit: <strong>$500</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Commission: <strong>No Commission</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Trading Platform: <strong>cTrader / MT5</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Leverage: <strong>1:500</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Assets Available: <strong>Forex, Commodities, Indices, Cryptocurrencies</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Ideal: <strong>Traders</strong></span>
                  </li>
                </ul>
              </div>

              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 24px', borderRadius: '8px', fontWeight: 700, width: '100%', display: 'block' }}>
                Choose Plan &gt;
              </a>
            </div>

            {/* Card 3: ECN Elite */}
            <div className="glass-card tech-card-pulse" style={{ padding: '35px 28px', borderRadius: '18px', background: 'rgba(26, 15, 46, 0.9)', border: '1px solid rgba(212, 168, 75, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>ECN Elite</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace', margin: '15px 0' }}>$5,000</div>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: '25px 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Spreads: <strong>Raw Spreads</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Minimum Deposit: <strong>$5,000</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Commission: <strong>Up to $12 per lot</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Trading Platform: <strong>cTrader / MT5</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Leverage: <strong>1:200</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Assets Available: <strong>Forex, Commodities, Indices, Cryptocurrencies</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)' }}></i>
                    <span>Ideal: <strong>Professionals</strong></span>
                  </li>
                </ul>
              </div>

              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn" style={{ border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, width: '100%', display: 'block', transition: 'all 0.3s' }}>
                Choose Plan &gt;
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Promotions & Partner Loyalty Program Section (Panel 5 & Panel 1 from image) */}
      <section id="promotions" className="promotions-section" style={{ padding: '90px 0', background: 'linear-gradient(180deg, #160B28 0%, #1A0F2E 100%)', borderTop: '1px solid var(--border-light)', position: 'relative' }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="section-label">Exclusive Incentives</span>
            <h2>Promotions & Loyalty Rewards</h2>
            <p className="subtitle">Boost your trading power with our deposit bonus schemes and institutional loyalty rewards.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
            
            {/* Card 1: First Deposit Bonus */}
            <div className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-gift"></i>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>First Deposit Bonus (New Traders)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Get a 20% trading bonus on your first deposit of $100 or more. More capital, more potential.
              </p>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                Claim 20% Bonus →
              </a>
            </div>

            {/* Card 2: Partner Loyalty Program (Panel 5 Exact Points) */}
            <div className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-crown"></i>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>Partner Loyalty Program</h3>
              <div style={{ color: 'var(--accent-gold)', fontSize: '0.88rem', fontWeight: 700, fontStyle: 'italic', marginBottom: '12px' }}>“The Longer You Stay, The More You Earn”</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '14px' }}>Our loyal IBs get rewarded with tiered benefits:</p>
              
              <ol style={{ paddingLeft: '20px', color: '#fff', fontSize: '0.9rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Higher commissions</li>
                <li>Priority support</li>
                <li>Access to exclusive tools & reports</li>
                <li><strong>Build with Magnate, and we'll build with you.</strong></li>
              </ol>
            </div>

            {/* Card 3: Technical Analysis (Panel 1 Exact Text) */}
            <div className="glass-card tech-card-pulse" style={{ padding: '35px', borderRadius: '18px', background: 'rgba(35, 21, 60, 0.85)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 168, 75, 0.15)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-chart-candlestick"></i>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>Technical Analysis</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.7' }}>
                Magnate Capital trading platform offers a wide range of technical analysis tools that help traders make informed investment decisions. With real-time data, advanced charting capabilities, and customizable indicators.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Multi-Tool Calculator Suite */}
      <section id="calculator" className="calculator-section">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-label">Institutional Suite</span>
            <h2>Forex & CFD Trading Calculators</h2>
            <p className="subtitle">Evaluate margin requirements, optimal position sizing, risk exposure, and potential profit/loss in real-time.</p>
          </div>

          {/* Calculator Suite Tool Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '35px', flexWrap: 'wrap' }}>
            <button 
              className={`filter-pill ${activeCalcTool === 'margin' ? 'active' : ''}`}
              onClick={() => setActiveCalcTool('margin')}
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              <i className="fa-solid fa-scale-balanced" style={{ marginRight: '6px' }}></i> Margin & Pip Calculator
            </button>
            <button 
              className={`filter-pill ${activeCalcTool === 'position' ? 'active' : ''}`}
              onClick={() => setActiveCalcTool('position')}
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              <i className="fa-solid fa-calculator" style={{ marginRight: '6px' }}></i> Position Size & Risk Calculator
            </button>
            <button 
              className={`filter-pill ${activeCalcTool === 'profit' ? 'active' : ''}`}
              onClick={() => setActiveCalcTool('profit')}
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              <i className="fa-solid fa-chart-line" style={{ marginRight: '6px' }}></i> Profit / Loss Estimator
            </button>
          </div>

          {/* Tool 1: Margin & Pip Calculator */}
          {activeCalcTool === 'margin' && (
            <div className="calculator-grid">
              <div className="glass-card calc-card tech-card-pulse">
                <div className="form-group">
                  <label htmlFor="calc-asset">Select Instrument</label>
                  <select id="calc-asset" value={calcAsset} onChange={(e) => setCalcAsset(e.target.value)}>
                    {Object.entries(calculatorOptions).map(([key, opt]) => (
                      <option value={key} key={key}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="calc-lots">Trade Volume (Lots)</label>
                  <input type="number" id="calc-lots" min="0.01" max="100" step="0.01" value={calcLots} onChange={(e) => setCalcLots(parseFloat(e.target.value) || 0)} />
                </div>

                <div className="form-group">
                  <label htmlFor="calc-leverage">Account Leverage</label>
                  <select id="calc-leverage" value={calcLeverage} onChange={(e) => setCalcLeverage(parseInt(e.target.value) || 1)}>
                    <option value="500">1:500 (Max Leverage)</option>
                    <option value="400">1:400</option>
                    <option value="200">1:200</option>
                    <option value="100">1:100</option>
                    <option value="50">1:50</option>
                    <option value="1">1:1 (No Leverage)</option>
                  </select>
                </div>
              </div>

              <div className="glass-card calc-results tech-card-pulse">
                <h3>Margin & Pip Output</h3>
                <div className="result-row">
                  <span className="res-lbl">Contract Nominal Value:</span>
                  <span className="res-val">${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculatedContractValue)}</span>
                </div>
                <div className="result-row highlight">
                  <span className="res-lbl">Required Deposit Margin:</span>
                  <span className="res-val gold-color">${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculatedRequiredMargin)}</span>
                </div>
                <div className="result-row">
                  <span className="res-lbl">Pip Value (Per Pip):</span>
                  <span className="res-val">${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculatedPipValue)}</span>
                </div>
                <p className="calc-note">*Calculated dynamically with real-time interbank price feeds and leverage limits.</p>
              </div>
            </div>
          )}

          {/* Tool 2: Position Size & Risk Calculator */}
          {activeCalcTool === 'position' && (
            <div className="calculator-grid">
              <div className="glass-card calc-card tech-card-pulse">
                <div className="form-group">
                  <label htmlFor="risk-balance">Account Balance ($)</label>
                  <input type="number" id="risk-balance" min="100" step="500" value={riskBalance} onChange={(e) => setRiskBalance(parseFloat(e.target.value) || 0)} />
                </div>

                <div className="form-group">
                  <label htmlFor="risk-pct">Risk Tolerance (% of Account)</label>
                  <input type="number" id="risk-pct" min="0.1" max="10" step="0.5" value={riskPct} onChange={(e) => setRiskPct(parseFloat(e.target.value) || 0)} />
                </div>

                <div className="form-group">
                  <label htmlFor="sl-pips">Stop Loss (Pips)</label>
                  <input type="number" id="sl-pips" min="1" max="500" step="1" value={stopLossPips} onChange={(e) => setStopLossPips(parseFloat(e.target.value) || 0)} />
                </div>
              </div>

              <div className="glass-card calc-results tech-card-pulse">
                <h3>Recommended Sizing Output</h3>
                <div className="result-row">
                  <span className="res-lbl">Maximum Cash at Risk:</span>
                  <span className="res-val" style={{ color: '#ef5350' }}>${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculatedRiskAmount)}</span>
                </div>
                <div className="result-row highlight">
                  <span className="res-lbl">Recommended Lot Size:</span>
                  <span className="res-val gold-color" style={{ fontSize: '1.4rem' }}>{calculatedPositionLots} Lots</span>
                </div>
                <div className="result-row">
                  <span className="res-lbl">Position Units:</span>
                  <span className="res-val">{(parseFloat(calculatedPositionLots) * 100000).toLocaleString()} Units</span>
                </div>
                <p className="calc-note">*Helps protect your trading capital by ensuring risk stays within strict money management rules.</p>
              </div>
            </div>
          )}

          {/* Tool 3: Profit / Loss Estimator */}
          {activeCalcTool === 'profit' && (
            <div className="calculator-grid">
              <div className="glass-card calc-card tech-card-pulse">
                <div className="form-group">
                  <label>Order Direction</label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                      type="button"
                      className={`filter-pill ${tradeDirection === 'BUY' ? 'active' : ''}`}
                      onClick={() => setTradeDirection('BUY')}
                      style={{ flex: 1, padding: '10px', background: tradeDirection === 'BUY' ? '#2ecc71' : 'transparent', color: '#fff', borderColor: '#2ecc71' }}
                    >
                      ▲ BUY (Long)
                    </button>
                    <button 
                      type="button"
                      className={`filter-pill ${tradeDirection === 'SELL' ? 'active' : ''}`}
                      onClick={() => setTradeDirection('SELL')}
                      style={{ flex: 1, padding: '10px', background: tradeDirection === 'SELL' ? '#ef5350' : 'transparent', color: '#fff', borderColor: '#ef5350' }}
                    >
                      ▼ SELL (Short)
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="entry-p">Entry Open Price</label>
                  <input type="number" id="entry-p" step="0.0001" value={entryPrice} onChange={(e) => setEntryPrice(parseFloat(e.target.value) || 0)} />
                </div>

                <div className="form-group">
                  <label htmlFor="exit-p">Target Exit Price</label>
                  <input type="number" id="exit-p" step="0.0001" value={exitPrice} onChange={(e) => setExitPrice(parseFloat(e.target.value) || 0)} />
                </div>
              </div>

              <div className="glass-card calc-results tech-card-pulse">
                <h3>Estimated P/L Output</h3>
                <div className="result-row">
                  <span className="res-lbl">Price Distance (Pips):</span>
                  <span className="res-val">{pipDiff.toFixed(1)} Pips</span>
                </div>
                <div className="result-row highlight">
                  <span className="res-lbl">Net Profit / Loss Estimate:</span>
                  <span className={`res-val ${calculatedProfitLoss >= 0 ? 'val-better' : 'val-worse'}`} style={{ fontSize: '1.4rem' }}>
                    {calculatedProfitLoss >= 0 ? '+' : ''}${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculatedProfitLoss)}
                  </span>
                </div>
                <p className="calc-note">*P/L estimates do not include swap rates or raw spread costs.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Economic Calendar Section */}
      <section id="calendar" className="calendar-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="forex-tech-bg">
          <div className="tech-grid-pattern"></div>
          <div className="tech-glow-orb purple" style={{ width: '400px', height: '400px', top: '20%', left: '5%' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title text-center">
            <span className="section-label">Market Intelligence</span>
            <h2>Forex Economic Calendar</h2>
            <p className="subtitle">Real-time macroeconomic releases, interest rate decisions, and high-impact market drivers.</p>
          </div>

          <div className="economic-calendar-container">
            {/* Filter Bar */}
            <div className="calendar-filter-bar">
              {/* Timeframe Filters */}
              <div className="filter-group">
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', marginRight: '6px' }}>Timeframe:</span>
                <button className={`filter-pill ${calendarTimeframe === 'today' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('today')}>Today</button>
                <button className={`filter-pill ${calendarTimeframe === 'tomorrow' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('tomorrow')}>Tomorrow</button>
                <button className={`filter-pill ${calendarTimeframe === 'all' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('all')}>All Week</button>
              </div>

              {/* Currency Filters */}
              <div className="filter-group">
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', marginRight: '6px' }}>Currency:</span>
                {['all', 'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'].map((curr) => (
                  <button key={curr} className={`filter-pill ${calendarCurrency === curr ? 'active' : ''}`} onClick={() => setCalendarCurrency(curr)}>
                    {curr === 'all' ? 'All' : curr}
                  </button>
                ))}
              </div>

              {/* Impact Filters */}
              <div className="filter-group">
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', marginRight: '6px' }}>Impact:</span>
                <button className={`filter-pill ${calendarImpact === 'all' ? 'active' : ''}`} onClick={() => setCalendarImpact('all')}>All Impact</button>
                <button className={`filter-pill ${calendarImpact === 'high' ? 'active' : ''}`} onClick={() => setCalendarImpact('high')}>🔴 High</button>
                <button className={`filter-pill ${calendarImpact === 'medium' ? 'active' : ''}`} onClick={() => setCalendarImpact('medium')}>🟠 Medium</button>
              </div>
            </div>

            {/* Events Table */}
            <div style={{ overflowX: 'auto' }}>
              <table className="calendar-table">
                <thead>
                  <tr style={{ background: 'rgba(18, 9, 34, 0.85)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <th style={{ padding: '16px 20px', width: '120px' }}>Time</th>
                    <th style={{ padding: '16px 20px', width: '100px' }}>Cur</th>
                    <th style={{ padding: '16px 20px', width: '110px' }}>Impact</th>
                    <th style={{ padding: '16px 20px' }}>Economic Event</th>
                    <th style={{ padding: '16px 20px', width: '100px', textAlign: 'right' }}>Actual</th>
                    <th style={{ padding: '16px 20px', width: '100px', textAlign: 'right' }}>Forecast</th>
                    <th style={{ padding: '16px 20px', width: '100px', textAlign: 'right' }}>Previous</th>
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
                        <td className={ev.isBetter === true ? 'val-better' : ev.isBetter === false ? 'val-worse' : 'val-neutral'} style={{ padding: '18px 20px', fontFamily: 'JetBrains Mono, monospace', textAlign: 'right' }}>
                          {ev.actual}
                        </td>
                        <td style={{ padding: '18px 20px', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)', textAlign: 'right' }}>{ev.forecast}</td>
                        <td style={{ padding: '18px 20px', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)', textAlign: 'right' }}>{ev.previous}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Event Detail Modal Window when clicked */}
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
      </section>

      {/* Markets Section */}
      <section id="markets" className="markets-section">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-label">Market Access</span>
            <h2>Trade Global Markets</h2>
            <p className="subtitle">Access hundreds of instruments across six asset classes with top-tier conditions.</p>
          </div>

          <div className="grid-4">
            <div className="market-item">
              <i className="fa-solid fa-coins market-icon"></i>
              <h4>Forex</h4>
              <p>Trade majors, minors, and exotic pairs with low spreads and high leverage.</p>
            </div>
            <div className="market-item">
              <i className="fa-solid fa-gem market-icon"></i>
              <h4>Precious Metals</h4>
              <p>Gold, Silver, Platinum and Palladium. Perfect for hedging risk.</p>
            </div>
            <div className="market-item">
              <i className="fa-solid fa-chart-line market-icon"></i>
              <h4>Indices</h4>
              <p>Trade top global indices including S&P 500, Nasdaq, and FTSE 100.</p>
            </div>
            <div className="market-item">
              <i className="fa-solid fa-link market-icon"></i>
              <h4>Cryptocurrencies</h4>
              <p>Trade Bitcoin, Ethereum, and other digital assets 24/7 without wallets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Live Feed Section */}
      <section id="instagram" className="instagram-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Live Instagram Feed</h2>
            <p className="subtitle">Stay updated with latest announcements and market signals directly from our official account <a href="https://www.instagram.com/magnatecapital/" target="_blank" rel="noreferrer" className="gold-color">@magnatecapital</a></p>
          </div>
          
          <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
            {/* Left Button */}
            <button 
              onClick={prevSlide} 
              style={{ position: 'absolute', left: '-15px', zIndex: 10, background: 'rgba(5,5,5,0.85)', border: '1px solid var(--border-gold)', color: 'var(--accent-gold)', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            {/* Slider window */}
            <div style={{ width: '100%', overflow: 'hidden', padding: '10px 0' }}>
              <div 
                style={{ 
                  display: 'flex', 
                  transform: `translateX(-${instaSlideIndex * 340}px)`, 
                  transition: 'transform 0.4s ease-out', 
                  gap: '20px' 
                }}
              >
                {instaPosts.map((post) => (
                  <div key={post.id} style={{ flex: '0 0 320px', background: '#160B28', borderRadius: '12px', border: '1px solid var(--border-light)', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }} className="insta-native-card">
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', borderBottom: '1px solid #141414' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img src="/favicon.png" alt="Magnate Avatar" style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid var(--accent-gold)' }} />
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>magnatecapital</div>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Dubai, UAE</div>
                        </div>
                      </div>
                      <a href={post.link} target="_blank" rel="noreferrer" className="btn-trading" style={{ padding: '4px 12px', fontSize: '0.7rem', borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>View Post</a>
                    </div>

                    {/* Image Area with Overlay */}
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
                      <img src={post.image} alt={post.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(transparent, rgba(0,0,0,0.85))', padding: '10px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {post.caption}
                      </div>
                    </div>

                    {/* Likes & Comments Counters */}
                    <div style={{ display: 'flex', gap: '15px', padding: '12px', fontSize: '0.8rem', borderBottom: '1px solid #111', color: 'var(--text-primary)', fontWeight: 600 }}>
                      <span><i className="fa-solid fa-heart" style={{ color: 'var(--accent-gold)', marginRight: '5px' }}></i>{post.likes}</span>
                      <span><i className="fa-solid fa-comment" style={{ color: 'var(--accent-gold)', marginRight: '5px' }}></i>{post.commentsCount}</span>
                    </div>

                    {/* Live Comments Stream Box */}
                    <div style={{ padding: '12px', background: '#1A0F2E', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.05em' }}>Live Comments</div>
                      {post.comments.map((comment, cIndex) => (
                        <div key={cIndex} style={{ fontSize: '0.75rem', lineBreak: 'anywhere' }}>
                          <strong style={{ color: 'var(--text-primary)', marginRight: '5px' }}>@{comment.user}:</strong>
                          <span style={{ color: 'var(--text-secondary)' }}>{comment.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button 
              onClick={nextSlide} 
              style={{ position: 'absolute', right: '-15px', zIndex: 10, background: 'rgba(5,5,5,0.85)', border: '1px solid var(--border-gold)', color: 'var(--accent-gold)', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container grid-2">
          <div className="contact-info-block">
            <span className="section-label">Get In Touch</span>
            <h2>Start Your Premium Investment Journey</h2>
            <p className="lead-text">Fill out the registration request, and a Magnate Capital broker representative will connect with you to complete your account setup.</p>
            
            <div className="contact-details">
              <div className="detail-item">
                <i className="fa-solid fa-location-dot gold-color"></i>
                <div>
                  <h5>Headquarters</h5>
                  <p>Al Fattan Currency House, DIFC, Dubai, UAE</p>
                </div>
              </div>
              <div className="detail-item">
                <i className="fa-solid fa-envelope gold-color"></i>
                <div>
                  <h5>Email Support</h5>
                  <p>support@magnatecapital.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card contact-form-card">
            <h3>Request Account Callback</h3>
            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <input type="text" id="form-name" placeholder="Full Name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} required />
              </div>
              <div className="form-group">
                <input type="email" id="form-email" placeholder="Email Address" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} required />
              </div>
              <div className="form-group">
                <input type="tel" id="form-phone" placeholder="Phone Number (e.g., +971...)" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} />
              </div>
              <div className="form-group">
                <select id="form-account" value={contactForm.account} onChange={(e) => setContactForm({ ...contactForm, account: e.target.value })}>
                  <option value="classic">Classic Account ($100 Min)</option>
                  <option value="prime">Prime Account ($1,000 Min)</option>
                  <option value="ecn">ECN Pro Account ($5,000 Min)</option>
                </select>
              </div>
              <div className="form-group">
                <textarea id="form-message" rows="4" placeholder="Your trading experience or messages..." value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Submit Application</button>
            </form>
            {formFeedback.show && (
              <div className={`form-feedback ${formFeedback.success ? 'success' : 'error'}`}>
                {formFeedback.message}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Join Magnate Capital Careers Section */}
      <section className="careers-section" style={{ padding: '80px 0', background: 'linear-gradient(180deg, #1A0F2E 0%, #160B28 100%)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '10px' }}>Join Magnate Capital</h2>
          <p style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 600, marginBottom: '20px' }}>Empower Your Future in Finance</p>
          <p style={{ maxWidth: '750px', margin: '0 auto 30px auto', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Embark on a rewarding journey with Magnate Capital, a leader in the financial services space. We're on the lookout for enthusiastic individuals with a passion for trading, technology, and client engagement.
          </p>
          <div style={{ display: 'inline-block', background: 'rgba(212, 168, 75, 0.12)', border: '1px solid var(--accent-gold)', padding: '14px 28px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>
            Share your CV at <a href="mailto:support@magnatefx.com" style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }}>support@magnatefx.com</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
