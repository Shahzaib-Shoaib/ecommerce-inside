import { NextPage } from "next";
import Banner from "@/components/Banner";
import ServicesTabsSec from "@/components/services/ServicesTabsSec";
import ServicesIntroSec from "@/components/services/ServicesIntroSec";
import { ReactNode } from "react";
import TrustCTA from "@/components/services/TrustCTA";
import GalleySec from "@/components/services/GallerySec";
import ServicesPackagesSec from "@/components/services/ServicesPackagesSec";

export const metadata = {
  title: "Creative Copywriting | Ecommerce Inside",
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


const CreativeCopywriting: NextPage = () => {
  const introData: ServicesIntroSecType = {
    heading: (
      <h3 className="mb-10">
        <span className="h3 text-caribbeangreen">Content That Works Miracles</span>{" "}
        In Driving Your Business Forward
      </h3>
    ),
    desc: "Content is powerful – period – it speaks volumes to your target customers while establishing creditability and expertise. It's the fuel that drives websites, blogs, and whatnot by painting a picture that gets stuck in your customer's mind, forever. Great visuals can make your company noticed, but great copywriting can capture the story and drive the message home.",
    mainpoint:
      "We love when our work becomes your brand story",
    img: "/images/creative-writing-1.webp",
    points: [
      "Pack a punch through words",
      "Wide range of formats and tones",
      "Consistently shares a brand story",
      "One asset, multiple UAEges",
      "Excellent eye for details",
      "Meeting strict deadlines",
      "Drives lead, sales and results",
    ],
  };

  const serviceCategory: serviceCategoryType = [
    {
      id: "1",
      serviceName: "Article Writing",
      serviceHeading: "Article Writing",
      serviceDesc:
        "The hours spent researching, writing, and editing an article can make the entire process feel sort of like a chore. This is where our expertise comes in handy; we harness the power of content at scale — without the headache.",
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
      serviceName: "Blog Writing",
      serviceHeading: "Blog Writing",
      serviceDesc:
        "Take advantage of our content generation services and lead search engines. Expedite your blog writing output to support your business's SEO goals. Of course, producing thoUAEnds of words with right idea and keywords, without the black hat and keyword stuffing can take hours – even days – not to mention the time spent publishing.",
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
      serviceName: "Press Release",
      serviceHeading: "Press Release",
      serviceDesc:
        "Get your brand in front of thoUAEnds of daily visitors with immediate distribution to major websites and leading news sources. We realize that PR boils down to one fundamental quality – effective storytelling. Which is why we work hard on developing media relationships, after all, our success depends on our client's success.",
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
      serviceName: "Website Content",
      serviceHeading: "Website Content",
      serviceDesc:
        "Get hold of content that not only converts but also drives more organic search traffic. We work rigorously to make your websites more engaging and inspiring for your customers. With Instant Logo Design, grow your online presence, highlighting user-centric facilities and capabilities through unique, SEO-optimized web copy.",
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
      id: "5",
      serviceName: "Product Description",
      serviceHeading: "Product Description",
      serviceDesc:
        "Your product descriptions can make or break a sale. And a good product description offers three things: connecting with the audience, showing how the product solves the problem, and convincing them to purchase. Of course, it's more than describing the product; no one does it better than Instant Logo Design.",
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
        smallHeading={"Highly-creative & Unique"}
        mainHeading={"Writing Services Starting"}
        bgImg={"/images/web-banner.webp"}
        img={"/images/mobile-banner-right.webp"}
        desc={
          "Take full advantage of the 6 seconds by griping their wandering attention with inspiring, resonating and enticing content."
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
          The Art Of Selling,{" "}
            <span className="h2 text-caribbeangreen">
            Backed By The Science Of Strategy
            </span>
          </h2>
          <p className="pb-[36px] text-center  font-semibold text-[#666]">
          Your business is unique. But guess what? So are all your competitors, so as a matter of fact, we want your customers to notice you. Our creativity and branding know-how will help you cut through the noise with a voice that's more persuasive, memorable, and powerful than anyone.
            <br />
            Our team of wordslingers combines the power of proven formulas with a creative flair that customers can't resist.
          </p>
          <ServicesTabsSec
            serviceCategory={serviceCategory}
            defaultCategory={"Article Writing"}
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

export default CreativeCopywriting;
