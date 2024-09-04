"use client";
import React, { useState } from "react";

const curriculumTabs = [
  {
    label: "Go Smart",
    content: [
      {
        day: "Day 1",
        dayName: "Mon",
        title: "Basic Grammar Lessons",
        description:
          "Every monday, we consistently focus on basic grammar lessons. These sessions ensure you have a solid grasp of essential grammar rules and sentence structures, crucial for effective communication.",
      },
      {
        day: "Day 2",
        dayName: "Tue",
        title: "Role Play & Debate Sessions",
        description:
          "Regular role play and debate sessions are a key part of our curriculum. These interactive activities help you practice real-life conversations and articulate your thoughts clearly, boosting your speaking confidence.",
      },
      {
        day: "Day 3",
        dayName: "Wed",
        title: "Situation Speaking Acts",
        description:
          "We include frequent situation speaking acts to improve your fluency and adaptability. These exercises simulate everyday scenarios, allowing you to respond effectively and naturally in English.",
      },
      {
        day: "Day 4",
        dayName: "Thu",
        title: "Pronunciation & Vocabulary",
        description:
          "Our course emphasizes improving your pronunciation and expanding your vocabulary. Targeted lessons help you articulate words correctly and enrich your language with new and useful terms.",
      },
      {
        day: "Day 5",
        dayName: "Fri",
        title: "Picture description & Storytelling",
        description:
          "Boost creativity and communication with picture description and storytelling activities. Learn to articulate thoughts vividly, making your spoken English engaging and expressive.",
      },
    ],
  },
  {
    label: "Go Classic",
    content: [
      {
        day: "Day 1",
        dayName: "Mon",
        title: "Grammar & Vocabulary Tips",
        description:
          "Our course offers advanced grammar and vocabulary tips, designed to refine your language skills. Learn complex grammar rules and enhance your vocabulary to express yourself more precisely and effectively.",
      },
      {
        day: "Day 2",
        dayName: "Tue",
        title: "Intense Debate Sessions",
        description:
          "Engage in intense debate sessions that challenge critical thinking and articulation, enhancing confidence and eloquence in presenting and defending viewpoints.",
      },
      {
        day: "Day 3",
        dayName: "Wed",
        title: "Basic Interview Tips",
        description:
          "Gain essential interview tips regularly throughout the course. We provide guidance on common interview questions and effective responses to help you make a positive impression in job opportunities.",
      },
      {
        day: "Day 4",
        dayName: "Thu",
        title: "Quick Speaking Activities",
        description:
          "Practice spontaneous conversations to develop clear and expressive language by participating in interactive sessions designed for effective learning and rapid improvement.",
      },
      {
        day: "Day 5",
        dayName: "Fri",
        title: "Group Discussion on Current Topics",
        description:
          "Participate in group discussion activities to enhance your public speaking and teamwork skills. Learn to lead discussions, manage group dynamics, and present your ideas clearly and confidently.",
      },
    ],
  },
  {
    label: "Go Public",
    content: [
      {
        day: "Day 1",
        dayName: "Mon",
        title: "Grammar & Vocabulary Tips",
        description:
          "The Go Public course offers advanced grammar and vocabulary tips, elevating your language skills to a professional level. Communicate with precision and sophistication.",
      },
      {
        day: "Day 2",
        dayName: "Tue",
        title: "Personality Development Acts",
        description:
          "Transform your presence with personality development acts. Overcome stage fright, master body language, and enhance your confidence, ensuring you stand out in any setting.",
      },
      {
        day: "Day 3",
        dayName: "Wed",
        title: "Interview Do’s & Don’ts",
        description:
          "Master detailed interview do’s and don’ts, including practical mock interviews, to expertly navigate complex scenarios. Craft compelling responses and present yourself as the ideal and confident candidate.",
      },
      {
        day: "Day 4",
        dayName: "Thu",
        title: "Presentation & Podium Sessions",
        description:
          "Excel in presentation and podium sessions designed for high-level public speaking. Develop skills for captivating and influencing any audience with confidence and flair.",
      },
      {
        day: "Day 5",
        dayName: "Fri",
        title: "Anchoring & Discussions",
        description:
          "Engage in advanced anchoring and discussions to refine your public speaking and leadership abilities. Lead discussions, manage viewpoints, and articulate ideas with authority and eloquence.",
      },
    ],
  },
];

const CurriculumTabs = () => {
  const [activeTab, setActiveTab] = useState(curriculumTabs[0].label);

  const handleTabClick = (label) => {
    setActiveTab(activeTab === label ? null : label);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-5 mb-10">
        {curriculumTabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleTabClick(tab.label)}
            className={`font-medium pb-1 text-xl${
              activeTab === tab.label
                ? "text-brown/75 border-b-[3px] text-xl border-brown/75"
                : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {curriculumTabs.map((tab) =>
        activeTab === tab.label ? (
          <div key={tab.label} className="flex justify-between w-full">
            <div className="flex flex-col gap-5">
              {tab.content.map((item, index) => (
                <div key={index} className="flex items-center lg:gap-5">
                  <div className="flex flex-col justify-center items-center gap-1 bg-bgGray/55 rounded-l-[20px] lg:rounded-[20px] w-full max-w-44 h-full">
                    <p className="font-medium text-brown/45 text-xl">
                      {item.day}
                    </p>
                    <p className="text-lg text-textGray">{item.dayName}</p>
                  </div>
                  <div className="bg-bgGray/55 p-4 rounded-r-[20px] lg:rounded-[20px]">
                    <h2 className="font-bold text-lg">{item.title}</h2>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default CurriculumTabs;
