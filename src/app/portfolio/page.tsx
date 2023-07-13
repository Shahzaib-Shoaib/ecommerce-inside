import React from 'react'
import { NextPage } from 'next';
import PagesBanner from '@/components/PagesBanner';
import Gallery from '@/components/Filters/Gallery';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/Button';

const Portfolio:NextPage = () => {
  return (
    <div className='portfolio_page'>
      {/* Portfolio Banner */}
      <PagesBanner bgImage='/images/banner-portfolio.png' image={'/images/banner-item-portfolio.png'} mainHeading='At Instant Design Studio, Everything Is Possible' subHeading='Serving Clients Worldwide' desc='We are a team of creative thinkers and problem solvers dedicated
to expanding the limits of what is possible by helping brands
achieve their goals.' />
      
      
      {/* Gallery  */}
      <section className="section relative border border-b-lightborder">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">
              Goal and Client-Oriented Web Designs
            </h6>
            <h3 className="section_mainheading text-center">
              Together With Focused Marketing Methods
            </h3>
            <p className="section_description text-center">
              We create brands with impeccable logo and design knowledge
              incorporated with terms that <br /> attract your target audience.
            </p>
            <p className="section_italic_description text-center">
              Your Goals, Our Services!
            </p>
          </div>
          <Gallery />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10 ">
            <div className="contact_details  flex items-center ">
              <Icons.phone className="mr-3 h-7 w-7 rotate-45 text-blue" />
              <div className="flex flex-col items-start justify-center">
                <p className="text-[14px] uppercase text-black font-medium">Call us at</p>
                <p className="font-bold uppercase text-black text-[22px]">
                  937-814-5702
                </p>
              </div>
            </div>
            <Button variant={'animated'}>GET STARTED</Button>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Portfolio