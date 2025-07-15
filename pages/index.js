
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>HydraSense AI</h1>
      <p>Every Drop Counts. Every Field Wins.</p>
      <Link href="/login"><button>Enter</button></Link>
      <p style={{ fontSize: '0.8rem', marginTop: '20px' }}>Redirecting to Login in 5 seconds...</p>
    </div>
  );
}
