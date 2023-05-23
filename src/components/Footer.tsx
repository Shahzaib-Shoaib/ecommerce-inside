import Link from "next/link";
import React, { FC } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer: FC = () => {
  return (
    <footer className="main-footer relative bg-[#1b1035] py-[30px] text-white md:py-[80] lg:py-[90px] overflow-hidden">
      <div className="footer-container mx-auto px-[30px]">
        <div className="footer-row -ml-[15px] -mr-[15px] flex flex-col  md:flex-row w-[100%]">
          <div className="footer-info px-[15px] md:w-[25%]">
            <Link href={"/"}>
              <img src="/footer-logo.png" alt="Footer Logo" />
            </Link>
            <p className="footer-comp-info pb-[20px] pt-[12px] text-[16px] leading-[25px] text-white">
              Ecommerce Inside is a full-service digital solutions agency based
              in USA specializing in branding designs, Software, Mobile Apps,
              Webs, & Marketing Solutions.
            </p>
          </div>
          <div className="footer-nav px-[15px] md:w-[25%]">
            <div className="footer-menu flex flex-col justify-start">
              <div className="about-menu mt-[20px] md:mt-0">
                <h3 className="pb-[10px] text-[16px] font-semibold text-white lg:pb-[20px] lg:text-[20px]">
                  About Us
                </h3>
                <ul className="list-none">
                  <li className=" footer-menu-list relative pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen ">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className=" footer-menu-list relative pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen ">
                    <Link href={"/"}>About</Link>
                  </li>
                  <li className=" footer-menu-list relative pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen ">
                    <Link href={"/"}>Portfolio</Link>
                  </li>
                  <li className=" footer-menu-list relative pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen ">
                    <Link href={"/"}>Services</Link>
                  </li>
                  <li className=" footer-menu-list relative pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen ">
                    <Link href={"/"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-services px-[15px] md:w-[25%]">
            <div className="footer-menu mb-[15px] mt-[20px] md:mt-[0px] flex flex-col justify-start">
              <div className="about-menu mt-[20px] md:mt-0">
                <h3 className="pb-[10px] text-[16px] font-semibold text-white lg:pb-[20px] lg:text-[20px]">
                  Services
                </h3>
                <ul className="list-none">
                  <li className=" footer-menu-list relative pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen ">
                    <Link href={"/"} className="flex flex-col">
                      Web Development
                      <span className="text-[12px] text-[#909090]">
                        eCommerce, Landing Page, Magento
                      </span>
                    </Link>
                  </li>
                  <li className=" footer-menu-list relative pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen ">
                    <Link href={"/"} className="flex flex-col">
                      Mobile App Development
                      <span className="text-[12px] text-[#909090]">
                        IOS, Andriod, Hybrid Applications
                      </span>
                    </Link>
                  </li>
                  <li className=" footer-menu-list relative pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen ">
                    <Link href={"/"} className="flex flex-col">
                      Branding Agency
                      <span className="text-[12px] text-[#909090]">
                        Logo Design, Social Media, Print Design
                      </span>
                    </Link>
                  </li>
                  <li className=" footer-menu-list relative pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen ">
                    <Link href={"/"} className="flex flex-col">
                      Software Development
                      <span className="text-[12px] text-[#909090]">
                        ERP, CMS, Web Applications, Cloud
                      </span>
                    </Link>
                  </li>
                  <li className=" footer-menu-list relative pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen ">
                    <Link href={"/"} className="flex flex-col">
                      Digital Marketing Services
                      <span className="text-[12px] text-[#909090]">
                        SEO, PPC, SMM, Email Marketing
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-contact px-[15px] md:w-[25%]">
            <div className="footer-menu mb-[15px] mt-[20px] md:mt-0 flex flex-col justify-start">
              <div className="about-menu mt-[20px] md:mt-0">
                <h3 className="pb-[10px] text-[16px] font-semibold text-white lg:pb-[20px] lg:text-[20px]">
                  Get In Touch
                </h3>
                <ul className="list-none">
                  <li className=" pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen  -ml-[14px]">
                    <Link href={"/"} className="flex gap-3">
                      <FaMapMarkerAlt
                        size={16}
                        className="text-caribbeangreen"
                      />
                      Suit no 606, 6th floAl Khaleej Tower, Karachi, Pakistan
                    </Link>
                  </li>
                  <li className=" pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen  -ml-[14px]">
                    <Link href={"/"} className="flex gap-3">
                      <FaMapMarkerAlt
                        size={16}
                        className="text-caribbeangreen"
                      />
                      Ste 5148, 847 Sumpter Road, Belleville , Mi 48111 , USA
                    </Link>
                  </li>
                  <li className=" pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen  -ml-[14px]">
                    <Link href={"tel:+971045916004"} className="flex gap-3">
                      <AiFillPhone
                        size={16}
                        className="text-caribbeangreen"
                      />
                       +1 (734) 361 4340
                    </Link>
                  </li>
                  <li className=" pb-[13px] pl-[15px] text-[14px] text-white hover:text-caribbeangreen  -ml-[14px]">
                    <Link href={"mailto:info@ecommerceinside.co"} className="flex gap-3">
                      <MdEmail
                        size={16}
                        className="text-caribbeangreen"
                      />
                    Email: info@ecommerceinside.co
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
