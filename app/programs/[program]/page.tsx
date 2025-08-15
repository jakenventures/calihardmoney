import Head from 'next/head';
import { notFound } from 'next/navigation';
import Hero from '@/components/ui/Hero';
import FAQ from '@/components/ui/FAQ';
import CTAButton from '@/components/ui/CTAButton';
import { buildTitle, buildDescription, buildCanonicalUrl, localBusinessJsonLd, breadcrumbListJsonLd } from '@/lib/seo';

interface ProgramPageProps {
  params: {
    program: string;
  };
}

interface ProgramData {
  title: string;
  subtitle: string;
  overview: string;
  idealProfile: string[];
  useCases: string[];
  terms: {
    loanAmount: string;
    ltv: string;
    interestRate: string;
    term: string;
    closingTime: string;
  };
  process: string[];
  docsChecklist: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

const programData: Record<string, ProgramData> = {
  'dscr-loans-california': {
    title: 'DSCR Loans California',
    subtitle: 'Qualify based on rental income, not personal income. Perfect for growing your real estate investment portfolio.',
    overview: 'DSCR (Debt Service Coverage Ratio) loans are designed for real estate investors who want to qualify based on the property\'s rental income rather than personal income verification. This makes them ideal for investors with multiple properties, self-employed borrowers, or those with complex tax situations.',
    idealProfile: [
      'Real estate investors with rental properties',
      'Self-employed borrowers',
      'Investors with multiple income streams',
      'Portfolio builders seeking to scale',
      'Borrowers with complex tax situations'
    ],
    useCases: [
      'Purchasing buy-and-hold rental properties',
      'Cash-out refinancing existing rentals',
      'Building a rental property portfolio',
      'Investors seeking non-QM financing',
      'Properties with strong rental income potential'
    ],
    terms: {
      loanAmount: '$75,000 - $5,000,000+',
      ltv: 'Up to 80% LTV',
      interestRate: '7.5% - 10.5%',
      term: '30-year amortization',
      closingTime: '15-30 days'
    },
    process: [
      'Submit loan application with property details',
      'Provide rental income documentation or lease agreements',
      'Order property appraisal and title work',
      'Underwriting review focusing on DSCR ratio',
      'Final approval and loan documents preparation',
      'Schedule closing with title company'
    ],
    docsChecklist: [
      'Completed loan application',
      'Credit authorization',
      'Bank statements (2 months)',
      'Current lease agreements or rent roll',
      'Property tax records',
      'Homeowners insurance declarations',
      'Purchase contract (if applicable)',
      'Asset statements for down payment and reserves'
    ],
    faq: [
      {
        question: 'What is the minimum DSCR ratio required?',
        answer: 'We typically require a DSCR of 1.0 or higher, meaning the rental income covers the debt service. Some programs allow ratios as low as 0.75 with additional requirements.'
      },
      {
        question: 'Do I need to verify personal income?',
        answer: 'No, DSCR loans qualify based on the property\'s rental income, not your personal income. This eliminates the need for tax returns, W-2s, or employment verification.'
      },
      {
        question: 'Can I use projected rents for a vacant property?',
        answer: 'Yes, we can use a rent survey or appraisal with rental analysis to determine market rent for vacant properties or new purchases.'
      }
    ]
  },
  'fix-and-flip-loans-california': {
    title: 'Fix and Flip Loans California',
    subtitle: 'Fast funding for house flippers and renovators. Get the capital you need to purchase and renovate properties quickly.',
    overview: 'Fix and flip loans provide short-term financing for real estate investors who purchase properties, renovate them, and sell them for a profit. These loans can cover both the purchase price and renovation costs, with flexible draw schedules to fund construction progress.',
    idealProfile: [
      'Experienced house flippers',
      'Real estate investors new to flipping',
      'General contractors with real estate experience',
      'Investors seeking quick property turnarounds',
      'Borrowers needing construction funding'
    ],
    useCases: [
      'Purchasing and renovating single-family homes',
      'Flipping condos and townhomes',
      'Light commercial property renovations',
      'Properties requiring cosmetic updates',
      'Major renovation projects with clear exit strategies'
    ],
    terms: {
      loanAmount: '$75,000 - $2,000,000+',
      ltv: 'Up to 90% ARV',
      interestRate: '9% - 14%',
      term: '6-24 months',
      closingTime: '7-14 days'
    },
    process: [
      'Submit loan application with project details',
      'Provide renovation scope and budget',
      'Property appraisal including After Repair Value (ARV)',
      'Review contractor qualifications and timeline',
      'Loan approval and closing',
      'Fund renovation through scheduled draws'
    ],
    docsChecklist: [
      'Completed loan application',
      'Credit authorization',
      'Bank statements (2 months)',
      'Property purchase contract',
      'Detailed renovation scope of work',
      'Contractor bids and timeline',
      'Property photos and comparable sales',
      'Exit strategy documentation'
    ],
    faq: [
      {
        question: 'How do renovation draws work?',
        answer: 'We typically fund renovations through a series of draws based on completion milestones. An inspector verifies work completion before releasing each draw payment.'
      },
      {
        question: 'What if the project takes longer than expected?',
        answer: 'We offer extension options for projects that need additional time. Extension fees and terms vary based on the specific situation and remaining loan balance.'
      },
      {
        question: 'Do I need construction experience?',
        answer: 'While experience is helpful, we work with new flippers who have solid renovation plans and qualified contractors. We may require additional oversight for first-time borrowers.'
      }
    ]
  },
  'bridge-loans-california': {
    title: 'Bridge Loans California',
    subtitle: 'Short-term financing to bridge the gap between buying and selling properties or obtaining permanent financing.',
    overview: 'Bridge loans provide temporary financing solutions for real estate investors and property owners who need quick access to capital. Whether you\'re buying before selling, transitioning between financing options, or need fast funding for time-sensitive opportunities, bridge loans offer the flexibility you need.',
    idealProfile: [
      'Property owners selling current home while buying new',
      'Investors needing quick funding for opportunities',
      'Borrowers transitioning to permanent financing',
      'Commercial property investors',
      'Investors in competitive markets requiring cash offers'
    ],
    useCases: [
      'Purchasing before selling existing property',
      'Quickly closing on investment opportunities',
      'Transitioning from construction to permanent financing',
      'Commercial property acquisitions',
      'Refinancing with timing constraints'
    ],
    terms: {
      loanAmount: '$100,000 - $5,000,000+',
      ltv: 'Up to 80% LTV',
      interestRate: '8% - 12%',
      term: '3-36 months',
      closingTime: '10-21 days'
    },
    process: [
      'Submit loan application with financing needs',
      'Property valuation and title review',
      'Review exit strategy and timeline',
      'Underwriting and loan approval',
      'Loan documentation and closing',
      'Fund loan and begin interest-only payments'
    ],
    docsChecklist: [
      'Completed loan application',
      'Credit authorization',
      'Bank statements (2 months)',
      'Property documentation',
      'Exit strategy plan',
      'Income verification (if required)',
      'Insurance information',
      'Legal entity documents (if applicable)'
    ],
    faq: [
      {
        question: 'What exit strategies are acceptable?',
        answer: 'Common exit strategies include sale of the property, refinancing to permanent financing, or sale of another property to pay off the bridge loan.'
      },
      {
        question: 'Are bridge loans available for commercial properties?',
        answer: 'Yes, we provide bridge financing for various commercial properties including office buildings, retail centers, and mixed-use properties.'
      },
      {
        question: 'Can I make interest-only payments?',
        answer: 'Yes, most bridge loans feature interest-only payments during the loan term, which helps preserve cash flow during the bridge period.'
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(programData).map((program) => ({
    program,
  }));
}


export default function ProgramPage({ params }: ProgramPageProps) {
  const { program } = params;
  const data = programData[program];

  if (!data) {
    notFound();
  }

  const title = buildTitle({ program });
  const description = buildDescription({ program });
  const canonical = buildCanonicalUrl(`/programs/${program}`);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Loan Programs', url: '/#programs' },
    { name: data.title, url: `/programs/${program}` }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd({ state: "California" })),
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListJsonLd(breadcrumbs)),
        }}
      />

