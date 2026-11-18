"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CTASectionProps } from "@/types/cta";
import MagneticButton from "@/components/magnetic-button";

const CTASection = ({
  title,
  description,
  buttonText,
  href,
}: CTASectionProps) => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 overflow-hidden">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-white/12 bg-[#050811]"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[340px] bg-cyan-400/12 blur-[130px] rounded-full" />
        <div className="pointer-events-none absolute -bottom-24 right-0 w-[380px] h-[300px] bg-blue-400/12 blur-[120px] rounded-full" />
        <div className="cinema-grain pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay" />

        <div className="relative z-10 px-6 py-14 sm:p-16 md:p-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-300/20 bg-cyan-400/[0.06] backdrop-blur-md mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
            <span className="font-timecode text-[11px] font-medium text-cyan-200 tracking-[0.2em] uppercase">
              Available for New Projects
            </span>
          </div>

          <h3 className="font-display text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent mb-5 tracking-tight leading-[1.06] max-w-2xl">
            {title || "Ready to Work Together?"}
          </h3>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-light">
            {description}
          </p>

          <MagneticButton>
            <Link
              href={href}
              className="group/cta inline-flex items-center justify-center px-9 py-4 text-base font-bold text-black bg-white rounded-full transition-all duration-300 hover:bg-cyan-50 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]"
            >
              <span>{buttonText}</span>
              <ArrowRight
                className="ml-2.5 transition-transform duration-300 group-hover/cta:translate-x-1"
                size={18}
              />
            </Link>
          </MagneticButton>
        </div>
      </m.div>
    </section>
  );
};

export default CTASection;
