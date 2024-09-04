import StudentSection from "@/Atoms/StudentCards";
import React from "react";

const ReviewSection = () => {
  return (
    <section className="bg-bgGray scroll-m-20 pt-8 w-full" id="Reviews">
      <div className="bg-white p-7 rounded-xl w-full max-w-[900px]">
        <h2 className="font-semibold text-[40px] text-brown/55 text-center">
          Students’ Success Stories
        </h2>
        <div>
          <StudentSection />
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
