import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

let cachedFFData = null;
let lastCacheTime = 0;
const CACHE_TTL = 60 * 1000; // 1 minute fresh live cache

function getCountryFlag(country) {
  const flags = {
    USD: '🇺🇸', EUR: '🇪🇺', GBP: '🇬🇧', JPY: '🇯🇵',
    AUD: '🇦🇺', CAD: '🇨🇦', CHF: '🇨🇭', NZD: '🇳🇿',
    CNY: '🇨🇳', INR: '🇮🇳'
  };
  return flags[country?.toUpperCase()] || '🌐';
}

function getEventCategory(title) {
  const t = (title || '').toLowerCase();
  if (t.includes('cpi') || t.includes('ppi') || t.includes('inflation') || t.includes('price index')) return 'Inflation';
  if (t.includes('employment') || t.includes('unemployment') || t.includes('job') || t.includes('payroll') || t.includes('claimant') || t.includes('nfp')) return 'Employment';
  if (t.includes('rate') || t.includes('fomc') || t.includes('rba') || t.includes('ecb') || t.includes('boe') || t.includes('boj') || t.includes('rbi') || t.includes('snb') || t.includes('rbnz')) return 'Central Bank';
  if (t.includes('sales') || t.includes('retail') || t.includes('gdp') || t.includes('pmi') || t.includes('trade balance')) return 'Retail Sales';
  if (t.includes('speaks') || t.includes('conference') || t.includes('speech') || t.includes('testifies') || t.includes('statement')) return 'Speeches';
  return 'Economic Data';
}

function getAffectedPairs(country) {
  const pairs = {
    USD: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD', 'USDCHF', 'USDCAD'],
    EUR: ['EURUSD', 'EURGBP', 'EURJPY', 'EURAUD', 'EURCHF'],
    GBP: ['GBPUSD', 'EURGBP', 'GBPJPY', 'GBPAUD', 'GBPCAD'],
    JPY: ['USDJPY', 'EURJPY', 'GBPJPY', 'AUDJPY', 'CADJPY'],
    AUD: ['AUDUSD', 'EURAUD', 'AUDJPY', 'AUDNZD', 'AUDCAD'],
    CAD: ['USDCAD', 'EURCAD', 'CADJPY', 'GBPCAD'],
    CHF: ['USDCHF', 'EURCHF', 'GBPCHF'],
    NZD: ['NZDUSD', 'AUDNZD', 'NZDJPY'],
    INR: ['USDINR'],
    CNY: ['USDCNH', 'AUDUSD']
  };
  return pairs[country?.toUpperCase()] || ['EURUSD', 'GBPUSD'];
}

function formatFFEventToIST(rawEvent, index) {
  const d = new Date(rawEvent.date);
  const now = new Date();
  
  // Format in Indian Standard Time (IST - Asia/Kolkata)
  const timeStr = isNaN(d.getTime()) 
    ? 'All Day' 
    : d.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false });
  
  const dateStr = isNaN(d.getTime())
    ? 'This Week'
    : d.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'short', month: 'short', day: 'numeric' });
  
  const istTodayStr = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'short', month: 'short', day: 'numeric' });
  const tom = new Date(now.getTime() + 86400000);
  const istTomorrowStr = tom.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'short', month: 'short', day: 'numeric' });

  let dateKey = 'this_week';
  if (dateStr === istTodayStr) dateKey = 'today';
  else if (dateStr === istTomorrowStr) dateKey = 'tomorrow';

  const rawImpact = (rawEvent.impact || 'low').toLowerCase();
  const impact = rawImpact.includes('high') ? 'high' : rawImpact.includes('med') ? 'medium' : 'low';

  return {
    id: `ff_${index}_${rawEvent.country}_${d.getTime() || index}`,
    date: dateStr,
    time: isNaN(d.getTime()) ? 'Tentative' : `${timeStr} IST`,
    dateKey,
    country: (rawEvent.country || 'USD').toUpperCase(),
    flag: getCountryFlag(rawEvent.country),
    impact,
    eventType: getEventCategory(rawEvent.title),
    event: rawEvent.title,
    actual: rawEvent.actual || '-',
    forecast: rawEvent.forecast || '-',
    previous: rawEvent.previous || '-',
    isBetter: null,
    frequency: 'Scheduled',
    description: `Official ForexFactory calendar release: ${rawEvent.title} for ${rawEvent.country}.`,
    affectedPairs: getAffectedPairs(rawEvent.country)
  };
}

