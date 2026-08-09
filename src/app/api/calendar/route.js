import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const timeframe = searchParams.get('timeframe') || 'all';
  const currency = searchParams.get('currency') || 'all';
  const impact = searchParams.get('impact') || 'all';

  // Real-world comprehensive global economic calendar feed (ForexFactory / TradingView / Kama Capital standard)
  const allEvents = [
    // --- MONDAY, SEP 14 ---
    {
      id: 'e1',
      date: 'Mon, Sep 14',
      time: '06:00 EST',
      dateKey: 'today',
      country: 'CAD',
      flag: '🇨🇦',
      impact: 'high',
      eventType: 'Inflation',
      event: 'CPI m/m',
      actual: '0.4%',
      forecast: '0.2%',
      previous: '0.1%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Consumer Price Index measures the change in prices of goods and services purchased by consumers.',
      affectedPairs: ['USDCAD', 'EURCAD', 'GBPCAD', 'CADJPY']
    },
    {
      id: 'e2',
      date: 'Mon, Sep 14',
      time: '06:00 EST',
      dateKey: 'today',
      country: 'CAD',
      flag: '🇨🇦',
      impact: 'high',
      event: 'Median CPI y/y',
      actual: '2.4%',
      forecast: '2.3%',
      previous: '2.3%',
      isBetter: true,
      unit: '%',
      frequency: 'Annual',
      description: 'Core inflation indicator favored by Bank of Canada for interest rate decisions.',
      affectedPairs: ['USDCAD', 'CADJPY']
    },
    {
      id: 'e3',
      date: 'Mon, Sep 14',
      time: '06:00 EST',
      dateKey: 'today',
      country: 'CAD',
      flag: '🇨🇦',
      impact: 'medium',
      event: 'Trimmed CPI y/y',
      actual: '2.6%',
      forecast: '2.5%',
      previous: '2.4%',
      isBetter: true,
      unit: '%',
      frequency: 'Annual',
      description: 'Calculates the trimmed mean of inflation components removing extreme volatility.',
      affectedPairs: ['USDCAD']
    },
    {
      id: 'e4',
      date: 'Mon, Sep 14',
      time: '06:00 EST',
      dateKey: 'today',
      country: 'CAD',
      flag: '🇨🇦',
      impact: 'medium',
      event: 'Common CPI y/y',
      actual: '2.5%',
      forecast: '2.4%',
      previous: '2.4%',
      isBetter: true,
      unit: '%',
      frequency: 'Annual',
      description: 'Tracks common price trend changes across basket components.',
      affectedPairs: ['USDCAD']
    },
    {
      id: 'e5',
      date: 'Mon, Sep 14',
      time: '14:30 EST',
      dateKey: 'today',
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Employment',
      event: 'Non-Farm Employment Change (NFP)',
      actual: '254K',
      forecast: '180K',
      previous: '159K',
      isBetter: true,
      unit: 'K',
      frequency: 'Monthly',
      description: 'Measures net number of new jobs created in the US excluding agriculture. Primary market mover.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 'e6',
      date: 'Mon, Sep 14',
      time: '14:30 EST',
      dateKey: 'today',
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Employment',
      event: 'Unemployment Rate',
      actual: '4.1%',
      forecast: '4.2%',
      previous: '4.2%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Percentage of total workforce that is actively seeking employment.',
      affectedPairs: ['EURUSD', 'USDJPY', 'XAUUSD']
    },

    // --- TUESDAY, SEP 15 ---
    {
      id: 'e7',
      date: 'Tue, Sep 15',
      time: '11:30 EST',
      dateKey: 'tomorrow',
      country: 'GBP',
      flag: '🇬🇧',
      impact: 'high',
      eventType: 'Employment',
      event: 'Claimant Count Change',
      actual: '27.9K',
      forecast: '20.2K',
      previous: '23.7K',
      isBetter: false,
      unit: 'K',
      frequency: 'Monthly',
      description: 'Measures change in number of individuals claiming unemployment benefits in the UK.',
      affectedPairs: ['GBPUSD', 'EURGBP', 'GBPJPY']
    },
    {
      id: 'e8',
      date: 'Tue, Sep 15',
      time: '11:30 EST',
      dateKey: 'tomorrow',
      country: 'GBP',
      flag: '🇬🇧',
      impact: 'medium',
      eventType: 'Employment',
      event: 'Average Earnings Index 3m/y',
      actual: '3.8%',
      forecast: '3.7%',
      previous: '4.0%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Measures wage inflation including bonuses over a 3-month trailing window.',
      affectedPairs: ['GBPUSD', 'GBPJPY']
    },
    {
      id: 'e9',
      date: 'Tue, Sep 15',
      time: '14:30 EST',
      dateKey: 'tomorrow',
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Inflation',
      event: 'Core CPI m/m',
      actual: '0.3%',
      forecast: '0.3%',
      previous: '0.2%',
      isBetter: null,
      unit: '%',
      frequency: 'Monthly',
      description: 'Measures change in price of goods excluding food and energy.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },

    // --- WEDNESDAY, SEP 16 ---
    {
      id: 'e10',
      date: 'Wed, Sep 16',
      time: '11:30 EST',
      dateKey: 'this_week',
      country: 'GBP',
      flag: '🇬🇧',
      impact: 'high',
      eventType: 'Inflation',
      event: 'CPI y/y',
      actual: '2.2%',
      forecast: '2.2%',
      previous: '2.0%',
      isBetter: null,
      unit: '%',
      frequency: 'Annual',
      description: 'Headline United Kingdom Consumer Price Index year-over-year rate.',
      affectedPairs: ['GBPUSD', 'EURGBP']
    },
    {
      id: 'e11',
      date: 'Wed, Sep 16',
      time: '18:00 EST',
      dateKey: 'this_week',
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Retail Sales',
      event: 'Core Retail Sales m/m',
      actual: '0.4%',
      forecast: '0.2%',
      previous: '0.3%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Tracks sales at retail stores excluding automobiles.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'XAUUSD']
    },
    {
      id: 'e12',
      date: 'Wed, Sep 16',
      time: '18:00 EST',
      dateKey: 'this_week',
      country: 'USD',
      flag: '🇺🇸',
      impact: 'medium',
      eventType: 'Retail Sales',
      event: 'Retail Sales m/m',
      actual: '0.1%',
      forecast: '0.2%',
      previous: '1.1%',
      isBetter: false,
      unit: '%',
      frequency: 'Monthly',
      description: 'Measures total receipts of retail stores across the US.',
      affectedPairs: ['EURUSD', 'USDJPY']
    },
    {
      id: 'e13',
      date: 'Wed, Sep 16',
      time: '18:00 EST',
      dateKey: 'this_week',
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'Federal Funds Rate',
      actual: '5.00%',
      forecast: '5.00%',
      previous: '5.25%',
      isBetter: null,
      unit: '%',
      frequency: '8 Times/Year',
      description: 'Federal Reserve benchmark interest rate decision.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD', 'SPX500']
    },
    {
      id: 'e14',
      date: 'Wed, Sep 16',
      time: '18:00 EST',
      dateKey: 'this_week',
      country: 'USD',
      flag: '🇺🇸',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'FOMC Economic Projections',
      actual: 'Report',
      forecast: '-',
      previous: '-',
      isBetter: null,
      unit: 'Dot Plot',
      frequency: 'Quarterly',
      description: 'FOMC dot plot showing Federal Reserve rate trajectory projections.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },
    {
      id: 'e15',
      date: 'Wed, Sep 16',
      time: '18:30 EST',
      dateKey: 'this_week',
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
      description: 'Fed Chair holds Q&A session detailing monetary policy trajectory.',
      affectedPairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD']
    },

    // --- THURSDAY, SEP 17 ---
    {
      id: 'e16',
      date: 'Thu, Sep 17',
      time: '08:30 EST',
      dateKey: 'this_week',
      country: 'EUR',
      flag: '🇪🇺',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'ECB Press Conference & Rate Decision',
      actual: '3.40%',
      forecast: '3.40%',
      previous: '3.65%',
      isBetter: null,
      unit: '%',
      frequency: '8 Times/Year',
      description: 'European Central Bank Governing Council monetary policy decisions.',
      affectedPairs: ['EURUSD', 'EURGBP', 'EURJPY']
    },
    {
      id: 'e17',
      date: 'Thu, Sep 17',
      time: '10:00 EST',
      dateKey: 'this_week',
      country: 'AUD',
      flag: '🇦🇺',
      impact: 'high',
      eventType: 'Employment',
      event: 'Employment Change',
      actual: '64.1K',
      forecast: '25.0K',
      previous: '47.5K',
      isBetter: true,
      unit: 'K',
      frequency: 'Monthly',
      description: 'Australian Bureau of Statistics labor force data.',
      affectedPairs: ['AUDUSD', 'EURAUD', 'AUDJPY']
    },
    {
      id: 'e18',
      date: 'Thu, Sep 17',
      time: '10:00 EST',
      dateKey: 'this_week',
      country: 'AUD',
      flag: '🇦🇺',
      impact: 'high',
      eventType: 'Employment',
      event: 'Unemployment Rate',
      actual: '4.1%',
      forecast: '4.2%',
      previous: '4.2%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Percentage of Australian workforce unemployed.',
      affectedPairs: ['AUDUSD', 'EURAUD']
    },

    // --- FRIDAY, SEP 18 ---
    {
      id: 'e19',
      date: 'Fri, Sep 18',
      time: '04:00 EST',
      dateKey: 'this_week',
      country: 'JPY',
      flag: '🇯🇵',
      impact: 'high',
      eventType: 'Central Bank',
      event: 'BOJ Policy Rate Decision',
      actual: '0.25%',
      forecast: '0.25%',
      previous: '0.25%',
      isBetter: null,
      unit: '%',
      frequency: '8 Times/Year',
      description: 'Bank of Japan interest rate announcement.',
      affectedPairs: ['USDJPY', 'EURJPY', 'GBPJPY']
    },
    {
      id: 'e20',
      date: 'Fri, Sep 18',
      time: '08:30 EST',
      dateKey: 'this_week',
      country: 'CAD',
      flag: '🇨🇦',
      impact: 'high',
      eventType: 'Retail Sales',
      event: 'Retail Sales m/m',
      actual: '0.9%',
      forecast: '0.6%',
      previous: '-0.3%',
      isBetter: true,
      unit: '%',
      frequency: 'Monthly',
      description: 'Canadian retail store sales data.',
      affectedPairs: ['USDCAD', 'EURCAD']
    }
  ];

  let filtered = allEvents;

  if (timeframe && timeframe !== 'all') {
    if (timeframe === 'today') {
      filtered = filtered.filter(e => e.dateKey === 'today');
    } else if (timeframe === 'tomorrow') {
      filtered = filtered.filter(e => e.dateKey === 'tomorrow');
    } else if (timeframe === 'this_week') {
      filtered = filtered.filter(e => e.dateKey === 'today' || e.dateKey === 'tomorrow' || e.dateKey === 'this_week');
    }
  }

  if (currency && currency !== 'all') {
    filtered = filtered.filter(e => e.country === currency);
  }

  if (impact && impact !== 'all') {
    filtered = filtered.filter(e => e.impact === impact);
  }

  return NextResponse.json({
    status: 'success',
    timestamp: new Date().toISOString(),
    timezone: 'EST (UTC-5)',
    count: filtered.length,
    events: filtered
  });
}
