'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { isAdmin, isUser } from '@/lib/auth/role'; // rol kontrol fonksiyonlarını içeri aktar

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/'); // Giriş yapmamışsa ana sayfaya yönlendir
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Yükleniyor...</p>;
  }

  if (!session) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🔐 Korumalı Sayfa</h1>
      <p className="mb-2">Hoş geldin <strong>{session.user?.name}</strong></p>
      <p className="mb-4">Senin rolün: <code className="bg-gray-100 px-2 py-1 rounded">{session.user.role}</code></p>

      {isAdmin(session.user.role) && (
        <p className="text-green-600 font-semibold">✅ Bu içeriği yalnızca admin görebilir.</p>
      )}

      {isUser(session.user.role) && (
        <p className="text-blue-600 font-semibold">👤 Bu içerik normal kullanıcı içindir.</p>
      )}
    </div>
  );
}
