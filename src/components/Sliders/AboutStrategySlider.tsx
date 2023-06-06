"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import aboutStrategyData from "~/data/aboutStrategyData";


const AboutStrategySlider = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <div className="slider_container justify-center overflow-hidden p-4">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Navigation]}
        className="StrategySlider flex items-center justify-center"
        navigation={{ prevEl, nextEl }}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          1445: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
        }}
      >
        {aboutStrategyData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="slider_card group flex h-[400px] xl:h-[400px] 2xl:h-[450px] 3xl:h-[450px] 4xl:h-[450px] 5xl:h-[450px] 6xl:h-[450px] flex-col  rounded-br-[60px] rounded-tl-[60px] border bg-[#241f2e]  px-[24px] py-[40px] duration-300 hover:bg-white">
              <span className="text-[20px] text-white group-hover:text-black">
                {data.id}
              </span>
              <h3 className="py-[18px] font-semibold text-white group-hover:text-caribbeangreen">
                {data.title}
              </h3>
              <p className=" text-white group-hover:text-[#666]">{data.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex  gap-5 p-6">
        <div className="cursor-pointer" ref={(node) => setPrevEl(node)}>
          <HiArrowSmLeft size={38} color="black" />
        </div>
        <div className="cursor-pointer" ref={(node) => setNextEl(node)}>
          <HiArrowSmRight size={38} color="black" />
        </div>
      </div>
    </div>
  );
};

export default AboutStrategySlider;
