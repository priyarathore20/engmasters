import Image from "next/image";
import React from "react";

const benefitCards = [
  { image: "/benefit1.png", description: "Learn Grammar & Vocabulary tips" },
  { image: "/benefit2.png", description: "Communicate more Confidently" },
  { image: "/benefit3.png", description: "Experience Personal Development" },
  {
    image: "/benefit4.png",
    description: "Understand interviews’ Do’s & Don’ts",
  },
];

const BenefitSection = () => {
  return (
        <div className="bg-bgGray scroll-m-24 px-24 w-full" id="Benefits">
    <div className="bg-white p-7 rounded-xl w-full max-w-[900px]">
        <h2 className="font-semibold text-[40px] text-brown/55 text-center">
          Benefits You Will Gain
        </h2>
        <div className="grid grid-cols-2 my-7">
          {benefitCards.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={item?.image}
                alt=""
                width={400}
                height={350}
                className="scale-100 hover:scale-105 transition-all ease-linear"
              />
              <p className="text-darkGray text-lg">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
