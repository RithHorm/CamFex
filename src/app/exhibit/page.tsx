import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Exhibit at CamFEX",
  description:
    "Edition 1 is planned at 3,000 square metres and 165 exhibitor positions, across six trade shows, in Q4 2027.",
};

const whyExhibit = [
  {
    heading: "The buyer comes to you",
    body: "The alternative is a stand at a trade fair in another country: freight, visas, translation, and a cost most Cambodian producers cannot justify. CamFEX brings the buyer here.",
  },
  {
    heading: "A diaried meeting, not a hope",
    body: "Exhibitors are matched to hosted buyers through The Buyers' Table before the show opens. You arrive with meetings already in the diary.",
  },
  {
    heading: "Help getting export-ready",
    body: "The Export Readiness Clinic runs throughout the show, free to exhibitors. If a buyer asks for a certification you do not hold, there is somebody in the building who can tell you how to get it.",
  },
  {
    heading: "A position, not a stand",
    body: "Founding exhibitors at Edition 1 hold first refusal on their position and product category for Editions 2 and 3.",
  },
];

export default function ExhibitOverviewPage() {
  return (
    <>
      {/* Hero — content spec §4.6. No photo assigned to this page; plain text hero, same treatment as Home's "one-sentence explanation" section. */}
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Exhibit at CamFEX
          </h1>
          <p className="mt-6 font-body text-lg text-ink/80">
            Edition 1 is planned at 3,000 square metres and 165 exhibitor
            positions, across six trade shows, in Q4 2027.
          </p>
          <div className="mt-8">
            <Button href="/exhibit/book" variant="primary">
              Book a stand
            </Button>
          </div>
        </div>
      </Section>

      {/* Why exhibit — four-item divided list, same pattern as the show pages' "What is exhibited". */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Why exhibit
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {whyExhibit.map((item) => (
              <div key={item.heading} className="border-t border-ink/15 pt-5">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {item.heading}
                </h3>
                <p className="mt-2 font-body text-base text-ink/80">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who exhibits */}
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Who exhibits
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            Producers, processors, cooperatives, exporters, trading houses
            and equipment suppliers. Cambodian businesses of any size, and
            international suppliers of processing, packaging and cold chain
            technology exhibiting in CamFEX Tech &amp; Packaging.
          </p>
        </div>
      </Section>

      {/* Next steps — three CTAs. Prospectus is non-functional this phase, same pattern as Home's Section 5. */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Next steps
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/exhibit/pricing" variant="primary">
              See space and pricing
            </Button>
            {/* Non-functional in this phase: no PDF, no email gate. */}
            <Button variant="secondary">
              Download the exhibitor prospectus
            </Button>
            <Button href="/exhibit/book" variant="tertiary">
              Book a stand
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
