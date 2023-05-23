import React, { FC } from "react";
import Agencies from "~/components/Agencies";
import Banner from "~/components/Banner";
import CopyRightBar from "~/components/CopyRightBar";
import Expertise from "~/components/Expertise";
import Footer from "~/components/Footer";
import GetStarted from "~/components/GetStarted";
import Header from "~/components/Header/Header";
import MyModal from "~/components/MyModal";
import ServicesContact from "~/components/ServicesContact";
import Testimonials from "~/components/Testimonials";
import InfoSec from "~/components/infoSec";
import Button from "~/components/ui/Button";
import useRQGlobalState from "~/utils/useRQGlobalState";

const mobileapps: FC = () => {

  const [modalActive,setModalActive] = useRQGlobalState('modal',false);


  const mobileCard = [
    {
      title: "On-demand Apps",
      img: "/mobile-app-icon-1.webp",
    },
    {
      title: "Social Network Apps",
      img: "/mobile-app-icon-2.webp",
    },
    {
      title: "E-Commerce Apps",
      img: "/mobile-app-icon-3.webp",
    },
    {
      title: "Cross-Platform Apps",
      img: "/mobile-app-icon-4.webp",
    },
    {
      title: "Enterprise Apps",
      img: "/mobile-app-icon-5.webp",
    },
    {
      title: "Geo-based Apps",
      img: "/mobile-app-icon-6.webp",
    },
  ];

  const infoSecData = [
    {
        title:"Exceptional Service",
        desc:"We make sure our clients get the best and nothing less.",
        img: "inner-about-choose-icon-1.webp",
    },
    {
        title:"Experienced Teams",
        desc:"Our experienced & dedicated teams are our best find and pride.",
        img: "inner-about-choose-icon-2.webp",
    },
    {
        title:"Economical Packages",
        desc:"Premium quality deliverables at the most affordable prices.",
        img: "inner-about-choose-icon-3.webp",
    },
    {
        title:"24/7 Support",
        desc:"Our team is always available round the clock at your service.",
        img: "inner-about-choose-icon-4.webp",
    },
    {
        title:"Performance History",
        desc:"Our proven track of success stories speaks for itself.",
        img: "inner-about-choose-icon-5.webp",
    },
    {
        title:"Time Effective",
        desc:"We set realistic deadlines for your project and deliver it before time.",
        img: "inner-about-choose-icon-6.webp",
    },
]


  const serviceTypes = [
    {
      icon: "/mobile-service-icon-1.webp",
      title: "iOS Mobile App Development",
      desc: "Highly scalable and upward compatible iOS that are focused on results and user-friendliness. Our iOS apps are developed using the latest technology.",
      bgImg: "/service-img-8.webp",
    },
    {
      icon: "/mobile-service-icon-2.webp",
      title: "Swift Android App Development",
      desc: "Secure, swift, and smart android apps that resonate with your brand at max. Our dedicated teams develop fully customized apps that enhance the efficiency of your business.",
      bgImg: "/service-img-1.webp",
    },
    {
      icon: "/mobile-service-icon-3.webp",
      title: "React Native Apps",
      desc: "Our expert developers who specialize in building cross-platform apps always bring forward pixel-perfect react native apps that optimize your business effectively.",
      bgImg: "/service-img-2.webp",
    },
    {
      icon: "/mobile-service-icon-4.webp",
      title: "IoT Apps",
      desc: "Stay ahead of the curve because IoT is the future of tech. Ecommerce Inside offers a comprehensive range of IoT solutions that fit your brand’s image and needs. ",
      bgImg: "/service-img-3.webp",
    },
    {
      icon: "/mobile-service-icon-5.webp",
      title: "Game Mobile App Development, USA",
      desc: "Ecommerce Inside brings forward the best mobile app development genre that is gaming. We develop intuitive and engaging gaming apps that work on all leading OS like iOS, Android and more.",
      bgImg: "/service-img-4.webp",
    },
    {
      icon: "/mobile-service-icon-6.webp",
      title: "Flutter App Development",
      desc: "Our objective is to facilitate our clientele competently and for a matter of fact we offer far-reaching solutions. Flutter app development is now accessible at the most affordable prices.",
      bgImg: "/service-img-5.webp",
    },
    {
      icon: "/mobile-service-icon-7.webp",
      title: "Customized Web App Development",
      desc: "Affordable, fully customized, user-friendly web app development by the experts is just one tap away. Hire our devoted team of developers and get your brand the app it needs.",
      bgImg: "/service-img-6.webp",
    },
    {
      icon: "/mobile-service-icon-8.webp",
      title: "Support & Maintenance",
      desc: "Our team is available at your service round the clock. Ecommerce Inside is popular for its swift and teams focused on client satisfaction. We provide complete quality assurance and maintenance of the service delivered.",
      bgImg: "/service-img-7.webp",
    },
  ];
  return (
    <>
      <Header />
      <Banner
        smallHeading={"Creative & Robust"}
        mainHeading={[
          "Mobile",
          <br />,
          "App Development",
          <br />,
          "Company in USA",
        ]}
        bgImg={"/web-banner.webp"}
        img={"/mobile-banner-right.webp"}
        desc={
          "Get custom mobile apps developed that radiates what your brand is all about as well as provides a pathway for business growth."
        }
      />

      <ServicesContact />

      <section className="services-mobile-info">
        <div className="container mx-auto px-[15px]">
          <div className="wrap pb-[70px] pt-[20px] lg:pb-[120px] lg:pt-[60px]">
            <div className="heading text-center">
              <h2 className="text-[20px] font-semibold leading-[1.2] text-[#666] lg:text-[24px] ">
                We Develop Experiences That Leave Everlasting Impressions
              </h2>
              <h2 className="pb-[9px] text-[30px] font-extrabold text-darkblue md:text-[40px]  ">
                Redefining Mobile App Development
                <span className="text-caribbeangreen"> USA </span>
                with the Expertise of Top-Notch Mobile App Developers.
              </h2>
              <p className="text-[13px] text-[#666] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                Ecommerce Inside is one of the well-known app development
                companies in USA and gaining popularity beyond the UAE as well.
                We build apps that your business and brand need, such as iOS
                apps, Hybrid, and Android apps at very affordable prices. We
                facilitate SMEs, entrepreneurs, andanyone who wants a custom
                mobile app to improve their business’s efficiency.{" "}
              </p>
            </div>

            <div className="service-mobile-cards grid grid-cols-1 gap-3 py-[50px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {mobileCard.map((card, index) => (
                <div className="flex flex-col items-center justify-center rounded-md bg-darkblue px-[10px] py-[30px] text-white hover:bg-caribbeangreen">
                  <img src={card.img} alt={card.title} />
                  <h3 className="mdlg:text-[13px] pt-[10px] text-center text-[16px] font-bold leading-[1.2] text-white">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="about-btn mt-[30px] flex flex-col sm:flex-row justify-center gap-8">
              <Button variant="Dark" className="" onClick={()=>setModalActive(true)}>
                Let's Get Started
              </Button>
              <Button variant="Green">Consult An Expert</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-darkblue py-[80px] ">
        <div className="container mx-auto px-[15px]">
          <h2 className="text-center text-[22px] font-[900] leading-[1.2] text-white md:text-[30px] lg:text-[53px] ">
            Ecommerce Inside Generate Outstanding Mobile App Development
            Solutions.
          </h2>
          <p className="py-[20px] text-center text-[16px] font-normal text-white md:text-[17px] lg:text-[20px] xl:text-[24px] ">
            A number of SMEs, entrepreneurs, and organizations accelerated their
            business growth with our latest solutions.
          </p>

          <div className="grid grid-cols-3">
            <div className="stats flex flex-col items-center justify-between border-r border-r-[#ccc] px-[30px] text-center lg:flex-row lg:justify-end">
              <p className="inf py-4 pb-2 text-[16px] font-normal text-white lg:pr-6 lg:text-right">
                Total Website Developed <br /> By SVAP Team
              </p>
              <h3 className="bg-gradient-to-r from-caribbeangreen to-white bg-clip-text text-[35px] sm:text-[50px]  font-extrabold leading-[1.2] text-transparent lg:text-[60px]">
                500+
              </h3>
            </div>
            <div className="stats flex flex-col items-center justify-between border-r border-r-[#ccc] px-[30px] text-center lg:flex-row lg:justify-end">
              <p className="inf py-4 pb-2 text-[16px] font-normal text-white lg:pr-6 lg:text-right">
                Our <br /> Client
              </p>
              <h3 className="bg-gradient-to-r from-caribbeangreen to-white bg-clip-text text-[35px] sm:text-[50px]  font-extrabold leading-[1.2] text-transparent lg:text-[60px]">
                100+
              </h3>
            </div>
            <div className="stats flex  flex-col items-center justify-between px-[30px] text-center lg:flex-row lg:justify-end">
              <p className="inf py-4 pb-2 text-[16px] font-normal text-white lg:pr-6 lg:text-right">
                Total Number <br /> of Employees
              </p>
              <h3 className="bg-gradient-to-r from-caribbeangreen to-white bg-clip-text text-[35px] sm:text-[50px] font-extrabold leading-[1.2] text-transparent lg:text-[60px]">
                300+
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex flex-col items-center justify-center bg-white py-16 ">
        <h2 className="text-center text-h2 text-gray-500">
          The Top mobile app development companies in USA
        </h2>
        <h2 className="text-center text-h2 font-extrabold text-black">
          Intuitive & Innovative Apps That Escalates Business Growth Real Quick
        </h2>
        <div className=" py-[40px] md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {serviceTypes.map((serviceType, index) => (
            <div
              className={`group relative flex h-[385px] flex-col justify-center border bg-[url('/service-img-2.webp')] bg-cover  bg-center bg-no-repeat `}
              style={{ backgroundImage: `url(${serviceType.bgImg})` }}
              key={index}
            >
              <div className="flex flex-col px-9 group-hover:hidden">
                <img
                  src={serviceType.icon}
                  alt=""
                  className="h-[54px] w-[50px] pb-[15px] "
                />
                <h3 className="pb-[20px] text-h4 font-bold text-white md:text-base2">
                  {serviceType.title}
                </h3>
                <p className="text-[14px] font-normal text-[#ffffff82] lg:text-[16px]">
                  {serviceType.desc}
                </p>
              </div>
              <div className="bg flex hidden h-full w-full flex-col justify-center bg-caribbeangreen group-hover:block">
                <div className="servie-para relative top-[20%] px-9">
                  <img
                    src={serviceType.icon}
                    alt=""
                    className="h-[54px] w-[50px] pb-[15px] "
                  />
                  <h3 className="pb-[20px] text-[18px] text-h4 font-bold  text-white lg:text-[24px]">
                    {serviceType.title}
                  </h3>
                  <p className="text-[14px] font-normal text-[#ffffff82] lg:text-[16px]">
                    {serviceType.desc}
                  </p>
                </div>
              </div>
              {/* <div className="servie-para px-9 flex hidden flex-col group-hover:block bg-caribbeangreen w-full h-full justify-center">
              <img
                  src={serviceType.icon}
                  alt=""
                  className="h-[54px] w-[50px] pb-[15px] "
                />
                <h3 className="pb-[20px] text-h4 font-bold text-white  text-[18px] lg:text-[24px]">
                  {serviceType.title}
                </h3>
              </div> */}
            </div>
          ))}
        </div>

        <div className="about-btn flex flex-col sm:flex-row items-center justify-center gap-8">
          <Button variant="Dark" className="" onClick={()=>setModalActive(true)}>
            Let's Get Started
          </Button>
          <Button variant="Green">Consult An Expert</Button>
        </div>
      </section>


      <Agencies />

      <InfoSec infocardData={infoSecData} smallHeading={"We Are The Best Branding Agency USA"} mainHeading={"Redefine. Revolution. Robust"} desc={"Ecommerce Inside emphasizes on redefining the monotonous tech paradigms and works on bridging revolutionary robust and rigorous apps, solutions, and services that facilitates clients and customers at the most affordable prices."} />

      <Expertise />
      <GetStarted />
      <Testimonials />
      <Footer />
      <CopyRightBar />
      <MyModal />
    </>
  );
};

export default mobileapps;
