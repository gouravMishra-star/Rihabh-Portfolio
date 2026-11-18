import { Suspense } from "react";
import Hero from "@/components/hero";
import SelectedWorks from "@/components/portfolio/selected-works";
import AboutSection from "@/components/portfolio/about-section";
import SkillsSection from "@/components/portfolio/skills-section";
import ExperienceSection from "@/components/portfolio/experience-section";
import ContactSection from "@/components/portfolio/contact-section";
import {
  getVideoCategoriesWithCountIncludingAll,
  getAllVideoProjectsFlattened,
  getClients,
} from "@/lib/helper";

export default function HomePage() {
  const categories = getVideoCategoriesWithCountIncludingAll();
  const allProjects = getAllVideoProjectsFlattened();
  const clients = getClients();

  return (
    <div className="min-h-screen relative overflow-x-clip">
      <Hero />

      <Suspense
        fallback={
          <div className="py-24 text-center font-timecode text-xs uppercase tracking-widest text-gray-500">
            Loading selected works...
          </div>
        }
      >
        <SelectedWorks
          initialCategories={categories}
          initialProjects={allProjects}
        />
      </Suspense>

      <AboutSection />

      <SkillsSection />

      <ExperienceSection clients={clients} projects={allProjects} />

      <ContactSection />
    </div>
  );
}
