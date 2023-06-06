'use client'
import React, { FC, useState } from "react";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import SwiperCore from "swiper";
import {Pagination,Swiper,SwiperSlide,Navigation} from "~/components/ui/Slider";
SwiperCore.use([Navigation, Pagination]);

type AnimationSliderDataType = {
    id:string,
    subHeading: string;
    Heading: string;
    desc: string;
    img: string;
    options: string[];
  }[];

const ServiceSlider = ({sliderData}:{sliderData:AnimationSliderDataType}) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className="service_slider">
      <Swiper
        id="ServiceSlider"
        navigation={{ prevEl, nextEl }}
        className=" bg-white"
        // style={{
        //   "--swiper-navigation-color": "black",
        // }}
      >
        {sliderData.map((slide)=>(
            <SwiperSlide key={slide.id}>
                <div className="flex flex-col-reverse px-[15px] 3xl:flex-row 4xl:flex-row 5xl:flex-row 6xl:flex-row">

                    <div className="ServiceSliderData flex flex-col justify-center 3xl:w-[50%] 4xl:w-[50%] 5xl:w-[50%] 6xl:w-[50%]">
                        <p className="text-[#333] font-semibold">{slide.subHeading}</p>
                        <h2 className="font-bold leading-[1.5] bg-clip-text text-transparent bg-gradient-to-r from-[#f97135] to-[#ef103d]">{slide.Heading}</h2>
                        <p className="text-[#666]">{slide.desc}</p>
                        {
                            slide.options && <ul className="my-[18px] list-nome">
                                {
                                    slide.options.map((option)=>(
                                        <li className="arrowedList pb-[13px] text-[#333]">{option}</li>
                                    ))
                                }
                            </ul>
                        }
                    </div>



                    <div className="ServiceSliderIMGflex items-center justify-center 3xl:w-[50%] 4xl:w-[50%] 5xl:w-[50%] 6xl:w-[50%]">
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
    </div>
  );
};

export default ServiceSlider;
