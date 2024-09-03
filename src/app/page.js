import AboutSection from "@/Molecules/AboutSection";
import BenefitSection from "@/Molecules/BenefitSection";
import Header from "@/Molecules/Header";
import IntroSection from "@/Molecules/IntroSection";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Header />
      <IntroSection />
      <AboutSection />
      <BenefitSection />
    </div>
  );
}
