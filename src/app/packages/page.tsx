import React from 'react';
import { NextPage } from 'next';
import PagesBanner from '@/components/PagesBanner';
import NextImage from '@/components/ui/NextImage';
import Packages from '@/components/Filters/Packages';

const Package: NextPage = () => {
  return (
    <div className="packages_page">
      {/* Packages Banner */}
      <PagesBanner
        bgImage="/images/banner-packages.png"
        image={'/images/banner-item-package.webp'}
        mainHeading="Customer Base because of our High-End Work"
        subHeading="We are Loved & Supported by our"
        desc="We highly regard our customers reviews as it helps us to do better in the future and apply any changes in our work processes if required"
      />

      {/* Packages  */}
      <section className="section relative ">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">
            Our Price Model
            </h6>
            <h3 className="section_mainheading text-center">
            ROI-Oriented Pricing Packages For Your Success That Are Worth Every Penny
            </h3>
            <p className="section_description text-center">
            Crafting responsive, search-engine friendly digital experiences with impactful, impressive results that effectively position your brand in today's increasingly complex landscape. There's no one model for all bands, which is why we offer tailored quotes that meet your business needs.
            </p>
            <p className="section_italic_description text-center">
            Turbocharge your brand
            </p>
          </div>
          <Packages />
          
        </div>
        <div className="Section_Spinners absolute bottom-16 right-10 -z-[1]  w-fit animate-spin">
          <NextImage
            src={'/images/section_spin_elem.png'}
            alt="Section Right Trangles Spinner"
            width={100}
            height={115}
          />
        </div>
      </section>
      
    </div>
  );
};

export default Package;
