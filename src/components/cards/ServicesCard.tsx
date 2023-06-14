import React from "react";
import Image from "next/image";

type ServicesDataType = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  link: string;
  img: string;
  cat: string[];
};

const ServicesCard = ({ service }: { service: ServicesDataType }) => {
  return (
    <div
      className={`group relative flex h-[450px] flex-col justify-center border  bg-cover bg-center bg-no-repeat px-[15px] md:px-[50px]  xl:h-[300px] 2xl:h-[350px] 3xl:h-[380px] 4xl:h-[380px] 5xl:h-[380px] 6xl:h-[380px]`}
      style={{ backgroundImage: `url(/images${service.img})` }}
    >
      <div className="flex flex-col group-hover:hidden">
        <Image 
          width={56} 
          height={56}
          src={`/images${service.icon}`}
          alt=""
          className="pb-[15px]"
        />
         <h3 className="md:text-base2 w-[85%] pb-[20px] text-h4 font-bold text-white">
          {service.title}
        </h3>
        <ul className="flex list-none flex-wrap">
          {service.cat.map((catagory) => (
            <li
              className="mb-2 border-l border-gray-200 px-[6px] text-[12px] uppercase leading-4 text-white"
              key={catagory}
            >
              {catagory}
            </li>
          ))}
        </ul>
      </div>
      <div className="servie-para   hidden flex-col group-hover:flex ">
        <h3 className="md:text-base2 mb-3 text-[16px] font-bold leading-6 text-caribbeangreen">
          {service.title}
        </h3>
        <ul className="flex list-none flex-wrap">
          {service.cat.map((catagory) => (
            <li
              className="mb-2 border-l border-gray-200 px-[6px] text-[12px] uppercase leading-4 text-white"
              key={catagory}
            >
              {catagory}
            </li>
          ))}
        </ul>
        <p className="mb-3 pt-3 text-[12px] leading-4 text-gray-300">
          {service.desc}
        </p>
        {/* <a href={service.link} className="text-sm text-caribbeangreen">
          Read More
        </a> */}
      </div>
    </div>
  );
};

export default ServicesCard;
