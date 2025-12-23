import { apiClient } from '@/lib/api/client';
import type { AuthResponse, LoginCredentials, RegisterCredentials } from '@/lib/types';

export class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>('/api/auth/login', credentials);
    return data;
  }

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>('/api/auth/register', credentials);
    return data;
  }

  async logout(): Promise<void> {
    await apiClient.post('/api/auth/logout');
  }

  async getCurrentUser(): Promise<AuthResponse['user']> {
    const { data } = await apiClient.get<AuthResponse['user']>('/api/auth/me');
    return data;
  }
}

export const authService = new AuthService();
