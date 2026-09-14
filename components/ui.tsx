"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[12px] text-text-muted uppercase mb-1 tracking-wide">{children}</div>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] font-semibold tracking-[-0.02em] text-text-primary ${className}`}>
      {children}
    </h2>
  );
}

export function TopMetaBar() {
  return (
    <div className="py-4 flex items-center justify-between border-b border-border-hairline text-text-muted">
      <div className="flex items-center gap-2 font-mono text-[12px]">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-badge-bg text-badge-text font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          SMART GLASS IRELAND
        </span>
        <span className="text-text-muted">/</span>
        <span className="hidden sm:inline">PDLC · LED · GRILLE</span>
        <span className="sm:hidden">IE + UK</span>
      </div>
      <div className="hidden sm:flex items-center gap-4 font-mono text-[12px]">
        <span>IRELAND &amp; UNITED KINGDOM</span>
        <span className="px-2 py-0.5 rounded bg-surface-container text-text-primary">
          DUBLIN · IE
        </span>
      </div>
    </div>
  );
}
