import { cookies } from 'next/headers';
import type { User } from '@/lib/types';
import { config } from '@/lib/config';

export async function getAuthenticatedUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token');

    if (!token?.value) {
      return null;
    }

    const response = await fetch(`${config.apiUrl}/api/auth/me`, {
      headers: {
        Cookie: `auth_token=${token.value}`,
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
    console.error('Failed to get authenticated user:', error);
    return null;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    return cookieStore.has('auth_token');
  } catch {
    return false;
  }
}
