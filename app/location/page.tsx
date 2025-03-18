"use client";

import Link from "next/link"
import Image from "next/image"
import { MapPin, Info, Utensils, Music, Phone, Globe, Car, Train } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function LocationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Conference Venue
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
                  From Earth to the Cosmos: A conference venue that sparks discovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Museum of Science and the Cosmos (MCC), Tenerife</h2>
                <p className="text-muted-foreground">
                In the municipality of San Cristóbal de La Laguna (Tenerife), the Museum of Science and the Cosmos is located,
                 one of the most important centers for the dissemination of scientific knowledge in the Canary Islands, 
                 particularly in the areas of natural sciences, biology, astronomy, physics, and environmental sciences, 
                 making it an exceptional place to hold CISA 2025. The planetarium, interactive exhibits, 
                 and workshops held here make science more accessible and engaging for the general public.
                </p>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>
                    Avda. Los Menceyes 70, 38200 La Laguna, Tenerife (Spain) 
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>0034 922 31 52 65</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>www.museosdetenerife.org</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-xl">
                <Image
                  src="/cisa2025/images/venue/mcc-tenerife.jpg"
                  alt="Museum of Science and the Cosmos, Tenerife"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-8">Getting Here</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    By Car
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Parking Area"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>15 minutes from Downtown</li>
                    <li>Free parking for 500+ vehicles</li>
                    <li>Electric vehicle charging stations</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Train className="h-5 w-5" />
                    Public Transport
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Transit Station"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Direct subway line from airport</li>
                    <li>Bus stops at venue entrance</li>
                    <li>24/7 taxi stand</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-8">Around the Venue</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Local Attractions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="City Attractions"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      <span>Techville Science Museum (5 min walk)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      <span>Innovation Park (10 min walk)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dining Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Restaurant"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      <span>On-site café and restaurant</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      <span>Multiple restaurants within walking distance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Entertainment</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Entertainment"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Music className="h-4 w-4" />
                      <span>Live music at Byte Bar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="h-4 w-4" />
                      <span>Evening entertainment district nearby</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

