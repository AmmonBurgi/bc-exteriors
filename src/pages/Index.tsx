import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ProjectCategories from "@/components/ProjectCategories";
import ServicesSection from "@/components/ServicesSection";
import SubcontractorsSection from "@/components/SubcontractorsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSlider />
    <AboutSection />
    <ProjectCategories />
    <ServicesSection />
    <SubcontractorsSection />
    <Footer />
  </div>
);

export default Index;
