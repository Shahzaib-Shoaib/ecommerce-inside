import { NextPage } from "next";
import ContactForm from "@/components/ContactForm";
import ContactSlider from "@/components/Sliders/ContactSlider";



const Contact: NextPage = () => {
  return (
    <div className="Contact-Page pt-[120px] bg-darkblue">
      <section className="overflow-hidden px-0 bg-white">
        <div className="flex flex-col items-center justify-center 3xl:flex-row 4xl:flex-row 5xl:flex-row 6xl:flex-row">
          <div className="contact_slider w-full bg-darkblue 3xl:w-1/2 4xl:w-1/2 5xl:w-1/2 6xl:w-1/2">
            <ContactSlider />
          </div>
          <div className="w-full  px-[20px] sm:mt-12 md:mt-12 lg:mt-12 xl:mt-12 2xl:mt-12 3xl:w-1/2 4xl:w-1/2 5xl:w-1/2 6xl:w-1/2 3xl:px-[35px] 4xl:px-[50px] 5xl:px-[60px] 6xl:px-[60px]">
            <h2 className="font-bold ">Connect With Us</h2>
            <p className="text-[#666]">
              Interested in working together? Fill out the form below, our team
              of professionals will contact you to guide you the way forward.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;