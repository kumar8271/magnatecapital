'use client';

import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBackgroundVisual from './components/HeroBackgroundVisual';

export default function Home() {
  // --- STATE MANAGEMENT ---
  
  // 1. Ticker baseline state
  const [tickerItems, setTickerItems] = useState({
    eurusd: { symbol: 'EURUSD', label: 'EURUSD', price: 1.1532, change: 0.12, isUp: true, digits: 4, type: 'forex', flag1: '🇪🇺', flag2: '🇺🇸' },
    gbpusd: { symbol: 'GBPUSD', label: 'GBPUSD', price: 1.3491, change: 0.22, isUp: true, digits: 4, type: 'forex', flag1: '🇬🇧', flag2: '🇺🇸' },
    xauusd: { symbol: 'XAUUSD', label: 'GOLD', price: 4323.35, change: -1.62, isUp: false, digits: 2, type: 'gold' },
    btcusd: { symbol: 'BTCUSD', label: 'BTCUSD', price: 63345.99, change: -0.90, isUp: false, digits: 2, type: 'crypto', cryptoChar: '₿' },
    usoil: { symbol: 'USOIL', label: 'USOIL', price: 78.45, change: -0.35, isUp: false, digits: 2, type: 'oil' },
    spx500: { symbol: 'SPX500', label: 'SPX500', price: 5840.50, change: 0.45, isUp: true, digits: 2, type: 'indices', labelTag: '500' },
    eurjpy: { symbol: 'EURJPY', label: 'EURJPY', price: 183.81, change: 0.18, isUp: true, digits: 2, type: 'forex', flag1: '🇪🇺', flag2: '🇯🇵' },
    usdjpy: { symbol: 'USDJPY', label: 'USDJPY', price: 159.39, change: -0.47, isUp: false, digits: 2, type: 'forex', flag1: '🇺🇸', flag2: '🇯🇵' },
    ethusd: { symbol: 'ETHUSD', label: 'ETHUSD', price: 1882.79, change: -0.75, isUp: false, digits: 2, type: 'eth' },
    eurnzd: { symbol: 'EURNZD', label: 'EURNZD', price: 1.971, change: 0.04, isUp: true, digits: 3, type: 'forex', flag1: '🇪🇺', flag2: '🇳🇿' },
    xagusd: { symbol: 'XAGUSD', label: 'SILVER', price: 38.42, change: 0.85, isUp: true, digits: 2, type: 'silver' }
  });

  // Rates Table Tab Data
  const [ratesData, setRatesData] = useState({
    hot: ['XAUUSD', 'EURJPY', 'BTCUSD', 'USOUSD', 'NASUSD', 'USDJPY', 'XAGUSD', 'ETHUSD', 'BNBUSD', 'EURNZD'],
    profit: ['XAGUSD', 'XAUUSD', 'BNBUSD', 'NASUSD'],
    turnover: ['BTCUSD', 'ETHUSD', 'XAUUSD']
  });

  // Full item dictionary for the rates table
  const [ratesItems, setRatesItems] = useState({
    XAUUSD: { symbol: 'XAUUSD', name: 'Gold', buy: 4323.35, spread: 24, change: -1.62, type: 'gold', spark: [50, 48, 45, 40, 38, 30, 28, 25, 20] },
    EURJPY: { symbol: 'EURJPY', name: 'Euro / Yen', buy: 183.81, spread: 65, change: 0.18, type: 'forex', flag1: '🇪🇺', flag2: '🇯🇵', spark: [30, 35, 32, 40, 42, 45, 44, 48, 50] },
    BTCUSD: { symbol: 'BTCUSD', name: 'Bitcoin', buy: 63345.99, spread: 19, change: -0.90, type: 'crypto', cryptoChar: '₿', spark: [40, 38, 39, 37, 36, 35, 36, 34, 33] },
    USOUSD: { symbol: 'USOUSD', name: 'Crude Oil', buy: 78.45, spread: 26, change: -0.35, type: 'oil', spark: [20, 22, 25, 30, 28, 35, 38, 40, 42] },
    NASUSD: { symbol: 'NASUSD', name: 'Nasdaq 100', buy: 20726.88, spread: 22, change: 1.09, type: 'indices', label: '100', spark: [60, 58, 55, 52, 50, 48, 45, 42, 40] },
    USDJPY: { symbol: 'USDJPY', name: 'US Dollar / Yen', buy: 159.39, spread: 50, change: -0.47, type: 'forex', flag1: '🇺🇸', flag2: '🇯🇵', spark: [35, 38, 40, 42, 43, 44, 45, 46, 48] },
    XAGUSD: { symbol: 'XAGUSD', name: 'Silver', buy: 38.42, spread: 53, change: 0.85, type: 'silver', spark: [50, 48, 46, 42, 38, 35, 30, 28, 25] },
    ETHUSD: { symbol: 'ETHUSD', name: 'Ethereum', buy: 1882.79, spread: 9, change: -0.75, type: 'eth', spark: [42, 40, 41, 39, 43, 42, 44, 45, 46] },
    BNBUSD: { symbol: 'BNBUSD', name: 'Binance Coin', buy: 584.20, spread: 22, change: 1.18, type: 'bnb', spark: [50, 48, 45, 43, 40, 38, 35, 32, 30] },
    EURNZD: { symbol: 'EURNZD', name: 'Euro / NZD', buy: 1.971, spread: 65, change: 0.04, type: 'forex', flag1: '🇪🇺', flag2: '🇳🇿', spark: [30, 32, 35, 38, 40, 42, 43, 45, 48] }
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

  // 3. Instagram Feed Custom Cards State (Live feed from connected @magnatecapital)
  const [instaPosts, setInstaPosts] = useState([
    { id: 1, image: 'https://behold.pictures/eyJ1IjoiM2lKV3hXOXFDTFBvZGMxR1BCckJPd2FzWDN0MSIsImYiOiJFMnhqdnI3MDMzV3JHSlBtdUs0YSIsInAiOiIxODEwMjA3NjYxNjA5MDY5NyIsImgiOiIxbGM2ZWxtIn0.jpg?class=squareLarge', likes: 254, commentsCount: 14, link: 'https://www.instagram.com/reel/DZsCsz3zFuw/', caption: 'XAUUSD (GOLD) market analysis is live. Plan your entry targets with our raw spreads. 📈', comments: [{ user: 'trader_dubai', text: 'Clean charting! Spreads are very tight.' }, { user: 'capital_forex', text: 'Caught the gold breakout today. Execution is flawless.' }] },
    { id: 2, image: 'https://behold.pictures/eyJ1IjoiM2lKV3hXOXFDTFBvZGMxR1BCckJPd2FzWDN0MSIsImYiOiJFMnhqdnI3MDMzV3JHSlBtdUs0YSIsInAiOiIxODEwMTc2NjQyNzgyMTQ2NyIsImgiOiJ6ZTlhbXIifQ.jpg?class=squareLarge', likes: 198, commentsCount: 9, link: 'https://www.instagram.com/p/DWjMCE4kXYt/', caption: 'Calm minds build strong portfolios. Noise fades. Structure stays. Trade with Magnate Capital. 🛡️', comments: [{ user: 'safetrade_inc', text: 'Segregated accounts are a must. Respect.' }, { user: 'vip_trader_ae', text: 'Smooth deposit and fast withdrawal processing.' }] },
    { id: 3, image: 'https://behold.pictures/eyJ1IjoiM2lKV3hXOXFDTFBvZGMxR1BCckJPd2FzWDN0MSIsImYiOiJFMnhqdnI3MDMzV3JHSlBtdUs0YSIsInAiOiIxNzkxMjQyMDQzNjM1MjQ4OSIsImgiOiIxMTdsdThwIn0.jpg?class=squareLarge', likes: 312, commentsCount: 19, link: 'https://www.instagram.com/p/DWguJd0E-nK/', caption: 'No shortcuts. No guesses. Only structure. That\'s how real traders survive the market. ⚡', comments: [{ user: 'scalper_pro', text: 'Zero markup is real on the ECN account.' }, { user: 'market_maker', text: 'Less than 15ms latency. Insane!' }] },
    { id: 4, image: 'https://behold.pictures/eyJ1IjoiM2lKV3hXOXFDTFBvZGMxR1BCckJPd2FzWDN0MSIsImYiOiJFMnhqdnI3MDMzV3JHSlBtdUs0YSIsInAiOiIxODEwOTE5ODE5ODY5NTMwMiIsImgiOiIxOHRjN2QwIn0.jpg?class=squareLarge', likes: 167, commentsCount: 11, link: 'https://www.instagram.com/p/DWY38TfE0im/', caption: 'In the market, discipline speaks louder than emotion. Stay in the game and protect your capital. 📱', comments: [{ user: 'nomad_trader', text: 'The mobile app interface is super clean.' }, { user: 'capital_pro', text: 'Execution speed on mobile is very fast.' }] },
    { id: 5, image: 'https://behold.pictures/eyJ1IjoiM2lKV3hXOXFDTFBvZGMxR1BCckJPd2FzWDN0MSIsImYiOiJFMnhqdnI3MDMzV3JHSlBtdUs0YSIsInAiOiIxODMwNjU3MTA1NzI2MzUwNiIsImgiOiI5eG1yanIifQ.jpg?class=squareLarge', likes: 210, commentsCount: 8, link: 'https://www.instagram.com/p/DWWeWySk5v1/', caption: 'Anyone can enter the market. Few can stay consistent. Magnate Capital focuses on sustainable mindset. 📊', comments: [{ user: 'growth_mindset', text: 'Patience win the race. Solid quote!' }, { user: 'risk_mgmt', text: 'Patience is everything in forex.' }] },
    { id: 6, image: 'https://behold.pictures/eyJ1IjoiM2lKV3hXOXFDTFBvZGMxR1BCckJPd2FzWDN0MSIsImYiOiJFMnhqdnI3MDMzV3JHSlBtdUs0YSIsInAiOiIxODA3ODEzMTk0NTYyMTI5NCIsImgiOiIxNXJhMGs0In0.jpg?class=squareLarge', likes: 182, commentsCount: 12, link: 'https://www.instagram.com/p/DWTt9cmEzro/', caption: 'Don\'t wait for the right time... create it. Trade on your terms and chase your profit goals. 📈', comments: [{ user: 'technical_fx', text: 'Daily market outlook has been very helpful.' }, { user: 'pips_hunter', text: 'AUDUSD is looking hot this week.' }] }
  ]);
  const [instaSlideIndex, setInstaSlideIndex] = useState(0);
  const [liveGoldPrice, setLiveGoldPrice] = useState(4323.35);
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
  const [selectedMatrixCell, setSelectedMatrixCell] = useState({ row: 'GBP', col: 'JPY' });
  const [forexMatrixRates, setForexMatrixRates] = useState({
    USD: 1.0,
    INR: 95.3864,
    EUR: 0.915,
    GBP: 0.785,
    JPY: 155.40,
    CHF: 0.885,
    AUD: 1.520,
    CAD: 1.365,
    NZD: 1.660
  });

  // Legal Policy & KYC Modal State
  const [selectedPolicyModal, setSelectedPolicyModal] = useState(null); // 'kyc', 'aml', 'terms', 'legal'

  // Contact Form Inputs & Feedback
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formFeedback, setFormFeedback] = useState({ show: false, success: false, message: '' });

  // Economic Calendar Filter & Data State
  const [calendarImpact, setCalendarImpact] = useState('all');
  const [calendarCurrency, setCalendarCurrency] = useState('all');
  const [calendarTimeframe, setCalendarTimeframe] = useState('today');
  const [selectedEventDetail, setSelectedEventDetail] = useState(null);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [isCalendarLoading, setIsCalendarLoading] = useState(true);

  // Fetch Live Economic Calendar Data (IST timezone)
  useEffect(() => {
    async function loadCalendar() {
      try {
        setIsCalendarLoading(true);
        const res = await fetch(`/api/calendar?timeframe=${calendarTimeframe}&currency=${calendarCurrency}&impact=${calendarImpact}`, { cache: 'no-store' });
        const data = await res.json();
        if (data && data.events) {
          setCalendarEvents(data.events);
        }
      } catch (err) {
        console.error('Error fetching calendar:', err);
      } finally {
        setIsCalendarLoading(false);
      }
    }
    loadCalendar();
  }, [calendarTimeframe, calendarCurrency, calendarImpact]);

  // Instrument configurations for institutional calculator
  const calculatorOptions = {
    EURUSD: { pipSize: 0.0001, contract: 100000, label: 'EURUSD (Euro / US Dollar)' },
    GBPUSD: { pipSize: 0.0001, contract: 100000, label: 'GBPUSD (British Pound / US Dollar)' },
    USDJPY: { pipSize: 0.01, contract: 100000, label: 'USDJPY (US Dollar / Japanese Yen)' },
    AUDUSD: { pipSize: 0.0001, contract: 100000, label: 'AUDUSD (Australian Dollar / US Dollar)' },
    USDCAD: { pipSize: 0.0001, contract: 100000, label: 'USDCAD (US Dollar / Canadian Dollar)' },
    USDCHF: { pipSize: 0.0001, contract: 100000, label: 'USDCHF (US Dollar / Swiss Franc)' },
    NZDUSD: { pipSize: 0.0001, contract: 100000, label: 'NZDUSD (New Zealand Dollar / US Dollar)' },
    XAUUSD: { pipSize: 0.1, contract: 100, label: 'XAUUSD (Gold vs US Dollar - 100 oz)' },
    BTCUSD: { pipSize: 1, contract: 1, label: 'BTCUSD (Bitcoin vs US Dollar)' },
    USOIL: { pipSize: 0.01, contract: 1000, label: 'USOIL (Crude Oil - 1,000 bbl)' }
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
        const response = await fetch('/api/instagram', { cache: 'no-store' });
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
        const response = await fetch('/api/rates', { cache: 'no-store' });
        const data = await response.json();
        if (data && data.success && data.rates) {
          const r = data.rates;

          if (r.gold && r.gold.price) {
            setLiveGoldPrice(r.gold.price);
          }

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

          // Update Live FX Cross Matrix Rates from API
          if (data.forexRates) {
            setForexMatrixRates(prev => ({ ...prev, ...data.forexRates }));
          }

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

    // Poll live market endpoint every 10 seconds
    const interval = setInterval(fetchLiveMarketRates, 10000);

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

      // Update Live Cross Matrix with subtle real-time interbank micro-ticks
      setForexMatrixRates(prev => {
        const curKeys = ['EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'NZD', 'INR'];
        const mutateKey = curKeys[Math.floor(Math.random() * curKeys.length)];
        const delta = (Math.random() - 0.5) * 0.0004;
        return {
          ...prev,
          [mutateKey]: prev[mutateKey] * (1 + delta)
        };
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
  const currentAssetConfig = calculatorOptions[calcAsset] || calculatorOptions['EURUSD'];
  const activeAssetPrice = tickerItems[calcAsset.toLowerCase()]?.price || (calcAsset === 'USDJPY' ? 155.40 : calcAsset === 'XAUUSD' ? liveGoldPrice : 1.0850);
  
  // Calculate dynamic pip value per 1 standard lot
  const getPipValuePerLot = (symbol) => {
    if (symbol === 'USDJPY') {
      const jpy = forexMatrixRates['JPY'] || 155.40;
      return 1000 / jpy;
    }
    if (symbol === 'USDCAD') {
      const cad = forexMatrixRates['CAD'] || 1.365;
      return 10 / cad;
    }
    if (symbol === 'USDCHF') {
      const chf = forexMatrixRates['CHF'] || 0.885;
      return 10 / chf;
    }
    if (symbol === 'BTCUSD') return 1.0;
    if (symbol === 'XAUUSD') return 10.0;
    if (symbol === 'USOIL') return 10.0;
    return 10.0; // Standard USD quote (EURUSD, GBPUSD, AUDUSD, NZDUSD)
  };

  const pipValuePerLot = getPipValuePerLot(calcAsset);

  // 1. Margin & Pip Value
  const calculatedContractValue = calcLots * currentAssetConfig.contract * (calcAsset === 'XAUUSD' || calcAsset === 'BTCUSD' || calcAsset === 'USOIL' || calcAsset === 'EURUSD' || calcAsset === 'GBPUSD' || calcAsset === 'AUDUSD' || calcAsset === 'NZDUSD' ? activeAssetPrice : 1.0);
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
        setContactForm({ name: '', email: '', phone: '', message: '' });
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

      {/* 1. HERO SECTION (Elefin Full-Viewport & 3D Interactive Coin Stage) */}
      <section className="hero" style={{ 
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '60px 0 40px 0', 
        background: '#010108', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        
        {/* 3D Bitcoin & Indian Rupee Interactive Glowing Coin Canvas Background */}
        <HeroBackgroundVisual />

        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,64,233,0.12) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to top, #010108, transparent)', pointerEvents: 'none', zIndex: 2 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          
          {/* Top Eyebrow / Sub-headline */}
          <div style={{ paddingTop: '20px' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.65rem)', fontWeight: 700, color: '#fff', lineHeight: 1.35, letterSpacing: '-0.015em', margin: 0 }}>
              Magnate Capital <span style={{ fontWeight: 300, color: 'rgba(255, 255, 255, 0.85)' }}>— Trade with Royalty, Built for Speed, Trust &amp; Loyalty.</span>
            </h2>
          </div>

          {/* Bottom Area: Massive CTA Button & Hero Title */}
          <div style={{ paddingBottom: '30px', maxWidth: '780px' }}>
            
            {/* Primary Action Button */}
            <div style={{ marginBottom: '28px' }}>
              <a 
                href="https://trade.magnatefx.com/register/" 
                target="_blank" 
                rel="noreferrer" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#0040E9',
                  color: '#FFFFFF',
                  padding: '16px 44px',
                  borderRadius: '10px',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0, 64, 233, 0.5)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#1D58F6'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 64, 233, 0.75)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#0040E9'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 64, 233, 0.5)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Open an Account
              </a>
            </div>

            {/* Main Headline */}
            <h1 style={{ 
              fontSize: 'clamp(3rem, 6vw, 4.8rem)', 
              fontWeight: 700, 
              lineHeight: 1.04, 
              letterSpacing: '-0.025em', 
              color: '#FFFFFF', 
              margin: '0 0 16px 0' 
            }}>
              Built Heavy.<br />
              Executes Lightning-Speed.
            </h1>

            <p style={{ 
              fontSize: '1.1rem', 
              color: 'rgba(255, 255, 255, 0.75)', 
              maxWidth: '560px', 
              lineHeight: 1.6,
              margin: 0
            }}>
              Trade Forex, Gold, Crypto &amp; more with tight spreads from 0.0 pips, sub-15ms execution, up to 1:500 leverage. Open an account from $50.
            </p>

          </div>

        </div>
      </section>

      {/* Seamless Live Market Ticker */}
      <div className="ticker-wrap" style={{ background: '#05060D', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '12px 0' }}>
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

      {/* 2. CORE ADVANTAGE (Elefin: "What Makes Us the Best in the Industry?") */}
      <section className="core-advantage-section" style={{ padding: '100px 0', background: '#010108', position: 'relative' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '50px' }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Our core</span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
              What Makes Us the Best in the Industry?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            
            {/* Card 1: Friction Free Platform */}
            <div className="glass-card tech-card-pulse" style={{ padding: '36px 30px', borderRadius: '16px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.3s' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38BDF8', marginBottom: '10px', lineHeight: 1.15 }}>
                  Friction free<br />Platform
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Built to perform. Optimised to flow.
                </p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>
                <i className="fa-solid fa-play" style={{ color: '#0040E9', fontSize: '0.7rem' }}></i> Seamless Trading
              </div>
            </div>

            {/* Card 2: Razor-thin spreads */}
            <div className="glass-card tech-card-pulse" style={{ padding: '36px 30px', borderRadius: '16px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.3s' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '10px', lineHeight: 1.15 }}>
                  Razor-thin<br />spreads.
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Raw from 0.0 pips. Less spread, more edge.
                </p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>
                <i className="fa-solid fa-play" style={{ color: '#0040E9', fontSize: '0.7rem' }}></i> Built for Precision
              </div>
            </div>

            {/* Card 3: 90% Automated Withdrawals */}
            <div className="glass-card tech-card-pulse" style={{ padding: '36px 30px', borderRadius: '16px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.3s' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '10px', lineHeight: 1.15 }}>
                  90%<br />Automated
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Withdrawals processed instantly without delay.
                </p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>
                <i className="fa-solid fa-play" style={{ color: '#0040E9', fontSize: '0.7rem' }}></i> Withdraw Smarter
              </div>
            </div>

            {/* Card 4: 1:500 Leverage */}
            <div className="glass-card tech-card-pulse" style={{ padding: '36px 30px', borderRadius: '16px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.3s' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '10px', lineHeight: 1.15 }}>
                  1:500<br />Leverage
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Low risk. High conviction trading.
                </p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>
                <i className="fa-solid fa-play" style={{ color: '#0040E9', fontSize: '0.7rem' }}></i> High Leverage to Empower
              </div>
            </div>

            {/* Card 5: 300+ Instruments */}
            <div className="glass-card tech-card-pulse" style={{ padding: '36px 30px', borderRadius: '16px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.3s' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '10px', lineHeight: 1.15 }}>
                  300+<br />Instruments
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Markets Without Limits.
                </p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>
                <i className="fa-solid fa-play" style={{ color: '#0040E9', fontSize: '0.7rem' }}></i> Trade More Markets
              </div>
            </div>

            {/* Card 6: Award Winning Support */}
            <div 
              className="glass-card tech-card-pulse" 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-support-chat'));
                }
              }}
              style={{ 
                padding: '36px 30px', 
                borderRadius: '16px', 
                background: 'rgba(10, 13, 29, 0.85)', 
                border: '1px solid rgba(0, 64, 233, 0.35)', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38BDF8', marginBottom: '10px', lineHeight: 1.15 }}>
                  Award winning<br />Support
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  24/5 in multiple languages with dedicated VIP desks.
                </p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#38BDF8', fontSize: '0.85rem', fontWeight: 700 }}>
                <i className="fa-solid fa-comments" style={{ color: '#0040E9', fontSize: '0.85rem' }}></i> Start Live Chat &rarr;
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 36px', borderRadius: '10px', fontSize: '1rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              Start Trading <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 3. MODERN ACCOUNT STRUCTURES (Elefin: "Pick your edge.") */}
      <section id="offers" className="account-types-section" style={{ padding: '100px 0', background: '#05060D', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '50px' }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Pick your edge.</span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
              Modern account structures<br />built for <span style={{ color: '#38BDF8' }}>every type</span> of trader.
            </h2>
            <p className="subtitle" style={{ maxWidth: '720px', margin: '14px auto 0 auto', color: 'var(--text-secondary)' }}>
              Start from only $50, trade with advanced account types, and enjoy smooth funding through secure payment systems, including UPI support.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            {/* Classic Noble Account */}
            <div className="glass-card tech-card-pulse" style={{ padding: '36px 30px', borderRadius: '16px', background: 'rgba(10, 13, 29, 0.9)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>Classic Noble.</h3>
                  <span style={{ fontSize: '0.8rem', color: '#38BDF8', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'rgba(0,64,233,0.15)' }}>Beginner Friendly</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>A versatile account built for every type of trader.</p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '20px 0', margin: '20px 0' }}>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace' }}>$50</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Minimum Deposit</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Spread</span>
                    <strong style={{ color: '#fff' }}>From 1.0 pips</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Commission</span>
                    <strong style={{ color: '#2ecc71' }}>ZERO</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Max Leverage</span>
                    <strong style={{ color: '#fff' }}>1:500</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Trade Size</span>
                    <strong style={{ color: '#fff' }}>0.01 (micro lots)</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Platforms</span>
                    <strong style={{ color: '#fff' }}>WebTrader / Mobile</strong>
                  </div>
                </div>
              </div>

              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn" style={{ marginTop: '30px', border: '1.5px solid #0040E9', color: '#38BDF8', padding: '12px', borderRadius: '10px', textAlign: 'center', fontWeight: 700, display: 'block', background: 'rgba(0,64,233,0.1)' }}>
                Open an Account →
              </a>
            </div>

            {/* Prime Crown Account */}
            <div className="glass-card tech-card-pulse" style={{ padding: '36px 30px', borderRadius: '16px', background: 'rgba(10, 13, 29, 0.95)', border: '2px solid #0040E9', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 0 35px rgba(0, 64, 233, 0.4)', transform: 'translateY(-6px)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>Prime Crown.</h3>
                  <span style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 800, padding: '4px 10px', borderRadius: '6px', background: '#0040E9' }}>Most Popular</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>Institutional-grade spreads from 0.3 pips.</p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '20px 0', margin: '20px 0' }}>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace' }}>$500</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Minimum Deposit</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Spread</span>
                    <strong style={{ color: '#fff' }}>From 0.3 pips</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Commission</span>
                    <strong style={{ color: '#2ecc71' }}>ZERO</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Max Leverage</span>
                    <strong style={{ color: '#fff' }}>1:500</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Trade Size</span>
                    <strong style={{ color: '#fff' }}>0.01 (micro lots)</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Platforms</span>
                    <strong style={{ color: '#fff' }}>WebTrader / Mobile</strong>
                  </div>
                </div>
              </div>

              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '30px', padding: '12px', borderRadius: '10px', textAlign: 'center', fontWeight: 700, display: 'block' }}>
                Open an Account →
              </a>
            </div>

            {/* ECN Elite Account */}
            <div className="glass-card tech-card-pulse" style={{ padding: '36px 30px', borderRadius: '16px', background: 'rgba(10, 13, 29, 0.9)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>ECN Elite.</h3>
                  <span style={{ fontSize: '0.8rem', color: '#38BDF8', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'rgba(0,64,233,0.15)' }}>Institutional</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>Direct interbank depth of market with 0.0 pips.</p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '20px 0', margin: '20px 0' }}>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace' }}>$5,000</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Minimum Deposit</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Spread</span>
                    <strong style={{ color: '#38BDF8' }}>Raw 0.0 pips</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Commission</span>
                    <strong style={{ color: '#fff' }}>$8.50 / lot</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Max Leverage</span>
                    <strong style={{ color: '#fff' }}>1:200</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Platforms</span>
                    <strong style={{ color: '#fff' }}>WebTrader / Mobile</strong>
                  </div>
                </div>
              </div>

              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn" style={{ marginTop: '30px', border: '1.5px solid #0040E9', color: '#38BDF8', padding: '12px', borderRadius: '10px', textAlign: 'center', fontWeight: 700, display: 'block', background: 'rgba(0,64,233,0.1)' }}>
                Open an Account →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3.5 TRADING PLATFORMS (Elefin: "Find your perfect trading platform") */}
      <section className="trading-platforms-section" style={{ padding: '100px 0', background: 'linear-gradient(180deg, #0b40e6 0%, #0a2db0 38%, #061131 100%)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title text-center" style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: '1.15' }}>
              Find your perfect<br />trading <span style={{ fontStyle: 'italic', opacity: 0.9 }}>platform</span>
            </h2>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#38BDF8' }}></span>
              <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Driven by technology.</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto 50px auto' }}>
            
            {/* Platform 1: Magnate Trading Platform */}
            <div className="glass-card" style={{ padding: '24px', borderRadius: '12px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', gap: '16px', transition: 'all 0.3s' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: '#38BDF8', flexShrink: 0 }}>
                <i className="fa-solid fa-chart-pie"></i>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff' }}>Magnate Platform</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>World’s Leading #1 friction-free</div>
              </div>
            </div>

            {/* Platform 2: TradingView */}
            <div className="glass-card" style={{ padding: '24px', borderRadius: '12px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', gap: '16px', transition: 'all 0.3s' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: '#38BDF8', flexShrink: 0 }}>
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff' }}>TradingView Sync</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>Industry’s most popular charts</div>
              </div>
            </div>

            {/* Platform 3: Magnate WebTrader */}
            <div className="glass-card" style={{ padding: '24px', borderRadius: '12px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', gap: '16px', transition: 'all 0.3s' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: '#38BDF8', flexShrink: 0 }}>
                <i className="fa-solid fa-desktop"></i>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff' }}>Magnate WebTrader</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>A step-up in trading execution</div>
              </div>
            </div>

          </div>

          {/* Platform Action Button */}
          <div style={{ textAlign: 'center' }}>
            <a 
              href="https://trade.magnatefx.com/register/" 
              target="_blank" 
              rel="noreferrer" 
              className="btn" 
              style={{ background: '#fff', color: '#0040E9', padding: '14px 38px', borderRadius: '10px', fontWeight: 800, fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
            >
              Start Trading Now <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 4. INNOVATION BLUE BANNER (Elefin Cobalt Blue #0040E9) */}
      <section className="innovation-banner-section" style={{ padding: '80px 0', background: '#0040E9', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-10%', top: '-40%', width: '600px', height: '600px', borderRadius: '50%', background: '#38BDF8', opacity: 0.25, filter: 'blur(120px)', pointerEvents: 'none' }}></div>
        
        <div className="container grid-2" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '50px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, lineHeight: '1.15', color: '#fff', letterSpacing: '-0.02em' }}>
              Creating the<br />next <span style={{ fontStyle: 'italic', opacity: 0.9 }}>generation</span> of trading opportunities.
            </h2>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#fff' }}></span>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>Driven by innovation.</span>
            </div>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.95)', marginBottom: '24px', fontWeight: 500 }}>
              Magnate Capital has been building trading infrastructure designed for one purpose: giving traders a faster, smoother, and more transparent way to access global financial markets.
            </p>
            <a href="/about" className="btn" style={{ background: 'rgba(255,255,255,0.2)', border: '1.5px solid #fff', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', backdropFilter: 'blur(10px)' }}>
              About us <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
            </a>
          </div>
        </div>
      </section>

      {/* 5. MARKETS BENTO GRID (Elefin: "Where most see limits, we envision pathways.") */}
      <section id="markets" className="markets-bento-section" style={{ padding: '100px 0', background: '#010108' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '60px' }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>Our core</span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
              Where most see limits, we <span style={{ fontStyle: 'italic', color: '#38BDF8' }}>envision</span> pathways.
            </h2>
            <p className="subtitle" style={{ maxWidth: '680px', margin: '14px auto 0 auto', color: 'var(--text-secondary)' }}>
              Magnate Capital provides access to <strong style={{ color: '#fff' }}>300+ instruments</strong> including forex, commodities, indices, metals, crypto, and more through powerful trading systems.
            </p>
          </div>

          {/* Bento Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px' }}>
            
            {/* Forex Card (Spans 7 cols) */}
            <div className="glass-card tech-card-pulse" style={{ gridColumn: 'span 7', padding: '36px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '300px' }}>
              <div>
                <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.3rem', marginBottom: '16px' }}>
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Forex</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.6', maxWidth: '420px' }}>
                  Trade 100+ major, minor &amp; exotic currency pairs with competitive raw trading conditions and deep institutional liquidity.
                </p>
              </div>
              <div style={{ marginTop: '24px' }}>
                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
                  Start Trading →
                </a>
              </div>
            </div>

            {/* Indices Card (Spans 5 cols) */}
            <div className="glass-card tech-card-pulse" style={{ gridColumn: 'span 5', padding: '36px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '300px' }}>
              <div>
                <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.3rem', marginBottom: '16px' }}>
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Indices</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.6' }}>
                  Trade leading global indices across Spot and Futures contracts (S&amp;P 500, Nasdaq, FTSE 100, DAX 40).
                </p>
              </div>
              <div style={{ marginTop: '24px' }}>
                <a href="/products#indices" style={{ color: '#38BDF8', fontWeight: 700, fontSize: '0.88rem' }}>Explore Indices →</a>
              </div>
            </div>

            {/* Crypto Card (Spans 4 cols) */}
            <div className="glass-card tech-card-pulse" style={{ gridColumn: 'span 4', padding: '36px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}>
              <div>
                <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.3rem', marginBottom: '16px' }}>
                  <i className="fa-brands fa-bitcoin"></i>
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Crypto</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  Trade Bitcoin, Ether, Solana, and 40+ cryptocurrency CFDs 24/7 with zero digital wallet requirement.
                </p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <a href="/products#crypto" style={{ color: '#38BDF8', fontWeight: 700, fontSize: '0.85rem' }}>Trade Crypto →</a>
              </div>
            </div>

            {/* Stocks Card (Spans 4 cols) */}
            <div className="glass-card tech-card-pulse" style={{ gridColumn: 'span 4', padding: '36px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}>
              <div>
                <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.3rem', marginBottom: '16px' }}>
                  <i className="fa-solid fa-building-columns"></i>
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Stocks</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  Access 100+ global blue-chip stocks from US, UK, and European markets with leverage.
                </p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <a href="/products" style={{ color: '#38BDF8', fontWeight: 700, fontSize: '0.85rem' }}>View Stocks →</a>
              </div>
            </div>

            {/* Metals & Energy Card (Spans 4 cols) */}
            <div className="glass-card tech-card-pulse" style={{ gridColumn: 'span 4', padding: '36px', borderRadius: '20px', background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0, 64, 233, 0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}>
              <div>
                <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(0, 64, 233, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.3rem', marginBottom: '16px' }}>
                  <i className="fa-solid fa-coins"></i>
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Metals &amp; Energy</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  Trade Gold, Silver, Platinum, Crude Oil, and Natural Gas with competitive margins.
                </p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <a href="/products#commodities" style={{ color: '#38BDF8', fontWeight: 700, fontSize: '0.85rem' }}>Trade Metals →</a>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 7. ECN VELOCITY & SPEED VISUALIZER */}
      <section className="tech-section" style={{ background: '#010108', padding: '90px 0', position: 'relative' }}>
        <div className="container grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <span className="section-label">Trading Infrastructure</span>
            <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>Trade with ECN Institutional Velocity</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              Connect directly to our deep liquidity pool via high-speed institutional execution bridges. Experience pricing built for professional scalpers, algorithmic traders, and high-frequency accounts.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ color: '#38BDF8', fontSize: '1.2rem', marginTop: '2px' }}><i className="fa-solid fa-circle-check"></i></div>
                <div>
                  <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '4px' }}>Ultra-Low Latency Execution Bridge</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Tier-1 institutional routing and dedicated fiber pipelines for sub-15ms lightning execution.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ color: '#38BDF8', fontSize: '1.2rem', marginTop: '2px' }}><i className="fa-solid fa-circle-check"></i></div>
                <div>
                  <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '4px' }}>Raw Spreads from 0.0 Pips</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Institutional interbank liquidity routing guarantees minimal spreads during peak volatility.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Execution Chart Mock */}
          <div className="glass-card" style={{ background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0,64,233,0.3)', borderRadius: '16px', padding: '26px', backdropFilter: 'blur(10px)', boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 25px rgba(0,64,233,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginLeft: '6px' }}>Execution Bridge</span>
              </div>
              <div style={{ display: 'flex', gap: '4px', background: '#05060D', padding: '3px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <button onClick={() => setTechMode('spreads')} style={{ padding: '4px 10px', fontSize: '0.65rem', fontWeight: 800, borderRadius: '6px', cursor: 'pointer', border: 'none', background: techMode === 'spreads' ? '#0040E9' : 'transparent', color: techMode === 'spreads' ? '#fff' : 'var(--text-muted)' }}>
                  Live Spreads
                </button>
                <button onClick={() => setTechMode('latency')} style={{ padding: '4px 10px', fontSize: '0.65rem', fontWeight: 800, borderRadius: '6px', cursor: 'pointer', border: 'none', background: techMode === 'latency' ? '#0040E9' : 'transparent', color: techMode === 'latency' ? '#fff' : 'var(--text-muted)' }}>
                  Execution Latency
                </button>
              </div>
            </div>

            <div style={{ position: 'relative', height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '20px' }}>
              {[
                { label: 'EUR', name: 'EURUSD', val: techMode === 'spreads' ? '0.0 Pips' : '12 ms', pct: techMode === 'spreads' ? 30 : 55, price: '1.0949' },
                { label: 'GBP', name: 'GBPUSD', val: techMode === 'spreads' ? '0.1 Pips' : '14 ms', pct: techMode === 'spreads' ? 45 : 65, price: '1.2721' },
                { label: 'JPY', name: 'USDJPY', val: techMode === 'spreads' ? '0.1 Pips' : '9 ms', pct: techMode === 'spreads' ? 40 : 40, price: '157.86' },
                { label: 'BTC', name: 'BTCUSD', val: techMode === 'spreads' ? '0.8 Pips' : '18 ms', pct: techMode === 'spreads' ? 75 : 80, price: '$65,038' },
                { label: 'GOLD', name: 'XAUUSD', val: techMode === 'spreads' ? '0.0 Pips' : '8 ms', pct: techMode === 'spreads' ? 50 : 35, price: `$${liveGoldPrice.toFixed(2)}` },
              ].map((bar, idx) => (
                <div key={bar.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '45px', height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{ width: '100%', height: `${bar.pct}%`, background: 'linear-gradient(to top, rgba(0, 64, 233, 0.2), #0040E9)', borderRadius: '6px 6px 0 0', border: '1px solid #38BDF8', borderBottom: 'none' }}></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#38BDF8', marginTop: '6px' }}>{bar.label}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>SPREAD</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#38BDF8' }}>From 0.0 Pips</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>SPEED</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#2ecc71' }}>&lt; 15 ms</div>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>LEVERAGE</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff' }}>1:500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LIVE RATES & POPULAR FX CROSS MATRIX */}
      <section id="live-rates" className="fx-matrix-section" style={{ padding: '90px 0', background: '#05060D', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '40px' }}>
            <span className="section-label">Live Exchange Matrix</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>MOST POPULAR FX PAIRS</h2>
            <p className="subtitle">Real-time cross-currency exchange matrix for global currency pairs.</p>
          </div>

          <div className="glass-card" style={{ padding: '24px', borderRadius: '20px', background: '#080B1A', border: '1px solid rgba(0,64,233,0.3)', overflowX: 'auto', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '20px', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: '#10B981', fontSize: '0.78rem', fontWeight: 700 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }}></span>
                Live Interbank Exchange Stream
              </div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Click any cell to highlight cross pair
              </span>
            </div>

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
                  { code: 'INR', flag: '🇮🇳' },
                  { code: 'EUR', flag: '🇪🇺' },
                  { code: 'USD', flag: '🇺🇸' },
                  { code: 'JPY', flag: '🇯🇵' },
                  { code: 'GBP', flag: '🇬🇧' },
                  { code: 'CHF', flag: '🇨🇭' },
                  { code: 'AUD', flag: '🇦🇺' },
                  { code: 'CAD', flag: '🇨🇦' },
                  { code: 'NZD', flag: '🇳🇿' },
                ].map((row) => (
                  <tr key={row.code} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '12px', fontWeight: 800, color: '#fff', textAlign: 'left', background: 'rgba(0,0,0,0.3)' }}>
                      <span style={{ marginRight: '4px' }}>{row.flag}</span> {row.code}
                    </td>
                    {[
                      { code: 'INR' },
                      { code: 'EUR' },
                      { code: 'USD' },
                      { code: 'JPY' },
                      { code: 'GBP' },
                      { code: 'CHF' },
                      { code: 'AUD' },
                      { code: 'CAD' },
                      { code: 'NZD' },
                    ].map((col) => {
                      const isSelf = row.code === col.code;
                      const isHighlighted = selectedMatrixCell.row === row.code && selectedMatrixCell.col === col.code;
                      
                      let formattedValue = '—';
                      if (!isSelf && forexMatrixRates[row.code] && forexMatrixRates[col.code]) {
                        const rawRate = forexMatrixRates[col.code] / forexMatrixRates[row.code];
                        if (rawRate >= 100) formattedValue = rawRate.toFixed(2);
                        else if (rawRate >= 10) formattedValue = rawRate.toFixed(3);
                        else if (rawRate >= 1) formattedValue = rawRate.toFixed(4);
                        else if (rawRate >= 0.01) formattedValue = rawRate.toFixed(5);
                        else formattedValue = rawRate.toFixed(6);
                      }

                      return (
                        <td
                          key={col.code}
                          onClick={() => !isSelf && setSelectedMatrixCell({ row: row.code, col: col.code })}
                          style={{
                            padding: '12px',
                            background: isHighlighted ? '#0040E9' : isSelf ? 'rgba(255,255,255,0.02)' : 'transparent',
                            color: isHighlighted ? '#fff' : isSelf ? 'var(--text-muted)' : '#fff',
                            fontWeight: isHighlighted ? 800 : 500,
                            cursor: isSelf ? 'default' : 'pointer',
                            transition: 'all 0.15s ease',
                            userSelect: 'none'
                          }}
                          title={isSelf ? '' : `Live ${row.code}/${col.code}: ${formattedValue}`}
                        >
                          {formattedValue}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cross Pair Selected Inspector */}
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', padding: '14px 20px', background: 'rgba(0,0,0,0.5)', borderRadius: '12px', border: '1px solid rgba(0,64,233,0.35)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Active Cross:</span>
                <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 800, fontFamily: 'JetBrains Mono, monospace' }}>
                  {selectedMatrixCell.row} / {selectedMatrixCell.col}
                </span>
                <span style={{ color: '#38BDF8', fontSize: '1.25rem', fontWeight: 900, fontFamily: 'JetBrains Mono, monospace' }}>
                  {forexMatrixRates[selectedMatrixCell.row] && forexMatrixRates[selectedMatrixCell.col]
                    ? (forexMatrixRates[selectedMatrixCell.col] / forexMatrixRates[selectedMatrixCell.row] >= 100
                        ? (forexMatrixRates[selectedMatrixCell.col] / forexMatrixRates[selectedMatrixCell.row]).toFixed(3)
                        : (forexMatrixRates[selectedMatrixCell.col] / forexMatrixRates[selectedMatrixCell.row]).toFixed(5))
                    : '195.557'}
                </span>
              </div>
              <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem', borderRadius: '8px' }}>
                Trade {selectedMatrixCell.row}/{selectedMatrixCell.col} Live →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INSTITUTIONAL TRADING TOOLS (CALCULATOR SUITE) */}
      <section id="calculator" className="calculator-section" style={{ padding: '90px 0', background: '#010108' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '40px' }}>
            <span className="section-label">Institutional Suite</span>
            <h2>Forex &amp; CFD Trading Calculators</h2>
            <p className="subtitle">Evaluate margin requirements, optimal position sizing, risk exposure, and potential profit/loss in real-time.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '35px', flexWrap: 'wrap' }}>
            <button 
              className={`filter-pill ${activeCalcTool === 'margin' ? 'active' : ''}`}
              onClick={() => setActiveCalcTool('margin')}
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              <i className="fa-solid fa-scale-balanced" style={{ marginRight: '6px' }}></i> Margin &amp; Pip Calculator
            </button>
            <button 
              className={`filter-pill ${activeCalcTool === 'position' ? 'active' : ''}`}
              onClick={() => setActiveCalcTool('position')}
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              <i className="fa-solid fa-calculator" style={{ marginRight: '6px' }}></i> Position Size &amp; Risk Calculator
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
              <div className="glass-card calc-card tech-card-pulse" style={{ background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0,64,233,0.35)' }}>
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
                    <option value="200">1:200</option>
                    <option value="100">1:100</option>
                    <option value="50">1:50</option>
                    <option value="1">1:1 (No Leverage)</option>
                  </select>
                </div>
              </div>

              <div className="glass-card calc-results tech-card-pulse" style={{ background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0,64,233,0.35)' }}>
                <h3>Margin &amp; Pip Output</h3>
                <div className="result-row">
                  <span className="res-lbl">Contract Nominal Value:</span>
                  <span className="res-val">${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculatedContractValue)}</span>
                </div>
                <div className="result-row highlight">
                  <span className="res-lbl">Required Deposit Margin:</span>
                  <span className="res-val" style={{ color: '#38BDF8' }}>${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculatedRequiredMargin)}</span>
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
              <div className="glass-card calc-card tech-card-pulse" style={{ background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0,64,233,0.35)' }}>
                <div className="form-group">
                  <label htmlFor="risk-asset">Select Instrument</label>
                  <select id="risk-asset" value={calcAsset} onChange={(e) => setCalcAsset(e.target.value)}>
                    {Object.entries(calculatorOptions).map(([key, opt]) => (
                      <option value={key} key={key}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="risk-balance">Account Balance ($)</label>
                  <input type="number" id="risk-balance" min="100" step="500" value={riskBalance} onChange={(e) => setRiskBalance(parseFloat(e.target.value) || 0)} />
                </div>

                <div className="form-group">
                  <label htmlFor="risk-pct">Risk Tolerance (% of Account)</label>
                  <input type="number" id="risk-pct" min="0.1" max="10" step="0.5" value={riskPct} onChange={(e) => setRiskPct(parseFloat(e.target.value) || 0)} />
                </div>

                <div className="form-group">
                  <label htmlFor="sl-pips">Stop Loss (Pips / Points)</label>
                  <input type="number" id="sl-pips" min="1" max="10000" step="1" value={stopLossPips} onChange={(e) => setStopLossPips(parseFloat(e.target.value) || 0)} />
                </div>
              </div>

              <div className="glass-card calc-results tech-card-pulse" style={{ background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0,64,233,0.35)' }}>
                <h3>Recommended Sizing Output</h3>
                <div className="result-row">
                  <span className="res-lbl">Maximum Cash at Risk:</span>
                  <span className="res-val" style={{ color: '#ef5350' }}>${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculatedRiskAmount)}</span>
                </div>
                <div className="result-row highlight">
                  <span className="res-lbl">Recommended Standard Lots:</span>
                  <span className="res-val" style={{ color: '#38BDF8', fontSize: '1.4rem' }}>{calculatedPositionLots} Lots</span>
                </div>
                <div className="result-row">
                  <span className="res-lbl">Micro / Mini Lots:</span>
                  <span className="res-val">{calculatedMicroLots} Micro ({calculatedMiniLots} Mini)</span>
                </div>
                <div className="result-row">
                  <span className="res-lbl">Total Position Units:</span>
                  <span className="res-val">{calculatedUnits.toLocaleString()} Units</span>
                </div>
                <div className="result-row">
                  <span className="res-lbl">Pip Value (1 Standard Lot):</span>
                  <span className="res-val">${pipValuePerLot.toFixed(2)} USD</span>
                </div>
                <p className="calc-note">*Formula: (Account Balance &times; Risk %) &divide; (Stop Loss &times; Pip Value per Lot). Guarantees exact risk exposure.</p>
              </div>
            </div>
          )}

          {/* Tool 3: Profit / Loss Estimator */}
          {activeCalcTool === 'profit' && (
            <div className="calculator-grid">
              <div className="glass-card calc-card tech-card-pulse" style={{ background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0,64,233,0.35)' }}>
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

              <div className="glass-card calc-results tech-card-pulse" style={{ background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0,64,233,0.35)' }}>
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

      {/* 10. FOREX ECONOMIC CALENDAR */}
      <section id="calendar" className="calendar-section" style={{ padding: '90px 0', background: '#05060D', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="section-label">Market Intelligence</span>
            <h2>Forex Economic Calendar</h2>
            <p className="subtitle">Real-time macroeconomic releases, interest rate decisions, and high-impact market drivers.</p>
          </div>

          <div className="economic-calendar-container" style={{ background: 'rgba(10, 13, 29, 0.85)', border: '1px solid rgba(0,64,233,0.35)', borderRadius: '18px', padding: '24px' }}>
            <div className="calendar-filter-bar" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div className="filter-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', marginRight: '6px' }}>Timeframe:</span>
                  <button className={`filter-pill ${calendarTimeframe === 'today' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('today')}>Today</button>
                  <button className={`filter-pill ${calendarTimeframe === 'tomorrow' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('tomorrow')}>Tomorrow</button>
                  <button className={`filter-pill ${calendarTimeframe === 'all' ? 'active' : ''}`} onClick={() => setCalendarTimeframe('all')}>All Week</button>
                </div>

                <div className="filter-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', marginRight: '6px' }}>Impact:</span>
                  <button className={`filter-pill ${calendarImpact === 'all' ? 'active' : ''}`} onClick={() => setCalendarImpact('all')}>All Impact</button>
                  <button className={`filter-pill ${calendarImpact === 'high' ? 'active' : ''}`} onClick={() => setCalendarImpact('high')}>🔴 High</button>
                  <button className={`filter-pill ${calendarImpact === 'medium' ? 'active' : ''}`} onClick={() => setCalendarImpact('medium')}>🟠 Medium</button>
                </div>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '20px', background: 'rgba(0,64,233,0.15)', border: '1px solid rgba(0,64,233,0.3)', color: '#38BDF8', fontSize: '0.8rem', fontWeight: 700 }}>
                <span>🇮🇳 Timezone: Indian Standard Time (IST, GMT+5:30)</span>
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table className="calendar-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(5, 6, 13, 0.95)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left' }}>Date &amp; Time (IST)</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left' }}>Cur</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left' }}>Impact</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left' }}>Economic Event</th>
                    <th style={{ padding: '14px 16px', textAlign: 'right' }}>Actual</th>
                    <th style={{ padding: '14px 16px', textAlign: 'right' }}>Forecast</th>
                    <th style={{ padding: '14px 16px', textAlign: 'right' }}>Previous</th>
                  </tr>
                </thead>
                <tbody>
                  {isCalendarLoading ? (
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                        <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '1.5rem', color: '#38BDF8', marginBottom: '8px', display: 'block' }}></i>
                        Loading Live IST Economic Calendar...
                      </td>
                    </tr>
                  ) : calendarEvents.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                        No events scheduled for the selected filter.
                      </td>
                    </tr>
                  ) : (
                    calendarEvents.map((ev) => (
                      <tr key={ev.id} className="event-row" onClick={() => setSelectedEventDetail(ev)} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', cursor: 'pointer' }}>
                        <td style={{ padding: '14px 16px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                          <span style={{ display: 'block', color: '#fff', fontWeight: 600 }}>{ev.date}</span>
                          <span>{ev.time}</span>
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#fff' }}>
                            <span>{ev.flag}</span>
                            <span>{ev.country}</span>
                          </span>
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <span className={`impact-badge ${ev.impact}`}>
                            {ev.impact === 'high' ? '🔴 High' : ev.impact === 'medium' ? '🟠 Med' : '🟡 Low'}
                          </span>
                        </td>
                        <td style={{ padding: '14px 16px', fontWeight: 700, color: '#fff' }}>{ev.event}</td>
                        <td className={ev.isBetter === true ? 'val-better' : ev.isBetter === false ? 'val-worse' : 'val-neutral'} style={{ padding: '14px 16px', fontFamily: 'JetBrains Mono, monospace', textAlign: 'right' }}>
                          {ev.actual}
                        </td>
                        <td style={{ padding: '14px 16px', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)', textAlign: 'right' }}>{ev.forecast}</td>
                        <td style={{ padding: '14px 16px', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)', textAlign: 'right' }}>{ev.previous}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Event Detail Modal */}
          {selectedEventDetail && (
            <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <div className="glass-card tech-card-pulse" style={{ maxWidth: '550px', width: '100%', borderRadius: '20px', padding: '30px', background: '#0A0D1D', border: '1px solid #0040E9' }}>
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
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', marginBottom: '6px' }}>Event Overview &amp; Market Impact:</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{selectedEventDetail.description || selectedEventDetail.impactInfo}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', textAlign: 'center', marginBottom: '20px', background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Actual</div>
                    <div className={selectedEventDetail.isBetter ? 'val-better' : 'val-neutral'} style={{ fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace' }}>{selectedEventDetail.actual}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Forecast</div>
                    <div style={{ fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{selectedEventDetail.forecast}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Previous</div>
                    <div style={{ fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}>{selectedEventDetail.previous}</div>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', marginBottom: '8px' }}>Affected Currency Pairs:</div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedEventDetail.affectedPairs?.map(p => (
                      <span key={p} style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid rgba(0, 64, 233, 0.35)', color: '#fff', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://trade.magnatefx.com/register/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '12px', borderRadius: '8px' }}>
                  Trade Live Now →
                </a>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* Instagram Live Feed Section */}
      <section id="instagram" className="instagram-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Live Instagram Feed</h2>
            <p className="subtitle">Stay updated with latest announcements and market signals directly from our official account <a href="https://www.instagram.com/magnatecapital/" target="_blank" rel="noreferrer" style={{ color: '#38BDF8' }}>@magnatecapital</a></p>
          </div>
          
          <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
            {/* Left Button */}
            <button 
              onClick={prevSlide} 
              style={{ position: 'absolute', left: '-15px', zIndex: 10, background: '#0A0D1D', border: '1px solid rgba(0,64,233,0.4)', color: '#38BDF8', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
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
                  <div key={post.id} style={{ flex: '0 0 320px', background: '#0A0D1D', borderRadius: '12px', border: '1px solid var(--border-light)', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }} className="insta-native-card">
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img src="/favicon.png" alt="Magnate Avatar" style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #0040E9' }} />
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>magnatecapital</div>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Dubai, UAE</div>
                        </div>
                      </div>
                      <a href={post.link} target="_blank" rel="noreferrer" className="btn-trading" style={{ padding: '4px 12px', fontSize: '0.7rem', borderColor: '#0040E9', color: '#38BDF8' }}>View Post</a>
                    </div>

                    {/* Image Area with Overlay */}
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
                      <img src={post.image} alt={post.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(transparent, rgba(0,0,0,0.85))', padding: '10px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {post.caption}
                      </div>
                    </div>

                    {/* Likes & Comments Counters */}
                    <div style={{ display: 'flex', gap: '15px', padding: '12px', fontSize: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--text-primary)', fontWeight: 600 }}>
                      <span><i className="fa-solid fa-heart" style={{ color: '#38BDF8', marginRight: '5px' }}></i>{post.likes}</span>
                      <span><i className="fa-solid fa-comment" style={{ color: '#38BDF8', marginRight: '5px' }}></i>{post.commentsCount}</span>
                    </div>

                    {/* Live Comments Stream Box */}
                    <div style={{ padding: '12px', background: '#05060D', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#38BDF8', fontWeight: 700, letterSpacing: '0.05em' }}>Live Comments</div>
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
              style={{ position: 'absolute', right: '-15px', zIndex: 10, background: '#0A0D1D', border: '1px solid rgba(0,64,233,0.4)', color: '#38BDF8', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section" style={{ background: '#010108' }}>
        <div className="container grid-2">
          <div className="contact-info-block">
            <span className="section-label">Get In Touch</span>
            <h2>Start Your Premium Investment Journey</h2>
            <p className="lead-text">Fill out the registration request, and a Magnate Capital broker representative will connect with you to complete your account setup.</p>
            
            <div className="contact-details">
              <div className="detail-item">
                <i className="fa-solid fa-location-dot" style={{ color: '#38BDF8' }}></i>
                <div>
                  <h5>Headquarters</h5>
                  <p>Dubai, UAE</p>
                </div>
              </div>
              <div className="detail-item">
                <i className="fa-solid fa-envelope" style={{ color: '#38BDF8' }}></i>
                <div>
                  <h5>Email Support</h5>
                  <p>support@magnatecapital.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card contact-form-card" style={{ background: 'rgba(10, 13, 29, 0.9)', border: '1px solid rgba(0,64,233,0.3)' }}>
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
      <section className="careers-section" style={{ padding: '80px 0', background: 'linear-gradient(180deg, #010108 0%, #05060D 100%)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#38BDF8', marginBottom: '10px' }}>Join Magnate Capital</h2>
          <p style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 600, marginBottom: '20px' }}>Empower Your Future in Finance</p>
          <p style={{ maxWidth: '750px', margin: '0 auto 30px auto', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Embark on a rewarding journey with Magnate Capital, a leader in the financial services space. We're on the lookout for enthusiastic individuals with a passion for trading, technology, and client engagement.
          </p>
          <div style={{ display: 'inline-block', background: 'rgba(0, 64, 233, 0.15)', border: '1px solid #0040E9', padding: '14px 28px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 700, color: '#fff', boxShadow: '0 0 20px rgba(0,64,233,0.3)' }}>
            Share your CV at <a href="mailto:support@magnatefx.com" style={{ color: '#38BDF8', textDecoration: 'underline' }}>support@magnatefx.com</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
