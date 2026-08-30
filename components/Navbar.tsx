"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "home.tsx", href: "/" },
  { name: "projects.tsx", href: "/projects" },
  { name: "skills.tsx", href: "/skills" },
  { name: "contact.tsx", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto max-w-5xl flex items-center h-16 px-4 md:px-6">
        <div className="flex items-center gap-2 pr-4 mr-4 border-r border-border shrink-0">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>

        <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const active =
              tab.href === "/" ? pathname === "/" : pathname?.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`font-mono-display text-xs md:text-sm px-3 py-1.5 rounded-t-md border-t border-x transition-colors whitespace-nowrap ${
                  active
                    ? "bg-bg text-spring border-border"
                    : "bg-transparent text-muted border-transparent hover:text-ink"
                }`}
              >
                <span className={active ? "text-spring" : "text-java"}>●</span>{" "}
                {tab.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
