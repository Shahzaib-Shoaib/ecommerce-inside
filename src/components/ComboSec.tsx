'use client'
import React from 'react';
import { Icons } from './Icons';
import Link from 'next/link';
import { Button } from './ui/Button';
import NextImage from './ui/NextImage';
import useRQGlobalState from '@/utils/useRQGlobalState';

const ComboSec = () => {
  const [modalActive, setModalActive]: any = useRQGlobalState("modal", false);
  return (
    <section className="section overflow-hidden relative border border-b-lightborder bg-garysec lg:py-24 xl:py-24 2xl:py-24">
      <div className="div_container flex flex-col xl:flex-row 2xl:flex-row">
        <div className="combo_info mb-5">
          <h2 className="mb-3 font-extrabold  leading-tight text-blue lg:text-[50px] xl:text-[50px] 2xl:text-[50px]">
            All in one
          </h2>
          <h2 className="gradient_text mb-2 text-[62px]  font-extrabold uppercase leading-[0.75] lg:text-[133px] xl:text-[133px] 2xl:text-[133px]">
            Combo
          </h2>
          <p className="mb-7 text-[24px] font-medium leading-snug text-black ">
            Ultimate Value for Start-ups and Businesses
          </p>
          <ul className="combo_points md:columns-2 lg:columns-2 xl:columns-2 2xl:columns-2">
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              Unlimited Custom Logo Design Concepts
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />6
              Dedicated Designers
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              UNLIMITED Pages Website
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              Mobile Responsive
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              Icon Design
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              UBusiness Card, Letterhead, Envelope
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              MS Word Letterhead
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />5
              Stock Photos + 3 Banner Designs
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              Complete W3C Certified HTML
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              Complete Deployment
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              Facebook Page Design
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              All Final File Formats
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              Dedicated Account Manager
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              100% Ownership Rights
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              100% Satisfaction Guarantee
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              100% Unique Design Guarantee
            </li>
            <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
              <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
              100% Money Back Guarantee
            </li>
          </ul>
        </div>
        <div className="combo_card relative rounded-lg border-2 border-blue bg-gradient-to-br from-blue to-purpule md:mx-auto md:w-[80%] lg:mx-auto lg:w-[80%]">
          <div className="info mb-5 flex flex-col items-center justify-center px-5 py-8">
            <h3 className="mb-2 text-[26px] font-bold text-white lg:text-[42px] xl:text-[42px] 2xl:text-[42px]">
              Combo Packages
            </h3>
            <h3 className="text-[16px]  text-white lg:text-[20px] xl:text-[20px] 2xl:text-[20px]">
              Complete Branding Solution
            </h3>
          </div>
          <div className="price mb-4 flex flex-col items-center justify-center  sm:flex-row sm:gap-8 md:flex-row md:gap-8 lg:flex-row lg:gap-8 xl:flex-row xl:gap-3 2xl:flex-row 2xl:gap-4">
            <h3 className="w-fit text-[72px] font-bold leading-[1]  text-white lg:text-[110px] xl:text-[110px] 2xl:text-[110px]">
              $999
            </h3>
            <h6 className="w-fit text-center text-[24px] font-bold text-white">
              <span className="line-through decoration-purpule">$2,999</span>
              <br />
              Only
            </h6>
          </div>
          <div className="dicount bg-black py-3">
            <h6 className="text-center text-[22px] font-bold uppercase text-green lg:text-[30px] xl:text-[30px] 2xl:text-[30px]">
              20% off <span className="capitalize text-white">Next Order</span>
            </h6>
          </div>
          <div className="info flex flex-col items-center justify-center px-5 py-8">
            <Link href={'tel:937-814-5702'} className="mb-8">
              <p className="text-center text-[16px] text-white">
                Speak with Us
                <br />
                <span className="font-semibold">937-814-5702</span>
              </p>
            </Link>
            <Button
              variant={'animated'}
              borders={'rounded'}
              className="border-2 border-white !bg-black uppercase"
              onClick={() => setModalActive(true)}
            >
              Start Project
            </Button>
          </div>
          <div className="Section_Spinners absolute -top-20 -right-20 z-[1]  w-fit animate-spin">
            <NextImage
              src={'/images/section_spin_elem2.png'}
              alt="Section Left Box Spiner"
              width={105}
              height={102}
            />
          </div>
        </div>
      </div>
      <div className="Section_Spinners absolute bottom-4 left-4 z-[1]  w-fit animate-spin">
        <NextImage
          src={'/images/section_spin_elem2.png'}
          alt="Section Left Box Spiner"
          width={105}
          height={102}
        />
      </div>
    </section>
  );
};

export default ComboSec;
