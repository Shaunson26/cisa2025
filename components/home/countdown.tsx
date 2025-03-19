import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/countdown-timer";

export function CountdownSection() {
  return (
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
  );
}
