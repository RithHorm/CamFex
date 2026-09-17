import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Cookie policy — CamFEX",
};

/**
 * Content spec §4.15 also calls for a functioning consent banner
 * site-wide, with analytics cookies withheld until consent — a
 * separate, global piece of work from this page's text, and not built
 * here. Flagging rather than adding a one-off banner to this page alone.
 */
export default function CookiePolicyPage() {
  return (
    <LegalPlaceholder
      title="Cookie policy"
      mustCover="what cookies are set, by whom, and for what purpose, alongside the site-wide consent banner (build plan: analytics cookies must not fire before consent — not yet implemented)."
    />
  );
}
