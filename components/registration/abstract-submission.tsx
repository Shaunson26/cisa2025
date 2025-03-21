import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Check, AlertCircle } from "lucide-react";
import Link from "next/link";
import { RegistrationPageLink } from "./registration-link";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";

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

function MagnaCongresosLink() {
  return (
    <Link
      href="https://www.magnacongresos.com/"
      target="_blank"
      aria-label="Link to conference registration partners home page"
      className="font-semibold underline text-primary hover:text-blue-800 transition-colors focus:outline-none focus:ring focus:text-blue-800"
    >
      Magna Congresos
    </Link>
  );
}

function IPNAEmailLink() {
  const address = "cisa2025@ipna.csic.es";
  return (
    <Link
      href={`mailto:${address}`}
      target="_blank"
      aria-label="Link to conference email address for submission of abstract questions"
      className="font-semibold underline text-primary hover:text-blue-800 transition-colors focus:outline-none focus:ring focus:text-blue-800"
    >
      {address}
    </Link>
  );
}

function AbstractDocLink() {
  return (
    <Link
      href="/Abstract-template.doc"
      aria-label="Download link for abstract template Word document"
      className="font-semibold underline text-primary hover:text-blue-800 transition-colors focus:outline-none focus:ring focus:text-blue-800"
    >
      Abstract-template.doc
    </Link>
  );
}

export function AbstractSubmissionSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        {/* Title */}

        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center text-sm font-medium text-primary">
              <span className="h-px w-8 bg-primary mr-2"></span>
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
              Registration will be handled in conjunction with IPNA. Follow the
              instructions below. If you have questions about the process of
              abstract submission or scientific development of the meeting, or
              require information in general, do not hesitate to contact us at{" "}
              {IPNAEmailLink()}.
            </AlertDescription>
          </Alert>
        </div>

        {/* Registration includes */}

        <div className="max-w-3xl mx-auto mb-10">
          <div className="grid gap-2">
            <div className="flex justify-center items-center gap-2 lg:justify-start">
              <Check className="h-4 w-4 text-primary" />
              <span>
                Abstract should be{" "}
                <span className="font-bold">submitted by email</span> to the
                following address: {IPNAEmailLink()}
              </span>
            </div>
            <div className="flex justify-center items-center gap-2 lg:justify-start">
              <Check className="h-4 w-4 text-primary" />
              <span>
                Please use “Surname_Abstract” as subject of the email e.g.
                DiesVives_Abstract
              </span>
            </div>
            <div className="flex justify-center items-center gap-2 lg:justify-start">
              <Check className="h-4 w-4 text-primary" />
              <span>
                Please use this abstract template during registration when
                uploading your abstract - {AbstractDocLink()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
