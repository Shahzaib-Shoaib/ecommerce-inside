import Link from "next/link";
import React from "react";
import Banner from "~/components/Banner";
import CopyRightBar from "~/components/CopyRightBar";
import Expertise from "~/components/Expertise";
import Footer from "~/components/Footer";
import GetStarted from "~/components/GetStarted";
import Header from "~/components/Header/Header";
import MyModal from "~/components/MyModal";
import ServicesContact from "~/components/ServicesContact";
import Testimonials from "~/components/Testimonials";
import InfoSec from "~/components/InfoSec";
import Button from "~/components/ui/Button";
import servicesqualityData from "~/data/servicesqualityData";
import UseRQGlobalState from "~/utils/useRQGlobalState";

const services = () => {
  
  const [modalActive, setModalActive] = UseRQGlobalState("modal", false);
  function openModal() {
    const setModalActive = true;
  }

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

  interface Service {
    img: string;
    cat: string;
    link: string;
    points: object;
  }

  return (
    <>
      <Header />
      <Banner
        smallHeading={"Our Services"}
        // mainHeading={["We make", <br />, "it Happpen"]}
        mainHeading={["We make it Happpen"]}
        bgImg={"/branding-banner.webp"}
        img={"/branding-banner-right.webp"}
        desc={null}
      />
      <ServicesContact />

      <section className="py-[60px]">
        <div className="container mx-auto px-[15px]">
          <div className="main-heading text-center">
            <h2 className="text-[20px] font-semibold leading-[1.2] text-[#666] md:text-[24px]">
              Grow Your Brand
            </h2>
            <h3 className="py-[10px] text-[20px] font-bold leading-[1.2] text-[#1b1037] md:text-[35px] lg:text-[45px]">
              With Top
              <span className="text-caribbeangreen"> Quality Services</span>
            </h3>
            <p className="text-[13px] text-[#666] md:text-[16px] lg:text-[18px] xl:text-[20px]">
              Whether you&apos;re a start-up or an enterprise business, our
              expertise in 360 web solutions & digital branding will turn your
              ideas into online success. We privilege offering multiple services
              under one umbrella
            </p>
          </div>

          <div className="services-wrapper grid grid-cols-1 place-content-center py-[40px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {servicesqualityData.map((service: Service, index) => (
              <div
                className="service-box group mb-[55px] px-[15px]"
                key={index}
              >
                <Link href={service.link}>
                  <img
                    src={service.img}
                    alt={service.cat}
                    className="w-full duration-200 group-hover:scale-110"
                  />
                </Link>
                <Link
                  href={service.link}
                  className="relative bottom-[29px]  px-[15px] text-center "
                >
                  <h3 className="category-name mx-[15px] -mt-[25px] rounded-md bg-white pt-[25px] text-[15px]  font-semibold text-[#333] group-hover:text-caribbeangreen lg:text-[18px]">
                    {service.cat}
                  </h3>
                </Link>
                <ul className="servicebox-list list-none">
                  {service.points.map((point: string, index: number) => (
                    <li
                      className="point relative  ml-[25px] pl-[5px] text-[13px] font-semibold leading-[26px] text-[#666] before:absolute before:-left-[20px] before:top-[25%] before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#e76239] "
                      key={index}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="about-btn flex flex-col items-center justify-center gap-8 sm:flex-row ">
            <Button
              variant="Dark"
              className=""
              onClick={() => openModal()}
            >
              Lets Get Started
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

export default services;
