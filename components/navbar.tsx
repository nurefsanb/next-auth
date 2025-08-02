"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx"; // 👈 className yönetimi için önerilen mini helper

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const role = session?.user?.role;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      <div className="text-lg font-semibold">
        <Link href="/">MyApp</Link>
      </div>

      <div className="flex gap-4 items-center text-sm">
        <Link
          href="/"
          className={clsx(
            "hover:underline",
            pathname === "/" && "text-yellow-400 underline"
          )}
        >
          Home
        </Link>

        {role === "admin" && (
          <Link
            href="/admin"
            className={clsx(
              "text-red-400 hover:underline",
              pathname === "/admin" && "underline text-yellow-400"
            )}
          >
            Admin Panel
          </Link>
        )}

        {status === "authenticated" ? (
          <>
            <span className="opacity-70">Role: {role}</span>
            <button
              onClick={() => signOut()}
              className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn("auth0")}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
