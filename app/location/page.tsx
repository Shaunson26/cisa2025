"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Info,
  Utensils,
  Music,
  Phone,
  Globe,
  Car,
  Train,
  Mountain,
  Sun,
  Waves,
  GraduationCap,
  Landmark,
  Coffee,
  Beaker,
  Leaf,
  Microscope,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function LocationPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1">
      <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Conference Venue
                </h1>
                <p className="mx-auto max-w-[700px] text-tertiary md:text-xl">
                From Earth to the Cosmos: A conference venue that sparks
                discovery.
                </p>
              </div>
            </div>
          </div>
        </section>  

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  Museum of Science and the Cosmos (MCC), Tenerife
                </h2>
                <p className="">
                  Located in the municipality of San Cristóbal de La Laguna
                  (Tenerife), the Museum of Science and the Cosmos is one of the
                  most important centers for the dissemination of scientific
                  knowledge in the Canary Islands, particularly in the areas of
                  natural sciences, biology, astronomy, physics, and
                  environmental sciences, making it an exceptional place to hold
                  CISA 2025. The planetarium, interactive exhibits, and
                  workshops held here make science more accessible and engaging
                  for the general public.
                </p>
                <div className="grid gap-4 text-secondary">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>
                      Avda. Los Menceyes 70, 38200 La Laguna, Tenerife (Spain)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>0034 922 31 52 65</span>
                  </div>
                  <div className="flex items-center gap-2">
                    
                    <Globe className="h-5 w-5" />
                    <Link href="www.museosdetenerife.org" className="hover:text-accent">www.museosdetenerife.org</Link>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-xl">
                <Image
                  src="/cisa2025/images/venue/mcc-tenerife.webp"
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

        <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative h-[300px] overflow-hidden rounded-xl">
                <Image
                  src="/cisa2025/images/venue/tenerife_island.webp"
                  alt="Tenerife Island, Canary Islands"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Tenerife</h2>
                <p className="">
                  Tenerife is the largest island and the one with the highest
                  population in the Canary Islands archipelago. A place where
                  volcanic landscapes, such as Teide National Park, combine with
                  the lush subtropical forests of Anaga Rural Park and
                  coastlines bathed by the waters of the Atlantic Ocean,
                  creating a unique biodiversity of marine and terrestrial
                  species. One of the first scientists to highlight the
                  biogeographical value and importance of the island of Tenerife
                  was Alexander von Humboldt, who made a significant
                  contribution to the history of natural sciences and laid the
                  foundation for many subsequent scientific studies. The island
                  hosts a thriving scientific community with prominent research
                  centers focused on biodiversity, marine biology, environmental
                  sciences, and many other disciplines. It is an ideal setting
                  for the development of CISA 2025.
                </p>
                <div className="grid gap-4 text-secondary-200">
                  <div className="flex items-center gap-2">
                    <Mountain className="h-5 w-5" />
                    <span>
                      Mount Teide National Park - UNESCO World Heritage Site
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="h-5 w-5" />
                    <span>Average temperature: 22°C (72°F) year-round</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="h-5 w-5" />
                    <span>340+ km of coastline with pristine beaches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  Institute of Natural Products and Agrobiology (IPNA - CSIC)
                </h2>
                <p className="">
                  The Institute of Natural Products and Agrobiology (IPNA -
                  CSIC), belonging to the Spanish National Research Council
                  (CSIC) is the research center responsible for organizing the
                  conference. Located in San Cristóbal de la Laguna (Tenerife)
                  and with a team of over 100 researchers, IPNA – CSIC is
                  distinguished by its multidisciplinary approach, covering
                  areas such as ecology and evolutionary biology, natural
                  products chemistry, and agrobiology. The quality and impact of
                  the research conducted at its facilities, the network of
                  collaborations with national and international institutions,
                  and the use of advanced infrastructure with state-of-the-art
                  laboratories and technology have contributed to the
                  recognition of IPNA - CSIC as a benchmark for scientific
                  excellence in the Canary Islands.
                </p>
                <div className="grid gap-4 text-secondary">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>
                      Avda. Astrofísico Francisco Sánchez 3, 38206 La Laguna,
                      Tenerife (Spain)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>0034 922 256 847</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    <Link href="www.ipna.csic.es" className="hover:text-accent">www.ipna.csic.es</Link>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-xl">
                <Image
                  src="/cisa2025/images/venue/ipna.jpeg"
                  alt="ipna_csic"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative h-[300px] overflow-hidden rounded-xl">
                <Image
                  src="/cisa2025/images/venue/la_laguna.webp"
                  alt="San Cristobal de La Laguna"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  San Cristóbal de La Laguna
                </h2>
                <p className="">
                  San Cristóbal de La Laguna, founded in 1496 and commonly known
                  as La Laguna, is a municipality located on the island of
                  Tenerife. Due to its historical, cultural, and architectural
                  value, La Laguna was recognized as a UNESCO World Heritage
                  Site in 1999. Currently, the city is immersed in a cultural,
                  scientific, and academic environment, being home to the
                  University of La Laguna (ULL), the oldest university in the
                  Canary Islands. Additionally, its numerous leisure areas,
                  cafes, and restaurants make it a dynamic and welcoming city,
                  ideal for enjoyment and entertainment.
                </p>
                <div className="grid gap-4 text-secondary-200">
                  <div className="flex items-center gap-2">
                    <Landmark className="h-5 w-5 " />
                    <span>UNESCO World Heritage Site since 1999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 " />
                    <span>Home to the University of La Laguna (ULL)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="h-5 w-5" />
                    <span>
                      Historic city center with vibrant cafes and restaurants
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-8">
              Getting There
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    By Car
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Image
                        src="/cisa2025/images/venue/bycar.webp"
                        alt="tranvia_stops"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer transition-all duration-300 hover:scale-105"
                      />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] md:max-w-[800px]">
                      <DialogTitle>Map</DialogTitle>
                      <Image
                        src="/cisa2025/images/venue/bycar.webp"
                        alt="tranvia_stops"
                        width={800}
                        height={300}
                        className="w-full object-cover rounded-lg mb-4"
                      />
                    </DialogContent>
                  </Dialog>
                  <ul className="space-y-2 text-sm">
                    <li>10 minutes from the City Center of La Laguna</li>
                    <li>15 minutes from the City Center of Santa Cruz</li>
                    <li>
                      15 minutes from the Northern Airport, 45 minutes from the
                      South Airport
                    </li>
                    <li>Free parking on the other side of the street</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 ">
                    <Train className="h-5 w-5" />
                    Public Transport
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Image
                        src="/cisa2025/images/venue/tranvia1.webp"
                        alt="tranvia_stops"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer transition-all duration-300 hover:scale-105"
                      />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] md:max-w-[800px]">
                      <DialogTitle>Map</DialogTitle>
                      <Image
                        src="/cisa2025/images/venue/tranvia1.webp"
                        alt="tranvia_stops"
                        width={800}
                        height={300}
                        className="w-full object-cover rounded-lg mb-4"
                      />
                    </DialogContent>
                  </Dialog>

                  <ul className="space-y-2 text-sm">
                    <li>Tramway #1, stop at Museo de la Ciencia</li>
                    <li>Bus #14 stop at Museo de la Ciencia</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="container h-96 py-4 px-4 md:px-6 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1586.8845876864677!2d-16.309966121582526!3d28.475658378308623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cc52ffffffff%3A0x8d69c698978903de!2sMuseo%20de%20La%20Ciencia%20y%20El%20Cosmos!5e1!3m2!1sen!2ses!4v1742900456774!5m2!1sen!2ses"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-8">
              Around the Venue
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Historical & Cultural Sites</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/cisa2025/images/venue/drago.webp"
                    alt="Historic Center of La Laguna"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <ul className="space-y-2 text-sm ">
                    <li className="flex items-center gap-2">
                      <Landmark className="h-4 w-4" />
                      <span>Historic Center of La Laguna (UNESCO Site)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Landmark className="h-4 w-4" />
                      <span>Cathedral of La Laguna</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Landmark className="h-4 w-4" />
                      <span>Plaza del Adelantado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dining & Local Cuisine</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/cisa2025/images/venue/dining.webp"
                    alt="Canarian Cuisine"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      <span>Traditional Canarian restaurants in La Laguna</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      <span>Local tapas bars and cafes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      <span>Mercado de La Laguna (Local Market)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Nature & Parks</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/cisa2025/images/venue/anaga_park.webp"
                    alt="Anaga Rural Park"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Mountain className="h-4 w-4" />
                      <span>Anaga Rural Park (UNESCO Biosphere Reserve)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mountain className="h-4 w-4" />
                      <span>Monte de Las Mercedes hiking trails</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mountain className="h-4 w-4" />
                      <span>
                        Jardín Botánico (Botanical Garden) in Puerto de la Cruz
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
