import React from "react";

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
      className={`group relative flex h-[450px] flex-col justify-center border  bg-cover bg-center bg-no-repeat px-[15px] md:px-[50px]`}
      style={{ backgroundImage: `url(/images${service.img})` }}
    >
      <div className="flex flex-col group-hover:hidden">
        <img
          src={`/images${service.icon}`}
          alt=""
          className="h-[54px] w-[50px] pb-[15px] "
        />
        <h3 className="md:text-base2 pb-[20px] text-h4 font-bold text-white">
          {service.title}
        </h3>
        <ul className="flex list-none flex-wrap">
          {service.cat.map((catagory) => (
            <li
              className="border-l border-gray-400 px-[12px] text-xs uppercase text-gray-400 first:border-l-0 first:pl-0"
              key={catagory}
            >
              {catagory}
            </li>
          ))}
        </ul>
      </div>
      <div className="servie-para   flex-col hidden group-hover:flex ">
        <h3 className="md:text-base2 pb-[20px] text-h4 font-bold text-caribbeangreen">
          {service.title}
        </h3>
        <ul className="flex list-none flex-wrap">
          {service.cat.map((catagory) => (
            <li
              className="border-l border-gray-400 px-[12px] text-xs uppercase text-gray-400 first:border-l-0 first:pl-0"
              key={catagory}
            >
              {catagory}
            </li>
          ))}
        </ul>
        <p className=" pt-3 text-sm text-white">{service.desc}</p>
        <a href={service.link} className="text-sm text-caribbeangreen">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;
