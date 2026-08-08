import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code) {
      return new Response('Missing shortcode', { status: 400 });
    }

    // 1. Query the public oEmbed API to get the correct CDN thumbnail URL
    const oembedUrl = `https://www.instagram.com/api/v1/oembed/?url=https://www.instagram.com/p/${code}/`;
    const oembedResponse = await fetch(oembedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!oembedResponse.ok) {
      console.error(`oEmbed query failed for code ${code} with status: ${oembedResponse.status}`);
      return new Response('Failed to query oEmbed data', { status: oembedResponse.status });
    }

    const oembedData = await oembedResponse.json();
    const cdnImageUrl = oembedData.thumbnail_url;

    if (!cdnImageUrl) {
      return new Response('No image URL found in oEmbed metadata', { status: 404 });
    }

    // 2. Fetch the image from the actual CDN URL
    const imageResponse = await fetch(cdnImageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!imageResponse.ok) {
      console.error(`CDN image fetch failed for code ${code} with status: ${imageResponse.status}`);
      return new Response('Failed to fetch image from CDN', { status: imageResponse.status });
    }

    const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';
    const arrayBuffer = await imageResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Response(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (err) {
    console.error('Instagram oEmbed image proxy error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
