"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Creative Visual Column */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/12 hover:border-cyan-300/30 bg-[#050811] aspect-[4/5] shadow-[0_30px_90px_rgba(0,0,0,0.75)] transition-colors duration-500">
              <Image
                src="/rishabh.jpg"
                alt="Rishabh Mishra — Motion Designer and AI Visual Artist"
                fill
                className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/35 to-black/20" />
              <div className="cinema-grain pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay" />

              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/25 bg-black/65 px-3 py-1 font-timecode text-[10px] uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-md">
                  <Sparkles size={11} className="text-cyan-300" />
                  2D · 3D · AI
                </span>
                <span className="font-timecode text-[10px] uppercase tracking-[0.2em] text-white/65">
                  itsRishabh
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-timecode text-[10px] uppercase tracking-[0.22em] text-cyan-300 block mb-1">
                  Rishabh Mishra
                </span>
                <span className="text-lg sm:text-xl font-semibold tracking-[-0.02em] text-white block">
                  Motion Designer &amp; AI Visual Artist
                </span>
              </div>
            </div>
          </m.div>

          {/* Editorial Bio Column */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="font-timecode text-[11px] uppercase tracking-[0.22em] text-cyan-300/80 mb-3">
              02 / About
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] text-white mb-7">
              The creative{" "}
              <span className="text-white/50">behind the frames.</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8 max-w-2xl">
              <p>
                I&apos;m{" "}
                <span className="text-white font-medium">Rishabh Mishra</span>,
                a Motion Designer and AI Visual Artist with a background in
                2D/3D animation, visual effects, and cinematic storytelling.
              </p>
              <p className="text-gray-400">
                My experience spans creative campaigns for global brands,
                animated film productions, and digital-first content.
              </p>
              <p className="text-gray-400">
                Beyond traditional production, I work extensively with
                generative AI models for video, image, and audio
                creation—integrating emerging technologies into professional
                creative workflows.
              </p>
            </div>

            {/* Philosophy Statement */}
            <blockquote className="relative rounded-2xl border border-cyan-300/15 bg-white/[0.025] p-6 sm:p-7 mb-9 backdrop-blur-xl">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
                &ldquo;I believe the future of visual storytelling isn&apos;t
                about choosing between human creativity and AI. It&apos;s about
                combining artistic vision, technical expertise, and new
                technologies to create something remarkable.&rdquo;
              </p>
            </blockquote>

            {/* Footer Row */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-8">
                <div>
                  <span className="font-timecode text-[10px] uppercase tracking-[0.2em] text-gray-500 block mb-1">
                    Specialties
                  </span>
                  <span className="text-sm text-gray-200">
                    2D/3D Animation · VFX · Generative AI
                  </span>
                </div>
                <div>
                  <span className="font-timecode text-[10px] uppercase tracking-[0.2em] text-gray-500 block mb-1">
                    Availability
                  </span>
                  <span className="text-sm text-gray-200">
                    Global Brands · Studios · Freelance
                  </span>
                </div>
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-timecode text-xs uppercase tracking-[0.18em] text-white hover:text-cyan-200 transition-colors"
              >
                <span>More About Me</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
