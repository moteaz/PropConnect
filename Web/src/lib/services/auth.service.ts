import { apiClient } from '@/lib/api/client';
import type { AuthResponse, LoginCredentials, RegisterCredentials } from '@/lib/types';

interface AuthService {
  login(credentials: LoginCredentials): Promise<AuthResponse>;
  register(credentials: RegisterCredentials): Promise<AuthResponse>;
  logout(): Promise<void>;
}

class AuthServiceImpl implements AuthService {
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
}

export const authService: AuthService = new AuthServiceImpl();
