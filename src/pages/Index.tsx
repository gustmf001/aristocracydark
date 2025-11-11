import Hero from "@/components/Hero";
import WhatIsInside from "@/components/WhatIsInside";
import OrderBumps from "@/components/OrderBumps";
import BonusSection from "@/components/BonusSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhatIsInside />
      <OrderBumps />
      <BonusSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
