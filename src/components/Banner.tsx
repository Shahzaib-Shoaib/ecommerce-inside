import React, { FC } from "react";

interface BannerProps {
  bgImg: string;
  img: string;
  smallHeading: string | null;
  mainHeading: Array<string>| any;
  desc: string | null;
}

const Banner: FC<BannerProps> = ({
  img,
  smallHeading,
  mainHeading,
  desc,
  bgImg,
}) => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat pt-[200px]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="banner-container mx-auto px-[15px]">
        <div className="flex justify-between">
          <div className="ml-[-15px] flex w-[80%] md:w-[60%]  flex-col justify-center rounded-br-[200px] bg-transparent bg-[url('/banner-slide-img.webp')] bg-cover py-[70px] pl-[20px] pr-[90px] lg:w-[40%]">
            {smallHeading && (
              <span className=" pb-[5px] text-[20px] font-bold text-white lg:pb-[15px] lg:text-[30px] ">
                {smallHeading}
              </span>
            )}
            <h1 className="text-[20px] font-bold leading-[30px]  text-white lg:text-[38px]  lg:leading-[1.2] xl:text-[45px] pb-[15px]">
              {mainHeading}
            </h1>
            {desc && (
              <p className="text-[14px] text-white md:text-[12px] lg:text-[15px] xl:text-[16] ">
                {desc}
              </p>
            )}
          </div>

          <div className="hidden items-end justify-center md:flex">
            <img src={img} alt="about us banner pic" className="w-[76%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
