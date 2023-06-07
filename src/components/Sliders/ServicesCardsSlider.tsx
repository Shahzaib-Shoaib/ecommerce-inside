"use client";
import React from "react";
import SwiperCore from "swiper";
import {Autoplay,Pagination,A11y,useSwiper,Swiper,SwiperSlide} from "@/components/ui/Slider";

type ServicesData = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  link: string;
  img: string;
  cat: string[];
}[];

const ServicesCardsSlider = ({ data }: { data: ServicesData }) => {
  
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
      className="heroSlider"
    >
      <SwiperSlide key={"213"}>
        <div
          className={`flex h-[385px]  flex-col justify-center border bg-caribbeangreen  bg-center px-[15px] xl:px-[50px]`}
        >
          <div className=" flex flex-col group-hover:hidden">
            <h6 className=" font-bold text-white ">Our Services</h6>
            <p className=" pt-1 text-white">
              Ecommerce Inside is on a mission to bring a revolution in the IT
              and marketing domain with up-to-date technology, tools, strategy,
              and approach. Our dedicated teams understand the industry and
              audience requirements. We help you come forward and up your
              brand’s game.
            </p>
            <a
              href="#"
              className="text-sm uppercase text-white hover:text-black"
            >
              CHECK OUT OUR SERVICES HERE{" "}
            </a>
          </div>
        </div>
      </SwiperSlide>
      {data.map((service) => (
        <SwiperSlide key={service.id}>
          <div
            className={`group relative flex h-[385px] flex-col justify-center border  bg-cover bg-center bg-no-repeat px-[15px] xl:px-[50px]`}
            style={{ backgroundImage: `url(/images/${service.img})` }}
          >
            <div className=" flex flex-col group-hover:hidden">
              <img
                src={`/images/${service.icon}`}
                alt=""
                className="h-[54px] w-[50px] pb-[15px] "
              />
              <h3 className="md:text-base2 pb-[20px] text-h4 font-bold text-white">
                {service.title}
              </h3>
              <ul className="flex list-none flex-wrap">
                {service.cat.map((catagory) => (
                  <li
                    className="border-l border-gray-400 px-[12px] text-xs uppercase text-gray-400 first:border-l-0 first:pl-0"
                    key={catagory}
                  >
                    {catagory}
                  </li>
                ))}
              </ul>
            </div>
            <div className="servie-para flex hidden flex-col group-hover:block">
              <h5 className="md:text-base2 pb-[20px] text-p font-bold text-caribbeangreen">
                {service.title}
              </h5>
              <ul className="flex list-none flex-wrap">
                {service.cat.map((catagory) => (
                  <li
                    className="border-l border-gray-400 px-[12px] text-xs uppercase text-gray-400 first:border-l-0 first:pl-0"
                    key={catagory}
                  >
                    {catagory}
                  </li>
                ))}
              </ul>
              <p className=" pt-3 text-sm text-white">{service.desc}</p>
            
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesCardsSlider;
