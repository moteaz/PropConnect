import { apiClient } from '@/lib/api/client';
import type { Property } from '@/lib/types';

interface PropertyMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface PropertyResponse {
  data: Property[];
  meta: PropertyMeta;
}

interface PropertyService {
  getProperties(page?: number, limit?: number): Promise<PropertyResponse>;
}

class PropertyServiceImpl implements PropertyService {
  async getProperties(page = 1, limit = 20): Promise<PropertyResponse> {
    const { data } = await apiClient.get<PropertyResponse>('/api/properties', {
      params: { page, limit },
    });
    return data;
  }
}

export const propertyService: PropertyService = new PropertyServiceImpl();
