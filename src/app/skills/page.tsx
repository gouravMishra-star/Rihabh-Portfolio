"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import GlassmorphismCard from "@/components/glassmorphism-card";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  BarChart3,
  FileSearch,
  ScissorsSquare,
  Brush,
  Eye,
  Send,
  Star,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import {
  videoEditingSkills,
  otherSoftwaresLearnt,
  specializations,
  achievements,
  workflow,
} from "@/db/skills";

const iconMap = [
  { icon: <FileSearch size={20} />, bg: "#0284c7" },
  { icon: <Eye size={20} />, bg: "#0ea5e9" },
  { icon: <ScissorsSquare size={20} />, bg: "#38bdf8" },
  { icon: <Brush size={20} />, bg: "#0284c7" },
  { icon: <BarChart3 size={20} />, bg: "#0ea5e9" },
  { icon: <Send size={20} />, bg: "#38bdf8" },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-24 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/15 blur-[100px] rounded-full pointer-events-none" />

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mt-0 md:mt-16 mb-6 text-white tracking-tight relative z-10">
            <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
              Skills &amp; Technical Expertise
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            Combining 2D/3D animation, visual effects, look development, and
            generative AI workflows to craft standout visual experiences.
          </p>
        </m.div>

        {/* Core Technical Skills */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoEditingSkills.map((skill, index) => (
              <m.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassmorphismCard className="p-6 h-full">
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="relative w-12 h-12 rounded-xl border border-white/10 bg-black/50 flex items-center justify-center overflow-hidden shrink-0">
                      {skill.image_link ? (
                        <Image
                          src={skill.image_link}
                          alt={skill.name}
                          fill
                          className="object-contain p-1.5"
                        />
                      ) : (
                        <span className="font-display text-sm font-extrabold bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
                          {skill.shortCode}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </GlassmorphismCard>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Other Softwares Learnt */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="font-display text-xl md:text-2xl font-bold mb-6 text-white text-center">
            Other Software Learnt
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherSoftwaresLearnt.map((sw) => (
              <GlassmorphismCard key={sw.name} className="p-5 text-center">
                <h3 className="text-base font-semibold text-white mb-1">
                  {sw.name}
                </h3>
                <p className="font-timecode text-[11px] text-cyan-200/75">
                  {sw.category}
                </p>
              </GlassmorphismCard>
            ))}
          </div>
        </m.div>

        {/* What I Can Do For You */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            What I Can Do For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <m.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
              >
                <GlassmorphismCard className="p-6 h-full">
                  <div className="text-2xl text-cyan-300 mb-4">{spec.icon}</div>
                  <h3 className="font-display text-lg font-semibold mb-3 text-white">
                    {spec.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {spec.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {spec.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-white/15 text-gray-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </GlassmorphismCard>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Core Pillars */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            Creative Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <m.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.08 }}
              >
                <GlassmorphismCard className="p-6 text-center h-full">
                  <achievement.icon
                    className="text-cyan-300 mx-auto mb-4"
                    size={30}
                  />
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </GlassmorphismCard>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Workflow */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            Creative Pipeline
          </h2>

          <GlassmorphismCard className="p-4 md:p-8">
            <VerticalTimeline animate={true} lineColor="#38bdf8">
              {workflow.map((step, index) => (
                <VerticalTimelineElement
                  key={step.step}
                  className="vertical-timeline-element--work"
                  date={`Step ${step.step}`}
                  contentStyle={{
                    background: "#060a14",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #060a14",
                  }}
                  iconStyle={{
                    background: iconMap[index]?.bg || "#38bdf8",
                    color: "#030408",
                  }}
                  icon={iconMap[index]?.icon || <Star size={20} />}
                >
                  <h3 className="vertical-timeline-element-title text-white text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </VerticalTimelineElement>
              ))}

              <VerticalTimelineElement
                iconStyle={{ background: "#a5f3fc", color: "#030408" }}
                icon={<Star size={20} />}
              />
            </VerticalTimeline>
          </GlassmorphismCard>
        </m.div>

        {/* CTA Section */}
        <CTASection
          title="Ready to Work Together?"
          description="Let's combine artistic vision, 2D/3D craft, and generative AI to bring your next motion project to life."
          buttonText="Start Your Project"
          href="/contact"
        />
      </div>
    </div>
  );
}
