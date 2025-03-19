import Image from "next/image";

const sponsorImgs = [
  "cisa2025/images/logos/cisc-logo.png",
  "cisa2025/images/logos/ipna-logo.png",
  "cisa2025/images/logos/mcc-logo.png",
];

export function SponsorSection() {
  return (
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 items-center justify-items-center py-8">
            {sponsorImgs.map((d, i) => (
              <div key={i} className="flex items-center justify-center group">
                <div className="relative h-32 w-64 overflow-hidden rounded-md border bg-background p-2 transition-all duration-300 hover:shadow-md">
                  <Image
                    src={d}
                    alt={`Sponsor ${i + 1}`}
                    fill
                    className="object-contain p-2 transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
