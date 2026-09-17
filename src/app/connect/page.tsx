import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "CamFEX Connect",
  description:
    "CamFEX Connect is the year-round platform behind the show: a verified directory of Cambodian food and beverage suppliers, buyer matchmaking, and enquiry tracking between editions.",
};

/**
 * Content spec §4.13 build note, verbatim: "Connect is a separate
 * product. Build this page as a description with an interest form
 * only. Do not begin building the directory itself against this
 * document." No search, no supplier profiles, no directory UI below —
 * description and an interest-capture form, nothing else.
 */
export default function CamfexConnectPage() {
  return (
    <>
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            CamFEX Connect
          </h1>
          <p className="mt-6 font-body text-lg text-ink/80">
            A trade show lasts three days. Sourcing does not.
          </p>
          <p className="mt-4 font-body text-lg text-ink/80">
            CamFEX Connect is the year-round platform behind the show: a
            verified directory of Cambodian food and beverage suppliers,
            buyer matchmaking, and enquiry tracking between editions. Every
            CamFEX exhibitor receives a Connect profile for twelve months
            as part of their exhibitor registration.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            For buyers
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            Search verified Cambodian suppliers by product category,
            certification and export experience. Send an enquiry and track
            the response.
          </p>

          <h2 className="mt-16 font-display text-3xl font-semibold text-ink sm:text-4xl">
            For exhibitors
          </h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            A profile that stays live after the show closes, and a record
            of every enquiry you receive.
          </p>
        </div>
      </Section>

      {/* Status + interest form — the only functional element the spec allows on this page. */}
      <Section tone="off-white">
        <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="border border-dashed border-terracotta/50 bg-terracotta/5 p-6 sm:p-8">
            <p className="font-body text-sm font-semibold uppercase tracking-wide text-terracotta">
              CamFEX Connect opens [DATE]
            </p>
            <p className="mt-3 font-body text-base text-ink/85">
              Register your interest and we will contact you when it goes
              live.
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
        </div>
      </Section>
    </>
  );
}
