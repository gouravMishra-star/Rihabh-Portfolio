"use client";

import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/nevodeeig?lqvp=ZDNlZDc0MzIxNw==",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rishabh-mishra-1b8b11226?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="glass-panel border-t border-white/10 mt-20 backdrop-blur-3xl bg-[#03050c]/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <h3 className="font-display text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
              itsRishabh
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              Motion Designer (2D · 3D · AI). From pixels to
              possibilities—creating compelling motion through art, design, and
              AI.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-timecode font-semibold text-cyan-200/80 tracking-[0.2em] uppercase text-[11px]">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-3.5 text-sm font-medium">
              <Link
                href="/"
                className="text-gray-400 hover:text-cyan-200 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-cyan-200 transition-colors"
              >
                About
              </Link>
              <Link
                href="/skills"
                className="text-gray-400 hover:text-cyan-200 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-cyan-200 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-5">
            <h4 className="font-timecode font-semibold text-cyan-200/80 tracking-[0.2em] uppercase text-[11px]">
              Connect
            </h4>
            <div className="flex space-x-3.5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={link.name}
                  >
                    <div className="p-3 rounded-full bg-white/[0.04] border border-white/10 group-hover:bg-cyan-400/15 group-hover:border-cyan-300/40 transition-all duration-300">
                      <Icon
                        size={18}
                        className="text-gray-400 group-hover:text-cyan-200 transition-colors"
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] mt-14 pt-8 text-center">
          <p className="font-timecode text-gray-500 text-xs tracking-wider">
            © {currentYear} Rishabh Mishra (itsRishabh). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
