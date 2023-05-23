import React from 'react'
import clientsData from '~/data/clientsData'
import ClientDtaCard from './cards/ClientDtaCard'

const Agencies = () => {
  return (
    <section className=" bg-white flex flex-col items-center justify-center  overflow-hidden py-[30px] lg:py-[50px] ">
          <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] items-center px-[15px]">

            <h2 className=" text-[#666] font-semibold text-center pb-[5px] text-[16px] md:text-[20px] 2xl:text-[24px] ">Top Digital Marketing Agencies in USA</h2>
            <h2 className=" text-darkblue font-extrabold text-center pb-[9px] sec_heading ">Ecommerce Inside is a name of excellence, expertise, and efficaciousness.</h2>
            {/* <h2 className=" text-darkblue font-extrabold text-center pb-[9px] text-[22px] lg:text-[30px] xl:text-[40px] ">Ecommerce Inside is a name of excellence, expertise, and efficaciousness.</h2> */}
            <p className=" text-gray-400 text-center text-[13px] lg:text-[14] xl:text-[16px] 2xl:text-[18px] md:max-w-[80%]  xl:max-w-[60%] mx-auto ">We are a team of experts from marketing and tech domains who master in producing the results you're anticipating for.</p>
          </div>
          <div className="md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 md:grid mt-[65px]">
            {
              clientsData.map((data,index)=>(
                <ClientDtaCard data={data} key={index} />
              ))
            }
          </div>
        </section>
  )
}

export default Agencies