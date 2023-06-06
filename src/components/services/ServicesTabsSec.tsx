"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";

import { HiPlusSm } from "react-icons/hi";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import * as galleryStyles from "~/styles/gallery.module.css";

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
  serviceCategory: serviceCategoryType;
  defaultCategory:string;
};

const ServicesTabsSec: FC<ServicesTabsSecType> = ({
  serviceCategory,
  defaultCategory
}) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const slideshowRef = React.useRef(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [serviceCat, setserviceCat] = useState<serviceCategoryType>();
  const [service, setService] = useState<serviceCategoryType>([]);

  useEffect(() => {

    setSelectedCategory(defaultCategory);
    const defaultPackages = serviceCategory.filter((data) => data.serviceName === defaultCategory);
    setService(defaultPackages);
  }, []);

  const changeCategorizedPortfolio = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const category: string = e.currentTarget.value;
    setSelectedCategory(category);
    
    const filteredService = serviceCategory.filter((data) => data.serviceName === category);
    setService(filteredService);
  };

  return (
    <div className="div_container">
        <div className="Services_tabs_wrapper w-full rounded-2xl shadow-2xl">
          <div className="tabs flex w-full items-center justify-around rounded-t-2xl bg-[#0E0D23] px-4 py-5 flex-wrap">
            {serviceCategory.map((servicesCat) => (
              <button
                onClick={(e) => changeCategorizedPortfolio(e)}
                value={servicesCat.serviceName}
                id={servicesCat.id}
                key={servicesCat.id}
                className={` ${
                  selectedCategory === servicesCat.serviceName
                    ? "border-b-2  border-caribbeangreen text-caribbeangreen"
                    : "border-b-2 border-transparent text-white"
                } flex cursor-pointer items-center justify-center border-b-2 border-transparent p-2 px-5 py-[8px] text-white hover:border-b-2  hover:border-caribbeangreen  hover:text-caribbeangreen`}
              >
                {servicesCat.serviceName}
              </button>
            ))}
          </div>

          {service.map((cat) => (
            <div className="" key={cat.id}>
              <div className="heading py-5 px-4">
                <h5 className="mb-3 font-semibold text-caribbeangreen">
                  {cat.serviceHeading}
                </h5>
                <p className="text-[#666]">{cat.serviceDesc}</p>
              </div>

              <div className="services_Portfolio ">
                <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-4 4xl:grid-cols-4 5xl:grid-cols-4 6xl:grid-cols-4">
                  {cat.servicePortfolio.map((item) => (
                    <div className={galleryStyles.gallerybox} key={item.id}>
                      <div className={galleryStyles.imgBox}>
                        <img src={item.src} alt="" />
                      </div>
                      <a
                        className={galleryStyles.plus}
                        onClick={() => setGalleryOpen(true)}
                      >
                        <HiPlusSm size={80} className="text-white" />
                      </a>
                    </div>
                  ))}
                  <Lightbox
                    open={galleryOpen}
                    plugins={[Counter, Slideshow]}
                    counter={{ style: { top: "unset", bottom: 0 } }}
                    close={() => setGalleryOpen(false)}
                    slides={cat.servicePortfolio}
                    on={{
                      click: () => {
                        (slideshowRef.current?.playing
                          ? slideshowRef.current?.pause
                          : slideshowRef.current?.play)?.();
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
        </div>
    // <section className="overflow-hidden">
    //   <div className="div_container">
    //     <h2 className="my-2 text-center font-semibold">
    //       Premium Qualinty{" "}
    //       <span className="h2 text-caribbeangreen">{secHeading}</span>
    //     </h2>
    //     <p className="my-10 text-center text-[#666]">{secDesc}</p>
    //   </div>

    //   <div className="div_container">
    //     <div className="Services_tabs_wrapper w-full rounded-2xl shadow-2xl">
    //       <div className="tabs flex w-full items-center justify-around rounded-t-2xl bg-[#0E0D23] px-4 py-5 flex-wrap">
    //         {serviceCategory.map((servicesCat) => (
    //           <button
    //             onClick={(e) => changeCategorizedPortfolio(e)}
    //             value={servicesCat.serviceName}
    //             id={servicesCat.id}
    //             key={servicesCat.id}
    //             className={` ${
    //               selectedCategory === servicesCat.serviceName
    //                 ? "border-b-2  border-caribbeangreen text-caribbeangreen"
    //                 : "border-b-2 border-transparent text-white"
    //             } flex cursor-pointer items-center justify-center border-b-2 border-transparent p-2 px-5 py-[8px] text-white hover:border-b-2  hover:border-caribbeangreen  hover:text-caribbeangreen`}
    //           >
    //             {servicesCat.serviceName}
    //           </button>
    //         ))}
    //       </div>

    //       {service.map((cat) => (
    //         <div className="" key={cat.id}>
    //           <div className="heading py-5 px-4">
    //             <h5 className="mb-3 font-semibold text-caribbeangreen">
    //               {cat.serviceHeading}
    //             </h5>
    //             <p className="text-[#666]">{cat.serviceDesc}</p>
    //           </div>

    //           <div className="services_Portfolio ">
    //             <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-4 4xl:grid-cols-4 5xl:grid-cols-4 6xl:grid-cols-4">
    //               {cat.servicePortfolio.map((item) => (
    //                 <div className={galleryStyles.gallerybox} key={item.id}>
    //                   <div className={galleryStyles.imgBox}>
    //                     <img src={item.src} alt="" />
    //                   </div>
    //                   <a
    //                     className={galleryStyles.plus}
    //                     onClick={() => setGalleryOpen(true)}
    //                   >
    //                     <HiPlusSm size={80} className="text-white" />
    //                   </a>
    //                 </div>
    //               ))}
    //               <Lightbox
    //                 open={galleryOpen}
    //                 plugins={[Counter, Slideshow]}
    //                 counter={{ style: { top: "unset", bottom: 0 } }}
    //                 close={() => setGalleryOpen(false)}
    //                 slides={cat.servicePortfolio}
    //                 on={{
    //                   click: () => {
    //                     (slideshowRef.current?.playing
    //                       ? slideshowRef.current?.pause
    //                       : slideshowRef.current?.play)?.();
    //                   },
    //                 }}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //   </div>
    //     </div>
    // </section>
  );
};

export default ServicesTabsSec;
