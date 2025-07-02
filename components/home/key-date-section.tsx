import { SectionPreTitle } from "../section-pre-title";
import { KeyDateCard } from "./key-date-card";
import { Calendar, Users, Clock} from "lucide-react";

interface KeyDateProps {
  abstractDate: string;
  earlyRegistrationDate: string;
  regularRegistrationDate: string;
  conferenceDates: string;
}

export function KeyDateSection(props: KeyDateProps) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 text-primary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <SectionPreTitle>IMPORTANT DATES</SectionPreTitle>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Key Dates
            </h2>
            <p className="max-w-[700px] text-primary/80 md:text-xl">
              Mark your calendar for these important conference deadlines
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-5 py-8 md:grid-cols-2 lg:grid-cols-4">

            <KeyDateCard title="Abstract<br/>Submission" date={props.abstractDate}><Calendar/></KeyDateCard>
            <KeyDateCard title="Early<br/>Registration" date={props.earlyRegistrationDate}><Clock/></KeyDateCard>
            <KeyDateCard title="Regular<br/>Registration" date={props.regularRegistrationDate}><Users/></KeyDateCard>
            <KeyDateCard title="Conference<br/>Dates" date={props.conferenceDates}><Calendar/></KeyDateCard>
  
          </div>
        </div>
      </div>
    </section>
  );
}
