import { type NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header/Header";
import ServicePackages from "~/components/Packages/ServicePackages";
import ServicesCard from "~/components/cards/ServicesCard";
import Button from "~/components/ui/Button";
import ServicesData from "~/data/ServicesData";
import GetStarted from "~/components/GetStarted";
import Footer from "~/components/Footer";
import CopyRightBar from "~/components/CopyRightBar";
import ProjectSlider from "~/components/Slider/ProjectSlider";
import HeroSlider from "~/components/Slider/HeroSlider";
import MyModal from "~/components/MyModal";
import Testimonials from "~/components/Testimonials";
import Expertise from "~/components/Expertise";
import Agencies from "~/components/Agencies";
import useRQGlobalState from "~/utils/useRQGlobalState";
import FluidContainer from "~/components/ui/FluidContainer";
import Container from "~/components/ui/Container";
import Heading2 from "~/components/ui/Heading2";
import Paragraph from "~/components/ui/Paragraph";
import CollisionButton from "~/components/ui/CollisionButton";
import ServicesCardsSlider from "~/components/Slider/ServicesCardsSlider";

const Home: NextPage = () => {
  const [modalActive, setModalActive] = useRQGlobalState("modal", false);
  return (
    <>
      <Head>
        <title>Ecommerce Inside</title>
        <meta
          name="description"
          content="Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <main className="overflow-hidden">
        <Header />
        <HeroSlider />

        <section className="flex flex-col items-center justify-center bg-white py-[60px] border-y border-[#ccc]">
          <FluidContainer>
            <div className="about-wrap flex flex-col items-center justify-center lg:px-[30px] lg:pb-[30px] 2xl:px-[70px] 2xl:pb-[40px] 4xl:px-[100px] 4xl:pb-[60px] ">
              <img
                src="/tg-icon.jpg"
                alt=""
                className=" w-[20%] animate-grow-shrink rounded-full border-[5px] border-caribbeangreen xl:w-[30%] 2xl:w-[20%] 4xl:w-[10%]"
              />
              <div className=" mb-[18px] mt-6 flex flex-col items-center 3xl:mb-[25px]">
                <h1 className="animate-fade-in-up text-center font-bold main_heading">
                  The Best Digital Marketing Company in UAE
                </h1>
                <Heading2 className="animate-fade-in-up text-center font-bold text-caribbeangreen  ">
                  An Incredible Intersection of Creativity and Tech
                </Heading2>
              </div>
              <Paragraph className="animate-fade-in-up text-center">
                A full service digital marketing platform that caters to every
                scope from marketing to the brand building along with a wide
                range of latest IT solutions. We are rated as USA’s best digital
                marketing agency for our swift deliveries and professionalism.
                We are a bunch of creative minds who think alike to make
                marketing goals and dreams come true. Our experts have over
                decades of industry experience as well as expertise. Ecommerce
                Inside devises strategies and methodologies that make your brand
                stand out among others. With complete hands-on experience in web
                development, design, brand building, content optimization. We’ll
                upscale your sales, digital presence, and leads. So what are you
                waiting for? Contact us today for a consultation on how we can
                help you with all your digital needs & make it count with the
                top digital marketing companies in the UAE.
              </Paragraph>
            </div>
            <div className=" flex flex-col items-center gap-10 md:flex-row">
              <CollisionButton
                variant="Dark"
                onClick={() => setModalActive(true)}
              >
                Let's Get Your Project Started
              </CollisionButton>
              
            </div>
          </FluidContainer>
        </section>

        <section className="mx-auto flex flex-col items-center justify-center bg-white ">
          <Container>
            <h2 className="pb-[15px] text-center text-[28px] font-bold lg:pb-[20px] 2xl:text-[28px] 2xl:leading-[34px] 3xl:text-[30px] 3xl:leading-[36px] 4xl:text-[34px] 4xl:leading-[38px] 5xl:text-[38px] 5xl:leading-[42px] 6xl:text-[42px] 6xl:leading-[48px] ">
              Ecommerce Inside Plans & Pricing
            </h2>
            <h4 className="animate-fade-in-up text-center font-poppins  leading-[20px] text-gray-500 sub_heading">
              Affordable Price Packages
            </h4>
          </Container>
          <ServicePackages />
        </section>

        <section className="   border-y border-[#ccc] bg-white py-[20px] lg:px-[20px] 2xl:py-[50px] 5xl:pb-[70px]">
          <ProjectSlider />
        </section>

        <section className=" flex flex-col items-center justify-center bg-white  ">
          {/* <div className="px-[15px]">
            
          </div> */}
          <Container>
            <div className="mx-auto lg:w-[80%]">
              <h3 className="pb-[5px] text-center   text-[#666] sub_heading ">
                Upscale and Leverage Brand Growth{" "}
              </h3>
              <h2 className="pb-[9px] text-center  font-extrabold text-[#1b1037] sec_heading ">
              {/* <h2 className="pb-[9px] text-center text-[22px] font-extrabold text-[#1b1037] lg:text-[30px] xl:text-[40px] "> */}
                With the Digital Marketing Company in USA{" "}
              </h2>
              <p className="sxl:text-[18px] text-center text-[13px] text-[#666] lg:text-[14px] xl:text-[16px] 4xl:text-[20px]">
                Allow us to take your brand to new heights with the ultra modern
                marketing strategies and improve your brand’s digital
                visibility. Our professionals with decades of experience and
                marketing expertise can change the game in a snap.{" "}
              </p>
            </div>
          </Container>
          <div className=" grid grid-cols-1  lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  4xl:grid-cols-4">
            <div className="services-card-slider xl:hidden">
              <ServicesCardsSlider data={ServicesData} />
            </div>
          </div>

          <div className="hidden xl:grid  xl:grid-cols-2 2xl:grid-cols-3  4xl:grid-cols-4">
            <div
              className={`flex h-[385px]  flex-col justify-center border bg-caribbeangreen  bg-center px-[15px] md:px-[50px]`}
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
                <a
                  href="#"
                  className="text-sm uppercase text-white hover:text-black"
                >
                  CHECK OUT OUR SERVICES HERE{" "}
                </a>
              </div>
            </div>
            {ServicesData.map((service, index) => (
              <ServicesCard service={service} key={index} />
            ))}
          </div>

            <div className=" container flex items-center justify-center py-[20px]">
              <h3 className="mx-auto flex items-center justify-center text-[16px]  font-extrabold text-darkblue xl:text-[25px] 4xl:text-[28px]">
                Hire{" "}
                <img
                  src="/service-cta-icon.png"
                  alt="cta icon"
                  className="w-[8%] animate-grow-shrink p-[8px] "
                />
                and Grow your Brand with your next Design/Development Project.
              </h3>
            </div>
        </section>

        <section className=" bg-[url('/combo_bg.jpg')] bg-cover bg-center bg-no-repeat py-[100px]">
          <div className=" container relative mx-auto lg:w-[80%]">
            <div className="combo_offer_row flex flex-col-reverse lg:pr-[50%]">
              <div className="combo_image absolute right-[4%] top-[50%] hidden max-w-[50%] -translate-y-2/4 lg:block">
                <img
                  src="/combo_offer.webp"
                  alt=""
                  className="h-auto max-w-[130%]"
                />
              </div>
              <div className="combo_offer_content">
                <h3 className="mb-[15px] text-[30px] font-bold text-white xl:text-[45px] leading-[1.2]">
                  Business Setup
                  <br /> All-in-One Package
                </h3>
                <p className=" mb-[10px] text-[16px] uppercase tracking-[0.5px] text-caribbeangreen xl:text-[22px] ">
                  WE UNDERSTAND WHAT’S BEST FOR YOUR BUSINESS
                </p>
                <p className="mb-[15px] text-[16px] text-white ">
                  Ecommerce Inside offers branding solutions to expand your
                  reach and establish an online presence. Our combo packages fit
                  for companies that strive for success & cover everything you
                  need to run your business successfully.
                </p>
                <div className="row links flex flex-wrap">
                  <div className="col-lg-6">
                    <ul className="mb-5 columns-1 text-white md:columns-2 md:text-[16px]">
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
                    <CollisionButton
                      variant="Dark"
                      onClick={() => setModalActive(true)}
                    >
                      Let's Get started
                    </CollisionButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Agencies />

        <Expertise />

        <GetStarted />

        <Testimonials />

        <Footer />

        <CopyRightBar />

        <MyModal />
      </main>
    </>
  );
};

export default Home;
