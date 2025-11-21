import HeroKirvano from "@/components/HeroKirvano";
import WhatIsInside from "@/components/WhatIsInside";
import OrderBumps from "@/components/OrderBumps";
import BonusSection from "@/components/BonusSection";
import FinalCTAKirvano from "@/components/FinalCTAKirvano";
import Footer from "@/components/Footer";

const Kirvano = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroKirvano />
      <WhatIsInside />
      <OrderBumps />
      <BonusSection />
      <FinalCTAKirvano />
      <Footer />
    </div>
  );
};

export default Kirvano;
