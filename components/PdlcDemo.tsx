"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Mode = "frosted" | "clear";

const COPY: Record<
  Mode,
  { tab: string; pill: string; captionTitle: string; caption: string; state: string; current: string }
> = {
  frosted: {
    tab: "Frosted",
    pill: "POWER OFF · FROSTED · FULLY PRIVATE",
    captionTitle: "Crystals relaxed",
    caption: "light scatters and the glass turns frosted. Private, yet the room stays bright.",
    state: "Frosted",
    current: "Zero draw",
  },
  clear: {
    tab: "Clear",
    pill: "POWER ON · CLEAR · DAYLIGHT FLOODS IN",
    captionTitle: "Crystals aligned",
    caption: "the glass turns clear — views and daylight pass straight through.",
    state: "Clear",
    current: "Minute AC load",
  },
};

/**
 * Single-photo PDLC demo: one state drives the frost layer, status pill,
 * caption and readout — they cannot disagree.
 */
export default function PdlcDemo() {
  const [mode, setMode] = useState<Mode>("frosted");
  const c = COPY[mode];
  const clear = mode === "clear";

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-5">
        <div className="max-w-3xl">
          <div className="font-mono text-[12px] text-text-muted uppercase mb-1">
            How PDLC Smart Glass Works
          </div>
          <h2 className="text-[26px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold tracking-[-0.02em]">
            Frosted or clear — <span className="text-brand">in an instant.</span>
          </h2>
          <p className="text-[14px] text-text-muted mt-2 leading-relaxed">
            An electrical current aligns microscopic liquid crystals in the PDLC film. Power on:
            clear. Power off: frosted and private — while daylight keeps flowing through.
          </p>
        </div>

        {/* pill slider */}
        <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
          <span className="font-mono text-[11px] tracking-[0.14em] text-text-muted">POWER</span>
          <button
            role="switch"
            aria-checked={clear}
            aria-label="Toggle PDLC power: frosted or clear"
            onClick={() => setMode(clear ? "frosted" : "clear")}
            className={`relative grid grid-cols-2 items-center w-[232px] h-12 rounded-full border p-1 shadow-inner transition-colors duration-500 ${
              clear ? "bg-brand border-brand-deep" : "bg-badge-bg border-border-hairline"
            }`}
          >
            {(["frosted", "clear"] as Mode[]).map((m) => (
              <span
                key={m}
                className={`relative z-10 flex items-center justify-center gap-1.5 text-[12px] font-semibold transition-colors duration-300 ${
                  mode === m
                    ? "text-text-primary"
                    : clear
                      ? "text-white/55"
                      : "text-text-muted"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    mode === m ? "bg-brand" : "bg-text-muted/40"
                  }`}
                />
                {COPY[m].tab}
              </span>
            ))}
            <motion.span
              aria-hidden
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-surface-white border border-border-subtle shadow"
              initial={false}
              animate={{ left: clear ? "50%" : "4px" }}
              transition={{ type: "spring", stiffness: 480, damping: 38 }}
            />
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-border-hairline overflow-hidden shadow-sm bg-surface-white">
        <div className="relative h-[320px] md:h-[480px] overflow-hidden">
          <Image
            src="/images/hero-restaurant.jpg"
            alt="Restaurant interior behind switchable glass — frosted for privacy or crystal clear"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* the frost itself — dissolves on toggle */}
          <motion.div
            className="absolute inset-0 bg-white/55 backdrop-blur-[14px]"
            initial={false}
            animate={{ opacity: clear ? 0 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute top-4 left-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={mode}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={`px-3 py-1.5 rounded-lg font-mono text-[11px] shadow backdrop-blur ${
                  clear ? "bg-brand text-white" : "bg-white/90 text-text-primary"
                }`}
              >
                {c.pill}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto">
            <div className="bg-white/92 backdrop-blur-md rounded-xl px-4 py-3 border border-border-hairline shadow-md max-w-md">
              <AnimatePresence mode="wait">
                <motion.p
                  key={mode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-[13px] text-text-muted leading-relaxed"
                >
                  <strong className="text-text-primary font-semibold">{c.captionTitle}</strong>
                  {" — "}
                  {c.caption}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 bg-surface-white border-t border-border-hairline">
          {[
            ["STATE", c.state],
            ["SWITCHING", "Milliseconds"],
            ["LIGHT KEPT", "Up to 80%"],
            ["CURRENT", c.current],
          ].map(([k, v], i) => (
            <div
              key={k}
              className={`px-5 py-4 ${i !== 0 ? "border-l border-border-hairline" : ""} ${
                i >= 2 ? "max-md:border-t max-md:border-border-hairline" : ""
              } ${i === 2 ? "max-md:border-l-0" : ""}`}
            >
              <div className="font-mono text-[10px] tracking-[0.14em] text-text-muted">{k}</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={v}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[15px] font-semibold mt-0.5"
                >
                  {v}
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
