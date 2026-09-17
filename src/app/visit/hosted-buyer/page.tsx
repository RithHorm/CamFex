import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Hosted Buyer Programme — CamFEX",
  description:
    "Edition 1 is planned to host 80 qualified international buyers. Accepted buyers receive accommodation, transfers and a pre-scheduled meeting diary.",
};

const included = [
  {
    label: "Accommodation",
    detail:
      "[N] nights at a CamFEX partner hotel in Phnom Penh, single occupancy, breakfast included.",
  },
  {
    label: "Transfers",
    detail:
      "Airport transfers on arrival and departure, and daily transfer between the hotel and the venue.",
  },
  {
    label: "A scheduled diary",
    detail:
      "A minimum of [N] pre-arranged one-to-one meetings at The Buyers' Table, matched to the sourcing brief you submit with your application.",
  },
  {
    label: "Programme access",
    detail:
      "Full access to the F&B Export Summit, Taste of Cambodia and all CamFEX programmes.",
  },
  {
    label: "Hosted buyer lounge",
    detail:
      "A private lounge on the show floor with refreshments, meeting space and interpretation on request.",
  },
  {
    label: "Not included",
    detail:
      "International flights, visa fees, meals outside the programme, and personal expenses.",
  },
];

const qualifyingCriteria = [
  "Purchasing authority — you make or directly influence sourcing decisions",
  "Category fit — you buy in at least one of the six CamFEX show categories",
  "Genuine intent to source from Cambodia within the next 24 months",
];

const timeline = [
  { stage: "Applications open", when: "[DATE]" },
  { stage: "Applications close", when: "[DATE], or earlier if the programme fills" },
  { stage: "Decisions issued", when: "Within [N] working days of application" },
  { stage: "Sourcing brief due", when: "[DATE] — required before matching begins" },
  { stage: "Diaries released", when: "[DATE]" },
];

export default function HostedBuyerProgrammePage() {
  return (
    <>
      {/* Hero — content spec §4.11. No photo assigned to this page. */}
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            The CamFEX Hosted Buyer Programme
          </h1>
          <p className="mt-6 font-body text-lg text-ink/80">
            Edition 1 is planned to host 80 qualified international buyers.
            If you are accepted, CamFEX covers your stay and builds your
            meeting diary before you arrive.
          </p>
          <div className="mt-8">
            {/* UI-only this phase — Form 04 doesn't exist yet, same pattern as every other unbuilt-form CTA. */}
            <Button variant="primary">Apply now</Button>
          </div>
        </div>
      </Section>

      {/* What is included */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            What is included
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink/25">
                  <th className="py-3 pr-6 font-body text-sm font-semibold uppercase tracking-wide text-ink/60">
                    Included
                  </th>
                  <th className="py-3 font-body text-sm font-semibold uppercase tracking-wide text-ink/60">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {included.map((row) => (
                  <tr key={row.label} className="border-b border-ink/15">
                    <td className="py-4 pr-6 align-top font-body text-base font-medium text-ink whitespace-nowrap">
                      {row.label}
                    </td>
                    <td className="py-4 align-top font-body text-base text-ink/80">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Who qualifies */}
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Who qualifies
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            Applications are assessed on three things:
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {qualifyingCriteria.map((criterion) => (
              <li
                key={criterion}
                className="border-t border-ink/15 pt-3 font-body text-base text-ink"
              >
                {criterion}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-body text-lg text-ink/80">
            Applications are reviewed individually. We will ask for your
            company registration, a company website and one trade
            reference. Places are limited and we close applications when
            the programme is full.
          </p>

          <h2 className="mt-16 font-display text-3xl font-semibold text-ink sm:text-4xl">
            What we ask of you
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            Attend the meetings in your diary, and complete a short
            post-show feedback form. Buyers who do not attend their
            scheduled meetings are not invited back. We say this in
            advance because the exhibitors are paying for those meetings.
          </p>
        </div>
      </Section>

      {/* Timeline */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Timeline
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <tbody>
                {timeline.map((row) => (
                  <tr key={row.stage} className="border-b border-ink/15">
                    <td className="py-4 pr-6 align-top font-body text-base font-medium text-ink whitespace-nowrap">
                      {row.stage}
                    </td>
                    <td className="py-4 align-top font-body text-base text-ink/80">
                      {row.when}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </>
  );
}
