"use client";
import Image from "next/image";
import React, { useState } from "react";

const teachersCard = [
  {
    image: "/teacher1.jpg",
    name: "Dr. Aparajita",
    bio: "A mentor, motivator & guide with a zest to impart priceless knowledge & skills to all the aspirants from different walks of life. She has been successfully spanning the field of education for 20 plus years, of fructiferous teaching & learning.As the Founder & C.E.O., of “ ENgmates”, she has crafted meticulously ,deep-rooted research based modules into various courses. Immersed in the latest Scientific break-through along with her passionate approach, she has enhanced her knowledge sphere by attending seminars, meet-ups, etc., related to, Physiology & Anatomy of The Brain, Gratitude, Spirituality, Happiness, Motivational Interviewing, Compassion, Focus, Therapy, etc., with future foregoes.With an inspirational Life-Makeover practice, she shares a rare fusion of a Transforming Expert & a Compassionate innovator.",
  },
  {
    image: "/teacher2.png",
    name: "Prerna Anand",
    bio: "A dedicated educator with over 12 years of enriching experience with us, she brings a wealth of knowledge and a passion for teaching English. With prior experience in esteemed institutions, she excels in fostering a positive and engaging learning environment. Her unwavering positive attitude towards life is her greatest strength, which she instills in her students. Her commitment to excellence and continuous self-improvement is evident in her ability to inspire and motivate learners from diverse backgrounds.For her, teaching is a lifelong vocation, characterized by dedication and passion.",
  },
  {
    image: "/teacher3.jpg",
    name: "Supreet Anand",
    bio: "A distinguished educator and mentor, she brings a wealth of knowledge and experience to aspiring learners from diverse backgrounds. With a robust career spanning over 15 years in teaching English, she has honed her expertise through stints at various esteemed institutes. Her educational journey, marked by a graduation degree, is complemented by her unwavering patience, determination, and optimism. A voracious reader with an insatiable curiosity, she continually expands her general knowledge. Her achievements are a testament to her dedication. She possesses the remarkable ability to teach effectively for extended periods, tackling the toughest yoga postures and breathing exercises with ease. For her, work is not just a duty but a form of worship, embodying a perfect blend of discipline and devotion.",
  },
];

const TeacherSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleViewMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-bgGray scroll-m-24 px-24 w-full" id="Benefits">
      <div className="bg-white p-7 rounded-xl w-full max-w-[900px]">
        <h2 className="mb-3 font-semibold text-[40px] text-brown/65 text-center">
          About the Teachers
        </h2>
        <div className="flex justify-between mt-7 w-full">
          {teachersCard.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-5 w-full max-w-64"
            >
              <Image
                src={item?.image}
                alt=""
                width={290}
                height={300}
                className="rounded-2xl"
              />
              <p className="font-medium text-2xl text-brown">{item?.name}</p>
              <p
                className={`whitespace-pre-wrap ${
                  expandedIndex === i ? "" : "line-clamp-[11]"
                }`}
              >
                {item?.bio}
              </p>
              <button
                onClick={() => toggleViewMore(i)}
                className="mt-2 text-blue-500 focus:outline-none"
              >
                {expandedIndex === i ? "View Less" : "View More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherSection;
