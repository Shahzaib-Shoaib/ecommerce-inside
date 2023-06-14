import Image from "next/image";
import Link from "next/link";
import React from "react";

const Head = () => {
  return (
    <div className="bg-darkblue h-24 overflow-hidden">
      <div className="div_container h-full flex items-center justify-between">
        <div className="logo flex h-full items-center">
          <Link href={"/"} className="">
            <Image
              alt="Ecommerce Inside"
              src={"/images/logo.png"}
              width={300}
              height={70}
            />
          </Link>
        </div>
        <div className="logo flex gap-4 items-center w-fit">
          <button className="text-white border border-white rounded-md hover:text-darkblue hover:bg-white py-[10px] px-[20px]">Start Live Chat</button>
          <Link href={"tel:+971547956331"} className="text-white border border-white bg-caribbeangreen rounded-md hover:text-white hover:bg-darkblue py-[10px] px-[20px]">
          Call +971 54 795 6331
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Head;
