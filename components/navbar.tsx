"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  const role = session?.user?.role;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      <div className="text-lg font-semibold">
        <Link href="/">MyApp</Link>
      </div>

      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>

        {role === "admin" && (
          <Link href="/admin" className="text-red-400">
            Admin Panel
          </Link>
        )}

        {status === "authenticated" ? (
          <>
            <span className="text-sm opacity-70">Role: {role}</span>
            <button
              onClick={() => signOut()}
              className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn("auth0")}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded text-sm"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
