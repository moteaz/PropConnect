"use client";

import { createContext, useContext, ReactNode } from 'react';
import type { User } from '@/lib/types';

interface UserContextValue {
  user: User | null;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function UserProvider({ user, children }: { user: User | null; children: ReactNode }) {
  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
}
