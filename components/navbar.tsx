"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const role = session?.user?.role;

  const [menuOpen, setMenuOpen] = useState(false);

  const NavLink = ({
    href,
    label,
  }: {
    href: string;
    label: string;
  }) => (
    <Link
      href={href}
      className={`${
        pathname === href ? "text-yellow-400 underline" : ""
      } hover:underline`}
      onClick={() => setMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">MyApp</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center text-sm">
          <NavLink href="/" label="Home" />
          {role === "admin" && <NavLink href="/admin" label="Admin Panel" />}
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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-sm">
          <NavLink href="/" label="Home" />
          {role === "admin" && <NavLink href="/admin" label="Admin Panel" />}
          {status === "authenticated" ? (
            <>
              <span className="opacity-70">Role: {role}</span>
              <button
                onClick={() => {
                  signOut();
                  setMenuOpen(false);
                }}
                className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded w-fit"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                signIn("auth0");
                setMenuOpen(false);
              }}
              className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded w-fit"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
