import React from 'react';
import NextImage from './ui/NextImage';
import Link from 'next/link';

const CTAContact = () => {
  return (
    <section className="section relative overflow-hidden border border-t-lightborder lg:py-[100px] xl:py-[100px] 2xl:py-[100px]">
      <div className="div_container relative">
        <h1 className="gradient_text mx-auto text-center text-[54px] font-bold uppercase">
          Ready
        </h1>
        <h1 className="mb-2 mt-6  text-center text-[24px] font-bold uppercase">
          To Work With Us?
        </h1>
        <p className="section_description text-center">
          Contact us to discuss your logo design or general inquiries
        </p>

        <div className="contact relative w-fit flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center gap-4 mx-auto">
          <div className="phone_contact relative w-[320px]">
            <div className="phone flex w-fit border-2 border-dark p-4">
              <NextImage src={'/images/phone_icon.png'} alt='Phone Icon' height={53} width={53} />
            </div>
            <Link
              href={'tel:937-814-5702'}
              className="absolute left-20 top-4 bg-white py-2"
            >
              <p className="text-[14px] text-black ">
                Call Us Anytime
                <br />
                <span className="text-[18px] font-bold">937-814-5702</span>
              </p>
            </Link>
          </div>
          <div className="chat_contact relative w-[320px]">
            <div className="chat flex w-fit border-2 border-dark p-4 px-5">
              <NextImage src={'/images/chat_icon.png'} alt='chat Icon' height={47} width={47} />
            </div>
            <Link
              href={'mailto:instantdesignstudio.com'}
              className="absolute left-20 top-4 bg-white py-1"
            >
              <p className="text-[14px] text-black ">
                Talt to Us Now To
                <br />
                <span className="text-[18px] font-bold">instantdesignstudio.com</span>
              </p>
            </Link>
          </div>
        </div>

        <div className="Section_Spinners absolute bottom-0 right-0 z-[1]  w-fit animate-spin">
          <NextImage
            src={'/images/section_spin_elem2.png'}
            alt="Section Left Box Spiner"
            width={105}
            height={102}
          />
        </div>
      </div>
      <div className=" absolute top-0 left-0 -z-[1] hidden  xl:block 2xl:block">
          <NextImage
            src={'/images/bg-mobile.webp'}
            alt="Section Mobile Image"
            width={461}
            height={497}
          />
        </div>
      <div className="absolute top-1/2 right-0  -z-[1] hidden  xl:block 2xl:block">
          <NextImage
            src={'/images/bg-rectangular.webp'}
            alt="Section Rectangular Image"
            width={241}
            height={37}
          />
        </div>
    </section>
  );
};

export default CTAContact;
