'use client';

import { useState } from 'react';
import Link from 'next/link';
import CTAButton from './CTAButton';
import ContactFormModal from '../forms/ContactFormModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto container-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <span className="font-bold text-xl">Jaken Finance Group</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                California's trusted hard money lender. Fast funding for real estate investors with transparent terms and expert guidance.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:347-696-0192" className="hover:text-primary-400 transition-colors">
                    (347) 696-0192
                  </a>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:jason@jakenfinancegroup.com" className="hover:text-primary-400 transition-colors">
                    jason@jakenfinancegroup.com
                  </a>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>California Statewide</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Loan Programs</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/programs/dscr-loans-california" className="text-gray-300 hover:text-primary-400 transition-colors">
                    DSCR Loans
                  </Link>
                </li>
                <li>
                  <Link href="/programs/fix-and-flip-loans-california" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Fix & Flip Loans
                  </Link>
                </li>
                <li>
                  <Link href="/programs/bridge-loans-california" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Bridge Loans
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-primary-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://jakenfinancegroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Corporate Site
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Get Started</h3>
              <p className="text-gray-300 mb-6">
                Ready to fund your next California real estate investment?
              </p>
              <CTAButton 
                onClick={() => setIsModalOpen(true)}
                variant="primary"
                size="md"
                className="w-full mb-4"
              >
                Apply Now
              </CTAButton>
              <CTAButton 
                href="tel:347-696-0192"
                variant="secondary"
                size="md"
                className="w-full"
              >
                Call Now
              </CTAButton>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Jaken Finance Group. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Licensed California Hard Money Lender</span>
                <span>NMLS ID: Available upon request</span>
              </div>
            </div>
            
            <div className="mt-4 text-xs text-gray-500 leading-relaxed">
              <p>
                This is not a commitment to lend. Loan approval is subject to credit approval and verification of application information. 
                Rates and terms subject to change without notice. Equal Housing Opportunity Lender. Licensed by the California Department of Financial Protection and Innovation.
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}