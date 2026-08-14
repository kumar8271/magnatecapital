import { NextResponse } from 'next/server';

function getDynamicCalendarEvents() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istNow = new Date(utc + (3600000 * 5.5)); // Indian Standard Time (UTC+5:30)

  const currentDay = istNow.getDay(); // 0 is Sun, 1 is Mon, ... 6 is Sat
  const monday = new Date(istNow);
  const distanceToMonday = currentDay === 0 ? -6 : (currentDay === 6 ? -5 : 1 - currentDay);
  monday.setDate(istNow.getDate() + distanceToMonday);

  const getDayDate = (dayOffset) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + dayOffset);
    return {
      formatted: d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      isToday: d.toDateString() === istNow.toDateString(),
      isTomorrow: new Date(istNow.getTime() + 86400000).toDateString() === d.toDateString(),
      rawDate: d
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
      id: 'e1',
      date: mon.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(mon),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Inflation',
      event: 'US Core CPI (MoM)',
      actual: '0.3%',
      forecast: '0.2%',
      previous: '0.2%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Consumer Price Index measures the change in prices of goods and services purchased by consumers.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 'e2',
      date: mon.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(mon),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Inflation',
      event: 'US CPI Inflation Rate (YoY)',
      actual: '2.9%',
      forecast: '3.0%',
      previous: '3.0%',
      isBetter: true,
      unit: '%',
      frequency: 'Annual',
      description: 'Headline Consumer Price Index year-over-year inflation gauge for US economy.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 'e3',
      date: mon.formatted,
      time: '15:30 IST',
      dateKey: resolveDateKey(mon),
      country: 'EUR',
      flag: '🇪🇺',
      impact: 'medium',
      eventType: 'Trade',
      event: 'German Trade Balance',
      actual: '€20.4B',
      forecast: '€18.2B',
      previous: '€19.0B',
      isBetter: true,
      unit: 'Billion €',
      frequency: 'Monthly',
      description: 'Difference in value between imported and exported goods in Germany.',
      affectedPairs: ['EURUSD', 'EURGBP']
    },
    {
      id: 'e4',
      date: mon.formatted,
      time: '09:30 IST',
      dateKey: resolveDateKey(mon),
      country: 'JPY',
      flag: '🇯🇵',
      impact: 'low',
      eventType: 'Services',
      event: 'Tertiary Industry Index (MoM)',
      actual: '0.1%',
      forecast: '-0.1%',
      previous: '-0.4%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Measures total value of services purchased by Japanese domestic businesses.',
      affectedPairs: ['USDJPY']
    },

    // --- TUESDAY ---
    {
      id: 'e5',
      date: tue.formatted,
      time: '11:30 IST',
      dateKey: resolveDateKey(tue),
      country: 'GBP',
      flag: '🇬🇧',
      impact: 'high',
      eventType: 'Employment',
      event: 'UK Claimant Count Change',
      actual: '24.5K',
      forecast: '20.0K',
      previous: '28.2K',
      isBetter: false,
      unit: 'K',
      frequency: 'Monthly',
      description: 'Measures change in number of individuals claiming unemployment benefits in the UK.',
      affectedPairs: ['GBPUSD', 'EURGBP', 'GBPJPY']
    },
    {
      id: 'e6',
      date: tue.formatted,
      time: '11:30 IST',
      dateKey: resolveDateKey(tue),
      country: 'GBP',
      flag: '🇬🇧',
      impact: 'high',
      eventType: 'Employment',
      event: 'UK Average Earnings Index (3m/y)',
      actual: '4.5%',
      forecast: '4.6%',
      previous: '5.7%',
      isBetter: false,
      unit: '%',
      frequency: 'Monthly',
      description: 'Measures wage inflation including bonuses over a 3-month trailing window.',
      affectedPairs: ['GBPUSD', 'GBPJPY']
    },
    {
      id: 'e7',
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
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Indian headline consumer price inflation rate tracking within RBI target band.',
      affectedPairs: ['USDINR']
    },
    {
      id: 'e8',
      date: tue.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(tue),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Inflation',
      event: 'US Producer Price Index (PPI MoM)',
      actual: '0.1%',
      forecast: '0.2%',
      previous: '0.2%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Measures average change in selling prices received by domestic producers.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 'e9',
      date: tue.formatted,
      time: '15:30 IST',
      dateKey: resolveDateKey(tue),
      country: 'EUR',
      flag: '🇪🇺',
      impact: 'medium',
      eventType: 'Sentiment',
      event: 'ZEW Economic Sentiment Index',
      actual: '19.2',
      forecast: '34.0',
      previous: '41.8',
      isBetter: false,
      unit: 'Index',
      frequency: 'Monthly',
      description: 'Survey of financial experts on 6-month economic outlook for the Eurozone.',
      affectedPairs: ['EURUSD', 'EURJPY']
    },

    // --- WEDNESDAY ---
    {
      id: 'e10',
      date: wed.formatted,
      time: '11:30 IST',
      dateKey: resolveDateKey(wed),
      country: 'GBP',
      flag: '🇬🇧',
      impact: 'high',
      eventType: 'Inflation',
      event: 'UK Headline CPI (YoY)',
      actual: '2.2%',
      forecast: '2.3%',
      previous: '2.0%',
      isBetter: null,
      unit: '%',
      frequency: 'Annual',
      description: 'Headline United Kingdom Consumer Price Index year-over-year rate.',
      affectedPairs: ['GBPUSD', 'EURGBP']
    },
    {
      id: 'e11',
      date: wed.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(wed),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Retail Sales',
      event: 'US Core Retail Sales (MoM)',
      actual: '0.4%',
      forecast: '0.2%',
      previous: '0.5%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Tracks sales at retail stores across the US excluding automobiles.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'XAUUSD']
    },
    {
      id: 'e12',
      date: wed.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(wed),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Retail Sales',
      event: 'US Retail Sales (MoM)',
      actual: '1.0%',
      forecast: '0.3%',
      previous: '-0.2%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Measures total receipts of retail stores across the United States.',
      affectedPairs: ['EURUSD', 'USDJPY', 'SPX500']
    },
    {
      id: 'e13',
      date: wed.formatted,
      time: '23:30 IST',
      dateKey: resolveDateKey(wed),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'Federal Reserve Interest Rate Decision',
      actual: '5.25%',
      forecast: '5.25%',
      previous: '5.50%',
      isBetter: null,
      unit: '%',
      frequency: '8 Times/Year',
      description: 'Federal Reserve benchmark interest rate decision and policy statement.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD', 'SPX500']
    },
    {
      id: 'e14',
      date: wed.formatted,
      time: '00:00 IST',
      dateKey: resolveDateKey(wed),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Speeches',
      event: 'FOMC Press Conference (Fed Chair Speech)',
      actual: 'Live',
      forecast: '-',
      previous: '-',
      isBetter: null,
      unit: 'Speech',
      frequency: 'Periodic',
      description: 'Fed Chair holds live Q&A session detailing US monetary policy trajectory.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },

    // --- THURSDAY ---
    {
      id: 'e15',
      date: thu.formatted,
      time: '07:00 IST',
      dateKey: resolveDateKey(thu),
      country: 'AUD',
      flag: '🇦🇺',
      impact: 'high',
      eventType: 'Employment',
      event: 'Australia Employment Change',
      actual: '58.2K',
      forecast: '20.0K',
      previous: '50.2K',
      isBetter: true,
      unit: 'K',
      frequency: 'Monthly',
      description: 'Australian Bureau of Statistics labor force net job addition data.',
      affectedPairs: ['AUDUSD', 'EURAUD', 'AUDJPY']
    },
    {
      id: 'e16',
      date: thu.formatted,
      time: '07:00 IST',
      dateKey: resolveDateKey(thu),
      country: 'AUD',
      flag: '🇦🇺',
      impact: 'high',
      eventType: 'Employment',
      event: 'Australia Unemployment Rate',
      actual: '4.2%',
      forecast: '4.1%',
      previous: '4.1%',
      isBetter: false,
      unit: '%',
      frequency: 'Monthly',
      description: 'Percentage of Australian workforce actively seeking employment.',
      affectedPairs: ['AUDUSD', 'EURAUD']
    },
    {
      id: 'e17',
      date: thu.formatted,
      time: '15:45 IST',
      dateKey: resolveDateKey(thu),
      country: 'EUR',
      flag: '🇪🇺',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'ECB Interest Rate Decision',
      actual: '3.65%',
      forecast: '3.65%',
      previous: '3.75%',
      isBetter: null,
      unit: '%',
      frequency: '8 Times/Year',
      description: 'European Central Bank Governing Council monetary policy decision.',
      affectedPairs: ['EURUSD', 'EURGBP', 'EURJPY']
    },
    {
      id: 'e18',
      date: thu.formatted,
      time: '16:15 IST',
      dateKey: resolveDateKey(thu),
      country: 'EUR',
      flag: '🇪🇺',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'ECB Press Conference & Monetary Statement',
      actual: 'Live',
      forecast: '-',
      previous: '-',
      isBetter: null,
      unit: 'Speech',
      frequency: '8 Times/Year',
      description: 'ECB President commentary on Eurozone inflation outlook and rate paths.',
      affectedPairs: ['EURUSD', 'EURGBP', 'EURJPY']
    },
    {
      id: 'e19',
      date: thu.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(thu),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Employment',
      event: 'US Initial Jobless Claims',
      actual: '227K',
      forecast: '235K',
      previous: '234K',
      isBetter: true,
      unit: 'K',
      frequency: 'Weekly',
      description: 'Number of individuals filing for state unemployment insurance for the first time.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 'e20',
      date: thu.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(thu),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'medium',
      eventType: 'Manufacturing',
      event: 'Philadelphia Fed Manufacturing Index',
      actual: '-7.0',
      forecast: '6.0',
      previous: '13.9',
      isBetter: false,
      unit: 'Index',
      frequency: 'Monthly',
      description: 'Survey of manufacturing executive conditions in Pennsylvania, NJ, and Delaware.',
      affectedPairs: ['EURUSD', 'USDJPY']
    },

    // --- FRIDAY ---
    {
      id: 'e21',
      date: fri.formatted,
      time: '08:30 IST',
      dateKey: resolveDateKey(fri),
      country: 'JPY',
      flag: '🇯🇵',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'Bank of Japan (BOJ) Policy Rate Decision',
      actual: '0.25%',
      forecast: '0.25%',
      previous: '0.10%',
      isBetter: null,
      unit: '%',
      frequency: '8 Times/Year',
      description: 'Bank of Japan benchmark interest rate and yield curve control decision.',
      affectedPairs: ['USDJPY', 'EURJPY', 'GBPJPY']
    },
    {
      id: 'e22',
      date: fri.formatted,
      time: '11:30 IST',
      dateKey: resolveDateKey(fri),
      country: 'GBP',
      flag: '🇬🇧',
      impact: 'high',
      eventType: 'Retail Sales',
      event: 'UK Retail Sales (MoM)',
      actual: '0.5%',
      forecast: '0.6%',
      previous: '-0.9%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Primary gauge of consumer retail expenditure across the UK economy.',
      affectedPairs: ['GBPUSD', 'EURGBP', 'GBPJPY']
    },
    {
      id: 'e23',
      date: fri.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(fri),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Employment',
      event: 'US Non-Farm Payrolls (NFP)',
      actual: '254K',
      forecast: '180K',
      previous: '159K',
      isBetter: true,
      unit: 'K',
      frequency: 'Monthly',
      description: 'Measures net number of new jobs created in the US economy. Major market mover.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 'e24',
      date: fri.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(fri),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Employment',
      event: 'US Unemployment Rate',
      actual: '4.1%',
      forecast: '4.2%',
      previous: '4.2%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Percentage of total workforce actively looking for employment in the US.',
      affectedPairs: ['EURUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 'e25',
      date: fri.formatted,
      time: '18:00 IST',
      dateKey: resolveDateKey(fri),
      country: 'CAD',
      flag: '🇨🇦',
      impact: 'high',
      eventType: 'Employment',
      event: 'Canada Employment Change',
      actual: '46.7K',
      forecast: '27.0K',
      previous: '-1.4K',
      isBetter: true,
      unit: 'K',
      frequency: 'Monthly',
      description: 'Statistics Canada labor force job creation report.',
      affectedPairs: ['USDCAD', 'EURCAD', 'CADJPY']
    },
    {
      id: 'e26',
      date: fri.formatted,
      time: '19:30 IST',
      dateKey: resolveDateKey(fri),
      country: 'USD',
      flag: '🇺🇸',
      impact: 'medium',
      eventType: 'Sentiment',
      event: 'Michigan Consumer Sentiment Index',
      actual: '70.5',
      forecast: '69.0',
      previous: '70.1',
      isBetter: true,
      unit: 'Index',
      frequency: 'Monthly',
      description: 'University of Michigan survey assessing consumer confidence and financial outlook.',
      affectedPairs: ['EURUSD', 'USDJPY', 'SPX500']
    }
  ];
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const timeframe = searchParams.get('timeframe') || 'all';
  const currency = searchParams.get('currency') || 'all';
  const impact = searchParams.get('impact') || 'all';

  const allEvents = getDynamicCalendarEvents();
  let filtered = allEvents;

  if (timeframe && timeframe !== 'all') {
    if (timeframe === 'today') {
      const todayEvents = filtered.filter(e => e.dateKey === 'today');
      // If today is weekend or no direct 'today' events, show current session events
      filtered = todayEvents.length > 0 ? todayEvents : filtered.slice(0, 6);
    } else if (timeframe === 'tomorrow') {
      const tomorrowEvents = filtered.filter(e => e.dateKey === 'tomorrow');
      filtered = tomorrowEvents.length > 0 ? tomorrowEvents : filtered.slice(6, 12);
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
    timezone: 'Indian Standard Time (IST, GMT+5:30)',
    timezoneCode: 'IST',
    count: filtered.length,
    events: filtered
  });
}

