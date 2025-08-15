'use client';

import { useState } from 'react';
import CTAButton from './CTAButton';
import ContactFormModal from '../forms/ContactFormModal';

interface HeroProps {
  city?: string;
  title?: string;
  subtitle?: string;
}

export default function Hero({ city, title, subtitle }: HeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const defaultTitle = city 
    ? `Private & Hard Money Loans in ${city}, CA`
    : "Private & Hard Money Loans in California";
    
  const defaultSubtitle = city
    ? `Fast funding for real estate investors in ${city}. DSCR loans, fix & flip financing, and bridge loans with 24-72 hour approvals.`
    : "Fast funding for real estate investors throughout California. DSCR loans, fix & flip financing, and bridge loans with 24-72 hour approvals.";
  
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {title || defaultTitle}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {subtitle || defaultSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <CTAButton 
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  size="lg"
                  className="sm:w-auto"
                >
                  Get Funded Now
                </CTAButton>
                
                <CTAButton 
                  href="#programs"
                  variant="secondary"
                  size="lg"
                  className="sm:w-auto"
                >
                  See Loan Programs
                </CTAButton>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600">24-72hr</div>
                  <div className="text-sm text-gray-600">Term Sheets</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">$75k-$5M+</div>
                  <div className="text-sm text-gray-600">Loan Range</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">Residential</div>
                  <div className="text-sm text-gray-600">& Mixed-Use</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">Investor</div>
                  <div className="text-sm text-gray-600">Focused</div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Pre-Qualification</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No income verification DSCR loans
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Fast fix & flip financing
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Bridge & commercial loans
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Experienced California lender
                  </div>
                </div>
                
                <CTAButton 
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Start Application
                </CTAButton>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  Speak with a loan specialist today
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}