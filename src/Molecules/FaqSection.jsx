import Accordion from "@/Atoms/Accordion";
import Image from "next/image";
import React from "react";

const FaqSection = () => {
  return (
    <section className="bg-bgGray">
      <div
        className="flex flex-col items-center scroll-m-24 py-8 w-full"
        id="FAQs"
      >
        <div className="bg-white p-7 rounded-xl w-full max-w-[900px]">
          <h2 className="mb-8 font-semibold text-[40px] text-brown/55 text-center">
            FAQs
          </h2>
          <Image
            src="/groupPicture.jpg"
            className="mb-10 rounded-xl"
            alt=""
            width={840}
            height={560}
          />
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
