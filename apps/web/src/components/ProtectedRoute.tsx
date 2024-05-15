'use client'
import { useRouter, usePathname } from 'next/navigation';

import { ReactNode, useEffect } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const usersDataString = localStorage.getItem('dataUser');
    if (usersDataString) {
      const usersData = JSON.parse(usersDataString);
      if (usersData?.id) {
        if (pathname === '/user/login' || pathname === '/promotor/register') {
          router.push('/'); // Use router.push for navigation
        }
      }
    }
  }, [pathname, router]); // Adding router and pathname to dependency array

  return <>{children}</>;
};

export default ProtectedRoute;
