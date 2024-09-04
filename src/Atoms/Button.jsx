import classNames from "classnames";
import React from "react";

const Button = ({ label, size = "small", classname }) => {
  return (
    <button
      className={classNames(`rounded-full text-[17px] ${classname}`, {
        "px-10 py-[10px]": size === "small",
        "lg:px-[30px] lg:py-5 p-3": size === "medium",
      })}
    >
      {label}
    </button>
  );
};

export default Button;
