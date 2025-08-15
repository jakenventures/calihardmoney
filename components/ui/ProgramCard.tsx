import Link from 'next/link';
import CTAButton from './CTAButton';

interface ProgramCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: string;
}

export default function ProgramCard({ title, description, features, href, icon }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="space-y-3">
        <CTAButton href={href} variant="primary" className="w-full">
          Learn More
        </CTAButton>
        <CTAButton href="tel:347-696-0192" variant="secondary" className="w-full">
          Call Now
        </CTAButton>
      </div>
    </div>
  );
}