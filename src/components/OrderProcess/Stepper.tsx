import React, { useEffect, useState, useRef } from "react";

const Stepper = ({
  currentStep,
  brief,
}: {
  currentStep: Number;
  brief: string;
}) => {


  return (
    <div className="dev_container mx-auto">
      <div className="mx-auto flex items-center justify-between p-4 max-w-[900px] px-11 ">
      <div className="flex w-full items-center p-">
            <div className="relative flex flex-col items-center justify-center text-darkblue mx-auto">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full border border-darkblue py-3 transition duration-500 ease-in-out ${currentStep === 1 ? "bg-darkblue text-white" : null}`}>
                {/* Display Number */}1
              </div>
              <div className="absolute top-0 mt-16 w-32 text-center text-lg font-bold sm:text-[16px] md:text-[16px]">
                {/* Display Description */}Order Now
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out ">
              {/* Display Line */}
            </div>
          </div>
          <div className="flex w-full items-center ">
            <div className="relative flex flex-col items-center justify-center text-darkblue">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full border border-darkblue py-3 transition duration-500 ease-in-out ${currentStep === 2 ? "bg-darkblue text-white" : null}`}>
                {/* Display Number */}2
              </div>
              <div className="absolute top-0 mt-16 w-32 text-center text-lg font-bold sm:text-[16px] md:text-[16px]">
                {/* Display Description */}{brief}
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out ">
              {/* Display Line */}
            </div>
          </div>
          <div className="flex w-fit items-center ">
            <div className="relative flex flex-col items-center justify-center text-darkblue">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full border border-darkblue py-3 transition duration-500 ease-in-out ${currentStep === 3 ? "bg-darkblue text-white" : null}`}>
                {/* Display Number */}3
              </div>
              <div className="absolute top-0 mt-16 w-32 text-center text-lg font-bold sm:text-[16px] md:text-[16px]">
                {/* Display Description */}Payment
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Stepper;
