import { NextPage } from "next";
import PortfolioPackages from "@/components/Packages/PortfolioPackages";

export const metadata = {
  title: "Portfolio | Ecommerce Inside",
  description:
    "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
};

const Portfolio: NextPage = () => {
  return (
    <div className="Contact-Page ">
      <section className="portfolio-banner h-[60vh] w-full overflow-hidden bg-[url('/images/case-3-banner.webp')] bg-cover bg-center bg-no-repeat pt-[130px]">
        <div className="div_container my-auto flex flex-col items-center justify-center px-[15px] 2xl:flex-row 3xl:flex-row 4xl:flex-row 5xl:flex-row 6xl:flex-row">
          <div className="info w-[100%] text-white">
            <h1 className="font-bold text-white">Live Life Loud</h1>
            <p className="font-normal">
              Life should be lived at full volume. That means getting your
              friends together, turning up the music to full volume and dancing
              all night to a clear, rich sound. With our new ISi range of
              speakers, you can make the most of every single moment, power
              parties you’ll remember forever, and always live your life out
              loud.
            </p>
          </div>

          <div className="banner-img flex items-center justify-end sm:hidden md:hidden lg:hidden xl:hidden">
            <img
              src="/images/case-3-banner-right.webp"
              alt="portfolio-banner-img"
              className="w-[80%]"
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="div_container">
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
