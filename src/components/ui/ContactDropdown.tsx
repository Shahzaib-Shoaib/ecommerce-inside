import React, { FC } from "react";

type ContactDropdown = {
  className: string;
  options: optionsType;
};
type optionsType = {
  id: string;
  name: string;
}[];

const ContactDropdown: FC<ContactDropdown> = ({ className, options }) => {
  return (
    <div
      className={`my-4 flex w-full items-center  border-b  border-[#ccc] ${className}`}
    >
      <select className="mr-3 w-full cursor-pointer appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 placeholder-black focus:outline-none focus:ring-0">
        {options.map((item) => (
          <option value={item.name} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ContactDropdown;
