import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SubcribeSection from "@/components/SubscribeSection";
import BrushCanvas from "@/components/BrushCanvas";
import InstagramComponent from "@/components/InstagramComponent";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <InstagramComponent />
      <ProjectsSection />
      <SubcribeSection />
    </main>
  );
}
