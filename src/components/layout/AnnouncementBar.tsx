"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "@phosphor-icons/react/dist/ssr";

/**
 * Single line across the top of every page. Ink background, off-white
 * text throughout, including the link — terracotta text on Ink Black
 * measures 3.66:1, below the 4.5:1 link-text requirement, and cannot
 * reach it on any dark background (build plan Tables 10/11 pair
 * "terracotta link" with an ink background without that combination
 * ever being contrast-checked; noted here as a deviation from that
 * spec text for whoever reconciles it later). The link is distinguished
 * by underline instead of color. Dismissible for the session only — no
 * localStorage/backend in this phase (build plan §5.2).
 */
export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <div className="relative flex min-h-11 items-center justify-center bg-ink px-12 py-2 text-center">
      <p className="font-body text-sm text-off-white">
        Edition 1 · Q4 2027 · Phnom Penh —{" "}
        <Link
          href="/exhibit/book"
          className="text-off-white underline underline-offset-4 hover:no-underline"
        >
          exhibitor bookings now open
        </Link>
      </p>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute right-1 flex h-11 w-11 items-center justify-center text-off-white/80 hover:text-off-white"
      >
        <X size={18} weight="bold" aria-hidden="true" />
      </button>
    </div>
  );
}
