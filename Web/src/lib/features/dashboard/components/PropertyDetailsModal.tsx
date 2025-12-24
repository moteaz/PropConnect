"use client";

import { useState } from "react";
import { FaBed, FaBath, FaMapMarkerAlt, FaTimes, FaRulerCombined, FaTag, FaHome, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Property } from "@/lib/types";
import { PropertyStatus } from "@/lib/types";

interface PropertyDetailsModalProps {
  property: Property;
  onClose: () => void;
}

export function PropertyDetailsModal({ property, onClose }: PropertyDetailsModalProps) {
  const images = property.images && property.images.length > 0 
    ? property.images 
    : ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800'];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={images[currentImageIndex]} 
            alt={property.title} 
            className="w-full h-80 object-cover" 
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <FaChevronLeft className="text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <FaChevronRight className="text-gray-800" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <FaTimes className="text-gray-600" />
          </button>
          <div 
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
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
            <div className="absolute top-4 left-28 px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
              Negotiable
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{property.title}</h2>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <FaMapMarkerAlt className="text-violet-600 text-sm" />
                <span className="text-sm">{property.address}, {property.city}, {property.region}</span>
              </div>
              <div className="flex gap-3 text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <FaHome className="text-violet-600" />
                  {property.propertyType}
                </span>
                <span className="flex items-center gap-1">
                  <FaTag className="text-violet-600" />
                  {property.category}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-violet-600">
                {(property.price / 1000).toLocaleString()} TND
              </p>
              <p className="text-xs text-gray-500">per {property.pricePeriod.toLowerCase()}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-base font-semibold text-gray-800 mb-2">Description</h3>
            <p className="text-sm text-gray-600">{property.description}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {property.bedrooms && (
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <FaBed className="text-xl text-violet-600 mx-auto mb-2" />
                <p className="text-xl font-bold text-gray-800">{property.bedrooms}</p>
                <p className="text-xs text-gray-600">Bedrooms</p>
              </div>
            )}
            {property.bathrooms && (
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <FaBath className="text-xl text-violet-600 mx-auto mb-2" />
                <p className="text-xl font-bold text-gray-800">{property.bathrooms}</p>
                <p className="text-xs text-gray-600">Bathrooms</p>
              </div>
            )}
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <FaRulerCombined className="text-xl text-violet-600 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-800">{property.sizeSqm}</p>
              <p className="text-xs text-gray-600">m²</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="flex-1 py-2.5 bg-violet-600 text-white text-sm rounded-lg hover:bg-violet-700 transition-colors font-semibold">
              Contact Owner
            </button>
            <button className="flex-1 py-2.5 border-2 border-violet-600 text-violet-600 text-sm rounded-lg hover:bg-violet-50 transition-colors font-semibold">
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
