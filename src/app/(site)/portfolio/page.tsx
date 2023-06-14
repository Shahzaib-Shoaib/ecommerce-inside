import { NextPage } from "next";
import PortfolioPackages from "@/components/Packages/PortfolioPackages";
import Banner from "@/components/Banner";

export const metadata = {
  title: "Portfolio | Ecommerce Inside",
  description:
    "Ecommerce Inside is a full-service digital solutions agency based in UAE specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
};

const Portfolio: NextPage = () => {
  return (
    <div className="Contact-Page ">
       <Banner
        smallHeading={"About Us"}
        mainHeading={"Big Ideas Creative Team New Technology"}
        bgImg={"/images/about-banner.webp"}
        img={"/images/about-banner-right.webp"}
        desc={null}
      />

      <section className="overflow-hidden">
        <div className="div_container px-[15px]">
          <h2 className="pb-[10px] text-center ">Built to last</h2>
          <h5 className="text-center font-normal text-[#666] ">
            We helped ISi build an App that helps Isi speakers to be different
            from others. More than 2 persons can connect through the app and can
            play songs after on and other. We also made an e-commerce website
            from where you can directly buy it and enjoy music
          </h5>
        </div>
        <PortfolioPackages />
      </section>
    </div>
  );
};

export default Portfolio;