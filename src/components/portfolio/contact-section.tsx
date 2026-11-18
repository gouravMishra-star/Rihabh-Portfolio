"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import MagneticButton from "@/components/magnetic-button";

const SOCIALS = [
  {
    name: "Instagram",
    handle: "@nevodeeig",
    href: "https://www.instagram.com/nevodeeig?lqvp=ZDNlZDc0MzIxNw==",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    handle: "Rishabh Mishra",
    href: "https://www.linkedin.com/in/rishabh-mishra-1b8b11226?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: Linkedin,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.25rem] border border-white/12 bg-[#050811] p-8 sm:p-14 lg:p-20"
        >
          {/* Ambient Hero-Matched Ice-Cyan & Arctic Blue Glow */}
          <div className="pointer-events-none absolute -top-32 right-0 w-[520px] h-[420px] rounded-full bg-cyan-400/12 blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-32 left-0 w-[420px] h-[360px] rounded-full bg-blue-400/10 blur-[130px]" />
          <div className="cinema-grain pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="font-timecode text-xs uppercase tracking-[0.26em] text-cyan-300 block mb-5">
                05 / Contact
              </span>

              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[0.98] mb-6">
                Have a project in mind?{" "}
                <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
                  Let&apos;s collaborate.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-400 font-light leading-relaxed max-w-xl mb-10">
                Available for motion design, 2D/3D animation, AI video
                production, SaaS explainers, product ads, and 3D look
                development for global brands and studios.
              </p>

              {/* Direct Social Cards */}
              <div className="flex flex-wrap items-center gap-3.5">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-3.5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/45 hover:bg-cyan-400/10"
                    >
                      <Icon
                        size={18}
                        className="text-cyan-300 transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="text-left">
                        <span className="block font-timecode text-[10px] uppercase tracking-wider text-gray-400">
                          {social.name}
                        </span>
                        <span className="block text-sm font-medium text-white group-hover:text-cyan-200 transition-colors">
                          {social.handle}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col lg:items-end justify-end">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-9 py-4.5 text-base font-bold text-black transition-all duration-300 hover:bg-cyan-50 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(56,189,248,0.35)]"
                >
                  <span>Start a Project</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
