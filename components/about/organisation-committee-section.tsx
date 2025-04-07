import { CommitteeCard } from "./committee-card";
import orgCommittee from "@/lib/organising-committee.json";

export function OrganisationCommitteeSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 text-primary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Organizing Committee
            </h2>
            <p className="text-primary/80">
              Meet the team behind CISA 2025
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {orgCommittee.map((v) => (
              <CommitteeCard key = {v.name} name={v.name} affiliation={v.affiliation} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
