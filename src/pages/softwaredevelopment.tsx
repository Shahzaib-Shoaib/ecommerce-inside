import { NextPage } from "next";
import React from "react";
import Banner from "~/components/Banner";
import CopyRightBar from "~/components/CopyRightBar";
import Expertise from "~/components/Expertise";
import Footer from "~/components/Footer";
import GetStarted from "~/components/GetStarted";
import Header from "~/components/Header/Header";
import InfoSec from "~/components/InfoSec";
import MainHeading from "~/components/MainHeading";
import MyModal from "~/components/MyModal";
import ServicesContact from "~/components/ServicesContact";
import ServicesSlider from "~/components/Slider/ServicesSlider";
import Testimonials from "~/components/Testimonials";
import Button from "~/components/ui/Button";
import UseRQGlobalState from "~/utils/useRQGlobalState";

const softwaredevelopment: NextPage = () => {
  const [modalActive,setModalActive] = UseRQGlobalState('modal',false);


  const infoSecData = [
    {
      title: "Exceptional Service",
      desc: "We make sure our clients get the best and nothing less.",
      img: "inner-about-choose-icon-1.webp",
    },
    {
      title: "Experienced Teams",
      desc: "Our experienced & dedicated teams are our best find and pride.",
      img: "inner-about-choose-icon-2.webp",
    },
    {
      title: "Economical Packages",
      desc: "Premium quality deliverables at the most affordable prices.",
      img: "inner-about-choose-icon-3.webp",
    },
    {
      title: "24/7 Support",
      desc: "Our team is always available round the clock at your service.",
      img: "inner-about-choose-icon-4.webp",
    },
    {
      title: "Performance History",
      desc: "Our proven track of success stories speaks for itself.",
      img: "inner-about-choose-icon-5.webp",
    },
    {
      title: "Time Effective",
      desc: "We set realistic deadlines for your project and deliver it before time.",
      img: "inner-about-choose-icon-6.webp",
    },
  ];
  const sliderData = [
    {
      subHeading: "Delivering Excellence",
      Heading: "Custom Corporate Solutions",
      desc: "With our tech experts, we develop customized broad spectrum software solutions in the most effective manner.",
      img: "/softwaredev_1.webp",
    },
    {
      subHeading: "Delivering Excellence",
      Heading: "Improved Customer Relationship",
      desc: "Connect all the dots, including customer relations with custom-built CRM.",
      img: "/softwaredev_2.webp",
    },
    {
      subHeading: "Delivering Excellence",
      Heading: "Enterprise Resource Planning",
      desc: "We bring the best out of Microsoft Dynamics 365 BC, Sage Intacct and more in a way that leverages your business growth in all aspects.",
      img: "/softwaredev_3.webp",
    },
  ];
  return (
    <>
      <Header />
      <Banner
        mainHeading={"Revolutionary Software Development Company in USA"}
        bgImg={"/software-banner.webp"}
        img={"/software-banner-right.webp"}
        desc={
          "Our robust software solutions will take your brand to new heights by leveraging the growth and subsequent parameters."
        }
      />
      <ServicesContact />
      <section>
        <div className="container mx-auto p-[15px] py-[20px] md:py-[60px]">
          <MainHeading
            subHeading="Comprehensive Software Solutions"
            mainHeading="Ecommerce Inside is one of the best"
            spanHeading="software companies in USA."
            desc="We Give Wings To Your Business Through Pixel Perfect Software Solutions. We develop solutions that accelerate your business in terms of growth, sales, traffic and much more."
          />
          <div className="slider mt-[30px]">
            <ServicesSlider sliderData={sliderData} />
          </div>
        </div>
      </section>

      <section className="py-[75px] lg:py-[100px]">
        <div className="container mx-auto px-[15px]">
          <div className="heading text-center">
            <h2 className="leading-[1.2]  text-[#666] sm:text-[20px] lg:text-[24px] xs:text-[16px] ">
              Customizable Full Service{" "}
              <strong className="font-extrabold">Software Company USA</strong>
            </h2>
            <h3 className="py-[10px] font-extrabold leading-[1.2] text-[#1b1037] sm:text-[26px] md:text-[35px] lg:text-[42px] xl:text-[45px] xs:text-[20px]">
              Software Company USA Modules for ERP Solutions
            </h3>
            <p className="font-normal text-[#666] sm:text-[14] md:text-[16px] lg:text-[18px] xl:text-[20px] xs:text-[13px]">
              We facilitate businesses of all shapes and sizes with ultra modern
              and feature rich ERP solutions at the most affordable prices.
            </p>
          </div>




          <div className="grid grid-col-1 lg:grid-cols-2 gap-3 py-[40px]">
            <div
              className={`  flex  flex-col h-full w-full border bg-[url('/modules-system-bg-1.webp')] bg-cover  bg-center bg-no-repeat px-9`}
            >
              <div className=" flex flex-col h-[500px] pt-[60px]   xs:py-[60px] xs:px-[20px] sm:py-[60px] sm:px-[20px] lg:py-[70px] lg:px-[40px] ">
                <h3 className="pb-[20px]  leading-[48px] font-bold text-white text-[30px] md:text-[42px]">
                ERP System <br /> Main Modules
                </h3>
                <ul className="flex list-none flex-col pt-[40px]">
                <li className=" footer-menu-list relative pb-[12px] pl-[15px] text-[14px] text-[#9e99a8]">Monetary Management</li>
                <li className=" footer-menu-list relative pb-[12px] pl-[15px] text-[14px] text-[#9e99a8]">Request Management</li>
                <li className=" footer-menu-list relative pb-[12px] pl-[15px] text-[14px] text-[#9e99a8]">Inventory Management</li>
                <li className=" footer-menu-list relative pb-[12px] pl-[15px] text-[14px] text-[#9e99a8]">Store network Management</li>
                </ul>
              </div>
            </div>
            <div
              className={`  flex   flex-col h-full w-full border bg-[url('/modules-system-bg-2.webp')] bg-cover  bg-center bg-no-repeat px-9`}
            >
              <div className=" flex flex-col pt-[60px] h-[500px] xs:py-[60px] xs:px-[20px] sm:py-[60px] sm:px-[20px] lg:py-[70px] lg:px-[40px] ">
                <h3 className="pb-[20px]  leading-[48px] font-bold text-white text-[30px] md:text-[42px]">
                ERP System <br /> Main Modules
                </h3>
                <p className="text-white text-[16px] ">Build your web presence to thrive just like many others have, and let experienced technicians and digital creators develop functionalities that rivet your target audience.</p>
                <ul className="flex list-none flex-col pt-[40px]">
                <li className=" footer-menu-list relative pb-[12px] pl-[15px] text-[14px] text-[#9e99a8]">Time Tracking System</li>
                <li className=" footer-menu-list relative pb-[12px] pl-[15px] text-[14px] text-[#9e99a8]">Client Database CRM</li>
                <li className=" footer-menu-list relative pb-[12px] pl-[15px] text-[14px] text-[#9e99a8]">Projects Dashboards</li>
                <li className=" footer-menu-list relative pb-[12px] pl-[15px] text-[14px] text-[#9e99a8]">Quote Module and more.</li>
                </ul>
              </div>
            </div>
          </div>
            <div className="about-btn mt-[30px] flex flex-col sm:flex-row justify-center gap-8 mx-auto">
                <Button variant="Dark" className="" onClick={()=>setModalActive(true)}>
                  Let's Get Started
                </Button>
                <Button variant="Green">Consult An Expert</Button>
              </div>
        </div>
      </section>

      <InfoSec
        infocardData={infoSecData}
        smallHeading={"We Are The Best Branding Agency USA"}
        mainHeading={"Redefine. Revolution. Robust"}
        desc={
          "Ecommerce Inside emphasizes on redefining the monotonous tech paradigms and works on bridging revolutionary robust and rigorous apps, solutions, and services that facilitates clients and customers at the most affordable prices."
        }
      />

      <Expertise />
        <GetStarted />
        <Testimonials />
        <Footer />
        <CopyRightBar />
      <MyModal />
    </>
  );
};

export default softwaredevelopment;
