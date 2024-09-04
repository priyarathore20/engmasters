import React from "react";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { TbCoinRupee } from "react-icons/tb";
import Button from "./Button";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";

const checks = [
  "Speak English Confidently",
  "Improve Body Language",
  "Enhance Career and More",
];

const ConsultCard = () => {
  return (
    <div className="lg:block top-24 fixed hidden bg-white px-5 py-6 rounded-[20px]">
      <div>
        <h2 className="mb-3 font-bold text-2xl text-orange">
          English Speaking Course{" "}
        </h2>
      </div>
      <div className="flex flex-col items-start gap-2 text-sm text-textGray">
        <div className="flex justify-start items-center gap-1.5">
          <CiCalendar />
          <p>3 Months</p>
        </div>
        <div className="flex justify-start items-center gap-1.5">
          <CiClock2 />
          <p>1.5 Hrs / 5 Days </p>
        </div>
        <div className="flex justify-start items-center gap-1.5">
          <TbCoinRupee />
          <p>Free Consultation Available!</p>
        </div>
      </div>
      <div>
        <Button
          label={"Get Free Consultation"}
          classname={
            "bg-gradient-to-r from-yellow to-orange font-medium text-white my-4"
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        {checks.map((item, i) => (
          <div
            key={i}
            className="flex justify-start items-center gap-1.5 text-sm text-textGray"
          >
            <FaRegCircleCheck className="bg-orange rounded-full fill-white" />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-start items-center gap-2 bg-slate-200 mt-4 rounded-full">
        <RiTeamLine />
        <p className="text-sm">
          {" "}
          <b>1,00,000+</b> Students Enrolled
        </p>
      </div>
    </div>
  );
};

export default ConsultCard;
