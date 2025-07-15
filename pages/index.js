
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectToLogin() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login');
  }, [router]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p>Redirecting to Login...</p>
    </div>
  );
}
