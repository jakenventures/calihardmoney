import Link from 'next/link';
import { City } from '@/lib/cities';

interface CityGridProps {
  cities: City[];
  title?: string;
  showAll?: boolean;
}

export default function CityGrid({ cities, title = "Service Areas", showAll = false }: CityGridProps) {
  const displayCities = showAll ? cities : cities.slice(0, 20);
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide hard money loans, DSCR loans, and fix & flip financing throughout California. 
            Find fast funding in your city.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
          {displayCities.map((city) => (
            <Link
              key={city.slug}
              href={`/cities/${city.slug}`}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary-300 hover:shadow-md transition-all duration-200 text-center group"
            >
              <span className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors">
                {city.name}
              </span>
            </Link>
          ))}
        </div>
        
        {!showAll && cities.length > 20 && (
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              And {cities.length - 20} more cities throughout California
            </p>
            <Link
              href="/cities"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Cities →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}