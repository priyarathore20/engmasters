import classNames from "classnames";
import React from "react";

const Input = ({ placeholder, fullWidth }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className={classNames(
          "bg-transparent border-2 py-2 px-4 text-white placeholder:text-white border-white rounded-full",
          {
            "w-full": fullWidth,
            "max-w-[230px] w-full": !fullWidth,
          }
        )}
      />
    </div>
  );
};

export default Input;
