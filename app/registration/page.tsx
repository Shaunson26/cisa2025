import { Navbar } from "@/components/navbar";
import { RegistrationTitleSection } from "@/components/registration/registration-title";
import { RegistrationFeesSection } from "@/components/registration/registration-fees";
import { DinnerTourFeeSection } from "@/components/registration/dinner-tour-fees";
import { RegistrationFAQSection } from "@/components/registration/registration-faq";
import { AbstractSubmissionSection } from "@/components/registration/abstract-submission";
import { RegistrationAreYouReady } from "@/components/registration/registration-are-you-ready";

import { Footer } from "@/components/footer";

export default function ProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {/* <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Registration
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Registration text ...
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="relative h-0 overflow-hidden pb-[75%]">
            <iframe
              src="https://www.magnacongresos.com/cisa2025-reg/"
              width="100%"
              height="100%"
              className="absolute top-[0] left-[0] px-1"
            ></iframe>
          </div>
        </section>
      </main> */}
      <main className="flex-1">
        <RegistrationTitleSection />
        <RegistrationFeesSection />
        <DinnerTourFeeSection />
        <AbstractSubmissionSection />
        <RegistrationFAQSection />
        <RegistrationAreYouReady />
      </main>
      <Footer />
    </div>
  );
}
