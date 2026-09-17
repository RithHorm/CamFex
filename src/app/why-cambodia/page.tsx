import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Why buy from Cambodia — CamFEX",
  description:
    "Cambodia is a significant agricultural producer whose output largely leaves the country unbranded, unprocessed, or through a neighbour. For a buyer, that is not a weakness. It is where the margin is.",
};

const reasons = [
  {
    heading: "Product you cannot source elsewhere",
    body: "Kampot pepper. Malis fragrant rice. Cambodian cashew. Palm sugar. These are origin products with genuine provenance, and a buyer sourcing them through a third country is paying for someone else's margin and losing traceability.",
  },
  {
    heading: "Producers who want to export",
    body: "The constraint on Cambodian food export has rarely been willingness or quality. It has been access — to buyers, to standards, to a route to market. CamFEX exists to remove the first of those and to shorten the second.",
  },
  {
    heading: "A young processing sector",
    body: "Cambodia's food processing base is young, which means capacity is available, private label is negotiable, and relationships are still being formed. Buyers entering now are not competing for allocation.",
  },
  {
    heading: "One place, three days",
    body: "The alternative to CamFEX is a sourcing trip: several provinces, several weeks, no comparison and no leverage. CamFEX puts the same suppliers in one hall with a scheduled diary.",
  },
];

/**
 * Content spec §4.3: "Written for the international buyer... This page
 * carries no statistics. Trade volume figures date quickly and a wrong
 * one destroys credibility with exactly the reader this page is
 * written for." No number appears anywhere below beyond what the spec
 * text itself already contains — not a style choice, a hard content
 * rule.
 */
export default function WhyCambodiaPage() {
  return (
    <>
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Why buy from Cambodia
          </h1>
          <p className="mt-6 font-body text-lg text-ink/80">
            Cambodia is a significant agricultural producer whose output
            largely leaves the country unbranded, unprocessed, or through a
            neighbour. For a buyer, that is not a weakness. It is where the
            margin is.
          </p>
        </div>
      </Section>

      {/* Four H2/body reasons — same divided-grid pattern as /exhibit's "Why exhibit". Each item is its own H2 per the spec (no wrapping section heading given). */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.heading} className="border-t border-ink/15 pt-5">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {reason.heading}
                </h2>
                <p className="mt-3 font-body text-base text-ink/80">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
