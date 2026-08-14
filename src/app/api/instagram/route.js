import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const BEHOLD_FEED_ID = process.env.BEHOLD_FEED_ID || 'E2xjvr7033WrGJPmuK4a';

  // 1. Fetch live posts directly from connected Behold Instagram feed
  try {
    const response = await fetch(`https://feeds.behold.so/${BEHOLD_FEED_ID}`, {
      cache: 'no-store'
    });

    if (response.ok) {
      const rawData = await response.json();
      const postsArray = rawData.posts || (Array.isArray(rawData) ? rawData : []);
      
      if (postsArray.length > 0) {
        const livePosts = postsArray.map((item, idx) => {
          const highResImg = item.sizes?.large?.mediaUrl || item.sizes?.medium?.mediaUrl || item.mediaUrl;
          const captionText = item.prunedCaption || item.caption || 'Live update from @magnatecapital';
          
          return {
            id: item.id || idx + 1,
            image: highResImg,
            mediaType: item.mediaType || 'IMAGE',
            likes: item.likeCount || (120 + (idx * 23) % 100),
            commentsCount: item.commentsCount || (4 + (idx * 3) % 12),
            link: item.permalink || 'https://www.instagram.com/magnatecapital/',
            caption: captionText,
            timestamp: item.timestamp,
            comments: [
              { user: 'trader_ae', text: 'Top execution and tight spreads!' },
              { user: 'capital_investor', text: 'Discipline beats emotion. 📈' }
            ]
          };
        });

        return NextResponse.json({
          success: true,
          live: true,
          profile: {
            username: rawData.username || 'magnatecapital',
            followersCount: rawData.followersCount || 97,
            profilePictureUrl: rawData.profilePictureUrl
          },
          posts: livePosts
        });
      }
    }
  } catch (err) {
    console.warn('Behold Live Instagram fetch error:', err);
  }

  // 2. Fallback posts if offline
  const defaultPosts = [
    { id: 1, image: 'https://behold.pictures/eyJ1IjoiM2lKV3hXOXFDTFBvZGMxR1BCckJPd2FzWDN0MSIsImYiOiJFMnhqdnI3MDMzV3JHSlBtdUs0YSIsInAiOiIxODEwMjA3NjYxNjA5MDY5NyIsImgiOiIxbGM2ZWxtIn0.jpg?class=squareLarge', likes: 254, commentsCount: 14, link: 'https://www.instagram.com/reel/DZsCsz3zFuw/', caption: 'TradingNews TechnicalAnalysis DayTrading ForexTrading Capital security remains our primary asset.', comments: [{ user: 'trader_dubai', text: 'Clean charting! Spreads are very tight.' }, { user: 'capital_forex', text: 'Caught the gold breakout today. Execution is flawless.' }] },
    { id: 2, image: 'https://behold.pictures/eyJ1IjoiM2lKV3hXOXFDTFBvZGMxR1BCckJPd2FzWDN0MSIsImYiOiJFMnhqdnI3MDMzV3JHSlBtdUs0YSIsInAiOiIxODEwMTc2NjQyNzgyMTQ2NyIsImgiOiJ6ZTlhbXIifQ.jpg?class=squareLarge', likes: 198, commentsCount: 9, link: 'https://www.instagram.com/p/DWjMCE4kXYt/', caption: 'Calm minds build strong portfolios. Noise fades. Structure stays. Trade with Magnate Capital.', comments: [{ user: 'safetrade_inc', text: 'Segregated accounts are a must. Respect.' }, { user: 'vip_trader_ae', text: 'Smooth deposit and fast withdrawal processing.' }] },
    { id: 3, image: 'https://behold.pictures/eyJ1IjoiM2lKV3hXOXFDTFBvZGMxR1BCckJPd2FzWDN0MSIsImYiOiJFMnhqdnI3MDMzV3JHSlBtdUs0YSIsInAiOiIxNzkxMjQyMDQzNjM1MjQ4OSIsImgiOiIxMTdsdThwIn0.jpg?class=squareLarge', likes: 312, commentsCount: 19, link: 'https://www.instagram.com/p/DWguJd0E-nK/', caption: 'No shortcuts. No guesses. Only structure. That\'s how real traders survive the market.', comments: [{ user: 'scalper_pro', text: 'Zero markup is real on the ECN account.' }, { user: 'market_maker', text: 'Less than 15ms latency. Insane!' }] },
    { id: 4, image: 'https://behold.pictures/eyJ1IjoiM2lKV3hXOXFDTFBvZGMxR1BCckJPd2FzWDN0MSIsImYiOiJFMnhqdnI3MDMzV3JHSlBtdUs0YSIsInAiOiIxODEwOTE5ODE5ODY5NTMwMiIsImgiOiIxOHRjN2QwIn0.jpg?class=squareLarge', likes: 167, commentsCount: 11, link: 'https://www.instagram.com/p/DWY38TfE0im/', caption: 'In the market, discipline speaks louder than emotion. Stay in the game and protect your capital.', comments: [{ user: 'nomad_trader', text: 'The mobile app interface is super clean.' }, { user: 'capital_pro', text: 'Execution speed on mobile is very fast.' }] },
    { id: 5, image: 'https://behold.pictures/eyJ1IjoiM2lKV3hXOXFDTFBvZGMxR1BCckJPd2FzWDN0MSIsImYiOiJFMnhqdnI3MDMzV3JHSlBtdUs0YSIsInAiOiIxODMwNjU3MTA1NzI2MzUwNiIsImgiOiI5eG1yanIifQ.jpg?class=squareLarge', likes: 210, commentsCount: 8, link: 'https://www.instagram.com/p/DWWeWySk5v1/', caption: 'Anyone can enter the market. Few can stay consistent. Magnate Capital focuses on long term execution.', comments: [{ user: 'growth_mindset', text: 'Patience win the race. Solid quote!' }, { user: 'risk_mgmt', text: 'Patience is everything in forex.' }] },
    { id: 6, image: 'https://behold.pictures/eyJ1IjoiM2lKV3hXOXFDTFBvZGMxR1BCckJPd2FzWDN0MSIsImYiOiJFMnhqdnI3MDMzV3JHSlBtdUs0YSIsInAiOiIxODA3ODEzMTk0NTYyMTI5NCIsImgiOiIxNXJhMGs0In0.jpg?class=squareLarge', likes: 182, commentsCount: 12, link: 'https://www.instagram.com/p/DWTt9cmEzro/', caption: 'Don\'t wait for the right time... create it. Trade on your terms and chase your profit goals.', comments: [{ user: 'technical_fx', text: 'Daily market outlook has been very helpful.' }, { user: 'pips_hunter', text: 'AUDUSD is looking hot this week.' }] }
  ];

  return NextResponse.json({ success: true, live: false, posts: defaultPosts });
}
