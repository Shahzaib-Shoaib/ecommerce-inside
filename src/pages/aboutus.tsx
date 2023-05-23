import React from "react";
import UseRQGlobalState from "~/utils/useRQGlobalState";
import Agencies from "~/components/Agencies";
import Banner from "~/components/Banner";
import CopyRightBar from "~/components/CopyRightBar";
import Expertise from "~/components/Expertise";
import Footer from "~/components/Footer";
import GetStarted from "~/components/GetStarted";
import Header from "~/components/Header/Header";
import AboutStrategySlider from "~/components/Slider/AboutStrategySlider";
import Testimonials from "~/components/Testimonials";
import InfoSec from "~/components/InfoSec";
import Button from "~/components/ui/Button";
import MyModal from "~/components/MyModal";
// import aboutchooseData from "~/data/aboutchooseData";

const aboutus = () => {
  const [modalActive,setModalActive] = UseRQGlobalState('modal',false);


  const aboutchooseData = [
    {
        title:"Quality Services",
        desc:"We focus on quality deliverables on every project.",
        img: "inner-about-choose-icon-1.webp",
    },
    {
        title:"Our Experience",
        desc:"Experienced team of highly skilled professionals from various industries.",
        img: "inner-about-choose-icon-2.webp",
    },
    {
        title:"Budget Friendly",
        desc:"Top-quality products and services at affordable prices.",
        img: "inner-about-choose-icon-3.webp",
    },
    {
        title:"24/7 Support",
        desc:"We offer 24/7 support to our valuable clients",
        img: "inner-about-choose-icon-4.webp",
    },
    {
        title:"Proven Track-record",
        desc:"We have a proven track of great success stories, we work with diverse industries clients, and offer excellent products and services.",
        img: "inner-about-choose-icon-5.webp",
    },
    {
        title:"On Time Delivery",
        desc:"We know that time is money in business, so we set realistic deadlines (for ourselves and for our clients) and stick to them.",
        img: "inner-about-choose-icon-6.webp",
    },
]

  return (
    <>
      <Header />


      <Banner
        smallHeading={"About Us"}
        mainHeading={["Big Ideas", <br />, "Creative Team", <br />, "New Technology"]}
        bgImg={"/about-banner.webp"}
        img={"/about-banner-right.webp"}
        desc={null}
      />



      <section className="flex justify-center overflow-hidden pt-[40px] min-w-full">
        <div className="review-container flex max-w-[540px] flex-col items-center justify-between gap-[10px] px-[15px] md:max-w-[720px] lg:max-w-[960px] lg:flex-row xl:max-w-[1140px]">
          <img src="/about-review-1.webp" alt="" />
          <img src="/about-review-2.webp" alt="" />
          <img src="/about-review-3.webp" alt="" />
          <img src="/about-review-4.webp" alt="" />
        </div>
      </section>


      <section className="creativity pt-[80px] ">
        <div className="container mx-auto px-[30px]">
          <div className="row -mx-[15px] flex flex-col  items-center lg:flex-row">
            <div className="about-content lg:max-w-[50%]">
              <h2 className="xl:[50px] text-[30px] font-bold leading-[1.2] text-[#333] md:text-[40px] lg:text-[46] ">
                Creativity meets performance.{" "}
              </h2>
              <p className="py-[6px] text-[22px] leading-[33px] text-[#333] md:py-[20px] md:text-[24px] lg:py-[31px] lg:text-[27px] lg:leading-[33px] ">
                It’s a simple idea, a hard truth and ther day at work for us.
              </p>
              <p className="para text-[16px] leading-[28px] text-[#333] md:text-[20px] md:leading-[35px] lg:text-[23px] lg:leading-[38px] ">
                We have a passionate and diverse team of developers, designers,
                branding experts, ghostwriters, copywriters, marketers &
                animators. It is hard to put us in a box, but one thing we all
                have in common is a drive to produce exceptional work that helps
                our clients reach the top.
              </p>
              <div className="about-btn mt-[30px] flex flex-col sm:flex-row justify-center gap-8">
                <Button variant="Dark" className="" onClick={()=>setModalActive(true)}>
                  Let's Get Started
                </Button>
                <Button variant="Green" >Consult An Expert</Button>
              </div>
            </div>

            <div className="about-img mt-[50px]  lg:max-w-[50%]">
              <img
                src="/about-creativity-img.webp"
                alt="About creativity image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="inner-smarter-sec py-[50px] md:py-[70px] lg:py-[100px] xl:py-[125px]">
        <div className="container mx-auto px-[30px]">
          <div className="-mx-[15px] flex flex-col items-center lg:flex-row">
            <div className="inner-smater-heading ">
              <h3 className="text-[24px] font-bold leading-[1.2] text-caribbeangreen">
                Brand Strategy
              </h3>
              <h2 className="text-[30px] font-bold leading-[1.2] md:text-[35px] lg:text-[40px] ">
                We Work Smarter, To Find Insights Faster.
              </h2>
            </div>

            <div className="inner-smater-content">
              <p className="text-[17px] text-[#666] md:text-[20px]">
                We have a team of professionals who makes brand strategies and
                helps you grow your brand and make business, with the help of
                our designers, developers, copywriters and animators. All our
                professionals are hardworking and dedicated to grow with you.
              </p>
            </div>
          </div>

          <div className=" grid grid-cols-12  justify-between pt-[80px] overflow-hidden">
            <div className="smarter-img hidden lg:block col-span-4">
              <img src="/about-smarter-img.webp" alt="smarter-img" />
            </div>

            <div className="card-slider-wrapper col-span-12 lg:col-span-8">
              <AboutStrategySlider />
            </div>
          </div>
        </div>
        
        {/* <AboutStrategySlider /> */}

      </section>

  

      <InfoSec infocardData={aboutchooseData} smallHeading={"We Deliver Our Best"} mainHeading={"Reason to Choose Us"} desc={"We are obliged to provide an incredible experience by giving high-quality eCommerce website design and development services. What makes us trustworthy partners? Here are the reasons!"} />

      <Agencies />

      <Expertise />

      <GetStarted />

      <Testimonials />

      <Footer />

      <CopyRightBar />
      <MyModal />
      
    </>
  );
};

export default aboutus;
