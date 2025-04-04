import { SectionPreTitle } from "../section-pre-title";
import { SpeakerCard } from "@/components/home/speaker-card";
import speakerInfo from "@/lib/keynote-speaker-information.json";

export function KeynoteSpeakerSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <SectionPreTitle>KEYNOTE SPEAKERS</SectionPreTitle>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              World-Class Experts
            </h2>
            <p className="max-w-[700px] text-tertiary md:text-xl">
              Learn from the brightest minds in the field
            </p>
          </div>
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {speakerInfo.map((d) => (
              <SpeakerCard
                key={d.name}
                name={d.name}
                title={d.title}
                institution={d.institution}
                imageUrl={d.imageUrl}
                description={d.description}
                link={d.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
