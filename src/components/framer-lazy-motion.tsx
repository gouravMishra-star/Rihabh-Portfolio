"use client";

import { LazyMotion, MotionConfig, domMax } from "framer-motion";

export default function FramerLazyMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domMax} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
