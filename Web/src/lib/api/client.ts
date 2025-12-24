import axios, { AxiosError, AxiosInstance } from 'axios';
import type { ApiError } from '@/lib/types';
import { config } from '@/lib/config';

class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: config.apiUrl,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError<ApiError>) => {
        const apiError: ApiError = {
          message: error.response?.data?.message || 'An unexpected error occurred',
          code: error.response?.data?.code,
          statusCode: error.response?.status,
        };

        if (error.response?.status === 401 && typeof window !== 'undefined') {
          window.location.href = '/login';
        }

        return Promise.reject(apiError);
      }
    );
  }

  public getClient(): AxiosInstance {
    return this.instance;
  }
}

export const apiClient = new ApiClient().getClient();
