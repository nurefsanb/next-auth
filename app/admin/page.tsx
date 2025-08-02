'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { isAdmin } from '@/lib/auth/role';

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Giriş yapılmamışsa veya admin değilse ana sayfaya yönlendir
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated' && !isAdmin(session?.user.role)) {
      router.push('/unauthorized');
    }
  }, [status, session, router]);

  if (status === 'loading') {
    return <p>Yükleniyor...</p>;
  }

  if (!session || !isAdmin(session.user.role)) return null;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">👑 Admin Paneli</h1>
      <p>Merhaba <strong>{session.user.name}</strong>, hoş geldin!</p>
      <p className="mt-2 text-green-600">Bu sayfa yalnızca admin kullanıcılar içindir.</p>
    </div>
  );
}
