import React from "react";

const Testimonials = () => {
  return (
    <section className="main-trust-sec">
      <div className="main-testimonial-sec-container mx-auto px-[30px]">
        <div className="testimonial-heading items-center justify-center pt-[50px] text-center">
          <h3 className="py-[10px] text-[20px] font-bold text-[#1b1037] md:text-[26px] lg:text-[35]">
            Testimonials From Our Clients.
          </h3>
          <p className="text-[13px] text-[#666] md:text-[16px] lg:text-[18px]">
            Your Work Is Commendable, I Am Glad That I Accepted Your Offer Of
            Developing A Website For My Business. The Project Is Working Great
            And I Am Getting Daily Customers.
          </p>
        </div>

        <div className="testimonial-slider"></div>
      </div>
    </section>
  );
};

export default Testimonials;
