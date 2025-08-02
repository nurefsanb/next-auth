'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log("Session Bilgisi:", session);

  if (status === "loading") {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      {session ? (
        <>
          <p className="text-lg">Merhaba, {session.user?.name}!</p>
          <button
            onClick={() => router.push('/protected-route')}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Korumalı Sayfaya Git
          </button>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Çıkış Yap
          </button>
        </>
      ) : (
        <>
          <p>Giriş yapmanız gerekiyor</p>
          <button
            onClick={() => signIn('auth0')}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Giriş Yap
          </button>
        </>
      )}
    </div>
  );
}
