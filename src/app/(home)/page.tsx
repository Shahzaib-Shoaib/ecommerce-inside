'use client';
import { Button } from '@/components/ui/Button';
import NextImage from '@/components/ui/NextImage';
import { NextPage } from 'next';
import Image from 'next/image';
import Categories from '@/components/Filters/Categories';
import GetStarted from '@/components/GetStarted';
import { Icons } from '@/components/Icons';
import Gallery from '@/components/Filters/Gallery';
import Packages from '@/components/Filters/Packages';
import CTA from '@/components/CTA';
import ComboSec from '@/components/ComboSec';
import CTAContact from '@/components/CTAContact';
import Testimonials from '@/components/Testimonials';
import useRQGlobalState from '@/utils/useRQGlobalState';

const Home: NextPage = () => {
  const [modalActive, setModalActive]: any = useRQGlobalState("modal", false);

  return (
    <div className="home_page">
      {/* Banner */}
      <section className="home_banner banner relative w-full  bg-[url('/images/home_banner_bg.webp')] bg-cover 2xl:h-[850px]">
        <div className="div_container flex items-center justify-between">
          <div className="banner_content p-4 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            <h6 className="banner-subheading uppercase">
              PROFICIENT DESIGN AGENCY.
            </h6>
            <h1 className="banner_mainheading">
              Built To Rebel <br /> Against Boring
            </h1>
            <p className="banner_description">
              We're a creative digital branding agency based in Ohio, USA that
              creates buzz for brands who refuse to blend in.
            </p>
            <Button variant={'animated'} onClick={() => setModalActive(true)}>GET STARTED</Button>
          </div>
          <div className="banner_img hidden w-1/2 lg:block xl:block 2xl:block">
            <Image
              src={'/images/home_banner_img.webp'}
              alt="Instant Design Studio Banner"
              priority={true}
              width={847}
              height={564}
              className=""
            />
          </div>
        </div>
      </section>

      {/* History */}
      <section className="history border border-y-lightborder  p-[16px]">
        <div className="div_container flex flex-col items-center justify-center  xl:flex-row 2xl:flex-row">
          <h6 className="mb-[15px] text-center text-lighttext lg:text-left lg:text-[18px]   xl:m-0 xl:mr-10 xl:border-r xl:border-r-lightborder xl:text-left xl:text-[18px] 2xl:m-0 2xl:mr-10 2xl:border-r 2xl:border-r-lightborder 2xl:text-left 2xl:text-[18px] ">
            Find Clarity In Chaos With Digital Branding Experiences That Create
            History
          </h6>
          <Image
            src={'/images/visionary-businesses.png'}
            alt="Instant Design Studio history"
            priority={true}
            width={956}
            height={91}
            className="my-auto"
          />
        </div>
      </section>

      {/* Categories  */}
      <section className="section relative ">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">
              Our unparalleled websites
            </h6>
            <h3 className="section_mainheading text-center">
              To Build Concrete Digital Existence.
            </h3>
            <p className="section_description text-center">
              Let's face it! First impressions are the last when it comes to
              branding. We know it and have done it, wondering what our secret
              is. It's because brands that win new fans are the brave ones that
              go beyond their creative comfort zone.
            </p>
          </div>
          <Categories />
        </div>
        <div className="Section_Spinners absolute bottom-16 left-10 -z-[1]  w-fit animate-spin">
          <NextImage
            src={'/images/section_spin_elem2.png'}
            alt="Section Box Spiner"
            width={115}
            height={112}
          />
        </div>
        <div className="Section_Spinners absolute bottom-16 right-10 -z-[1]  w-fit animate-spin">
          <NextImage
            src={'/images/section_spin_elem.png'}
            alt="Section Trangles Spinner"
            width={110}
            height={125}
          />
        </div>
      </section>

      {/* Get Started */}
      <GetStarted />

      <section className="section">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">
              Build Experience-Driven Digital Designs
            </h6>
            <p className="section_description mb-5 text-center">
              We help you by wowing your audience through stunning designs.
              Fueled by creatives, strategists, analytics, and developers
              combined with agile methodology, we strengthen your brand personas
              through impressive digital experiences. We are driven by
              measurable business results and will tackle your biggest
              challenges boldly.
            </p>
            <p className="section_italic_description text-center ">
              Power your brand with bespoke impactful designs.
            </p>
          </div>
        </div>
      </section>

      {/* Endorse Section */}
      <section className="section relative w-full  bg-[url('/images/bg-endorse-section.webp')] bg-cover">
        <div className="div_container">
          <div className="flex items-center justify-between">
            <div className="banner_img hidden w-1/2 lg:block xl:block 2xl:block">
              <Image
                src={'/images/endorse_img.webp'}
                alt="Instant Design Studio Endorse Image"
                priority={true}
                width={868}
                height={647}
                className=""
              />
            </div>
            <div className="banner_content p-4 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
              <h6 className="section-subheading text-blue">
              Endorse Your Business
              </h6>
              <h3 className="section_mainheading">
              With Influential Client Experience-Driven Websites.
              </h3>
              <p className="section_description mb-5">
              The creative team at Instant Design Studio knows how crucial a website presence in the digital world is. We believe in providing our customers with premium website solutions, therefore, we work closely with our clients to understand their requirements, deliver timely results, and boost up your business proficiency.
              </p>
              <div className="flex flex-col items-start gap-4 md:flex-row xl:flex-row 2xl:flex-row">
                <Button variant={'animated'} onClick={() => setModalActive(true)}>GET IN TOUCH</Button>
                <div className="contact_details m-0 flex items-center border-l-lightborder p-0 md:ml-8 md:pl-8 xl:ml-8 xl:border-l xl:pl-8 2xl:ml-8 2xl:border-l 2xl:pl-8">
                  <Icons.phone className="mr-3 h-7 w-7 rotate-45 text-blue" />
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-[10px] uppercase text-black">
                      Call us at
                    </p>
                    <p className="font-semibold uppercase text-black">
                      937-814-5702
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <Button variant={'animated'} onClick={() => setModalActive(true)}>GET STARTED</Button>
          </div>
        </div>
      </section>

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
        <div className="Section_Spinners absolute bottom-16 left-10 -z-[1]  w-fit animate-spin">
          <NextImage
            src={'/images/section_spin_elem.png'}
            alt="Section Left Trangles Spiner"
            width={155}
            height={152}
          />
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

      {/* CTA */}
      <CTA />

      {/* Combo Section */}
      <ComboSec />

      {/* CTA Contact */}
      <CTAContact />

      {/* Testimonials */}
      <Testimonials />


      
    </div>
  );
};

export default Home;
