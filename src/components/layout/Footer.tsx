"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerColumns, footerLegalLinks } from "@/lib/nav-data";
import { useSectionTone } from "@/components/providers/SectionToneProvider";

/**
 * Four columns then a base bar, per build plan §5.4. Ink background —
 * this and the closing CTA band are the two permitted full-bleed dark
 * panels on the pages that use them. As global chrome present on every
 * page, it registers itself with SectionToneProvider so page-authored
 * <Section tone="ink"> panels are budgeted against the one slot it
 * leaves free.
 *
 * Link hover state uses underline, not the terracotta build plan
 * Tables 10/11 specify — terracotta on Ink Black measures 3.66:1,
 * below the 4.5:1 link-text requirement, and no darkness of terracotta
 * against this background reaches it. Deviation from that spec text;
 * flag for whoever reconciles Tables 10/11 later.
 *
 * "The show" column also carries a CamFEX Connect link (after News)
 * that isn't in nav-data's source footer table. Connect (/connect,
 * content spec §4.13) is never listed in the spec's nav table, footer
 * table, or cross-linked from any other page — a genuine gap in the
 * spec itself, not a build error. Added here as the one place a
 * built, real page needs some path to it; primary nav is untouched.
 */
export function Footer() {
  const sectionTone = useSectionTone();
  const pathname = usePathname();

  useEffect(() => {
    sectionTone?.registerDarkPanel();
    // Re-registers on every navigation, after SectionToneProvider's own
    // pathname-change effect resets the per-page count.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <footer className="bg-ink pb-24 text-off-white xl:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold">CamFEX</p>
            <p className="mt-3 max-w-xs font-body text-sm text-off-white/75">
              Cambodia Food &amp; Beverage Expo. The trade platform where
              international buyers meet Cambodian producers.
            </p>
            {/* Social links pending — populate once channels are confirmed. */}
            <div aria-hidden="true" className="mt-5 h-0" />
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="font-body text-sm font-semibold uppercase tracking-wide text-off-white/60">
                {column.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-off-white/85 hover:text-off-white hover:underline hover:underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Reserved for a partner/sponsor logo strip once populated. */}
        <div aria-hidden="true" className="mt-14 w-full" />
      </div>

      <div className="border-t border-off-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <p className="font-body text-xs text-off-white/60">
            © 2026 CamFEX Co., Ltd. Registered in the Kingdom of Cambodia.
          </p>
          <ul className="flex items-center justify-center gap-4 sm:justify-start">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-xs text-off-white/60 hover:text-off-white hover:underline hover:underline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
