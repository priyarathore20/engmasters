"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const accordionData = [
  {
    question: "Can beginners join this course?",
    answer:
      "Yes, you can join our Go Smart course, specifically designed for beginners. We focus on weak English points and provide targeted improvements to help you build a strong foundation.",
  },
  {
    question: "Do you have batches for working professionals?",
    answer:
      "If you can't attend weekly classes, we offer weekend classes on Saturdays and Sundays. This flexibility ensures you don't miss out on valuable learning opportunities.",
  },
  {
    question: "What are other activities that you cover in this course?",
    answer:
      "Our course includes presentation skills, speech training, role plays, debates, confidence building, body language training, interview skills, and personality development. We also offer video sessions, pronunciation practice, and outdoor activities.",
  },
  {
    question: "What is the nearest metro station from your Institute?",
    answer:
      "The nearest metro station is Tilak Nagar, just a 1-minute walk from our institute. This convenient location makes it easy for students to reach us.",
  },
  {
    question: "Do you provide a certificate?",
    answer:
      "Yes, upon successful completion of the course, we provide a certificate. This certificate is a testament to your enhanced English proficiency and can be a valuable addition to your professional credentials.",
  },
  {
    question: "Do you provide study material?",
    answer:
      "Yes, we provide well-planned study materials to all students. Our materials are designed to support and enhance your learning experience, ensuring you have all the resources needed to succeed in the course.",
  },
  {
    question: "Do you provide hybrid classes?",
    answer:
      "Yes, we offer hybrid classes that combine online and in-person learning. This flexible approach allows you to benefit from both interactive classroom sessions and the convenience of online resources.",
  },
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-6">
      {accordionData.map((item, index) => (
        <div key={index} className="flex flex-col gap-5 shadow-md px-5 py-4 rounded-xl">
          <div
            className="flex justify-between items-center text-lg"
            onClick={() => handleToggle(index)}
          >
            <h3>{item.question}</h3>
            <span className="bg-gray-200 p-1 rounded-full">
              {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
