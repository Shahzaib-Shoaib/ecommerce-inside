"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import navlinks from "~/data/navlinks";
import { BiChevronDown } from "react-icons/bi";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";
import useRQGlobalState from "~/utils/useRQGlobalState";

const Navbar: FC = () => {
  const [modalActive, setModalActive] = useRQGlobalState("modal", false);

  const [navColor, setNavColor] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 250) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <>
      <NavigationMenu.Root
        className={`navbar flex h-20 items-center justify-between border-b px-3 text-white ${
          navColor ? "bg-[#00000070]" : "bg-transparent"
        }`}
      >
        {/* Nav Bar Logo */}
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

        {/* Nav Bar Right Side */}
        <div className="navbar flex items-center gap-8 sm:gap-2 md:gap-2">
          <NavigationMenu.List className="hidden h-[80px] list-none  flex-row items-center  gap-5  md:hidden  lg:hidden  xl:hidden  2xl:hidden 3xl:flex 4xl:flex 5xl:flex 6xl:flex ">
            {navlinks?.map((navlink, index) => (
              <div key={index}>
                {navlink.sublinks ? (
                  <NavigationMenu.Item className="flex h-full items-center hover:text-caribbeangreen">
                    <NavigationMenu.Trigger className="group flex h-full select-none items-center gap-2 leading-none outline-none">
                      <Link href={navlink.link}>{navlink.name}</Link>
                      <BiChevronDown
                        className=" relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                        aria-hidden
                      />
                    </NavigationMenu.Trigger>

                    {/* Nav Bar Drop Down */}
                    <NavigationMenu.Content className="absolute top-20 min-w-[350px] animate-fade-in-down bg-white">
                      <ul className="m-0 flex list-none flex-col">
                        {navlink.sublinks?.map((subnavlink) => (
                          <li
                            className="h-full w-full border-b border-black p-4 text-darkblue hover:bg-darkblue hover:text-white"
                            key={subnavlink.name}
                          >
                            <Link
                              href={subnavlink.link}
                              className="h-full w-full"
                            >
                              {subnavlink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                ) : (
                  <NavigationMenu.Item
                    className="hover:text-caribbeangreen"
                    key={navlink.name}
                  >
                    <Link href={navlink.link}>{navlink.name}</Link>
                  </NavigationMenu.Item>
                )}
              </div>
            ))}
          </NavigationMenu.List>

          <Button
            variant="Green"
            className="sm:px-3"
            onClick={() => setModalActive(true)}
          >
            Request Info
          </Button>
          <MobileMenu />
        </div>
      </NavigationMenu.Root>
    </>
  );
};

export default Navbar;
