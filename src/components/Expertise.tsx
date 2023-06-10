"use client";
import React, { FC } from "react";
import { useSwiper } from "swiper/react";
import ExpertiseLeft from "@/data/ExpertiseLeft";
import ExpertiseRight from "@/data/ExpertiseRight";
import Button from "./ui/Button";
import SwiperCore from "swiper";
import {
  Autoplay,
  Pagination,
  A11y,
  FreeMode,
  Swiper,
  SwiperSlide,
} from "@/components/ui/Slider";
import useRQGlobalState from "@/utils/useRQGlobalState";
import Image from "next/image";

const Expertise: FC = () => {
  const expertiseTech = [...ExpertiseLeft, ...ExpertiseRight];
  const [modalActive, setModalActive]:any = useRQGlobalState("modal", false);

  SwiperCore.use([Autoplay, Pagination, A11y, FreeMode]);
  const swiper = useSwiper();
  return (
    <section className="overflow-hidden">
      <div className="div_container">
        <div className="development-box px-[15px]">
          <ul className="mx-auto flex list-none items-center justify-center py-[35px] text-center">
            <li className="flex flex-col items-center justify-center border-r border-gray-400 px-[15px] sm:px-[40px]">
              <Image
                width={58}
                height={48}
                src="/images/development-icon.webp"
                alt="development-icon"
               />
              <p className="pt-[14px]  font-semibold text-[#333] ">
                Web Development
                <br /> Technologies
              </p>
            </li>
            <li className="flex flex-col items-center justify-center px-[15px] sm:px-[40px]">
              <Image
                width={48}
                height={48}
                src="/images/development-icon-2.webp"
                alt="development-icon"
              />
              <p className="pt-[14px]    font-semibold text-[#333]">
                Mobile Application <br />
                Technologies
              </p>
            </li>
          </ul>
        </div>

        <h2 className="pb-[36px] text-center text-black">
          You Name It, We've Got It!
        </h2>
        <p className="pb-[36px] text-center text-darkgray">
          We build state of the art, hi-tech mobile apps, web apps and offer
          marketing solutions that lie in the intersection of technology, and
          innovation. Ecommerce Inside is fully equipped in terms of the latest
          tools, languages, and frameworks. We deliver the best and nothing
          less.
        </p>
      </div>

      <div className="fluid_container flex flex-row sm:hidden md:hidden lg:hidden xl:hidden ">
        <ul className=" flex list-none flex-row flex-wrap items-center justify-center">
          {ExpertiseLeft.map((techleaf, index) => (
            <li className="m-3" id={techleaf.id} key={techleaf.id}>
              <div className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-br-[50px] rounded-tl-[50px] bg-white text-center shadow-md duration-200 hover:scale-100 hover:border hover:border-black hover:bg-caribbeangreen">
                <Image
                  width={58}
                  height={41}
                  src={`/images/${techleaf.img}`}
                  alt="tech-leaf"
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="max-w-[8.33%]">
          <ul className="flex list-none flex-col items-center justify-center text-center">
            <li className="my-3 font-semibold text-black ">Languages</li>
            <div className="mx-auto h-[50px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
            <li className="my-3 font-semibold text-black ">Frameworks</li>
            <div className="mx-auto h-[50px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>

            <li className="my-3 font-semibold text-black ">Databse</li>
          </ul>
        </div>

        <ul className="flex list-none flex-row flex-wrap items-center justify-center">
          {ExpertiseRight.map((techleaf) => (
            <li className="m-3" id={techleaf.id} key={techleaf.id}>
              <div className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-br-[50px] rounded-tl-[50px] bg-white text-center shadow-md duration-200 hover:scale-100 hover:border hover:border-black hover:bg-caribbeangreen">
                <Image
                  width={58}
                  height={41}
                  src={`/images/${techleaf.img}`}
                  alt="tech-leaf"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="expertise-slider fluid_container 2xl:hidden 3xl:hidden 4xl:hidden 5xl:hidden 6xl:hidden ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          slidesPerView={6}
          breakpoints={{
            350: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 4,
            },
            710: {
              slidesPerView: 5,
            },
            950: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="expertise-slider flex w-full items-center justify-center"
        >
          <ul className="flex list-none flex-wrap items-center justify-center py-[200px]">
            {expertiseTech.map((tech) => (
              <SwiperSlide key={tech.id}>
                {/* <li className="m-3 w-fit" id={tech.id} key={tech.id}> */}
                <div
                  className="m-3 flex h-24 w-24 cursor-pointer items-center justify-center rounded-br-[50px] rounded-tl-[50px] bg-white text-center shadow-md duration-200 hover:scale-100 hover:border hover:border-black hover:bg-caribbeangreen"
                  id={tech.id}
                  key={tech.id}
                >
                  <Image
                    width={58}
                    height={41}
                    src={`/images/${tech.img}`}
                    alt="tech-leaf"
                  />
                </div>
                {/* </li> */}
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
      <div className="mt-[36px] flex items-center justify-center">
        <Button variant="Green" onClick={() => setModalActive(true)}>
          Let's Get Started
        </Button>
      </div>
    </section>
  );
};

export default Expertise;
