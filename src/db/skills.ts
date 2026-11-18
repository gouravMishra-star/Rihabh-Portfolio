import {
  Box,
  Cpu,
  Film,
  Layers,
  Palette,
  Scissors,
  Sparkles,
  Wand2,
} from "lucide-react";

export const videoEditingSkills = [
  {
    name: "After Effects",
    image_link: "/tools/Adobe_After_Effects_CC.png",
    shortCode: "Ae",
    icon: Sparkles,
    description:
      "2D/3D motion graphics, compositing, kinetic typography, and visual effects",
    color: "text-cyan-300",
  },
  {
    name: "Blender",
    image_link: "",
    shortCode: "BL",
    icon: Box,
    description:
      "3D animation, product rendering, lighting, shaders, and look development",
    color: "text-cyan-300",
  },
  {
    name: "Autodesk Maya",
    image_link: "",
    shortCode: "MA",
    icon: Layers,
    description:
      "3D modeling, character & camera animation, rigging, and studio VFX pipelines",
    color: "text-cyan-300",
  },
  {
    name: "Adobe Photoshop",
    image_link: "/tools/Adobe_Photoshop_CC.png",
    shortCode: "Ps",
    icon: Palette,
    description:
      "Styleframes, concept art, texture painting, matte design, and visual assets",
    color: "text-cyan-300",
  },
  {
    name: "Premiere Pro",
    image_link: "/tools/Adobe_Premiere_Pro_CC.png",
    shortCode: "Pr",
    icon: Scissors,
    description:
      "Cinematic editing, pacing, audio synchronization, and campaign mastering",
    color: "text-cyan-300",
  },
];

export const otherSoftwaresLearnt = [
  {
    name: "Houdini FX",
    category: "Procedural VFX & Simulations",
  },
  {
    name: "Adobe Substance Painter",
    category: "3D Texturing & Materials",
  },
  {
    name: "Adobe Animate",
    category: "2D Character & Vector Animation",
  },
  {
    name: "Katana",
    category: "Studio Lighting & Lookdev",
  },
  {
    name: "Clarisse",
    category: "Large-Scale Set Dressing & Rendering",
  },
];

export const specializations = [
  {
    title: "Motion Design",
    skills: [
      "2D & 3D Animation",
      "Kinetic Typography",
      "Brand Systems",
      "Title Sequences",
    ],
    icon: "✦",
    description:
      "Expressive motion design crafted for global brands, digital campaigns, and memorable visual identities.",
  },
  {
    title: "AI Video Production",
    skills: [
      "Generative Video",
      "AI Image & Concepting",
      "AI Audio Integration",
      "Hybrid VFX Workflows",
    ],
    icon: "◈",
    description:
      "Integrating generative AI models for video, image, and audio seamlessly into professional creative pipelines.",
  },
  {
    title: "Educational",
    skills: [
      "Visual Storytelling",
      "Animated Diagrams",
      "Clear Pacing",
      "Concept Breakdown",
    ],
    icon: "◉",
    description:
      "Transforming technical and complex subjects into engaging, crystal-clear animated visual stories.",
  },
  {
    title: "SaaS Explainer",
    skills: [
      "UI Animation",
      "Product Storytelling",
      "Feature Launches",
      "Conversion Pacing",
    ],
    icon: "⬡",
    description:
      "Sleek software and platform explainers designed to communicate product value in seconds.",
  },
  {
    title: "Product Ads",
    skills: [
      "Commercial Spots",
      "3D Product Reveals",
      "Social Campaigns",
      "High-Impact Hooks",
    ],
    icon: "◆",
    description:
      "Scroll-stopping commercial ads engineered to elevate product perception and drive attention.",
  },
  {
    title: "3D Look Development",
    skills: [
      "Lighting & Shading",
      "Material Craft",
      "Photoreal & Stylized Renders",
      "Cinematic Compositing",
    ],
    icon: "❖",
    description:
      "Sculpting light, texture, and atmosphere in Blender, Maya, Katana, and Substance Painter for film-grade frames.",
  },
];

export const achievements = [
  {
    title: "2D · 3D · AI Pipeline",
    description:
      "Combining traditional animation craft with modern generative AI workflows for video, image, and audio.",
    icon: Cpu,
    color: "text-cyan-300",
  },
  {
    title: "Global Brand Campaigns",
    description:
      "Visual storytelling across commercial product launches, digital-first campaigns, and brand narratives.",
    icon: Film,
    color: "text-cyan-300",
  },
  {
    title: "Animated Film & VFX",
    description:
      "Background spanning 2D/3D animation, visual effects, lighting, and studio look development.",
    icon: Sparkles,
    color: "text-cyan-300",
  },
  {
    title: "Creative Direction",
    description:
      "From styleframes and storyboards to final composited masters built for visual impact.",
    icon: Wand2,
    color: "text-cyan-300",
  },
];

export const workflow = [
  {
    step: "01",
    title: "Concept & Direction",
    description:
      "Defining the visual language, references, narrative beat sheet, and creative direction.",
  },
  {
    step: "02",
    title: "Styleframes & AI Exploration",
    description:
      "Rapidly prototyping mood, lighting, and visual worlds through design and generative AI tools.",
  },
  {
    step: "03",
    title: "2D / 3D Production",
    description:
      "Building scenes, motion rigs, animations, and 3D assets across After Effects, Blender, and Maya.",
  },
  {
    step: "04",
    title: "Lookdev & Compositing",
    description:
      "Refining shaders, lighting, atmosphere, visual effects, and seamless multi-pass composites.",
  },
  {
    step: "05",
    title: "Edit, Sound & Polish",
    description:
      "Tightening rhythm, audio design, and final finishing touches in Premiere Pro.",
  },
  {
    step: "06",
    title: "Master Delivery",
    description:
      "Exporting high-bitrate, platform-ready deliverables built to stand out everywhere.",
  },
];
