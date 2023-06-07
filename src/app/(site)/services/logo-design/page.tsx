import { NextPage } from "next";
import Banner from "@/components/Banner";
import ServicesTabsSec from "@/components/services/ServicesTabsSec";
import ServicesIntroSec from "@/components/services/ServicesIntroSec";
import { ReactNode } from "react";
import TrustCTA from "@/components/services/TrustCTA";
import GalleySec from "@/components/services/GallerySec";
import ServicesPackagesSec from "@/components/services/ServicesPackagesSec";

export const metadata = {
  title: "Logo Design | Ecommerce Inside",
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

const LogoDesign: NextPage = () => {
  const introData: ServicesIntroSecType = {
    heading: (
      <h3 className="mb-10">
        <span className="h3 text-caribbeangreen">Reclaim Your Position</span> In
        The Market With Manifested Design
      </h3>
    ),
    desc: "Being a top-notch design agency based in Pakistan, we create premium, everlasting, and powerful brand impressions having the power to define moments. We give your brand a unique, symbolic, yet iconic identity with a thoughtful name, timeless logo design, and captivating visual language. We take pride in shaping a clear brand identity that leaves a lasting and memorable imprint on the hearts and minds of its target customer.",
    mainpoint: "We love when our work becomes your brand story",
    img: "/images/ld-1.webp",
    points: [
      "Compassionate design and quality above all",
      "Crafting soul into a brand identity",
      "Creating a new path forward for the brand",
      "Captivating and inspiring designs",
      "Conducting research before style and trend",
    ],
  };

  const serviceCategory: serviceCategoryType = [
    {
      id: "1",
      serviceName: "Iconic Logo",
      serviceHeading: "Iconic Logo Design",
      serviceDesc:
        "Radiate integrity and impress your target customers by crafting versatile, simple yet complex logo designs. We take pride in designing iconic logos encompassing unique characteristics specifically designed to outshine its competitors. The iconic logo isn't a brand name nor letters; rather, it's an icon that artistically communicates brand personality.",
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
      serviceName: "3D Animated Logo",
      serviceHeading: "3D Animated Logo",
      serviceDesc:
        "Let's put together an award-winning 3D animated logo design for your brand, allowing you to deliver beyond the typical designs. With such knowledge and experience, we have a full team of graphic designers and animators who seamlessly blend their artistic creativity to craft logos that accurately portrays brand identity.",
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
      serviceName: "2D Animated Logo",
      serviceHeading: "2D Animated Logo",
      serviceDesc:
        "Get hold of the marketing weapon capable of grabbing the mindshare of your target audience with 2D animated logo designs for your brand. After all, a powerful brand identity is the key to boosting brand awareness, engagement, and image while capturing the attention of your target audience.",
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
      serviceName: "Typographic logo",
      serviceHeading: "Typographic logo",
      serviceDesc:
        "There's nothing better than a dynamic typography logo to gain unlimited recognition and mark your brand's distinctiveness and individuality within the market. Consisting solely of your brand or company name, a typography logo design brings your business into the spotlight.",
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
      serviceName: "Symbolic Logo",
      serviceHeading: "Symbolic Logo",
      serviceDesc:
        "Tie thematic, symbolic logos into your brand strategy to break boundaries and records. Merge various elements and symbols into one memorable and emotive design that clearly communicates the message and tells a story to elicit a response.",
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
      id: "6",
      serviceName: "Illustrative Logo",
      serviceHeading: "Illustrative Logo",
      serviceDesc:
        "Share your brand story through illustrative logs that are way more than a picture – after all, a visual has the power to speak a thousand words. Create an interactive logo design that connects your brand with its audience by incorporating the perfect mix of lines, graphics, colors, and symbols.",
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
    <div className="Animation-Page ">
      <Banner
        smallHeading={"Get Unique and"}
        mainHeading={"Creative Logo Designs"}
        bgImg={"/images/banner-ld.webp"}
        img={"/images/banner-item-ld.webp"}
        desc={
          "Harness the power of consistent creativity to create brands that exude power, prestige, and exquisiteness."
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
            The Leading Logo Design Agency For{" "}
            <span className="h2 text-caribbeangreen">
              Modern Brands (LOGO HERE)
            </span>
          </h2>
          <p className="pb-[36px] text-center  font-semibold text-[#666]">
            Wondering what makes us the top priority when it comes to designing
            brand identity logos?
            <br />
            <br />
            We are a new-age graphic design agency that helps brands to look
            creative & bold using our cutting-edge design & branding services.
            Our team of professionals elevates brand experiences through
            personalized designing and creativity.
          </p>
          <ServicesTabsSec
            serviceCategory={serviceCategory}
            defaultCategory={"Iconic Logo"}
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

export default LogoDesign;
