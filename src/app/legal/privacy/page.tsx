import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Privacy policy — CamFEX",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPlaceholder
      title="Privacy policy"
      mustCover="what is collected, why, retention period, who it is shared with, and how to request deletion. The site collects buyer and exhibitor business data from outside Cambodia, so this must be drafted to a GDPR standard."
    />
  );
}
