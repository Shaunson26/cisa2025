import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, Clock, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/countdown-timer";
import { SpeakerCard } from "@/components/speaker-card";
import { SponsorGrid } from "@/components/sponsor-grid";
import { Navbar } from "@/components/navbar";

const pageParams = {
  mainTitle: "CISA 2025",
  subTitle: "VI Iberian Congress of Biological Systematics",
  dates: "October 26-30, 2025",
  location: "Tenerife, Spain",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/90">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/95 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('/cisa2025/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 w-fit">
                  {pageParams.dates} • {pageParams.location}
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {pageParams.mainTitle}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {pageParams.subTitle}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8 shadow-lg">
                    Register Now
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    View Program
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{pageParams.dates}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{pageParams.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[550px] aspect-video overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    alt="Conference"
                    className="object-cover"
                    fill
                    src="/cisa2025/placeholder.svg?height=310&width=550"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Registration Closes In
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Secure your spot at the conference before it's too late
                </p>
              </div>
              <div className="w-full max-w-3xl">
                <CountdownTimer targetDate="2025-05-15T00:00:00" />
              </div>
              <Button size="lg" className="mt-8 shadow-lg">
                Register Now
              </Button>
            </div>
          </div>
        </section>

        {/* Key Dates Section */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center text-sm font-medium text-primary">
                  <span className="h-px w-8 bg-primary mr-2"></span>
                  IMPORTANT DATES
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Key Milestones
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Mark your calendar for these important conference deadlines
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="group flex flex-col items-center space-y-2 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Abstract Submission</h3>
                  <p className="text-sm text-muted-foreground">
                    January 15, 2025
                  </p>
                </div>
                <div className="group flex flex-col items-center space-y-2 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Early Registration</h3>
                  <p className="text-sm text-muted-foreground">March 1, 2025</p>
                </div>
                <div className="group flex flex-col items-center space-y-2 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Regular Registration</h3>
                  <p className="text-sm text-muted-foreground">May 15, 2025</p>
                </div>
                <div className="group flex flex-col items-center space-y-2 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Conference Dates</h3>
                  <p className="text-sm text-muted-foreground">
                    June 15-18, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Speakers Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center text-sm font-medium text-primary">
                  <span className="h-px w-8 bg-primary mr-2"></span>
                  SPEAKERS
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  World-Class Experts
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Learn from the brightest minds in the field
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                <SpeakerCard
                  name="Dr. Jane Smith"
                  title="Professor of Quantum Physics"
                  institution="MIT"
                  imageUrl="/cisa2025/placeholder.svg?height=400&width=400"
                />
                <SpeakerCard
                  name="Prof. John Doe"
                  title="Director of AI Research"
                  institution="Stanford University"
                  imageUrl="/cisa2025/placeholder.svg?height=400&width=400"
                />
                <SpeakerCard
                  name="Dr. Maria Garcia"
                  title="Chief Scientist"
                  institution="CERN"
                  imageUrl="/cisa2025/placeholder.svg?height=400&width=400"
                />
                <SpeakerCard
                  name="Prof. David Kim"
                  title="Head of Biotechnology"
                  institution="Oxford University"
                  imageUrl="/cisa2025/placeholder.svg?height=400&width=400"
                />
              </div>
              <Button variant="outline" className="mt-8 gap-1 rounded-full">
                View All Speakers
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center text-sm font-medium text-primary">
                  <span className="h-px w-8 bg-primary mr-2"></span>
                  PROGRAM
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Program Highlights
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our diverse range of sessions and workshops
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2">
                <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                      className="h-6 w-6"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Keynote Presentations</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thought-provoking talks from industry leaders and academic
                    pioneers
                  </p>
                </div>
                <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                      className="h-6 w-6"
                    >
                      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                      <line x1="6" x2="6" y1="2" y2="4" />
                      <line x1="10" x2="10" y1="2" y2="4" />
                      <line x1="14" x2="14" y1="2" y2="4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Panel Discussions</h3>
                  <p className="mt-2 text-muted-foreground">
                    Engaging debates on current challenges and future directions
                  </p>
                </div>
                <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                      className="h-6 w-6"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Workshops</h3>
                  <p className="mt-2 text-muted-foreground">
                    Hands-on sessions to develop practical skills and knowledge
                  </p>
                </div>
                <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                      className="h-6 w-6"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <line x1="3" x2="21" y1="9" y2="9" />
                      <line x1="9" x2="9" y1="21" y2="9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Poster Sessions</h3>
                  <p className="mt-2 text-muted-foreground">
                    Showcase of cutting-edge research and innovations
                  </p>
                </div>
              </div>
              <Button variant="outline" className="mt-4 gap-1 rounded-full">
                View Full Program
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center text-sm font-medium text-primary">
                  <span className="h-px w-8 bg-primary mr-2"></span>
                  SPONSORS
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Partners
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Thanks to our partners who make this conference possible
                </p>
              </div>
              <SponsorGrid />
              <Button variant="outline" className="mt-8 rounded-full">
                Become a Sponsor
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-primary"></div>
          <div className="absolute inset-0 bg-[url('/cisa2025/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground md:text-4xl/tight">
                  Ready to Join the Conference?
                </h2>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Register today to secure your spot and take advantage of early
                  bird pricing
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-8 shadow-lg"
                >
                  Register Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground px-8"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full bg-primary">
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                CX
              </div>
            </div>
            <p className="text-sm leading-loose text-muted-foreground">
              © CISA 2025. All rights reserved.
            </p>
          </div>
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
