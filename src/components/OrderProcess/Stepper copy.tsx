import React, { useEffect, useState, useRef } from "react";

const Stepper = ({
  currentStep,
  brief,
}: {
  currentStep: Number;
  brief: string;
}) => {
  const steps = ["Order Now", brief, "Payment"];
  const [newStep,setNewStep] = useState([]);
  const stepRef = useRef(null);

const updateStep = (stepNumber:Number,steps:Array<string>)=>{
    //
};

  useEffect(() => {
    //create object
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepsState;
    const current = updateStep(currentStep -1, stepRef.current );
    setNewStep(current);
  }, [currentStep, brief]);

  const displaySteps = (
    <div className="flex w-full items-center ">
      <div className="relative flex flex-col items-center justify-center text-darkblue">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-darkblue py-3 transition duration-500 ease-in-out">
          {/* Display Number */}1
        </div>
        <div className="absolute top-0 mt-16 w-32 text-center text-lg font-bold">
          {/* Display Description */}Order Now
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out ">
        {/* Display Line */}
      </div>
    </div>
  );

  return (
    <div className="dev_container mx-auto">
      <div className="mx-4 flex items-center justify-between p-4">
        {displaySteps}
      </div>
    </div>
  );
};

export default Stepper;
