// Head management will be handled in layout.tsx for Next.js 13 App Router
import FAQ from '@/components/ui/FAQ';
import CTAButton from '@/components/ui/CTAButton';
import { buildTitle, buildDescription, buildCanonicalUrl, faqPageJsonLd, breadcrumbListJsonLd } from '@/lib/seo';

const faqItems = [
  {
    question: "What is a hard money loan and how does it work?",
    answer: "A hard money loan is a short-term, asset-based loan secured by real estate. These loans are funded by private investors rather than traditional banks, allowing for faster approval and closing times. Hard money loans are ideal for real estate investors who need quick funding for time-sensitive opportunities or don't qualify for traditional financing."
  },
  {
    question: "How quickly can you fund a hard money loan in California?",
    answer: "We can provide term sheets within 24-72 hours and close most loans in 10-21 days. For straightforward deals with clear documentation and experienced borrowers, we often close in as little as 7 days. Our streamlined process and local California market knowledge help expedite closings throughout the state."
  },
  {
    question: "What are DSCR loans and how do they differ from traditional mortgages?",
    answer: "DSCR (Debt Service Coverage Ratio) loans qualify borrowers based on the rental income of the investment property rather than personal income. Unlike traditional mortgages that require W-2s, tax returns, and employment verification, DSCR loans focus on the property's ability to generate sufficient rental income to cover the mortgage payment."
  },
  {
    question: "What are the qualification requirements for hard money loans?",
    answer: "Hard money loan qualifications typically include: good credit (usually 680+), sufficient down payment (10-30% depending on loan type), clear exit strategy, adequate assets for reserves, and experience with real estate investing (preferred but not always required). We focus more on the property and deal structure than personal income."
  },
  {
    question: "Do you lend throughout all of California?",
    answer: "Yes, we provide hard money loans, DSCR loans, and fix & flip financing throughout California, including all major metros like Los Angeles, San Francisco, San Diego, Sacramento, Fresno, and beyond. We have extensive experience with California's diverse real estate markets."
  },
  {
    question: "What types of properties do you finance?",
    answer: "We finance single-family homes, condos, townhomes, 2-4 unit residential properties, and select commercial properties. Properties can be owner-occupied, investment rentals, or fix-and-flip projects. We do not finance primary residences for most loan programs."
  },
  {
    question: "What are typical interest rates for hard money loans?",
    answer: "Our rates typically range from 7.5% to 14% depending on the loan type, property condition, borrower experience, loan-to-value ratio, and term length. DSCR loans generally have lower rates (7.5%-10.5%) while fix & flip loans have higher rates (9%-14%) due to their shorter terms and higher risk."
  },
  {
    question: "How much can I borrow with a hard money loan?",
    answer: "We provide loans from $75,000 to $5,000,000+. Loan amounts depend on the property value, your experience as a borrower, down payment available, and the specific loan program. Most of our loans fall in the $200,000 to $2,000,000 range."
  },
  {
    question: "What are the typical loan-to-value (LTV) ratios?",
    answer: "LTV ratios vary by program: DSCR loans up to 80% LTV, fix & flip loans up to 90% of the After Repair Value (ARV), and bridge loans typically 70-80% LTV. Higher LTV ratios may be available for experienced borrowers with strong credit and significant assets."
  },
  {
    question: "Do you require a down payment for hard money loans?",
    answer: "Yes, down payment requirements vary by loan type. DSCR loans typically require 20-25% down, fix & flip loans may require 10-30% depending on your experience and the project scope, and bridge loans usually require 20-30% down. Experienced borrowers may qualify for lower down payments."
  },
  {
    question: "How do renovation draws work for fix and flip loans?",
    answer: "We typically fund renovations through a series of scheduled draws based on completion milestones. An inspector verifies work completion before releasing each draw payment. Common draw schedules include: initial draw upon closing, draws at 25%, 50%, 75%, and final completion of work."
  },
  {
    question: "What documentation do I need to apply for a hard money loan?",
    answer: "Required documents typically include: completed loan application, credit authorization, bank statements (2 months), property purchase contract (if applicable), proof of down payment funds, property photos, and renovation scope/budget for fix & flip loans. DSCR loans require lease agreements or rent surveys."
  },
  {
    question: "Can I get a hard money loan with bad credit?",
    answer: "While we prefer credit scores of 680+, we can work with borrowers who have lower credit scores depending on the strength of the deal, down payment amount, and other compensating factors. Each loan is evaluated individually based on the overall risk profile."
  },
  {
    question: "What is the minimum DSCR ratio required for DSCR loans?",
    answer: "We typically require a DSCR of 1.0 or higher, meaning the rental income covers the debt service. Some programs allow ratios as low as 0.75 with additional requirements such as higher down payment, stronger credit, or more reserves."
  },
  {
    question: "Do you offer interest-only payments?",
    answer: "Yes, most of our hard money and bridge loans feature interest-only payments during the loan term. DSCR loans can be structured with either interest-only or amortizing payments, depending on your preference and qualification."
  },
  {
    question: "What fees are associated with hard money loans?",
    answer: "Typical fees include origination fees (1-3% of loan amount), processing fees, appraisal fees, title and escrow fees, and inspection fees for renovation loans. We provide a detailed fee breakdown with every loan quote so there are no surprises at closing."
  },
  {
    question: "Can I prepay my hard money loan without penalties?",
    answer: "Most of our loans allow prepayment without penalties after an initial period (typically 6 months). Some loans may have prepayment penalties in the first 6-12 months. Specific prepayment terms are detailed in your loan agreement."
  },
  {
    question: "Do you offer loans for commercial properties?",
    answer: "Yes, we provide bridge loans and some DSCR loans for commercial properties including office buildings, retail centers, small apartment buildings, and mixed-use properties. Commercial loans typically have different terms and requirements than residential loans."
  },
  {
    question: "What happens if my project takes longer than expected?",
    answer: "We offer extension options for projects that need additional time beyond the original loan term. Extension fees and terms vary based on the specific situation, remaining loan balance, and reason for the extension. We work with borrowers to find solutions that keep projects moving forward."
  },
  {
    question: "How do you determine property values for loan approval?",
    answer: "We order professional appraisals from licensed California appraisers familiar with the local market. For fix & flip loans, we obtain appraisals that include both current 'as-is' value and projected 'after repair value' (ARV) based on the renovation scope."
  }
];


