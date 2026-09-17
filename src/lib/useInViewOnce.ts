"use client";

import { useLayoutEffect, useRef, useState } from "react";

interface UseInViewOnceOptions {
  /** Fraction of the element that must be visible before it fires. */
  threshold?: number;
}

interface UseInViewOnceResult<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  /** True once — the first time the element scrolls into view — and never resets on scroll-past. */
  inView: boolean;
  /**
   * Resolved once, alongside `inView`. CSS-driven consumers don't need
   * this — the global transition-duration override in globals.css
   * already makes their transition instant. JS-driven consumers (a
   * requestAnimationFrame loop, e.g. StatBlock's count-up) do need it,
   * since that CSS override has no effect on JS animation.
   */
  prefersReducedMotion: boolean;
}

/**
 * Fires once — the first time the returned ref's element scrolls into
 * view — then disconnects and never re-fires, even if the element
 * scrolls past and back. Shared by every scroll-triggered moment on
 * the site (stat count-up, brand moment, six-shows grid, closing CTA
 * panel) so "observe once, never re-fire, resolve instantly under
 * reduced motion" lives in exactly one place instead of being
 * reimplemented per component.
 *
 * Under prefers-reduced-motion, `inView` resolves to true immediately,
 * before first paint, without ever creating an IntersectionObserver —
 * so a CSS consumer's "entered" classes are already active on first
 * render and the element never visibly starts in its "from" state.
 */
export function useInViewOnce<T extends HTMLElement = HTMLElement>({
  threshold = 0.4,
}: UseInViewOnceOptions = {}): UseInViewOnceResult<T> {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const hasFiredRef = useRef(false);

  useLayoutEffect(() => {
    if (hasFiredRef.current) return;

    // matchMedia/IntersectionObserver are both browser-only — there is
    // no way to know either during SSR, so syncing them into state on
    // mount (rather than computing during render) is unavoidable here.
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      hasFiredRef.current = true;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPrefersReducedMotion(true);
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasFiredRef.current) return;
        hasFiredRef.current = true;
        setInView(true);
        observer.disconnect();
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // Mount-scoped intentionally — threshold is static per instance,
    // and re-running this would restart the "fires once" guard.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView, prefersReducedMotion };
}
