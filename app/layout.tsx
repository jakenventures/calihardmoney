import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { buildTitle, buildDescription, buildCanonicalUrl, websiteJsonLd, organizationJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: buildTitle(),
  description: buildDescription(),
  keywords: 'hard money loans, DSCR loans, fix and flip loans, bridge loans, private money lenders, real estate investors, California',
  authors: [{ name: 'Jaken Finance Group' }],
  robots: 'index, follow',
  canonical: buildCanonicalUrl(),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: buildCanonicalUrl(),
    title: buildTitle(),
    description: buildDescription(),
    siteName: 'Jaken Finance Group - California Hard Money Loans',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'California Hard Money Loans - Jaken Finance Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: buildTitle(),
    description: buildDescription(),
    images: ['/og-image.jpg'],
  },
  other: {
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#2563eb',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" as="font" type="font/woff2" crossOrigin="" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </head>
      
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}