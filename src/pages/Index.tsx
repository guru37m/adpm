import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import PriceOffer from "@/components/PriceOffer";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import UrgencyPopup from "@/components/UrgencyPopup";
import { useUrgencyPopup } from "@/hooks/useUrgencyPopup";
import { useEffect } from "react";

const Index = () => {
  const { showPopup, closePopup } = useUrgencyPopup();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <PriceOffer />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      
      <Footer />
      
      <UrgencyPopup isOpen={showPopup} onClose={closePopup} />
    </>
  );
};

export default Index;
