import { NextPage } from "next";
import Banner from "@/components/Banner";
import ServicesTabsSec from "@/components/services/ServicesTabsSec";
import ServicesIntroSec from "@/components/services/ServicesIntroSec";
import { ReactNode } from "react";
import TrustCTA from "@/components/services/TrustCTA";
import GalleySec from "@/components/services/GallerySec";
import ServicesPackagesSec from "@/components/services/ServicesPackagesSec";

export const metadata = {
  title: "Web Development | Ecommerce Inside",
  description:
    "Ecommerce Inside is a full-service digital solutions agency based in UAE specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
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

type ServicesTabsSecType = {
  secHeading: string;
  secDesc: string;
  serviceCategory: serviceCategoryType;
};

const WebDevelopment: NextPage = () => {
  const introData: ServicesIntroSecType = {
    heading: (
      <h3 className="mb-10">
        <span className="h3 text-caribbeangreen">Discover Prospects</span> For
        Enhancing Customer Stories And Brand Experiences
      </h3>
    ),
    desc: "Instant Logo Design is a revolutionary web design and development agency dedicated to offering personalized digital experiences through web solutions. We professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.",
    mainpoint: "Professionally design custom web designs",
    img: "/images/wd-1.webp",
    points: [
      "Providing fully customized solutions",
      "Custom CMS Integration",
      "Advanced website functionality",
      "Mobile-optimized and SEO-friendly web structure",
      "Hacking secured websites",
      "User-friendly back-end system",
    ],
  };

  const serviceCategory: serviceCategoryType = [
    {
      id: "1",
      serviceName: "Responsive Website",
      serviceHeading: "Responsive Website",
      serviceDesc:
        "We understand the power of responsive websites. According to Google, you lose more than 60% of your web traffic if your website is not optimized for mobile screens. That's why we at Instant Logo Design develop responsive websites that adapt to mobile, tablet, or desktop sizes, delivering higher conversions.",
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
      serviceName: "WordPress Websites",
      serviceHeading: "WordPress Websites",
      serviceDesc:
        "Serving enterprises and large-scale businesses with a better WordPress development approach and solution-oriented strategies. Our WordPress developers and pros design sites leverage the power of open-source frameworks to achieve business returns and boost brand image. Having expertise in theme development, plugin selection, migration services, and other custom WordPress development ensures streamlined delivery.",
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
      serviceName: "eCommerce Website",
      serviceHeading: "eCommerce Website",
      serviceDesc:
        "Creating robust ecommerce solutions and marketplace business models allows organizations to smoothly integrated and dynamic realities. Our ecommerce web solutions are customer-focused to create e-shopping experiences delivering real business results.",
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
    {
      id: "4",
      serviceName: "Corporate Website",
      serviceHeading: "Corporate Website",
      serviceDesc:
        "We work closely with enterprise-level customers to create outstanding high, performing, secure custom websites with a focus on unique, professional web design. We help brands understand the role digital corporate web solutions play in realizing strategic opportunities and solving real-world business problems, always delivering agility, cost-effectiveness, and results.",
      servicePortfolio: [
        {
          id: "1",
          cat: "Animation 4",
          src: "/images/1.webp",
        },
        {
          id: "2",
          cat: "Animation 4",
          src: "/images/2.webp",
        },
        {
          id: "3",
          cat: "Animation 4",
          src: "/images/3.webp",
        },
        {
          id: "4",
          cat: "Animation 4",
          src: "/images/4.webp",
        },
      ],
    },
    {
      id: "5",
      serviceName: "Flat Website",
      serviceHeading: "Flat Website",
      serviceDesc:
        "Take advantage of dynamic flat website development services from Instant Logo Design to enhance your brand's online presence, taking it to the next level effectively. With minimalist interfaces, bold and contrasting color schemes, and signature characteristics of website structure enables brands to stay multi-dimensional yet flat.",
      servicePortfolio: [
        {
          id: "1",
          cat: "Animation 4",
          src: "/images/1.webp",
        },
        {
          id: "2",
          cat: "Animation 4",
          src: "/images/2.webp",
        },
        {
          id: "3",
          cat: "Animation 4",
          src: "/images/3.webp",
        },
        {
          id: "4",
          cat: "Animation 4",
          src: "/images/4.webp",
        },
      ],
    },
    {
      id: "6",
      serviceName: "Landing Pages",
      serviceHeading: "Landing Pages",
      serviceDesc:
        "The landing page is a standalone web page leveraging sophisticated digital advertising mediums, enticing visitors and enhancing conversion rates. Our team designs, develop, and deploys landing pages that boost converts by following best practices to reach the right audiences. Landing page design and development services by us maximize returns obtained from SEO and PPC.",
      servicePortfolio: [
        {
          id: "1",
          cat: "Animation 4",
          src: "/images/1.webp",
        },
        {
          id: "2",
          cat: "Animation 4",
          src: "/images/2.webp",
        },
        {
          id: "3",
          cat: "Animation 4",
          src: "/images/3.webp",
        },
        {
          id: "4",
          cat: "Animation 4",
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
        smallHeading={"Next Generation Customized Web Apps by"}
        mainHeading={"Best Web Development Company in UAE"}
        bgImg={"/images/web-banner.webp"}
        img={"/images/web-banner-right.webp"}
        desc={
          "We develop designs that are creative, exceptional, and feature-rich."
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
            defaultCategory={"Responsive Website"}
          />
        </div>
      </section>

      <TrustCTA />

      <GalleySec
        subHeading="Goal and Client-Oriented Animation Design"
        mainHeading="Togather With Focused Marketing Methods"
        desc="Allow us to take your brand to new heights with the ultra modern marketing strategies and improve your brand’s digital visibility. Our change the game in a snap."
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

export default WebDevelopment;
