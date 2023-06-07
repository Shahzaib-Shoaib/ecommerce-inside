import { NextPage } from "next";
import Banner from "@/components/Banner";
import ServicesTabsSec from "@/components/services/ServicesTabsSec";
import ServicesIntroSec from "@/components/services/ServicesIntroSec";
import { ReactNode } from "react";
import TrustCTA from "@/components/services/TrustCTA";
import GalleySec from "@/components/services/GallerySec";
import ServicesPackagesSec from "@/components/services/ServicesPackagesSec";

export const metadata = {
  title: "Mobile Apps | Ecommerce Inside",
  description:
    "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
};

type ServicesIntroSecType = {
  heading: ReactNode;
  desc: string;
  mainpoint: string;
  points: string[];
  img: string;
};

type PackagesGalleryType = {
  id: string;
  cat: string;
  src: string;
}[];

type serviceCategoryType = {
  id: string;
  serviceName: string;
  serviceHeading: string;
  serviceDesc: string;
  servicePortfolio: PackagesGalleryType;
}[];


const MobileApps: NextPage = () => {
  const introData: ServicesIntroSecType = {
    heading: (
      <h3 className="mb-10">
        <span className="h3 text-caribbeangreen">High-End,</span>{" "}
        Performance-Packed Mobile App Services
      </h3>
    ),
    desc: "Are you looking to leverage modern mobile technology for your business? You've come to the right page. No matter it's iOS or Android, Instant Logo Design ensures you reach customers on their favourite devices. As an expert in mobile application development services, we build enterprise-level cross-platform apps that run on all smart devices without compromising engagement and user-friendliness.",
    mainpoint:
      "Following are few of the advantages of having an ecommerce website",
    img: "/images/mob-app-1.webp",
    points: [
      "Custom and seamless interface",
      "Stunning user interface/ UI/UX design",
      "Advanced functionality and navigation",
      "Sustainable and scalable mobile apps",
      "Native and cross-platform solutions",
      "Fully secured architectures",
      "Access on-the-go",
      "Wide variety of industry verticals",
    ],
  };

  const serviceCategory: serviceCategoryType = [
    {
      id: "1",
      serviceName: "iOS App Development",
      serviceHeading: "iOS App Development",
      serviceDesc:
        "Our iOS app development services solve issues for top brands through impeccable UX/UI design, cross-device compatibility, subtle animation, speed, scalability and super performance. We take advantage of Objective-C and Swift along with the latest iOS features.",
      servicePortfolio: [
        {
          id: "1",
          cat: "Animation 1",
          src: "/images/1.webp",
        },
        {
          id: "2",
          cat: "Animation 1",
          src: "/images/2.webp",
        },
        {
          id: "3",
          cat: "Animation 1",
          src: "/images/3.webp",
        },
        {
          id: "4",
          cat: "Animation 1",
          src: "/images/4.webp",
        },
      ],
    },
    {
      id: "2",
      serviceName: "Android App Development",
      serviceHeading: "Android App Development",
      serviceDesc:
        "Our Android app development services offer excellent design, development, and enhancement of mobile software that runs on all supported Android OS versions. Our team targets Android with native, hybrid, and cross-platform development; Instant Logo Design always guarantees a sustainable and seamless mobile experience.",
      servicePortfolio: [
        {
          id: "1",
          cat: "Animation 2",
          src: "/images/branding_1.webp",
        },
        {
          id: "2",
          cat: "Animation 2",
          src: "/images/branding_2.webp",
        },
        {
          id: "3",
          cat: "Animation 2",
          src: "/images/branding_3.webp",
        },
        {
          id: "4",
          cat: "Animation 2",
          src: "/images/branding_4.webp",
        },
      ],
    },
    {
      id: "3",
      serviceName: "React Native App",
      serviceHeading: "React Native App",
      serviceDesc:
        "React Native combines the best parts of native development, offering a best-in-class JavaScript library for building user interfaces, allowing you to either expand existing apps or develop a whole new one from scratch. We help businesses reach their goals faster with React Native app development that seamlessly performs on iOS, Android and web platforms.",
      servicePortfolio: [
        {
          id: "1",
          cat: "Animation 3",
          src: "/images/1.webp",
        },
        {
          id: "2",
          cat: "Animation 3",
          src: "/images/2.webp",
        },
        {
          id: "3",
          cat: "Animation 3",
          src: "/images/3.webp",
        },
        {
          id: "4",
          cat: "Animation 3",
          src: "/images/4.webp",
        },
      ],
    },
  ];

  const GalleryImages: PackagesGalleryType = [
    {
      id: "1",
      cat: "Animation 2",
      src: "/images/branding_1.webp",
    },
    {
      id: "2",
      cat: "Animation 2",
      src: "/images/branding_2.webp",
    },
    {
      id: "3",
      cat: "Animation 2",
      src: "/images/branding_3.webp",
    },
    {
      id: "4",
      cat: "Animation 2",
      src: "/images/branding_4.webp",
    },
  ];

  return (
    <div className="Animation-Page ">
      <Banner
        smallHeading={"Creative & Robust"}
        mainHeading={"Mobile App Development Company in USA"}
        bgImg={"/images/web-banner.webp"}
        img={"/images/mobile-banner-right.webp"}
        desc={
          "Get custom mobile apps developed that radiates what your brand is all about as well as provides a pathway for business growth."
        }
      />

      <ServicesIntroSec
        heading={introData.heading}
        desc={introData.desc}
        img={introData.img}
        mainpoint={introData.mainpoint}
        points={introData.points}
      />

      <section className="overflow-hidden">
        <div className="div_container">
          <h2 className="text-balack pb-[26px] text-center font-bold">
            Progressive Enhancement{" "}
            <span className="h2 text-caribbeangreen">
              Developing Cross-Platform Web Experiences
            </span>
          </h2>
          <p className="pb-[36px] text-center  font-semibold text-[#666]">
            Our web experiences are high-performing, feature-packed, and
            digitally transformative, designed to be user-friendly, fully
            functional, very secure, and able to scale as your enterprise grows.
            <br />
            Our team of engineers, web architects, and developers create
            interactive prototyping and usability to ensure enhanced user
            experience.
          </p>
          <ServicesTabsSec
            serviceCategory={serviceCategory}
            defaultCategory={"iOS App Development"}
          />
        </div>
      </section>

      <TrustCTA />

      <GalleySec
        subHeading="Recent Work"
        mainHeading="Browse Our Portfolio To See Creative Grind."
        desc="Build cross-platform apps that run on both iOS and Android from a single code base or take advantage of unlimited possibilities through virtual or augmented reality - we always find the right balance among price, quality, and project requirements through our solutions."
        images={GalleryImages}
      />

      <ServicesPackagesSec
        subHeading="Our Price Model"
        mainHeading="That Suits Everyone!"
        desc="Allow us to take your brand to new heights with the ultra modern marketing strategies and improve your brand’s digital visibility. Our change the game in a snap."
      />
    </div>
  );
};

export default MobileApps;
