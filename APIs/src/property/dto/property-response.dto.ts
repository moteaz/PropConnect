import {
  PropertyType,
  PropertyCategory,
  PricePeriod,
  PropertyStatus,
  ListedBy,
} from '@prisma/client';

export class PropertyResponseDto {
  id: string;
  title: string;
  description: string;
  propertyType: PropertyType;
  category: PropertyCategory;
  address: string;
  city: string;
  region: string;
  latitude?: number;
  longitude?: number;
  price: number;
  currency: string;
  pricePeriod: PricePeriod;
  isNegotiable: boolean;
  sizeSqm: number;
  bedrooms?: number;
  bathrooms?: number;
  availabilityDate?: Date;
  status: PropertyStatus;
  listedBy: ListedBy;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
  owner: {
    id: string;
    fullName: string;
  };
  images?: Array<{
    id: string;
    imageUrl: string;
    imageOrder: number;
    isPrimary: boolean;
  }>;
}
