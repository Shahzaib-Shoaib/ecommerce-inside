import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Thumbs]);

const ThumbsSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        tag="section"
        wrapperTag="ul"
        id="mainThumbsSlider"
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="bg-darkblue"
      >
        <SwiperSlide tag="li">
          <div className="flex w-full flex-col items-center justify-center bg-darkblue py-[50px]">
            <h3 className="mb-3 text-[22px] font-bold text-white md:text-[25px] lg:text-[28px] xl:text-[30px]">
              Pakistan
            </h3>
            <p className="mb-[20px] text-[13px] text-white  md:text-[14px] lg:text-[15px] xl:mb-[30px] xl:text-[19px]">
              Suit no 606, 6th floAl Khaleej Tower, Karachi, Pakistan
            </p>
            <img src="/location_khi.webp" alt="Pakistan Location" />
          </div>
        </SwiperSlide>

        <SwiperSlide tag="li">
          <div className="flex w-full flex-col items-center justify-center bg-darkblue py-[50px]">
            <h3 className="mb-3 text-[22px] font-bold text-white md:text-[25px] lg:text-[28px] xl:text-[30px]">
              USA
            </h3>
            <p className="mb-[20px] text-[13px] text-white  md:text-[14px] lg:text-[15px] xl:mb-[30px] xl:text-[19px]">
              Ste 5148, 847 Sumpter Road, Belleville , Mi 48111 , United State
            </p>
            <img src="/location_nyc.webp" alt="Pakistan Location" />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        id="thumbs"
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={2}
        className="contactSlider-thumbs max-w-[275px]"
      >
        <SwiperSlide  className="max-w-[130px]">
          <button className="slidePrev-btn.bottom-nav__item slideNext-btn bottom-nav__item w-[120px] rounded-md border border-caribbeangreen bg-white px-5 py-2 text-darkblue hover:border-white hover:bg-caribbeangreen hover:text-white">
            Pakistan
          </button>
        </SwiperSlide>

        <SwiperSlide className="max-w-[130px]">
          <button className="slideNext-btn.bottom-nav__item slideNext-btn bottom-nav__item w-[120px] rounded-md border border-caribbeangreen bg-white px-5 py-2 text-darkblue hover:border-white hover:bg-caribbeangreen hover:text-white">
            USA
          </button>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ThumbsSlider;
