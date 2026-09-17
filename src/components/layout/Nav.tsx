"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { primaryNav, persistentCtas, type NavItem } from "@/lib/nav-data";

const TRANSITION = "transition-all duration-200 ease-out transition-discrete";

/** Three-bar hamburger that morphs into an X on open. Reduced-motion users get the instant swap from the global transition-duration override in globals.css. */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current ${TRANSITION} ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current ${TRANSITION} ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current ${TRANSITION} ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

function DropdownNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerId = useId();
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        wrapperRef.current
          ?.querySelector<HTMLButtonElement>("button")
          ?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!item.dropdown) {
    return (
      <Link
        href={item.href ?? "#"}
        className="font-body text-sm font-medium text-ink hover:text-terracotta"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        id={triggerId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 font-body text-sm font-medium text-ink hover:text-terracotta"
      >
        {item.label}
        <CaretDown
          size={14}
          weight="bold"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={panelId}
        role="group"
        aria-labelledby={triggerId}
        className={`absolute left-0 top-full z-20 mt-2 min-w-56 origin-top border border-ink/15 bg-off-white py-2 shadow-none ${TRANSITION} starting:opacity-0 starting:-translate-y-1 starting:scale-95 ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "hidden opacity-0 -translate-y-1 scale-95"
        }`}
      >
        {item.dropdown.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-2 font-body text-sm text-ink hover:bg-ink/5 hover:text-terracotta"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobileMenu = () => setMobileOpen(false);

  useEffect(() => {
    if (!mobileOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-off-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="font-display text-xl font-semibold text-ink"
          >
            CamFEX
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 xl:flex"
          >
            {primaryNav.map((item) => (
              <DropdownNavItem key={item.label} item={item} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Button href={persistentCtas.secondary.href} variant="secondary">
              {persistentCtas.secondary.label}
            </Button>
            <Button href={persistentCtas.primary.href} variant="primary">
              {persistentCtas.primary.label}
            </Button>
          </div>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center text-ink xl:hidden"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>

        <div
          id="mobile-nav-panel"
          className={`origin-top overflow-hidden border-t border-ink/10 bg-off-white px-4 xl:hidden ${TRANSITION} starting:opacity-0 starting:-translate-y-2 ${
            mobileOpen
              ? "translate-y-0 pb-6 opacity-100"
              : "hidden -translate-y-2 pb-0 opacity-0"
          }`}
        >
          <nav aria-label="Primary" className="flex flex-col">
            {primaryNav.map((item) =>
              item.dropdown ? (
                <details key={item.label} className="group border-b border-ink/10 py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-body text-base font-medium text-ink">
                    {item.label}
                    <CaretDown
                      size={16}
                      weight="bold"
                      aria-hidden="true"
                      className="transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="flex flex-col pb-3 pl-3">
                    {item.dropdown.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="py-2 font-body text-sm text-ink/80 hover:text-terracotta"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  onClick={closeMobileMenu}
                  className="border-b border-ink/10 py-3 font-body text-base font-medium text-ink hover:text-terracotta"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </header>

      {/* Persistent CTAs collapse into a sticky bottom bar on mobile, fixed on every page. */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-ink/10 bg-off-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] xl:hidden">
        <Button
          href={persistentCtas.secondary.href}
          variant="secondary"
          className="flex-1"
          onClick={closeMobileMenu}
        >
          {persistentCtas.secondary.label}
        </Button>
        <Button
          href={persistentCtas.primary.href}
          variant="primary"
          className="flex-1"
          onClick={closeMobileMenu}
        >
          {persistentCtas.primary.label}
        </Button>
      </div>
    </>
  );
}
