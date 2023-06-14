"use client";
import React, { FC } from "react";
import SwiperCore from "swiper";
import {
  Autoplay,
  A11y,
  useSwiper,
  Swiper,
  SwiperSlide,
} from "@/components/ui/Slider";
import heroSliderData from "@/data/HeroSliderData";
import Button from "../ui/Button";
import useRQGlobalState from "@/utils/useRQGlobalState";

const HeroSlider: FC = () => {
  SwiperCore.use([Autoplay, A11y]);
  const swiper = useSwiper();

  const [modalActive, setModalActive]:any = useRQGlobalState("modal", false);

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
      }}
      className="hero_slider relative h-screen"
    >
      {heroSliderData?.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{ backgroundImage: `url(${slide.url})` }}
          className="bg-cover"
        >
          <div className="absolute bottom-[50%] top-[25%]">
            <div className="heroRounded w-[45%] rounded-br-[85px] bg-[url('/images/banner-slide-img.webp')] bg-cover py-[5%] pl-[2%] pr-[5%] md:w-[90%] lg:w-[75%] xl:w-[65%]">
              <h1 className="mb-[15px] text-white">{slide.title}</h1>
              <p className="mb-[10px] text-xs text-white sm:text-sm">
                {slide.desc}
              </p>
              <div className="banner_btn">
                <Button variant="Dark" onClick={() => setModalActive(true)}>
                  Request Quote For Free
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
