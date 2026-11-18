"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { Play, X, ArrowUpRight } from "lucide-react";
import SpotlightCard from "@/components/cinema/spotlight-card";
import { VideoProject } from "@/types/videos";

interface ProjectCardProps {
  project: VideoProject;
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({
  project,
  featured = false,
  index,
}: ProjectCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    `https://img.youtube.com/vi/${project.cover_image}/maxresdefault.jpg`
  );
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setThumbSrc(
      `https://img.youtube.com/vi/${project.cover_image}/maxresdefault.jpg`
    );
  }, [project.cover_image]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsPlaying(false);
      }
    };

    if (isPlaying) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPlaying]);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsPlaying(true);
  };

  const handleStopClick = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    e?.preventDefault();
    setIsPlaying(false);
  };

  const year = new Date(project.publish_date).getFullYear();

  return (
    <div ref={cardRef} className="h-full">
      <SpotlightCard
        spotlightColor="rgba(56, 189, 248, 0.16)"
        className="h-full group/card flex flex-col bg-[#050811]/90 border-white/[0.08] hover:border-cyan-300/25 hover:shadow-[0_24px_70px_rgba(0,0,0,0.75)]"
      >
        <div className="flex flex-col h-full p-3.5 sm:p-4">
          {/* Media Preview Container */}
          <div
            className={`relative overflow-hidden rounded-2xl mb-5 bg-black border border-white/[0.08] isolate ${
              featured ? "aspect-[16/9]" : "aspect-video"
            }`}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <m.div
                  key="video-player"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 z-20"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${project.cover_image}?autoplay=1&rel=0&modestbranding=1`}
                    title={project.video_title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                  <button
                    type="button"
                    onClick={handleStopClick}
                    className="absolute top-3 right-3 bg-black/80 hover:bg-white hover:text-black text-white p-2 rounded-full border border-white/20 backdrop-blur-md transition-colors z-30 cursor-pointer"
                    aria-label="Close video preview"
                  >
                    <X size={15} />
                  </button>
                </m.div>
              ) : (
                <div
                  key="thumbnail"
                  role="button"
                  tabIndex={0}
                  onClick={handlePlayClick}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsPlaying(true);
                    }
                  }}
                  aria-label={`Play ${project.video_title}`}
                  className="relative w-full h-full cursor-pointer group/thumb focus-visible:outline-none"
                >
                  <Image
                    src={thumbSrc}
                    alt={project.video_title}
                    fill
                    onError={() => {
                      if (thumbSrc.includes("maxresdefault")) {
                        setThumbSrc(
                          `https://img.youtube.com/vi/${project.cover_image}/hqdefault.jpg`
                        );
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.06]"
                    sizes={
                      featured
                        ? "(max-width: 1024px) 100vw, 60vw"
                        : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    }
                  />

                  {/* Subtle cinematic gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20 transition-opacity duration-500 group-hover/card:via-black/25" />

                  {/* Index & Software Pill Top-Left */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    {typeof index === "number" && (
                      <span className="rounded-full border border-white/15 bg-black/65 px-2.5 py-0.5 font-timecode text-[10px] text-white/80 backdrop-blur-md">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                    {project.software_used && project.software_used.length > 0 && (
                      <span className="rounded-full border border-white/15 bg-black/65 px-2.5 py-0.5 font-timecode text-[10px] text-gray-200 backdrop-blur-md">
                        {project.software_used[0]}
                      </span>
                    )}
                  </div>

                  {/* Duration Top-Right */}
                  {project.duration && (
                    <div className="absolute top-3.5 right-3.5 rounded-full border border-white/15 bg-black/70 px-2.5 py-0.5 font-timecode text-[10px] text-white/90 backdrop-blur-md">
                      {project.duration}
                    </div>
                  )}

                  {/* Center Optical Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-xl transition-all duration-400 scale-90 opacity-85 group-hover/card:scale-105 group-hover/card:opacity-100 group-hover/card:bg-white group-hover/card:text-black shadow-2xl">
                      <Play className="ml-0.5 fill-current" size={20} />
                    </div>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Editorial Project Metadata */}
          <div className="flex-1 flex flex-col px-1.5 pb-1">
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <div className="flex flex-wrap gap-1.5">
                {project.category.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="font-timecode text-[10px] uppercase tracking-[0.14em] text-cyan-300/90"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <span className="font-timecode text-[10px] text-gray-500">
                {year}
              </span>
            </div>

            <Link
              href={`/project/${project.id}`}
              className="group/title block mb-2"
            >
              <h3
                className={`font-semibold tracking-[-0.02em] text-white transition-all duration-300 group-hover/title:text-cyan-200 group-hover/title:translate-x-0.5 line-clamp-2 leading-snug ${
                  featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                }`}
              >
                {project.video_title}
              </h3>
            </Link>

            {project.video_description && (
              <p
                className={`text-gray-400 font-light leading-relaxed mb-5 ${
                  featured
                    ? "text-sm sm:text-base line-clamp-2 max-w-2xl"
                    : "text-xs sm:text-sm line-clamp-2"
                }`}
              >
                {project.video_description}
              </p>
            )}

            {/* Client & Case Study Row */}
            <div className="mt-auto pt-4 border-t border-white/[0.07] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative w-7 h-7 shrink-0 rounded-full overflow-hidden border border-cyan-300/25 bg-cyan-400/10 flex items-center justify-center">
                  {project.client_image ? (
                    <Image
                      src={project.client_image}
                      alt={project.client_name}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain rounded-full p-0.5"
                    />
                  ) : (
                    <span className="font-timecode text-[9px] font-bold text-cyan-200 uppercase">
                      {project.client_name.slice(0, 3)}
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium text-gray-300 truncate">
                  {project.client_name}
                </span>
              </div>

              <Link
                href={`/project/${project.id}`}
                className="group/link inline-flex items-center gap-1.5 font-timecode text-[11px] uppercase tracking-wider text-gray-300 hover:text-white transition-colors shrink-0"
              >
                <span>View Case</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