      <Hero 
        title={data.title}
        subtitle={data.subtitle}
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
      
      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">{data.overview}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal Borrower Profile</h3>
              <ul className="space-y-2">
                {data.idealProfile.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Use Cases</h3>
              <ul className="space-y-2">
                {data.useCases.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Terms Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Typical Loan Terms</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Loan Amount</h3>
              <p className="text-2xl font-bold text-primary-600">{data.terms.loanAmount}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">LTV</h3>
              <p className="text-2xl font-bold text-primary-600">{data.terms.ltv}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Interest Rate</h3>
              <p className="text-2xl font-bold text-primary-600">{data.terms.interestRate}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Term</h3>
              <p className="text-2xl font-bold text-primary-600">{data.terms.term}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Closing Time</h3>
              <p className="text-2xl font-bold text-primary-600">{data.terms.closingTime}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Loan Process</h2>
              <div className="space-y-4">
                {data.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <ul className="space-y-2">
                {data.docsChecklist.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Program FAQs</h2>
          <FAQ items={data.faq} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact our loan specialists to discuss your {data.title.toLowerCase()} needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <CTAButton variant="secondary" size="lg" className="sm:w-auto">
              Apply Now
            </CTAButton>
            <CTAButton href="tel:347-696-0192" variant="primary" size="lg" className="sm:w-auto bg-white text-primary-600 hover:bg-gray-100">
              Call (347) 696-0192
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}