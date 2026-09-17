"use client";

import { useEffect } from "react";
import { useSectionTone } from "@/components/providers/SectionToneProvider";

export type SectionTone = "off-white" | "white" | "ink";

export interface SectionProps {
  /**
   * off-white is the primary background (majority of every page); white is
   * the second light tone for the alternating rhythm build plan §6.1 and
   * content spec §7.5 both call for; ink is the full-bleed dark panel,
   * capped at 2 per page.
   */
  tone?: SectionTone;
  as?: "section" | "div";
  className?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  children: React.ReactNode;
}

const toneClasses: Record<SectionTone, string> = {
  "off-white": "bg-off-white text-ink",
  white: "bg-white text-ink",
  ink: "bg-ink text-off-white",
};

/**
 * The alternating background wrapper every page section renders through.
 * Tracks ink-toned sections per page via SectionToneProvider and warns
 * in development if a page exceeds the 2-dark-panel budget (build plan §3.1).
 */
export function Section({
  tone = "off-white",
  as = "section",
  className = "",
  children,
  ...aria
}: SectionProps) {
  const sectionTone = useSectionTone();
  const Tag = as;

  useEffect(() => {
    if (tone === "ink") {
      sectionTone?.registerDarkPanel();
    }
    // Intentionally re-runs only when tone changes, not on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tone]);

  return (
    <Tag className={`${toneClasses[tone]} ${className}`} {...aria}>
      {children}
    </Tag>
  );
}
