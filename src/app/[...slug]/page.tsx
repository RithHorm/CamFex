import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/**
 * Catches every route outside this build's 15 pages (and the 15 not
 * yet built) and renders a plain placeholder instead of a 404 — build
 * plan §5.1: "Links to pages outside this build's 15 route to a plain
 * placeholder, never a 404."
 */
export default function PlaceholderPage() {
  return (
    <Section tone="off-white" className="flex min-h-[60vh] items-center">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="font-body text-sm font-medium uppercase tracking-wide text-terracotta">
          Coming soon
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
          This page isn&apos;t built yet
        </h1>
        <p className="mt-4 font-body text-base text-ink/75">
          It&apos;s part of the CamFEX site but outside this build&apos;s
          current 15 pages, or scheduled for a later step.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary">
            Back to home
          </Button>
        </div>
      </div>
    </Section>
  );
}
