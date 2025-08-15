import { City } from './cities';

interface TitleOptions {
  city?: string;
  program?: string;
  page?: string;
}

interface DescriptionOptions {
  city?: string;
  program?: string;
  page?: string;
}

interface LocalBusinessData {
  state: string;
  city?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbSegment {
  name: string;
  url: string;
}

const DOMAIN = 'cali-hardmoney.com';
const BUSINESS_NAME = 'Jaken Finance Group';
const PHONE = '347-696-0192';

export function buildTitle({ city, program, page }: TitleOptions = {}): string {
  if (city && program) {
    return `${program} in ${city}, CA | ${BUSINESS_NAME}`;
  }
  
  if (city) {
    return `Hard Money Loans in ${city}, CA | ${BUSINESS_NAME}`;
  }
  
  if (program) {
    const programTitles: Record<string, string> = {
      'dscr-loans-california': 'DSCR Loans California',
      'fix-and-flip-loans-california': 'Fix and Flip Loans California',
      'bridge-loans-california': 'Bridge Loans California'
    };
    return `${programTitles[program] || program} | ${BUSINESS_NAME}`;
  }
  
  if (page === 'faq') {
    return `FAQ - Hard Money Loans California | ${BUSINESS_NAME}`;
  }
  
  if (page === 'contact') {
    return `Contact - California Hard Money Lender | ${BUSINESS_NAME}`;
  }
  
  return `Hard Money Loans in California | ${BUSINESS_NAME}`;
}

export function buildDescription({ city, program, page }: DescriptionOptions = {}): string {
  if (city && program) {
    const programDescriptions: Record<string, string> = {
      'dscr-loans-california': `DSCR loans in ${city}, CA for real estate investors. Rental income qualification, fast funding. Apply with ${BUSINESS_NAME} today.`,
      'fix-and-flip-loans-california': `Fix and flip loans in ${city}, CA. Quick funding for house flippers and real estate investors. Competitive rates from ${BUSINESS_NAME}.`,
      'bridge-loans-california': `Bridge loans in ${city}, CA for real estate investors. Fast commercial and residential bridge financing from ${BUSINESS_NAME}.`
    };
    return programDescriptions[program] || `${program} in ${city}, CA from ${BUSINESS_NAME}. Fast approval and funding for real estate investors.`;
  }
  
  if (city) {
    return `Get funded fast in ${city}, CA. DSCR, fix & flip, and bridge loans for real estate investors. Quick approvals from ${BUSINESS_NAME}.`;
  }
  
  if (program) {
    const programDescriptions: Record<string, string> = {
      'dscr-loans-california': 'DSCR loans throughout California. Qualify based on rental income, not personal income. Fast funding for real estate investors.',
      'fix-and-flip-loans-california': 'Fix and flip loans across California. Quick funding for house flippers and real estate investors. Competitive rates and terms.',
      'bridge-loans-california': 'Bridge loans throughout California. Fast commercial and residential bridge financing for real estate investors.'
    };
    return programDescriptions[program] || `${program} throughout California from ${BUSINESS_NAME}. Fast approval and competitive rates.`;
  }
  
  if (page === 'faq') {
    return 'Frequently asked questions about hard money loans, DSCR loans, and real estate investor financing in California. Get answers from experienced lenders.';
  }
  
  if (page === 'contact') {
    return `Contact ${BUSINESS_NAME} for hard money loans in California. Speak with experienced lenders about DSCR, fix & flip, and bridge loan options.`;
  }
  
  return 'Get funded fast in California. DSCR, fix & flip, and bridge loans for real estate investors. Quick approvals from Jaken Finance Group.';
}

export function buildCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `https://${DOMAIN}${cleanPath}`;
}

export function localBusinessJsonLd({ state, city }: LocalBusinessData) {
  const areaServed = city ? {
    "@type": "City",
    "name": city,
    "addressRegion": state
  } : {
    "@type": "State",
    "name": state
  };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "MortgageLender",
    "name": BUSINESS_NAME,
    "description": `Private money lender offering hard money loans, DSCR loans, fix and flip loans, and bridge loans to real estate investors in ${city ? `${city}, ` : ''}${state}.`,
    "telephone": PHONE,
    "url": `https://${DOMAIN}`,
    "areaServed": areaServed,
    "priceRange": "$75,000 - $5,000,000+",
    "openingHours": "Mo-Fr 09:00-17:00",
    "acceptsReservations": false,
    "currenciesAccepted": "USD",
    "paymentAccepted": "Wire Transfer, ACH",
    "founders": {
      "@type": "Person",
      "name": "Jason Jaken"
    }
  };
}

export function faqPageJsonLd(faqItems: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

export function breadcrumbListJsonLd(segments: BreadcrumbSegment[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": segments.map((segment, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": segment.name,
      "item": buildCanonicalUrl(segment.url)
    }))
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${BUSINESS_NAME} - California Hard Money Loans`,
    "url": `https://${DOMAIN}`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://${DOMAIN}/cities/{search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BUSINESS_NAME,
    "url": `https://${DOMAIN}`,
    "logo": `https://${DOMAIN}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PHONE,
      "contactType": "customer service",
      "areaServed": "CA",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://jakenfinancegroup.com"
    ]
  };
}