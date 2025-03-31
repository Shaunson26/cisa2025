import Link from "next/link";

// interface RegistrationPageLinkProps {
//     text: string;
//   }

export function RegistrationPageLink({text = "link to the registration form", className}: {text?: string, className?: string}) {

  const defaultClasses = "underline hover:text-accent transition-colors focus:outline-none focus:ring focus:text-accent focus:ring-accent"
  const classes = className ? className : defaultClasses;

    return (
      <Link
        href="https://www.magnacongresos.com/cisa2025-reg/"
        target="_blank"
        aria-label="Link to external conference registration page"
        className= {classes}
      >
        {text}
      </Link>
    );
  }