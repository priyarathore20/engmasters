import Button from "@/Atoms/Button";
import Input from "@/Atoms/Input";
import React from "react";

const ConsultationForm = () => {
  return (
    <section className="bg-bgGray">
      <div className="flex flex-col items-start py-8">
        <div className="flex flex-col items-center bg-formPink p-8 rounded-xl w-full max-w-[900px]">
          <div>
            <h2 className="mb-3 font-medium text-center text-white text-xl lg:text-[40px]">
              Get Consulted Today
            </h2>
            <p className="text-center text-white lg:text-xl">
              Start your journey to a{" "}
              <span className="text-orange">successful</span> <br />&{" "}
              <span className="text-orange">confident</span> life
            </p>
          </div>
          <form className="flex flex-col items-center gap-8 my-8">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex lg:flex-row flex-col items-center gap-6 w-full">
                <Input placeholder={"Name*"} fullWidth />
                <Input placeholder={"Email*"} fullWidth />
              </div>
              <div className="flex lg:flex-row flex-col items-center gap-6 w-full">
                <Input placeholder={"Phone Number*"} fullWidth />
                <Input placeholder={"Location*"} fullWidth />
              </div>
              <Input fullWidth placeholder="Share the problem you're facing" />
            </div>
            <div className="flex gap-2 text-left">
              <input type="checkbox" />
              <span className="text-white">
                I agree and accept the{" "}
                <span className="font-medium text-orange">
                  Terms And Conditions
                </span>
              </span>
            </div>
            <Button
              label={"Submit"}
              size="small"
              classname={"bg-white font-medium max-w-48"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
