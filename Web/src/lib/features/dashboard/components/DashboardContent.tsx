import type { Property, PropertyType, PropertyCategory } from "@/lib/types";
import { SearchBar } from "./SearchBar";
import { PropertyFilters } from "./PropertyFilters";
import { PropertyGrid } from "./PropertyGrid";
import { Pagination } from "./Pagination";

interface DashboardContentProps {
  properties: Property[];
  total: number;
  currentPage: number;
  totalPages: number;
  onViewDetails: (property: Property) => void;
  onPageChange: (page: number) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  city: string;
  onCityChange: (value: string) => void;
  propertyType: PropertyType | "";
  onPropertyTypeChange: (value: PropertyType | "") => void;
  category: PropertyCategory | "";
  onCategoryChange: (value: PropertyCategory | "") => void;
  priceRange: { min: string; max: string };
  onPriceRangeChange: (range: { min: string; max: string }) => void;
  sizeRange: { min: string; max: string };
  onSizeRangeChange: (range: { min: string; max: string }) => void;
  bedrooms: string;
  onBedroomsChange: (value: string) => void;
  bathrooms: string;
  onBathroomsChange: (value: string) => void;
  isNegotiable: boolean | undefined;
  onIsNegotiableChange: (value: boolean | undefined) => void;
  onResetFilters: () => void;
}

export function DashboardContent({
  properties,
  total,
  currentPage,
  totalPages,
  onViewDetails,
  onPageChange,
  searchQuery,
  onSearchChange,
  city,
  onCityChange,
  propertyType,
  onPropertyTypeChange,
  category,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sizeRange,
  onSizeRangeChange,
  bedrooms,
  onBedroomsChange,
  bathrooms,
  onBathroomsChange,
  isNegotiable,
  onIsNegotiableChange,
  onResetFilters,
}: DashboardContentProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Your Dream Property</h1>
        <p className="text-gray-600" aria-live="polite" aria-atomic="true">
          {total} {total === 1 ? 'property' : 'properties'} found
        </p>
      </header>

      <div className="space-y-6">
        <SearchBar value={searchQuery} onChange={onSearchChange} resultsCount={total} />

        <PropertyFilters
          city={city}
          propertyType={propertyType}
          category={category}
          priceRange={priceRange}
          sizeRange={sizeRange}
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          isNegotiable={isNegotiable}
          onCityChange={onCityChange}
          onPropertyTypeChange={onPropertyTypeChange}
          onCategoryChange={onCategoryChange}
          onPriceRangeChange={onPriceRangeChange}
          onSizeRangeChange={onSizeRangeChange}
          onBedroomsChange={onBedroomsChange}
          onBathroomsChange={onBathroomsChange}
          onIsNegotiableChange={onIsNegotiableChange}
          onReset={onResetFilters}
        />

        <PropertyGrid properties={properties} onViewDetails={onViewDetails} />

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </main>
  );
}
