import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { Navbar } from "@/components/navbar";

const pageParams = {
};

export default function ProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Conference Program
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our comprehensive schedule of keynotes, sessions, and
                  workshops
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="day1" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="day1">Day 1</TabsTrigger>
                <TabsTrigger value="day2">Day 2</TabsTrigger>
                <TabsTrigger value="day3">Day 3</TabsTrigger>
                <TabsTrigger value="day4">Day 4</TabsTrigger>
              </TabsList>
              <TabsContent value="day1" className="mt-6">
                <div className="space-y-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">June 15, 2025</h2>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            8:00 AM - 9:00 AM
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Main Lobby</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Registration & Welcome Coffee
                      </h3>
                    </div>
                    <div className="p-4">
                      <p className="text-muted-foreground">
                        Pick up your conference materials and enjoy a coffee
                        while networking with fellow attendees.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            9:00 AM - 10:30 AM
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Grand Ballroom</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Opening Ceremony & Keynote Address
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Image
                            src="/cisa2025/placeholder.svg?height=50&width=50"
                            alt="Dr. Jane Smith"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <h4 className="font-medium">Dr. Jane Smith</h4>
                            <p className="text-sm text-muted-foreground">
                              Professor of Quantum Physics, MIT
                            </p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          "The Future of Science in a Changing World: Challenges
                          and Opportunities"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            10:30 AM - 11:00 AM
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Exhibition Hall</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Coffee Break</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-muted-foreground">
                        Refreshments provided in the Exhibition Hall.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            11:00 AM - 12:30 PM
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Multiple Rooms</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Parallel Sessions: Emerging Technologies
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-medium">
                            Room A: Artificial Intelligence & Machine Learning
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Chair: Prof. David Kim, Oxford University
                          </p>
                        </div>
                        <div className="border-l-4 border-primary/70 pl-4">
                          <h4 className="font-medium">
                            Room B: Quantum Computing
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Chair: Dr. Maria Garcia, CERN
                          </p>
                        </div>
                        <div className="border-l-4 border-primary/50 pl-4">
                          <h4 className="font-medium">
                            Room C: Biotechnology & Genomics
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Chair: Prof. John Doe, Stanford University
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Full Day 1 Schedule
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="day2" className="mt-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">June 16, 2025</h2>
                </div>
                <div className="h-40 flex items-center justify-center border rounded-lg mt-4">
                  <p className="text-muted-foreground">
                    Day 2 schedule will be available soon.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="day3" className="mt-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">June 17, 2025</h2>
                </div>
                <div className="h-40 flex items-center justify-center border rounded-lg mt-4">
                  <p className="text-muted-foreground">
                    Day 3 schedule will be available soon.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="day4" className="mt-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">June 18, 2025</h2>
                </div>
                <div className="h-40 flex items-center justify-center border rounded-lg mt-4">
                  <p className="text-muted-foreground">
                    Day 4 schedule will be available soon.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
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
                <Button className="gap-2">
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
                <Button variant="outline" className="gap-2">
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
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 2v20" />
                    <path d="M17 2v20" />
                    <path d="M2 12h20" />
                    <path d="M2 7h5" />
                    <path d="M2 17h5" />
                    <path d="M17 17h5" />
                    <path d="M17 7h5" />
                  </svg>
                  Conference App
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 ConferenceX. All rights reserved.
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
