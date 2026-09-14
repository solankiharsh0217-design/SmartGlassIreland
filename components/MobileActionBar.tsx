"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "@/data/site";

export default function MobileActionBar() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 480));

  return (
    <div className="md:hidden sticky bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 mx-4 mt-3 min-h-[12px]">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-ink/90 backdrop-blur-md p-2 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)]"
          >
            <a
              href={BUSINESS.phoneUKHref}
              className="flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white text-[13px] font-semibold py-3.5 active:bg-white/20"
            >
              <Phone size={16} /> Call
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-white text-black text-[13px] font-semibold py-3.5"
            >
              Free Quote <ArrowRight size={15} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
