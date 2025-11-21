import HeroSunize from "@/components/HeroSunize";
import WhatIsInside from "@/components/WhatIsInside";
import OrderBumps from "@/components/OrderBumps";
import BonusSection from "@/components/BonusSection";
import FinalCTASunize from "@/components/FinalCTASunize";
import Footer from "@/components/Footer";

const Sunize = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSunize />
      <WhatIsInside />
      <OrderBumps />
      <BonusSection />
      <FinalCTASunize />
      <Footer />
    </div>
  );
};

export default Sunize;
