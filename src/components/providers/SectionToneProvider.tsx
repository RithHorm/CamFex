"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const MAX_DARK_PANELS_PER_PAGE = 2;

interface SectionToneContextValue {
  registerDarkPanel: () => void;
}

const SectionToneContext = createContext<SectionToneContextValue | null>(
  null,
);

/**
 * Resets the per-page dark-panel count on navigation and warns in
 * development when Section (build plan §3.1 / §7) is used to render
 * more than two full-bleed ink panels on one page.
 */
export function SectionToneProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const darkPanelCount = useRef(0);

  useEffect(() => {
    darkPanelCount.current = 0;
  }, [pathname]);

  const registerDarkPanel = () => {
    darkPanelCount.current += 1;
    if (
      process.env.NODE_ENV !== "production" &&
      darkPanelCount.current > MAX_DARK_PANELS_PER_PAGE
    ) {
      console.error(
        `[Section] "${pathname}" renders ${darkPanelCount.current} full-bleed ink panels. ` +
          `Build plan §3.1 caps dark panels at ${MAX_DARK_PANELS_PER_PAGE} per page.`,
      );
    }
  };

  return (
    <SectionToneContext.Provider value={{ registerDarkPanel }}>
      {children}
    </SectionToneContext.Provider>
  );
}

export function useSectionTone() {
  return useContext(SectionToneContext);
}
