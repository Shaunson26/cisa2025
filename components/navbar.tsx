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
  { label: "Program", href: "/program" },
  { label: "Speakers", href: "/speakers" },
  { label: "Location", href: "/location" },
  { label: "Registration", href: "/registration" },
];

const conferenceLogo = "/cisa2025/images/logos/cisa-logo-no-letters.svg";

// bg-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-foreground/60
// backdrop-blur supports-[backdrop-filter]:bg-background/90 
export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background drop-shadow-xl ">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-14 w-14 ">
            <Image
              alt="Conference logo"
              className="object-cover rounded-full"
              fill
              src={conferenceLogo}
            />
          </div>
          {/* <span className="text-xl font-bold tracking-tight">CISA 2025</span> */}
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm  ${
                pathname === link.href
                  ? "font-bold"
                  : "text-foreground/80"
              } transition-colors hover:text-accent`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/registration">
          <Button
            size="default"
            className="hidden md:inline-flex hover:bg-accent"
          >
            Register Now
          </Button>
        </Link>

        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}
