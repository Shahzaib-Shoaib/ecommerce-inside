import { NextPage } from "next";
import Banner from "@/components/Banner";
import ServicesTabsSec from "@/components/services/ServicesTabsSec";
import ServicesIntroSec from "@/components/services/ServicesIntroSec";
import { ReactNode } from "react";
import TrustCTA from "@/components/services/TrustCTA";
import GalleySec from "@/components/services/GallerySec";
import ServicesPackagesSec from "@/components/services/ServicesPackagesSec";

export const metadata = {
  title: "Illustration | Ecommerce Inside",
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


const Illustration: NextPage = () => {
  const introData: ServicesIntroSecType = {
    heading: (
      <h3 className="mb-10">
        <span className="h3 text-caribbeangreen">
        Crafting Unique Brand Persona
        </span>{" "}
        With Visually Impactful Yet Bespoke Illustrations
      </h3>
    ),
    desc: "Our team of experienced designers crafts the perfect voice of a brand through in-depth research and choosing the right color palettes, visuals, and symbols. We bring custom brand identity to life by injecting and maximizing blissfulness, exquisiteness, and meaningfulness into an illustration. We are known for truly listening and helping businesses achieve clarity that builds lasting customer bonds.",
    mainpoint:
      "If you can imagine it, we can illustrate it",
    img: "/images/illustration-1.webp",
    points: [
      "100% original artwork",
      "Storyboarding and vector art",
      "Understanding of color, shape, and form",
      "Creative direction",
      "Incorporating different art techniques",
    ],
  };

  const serviceCategory: serviceCategoryType = [
    {
      id: "1",
      serviceName: "2D Animated Videos",
      serviceHeading: "2D Animated Videos",
      serviceDesc:
        "2D animated videos allow your brand to stand out from the crowd and engage your audience. Get the creative and aesthetic advantage and let your users love your product with 2D animation.",
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
      serviceName: "3D Animated Videos",
      serviceHeading: "3D Animated Videos",
      serviceDesc:
        "Over the years, 3D animation has gained immense popularity. From rough models and textures to rendered images and videos, our team use a combination of technologies to create stunning 3D animations for any type of brand.",
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
      serviceName: "Whiteboard Animation",
      serviceHeading: "Whiteboard Animation",
      serviceDesc:
        "Our team of whiteboard animators have created awesome whiteboard videos for businesses and brands. Videos capture most of the world's traffic today, so our team fully understands your needs and can provide entertainment based animation on your destination.",
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
      serviceName: "Stop Motion Animation",
      serviceHeading: "Stop Motion Animation",
      serviceDesc:
        "Stop motion animation, with all of its quirks, is an engaging medium and part of the online world. Our team of experienced video animators has created a large number of stop motion videos with interesting concepts in the past.",
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
    <div className="Illustration-Page ">
      <Banner
        smallHeading={"Creative & Top-Notch"}
        mainHeading={"2D & 3D illustration Designs"}
        bgImg={"/images/animation-banner.webp"}
        img={"/images/animation-banner-right.webp"}
        desc={
          "Get your hands on personalized, on-brand illustrations guaranteed to take your marketing efforts to the next level."
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
          Modern Illustration{" "}
            <span className="h2 text-caribbeangreen">Design Is Story Telling</span>
          </h2>
          <p className="pb-[36px] text-center  font-semibold text-[#666]">
          Illustration creates a world that words cannot. We are known for bringing your ideas to life by creating images you never thought imaginable. We make custom illustration design and artworks for your brand that communicates your unique story in a universal language and leaves an eternal impression on the minds of your audience.
          <br /><br />
          We are ready to create a unique, personalized illustration that will capture your target audience's imagination. It's a great way to add an extra layer to your communication marketing strategy to attract people's attention.
          </p>
          <ServicesTabsSec
            serviceCategory={serviceCategory}
            defaultCategory={"2D Animated Videos"}
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

export default Illustration;
