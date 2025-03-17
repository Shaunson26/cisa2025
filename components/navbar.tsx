import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  currentPage: string;
}

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Program", href: "/program" },
  { label: "Speakers", href: "/speakers" },
  { label: "Venue", href: "/venue" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ currentPage }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary-foreground">
              CX
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight">
            ConferenceX <span className="text-primary">2025</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            let textColor = link.label == currentPage ? '' : 'text-muted-foreground';
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${textColor} transition-colors hover:text-primary`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
          Register Now
        </Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>
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
      </div>
    </header>
  );
}
