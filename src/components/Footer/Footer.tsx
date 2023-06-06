import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer: FC = () => {
  return (
    <div className="Footer mx-auto overflow-hidden bg-darkblue px-[15px] py-[30px] text-white">
      <div className="grid gap-4 sm:grid-cols-1 3xl:grid-cols-2 4xl:grid-cols-4 5xl:grid-cols-4 6xl:grid-cols-4">
        {/* Footer Web Info */}
        <div className="footer-info py-3">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              alt="Ecommerce Inside"
              width={300}
              height={70}
            />
          </Link>
          <p className="py-4 text-white">
            Ecommerce Inside is a full-service digital solutions agency based in
            USA specializing in branding designs, Software, Mobile Apps, Webs, &
            Marketing Solutions.
          </p>
        </div>

        {/* Footer Nav Menu */}
        <div className="footer-nav flex flex-col justify-start py-3">
          <h6 className="text-white">About Us</h6>
          <ul className="list-none py-3 pl-3">
            <li className="arrow_list relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"#"} className="ml-2">Home</Link>
            </li>
            <li className="arrow_list relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"#"} className="ml-2">About</Link>
            </li>
            <li className="arrow_list relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"#"} className="ml-2">Portfolio</Link>
            </li>
            <li className="arrow_list relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"#"} className="ml-2">Services</Link>
            </li>
            <li className="arrow_list relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"#"} className="ml-2">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Footer Services Menu */}
        <div className="footer-services py-3">
          <h6 className="text-white">Services</h6>
          <ul className="list-none py-3 pl-3">
            <li className="arrow_list relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"#"} className="flex flex-col ml-2">
                Web Development
                <span className="text-[14px] text-darkgray">
                  eCommerce, Landing Page, Magento
                </span>
              </Link>
            </li>
            <li className="arrow_list relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"#"} className="flex flex-col ml-2">
                Mobile App Development
                <span className="text-[14px] text-darkgray">
                  IOS, Andriod, Hybrid Applications
                </span>
              </Link>
            </li>
            <li className="arrow_list relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"#"} className="flex flex-col ml-2">
                Branding Agency
                <span className="text-[14px] text-darkgray">
                  Logo Design, Social Media, Print Design
                </span>
              </Link>
            </li>
            <li className="arrow_list relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"#"} className="flex flex-col ml-2">
                Software Development
                <span className="text-[14px] text-darkgray">
                  ERP, CMS, Web Applications, Cloud
                </span>
              </Link>
            </li>
            <li className="arrow_list relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"#"} className="flex flex-col ml-2">
                Digital Marketing Services
                <span className="text-[14px] text-darkgray">
                  SEO, PPC, SMM, Email Marketing
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer Contact */}
        <div className="footer-contact py-3">
          <h6 className="text-white">Get In Touch</h6>
          <ul className="list-none py-3">
            <li className=" relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"/"} className="flex gap-2">
                <FaMapMarkerAlt size={16} className="text-caribbeangreen" />
                Suit no 606, 6th floAl Khaleej Tower, Karachi, Pakistan
              </Link>
            </li>
            <li className=" relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"/"} className="flex gap-2">
                <FaMapMarkerAlt size={16} className="text-caribbeangreen" />
                Ste 5148, 847 Sumpter Road, Belleville , Mi 48111 , USA
              </Link>
            </li>
            <li className=" relative my-2 text-white hover:text-caribbeangreen">
              <Link href={"tel:+971045916004"} className="flex gap-2">
                <AiFillPhone size={16} className="text-caribbeangreen" />
                +1 (734) 361 4340
              </Link>
            </li>
            <li className=" relative my-2 text-white hover:text-caribbeangreen">
              <Link
                href={"mailto:info@ecommerceinside.co"}
                className="flex gap-2"
              >
                <MdEmail size={16} className="text-caribbeangreen" />
                Email: info@ecommerceinside.co
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
