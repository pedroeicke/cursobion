import HeroSection from "@/components/HeroSection";
import SalesPitchSection from "@/components/SalesPitchSection";
import ForWhomSection from "@/components/ForWhomSection";
import WhatYouLearnSection from "@/components/WhatYouLearnSection";
import ModuleCarousel from "@/components/ModuleCarousel";
import InstructorSection from "@/components/InstructorSection";
import WhySection from "@/components/WhySection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadFaqSection from "@/components/LeadFaqSection";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import WhatsappButton from "@/components/WhatsappButton";
import CanvasParticles from "@/components/CanvasParticles";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CanvasParticles />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Sales pitch — texto de vendas completo */}
      <SalesPitchSection />

      {/* 3. For whom — card grid */}
      <ForWhomSection />

      {/* 4. What you'll learn — video + topics */}
      <WhatYouLearnSection />

      {/* 5. Module carousel */}
      <ModuleCarousel />

      {/* 6. Instructor */}
      <InstructorSection />

      {/* 7. Differentials */}
      <WhySection />

      {/* 8. Pricing + Guarantee */}
      <PricingSection />

      {/* 9. Testimonials */}
      <TestimonialsSection />

      {/* 10. Lead capture + FAQ */}
      <LeadFaqSection />

      {/* 11. Footer */}
      <Footer />

      {/* Fixed elements */}
      <StickyBar />
      <WhatsappButton />
    </main>
  );
}
