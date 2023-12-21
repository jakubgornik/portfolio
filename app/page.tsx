import Navigation from "./content/Navigation";
import SocialLinks from "./content/ui/SocialLinks";
import AboutMeSection from "./content/AboutMeSection";
import HomeSection from "./content/HomeSection";
import TechStackSection from "./content/TechStackSection";
import ContactSection from "./content/ContactSection";
import WorkExperienceSection from "./content/WorkExperienceSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <HomeSection />
      <AboutMeSection />
      <TechStackSection />
      <WorkExperienceSection />
      <ContactSection />
      <SocialLinks />
    </>
  );
}
