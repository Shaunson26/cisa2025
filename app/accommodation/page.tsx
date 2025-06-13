import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Accommodation",
  description: "Accommodation options",
};

export default function ProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full">
          <iframe src="https://www.magnacongresos.com/cisa_htl/" className="w-full p-2 h-[4000px] md:h-[3000px]" />
        </section>
      </main>
      <Footer flipColours={true} />
    </div>
  );
}
