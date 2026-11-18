import React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";
import FramerLazyMotion from "@/components/framer-lazy-motion";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "itsRishabh — Rishabh Mishra | Motion Designer (2D · 3D · AI)",
    template: "%s | itsRishabh",
  },
  description:
    "From pixels to possibilities—creating compelling motion through art, design, and AI. Portfolio of Rishabh Mishra, Motion Designer and AI Visual Artist specializing in 2D/3D animation, VFX, and AI video production.",
  keywords: [
    "Rishabh Mishra",
    "itsRishabh",
    "Motion Designer",
    "AI Visual Artist",
    "2D Animation",
    "3D Animation",
    "AI Video Production",
    "SaaS Explainer",
    "Product Ads",
    "3D Look Development",
    "After Effects",
    "Blender",
    "Autodesk Maya",
    "Premiere Pro",
    "Houdini FX",
  ],
  authors: [{ name: "Rishabh Mishra" }],
  creator: "Rishabh Mishra",
  publisher: "Rishabh Mishra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "itsRishabh — Rishabh Mishra | Motion Designer (2D · 3D · AI)",
    description:
      "Creating motion graphics, 2D/3D animations, cinematic visuals, and AI-powered content for global brands, studios, and digital experiences.",
    siteName: "itsRishabh Portfolio",
    images: [
      {
        url: "/cinema/hero-cinema-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Rishabh Mishra — Motion Designer (2D · 3D · AI)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "itsRishabh — Rishabh Mishra | Motion Designer (2D · 3D · AI)",
    description:
      "From pixels to possibilities—creating compelling motion through art, design, and AI.",
    images: ["/cinema/hero-cinema-bg.jpg"],
  },
  category: "Motion Design & AI Visual Art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#030408" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rishabh Mishra",
              alternateName: "itsRishabh",
              image: "/cinema/hero-cinema-bg.jpg",
              sameAs: [
                "https://www.instagram.com/nevodeeig?lqvp=ZDNlZDc0MzIxNw==",
                "https://www.linkedin.com/in/rishabh-mishra-1b8b11226?utm_source=share_via&utm_content=profile&utm_medium=member_android",
              ],
              jobTitle: "Motion Designer & AI Visual Artist",
              knowsAbout: [
                "Motion Design",
                "2D Animation",
                "3D Animation",
                "AI Video Production",
                "3D Look Development",
                "SaaS Explainer",
                "Product Ads",
                "After Effects",
                "Blender",
                "Autodesk Maya",
                "Adobe Photoshop",
                "Premiere Pro",
                "Houdini FX",
                "Adobe Substance Painter",
                "Adobe Animate",
                "Katana",
                "Clarisse",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} ${inter.variable} ${syne.variable} ${jetbrainsMono.variable} min-h-screen text-white antialiased`}
        style={{
          background: "#030408",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <FramerLazyMotion>
              <MouseMoveEffect />
              <Navbar />
              <main className="">{children}</main>
              <Footer />
              <JumpToTop />
              <Toaster position="top-center" />
            </FramerLazyMotion>
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
