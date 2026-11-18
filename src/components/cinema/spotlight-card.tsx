"use client";

import React, { useRef, useState } from "react";
import { m } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  showViewfinder?: boolean;
  hoverLift?: boolean;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(56, 189, 248, 0.16)",
  showViewfinder = false,
  hoverLift = true,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <m.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={hoverLift ? { y: -5 } : undefined}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`group/spot relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-2xl transition-colors duration-500 hover:border-white/[0.18] ${className}`}
    >
      {/* Pointer-tracked surface spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(520px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />

      {/* Specular top edge highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-40 transition-opacity duration-500 group-hover/spot:opacity-90" />

      {/* Optional camera viewfinder corner crop marks */}
      {showViewfinder && (
        <>
          <span className="pointer-events-none absolute left-3 top-3 z-20 h-3 w-3 border-l border-t border-cyan-400/0 transition-all duration-300 group-hover/spot:border-cyan-400/80 group-hover/spot:translate-x-0.5 group-hover/spot:translate-y-0.5" />
          <span className="pointer-events-none absolute right-3 top-3 z-20 h-3 w-3 border-r border-t border-cyan-400/0 transition-all duration-300 group-hover/spot:border-cyan-400/80 group-hover/spot:-translate-x-0.5 group-hover/spot:translate-y-0.5" />
          <span className="pointer-events-none absolute bottom-3 left-3 z-20 h-3 w-3 border-b border-l border-cyan-400/0 transition-all duration-300 group-hover/spot:border-cyan-400/80 group-hover/spot:translate-x-0.5 group-hover/spot:-translate-y-0.5" />
          <span className="pointer-events-none absolute bottom-3 right-3 z-20 h-3 w-3 border-b border-r border-cyan-400/0 transition-all duration-300 group-hover/spot:border-cyan-400/80 group-hover/spot:-translate-x-0.5 group-hover/spot:-translate-y-0.5" />
        </>
      )}

      {/* Inner content */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </m.div>
  );
}

