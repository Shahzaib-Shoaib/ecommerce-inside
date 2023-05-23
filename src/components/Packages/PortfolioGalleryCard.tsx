import React, { useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import * as galleyStyles from "../../styles/galley.module.css";

const PortfolioGalleryCard = ({ info }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const slideshowRef = React.useRef(null);
  return (
    <div className="gallery mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
      {info.map((item, index) => (
        <div className={galleyStyles.gallerybox} key={index}>
          <div className={galleyStyles.imgBox}>
            <img
              src={item.src}
              alt=""
              style={{ backgroundImage: `url(${item.img})` }}
            />
          </div>
          <a className={galleyStyles.plus} onClick={() => setGalleryOpen(true)}>
            <HiPlusSm size={80} className="text-white" />
          </a>
        </div>
      ))}
      <Lightbox
        open={galleryOpen}
        plugins={[Counter,Slideshow]}
        counter={{ style: { top: "unset", bottom: 0 } }}
        close={() => setGalleryOpen(false)}
        slides={info}
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
