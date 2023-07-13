import AboutServicesSec from '@/components/AboutServices';
import CTA from '@/components/CTA';
import ServicesGallery from '@/components/Filters/ServicesGallery';
import ServicesTypes from '@/components/Filters/ServicesTypes';
import FilteredPackages from '@/components/Filters/filteredPackages';
import ServicesBanner from '@/components/ServicesBanner';
import NextImage from '@/components/ui/NextImage';
import { Galleries } from '@/content/Galleries';
import { categorizedServices } from '@/content/categorizedServices';
import { NextPage } from 'next';

const MobileApps: NextPage = () => {
  return (
    <div className="mobile_apps_page">
      <ServicesBanner
        subHeading="Custom App Development"
        mainHeading="Build Mobile Applications That Create Almost Instantaneous Obsession And Addiction"
        styledHeading=""
        desc="We believe in delivering stellar mobile app design and development application services helping global brands with seamless user experiences."
        bgImage="/images/Services/mobile-apps/banner_bg_web_dev.jpg"
        Image="/images/Services/mobile-apps/banner_web_dev.png"
      />

      {/* CMS Icons */}
     <section className="py-6 bg-[#ededed] hidden lg:block xl:block 2xl:block">
        <div className="div_container px-4 grid gap-6 grid-cols-3 ">
          <div className="stats">
            <h5 className="text-[#17629b] text-[30px] font-bold text-center">300+</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Mobile Apps</p>
          </div>
          <div className="stats">
            <h5 className="text-[#5e258b] text-[30px] font-bold text-center">98%</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Customer Satisfaction</p>
          </div>
          <div className="stats">
            <h5 className="text-[#468c13] text-[30px] font-bold text-center">20x</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Faster Than In-House</p>
          </div>
          <div className="stats">
            <h5 className="text-[#135e9b] text-[30px] font-bold text-center">75%</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Reduced Turnaround Time</p>
          </div>
          <div className="stats">
            <h5 className="text-[#d02e64] text-[30px] font-bold text-center">300+</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Industry Leading Developers</p>
          </div>
          <div className="stats">
            <h5 className="text-[#ff5d42] text-[30px] font-bold text-center">100%</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Ownership Rights</p>
          </div>
          <div className="stats col-span-3">
            <h5 className="text-[#ff5d42] text-[30px] font-bold text-center">500+</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Experienced and Proven Results</p>
          </div>
        </div>
      </section>

      {/* About Services */}
      <AboutServicesSec
        Image="/images/Services/mobile-apps/web_dev_about.jpg"
        styledHeading="High-End, "
        heading="Performance-Packed Mobile App Services"
        desc="Are you looking to leverage modern mobile technology for your business? You've come to the right page. No matter it's iOS or Android, Instant Logo Design ensures you reach customers on their favourite devices. As an expert in mobile application development services, we build enterprise-level cross-platform apps that run on all smart devices without compromising engagement and user-friendliness."
        mainPoint="Following are few of the advantages of having an ecommerce website"
        points={[
          'Custom and seamless interface',
          'Stunning user interface/ UI/UX design',
          'Advanced functionality and navigation',
          'Sustainable and scalable mobile apps',
          'Native and cross-platform solutions',
          'Fully secured architectures',
          'Access on-the-go',
          'Wide variety of industry verticals',
        ]}
      />

      {/* Service Types */}
      <section className="section relative overflow-hidden">
        <div className="div_container">
          <div className="info">
            <h3 className="mb-5 text-center text-[26px] font-bold leading-tight text-[#333] xl:mb-6 xl:text-[38px] 2xl:text-[38px]">
            Digitally Transformative{' '}
              <span className="text-blue">
              And Feature-Packed Mobile Applications
              </span>
            </h3>
            <p className="banner_description mb-[30px] text-center text-[16px] leading-snug text-[#333] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
            We have perfected the art of mobile applications. With over a decade of experience under our belt, our technically trained iOS developers, Android developers, and designers deliver state-of-the-art, responsive, and engaging mobile applications. Our dedication to end-to-end tailored solutions, frictionless navigation and scalability set us apart from the rest.
              <br />
              <br />
              By continuously collaborating with our clients, leveraging the latest mobile development technologies, and applying rigorous testing protocols, we add value and grow your business.
            </p>
          </div>
          <ServicesTypes
            defaultService="iOS App Development"
            categorizedServices={categorizedServices.filter((serivce) => {
              return serivce.cat === 'Mobile Apps';
            })}
          />
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Gallery  */}
      <section className="section relative ">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">Recent Work</h6>
            <h3 className="section_mainheading text-center">
              Browse Our Portfolio To See Creative Grind.
            </h3>
            <p className="section_description text-center">
            Build cross-platform apps that run on both iOS and Android from a single code base or take advantage of unlimited possibilities through virtual or augmented reality - we always find the right balance among price, quality, and project requirements through our solutions.
            </p>
          </div>
        </div>

        <ServicesGallery
          serviceGallery={Galleries.filter((serivce) => {
            return serivce.cat === 'Mobile Apps';
          })}
        />
      </section>

      {/* Packages  */}
      {/* <section className="section relative overflow-hidden border border-t-lightborder">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">Pricing Plan</h6>
            <h3 className="section_mainheading text-center">
              ROI-Oriented Pricing Packages For Your Success That Are Worth
              Every Penny
            </h3>
            <p className="section_description text-center">
              Crafting responsive, search-engine friendly digital experiences
              with impactful, impressive results that effectively position your
              brand in today's increasingly complex landscape. There's no one
              model for all bands, which is why we offer tailored quotes that
              meet your business needs.
            </p>
          </div>
          <FilteredPackages service="Logo Design" />
        </div>
        <div className="Section_Spinners absolute left-0 top-3 -z-[1]  w-fit">
          <NextImage
            src={'/images/element-6.webp'}
            alt="Section Box Spiner bg"
            width={241}
            height={282}
          />
        </div>
        <div className="Section_Spinners absolute -top-[300px] right-0 -z-[1]  w-fit ">
          <NextImage
            src={'/images/element-7.png'}
            alt="Section Left Triangles bg"
            width={546}
            height={839}
          />
        </div>
        <div className="Section_Spinners absolute left-10 top-16 -z-[1]  w-fit animate-spin">
          <NextImage
            src={'/images/section_spin_elem2.png'}
            alt="Section Box Spiner"
            width={100}
            height={115}
          />
        </div>
        <div className="Section_Spinners absolute right-10 top-16 -z-[1]  w-fit animate-spin">
          <NextImage
            src={'/images/section_spin_elem.png'}
            alt="Section Left Trangles Spiner"
            width={100}
            height={115}
          />
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
      </section> */}
    </div>
  );
};

export default MobileApps;
