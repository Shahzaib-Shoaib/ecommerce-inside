import React,{FC} from 'react'

interface MainHeadingProps {
    subHeading: string;
    mainHeading:string;
    spanHeading:string;
    desc:String | null;
}

const MainHeading:FC<MainHeadingProps> = ({subHeading,mainHeading,spanHeading,desc}) => {
  return (
    <div className='section-heading text-center'>
        <h2 className="sub-heading xs:text-[16px] xs:pb-[5px] text-[#666] xs:font-semibold xs:leading-[1.2] sm:text-[20px] md:text-[24px]  ">
            {subHeading}
        </h2>
        <h3 className="main-heading xs:font-bold font-bold xs:text-[#1b1037] xs:py-[10px] xs:leading-[1.2] xs:text-[20px] sm:text-[26px] md:text-[28px] lg:text-[35px] xl:tex-[45px]">{mainHeading}
        <br /><span className='text-caribbeangreen'>{subHeading}</span>
        </h3>
        <p className="desc text-[#666] font-normal xs:text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] ">{desc}</p>
    </div>
  )
}

export default MainHeading