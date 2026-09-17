import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { CamfexImage, type CamfexImageProps } from "@/components/ui/Image";
import { Section } from "@/components/ui/Section";
import { shows } from "@/lib/shows-data";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return shows.map((show) => ({ slug: show.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const show = shows.find((candidate) => candidate.slug === slug);
  if (!show) return {};
  return {
    title: `${show.title} — CamFEX`,
    description: show.standfirst,
  };
}

/**
 * One template for all six shows — content spec §4.4: "Each of the six
 * sub-pages follows the identical template below." Per-show copy comes
 * from shows-data.ts, not from six hand-copied files.
 */
export default async function ShowPage({ params }: { params: Params }) {
  const { slug } = await params;
  const show = shows.find((candidate) => candidate.slug === slug);
  if (!show) notFound();

  const headerImage: CamfexImageProps = show.imageSrc
    ? { src: show.imageSrc, alt: show.imageAlt, aspectRatio: "16/9" }
    : { pending: true, alt: show.imageAlt, aspectRatio: "16/9" };

  return (
    <>
      {/* Header — same full-bleed photo + gradient scrim as Home's hero (page.tsx), shorter here since this page's job is the show detail below, not a landing pitch. */}
      <Section
        tone="off-white"
        className="relative flex min-h-[50vh] items-end overflow-hidden sm:min-h-[60vh]"
        aria-label={show.title}
      >
        <div className="absolute inset-0">
          <CamfexImage {...headerImage} className="h-full w-full" />
        </div>
        {/* Same scrim as Home's hero — ink/80, full strength through 88% of height, fading to transparent in the top 12%. Guarantees the off-white headline ~8.9:1 worst-case; see page.tsx hero comment for the full derivation. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 from-0% via-ink/80 via-88% to-transparent to-100%"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <p className="font-body text-sm font-medium uppercase tracking-wide text-off-white/80">
            CamFEX
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold text-off-white sm:text-5xl">
            {show.title}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-off-white/90">
            {show.standfirst}
          </p>
        </div>
      </Section>

      {/* What is exhibited — spec §4.4.1–4.4.6 LIST, verbatim, reusing the divided-list treatment from Home's Programmes section. */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            What is exhibited
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {show.whatIsExhibited.map((category) => (
              <li
                key={category}
                className="border-t border-ink/15 pt-4 font-body text-lg text-ink"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Who buys here + closing CTA — spec §4.4.1–4.4.6 BODY and CTA, verbatim/per-template. */}
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Who buys here
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            {show.whoBuysHere}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={`/exhibit/book?show=${show.slug}`} variant="primary">
              Book a stand in {show.title}
            </Button>
            <Button href="/shows" variant="tertiary">
              Back to all six shows
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
