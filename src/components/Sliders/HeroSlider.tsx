'use client'
import React, { FC } from "react";
import SwiperCore from "swiper";
import {Autoplay,Pagination,A11y,useSwiper,Swiper,SwiperSlide} from "~/components/ui/Slider";
import heroSliderData from "~/data/HeroSliderData";
import Button from "../ui/Button";

const HeroSlider: FC = () => {
  SwiperCore.use([Autoplay, Pagination, A11y]);
  const swiper = useSwiper();


  return (
    <Swiper
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 5000,
    }}
    pagination={{ clickable: true }}
    className="hero_slider"
    >
    {
        heroSliderData?.map((slide,index) => (
            <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(/images${slide.url})` }}
            className="bg-cover"
            >
            <div className="flex items-center  justify-center relative pt-[250px] sm:h-[80vh] md:h-[85vh] lg:h-[85vh] xl:h-[80vh] 2xl:h-[85vh] 3xl:h-[85vh] 4xl:h-[85vh] 5xl:h-[85vh] 6xl:h-[100vh]">
              <div className="heroRounded absolute left-0 flex flex-col justify-center bg-transparent bg-[url('/images/banner-slide-img.webp')] bg-cover  sm:w-[100%] md:w-[90%] sm:top-[18%] md:top-[20%] lg:w-[75%] lg:top-[25%] xl:w-[65%] xl:top-[30%] 2xl:w-[50%] 2xl:top-[30%] 3xl:w-[50%] 3xl:top-[25%] 4xl:w-[50%] 4xl:top-[25%] 5xl:w-[50%] 5xl:top-[25%] 6xl:w-[40%] 6xl:top-[35%] 6xl:py-[100px]">
                <h1 className="text-white mb-[15px]">{slide.title}</h1>
                <p className="text-white mb-[10px]">{slide.desc}</p>
                <div className="banner_btn">
                  <Button variant="Dark">RequestQuote For Free</Button>
                </div>
              </div>
            </div>
            </SwiperSlide>
        ))
    }
    </Swiper>
  )
};

export default HeroSlider;
