'use client'
import React, { FC, useState } from 'react'
import SwiperCore from "swiper";
import {Navigation,Pagination,Thumbs,Swiper,SwiperSlide} from "@/components/ui/Slider";

SwiperCore.use([Navigation, Pagination, Thumbs]);

const ContactSlider:FC = () => {
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
            <h3 className="mb-3 font-bold text-white">
              Pakistan
            </h3>
            <p className="mb-[20px]  text-white   xl:mb-[30px] text-center">
              Suit no 606, 6th floAl Khaleej Tower, Karachi, Pakistan
            </p>
            <img src="/images/location_khi.webp" alt="Pakistan Location" />
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li">
          <div className="flex w-full flex-col items-center justify-center bg-darkblue py-[50px]">
            <h3 className="mb-3 font-bold text-white">
              USA
            </h3>
            <p className="mb-[20px]  text-white   xl:mb-[30px] text-center">
              Ste 5148, 847 Sumpter Road, Belleville , Mi 48111 , United State
            </p>
            <img src="/images/location_nyc.webp" alt="Pakistan Location" />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        id="thumbs"
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={2}
        className="contactSlider-thumbs max-w-[275px] !py-3"
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
  )
}

export default ContactSlider