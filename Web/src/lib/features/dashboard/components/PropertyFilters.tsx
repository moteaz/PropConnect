"use client";

import { useState } from "react";
import type { PropertyType, PropertyCategory } from "@/lib/types";
import { FaRedo, FaFilter, FaChevronDown, FaChevronUp, FaCheckCircle } from "react-icons/fa";
import { FilterSelect } from "./FilterSelect";
import { FilterInput } from "./FilterInput";
import { CITY_OPTIONS, PROPERTY_TYPE_OPTIONS, CATEGORY_OPTIONS, PRICE_RANGE_OPTIONS, BEDROOM_OPTIONS, BATHROOM_OPTIONS } from "../constants/filterOptions";

interface PropertyFiltersProps {
  city: string;
  propertyType: PropertyType | "";
  category: PropertyCategory | "";
  priceRange: { min: string; max: string };
  sizeRange: { min: string; max: string };
  bedrooms: string;
  bathrooms: string;
  isNegotiable: boolean | undefined;
  onCityChange: (value: string) => void;
  onPropertyTypeChange: (value: PropertyType | "") => void;
  onCategoryChange: (value: PropertyCategory | "") => void;
  onPriceRangeChange: (range: { min: string; max: string }) => void;
  onSizeRangeChange: (range: { min: string; max: string }) => void;
  onBedroomsChange: (value: string) => void;
  onBathroomsChange: (value: string) => void;
  onIsNegotiableChange: (value: boolean | undefined) => void;
  onReset: () => void;
}

export function PropertyFilters({
  city,
  propertyType,
  category,
  priceRange,
  sizeRange,
  bedrooms,
  bathrooms,
  isNegotiable,
  onCityChange,
  onPropertyTypeChange,
  onCategoryChange,
  onPriceRangeChange,
  onSizeRangeChange,
  onBedroomsChange,
  onBathroomsChange,
  onIsNegotiableChange,
  onReset,
}: PropertyFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handlePriceRangeChange = (value: string) => {
    if (!value) {
      onPriceRangeChange({ min: '', max: '' });
    } else {
      const [min, max] = value.split('-');
      onPriceRangeChange({ min, max });
    }
  };

  const activeFiltersCount = [
    city,
    propertyType,
    category,
    bedrooms,
    bathrooms,
    sizeRange.min,
    sizeRange.max,
    priceRange.min,
    priceRange.max,
    isNegotiable,
  ].filter(Boolean).length;

  const selectedPriceRange = priceRange.min || priceRange.max 
    ? PRICE_RANGE_OPTIONS.find(opt => {
        const [min, max] = opt.value.split('-');
        return min === priceRange.min && max === priceRange.max;
      })?.value || ''
    : '';

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 mb-6 overflow-hidden transition-all hover:shadow-lg">
      <div className="flex items-center justify-between p-5 bg-gradient-to-r from-violet-50 to-indigo-50 border-b border-gray-200">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-3 text-base font-semibold text-gray-800 hover:text-violet-600 transition-colors"
          aria-expanded={isExpanded}
          aria-controls="filter-panel"
        >
          <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center shadow-md">
            <FaFilter className="text-white" aria-hidden="true" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="px-2.5 py-0.5 bg-violet-600 text-white text-xs font-bold rounded-full shadow-sm">
                  {activeFiltersCount}
                </span>
              )}
            </div>
            {activeFiltersCount > 0 && (
              <span className="text-xs text-gray-600 font-normal">
                {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} active
              </span>
            )}
          </div>
          <div className="ml-auto">
            {isExpanded ? (
              <FaChevronUp className="text-gray-400" aria-hidden="true" />
            ) : (
              <FaChevronDown className="text-gray-400" aria-hidden="true" />
            )}
          </div>
        </button>
        {activeFiltersCount > 0 && (
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 rounded-lg transition-all shadow-md hover:shadow-lg"
            aria-label="Reset all filters"
          >
            <FaRedo className="text-xs" aria-hidden="true" />
            Reset All
          </button>
        )}
      </div>

      <div
        id="filter-panel"
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-6 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FilterSelect
              label="City"
              value={city}
              onChange={onCityChange}
              options={CITY_OPTIONS}
              id="filter-city"
            />
            <FilterSelect
              label="Property Type"
              value={propertyType}
              onChange={(value) => onPropertyTypeChange(value as PropertyType | "")}
              options={PROPERTY_TYPE_OPTIONS}
              id="filter-property-type"
            />
            <FilterSelect
              label="Category"
              value={category}
              onChange={(value) => onCategoryChange(value as PropertyCategory | "")}
              options={CATEGORY_OPTIONS}
              id="filter-category"
            />
            <FilterSelect
              label="Price Range"
              value={selectedPriceRange}
              onChange={handlePriceRangeChange}
              options={PRICE_RANGE_OPTIONS}
              id="filter-price-range"
            />
            <FilterSelect
              label="Bedrooms"
              value={bedrooms}
              onChange={onBedroomsChange}
              options={BEDROOM_OPTIONS}
              id="filter-bedrooms"
            />
            <FilterSelect
              label="Bathrooms"
              value={bathrooms}
              onChange={onBathroomsChange}
              options={BATHROOM_OPTIONS}
              id="filter-bathrooms"
            />
            <FilterInput
              label="Min Size (m²)"
              value={sizeRange.min}
              onChange={(value) => onSizeRangeChange({ ...sizeRange, min: value })}
              placeholder="Min"
              id="filter-min-size"
            />
            <FilterInput
              label="Max Size (m²)"
              value={sizeRange.max}
              onChange={(value) => onSizeRangeChange({ ...sizeRange, max: value })}
              placeholder="Max"
              id="filter-max-size"
            />
          </div>

          <div className="mt-5 pt-5 border-t border-gray-200">
            <label className={`flex items-center gap-3 cursor-pointer group p-3 rounded-lg transition-all ${isNegotiable ? 'bg-violet-50 border-2 border-violet-300' : 'bg-white border-2 border-gray-200 hover:border-violet-200'}`}>
              <input
                type="checkbox"
                checked={isNegotiable === true}
                onChange={(e) => onIsNegotiableChange(e.target.checked ? true : undefined)}
                className="w-5 h-5 text-violet-600 border-gray-300 rounded focus:ring-2 focus:ring-violet-500 cursor-pointer"
                aria-label="Show only negotiable properties"
              />
              <div className="flex items-center gap-2 flex-1">
                <span className={`text-sm font-medium transition-colors ${isNegotiable ? 'text-violet-700' : 'text-gray-700 group-hover:text-violet-600'}`}>
                  Show only negotiable properties
                </span>
                {isNegotiable && (
                  <FaCheckCircle className="text-violet-600 text-sm" aria-hidden="true" />
                )}
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
