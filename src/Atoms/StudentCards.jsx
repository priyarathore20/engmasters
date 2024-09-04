"use client";
import Image from "next/image";
import React, { useState } from "react";

const studentsCard = [
  {
    image: "/student1.png",
    name: "Kanika Singh",
    review:
      "I can speak English just because of Engmates. I love all hardworking teachers. Great facilities are there. Working environment is very fine. It helps me in exploring myself.",
  },
  {
    image: "/student2.png",
    name: "Naushad Malik",
    review:
      "I got to know about this institute through Google. Great institute, good environment, Best faculty and much more. Here you can get each & everything that you want. I personally believe that here I have improved a lot. I took some sessions from Head Trainer Ms. APARAJITA. She is simply amazing. Her way of teaching is phenomenal.",
  },
  {
    image: "/student3.png",
    name: "Ruchi Sejwal",
    review:
      "It was a great experience in Engmates. After completing the Public Speaking Course I have seen many changes in my personality. Now I am more confident. In this institute trainers are very much sportive and friendly. I have improved a lot. The fee is very reasonable here. Environment is very good and peaceful.",
  },
  {
    image: "/student4.png",
    name: "Davneet Kaur",
    review:
      "Superb course for learning and practicing communication skills in English language. In Engmates Institute I have learnt lots of things which helped me learn how to communicate with strangers. All the trainers are very friendly here. Big thanks to my trainer who always motivated and encouraged me.",
  },
  {
    image: "/student5.png",
    name: "Avneet Kaur",
    review:
      "I would suggest you join Engmates as it is the best English institute in Delhi. The staff and students are very positive and treat one another with respect. The 1st thing they told me was to be a little patient for the first week so that they can work on me. I was really happy to hear as they didn’t promise any shortcut.",
  },
  {
    image: "/student6.png",
    name: "Nitasha Arora",
    review:
      "Really want to thank the trainers of Engmates, especially Ms Aparajita ma’am who helped me improve. I used to hesitate a lot while speaking but now I am confident enough to handle things on my own. I have taken the Go Public course with Individual coaching that helped me to become more confident.Big Thank to Engmates Team...!!!",
  },
  {
    image: "/student7.png",
    name: "Dr. Umesh Naik",
    review:
      "I was always scared of public speaking. That's why I joined Engmates. I have been blown away by Engmates right from the first day. The whole atmosphere helped me improve my confidence.",
  },
  {
    image: "/student8.png",
    name: "Shubham Roy",
    review:
      "I got to know about this institute through Google. This is really a good institute for learning English. I had a great time here. It was a great journey with Engmates. I got individual attention.",
  },
  {
    image: "/student9.png",
    name: "Nirmala Pathak",
    review:
      "I started my journey with Engmates few months back. I am very happy and confident about the skills I have acquired so far. I am very thankful to the faculty for all the support and encouragement.",
  },
  {
    image: "/student10.png",
    name: "Visheta Sharma",
    review:
      "Engmates is the best platform for those people who want to learn English in a good manner. I joined this institute to remove my hesitation. If you want to speak English without any mistakes, you should join Engmates.",
  },
  {
    image: "/student11.png",
    name: "Harish Samant",
    review:
      "It was a great experience in Engmates. I learnt many things here. Staff is very co-operative. I have learnt so many things here like how to be confident, how to speak fluently, how to present oneself effectively and efficiently.",
  },
  {
    image: "/student12.png",
    name: "Abhishek Khurana",
    review:
      "Before joining this institute I was not very confident I have learnt a lot here. Today I am more confident and more positive. Whatever I am today is only because of Engmates. They really provide a great platform to improve your communication skills.",
  },
  {
    image: "/student13.png",
    name: "Jagjeevan Singh",
    review:
      "It was a great experience to be at Engmates. It was the best journey in terms of learning because the way of teaching is excellent here. I experienced a positive change in confidence and my mentality.",
  },
  {
    image: "/student14.png",
    name: "Aman Passi",
    review:
      "Engmates is the best English and public speaking institute in Delhi. My mentor helped me gain confidence & also guided me to improve my body language. Her guidance for Interview skills really made me ready for the future.",
  },
  {
    image: "/student15.png",
    name: "Anuradha",
    review:
      "I am Anuradha and I am from Qatar. I did the Public Speaking course in this institute and I really liked it because my trainer helped me to boost my confidence as when you start learning any language first you need confidence.",
  },
  {
    image: "/student16.png",
    name: "Shivam Pandey",
    review:
      "I found the best institute with the best teachers who taught me how to tackle the outer world with a good personality.. Engmates helped me to grab the opportunity for which I was planning.",
  },
  {
    image: "/student17.png",
    name: "Simran Tanwar",
    review:
      "The atmosphere is very good. The teachers have guided me very well. They helped me with every single problem of mine. My mentor’s guidance helped me learn a lot. I have successfully got a job at Wipro while doing the course.",
  },
  {
    image: "/student18.png",
    name: "Manisha Mishra",
    review:
      "I did my course from EngMates (Tilak Nagar). It was an amazing experience. I got information about this institute through Google. I must thank them for giving me such a nice platform to improve my communication skills along with a personality.",
  },
  {
    image: "/student19.png",
    name: "Asif Khan",
    review:
      "When I was planning to search for the best English spoken institute I found Engmates (Tilak Nagar). This institute provides effective training for students who want to master English for work, study and travel. They helped me improve my communication skills.",
  },
  {
    image: "/student20.png",
    name: "Nidhi Saxena",
    review:
      "This institute is a very good institute for learning English. I learned a lot from this institute. Engmates (Tilak Nagar) increased my confidence level as well. Teachers are also excellent. They trained us in a proper manner & in interesting ways.",
  },
];
const StudentSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

  // Calculate the total number of pages
  const totalPages = Math.ceil(studentsCard.length / cardsPerPage);

  // Get the cards for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = studentsCard.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => {
    // Only update state if the page number is different
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col flex-wrap justify-between items-center mt-7 w-full">
        {currentCards.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-5 border-gray-300 mb-6 p-4 border rounded-md w-full max-w-[475px]"
          >
            <div className="flex items-center gap-2">
              <Image
                src={item?.image}
                alt=""
                width={75}
                height={75}
                className="rounded-full"
              />
              <p className="font-semibold text-darkGray text-xl">
                {item?.name}
              </p>
            </div>
            <p className="text-[15px] text-center text-gray-700">
              {item?.review}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-2 ${
              currentPage === index + 1
                ? "bg-brown/75 text-white"
                : "text-gray-500 bg-gray-100"
            }  rounded-lg`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StudentSection;
