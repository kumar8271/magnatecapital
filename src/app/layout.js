import "./globals.css";

export const metadata = {
  title: "Magnate Capital | Premium Forex & CFD Trading Broker",
  description: "Trade Forex, Gold, Commodities, and Crypto with Magnate Capital. Experience raw ECN spreads from 0.0 pips, ultra-low latency execution, leverage up to 1:500, and institutional speed under 15ms. Regulated premium global brokerage.",
  keywords: [
    "Forex trading", "Online Forex broker", "Trade Gold CFD", "ECN broker", 
    "WebTrader Trading Platform", "CFD trading indices", "Raw Spreads Broker", 
    "Global Forex broker", "Commodities trading desk"
  ],
  openGraph: {
    title: "Magnate Capital | Premium Forex & CFD Trading Broker",
    description: "Trade Forex, Gold, and Crypto with raw ECN spreads from 0.0 pips on advanced WebTrader. Institutional execution under 15ms.",
    url: "https://magnatecapital.com",
    siteName: "Magnate Capital",
    images: [
      {
        url: "https://magnatecapital.com/logo.jpg",
        width: 800,
        height: 600,
        alt: "Magnate Capital Premium Brokerage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnate Capital | Premium Forex & CFD Broker",
    description: "Trade Forex, Gold, and Crypto with spreads from 0.0 pips. Direct low-latency execution bridge.",
    images: ["https://magnatecapital.com/logo.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#010108",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Magnate Capital",
    "image": "https://magnatecapital.com/logo.jpg",
    "url": "https://magnatecapital.com",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Foster Capital Inc, Robin Kelton Building, Choc Bay",
      "addressLocality": "Castries",
      "addressRegion": "Castries",
      "postalCode": "00000",
      "addressCountry": "LC"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.212,
      "longitude": 55.281
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.instagram.com/magnatecapital/",
      "https://x.com/MagnateCapital",
      "https://www.facebook.com/profile.php?id=61577696182180",
      "https://www.linkedin.com/in/magnate-capital-320425371/",
      "https://t.me/magnatecapital",
      "https://www.youtube.com/@MagnateCapital"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect for Fonts & CDNs */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        
        {/* Google Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" />

        {/* FontAwesome 6.5.1 Icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        
        {/* JSON-LD Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
