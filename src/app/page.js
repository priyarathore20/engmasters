import Accordion from "@/Atoms/Accordion";
import AboutSection from "@/Molecules/AboutSection";
import BenefitSection from "@/Molecules/BenefitSection";
import ConsultationForm from "@/Molecules/ConsultationForm";
import CurriculumSection from "@/Molecules/CurriculumSection";
import FaqSection from "@/Molecules/FaqSection";
import Footer from "@/Molecules/Footer";
import Header from "@/Molecules/Header";
import IntroSection from "@/Molecules/IntroSection";
import LastSection from "@/Molecules/Lastsection";
import ReviewSection from "@/Molecules/ReviewSection";
import TeacherSection from "@/Molecules/TeacherSection";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Header />
      <IntroSection />
      <AboutSection />
      <BenefitSection />
      <CurriculumSection />
      <TeacherSection />
      <ReviewSection />
      <FaqSection />
      <ConsultationForm />
      <LastSection />
      <Footer />
    </div>
  );
}
