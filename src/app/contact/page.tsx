"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { MapPin, Clock, Send, Loader2, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

const INSTAGRAM_URL =
  "https://www.instagram.com/nevodeeig?lqvp=ZDNlZDc0MzIxNw==";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/rishabh-mishra-1b8b11226?utm_source=share_via&utm_content=profile&utm_medium=member_android";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = ((formData.get("name") as string) || "").trim();
    const email = ((formData.get("email") as string) || "").trim();
    const message = ((formData.get("message") as string) || "").trim();
    const projectType = ((formData.get("project-type") as string) || "").trim();
    const timeline = ((formData.get("timeline") as string) || "").trim();
    const honeypot = ((formData.get("honeypot") as string) || "").trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!message || message.length < 30) {
      toast.error("Message should be at least 30 characters long.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          projectType,
          timeline,
          honeypot,
        }),
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-20 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/15 blur-[100px] rounded-full pointer-events-none" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-0 md:mt-16 mb-6 text-white tracking-[-0.03em] leading-[1.08] relative z-10">
            Get In <span className="text-white/50">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            Have a motion design, 2D/3D animation, or AI video project in mind?
            Let&apos;s collaborate and bring your vision to life.
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-12 justify-center items-start">
          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] mb-6 text-white">
                Connect Directly
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-400/15 border border-cyan-300/25 p-3 rounded-lg">
                    <Linkedin className="text-cyan-200" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-200 transition-colors"
                    >
                      Rishabh Mishra
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-400/15 border border-cyan-300/25 p-3 rounded-lg">
                    <Instagram className="text-cyan-200" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Instagram</p>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-200 transition-colors"
                    >
                      @nevodeeig
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-400/15 border border-cyan-300/25 p-3 rounded-lg">
                    <MapPin className="text-cyan-200" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Available Worldwide (Remote)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-400/15 border border-cyan-300/25 p-3 rounded-lg">
                    <Clock className="text-cyan-200" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Availability</p>
                    <p className="text-white">Flexible with global time zones</p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard className="p-8">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] mb-6 text-white">
                What I Can Do For You
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Motion Design & 2D/3D Animation",
                    desc: "Campaign visuals, kinetic typography, and studio-grade motion pipelines.",
                  },
                  {
                    title: "AI Video Production",
                    desc: "Integrating generative AI models for video, image, and audio into real workflows.",
                  },
                  {
                    title: "SaaS Explainers, Product Ads & 3D Lookdev",
                    desc: "High-impact commercial ads, educational stories, and atmospheric 3D lighting.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-3">
                    <div className="bg-cyan-300 w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-white">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassmorphismCard>
          </m.div>

          {/* Contact Form */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] mb-6 text-white">
                Send Message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="hidden" aria-hidden="true">
                  <input
                    id="honeypot"
                    name="honeypot"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm text-gray-400 mb-2 block font-medium"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 rounded-xl h-12"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm text-gray-400 mb-2 block font-medium"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 rounded-xl h-12"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="text-sm text-gray-400 mb-2 block font-medium"
                  >
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full bg-white/[0.03] border border-white/10 text-white rounded-xl px-4 py-3 h-12 appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400/50 transition-all custom-select"
                  >
                    <option value="" className="bg-[#050811] text-gray-400">
                      Select project type
                    </option>
                    <option value="motion-design" className="bg-[#050811]">
                      Motion Design
                    </option>
                    <option value="ai-video-production" className="bg-[#050811]">
                      AI Video Production
                    </option>
                    <option value="educational" className="bg-[#050811]">
                      Educational
                    </option>
                    <option value="saas-explainer" className="bg-[#050811]">
                      SaaS Explainer
                    </option>
                    <option value="product-ads" className="bg-[#050811]">
                      Product Ads
                    </option>
                    <option value="3d-look-development" className="bg-[#050811]">
                      3D Look Development
                    </option>
                    <option value="other" className="bg-[#050811]">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="text-sm text-gray-400 mb-2 block font-medium"
                  >
                    Timeline
                  </label>
                  <Input
                    id="timeline"
                    name="timeline"
                    type="text"
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 rounded-xl h-12"
                    placeholder="e.g., 1 week, 2–3 weeks, ASAP"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-400 mb-2 block font-medium"
                  >
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project, visual direction, and goals..."
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 rounded-xl resize-none p-4"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-cyan-50 disabled:opacity-60 disabled:cursor-not-allowed rounded-full h-14 text-base font-semibold shadow-[0_0_30px_rgba(56,189,248,0.22)] hover:shadow-[0_0_40px_rgba(56,189,248,0.38)] transition-all hover:scale-[1.02] cursor-pointer mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm text-center">
                  Prefer to connect directly? Message me on{" "}
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200"
                  >
                    LinkedIn
                  </a>{" "}
                  or{" "}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200"
                  >
                    Instagram
                  </a>
                  .
                </p>
              </div>
            </GlassmorphismCard>
          </m.div>
        </div>
      </div>
    </div>
  );
}
