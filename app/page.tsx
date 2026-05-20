import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ProjectsSection } from "@/components/projects-section";
import { TechStackSection } from "@/components/tech-stack-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <ProjectsSection />
      <TechStackSection />
    </>
  );
}
