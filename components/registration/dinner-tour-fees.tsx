import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RegistrationPageLink } from "./registration-link";

const cardInfo = [
  {
    label: "Conference dinner",
    date: "October 29, 2025 • 8:30 PM",
    price: "35€",
    place: "Restaurant Gulagú • Calle Manuel de Ossuna 24", 
    img: "/cisa2025/images/dinner.webp",
    text: " Join us for an elegant evening in the centre of La Laguna and enjoy tasty cuisine and warm atmosphere.",
  },
  {
    label: "Tour to Teide",
    date: "October 30, 2025 • 3:00 PM",
    price: "35€",
    place: "Pick up and drop off at the Museum of Science and the Cosmos.", 
    img: "/cisa2025/images/teide.webp",
    text: "The conference aims to organize a half day visit to el Teide on Thursday afternoon after the closing. Lunch will be included.",
  },
];

export function DinnerTourFeeSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center text-sm font-medium text-accent">
              <span className="h-px w-8 bg-accent mr-2"></span>
              OPTIONAL ADD-ONS
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Enhance Your Experience
            </h2>
            <p className="max-w-[700px] text-primary/80 md:text-xl">
              Add these optional events when you <RegistrationPageLink text="register"/>
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {cardInfo.map((v) => (
            <Card key={v.label} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={v.img}
                  alt="Conference Dinner"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{v.label}</CardTitle>
                <CardDescription className="text-tertiary">{v.date}</CardDescription>
                <CardDescription className="text-tertiary">{v.place}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className=" mb-4">
                  {v.text}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">{v.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
