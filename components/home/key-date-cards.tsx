import { Calendar, Users, Clock} from "lucide-react";

interface KeyDateProps {
  abstractDate: string;
  earlyRegistrationDate: string;
  regularRegistrationDate: string;
  conferenceDates: string;
}

export function KeyDateSection(props: KeyDateProps) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center text-sm font-medium text-primary">
              <span className="h-px w-8 bg-primary mr-2"></span>
              IMPORTANT DATES
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Key Milestones
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Mark your calendar for these important conference deadlines
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group flex flex-col items-center space-y-2 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Abstract Submission</h3>
              <p className="text-sm text-muted-foreground">{props.abstractDate}</p>
            </div>
            <div className="group flex flex-col items-center space-y-2 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Early Registration</h3>
              <p className="text-sm text-muted-foreground">{props.earlyRegistrationDate}</p>
            </div>
            <div className="group flex flex-col items-center space-y-2 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Regular Registration</h3>
              <p className="text-sm text-muted-foreground">{props.regularRegistrationDate}</p>
            </div>
            <div className="group flex flex-col items-center space-y-2 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Conference Dates</h3>
              <p className="text-sm text-muted-foreground">{props.conferenceDates}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
