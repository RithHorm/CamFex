"use client";

import { useLayoutEffect, useState } from "react";
import { useInViewOnce } from "@/lib/useInViewOnce";

export interface StatBlockProps {
  /** e.g. "3,000 sqm", "165", "80" */
  value: string;
  label: string;
  className?: string;
  /**
   * Counts up from 0 to `value` once, when this block scrolls into
   * view. Opt-in and scoped to whichever instance sets it — every
   * other StatBlock keeps rendering `value` as static text.
   */
  countUp?: boolean;
}

const COUNT_UP_MS = 1200;

// Matches the leading digit/comma run so "3,000 sqm" animates the 3,000
// and keeps " sqm" fixed; "165" and "80" have no suffix to preserve.
const NUMERIC_PREFIX = /^([\d,]+)(.*)$/;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * The large-number treatment used for planned-scale figures
 * (3,000 sqm / 165 positions / 80 buyers). Build plan §7.
 */
export function StatBlock({
  value,
  label,
  className = "",
  countUp = false,
}: StatBlockProps) {
  // Server/first-paint render always shows the final value — avoids a
  // hydration mismatch and means anyone without JS, or before the
  // effect below runs, still sees the real number, not a stuck "0".
  const [displayValue, setDisplayValue] = useState(value);
  const { ref, inView, prefersReducedMotion } = useInViewOnce<HTMLParagraphElement>({
    threshold: 0.4,
  });

  useLayoutEffect(() => {
    if (!countUp || !inView) return;

    const match = value.match(NUMERIC_PREFIX);
    if (!match) return;
    const target = Number(match[1].replace(/,/g, ""));
    const suffix = match[2];

    // This is a requestAnimationFrame loop, not a CSS transition, so
    // the global transition-duration override in globals.css has no
    // effect on it — the hook's own reduced-motion resolution is what
    // keeps this from animating.
    if (prefersReducedMotion) return;

    // Runs before paint (useLayoutEffect), so switching to the "0"
    // starting frame the instant this scrolls into view never flashes
    // the final value first.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayValue("0" + suffix);

    const start = performance.now();
    let frame: number;
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / COUNT_UP_MS, 1);
      const current = Math.round(target * easeOutCubic(progress));
      setDisplayValue(current.toLocaleString("en-US") + suffix);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [countUp, inView, prefersReducedMotion, value]);

  return (
    <div className={className}>
      <p
        ref={ref}
        className="font-display text-4xl font-semibold text-ink sm:text-5xl"
      >
        {displayValue}
      </p>
      <p className="mt-1 font-body text-sm text-ink/70">{label}</p>
    </div>
  );
}
