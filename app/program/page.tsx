import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Program | CISA 2025",
  description: "Program and schedule for CISA 2025",
};

const pageParams = {
};

export default function ProgramPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Program
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The complete schedule and information for CISA 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Schedule Section */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="day0" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="day0">Day 0</TabsTrigger>
                <TabsTrigger value="day1">Day 1</TabsTrigger>
                <TabsTrigger value="day2">Day 2</TabsTrigger>
                <TabsTrigger value="day3">Day 3</TabsTrigger>
              </TabsList>

              {/* Day 0 */}
              <TabsContent value="day0" className="mt-6">
                <div className="space-y-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">Monday 27th October</h2>
                  </div>
                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Museo de la Ciencia y el Cosmos, La Laguna</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Badge pickup & Icebreaker</h3>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Day 1 */}
              <TabsContent value="day1" className="mt-6">
                <div className="space-y-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">Tuesday 28th October</h2>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">9:00</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Welcome</h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">9:15-10:00</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Plenary Talk - Pedro Oromí</h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">10:00-17:30</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Talks and Speed Talks</h3>
                      <p className="text-sm text-muted-foreground">With coffee breaks and Lunch</p>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">17:30-18:30</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Poster Session</h3>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Day 2 */}
              <TabsContent value="day2" className="mt-6">
                <div className="space-y-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">Wednesday 29th October</h2>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">9:00-9:45</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Plenary Talk - Amrita Srivathsan</h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">9:45-17:30</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Talks and Speed Talks</h3>
                      <p className="text-sm text-muted-foreground">With coffee breaks and Lunch</p>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">17:30-18:30</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Poster Session</h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">19:00-19:45</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Divulgate Talk to the General Public</h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <h3 className="text-lg font-bold">Congress Dinner</h3>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Day 3 */}
              <TabsContent value="day3" className="mt-6">
                <div className="space-y-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">Thursday 30th October</h2>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">9:00-9:45</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Plenary Talk - Lisa Pokorny</h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">9:45-12:30</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Talks and Speed Talks</h3>
                      <p className="text-sm text-muted-foreground">With Coffee break</p>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">12:30-13:00</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Farewell and Closing</h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">15:00</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Visit to Teide N.P.</h3>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              {/* Sessions */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Sessions</h2>
                <p className="text-muted-foreground">
                  Following previous symposia, the CISA 2025 symposium will be organized around four main topics:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Taxonomy, phylogeny & Systematics</li>
                  <li>Biodiversity monitoring & community ecology (DNA barcoding, Metabarcoding & eDNA)</li>
                  <li>Phylogeography and Population genetics</li>
                  <li>Evolutionary Biology</li>
                </ul>
                <p className="text-muted-foreground">
                  The distribution of the different topics in the different sessions will not be done until we have the number of talks related to the different topics.
                </p>
              </div>

              {/* Talks */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Talks</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>The capacity of the assembly hall is limited to 154 people</li>
                  <li>The program and book of abstracts will be distributed in PDF but not printed on paper</li>
                  <li>We encourage all speakers to present their talks in English, although Spanish or Portuguese may also be used</li>
                </ul>
              </div>

              {/* Posters */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Posters</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Given the limited space for the posters, only up to 40 poster presentations will be accepted.</li>
                  <li>We encourage all presenters to present their posters in English, although Spanish or Portuguese might also be used.</li>
                  <li>We may offer a service to print posters in Tenerife</li>
                </ul>
              </div>

              {/* Food */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Food</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Registration includes coffee and drinks, the welcome reception with tapas and daily lunch</li>
                  <li>The congress dinner will be paid separately (€50)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Download Program Materials
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Access detailed information about sessions and presentations
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button className="gap-2" disabled>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Full Program PDF
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © CISA 2025. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Code of Conduct
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
