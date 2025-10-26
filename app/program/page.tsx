import { Metadata } from "next";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DinnerTourFeeSection } from "@/components/registration/dinner-tour-fees";
import { DownloadMaterialsSection } from "@/components/program/download-program";


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
        

        {/* Additional Information Section */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              {/* Sessions */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Sessions</h2>
                <p className="">
                  Following previous symposia, the CISA 2025 symposium will be
                  organized around four main topics:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Taxonomy, phylogeny & Systematics</li>
                  <li>
                    Biodiversity monitoring & community ecology (DNA barcoding,
                    Metabarcoding & eDNA)
                  </li>
                  <li>Phylogeography and Population genetics</li>
                  <li>Evolutionary Biology</li>
                </ul>
                <p className="">
                  The distribution of the different topics in the different
                  sessions will not be done until we have the number of talks
                  related to the different topics.
                </p>
              </div>

              {/* Talks */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Talks</h2>
                <ul className="list-disc list-inside space-y-2 ">
                  <li>
                    The capacity of the assembly hall is limited to 154 people
                  </li>
                  <li>
                    The program and book of abstracts will be distributed in PDF
                    but not printed on paper
                  </li>
                  <li>
                    We encourage all speakers to present their talks in English,
                    although Spanish or Portuguese may also be used
                  </li>
                </ul>
              </div>

              {/* Posters */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Posters</h2>
                <ul className="list-disc list-inside space-y-2 ">
                  <li>
                    Given the limited space for the posters, only up to 40
                    poster presentations will be accepted.
                  </li>
                  <li>
                    We encourage all presenters to present their posters in
                    English, although Spanish or Portuguese might also be used.
                  </li>
                  <li>We may offer a service to print posters in Tenerife</li>
                </ul>
              </div>

              {/* Food */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Food</h2>
                <ul className="list-disc list-inside space-y-2 ">
                  <li>
                    Registration includes coffee and drinks, the welcome
                    reception with tapas and daily lunch
                  </li>
                  <li>The congress dinner will be paid separately (€35)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <DinnerTourFeeSection />

     
      </main>
      <Footer />
    </div>
  );
}
