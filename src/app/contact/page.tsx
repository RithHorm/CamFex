import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact — CamFEX",
};

const routingTable = [
  {
    enquiry: "Exhibiting",
    routeTo: "[EXHIBITOR SALES EMAIL]  ·  [PHONE]  ·  Telegram [HANDLE]",
  },
  { enquiry: "Hosted buyer programme", routeTo: "[BUYER EMAIL]" },
  { enquiry: "Sponsorship", routeTo: "[SPONSORSHIP EMAIL]" },
  { enquiry: "Press", routeTo: "[PRESS EMAIL]" },
  { enquiry: "Everything else", routeTo: "[GENERAL EMAIL]" },
  {
    enquiry: "Registered office",
    routeTo: "CamFEX Co., Ltd., [ADDRESS], Phnom Penh, Kingdom of Cambodia",
  },
];

export default function ContactPage() {
  return (
    <>
      <Section tone="off-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Contact
          </h1>
        </div>
      </Section>

      {/*
        Routing table — content spec §4.15. Every value here is an open
        bracket in the spec (no real inbox exists yet); rendered exactly
        as written, not filled in. Per the spec's own build note,
        exhibitor sales carries a Telegram handle alongside email — the
        channel Cambodian SME exhibitors actually use — not email alone.
      */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink/25">
                  <th className="py-3 pr-6 font-body text-sm font-semibold uppercase tracking-wide text-ink/60">
                    Enquiry
                  </th>
                  <th className="py-3 font-body text-sm font-semibold uppercase tracking-wide text-ink/60">
                    Route to
                  </th>
                </tr>
              </thead>
              <tbody>
                {routingTable.map((row) => (
                  <tr key={row.enquiry} className="border-b border-ink/15">
                    <td className="py-4 pr-6 align-top font-body text-base font-medium text-ink whitespace-nowrap">
                      {row.enquiry}
                    </td>
                    <td className="py-4 align-top font-body text-base text-ink/80">
                      {row.routeTo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/*
        General contact form — content spec §4.15 build note: "a general
        contact form plus these routed addresses — no single shared
        inbox." UI-only this phase, same as every other form on the
        site; underlined-input treatment per build plan §6.1.
      */}
      <Section tone="off-white">
        <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            General enquiries
          </h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            If your enquiry doesn&apos;t fit the table above, send it here
            and we will route it internally.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input label="Name" name="name" type="text" autoComplete="name" />
              <Input
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>
            <Input label="Subject" name="subject" type="text" />
            <Textarea label="Message" name="message" rows={5} />
            <div className="mt-2">
              {/* Non-functional in this phase — no submission target. */}
              <Button variant="primary">Send message</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
