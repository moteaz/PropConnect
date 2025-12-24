"use client";

import { FaBed, FaBath, FaMapMarkerAlt, FaRulerCombined } from "react-icons/fa";
import type { Property } from "@/lib/types";
import { PropertyStatus } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

const STATUS_STYLES = {
  [PropertyStatus.AVAILABLE]: "bg-green-500 text-white",
  [PropertyStatus.RENTED]: "bg-yellow-500 text-white",
  [PropertyStatus.HIDDEN]: "bg-gray-500 text-white",
};

export function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  const primaryImage = property.images?.[0] || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400';
  const price = Number(property.price);
  const sizeSqm = Number(property.sizeSqm);
  
  return (
    <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-violet-500">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={primaryImage} 
          alt={`${property.title} - Property in ${property.city}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${STATUS_STYLES[property.status]}`}>
          {property.status}
        </div>
        {property.isNegotiable && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded shadow-md">
            Negotiable
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{property.title}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <FaMapMarkerAlt className="text-violet-600 flex-shrink-0" aria-hidden="true" />
          <span className="text-sm line-clamp-1">{property.city}, {property.region}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <div className="flex gap-3 text-gray-700 text-sm">
            {property.bedrooms && (
              <div className="flex items-center gap-1" title={`${property.bedrooms} bedrooms`}>
                <FaBed className="text-violet-600" aria-hidden="true" />
                <span>{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center gap-1" title={`${property.bathrooms} bathrooms`}>
                <FaBath className="text-violet-600" aria-hidden="true" />
                <span>{property.bathrooms}</span>
              </div>
            )}
            <div className="flex items-center gap-1" title={`${sizeSqm} square meters`}>
              <FaRulerCombined className="text-violet-600" aria-hidden="true" />
              <span>{sizeSqm}m²</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-bold text-violet-600">
            {price} TND
            <span className="text-sm text-gray-500 font-normal">/{property.pricePeriod.toLowerCase()}</span>
          </p>
        </div>
        <button 
          onClick={() => onViewDetails(property)}
          className="w-full py-2.5 bg-violet-600 text-white rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors font-medium"
          aria-label={`View details for ${property.title}`}
        >
          View Details
        </button>
      </div>
    </article>
  );
}
