import Link from "next/link";
import React from "react";
import { BsFillChatDotsFill, BsTelephoneFill } from "react-icons/bs";

const ContactInfo = () => {
  return (
    <>
      {/* Contact Info */}
      <div className="contact">
        <h3 className="text-caribbeangreen">Need</h3>
        <h3 className="text-darkblue">Assistance?</h3>
        <div className="icon_group mt-6 flex flex-row items-center gap-2">
          <div className="icon_bg flex h-12 w-12 items-center justify-center rounded-full border border-caribbeangreen">
            <BsTelephoneFill size={18} className=" text-darkblue" />
          </div>
          <div className="content">
            <Link href={"tel:+971045916004"}>
            <p className="font-semibold uppercase text-darkblue">TOLL FREE:</p>
            <p className="text-gray-500 ">+1 (734) 361 4340</p>
            </Link>
          </div>
        </div>
        <div className="icon_group mt-4 flex flex-row items-center gap-2">
          <div className="icon_bg flex h-12 w-12 items-center justify-center rounded-full border border-caribbeangreen">
            <BsFillChatDotsFill size={18} className=" text-darkblue" />
          </div>
          <div className="content">
            <Link href={"#"}>
            <p className="font-semibold uppercase text-darkblue">LIVE CHAT:</p>
            <p className="text-gray-500 ">with Our Design Expert</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
