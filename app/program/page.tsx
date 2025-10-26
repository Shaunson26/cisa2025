import { Metadata } from "next";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DinnerTourFeeSection } from "@/components/registration/dinner-tour-fees";
import { DownloadMaterialsSection } from "@/components/program/download-program";
import { HTMLprogram } from "@/components/program/html-program";

export const metadata: Metadata = {
  title: "Program",
  description:
    "Program and schedule for CISA 2025: VI Iberian Congress of Biological Systematics in Tenerife, Spain, October 26 - 30, 2025",
};

const pageParams = {};
// text-gradient-to-b from-primary to-background
export default function ProgramPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Program
                </h1>
                <p className="mx-auto max-w-[700px] text-tertiary md:text-xl">
                  The complete schedule and information for CISA 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        <DownloadMaterialsSection />      

        {/* Program Schedule Section */}
        <HTMLprogram />
        

        {/* Additional Information Section */}
        

        <DinnerTourFeeSection />

     
      </main>
      <Footer />
    </div>
  );
}
