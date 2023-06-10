'use client'
import { NextPage } from "next";
import Image from "next/image";
import Packages from "@/components/Packages/Packages";
import HeroSlider from "@/components/Sliders/HeroSlider";
import ProjectSlider from "@/components/Sliders/ProjectSlider";
import ServicesCardsSlider from "@/components/Sliders/ServicesCardsSlider";
import ServicesCard from "@/components/cards/ServicesCard";
import Button from "@/components/ui/Button";
import ServicesData from "@/data/ServicesData";
import useRQGlobalState from "@/utils/useRQGlobalState";

const Home: NextPage = () => {
  const [modalActive, setModalActive]:any = useRQGlobalState("modal", false);
  return (
    <div className="">
      <HeroSlider />

      {/* Info Section */}
      <section className="overflow-hidden">
        <div className="fluid_container">
          <Image
            src={"/images/tg-icon.webp"}
            alt="Pulsing Logo"
            width={150}
            height={150}
            className="mb-[40px] rounded-full border-[5px] border-caribbeangreen"
          />

          <h1 className="pb-[10px] text-center">
            The Best Digital Marketing Company in UAE
          </h1>
          <h1 className="pb-[36px] text-center text-caribbeangreen">
            An Incredible Intersection of Creativity and Tech
          </h1>
          <p className="pb-[36px] text-center">
            A full service digital marketing platform that caters to every scope
            from marketing to the brand building along with a wide range of
            latest IT solutions. We are rated as USA’s best digital marketing
            agency for our swift deliveries and professionalism. We are a bunch
            of creative minds who think alike to make marketing goals and dreams
            come true. Our experts have over decades of industry experience as
            well as expertise. Ecommerce Inside devises strategies and
            methodologies that make your brand stand out among others. With
            complete hands-on experience in web development, design, brand
            building, content optimization. We’ll upscale your sales, digital
            presence, and leads. So what are you waiting for? Contact us today
            for a consultation on how we can help you with all your digital
            needs & make it count with the top digital marketing companies in
            the UAE.
          </p>
          <Button variant="Green" onClick={() => setModalActive(true)}>Let's Get Your Project Started</Button>
        </div>
      </section>

      {/* Packages Section */}
      <section className="overflow-hidden">
        <h2 className="pb-[10px] text-center">
          Ecommerce Inside Plans & Pricing
        </h2>
        <h4 className="text-center font-normal text-[#666] ">
          Affordable Price Packages
        </h4>
        <Packages />
      </section>

      {/* Project Slider Section */}
      <section className="overflow-hidden">
        <ProjectSlider />
      </section>

      {/* Project Services Section */}
      <section className="overflow-hidden px-0">
        <div className="div_container px-[15px]">
          <h4 className="pb-[10px] text-center font-medium text-darkgray">
            Upscale and Leverage Brand Growth
          </h4>
          <h2 className="text-balack pb-[36px] text-center">
            With the Digital Marketing Company in USA
          </h2>
          <p className="pb-[36px] text-center   text-darkgray">
            Allow us to take your brand to new heights with the ultra modern
            marketing strategies and improve your brand’s digital visibility.
            Our professionals with decades of experience and marketing expertise
            can change the game in a snap.
          </p>
        </div>

        <div className="services-card-slider xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden 5xl:hidden 6xl:hidden">
          <ServicesCardsSlider data={ServicesData} />
        </div>
        <div className="hidden xl:block 2xl:block 3xl:block 4xl:block 5xl:block 6xl:block">
          <div className="grid xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-4 4xl:grid-cols-4 5xl:grid-cols-4 6xl:grid-cols-4 ">
            <div
              className={`flex h-[450px]  flex-col justify-center border bg-caribbeangreen  bg-center px-[15px] md:px-[50px] xl:h-[300px] 2xl:h-[350px] 3xl:h-[380px] 4xl:h-[380px] 5xl:h-[380px] 6xl:h-[380px]`}
            >
              <div className=" flex flex-col group-hover:hidden">
                <h3 className="text-h3 font-bold text-white ">Our Services</h3>
                <p className=" pt-1 text-sm leading-[20px] text-white">
                  Ecommerce Inside is on a mission to bring a revolution in the
                  IT and marketing domain with up-to-date technology, tools,
                  strategy, and approach. Our dedicated teams understand the
                  industry and audience requirements. We help you come forward
                  and up your brand’s game.
                </p>
                {/* <a
                  href="#"
                  className="text-sm uppercase text-white hover:text-black"
                >
                  CHECK OUT OUR SERVICES HERE{" "}
                </a> */}
              </div>
            </div>
            {ServicesData.map((service, index) => (
              <ServicesCard service={service} key={index} />
            ))}
          </div>
        </div>

        <div className=" div_container mx-auto flex items-center justify-center pt-[50px]">
          <h3 className="mx-auto flex items-center justify-center   font-extrabold text-darkblue ">
            Hire{" "}
            <Image width={240} height={272}
              src="/images/service-cta-icon.webp"
              alt="cta icon"
              className="mx-4 w-[50px] animate-grow-shrink"
            />
            and Grow your Brand with your next Design/Development Project.
          </h3>
        </div>
      </section>

      <section className=" bg-[url('/images/combo_bg.webp')] bg-cover bg-center bg-no-repeat py-[100px]">
        <div className=" div_container relative mx-auto">
          <div className=" grid place-content-center gap-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 4xl:grid-cols-2 5xl:grid-cols-2 6xl:grid-cols-2">
            <div className="combo_offer_content">
              <h2 className="mb-[15px] text-[30px] font-bold leading-[1.2] text-white xl:text-[45px]">
                Business Setup
                <br /> All-in-One Package
              </h2>
              <h4 className=" mb-[10px] text-[16px] uppercase tracking-[0.5px] text-caribbeangreen xl:text-[22px] ">
                WE UNDERSTAND WHAT’S BEST FOR YOUR BUSINESS
              </h4>
              <p className="mb-[15px] text-[16px] text-white ">
                Ecommerce Inside offers branding solutions to expand your reach
                and establish an online presence. Our combo packages fit for
                companies that strive for success & cover everything you need to
                run your business successfully.
              </p>
              <div className="row links flex flex-wrap">
                <div className="col-lg-6">
                  <ul className="mb-5 columns-1 text-white md:columns-2 md:text-[16px] lg:columns-2 xl:columns-2 2xl:columns-2 3xl:columns-2 4xl:columns-2 5xl:columns-2 6xl:columns-2">
                    <li className="mb-[10px]">
                      <span className="listTickColor before:mr-[10px] before:content-['\2714\0020']"></span>
                      Logo Design
                    </li>
                    <li className="mb-[10px]">
                      <span className="listTickColor before:mr-[10px] before:content-['\2714\0020']"></span>
                      Stationery Design
                    </li>
                    <li className="mb-[10px]">
                      <span className="listTickColor before:mr-[10px] before:content-['\2714\0020']"></span>
                      Website Design
                    </li>
                    <li className="mb-[10px]">
                      <span className="listTickColor before:mr-[10px] before:content-['\2714\0020']"></span>
                      Cup Design
                    </li>
                    <li className="mb-[10px]">
                      <span className="listTickColor before:mr-[10px] before:content-['\2714\0020']"></span>
                      Banner Design
                    </li>
                    <li className="mb-[10px]">
                      <span className="listTickColor before:mr-[10px] before:content-['\2714\0020']"></span>
                      Social Media Design
                    </li>
                    <li className="mb-[10px]">
                      <span className="listTickColor before:mr-[10px] before:content-['\2714\0020']"></span>
                      Brand Guide
                    </li>
                    <li className="mb-[10px]">
                      <span className="listTickColor before:mr-[10px] before:content-['\2714\0020']"></span>
                      T-shirt Design
                    </li>
                    <li className="mb-[10px]">
                      <span className="listTickColor before:mr-[10px] before:content-['\2714\0020']"></span>
                      Newsletter Design
                    </li>
                  </ul>
                  <Button variant="Green" onClick={() => setModalActive(true)}>
                    Let's Get Started
                  </Button>
                </div>
              </div>
            </div>
            <div className="combo_image flex items-center justify-center sm:hidden md:hidden">
              <Image width={1000} height={700} src="/images/combo_offer.webp" alt="" className="m-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
