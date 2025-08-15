// Head management will be handled in layout.tsx for Next.js 13 App Router
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/ui/Hero';
import ProgramCard from '@/components/ui/ProgramCard';
import FAQ from '@/components/ui/FAQ';
import CTAButton from '@/components/ui/CTAButton';
import { CITIES, getCityBySlug, getNearbyCities, City } from '@/lib/cities';
import { buildTitle, buildDescription, buildCanonicalUrl, localBusinessJsonLd, breadcrumbListJsonLd } from '@/lib/seo';

interface CityPageProps {
  params: {
    slug: string;
  };
}

// Content templates with variations to avoid duplication
const contentVariations = {
  intro1: (city: string) => `${city} presents exceptional opportunities for real estate investors seeking reliable financing solutions. As California's premier hard money lender, Jaken Finance Group specializes in providing fast, flexible financing for investment properties throughout ${city} and surrounding areas.`,
  intro2: (city: string) => `Real estate investors in ${city} choose Jaken Finance Group for our streamlined lending process and deep understanding of the local market. Our comprehensive loan programs are designed specifically for the unique needs of ${city} property investors.`,
  intro3: (city: string) => `Whether you're a seasoned investor or just starting your real estate journey in ${city}, our team provides the capital and expertise you need to succeed. We've funded hundreds of deals throughout ${city}, helping investors achieve their financial goals.`,
  
  market1: (city: string) => `The ${city} real estate market offers diverse investment opportunities, from single-family rentals to multi-unit properties and fix-and-flip projects. Our local market knowledge helps structure loans that align with ${city}'s specific investment landscape.`,
  market2: (city: string) => `${city}'s growing economy and strong rental demand create ideal conditions for real estate investment. Our DSCR loans are particularly popular among ${city} investors building rental portfolios.`,
  market3: (city: string) => `Strategic location and market fundamentals make ${city} an attractive destination for real estate investment. Our bridge loans help investors quickly capitalize on time-sensitive opportunities in this competitive market.`,
  
  closing1: (city: string) => `Ready to fund your next ${city} real estate investment? Contact Jaken Finance Group today for fast pre-qualification and competitive terms tailored to the ${city} market.`,
  closing2: (city: string) => `Join successful ${city} real estate investors who trust Jaken Finance Group for reliable, fast funding. Let us help you grow your investment portfolio in ${city} with our flexible loan programs.`,
  closing3: (city: string) => `Don't let financing slow down your ${city} real estate investments. Get the capital you need with our streamlined lending process designed for ${city} investors.`
};

const neighborhoodExamples: Record<string, string[]> = {
  'los-angeles': ['Hollywood', 'Beverly Hills', 'Santa Monica', 'Downtown LA', 'Westwood', 'Venice'],
  'san-diego': ['Gaslamp Quarter', 'La Jolla', 'Balboa Park', 'Mission Beach', 'Hillcrest', 'Pacific Beach'],
  'san-francisco': ['SOMA', 'Mission District', 'Castro', 'Nob Hill', 'Marina District', 'Hayes Valley'],
  'sacramento': ['Midtown', 'East Sacramento', 'Land Park', 'Natomas', 'Elk Grove', 'Folsom'],
  'oakland': ['Downtown', 'Temescal', 'Rockridge', 'Lake Merritt', 'Fruitvale', 'Montclair'],
  'san-jose': ['Willow Glen', 'Almaden', 'Cambrian', 'Rose Garden', 'Evergreen', 'Silver Creek']
};

const programs = [
  {
    title: "DSCR Loans",
    description: "Income-based qualification using rental property cash flow analysis.",
    features: [
      "No personal income verification",
      "Based on property rental income",
      "Rates starting at 7.5%",
      "Up to 80% LTV",
      "15-30 day closings"
    ],
    href: "/programs/dscr-loans-california",
    icon: "🏠"
  },
  {
    title: "Fix & Flip Loans",
    description: "Fast funding for property renovation and resale projects.",
    features: [
      "Purchase + renovation funding",
      "Interest-only payments",
      "6-24 month terms",
      "Up to 90% ARV",
      "7-14 day closings"
    ],
    href: "/programs/fix-and-flip-loans-california",
    icon: "🔨"
  },
  {
    title: "Bridge Loans",
    description: "Short-term financing for quick property acquisitions.",
    features: [
      "Fast access to capital",
      "Commercial & residential",
      "3-36 month terms",
      "Flexible qualification",
      "10-day closings"
    ],
    href: "/programs/bridge-loans-california",
    icon: "🌉"
  }
];

