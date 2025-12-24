import { redirect } from 'next/navigation';
import { getAuthenticatedUser } from '@/lib/features/auth/server';
import { UserProvider } from '@/lib/features/auth/user-context';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getAuthenticatedUser();

  if (!user) {
    redirect('/login');
  }

  return <UserProvider user={user}>{children}</UserProvider>;
}
