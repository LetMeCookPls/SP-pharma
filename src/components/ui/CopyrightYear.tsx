"use client";

import { useEffect, useRef } from "react";

/**
 * Keeps a statically generated footer current without requiring a redeploy.
 * The interval also covers a page that remains open across New Year's Day.
 */
export default function CopyrightYear() {
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateYear = () => {
      if (yearRef.current) yearRef.current.textContent = String(new Date().getFullYear());
    };

    updateYear();
    const interval = window.setInterval(updateYear, 6 * 60 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <span ref={yearRef} suppressHydrationWarning>
      {new Date().getFullYear()}
    </span>
  );
}
