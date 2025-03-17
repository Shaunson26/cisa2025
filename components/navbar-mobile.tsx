"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  currentPage: string;
}

interface NavLink {
  label: string;
  href: string;
}

interface NavbarPropsMobile {
  currentPage: string;
  links: NavLink[];
}

export function MobileNav({ currentPage, links }: NavbarPropsMobile) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="md:hidden"
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
          "fixed inset-0 top-30 z-50 bg-background/95 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <Link href="/" className="flex items-center gap-2 h-16 px-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
            <Image
              alt="Conference logo"
              className="object-cover"
              fill
              src="/placeholder-logo.svg"
            />
          </div>
          <span className="text-xl font-bold tracking-tight">CISA 2025</span>
        </Link>
        <div className="flex flex-col h-screen bg-gray-50">
          <nav className="container flex flex-col gap-6 py-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  link.label == currentPage
                    ? "text-primary"
                    : "text-muted-foreground"
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
