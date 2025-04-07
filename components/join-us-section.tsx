import { Button } from "./ui/button";
import Link from "next/link";

export function JoinUsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to join us in Tenerife?
            </h2>
            <p className="max-w-[700px] text-tertiary md:text-xl">
              Submit your abstract now
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/registration#abstract-section">
              <Button
                size="lg"
                className="px-8 shadow-lg bg-accent hover:bg-secondary"
              >
                Abstract submission
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
