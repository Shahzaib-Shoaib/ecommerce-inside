import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

type PackageType = {
  id: string;
  name: string;
  price: string;
  discprice: string;
  desc: string;
  cat: string;
  points: string[];
};

const PackageCard = ({ data }: { data: PackageType }) => {
  return (
    <div className="package_card group flex flex-col rounded-lg border-2 border-darkblue p-[35px] duration-300 hover:bg-darkblue">
      <div className="title">
        <h3 className="text-[22px] font-normal text-black group-hover:text-white w-[65%]">
          {data.name}
        </h3>
        <div className="flex gap-2">
          <p className="font-medium text-gray-400 line-through group-hover:text-caribbeangreen">
            {data.price}
          </p>
          <p className="font-medium text-gray-400 group-hover:text-caribbeangreen">
            ONLY
          </p>
        </div>
        <h6 className="font-extrabold text-caribbeangreen group-hover:text-white">
          {data.discprice}
        </h6>
        <p className=" font-medium group-hover:text-white">{data.desc}</p>
      </div>

      <div className="my-5 h-40 overflow-y-auto">
        <ul>
          {data.points?.map((point) => (
            <li
              className=" mb-[5px] text-[16px] group-hover:text-white "
              key={point}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-5 flex items-center justify-center">
        <Button variant="Dark" >Order Now</Button>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-[16px] text-caribbeangreen group-hover:text-white mb-1">
          Share your idea?
        </p>
        <Link
          href={"tel:+17343614340"}
          className="text-p font-bold group-hover:text-white text-[18px]"
        >
          +1 (734) 361 4340
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
