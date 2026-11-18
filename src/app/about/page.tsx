"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import CTASection from "@/components/CTASection";
import {
  Instagram,
  Linkedin,
  MapPin,
  Sparkles,
  Award,
  Layers,
  Zap,
  Quote,
} from "lucide-react";

const INSTAGRAM_URL =
  "https://www.instagram.com/nevodeeig?lqvp=ZDNlZDc0MzIxNw==";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/rishabh-mishra-1b8b11226?utm_source=share_via&utm_content=profile&utm_medium=member_android";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-32 pb-12 md:py-24 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="font-timecode text-xs uppercase tracking-[0.26em] text-cyan-300 block mb-3">
            itsRishabh · Motion Designer · 2D · 3D · AI
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-0 md:mt-4 mb-4 text-white tracking-tight">
            THE CREATIVE{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
              BEHIND THE FRAMES.
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            From pixels to possibilities—creating compelling motion through art,
            design, and AI.
          </p>
        </m.div>

        <BentoGrid className="max-w-6xl mx-auto mb-20">
          {/* 1. Creative Profile */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2"
          >
            <BentoGridItem
              title=""
              description=""
              header={
                <div className="relative w-full h-full min-h-[28rem] md:min-h-[18rem] rounded-xl overflow-hidden group-hover/bento:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/rishabh.jpg"
                    alt="Rishabh Mishra — Motion Designer & AI Visual Artist"
                    fill
                    priority
                    className="object-cover object-top transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/40 to-transparent opacity-95" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <m.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="font-display text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter"
                    >
                      RISHABH
                      <br />
                      <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
                        MISHRA
                      </span>
                    </m.div>
                    <div className="h-1 w-16 md:w-20 bg-cyan-300 mt-4 rounded-full" />
                    <p className="text-gray-300 mt-4 text-xs md:text-sm font-medium tracking-wide uppercase">
                      Motion Designer &amp; AI Visual Artist · 2D · 3D · AI
                    </p>
                  </div>
                </div>
              }
              className="h-full shadow-2xl shadow-cyan-900/10"
              icon={null}
            />
          </m.div>

          {/* 2. Disciplines */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <BentoGridItem
              title="Disciplines"
              description="Traditional craft meets emerging AI."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#050811] to-[#030408] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-cyan-300/35 transition-colors py-8 md:py-0">
                  <div className="absolute inset-0 bg-cyan-400/5 blur-3xl rounded-full" />
                  <span className="font-display text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-blue-300 z-10">
                    2D · 3D · AI
                  </span>
                  <div className="text-cyan-300/70 text-[11px] font-mono uppercase tracking-[0.2em] z-10 mt-2">
                    Animation · VFX · AI
                  </div>
                </div>
              }
              className="h-full"
              icon={<Layers className="h-4 w-4 text-cyan-300" />}
            />
          </m.div>

          {/* 3. Global Reach */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <BentoGridItem
              title="Global Collaborations"
              description="Global brands, studios & digital experiences."
              header={
                <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[#050811] overflow-hidden flex items-center justify-center border border-white/5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-400/10 flex items-center justify-center animate-pulse">
                      <MapPin className="text-cyan-300" size={30} />
                    </div>
                    <div className="mt-2 bg-cyan-400/15 backdrop-blur text-cyan-200 px-3 py-1 rounded text-xs font-bold border border-cyan-300/30">
                      WORLDWIDE
                    </div>
                  </div>
                </div>
              }
              className="h-full"
              icon={<MapPin className="h-4 w-4 text-cyan-300" />}
            />
          </m.div>

          {/* 4. Philosophy */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <BentoGridItem
              title="Philosophy"
              description="Human creativity + emerging technology."
              header={
                <div className="relative flex flex-1 w-full h-full min-h-[7rem] rounded-xl bg-gradient-to-br from-[#060912] to-[#030408] border border-white/5 p-6 items-center">
                  <Quote
                    className="text-cyan-300/10 absolute top-4 right-4"
                    size={44}
                  />
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed relative z-10 font-light">
                    &ldquo;I believe the future of visual storytelling
                    isn&apos;t about choosing between human creativity and AI.
                    It&apos;s about combining artistic vision, technical
                    expertise, and new technologies to create something
                    remarkable.&rdquo;
                  </p>
                </div>
              }
              className="h-full"
              icon={<Award className="h-4 w-4 text-cyan-300" />}
            />
          </m.div>

          {/* 5. Connect */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-1"
          >
            <BentoGridItem
              title="Connect"
              description="Instagram & LinkedIn"
              header={
                <div className="flex flex-1 h-full w-full items-center justify-center gap-5 px-6 bg-gradient-to-r from-[#050811] to-[#080d1a] rounded-xl border border-white/10 py-6 md:py-0 min-h-[6rem]">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-3.5 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-400/20 hover:border-cyan-300/40 hover:text-cyan-200 hover:scale-110 transition-all duration-300 text-white"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-3.5 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-400/20 hover:border-cyan-300/40 hover:text-cyan-200 hover:scale-110 transition-all duration-300 text-white"
                  >
                    <Linkedin size={22} />
                  </a>
                </div>
              }
              className="h-full"
              icon={<Zap className="h-4 w-4 text-cyan-300" />}
            />
          </m.div>
        </BentoGrid>

        {/* Full Story Card */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 rounded-3xl border border-white/10 bg-[#050811]/80 p-8 sm:p-12 space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed font-light"
        >
          <div className="inline-flex items-center gap-2 font-timecode text-xs uppercase tracking-[0.22em] text-cyan-300 mb-2">
            <Sparkles size={14} />
            Background &amp; Approach
          </div>
          <p>
            I&apos;m{" "}
            <span className="text-white font-medium">Rishabh Mishra</span>, a
            Motion Designer and AI Visual Artist with a background in 2D/3D
            animation, visual effects, and cinematic storytelling.
          </p>
          <p>
            My experience spans creative campaigns for global brands, animated
            film productions, and digital-first content.
          </p>
          <p>
            Beyond traditional production, I work extensively with generative AI
            models for video, image, and audio creation—integrating emerging
            technologies into professional creative workflows.
          </p>
        </m.div>

        <CTASection
          title="Ready to Work Together?"
          description="Creating motion graphics, 2D/3D animations, cinematic visuals, and AI-powered content for global brands, studios, and digital experiences."
          buttonText="Start Collaboration"
          href="/contact"
        />
      </div>
    </div>
  );
}
