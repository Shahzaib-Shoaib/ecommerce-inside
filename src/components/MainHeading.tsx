import React, { FC } from 'react'

type MainHeadingProps = {
    subHeading: string;
    mainHeading:string;
    spanHeading:string;
    desc:String | null;
}

const MainHeading:FC<MainHeadingProps> = ({subHeading,mainHeading,spanHeading,desc}) => {
  return (
    <div className="sec_heading text-center">
        <h6 className='font-semibold leading-[1.2]'>{subHeading}</h6>
        <div className="flex items-center justify-center my-3">

        <h1 className="main_heading font-bold text-[#1b1037] leading-[1.2]">{mainHeading}</h1>
        <h1 className="text-caribbeangreen ml-2">{spanHeading}</h1>
        </div>
        <p className="text-[#666] font-normal">{desc}</p>
    </div>
  )
}

export default MainHeading