import Link from "next/link";
import React, { FC } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const CopyRightFooter: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-[#ffffffb3] bg-dark py-[20px] overflow-hidden px-[25px]">
        <div className="text-white">
          <div className="flex flex-col items-center justify-between 4xl:flex-row 5xl:flex-row 6xl:flex-row ">
            {/* Footer Copyright Info */}
            <div className="footer_copyright_info flex flex-col items-center justify-center 2xl:flex-row 3xl:flex-row 4xl:flex-row 5xl:flex-row 6xl:flex-row my-1">
              <div className="copy_right">
                <p className="text-darkgray text-center">&copy; {currentYear} Ecommerce Inside. All Rights Reserved.</p>
              </div>
              <div className="flex items-center justify-center">
                <Link href={"#"} className="text-white hover:text-caribbeangreen border-r border-white px-3">
                  Privacy Policy
                </Link>
                <Link href={"#"} className="text-white hover:text-caribbeangreen px-3">
                  Terms of Use
                </Link>
              </div>
            </div>

            {/* Footer Social Icons */}
            <div className="footer_social_icons flex justify-center items-center my-1">
              <Link href={"#"} aria-label="Facebook" className="hover:text-caribbeangreen px-3">
                <FaFacebookF size={18} />
              </Link>
              <Link href={"#"} aria-label="Twitter" className="hover:text-caribbeangreen px-3">
                <BsTwitter size={18} />
              </Link>
              <Link href={"#"} aria-label="Instagram" className="hover:text-caribbeangreen px-3">
                <BsInstagram size={18} />
              </Link>
              <Link href={"#"} aria-label="LinkedIn" className="hover:text-caribbeangreen px-3">
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default CopyRightFooter;
