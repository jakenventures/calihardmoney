'use client';

import { useState } from 'react';
import Link from 'next/link';
import CTAButton from './CTAButton';
import ContactFormModal from '../forms/ContactFormModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <span className="font-bold text-xl text-gray-900">Jaken Finance Group</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-600 font-medium flex items-center">
                  Loan Programs
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link href="/programs/dscr-loans-california" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                      DSCR Loans
                    </Link>
                    <Link href="/programs/fix-and-flip-loans-california" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                      Fix & Flip Loans
                    </Link>
                    <Link href="/programs/bridge-loans-california" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                      Bridge Loans
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link href="/faq" className="text-gray-700 hover:text-primary-600 font-medium">
                FAQ
              </Link>
              
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
                Contact
              </Link>
              
              <a 
                href="tel:347-696-0192" 
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                (347) 696-0192
              </a>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <CTAButton 
                onClick={() => setIsModalOpen(true)}
                variant="primary"
                size="sm"
              >
                Get Funded Now
              </CTAButton>
            </div>
            
            <button
              className="md:hidden text-gray-700 hover:text-primary-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-900 mb-2">Loan Programs</div>
                  <div className="pl-4 space-y-2">
                    <Link href="/programs/dscr-loans-california" className="block text-gray-700 hover:text-primary-600">
                      DSCR Loans
                    </Link>
                    <Link href="/programs/fix-and-flip-loans-california" className="block text-gray-700 hover:text-primary-600">
                      Fix & Flip Loans
                    </Link>
                    <Link href="/programs/bridge-loans-california" className="block text-gray-700 hover:text-primary-600">
                      Bridge Loans
                    </Link>
                  </div>
                </div>
                
                <Link href="/faq" className="block text-gray-700 hover:text-primary-600 font-medium">
                  FAQ
                </Link>
                
                <Link href="/contact" className="block text-gray-700 hover:text-primary-600 font-medium">
                  Contact
                </Link>
                
                <a 
                  href="tel:347-696-0192" 
                  className="block text-primary-600 hover:text-primary-700 font-semibold"
                >
                  (347) 696-0192
                </a>
                
                <CTAButton 
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Get Funded Now
                </CTAButton>
              </div>
            </div>
          )}
        </div>
      </header>
      
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}