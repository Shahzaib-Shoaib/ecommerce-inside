import React, { FC, useState } from "react";
import TwinColSliderData from "~/data/TwinColSliderData";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import Button from "../ui/Button";
import CollisionButton from "../ui/CollisionButton";
import {
  HiArrowSmLeft,
  HiArrowSmRight,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const ProjectSlider: FC = () => {
  SwiperCore.use([Autoplay]);
  const swiper = useSwiper();

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        id=" relative"
        navigation={{ prevEl, nextEl }}
        className=" bg-white"
        style={{
          "--swiper-navigation-color": "black",
        }}
      >
        {TwinColSliderData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-7 px-[0px] sm:px-[50px] lg:flex-row">
              <div className="slider-data lg:w-[50%] flex flex-col justify-center">
                <h2 className="  font-bold text-[#302839] sec_heading'">
                {/* <h2 className="pb-[10px] text-[15px] font-bold text-[#302839] xl:pb-[13px] xl:text-[20px] 2xl:pb-[20px] 2xl:text-[24px]"> */}
                  PROJECT
                </h2>

                <h4 className="pb-[36px]  text-[14px] text-[#13101a]  lg:text-[17px] 3xl:text-[20px]">
                  {data.projectType}
                </h4>

                <h2 className=" text-[27px] font-bold text-[#13101a]  lg:text-[33px]  3xl:text-[50px]">
                  {data.projectName}
                </h2>

                <p className="pb-[18px]  text-[13px] leading-[22px] text-[#13101a] md:pb-[20px] md:text-[14px] md:leading-[26px] lg:pb-[20px] lg:text-[16px] lg:leading-[30px]">
                  {data.projectDesc}
                </p>
                <CollisionButton variant="Green" className="flex">
                  Case Study
                </CollisionButton>
              </div>
              <div className="slider-img lg:w-[50%]">
                <img src={data.image} alt="Slider Project Image" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      <div className="flex items-center justify-between absolute z-20 top-[40%] w-full">
        <div className="cursor-pointer " ref={(node) => setPrevEl(node)}>
          <HiArrowSmLeft size={38} color="black" />
        </div>
        <div className="cursor-pointer right-0 absolute" ref={(node) => setNextEl(node)}>
          <HiArrowSmRight size={38} color="black" />
        </div>
      </div>
      </Swiper>
    </>
  );
};

export default ProjectSlider;
