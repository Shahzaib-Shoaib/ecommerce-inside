'use client'
import React, { FC, ReactNode } from 'react'
import Button from '../ui/Button'
import useRQGlobalState from "@/utils/useRQGlobalState";

type ServicesIntroSecType = {
    heading:ReactNode,
    desc:string,
    mainpoint:string,
    points:string[],
    img:string,
}

const ServicesIntroSec:FC<ServicesIntroSecType> = ({heading,desc,mainpoint,points,img}) => {
  const [modalActive, setModalActive]:any = useRQGlobalState("modal", false);

  return (
    <section className="overflow-hidden">
    <div className="div_container">
      <div className="row flex flex-col gap-8 2xl:flex-row 3xl:flex-row 4xl:flex-row 5xl:flex-row 6xl:flex-row" > 
        <div className="img  2xl:w-[50%] 3xl:w-[50%]  4xl:w-[50%] 5xl:w-[50%] 6xl:w-[50%] mx-auto">
          <img src={img} alt="" />
        </div>
        <div className="info  2xl:w-[50%] 3xl:w-[50%] 4xl:w-[50%] 5xl:w-[50%] 6xl:w-[50%]">
            {heading}
          {/* <h3 className="my-10">with great <span className="h3 text-caribbeangreen">animated videos</span> buisnesses around world</h3> */}
          <p className="text-[#666] mb-10">{desc}</p>
          <p className="text-black mb-5">{mainpoint}</p>
          <ul className="text-[#666]">
            {
                points.map((point,index)=>(
                    <li key={index} className="before:mr-[10px] mb-3  before:text-caribbeangreen before:-top-[10px] before:-left-3 before:content-['\27A4']">{point}</li>
                ))
            }
          </ul>
          <Button variant="Dark" onClick={() => setModalActive(true)}>SIGN UP now to avail 70% discount</Button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ServicesIntroSec