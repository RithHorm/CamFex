import { Button } from "@/components/ui/Button";
import { CamfexImage } from "@/components/ui/Image";
import { Input } from "@/components/ui/Input";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { Select } from "@/components/ui/Select";
import { SixShowsGrid } from "@/components/ui/SixShowsGrid";
import { StatBlock } from "@/components/ui/StatBlock";

const programmes = [
  "Taste of Cambodia",
  "The Buyers' Table",
  "CamFEX Innovation Awards",
  "CamFEX Startup",
  "F&B Export Summit",
  "Export Readiness Clinic",
  "Khmer Culinary Challenge",
];

export default function Home() {
  return (
    <>
      {/* Section 1 — Hero. Full-bleed graded placeholder image, text overlaid. Not a Section tone — doesn't count toward the dark-panel budget (that's ink flat panels, not photography). */}
      <Section
        tone="off-white"
        className="relative flex min-h-[85vh] items-end overflow-hidden"
        aria-label="Hero"
      >
        <div className="absolute inset-0">
          <CamfexImage
            src="/images/six-shows/Food Trade Banner.jpg"
            alt="Aerial view of a busy food trade show floor lined with exhibitor booths"
            aspectRatio="16/9"
            className="h-full w-full"
            priority
          />
        </div>
        {/*
          Text-legibility scrim — same device as Card's bottom scrim,
          lightened from Card's ink/95 to ink/80: guarantees the
          off-white headline ~8.9:1 worst-case (pure-white photo behind
          it) — comfortably clear of the 4.5:1 AA floor without
          spending all the available headroom.

          Terracotta (eyebrow, outline button) does NOT get this same
          guarantee from a lighter scrim — verified by sweeping alpha
          0.80→0.98: terracotta only crosses 3:1 (its large-text floor,
          see below) around ink/94, at which point the off-white number
          is back up near 14:1, undoing the whole point of lightening
          this. The two can't share one opacity. So terracotta gets its
          own local ink/95 backing instead (the eyebrow chip below, and
          the outline button's own fill) — guaranteed independent of
          whatever this shared scrim is tuned to.

          Full strength holds from the bottom up through 88% of the
          hero height — checked against the tallest realistic text wrap
          at each breakpoint — then fades to transparent in the top 12%
          so the photo reads unobstructed up there. Legibility layer,
          not photo grading — independent of whatever photo sits behind
          it.
        */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 from-0% via-ink/80 via-88% to-transparent to-100%"
        />
        {/*
          Hero fade-in — fires on page load, not scroll (it's the one
          animation on this page that isn't viewport-triggered, since
          the hero is already in view the moment the page paints).
          Pure CSS via the `starting:` variant/@starting-style, same
          zero-JS enter-transition technique Nav's dropdown already
          uses — no IntersectionObserver involved, and reduced-motion
          is handled for free by the existing global transition-
          duration override in globals.css, same as every other CSS
          transition on the site.
        */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24 transition-all duration-700 ease-out starting:translate-y-3 starting:opacity-0">
          {/*
            text-xl font-bold (20px/700) qualifies as WCAG "large text"
            (≥18.66px bold), dropping terracotta's requirement from an
            unreachable 4.5:1 to 3:1. The bg-ink/95 chip (same value
            Card's scrim already uses) guarantees that 3:1 locally,
            independent of the shared hero scrim above, which is tuned
            for the headline instead — see that comment for why one
            opacity can't serve both.
          */}
          <p className="inline-block bg-ink/95 px-3 py-1.5 font-body text-xl font-bold uppercase tracking-wide text-terracotta">
            Edition 1 · Q4 2027 · Phnom Penh, Cambodia
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-off-white sm:text-5xl lg:text-6xl">
            Cambodia is ready to sell. This is where the world comes to buy.
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg text-off-white/90">
            CamFEX is Cambodia&apos;s food and beverage export platform. Six
            trade shows, seven programmes, one calendar position — built so
            that international buyers meet Cambodian producers here, at
            home.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/exhibit/book" variant="on-dark">
              Book a stand
            </Button>
            <Button href="/visit/hosted-buyer" variant="outline-on-dark">
              Apply as a hosted buyer
            </Button>
          </div>
        </div>
      </Section>

      {/* Section 2 — The one-sentence explanation. Two separate paragraphs per content spec §4.1 note. */}
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Every food show in Phnom Penh sells to Cambodia. CamFEX sells
            Cambodia.
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            Cambodian rice, pepper, cashew, mango, coffee and processed food
            already reach buyers in Europe, China, Japan and across ASEAN.
            They reach them through intermediaries, at trade fairs in other
            countries, at other people&apos;s prices.
          </p>
          <p className="mt-4 font-body text-lg text-ink/80">
            CamFEX exists to change where that transaction happens. One
            calendar position, in Phnom Penh, where the buyer comes to the
            producer.
          </p>
        </div>
      </Section>

      {/* Section 3 — The six shows. */}
      <Section tone="white">
        {/*
          Scroll-triggered: enters as one group — a single subtle rise
          and fade on the section as a whole, not staggered per card.
          The existing per-card hover-scale (Card.tsx / zoomOnHover)
          is untouched; this is additive, not a replacement.
        */}
        <RevealOnScroll
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 transition-all duration-500 ease-out"
          fromClassName="opacity-0 translate-y-4"
          toClassName="opacity-100 translate-y-0"
          threshold={0.15}
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Six trade shows under one roof
            </h2>
            <p className="mt-4 font-body text-lg text-ink/80">
              Each show has its own buyer profile, its own exhibitor base
              and its own hall identity. Together they cover the whole of
              what Cambodia produces and the equipment that processes it.
            </p>
          </div>

          <SixShowsGrid />

          <div className="mt-12">
            <Button href="/shows" variant="tertiary">
              See all six shows
            </Button>
          </div>
        </RevealOnScroll>
      </Section>

      {/*
        Brand moment — a deliberate pause between Six Shows and Hosted
        Buyer, not a content section. Full-width wordmark at scale, no
        other content. off-white to blend into the section that follows
        it rather than announce itself with a tone change.
      */}
      <Section tone="off-white" aria-label="CamFEX">
        <div className="mx-auto max-w-7xl px-4 pt-24 pb-0 text-center sm:pt-32 sm:pb-0 lg:pt-40 lg:pb-0">
          {/*
            Scroll-triggered: the most noticeable moment on the page
            after the hero — deliberately not a fade. Scales in
            (96%→100%) with a small letter-spacing tightening down to
            the resting tracking-tight; opacity never changes, since
            this genuinely isn't a reveal, it's a settle from slightly
            oversized and slightly looser to its resting mark. Longer
            duration than the other two moments is part of what makes
            it read as the bigger one.
          */}
          <RevealOnScroll
            className="transition-all duration-700 ease-out"
            fromClassName="scale-[0.96] tracking-normal"
            toClassName="scale-100 tracking-tight"
            threshold={0.3}
          >
            <p className="font-display text-[16vw] font-semibold leading-none text-ink sm:text-[13vw] lg:text-[11rem]">
              CamFEX
            </p>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Section 4 — For buyers (Hosted Buyer Programme). Two-column text + Image. Two separate paragraphs, same blank-line break as the source document shows in §4.1. */}
      <Section tone="off-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                If you buy food, come and see what Cambodia makes
              </h2>
              <p className="mt-6 font-body text-lg text-ink/80">
                Qualified international buyers can apply to the CamFEX
                Hosted Buyer Programme. Accepted buyers receive
                accommodation, airport transfer, a pre-scheduled meeting
                diary matched to their sourcing brief, and access to the
                Buyers&apos; Table and the F&amp;B Export Summit.
              </p>
              <p className="mt-4 font-body text-lg text-ink/80">
                Edition 1 is planned to host 80 international buyers.
                Applications are assessed on purchasing authority and
                category fit.
              </p>
              <div className="mt-8">
                <Button href="/visit/hosted-buyer" variant="primary">
                  Apply as a hosted buyer
                </Button>
              </div>
            </div>
            <CamfexImage
              src="/images/six-shows/what Cambodia makes.jpg"
              alt="Buyers and exhibitors in conversation at a trade show meeting table"
              aspectRatio="4/3"
              className="w-full"
            />
          </div>
        </div>
      </Section>

      {/* Section 5 — For exhibitors (stats). */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Exhibit at the first edition
            </h2>
            <p className="mt-4 font-body text-lg text-ink/80">
              Edition 1 is planned at 3,000 square metres and 165 exhibitor
              positions. Founding exhibitors book at Edition 1 rates and
              hold first refusal on their position and category for
              Editions 2 and 3.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <StatBlock value="3,000 sqm" label="Planned floor" countUp />
            <StatBlock value="165" label="Exhibitor positions" countUp />
            <StatBlock
              value="80"
              label="Hosted international buyers"
              countUp
            />
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button href="/exhibit/book" variant="primary">
              Book a stand
            </Button>
            {/* Non-functional in this phase: no PDF, no gating. Build plan §10 / user instruction. */}
            <Button variant="secondary">
              Download the exhibitor prospectus
            </Button>
          </div>
        </div>
      </Section>

      {/* Section 6 — Programmes. Plain name list per Appendix A — no descriptions or images exist for these on Home, so no Card here. */}
      <Section tone="off-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Seven programmes running alongside the floor
            </h2>
            <p className="mt-4 font-body text-lg text-ink/80">
              A trade show is three days of meetings. The programmes are
              what make those meetings worth flying for.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((programme) => (
              <li
                key={programme}
                className="border-t border-ink/15 pt-4 font-body text-lg text-ink"
              >
                {programme}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href="/programmes" variant="tertiary">
              See the programme
            </Button>
          </div>
        </div>
      </Section>

      {/* Section 7 — Closing CTA. The one ink panel this page uses; Footer is the other. */}
      <Section tone="ink">
        {/*
          Scroll-triggered: one clean settle-in for the heading and
          form together, not separate treatments per element. Rise
          distance is the largest of the three scroll moments (24px,
          vs. the six-shows grid's 16px) — a slightly weightier feel
          for the page's final beat, distinct from that section's
          "subtle" character.
        */}
        <RevealOnScroll
          className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 transition-all duration-600 ease-out"
          fromClassName="opacity-0 translate-y-6"
          toClassName="opacity-100 translate-y-0"
          threshold={0.2}
        >
          <h2 className="font-display text-3xl font-semibold text-off-white sm:text-4xl">
            Edition 1 opens in Q4 2027
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-off-white/85">
            Exhibitor bookings are open now. Hosted buyer applications open{" "}
            {/* [DATE] — not confirmed in content spec §4.1; kept as the spec's own bracket placeholder, not invented. */}
            [DATE]. Register your interest and we will write to you when
            dates and the floor plan are released.
          </p>

          {/*
            Email capture with a role selector — content spec §4.1 /
            Part 6, Form 06. UI-only, same non-functional pattern as
            every other form this phase. onDark on both fields since
            this section is the one ink panel on the page.
          */}
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-6 text-left">
            <Input
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              onDark
            />
            <Select
              label="I am a..."
              name="role"
              onDark
              options={[
                { label: "I am an exhibitor", value: "exhibitor" },
                { label: "I am a buyer", value: "buyer" },
                { label: "Press", value: "press" },
                { label: "Other", value: "other" },
              ]}
            />
            <div>
              {/* Non-functional in this phase — no submission target. */}
              <Button variant="on-dark">Keep me updated</Button>
            </div>
          </div>
        </RevealOnScroll>
      </Section>
    </>
  );
}
