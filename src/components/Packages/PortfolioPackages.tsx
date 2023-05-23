import React, { useEffect, useState } from "react";
import packageCatagories from "~/data/packageCatagories";
import packages from "~/data/packages";
import PackageCard from "./PackageCard";
import packagesGallery from "~/data/packagesGallery";
import PortfolioGalleryCard from "./PortfolioGalleryCard";
import Expertise from "../Expertise";
import Button from "../ui/Button";
import GetStarted from "../GetStarted";
import Testimonials from "../Testimonials";
import Footer from "../Footer";
import CopyRightBar from "../CopyRightBar";
import useRQGlobalState from "~/utils/useRQGlobalState";

const PortfolioPackages = () => {
  const [active, setActive] = useState("");
  const [filterCards, setFilterCards] = useState(null);
  const [filterImages, setFilterImages] = useState(null);

  const [modalActive,setModalActive] = useRQGlobalState('modal',false);

  useEffect(() => {
    setFilterCards(packages);
    setFilterImages(packagesGallery);
  }, []);

  const handleClick = (e) => {
    const btnValue = e.target.value;
    setActive(btnValue);
    const newFilterCards = packages.filter((item) => item.cat === btnValue);
    const newFilterGallery = packagesGallery.filter(
      (item) => item.cat === btnValue
    );
    console.log(newFilterCards);
    if (btnValue === "All") {
      setFilterCards(packages);
      setFilterImages(packagesGallery);
    } else {
      setFilterCards(newFilterCards);
      setFilterImages(newFilterGallery);
    }
  };
  return (
    <section className="mx-auto overflow-hidden">
      <div className="container mx-auto px-[15px]">
        <div className="portfolio-packages-case-info py-[65px] text-center lg:py-[50px]">
          <h3 className="portfolio-packages-case-heading pb-[15px] text-[29px] font-bold text-black md:pb-[20px] md:text-[50px] lg:text-[45px]">
            Built to last
          </h3>
          <p className="portfolio-packages-case-desc text-[17px] leading-[27px] text-[#999] md:text-[20px] md:leading-[34px] lg:text-[24px] lg:leading-[40px]">
            We helped ISi build an App that helps Isi speakers to be different
            from others. More than 2 persons can connect through the app and can
            play songs after on and other. We also made an e-commerce website
            from where you can directly buy it and enjoy music{" "}
          </p>
        </div>
      </div>
      <div className="portfolio-packages-case-tabs mx-5 mb-[20px] flex flex-wrap justify-center gap-5">
        {packageCatagories.map((item, id) => {
          return (
            <button
              onClick={(e) => handleClick(e)}
              key={id}
              value={item.name}
              className={`${
                active === item.name
                  ? " border-2 border-darkblue bg-caribbeangreen text-white"
                  : "bg-white"
              }  " flex cursor-pointer items-center justify-center rounded-t-md border-2 border-caribbeangreen px-5  py-2 hover:border-gray-300`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="portfolio-Packages-Gallery mx-auto w-[80%] p-[30px]">
        <div className="mx-auto px-[30px]">
          {/* Portfolio Pacages Galley */}
          {filterImages && <PortfolioGalleryCard info={filterImages} />}
          {/* <div className="mx-auto grid place-content-center gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filterImages &&
              filterImages.map((data, id) => {
                return <PortfolioGalleryCard info={data} />;
              })}
          </div> */}
        </div>
      </div>
      <div className="portfolio-cta border-b border-[#00000045] py-[30px] text-center lg:py-[50px]">
        <div className="about-btn flex flex-col sm:flex-row items-center justify-center gap-8">
          <Button variant="Dark" className="" onClick={()=>setModalActive(true)}>
            Let's Get Started
          </Button>
          <Button variant="Green">Consult An Expert</Button>
        </div>
      </div>
      <div className="portfolio-packages">
        <div className="container mx-auto px-[15px]">
          <div className="portfolio-pakages-heading py-[65px] text-center md:py-[50px]">
            <h3 className="portfolio-pakages-sec-heading pb-[15px] text-[29px] font-bold leading-[1.2] text-[#1b1037] md:pb-[20px] md:text-[45px]">
              Ecommerce Inside Plans & Pricing
            </h3>
            <p className="portfoliopackagessec-desc text-[17px] leading-[27px] text-[#999] md:text-[20px] md:leading-[34px] lg:text-[24px] lg:leading-[40px]">
              Affordable Price Packages
            </p>
          </div>
        </div>
      </div>
      <div className="portfolio-packages mx-auto w-[75%] sm:px-[50px] pb-[50px]">
        <div className="portfolio-packages-container mx-auto sm:px-[30px]">
          {/* Package Cards */}
          <div className="grid  gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filterCards &&
              filterCards.map((data, id) => {
                return <PackageCard info={data} />;
              })}
          </div>
        </div>
      </div>

      

      
    </section>
  );
};

export default PortfolioPackages;
