import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Seven programmes — CamFEX",
  description:
    "The floor is where the meetings happen. The programmes are why they are worth having.",
};

/**
 * Content spec §4.5 gives no slug for any programme (unlike the six
 * shows, which spell theirs out). Mechanically derived kebab-case from
 * each name — not a published fact, just a URL-safe id — until real
 * ones are assigned alongside the detail-page copy the spec itself
 * marks outstanding ([CEO TO SUPPLY]).
 */
function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const programmes = [
  {
    name: "Taste of Cambodia",
    description:
      "A curated tasting hall where buyers try Cambodian product properly — prepared, presented and explained, rather than sampled from a folding table.",
  },
  {
    name: "The Buyers' Table",
    description:
      "Scheduled one-to-one meetings between hosted buyers and matched exhibitors. Twenty minutes, diaried in advance, based on a sourcing brief submitted before the show.",
  },
  {
    name: "CamFEX Innovation Awards",
    description:
      "Judged awards for Cambodian product, packaging and processing innovation. Entry is open to every exhibitor and shortlisted products are displayed at the entrance to the hall.",
  },
  {
    name: "CamFEX Startup",
    description:
      "A subsidised zone for early-stage Cambodian food and beverage businesses, at a reduced rate and a smaller footprint, so the pipeline is in the room.",
  },
  {
    name: "F&B Export Summit",
    description:
      "A one-day conference on market access, standards, certification and logistics for Cambodian exporters and the buyers who source from them.",
  },
  {
    name: "Export Readiness Clinic",
    description:
      "Free one-to-one advisory sessions for Cambodian producers on what an export buyer requires — documentation, certification, labelling, packaging and minimum volumes.",
  },
  {
    name: "Khmer Culinary Challenge",
    description:
      "A live competition putting Cambodian ingredients in the hands of chefs, with the hotel and restaurant sector as the audience.",
  },
].map((programme) => ({ ...programme, slug: slugify(programme.name) }));

/**
 * Index only — content spec §4.5's own build note calls for detail
 * pages at /programmes/[slug], but their copy is explicitly outstanding
 * ([CEO TO SUPPLY]) with nothing behind any of the seven anywhere in
 * the spec. Building a template now would mean padding a one-liner
 * into something that only looks finished, so each card links through
 * to the standard not-built-yet placeholder instead of a real page.
 */
export default function ProgrammesIndexPage() {
  return (
    <Section tone="off-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Seven programmes
          </h1>
          <p className="mt-6 font-body text-lg text-ink/80">
            The floor is where the meetings happen. The programmes are why
            they are worth having.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme) => (
            <Card
              key={programme.slug}
              title={programme.name}
              description={programme.description}
              href={`/programmes/${programme.slug}`}
              image={{
                pending: true,
                alt: `${programme.name} — programme photography pending`,
                aspectRatio: "4/3",
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
