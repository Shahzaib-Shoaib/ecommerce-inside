import { NextPage } from "next";
import Banner from "@/components/Banner";
import ServicesTabsSec from "@/components/services/ServicesTabsSec";
import ServicesIntroSec from "@/components/services/ServicesIntroSec";
import { ReactNode } from "react";
import TrustCTA from "@/components/services/TrustCTA";
import GalleySec from "@/components/services/GallerySec";
import ServicesPackagesSec from "@/components/services/ServicesPackagesSec";

export const metadata = {
  title: "Branding | Ecommerce Inside",
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

const Branding: NextPage = () => {
  const introData: ServicesIntroSecType = {
    heading: (
      <h3 className="mb-10">
        <span className="h3 text-caribbeangreen">
          Professionally Crafted, High-Impact
        </span>{" "}
        Impact & Ground-Breaking Marketing Collateral
      </h3>
    ),
    desc: "At Instant Logo Design, we know a thing or two about marketing collateral. We know the impact it can have on your business. We know it's critical to business growth and sales success. That's why we have a team of creative professionals who develop marketing assets that make an impact on your business.",
    mainpoint: "We love when our work becomes your brand story",
    img: "/images/marketing-collateral-1.webp",
    points: [
      "Professionally designed marketing and branding collateral",
      "Consistently shares a brand story",
      "One asset, multiple usages",
      "wide variety of formats",
      "Drives lead, sales and results",
      "Seamlessly flows with sales conversions",
    ],
  };

  const serviceCategory: serviceCategoryType = [
    {
      id: "1",
      serviceName: "Stationery Design",
      serviceHeading: "Stationery Design",
      serviceDesc:
        "The little things in business often make a big difference, like stationery designs. Haul your customer's attention with a fascinating stationery design kit. From simple business cards to jaw-dropping stationery design services, we are here to make your brand famous.",
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
      serviceName: "Brochure Design",
      serviceHeading: "Brochure Design",
      serviceDesc:
        "Brochure designs are one way to convey information about your company and educate customers regarding its products and services—impressive materials prepared using the latest technologies that connect to your business goals. Our team of skilled designers will create a content-driven layout with customer engagement in mind.",
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
      id: "3",
      serviceName: "Poster Design",
      serviceHeading: "Poster Design",
      serviceDesc:
        "Designing a successful poster for your marketing and advertisement has never been easier. Extraordinary poster design service that will help you drive your business to a higher position ensuring a strong visual impression – conveying the right message to the right audience.",
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
      id: "4",
      serviceName: "Product Packing Design",
      serviceHeading: "Product Packing Design",
      serviceDesc:
        "When presentation matters, trust our designers to create customized packaging that will set your product apart. We will create a custom, beautiful design with powerful messaging. It's not always about using the brightest colour or the boldest font. We know how to get your products noticed with eye-catching retail packaging designs that will draw people to your offerings.",
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
      id: "5",
      serviceName: "Book/magazine Design",
      serviceHeading: "Book/magazine Design",
      serviceDesc:
        "Using the art of storytelling aligned with your vision, we can move, captivate, and educate potential customers about your business, products, and services. Our experts select the right typography and proper page sizing to help you get your message through to your readers using original photographs, graphical illustrations, impressive content and catchy taglines.",
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
    <div className="Branding-Page ">
      <Banner
        smallHeading={"Edge Cutting Branding Design"}
        mainHeading={"Services the Best Branding Agency in USA is a Tap Away!"}
        bgImg={"/images/web-banner.webp"}
        img={"/images/branding-banner-right.webp"}
        desc={
          "We offer branding solutions that enhance organic traffic along with brand visibility on detail platforms in a blink of an eye."
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
            Beyond Just Branding -{" "}
            <span className="h2 text-caribbeangreen">
              Perfect Combination For Business Growth
            </span>
          </h2>
          <p className="pb-[36px] text-center  font-semibold text-[#666]">
            Good marketing collateral gives businesses an incalculable edge over
            the competition when executed properly. It helps provide a happy and
            effortless customer experience and projects an image of growth and
            modernity.
            <br />
            <br />
            Enhance your brand presence with a creative and ground-breaking
            marketing collateral company and get everything done professionally.
          </p>
          <ServicesTabsSec
            serviceCategory={serviceCategory}
            defaultCategory={"Stationery Design"}
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

export default Branding;
