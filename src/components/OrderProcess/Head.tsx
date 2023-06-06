import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";

const Head = () => {
  return (
    <div className="bg-darkblue h-24">
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
          <Button variant="White">Start Live Chat</Button>
          <Button variant="Green">Call +1 (734) 361 4340</Button>
          <Button variant="Dark">Call +1 (734) 361 4340</Button>
        </div>
      </div>
    </div>
  );
};

export default Head;
