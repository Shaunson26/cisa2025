import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  mainTitle: string;
  subTitle: string;
  dates: string;
  location: string;
  cardImage: string;
  bgImage: string;
}

function DateBadge(props: HeroProps) {
  return (
    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 w-fit">
      {props.dates} • {props.location}
    </div>
  );
}

function DateText(props: HeroProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm md:text-2xl">
      <div className="flex items-center gap-1">
        <Calendar className="h-4 w-4 text-primary" />
        <span>{props.dates}</span>
      </div>
      <div className="flex items-center gap-1">
        <MapPin className="h-4 w-4 text-primary" />
        <span>{props.location}</span>
      </div>
    </div>
  );
}

function HeroImageCard(props: HeroProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-[550px] aspect-video overflow-hidden rounded-xl shadow-2xl bg-white">
        <Image
          alt="Conference"
          className="object-contain"
          fill
          src={props.cardImage}
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
      </div>
    </div>
  );
}

export function Hero(props: HeroProps) {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/95 pointer-events-none"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 pointer-events-none"
        style={{ backgroundImage: `url('${props.bgImage}')` }}
      ></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            {/* {DateBadge(props)} */}
            { DateText(props) }
            <div className="space-y-2">
              <h1 className="text-5xl font-semibold font-dynapuff sm:text-5xl xl:text-8xl/none">
                {props.mainTitle}
              </h1>
              <p className="max-w-[600px] md:max-w-4xl md:text-3xl">
                {props.subTitle}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/registration">
                <Button size="lg" className="px-8 shadow-lg hover:underline">
                  Register Now
                </Button>
              </Link>
              <Link href="/program">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 bg-secondary hover:underline"
                >
                  View Program
                </Button>
              </Link>
            </div>
          </div>
          {/* {HeroImageCard(props)} */}
        </div>
      </div>
    </section>
  );
}
