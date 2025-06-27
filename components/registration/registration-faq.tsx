import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function RegistrationFAQSection(){
    return (
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Registration FAQ
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Common questions about the registration process
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What's included in the registration fee?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      All registration types include full access to conference
                      sessions, workshops, poster presentations, exhibition
                      area, coffee breaks, lunches for all conference days, and
                      the welcome reception. Researcher registrations also
                      include access to the digital proceedings.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How do I qualify for student registration?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      To qualify for student registration, you must be enrolled
                      in a degree program at an accredited institution at the
                      time of the conference. You will need to provide proof of
                      student status (student ID or letter from your
                      institution) during registration and at check-in.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What is the cancellation policy?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Cancellations received before April 15, 2025 will receive
                      a full refund minus a €50 processing fee. Cancellations
                      between April 16 and May 15, 2025 will receive a 50%
                      refund. No refunds will be issued for cancellations after
                      May 15, 2025. All cancellation requests must be submitted
                      in writing.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Can I transfer my registration to a colleague?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Yes, registration transfers to colleagues from the same
                      institution are permitted at no additional cost. Please
                      contact us at least two weeks before the conference with
                      the details of the new attendee.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
    )
}