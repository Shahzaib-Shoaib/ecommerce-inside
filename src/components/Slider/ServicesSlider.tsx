import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Button from "../ui/Button";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import UseRQGlobalState from "~/utils/useRQGlobalState";

SwiperCore.use([Navigation, Pagination]);

interface ServiceSliderProps {
  sliderData: Array<object>;
}

const ServicesSlider = ({ sliderData }) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const [modalActive,setModalActive] = UseRQGlobalState('modal',false);


  return (
    <>
      <Swiper
        id="mainColSlider"
        navigation={{ prevEl, nextEl }}
        className=" bg-white"
        style={{
          "--swiper-navigation-color": "black",
        }}
      >
        {sliderData.map((slide) => (
          <SwiperSlide>
            <div className="flex flex-col-reverse px-[15px] md:flex-row ">
              <div className="data flex flex-col justify-center md:w-[50%] mt-[45px] items-center md:items-start">
                <h2 className="text-[14px] font-semibold leading-[1.2] text-[#333] sm:text-center md:text-left xs:text-center xs:text-[14px]">
                  {slide.subHeading}
                </h2>
                <h3 className="serviceslidergradient pt-[6px] font-bold leading-[1.2] sm:text-center sm:text-[30px] md:text-left md:text-[40px] lg:text-[33px] xl:text-[38px] xs:text-center xs:text-[24px]">
                  {slide.Heading}
                </h3>
                <p className="pb-[25px] pt-[15px] text-[#666] sm:text-center sm:text-[16px] md:pb-[35px] md:text-left md:text-[19px] text-center nd:text-left xs:text-[16px]">
                  {slide.desc}
                </p>
                {slide.options &&
                  <ul className="list-none pb-[18px]">
                  {slide.options.map((option) => (
                    <li className="arrowedList pb-[13px] text-[20px] text-[#333] xs:pb-[13px] xs:text-[20px]">
                      {option}
                    </li>
                  ))}
                </ul>
                }
                <div className="about-btn flex flex-col  gap-8 lg:flex-row">
                  <Button variant="Dark" className="" onClick={()=>setModalActive(true)}>
                    Let's Get Started
                  </Button>
                  <Button variant="Green">Consult An Expert</Button>
                </div>
              </div>
              <div className="img md:w-[50%] flex items-center justify-center">
                <img src={slide.img} alt="img" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center gap-5 p-6">
        <div className="cursor-pointer" ref={(node) => setPrevEl(node)}>
          <HiArrowSmLeft size={38} color="black" />
        </div>
        <div className="cursor-pointer" ref={(node) => setNextEl(node)}>
          <HiArrowSmRight size={38} color="black" />
        </div>
      </div>
    </>
  );
};

export default ServicesSlider;
