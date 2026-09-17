import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CamfexImage } from "@/components/ui/Image";
import { Section } from "@/components/ui/Section";
import { StatBlock } from "@/components/ui/StatBlock";

export const metadata: Metadata = {
  title: "Component preview — internal",
  robots: { index: false, follow: false },
};

/**
 * Temporary, internal-only showcase of every shared component variant,
 * for the Step 1 screenshot audit (build plan §9.4). Not one of the 28
 * sitemap pages and not linked from the nav or footer. Superseded by
 * the real internal style-guide page in build plan §9.3 / Step 5.
 */
export default function ComponentPreviewPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold text-ink">
        Component preview (internal, temporary)
      </h1>
      <p className="mt-2 font-body text-sm text-ink/60">
        Not part of the site. For the Step 1 screenshot audit only.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-ink">
          Button
        </h2>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Button variant="primary">Book a stand</Button>
          <Button variant="secondary">Register to visit</Button>
          <Button variant="tertiary">See all six shows</Button>
        </div>
        <div className="mt-4 bg-ink p-6">
          <Button variant="on-dark">Book a stand</Button>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-ink">Card</h2>
        <p className="mt-1 font-body text-sm text-ink/60">
          Descriptions are the STANDFIRST line for each show, content spec
          §4.4.1 / §4.4.2 / §4.4.4 — verbatim, not written for this preview.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Rice & Grains"
            description="Cambodia's rice, and everything grown alongside it."
            image={{
              pending: true,
              alt: "Hands sorting milled rice at a packing facility",
              aspectRatio: "4/3",
            }}
            href="/shows/rice-grains"
          />
          <Card
            title="Fresh"
            description="Fruit, vegetables and the cold chain that moves them."
            image={{
              pending: true,
              alt: "Crates of fresh mango staged for export",
              aspectRatio: "4/3",
            }}
            href="/shows/fresh"
          />
          <Card
            title="Drinks"
            description="Coffee, water, juice, beer, spirits and the sweet things."
            image={{
              pending: true,
              alt: "Bottling line at a Cambodian beverage facility",
              aspectRatio: "4/3",
            }}
            href="/shows/drinks"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-ink">
          StatBlock
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <StatBlock value="3,000 sqm" label="Planned floor" />
          <StatBlock value="165" label="Exhibitor positions" />
          <StatBlock value="80" label="Hosted international buyers" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-ink">
          Image — grading treatment
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <CamfexImage
            pending
            alt="Production floor, wide shot"
            aspectRatio="16/9"
          />
          <CamfexImage
            pending
            alt="Portrait placeholder"
            aspectRatio="3/4"
          />
          <CamfexImage
            pending
            alt="Product detail placeholder"
            aspectRatio="1/1"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-ink">
          Section tones
        </h2>
        <div className="mt-4 flex flex-col gap-4">
          <Section
            tone="off-white"
            className="border border-ink/10 p-8"
            aria-label="off-white section example"
          >
            <p className="font-body text-ink">
              off-white — primary background, majority of every page.
            </p>
          </Section>
          <Section
            tone="ink"
            className="p-8"
            aria-label="ink section example"
          >
            <p className="font-body text-off-white">
              ink — full-bleed dark panel, capped at 2 per page.
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
}
