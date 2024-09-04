import CurriculumTabs from "@/Atoms/Tabs";
import React from "react";

const CurriculumSection = () => {
  return (
    <section className="bg-bgGray">
      <div
        className="flex flex-col items-center scroll-m-20 pt-8 pb-8"
        id="Curriculum"
      >
        <div className="bg-white p-7 rounded-xl w-full max-w-[900px]">
          <h2 className="mb-7 font-semibold text-[40px] text-brown/55 text-center">
            Curriculum of the Course
          </h2>
          <CurriculumTabs />
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
