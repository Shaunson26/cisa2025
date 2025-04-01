import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import speakerInfo from "@/lib/keynote-speaker-information.json";

export const metadata: Metadata = {
  title: "Speakers",
  description: "Keynote speakers for CISA 2025: VI Iberian Congress of Biological Systematics in Tenerife, Spain, October 26 - 30, 2025. Meet our distinguished speakers."
};

export default function SpeakersPage() {
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
                  Our Distinguished Speakers
                </h1>
                <p className="mx-auto max-w-[700px] text-tertiary md:text-xl">
                  Meet the experts who will share their knowledge and insights
                  at CISA 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Grid Section */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              {speakerInfo.map((speaker, index) => (
                <div
                  key={speaker.name}
                  className="flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src={speaker.imageUrl}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold">{speaker.name}</h2>
                      <p className="text-primary/80">
                        {speaker.institution}
                      </p>
                    </div>

                    <p className="text-primary leading-relaxed">
                      {speaker.description}
                    </p>
                    <p>
                      <Link href={speaker.link} target="_blank" className="">
                        <Button className="hover:bg-accent">
                          Go to institution profile page
                        </Button>
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
