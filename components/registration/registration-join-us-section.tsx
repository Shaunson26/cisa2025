import { Button } from "../ui/button";
import { RegistrationPageLink } from "./registration-link";

export function RegistrationAreYouReady() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Join Us in Tenerife?
            </h2>
            <p className="max-w-[700px] text-tertiary md:text-xl">
              Register today to secure your spot at CISA 2025
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="px-8 shadow-lg bg-accent hover:bg-secondary">
              <RegistrationPageLink text="Register Now" className="no-underline" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
