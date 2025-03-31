"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";



interface NavLink {
  label: string;
  href: string;
}

interface NavbarPropsMobile {
  links: NavLink[];
}

const conferenceLogo = '/cisa2025/images/logos/cisa-logo-no-letters.svg'

export function MobileNav({ links }: NavbarPropsMobile) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="md:hidden text-foreground border-foreground"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </Button>

      <div
        className={cn(
          "fixed inset-0 top-30 z-50 bg-background md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <Link href="/" className="flex items-center gap-2 h-16 px-2">
          <div className="relative h-14 w-14 overflow-hidden rounded-full">
            <Image
              alt="Conference logo"
              className="object-cover"
              fill
              src={conferenceLogo}
            />
          </div>
          <span className="text-3xl font-bold font-dynapuff ">CISA 2025</span>
        </Link>
        <div className="flex flex-col h-screen bg-background">
          <nav className="container flex flex-col gap-6 py-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg transition-colors ${
                  pathname === link.href ? "font-bold" : "text-foreground/60"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
