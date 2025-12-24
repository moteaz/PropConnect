"use client";

import { FaBed, FaBath, FaMapMarkerAlt, FaRulerCombined } from "react-icons/fa";
import type { Property } from "@/lib/types";
import { PropertyStatus } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

export function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  const primaryImage = property.images?.[0] || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400';
  
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <img
          src={primaryImage}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
            property.status === PropertyStatus.AVAILABLE
              ? "bg-green-500 text-white"
              : property.status === PropertyStatus.RENTED
              ? "bg-yellow-500 text-white"
              : "bg-gray-500 text-white"
          }`}
        >
          {property.status}
        </div>
        {property.isNegotiable && (
          <div className="absolute top-4 left-4 px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded">
            Negotiable
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <FaMapMarkerAlt className="text-violet-600" />
          <span className="text-sm">{property.city}, {property.region}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <div className="flex gap-3 text-gray-700 text-sm">
            {property.bedrooms && (
              <div className="flex items-center gap-1">
                <FaBed className="text-violet-600" />
                <span>{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center gap-1">
                <FaBath className="text-violet-600" />
                <span>{property.bathrooms}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <FaRulerCombined className="text-violet-600" />
              <span>{property.sizeSqm}m²</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-bold text-violet-600">
            {(property.price / 1000).toLocaleString()} TND
            <span className="text-sm text-gray-500">/{property.pricePeriod.toLowerCase()}</span>
          </p>
        </div>
        <button 
          onClick={() => onViewDetails(property)}
          className="w-full py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
