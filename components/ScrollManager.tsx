"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll discipline for a Lenis-smoothed app:
 * - route change without hash → back to top (Lenis-aware so it actually moves)
 * - route change / load with hash → ease to the anchored element
 * - same-page anchors are handled by SmoothScroll's click handler
 */
export default function ScrollManager() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    const lenis = () =>
      typeof window !== "undefined" ? window.__lenis : undefined;

    const scrollTop = () => {
      const l = lenis();
      if (l) l.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
    };

    const scrollToHash = (hash: string, delay: number) => {
      window.setTimeout(() => {
        const el = document.querySelector(hash);
        if (!el) {
          scrollTop();
          return;
        }
        const l = lenis();
        if (l) l.scrollTo(el as HTMLElement, { offset: -84, duration: 1.2 });
        else el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, delay);
    };

    // initial load with a pasted # link
    if (first.current) {
      first.current = false;
      if (window.location.hash) scrollToHash(window.location.hash, 600);
      return;
    }

    const hash = window.location.hash;
    if (hash) scrollToHash(hash, 80);
    else scrollTop();
  }, [pathname]);

  return null;
}
