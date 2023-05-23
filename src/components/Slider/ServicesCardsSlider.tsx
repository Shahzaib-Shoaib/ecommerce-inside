import React, { FC, useState } from "react";
import TwinColSliderData from "~/data/TwinColSliderData";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../ui/Button";
import useRQGlobalState from "~/utils/useRQGlobalState";
import Heading1 from "../ui/Heading1";
import Paragraph from "../ui/Paragraph";
import CollisionButton from "../ui/CollisionButton";
import "swiper/css/pagination";

const ServicesCardsSlider: FC = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
      <SwiperSlide key={"213"} style={{ backgroundImage: `url(${data.url})` }}>
        <div
          className={`flex h-[385px]  flex-col justify-center border bg-caribbeangreen  bg-center px-[15px] md:px-[50px]`}
        >
          <div className=" flex flex-col group-hover:hidden">
            <h3 className="text-h3 font-bold text-white ">Our Services</h3>
            <p className=" pt-1 text-sm leading-[20px] text-white">
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
      {data.map((service, index) => (
        <SwiperSlide key={index}>
          <div
            className={`group relative flex h-[385px] flex-col justify-center border bg-[url('/service-img-2.webp')]  bg-cover bg-center bg-no-repeat px-[15px] md:px-[50px]`}
            style={{ backgroundImage: `url(${service.img})` }} key={index}
          >
            <div className=" flex flex-col group-hover:hidden">
              <img
                src={service.icon}
                alt=""
                className="h-[54px] w-[50px] pb-[15px] "
              />
              <h3 className="pb-[20px] text-h4 font-bold text-white md:text-base2">
                {service.title}
              </h3>
              <ul className="flex list-none flex-wrap">
                {service.cat.map((catagory) => (
                  <li className="border-l border-gray-400 px-[12px] text-xs uppercase text-gray-400 first:border-l-0 first:pl-0" key={catagory}>
                    {catagory}
                  </li>
                ))}
                {/* <li className='uppercase text-xs px-[12px] border-l border-gray-400 text-gray-400'>Android</li> */}
                {/* <li className='uppercase text-xs px-[12px]  border-l border-gray-400 text-gray-400'>Cross Platform</li> */}
              </ul>
            </div>
            <div className="servie-para flex hidden flex-col group-hover:block">
              <h5 className="pb-[20px] text-p font-bold text-caribbeangreen md:text-base2">
                {service.title}
              </h5>
              <ul className="flex list-none flex-wrap">
                {service.cat.map((catagory) => (
                  <li className="border-l border-gray-400 px-[12px] text-xs uppercase text-gray-400 first:border-l-0 first:pl-0" key={catagory}>
                    {catagory}
                  </li>
                ))}
                {/* <li className='uppercase text-xs px-[12px] border-l border-gray-400 text-gray-400'>Android</li> */}
                {/* <li className='uppercase text-xs px-[12px]  border-l border-gray-400 text-gray-400'>Cross Platform</li> */}
              </ul>
              <p className=" pt-3 text-sm text-white">{service.desc}</p>
              <a href={service.link} className="text-sm text-caribbeangreen">
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesCardsSlider;
