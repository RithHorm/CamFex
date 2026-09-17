import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Space and pricing — CamFEX",
  description:
    "Two ways to exhibit at CamFEX. Choose raw space or shell scheme.",
};

/**
 * Content spec §4.7: "Build the page and the pricing engine now, but do
 * not publish live pricing until the CEO confirms in writing. Until
 * then the page shows 'Rates released [DATE] — register your interest'
 * with a form." That confirmation hasn't happened — every rate below
 * is still an open bracket — so this stays false. The tables, position
 * surcharges, charges, founding terms and payment schedule are all
 * built and correct; flipping this to true is the only change needed
 * once real numbers exist.
 */
const pricingPublished = false;

const standTypes = [
  {
    type: "Raw space",
    included:
      "Floor area only. Exhibitor supplies stand, build, electrics and furniture through an approved contractor.",
    minimum: "18 sqm",
    rate: "[USD 170]",
  },
  {
    type: "Shell scheme",
    included:
      "Walls, fascia with company name, carpet, lighting, one power socket, one table, two chairs, one waste bin.",
    minimum: "9 sqm",
    rate: "[USD 210]",
  },
  {
    type: "Startup zone",
    included:
      "Shell scheme at a reduced footprint and rate, for businesses trading under [X] years. Application required.",
    minimum: "6 sqm",
    rate: "[USD 140]",
  },
];

const positionSurcharges = [
  { label: "Corner — two open sides", value: "[+10%] on the space rate" },
  { label: "Peninsula — three open sides", value: "[+12%] on the space rate" },
  {
    label: "Island — four open sides",
    value: "[+15%] on the space rate. Minimum 36 sqm.",
  },
];

const compulsoryCharges = [
  {
    charge: "Exhibitor registration fee",
    amount: "[USD 250]",
    covers:
      "Per exhibiting company. Directory listing, exhibitor badges, marketing inclusion, CamFEX Connect profile for twelve months.",
  },
  {
    charge: "Co-exhibitor fee",
    amount: "[USD 250]",
    covers:
      "Per additional company sharing a stand. Each co-exhibitor receives its own directory listing.",
  },
  {
    charge: "Insurance",
    amount: "[USD 90]",
    covers:
      "Compulsory third-party liability. Exhibitors with their own certificate may apply for a waiver.",
  },
];

const foundingTerms = [
  "Edition 1 rates held for Edition 2",
  "First refusal on stand position for Editions 2 and 3",
  "First refusal on product category exclusivity where offered",
  "Founding Exhibitor mark in the directory and on the stand fascia",
  "Priority in Buyers' Table matching",
];

const paymentSchedule = [
  {
    stage: "On contract",
    due: "Within 14 days",
    amount: "30% deposit. The stand is not held until the deposit clears.",
  },
  { stage: "Second instalment", due: "[DATE]", amount: "40%" },
  {
    stage: "Final balance",
    due: "60 days before opening",
    amount:
      "30%. Stands not paid in full 60 days before opening may be resold.",
  },
];

const tableHeadClasses =
  "py-3 pr-6 font-body text-sm font-semibold uppercase tracking-wide text-ink/60";
const tableCellClasses = "py-4 pr-6 align-top font-body text-base text-ink/80";

