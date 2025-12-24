export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

export enum PropertyType {
  RESIDENTIAL = 'RESIDENTIAL',
  COMMERCIAL = 'COMMERCIAL',
  MIXED = 'MIXED',
}

export enum PropertyCategory {
  HOUSE = 'HOUSE',
  APARTMENT = 'APARTMENT',
  OFFICE = 'OFFICE',
  SHOP = 'SHOP',
  LAND = 'LAND',
}

export enum PropertyStatus {
  AVAILABLE = 'AVAILABLE',
  RENTED = 'RENTED',
  HIDDEN = 'HIDDEN',
}

export enum PricePeriod {
  MONTH = 'MONTH',
  YEAR = 'YEAR',
  DAY = 'DAY',
}

export interface Property {
  id: string;
  title: string;
  description: string;
  propertyType: PropertyType;
  category: PropertyCategory;
  address: string;
  city: string;
  region: string;
  price: number;
  currency: string;
  pricePeriod: PricePeriod;
  isNegotiable: boolean;
  sizeSqm: number;
  bedrooms: number | null;
  bathrooms: number | null;
  status: PropertyStatus;
  images?: string[];
  createdAt: string;
}

export interface PropertyFilters {
  searchQuery: string;
  city?: string;
  region?: string;
  propertyType?: PropertyType;
  category?: PropertyCategory;
  minPrice?: number;
  maxPrice?: number;
  minSize?: number;
  maxSize?: number;
  bedrooms?: number;
  bathrooms?: number;
  isNegotiable?: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}
