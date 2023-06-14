import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import heroSliderData from "@/data/HeroSliderData";
import Button from "@/components/ui/Button";
import useRQGlobalState from "@/utils/useRQGlobalState";
import Image from "next/image";

function HeroSliderReact() {
  const [modalActive, setModalActive]: any = useRQGlobalState("modal", false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 2,
    //   slidesToSlide: 2 // optional, default to 1.
    // },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1,
    //   slidesToSlide: 1 // optional, default to 1.
    // }
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      //showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay
      autoPlaySpeed={3000}
    //keyBoardControl={true}
    //customTransition="all .5"
    //transitionDuration={500}
    //containerClass="carousel-container"
    //removeArrowOnDeviceType={["tablet", "mobile"]}
    //dotListClass="custom-dot-list-style"
    //itemClass="carousel-item-padding-40-px"
    >
      {heroSliderData?.map((slide, id) => (
        <div key={id}>
          <Image src={slide.url} alt="Slide" width={1920} height={1080} />
          <div className="absolute bottom-[50%] top-[25%]">
            <div className="heroRounded w-[45%] rounded-br-[85px] bg-[url('/images/banner-slide-img.webp')] bg-cover py-[5%] pl-[2%] pr-[5%] md:w-[90%] lg:w-[75%] xl:w-[65%]">
              <h1 className="mb-[15px] text-white">{slide.title}</h1>
              <p className="mb-[10px] text-xs text-white sm:text-sm">
                {slide.desc}
              </p>
              <div className="banner_btn">
                <Button variant="Dark" onClick={() => setModalActive(true)}>
                  Request Quote For Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </Carousel>
  )
}

export default HeroSliderReact