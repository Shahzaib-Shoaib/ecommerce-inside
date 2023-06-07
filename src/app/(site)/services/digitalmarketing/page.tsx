import { NextPage } from "next";
import Banner from "@/components/Banner";
import ServicesIntroSec from "@/components/services/ServicesIntroSec";
import { ReactNode } from "react";
import TrustCTA from "@/components/services/TrustCTA";
import ServicesPackagesSec from "@/components/services/ServicesPackagesSec";
import CategoriesSec from "@/components/services/CategoriesSec";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Digital Marketing | Ecommerce Inside",
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

type CategoriesSecType = {
  id:string,
  img:string,
  name:string,
  desc:string,
}[];


const DigitalMarketing: NextPage = () => {
  const introData: ServicesIntroSecType = {
    heading: (
      <h3 className="mb-10">
        <span className="h3 text-caribbeangreen">
          Turn Digital Marketing Into
        </span>{" "}
        Proven And Revenue-Driven Growth
      </h3>
    ),
    desc: "Instant Logo Design's digital marketing services specialize to fit the needs of growing businesses. Everything from our pricing to how we deliver our services is tailored to fit the needs of your business. Many agencies boast about working with Fortune 500 companies and popular name-brands. We don't. We earn our stripes by delivering real results for businesses.",
    mainpoint: "We love when our work becomes your brand story",
    img: "/images/digitalmarketing-1.webp",
    points: [
      "Sustain a positive revenue trend",
      "An extension of your marketing team",
      "Client relationship and result focused",
      "Customized services perfectly aligned",
      "Glitz and glamor that convert leads",
      "Wide variety of digital services",
    ],
  };


  const CategoriesSecData:CategoriesSecType = [
    {
      id:"1",
      img:"/images/digitalmarketingCat1.png",
      name:"Customized Plan",
      desc:"We leverage your data to drive your marketing strategy that perfectly aligns with customer profiles while speaking volumes to your ideal audience. Re-engage your audience with dynamic retargeting and a brand lift strategy that optimizes your efforts explicitly tailored to meet your marketing goals."
    },
    {
      id:"2",
      img:"/images/digitalmarketingCat2.png",
      name:"Community Management",
      desc:"Build relationships with businesses and customers – online and offline – and utilize every opportunity to establish brand identity in social and online spaces. We design, deliver, and evaluate impactful campaigns that tackle your digital presence while developing a broad online community."
    },
    {
      id:"3",
      img:"/images/digitalmarketingCat3.png",
      name:"Follower Growth",
      desc:"Amplify your social media followers and unlock your online success by consistently promoting your business. The good news is that even if you don't have hours and hours to spend actively recruiting new followers, you can work with Instant Logo Design to systematize your follower growth."
    },
    {
      id:"4",
      img:"/images/digitalmarketingCat4.png",
      name:"Interactive Engagement",
      desc:"Bring your brand to life, enhance user experiences and outcomes across multiple platforms. Make the most of the interactive marketing features, visuals, videos, and techniques to capture your audience's attention while creatively presenting your product or service."
    },
  ]

  return (
    <div className="Animation-Page ">
      <Banner
        smallHeading={"Creative & Robust"}
        mainHeading={"Digital Marketing Company in USA"}
        bgImg={"/images/web-banner.webp"}
        img={"/images/mobile-banner-right.webp"}
        desc={
          "Custom strategy combined with data-driven insights impact business traffic, revenue, and growth, fueled by expert-led marketing services."
        }
      />

      <ServicesIntroSec
        heading={introData.heading}
        desc={introData.desc}
        img={introData.img}
        mainpoint={introData.mainpoint}
        points={introData.points}
      />

      <section className="overflow-hidden bg-[#F0F0F0]">
        <div className="div_container">
          <h6 className="h2 text-caribbeangreen text-center">Inject Your Brand With</h6>
          <h2 className="text-balack pb-[26px] text-center font-bold">
            Exceptional And Impeccable Branding Services
          </h2>
          <p className="pb-[36px] text-center  font-semibold text-[#666]">
            Our fantastic brand marketing services help to raise brand
            awareness, increase revenue, and provide a great return on
            investment. Our digital marketing services give businesses of all
            sizes an opportunity to market their brand 24/7 and expand their
            reach at a low cost. As long as your business has a strong digital
            presence, your customers will always find you and create that with
            Instant Logo Design.
            <br /><br />
            Let your brand revolve efficiently around the digital world with a
            degree of 360 marketing Services.
          </p>
          <CategoriesSec CategoriesSecData={CategoriesSecData} />
          <div className="cta flex items-center justify-center mt-[50px]">
            <Button variant="Green" >Contact us for 70% Discount</Button>
          </div>
        </div>
      </section>

      <TrustCTA />

      <ServicesPackagesSec
        subHeading="Our Price Model"
        mainHeading="That Suits Everyone!"
        desc="Allow us to take your brand to new heights with the ultra modern marketing strategies and improve your brand’s digital visibility. Our change the game in a snap."
      />
    </div>
  );
};

export default DigitalMarketing;
