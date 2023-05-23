import React from "react";

const FormTextField = ({ariaLable, placeholder, className}) => {
  return (
    <div className={`flex w-full items-center border-b  border-[#ccc]  my-4 ${className}`}>
      <input
        className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none placeholder-black"
        type="text"
        placeholder={placeholder}
        aria-label={ariaLable}
      />
    </div>
  );
};

export default FormTextField;
