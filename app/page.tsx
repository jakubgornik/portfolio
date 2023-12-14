import Navigation from "./content/ui/Navigation";
import SocialLinks from "./content/ui/SocialLinks";
import AboutMeSection from "./content/AboutMeSection";
import HomeSection from "./content/HomeSection";
import TechStackSection from "./content/TechStackSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <HomeSection />
      <AboutMeSection />
      <TechStackSection />
      <SocialLinks />
    </>
  );
}
