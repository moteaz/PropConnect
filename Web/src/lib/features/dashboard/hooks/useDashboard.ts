import { useState, useEffect, useCallback } from "react";
import type { Property, PropertyType, PropertyCategory } from "@/lib/types";
import { propertyService } from "@/lib/services/property.service";
import { debounce } from "@/lib/utils/debounce";

export function useDashboard() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState<PropertyType | "">("");
  const [category, setCategory] = useState<PropertyCategory | "">("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sizeRange, setSizeRange] = useState({ min: "", max: "" });
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [isNegotiable, setIsNegotiable] = useState<boolean | undefined>(undefined);

  const debouncedSetSearch = useCallback(
    debounce((value: string) => setDebouncedSearchQuery(value), 300),
    []
  );

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    debouncedSetSearch(value);
  };

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await propertyService.getProperties(1, 100);
        setProperties(response.data);
        setTotal(response.meta.total);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    const filtered = properties.filter((p) => {
      const matchesSearch = !debouncedSearchQuery || 
        [p.title, p.description, p.address, p.city, p.region]
          .some(field => field.toLowerCase().includes(debouncedSearchQuery.toLowerCase()));
      
      const matchesCity = !city || p.city.toLowerCase() === city.toLowerCase();
      const matchesPropertyType = !propertyType || p.propertyType === propertyType;
      const matchesCategory = !category || p.category === category;
      
      const propertyPrice = Number(p.price);
      const matchesPrice = 
        (!priceRange.min || propertyPrice >= Number(priceRange.min)) &&
        (!priceRange.max || propertyPrice <= Number(priceRange.max));
      
      const propertySize = Number(p.sizeSqm);
      const matchesSize = 
        (!sizeRange.min || propertySize >= Number(sizeRange.min)) &&
        (!sizeRange.max || propertySize <= Number(sizeRange.max));
      
      const matchesBedrooms = !bedrooms || (p.bedrooms !== null && p.bedrooms >= parseInt(bedrooms));
      const matchesBathrooms = !bathrooms || (p.bathrooms !== null && p.bathrooms >= parseInt(bathrooms));
      const matchesNegotiable = isNegotiable === undefined || p.isNegotiable === isNegotiable;
      
      return matchesSearch && matchesCity && matchesPropertyType && matchesCategory &&
             matchesPrice && matchesSize && matchesBedrooms && matchesBathrooms && matchesNegotiable;
    });

    setFilteredProperties(filtered);
    setTotalPages(Math.ceil(filtered.length / 12));
    setCurrentPage(1);
  }, [properties, debouncedSearchQuery, city, propertyType, category, priceRange, sizeRange, bedrooms, bathrooms, isNegotiable]);

  const paginatedProperties = filteredProperties.slice((currentPage - 1) * 12, currentPage * 12);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setSearchQuery("");
    setDebouncedSearchQuery("");
    setCity("");
    setPropertyType("");
    setCategory("");
    setPriceRange({ min: "", max: "" });
    setSizeRange({ min: "", max: "" });
    setBedrooms("");
    setBathrooms("");
    setIsNegotiable(undefined);
    setCurrentPage(1);
  };

  return {
    properties: paginatedProperties,
    loading,
    selectedProperty,
    currentPage,
    totalPages,
    total: filteredProperties.length,
    setSelectedProperty,
    handlePageChange,
    searchQuery,
    setSearchQuery: handleSearchChange,
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
    resetFilters,
  };
}
