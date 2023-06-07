"use client";
import React, { useState } from "react";
import SwiperCore from "swiper";
import {Autoplay,Navigation,useSwiper,Swiper,SwiperSlide} from "@/components/ui/Slider";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import ProjectsData from "@/data/ProjectsData";
import Button from "../ui/Button";

const ProjectSlider = () => {
  SwiperCore.use([Autoplay]);
  const swiper = useSwiper();

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
      }}
      id=" relative"
      navigation={{ prevEl, nextEl }}
      className="project_Slider bg-white"
    >
      {ProjectsData.map((project) => (
        <SwiperSlide key={project.id}>
          <div className="grid gap-7 sm:grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-2 4xl:grid-cols-2 5xl:grid-cols-2 6xl:grid-cols-2">
            <div className="slider_data flex flex-col justify-center">
              <h6 className="font-bold text-[20px]">PROJECT</h6>
              <h6 className="mb-9 font-normal text-[20px]">{project.projectType}</h6>
              <h1 className="font-bold mb-2">{project.projectName}</h1>
              <p className="mb-5">{project.projectDesc}</p>
              <Button variant="Dark" >Case Study</Button>
            </div>

            <div className="slider_img">
              <img src={`/images${project.image}`} alt="Slider Project Image" />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="flex items-center justify-center gap-5 p-6">
        <div className="cursor-pointer" ref={(node) => setPrevEl(node)}>
          <HiArrowSmLeft size={38} color="black" />
        </div>
        <div className="cursor-pointer" ref={(node) => setNextEl(node)}>
          <HiArrowSmRight size={38} color="black" />
        </div>
      </div>
    </Swiper>
  );
};

export default ProjectSlider;