function generateCityContent(city: City) {
  const cityIndex = CITIES.findIndex(c => c.slug === city.slug);
  const hash = cityIndex % 3; // Simple hash for variation
  
  const introKey = `intro${(hash % 3) + 1}` as keyof typeof contentVariations;
  const marketKey = `market${((hash + 1) % 3) + 1}` as keyof typeof contentVariations;
  const closingKey = `closing${((hash + 2) % 3) + 1}` as keyof typeof contentVariations;
  
  return {
    intro: contentVariations[introKey](city.name),
    market: contentVariations[marketKey](city.name),
    closing: contentVariations[closingKey](city.name),
    neighborhoods: neighborhoodExamples[city.slug] || ['Downtown', 'Midtown', 'Eastside', 'Westside', 'Northside', 'Southside']
  };
}

function generateCityFAQ(city: City) {
  const baseFAQ = [
    {
      question: `How quickly can you close a hard money loan in ${city.name}?`,
      answer: `We can typically close hard money loans in ${city.name} within 10-21 days. For straightforward deals with clear documentation, we often close in as little as 7-10 days. Our streamlined process and local market knowledge help expedite closings throughout ${city.name}.`
    },
    {
      question: `What areas of ${city.name} do you service?`,
      answer: `We provide hard money loans throughout all areas of ${city.name}, including both residential and commercial properties. Our team has extensive experience with properties in ${city.name} and can quickly assess opportunities across all neighborhoods and property types.`
    }
  ];
  
  return baseFAQ;
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({
    slug: city.slug,
  }));
}


export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.slug);
  
  if (!city) {
    notFound();
  }

  const content = generateCityContent(city);
  const cityFAQ = generateCityFAQ(city);
  const nearbyCities = getNearbyCities(city.slug, 5);
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Cities', url: '/#service-areas' },
    { name: `${city.name}, CA`, url: `/cities/${city.slug}` }
  ];

  const title = buildTitle({ city: city.name });
  const description = buildDescription({ city: city.name });
  const canonical = buildCanonicalUrl(`/cities/${city.slug}`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd({ state: "California", city: city.name })),
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListJsonLd(breadcrumbs)),
        }}
      />

      <Hero 
        city={city.name}
        title={`Hard Money Loans in ${city.name}, CA`}
        subtitle={`Fast funding for real estate investors in ${city.name}. DSCR loans, fix & flip financing, and bridge loans with competitive terms and quick closings.`}
      />
      
      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto container-padding">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              {breadcrumbs.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    {index > 0 && (
                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-gray-500 font-medium">{item.name}</span>
                    ) : (
                      <a href={item.url} className="text-primary-600 hover:text-primary-700 font-medium">
                        {item.name}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg prose-gray max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Private Money Lending in {city.name}, California
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {content.intro}
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {content.market}
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {city.name} Investment Areas
            </h3>
            
            <p className="text-lg text-gray-600 mb-4">
              We finance investment properties throughout {city.name}, including popular areas such as:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
              {content.neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-gray-100 rounded px-3 py-2 text-center text-gray-700">
                  {neighborhood}
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Common {city.name} Investment Scenarios
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Real estate investors in {city.name} frequently use our services for acquiring rental properties with DSCR loans, 
              funding fix-and-flip projects in emerging neighborhoods, and securing bridge financing for quick acquisitions. 
              Our local expertise helps structure loans that work for {city.name}'s specific market conditions and investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loan Programs for {city.name} Investors
            </h2>
            <p className="text-xl text-gray-600">
              Flexible financing solutions tailored for {city.name} real estate investments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto container-padding">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              We Also Serve Nearby Cities
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/cities/${nearbyCity.slug}`}
                  className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:border-primary-300 hover:shadow-md transition-all duration-200 text-center group"
                >
                  <span className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors">
                    {nearbyCity.name}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
                View All Service Areas →
              </Link>
            </div>
          </div>
        </section>
      )}
      
      {/* City FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {city.name} Hard Money Loan FAQs
          </h2>
          <FAQ items={cityFAQ} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Invest in {city.name}?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {content.closing}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <CTAButton variant="secondary" size="lg" className="sm:w-auto">
              Get Pre-Qualified
            </CTAButton>
            <CTAButton href="tel:347-696-0192" variant="primary" size="lg" className="sm:w-auto bg-white text-primary-600 hover:bg-gray-100">
              Call (347) 696-0192
            </CTAButton>
          </div>
          
          <p className="text-primary-200 text-sm mt-6">
            Local expertise • Fast funding • Competitive rates
          </p>
        </div>
      </section>
    </>
  );
}

// Enable ISR with revalidation
export const revalidate = 86400; // 24 hours