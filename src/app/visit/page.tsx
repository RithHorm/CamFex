import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Visit CamFEX",
  description:
    "CamFEX is a trade event. Entry is free for registered trade visitors and is not open to the general public.",
};

const whoCanAttend = [
  "Importers, distributors and traders",
  "Retail and wholesale buyers",
  "Hotel, restaurant and catering procurement",
  "Food manufacturers and processors",
  "Logistics, cold chain and packaging",
  "Government, standards bodies and trade associations",
  "Accredited trade press",
];

export default function TradeVisitorPage() {
  return (
    <>
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Visit CamFEX
          </h1>
          <p className="mt-6 font-body text-lg text-ink/80">
            CamFEX is a trade event. Entry is free for registered trade
            visitors and is not open to the general public.
          </p>
        </div>
      </Section>

      {/* Who can attend */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Who can attend
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {whoCanAttend.map((role) => (
              <li
                key={role}
                className="border-t border-ink/15 pt-4 font-body text-lg text-ink"
              >
                {role}
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-2xl font-body text-lg text-ink/80">
            Registration requires a company name and a business email
            address. Badges are checked at the door and are not
            transferable. Visitors under 18 cannot be admitted.
          </p>

          <div className="mt-8">
            {/* UI-only this phase — Form 03 doesn't exist yet, same pattern as every other unbuilt-form CTA. */}
            <Button variant="primary">Register to visit</Button>
          </div>
        </div>
      </Section>

      {/* Buying in volume? */}
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Buying in volume?
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            International buyers with purchasing authority should apply to
            the Hosted Buyer Programme instead. Accepted buyers receive
            accommodation, transfers and a pre-scheduled meeting diary.
          </p>
          <div className="mt-8">
            <Button href="/visit/hosted-buyer" variant="primary">
              Apply as a hosted buyer
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
