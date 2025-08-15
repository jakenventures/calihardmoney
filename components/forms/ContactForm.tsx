'use client';

import { useState, FormEvent } from 'react';
import CTAButton from '../ui/CTAButton';

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyCity: string;
  loanType: string;
  purchaseType: string;
  loanAmount: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    propertyCity: '',
    loanType: '',
    purchaseType: '',
    loanAmount: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyCity: '',
          loanType: '',
          purchaseType: '',
          loanAmount: '',
          message: ''
        });
      } else {
        setError('There was an error submitting your request. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="text-green-600 text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            We've received your request and will reply the same business day.
          </p>
          <CTAButton 
            onClick={() => setIsSubmitted(false)} 
            variant="primary"
          >
            Submit Another Request
          </CTAButton>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h3>
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
              <p className="text-red-600">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="propertyCity" className="block text-sm font-medium text-gray-700 mb-1">
                Property City *
              </label>
              <input
                type="text"
                id="propertyCity"
                name="propertyCity"
                required
                value={formData.propertyCity}
                onChange={handleChange}
                placeholder="e.g. Los Angeles, CA"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">
                Loan Type *
              </label>
              <select
                id="loanType"
                name="loanType"
                required
                value={formData.loanType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select loan type</option>
                <option value="DSCR Loan">DSCR Loan</option>
                <option value="Fix and Flip">Fix and Flip</option>
                <option value="Bridge Loan">Bridge Loan</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="purchaseType" className="block text-sm font-medium text-gray-700 mb-1">
                Transaction Type *
              </label>
              <select
                id="purchaseType"
                name="purchaseType"
                required
                value={formData.purchaseType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select transaction type</option>
                <option value="Purchase">Purchase</option>
                <option value="Refinance">Refinance</option>
                <option value="Cash-Out Refinance">Cash-Out Refinance</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                Estimated Loan Amount *
              </label>
              <select
                id="loanAmount"
                name="loanAmount"
                required
                value={formData.loanAmount}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select loan amount</option>
                <option value="$75,000 - $150,000">$75,000 - $150,000</option>
                <option value="$150,000 - $300,000">$150,000 - $300,000</option>
                <option value="$300,000 - $500,000">$300,000 - $500,000</option>
                <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
                <option value="$1,000,000 - $2,000,000">$1,000,000 - $2,000,000</option>
                <option value="$2,000,000+">$2,000,000+</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, timeline, or any specific questions..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <CTAButton
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              {isSubmitting ? 'Submitting...' : 'Get Pre-Qualified'}
            </CTAButton>
          </form>
        </>
      )}
    </div>
  );
}