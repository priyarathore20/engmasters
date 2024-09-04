import ConsultCard from "@/Atoms/ConsultCard";
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
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="relative bg-bgGray mt-[90px] w-full overflow-x-hidden">
      <Header />
      <IntroSection />
      <div className="flex gap-10 section-container">
        <div className="flex flex-col flex-[0.68] max-lg:flex-1 max-lg:items-center">
          <AboutSection />
          <BenefitSection />
          <CurriculumSection />
          <TeacherSection />
          <ReviewSection />
          <FaqSection />
          <ConsultationForm />
          <LastSection />
        </div>
        <div className="lg:block flex-[0.32] hidden w-16 h-28">
          <ConsultCard />
        </div>
      </div>
      <div className="right-10 bottom-10 z-50 fixed lg:flex items-center hidden cursor-pointer">
        <span className="bg-gray-200 px-2 py-1 rounded-[20px] text-textGray">
          Contact for free consultation
        </span>
        <Image src="/whatsapp.webp" alt="" width={70} height={70} />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
