
import Image from 'next/image';
import Link from 'next/link';

export default function Splash() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Image src="/logo.png" alt="HydraSense AI Logo" width={200} height={200} />
      <h1>HydraSense AI</h1>
      <p>Every Drop Counts. Every Field Wins.</p>
      <Link href="/login"><button>Enter</button></Link>
    </div>
  );
}
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
