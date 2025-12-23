import { cookies } from 'next/headers';
import type { User } from '@/lib/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

/**
 * Server-side only: Get authenticated user from backend
 * Uses HTTP-only cookie automatically sent by fetch
 */
export async function getAuthenticatedUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token');

    if (!token) {
      return null;
    }

    const response = await fetch(`${API_URL}/api/auth/me`, {
      headers: {
        'Cookie': `auth_token=${token.value}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      credentials: 'include',
    });

    if (!response.ok) {
      return null;
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch authenticated user:', error);
    return null;
  }
}

/**
 * Server-side only: Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.has('auth_token');
}
