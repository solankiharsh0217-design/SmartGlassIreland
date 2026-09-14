"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export default function CountUp({
  to,
  suffix = "",
  className = "",
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent = Math.round(v).toLocaleString("en-IE") + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
