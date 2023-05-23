import { url } from 'inspector'
import React, { FC } from 'react'

const ServicesCard: FC = ({ service }) => {
    return (
        // <div className={`bg-[url('/service-img-2.webp')] bg-cover bg-no-repeat bg-center relative px-9 flex flex-col h-[385px]  justify-center border group`}>
        <div  className={`bg-[url('/service-img-2.webp')] bg-cover bg-no-repeat bg-center relative flex flex-col h-[385px]  justify-center border group px-[15px] md:px-[50px]`}  style={{backgroundImage:`url(${service.img})`}}>
            <div className=' group-hover:hidden flex flex-col'>
                <img src={service.icon} alt="" className='pb-[15px] h-[54px] w-[50px] ' />
                <h3 className='text-h4 md:text-base2 text-white font-bold pb-[20px]'>{service.title}</h3>
                <ul className='flex flex-wrap list-none'>
                    {service.cat.map(({catagory,index}:any) => (
                        <li className='first:border-l-0 first:pl-0 uppercase text-xs px-[12px] border-l border-gray-400 text-gray-400' key={index}>{catagory}</li>
                    ))}
                </ul>
            </div>
            <div className="servie-para  group-hover:block flex flex-col">
                <h5 className='text-p md:text-base2 text-caribbeangreen font-bold pb-[20px]'>{service.title}</h5>
                <ul className='flex flex-wrap list-none'>
                {service.cat.map(({catagory,id}:any) => (
                        <li className='first:border-l-0 first:pl-0 uppercase text-xs px-[12px] border-l border-gray-400 text-gray-400' key={id}>{catagory}</li>
                    ))}
                </ul>
                <p className=' text-white text-sm pt-3'>{service.desc}</p>
                <a href={service.link} className='text-caribbeangreen text-sm'>Read More</a>
            </div>
        </div>
    )
}

export default ServicesCard