export default function FAQPage() {
  const title = buildTitle({ page: 'faq' });
  const description = buildDescription({ page: 'faq' });
  const canonical = buildCanonicalUrl('/faq');

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd(faqItems)),
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListJsonLd(breadcrumbs)),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Frequently Asked Questions
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get answers to common questions about hard money loans, DSCR loans, and our lending process. 
            Can't find what you're looking for? Contact our experienced loan specialists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <CTAButton href="/contact" variant="primary" size="lg" className="sm:w-auto">
              Contact Us
            </CTAButton>
            <CTAButton href="tel:347-696-0192" variant="secondary" size="lg" className="sm:w-auto">
              Call (347) 696-0192
            </CTAButton>
          </div>
        </div>
      </section>
      
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

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <FAQ items={faqItems} />
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our experienced loan specialists are here to help. Get personalized answers to your specific situation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak with a loan specialist</p>
                <CTAButton href="tel:347-696-0192" variant="primary" size="sm" className="w-full">
                  (347) 696-0192
                </CTAButton>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get a detailed response</p>
                <CTAButton href="/contact" variant="primary" size="sm" className="w-full">
                  Contact Form
                </CTAButton>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Get Pre-Qualified</h3>
                <p className="text-gray-600 mb-4">Quick loan assessment</p>
                <CTAButton variant="primary" size="sm" className="w-full">
                  Apply Now
                </CTAButton>
              </div>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            Business hours: Monday-Friday 9:00 AM - 5:00 PM PST
          </p>
        </div>
      </section>
    </>
  );
}