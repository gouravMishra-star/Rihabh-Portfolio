"use client";

import { m } from "framer-motion";
import { achievements } from "@/db/skills";
import type { Client, VideoProject } from "@/types/videos";

interface ExperienceSectionProps {
  clients: Client[];
  projects: VideoProject[];
}

const EXPERIENCE_AREAS = [
  {
    index: "01",
    area: "Global Brand Campaigns",
    focus: "Product Ads · Motion Design · Commercial Visuals",
    tools: "After Effects · Blender · Premiere Pro",
  },
  {
    index: "02",
    area: "Animated Film & 3D Production",
    focus: "2D/3D Animation · Look Development · Visual Effects",
    tools: "Blender · Autodesk Maya · Houdini FX · Katana · Clarisse",
  },
  {
    index: "03",
    area: "Generative AI Creative Workflows",
    focus: "AI Video · AI Image · AI Audio Production",
    tools: "Generative AI Models · After Effects · Premiere Pro",
  },
  {
    index: "04",
    area: "Digital-First & SaaS Storytelling",
    focus: "SaaS Explainers · Educational Series · IDX Solana Releases",
    tools: "After Effects · Photoshop · Premiere Pro",
  },
];

export default function ExperienceSection({
  projects,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
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
              className="font-timecode text-[11px] uppercase tracking-[0.22em] text-cyan-300/80 block mb-3"
            >
              04 / Experience
            </m.span>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.1] text-white"
            >
              Production Background
            </m.h2>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-8 sm:gap-10 shrink-0">
            {[
              { value: `${projects.length}`, label: "Featured Reels" },
              { value: "2D · 3D · AI", label: "Core Disciplines" },
              { value: "10", label: "Studio Tools" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.02em] text-white whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="font-timecode text-[10px] uppercase tracking-[0.18em] text-gray-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Experience Ledger */}
        <div className="border-t border-white/10 divide-y divide-white/[0.08] mb-16">
          {EXPERIENCE_AREAS.map((item, idx) => (
            <m.div
              key={item.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center py-6 px-2 sm:px-4 transition-colors duration-300 hover:bg-white/[0.025] rounded-xl"
            >
              <div className="md:col-span-4 flex items-center gap-4">
                <span className="font-timecode text-xs text-cyan-300/80">
                  {item.index}
                </span>
                <h3 className="text-base sm:text-lg font-medium tracking-[-0.015em] text-white group-hover:text-cyan-200 transition-colors">
                  {item.area}
                </h3>
              </div>

              <div className="md:col-span-4 text-sm text-gray-300 font-light">
                {item.focus}
              </div>

              <div className="md:col-span-4 md:text-right font-timecode text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                {item.tools}
              </div>
            </m.div>
          ))}
        </div>

        {/* Four Core Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <m.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:border-cyan-300/25 hover:bg-white/[0.04]"
              >
                <Icon size={22} className="text-cyan-300 mb-4" />
                <h3 className="text-base font-semibold tracking-[-0.015em] text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
