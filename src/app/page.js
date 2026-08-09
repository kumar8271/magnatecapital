'use client';

import { useState, useEffect, useRef } from 'react';

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

  // Interactive Calculator State
  const [calcAsset, setCalcAsset] = useState('EURUSD');
  const [calcLots, setCalcLots] = useState(1.00);
  const [calcLeverage, setCalcLeverage] = useState(500);

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

  // 3. REST API & WebSockets Live Feeds
  useEffect(() => {
    // A. Fetch Daily Forex Baselines and update BOTH tables
    async function fetchBaselines() {
      try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();
        if (data && data.rates) {
          const rates = data.rates;
          
          // Compute Rates
          const eurusd = 1 / (rates.EUR || 0.915);
          const gbpusd = 1 / (rates.GBP || 0.785);
          const audusd = 1 / (rates.AUD || 1.415);
          const nzdusd = 1 / (rates.NZD || 1.698);
          const usdjpy = rates.JPY || 157.80;
          const usdchf = rates.CHF || 0.885;
          const usdcad = rates.CAD || 1.378;

          const eurgbp = (rates.GBP || 0.785) / (rates.EUR || 0.915);
          const eurjpy = (rates.JPY || 157.80) / (rates.EUR || 0.915);
          const gbpjpy = (rates.JPY || 157.80) / (rates.GBP || 0.785);
          const audcad = (rates.CAD || 1.378) / (rates.AUD || 1.415);
          const nzdchf = (rates.CHF || 0.885) / (rates.NZD || 1.698);
          const eurnzd = (rates.NZD || 1.63) / (rates.EUR || 0.915);

          // Update Ticker state
          setTickerItems(prev => ({
            ...prev,
            eurusd: { ...prev.eurusd, price: eurusd },
            gbpusd: { ...prev.gbpusd, price: gbpusd },
            usdjpy: { ...prev.usdjpy, price: usdjpy },
            eurnzd: { ...prev.eurnzd, price: eurnzd },
            eurjpy: { ...prev.eurjpy, price: eurjpy }
          }));

          // Update Rates table list
          setRatesItems(prev => ({
            ...prev,
            USDJPY: { ...prev.USDJPY, buy: usdjpy },
            EURJPY: { ...prev.EURJPY, buy: eurjpy },
            EURNZD: { ...prev.EURNZD, buy: eurnzd }
          }));

          // Update Market Watch Forex Pairs state (with high/low/price baselines)
          setForexPairs(prev => {
            return prev.map(item => {
              let calculatedPrice = item.price;
              if (item.symbol === 'EUR/USD') calculatedPrice = eurusd;
              else if (item.symbol === 'GBP/USD') calculatedPrice = gbpusd;
              else if (item.symbol === 'AUD/USD') calculatedPrice = audusd;
              else if (item.symbol === 'NZD/USD') calculatedPrice = nzdusd;
              else if (item.symbol === 'USD/JPY') calculatedPrice = usdjpy;
              else if (item.symbol === 'USD/CHF') calculatedPrice = usdchf;
              else if (item.symbol === 'USD/CAD') calculatedPrice = usdcad;
              else if (item.symbol === 'EUR/GBP') calculatedPrice = eurgbp;
              else if (item.symbol === 'EUR/JPY') calculatedPrice = eurjpy;
              else if (item.symbol === 'GBP/JPY') calculatedPrice = gbpjpy;
              else if (item.symbol === 'AUD/CAD') calculatedPrice = audcad;
              else if (item.symbol === 'NZD/CHF') calculatedPrice = nzdchf;

              return {
                ...item,
                price: calculatedPrice,
                high: calculatedPrice * 1.002,
                low: calculatedPrice * 0.998
              };
            });
          });
        }
      } catch (err) {
        console.warn('Could not fetch forex baseline rates, using defaults:', err);
      }
    }

    fetchBaselines();

    // B. WebSocket Crypto Stream
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker/ethusdt@ticker/bnbusdt@ticker');
    
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        const binanceSymbol = data.s;
        const closePrice = parseFloat(data.c);
        const priceChangePct = parseFloat(data.P);

        let ourSymbol = '';
        if (binanceSymbol === 'BTCUSDT') ourSymbol = 'BTCUSD';
        else if (binanceSymbol === 'ETHUSDT') ourSymbol = 'ETHUSD';
        else if (binanceSymbol === 'BNBUSDT') ourSymbol = 'BNBUSD';

        if (ourSymbol) {
          // Sync Ticker
          const tickerKey = ourSymbol.toLowerCase();
          setTickerItems(prev => {
            if (prev[tickerKey]) {
              return {
                ...prev,
                [tickerKey]: { ...prev[tickerKey], price: closePrice, change: priceChangePct, isUp: priceChangePct >= 0 }
              };
            }
            return prev;
          });

          // Sync Rates list
          setRatesItems(prev => {
            if (prev[ourSymbol]) {
              const updatedSpark = [...prev[ourSymbol].spark];
              updatedSpark.shift();
              updatedSpark.push(closePrice);
              return {
                ...prev,
                [ourSymbol]: { ...prev[ourSymbol], buy: closePrice, change: priceChangePct, spark: updatedSpark }
              };
            }
            return prev;
          });
        }
      } catch (err) {
        console.error('Error parsing WebSocket message:', err);
      }
    };

    ws.onerror = (err) => {
      // Handle socket error gracefully
    };

    return () => {
      if (ws.readyState === WebSocket.CONNECTING) {
        ws.onopen = () => ws.close();
      } else if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
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
  const calculatedContractValue = calcLots * currentAssetConfig.contract * activeAssetPrice;
  const calculatedRequiredMargin = calculatedContractValue / calcLeverage;
  const calculatedPipValue = calcLots * currentAssetConfig.contract * currentAssetConfig.pipSize;

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
            <img src="/logo.png" alt="Magnate Capital" style={{ height: '40px', width: 'auto', display: 'block' }} />
          </div>
          <nav className={isMobileMenuOpen ? 'active' : ''}>
            <ul>
              <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
              <li><a href="#live-rates" onClick={() => setIsMobileMenuOpen(false)}>Products</a></li>
              <li>
                <a href="#calculator" onClick={() => setIsMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Platform <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.6rem' }}></i>
                </a>
              </li>
              <li><a href="#offers" onClick={() => setIsMobileMenuOpen(false)}>Accounts</a></li>
              <li><a href="#calendar" onClick={() => setIsMobileMenuOpen(false)}>Economic Calendar</a></li>
              <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Partnership</a></li>
              <li><a href="#offers" onClick={() => setIsMobileMenuOpen(false)}>Promotions</a></li>
              <li>
                <a 
                  href="https://trade.magnatefx.com/login/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn" 
                  style={{ background: 'var(--accent-gold)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  onClick={() => setIsMobileMenuOpen(false)}
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
                  onClick={() => setIsMobileMenuOpen(false)}
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

      {/* Market Watch - Forex Live Prices Feed Section */}
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
          <div className="section-title text-center">
            <span className="section-label">About Magnate Capital</span>
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
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>The "PILLAR" Framework</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px' }}>Six foundational principles guiding every solution we deliver.</p>
          </div>

          {/* PILLAR 6-Grid */}
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { letter: 'P', title: 'Professionalism', desc: 'We act with expertise, integrity, and dedication to exceed client expectations.', icon: 'fa-user-tie' },
              { letter: 'I', title: 'Integrity', desc: 'We maintain complete transparency, trust, and honesty in all transactions.', icon: 'fa-shield-heart' },
              { letter: 'L', title: 'Legacy', desc: 'We build sustainable wealth and strategic value that lasts across generations.', icon: 'fa-building-columns' },
              { letter: 'L', title: 'Leadership (Excellence)', desc: 'We lead the global market with top-tier execution and industry innovation.', icon: 'fa-award' },
              { letter: 'A', title: 'Adaptability (Innovation)', desc: 'We leverage cutting-edge tools and Next-Gen platforms to stay ahead.', icon: 'fa-microchip' },
              { letter: 'R', title: 'Relationships (Client-Centric)', desc: 'We tailor every trading solution directly to our clients’ unique goals.', icon: 'fa-handshake' }
            ].map((pillar) => (
              <div key={pillar.title} className="glass-card" style={{ padding: '28px', borderRadius: '16px', background: 'rgba(35, 21, 60, 0.65)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--accent-gold)', fontFamily: 'JetBrains Mono, monospace', lineHeight: 1 }}>{pillar.letter}</span>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(212, 168, 75, 0.1)', border: '1px solid rgba(212, 168, 75, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                    <i className={`fa-solid ${pillar.icon}`} style={{ fontSize: '1rem' }}></i>
                  </div>
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{pillar.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Offers Compare Section */}
      <section id="offers" className="offers-section">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-label">Account Types</span>
            <h2>Exclusive Account Types</h2>
            <p className="subtitle">Flexible account configurations designed to match your specific trading scale and style.</p>
          </div>

          <div className="tabs-header">
            <button className={`tab-btn ${activeAccountTab === 'classic' ? 'active' : ''}`} onClick={() => setActiveAccountTab('classic')}>Classic Account</button>
            <button className={`tab-btn ${activeAccountTab === 'prime' ? 'active' : ''}`} onClick={() => setActiveAccountTab('prime')}>Prime Account</button>
            <button className={`tab-btn ${activeAccountTab === 'ecn' ? 'active' : ''}`} onClick={() => setActiveAccountTab('ecn')}>ECN Pro Account</button>
          </div>

          {activeAccountTab === 'classic' && (
            <div className="tab-content active">
              <div className="grid-2 flex-align-center">
                <div className="tab-info">
                  <span className="gold-badge">Best for Starters</span>
                  <h3>Classic Account</h3>
                  <p className="offer-desc">Enter the global financial markets with minimal entry barriers and access all core features of the MetaTrader 5 platform.</p>
                  <ul className="offer-specs">
                    <li><i className="fa-solid fa-check gold-color"></i> Minimum Deposit: <strong>$100</strong></li>
                    <li><i className="fa-solid fa-check gold-color"></i> Spreads: <strong>From 1.2 Pips</strong></li>
                    <li><i className="fa-solid fa-check gold-color"></i> Leverage: <strong>Up to 1:500</strong></li>
                    <li><i className="fa-solid fa-check gold-color"></i> Commission: <strong>$0 (Zero Commission)</strong></li>
                    <li><i className="fa-solid fa-check gold-color"></i> Execution: <strong>Market Execution</strong></li>
                  </ul>
                  <a href="https://trade.magnatefx.com/register/" className="btn btn-primary" target="_blank" rel="noreferrer">Open Classic Account</a>
                </div>
                <div className="tab-mockup">
                  <div className="glass-card metrics-card">
                    <div className="metrics-row">
                      <span className="metric-label">Min Deposit</span>
                      <span className="metric-val">$100</span>
                    </div>
                    <div className="metrics-row">
                      <span className="metric-label">Spreads</span>
                      <span className="metric-val">1.2 Pips</span>
                    </div>
                    <div className="metrics-row">
                      <span className="metric-label">Leverage</span>
                      <span className="metric-val">1:500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeAccountTab === 'prime' && (
            <div className="tab-content active">
              <div className="grid-2 flex-align-center">
                <div className="tab-info">
                  <span className="gold-badge">Most Popular</span>
                  <h3>Prime VIP Account</h3>
                  <p className="offer-desc">Experience optimal trading environments with premium liquidity pipelines, tighter spreads, and dedicated account manager support.</p>
                  <ul className="offer-specs">
                    <li><i className="fa-solid fa-check gold-color"></i> Minimum Deposit: <strong>$1,000</strong></li>
                    <li><i className="fa-solid fa-check gold-color"></i> Spreads: <strong>From 0.4 Pips</strong></li>
                    <li><i className="fa-solid fa-check gold-color"></i> Leverage: <strong>Up to 1:400</strong></li>
                    <li><i className="fa-solid fa-check gold-color"></i> Commission: <strong>$2 per side per lot</strong></li>
                    <li><i className="fa-solid fa-check gold-color"></i> Priority Withdrawal Processing: <strong>Yes</strong></li>
                  </ul>
                  <a href="https://trade.magnatefx.com/register/" className="btn btn-primary" target="_blank" rel="noreferrer">Open Prime Account</a>
                </div>
                <div className="tab-mockup">
                  <div className="glass-card metrics-card VIP">
                    <div className="metrics-row">
                      <span className="metric-label">Min Deposit</span>
                      <span className="metric-val">$1,000</span>
                    </div>
                    <div className="metrics-row">
                      <span className="metric-label">Spreads</span>
                      <span className="metric-val">0.4 Pips</span>
                    </div>
                    <div className="metrics-row">
                      <span className="metric-label">Leverage</span>
                      <span className="metric-val">1:400</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeAccountTab === 'ecn' && (
            <div className="tab-content active">
              <div className="grid-2 flex-align-center">
                <div className="tab-info">
                  <span className="gold-badge">Institutional Grade</span>
                  <h3>ECN Pro Account</h3>
                  <p className="offer-desc">Direct market access (DMA) directly to top-tier liquidity networks. Zero markups, raw interbank spreads, and absolute transparency.</p>
                  <ul className="offer-specs">
                    <li><i className="fa-solid fa-check gold-color"></i> Minimum Deposit: <strong>$5,000</strong></li>
                    <li><i className="fa-solid fa-check gold-color"></i> Spreads: <strong>Raw from 0.0 Pips</strong></li>
                    <li><i className="fa-solid fa-check gold-color"></i> Leverage: <strong>Up to 1:200</strong></li>
                    <li><i className="fa-solid fa-check gold-color"></i> Commission: <strong>$3 per side per lot</strong></li>
                    <li><i className="fa-solid fa-check gold-color"></i> VPS Hosting Integration: <strong>Complimentary</strong></li>
                  </ul>
                  <a href="https://trade.magnatefx.com/register/" className="btn btn-primary" target="_blank" rel="noreferrer">Open ECN Pro Account</a>
                </div>
                <div className="tab-mockup">
                  <div className="glass-card metrics-card ECN">
                    <div className="metrics-row">
                      <span className="metric-label">Min Deposit</span>
                      <span className="metric-val">$5,000</span>
                    </div>
                    <div className="metrics-row">
                      <span className="metric-label">Spreads</span>
                      <span className="metric-val">0.0 Pips</span>
                    </div>
                    <div className="metrics-row">
                      <span className="metric-label">Leverage</span>
                      <span className="metric-val">1:200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section id="calculator" className="calculator-section">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-label">Trading Tools</span>
            <h2>Interactive Margin & Pip Calculator</h2>
            <p className="subtitle">Quickly evaluate contract details, margin requirements, and pip values before taking positions.</p>
          </div>

          <div className="calculator-grid">
            <div className="glass-card calc-card">
              <div className="form-group">
                <label htmlFor="calc-asset">Select Instrument</label>
                <select id="calc-asset" value={calcAsset} onChange={(e) => setCalcAsset(e.target.value)}>
                  {Object.entries(calculatorOptions).map(([key, opt]) => (
                    <option value={key} key={key}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="calc-lots">Lot Size (Volume)</label>
                <input type="number" id="calc-lots" min="0.01" max="100" step="0.01" value={calcLots} onChange={(e) => setCalcLots(parseFloat(e.target.value) || 0)} />
              </div>

              <div className="form-group">
                <label htmlFor="calc-leverage">Leverage</label>
                <select id="calc-leverage" value={calcLeverage} onChange={(e) => setCalcLeverage(parseInt(e.target.value) || 1)}>
                  <option value="500">1:500</option>
                  <option value="400">1:400</option>
                  <option value="200">1:200</option>
                  <option value="100">1:100</option>
                  <option value="50">1:50</option>
                  <option value="1">1:1 (No Leverage)</option>
                </select>
              </div>
            </div>

            <div className="glass-card calc-results">
              <h3>Calculation Output</h3>
              <div className="result-row">
                <span className="res-lbl">Contract Value:</span>
                <span className="res-val">${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculatedContractValue)}</span>
              </div>
              <div className="result-row highlight">
                <span className="res-lbl">Required Margin:</span>
                <span className="res-val gold-color">${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculatedRequiredMargin)}</span>
              </div>
              <div className="result-row">
                <span className="res-lbl">Pip Value (USD):</span>
                <span className="res-val">${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculatedPipValue)}</span>
              </div>
              <p className="calc-note">*Values are calculated dynamically based on current market rates and leverage parameters.</p>
            </div>
          </div>
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
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginRight: '4px' }}>Time:</span>
                <button className={`filter-pill ${calendarTimeframe === 'today' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('today')}>Today</button>
                <button className={`filter-pill ${calendarTimeframe === 'tomorrow' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('tomorrow')}>Tomorrow</button>
                <button className={`filter-pill ${calendarTimeframe === 'all' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('all')}>All Week</button>
              </div>

              {/* Currency Filters */}
              <div className="filter-group">
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginRight: '4px' }}>Currency:</span>
                {['all', 'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'].map((curr) => (
                  <button key={curr} className={`filter-pill ${calendarCurrency === curr ? 'active' : ''}`} onClick={() => setCalendarCurrency(curr)}>
                    {curr === 'all' ? 'All' : curr}
                  </button>
                ))}
              </div>

              {/* Impact Filters */}
              <div className="filter-group">
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginRight: '4px' }}>Impact:</span>
                <button className={`filter-pill ${calendarImpact === 'all' ? 'active' : ''}`} onClick={() => setCalendarImpact('all')}>All Impact</button>
                <button className={`filter-pill ${calendarImpact === 'high' ? 'active' : ''}`} onClick={() => setCalendarImpact('high')}>🔴 High</button>
                <button className={`filter-pill ${calendarImpact === 'medium' ? 'active' : ''}`} onClick={() => setCalendarImpact('medium')}>🟠 Medium</button>
              </div>
            </div>

            {/* Events Table */}
            <div style={{ overflowX: 'auto' }}>
              <table className="calendar-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Cur</th>
                    <th>Impact</th>
                    <th>Event</th>
                    <th>Actual</th>
                    <th>Forecast</th>
                    <th>Previous</th>
                  </tr>
                </thead>
                <tbody>
                  {economicEvents
                    .filter(ev => calendarTimeframe === 'all' || ev.date === calendarTimeframe)
                    .filter(ev => calendarCurrency === 'all' || ev.country === calendarCurrency)
                    .filter(ev => calendarImpact === 'all' || ev.impact === calendarImpact)
                    .map((ev) => (
                      <tr key={ev.id} className="event-row" onClick={() => setSelectedEventDetail(ev)}>
                        <td style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{ev.time}</td>
                        <td>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#fff' }}>
                            <span>{ev.flag}</span>
                            <span>{ev.country}</span>
                          </span>
                        </td>
                        <td>
                          <span className={`impact-badge ${ev.impact}`}>
                            {ev.impact === 'high' ? '🔴 High' : ev.impact === 'medium' ? '🟠 Med' : '🟡 Low'}
                          </span>
                        </td>
                        <td style={{ fontWeight: 700, color: '#fff' }}>{ev.event}</td>
                        <td className={ev.isBetter === true ? 'val-better' : ev.isBetter === false ? 'val-worse' : 'val-neutral'} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          {ev.actual}
                        </td>
                        <td style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{ev.forecast}</td>
                        <td style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{ev.previous}</td>
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

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-top grid-3">
            <div className="footer-brand">
              <div className="logo-area" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src="/logo.png" alt="Magnate Capital" style={{ height: '40px', width: 'auto', display: 'block' }} />
              </div>
              <p className="brand-desc">Magnate Capital is a tier-1 multi-asset broker providing advanced retail and institutional solutions globally.</p>
              <div className="footer-socials" style={{ display: 'flex', gap: '14px', marginTop: '16px' }}>
                <a href="https://www.instagram.com/magnatecapital/" target="_blank" rel="noreferrer" title="Instagram" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.3s' }}><i className="fa-brands fa-instagram"></i></a>
                <a href="https://x.com/MagnateCapital" target="_blank" rel="noreferrer" title="X (Twitter)" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.3s', display: 'inline-flex', alignItems: 'center' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                <a href="https://www.facebook.com/profile.php?id=61577696182180" target="_blank" rel="noreferrer" title="Facebook" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.3s' }}><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/magnate-capital-320425371/" target="_blank" rel="noreferrer" title="LinkedIn" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.3s' }}><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://t.me/magnatecapital" target="_blank" rel="noreferrer" title="Telegram" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.3s' }}><i className="fa-brands fa-telegram"></i></a>
                <a href="https://www.youtube.com/@MagnateCapital" target="_blank" rel="noreferrer" title="YouTube" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.3s' }}><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
            <div>
              <h4>Trading Markets</h4>
              <ul className="footer-links">
                <li><a href="#markets">Forex Trading</a></li>
                <li><a href="#markets">Commodities & Gold</a></li>
                <li><a href="#markets">Stock Indices</a></li>
                <li><a href="#markets">Crypto CFDs</a></li>
              </ul>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about">About Our Firm</a></li>
                <li><a href="#offers">Account Compare</a></li>
                <li><a href="#calculator">Trading Calculator</a></li>
                <li><a href="#contact">Contact Support</a></li>
              </ul>
            </div>
          </div>

          <div className="risk-warning">
            <p><strong>High Risk Investment Warning:</strong> Trading Foreign Exchange (Forex) and Contracts for Difference (CFDs) carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange or CFDs, you should carefully consider your investment objectives, level of experience, and risk appetite. There is a possibility that you could sustain a loss of some or all of your initial investment and, therefore, you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange and CFD trading, and seek advice from an independent financial advisor if you have any doubts.</p>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Magnate Capital. All rights reserved. Registered under license regulations.</p>
            <p>Created matching branding instructions.</p>
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
              border: '1px solid var(--border-light)',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0,0,0,0.85)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Header */}
            <div style={{ background: '#075E54', padding: '15px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/favicon.png" alt="Support Agent" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--accent-gold)' }} />
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
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #141414', borderRadius: '8px 8px 8px 0', padding: '10px', fontSize: '0.8rem', color: 'var(--text-secondary)', alignSelf: 'flex-start', maxWidth: '90%' }}>
                Hello there! Welcome to Magnate Capital support. How can we assist you with your account setup today?
              </div>
            </div>

            {/* Input Form Footer */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (!waMessage.trim()) return;
                window.open('https://trade.magnatefx.com/register/', '_blank');
                setWaMessage('');
                setIsWAChatOpen(false);
              }}
              style={{ display: 'flex', borderTop: '1px solid #141414', background: '#160B28', padding: '10px', gap: '8px', alignItems: 'center' }}
            >
              <input 
                type="text"
                placeholder="Type your message..."
                value={waMessage}
                onChange={(e) => setWaMessage(e.target.value)}
                style={{ flexGrow: 1, background: '#160B28', border: '1px solid #1c1c1c', borderRadius: '8px', padding: '8px 12px', color: '#fff', fontSize: '0.8rem', outline: 'none' }}
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
    </>
  );
}
