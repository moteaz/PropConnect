"use client";

import { createContext, useContext, ReactNode } from 'react';
import type { User } from '@/lib/types';

interface UserContextValue {
  user: User | null;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

interface UserProviderProps {
  user: User | null;
  children: ReactNode;
}

export function UserProvider({ user, children }: UserProviderProps) {
  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}
