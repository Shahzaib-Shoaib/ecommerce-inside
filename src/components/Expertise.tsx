import React from "react";
import Button from "./ui/Button";
import TechLeaf from "./TechLeaf";
import rightTechLeafData from "~/data/rightTechLeafData";
import leftTechLeafData from "~/data/leftTechLeafData";
import useRQGlobalState from "~/utils/useRQGlobalState";
import CollisionButton from "./ui/CollisionButton";

const Expertise = () => {
  const [modalActive,setModalActive] = useRQGlobalState('modal',false);
  return (
    <section className="pb-[30px]">
      <div className="container mx-auto">
        <div className="development-box">
          <ul className="mx-auto flex list-none items-center justify-center py-[35px] text-center">
            <li className="flex flex-col items-center justify-center border-r border-gray-400 px-[15px] sm:px-[40px]">
              <img src="/development-icon.webp" alt="development-icon" />
              <h3 className="pt-[14px]   font-semibold text-[#333] text-[13px] lg:text-[15px] 2xl:text-[20px] ">
                Web Development
                <br /> Technologies
              </h3>
            </li>
            <li className="flex flex-col items-center justify-center px-[15px] sm:px-[40px]">
              <img src="/development-icon-2.webp" alt="development-icon" />
              <h3 className="pt-[14px]   font-semibold text-[#333] text-[13px] lg:text-[15px] 2xl:text-[20px] ">
                Mobile Application <br />
                Technologies
              </h3>
            </li>
          </ul>
        </div>
        <div className="heading">
          <h3 className="py-[10px] text-center font-bold text-black text-[20px] lg:text-[26px] xl:text-[35px] 3xl:text-[42px]">
            You Name It, We've Got It!
          </h3>
          <p className="text-center  text-[#666] text-[13px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]">
            We build state of the art, hi-tech mobile apps, web apps and offer
            marketing solutions that lie in the intersection of technology, and
            innovation. Ecommerce Inside is fully equipped in terms of the
            latest tools, languages, and frameworks. We deliver the best and
            nothing less.
          </p>
        </div>
      </div>
      <div className="container-fluid mx-auto px-[20px] lg:px-[60px] ">

        <div className="row -mx-[15px] flex flex-col flex-wrap items-center justify-center py-[37px] lg:flex-row ">
          
          <div className="technology-icon-wrap lg:max-w-[41.66%]">
            <ul className="technology-leaf-list flex list-none flex-wrap items-center justify-center">
              {leftTechLeafData.map((leaf, index) => (
                <li className="leaf-list m-[12px]" key={index}>
                  <TechLeaf leaf={leaf} />
                </li>
              ))}
            </ul>
          </div>
          <div className="technology-icon-wrap mx-3 flex hidden max-w-[8.33%] flex-col lg:block">
            <ul className="list-none text-center">
              <li className="relative pb-[90px]  text-[12px] font-extrabold text-black before:absolute before:bottom-[15%] before:left-[50%] before:h-[50px] before:w-[1px] before:bg-black md:text-[14px]">
                Languages
              </li>
              <li className="relative pb-[90px]  text-[12px] font-extrabold text-black before:absolute before:bottom-[15%] before:left-[50%] before:h-[50px] before:w-[1px] before:bg-black md:text-[14px]">
                Frameworks
              </li>
              <li className="pb-[90px] text-[12px]  font-extrabold text-black md:text-[14px]  ">
                Databse
              </li>
            </ul>
          </div>

          <div className="technology-icon-wrap lg:max-w-[41.66%]">
            <ul className="technology-leaf-list flex list-none flex-wrap items-center justify-center">
              {rightTechLeafData.map((leaf, index) => (
                <li className="leaf-list m-[12px]" key={index}>
                  <TechLeaf leaf={leaf} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="about-btn flex flex-col md:flex-row items-center justify-center gap-8">
        <CollisionButton variant="Dark" onClick={()=>setModalActive(true)}>Let's Get Started</CollisionButton>
      </div> */}
    </section>
  );
};

export default Expertise;
