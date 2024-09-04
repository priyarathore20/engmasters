import Image from "next/image";
import React from "react";

const aboutCards = [
  {
    href: "/card1.png",
    title: "Batches start",
    subtitle1: "Every Monday",
    subtitle2: "of the week",
  },
  {
    href: "/card2.png",
    title: "Batch Timings",
    subtitle1: "1.5 Hrs / Mon-Fri",
    subtitle2: "3 Hrs / saturday",
  },
  {
    href: "/card3.png",
    title: "Duration of the Course",
    subtitle1: "3 Months",
    subtitle2: "4 Months",
  },
  {
    href: "/card4.png",
    title: "Our Course Offerings",
    subtitle1: "Basic / Advance",
    subtitle2: "Public Speaking",
  },
];

const benefitCards = [
  {
    image: "/benefitCard1.png",
    heading: "1. Training according to students understanding",
    description:
      "Our courses are customized to match each student's learning pace, ensuring effective understanding and progress in English speaking skills.",
  },
  {
    image: "/benefitCard2.png",
    heading: "2. Well planned study material for students",
    description:
      "We provide meticulously planned study materials to enhance learning efficiency and retention, helping students master English effortlessly.",
  },
  {
    image: "/benefitCard3.png",
    heading: "3. Regular performance monitoring tests",
    description:
      "Regular assessments are conducted to monitor progress, identify areas of improvement, and ensure consistent advancement in English proficiency.",
  },
  {
    image: "/benefitCard4.png",
    heading: "4. Result-oriented, proven practices",
    description:
      "We implement strategic, result-driven plans tailored to achieve the best outcomes, ensuring students reach their English speaking goals.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-bgGray">
      <div className="flex flex-col items-start pt-[60px] pb-8">
        {/*-------Batch Cards section-------*/}
        <div className="gap-5 grid grid-cols-2 xl:grid-cols-4 w-full">
          {aboutCards.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white p-5 rounded-xl w-full"
            >
              <Image src={item?.href} alt="" width={50} height={50} />
              <div className="flex flex-col items-center bg-white">
                <p className="mt-2 mb-1 w-full max-w-24 text-center">
                  {item?.title}
                </p>
                <p className="text-orange">{item?.subtitle1}</p>
                <p className="text-orange">{item?.subtitle2}</p>
              </div>
            </div>
          ))}
        </div>

        {/*-------Why Choose us section-------*/}
        <div className="bg-white mt-7 p-7 rounded-xl w-full max-w-[900px]">
          <h2 className="font-semibold text-[40px] text-brown/55">
            Why Choose Us?
          </h2>
          <div className="flex flex-col gap-9 my-7">
            {benefitCards.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 shadow-md py-3 pr-8 rounded-xl"
              >
                <Image src={item?.image} alt="" width={175} height={140} />
                <div className="flex flex-col gap-2">
                  <h4 className="text-darkGray text-xl">{item?.heading}</h4>
                  <p className="text-lg">{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
