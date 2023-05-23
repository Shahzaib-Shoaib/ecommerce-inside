import React,{useState} from "react";
import aboutStrategyData from "~/data/aboutstrategyData";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const AboutStrategySlider = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <div className="slider-container justify-center p-4 overflow-hidden">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode,Navigation]}
        className="StrategySlider flex items-center justify-center"
        navigation={{ prevEl, nextEl }}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          960: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
        }}
      >
        {aboutStrategyData.map((data, index) => (
          <SwiperSlide key={index} className="">
            <div className="slider-card group flex h-[500px] flex-col  rounded-br-[60px] rounded-tl-[60px] border bg-[#241f2e]  px-[24px] py-[40px] duration-300 hover:bg-white">
              <span className="text-[20px] text-white group-hover:text-black">
                {data.id}
              </span>
              <h3 className="py-[18px] text-[30px] font-semibold text-white group-hover:text-caribbeangreen">
                {data.title}
              </h3>
              <p className="text-[15px] leading-[30px] text-white group-hover:text-[#666]">
                {data.desc}
              </p>
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
