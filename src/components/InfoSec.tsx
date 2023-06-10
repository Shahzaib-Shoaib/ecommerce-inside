'use client'
import React, { FC } from "react";
import Button from "./ui/Button";
import useRQGlobalState from "@/utils/useRQGlobalState";


type InfoSecProps = {
  smallHeading: string;
  mainHeading: string;
  desc: string;
  infocardData: infoCardDataType;
};

type infoCardDataType = {
  id:string,
  title: string;
  desc: string;
  img: string;
}[];

const InfoSec: FC<InfoSecProps> = ({
  smallHeading,
  mainHeading,
  desc,
  infocardData,
}) => {
  const [modalActive, setModalActive]:any = useRQGlobalState("modal", false);

  return (
    <section className="overflow-hidden bg-[url('/images/about-choose-bg.webp')] bg-cover bg-no-repeat">
      <div className="div_container">
        <h6 className="pb-[10px] text-center text-[#241f2e]">{smallHeading}</h6>
        <h2 className="font-bold pb-[36px] text-center text-[#241f2e]">
          {mainHeading}
        </h2>
        <p className="pb-[36px] text-center  font-semibold text-darkgray">
          {desc}
        </p>
      </div>

      <div className="div_container">
        <div className="grid grid-cols-1 gap-4 py-[40px] xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-3 5xl:grid-cols-3 6xl:grid-cols-3 ">
          {infocardData.map((item) => (
            <div key={item.id} className="choose-card mb-[30px] h-[300px] rounded-br-[50px] rounded-tl-[50px] bg-[#1b1037] px-[33px] py-[50px] duration-300 hover:bg-caribbeangreen hover:shadow-lg">
              <div className="card-title flex items-center">
                <img src={`/images/${item.img}`} alt="icon" />
                <h3 className="title ml-[10px] text-[18px] font-medium text-white lg:ml-[25px] lg:text-[24px]">
                  {item.title}
                </h3>
              </div>
              <p className="choose-card-desc pt-[40px] text-white ">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button variant="Green" onClick={() => setModalActive(true)}>Let's Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default InfoSec;
