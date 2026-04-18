import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ContactCTASection from "@/components/ContactCTASection";
import ServicesSection from "@/components/ServicesSection";
import MaterialProviders from "@/components/MaterialProviders"
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ContactCTASection />
      <ServicesSection />
      <MaterialProviders />
      <Footer />
    </div>
  );
};

export default Index;
