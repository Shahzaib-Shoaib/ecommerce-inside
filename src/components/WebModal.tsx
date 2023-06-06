'use client'
import React, { FC,useState } from 'react'
import * as Dialog from 'rc-dialog';
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import Button from './ui/Button';

const WebModal:FC = () => {
    const [isModalOpen,setIsModalOpen] = useState(true);
    function openModal() {
      setIsModalOpen(true);
    }
  
    function closeModal() {
      setIsModalOpen(false);
    }
    
  return (

      <div className="fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center overflow-hidden h-[100vh]">
        <div className="Modal_wrapper p-4 flex flex-col ">
          <div className="rounded-full w-10 h-10 flex items-center justify-center place-self-end bg-white border z-[51] border-gray-500 -mr-5 -mb-5">
          <IoClose size={24} className='text-black' />
          </div>
          <div className="relative modal_content bg-darkblue border-2 border-darkblue min-w-[320px] lg:w-[450px] xl:w-[450px] 2xl:w-[450px] sm:h-[390px] md:h-[390px] lg:h-[390px] xl:h-[390px] 2xl:h-[390px]  3xl:w-[900px] 4xl:w-[900px] 5xl:w-[1200px] 6xl:w-[1200px]">
            <div className="images sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden bg-caribbeangreen h-full w-[75%] p-9">
              <div className="grid grid-cols-4 gap-7">
                <div className="img shadow-2xl shadow-black border border-black col-span-2 max-w-[363px] max-h-[250px]">
                  {/* <img src="/images/popup-image-1.webp" alt="Popup img 1" className=''/> */}
                  <Image src={"/images/popup-image-1.webp"} alt='Popup img 1' width={363} height={250} className='object-fill' />
                </div>
                <div className="img shadow-2xl shadow-black border border-black col-span-2 max-w-[363px] max-h-[250px]">
                {/* <img src="/images/popup-image-2.webp" alt="Popup img 2" /> */}
                  <Image src={"/images/popup-image-2.webp"} alt='Popup img 2' width={363} height={250} className='object-fill' />
                </div>
                <div className="img shadow-2xl shadow-black border border-black col-span-1 max-w-[197px] max-h-[316px] bg-white">
                {/* <img src="/images/popup-image-3.webp" alt="Popup img 3" /> */}
                  <Image src={"/images/popup-image-3.webp"} alt='Popup img 3' width={197} height={316} className='object-cover' />
                </div>
                <div className="img shadow-2xl shadow-black border border-black bg-[#082187] col-span-2 max-w-[380px] max-h-[316px]">
                {/* <img src="/images/popup-image-4.webp" alt="Popup img 4" /> */}
                  <Image src={"/images/popup-image-4.webp"} alt='Popup img 4' width={380} height={316} className='object-fill' />
                </div>
              </div>
            </div>
  
  
          <div className="bg-darkblue border-2 border-caribbeangreen absolute right-0 top-0 bottom-0 my-auto h-[390px] min-w-[320px] w-full 3xl:w-[370px] 4xl:w-[370px] 5xl:w-[480px] 6xl:w-[480px] p-6">
            <h6 className="text-white font-medium uppercase mb-4">GET UPTO</h6>
            <h1 className="text-caribbeangreen font-extrabold uppercase mb-6 text-[60px]">75% OFF</h1>
            <h6 className="text-white font-medium uppercase mb-2">ON ALL SERVICES</h6>
            <p className="text-white font-medium uppercase mb-2">*OFFER IS AVAILABLE FOR A LIMITED TIME!</p>
            <form id="Get Started">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control  w-full "
                    placeholder="Enter Your Email Address"
                    size={50}
                  />
                </div>
                <div className="mt-[20px]  border border-white rounded-md w-fit">
                  <Button variant="Green" className="">
                    Let's Get Started
                  </Button>
                </div>
              </form>
          </div>
          </div>
  
        </div>
      </div>
  )
}

export default WebModal