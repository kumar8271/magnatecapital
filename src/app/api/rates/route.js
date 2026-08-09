import { NextResponse } from 'next/server';

export const revalidate = 15; // Edge CDN caching for 15 seconds

export async function GET() {
  try {
    // 1. Fetch Crypto & Gold from Binance API with 15-second Next.js cache
    let cryptoData = [];
    try {
      const resBinance = await fetch(
        'https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","PAXGUSDT"]',
        { next: { revalidate: 15 } }
      );
      if (resBinance.ok) {
        cryptoData = await resBinance.json();
      }
    } catch (err) {
      console.warn('Binance API fetch failed:', err);
    }

    // 2. Fetch Fiat Forex Rates from ExchangeRate API with 15-second Next.js cache
    let forexRates = {};
    try {
      const resForex = await fetch('https://open.er-api.com/v6/latest/USD', { next: { revalidate: 15 } });
      if (resForex.ok) {
        const forexJson = await resForex.json();
        forexRates = forexJson.rates || {};
      }
    } catch (err) {
      console.warn('Forex API fetch failed:', err);
    }

    // Fallbacks if external API calls fail
    const eurRate = forexRates.EUR || 0.915;
    const gbpRate = forexRates.GBP || 0.785;
    const jpyRate = forexRates.JPY || 157.84;
    const nzdRate = forexRates.NZD || 1.698;
    const audRate = forexRates.AUD || 1.539;
    const cadRate = forexRates.CAD || 1.360;
    const chfRate = forexRates.CHF || 0.811;
    const inrRate = forexRates.INR || 86.06;

    // Parse Binance Items
    const btcItem = cryptoData.find((i) => i.symbol === 'BTCUSDT');
    const ethItem = cryptoData.find((i) => i.symbol === 'ETHUSDT');
    const paxgItem = cryptoData.find((i) => i.symbol === 'PAXGUSDT');

    const btcPrice = btcItem ? parseFloat(btcItem.lastPrice) : 65223.99;
    const btcChange = btcItem ? parseFloat(btcItem.priceChangePercent) : 0.30;

    const ethPrice = ethItem ? parseFloat(ethItem.lastPrice) : 3480.12;
    const ethChange = ethItem ? parseFloat(ethItem.priceChangePercent) : -0.15;

    const paxgPrice = paxgItem ? parseFloat(paxgItem.lastPrice) : 2024.11;

    // Derived FX Rates & Calculations
    const eurusd = parseFloat((1 / eurRate).toFixed(4));
    const gbpusd = parseFloat((1 / gbpRate).toFixed(4));
    const usdjpy = jpyRate;
    const eurjpy = parseFloat((eurusd * jpyRate).toFixed(2));
    const eurnzd = parseFloat((eurusd * nzdRate).toFixed(4));

    const tickerData = {
      eurusd: {
        symbol: 'EURUSD',
        price: eurusd,
        change: 0.12,
        isUp: true
      },
      gbpusd: {
        symbol: 'GBPUSD',
        price: gbpusd,
        change: 0.22,
        isUp: true
      },
      gold: {
        symbol: 'GOLD',
        price: parseFloat(paxgPrice.toFixed(2)),
        change: 0.01,
        isUp: true
      },
      btcusd: {
        symbol: 'BTCUSD',
        price: parseFloat(btcPrice.toFixed(2)),
        change: parseFloat(btcChange.toFixed(2)),
        isUp: btcChange >= 0
      },
      usoil: {
        symbol: 'USOIL',
        price: 78.45,
        change: -0.35,
        isUp: false
      },
      spx500: {
        symbol: 'SPX500',
        price: 5088.80,
        change: 0.45,
        isUp: true
      },
      eurjpy: {
        symbol: 'EURJPY',
        price: parseFloat(eurjpy.toFixed(2)),
        change: 0.18,
        isUp: true
      },
      usdjpy: {
        symbol: 'USDJPY',
        price: parseFloat(usdjpy.toFixed(2)),
        change: -0.47,
        isUp: false
      },
      ethusd: {
        symbol: 'ETHUSD',
        price: parseFloat(ethPrice.toFixed(2)),
        change: parseFloat(ethChange.toFixed(2)),
        isUp: ethChange >= 0
      },
      eurnzd: {
        symbol: 'EURNZD',
        price: parseFloat(eurnzd.toFixed(4)),
        change: 0.04,
        isUp: true
      },
      silver: {
        symbol: 'SILVER',
        price: 31.48,
        change: 1.10,
        isUp: true
      }
    };

    return NextResponse.json(
      {
        success: true,
        timestamp: new Date().toISOString(),
        rates: tickerData,
        forexRates: {
          INR: inrRate,
          EUR: eurRate,
          USD: 1,
          JPY: jpyRate,
          GBP: gbpRate,
          CHF: chfRate,
          AUD: audRate,
          CAD: cadRate,
          NZD: nzdRate
        }
      },
      {
        headers: {
          'Cache-Control': 'public, max-age=10, s-maxage=15, stale-while-revalidate=30'
        }
      }
    );
  } catch (error) {
    console.error('Error fetching live rates:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
