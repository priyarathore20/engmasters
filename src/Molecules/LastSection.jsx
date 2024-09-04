import Image from "next/image";
import React from "react";

const infoCard = [
  {
    image: "/lastCard1.png",
    title: "For Working Professionals",
    description:
      "Our course helps working professionals enhance their communication skills, boost career prospects, and confidently interact in meetings, presentations, and professional settings. Gain the language proficiency needed to excel in your job and achieve career growth.",
  },
  {
    image: "/lastCard2.png",
    title: "For Homemakers",
    description:
      "Homemakers can improve their English to better engage in social activities, support their children’s education, and build self-confidence. Our course empowers you to communicate effectively in daily life and participate more actively in community and family activities.",
  },
  {
    image: "/lastCard3.png",
    title: "For College graduates",
    description:
      "Prepare for job interviews, excel in your career, and develop strong interpersonal skills with our course. College graduates can gain the language skills needed for professional success and seamless transition into the workforce, enhancing both career and personal growth.",
  },
  {
    image: "/lastCard4.png",
    title: "For Entrepreneurs & Business",
    description:
      "Entrepreneurs and business owners can benefit from improved language skills to communicate effectively, expand their business network and engage with international clients helping you articulate ideas clearly, negotiate better and grow your business globally.",
  },
];

const LastSection = () => {
  return (
    <section className="bg-bgGray py-8 w-full">
      <div className="bg-white p-7 rounded-xl w-full max-w-[900px]">
        <h2 className="mb-8 font-semibold text-[40px] text-brown/55 text-left">
          Who is this for?
        </h2>
        <div className="gap-5 grid grid-cols-2">
          {infoCard.map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <Image src={item?.image} alt="" width={50} height={50} />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl">{item?.title}</h3>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastSection;
