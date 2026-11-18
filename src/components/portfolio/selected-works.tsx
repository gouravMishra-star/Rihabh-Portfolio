"use client";

import { useState, useMemo } from "react";
import { m } from "framer-motion";
import ProjectCard from "@/components/project-card";
import type { VideoProject } from "@/types/videos";
import { getVideoProjectsByCategory } from "@/lib/helper";

interface SelectedWorksProps {
  initialCategories: { category: string; count: number }[];
  initialProjects: VideoProject[];
}

const FEATURED_PRIORITY_IDS = [
  "41nRKWXIums",
  "hS5bBCD4k-g",
  "D6T81o1JGdw",
  "Sf36V2zy2r0",
  "nO-PuBB0mXs",
  "Z4ulk-93d18",
  "mT4cs0q1f_w",
  "HYDw5MvIhck",
  "K3n1CdUA-mE",
];

export default function SelectedWorks({
  initialCategories,
  initialProjects,
}: SelectedWorksProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const orderedProjects = useMemo(() => {
    const base =
      selectedCategory === "All"
        ? initialProjects
        : getVideoProjectsByCategory(selectedCategory);

    if (selectedCategory !== "All") return base;

    const priorityMap = new Map(
      FEATURED_PRIORITY_IDS.map((id, idx) => [id, idx])
    );

    return [...base].sort((a, b) => {
      const aRank = priorityMap.has(a.id) ? priorityMap.get(a.id)! : 999;
      const bRank = priorityMap.has(b.id) ? priorityMap.get(b.id)! : 999;
      if (aRank !== bRank) return aRank - bRank;
      return (
        new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
      );
    });
  }, [selectedCategory, initialProjects]);

  const useAsymmetricHero =
    selectedCategory === "All" && orderedProjects.length >= 2;

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <m.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="font-timecode text-[11px] uppercase tracking-[0.22em] text-cyan-300/80 block mb-3"
            >
              01 / Selected Works
            </m.span>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.1] text-white"
            >
              Featured Projects
            </m.h2>
          </div>

          <m.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-400 text-base sm:text-lg max-w-md font-light leading-relaxed"
          >
            Creating motion graphics, 2D/3D animations, cinematic visuals, and
            AI-powered content for global brands, studios, and digital
            experiences.
          </m.p>
        </div>

        {/* Category Filter Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-white/[0.08]">
          {initialCategories.map(({ category, count }) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  isSelected
                    ? "text-black"
                    : "text-gray-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06]"
                }`}
              >
                {isSelected && (
                  <m.div
                    layoutId="works-category-pill"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-white"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{category}</span>
                  <span
                    className={`font-timecode text-[10px] ${
                      isSelected ? "text-black/65" : "text-gray-500"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Showcase Top Row (All view) */}
        {useAsymmetricHero ? (
          <div className="space-y-8">
            {/* Row 1: 7 / 5 Editorial Split */}
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
              <m.div
                key={orderedProjects[0].id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7"
              >
                <ProjectCard project={orderedProjects[0]} featured index={0} />
              </m.div>

              <m.div
                key={orderedProjects[1].id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="lg:col-span-5"
              >
                <ProjectCard project={orderedProjects[1]} index={1} />
              </m.div>
            </div>

            {/* Remaining Works */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {orderedProjects.slice(2).map((project, idx) => (
                <m.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.65,
                    delay: (idx % 3) * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <ProjectCard project={project} index={idx + 2} />
                </m.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {orderedProjects.map((project, idx) => (
              <m.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: (idx % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard project={project} index={idx} />
              </m.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