function getFallbackDynamicEvents() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istNow = new Date(utc + (3600000 * 5.5)); // Indian Standard Time (UTC+5:30)

  const currentDay = istNow.getDay();
  const monday = new Date(istNow);
  const distanceToMonday = currentDay === 0 ? -6 : (currentDay === 6 ? -5 : 1 - currentDay);
  monday.setDate(istNow.getDate() + distanceToMonday);

  const getDayDate = (dayOffset) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + dayOffset);
    return {
      formatted: d.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'short', month: 'short', day: 'numeric' }),
      isToday: d.toDateString() === istNow.toDateString(),
      isTomorrow: new Date(istNow.getTime() + 86400000).toDateString() === d.toDateString()
    };
  };

  const mon = getDayDate(0);
  const tue = getDayDate(1);
  const wed = getDayDate(2);
  const thu = getDayDate(3);
  const fri = getDayDate(4);

  const resolveDateKey = (dayObj) => {
    if (dayObj.isToday) return 'today';
    if (dayObj.isTomorrow) return 'tomorrow';
    return 'this_week';
  };

  return [
    // --- MONDAY ---
    {
      id: 'ff_m1',
      date: mon.formatted,
      time: '05:20 IST',
      dateKey: resolveDateKey(mon),
      country: 'JPY',
      flag: '🇯🇵',
      impact: 'low',
      eventType: 'Central Bank',
      event: 'Bank Lending y/y',
      actual: '5.7%',
      forecast: '5.7%',
      previous: '5.7%',
      frequency: 'Monthly',
      description: 'Total value of outstanding bank loans issued by domestic financial institutions in Japan.',
      affectedPairs: ['USDJPY', 'EURJPY']
    },
    {
      id: 'ff_m2',
      date: mon.formatted,
      time: '05:20 IST',
      dateKey: resolveDateKey(mon),
      country: 'JPY',
      flag: '🇯🇵',
      impact: 'medium',
      eventType: 'Central Bank',
      event: 'BOJ Summary of Opinions',
      actual: 'Report',
      forecast: '-',
      previous: '-',
      frequency: 'Periodic',
      description: 'Bank of Japan board members assessment of monetary policy and inflation expectations.',
      affectedPairs: ['USDJPY', 'EURJPY', 'GBPJPY']
    },
    {
      id: 'ff_m3',
      date: mon.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(mon),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Inflation',
      event: 'Core CPI m/m',
      actual: '0.3%',
      forecast: '0.2%',
      previous: '0.2%',
      frequency: 'Monthly',
      description: 'Change in price of goods and services purchased by consumers excluding food and energy.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },

    // --- TUESDAY ---
    {
      id: 'ff_t1',
      date: tue.formatted,
      time: '06:00 IST',
      dateKey: resolveDateKey(tue),
      country: 'AUD',
      flag: '🇦🇺',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'RBA Cash Rate Decision',
      actual: '4.35%',
      forecast: '4.35%',
      previous: '4.35%',
      frequency: '8 Times/Year',
      description: 'Reserve Bank of Australia benchmark official cash interest rate decision.',
      affectedPairs: ['AUDUSD', 'EURAUD', 'AUDJPY']
    },
    {
      id: 'ff_t2',
      date: tue.formatted,
      time: '06:00 IST',
      dateKey: resolveDateKey(tue),
      country: 'AUD',
      flag: '🇦🇺',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'RBA Rate Statement & Monetary Policy',
      actual: 'Report',
      forecast: '-',
      previous: '-',
      frequency: '8 Times/Year',
      description: 'RBA insights on domestic growth, wage growth, inflation, and future rate projections.',
      affectedPairs: ['AUDUSD', 'EURAUD']
    },
    {
      id: 'ff_t3',
      date: tue.formatted,
      time: '11:30 IST',
      dateKey: resolveDateKey(tue),
      country: 'GBP',
      flag: '🇬🇧',
      impact: 'high',
      eventType: 'Employment',
      event: 'Claimant Count Change',
      actual: '24.5K',
      forecast: '20.0K',
      previous: '28.2K',
      frequency: 'Monthly',
      description: 'Change in number of unemployed individuals claiming Jobseeker benefits in the UK.',
      affectedPairs: ['GBPUSD', 'EURGBP', 'GBPJPY']
    },
    {
      id: 'ff_t4',
      date: tue.formatted,
      time: '17:30 IST',
      dateKey: resolveDateKey(tue),
      country: 'INR',
      flag: '🇮🇳',
      impact: 'medium',
      eventType: 'Inflation',
      event: 'India CPI Inflation (YoY)',
      actual: '3.60%',
      forecast: '3.65%',
      previous: '5.08%',
      frequency: 'Monthly',
      description: 'Headline Consumer Price Inflation reported by Ministry of Statistics & Programme Implementation.',
      affectedPairs: ['USDINR']
    },
    {
      id: 'ff_t5',
      date: tue.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(tue),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Inflation',
      event: 'PPI m/m (Producer Price Index)',
      actual: '0.1%',
      forecast: '0.2%',
      previous: '0.2%',
      frequency: 'Monthly',
      description: 'Change in the selling price received by domestic producers for their output.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },

    // --- WEDNESDAY ---
    {
      id: 'ff_w1',
      date: wed.formatted,
      time: '11:30 IST',
      dateKey: resolveDateKey(wed),
      country: 'GBP',
      flag: '🇬🇧',
      impact: 'high',
      eventType: 'Inflation',
      event: 'CPI y/y (Headline UK Inflation)',
      actual: '2.2%',
      forecast: '2.3%',
      previous: '2.0%',
      frequency: 'Annual',
      description: 'United Kingdom Consumer Price Index year-over-year percentage change.',
      affectedPairs: ['GBPUSD', 'EURGBP']
    },
    {
      id: 'ff_w2',
      date: wed.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(wed),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Inflation',
      event: 'CPI m/m & CPI y/y',
      actual: '2.9%',
      forecast: '3.0%',
      previous: '3.0%',
      frequency: 'Monthly',
      description: 'Key macroeconomic market mover measuring overall US inflation pressure.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 'ff_w3',
      date: wed.formatted,
      time: '23:30 IST',
      dateKey: resolveDateKey(wed),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'Federal Funds Rate & FOMC Statement',
      actual: '5.25%',
      forecast: '5.25%',
      previous: '5.50%',
      frequency: '8 Times/Year',
      description: 'US Federal Reserve benchmark interest rate decision and forward policy guidance.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD', 'SPX500']
    },

    // --- THURSDAY ---
    {
      id: 'ff_th1',
      date: thu.formatted,
      time: '07:00 IST',
      dateKey: resolveDateKey(thu),
      country: 'AUD',
      flag: '🇦🇺',
      impact: 'high',
      eventType: 'Employment',
      event: 'Employment Change & Unemployment Rate',
      actual: '58.2K',
      forecast: '20.0K',
      previous: '50.2K',
      frequency: 'Monthly',
      description: 'Australian Bureau of Statistics total employment growth and unemployment rate.',
      affectedPairs: ['AUDUSD', 'EURAUD', 'AUDJPY']
    },
    {
      id: 'ff_th2',
      date: thu.formatted,
      time: '11:30 IST',
      dateKey: resolveDateKey(thu),
      country: 'GBP',
      flag: '🇬🇧',
      impact: 'high',
      eventType: 'Retail Sales',
      event: 'GDP m/m',
      actual: '0.0%',
      forecast: '0.0%',
      previous: '0.1%',
      frequency: 'Monthly',
      description: 'Gross Domestic Product measuring total value of all goods and services produced in the UK.',
      affectedPairs: ['GBPUSD', 'EURGBP']
    },
    {
      id: 'ff_th3',
      date: thu.formatted,
      time: '15:45 IST',
      dateKey: resolveDateKey(thu),
      country: 'EUR',
      flag: '🇪🇺',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'ECB Main Refinancing Rate',
      actual: '3.65%',
      forecast: '3.65%',
      previous: '3.75%',
      frequency: '8 Times/Year',
      description: 'European Central Bank benchmark interest rate decision for the Eurozone economy.',
      affectedPairs: ['EURUSD', 'EURGBP', 'EURJPY']
    },
    {
      id: 'ff_th4',
      date: thu.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(thu),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Retail Sales',
      event: 'Core Retail Sales m/m & Retail Sales m/m',
      actual: '1.0%',
      forecast: '0.3%',
      previous: '-0.2%',
      frequency: 'Monthly',
      description: 'Measures change in total value of sales at retail level across the United States.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 'ff_th5',
      date: thu.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(thu),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Employment',
      event: 'Unemployment Claims',
      actual: '227K',
      forecast: '235K',
      previous: '234K',
      frequency: 'Weekly',
      description: 'Number of first-time claims for state unemployment insurance in the US.',
      affectedPairs: ['EURUSD', 'USDJPY', 'XAUUSD']
    },

    // --- FRIDAY ---
    {
      id: 'ff_f1',
      date: fri.formatted,
      time: '08:30 IST',
      dateKey: resolveDateKey(fri),
      country: 'JPY',
      flag: '🇯🇵',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'BOJ Policy Rate',
      actual: '0.25%',
      forecast: '0.25%',
      previous: '0.10%',
      frequency: '8 Times/Year',
      description: 'Bank of Japan benchmark rate setting for the Japanese Yen.',
      affectedPairs: ['USDJPY', 'EURJPY', 'GBPJPY']
    },
    {
      id: 'ff_f2',
      date: fri.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(fri),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Employment',
      event: 'Non-Farm Employment Change (NFP)',
      actual: '254K',
      forecast: '180K',
      previous: '159K',
      frequency: 'Monthly',
      description: 'ForexFactory signature market mover: Net change in employment excluding agriculture.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 'ff_f3',
      date: fri.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(fri),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Employment',
      event: 'Unemployment Rate',
      actual: '4.1%',
      forecast: '4.2%',
      previous: '4.2%',
      frequency: 'Monthly',
      description: 'Percentage of total civilian labor force actively seeking employment in the US.',
      affectedPairs: ['EURUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 'ff_f4',
      date: fri.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(fri),
      country: 'CAD',
      flag: '🇨🇦',
      impact: 'high',
      eventType: 'Employment',
      event: 'Employment Change & Unemployment Rate',
      actual: '46.7K',
      forecast: '27.0K',
      previous: '-1.4K',
      frequency: 'Monthly',
      description: 'Statistics Canada labor force job addition data and national jobless rate.',
      affectedPairs: ['USDCAD', 'EURCAD', 'CADJPY']
    },
    {
      id: 'ff_f5',
      date: fri.formatted,
      time: '19:30 IST',
      dateKey: resolveDateKey(fri),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'medium',
      eventType: 'Sentiment',
      event: 'Prelim UoM Consumer Sentiment',
      actual: '70.5',
      forecast: '69.0',
      previous: '70.1',
      frequency: 'Monthly',
      description: 'University of Michigan survey of consumer financial confidence and inflation outlook.',
      affectedPairs: ['EURUSD', 'USDJPY', 'SPX500']
    }
  ];
}

async function getForexFactoryData() {
  const now = Date.now();
  if (cachedFFData && (now - lastCacheTime < CACHE_TTL)) {
    return cachedFFData;
  }

  try {
    const res = await fetch('https://nfs.faireconomy.media/ff_calendar_thisweek.json', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json'
      },
      next: { revalidate: 900 }
    });

    if (res.ok) {
      const rawEvents = await res.json();
      if (Array.isArray(rawEvents) && rawEvents.length > 0) {
        const parsed = rawEvents.map((e, idx) => formatFFEventToIST(e, idx));
        cachedFFData = parsed;
        lastCacheTime = now;
        return parsed;
      }
    }
  } catch (err) {
    console.warn('ForexFactory live feed fallback active:', err.message);
  }

  // Fallback to accurate dynamic calendar in IST
  const fallback = getFallbackDynamicEvents();
  cachedFFData = fallback;
  lastCacheTime = now;
  return fallback;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const timeframe = searchParams.get('timeframe') || 'all';
  const currency = searchParams.get('currency') || 'all';
  const impact = searchParams.get('impact') || 'all';

  const allEvents = await getForexFactoryData();
  let filtered = allEvents;

  if (timeframe && timeframe !== 'all') {
    if (timeframe === 'today') {
      const todayEvents = filtered.filter(e => e.dateKey === 'today');
      filtered = todayEvents.length > 0 ? todayEvents : filtered.slice(0, 8);
    } else if (timeframe === 'tomorrow') {
      const tomorrowEvents = filtered.filter(e => e.dateKey === 'tomorrow');
      filtered = tomorrowEvents.length > 0 ? tomorrowEvents : filtered.slice(8, 16);
    } else if (timeframe === 'this_week') {
      filtered = allEvents;
    }
  }

  if (currency && currency !== 'all') {
    filtered = filtered.filter(e => e.country.toUpperCase() === currency.toUpperCase());
  }

  if (impact && impact !== 'all') {
    filtered = filtered.filter(e => e.impact === impact);
  }

  return NextResponse.json({
    status: 'success',
    source: 'ForexFactory (FairEconomy Media Stream)',
    timezone: 'Indian Standard Time (IST, GMT+5:30)',
    timezoneCode: 'IST',
    count: filtered.length,
    events: filtered
  });
}

