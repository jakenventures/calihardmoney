import Hero from '@/components/ui/Hero';
import ProgramCard from '@/components/ui/ProgramCard';
import CityGrid from '@/components/ui/CityGrid';
import FAQ from '@/components/ui/FAQ';
import CTAButton from '@/components/ui/CTAButton';
import { CITIES } from '@/lib/cities';
import { localBusinessJsonLd, faqPageJsonLd } from '@/lib/seo';

const programs = [
  {
    title: "DSCR Loans",
    description: "Qualify based on rental income, not personal income. Perfect for real estate investors with multiple properties.",
    features: [
      "No income verification required",
      "Qualify based on rental income (DSCR)",
      "Rates starting at 7.5%",
      "Up to 80% LTV",
      "Close in 15-30 days"
    ],
    href: "/programs/dscr-loans-california",
    icon: "🏠"
  },
  {
    title: "Fix & Flip Loans",
    description: "Fast funding for house flippers and renovators. Get the capital you need to flip properties quickly.",
    features: [
      "Fund purchase + renovation costs",
      "Interest-only payments",
      "6-24 month terms",
      "Up to 90% ARV",
      "Close in 7-14 days"
    ],
    href: "/programs/fix-and-flip-loans-california",
    icon: "🔨"
  },
  {
    title: "Bridge Loans",
    description: "Short-term financing to bridge the gap between buying and selling properties or permanent financing.",
    features: [
      "Quick access to capital",
      "Commercial & residential",
      "3-36 month terms",
      "Flexible qualification",
      "Fast 10-day closings"
    ],
    href: "/programs/bridge-loans-california",
    icon: "🌉"
  }
];

const faqItems = [
  {
    question: "How quickly can you fund a hard money loan in California?",
    answer: "We can provide term sheets within 24-72 hours and close most loans in 10-21 days. For fix and flip loans with clear exit strategies, we often close in as little as 7 days."
  },
  {
    question: "What are the qualification requirements for DSCR loans?",
    answer: "DSCR loans qualify based on the property's rental income, not your personal income. We typically require a DSCR of 1.0 or higher, good credit (typically 680+), and sufficient assets for down payment and reserves."
  },
  {
    question: "Do you lend throughout all of California?",
    answer: "Yes, we provide hard money loans, DSCR loans, and fix & flip financing throughout California, including all major metros like Los Angeles, San Francisco, San Diego, Sacramento, and beyond."
  },
  {
    question: "What types of properties do you finance?",
    answer: "We finance single-family homes, condos, townhomes, 2-4 unit properties, and some commercial properties. Properties can be owner-occupied, investment rentals, or fix-and-flip projects."
  },
  {
    question: "What are typical interest rates for hard money loans?",
    answer: "Our rates typically range from 7.5% to 12% depending on the loan type, property, borrower experience, and loan-to-value ratio. DSCR loans tend to have lower rates than fix & flip loans."
  },
  {
    question: "How much can I borrow?",
    answer: "We provide loans from $75,000 to $5,000,000+. Loan amounts depend on the property value, your experience, and the specific loan program."
  },
  {
    question: "What are the typical loan-to-value (LTV) ratios?",
    answer: "LTV ratios vary by program: DSCR loans up to 80% LTV, fix & flip loans up to 90% of the After Repair Value (ARV), and bridge loans typically 70-80% LTV."
  },
  {
    question: "Do you require a down payment?",
    answer: "Yes, down payment requirements vary by loan type. DSCR loans typically require 20-25% down, while fix & flip loans may require 10-30% depending on your experience and the project."
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd({ state: "California" })),
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd(faqItems)),
        }}
      />

      <Hero />
      
      {/* Why Choose JFG Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Jaken Finance Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're California real estate investor specialists with the experience and capital to fund your deals fast.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Term sheets in 24-72 hours, closings in 7-21 days. Speed is our specialty.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">DSCR-Friendly</h3>
              <p className="text-gray-600">Qualify based on rental income, not personal income. Perfect for growing portfolios.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rehab Expertise</h3>
              <p className="text-gray-600">We understand construction timelines and fund renovation projects with draws.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Terms</h3>
              <p className="text-gray-600">No hidden fees or surprises. Clear terms and honest communication throughout.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section id="programs" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              California Hard Money Loan Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible financing solutions for every real estate investment strategy. 
              From rental properties to fix-and-flips, we have the right loan for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Area Section */}
      <CityGrid cities={CITIES} />
      
      {/* Local Insights Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              California Real Estate Investment Insights
            </h2>
          </div>
          
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              California's robust real estate market offers tremendous opportunities for investors, from the tech-driven markets 
              of San Francisco and San Jose to the entertainment hub of Los Angeles and the growing economies of Sacramento and San Diego. 
              Understanding local market dynamics is crucial for successful real estate investment throughout the Golden State.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              <strong>Value-Add Opportunities:</strong> Many California markets present excellent value-add opportunities, particularly 
              in areas experiencing urban renewal or infrastructure improvements. DSCR loans are particularly valuable in these scenarios, 
              allowing investors to qualify based on the property's rental income potential rather than personal income verification. 
              This is especially beneficial for investors building portfolios across multiple California metros.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Short-Term Rental Considerations:</strong> California's diverse tourism markets, from Napa Valley to coastal areas, 
              create opportunities for short-term rental investments. However, investors should carefully research local STR regulations, 
              as many California cities have specific compliance requirements. Our team stays current on local regulations to help structure 
              loans appropriately for your investment strategy. <em>This information is for general guidance only and should not be considered legal advice.</em>
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about hard money loans and our lending process.
            </p>
          </div>
          
          <FAQ items={faqItems} />
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fund Your Next California Investment?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Join hundreds of successful real estate investors who trust Jaken Finance Group 
            for fast, reliable hard money lending throughout California.
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
            Speak with a California hard money loan specialist today
          </p>
        </div>
      </section>
    </>
  );
}