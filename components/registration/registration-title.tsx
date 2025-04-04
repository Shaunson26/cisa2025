import Link from "next/link";
import { RegistrationPageLink } from "./registration-link";

export function RegistrationTitleSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Registration
          </h1>
          <p className="mx-auto max-w-[700px] text-tertiary md:text-xl">
          Here you will find information about registration fees,{" "}
              <RegistrationPageLink text="link to the registration form" />, and
              indications for{" "}
              <Link
                href="#abstract-section"
                aria-label="Link to abstract section"
                className="underline hover:text-accent transition-colors focus:outline-none focus:ring focus:text-accent focus:ring-accent"
              >
                submission of abstracts
              </Link>
              .
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}
