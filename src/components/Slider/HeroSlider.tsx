import React, { FC,useState } from "react";
import TwinColSliderData from "~/data/TwinColSliderData";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay, Navigation,Pagination,A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../ui/Button";
import useRQGlobalState from "~/utils/useRQGlobalState";
import Heading1 from "../ui/Heading1";
import Paragraph from "../ui/Paragraph";
import CollisionButton from "../ui/CollisionButton";
import 'swiper/css/pagination';

const HeroSlider: FC = () => {
  const [modalActive,setModalActive] = useRQGlobalState('modal',false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [
    {
      title: "Top Tier Digital Marketing Agency in Pakistan",
      desc: "Ecommerce Inside is the best digital marketing agency for a reason. We have a team of the best digital marketing enthusiasts who can disrupt all clichéd marketing methodologies with advanced strategies and customized solutions. We offer all kinds of management and consultations services that include B2B and B2C solutions that can help your brand and business grow exponentially. Request a free quote today and get your project started.",
      url: "/banner-karachi.jpg",
    },
    {
      title: "Best Digital Marketing Agency in USA",
      desc: "Ecommerce Inside is a leading digital marketing company in the UAE that is trusted by brands of all sizes and shapes. We help our clients to reach out to their target audience and make them stay for longer periods of time. We offer a free consultation to help you understand your needs and goals. We have a team of experts who will work together to develop a custom strategy for your company. Contact us today!",
      url: "/home-banner.jpg",
    },
  ];

  SwiperCore.use([Autoplay,Pagination,A11y]);
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
      {slides.map((data, index) => (
        <SwiperSlide
          key={index}
          style={{ backgroundImage: `url(${data.url})` }}
        >
          <div className="flex items-center py-[250px] h-[85vh] 4xl:h-[90vh] 5xl:h-[100vh]">
            <div className=" w-[80%] xl:w-[50%] 3xl:w-[40%] rounded-br-[200px] bg-transparent bg-[url('/banner-slide-img.webp')] bg-cover  pl-[30px] pr-[30px] 3xl:pl-[30px] 3xl:pr-[50px] py-[50px] 3xl:py-[90px]">

              <h1 className="text-white pb-[5px] 2xl:pb-[10px] 4xl:pb-[20px] text-[20px] font-bold leading-[26px] md:text-[22px] md:leading-[28px] lg:text-[24px] lg:leading-[30px] xl:text-[28px] xl:leading-[34px] 2xl:text-[30px] 2xl:leading-[36px] 3xl:text-[32px] 3xl:leading-[38px] 4xl:text-[36px] 4xl:leading-[40px] 5xl:text-[40px] 5xl:leading-[45px] 6xl:text-[45px] 6xl:leading-[50px]">{data.title}</h1>
              <Paragraph className="text-white">{data.desc}</Paragraph>
              <div className="banner-btn hidden md:block mt-[20px] 4xl:mt-[30px]">
              <CollisionButton variant="Green"  onClick={()=>setModalActive(true)}>Request Quote For Free</CollisionButton>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
