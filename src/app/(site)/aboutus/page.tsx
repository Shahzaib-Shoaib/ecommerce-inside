import { NextPage } from "next";
import Banner from "~/components/Banner";
import InfoSec from "~/components/InfoSec";
import AboutStrategySlider from "~/components/Sliders/AboutStrategySlider";
import Button from "~/components/ui/Button";
import InfoSecData from "~/data/InfoSecData";

export const metadata = {
  title: "Abouts US | Ecommerce Inside",
  description:
    "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
};

const AboutUs: NextPage = () => {



  return (
    <div className="About-Us-Page ">
      <Banner
        smallHeading={"About Us"}
        mainHeading={"Big Ideas Creative Team New Technology"}
        bgImg={"/images/about-banner.webp"}
        img={"/images/about-banner-right.webp"}
        desc={null}
      />

      <section className="overflow-hidden">
        <div className="div_container flex flex-col flex-wrap items-center justify-between gap-3 xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row 5xl:flex-row 6xl:flex-row">
          <img src="/images/about-review-1.webp" alt="" />
          <img src="/images/about-review-2.webp" alt="" />
          <img src="/images/about-review-3.webp" alt="" />
          <img src="/images/about-review-4.webp" alt="" />
        </div>
      </section>

      <section className="creativity-section">
        <div className="div_container">
          <div className="row flex flex-col gap-6 xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row 5xl:flex-row 6xl:flex-row">
            <div className="creativity_info flex flex-col  xl:max-w-[50%] 2xl:max-w-[50%] 3xl:max-w-[50%] 4xl:max-w-[50%] 5xl:max-w-[50%] 6xl:max-w-[50%]">
              <h2>Creativity meets performance.</h2>
              <p className="pt-5 text-[20px]">
                It’s a simple idea, a hard truth and ther day at work for us.
              </p>
              <p className="py-5 text-[#666]">
                We have a passionate and diverse team of developers, designers,
                branding experts, ghostwriters, copywriters, marketers &
                animators. It is hard to put us in a box, but one thing we all
                have in common is a drive to produce exceptional work that helps
                our clients reach the top.
              </p>
              <Button variant="Green"> Let's Get Started</Button>
            </div>

            <div className="creativity_img flex items-center justify-end">
              <img
                src="/images/about-creativity-img.webp"
                alt="About creativity image"
                className="xl:max-w-[80%] 2xl:max-w-[60%] 3xl:max-w-[60%] 4xl:max-w-[60%] 5xl:max-w-[60%] 6xl:max-w-[60%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="div_container mx-auto mb-4">
          <div className="flex flex-col 2xl:flex-row 3xl:flex-row 4xl:flex-row 5xl:flex-row 6xl:flex-row">
            <div className="flex flex-col 2xl:max-w-[50%]">
              <h3 className="text-caribbeangreen">Brand Strategy</h3>
              <h2 className="py-4">
                We Work Smarter, To Find Insights Faster.
              </h2>
            </div>
            <div className="desc 2xl:max-w-[50%]">
              <p className="text-[#666]">
                We have a team of professionals who makes brand strategies and
                helps you grow your brand and make business, with the help of
                our designers, developers, copywriters and animators. All our
                professionals are hardworking and dedicated to grow with you.
              </p>
            </div>
          </div>
          </div>



          <div className="grid grid-cols-12  justify-between pt-[40px] overflow-hidden">
          <div className="smarter-img hidden 2xl:block 3xl:block 4xl:block 5xl:block 6xl:block col-span-4">
              <img src="/images/about-smarter-img.webp" alt="smarter-img" />
            </div>

            <div className="card-slider-wrapper col-span-12 2xl:col-span-8 3xl:col-span-8 4xl:col-span-8 5xl:col-span-8 6xl:col-span-8">
              <AboutStrategySlider />
            </div>
          </div>

      </section>


      <InfoSec infocardData={InfoSecData} smallHeading={"We Deliver Our Best"} mainHeading={"Reason to Choose Us"} desc={"We are obliged to provide an incredible experience by giving high-quality eCommerce website design and development services. What makes us trustworthy partners? Here are the reasons!"} />






    </div>
  );
};

export default AboutUs;
