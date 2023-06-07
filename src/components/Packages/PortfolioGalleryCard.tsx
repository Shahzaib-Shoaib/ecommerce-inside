"use client";

import React, { useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import * as galleryStyles from "@/styles/gallery.module.css";

type PackagesGalleryType = {
  id:string,
  cat:string,
  src:string
}[]
const PortfolioGalleryCard = ({ data }: { data: PackagesGalleryType }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const slideshowRef = React.useRef(null);

  return (
    <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-3 5xl:grid-cols-3 6xl:grid-cols-3">
      {data.map((item) => (
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
        slides={data}
        on={{
          click: () => {
            (slideshowRef.current?.playing
              ? slideshowRef.current?.pause
              : slideshowRef.current?.play)?.();
          },
        }}
      />
    </div>
  );
};

export default PortfolioGalleryCard;
