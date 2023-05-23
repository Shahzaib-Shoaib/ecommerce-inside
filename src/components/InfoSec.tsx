import React, { FC } from 'react'
import Button from './ui/Button'
import useRQGlobalState from '~/utils/useRQGlobalState';

interface InfoSecProps {
    smallHeading :string,
    mainHeading:string,
    desc:string,
    infocardData: Array<object>
}

const InfoSec:FC<InfoSecProps> = ({smallHeading,mainHeading,desc,infocardData}) => {
  const [modalActive,setModalActive] = useRQGlobalState('modal',false);
  return (
    <section className=" about-choose-section bg-[url('/about-choose-bg.webp')] bg-cover bg-no-repeat py-[60px] md:py-[90px]">
        <div className="container mx-auto px-[15px]">
          <div className="about-choose-heading text-center">
            <h2 className="text-[24px] font-medium leading-[1.2] text-[#241f2e] ">
              {smallHeading}
            </h2>
            <h3 className="choose-heading text-[28px] font-extrabold leading-[1.2] text-[#241f2e] md:text-[46px] lg:text-[60px] ">
              {mainHeading}
            </h3>
            <p className="choose-para text-[16px] leading-[24px] text-[#666] md:text-[20px] md:leading-[35px]">
              {desc}
            </p>
          </div>

          <div className="choose-cards grid grid-cols-1 gap-[15px] py-[40px] md:grid-cols-2 md:pb-[40px] md:pt-[90px] lg:grid-cols-3">
            {infocardData.map((item) => (
              <div className="choose-card mb-[30px] h-[300px] rounded-br-[50px] rounded-tl-[50px] bg-[#1b1037] px-[33px] py-[50px] duration-300 hover:bg-caribbeangreen hover:shadow-xl">
                <div className="card-title flex items-center">
                  <img src={`/${item.img}`} alt="icon" />
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

          <div className="about-btn  flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button variant="Dark" className="" onClick={()=>setModalActive(true)}>
              Let's Get Started
            </Button>
            <Button variant="Green">Consult An Expert</Button>
          </div>
        </div>
      </section>
  )
}

export default InfoSec