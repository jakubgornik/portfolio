import Navigation from "./content/Navigation";
import SocialLinks from "./content/ui/SocialLinks";
import AboutMeSection from "./content/AboutMeSection";
import HomeSection from "./content/HomeSection";
import TechStackSection from "./content/TechStackSection";
import ContactSection from "./content/ContactSection";
import WorkExperienceSection from "./content/WorkExperienceSection";
import ProjectsSection from "./content/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <HomeSection />
      <AboutMeSection />
      <TechStackSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <ContactSection />
      <SocialLinks />
    </>
  );
}
