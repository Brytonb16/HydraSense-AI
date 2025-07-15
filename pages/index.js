
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SplashRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login');
  }, [router]);

  return (
    <div>
      <p>Redirecting to Login...</p>
    </div>
  );
}
