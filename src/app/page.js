import Accordion from "@/Atoms/Accordion";
import AboutSection from "@/Molecules/AboutSection";
import BenefitSection from "@/Molecules/BenefitSection";
import ConsultationForm from "@/Molecules/ConsultationForm";
import CurriculumSection from "@/Molecules/CurriculumSection";
import FaqSection from "@/Molecules/FaqSection";
import Footer from "@/Molecules/Footer";
import Header from "@/Molecules/Header";
import IntroSection from "@/Molecules/IntroSection";
import LastSection from "@/Molecules/LastSection";
import ReviewSection from "@/Molecules/ReviewSection";
import TeacherSection from "@/Molecules/TeacherSection";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden mt-[90px] bg-bgGray">
      <Header />
      <IntroSection />
      <div className="flex gap-10 section-container">
        <div className="flex-[0.68] flex flex-col max-lg:items-center max-lg:flex-1">
          <AboutSection />
          <BenefitSection />
          <CurriculumSection />
          <TeacherSection />
          <ReviewSection />
          <FaqSection />
          <ConsultationForm />
          <LastSection />
        </div>
        <div className="w-16 flex-[0.32] h-28 hidden lg:block bg-black">card</div>
      </div>

      <Footer />
    </div>
  );
}
