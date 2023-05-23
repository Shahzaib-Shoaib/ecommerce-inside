import React, { FC } from "react";
import {IoCloseSharp} from 'react-icons/io5';
import useRQGlobalState from "~/utils/useRQGlobalState";

const MyModal: FC = () => {


  const [modalActive,setModalActive] = useRQGlobalState('modal',false);
    // if(!visible) return null;
    if(!modalActive) return null;


  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm animate-appear-down">
      <div className="relative flex rounded-[0.3rem] border-2 border-[#1b1035] bg-white items-center justify-center">
        <div className="flex">
          <div className="flex min-h-full flex-col  gap-8 bg-caribbeangreen p-[45px]">
            <div className="cross top-[-85px] right-[-150px] absolute z-50 sm:top-[-110px] sm:right-[-210px] md:top-[-25px] md:right-[-25px] rounded-full bg-white h-[45px] w-[45px] flex justify-center items-center border-[2px] border-[#cbcbcb] cursor-pointer hover:bg-darkblue hover:text-white" onClick={()=>setModalActive(false)}>
                <IoCloseSharp size={25} onClick={()=>setModalActive(false)} />
            </div>
            <div className="row hidden md:flex gap-8">
              <img
                src="/popup-image-1.webp"
                alt=""
                className="border border-[#1b1035] shadow-md shadow-black"
              />
              <img
                src="/popup-image-2.webp"
                alt=""
                className="border border-[#1b1035] shadow-md shadow-black"
              />
            </div>
            <div className="row hidden md:flex gap-8">
              <img
                src="/popup-image-3.webp"
                alt=""
                className="border border-[#1b1035] shadow-md shadow-black"
              />
              <img
                src="/popup-image-4.webp"
                alt=""
                className="bg-blue border border-[#1b1035] shadow-md shadow-black bg-[#082187]"
              />
            </div>
          </div>
          <div className=" w-[300px]  bg-darkblue hidden md:block"></div>
          <div className="w-[350px] md:w-[450px] p-[15px] -top-[70%] right-[-145%] absolute border-4 border-caribbeangreen bg-darkblue sm:right-[-210%] sm:top-[-100%] md:right-0 md:top-[25%] flex flex-col flex-wrap sm:p-[15px]">
            <h3 className="uppercase text-white text-[30px] leading-[45px] font-[500]">GET UPTO</h3>
            <h3 className="uppercase text-caribbeangreen text-[60px] leading-[45px] font-[900]">75% OFF</h3>
            <h3 className="uppercase text-white text-[30px] leading-[45px] font-[500]">on all services</h3>
            <p className="uppercase text-white text-[14px] font-[600]">*OFFER IS AVAILABLE FOR A LIMITED TIME!</p>
          <div className="getStarted-form w-[350px]">
              <form id="Get Started">
              <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control input-lg w-full " placeholder="Enter Your Email Address" size={50}/>
                </div>
                <input type="submit"  value={"Let's Get Started"}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
