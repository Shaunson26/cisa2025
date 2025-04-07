import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { OrganisationCommitteeSection } from "@/components/about/organisation-committee-section";
import { ScientificCommitteeSection } from "@/components/about/scientific-committee-section";

export default function About() {
    return (
    <div className="flex min-h-screen flex-col">
      
      <Navbar />

      <main className="flex-1">   
        <OrganisationCommitteeSection />
        <ScientificCommitteeSection />    
      </main>
      <Footer />
      
    </div>
  );
}
