"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/services/auth.service';
import type { LoginCredentials, RegisterCredentials, ApiError } from '@/lib/types';

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError('');
    
    try {
      await authService.login(credentials);
      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    setLoading(true);
    setError('');
    
    try {
      await authService.register(credentials);
      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    
    try {
      await authService.logout();
      router.push('/');
      router.refresh();
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, register, logout, loading, error, setError };
}
