"use client";

import React, { FC, useEffect, useState } from "react";
import packageCatagories from "@/data/packageCatagories";
import packages from "@/data/packages";
import {Swiper,SwiperSlide, Navigation, FreeMode} from "@/components/ui/Slider";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import PackageCard from "../Packages/PackageCard";
type PackagesType = {
  id: string;
  name: string;
  price: string;
  discprice: string;
  desc: string;
  cat: string;
  points: string[];
};

type ServicesPackagesSecType = {
  subHeading:string,
  mainHeading:string,
  desc:string,
}

const ServicesPackagesSec: FC<ServicesPackagesSecType> = ({subHeading,mainHeading,desc}) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPackages, setFilteredPackages] = useState<PackagesType[]>([]);

  useEffect(() => {
    const defaultPackages = packages.filter((data) => data.cat === "Combo");
    setFilteredPackages(defaultPackages);
  }, []);

  const changeCategorizedPackages = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const category: string = e.currentTarget.value;
    setSelectedCategory(category);
    const catagoriezedPackages = packages.filter((data) => data.cat === category);
    if(category === "All"){
      setFilteredPackages(packages);
    }else{
      setFilteredPackages(catagoriezedPackages);
    }
    
  };

  return (
    <section className="overflow-hidden">
    <div className="div_container">
      <h6 className="pb-[10px] text-center text-caribbeangreen">
      {subHeading}
      </h6>
      <h2 className="text-balack pb-[26px] text-center font-bold">
        {mainHeading}
      </h2>
      <p className="pb-[36px] text-center  font-normal text-[#666]">
        {desc}
      </p>
    </div>
    <div>
      {/* Packages Categories Buttons */}

      {/* Packags Categories */}
      <div className="div_container mx-auto">
        <div className="mx-auto my-5  hidden flex-row  flex-wrap items-center justify-center gap-3 4xl:flex 5xl:flex 6xl:flex">
          {packageCatagories.map((category) => (
            <button
              onClick={(e) => changeCategorizedPackages(e)}
              value={category.name}
              key={category.id}
              id={category.id}
              className={` ${
                selectedCategory === category.name
                ? "border-b-2  border-caribbeangreen text-caribbeangreen "
                : "border-b-2 border-transparent text-black"
            } flex cursor-pointer items-center justify-center border-b-2  p-2 px-5 py-[8px] text-black hover:border-b-2  hover:border-caribbeangreen  hover:text-caribbeangreen`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Packags Categories Slider */}
      <div className="div_container mx-auto my-5 4xl:hidden 5xl:hidden 6xl:hidden">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode, Navigation]}
          className="StrategySlider flex w-full items-center justify-center "
          navigation={{ prevEl, nextEl }}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 1,
            },
            769: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
          }}
        >
          {packageCatagories.map((category) => (
            <SwiperSlide key={category.id} className="swipeslide !w-fit !mx-3">
              <button
                onClick={(e) => changeCategorizedPackages(e)}
                value={category.name}
                key={category.id}
                className={` ${
                  selectedCategory === category.name
                  ? "border-b-2  border-caribbeangreen text-caribbeangreen "
                : "border-b-2 border-transparent text-black"
            } flex cursor-pointer items-center justify-center border-b-2  p-2 px-5 py-[8px] text-black hover:border-b-2  hover:border-caribbeangreen  hover:text-caribbeangreen`}
            >
                {category.name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center gap-2 p-6">
          <div className="cursor-pointer" ref={(node) => setPrevEl(node)}>
            <HiArrowSmLeft size={38} color="black" />
          </div>
          <div className="cursor-pointer" ref={(node) => setNextEl(node)}>
            <HiArrowSmRight size={38} color="black" />
          </div>
        </div>
      </div>

      {/* Packages Cards */}
      <div className="div_container">
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-3 5xl:grid-cols-3 6xl:grid-cols-3">
          {filteredPackages &&
            filteredPackages.map((singlePackage) => {
              return <PackageCard data={singlePackage} key={singlePackage.id} />
            })}
        </div>
      </div>
    </div>
  </section>
  );
};

export default ServicesPackagesSec;
