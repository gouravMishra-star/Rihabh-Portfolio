"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { useLenis } from "lenis/react";
import MagneticButton from "./magnetic-button";

export default function Hero() {
  const lenis = useLenis();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.78], [0, -36]);

  const scrollToWorks = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (lenis) {
      lenis.scrollTo("#projects", {
        duration: 1.6,
        offset: -84,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[700px] flex flex-col items-center justify-between overflow-hidden px-4 sm:px-8 lg:px-12 pt-24 pb-10 sm:pt-28 sm:pb-14"
    >
      {/* Full-Bleed Animated Cinematic Background */}
      <m.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="relative h-full w-full animate-ken-burns">
          <Image
            src="/cinema/hero-cinema-bg.jpg"
            alt="Cinematic Liquid Glass Backdrop"
            fill
            priority
            quality={92}
            className="object-cover object-center opacity-90"
            sizes="100vw"
          />
        </div>

        {/* Volumetric Center Backlight & Cinematic Atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[82vw] max-w-[1100px] h-[46vh] rounded-full bg-cyan-400/[0.09] blur-[130px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03050c]/55 via-[#03050c]/25 to-[#030408]" />
        <div className="cinema-vignette absolute inset-0" />
        <div className="cinema-grain absolute inset-0 opacity-25 mix-blend-overlay" />
        <div className="anamorphic-flare absolute top-[49%] inset-x-0 h-[2px] opacity-70" />
      </m.div>

      {/* Top Spacer for Optical Center Balance under Fixed Navbar */}
      <div className="h-4 sm:h-6 shrink-0" aria-hidden="true" />

      {/* Center Stage: Monumental Title & Paragraph */}
      <m.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full max-w-[1440px] mx-auto text-center flex flex-col items-center justify-center my-auto"
      >
        <h1 className="w-full flex flex-col items-center select-none">
          {/* Monumental First Name */}
          <span className="block w-full overflow-hidden py-1 px-2">
            <m.span
              initial={{ y: "100%", opacity: 0, filter: "blur(12px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.95,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block font-display text-[clamp(2.6rem,10.2vw,9.5rem)] font-extrabold tracking-[-0.02em] leading-[0.88] whitespace-nowrap bg-gradient-to-b from-white via-white to-cyan-100/75 bg-clip-text text-transparent drop-shadow-[0_12px_60px_rgba(56,189,248,0.2)]"
            >
              RISHABH
            </m.span>
          </span>

          {/* Smaller, Wide-Tracked Cinema Surname */}
          <span className="mt-3 sm:mt-4 inline-flex items-center justify-center gap-4 sm:gap-7 overflow-hidden py-1 px-2">
            <m.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden sm:block origin-right h-px w-14 md:w-24 bg-gradient-to-r from-transparent to-cyan-300/60"
            />
            <m.span
              initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block font-display text-[clamp(1.25rem,3.6vw,3.4rem)] font-bold tracking-[0.38em] pl-[0.38em] leading-none bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(56,189,248,0.28)]"
            >
              MISHRA
            </m.span>
            <m.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden sm:block origin-left h-px w-14 md:w-24 bg-gradient-to-l from-transparent to-cyan-300/60"
            />
          </span>
        </h1>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.36,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 sm:mt-8 font-timecode text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-200/90"
        >
          MOTION DESIGNER · 2D · 3D · AI
        </m.p>

        <m.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.46,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-4 text-base sm:text-xl md:text-[1.3rem] text-gray-200/85 max-w-2xl mx-auto font-light leading-relaxed tracking-[-0.01em]"
        >
          From pixels to possibilities—creating compelling motion through art,
          design, and AI.
        </m.p>
      </m.div>

      {/* Two Action Buttons Anchored at Bottom */}
      <m.div
        style={{ opacity: contentOpacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.85,
          delay: 0.56,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-xs sm:max-w-none shrink-0"
      >
        <MagneticButton className="w-full sm:w-auto">
          <a
            href="#projects"
            onClick={scrollToWorks}
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:bg-cyan-50 hover:shadow-[0_0_35px_rgba(56,189,248,0.32)] cursor-pointer"
          >
            <span>View My Work</span>
            <ArrowDownRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
        </MagneticButton>

        <MagneticButton className="w-full sm:w-auto">
          <Link
            href="/contact"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-8 py-3.5 text-sm sm:text-base font-medium text-white backdrop-blur-2xl transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/[0.12]"
          >
            <span>Contact Me</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </MagneticButton>
      </m.div>
    </section>
  );
}
