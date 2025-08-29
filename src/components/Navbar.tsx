"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-blue-600 dark:text-blue-400">
            MyApp
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Button asChild key={item.href} className="hidden md:flex">
                <Link
                  href={item.href}
                  className="text-white hover:bg-white hover:text-black border hover:border-black transition-ease-in-out duration-300"
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
