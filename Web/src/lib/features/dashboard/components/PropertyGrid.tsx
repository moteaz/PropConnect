"use client";

import type { Property } from "@/lib/types";
import { PropertyCard } from "./PropertyCard";
import { FaSearch } from "react-icons/fa";

interface PropertyGridProps {
  properties: Property[];
  onViewDetails: (property: Property) => void;
}

export function PropertyGrid({ properties, onViewDetails }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
        <FaSearch className="mx-auto text-5xl text-gray-300 mb-4" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No properties found</h3>
        <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for</p>
      </div>
    );
  }

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      role="list"
      aria-label="Property listings"
    >
      {properties.map((property) => (
        <div key={property.id} role="listitem">
          <PropertyCard property={property} onViewDetails={onViewDetails} />
        </div>
      ))}
    </div>
  );
}
