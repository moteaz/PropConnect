import { useState, useMemo } from "react";
import type { Property, PropertyType, PropertyCategory } from "@/lib/types";

export function usePropertyFilters(properties: Property[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState<PropertyType | "">("");
  const [category, setCategory] = useState<PropertyCategory | "">("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sizeRange, setSizeRange] = useState({ min: "", max: "" });
  const [bedrooms, setBedrooms] = useState<string>("");
  const [bathrooms, setBathrooms] = useState<string>("");
  const [isNegotiable, setIsNegotiable] = useState<boolean | undefined>(undefined);

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      // Search in title, description, address, city, region
      const matchesSearch = !searchQuery || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.region.toLowerCase().includes(searchQuery.toLowerCase());
      
      // City filter
      const matchesCity = !city || p.city.toLowerCase().includes(city.toLowerCase());
      
      // Property type filter
      const matchesPropertyType = !propertyType || p.propertyType === propertyType;
      
      // Category filter
      const matchesCategory = !category || p.category === category;
      
      // Price range filter - Simplified
      let matchesPrice = true;
      if (priceRange.min && priceRange.min !== '') {
        const minPrice = Number(priceRange.min);
        if (!isNaN(minPrice)) {
          matchesPrice = matchesPrice && p.price >= minPrice;
        }
      }
      if (priceRange.max && priceRange.max !== '') {
        const maxPrice = Number(priceRange.max);
        if (!isNaN(maxPrice)) {
          matchesPrice = matchesPrice && p.price <= maxPrice;
        }
      }
      
      // Size range filter - Simplified
      let matchesSize = true;
      if (sizeRange.min && sizeRange.min !== '') {
        const minSize = Number(sizeRange.min);
        if (!isNaN(minSize)) {
          matchesSize = matchesSize && p.sizeSqm >= minSize;
        }
      }
      if (sizeRange.max && sizeRange.max !== '') {
        const maxSize = Number(sizeRange.max);
        if (!isNaN(maxSize)) {
          matchesSize = matchesSize && p.sizeSqm <= maxSize;
        }
      }
      
      // Bedrooms filter
      const matchesBedrooms = !bedrooms || (p.bedrooms !== null && p.bedrooms >= parseInt(bedrooms));
      
      // Bathrooms filter
      const matchesBathrooms = !bathrooms || (p.bathrooms !== null && p.bathrooms >= parseInt(bathrooms));
      
      // Negotiable filter
      const matchesNegotiable = isNegotiable === undefined || p.isNegotiable === isNegotiable;
      
      return matchesSearch && matchesCity && matchesPropertyType && matchesCategory &&
             matchesPrice && matchesSize && matchesBedrooms && matchesBathrooms && matchesNegotiable;
    });
  }, [properties, searchQuery, city, propertyType, category, priceRange, sizeRange, bedrooms, bathrooms, isNegotiable]);

  const resetFilters = (): void => {
    setSearchQuery("");
    setCity("");
    setPropertyType("");
    setCategory("");
    setPriceRange({ min: "", max: "" });
    setSizeRange({ min: "", max: "" });
    setBedrooms("");
    setBathrooms("");
    setIsNegotiable(undefined);
  };

  return {
    searchQuery,
    setSearchQuery,
    city,
    setCity,
    propertyType,
    setPropertyType,
    category,
    setCategory,
    priceRange,
    setPriceRange,
    sizeRange,
    setSizeRange,
    bedrooms,
    setBedrooms,
    bathrooms,
    setBathrooms,
    isNegotiable,
    setIsNegotiable,
    filteredProperties,
    resetFilters,
  };
}
