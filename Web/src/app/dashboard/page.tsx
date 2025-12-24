"use client";

import { useState } from "react";
import { useAuth } from "@/lib/hooks/useAuth";
import { useUser } from "@/lib/features/auth/user-context";
import type { Property } from "@/lib/types";
import { PropertyStatus, PropertyType, PropertyCategory, PricePeriod } from "@/lib/types";
import { usePropertyFilters } from "@/lib/features/dashboard/hooks/usePropertyFilters";
import { DashboardHeader } from "@/lib/features/dashboard/components/DashboardHeader";
import { SearchBar } from "@/lib/features/dashboard/components/SearchBar";
import { PropertyFilters } from "@/lib/features/dashboard/components/PropertyFilters";
import { PropertyGrid } from "@/lib/features/dashboard/components/PropertyGrid";
import { PropertyDetailsModal } from "@/lib/features/dashboard/components/PropertyDetailsModal";

const MOCK_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Villa Moderne à La Marsa",
    description: "Magnifique villa moderne avec vue sur mer, piscine privée et jardin paysager. Finitions haut de gamme.",
    propertyType: PropertyType.RESIDENTIAL,
    category: PropertyCategory.HOUSE,
    address: "Avenue Habib Bourguiba",
    city: "La Marsa",
    region: "Tunis",
    price: 850000,
    currency: "TND",
    pricePeriod: PricePeriod.MONTH,
    isNegotiable: true,
    sizeSqm: 320,
    bedrooms: 5,
    bathrooms: 3,
    status: PropertyStatus.AVAILABLE,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Appartement Centre Ville",
    description: "Appartement moderne au coeur de Tunis, proche de toutes commodités. Parfait pour professionnels.",
    propertyType: PropertyType.RESIDENTIAL,
    category: PropertyCategory.APARTMENT,
    address: "Avenue de la Liberté",
    city: "Tunis",
    region: "Tunis",
    price: 320000,
    currency: "TND",
    pricePeriod: PricePeriod.MONTH,
    isNegotiable: false,
    sizeSqm: 140,
    bedrooms: 3,
    bathrooms: 2,
    status: PropertyStatus.AVAILABLE,
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Maison à Sousse",
    description: "Belle maison familiale dans un quartier calme, jardin et garage. Idéale pour famille.",
    propertyType: PropertyType.RESIDENTIAL,
    category: PropertyCategory.HOUSE,
    address: "Rue de la République",
    city: "Sousse",
    region: "Sousse",
    price: 450000,
    currency: "TND",
    pricePeriod: PricePeriod.MONTH,
    isNegotiable: true,
    sizeSqm: 210,
    bedrooms: 4,
    bathrooms: 2,
    status: PropertyStatus.AVAILABLE,
    images: ["https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Bureau Moderne Hammamet",
    description: "Espace de bureau moderne, idéal pour startup ou PME. Parking inclus.",
    propertyType: PropertyType.COMMERCIAL,
    category: PropertyCategory.OFFICE,
    address: "Zone Touristique",
    city: "Hammamet",
    region: "Nabeul",
    price: 280000,
    currency: "TND",
    pricePeriod: PricePeriod.MONTH,
    isNegotiable: false,
    sizeSqm: 95,
    bedrooms: null,
    bathrooms: 1,
    status: PropertyStatus.AVAILABLE,
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Villa Bord de Mer Bizerte",
    description: "Villa exceptionnelle avec accès direct à la plage. Vue panoramique sur la mer.",
    propertyType: PropertyType.RESIDENTIAL,
    category: PropertyCategory.HOUSE,
    address: "Corniche de Bizerte",
    city: "Bizerte",
    region: "Bizerte",
    price: 720000,
    currency: "TND",
    pricePeriod: PricePeriod.MONTH,
    isNegotiable: true,
    sizeSqm: 280,
    bedrooms: 4,
    bathrooms: 3,
    status: PropertyStatus.AVAILABLE,
    images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Boutique Centre Commercial",
    description: "Boutique bien située dans centre commercial fréquenté. Fort potentiel commercial.",
    propertyType: PropertyType.COMMERCIAL,
    category: PropertyCategory.SHOP,
    address: "Centre Commercial Tunisia Mall",
    city: "Tunis",
    region: "Tunis",
    price: 180000,
    currency: "TND",
    pricePeriod: PricePeriod.MONTH,
    isNegotiable: false,
    sizeSqm: 45,
    bedrooms: null,
    bathrooms: 1,
    status: PropertyStatus.RENTED,
    images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400"],
    createdAt: new Date().toISOString(),
  },
];

export default function Dashboard() {
  const { user } = useUser();
  const { logout } = useAuth();
  const [properties] = useState<Property[]>(MOCK_PROPERTIES);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const {
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
  } = usePropertyFilters(properties);

  const handleLogout = async (): Promise<void> => {
    await logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardHeader userName={user?.fullName || ""} onLogout={handleLogout} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Your Dream Property</h1>
          <p className="text-gray-600">{filteredProperties.length} properties available</p>
        </div>

        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <PropertyFilters
          city={city}
          propertyType={propertyType}
          category={category}
          priceRange={priceRange}
          sizeRange={sizeRange}
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          isNegotiable={isNegotiable}
          onCityChange={setCity}
          onPropertyTypeChange={setPropertyType}
          onCategoryChange={setCategory}
          onPriceRangeChange={setPriceRange}
          onSizeRangeChange={setSizeRange}
          onBedroomsChange={setBedrooms}
          onBathroomsChange={setBathrooms}
          onIsNegotiableChange={setIsNegotiable}
          onReset={resetFilters}
        />

        <PropertyGrid
          properties={filteredProperties}
          onViewDetails={setSelectedProperty}
        />
      </div>

      {selectedProperty && (
        <PropertyDetailsModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}
