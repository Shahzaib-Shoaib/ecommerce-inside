import Link from "next/link";
import React, { FC } from "react";
import { BsInstagram,BsTwitter } from "react-icons/bs";
import { FaLinkedinIn,FaFacebookF } from "react-icons/fa";

const CopyRightBar: FC = () => {
  return (
    <section className="border-t-[1px] border-[#ffffffb3] bg-[#0f0c16] py-[20px] overflow-hidden">
      <div className="copy-right-container mx-auto px-[15px] text-white">
        <div className="copy-right-row flex flex-col  justify-between  md:flex-row items-center">
          <div className="copy-right-info px-[15px] md:flex md:flex-col">
            <div className="copy-right-para text-center md:flex items-center justify-center">
              <p className="text-[13px] text-[#999] md:text-[14px]">
                © 2022 Ecommerce Inside. All Rights Reserved.
              </p>
              <ul className="felx mt-[10px] md:mt-0 list-none flex-row justify-center ">
                <li className="inline-block border-r border-r-[#ccc] px-[10px]">
                  <Link href={"#"} className="text-[14px] text-white hover:text-caribbeangreen">
                    Privacy Policy
                  </Link>
                </li>
                <li className="inline-block px-[10px]">
                  <Link href={"#"} className="text-[14px] text-white hover:text-caribbeangreen">
                    Term of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy-right-social px-[15px]">
            <ul className="mt-[18px] flex list-none justify-center">
              <li className="list-none px-[13px]">
                <Link href={"/"} className=" hover:text-caribbeangreen inline-block" >
                  <FaFacebookF size={19} />
                </Link>
              </li>
              <li className="list-none px-[13px]">
                <Link href={"/"} className=" hover:text-caribbeangreen inline-block" >
                  <BsTwitter size={19} />
                </Link>
              </li>
              <li className="list-none px-[13px]">
                <Link href={"/"} className=" hover:text-caribbeangreen inline-block" >
                  <BsInstagram size={19} />
                </Link>
              </li>
              <li className="list-none px-[13px]">
                <Link href={"/"} className=" hover:text-caribbeangreen inline-block" >
                  <FaLinkedinIn size={19} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopyRightBar;
