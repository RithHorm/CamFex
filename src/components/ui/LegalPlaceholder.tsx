import { Section } from "@/components/ui/Section";

interface LegalPlaceholderProps {
  title: string;
  /** What this policy must cover, per content spec §4.15 — guidance for counsel, not published copy. */
  mustCover?: string;
}

/**
 * Shared shell for the two legal pages this phase covers. Content spec
 * §4.15 marks both "[COUNSEL TO SUPPLY]" — there is no real policy text
 * to draw from, only a brief on what counsel needs to address. Writing
 * placeholder legal text, even in the spec's voice, would be worse than
 * an honest gap here: a fabricated privacy or cookie policy is exactly
 * the kind of content nobody should mistake for real.
 */
export function LegalPlaceholder({ title, mustCover }: LegalPlaceholderProps) {
  return (
    <Section tone="off-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          {title}
        </h1>

        <div className="mt-8 border border-dashed border-terracotta/50 bg-terracotta/5 p-6 sm:p-8">
          <p className="font-body text-sm font-semibold uppercase tracking-wide text-terracotta">
            Not yet available
          </p>
          <p className="mt-3 font-body text-base text-ink/85">
            This page&apos;s legal text has not been written. It must be
            drafted by counsel before Edition 1 launches — the text shown
            on the live site cannot be approximated from this build or
            from general practice, and nothing below should be treated
            as the policy.
          </p>
          {mustCover && (
            <p className="mt-4 font-body text-base text-ink/85">
              <span className="font-medium text-ink">
                What counsel must cover:
              </span>{" "}
              {mustCover}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
