import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    // 1. Fetch Crypto & Gold from Binance API
    let cryptoData = [];
    try {
      const resBinance = await fetch(
        'https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","PAXGUSDT"]',
        { cache: 'no-store' }
      );
      if (resBinance.ok) {
        cryptoData = await resBinance.json();
      }
    } catch (err) {
      console.warn('Binance API fetch failed:', err);
    }

    // 2. Fetch Fiat Forex Rates from ExchangeRate API
    let forexRates = {};
    try {
      const resForex = await fetch('https://open.er-api.com/v6/latest/USD', { cache: 'no-store' });
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

    const ethPrice = ethItem ? parseFloat(ethItem.lastPrice) : 1925.05;
    const ethChange = ethItem ? parseFloat(ethItem.priceChangePercent) : 0.24;

    const goldPrice = paxgItem ? parseFloat(paxgItem.lastPrice) : 2024.11;
    const goldChange = paxgItem ? parseFloat(paxgItem.priceChangePercent) : 0.01;

    // Compute Forex Pairs
    const eurusd = 1 / eurRate;
    const gbpusd = 1 / gbpRate;
    const usdjpy = jpyRate;
    const eurjpy = jpyRate / eurRate;
    const eurnzd = nzdRate / eurRate;

    const tickerData = {
      eurusd: {
        symbol: 'EURUSD',
        price: parseFloat(eurusd.toFixed(4)),
        change: -0.02,
        isUp: false
      },
      gbpusd: {
        symbol: 'GBPUSD',
        price: parseFloat(gbpusd.toFixed(4)),
        change: 0.22,
        isUp: true
      },
      gold: {
        symbol: 'GOLD',
        price: parseFloat(goldPrice.toFixed(2)),
        change: parseFloat(goldChange.toFixed(2)),
        isUp: goldChange >= 0
      },
      btcusd: {
        symbol: 'BTCUSD',
        price: parseFloat(btcPrice.toFixed(2)),
        change: parseFloat(btcChange.toFixed(2)),
        isUp: btcChange >= 0
      },
      usoil: {
        symbol: 'USOIL',
        price: 74.18,
        change: -0.02,
        isUp: false
      },
      spx500: {
        symbol: 'SPX500',
        price: 4848.41,
        change: -0.03,
        isUp: false
      },
      eurjpy: {
        symbol: 'EURJPY',
        price: parseFloat(eurjpy.toFixed(2)),
        change: -0.15,
        isUp: false
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

    return NextResponse.json({
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
    });
  } catch (error) {
    console.error('Error fetching live rates:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
