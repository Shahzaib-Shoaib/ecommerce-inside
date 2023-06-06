import { NextPage } from "next";
import Link from "next/link";
import Banner from "~/components/Banner";
import servicesqualityData from "~/data/servicesqualityData";

export const metadata = {
  title: "Services | Ecommerce Inside",
  description:
    "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
};

const Services: NextPage = () => {


  return (
    <div className="Services-Page ">
      <Banner
        smallHeading={"Our Services"}
        mainHeading={"We Make It Happen"}
        bgImg={"/images/branding-banner.webp"}
        img={"/images/branding-banner-right.webp"}
        desc={null}
      />

      

      <section className="overflow-hidden">
        <div className="div_container">
          

          <div className="headings flex flex-col items-center justify-center">
            <h5 className="text-[#666] font-semibold">Grow Your Brand</h5>
            <h1 className="font-bold text-[#1b1037] text-[45px] py-5 leading-[1]">
              With Top
              <span className="text-caribbeangreen text-[45px]"> Quality Services</span>
            </h1>
            <p className="text-[#666] text-center">
              Whether you're a start-up or an enterprise business, our expertise
              in 360 web solutions & digital branding will turn your ideas into
              online success. We privilege offering multiple services under one
              umbrella
            </p>
          </div>

          <div className="services-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-4 5xl:grid-cols-4 6xl:grid-cols-4 place-content-center py-[40px]">
            {
              servicesqualityData.map((service) => (
                <div className="service-box group mb-[55px] px-[15px]" key={service.id}>
                <Link href={service.link}>
                  <img
                    src={service.img}
                    alt={service.cat}
                    className="w-full duration-200 group-hover:scale-110 rounded-t-lg"
                  />
                </Link>
                <Link
                  href={service.link}
                  className="relative bottom-[29px]  px-[15px] text-center "
                >
                  <h3 className="category-name mx-[15px] -mt-[25px] rounded-md bg-white pt-[25px] text-[15px]  font-semibold text-[#333] group-hover:text-caribbeangreen lg:text-[18px]">
                    {service.cat}
                  </h3>
                </Link>
                <ul className="servicebox-list list-none">
                  {service.points.map((point,index) => (
                    <li className="point relative  ml-[25px] pl-[5px] text-[13px] font-semibold leading-[26px] text-[#666] before:absolute before:-left-[20px] before:top-[25%] before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#e76239] " key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              ))
            }
          </div>
          


        </div>
      </section>


    </div>
  );
};

export default Services;
