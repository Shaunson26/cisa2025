import Link from "next/link";
import { RegistrationPageLink } from "./registration-link";

export function RegistrationTitleSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Registration
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Here you will find information about registration fees,{" "}
              <RegistrationPageLink text="link to the registration form" />, and
              indications for{" "}
              <Link
                href="#abstract-section"
                aria-label="Link to abstract section"
                className="font-semibold underline text-primary hover:text-blue-800 transition-colors focus:outline-none focus:ring focus:text-blue-800"
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
