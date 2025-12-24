"use client";

import type { PropertyType, PropertyCategory } from "@/lib/types";
import { FaRedo } from "react-icons/fa";

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
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-700">Filters</h3>
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
        >
          <FaRedo className="text-xs" />
          Reset
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">City</label>
          <select
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
          >
            <option value="">All Cities</option>
            <option value="Tunis">Tunis</option>
            <option value="Ariana">Ariana</option>
            <option value="Ben Arous">Ben Arous</option>
            <option value="Manouba">Manouba</option>
            <option value="Nabeul">Nabeul</option>
            <option value="Zaghouan">Zaghouan</option>
            <option value="Bizerte">Bizerte</option>
            <option value="Béja">Béja</option>
            <option value="Jendouba">Jendouba</option>
            <option value="Kef">Kef</option>
            <option value="Siliana">Siliana</option>
            <option value="Sousse">Sousse</option>
            <option value="Monastir">Monastir</option>
            <option value="Mahdia">Mahdia</option>
            <option value="Sfax">Sfax</option>
            <option value="Kairouan">Kairouan</option>
            <option value="Kasserine">Kasserine</option>
            <option value="Sidi Bouzid">Sidi Bouzid</option>
            <option value="Gabès">Gabès</option>
            <option value="Medenine">Medenine</option>
            <option value="Tataouine">Tataouine</option>
            <option value="Gafsa">Gafsa</option>
            <option value="Tozeur">Tozeur</option>
            <option value="Kebili">Kebili</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Type</label>
          <select
            value={propertyType}
            onChange={(e) => onPropertyTypeChange(e.target.value as PropertyType | "")}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
          >
            <option value="">Any</option>
            <option value="RESIDENTIAL">Residential</option>
            <option value="COMMERCIAL">Commercial</option>
            <option value="MIXED">Mixed</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Category</label>
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value as PropertyCategory | "")}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
          >
            <option value="">Any</option>
            <option value="HOUSE">House</option>
            <option value="APARTMENT">Apartment</option>
            <option value="OFFICE">Office</option>
            <option value="SHOP">Shop</option>
            <option value="LAND">Land</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Price Range</label>
          <select
            onChange={(e) => {
              const value = e.target.value;
              if (value === '') {
                onPriceRangeChange({ min: '', max: '' });
              } else {
                const [min, max] = value.split('-');
                onPriceRangeChange({ min, max });
              }
            }}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
          >
            <option value="">Any Price</option>
            <option value="0-200000">Under 200 TND</option>
            <option value="200000-400000">200 - 400 TND</option>
            <option value="400000-600000">400 - 600 TND</option>
            <option value="600000-800000">600 - 800 TND</option>
            <option value="800000-1000000">800 - 1,000 TND</option>
            <option value="1000000-9999999">Above 1,000 TND</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Bedrooms</label>
          <select
            value={bedrooms}
            onChange={(e) => onBedroomsChange(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Bathrooms</label>
          <select
            value={bathrooms}
            onChange={(e) => onBathroomsChange(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Min Size (m²)</label>
          <input
            type="number"
            min="0"
            placeholder="Min"
            value={sizeRange.min}
            onChange={(e) => onSizeRangeChange({ ...sizeRange, min: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
          />
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Max Size (m²)</label>
          <input
            type="number"
            min="0"
            placeholder="Max"
            value={sizeRange.max}
            onChange={(e) => onSizeRangeChange({ ...sizeRange, max: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
          />
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Negotiable</label>
          <label className="flex items-center gap-2 cursor-pointer h-[38px]">
            <input
              type="checkbox"
              checked={isNegotiable === true}
              onChange={(e) => onIsNegotiableChange(e.target.checked ? true : undefined)}
              className="w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500"
            />
            <span className="text-sm text-gray-700">Only Negotiable</span>
          </label>
        </div>
      </div>
    </div>
  );
}
