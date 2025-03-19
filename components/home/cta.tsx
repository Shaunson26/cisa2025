import { Button } from "../ui/button"

export function ctaSection(){
    return (
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
    )
}