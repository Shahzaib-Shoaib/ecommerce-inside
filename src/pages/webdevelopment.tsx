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
import ThumbsSlider from "~/components/Slider/ThumbsSlider";
import Testimonials from "~/components/Testimonials";
import useRQGlobalState from "~/utils/useRQGlobalState";

const webdevelopment = () => {
  const [modalActive,setModalActive] = useRQGlobalState('modal',false);

  
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
  const sliderData = [
    {
      subHeading: "Reach Out To Mass Audience",
      Heading: "Feature-Rich E-Commerce Website Development",
      desc: "We develop E-Commerce websites according to your business needs which are aesthetically beautiful, responsive to users’ actions, and simplify the operations. Our E-Commerce website is to take your business to new heights by improving sales, leads, and traffic. Ecommerce Inside’s expert eCommerce developers build versatile, safe, and secure websites in no time.",
      options: [
        "Simplified Operations",
        "User-Friendly and Intuitive UI",
        "Cost and Time Efficient",
      ],
      img: "/1.webp",
    },
    {
      subHeading: "Reach Out To Mass Audience",
      Heading: "Professional Web Applications",
      desc: "Get your business web apps built by the best developers in USA. Ecommerce Inside (Pvt) Ltd’s gems are experts of their game and making waves across the globe for all the right reasons. Our developers develop web apps that are highly scalable, user-friendly, safe and secure apps at very fair prices. Hire our team today or get a free quote.",
      options: [
        "Custom Web Apps",
        "Powerful and Versatile",
        "Prototypes and MVP",
      ],
      img: "/2.webp",
    },
    {
      subHeading: "Reach Out To Mass Audience",
      Heading: "Online Portals",
      desc: "We also develop online portals that are completely designed to your needs, business requirements, and services. The tailor-made online portals serve to improve and enhance the user experience at the max by making operations easy and quick.",
      options: [
        "Tailor-Made Services",
        "Simple to Alter and Customize",
        "Navigation Function",
      ],
      img: "/3.webp",
    },
    {
      subHeading: "Reach Out To Mass Audience",
      Heading: "End-To-End Content Management System",
      desc: "Ecommerce Inside offers a broad range of ends to end custom solutions, which includes content management systems too. Our expert after deep analysis develops CMS from front-end to back-end development and UI & UX design, our CMS development team has your website covered. Hire our dedicated team of CMS development today or get a free quote.",
      options: [
        "Easier Content Management",
        "Effortless UX/UI",
        "Strong Control and Ownership over Content",
      ],
      img: "/4.webp",
    },
  ];
  return (
    <>
      <Header />
      <Banner
        smallHeading={["Next Generation,", <br />, "Customized Web Apps by,"]}
        mainHeading={["Best Web", <br />, "Development Company in USA"]}
        bgImg={"/web-banner.webp"}
        img={"/web-banner-right.webp"}
        desc={
          "We develop designs that are creative, exceptional, and feature-rich."
        }
      />
      <ServicesContact />

      <section>
        <div className="container mx-auto p-[15px] py-[20px] md:py-[60px]">
          <MainHeading
            subHeading="Our Best Developers in USA Give Voice to Your Ideal Website"
            mainHeading="Right Blend of Tailored Services"
            spanHeading="with Progressive Technology"
            desc="By using road mapping techniques, the expert’s developers of Ecommerce Inside build custom web apps that leverage the growth of your business."
          />
          <div className="slider mt-[30px]">
            <ServicesSlider sliderData={sliderData} />
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

export default webdevelopment;
