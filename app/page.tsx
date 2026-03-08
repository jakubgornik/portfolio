import { HomeSection } from "./content/home-section";
import { AboutMeSection } from "./content/about-section";
import { TechStackSection } from "./content/techstack-section";
import { ContactSection } from "./content/contact-section";
import { SocialLinks } from "./content/ui/social-links";
import { Navigation } from "./content/navigation.tsx";
import { ExperienceSection } from "./content/experience-section";
import { ProjectsSection } from "./content/projects-section";

export default function Home() {
  return (
    <>
      <Navigation />
      <HomeSection />
      <AboutMeSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <SocialLinks />
    </>
  );
}
