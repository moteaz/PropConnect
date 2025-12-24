"use client";

import { useAuth } from "@/lib/features/auth/hooks/useAuth";
import { useUser } from "@/lib/features/auth/user-context";
import { useDashboard } from "@/lib/features/dashboard/hooks/useDashboard";
import { DashboardHeader } from "@/lib/features/dashboard/components/DashboardHeader";
import { DashboardContent } from "@/lib/features/dashboard/components/DashboardContent";
import { PropertyDetailsModal } from "@/lib/features/dashboard/components/PropertyDetailsModal";
import { LoadingSpinner } from "@/lib/features/dashboard/components/LoadingSpinner";

export default function Dashboard() {
  const { user } = useUser();
  const { logout } = useAuth();
  const {
    properties,
    loading,
    selectedProperty,
    currentPage,
    totalPages,
    total,
    setSelectedProperty,
    handlePageChange,
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
    resetFilters,
  } = useDashboard();

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardHeader userName={user?.fullName || ""} onLogout={logout} />

      <DashboardContent
        properties={properties}
        total={total}
        currentPage={currentPage}
        totalPages={totalPages}
        onViewDetails={setSelectedProperty}
        onPageChange={handlePageChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        city={city}
        onCityChange={setCity}
        propertyType={propertyType}
        onPropertyTypeChange={setPropertyType}
        category={category}
        onCategoryChange={setCategory}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        sizeRange={sizeRange}
        onSizeRangeChange={setSizeRange}
        bedrooms={bedrooms}
        onBedroomsChange={setBedrooms}
        bathrooms={bathrooms}
        onBathroomsChange={setBathrooms}
        isNegotiable={isNegotiable}
        onIsNegotiableChange={setIsNegotiable}
        onResetFilters={resetFilters}
      />

      {selectedProperty && (
        <PropertyDetailsModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}
