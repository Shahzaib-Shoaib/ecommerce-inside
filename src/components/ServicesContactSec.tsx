import React, { FC } from 'react'
import ContactForm from './ContactForm'

const ServicesContactSec:FC = () => {
  return (
    <section className="overflow-hidden">
        <div className="div_container">
        <div className="flex flex-col 3xl:flex-row justify-between 4xl:flex-row 5xl:flex-row 6xl:flex-row">
          <div className="contact_slider w-full flex  flex-col 3xl:w-[30%] 4xl:w-[30%] 5xl:w-[30%] 6xl:w-[30%]">
            <h5 className='text-caribbeangreen mb-2 text-[24px]'>Let's build</h5>
            <h1 className='text-black tex-[45px] mb-4'>We're all</h1>
            <h1 className="strokeheading font-extrabold text-[72px]">EARS</h1>
          </div>
          <div className="w-full  sm:mt-12 md:mt-12 lg:mt-12 xl:mt-12 2xl:mt-12 3xl:w-[70%] 4xl:w-[70%] 5xl:w-[70%] 6xl:w-[70%] ">
            <ContactForm />
          </div>
        </div>
        </div>
      </section>
  )
}

export default ServicesContactSec