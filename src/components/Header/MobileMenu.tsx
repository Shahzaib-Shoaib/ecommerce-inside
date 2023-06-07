import Link from "next/link";
import React, { FC, useState } from "react";
import { GrMenu } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import navlinks from "@/data/navLinks";

const MobileMenu: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div
        className="group flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-white"
        onClick={(e) => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <GrMenu size={22} className="duration-100 group-hover:scale-110" />
      </div>

      {mobileMenuOpen && (
        <nav className="absolute left-0 top-0 h-[100vh] w-[100vw] overflow-hidden bg-white p-5 text-dark animate-fade-in-down">
          <div
            className="group flex h-[40px] w-[40px] cursor-pointer items-center justify-center  bg-caribbeangreen ml-auto"
            onClick={(e) => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <IoClose size={22} className="duration-100 group-hover:scale-110 text-white" />
          </div>

          <div className="h-[84vh] flex items-center justify-center relative" >
            <ul className="flex flex-col">
                {
                    navlinks.map((navlink)=>(
                        <>
                        {
                            navlink.sublinks?.map((sublink)=>(
                                <li className="animate-fade-in-down   hover:text-caribbeangreen flex justify-center font-bold   my-2 cursor-pointer group" key={sublink.name}>
                                    <img src={sublink.leftimg} alt="left img" className="absolute  sm:hidden md:hidden  lg:hidden xl:hidden 2xl:hidden  right-0 bottom-0 w-[400px] opacity-0 group-hover:opacity-100 group-hover:animate-fade-in-up"/>
                                    <Link href={sublink.link} className="h1" data-text={sublink.name} onClick={e => setMobileMenuOpen(!mobileMenuOpen)}>
                                    <img src={sublink.rightimg} alt="right img" className="absolute  sm:hidden md:hidden  lg:hidden xl:hidden 2xl:hidden left-0 top-0 w-[400px] opacity-0 group-hover:opacity-100 group-hover:animate-fade-in-down"/>
                              {sublink.name}
                            </Link>
                                </li>
                            ))
                        }
                        </>
                    ))
                }
            </ul>
          </div>


          <div className="mb-6 mt-auto">
            <ul className="flex flex-wrap gap-5 items-center justify-center">
                {
                    navlinks.map((navlink)=>(
                        <li className="hover:text-caribbeangreen cursor-pointer" key={navlink.name}>
                            <Link href={navlink.link} onClick={e => setMobileMenuOpen(!mobileMenuOpen)}>
                                {navlink.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;
