import React from "react";
import ContactForm from "~/components/ContactForm";
import CopyRightBar from "~/components/CopyRightBar";
import Footer from "~/components/Footer";
import Header from "~/components/Header/Header";
import ContactSlider from "~/components/Slider/ContactSlider";
import ThumbsSlider from "~/components/Slider/ThumbsSlider";

const contact = () => {
  return (
    <>
      <Header />
      <section className="pt-[130px]">
        <div className="contact-page flex flex-col items-center justify-center md:flex-row">
          <div className="contact-slider w-full md:w-[50%] bg-darkblue">
              {/* <ContactSlider /> */}
              <ThumbsSlider />
          </div>

          <div className="contact w-full px-[20px] py-[50px] md:w-[50%]">
            <div className="pb-[10px] md:pb-[15px] lg:pb-[30px] xl:pb-[50px]">
              <h2 className="mb-[10px] text-[40px] font-bold md:text-[35px] lg:text-[40px] xl:text-[50px]">
                Connect with Us
              </h2>
              <p className="text-[16px] text-[#666] lg:text-[18px] xl:text-[22px]">
                Interested in working together? Fill out the form below, our
                team of professionals will contact you to guide you the way
                forward.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <CopyRightBar />
    </>
  );
};

export default contact;
