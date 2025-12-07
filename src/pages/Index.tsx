import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import PlansCarousel from "@/components/PlansCarousel";
import TrainersSection from "@/components/TrainersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesCarousel />
        <PlansCarousel />
        <TrainersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
