import { Check, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";

import { AbstractIPNAEmailLink } from "./abstract-link";

const registrationIncludes = [
  "Full conference access",
  "Conference materials",
  "Coffee and drinks",
  "Daily lunch",
  "Welcome reception with tapas",
];

const feeInfo = [
  { label: "Student - early", fee: "150€" },
  { label: "Student - regular", fee: "175€" },
  { label: "Postdocs - early", fee: "175€" },
  { label: "Postdocs - regular", fee: "210€" },
  { label: "Senior researcher - early", fee: "250€" },
  { label: "Senior researcher - regular", fee: "285€" },
];

function AbstractDocLink() {
  return (
    <Link
      href="/Abstract-template.doc"
      aria-label="Download link for abstract template Word document"
      className="font-semibold underline hover:text-accent transition-colors focus:outline-none focus:ring focus:accent focus:ring-accent"
    >
      Abstract-template.doc
    </Link>
  );
}

export function AbstractSubmissionSection() {
  return (
    <section id="abstract-section" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        {/* Title */}

        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center text-sm font-medium text-accent">
              <span className="h-px w-8 bg-accent mr-2"></span>
              Abstracts
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Abstract submission
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl"></p>
          </div>
        </div>

        {/* Magna info */}

        <div className="flex flex-col items-center justify-center space-y-4  mb-10">
          <Alert className="max-w-6xl mx-auto text-base">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle className="font-bold">Info</AlertTitle>
            <AlertDescription>
              Abstract submission will be handled in conjunction with IPNA.
              Follow the instructions below. If you have questions about the
              process of abstract submission or scientific development of the
              meeting, or require information in general, do not hesitate to
              contact us at <AbstractIPNAEmailLink />.
            </AlertDescription>
          </Alert>
        </div>

        {/* Registration includes */}

        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid gap-2">
            <div className="flex justify-center items-center gap-2 md:justify-start">
              <Check className="h-4 w-4 text-accent" />
              <span>
                Abstract should be{" "}
                <span className="font-bold">submitted by email</span> to the
                following address: <AbstractIPNAEmailLink />
              </span>
            </div>
            <div className="flex justify-center items-center gap-2 md:justify-start">
              <Check className="h-4 w-4 text-accent" />
              <span>
                Please use “Surname_Abstract” as subject of the email e.g.
                DiesVives_Abstract
              </span>
            </div>
            <div className="flex justify-center items-center gap-2 md:justify-start">
              <Check className="h-4 w-4 text-accent" />
              <span>
                Please use this abstract template during registration when
                uploading your abstract - {AbstractDocLink()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <Button className="px-8 shadow-lg hover:underline">
            Submit your abstract
          </Button>
        </div>
      </div>
    </section>
  );
}
