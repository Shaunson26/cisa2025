import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import Link from "next/link";

export function DownloadMaterialsSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Download Program Materials
            </h2>
            <p className="max-w-[700px]  md:text-xl">
              Access detailed information about sessions and presentations
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link href="/Programa_Sintético_CISA2025_A5.pdf">
              <Button size="lg" className="px-8 shadow-lg hover:bg-accent">
                <File />
                Program (short)
              </Button>
            </Link>
            <Link href="/Extended_Program_CISA2025.pdf">
              <Button size="lg" className="px-8 shadow-lg hover:bg-accent">
                <File />
                Program (extended)
              </Button>
            </Link>
            <Link href="/CISA2025_Book_Abstracts_ok.pdf">
              <Button size="lg" className="px-8 shadow-lg hover:bg-accent">
                <File />
                Abstracts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
