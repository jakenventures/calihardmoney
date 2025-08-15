import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { buildTitle, buildDescription, buildCanonicalUrl, websiteJsonLd, organizationJsonLd } from '@/lib/seo';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = buildTitle();
  const description = buildDescription();
  const canonicalUrl = buildCanonicalUrl();
  
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="hard money loans, DSCR loans, fix and flip loans, bridge loans, private money lenders, real estate investors, California" />
        <meta name="author" content="Jaken Finance Group" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        
        <link rel="canonical" href={canonicalUrl} />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" as="font" type="font/woff2" crossOrigin="" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://via.placeholder.com/1200x630/2563eb/ffffff?text=Jaken+Finance+Group" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="California Hard Money Loans - Jaken Finance Group" />
        <meta property="og:site_name" content="Jaken Finance Group - California Hard Money Loans" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://via.placeholder.com/1200x630/2563eb/ffffff?text=Jaken+Finance+Group" />
        
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