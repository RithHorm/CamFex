import type { Metadata } from "next";
import { CamfexImage } from "@/components/ui/Image";
import { Section } from "@/components/ui/Section";
import { SixShowsGrid } from "@/components/ui/SixShowsGrid";

export const metadata: Metadata = {
  title: "About CamFEX",
  description:
    "CamFEX is the Cambodia Food & Beverage Expo — a national trade platform created to put Cambodian food and beverage producers in front of international buyers, in Cambodia.",
};

const leadership = [
  {
    name: "Dr. Tan Monivann",
    role: "Chairman",
    bio: "Chairs the board and leads CamFEX's institutional and industry relationships across Cambodia's agro-industrial sector.",
    imageSrc: "/images/Dr Tan Monivann.jpg",
    // Source is a wide environmental shot (conference table, laptop,
    // water bottle, two colleagues in frame), not a close headshot —
    // at this card's 3:4 ratio, cover-fit leaves no horizontal crop
    // budget at all (the image's width scales to exactly fill the
    // container), so the two colleagues at the left/right edges can't
    // be excluded by object-position however it's set. The vertical
    // budget is real but narrow (~105px of the source's 960px height),
    // so this only pushes the crop up, trimming the foreground flowers
    // as far as that budget allows — it doesn't eliminate them.
    imagePosition: "50% 10%",
  },
  {
    name: "Thomith Chin",
    role: "Chief Executive",
    bio: "Accountable for the platform overall: brand, campaign, international relationships and commercial delivery. Co-creator of the Pinnacle Entrepreneurs Forum.",
    imageSrc: "/images/Thomith Chin.jpg",
  },
  {
    name: "Sokkeang Kong",
    role: "Chief Operating Officer",
    bio: "Owns the show floor: exhibitor sales, the buyer programme, venue and operations. Co-creator of the Pinnacle Entrepreneurs Forum.",
    imageSrc: "/images/Sokkeang Kong.jpg",
  },
];

const monivann = leadership[0];

const chairmanStatementParagraphs = [
  "It is milled elsewhere, packed elsewhere, branded elsewhere, and sold at a price somebody else sets. Quality was never the problem. Access was.",
  "CamFEX exists to change where that transaction happens. Not to celebrate Cambodian food — to sell it, in Cambodia, on terms Cambodian producers have a hand in setting.",
  "I agreed to chair this platform because the country is ready for it and because nobody else has built it. It will take several editions to reach the scale it deserves, and we are building it for that horizon rather than for one event.",
  "To the buyers reading this — come and see what is being made here. To the producers — this is your show.",
];

export default function TheShowPage() {
  return (
    <>
      {/* What CamFEX is — content spec §4.2. */}
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            What CamFEX is
          </h1>
          <p className="mt-6 font-body text-lg text-ink/80">
            CamFEX is the Cambodia Food &amp; Beverage Expo — a national
            trade platform created to put Cambodian food and beverage
            producers in front of international buyers, in Cambodia.
          </p>
        </div>
      </Section>

      {/* The gap */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            The position nobody has taken
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            Phnom Penh already hosts food and beverage exhibitions. They are
            import fairs: foreign suppliers selling into the Cambodian
            market, organised by foreign exhibition companies.
          </p>
          <p className="mt-4 font-body text-lg text-ink/80">
            That is a legitimate business and it is not this one. CamFEX
            runs in the other direction. The exhibitor is Cambodian. The
            buyer is foreign. The transaction is an export.
          </p>
          <p className="mt-4 font-body text-lg text-ink/80">
            No show in Cambodia currently occupies that position.
          </p>
        </div>
      </Section>

      {/* The structure */}
      <Section tone="off-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Six shows, seven programmes, one calendar position
            </h2>
            <p className="mt-6 font-body text-lg text-ink/80">
              A buyer sourcing dried mango and a buyer sourcing milling
              equipment are not the same buyer, and should not be walking
              the same aisle by accident. CamFEX is organised as six
              distinct trade shows, each with its own hall identity,
              exhibitor profile and buyer recruitment.
            </p>
            <p className="mt-4 font-body text-lg text-ink/80">
              They share one venue, one calendar position and one badge. A
              buyer registers once and can cross between all six.
            </p>
          </div>

          <SixShowsGrid />
        </div>
      </Section>

      {/* Leadership */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Who is behind CamFEX
            </h2>
            <p className="mt-6 font-body text-lg text-ink/80">
              CamFEX Co., Ltd. is a Cambodian company founded to build and
              operate the platform over a five-edition horizon.
            </p>
          </div>

          {/*
            Three portraits, identical crop and treatment — content spec
            §4.2. Real photography now in place for all three; full
            colour, same Image pipeline as every other photo on the
            site — no grading, no special-casing beyond Monivann's
            object-position (see the leadership array above).
          */}
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
            {leadership.map((person) => (
              <div key={person.name}>
                <CamfexImage
                  src={person.imageSrc}
                  alt={`Portrait of ${person.name}, ${person.role}`}
                  aspectRatio="3/4"
                  className="w-full"
                  style={
                    person.imagePosition
                      ? { objectPosition: person.imagePosition }
                      : undefined
                  }
                />
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {person.name}
                </h3>
                <p className="mt-1 font-body text-sm font-medium uppercase tracking-wide text-terracotta">
                  {person.role}
                </p>
                <p className="mt-3 font-body text-base text-ink/80">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/*
        A word from the Chairman — content spec §4.2 "Section — A word
        from the Chairman". PLACEMENT note: immediately after Leadership,
        never on Home, never the first thing a reader meets — satisfied
        by this page's section order. NOTE TO BUILD: a statement, not a
        welcome letter — no greeting, no "on behalf of the team," the
        opening line is not softened. First line set at H3 size in ink,
        remaining paragraphs at body size, not italicised throughout.
        Same portrait treatment as Leadership — same file and same
        object-position tuning as the Leadership card, since it's the
        same source photo at the same 3:4 ratio.
      */}
      <Section tone="off-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            A word from our Chairman
          </h2>
          <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_2fr]">
            <CamfexImage
              src={monivann.imageSrc}
              alt="Portrait of Dr. Tan Monivann, Chairman"
              aspectRatio="3/4"
              className="w-full"
              style={{ objectPosition: monivann.imagePosition }}
            />
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                For most of my working life I have watched Cambodian
                agricultural product leave this country without its name on
                it.
              </h3>
              {chairmanStatementParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-5 font-body text-lg text-ink/80"
                >
                  {paragraph}
                </p>
              ))}
              <p className="mt-8 font-body text-base font-medium text-ink">
                Dr. Tan Monivann
              </p>
              <p className="font-body text-sm text-ink/60">
                Chairman, CamFEX Co., Ltd.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/*
        Built to grow. NOTE TO BUILD (content spec §4.2): do not publish
        the full five-edition figures — revenue and EBITDA projections
        are investor material, not public-site content. Only the framing
        already written in the spec's body text is used below; nothing
        added.
      */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Built to grow
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            CamFEX is planned across five editions, from 3,000 square
            metres at Edition 1 to a platform several times that size.
            Exhibitors who commit early are buying a position in that
            growth, not a single trade show.
          </p>
        </div>
      </Section>
    </>
  );
}
