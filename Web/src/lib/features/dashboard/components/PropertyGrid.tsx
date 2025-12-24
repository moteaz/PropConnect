"use client";

import type { Property } from "@/lib/types";
import { PropertyCard } from "./PropertyCard";

interface PropertyGridProps {
  properties: Property[];
  onViewDetails: (property: Property) => void;
}

export function PropertyGrid({ properties, onViewDetails }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No properties found matching your criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {properties.map((property) => (
        <PropertyCard 
          key={property.id} 
          property={property} 
          onViewDetails={onViewDetails} 
        />
      ))}
    </div>
  );
}
