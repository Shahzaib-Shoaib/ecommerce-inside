import { NextPage } from "next";
import Banner from "@/components/Banner";
import ServicesIntroSec from "@/components/services/ServicesIntroSec";
import { ReactNode } from "react";
import TrustCTA from "@/components/services/TrustCTA";
import ServicesPackagesSec from "@/components/services/ServicesPackagesSec";
import CategoriesSec from "@/components/services/CategoriesSec";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "SEO Services | Ecommerce Inside",
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
  id: string;
  img: string | null;
  name: string;
  desc: string;
}[];

const SeoServices: NextPage = () => {
  const introData: ServicesIntroSecType = {
    heading: (
      <h3 className="mb-10">
        <span className="h3 text-caribbeangreen">
          Gain More Web Search Traffic
        </span>{" "}
        And Revenue With SEO-Focused Services
      </h3>
    ),
    desc: "Google doesn't randomly decide which websites go to the top of the search results. Instead, it's the algorithm which adjusts ranking based on several factors. Leave it to our experts to optimize your SEO efforts, enabling a higher position of your website on the Google result page.",
    mainpoint: "We love when our work becomes your brand story",
    img: "/images/seo-1.webp",
    points: [
      "Increased website traffic and sales",
      "Higher search engine ranking",
      "Marketing channel permeates",
      "Front-loaded value driving impact",
      "Boost online exposure",
      "Diversified suite of digital services",
      "Systemized campaigns to fit your needs",
    ],
  };

  const CategoriesSecData: CategoriesSecType = [
    {
      id: "1",
      img: null,
      name: "E-commerce",
      desc: "We deliver proven results through performing extensive keyword research, custom ecommerce SEO strategy and product optimization. Take the pressure of SEO off the plate with specialized, tailored and full-service ecommerce SEO services.",
    },
    {
      id: "2",
      img: null,
      name: "B2B",
      desc: "Our B2B-focused SEO campaigns build a website's relevance and trust with search engines and improve your website's ranking. Developing a customized B2B SEO strategy based on their target audience, profit margins, lead time, business objectives and many other variables.",
    },
    {
      id: "3",
      img: null,
      name: "B2C",
      desc: "Maximize your revenue by taking advantage of proven methodologies and experiences that solve pain points around marketing and growth by optimizing title tags, earning backlinks, and setting up a Google My Business profile.",
    },
    {
      id: "4",
      img: null,
      name: "Non-Profit",
      desc: "Winning meaningful market share for brands, igniting visibility and delivering real business results for nonprofit organizations. Various nonprofits trust SEO services to deliver results when it comes to increasing exposure and boosting reach – driving search traffic to your website.",
    },
    {
      id: "5",
      img: null,
      name: "Startups",
      desc: "Kickstart your organic growth and increase your sales without paying for promotion rather, leverage SEO organic reach and build awareness for startups. From link building to keyword research and everything in between to amplify your digital marketing efforts.",
    },
    {
      id: "6",
      img: null,
      name: "Enterprise",
      desc: "We help enterprises like yours maximize search visibility, increase brand awareness, and drive revenue. Or course, every web resource owner and digital entrepreneur wants to have their company at the top among search engines. And Instant Logo Design helps you optimize search engine algorithms through industry experience and expertise.",
    },
  ];

  return (
    <div className="Animation-Page ">
      <Banner
        smallHeading={"Reach the Top-Spot in"}
        mainHeading={"Search-Engine Focused And Solution-Oriented Services"}
        bgImg={"/images/web-banner.webp"}
        img={"/images/mobile-banner-right.webp"}
        desc={
          "We connect global brands with their target customers across all digital touch-points via highly relevant, customized and targeted experiences."
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
          <h6 className="h2 text-center text-caribbeangreen">
            Reach New Heights with
          </h6>
          <h2 className="text-balack pb-[26px] text-center font-bold">
            ROI-Driven SEO Strategies & Proven Methodologies That Drive Business
            Results
          </h2>
          <p className="pb-[36px] text-center  font-semibold text-[#666]">
            In fact, SEO relies on technology to make it functional but affects
            real individuals – that's exactly why we have real humans working on
            your campaign. Having your business on the internet is no longer
            optional if you want to attract customers.
            <br />
            <br />
            So that means having SEO for your website isn't optional either. But
            thanks to our unique scalable model, we can do something for every
            business at every budget.
          </p>
          <CategoriesSec CategoriesSecData={CategoriesSecData} />
          <div className="cta mt-[50px] flex items-center justify-center">
            <Button variant="Green">Contact us for 70% Discount</Button>
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

export default SeoServices;
