import React, { FC } from "react";

type BannerProps = {
  bgImg: String;
  img: string;
  smallHeading: String | null;
  mainHeading: string;
  desc: String | null;
};

const Banner: FC<BannerProps> = ({
  img,
  smallHeading,
  mainHeading,
  desc,
  bgImg,
}) => {
  return (
    <section
      // className="overflow-hidden bg-cover bg-center bg-no-repeat pt-[200px] sm:pt-[130px] md:pt-[130px] 5xl:pt-[150px] 6xl:pt-[150px]  px-0 pb-0 h-[70vh] 3xl:h-[80vh] 4xl:h-[80vh] 5xl:h-[80vh] 6xl:h-[80vh]"
      className="overflow-hidden bg-cover bg-center bg-no-repeat flex items-center px-0 pt-[180px]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="banner-container grid grid-cols-1 3xl:grid-cols-2 4xl:grid-cols-2 5xl:grid-cols-2 6xl:grid-cols-2 ">
        <div className="heroRounded w-[80%] max-h-[420px] -left-[15px] flex flex-col items-start justify-center  bg-transparent bg-[url('/images/banner-slide-img.webp')] bg-cover">
          {smallHeading && (
            <span className=" pb-[5px] font-bold text-white ">
              {smallHeading}
            </span>
          )}
          <h1 className="font-bold  text-white pb-[10px]">{mainHeading}</h1>
          {desc && <p className=" text-white ">{desc}</p>}
        </div>

        <div className=" items-end justify-center hidden 3xl:flex 4xl:flex 5xl:flex 6xl:flex">
          <img src={img} alt="about us banner pic" className="w-[80%]" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
