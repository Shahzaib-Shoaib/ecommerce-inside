import Link from 'next/link'
import React, { FC } from 'react'
import { FaFacebookF, FaLinkedinIn, FaEnvelopeOpenText } from "react-icons/fa";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";

const TopBar:FC = () => {
  return (
    <div className="flex items-center justify-between bg-darkblue py-[10px] text-white">
      {/* Left Side Social Icons */}
      <div className="social_icons flex items-center">
        <Link href={'#'} className='border-r border-white px-3 hover:text-caribbeangreen'>
        <FaFacebookF size={18} aria-label='Facebook'/>
        </Link>
        <Link href={'#'} className='border-r border-white px-3 hover:text-caribbeangreen'>
        <BsInstagram size={18} aria-label='Instagram' />
        </Link>
        <Link href={'#'} className='px-3 hover:text-caribbeangreen'>
        <FaLinkedinIn size={18} aria-label='LinkedIn' />
        </Link>
      </div>

      {/* Right Contact Info and Icons */}
      <div className="contact_info flex items-center">
        <Link href={'mailto:info@ecommerceinsideuae.com'} className='flex items-center px-1 hover:text-caribbeangreen xl:px-3 2xl:px-3 3xl:px-3 4xl:px-3 5xl:px-3 6xl:px-3'>
        <FaEnvelopeOpenText size={18} className="mr-3" aria-label='Email'/>
          <span className="hidden xl:block 2xl:block 3xl:block 4xl:block 5xl:block 6xl:block">info@ecommerceinsideuae.com</span>
        </Link>
        <Link href={'tel:+971547956331'} className='flex items-center px-1 hover:text-caribbeangreen xl:px-3 2xl:px-3 3xl:px-3 4xl:px-3 5xl:px-3 6xl:px-3'>
        <BsFillTelephoneFill size={18} className="mr-3" aria-label='Phone'/>
          <span className="hidden xl:block 2xl:block 3xl:block 4xl:block 5xl:block 6xl:block">+971 54 795 6331</span>
        </Link>
      </div>
    </div>
  )
}

export default TopBar