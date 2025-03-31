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
      className="font-semibold underline hover:text-accent transition-colors focus:outline-none focus:ring focus:text-accent focus:ring-accent"
    >
      Magna Congresos
    </Link>
  );
}

function MagnaEmailLink() {
  return (
    <Link
      href="mailto:cisa2025@magnacongresos.es"
      target="_blank"
      aria-label="Link to conference registration email address for questions"
      className="font-semibold underline hover:text-accent transition-colors focus:outline-none focus:ring focus:text-accent focus:ring-accent"
    >
      cisa2025@magnacongresos.es
    </Link>
  );
}

export function RegistrationFeesSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        {/* Title */}

        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center text-sm font-medium text-accent">
              <span className="h-px w-8 bg-accent mr-2"></span>
              REGISTRATION
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Registration options
            </h2>
            <p className="max-w-[700px] text-primary/80 md:text-xl">
              Early bird until 30th June 2023
            </p>
          </div>


        </div>

        {/* Magna info */}

        <div className="flex flex-col items-center justify-center space-y-4 mb-10">
          <Alert className="max-w-6xl mx-auto text-base">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle className="font-bold">Info</AlertTitle>
            <AlertDescription>
            Registration will be handled in conjunction with{" "}
            {MagnaCongresosLink()}. We provide a{" "}
            <RegistrationPageLink 
            text="link to the registration form"
            className="font-semibold underline hover:text-accent transition-colors focus:outline-none focus:ring focus:text-accent focus:ring-accent"
             />. If
            you have questions about the registration process or related to
            travel logistics and accommodation, do not hesitate to contact us at{" "}
            {MagnaEmailLink()}.
            </AlertDescription>
          </Alert>
        </div>    

        {/* Registration includes */}

        <div className="max-w-6xl mx-auto mb-10">
          <h3 className="text-xl font-bold tracking-tighter md:text-2xl mb-3">
            Registration includes:
          </h3>
          <div className="max-w-3xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-4">
            {registrationIncludes.map((v, i) => (
              <div
                key={i}
                className="flex justify-center items-center gap-2 lg:justify-start"
              >
                <Check className="h-4 w-4 text-accent" />
                <span>{v}</span>
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Registration Fees */}

        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold tracking-tighter md:text-2xl mb-3">
            Registration fees:
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {feeInfo.map((v) => (
              <Card key={v.label} className="flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{v.label}</CardTitle>
                  {/* <CardDescription>...</CardDescription> */}
                  <div className="mt-2 text-3xl font-bold">{v.fee}</div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
