import React,{useRef, useState} from 'react'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide  } from "swiper/react";
import SwiperCore, { Autoplay, Navigation,Pagination,Thumbs,FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

const ContactSlider = () => {
  const [thumbsSwiper,setThumbsSwiper] =useState(null);
    SwiperCore.use([Autoplay]);
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();


  return (
    <>
    <Swiper
      modules={[Navigation,Pagination,FreeMode,Thumbs]}
    //   pagination={{ clickable: true }}
      slidesPerView={1}
      loop={true}
      thumbs={{swiper:thumbsSwiper}}
      autoplay={{ 
        delay: 2000,
      }}
      className="contactSwiper2"
    >
        <SwiperSlide>
        <div className="w-full flex flex-col items-center justify-center bg-darkblue py-[50px]">
            <h3 className='text-white mb-3 font-bold text-[22px] md:text-[25px] lg:text-[28px] xl:text-[30px]'>Pakistan</h3>
            <p className="text-white mb-[20px] xl:mb-[30px]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[19px]">Suit no 606, 6th floAl Khaleej Tower, Karachi, Pakistan</p>
            <img src="/location_khi.webp" alt="Pakistan Location" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full flex flex-col items-center justify-center bg-darkblue py-[50px]">
            <h3 className='text-white mb-3 font-bold text-[22px] md:text-[25px] lg:text-[28px] xl:text-[30px]'>USA</h3>
            <p className="text-white mb-[20px] xl:mb-[30px]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[19px]">Ste 5148, 847 Sumpter Road, Belleville , Mi 48111 , United State</p>
            <img src="/location_nyc.webp" alt="Pakistan Location" />
        </div>
        </SwiperSlide>
        <div className="slider-btns flex items-center justify-center gap-3 mb-[50px]">
            {/* <button  className='slidePrev-btn.bottom-nav__item slideNext-btn bottom-nav__item bg-white border border-caribbeangreen rounded-md text-darkblue py-2 px-5 hover:text-white hover:bg-caribbeangreen hover:border-white w-[120px]'  >Pakistan</button>
            <button  className='slideNext-btn.bottom-nav__item slideNext-btn bottom-nav__item bg-white border border-caribbeangreen rounded-md text-darkblue py-2 px-5 hover:text-white hover:bg-caribbeangreen hover:border-white w-[120px]' >USA</button> */}
        </div>
    </Swiper>
    </>
  )
}

export default ContactSlider