import React from "react";

const ContactTextArea = ({ariaLable, placeholder, className}) => {
  return (
    <div
      className={`my-4 flex w-full items-center  border-b  border-[#ccc] ${className}`}
    >
      <textarea
        className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 placeholder-black focus:outline-none"
        placeholder={placeholder}
        aria-label={ariaLable}
      ></textarea>
    </div>
  );
};

export default ContactTextArea;
