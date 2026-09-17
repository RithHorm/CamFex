import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Sponsor CamFEX",
  description:
    "CamFEX brings together Cambodia's food and beverage producers and the international buyers sourcing from them.",
};

/**
 * Content spec §4.12: "Do not publish tier prices until the CEO
 * confirms. Until then show tiers with 'Investment on application' and
 * route everything through Form 05." Same shape as pricingPublished on
 * /exhibit/pricing — false until that confirmation happens. Unlike
 * that page, only the Investment column is swapped here; the table
 * itself (tier names, positions) stays visible either way.
 */
const sponsorshipPublished = false;

const tiers = [
  {
    tier: "Title",
    position:
      "Exclusive. Name lock-up with CamFEX across all channels, opening ceremony platform, premium floor position.",
    investment: "[POA — by conversation]",
  },
  {
    tier: "Platinum",
    position:
      "Limited to [N]. Major brand presence, programme association, speaking position.",
    investment: "[USD X]",
  },
  {
    tier: "Gold",
    position: "Brand presence across the show and in the directory.",
    investment: "[USD X]",
  },
  {
    tier: "Feature zone",
    position:
      "Naming rights to one programme — Taste of Cambodia, the Awards, the Summit, the Culinary Challenge or the Startup zone.",
    investment: "[USD X]",
  },
  {
    tier: "Supporting",
    position: "Logo presence and directory listing.",
    investment: "[USD X]",
  },
];

export default function SponsorshipPage() {
  return (
    <>
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Sponsor CamFEX
          </h1>
          <p className="mt-6 font-body text-lg text-ink/80">
            CamFEX brings together Cambodia&apos;s food and beverage
            producers and the international buyers sourcing from them. For
            banks, logistics companies, packaging suppliers and corporates
            serving that sector, it is the one place the whole industry is
            in a room.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink/25">
                  <th className="py-3 pr-6 font-body text-sm font-semibold uppercase tracking-wide text-ink/60">
                    Tier
                  </th>
                  <th className="py-3 pr-6 font-body text-sm font-semibold uppercase tracking-wide text-ink/60">
                    Position
                  </th>
                  <th className="py-3 font-body text-sm font-semibold uppercase tracking-wide text-ink/60">
                    Investment
                  </th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((row) => (
                  <tr key={row.tier} className="border-b border-ink/15">
                    <td className="py-4 pr-6 align-top font-body text-base font-medium text-ink whitespace-nowrap">
                      {row.tier}
                    </td>
                    <td className="py-4 pr-6 align-top font-body text-base text-ink/80">
                      {row.position}
                    </td>
                    <td className="py-4 align-top font-body text-base font-medium text-ink whitespace-nowrap">
                      {sponsorshipPublished
                        ? row.investment
                        : "Investment on application"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-10 max-w-2xl font-body text-lg text-ink/80">
            Sponsorship is built around what you are trying to achieve, not
            sold from a fixed menu. Tell us your objective and we will come
            back with a proposal.
          </p>

          <div className="mt-8">
            {/* Single contact-point CTA, same in both gated and published states — the spec gives no per-tier CTA. UI-only, Form 05 doesn't exist yet. */}
            <Button variant="primary">Discuss sponsorship</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
