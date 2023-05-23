import React, { FC } from 'react'
import ContactForm from './ContactForm'


const ServicesContact:FC = () => {
  return (
    <section>
        <div className="container px-[15px] mx-auto flex flex-col md:flex-row py-[70px] justify-between">
            <div className="inner-form-wrap  flex justify-between md:w-[30%]">
                <div className="heading px-[15px]">
                    <h2 className="text text-caribbeangreen font-semibold pb-2 leading-[1.2] md:text-[24px] ">Let's build</h2>
                    <h3 className='text-[#333] font-bold text-[45px] leading-[1.2] lg:text-[55px]'>We’re all</h3>
                    <h4 className="strokeheading uppercase text-[72px] leading-[60px] font-bold " >ears</h4>
                </div>
            </div>
            <div className="services-contact-form md:w-[70%]">
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ServicesContact