export default function SpaceAndPricingPage() {
  return (
    <>
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Space and pricing
          </h1>

          {pricingPublished ? (
            <>
              <p className="mt-6 font-body text-lg text-ink/80">
                Two ways to exhibit. Choose raw space if you are bringing
                your own stand design and contractor. Choose shell scheme if
                you want to arrive, unpack and trade.
              </p>

              {/* Governing disclaimer — content spec §4.7. Every rate below is an open [bracket] in the spec, not a real figure. */}
              <div className="mt-8 border border-dashed border-terracotta/50 bg-terracotta/5 p-6 sm:p-8">
                <p className="font-body text-sm font-semibold uppercase tracking-wide text-terracotta">
                  All pricing indicative
                </p>
                <p className="mt-3 font-body text-base text-ink/85">
                  Every figure on this page is provisional until two things
                  happen: the venue contract is executed, and the rate card
                  is approved by the board. Nothing below should be treated
                  as a confirmed price.
                </p>
              </div>
            </>
          ) : (
            /*
              Public gated state — content spec §4.7's own build note,
              verbatim: "Rates released [DATE] — register your interest"
              with a form. UI-only, same non-functional pattern as every
              other form this phase.
            */
            <div className="mt-8 border border-dashed border-terracotta/50 bg-terracotta/5 p-6 sm:p-8">
              <p className="font-body text-sm font-semibold uppercase tracking-wide text-terracotta">
                Rates released [DATE]
              </p>
              <p className="mt-3 font-body text-base text-ink/85">
                Space and pricing for Edition 1 have not been published yet.
                Register your interest and we will email you as soon as
                rates are confirmed.
              </p>
              <div className="mt-8 flex flex-col gap-6 sm:max-w-md">
                <Input
                  label="Name"
                  name="name"
                  type="text"
                  autoComplete="name"
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
                <Input
                  label="Company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                />
                <div>
                  {/* Non-functional in this phase — no submission target. */}
                  <Button variant="primary">Register interest</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {pricingPublished && (
        <>
          {/* Stand types — dotted row treatment, build plan §6.1's dotted-leader reference adapted to a four-column table. */}
          <Section tone="white">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Stand types
              </h2>
              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-ink/25">
                      <th className={tableHeadClasses}>Type</th>
                      <th className={tableHeadClasses}>What is included</th>
                      <th className={tableHeadClasses}>Minimum</th>
                      <th className="py-3 font-body text-sm font-semibold uppercase tracking-wide text-ink/60">
                        Rate / sqm
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {standTypes.map((row) => (
                      <tr
                        key={row.type}
                        className="border-b border-dotted border-ink/30"
                      >
                        <td className="py-4 pr-6 align-top font-body text-base font-medium text-ink">
                          {row.type}
                        </td>
                        <td className={tableCellClasses}>{row.included}</td>
                        <td className={tableCellClasses}>{row.minimum}</td>
                        <td className="py-4 align-top font-body text-base font-medium text-ink whitespace-nowrap">
                          {row.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Position surcharges — the literal dotted-leader label/price pattern; a genuine two-column pair, unlike the table above. */}
              <h3 className="mt-16 font-display text-2xl font-semibold text-ink">
                Position surcharges
              </h3>
              <dl className="mt-6 max-w-2xl divide-y divide-dotted divide-ink/30">
                {positionSurcharges.map((position) => (
                  <div
                    key={position.label}
                    className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3"
                  >
                    <dt className="font-body text-base text-ink">
                      {position.label}
                    </dt>
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 border-b border-dotted border-ink/30"
                    />
                    <dd className="font-body text-base font-medium text-ink">
                      {position.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Section>

          {/* Compulsory charges */}
          <Section tone="off-white">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Compulsory charges
              </h2>
              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-ink/25">
                      <th className={tableHeadClasses}>Charge</th>
                      <th className={tableHeadClasses}>Amount</th>
                      <th className="py-3 font-body text-sm font-semibold uppercase tracking-wide text-ink/60">
                        What it covers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {compulsoryCharges.map((row) => (
                      <tr
                        key={row.charge}
                        className="border-b border-dotted border-ink/30"
                      >
                        <td className="py-4 pr-6 align-top font-body text-base font-medium text-ink">
                          {row.charge}
                        </td>
                        <td className="py-4 pr-6 align-top font-body text-base font-medium text-ink whitespace-nowrap">
                          {row.amount}
                        </td>
                        <td className="py-4 align-top font-body text-base text-ink/80">
                          {row.covers}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Section>

          {/* Founding exhibitor terms */}
          <Section tone="white">
            <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Founding exhibitor terms
              </h2>
              <p className="mt-6 font-body text-lg text-ink/80">
                Exhibitors contracting before [DATE] book as Founding
                Exhibitors and receive:
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {foundingTerms.map((term) => (
                  <li
                    key={term}
                    className="border-t border-ink/15 pt-3 font-body text-base text-ink"
                  >
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/*
            Payment schedule. NOTE TO BUILD (content spec §4.7): show all
            prices in USD with a Khmer riel equivalent beneath, calculated
            from a single CMS-editable rate, no live FX feed. That's a CMS
            integration this static build has no rate to draw from — every
            USD figure above is itself an open bracket — so flagging it
            rather than inventing a conversion rate.
          */}
          <Section tone="off-white">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Payment schedule
              </h2>
              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-ink/25">
                      <th className={tableHeadClasses}>Stage</th>
                      <th className={tableHeadClasses}>Due</th>
                      <th className="py-3 font-body text-sm font-semibold uppercase tracking-wide text-ink/60">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentSchedule.map((row) => (
                      <tr
                        key={row.stage}
                        className="border-b border-dotted border-ink/30"
                      >
                        <td className="py-4 pr-6 align-top font-body text-base font-medium text-ink">
                          {row.stage}
                        </td>
                        <td className="py-4 pr-6 align-top font-body text-base text-ink/80 whitespace-nowrap">
                          {row.due}
                        </td>
                        <td className="py-4 align-top font-body text-base text-ink/80">
                          {row.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-10">
                <Button href="/exhibit/book" variant="primary">
                  Book a stand
                </Button>
              </div>
            </div>
          </Section>
        </>
      )}
    </>
  );
}
