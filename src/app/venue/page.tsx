import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Venue and travel — CamFEX",
};

const quickFacts = [
  {
    label: "Venue",
    value:
      "[VENUE NAME AND ADDRESS — do not publish until the contract is executed]",
  },
  { label: "Dates", value: "[EXACT DATES] — Q4 2027" },
  { label: "Hours", value: "[OPENING HOURS BY DAY]" },
];

export default function VenueAndTravelPage() {
  return (
    <>
      {/* Venue, dates and hours stay as open brackets exactly as content spec §4.14 writes them — not a page-wide gate, just three unconfirmed fields on an otherwise normal page. */}
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Venue and travel
          </h1>
          <table className="mt-10 w-full border-collapse text-left">
            <tbody>
              {quickFacts.map((fact) => (
                <tr key={fact.label} className="border-b border-ink/15">
                  <td className="py-4 pr-6 align-top font-body text-base font-medium text-ink whitespace-nowrap">
                    {fact.label}
                  </td>
                  <td className="py-4 align-top font-body text-base text-ink/80">
                    {fact.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Getting to Phnom Penh
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            Phnom Penh is served by direct flights from most major Asian
            hubs. Allow time for immigration on arrival.
          </p>
        </div>
      </Section>

      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Visas
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            Most visitors may obtain a visa on arrival or apply online in
            advance. Check the requirement for your nationality before you
            travel. CamFEX can issue a letter of invitation to support a
            visa application — request one through the exhibitor or buyer
            team.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Hotels
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            CamFEX partner hotels and rates: [TO BE CONFIRMED]
          </p>
        </div>
      </Section>

      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Bringing product samples
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            Exhibitors bringing samples from outside Cambodia must clear
            customs in advance. Guidance and the required documentation are
            in the exhibitor portal. Start this early — it is the single
            most common cause of an exhibitor arriving without their
            product.
          </p>
        </div>
      </Section>
    </>
  );
}
