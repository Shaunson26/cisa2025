import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users } from "lucide-react";
import { Navbar } from "@/components/navbar";

const pageParams = {
  pageId: "About",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar currentPage={pageParams.pageId} />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About the Conference
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  ConferenceX 2025 is the premier international gathering for
                  researchers, practitioners, and industry leaders in science
                  and technology.
                </p>
                <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>June 15-18, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Barcelona, Spain</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-5 w-5 text-primary" />
                    <span>800+ Attendees</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Conference Hall"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  height={310}
                  src="/placeholder.svg?height=310&width=550"
                  width={550}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  ConferenceX aims to foster collaboration, innovation, and
                  knowledge exchange among the global scientific community. We
                  provide a platform for sharing groundbreaking research,
                  discussing emerging trends, and building networks that
                  transcend geographical and disciplinary boundaries.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Conference History
                </h2>
                <p className="text-muted-foreground">
                  Established in 2010, ConferenceX has grown from a small
                  gathering of 100 researchers to an internationally recognized
                  event attracting over 800 participants from 50+ countries.
                  Over the years, we have featured more than 300 keynote
                  speakers and facilitated the presentation of thousands of
                  research papers.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  2025 Theme
                </h2>
                <p className="text-muted-foreground">
                  The theme for ConferenceX 2025 is "Bridging Disciplines for a
                  Sustainable Future." This theme reflects our commitment to
                  interdisciplinary approaches that address complex global
                  challenges. We invite contributions that explore how
                  collaboration across scientific domains can lead to innovative
                  solutions for sustainability.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Organizing Committee
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-bold">Prof. Elena Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">
                      Conference Chair
                    </p>
                    <p className="text-sm">University of Barcelona</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-bold">Dr. Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">
                      Program Chair
                    </p>
                    <p className="text-sm">Stanford University</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-bold">Prof. Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">
                      Publications Chair
                    </p>
                    <p className="text-sm">MIT</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-bold">Dr. Ahmed Hassan</h3>
                    <p className="text-sm text-muted-foreground">
                      Local Arrangements Chair
                    </p>
                    <p className="text-sm">Technical University of Catalonia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Join Us in Tenerife
                </h2>
                <p className="max-w-[700px] text-primary-foreground/80 md:text-xl">
                  Be part of this exciting gathering of minds from around the
                  world
                </p>
              </div>
              <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary ring-offset-background transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Register Now
              </button>
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
