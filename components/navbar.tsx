"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./navbar-mobile";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Program", href: "/program" },
  { label: "Location", href: "/location" },
  { label: "Speakers", href: "/speakers" },
  //{ label: "Venue", href: "/venue" },
  //{ label: "Contact", href: "/contact" },
];

const conferenceLogo = '/cisa2025/images/logos/cisa-logo-no-letters.svg'

export function Navbar() {

  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-14 w-14 overflow-hidden rounded-full">
            <Image
              alt="Conference logo"
              className="object-cover"
              fill
              src={conferenceLogo}
            />
          </div>
          <span className="text-xl font-bold tracking-tight">CISA 2025</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium ${
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              } transition-colors hover:text-primary`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
          Register Now
        </Button>
        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}
