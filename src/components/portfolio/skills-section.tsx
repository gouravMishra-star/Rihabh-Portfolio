"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  videoEditingSkills,
  otherSoftwaresLearnt,
  specializations,
} from "@/db/skills";

const DISCIPLINE_VISUALS: Record<string, { src: string; caption: string }> = {
  "Motion Design": {
    src: "/cinema/craft-motion.jpg",
    caption: "2D & 3D Animation · Kinetic Typography · Brand Systems",
  },
  "AI Video Production": {
    src: "/cinema/hero-cinema-bg.jpg",
    caption: "Generative Video · AI Image & Audio · Hybrid Pipelines",
  },
  Educational: {
    src: "https://img.youtube.com/vi/Sf36V2zy2r0/hqdefault.jpg",
    caption: "Visual Storytelling · Animated Diagrams · Clear Pacing",
  },
  "SaaS Explainer": {
    src: "https://img.youtube.com/vi/hS5bBCD4k-g/hqdefault.jpg",
    caption: "UI Animation · Product Launches · Conversion Storytelling",
  },
  "Product Ads": {
    src: "https://img.youtube.com/vi/41nRKWXIums/hqdefault.jpg",
    caption: "Commercial Spots · 3D Reveals · High-Impact Hooks",
  },
  "3D Look Development": {
    src: "/cinema/craft-color-grading.jpg",
    caption: "Lighting · Shading · Materials · Cinematic Compositing",
  },
};

export default function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSpec = specializations[activeIndex] || specializations[0];
  const activeVisual =
    DISCIPLINE_VISUALS[activeSpec.title] || DISCIPLINE_VISUALS["Motion Design"];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-20">
          <div>
            <m.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="font-timecode text-xs uppercase tracking-[0.26em] text-cyan-300 block mb-3"
            >
              03 / What I Can Do For You
            </m.span>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent"
            >
              Capabilities &amp; Technical Skills
            </m.h2>
          </div>

          <Link
            href="/skills"
            className="group inline-flex items-center gap-2 font-timecode text-xs uppercase tracking-[0.18em] text-gray-300 hover:text-cyan-200 transition-colors"
          >
            <span>Explore Full Skills &amp; Pipeline</span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Interactive Editorial Discipline Index + Visual Preview */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-20">
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {specializations.map((spec, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={spec.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className="group w-full py-6 sm:py-7 text-left transition-colors cursor-pointer focus-visible:outline-none"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-timecode text-xs transition-colors duration-300 ${
                          isActive
                            ? "text-cyan-300"
                            : "text-gray-600 group-hover:text-gray-400"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={`font-display text-2xl sm:text-3xl font-bold tracking-tight transition-all duration-300 ${
                          isActive
                            ? "text-white translate-x-1.5"
                            : "text-white/55 group-hover:text-white/85"
                        }`}
                      >
                        {spec.title}
                      </h3>
                    </div>

                    <span
                      className={`font-timecode text-[10px] uppercase tracking-widest transition-opacity duration-300 hidden sm:inline ${
                        isActive ? "opacity-100 text-cyan-200" : "opacity-0"
                      }`}
                    >
                      Active
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden pl-8 sm:pl-11">
                      <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-4 max-w-xl">
                        {spec.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {spec.skills.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-timecode text-[10px] uppercase tracking-wider text-gray-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sticky Visual Preview Frame */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/4.3] overflow-hidden rounded-[2rem] border border-white/12 bg-[#05070e] shadow-[0_25px_80px_rgba(0,0,0,0.75)]">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeSpec.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeVisual.src}
                    alt={activeSpec.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-black/30 to-transparent" />
                </m.div>
              </AnimatePresence>

              <div className="cinema-grain pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay" />

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="font-timecode text-[10px] uppercase tracking-[0.22em] text-cyan-300 block mb-1.5">
                  Service {String(activeIndex + 1).padStart(2, "0")} / 06
                </span>
                <div className="font-display text-2xl font-bold text-white mb-1">
                  {activeSpec.title}
                </div>
                <p className="font-timecode text-[11px] text-gray-300">
                  {activeVisual.caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Technical Skills */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <span className="font-timecode text-xs uppercase tracking-[0.24em] text-gray-400">
              Technical Skills — Core Software
            </span>
            <span className="font-timecode text-[11px] text-gray-500">
              {videoEditingSkills.length} Primary Tools
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {videoEditingSkills.map((tool, idx) => (
              <m.div
                key={tool.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-400 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:-translate-y-1"
              >
                <div className="relative h-11 w-11 mb-4 rounded-xl border border-white/10 bg-black/50 p-2 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {tool.image_link ? (
                    <Image
                      src={tool.image_link}
                      alt={tool.name}
                      fill
                      className="object-contain p-1.5"
                      sizes="44px"
                    />
                  ) : (
                    <span className="font-display text-sm font-extrabold tracking-tight bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
                      {tool.shortCode}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-base font-bold text-white mb-1.5 group-hover:text-cyan-200 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {tool.description}
                </p>
              </m.div>
            ))}
          </div>
        </div>

        {/* Other Softwares Learnt */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <span className="font-timecode text-xs uppercase tracking-[0.22em] text-cyan-300">
              Other Software Learnt &amp; Pipeline Tools
            </span>
            <span className="font-timecode text-[11px] text-gray-500">
              VFX · Texturing · Lighting · 2D
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {otherSoftwaresLearnt.map((sw) => (
              <div
                key={sw.name}
                className="rounded-xl border border-white/[0.07] bg-black/35 px-4 py-3.5 transition-colors hover:border-cyan-300/30 hover:bg-white/[0.04]"
              >
                <div className="text-sm font-semibold text-white">
                  {sw.name}
                </div>
                <div className="font-timecode text-[10px] text-gray-400 mt-1">
                  {sw.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
