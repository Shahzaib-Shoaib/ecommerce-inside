"use client";

import React, { FC, useEffect, useState } from "react";
import packageCatagories from "@/data/packageCatagories";
import packages from "@/data/packages";
import {Swiper,SwiperSlide, Navigation, FreeMode} from "@/components/ui/Slider";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import PackageCard from "./PackageCard";
import packagesGallery from "@/data/PackagesGallery";
import PortfolioGalleryCard from "./PortfolioGalleryCard";


type PackagesType = {
  id: string;
  name: string;
  price: string;
  discprice: string;
  desc: string;
  cat: string;
  points: string[];
};

type PackagesGalleryType = {
  id:string,
  cat:string,
  src:string
}

const PortfolioPackages: FC = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPackages, setFilteredPackages] = useState<PackagesType[]>([]);
  const [filterImages, setFilterImages] = useState<PackagesGalleryType[]>([]);

  useEffect(() => {
    const defaultPackages = packages.filter((data) => data.cat === "Combo");
    setFilteredPackages(defaultPackages);
    const defaultGallery = packagesGallery.filter((data) => data.cat === "Combo");
    setFilterImages(defaultGallery);
  }, []);

  const changeCategorizedPackages = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const category: string = e.currentTarget.value;
    setSelectedCategory(category);
    const catagoriezedPackages = packages.filter(
      (data) => data.cat === category
    );
    const FilteredGallery = packagesGallery.filter((data) => data.cat === category);
    if (category === "All") {
      setFilteredPackages(packages);
      setFilterImages(packagesGallery);
    } else {
      setFilteredPackages(catagoriezedPackages);
      setFilterImages(FilteredGallery);
    }
  };

  return (
    <div>
      {/* Packages Categories Buttons */}

      {/* Packags Categories */}
      <div className="fluid_container mx-auto">
        <div className="mx-auto my-5  hidden flex-row  flex-wrap items-center justify-center gap-3 4xl:flex 5xl:flex 6xl:flex">
          {packageCatagories.map((category) => (
            <button
              onClick={(e) => changeCategorizedPackages(e)}
              value={category.name}
              id={category.id}
              key={category.id}
              className={` ${
                selectedCategory === category.name
                  ? "border-2 border-darkblue bg-caribbeangreen text-white"
                  : "bg-white"
              } flex cursor-pointer items-center justify-center border-2 border-caribbeangreen p-2 px-5  py-[8px]  hover:border-gray-300`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Packags Categories Slider */}
      <div className="fluid_container mx-auto my-5 4xl:hidden 5xl:hidden 6xl:hidden">
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
            <SwiperSlide key={category.id} className="swipeslide !mx-3 !w-fit">
              <button
                onClick={(e) => changeCategorizedPackages(e)}
                value={category.name}
                className={` ${
                  selectedCategory === category.name
                    ? "border-2 border-darkblue bg-caribbeangreen text-white "
                    : "bg-white"
                } mx-auto flex cursor-pointer items-center justify-center border-2 border-caribbeangreen  px-5  py-[8px]  text-[14px] hover:border-gray-300 `}
              >
                {category.name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex  gap-2 p-6">
          <div className="cursor-pointer" ref={(node) => setPrevEl(node)}>
            <HiArrowSmLeft size={38} color="black" />
          </div>
          <div className="cursor-pointer" ref={(node) => setNextEl(node)}>
            <HiArrowSmRight size={38} color="black" />
          </div>
        </div>
      </div>

      {/* Packages Gallery */}
      <div className="div_container">
        {filterImages && <PortfolioGalleryCard data={filterImages}/>}
      </div>

      {/* Packages Cards */}
      <div className="div_container py-[20px]">
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-3 5xl:grid-cols-3 6xl:grid-cols-3">
          {filteredPackages &&
            filteredPackages.map((singlePackage) => {
              return (
                <PackageCard data={singlePackage} key={singlePackage.id} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPackages;
