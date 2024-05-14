'use client'
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    const usersDataString = localStorage.getItem('dataUser');
    if (usersDataString) {
      const usersData = JSON.parse(usersDataString);
      if (usersData?.id) {
        const { pathname } = router;
        if (pathname === '/user/login' || pathname === '/promotor/register') {
          router.push('/');
        }
      }
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
