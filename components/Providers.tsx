"use client";

import { MotionConfig } from "framer-motion";
import SmoothScroll from "./SmoothScroll";
import ScrollManager from "./ScrollManager";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <ScrollManager />
      {children}
    </MotionConfig>
  );
}
