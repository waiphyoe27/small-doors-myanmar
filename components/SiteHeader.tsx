"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLockup } from "@/components/BrandLockup";

const navItems = [
  { href: "/places", label: "Places" },
  { href: "/culture", label: "Culture Notes" },
  { href: "/food", label: "Food" },
  { href: "/crafts", label: "Crafts" },
  { href: "/moods", label: "Travel Moods" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-tamarind/10 bg-paper/92 shadow-[0_8px_30px_rgba(64,43,27,0.06)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <BrandLockup />
        <nav aria-label="Main navigation" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 text-sm font-medium text-ink/75 sm:mx-0 sm:flex-wrap sm:justify-end sm:overflow-visible sm:px-0 sm:pb-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-full px-3 py-2 transition hover:bg-terracotta/10 hover:text-terracotta ${
                pathname.startsWith(item.href) ? "bg-terracotta/10 text-terracotta" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
