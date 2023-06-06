'use client'
import React, { FC, useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import * as galleryStyles from "~/styles/gallery.module.css";
import PortfolioGalleryCard from "../Packages/PortfolioGalleryCard";

type GallerySecType = {
  subHeading: string;
  mainHeading: string;
  desc: string;
  images: PackagesGalleryType;
};

type PackagesGalleryType = {
  id:string,
  cat:string,
  src:string
}[]

const GallerySec: FC<GallerySecType> = ({
  subHeading,
  mainHeading,
  desc,
  images,
}) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const slideshowRef = React.useRef(null);
  return (
    <section className="overflow-hidden">
      <div className="div_container">
        <h6 className="pb-[10px] text-center text-caribbeangreen">
          {subHeading}
        </h6>
        <h2 className="text-balack pb-[26px] text-center font-bold">
          {mainHeading}
        </h2>
        <p className="pb-[36px] text-center  font-semibold text-[#666]">
          {desc}
        </p>
        {/* <PortfolioGalleryCard data={images}/> */}
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-4 5xl:grid-cols-4 6xl:grid-cols-4">
      {images.map((item) => (
        <div className={galleryStyles.gallerybox} key={item.id}>
          <div className={galleryStyles.imgBox}>
            <img
              src={item.src}
              alt=""
            />
          </div>
          <a className={galleryStyles.plus} onClick={() => setGalleryOpen(true)}>
            <HiPlusSm size={80} className="text-white" />
          </a>
        </div>
      ))}
      <Lightbox
        open={galleryOpen}
        plugins={[Counter, Slideshow]}
        counter={{ style: { top: "unset", bottom: 0 } }}
        close={() => setGalleryOpen(false)}
        slides={images}
        on={{
          click: () => {
            (slideshowRef.current?.playing
              ? slideshowRef.current?.pause
              : slideshowRef.current?.play)?.();
          },
        }}
      />
    </div>
        {/* <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-4 4xl:grid-cols-4 5xl:grid-cols-4 6xl:grid-cols-4">
      {images.map((item) => (
        <div className={galleryStyles.gallerybox} key={item.id}>
          <div className={galleryStyles.imgBox}>
            <img
              src={item.src}
              alt=""
            />
          </div>
          <a className={galleryStyles.plus} onClick={() => setGalleryOpen(true)}>
            <HiPlusSm size={80} className="text-white" />
          </a>
        </div>
      ))}
      <Lightbox
        open={galleryOpen}
        plugins={[Counter, Slideshow]}
        counter={{ style: { top: "unset", bottom: 0 } }}
        close={() => setGalleryOpen(false)}
        slides={images}
        on={{
          click: () => {
            (slideshowRef.current?.playing
              ? slideshowRef.current?.pause
              : slideshowRef.current?.play)?.();
          },
        }}
      />
    </div> */}

      </div>
    </section>
  );
};

export default GallerySec;
