import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { RegistrationTitleSection } from "@/components/registration/registration-title";
import { RegistrationFeesSection } from "@/components/registration/registration-fees";
import { DinnerTourFeeSection } from "@/components/registration/dinner-tour-fees";
import { RegistrationFAQSection } from "@/components/registration/registration-faq";
import { AbstractSubmissionSection } from "@/components/registration/abstract-submission";
import { RegistrationAreYouReady } from "@/components/registration/registration-join-us-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Registration",
  description: "Register for CISA 2025: VI Iberian Congress of Biological Systematics in Tenerife, Spain, October 27 - 30, 2025. Secure your spot to attend conference events."
};

export default function ProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <RegistrationTitleSection />
        <RegistrationFeesSection />
        <DinnerTourFeeSection />
        <AbstractSubmissionSection />
        <RegistrationFAQSection />
        <RegistrationAreYouReady />
      </main>
      <Footer flipColours={true} />
    </div>
  );
}
