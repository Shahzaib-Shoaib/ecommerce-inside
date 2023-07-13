import React from 'react';
import { Icons } from './Icons';
import Link from 'next/link';
import NextImage from './ui/NextImage';

const Footer = () => {
  return (
    <footer className='Footer'>

      {/* Main Footer */}
      <div className="footer_top bg-[url('/images/bg-footer.webp')] bg-cover py-5  xl:py-[60px] 2xl:py-[60px] px-4">
        <div className="div_container grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-5 gap-3">
          {/* Footer Info */}
          <div className="info_footer">
            <Link href={'/'} className='w-fit'>
              <NextImage src={'/images/white-logo.png'} alt='Instant Design Studio Logo' height={57} width={162} />
            </Link>
            <p className="web_desc text-[14px] text-darktext my-10">Full-stack Web, Mobile Design and Development Company.</p>
          </div>
          {/* Quick Links */}
          <div className="quick_links">
            <h6 className="text-[18px] text-white mb-6">Quick Links</h6>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Home
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                About Us
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Packages
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Combo Packages
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Portfolio
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Reviews
                </Link>
          </div>
          {/* Services */}
          <div className="services">
            <h6 className="text-[18px] text-white mb-6">Services</h6>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Website Development
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Logo Design
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Ecommerce Solutions
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Animation
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Illustration
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Marketing Collateral
                </Link>
          </div>
          {/* More Services */}
          <div className="more-services">
            <h6 className="text-[18px] text-white mb-6">More Services</h6>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Digital Marketing
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Creative Copywriting
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Mobile Apps
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                SEO Servicess
                </Link>
          </div>
          {/* Contact */}
          <div className="Contact_info">
            <h6 className="text-[18px] text-white mb-6">Get in Touch Now!</h6>
              <Link href={'tel:937-814-5702'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                937-814-5702
                </Link>
              <Link href={'mailto:instantdesignstudio.com'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                instantdesignstudio.com
                </Link>
              <Link href={'#'} className='text-darktext relative tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue pl-5'>
                <Icons.play className='w-[14px] h-[14px] absolute top-1 left-0' />
                261 North Main St. Front Office Building Centerville, OH 45459
                </Link>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="footer_bottom border-t border-t-[#5d5c5e] bg-[#212121] py-3 px-4">
        <div className="div_container flex items-center justify-center gap-3 flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:justify-between xl:justify-between 2xl:justify-between">
          <p className="text-lighttext">
            Copyright © 2023 Instant Design Studio All Rights Reserved.
          </p>
          <div className="socials flex items-center gap-2">
            <Link
              href={
                'https://www.facebook.com/people/Instant-Design-Studio/100086453293848/'
              }
              className="facebook_social flex items-center justify-center rounded-full bg-white p-2"
              aria-aria-label='Instant Design Studio Facebook'
            >
              <Icons.facebook className="" />
            </Link>
            <Link
              href={'https://www.instagram.com/instantdesignstudio1/'}
              className="facebook_social flex items-center justify-center rounded-full bg-white p-2"
              aria-aria-label='Instant Design Studio Instagram'

            >
              <Icons.insta className="" />
            </Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
