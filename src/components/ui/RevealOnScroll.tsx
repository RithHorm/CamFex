"use client";

import type { ReactNode } from "react";
import { useInViewOnce } from "@/lib/useInViewOnce";

interface RevealOnScrollProps {
  children: ReactNode;
  /** Always-applied classes (layout etc.), independent of animation state. */
  className?: string;
  /** Classes before the element has entered the viewport. */
  fromClassName: string;
  /** Classes once triggered — include the transition/duration/ease utilities here, since each moment carries its own character. */
  toClassName: string;
  threshold?: number;
}

/**
 * Thin CSS-class-toggle wrapper around useInViewOnce, for scroll-
 * triggered moments that are plain CSS transitions (as opposed to
 * StatBlock's JS-driven count-up, which needs the hook directly). Each
 * caller supplies its own fromClassName/toClassName — including
 * duration and easing — so three uses of this component can still
 * read as three distinct moments rather than one effect repeated.
 */
export function RevealOnScroll({
  children,
  className = "",
  fromClassName,
  toClassName,
  threshold,
}: RevealOnScrollProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold });
  return (
    <div
      ref={ref}
      className={`${className} ${inView ? toClassName : fromClassName}`}
    >
      {children}
    </div>
  );
}
