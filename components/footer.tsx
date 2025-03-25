import Link from "next/link";
import Image from "next/image";

const conferenceLogo = "/cisa2025/images/logos/cisa-logo-with-letters.svg";

export function Footer({flipColours = false}: {flipColours?: boolean}) {
  const colorClasses = flipColours ? 'bg-secondary text-primary' : 'bg-primary text-secondary'
  return (
    <footer className={"w-full py-6 md:py-0 " + colorClasses}>      
      <div className="container flex flex-col items-center justify-between gap-4 md:h-32 md:flex-row">

        <div className="w-full flex items-center justify-start">
          <p className="text-sm leading-loose">
            © CISA 2025. All rights reserved.
          </p>
        </div>

        <div className="w-full flex items-center justify-center">

        <div className="relative h-28 w-28 bg-white">
          <Image
            alt="Conference logo"
            className="object-contain"
            fill
            src={conferenceLogo}
          />
        </div>

        </div>
        
        <div className="w-full flex items-center justify-end gap-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
          >
            Code of Conduct
          </Link>
        </div>
      </div>
    </footer>
  );
}
