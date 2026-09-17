import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SixShowsGrid } from "@/components/ui/SixShowsGrid";

export const metadata: Metadata = {
  title: "Six trade shows — CamFEX",
  description:
    "CamFEX is organised as six distinct shows, each with its own exhibitor profile and buyer recruitment. One badge gives access to all six.",
};

export default function ShowsIndexPage() {
  return (
    <Section tone="off-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Six trade shows
          </h1>
          <p className="mt-6 font-body text-lg text-ink/80">
            CamFEX is organised as six distinct shows, each with its own
            exhibitor profile and buyer recruitment. One badge gives access
            to all six.
          </p>
        </div>

        {/* Same six-shows Card grid as Home's Section 3 — same cards, images and links, not rebuilt. */}
        <SixShowsGrid />
      </div>
    </Section>
  );
}
