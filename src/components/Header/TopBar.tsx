import Link from "next/link";
import React, { FC } from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelopeOpenText } from "react-icons/fa";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";

const TopBar: FC = () => {
  return (
    <div className="flex items-center justify-between bg-darkblue py-[10px] text-white">
      <div className="social-icons flex items-center">
        <Link
          href={"#"}
          className="border-r-[1px] border-white px-3 hover:text-caribbeangreen"
        >
          <FaFacebookF size={16} />
        </Link>
        <Link
          href={"#"}
          className="border-r-[1px] border-white px-3 hover:text-caribbeangreen"
        >
          <BsInstagram size={16} />
        </Link>
        <Link href={"#"} className="px-3 hover:text-caribbeangreen">
          <FaLinkedinIn size={16} />
        </Link>
      </div>

      <div className="contact-info flex items-center">
        <Link
          href={"mailto:info@ecommerceinside.co"}
          className="flex items-center px-1 hover:text-caribbeangreen md:px-3"
        >
          <FaEnvelopeOpenText size={16} className="mr-3" />
          <span className="hidden lg:block">info@ecommerceinside.co</span>
        </Link>
        <Link
          href={"tel:+971045916004"}
          className="flex items-center px-1 hover:text-caribbeangreen md:px-3"
        >
          <BsFillTelephoneFill size={16} className="mr-3" />
          <span className="hidden lg:block">+1 (734) 361 4340</span>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
