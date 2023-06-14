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
        <h5 className="font-semibold text-black group-hover:text-white w-[75%]">
          {data.name}
        </h5>
        <div className="flex gap-2 py-3">
          <h6 className="text-gray-900 line-through group-hover:text-caribbeangreen">
            {data.price}
          </h6>
          <h6 className="font-medium text-gray-900 group-hover:text-caribbeangreen">
            ONLY
          </h6>
        </div>
        <h1 className="text-[42px] font-extrabold text-caribbeangreen group-hover:text-white">
          {data.discprice}
        </h1>
        <p className="pt-3 text-[12px] leading-5 font-medium group-hover:text-white">{data.desc}</p>
      </div>

      <div className="my-5 h-40 overflow-y-auto">
        <ul className="px-5 list-disc">
          {data.points?.map((point) => (
            <li
              className="text-[12px] leading-5 group-hover:text-white "
              key={point}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-5 flex items-center justify-center">
        <Button variant="Dark" href={`/order/${data.id}`}>  Order Now  </Button>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-[14px] text-caribbeangreen group-hover:text-white mb-1">
          Share your idea?
        </p>
        <Link
          href={"tel:+17343614340"}
          className="text-p font-bold group-hover:text-white text-[18px]"
        >
          +971 54 795 6331
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
